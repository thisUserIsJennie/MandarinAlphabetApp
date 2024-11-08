const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

/**
 * Sends request to synthesize speech for a single Zhuyin character and writes
 * the audio file to the specified location
 * @param {Char/String} zhuyinChar the Zhuyin character to synthesize speech for
 */
async function convertCharToSpeech(zhuyinChar) {
  try {
    //NOTE: UPDATE ME BEFORE USING THIS FUNCTION!
    const outputFile = 'C:\\' + zhuyinChar + '.mp3';

    const request = {
      input: { text: zhuyinChar },
      voice: { languageCode: 'cmn-TW', ssmlGender: 'FEMALE' },
      audioConfig: { audioEncoding: 'MP3' },
    };
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputFile, response.audioContent, 'binary');
    console.log(`Audio content written to file: ${outputFile}`);
  } catch (exception) {
    console.log(exception);
  }
}

/**
 * Generates audio files for every Zhuyin character
 */
function generateAudioForAllZhuyin() {
  const Zhuyin = [
    //Initials
    'ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ',
    'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ',
    //Middles
    '一', 'ㄨ', 'ㄩ',
    //Finals
    'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'
  ];

  for (key in Zhuyin) {
    convertCharToSpeech(key);
  }
}

// generateAudioForAllZhuyin();