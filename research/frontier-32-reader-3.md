# Frontier 32 — Independent reader report, batch 3

## Scope opened

- Manifest, authoring record, coverage record, and proof contracts:
  `research/frontier-32-batch-3.pages.json`,
  `research/frontier-32-batch-3.notes.md`,
  `research/frontier-32-batch-3.coverage.json`, and
  `research/frontier-32-batch-3.proof-contracts.json`.
- Assigned pages: A
  `library/measure-theory/radon-measures-and-the-riesz-markov-kakutani-theorem.md`
  and B
  `library/measure-theory/radon-measures-and-the-riesz-markov-kakutani-theorem-examples.md`.
- All 43 assigned current item files: 36 A-page items and seven B-page
  examples/counterexamples.  The six definitions, orientation remark,
  monotonicity lemma, and LCH cutoff were separately checked; the remaining
  34 proof-bearing items are listed below.
- The complete direct dependency closure of the manifest (69 distinct IDs) was
  opened.  This includes the LCH/compact-closure/Urysohn/partition and
  Carathéodory results; Euclidean and Lebesgue--Stieltjes regularity; finite-p
  simple-function density; signed/complex integration and variation; the
  ordinal, club, and compactness results; and the Riemann, Dirac, density, and
  counting-integration results needed by B.  Their statements support the
  intended routes; they do not supply the omitted proofs in the assigned files.
- Current source records were opened through the batch coverage/notes:
  Cohn, *Measure Theory*, Ch. 7; Stanford Math 205A Supplement 4; and the
  Directorate wedge-space counterexample notes.  They support the intended
  theorem families and the weak-Radon/strong-regularity distinction, but the
  assigned items must state and derive their own claims.

## Confirmed in-flight defects

### Systematic fatal statement, proof, witness, and contract failure

Thirty-four proof-bearing items are authoring templates, not mathematical
items.  Each has an imperative `## Statement`/`## Example`/`## Statement
refuted` paragraph (for example, “use,” “prove,” “derive,” or “work through”)
rather than hypotheses and a conclusion.  Its proof/refutation/verification
then says only to apply the construction specified in that paragraph and that
the result has the asserted conclusion.  Thus no theorem is actually stated,
no RMK construction is performed, and no counterexample supplies a displayed
witness or calculation.  These are fatal `ill-formed` defects, not a routine
gap a reader can close.

Affected A items:

- `lem-finite-lch-partition-of-unity-near-a-compact-set`,
  `lem-rmk-functional-outer-content-is-well-defined`,
  `thm-rmk-functional-outer-content-is-an-outer-measure`,
  `thm-rmk-open-sets-are-caratheodory-measurable`,
  `lem-rmk-compact-set-formula-and-local-finiteness`,
  `thm-rmk-representing-measure-is-inner-regular-on-open-sets`, and
  `thm-rmk-positive-functional-is-integration-against-its-representing-measure`.
- `thm-rmk-uniqueness-among-radon-measures`,
  `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact`,
  `cor-second-countable-lch-locally-finite-borel-measures-are-regular`,
  `thm-lebesgue-measure-is-a-radon-measure-on-rn`,
  `prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r`,
  `thm-lusin-theorem-for-radon-measures`, and
  `thm-c-c-is-dense-in-l-p-for-radon-measures`.
- `lem-positive-c-zero-functionals-have-finite-regular-representing-measures`,
  `lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals`,
  `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`,
  `lem-countable-intersections-of-club-subsets-of-omega-one-are-club`,
  `thm-dieudonne-club-set-function-is-a-borel-measure`,
  `lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant`,
  and `lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions`.
- All six false statements:
  `fs-every-borel-measure-on-an-lch-space-is-radon`,
  `fs-rmk-representing-measure-is-unique-among-all-borel-measures`,
  `fs-positive-linear-functionals-on-c-c-are-uniformly-bounded`,
  `fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets`,
  `fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular`, and
  `fs-c-c-is-dense-in-l-infinity-for-radon-measures`.

Affected B items:

- `ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure`,
  `ex-point-evaluation-functional-is-represented-by-a-dirac-measure`,
  `ex-locally-integrable-density-functional-is-represented-by-g-dlambda`,
  `ex-lebesgue-stieltjes-functional-is-represented-by-its-stieltjes-measure`,
  `ex-counting-functional-on-a-discrete-lch-space`,
  `cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular`, and
  `cex-distinct-borel-measures-can-represent-the-same-c-c-functional`.

The 36 proof-bearing contract entries are likewise boilerplate: every contract
records only `1.1: Construction` and `2.1: Conclusion`, and every empty-case
row cites `step 1.1`.  The 34 template items therefore have no contract that
records their required cutoff, outer-measure, regularity, ordinal, or witness
obligations.  Rewriting an affected item requires a corresponding specific
contract rewrite.  Structural `proof-contract --strict` success is not a
mathematical verification.

### Local repair

`items/lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set.md`, proof
step 2.1, formerly said that `\overline V\setminus V` is a relative
neighbourhood.  That need not be true (it is generally the boundary).  I
replaced it with the correct continuity argument: continuity on `\overline V`
plus zero boundary values makes the zero extension continuous.  The argument,
claim, and proof obligations are unchanged, so the proof contract needs no
material change.  No `verification.judge` field was present to remove.

## Page verdicts

| Page | Verdict | Reason |
| --- | --- | --- |
| A: `radon-measures-and-the-riesz-markov-kakutani-theorem` | fail | The definitions and two short lemmas are sound after the local repair, but 27 central results/refutations have no stated claim or proof. |
| B: `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` | fail | All five examples and two counterexamples lack the promised functional calculation or explicit ordinal witness. |

## Edits and validation

- Repaired only
  `items/lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set.md`.
- Reflow on that item: unchanged after the repair.
- Focused precheck: passed (1 checked, 0 failing).
- `node tools/manifest-deps.mjs research/frontier-32-batch-3.pages.json`:
  43 items, 0 normalised, 0 errors.
- `node tools/content-policy.mjs research/frontier-32-batch-3.pages.json`:
  43 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-3.proof-contracts.json --strict`:
  36/36 structurally checked, 0 errors, 0 warnings; see the fatal substantive
  contract defect above.
- `node tools/boundary-audit.mjs research/frontier-32-batch-3.proof-contracts.json`:
  no mechanically contradicted row, but it reported the 36-row empty-case and
  252-row not-applicable boilerplate clusters described above.

## Blocker

No permission or source-access blocker.  Batch 3 cannot pass until the 34
template items and their specific proof contracts are substantively authored.
All confirmed remaining defects are in-flight assigned content/contracts, so
there is no uneditable finding for the structured findings artifact.
