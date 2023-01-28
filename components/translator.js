const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {
    this.americanToBritishObj = {
      ...americanOnly,
      ...americanToBritishSpelling,
      ...americanToBritishTitles,
    };

    this.britishToAmericanObj = {
      ...britishOnly,
      ...Object.fromEntries(
        Object.entries(americanToBritishSpelling).map(([key, value]) => [
          value,
          key,
        ])
      ),
      ...Object.fromEntries(
        Object.entries(americanToBritishTitles).map(([key, value]) => [
          value,
          key,
        ])
      ),
    };
  }

  validateText(text) {
    if (text.length === 0) {
      return { result: false, errorMessage: 'No text to translate' };
    }

    return { result: true };
  }

  validateLocale(locale) {
    if (!/^(american-to-british|british-to-american)$/.test(locale)) {
      return { result: false, errorMessage: 'Invalid value for locale field' };
    }

    return { result: true };
  }

  highlightWords(text, words) {
    return text.replace(
      new RegExp(words.join('|'), 'g'),
      (match) => `<span class="highlight">${match}</span>`
    );
  }

  translate(locale, text) {
    const americanToBritish = locale === 'american-to-british';
    const translationObject = americanToBritish
      ? 'americanToBritishObj'
      : 'britishToAmericanObj';
    const separationMarkMap = {
      input: americanToBritish ? ':' : '.',
      output: !americanToBritish ? ':' : '.',
    };
    const translatedWords = [];
    let translation = text;
    let highlightedTranslation = text;

    translation = translation.replace(
      new RegExp(`\\d{1,2}\\${separationMarkMap.input}\\d{1,2}`, 'g'),
      (match) => {
        const translatedTime = match.replace(
          separationMarkMap.input,
          separationMarkMap.output
        );
        translatedWords.push(translatedTime);
        return translatedTime;
      }
    );

    translation = translation.replace(
      new RegExp(
        `(${Object.keys(this[translationObject]).join('|')})(?=[^a-zA-z\\-])`,
        'gi'
      ),
      (match) => {
        let translatedWord = this[translationObject][match.toLowerCase()];
        if (match[0] === match[0].toUpperCase()) {
          translatedWord = `${translatedWord[0].toUpperCase()}${translatedWord.slice(
            1
          )}`;
        }
        translatedWords.push(translatedWord);
        return translatedWord;
      }
    );

    if (translatedWords.length) {
      highlightedTranslation = this.highlightWords(
        translation,
        translatedWords
      );
    }

    return {
      text,
      translation: translation,
      translationWithHighlight: highlightedTranslation,
    };
  }
}

module.exports = Translator;
