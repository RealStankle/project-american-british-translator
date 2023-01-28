const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
  test('it should correctly translate "Mangoes are my favorite fruit." to British English', () => {
    const input = 'Mangoes are my favorite fruit.';
    const expectedOutput = 'Mangoes are my favourite fruit.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "I ate yogurt for breakfast." to British English', () => {
    const input = 'I ate yogurt for breakfast.';
    const expectedOutput = 'I ate yoghurt for breakfast.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "We had a party at my friend\'s condo." to British English', () => {
    const input = "We had a party at my friend's condo.";
    const expectedOutput = "We had a party at my friend's flat.";
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "Can you toss this in the trashcan for me?" to British English', () => {
    const input = 'Can you toss this in the trashcan for me?';
    const expectedOutput = 'Can you toss this in the bin for me?';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "The parking lot was full." to British English', () => {
    const input = 'The parking lot was full.';
    const expectedOutput = 'The car park was full.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "Like a high tech Rube Goldberg machine." to British English', () => {
    const input = 'Like a high tech Rube Goldberg machine.';
    const expectedOutput = 'Like a high tech Heath Robinson device.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "To play hooky means to skip class or work." to British English', () => {
    const input = 'To play hooky means to skip class or work.';
    const expectedOutput = 'To bunk off means to skip class or work.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "No Mr. Bond, I expect you to die." to British English', () => {
    const input = 'No Mr. Bond, I expect you to die.';
    const expectedOutput = 'No Mr Bond, I expect you to die.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "Dr. Grosh will see you now." to British English', () => {
    const input = 'Dr. Grosh will see you now.';
    const expectedOutput = 'Dr Grosh will see you now.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "Lunch is at 12:15 today." to British English', () => {
    const input = 'Lunch is at 12:15 today.';
    const expectedOutput = 'Lunch is at 12.15 today.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "We watched the footie match for a while." to British English', () => {
    const input = 'We watched the footie match for a while.';
    const expectedOutput = 'We watched the soccer match for a while.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "Paracetamol takes up to an hour to work." to British English', () => {
    const input = 'Paracetamol takes up to an hour to work.';
    const expectedOutput = 'Tylenol takes up to an hour to work.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "First, caramelise the onions." to British English', () => {
    const input = 'First, caramelise the onions.';
    const expectedOutput = 'First, caramelize the onions.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "I spent the bank holiday at the funfair." to British English', () => {
    const input = 'I spent the bank holiday at the funfair.';
    const expectedOutput = 'I spent the public holiday at the carnival.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "I had a bicky then went to the chippy." to British English', () => {
    const input = 'I had a bicky then went to the chippy.';
    const expectedOutput =
      'I had a cookie then went to the fish-and-chip shop.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "I\'ve just got bits and bobs in my bum bag." to British English', () => {
    const input = "I've just got bits and bobs in my bum bag.";
    const expectedOutput = "I've just got odds and ends in my fanny pack.";
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "The car boot sale at Boxted Airfield was called off." to British English', () => {
    const input = 'The car boot sale at Boxted Airfield was called off.';
    const expectedOutput = 'The swap meet at Boxted Airfield was called off.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "Have you met Mrs Kalyani?" to British English', () => {
    const input = 'Have you met Mrs Kalyani?';
    const expectedOutput = 'Have you met Mrs. Kalyani?';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "Prof Joyner of King\'s College, London." to British English', () => {
    const input = "Prof Joyner of King's College, London.";
    const expectedOutput = "Prof. Joyner of King's College, London.";
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly translate "Tea time is usually around 4 or 4.30." to British English', () => {
    const input = 'Tea time is usually around 4 or 4.30.';
    const expectedOutput = 'Tea time is usually around 4 or 4:30.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(translation.translation, expectedOutput);
  });

  test('it should correctly highlight translation in "Mangoes are my favorite fruit."', () => {
    const input = 'Mangoes are my favorite fruit.';
    const expectedOutputWithHighlight =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(
      translation.translationWithHighlight,
      expectedOutputWithHighlight
    );
  });

  test('it should correctly highlight translation in "I ate yogurt for breakfast."', () => {
    const input = 'I ate yogurt for breakfast.';
    const expectedOutputWithHighlight =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';
    const translation = translator.translate('american-to-british', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(
      translation.translationWithHighlight,
      expectedOutputWithHighlight
    );
  });

  test('it should correctly highlight translation in "We watched the footie match for a while."', () => {
    const input = 'We watched the footie match for a while.';
    const expectedOutputWithHighlight =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(
      translation.translationWithHighlight,
      expectedOutputWithHighlight
    );
  });

  test('it should correctly highlight translation in "Paracetamol takes up to an hour to work."', () => {
    const input = 'Paracetamol takes up to an hour to work.';
    const expectedOutputWithHighlight =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    const translation = translator.translate('british-to-american', input);
    assert.strictEqual(translation.text, input);
    assert.strictEqual(
      translation.translationWithHighlight,
      expectedOutputWithHighlight
    );
  });
});
