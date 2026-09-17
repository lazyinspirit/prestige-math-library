# Boundary-row cleanup report — batches 7, 8, 9

Run `phase-2-remaining-27` · role alpha-high · label `step3b-boundary-7-9`
Scope: `research/phase-2-remaining-27-batch-{7,8,9}.proof-contracts.json`
(batches 7, 8, 9 = 57 + 56 + 70 items). Only the `boundaries` rows of these
three files were edited. No item file, manifest, coverage file, merged
run-level contract or sibling batch contract was touched.

## Method

For every flagged row (template cluster or contradicted candidate) the item was
read — Statement/Definition/Example, Facts, and the proof steps that bear on the
axis — and the axis was re-decided. `checked` rows were rewritten so their
evidence names the step, hypothesis or clause of the item that performs the
work; `not_applicable` rows were rewritten so their reason states the
item-specific fact that excludes the case. Where a disposition was set to
`checked` because the item's own text really does discharge the axis, the
crediting is to a step that exists (verified by `tools/proof-contract.mjs
--strict`). Where a detector fires on a correct `not_applicable` disposition
(a nonempty union, intersection, sum or family that the regex cannot see
through), the row carries a `reviewed` uphold record bound to the current item
hash and row hash. No two rows in these batches share a sentence.

## Flagged rows fixed

| batch | flagged rows | items | rows rewritten |
|---|---|---|---|
| 7 | 31 | 21 | 31 |
| 8 | 301 | 56 | 301 |
| 9 | 542 | 70 | 542 |
| total | 874 | 147 | 874 |

All 874 rows were rewritten; a text comparison against the pre-edit files shows
no flagged row left unchanged and none missing.

## Rows whose status changed (29)

`not_applicable → checked` (15) — the item's own text discharges the axis:

- batch 7 (7): `def-continuous-time-stopping-time` [iff-forward], [iff-reverse];
  `def-brownian-motion-started-at-x` [iff-forward], [iff-reverse];
  `cor-brownian-paths-have-infinite-total-variation-on-every-interval` [zero];
  `thm-brownian-quadratic-variation-along-dyadic-partitions` [empty];
  `thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity` [zero].
- batch 8 (7): `cor-deterministic-ito-integrals-are-gaussian` [iff-forward],
  [iff-reverse]; `def-brownian-generator` [iff-forward], [iff-reverse];
  `ex-covariance-of-two-deterministic-ito-integrals` [iff-forward],
  [iff-reverse]; `thm-quadratic-variation-of-an-ito-integral` [empty].
- batch 9 (1): `def-chern-character-of-a-complex-vector-bundle` [empty].

`checked → not_applicable` (14) — the axis does not occur for this item, so the
old worksheet disposition was the wrong target:

- batch 8 (14): `rem-ito-versus-stratonovich-boundary` [empty], [zero], [one],
  [degenerate], [nonempty-choice];
  `rem-general-semimartingale-calculus-is-outside-this-block` [empty], [zero],
  [one], [degenerate], [nonempty-choice] (both items are scope remarks that
  assert no claim with a boundary case and attach no proof);
  `def-brownian-generator` [endpoints],
  `lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two`
  [endpoints], `cor-brownian-filtration-local-martingales-have-continuous-versions`
  [endpoints] (no interval or endpoint occurs; the operator and the subspace are
  pointwise objects).

## Items whose proofs need a real boundary case

None found. Every flagged item has a boundary disposition that is true of the
item as written: `checked` rows were matched to existing proof steps or to
clauses of a Definition/Remark, and no proof was found to omit a case that its
own Statement makes obligatory. The judgement calls where the target of a row
was wrong are exactly the 14 `checked → not_applicable` rows above; none of them
is a proof gap — they are axes that do not arise for the item. No row was left
at a "gap" value and no item was reported as missing a case.

Two rows deserve explicit mention as cases where the axis does arise:

- `thm-quadratic-variation-of-an-ito-integral` [empty]: at `t = 0` the partial
  sum is empty; the convention "an empty sum is `0`" of
  [[def-quadratic-variation-along-a-partition-sequence]] fixes it, and step 6.1
  compares the two conventions. Recorded `checked`, not a gap.
- `def-chern-character-of-a-complex-vector-bundle` [empty]: the power sum
  `\sum_{i=1}^n t_i^k` has an empty root list when `n = 0`; the Definition
  itself records `ch_0(E) = n` and `ch(0) = 0`, which handles that rank.
  Recorded `checked`.

## Upheld rows (18)

Rows where one of the three detectors fires on a correct `not_applicable`
disposition; each carries `reviewed: {upheld: true, by:
"alpha-high/step3b-boundary-7-9", reason, item_sha256, row_sha256}` with both
hashes recomputed against the current item text and row text:

- batch 7 (5): the `empty` rows of
  `def-natural-and-usual-augmented-brownian-filtrations` (`\bigcup` over the
  nonempty half-line), `def-brownian-transition-semigroup` ("family" indexed by
  `[0,\infty)`), `def-germ-sigma-algebra-at-zero` (`\bigcap` over `(0,\infty)`),
  `def-continuous-time-stopping-time` (unions over `n \ge 1`),
  `cor-brownian-paths-have-infinite-total-variation-on-every-interval` (finite
  sums over `i<n` with `n\ge1`).
- batch 8 (11): `def-continuous-time-adapted-process-and-martingale` [empty];
  `def-progressively-measurable-and-predictable-process` [empty],
  [iff-forward], [iff-reverse] (the "exactly when" criterion for deterministic
  processes inside a Definition with no Proof section);
  `def-elementary-predictable-brownian-integrand` [empty], [iff-forward];
  `def-ito-integral-of-an-elementary-predictable-process` [empty];
  `thm-ito-isometry-for-elementary-integrands` [empty];
  `def-ito-integral-for-square-integrable-predictable-processes` [empty];
  `def-locally-square-integrable-predictable-brownian-integrand` [empty];
  `thm-localized-ito-integral` [iff-forward].
- batch 9 (2): `def-chern-classes-from-the-projective-bundle-relation` [empty]
  and `def-pontryagin-classes-by-complexification` [empty] — the total Chern /
  Pontryagin class is a sum over the nonempty index set `i \ge 0`, finite by the
  rank cutoff.

## Final audit output (batches 7, 8, 9 together)

```
$ node tools/boundary-audit.mjs \
    research/phase-2-remaining-27-batch-7.proof-contracts.json \
    research/phase-2-remaining-27-batch-8.proof-contracts.json \
    research/phase-2-remaining-27-batch-9.proof-contracts.json \
    --fail-on-contradicted --fail-on-template
boundary-audit: 1464 rows over 3 contract file(s); 611 marked not_applicable

TEMPLATE REUSE — none at or above 3 members.

CONTRADICTED DISPOSITIONS — none found by the three detectors.

UPHELD BY REVIEW — 18 row(s) an Alpha read and kept, with reasons on the record
exit 0
```

Per file, `--fail-on-contradicted --fail-on-template` exits 0 for
`batch-7`, `batch-8` and `batch-9` individually as well.

Strict proof-contract checks after the edits:

```
$ node tools/proof-contract.mjs research/phase-2-remaining-27-batch-7.proof-contracts.json --strict
proof-contract: 0 error(s), 2 warning(s), 57/57 item(s) checked
$ node tools/proof-contract.mjs research/phase-2-remaining-27-batch-8.proof-contracts.json --strict
proof-contract: 0 error(s), 0 warning(s), 56/56 item(s) checked
$ node tools/proof-contract.mjs research/phase-2-remaining-27-batch-9.proof-contracts.json --strict
proof-contract: 0 error(s), 1 warning(s), 70/70 item(s) checked
```

The three `shotgun-bracket` warnings are pre-existing: the same warnings appear
when `--strict` is run on the pre-edit copies of these files
(`lem-brownian-transition-semigroup-property`,
`thm-two-sided-exit-probability-for-brownian-motion`,
`lem-homological-ahss-exact-couple-from-the-skeletal-filtration`).

## Integrity checks run

- Every flagged row's new text was compared with the pre-edit file: 0 unchanged,
  0 missing across 874 rows.
- Structural comparison of pre-edit and post-edit JSON: `version`, `scope`,
  contract key order, `citations`, `derivations`, `routine_steps`, boundary row
  order and boundary case names are unchanged in all three files; the only
  differences are `status`, `reason`, `evidence` and the added `reviewed`
  records.
- `row_sha256` and `item_sha256` of all 18 `reviewed` records recomputed from
  disk: all current (0 stale).
- `node tools/boundary-audit.mjs <three files> --json` re-run after the final
  edit: no clusters, no contradicted candidates.

## Open obligation for Step 4

The merged run-level contract
`research/phase-2-remaining-27-proof-contracts.json` still holds the pre-cleanup
rows for these batches: it was written before this cleanup and was not edited
here (it is out of scope for this dispatch). It must be re-merged from the batch
files — including the sibling batches' files — before the run-level
`boundary-audit` gate is re-run; the audit output above is for the three batch
files only. No other obligation is open from this dispatch: no local suppliers
were added, no item file was changed, and no published-item concern was
identified in the course of these boundary reads.
