# phase-2-remaining-27 — boundary-row cleanup, batches 4, 5, 6

Scope: `research/phase-2-remaining-27-batch-{4,5,6}.proof-contracts.json`, edited
**only** in their `boundaries` rows. No item file, manifest, coverage file,
merged run-level contract or sibling batch file was touched. Owned by
`alpha-high step3b-boundary-4-6`.

## Work list

Flagged rows recomputed from
`node tools/boundary-audit.mjs research/phase-2-remaining-27-batch-{4,5,6}.proof-contracts.json --json`
at the start of the dispatch: 20 template clusters (640 rows) and 51
contradicted candidates, i.e. **642 distinct flagged rows** over 85 items.

| Batch | Flagged rows | Items |
|---|---|---|
| 4 | 0 | 0 |
| 5 | 258 | 37 |
| 6 | 384 | 48 |

Every one of the 642 rows was read against `items/<id>.md` (complete
Statement/Definition/Example and complete
Proof/Verification/Refutation/Counterexample) and rewritten so that the reason
or evidence names the item-specific hypothesis, definition, clause or proof
step that excludes or handles the axis. No sentence is reused between items.
Batch 5's contracts contained literal placeholder reasons (`"t"`, `"A"`,
`"h"`, `"C"`) on many rows and batch 6's contained title-interpolated boilerplate
(`The number zero is not an exceptional parameter of "<title>"`); those are all
gone. Rows are patched in place: case order, row order, `scope`, item order,
`citations`, `derivations` and `routine_steps` are unchanged everywhere.

## Status changes

Of the 642 flagged rows, 46 were originally `checked` (34 batch-6
`nonempty-choice` rows from one cluster, 3 rows on the `lem-continuous-…` /
`thm-bounded-normal-operator-abstract-spectral-theorem` /
`ex-functional-calculus-for-a-diagonal-operator` trio, and 9 rows on
`def-c-star-algebra-generated-by-a-normal-operator`,
`def-isometry-coisometry-and-partial-isometry`,
`def-order-on-bounded-self-adjoint-operators`).

- **101 rows `not_applicable` → `checked`** (the axis genuinely arises and the
  item discharges it; the new evidence names the step or definition that does
  the work): by case `empty` 14, `nonempty-choice` 26, `iff-forward` 23,
  `iff-reverse` 23, `zero` 7, `endpoints` 8. Items with new `checked` rows
  include `cor-spectral-projections-and-resolution-of-the-identity` (5),
  `thm-stone-resolvent-formula-for-spectral-projections` (5),
  `lem-weak-and-strong-additivity-of-orthogonal-projections` (4),
  `def-c-star-algebra-generated-by-a-normal-operator` (3),
  `thm-spectral-theorem-for-bounded-normal-operators-pvm-form` (3),
  `def-projection-valued-measure` (3), `def-cyclic-vector-and-cyclic-normal-operator` (3),
  `def-spectral-multiplicity-function-in-the-separable-case` (3),
  `thm-unitary-equivalence-classified-by-measure-class-and-multiplicity` (3),
  `lem-continuous-functional-calculus-produces-a-regular-pvm` (3) and 22 further items.
- **6 rows `checked` → `not_applicable`**: these carried a three-item shared
  `checked` text that did not fit the item (`def-c-star-algebra-generated-by-a-normal-operator`
  zero, degenerate; `def-isometry-coisometry-and-partial-isometry` degenerate;
  `def-order-on-bounded-self-adjoint-operators` zero, degenerate,
  nonempty-choice). Each now gives the item-specific reason, e.g. the zero
  operator as the empty combination for the generated algebra, and the role of
  the zero operator in reflexivity/antisymmetry for the order.
- The remaining rows keep their status (`not_applicable`, except the 40
  original `checked` rows that were re-evidenced item by item).

### Rows upheld by review (12)

The three audit detectors are regexes over surface text; on these rows the
string they match is not a mathematical obligation of the item. Each row keeps
`not_applicable`, has an item-specific `reason`, and carries
`reviewed: {upheld: true, by: "alpha-high step3b-boundary-4-6", reason}`:

- `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection` `zero`
  — the "symbolic denominator" is the constant `2πi` of the Cauchy kernel; the
  resolvent is evaluated on a circle inside the resolvent set.
- `def-unbounded-linear-operator-domain-and-graph` `iff-forward`, `iff-reverse`
  — the definition's "if and only if" pairs extension of operators with
  inclusion of graphs; it is definitional unpacking, not a theorem.
- `def-symmetric-self-adjoint-and-essentially-self-adjoint` `iff-forward`, `iff-reverse`
  — the detector fires on the *slug* of the cited item
  `thm-closable-iff-adjoint-domain-is-dense`, not on any biconditional in the
  Definition; the only reverse-looking clause (unique self-adjoint extension)
  is a one-way uniqueness claim proved by an inclusion chain.
- `thm-stone-one-parameter-unitary-groups` `zero`
  — the matched fraction is the derivative notation `d/dt` of step 2.1, not a
  killed denominator; the step computes a vanishing derivative of a squared
  norm.
- `def-deficiency-subspaces-and-deficiency-indices` `empty` and
  `def-discrete-and-essential-spectrum-of-a-self-adjoint-operator` `empty`
  — the word `family` occurs only inside the slug of the cited
  `def-orthonormal-family-…` supplier; neither item forms an indexed aggregate.
- `def-relative-boundedness-with-respect-to-an-operator` `iff-forward`, `iff-reverse`
  — a definition: the estimate/graph-norm dictionary is displayed with both
  implications in the same paragraph, and the further resolvent equivalence is
  recorded explicitly as an interface for its consumer.
- `def-relative-compactness-with-respect-to-an-operator` `empty`
  — `family` names the nonempty one-parameter family of rescaled resolvents in
  the paragraph proving bound zero; no vacuous aggregate is formed.
- `ex-periodic-derivative-and-its-unitary-translation-group` `zero`
  — the "symbolic denominator" is the fixed positive constant `e − 1` that
  normalises the integration constant of the explicit solution.

## Items whose proofs need a real boundary case

**None.** No flagged row concealed an unhandled case: every axis either does
not arise for the item (no division by a vanishing parameter, no indexed
aggregate, no biconditional, no dimension/index parameter, no interval
endpoints) or is discharged by a named step or defining clause, and where it is
discharged the row is now `checked`. No item file was edited, and no item was
stopped or escalated for a missing case.

Three observations for the owner (none is a boundary-row defect, none was
edited by this dispatch, none is a published item):

1. `thm-kato-rellich` — step 1.1 still contains an unfinished editorial
   fragment: `put $X_\pm:=\mp i\,BR_A(\pm i\mu)$ hmm: take $X:=BR_A(i\mu)$ and
   $Y:=BR_A(-i\mu)$ …`. The step's mathematics (the Neumann-series preparation)
   is standard and the surrounding steps are sound, but the text is a drafting
   artifact that should be repaired by the item's owner.
2. `def-relative-boundedness-with-respect-to-an-operator` — the closing
   sentence records the equivalence "`B` is `A`-bounded exactly when
   `BR_A(z)` is bounded for some, equivalently every, `z∈ρ(A)`" explicitly as
   an *interface* for the Kato–Rellich consumer rather than proving it. The
   equivalence is correct and immediate from the displayed estimate together
   with the resolvent identity, and the consumer does not actually invoke it,
   so this is a proof-completeness note, not a defect.
3. `ex-pvm-of-a-diagonal-normal-operator` — the statement says "Let `I` be a
   set" without the nonempty restriction used elsewhere on the page. With
   `I=∅` the space is the zero space and step 1.1's identity `‖T‖ = sup_i|λ_i|`
   has an empty supremum. Every displayed claim of the *statement* remains true
   vacuously in that reading; the minimal repair, if wanted, is to say
   "nonempty `I`" (equivalently, a nonzero space), matching the page.

## Final audit output (my three files)

`node tools/boundary-audit.mjs research/phase-2-remaining-27-batch-4.proof-contracts.json research/phase-2-remaining-27-batch-5.proof-contracts.json research/phase-2-remaining-27-batch-6.proof-contracts.json --fail-on-contradicted --fail-on-template` → **exit 0**:

```text
boundary-audit: 1608 rows over 3 contract file(s); 1129 marked not_applicable

TEMPLATE REUSE — none at or above 3 members.

CONTRADICTED DISPOSITIONS — none found by the three detectors.

UPHELD BY REVIEW — 12 row(s) an Alpha read and kept, with reasons on the record:
  ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection  [zero]
  def-unbounded-linear-operator-domain-and-graph  [iff-forward] / [iff-reverse]
  def-symmetric-self-adjoint-and-essentially-self-adjoint  [iff-forward] / [iff-reverse]
  thm-stone-one-parameter-unitary-groups  [zero]
  def-deficiency-subspaces-and-deficiency-indices  [empty]
  def-relative-boundedness-with-respect-to-an-operator  [iff-forward] / [iff-reverse]
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator  [empty]
  def-relative-compactness-with-respect-to-an-operator  [empty]
  ex-periodic-derivative-and-its-unitary-translation-group  [zero]

Every line above is a candidate for a human read, not a verdict.
```

Same files `--json`: `template_clusters: 0`, `rows_in_template_clusters: 0`,
`contradicted_candidates: 0`, `upheld_by_review: 12`,
`items_not_yet_authored: 0`.

## Checks actually run

- `boundary-audit` on my three files with `--fail-on-contradicted
  --fail-on-template` → exit 0 (output above).
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-{4,5,6}.proof-contracts.json --strict`
  → batch 4: 0 errors, 0 warnings; batch 5: 0 errors, 2 warnings
  (`shotgun-bracket` on `lem-spectral-permanence-for-unital-c-star-subalgebras`
  and `thm-partial-isometry-characterizations`, both untouched by this
  dispatch); batch 6: 0 errors, 0 warnings.
- Merge to `/tmp` only (`node tools/merge-proof-contracts.mjs --level
  phase-2-remaining-27 /tmp/bc456/merged-after-456.json
  research/phase-2-remaining-27-batch-*.proof-contracts.json`) → 961 scoped
  items from 15 batch contracts. The run-level audit of that snapshot shows
  **0 clusters and 0 contradicted candidates touching any of my item ids**;
  the residual 25 clusters / 3 contradicted candidates belong to sibling
  batches (their owners' scope). The run-level file itself was not edited.
- `node tools/finite-smoke.mjs /tmp/bc456/merged-after-456.json` → 0 errors.
- `node tools/risk-report.mjs /tmp/bc456/merged-after-456.json` → 0 errors.
- `node tools/citation-fidelity.mjs /tmp/bc456/merged-after-456.json
  --fail-on-missing-quote` → exit 0, `quote_not_found: 0`; the 5
  `widening` candidates are in other batches, none in batches 4–6.
- Integrity diff against the run-level snapshot
  `research/phase-2-remaining-27-proof-contracts.json` (a state that predates
  the last patch groups): across all 201 items of the three batches there are
  0 differences in `citations`, `derivations` or `routine_steps`, 0 boundary-row
  differences on items I did not flag, unchanged row counts and row order, and
  unchanged scope. The only differences are the flagged boundary rows.

## Open obligations / handoff

1. The engine's merge gate must re-merge the three batch files into
   `research/phase-2-remaining-27-proof-contracts.json`; the run-level file is
   stale by design and was not edited here.
2. Sibling batches still carry their own template clusters and contradicted
   candidates; the run-level gate stays red until those owners finish.
3. No local suppliers, definitions, lemmas or items were added; no
   `step3-decisions` record, judge stamp or audit stamp was created by this
   dispatch. The three observations above are routed to the owner; nothing else
   is unresolved in the boundary rows of batches 4–6.
