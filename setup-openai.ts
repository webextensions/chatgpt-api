import 'dotenv/config';

import OpenAI from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    // By default also the npm package 'openai' uses process.env["OPENAI_API_KEY"]
    apiKey: OPENAI_API_KEY
});

export { openai };
