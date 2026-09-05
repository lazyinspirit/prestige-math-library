# frontier-30 reader-17 report

Date: 2026-09-05.
Run: `frontier-30`
Batch: `17`
Role: independent Step-6 reader repair

## Opened scope

- Control and task artifacts: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-beta-17.task.md`, `research/frontier-30-reader-17-math-repair.task.md`, `research/frontier-30-refute-17.json`, `research/frontier-30-batch-17.pages.json`, `research/frontier-30-batch-17.coverage.json`, `research/frontier-30-batch-17.proof-contracts.json`, `research/frontier-30-reader-17.md`, `research/frontier-30-reader-findings-17.json`, and the RG-1 design block in `research/plan-representation-theory-groups-track.md`.
- Assigned pages: `library/representation-theory/artin-induction-and-rational-characters.md` and `library/representation-theory/artin-induction-and-rational-characters-examples.md`.
- Assigned items: `def-rational-character-ring`, `def-cyclic-induction-subgroup`, `lem-induction-image-is-an-ideal-in-the-representation-ring`, `lem-cyclic-generator-class-functions-by-moebius-inversion`, `lem-artin-cyclic-permutation-relation`, `thm-artin-induction-for-rational-characters`, `cor-cyclic-fixed-points-detect-rational-representations`, `cor-rank-of-the-rational-representation-ring`, `cor-cyclic-local-integrality-criterion`, `ex-artin-induction-for-a-cyclic-group`, `ex-artin-permutation-relation-for-a5`, `ex-cyclic-fixed-point-detection-for-s3`, and `cex-rational-valued-character-need-not-be-defined-over-the-rationals`.
- Dependencies opened to verify the repaired claims: `def-generated-subgroup`, `lem-cyclic-subgroup-is-the-set-of-powers`, `thm-frobenius-formula-for-induced-characters`, `def-standard-inner-product-on-complex-class-functions`, `cor-frobenius-reciprocity-for-complex-characters`, `lem-averaging-operator-projects-onto-the-fixed-subspace`, `def-g-fixed-subspace-of-a-representation`, and `thm-transitivity-of-induction-for-finite-groups`.

## Confirmed defects and edits

1. Repaired `items/lem-cyclic-generator-class-functions-by-moebius-inversion.md`.
   Step `1.1` no longer claims that the subgroup lattice of a cyclic group is linearly ordered. It now states the correct fact used by the proof: cyclic subgroups are uniquely indexed by divisors of `|C|`, and containment corresponds to divisibility of subgroup orders. Step `2.1` was adjusted to derive the divisor-index correspondence from that corrected lattice statement while preserving the valid equivalence `c \in D` iff `\langle c\rangle \le D` and the Möbius divisor sum.
2. Repaired `items/cor-cyclic-fixed-points-detect-rational-representations.md`.
   Fact `[F1]` now matches the cited dependency: the standard class-function inner product is Hermitian/sesquilinear and positive definite, and its restriction to rational-valued class functions is symmetric and `\mathbb Q`-bilinear. Step `5.1` now uses that restricted `\mathbb Q`-bilinearity to extend vanishing from the permutation characters `U_E^C` to all `y \in R_{\mathbb Q}(C)`, and the Frobenius-reciprocity conclusion is written in the correct argument order. Step `6.1` now uses linearity in the first argument, together with Artin induction, to deduce `\langle x,x\rangle_G=0`.
3. Updated `research/frontier-30-batch-17.proof-contracts.json`.
   Regenerated the contract entries for the two repaired items and changed the two `empty` boundary rows from `not_applicable` to `checked`, so the focused boundary audit now matches the actual nonempty families in the repaired statements.
4. Updated `research/frontier-30-reader-17.md`.
   Replaced the stale earlier report content with this correction report for the current repair task.
5. Updated `research/frontier-30-reader-findings-17.json`.
   Preserved the existing uneditable manifest finding for `cor-cyclic-local-integrality-criterion` and kept the two repaired item defects out of the structured findings output.

No `verification.judge` record was present on the repaired draft items, so no stale judge stamp required removal.

## Per-page verdicts

- `artin-induction-and-rational-characters`: pass after the two item repairs above. The live A-page prose still matches the repaired item statements and dependencies.
- `artin-induction-and-rational-characters-examples`: pass unchanged. No B-page prose edit was needed for this repair task.

## Uneditable defect preserved

- `research/frontier-30-batch-17.pages.json:106` still describes `cor-cyclic-local-integrality-criterion` with the stronger integrality claim, while the current item file only proves the bounded-denominator conclusion `|G|x \in R(G)`. This remains outside the editable scope of this dispatch and stays in `research/frontier-30-reader-findings-17.json`.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-cyclic-generator-class-functions-by-moebius-inversion.md items/cor-cyclic-fixed-points-detect-rational-representations.md`
  Result: both changed items were already in reflowed form (`unchanged`).
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-cyclic-generator-class-functions-by-moebius-inversion.md items/cor-cyclic-fixed-points-detect-rational-representations.md`
  Result: `2 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-17.proof-contracts.json lem-cyclic-generator-class-functions-by-moebius-inversion cor-cyclic-fixed-points-detect-rational-representations`
  Result: regenerated `2` entries.
- `node tools/proof-contract.mjs research/frontier-30-batch-17.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 11/11 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-30-batch-17.pages.json`
  Result: `13 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-17.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: `32 citation(s)` checked; no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-30-batch-17.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: `88` rows checked; no contradicted dispositions.
- `git diff --check -- items/lem-cyclic-generator-class-functions-by-moebius-inversion.md items/cor-cyclic-fixed-points-detect-rational-representations.md research/frontier-30-batch-17.proof-contracts.json research/frontier-30-reader-17.md research/frontier-30-reader-findings-17.json`
  Result: clean.

## Blockers

- None.
