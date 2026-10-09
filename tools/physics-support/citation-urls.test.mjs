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

test('coverage failed_url_attempts preserve Griffiths history without reactivating the dead path', () => {
  // Mirrors the native Batch 24 failure: two active records use the corrected
  // path, while their twelve failed fetch records retain the old 404 path.
  const document = 'David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf';
  const base = 'https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/';
  const active = `${base}Physics/Physics/Electrodynamics/${document}`;
  const failed = `${base}Physics/Electrodynamics/${document}`;
  const value = JSON.parse(JSON.stringify({ pages: [
    { page: 'em-maxwell-integral-and-constraints' },
    { page: 'em-maxwell-integral-and-constraints-examples' },
  ].map(page => ({ ...page, sources: [{
    url: active,
    fetch_verified: { bytes: 13484424, sha256_16: 'ab7b67a3f6d60049', kind: 'pdf', pages: 596 },
    failed_url_attempts: Array.from({ length: 6 }, (_, i) => ({
      url: failed, at: `2026-10-08T19:33:4${i}.000Z`, outcome: 'HTTP 404',
    })),
  }] })) }));
  const before = JSON.stringify(value);
  assert.equal(value.pages.flatMap(page => page.sources[0].failed_url_attempts).length, 12);
  assert.deepEqual([...citationUrls(value, { coverage: true })], [active]);
  assert.deepEqual([...citationUrls(value)], [active, failed], 'noncoverage traversal remains unrestricted');
  assert.equal(JSON.stringify(value), before, 'collecting citations must not alter preserved history');
  value.pages[0].sources.push({ url: failed });
  assert.deepEqual([...citationUrls(value, { coverage: true })], [active, failed],
    'a genuinely active dead source must still be checked');
});
