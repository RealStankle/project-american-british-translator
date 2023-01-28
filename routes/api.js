'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate').post((req, res) => {
    const { text: inputText, locale } = req.body;

    if (inputText === undefined || locale === undefined) {
      return res.json({ error: 'Required field(s) missing' });
    }

    const textValidation = translator.validateText(inputText);
    const localeValidation = translator.validateLocale(locale);

    if (!textValidation.result || !localeValidation.result) {
      return res.json({
        error: textValidation.errorMessage || localeValidation.errorMessage,
      });
    }

    const { text, translation, translationWithHighlight } =
      translator.translate(locale, inputText);

    if (text === translation) {
      return res.json({
        text,
        translation: 'Everything looks good to me!',
      });
    }

    res.json({
      text,
      translation: translationWithHighlight,
    });
  });
};
