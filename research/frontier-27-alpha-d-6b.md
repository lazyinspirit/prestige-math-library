# frontier-27 alpha group d step 6b adjudication

Date: 2026-08-31
Run: frontier-27
Group: d
Scope: batches 7, 9, and 10

## Batch 7

- Touched obligations: 3 total.
  Accepted as exact reader-result carriers: `ex-a-nearly-covered-sparse-pair-at-small-parameters` and `lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair`.
  Amended beyond the raw reader result: `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`. The 6b amendment replaced the false exact tooth-block-size claim by the lower bound the comb argument actually uses.

- Refuter obligations: 3 total, all confirmed.
  Confirmed fatal and repaired: `refuter:7:1` on `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`.
  Confirmed nonfatal and repaired: `refuter:7:2` on `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold` and `refuter:7:3` on `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement`.

- Risk review: reran `risk-report` on `research/frontier-27-batch-7.proof-contracts.json`, reread every current HIGH or CRITICAL item against its proof and the reader/refuter evidence, and wrote complete `alpha-6b-d` `risk_review` notes for all 9 required batch-7 items.

## Batch 9

- Touched obligations: 7 total.
  Accepted as exact reader-result carriers: `cor-distinguishable-prefix-nonregularity-criterion`, `def-distinguishing-word`, and `ex-distinguishable-prefix-nonregularity-criterion`.
  Amended beyond the raw reader result: `thm-domains-and-ranges-of-partial-computable-functions-are-ce`, `thm-infinite-ce-sets-have-computable-injective-enumerations`, `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism`, and `thm-table-filling-minimization-algorithm`. The first two needed live 6b mathematical repairs; the latter two were amended by the required Alpha risk-review state.

- Refuter obligations: 5 total, all confirmed fatal and repaired.
  `refuter:9:1` repaired the unary diagonalization in `fs-every-countable-language-is-decidable`.
  `refuter:9:2` repaired the distinguishable-prefix argument in `fs-the-pumping-lemma-characterizes-regular-languages`.
  `refuter:9:3` narrowed `thm-domains-and-ranges-of-partial-computable-functions-are-ce` to the computable-input-decoder setting.
  `refuter:9:4` rebuilt `thm-infinite-ce-sets-have-computable-injective-enumerations` directly from a total enumerator.
  `refuter:9:5` narrowed `thm-recognizable-iff-enumerable` to binary languages under the identity encoding.

- Gate repairs: 2 total, both confirmed nonfatal.
  `frontier-27-S6-d-gate-9-1` repaired the acceptance-class citation in `lem-quotient-dfa-is-well-defined-and-equivalent`.
  `frontier-27-S6-d-gate-9-2` repaired the code-level typing in `thm-every-ce-set-is-a-domain`.

- Risk review: reran `risk-report` on `research/frontier-27-batch-9.proof-contracts.json`, reread every current HIGH or CRITICAL item against its proof and the reader/refuter evidence, and wrote complete `alpha-6b-d` `risk_review` notes for all 15 required batch-9 items.

## Batch 10

- Touched obligations: 15 total.
  Accepted as exact reader-result carriers: `cex-every-total-computable-function-is-primitive-recursive`, `ex-sequence-length-and-coordinate-functions-are-primitive-recursive`, and `fs-mu-minimization-is-always-total`.
  Amended beyond the raw reader result: `cex-model-invariance-means-equal-step-counts`, `def-dtime-ntime-dspace-and-nspace`, `fs-model-invariance-means-equal-step-counts`, `fs-time-bounds-never-need-constructibility`, `lem-turing-step-coding-is-primitive-recursive`, `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive`, `prop-polynomially-related-encodings-preserve-polynomial-classes`, `thm-lambda-definable-iff-partial-recursive`, `thm-multitape-to-single-tape-space-simulation`, `thm-multitape-to-single-tape-time-simulation`, `thm-partial-recursive-iff-turing-computable`, and `thm-sequence-length-and-coordinate-functions-are-primitive-recursive`. These amendments account for live 6b theorem repairs, later contract or manifest synchronization on the touched carriers, and the required Alpha risk-review state.

- Refuter obligations: 5 total, all confirmed fatal and repaired.
  `refuter:10:1` repaired the order formula in `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive`.
  `refuter:10:2` repaired the primitive-recursive machine-code parsing argument in `lem-turing-step-coding-is-primitive-recursive`.
  `refuter:10:3` narrowed `thm-multitape-to-single-tape-time-simulation` to the correct `O((n+T(n))^2)` bound.
  `refuter:10:4` narrowed `thm-multitape-to-single-tape-space-simulation` to the correct `O(n+S(n))` bound.
  `refuter:10:5` narrowed `prop-polynomially-related-encodings-preserve-polynomial-classes` to total translators plus polynomial-time and polynomial-space valid-code tests.

- Gate repairs: 3 total, all confirmed nonfatal.
  `frontier-27-S6-d-gate-10-1` repaired `prop-polynomial-time-and-space-are-model-invariant` after the fixed-machine simulation theorems were narrowed to the correct `n+T(n)` and `n+S(n)` forms.
  `frontier-27-S6-d-gate-10-2` records the stale touched-carrier reclassification on `cex-model-invariance-means-equal-step-counts`.
  `frontier-27-S6-d-gate-10-3` records the stale touched-carrier reclassification on `fs-model-invariance-means-equal-step-counts`.

- Risk review: reran `risk-report` on `research/frontier-27-batch-10.proof-contracts.json`, reread every current HIGH or CRITICAL item against its proof and the reader/refuter evidence, and rewrote the required `risk_review` notes under reviewer `alpha-6b-d` for all 13 currently required batch-10 items.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the repaired batch-7, batch-9, and batch-10 item sets.
  Result: pass; three files needed canonical reflow (`lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold`, `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement`, and `fs-the-pumping-lemma-characterizes-regular-languages`).

- `node tools/tsx-run.mjs tools/precheck.mts` on all repaired item files.
  Result: pass; batch 7 `3/3`, batch 9 `6/6`, batch 10 `6/6`, plus the focused `lem-quotient-dfa-is-well-defined-and-equivalent` rerun `1/1`.

- `node tools/regen-contract-entries.mjs` on the changed contract rows.
  Result: pass; regenerated the batch-7, batch-9, and batch-10 entries touched by the 6b repairs, then regenerated `prop-polynomial-time-and-space-are-model-invariant` and `lem-quotient-dfa-is-well-defined-and-equivalent` once more after their final citation fixes.

- `node tools/proof-contract.mjs research/frontier-27-batch-7.proof-contracts.json --strict --items ...`
  Result: pass; `0` errors, `1` shotgun-bracket warning on `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement` after the explicit case expansion.

- `node tools/proof-contract.mjs research/frontier-27-batch-9.proof-contracts.json --strict --items ...`
  Result: pass; `0` errors, `0` warnings.

- `node tools/proof-contract.mjs research/frontier-27-batch-10.proof-contracts.json --strict --items ...`
  Result: pass; `0` errors, `0` warnings.

- `node tools/citation-fidelity.mjs` on the repaired batch-7, batch-9, and batch-10 item sets with `--fail-on-missing-quote`.
  Result: pass; no missing quotes and no widening candidates.

- `node tools/content-policy.mjs research/frontier-27-batch-7.pages.json research/frontier-27-batch-9.pages.json research/frontier-27-batch-10.pages.json`
  Result: pass; `101` scoped items, `0` errors, `0` warnings.

- `node tools/rendercheck.mjs` on the owned page files plus the repaired items.
  Result: pass; `OK — 28 file(s)`.

- `node tools/risk-report.mjs research/frontier-27-batch-7.proof-contracts.json --require-reviewed --json`
  Result: pass; all current HIGH and CRITICAL batch-7 items now carry complete `alpha-6b-d` `risk_review` rows.

- `node tools/risk-report.mjs research/frontier-27-batch-9.proof-contracts.json --require-reviewed --json`
  Result: pass; all current HIGH and CRITICAL batch-9 items now carry complete `alpha-6b-d` `risk_review` rows.

- `node tools/risk-report.mjs research/frontier-27-batch-10.proof-contracts.json --require-reviewed --json`
  Result: pass; all current HIGH and CRITICAL batch-10 items now carry complete `alpha-6b-d` `risk_review` rows.

- `node tools/step6-scope.mjs stamp --run frontier-27 --group d`
  Result: pass; stamped `41` current carrier hashes into `research/frontier-27-alpha-d-6b-decisions.json`.

- `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate --batch 7`
  Result: pass; `28` item(s) routed, `6` adjudication obligation(s), `0` error(s).

- `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate --batch 9`
  Result: pass; `37` item(s) routed, `12` adjudication obligation(s), `0` error(s).

- `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate --batch 10`
  Result: pass; `36` item(s) routed, `20` adjudication obligation(s), `0` error(s).

## Blockers

- None in the live scope for group d.

## Gate repair - `step6-routing-adjudicate` (Monday, August 31, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed two stale batch-10 touched decisions: `cex-model-invariance-means-equal-step-counts` and `fs-model-invariance-means-equal-step-counts`.
- Reread the current counterexample and false statement against `research/frontier-27-reader-10.md` and found no new mathematical defect. I retagged both touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-27-S6-d-gate-10-2` and `frontier-27-S6-d-gate-10-3` via `research/frontier-27-alpha-d-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate --batch 10`
  -> `36 item(s) routed, 20 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate`
  -> `449 item(s) routed, 139 adjudication obligation(s), 0 error(s)`.
