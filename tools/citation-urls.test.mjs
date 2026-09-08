import test from 'node:test';
import assert from 'node:assert/strict';
import { citationUrls } from './citation-urls.mjs';

test('decoded JSON newlines cannot become URL path suffixes', () => {
  const value = JSON.parse(JSON.stringify({ note: 'https://example.org/book.pdf\nERROR next line' }));
  assert.deepEqual([...citationUrls(value)], ['https://example.org/book.pdf']);
});

test('coverage checks and recovery attempts are not citations', () => {
  const value = {
    pages: [{ sources: [{ url: 'https://example.org/book.pdf',
      recovery_attempts: [{ url: 'https://dead.example.org/book.pdf' }] }] }],
    checks: [{ output: 'FAIL https://stale.example.org/book.pdf' }],
    note: 'Also consult https://example.org/notes.pdf',
  };
  assert.deepEqual([...citationUrls(value, { coverage: true })],
    ['https://example.org/book.pdf', 'https://example.org/notes.pdf']);
});

test('raw serialized escapes are delimiters and parentheses remain intact', () => {
  assert.deepEqual([...citationUrls('https://example.org/book.pdf\\nERROR https://example.org/Topic_(math).')],
    ['https://example.org/book.pdf', 'https://example.org/Topic_(math)']);
});

test('coverage historical snapshots do not reactivate rejected source candidates', () => {
  const archived = 'https://old.example.org/rejected.pdf';
  const active = 'https://example.org/active.pdf';
  const value = {
    pages: [{ sources: [{ url: active }] }],
    historical_reharvest_before_sourcefetch55_sync: {
      candidate_searches: [{ url: archived, status: 'not admitted as a replacement' }],
    },
    historical_checks_before_sourcefetch55_sync: { output: `FAIL ${archived}` },
  };
  assert.deepEqual([...citationUrls(value, { coverage: true })], [active]);
  assert.deepEqual([...citationUrls(value)], [active, archived]);
  value.pages[0].sources.push({ url: archived });
  assert.deepEqual([...citationUrls(value, { coverage: true })], [active, archived]);
});
