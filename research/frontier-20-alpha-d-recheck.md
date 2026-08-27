# frontier-20 — Alpha group `d` — Step 3 recheck

Group `d` covers batches `5`, `8`, and `10`. I re-read
`research/frontier-20-alpha-d-step3-scaffold-review.md`, the `## Step-3 fix pass`
sections in `research/frontier-20-batch-{5,8,10}.notes.md`, the current
`research/frontier-20-batch-{5,8,10}.pages.json` manifests, the current
`research/frontier-20-batch-{5,8,10}.coverage.json` ledgers, the live
group-`d` scope ledger, and the governing plan entries in
`research/plan-spec.json`,
`research/plan-number-theory-track.md`,
`research/plan-combinatorics-and-categories.md`, and
`research/plan-category-theory-track.md`. The dispositions below are from the
current bytes, not from the earlier scaffold-review prose.

- `regular-continued-fractions-and-diophantine-approximation` — confirmed.
  The scaffold review issued no separate batch-5 finding id beyond the page
  verdict. The current manifest still matches NT-7 at `19` A items and `8` B
  items, the current coverage still passes `coverage-checklist`, and the current
  batch manifest still has no unresolved or same-page out-of-order dependency.
  The step-3 review's `sufficient` verdict remains correct on disk.

- `49b5f5be7047cac6701264b38cfd690c003b7a3789b470e228f138bf5ce699e3` —
  confirmed. The Flajolet-Sedgewick alignment branch is still out of scope for
  the enriched `21`-item CB-7 route, no current manifest item consumes it, and
  the `stands` decision in
  `research/frontier-20-alpha-d-scope-decisions.json` still matches the current
  coverage row.

- `ccc37723720e582b3f8c17a78fda9505337f71f7c9888a9fe533adcf11f4e86d` —
  confirmed. MIT Theorem 6 remains the rook-placement branch, the current A
  page still lands exactly at the enriched `21`-item target, and no in-closure
  Ferrers-board consumer has appeared. The current `stands` decision is still
  exact.

- `384b182ca4b92ed85890011a82f4ab228f83ae855bc7404f2687f5374a4c6021` —
  confirmed. MIT Theorem 10 remains the noncrossing/nonnesting branch, and the
  current CB-7 route still closes without importing that later Catalan/pattern
  material. The current `stands` decision is still exact.

- `6eb24a1c5162539676f08d015375a9e0675e7ae2855c5fb5de4767a784f98af8` —
  confirmed. The deferment of Nguyen-Scott-Seymour §5 still matches the live
  design split: row `407/408` owns blockades/combs/patterns/sparse orientations
  plus source lemmas `2.3` and `2.6`, while row `423/424` owns the later
  iterative comb-extraction lemmas. The current `stands` decision remains exact.

- `coverage-no-primary-source [blockades-combs-and-pattern-graphs]` —
  confirmed repaired. `research/frontier-20-batch-8.coverage.json` now carries
  Tung H. Nguyen's notes as a `lecture-notes` source for blockade conventions
  and directional sparsity before Theorem `3.4`, so the prior non-paper-depth
  blocker recorded in the scaffold review is no longer live. The current
  coverage gate passes on disk.

- `90cad5711400a4d712f79149ef3bfd065728df832152f4c3d59ab0b466f5598c` —
  resolved as `stands`. `node tools/scope-decisions.mjs refresh --run frontier-20 --group d`
  introduced this pending row from the new Nguyen notes source. On current plan
  and coverage evidence, Theorem `3.4` is still outside the narrow page-407
  gateway package and belongs with the later iterative sparsification route, so
  the out-of-scope disposition stands. The scope ledger now checks cleanly.

- `preadditive-and-additive-categories-and-biproducts` — confirmed.
  The scaffold review issued no separate batch-10 finding id beyond the page
  verdict. The current manifest still lands at the `60`-item A-page ceiling
  with an `8`-item B page, the current coverage still passes
  `coverage-checklist`, and the current scope-decision rows for deferred and
  out-of-scope source material all remain exact. The step-3 review's
  `sufficient` verdict remains correct on disk.

## Pair verdicts

- `regular-continued-fractions-and-diophantine-approximation` — **sufficient**.
- `set-partitions-stirling-numbers-and-exponential-generating-functions` —
  **sufficient**.
- `blockades-combs-and-pattern-graphs` — **sufficient**.
- `preadditive-and-additive-categories-and-biproducts` — **sufficient**.

## Checks run on Wednesday, August 26, 2026

- `node tools/scope-decisions.mjs refresh --run frontier-20 --group d` —
  `scope-decisions: d: 15 decline(s), 1 pending`.
- `node tools/scope-decisions.mjs check --run frontier-20 --group d` after
  resolving the new Nguyen row —
  `scope-decisions: 15 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-20-batch-5.coverage.json --require-destination`
  — `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-20-batch-8.coverage.json --require-destination`
  — `coverage-checklist: 2 page(s), 32 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-20-batch-10.coverage.json --require-destination`
  — `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`.
- Owned-batch dependency audit over `research/frontier-20-batch-{5,8,10}.pages.json`
  — no unresolved deps and no same-page out-of-order deps.
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-5.pages.json research/frontier-20-batch-8.pages.json research/frontier-20-batch-10.pages.json`
  — `content-policy: 149 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed; only the
  existing repository-wide `redundant-prereq` advisories remain.

No group-`d` Step-3 scaffold finding remains open on the current bytes.
