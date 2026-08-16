import { writeFileSync } from 'node:fs';
writeFileSync('research/frontier-15-refuters-b/alpha-b-url-row.json', JSON.stringify([{
  defect_id: 'frontier-15-B41',
  run: 'frontier-15',
  at: '2026-08-17',
  class: 'richness',
  subclass: 'unsourced-locator',
  severity: 'nonfatal',
  location: 'coverage-row',
  subject: 'rem-plane-star-shaped-and-convex-dictionary, Lebl ca.pdf archive snapshot',
  batch: '6',
  caught_at_stage: '6b-adjudicate',
  caught_by_role: 'group-alpha',
  introduced_at_stage: 'unknown',
  introduced_by_role: 'beta',
  disposition: 'open',
  repair_cost: 'none',
  subclass_note: 'url-sweep --recover --fail-on-dead over batches 4-6 returns 16/17 live; the failure is https://web.archive.org/web/20260108042400if_/https://math.okstate.edu/people/lebl/osu5283-s20/ca.pdf, HTTP 503, with the sweep reporting no archived snapshot under any host variant. Alpha re-tested by hand: the archive root answers 200 while that snapshot still answers 503, and the original host math.okstate.edu times out entirely (curl exit 28, no HTTP status at all). That is a host-side outage plus an archive-side 503, not a 404 with an empty index, so under RECOVER BEFORE REPLACE the evidence does not justify re-sourcing — replacing a recoverable source costs a re-harvest and rewrites every backed item provenance. Left OPEN rather than repaired. The citation is the second of two sources on that Remark and the Tang-Kai Lee source backing the same content is live, so no item loses its backing. Must be re-swept before publish; if it is still dead when archive.org is demonstrably healthy, it is then a genuine re-source.',
  prevention: { kind: 'mechanical', ref: 'url-sweep cannot distinguish a transient archive 503 from a genuinely absent snapshot; a retry-with-backoff plus an archive-health probe would separate the two' },
  adjudication_ref: ['Alpha-b 6b: nonfatal, left open for a pre-publish re-sweep'],
  evidence: [
    { path: 'research/frontier-15-alpha-b-url-sweep.json', anchor: 'FAIL 503' },
    { path: 'items/rem-plane-star-shaped-and-convex-dictionary.md', anchor: 'sources.references' },
  ],
  source: 'alpha-b-6b',
}], null, 2) + '\n');
console.log('written');
