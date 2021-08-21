
import { ParsedRequest } from './types';
const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

function getCss() {
    return `
    body {
        background: #ccc;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo-wrapper .emoji {
        width: 1024px;
        height: 1024px;
    }`;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { emoji } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
        <div>
            <div class="logo-wrapper">
                ${emojify(emoji === "" ? "📭" : emoji)}
            </div>
        </div>
    </body>
</html>`;
}
