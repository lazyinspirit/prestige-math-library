import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { frontmatterList } from './frontmatter-list.mjs';
import { REPO, yamlCandidates } from './paths.mjs';

test('reads inline and multiline inline scalar lists', () => {
  assert.deepEqual(frontmatterList('items: [a, "b", \'c\']\nstatus: draft', 'items'), ['a', 'b', 'c']);
  assert.deepEqual(frontmatterList('items: [\n  a,\n  b\n]\nstatus: draft', 'items'), ['a', 'b']);
});

test('reads block scalar lists and stops at the next top-level key', () => {
  const fm = [
    'page: demo',
    'items:',
    '  - def-first',
    '  - "lem-second"',
    "  - 'thm-third'",
    '',
    'examples:',
    '  - ex-not-an-item',
  ].join('\n');
  assert.deepEqual(frontmatterList(fm, 'items'), ['def-first', 'lem-second', 'thm-third']);
  assert.deepEqual(frontmatterList(fm, 'examples'), ['ex-not-an-item']);
});

test('reads indentationless blocks and flow arrays beginning on the next line', () => {
  assert.deepEqual(frontmatterList('items:\n- def-first\n- lem-second\nstatus: draft', 'items'),
    ['def-first', 'lem-second']);
  assert.deepEqual(frontmatterList('items:\n  [def-first,\n   lem-second]\nstatus: draft', 'items'),
    ['def-first', 'lem-second']);
});

test('honors comments and never reads a list from the Markdown body', () => {
  assert.deepEqual(frontmatterList('items: # inventory\n- def-first # first\n- "lem-#-second" # second', 'items'),
    ['def-first', 'lem-#-second']);
  assert.deepEqual(frontmatterList('---\nid: thm-demo\n---\nitems: [not-frontmatter]\n', 'items'), []);
});

test('returns empty for absent, empty, or malformed lists', () => {
  assert.deepEqual(frontmatterList('items: []\n', 'items'), []);
  assert.deepEqual(frontmatterList('status: draft\n', 'items'), []);
  assert.deepEqual(frontmatterList('items:\n  nested: value\n', 'items'), []);
});

test('matches the renderer YAML parser for every repository ID list', () => {
  const require = createRequire(import.meta.url);
  let YAML;
  for (const candidate of yamlCandidates()) {
    try {
      YAML = require(candidate);
      break;
    } catch { /* try the next renderer-compatible installation */ }
  }
  assert.ok(YAML, 'renderer-compatible YAML parser is available');

  const files = [];
  const walk = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path);
    }
  };
  walk(join(REPO, 'items'));
  walk(join(REPO, 'library'));

  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    const fm = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
    if (fm == null) continue;
    const parsed = YAML.parse(fm) ?? {};
    const keys = file.startsWith(join(REPO, 'items'))
      ? ['deps', 'justified_by', 'external_refs', 'forward_refs', 'aliases']
      : ['items', 'examples'];
    for (const key of keys) {
      const expected = Array.isArray(parsed[key]) ? parsed[key].map(String) : [];
      assert.deepEqual(frontmatterList(fm, key), expected, `${file}: ${key}`);
    }
  }
});
