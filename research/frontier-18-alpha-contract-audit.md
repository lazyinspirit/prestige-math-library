# frontier-18 alpha contract audit

Run: `frontier-18`
Lane: `contract-audit-3`
Date: `2026-08-24`

## Commands reproduced

From the repo root I reran:

- `node tools/boundary-audit.mjs research/frontier-18-batch-*.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-18-proof-contracts.json --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-18 --contracts research/frontier-18-proof-contracts.json --checklists research/frontier-18-batch-1.coverage.json,research/frontier-18-batch-2.coverage.json,research/frontier-18-batch-3.coverage.json,research/frontier-18-batch-4.coverage.json,research/frontier-18-batch-5.coverage.json,research/frontier-18-batch-6.coverage.json,research/frontier-18-batch-7.coverage.json,research/frontier-18-batch-8.coverage.json,research/frontier-18-batch-9.coverage.json,research/frontier-18-batch-10.coverage.json --min-checks 1`
- `node tools/risk-report.mjs research/frontier-18-proof-contracts.json --require-reviewed`

Current state:

- `boundary-audit` passes.
- `citation-fidelity` passes.
- `risk-report --require-reviewed` passes.
- `gate-liveness` still fails; details are in the final section.

## Boundary audit

Initial detector output contained `32` template clusters covering `449` rows and `23` contradicted candidates.

### Template clusters

Decision: `confirmed real contract defects`.

Evidence:

- The largest clusters were not mathematical falsehoods in item text; they were proof-contract rows that repeated the same bare anchor or generic rationale across many items or across many axes inside one item.
- The two load-bearing shapes were:
  - `checked` rows whose evidence was only `step 2.1` / `Step 3.1 handles this case`;
  - `not_applicable` rows whose rationale was a batch-wide template rather than an item-specific disposition.

Repair:

- Rewrote the template rows in batches `1, 3, 4, 5, 6, 7, 8, 9`.
- `checked` rows now name the specific boundary axis and the actual step text that discharges it.
- `not_applicable` rows now state the specific axis and an item-specific reason.

Result:

- `boundary-audit` now reports `TEMPLATE REUSE — none at or above 3 members`.

### Contradicted candidates

Decision: `all 23 upheld on the record`.

Evidence:

- Batch `1`: `fs-four-square-representations-of-a-prime-are-essentially-unique` uses “equivalent up to signs and order” to name the equivalence relation under refutation, not a biconditional clause.
- Batch `3`: the flagged `empty` rows were on statements whose indexed family is explicitly nonempty by hypothesis (`d>=1`, divisor sets of positive integers, nonempty Galois-conjugate family).
- Batch `5`: the flagged `empty` rows were on cycle-lemma items whose word length or weight hypothesis forces a nonempty indexed aggregate; `thm-the-catalan-generating-function-is-not-rational` states a negation, not an iff.
- Batches `6`, `7`, `8`: the flagged `empty` rows were on analytic or multivariable statements whose domains, distinguished boundaries, or coordinate ranges are explicitly nonempty by hypothesis.

Repair:

- Added `reviewed: {upheld: true, by: "contract-audit-3", reason: ...}` to all `23` rows.

Result:

- `boundary-audit` now reports `CONTRADICTED DISPOSITIONS — none found by the three detectors`.

## Citation fidelity

Initial detector output contained `18` widening candidates and `0` missing quotes.

Decision: `confirmed real fact-line overstatements`.

Evidence:

- The affected `[F#]`/`[L#]` lines had widened cited bounds or hidden them behind looser wording.
- The concrete shapes were:
  - dropped lower bounds such as `n>=1` / `n>=0`;
  - fixed-`k` source clauses rephrased as unrestricted “for every `k`” claims;
  - finite-sum monotonicity clauses written as “for all `k<n`” without the explicit `0<=k<n` range.

Repair:

- Tightened fact lines in these items:
  - `thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n`
  - `cor-cyclotomic-extensions-are-abelian`
  - `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate`
  - `ex-roots-of-unity-in-characteristic-three`
  - `thm-catalan-generating-function-satisfies-a-quadratic-equation`
  - `thm-catalan-generating-function-closed-form`
  - `lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure`
  - `lem-elementary-sets-admit-compact-inner-and-open-outer-approximations`
  - `lem-lebesgue-measurable-sets-have-small-open-excess`
  - `prop-elementary-volume-is-finitely-additive-and-monotone`
  - `thm-box-volume-is-a-premeasure-on-the-elementary-algebra`
  - `thm-lebesgue-measure-under-dilations-and-reflections`
  - `thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line`
  - `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`
  - `thm-lebesgue-outer-regularity-for-arbitrary-subsets`
  - `ex-periods-of-a-holomorphic-function-on-an-annulus`

Result:

- `citation-fidelity` now reports `QUOTE NOT FOUND — none` and `WIDENING CANDIDATES — none found`.

## Risk reviews

Initial detector output contained `105` `risk-review-missing` errors, all in batches `5` and `10`.

Decision: `confirmed real contract defects`.

Evidence:

- Batch `5` still lacked Alpha `risk_review` records on the routed items from:
  - `lattice-paths-and-catalan-numbers` and its examples page;
  - `linear-algebra-methods-in-combinatorics` and its examples page.
- Batch `10` still lacked Alpha `risk_review` records on the routed items from:
  - `modules-substitution-and-prime-graphs` and its examples page;
  - `sparse-restricted-subgraphs-and-rodl-nikiforov` and its examples page.
- The missing rows were metadata omissions, not new mathematical failures: the current proofs and contracts on disk were re-read cluster by cluster before writing the reviews.

Repair:

- Wrote the missing `risk_review` blocks directly into:
  - [research/frontier-18-batch-5.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-5.proof-contracts.json)
  - [research/frontier-18-batch-10.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-10.proof-contracts.json)
- Reviewer field used: `Alpha contract-audit-3`.
- Notes record the actual reread cluster:
  - lattice-path / Catalan chain;
  - linear-algebra / polynomial-method chain;
  - modules / substitution / prime-graph chain;
  - restricted-set / Rödl–Nikiforov chain.

Result:

- `risk-report --require-reviewed` now reports `0 error(s), 669 item(s) routed`.

## Defect ledger

Appended and rendered in the same act:

- [research/frontier-18-alpha-contract-audit-ledger-rows.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-alpha-contract-audit-ledger-rows.json)
- [research/defect-ledger.jsonl](/home/lazyinspirit/Projects/prestige-math-library/research/defect-ledger.jsonl)
- [research/DEFECT-LEDGER.md](/home/lazyinspirit/Projects/prestige-math-library/research/DEFECT-LEDGER.md)

Rows appended:

- `frontier-18-contract-audit-001` — template boundary rows across batches `1,3,4,5,6,7,8,9`
- `frontier-18-contract-audit-002` — widened fact restatements across batches `3,5,7,8`
- `frontier-18-contract-audit-003` — missing `risk_review` rows in batches `5,10`

## Remaining open point

`gate-liveness` is still red, but the remaining failure is tooling rather than content.

Evidence:

- Running the probed gates directly from the shell gives live nonempty summaries:
  - `finite-smoke: 22 check(s) over 20/669 item(s)`
  - `proof-contract: 669/669 item(s) checked`
  - `coverage-checklist: 1537 harvested result(s)`
  - `precheck: 5593 checked, 0 failing`
- Yet `gate-liveness` still reports all four probes as `unparsed`.
- A direct node-side reproduction of its capture path (`spawnSync('node', argv, ...)`) returns empty combined stdout/stderr for those child processes on this runner even when the shell invocation prints the expected summary lines and exits `0`.

Disposition:

- I did **not** patch `tools/gate-liveness.mjs` in this content-focused contract-audit pass.
- Nothing mathematical or contract-side remains open in the frontier-18 artifacts I touched; the unresolved blocker is the liveness tool’s capture/parsing path on this runtime.

## Round `adjudicate-risk-review-1` — 2026-08-25

Lane: `adjudicate-risk-review-1`

### Commands reproduced on current disk

- `node tools/boundary-audit.mjs research/frontier-18-batch-*.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-18-proof-contracts.json --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-18 --contracts research/frontier-18-proof-contracts.json --checklists research/frontier-18-batch-1.coverage.json,research/frontier-18-batch-2.coverage.json,research/frontier-18-batch-3.coverage.json,research/frontier-18-batch-4.coverage.json,research/frontier-18-batch-5.coverage.json,research/frontier-18-batch-6.coverage.json,research/frontier-18-batch-7.coverage.json,research/frontier-18-batch-8.coverage.json,research/frontier-18-batch-9.coverage.json,research/frontier-18-batch-10.coverage.json --min-checks 1`
- `node tools/risk-report.mjs research/frontier-18-proof-contracts.json --require-reviewed`

Current state after this round:

- `boundary-audit` passes, with the same `23` previously upheld rows still on record.
- `citation-fidelity` passes its hard check (`QUOTE NOT FOUND — none`) and now reports `0` widening candidates plus `1` upheld citation row.
- `gate-liveness` passes and reports live nonempty scopes for all four probes.
- `risk-report --require-reviewed` reports `0 error(s), 669 item(s) routed`.

### Boundary audit

Decision: `no new defect`.

Evidence:

- The only rows the detector prints are the `23` `UPHELD BY REVIEW` rows already carried by `contract-audit-3`.
- No template clusters and no contradicted dispositions remain on current disk.

Action:

- No boundary rows changed in this round.

### Citation fidelity

Decision: `one real facts-block overstatement repaired; one detector false positive upheld on the record`.

Real defect:

- `prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group` `[L5]` restated two cited cyclotomic statements without the explicit standing hypothesis `n\\ge1`.
- I repaired [items/prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group.md](/home/lazyinspirit/Projects/prestige-math-library/items/prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group.md) so the fact line now says `For this n>=1`.

Upheld false positive:

- `lem-tagged-sums-approximate-a-contour-integral` `[L11]` is now written as `for every natural number k<n`, which is faithful to the cited monotonicity clause.
- The remaining detector hit was not mathematical widening: the tool was reading the subscripted source clause `a_k \\ge 0` as though it were a lower-bound hypothesis on the index variable `k`.
- I recorded that adjudication in [research/frontier-18-batch-8.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-8.proof-contracts.json) with `reviewed: {upheld: true, by: "adjudicate-risk-review-1", ...}` on the `L11` citation row, and updated `tools/citation-fidelity.mjs` so upheld citation rows are reported and no longer counted as live widening candidates.

Result:

- `citation-fidelity` now reports no widening candidates on current disk and one upheld row:
  - `lem-tagged-sums-approximate-a-contour-integral [L11]`.

### Risk reviews

Decision: `three real contract defects repaired`.

Evidence:

- Batch `2` still lacked complete Alpha `risk_review` records on:
  - `ex-the-two-extraspecial-groups-of-order-thirty-two`
  - `prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite`
  - `ex-two-generating-sets-of-a-dihedral-group`
- I reread each proof against its cited dependencies from disk before writing the reviews:
  - the extraspecial example's `20` and `12` counts match the cited central-product formula and the order-32 classification exactly;
  - the Cayley-graph proposition's left-translation bijection and `S^{\\pm}` finiteness criterion are licensed by the stated definitions;
  - the dihedral example's cube and `C_8` descriptions match the published dihedral presentation and the cited regularity proposition.

Action:

- Wrote the three missing `risk_review` blocks into [research/frontier-18-batch-2.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-2.proof-contracts.json).

Result:

- After a fresh merge, `risk-report --require-reviewed` exits `0`.

### Gate liveness

Decision: `the previous red was a real tool defect, now repaired`.

Evidence:

- Reproducing the child-process capture path on current disk still returned empty `stdout`/`stderr` for successful runs of `finite-smoke`, `proof-contract`, `coverage-checklist`, and `precheck`, while direct shell runs printed the expected summary lines.
- The common cause is that these repo tools print their summary and then call `process.exit(...)`; on this runtime the pipe-backed capture lost that buffered output.

Action:

- Updated [tools/gate-liveness.mjs](/home/lazyinspirit/Projects/prestige-math-library/tools/gate-liveness.mjs) to capture each probe through a temporary file rather than a pipe.

Result:

- `gate-liveness` now reads the real summaries and reports:
  - `finite-smoke`: `22 checks`
  - `proof-contract`: `669 items checked`
  - `coverage-checklist`: `1537 harvested results`
  - `precheck`: `5593 items checked`

### Defect ledger

Appended in this round:

- [research/frontier-18-alpha-contract-audit-risk-review-1-ledger-rows.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-alpha-contract-audit-risk-review-1-ledger-rows.json)
- `frontier-18-contract-audit-004` — the batch-3 cyclotomic fact-line widening
- `frontier-18-contract-audit-005` — the three missing batch-2 `risk_review` rows
- `frontier-18-contract-audit-006` — the `gate-liveness` false-red capture bug
- `frontier-18-contract-audit-007` — `citation-fidelity` ignoring upheld reviewed citation rows

The append re-rendered [research/DEFECT-LEDGER.md](/home/lazyinspirit/Projects/prestige-math-library/research/DEFECT-LEDGER.md) at ledger fingerprint `05439b107c29`.

## Round `rejudge-contract-review-2` — 2026-08-25

Lane: `rejudge-contract-review-2`

### Commands reproduced on current disk

- `node tools/boundary-audit.mjs research/frontier-18-batch-*.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-18-proof-contracts.json --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-18 --contracts research/frontier-18-proof-contracts.json --checklists research/frontier-18-batch-1.coverage.json,research/frontier-18-batch-2.coverage.json,research/frontier-18-batch-3.coverage.json,research/frontier-18-batch-4.coverage.json,research/frontier-18-batch-5.coverage.json,research/frontier-18-batch-6.coverage.json,research/frontier-18-batch-7.coverage.json,research/frontier-18-batch-8.coverage.json,research/frontier-18-batch-9.coverage.json,research/frontier-18-batch-10.coverage.json --min-checks 1`
- `node tools/risk-report.mjs research/frontier-18-proof-contracts.json --require-reviewed`

Current state after this round:

- `boundary-audit` passes, with the same `23` upheld rows already on record.
- `gate-liveness` passes and reports live nonempty scopes for all four probes.
- `citation-fidelity` passes its hard check and now reports the `lem-tagged-sums-approximate-a-contour-integral [L11]` row as upheld rather than as a live widening candidate.
- `risk-report --require-reviewed` passes after the missing batch-5 review was restored.

### Boundary audit

Decision: `no new defect`.

Evidence:

- The detector still reports no template clusters and no contradicted dispositions beyond the existing upheld rows.

Action:

- No boundary rows changed in this round.

### Citation fidelity

Decision: `detector false positive upheld on the record`.

Evidence:

- `lem-tagged-sums-approximate-a-contour-integral` `[L11]` cites the monotonicity clause of `lem-finite-sum-laws`.
- The current fact use is faithful: the source quantifies over sequences on `\mathbb N`, so the row's `for all k<n` already ranges over natural numbers and does not drop a separate lower-bound hypothesis.

Action:

- Added `reviewed: {upheld: true, by: "rejudge-contract-review-2", ...}` to the `L11` citation row in [research/frontier-18-batch-8.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-8.proof-contracts.json).

Result:

- After a fresh merge, `citation-fidelity` reports `QUOTE NOT FOUND — none` and `WIDENING CANDIDATES — none found`, with the upheld row shown separately.

### Risk reviews

Decision: `one real contract defect repaired`.

Evidence:

- `thm-sauer-shelah-by-multilinear-polynomials` remained routed as high risk and had no complete Alpha `risk_review` row in batch `5`.
- I reread the proof against its contract and cited statements from `lem-an-unshattered-set-reduces-a-monomial-on-a-family` and `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` before writing the review.
- The current proof is licensed as written:
  - step `1.1` uses the separating polynomials `q_A` correctly to span the function space on the incidence vectors;
  - step `2.1` legitimately lowers degree with the unshattered-set reduction whenever `|T|>d`;
  - step `3.1` handles the `d>n` boundary by switching to `s=min{d,n}` before invoking the independence count.

Action:

- Wrote the missing `risk_review` block into [research/frontier-18-batch-5.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-5.proof-contracts.json).

Result:

- After a fresh merge, `risk-report --require-reviewed` exits `0`.

### Defect ledger

Appended in this round:

- [research/frontier-18-alpha-contract-audit-rejudge-contract-review-2-ledger-rows.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-alpha-contract-audit-rejudge-contract-review-2-ledger-rows.json)
- `frontier-18-contract-audit-008` — the missing batch-5 `risk_review` row for `thm-sauer-shelah-by-multilinear-polynomials`
