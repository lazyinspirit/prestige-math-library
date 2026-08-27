# frontier-20 · Alpha-d · step-3 scaffold review

Reviewed on Wednesday, August 26, 2026 for group `d` (batches `5`, `8`, and
`10`; A pages `regular-continued-fractions-and-diophantine-approximation`,
`set-partitions-stirling-numbers-and-exponential-generating-functions`,
`blockades-combs-and-pattern-graphs`, and
`preadditive-and-additive-categories-and-biproducts`).

Read together for every owned pair:

- `research/frontier-20-batch-{5,8,10}.pages.json`
- `research/frontier-20-batch-{5,8,10}.coverage.json`
- `research/frontier-20-batch-{5,8,10}.notes.md`
- `research/frontier-20-beta-{5,8,10}.task.md`
- `research/plan-spec.json`
- the governing design sections:
  - `research/plan-number-theory-track.md` NT-7 at lines 746-845
  - `research/plan-combinatorics-and-categories.md` CB-7 at lines 1596-1641
    and the enriched amendment at lines 4776-4825
  - `research/plan-combinatorics-and-categories.md` row 407/408 at line 3903
  - `research/plan-category-theory-track.md` MA-7 at lines 1582-1708

Live checks run in this dispatch:

- `node tools/scope-decisions.mjs refresh --run frontier-20 --group d`
- `node tools/scope-decisions.mjs check --run frontier-20 --group d`
  - result: `14 current decline(s), 0 error(s)`
- a local dependency/order audit across batches 5, 8, and 10
  - result: no unresolved item deps and no same-page out-of-order deps
- `node tools/coverage-checklist.mjs research/frontier-20-batch-5.coverage.json --require-destination`
  - result: pass (`1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`)
- `node tools/coverage-checklist.mjs research/frontier-20-batch-8.coverage.json --require-destination`
  - result: fail (`coverage-no-primary-source [blockades-combs-and-pattern-graphs]`)
- `node tools/coverage-checklist.mjs research/frontier-20-batch-10.coverage.json --require-destination`
  - result: pass (`1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`)

## In-scope repair made here

I corrected one false scaffold claim in owned batch-8 content:

- `research/frontier-20-batch-8.coverage.json` had labeled
  `https://arxiv.org/html/2312.15333v2` ("Induced subgraph density. VII. The
  five-vertex path") as `lecture-notes`. It is a paper, and I changed the
  source kind to `paper`.
- `research/frontier-20-batch-8.notes.md` now records the resulting live
  blocker explicitly: the blockades pair is paper-backed only, so the current
  coverage fails the primary-source rule honestly.

That honesty repair did not change any item id, dependency, destination, or
deferred row; it only exposed the real source-depth state already described in
the notes.

## Pair verdicts

### `regular-continued-fractions-and-diophantine-approximation`

Verdict: `sufficient`.

Evidence:

- The A/B split matches the NT-7 design exactly at `19` A items and `8` B
  items, with the designed low-anchor route preserved: inline integer-part
  existence, direct convergence from completeness, then best-approximation and
  quadratic-irrational periodicity.
- The source stack is deep enough on current disk state: Hackman and Stein are
  textbook treatments, with the approximation and periodic notes as additional
  support.
- The spec/design prerequisite mismatch is already recorded in the batch notes,
  but the current item-level closure is mathematically sufficient for authoring
  and the manifest audit found no unresolved or forward same-page dependency.

### `set-partitions-stirling-numbers-and-exponential-generating-functions`

Verdict: `sufficient`.

Evidence:

- The enriched CB-7 amendment is the controlling design, and the current A page
  lands exactly on its `21`-item target with the labelled symbolic-method,
  Dobinski, involution/ordered-Bell/Lah enrichments, and Touchard congruence.
- The source stack satisfies the standing depth rule independently of the
  blockades issue in the same batch: Flajolet-Sedgewick, Wilf, and MIT 18.212
  give the needed non-paper backing.
- The three current out-of-scope rows (`alignment` material; MIT `Theorem 6`;
  MIT `Theorem 10`) remain exact `stands` decisions in
  `research/frontier-20-alpha-d-scope-decisions.json`; none is needed to close
  the current Stirling/EGF route.

### `blockades-combs-and-pattern-graphs`

Verdict: `insufficient`.

Exact missing result/source:

- Missing source depth for the blockade vocabulary and gateway source route now
  carried by paper-only rows:
  - Nguyen-Scott-Seymour, `Theorem 7.4`
  - Chudnovsky-Scott-Seymour-Spirkl, `§5 Blockades`
  - Huang-Ju-Zhou, `Lemma 2.3` and `Lemma 2.8`
- Missing qualifying primary backing of kind
  `textbook` / `monograph` / `lecture-notes` / `course-notes` / `survey`.

Why this is insufficient now:

- After the source-kind honesty repair above, the live command
  `node tools/coverage-checklist.mjs research/frontier-20-batch-8.coverage.json --require-destination`
  fails with
  `coverage-no-primary-source [blockades-combs-and-pattern-graphs] ... no source of kind textbook/monograph/lecture-notes/course-notes/survey`.
- The manifest route itself is structurally clean: `11` A items, `9` B items,
  no unresolved deps, and the comb-extraction deferment still lands exactly on
  page `423` `iterative-restriction-and-comb-extraction-lemmas`.
- The blocker is therefore not mathematical closure inside the manifest; it is
  the missing qualifying primary source for this pair under the standing step-1
  source rule.

### `preadditive-and-additive-categories-and-biproducts`

Verdict: `sufficient`.

Evidence:

- The current A page lands exactly at the `60`-item ceiling and follows the
  MA-7 thesis faithfully: additivity as forced enrichment, matrix calculus on
  an A page, then kernels/equalizers and idempotent completion.
- The source stack is sufficient on current disk state: the live coverage file
  passes `coverage-checklist`, and the notes' Mac Lane/Weibel/Freyd/Mitchell
  comparison is implemented through an open-source harvest plus recorded design
  traps.
- The current deferred/out-of-scope rows all stand cleanly: the image/coimage
  package and `Mod_A`-is-abelian material defer to
  `abelian-categories` at order `365.015`, and the remaining example/criterion
  rows are genuine non-closure extras rather than missing prerequisites.

## Scope-decision receipt

`research/frontier-20-alpha-d-scope-decisions.json` is current after the batch-8
coverage repair. All `14` current decline rows are resolved as `stands`, and
`node tools/scope-decisions.mjs check --run frontier-20 --group d` passes with
`0` errors.

## Final verdict summary

- `regular-continued-fractions-and-diophantine-approximation`: sufficient
- `set-partitions-stirling-numbers-and-exponential-generating-functions`: sufficient
- `blockades-combs-and-pattern-graphs`: insufficient
- `preadditive-and-additive-categories-and-biproducts`: sufficient
