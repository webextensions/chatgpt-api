#!/usr/bin/env ./node_modules/.bin/tsx

import util from 'node:util';

// @ts-ignore
import { openai } from './setup-openai.ts';

async function main() {
    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Say this is a test' }]
    });

    console.log(
        util.inspect(completion, {
            colors: true,
            depth: Infinity
        })
    );
}

(async () => {
    console.log('\nRunning ...\n');
    await main();
    console.log('\n... Done.\n');
})();
