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


test('known retrieval history cannot reactivate retired candidates, but active references remain', () => {
  const dead = 'https://old.example.org/retired.pdf';
  const drive = 'https://drive.google.com/uc?export=download';
  const active = 'https://example.org/current.pdf';
  const keys = ['source_resolution_history', 'source_search_history', 'retrieval_history',
    'manual_retrieval_history', 'source_attempts_not_harvested'];
  for (const key of keys) {
    const coverage = {
      pages: [{ sources: [{ url: active, [key]: `Prior attempt ${dead}` }] }],
      [key]: [{ url: drive }],
    };
    assert.deepEqual([...citationUrls(coverage, { coverage: true })], [active], key);
    assert.deepEqual([...citationUrls(coverage)], [active, dead, drive], key);
    // A diagnostic occurrence never exempts the same URL when actively cited.
    coverage.pages[0].sources.push({ url: dead });
    assert.deepEqual([...citationUrls(coverage, { coverage: true })], [active, dead], key);
  }
});

test('active locators, harvested contents, references and ordinary notes remain citation subjects', () => {
  const urls = ['https://doi.org/10.1093/oso/9780198841319.001.0001',
    'https://example.org/named-theorem.pdf', 'https://example.org/reference.pdf',
    'https://example.org/notes.pdf'];
  const coverage = { pages: [{ sources: [{ url: 'https://example.org/current.pdf',
    locator: `Official publication record: ${urls[0]}.`,
    contents: [{ name: `Theorem in ${urls[1]}` }],
    references: [{ url: urls[2] }],
    note: `Also consult ${urls[3]}` }] }] };
  assert.deepEqual([...citationUrls(coverage, { coverage: true })],
    ['https://example.org/current.pdf', ...urls]);
});
