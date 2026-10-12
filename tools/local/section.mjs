#!/usr/bin/env node
// Local helper (not a repo gate): print a named section of an item file.
// usage: node tools/local/section.mjs items/<id>.md Statement [Definition|Remark|Example|Statement refuted]
import { readFileSync } from 'node:fs';
import { sectionText, splitFrontmatter } from '../facts-block.mjs';
const [file, heading = 'Statement'] = process.argv.slice(2);
const { fm, body } = splitFrontmatter(readFileSync(file, 'utf8'));
if (process.argv.includes('--fm')) console.log(fm);
const text = sectionText(body, heading);
if (!text) { console.error(`(no section ${heading})`); process.exit(1); }
console.log(text.trim());
