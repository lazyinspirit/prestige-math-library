# frontier-29 — group Alpha `g` step-3 recheck

I checked the current `frontier-29` bytes against
`research/frontier-29-alpha-g-step3-scaffold-review.md`, the `## Step-3 fix pass`
sections in `research/frontier-29-batch-18.notes.md` and
`research/frontier-29-batch-19.notes.md`, the live batch manifests, the live
coverage ledgers, the current `research/plan-spec.json`, and the controlling
computability-track plan blocks. The current `plan-spec` entries for these four
pages remain pre-splice stubs with empty `items` arrays, so author-readiness was
re-checked from the batch manifests and coverage rather than from unspliced
plan-item lists.

- `G18-1` — `confirmed`: `research/frontier-29-batch-18.coverage.json` now carries the Stephen A. Cook `1971` University of Toronto PDF source row at `https://www.cs.utoronto.ca/~sacook/homepage/1971.pdf`, alongside the MIT note index and MIT Lecture 16 rows for `the-cook-levin-theorem`. The current manifest still gives that A/B pair `16` A items and `3` B items, the focused manifest-to-coverage audit finds `0` uncovered A-page items, `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-18.coverage.json research/frontier-29-batch-19.coverage.json` passes with `4` page(s), `139` harvested result(s), `0` error(s), and `0` warning(s), and `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-18.coverage.json` passes with `7/7` source(s) fetch-verified. No remaining block.
- `G19-1` — `confirmed`: `research/frontier-29-batch-19.coverage.json` still carries the missing canonical carrier `fs-savitch-stores-the-whole-configuration-graph` for `space-complexity-savitch-and-tqbf`. The current manifest still gives that A/B pair `17` A items and `3` B items, the focused manifest-to-coverage audit finds `0` uncovered A-page items, and the same Wednesday, September 2, 2026 checks pass with `source-fetch-check: 6/6 source(s) fetch-verified` for batch `19`. No remaining block.
- `G19-2` — `confirmed`: `research/frontier-29-batch-19.coverage.json` still carries the four repaired canonical carriers `lem-majority-error-bound-from-chebyshev`, `thm-bpp-amplification-to-inverse-polynomial-error`, `thm-schwartz-zippel-lemma`, and `fs-pp-has-bounded-error-away-from-one-half` for `randomized-complexity-and-amplification`. The current manifest still gives that A/B pair `17` A items and `3` B items, the focused manifest-to-coverage audit finds `0` uncovered A-page items, and the shared checklist/fetch checks still pass on current bytes. No remaining block.

Scope receipts were refreshed on Wednesday, September 2, 2026 with
`node tools/scope-decisions.mjs refresh --run frontier-29 --group g`; the
refresh reports `15` decline(s) and `0` pending rows. The follow-up
`node tools/scope-decisions.mjs check --run frontier-29 --group g` passes with
`15` current decline(s) and `0` error(s), so no scope-decision row remains to be
resolved before Step 4.

The verified machine verdicts in `research/frontier-29-alpha-g-step3-verdicts.json`
remain correct on current Wednesday, September 2, 2026 bytes as four
`sufficient` entries for:

- `computable-reductions-and-rices-theorem`
- `the-cook-levin-theorem`
- `space-complexity-savitch-and-tqbf`
- `randomized-complexity-and-amplification`

No verdict downgrade is owed.
