# phase-2-remaining-27 — boundary-row cleanup, batches 1, 2, 3

Scope: `research/phase-2-remaining-27-batch-{1,2,3}.proof-contracts.json`, edited
only in their `boundaries` rows. No item file, manifest, coverage file, merged
run-level contract or sibling batch was touched. Owned by
`alpha-high step3b-boundary-1-3`.

## Work list

The run-level gate's flagged set restricted to my item ids: 199 template-cluster
rows over 86 items plus 14 contradicted candidates over 7 items; 12 rows were in
both classes, so 201 distinct rows were read and rewritten
(`endpoints` 73, `iff-forward` 43, `iff-reverse` 42, `one` 27,
`nonempty-choice` 16). Every one of the 201 rows now states the item-specific
fact that excludes or handles its axis: named hypotheses, definitions, proof
steps and cited identities, with no sentence reused between items.

Read for the audit: the complete Statement/Definition/Example and
Proof/Verification/Refutation/Counterexample sections of all 86 items, plus the
two remark bodies. 201 rows rewritten; 0 rows left as generic boilerplate; no
item file, citation, derivation or routine step was altered, added or reordered.
The merged run-level file was **not** edited; it is stale until the engine's
`merge-contracts` gate re-runs.

## Status changes — 26 rows `not_applicable` → `checked`

These axes genuinely arise and the proofs discharge them; each new `evidence`
names the step (or the definition) that does the work:

- `def-hilbert-space` — one
- `lem-inner-product-is-jointly-continuous` — one
- `thm-hilbert-adjoint-properties` — one
- `thm-parallelogram-law` — one
- `cor-lambda-identity-minus-compact-has-index-zero` — one
- `cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation` — one
- `def-approximable-operator` — one
- `def-fredholm-operator-cokernel-and-index` — one
- `def-spectrum-and-resolvent-of-a-bounded-operator` — one
- `ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval` — one
- `ex-fredholm-alternative-for-an-integral-equation` — one
- `lem-a-compact-remainder-estimate-forces-closed-range` — one
- `lem-compositions-with-a-compact-operator-are-compact` — one
- `lem-fredholm-splitting-and-parametrix` — one
- `lem-kernel-of-identity-minus-compact-is-finite-dimensional` — one
- `lem-neumann-series-and-small-perturbations-of-bounded-inverses` — one
- `lem-range-of-identity-minus-compact-is-closed` — one
- `lem-riesz-schauder-ascent-and-descent-stabilize` — one
- `thm-atkinson` — one
- `thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences` — one
- `thm-fredholm-alternative-for-identity-minus-compact` — one
- `thm-fredholm-index-is-additive` — one
- `thm-fredholm-index-is-locally-constant` — one
- `thm-norm-limit-of-compact-operators-is-compact` — one
- `thm-schauder-compact-adjoint-theorem` — one
- `thm-sequential-characterization-of-compact-operators` — one

The other 175 rows keep their original status (`not_applicable`, except none
was `checked`) with a rewritten, item-specific reason.

## Contradiction-detector rows upheld by review — 14 rows on 7 definition items

The `iff` detectors fire on lexical `iff`/`exactly when`/`if and only if`
strings in these definitions, but no direction of a biconditional is claimed or
proved there. Each row keeps `not_applicable` with an item-specific reason and
carries `reviewed: {upheld: true, by: "alpha-high step3b-boundary-1-3", reason}`:

- `def-real-and-complex-inner-product-space` (the `iff` is the positive-definiteness axiom quoted from `def-inner-product-space`)
- `def-self-adjoint-positive-unitary-and-normal-operator` (the `exactly when` clauses are the scalar consistency reading of the definitions of self-adjoint and unitary)
- `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` (`exactly when` fixes the definition of completeness; a Hilbert basis is a complete orthonormal family)
- `def-square-summable-family-on-an-arbitrary-index-set` (the detector's token is the dependency *name* `thm-hausdorff-iff-net-limits-are-unique`)
- `def-the-one-dimensional-torus-and-normalized-haar-integral` (`exactly when` is the quotient identity `[s]=[t] ⟺ s−t∈ℤ` defining the classes)
- `def-approximable-operator` (`if and only if` is the metric-closure/epsilon restatement of approximability; the text explicitly withholds the converse compactness statement)
- `def-spectrum-and-resolvent-of-a-bounded-operator` (`exactly when` clauses are read off `0I−T=−T` and the least-`k` argument displayed in the definition)

## Items whose proofs need a real boundary case

None. No flagged row concealed an unhandled case: every axis either does not
arise (interval-free settings, no dimension/index parameter, no selection) or is
discharged by the listed step. No proof text was edited, and no item was
stopped or escalated for a missing case.

## Published concerns

None newly identified. This cleanup read draft in-run items only; no published
item was edited, and no published defect was established. There are no open
obligations from this dispatch beyond re-merging the batch contracts.

## Checks actually run

- `node tools/boundary-audit.mjs research/phase-2-remaining-27-batch-{1,2,3}.proof-contracts.json --fail-on-contradicted --fail-on-template` → **exit 0**:

```text
boundary-audit: 1256 rows over 3 contract file(s); 412 marked not_applicable

TEMPLATE REUSE — none at or above 3 members.

CONTRADICTED DISPOSITIONS — none found by the three detectors.

UPHELD BY REVIEW — 14 row(s) an Alpha read and kept, with reasons on the record
```

- Same files `--json`: `template_clusters: 0`, `rows_in_template_clusters: 0`,
  `contradicted_candidates: 0`, `upheld_by_review: 14`.
- Merged snapshot re-merged to `/tmp` only (`node tools/merge-proof-contracts.mjs --level phase-2-remaining-27 /tmp/merged-after-b123.json research/phase-2-remaining-27-batch-*.proof-contracts.json`):
  the run-level audit shows **0 clusters and 0 contradicted candidates touching
  any of my item ids**. The residual 84 clusters / 41 contradicted candidates in
  that snapshot belong to sibling batches (their owners' scope).
- `node tools/proof-contract.mjs <each batch file> --strict` → 0 errors,
  0 warnings, 63/63, 42/42 and 52/52 items checked.
- `node tools/finite-smoke.mjs /tmp/merged-after-b123.json` → 0 errors.
- `node tools/risk-report.mjs /tmp/merged-after-b123.json` → 0 errors.
- `node tools/citation-fidelity.mjs /tmp/merged-after-b123.json --fail-on-missing-quote` → exit 0.
- Structural diff against pre-edit backups: exactly the 201 flagged rows changed
  (102 + 98 + 1); `scope`, contract key order, boundary-row order,
  `citations`, `derivations` and `routine_steps` unchanged everywhere.

## Open obligations / handoff

1. The engine's `merge-contracts` gate must re-merge the three batch files into
   `research/phase-2-remaining-27-proof-contracts.json`; the run-level file is
   currently stale by design (I did not edit it).
2. Sibling batches still carry their own template clusters and contradicted
   candidates; the run-level gate will stay red until those owners finish.
3. No local suppliers, definitions or lemmas were added; no `step3-decisions`
   record, review record or stamp was created by this dispatch.
