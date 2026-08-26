# frontier-19 alpha contract audit

Run: `frontier-19`  
Lane: `contract-audit-3`  
Date: `2026-08-26`

## Prior lane context

Per the repair-round rule, I listed `research/frontier-19-dispatch/` first and
read the latest prior same-lane result and log on disk:

- `research/frontier-18-dispatch/alpha-contract-audit-3.result.json`
- `research/frontier-18-dispatch/alpha-contract-audit-3.log`
- `research/frontier-18-alpha-contract-audit.md`

The current pass extends that lane’s pattern rather than re-deriving it: read
the detector output, separate real contract defects from detector false
positives, fix the real rows in the owning batch contracts or item text, and
record upheld false positives on the row itself.

## Commands reproduced

From the repo root I ran:

- `node tools/boundary-audit.mjs research/frontier-19-batch-*.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-19-proof-contracts.json --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-19 --contracts research/frontier-19-proof-contracts.json --checklists research/frontier-19-batch-1.coverage.json,research/frontier-19-batch-2.coverage.json,research/frontier-19-batch-3.coverage.json,research/frontier-19-batch-4.coverage.json,research/frontier-19-batch-5.coverage.json,research/frontier-19-batch-6.coverage.json,research/frontier-19-batch-7.coverage.json,research/frontier-19-batch-8.coverage.json,research/frontier-19-batch-9.coverage.json,research/frontier-19-batch-10.coverage.json --min-checks 1`
- `node tools/risk-report.mjs research/frontier-19-proof-contracts.json --require-reviewed`

After contract edits I re-merged with:

- `node tools/merge-proof-contracts.mjs --level frontier-19 research/frontier-19-proof-contracts.json research/frontier-19-batch-*.proof-contracts.json`

I also checked the settled merged contract directly with:

- `node tools/finite-smoke.mjs research/frontier-19-proof-contracts.json`
- `node tools/proof-contract.mjs research/frontier-19-proof-contracts.json --strict`

## Detector state on entry

| detector | entry result |
|---|---|
| `boundary-audit` | 48 template clusters spanning 1,185 rows, plus 31 contradicted candidates |
| `citation-fidelity` | 4 widening candidates, 0 missing quotes |
| `gate-liveness` | `finite-smoke` VACUOUS: 0 checks |
| `risk-report --require-reviewed` | 85 `risk-review-missing` errors |

## Boundary audit

### Template clusters

Decision: `confirmed real contract defects`.

The level entered with 48 repeated boundary-text clusters. The dominant failure
shapes were:

- bare anchors such as `step 4.1`, `Statement`, or `step 1.1 and step 2.1` in
  `checked` rows;
- boilerplate `not_applicable` reasons describing a template rather than the
  current item;
- same-item rows reusing one generic sentence across several axes.

Repair:

- Rewrote the repeated boundary text in the owning batch contracts so each row
  now carries either:
  - case-specific evidence anchored to the actual current step or statement; or
  - an item-specific not-applicable reason naming why that axis is not a real
    obligation on the authored claim.
- Corrected the genuinely wrong contradicted rows, chiefly the biconditional
  axes on:
  - `prop-proper-equivalence-preserves-discriminant-and-primitivity`
  - `thm-hilberts-theorem-90`
  - `lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel`
  - `lem-cyclic-rotation-fixed-tuples-are-periodic`
  - `lem-anti-excedances-become-descents-under-foata-fundamental-transformation`
  - the explicit empty-case carriers such as `thm-worpitzky-identity`,
    `thm-lehmer-code-is-a-bijection`, and
    `cor-major-index-generating-function-is-q-factorial`.

### Contradicted candidates

Decision: `17 upheld on the record, remainder repaired as real row defects`.

The remaining contradicted candidates after the first rewrite were all `empty`
rows where the detector keyed on a family/product/sum token but the item still
had no genuine empty-family obligation. I read those rows and added
`reviewed: {upheld: true, by: "contract-audit-3", reason: ...}` to each one.
The upheld set is:

- `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family`
- `thm-field-norm-and-trace-by-embeddings`
- `thm-general-polynomial-of-degree-n-has-galois-group-s-n`
- `thm-symbolic-sum-and-product-rules`
- `thm-sequence-construction-generating-function`
- `thm-multiset-product-formula`
- `thm-multiset-exponential-formula`
- `cor-integer-partitions-have-euler-product`
- `thm-powerset-product-formula`
- `thm-powerset-exponential-formula`
- `thm-cycle-construction-formula`
- `cor-necklaces-over-an-m-letter-alphabet`
- `thm-substitution-rule-for-ordinary-generating-functions`
- `thm-pointing-rule-for-ordinary-generating-functions`
- `fs-multiset-product-exists-for-every-coefficient-sequence`
- `cor-eulerian-polynomial-exponential-generating-function`
- `cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares`

Result:

- `boundary-audit` now exits `0`.
- No template cluster remains at or above 3 members.
- No contradicted disposition remains live.
- The 17 upheld rows stay visible as reviewed false positives rather than being
  silently weakened.

## Citation fidelity

Decision: `3 real widenings repaired; 1 detector false positive upheld`.

Real defects:

- `lem-k-transitive-actions-are-k-homogeneous-and-lower-transitive` `[L1]`
- `ex-natural-actions-of-symmetric-and-alternating-groups` `[L1]`
- `ex-natural-actions-of-symmetric-and-alternating-groups` `[L2]`

All three restatements had dropped the explicit `k >= 1` hypothesis from the
cited definitions. I repaired those fact lines in the item text so they now
carry the bound faithfully.

Detector false positive:

- `lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one`
  `[L5] -> thm-lebesgue-measure-of-a-box-of-every-kind`

This line specializes the cited box-measure theorem to the one-dimensional case
`n = 1`; it is not a widening. I upheld it on the citation row with
`reviewed.upheld`.

Result:

- `citation-fidelity` now exits `0`.
- No missing quote exists.
- No widening candidate remains live.
- One upheld citation false positive remains recorded on the row itself.

## Finite smoke

Decision: `gate-vacuous under-selection repaired`.

`gate-liveness` entered with `finite-smoke` VACUOUS at 0 checks. The level is
not registry-inapplicable: it has finitely checkable algebraic and combinatorial
claims. I selected four checks whose registry model family genuinely probes the
item’s own claim:

- `cor-degree-of-f-adjoin-an-nth-root-by-coset-order`
  -> `cyclic-subgroup-lagrange`
- `thm-general-polynomial-of-degree-n-has-galois-group-s-n`
  -> `vieta-elementary-symmetric`
- `cor-binary-words-have-generating-function-one-over-one-minus-two-x`
  -> `linear-recurrence-matches-rational-series`
- `cor-compositions-have-generating-function-x-over-one-minus-two-x`
  -> `linear-recurrence-matches-rational-series`

Direct run on the merged contract:

- `PASS [cor-degree-of-f-adjoin-an-nth-root-by-coset-order] cyclic-subgroup-lagrange`
- `PASS [thm-general-polynomial-of-degree-n-has-galois-group-s-n] vieta-elementary-symmetric`
- `PASS [cor-binary-words-have-generating-function-one-over-one-minus-two-x] linear-recurrence-matches-rational-series`
- `PASS [cor-compositions-have-generating-function-x-over-one-minus-two-x] linear-recurrence-matches-rational-series`

Result:

- `finite-smoke` reports `0 error(s), 4 check(s) over 4/349 item(s)`.
- `gate-liveness` now reports `finite-smoke` live instead of VACUOUS.

## Risk reviews

Decision: `confirmed real contract defects`.

`risk-report --require-reviewed` entered with 85 missing Alpha `risk_review`
rows. The missing routed items were in batches `2`, `3`, `4`, `5`, `6`, and
`10`. I reread the current proof clusters from disk and wrote the missing
`risk_review` blocks into the owning batch contracts, using the current
mathematical chains rather than templating over absent work:

- batch `2`: positive-definite binary quadratic forms and reduction
- batch `3`: Kummer theory and solvability by radicals
- batch `4`: localisation of modules, support, and Nakayama
- batch `5`: symbolic method, Foata, and Eulerian-number material
- batch `6`: designs, finite projective planes, and Erdos-Hajnal bounds
- batch `10`: polynomial Rodl, virality, and Erdos-Hajnal equivalence

Result:

- `risk-report --require-reviewed` now exits `0` with `349 item(s) routed`.

## Merged-contract sanity

`node tools/proof-contract.mjs research/frontier-19-proof-contracts.json --strict`
is at `0 error(s), 3 warning(s), 349/349 item(s) checked`.

The remaining warnings are existing `shotgun-bracket` warnings on:

- `ex-primes-represented-by-x-squared-plus-two-y-squared`
- `thm-local-criterion-for-zero-modules-and-maps`
- `thm-loglog-erdos-hajnal-bound`

They are warnings, not failures of this dispatch’s required gate set.

## Defect ledger

Prepared rows:

- `frontier-19-contract-audit-001` — boundary contract rows
- `frontier-19-contract-audit-002` — widened fact restatements
- `frontier-19-contract-audit-003` — missing `risk_review` rows
- `frontier-19-contract-audit-004` — finite-smoke vacuity

Artifact:

- `research/frontier-19-alpha-contract-audit-ledger-rows.json`

## Final gate state

On Wednesday, August 26, 2026, the required contract-audit commands all pass on
the current disk state:

- `boundary-audit`: pass
- `citation-fidelity`: pass
- `gate-liveness`: pass (`finite-smoke` live at 4 checks)
- `risk-report --require-reviewed`: pass

No contract-audit blocker remains open.
