# Step 3a reader report — batch 102

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `102`

## Opened inventory

Assigned pages:

- `library/knot-theory/planar-diagram-codes-and-knot-table-enumeration.md` (A page)
- `library/knot-theory/planar-diagram-codes-and-knot-table-enumeration-examples.md` (B page)

Assigned items, read with suppliers before consumers:

1. `lem-connected-plane-multigraph-euler-formula`
2. `def-planar-diagram-gauss-and-dowker-codes`
3. `lem-planar-diagram-code-realizability-and-face-validation`
4. `alg-planar-code-validation-and-diagram-reconstruction`
5. `alg-enumerate-diagrams-up-to-crossing-bound`
6. `thm-planar-code-validation-and-diagram-reconstruction-procedure-properties`
7. `thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties`
8. `thm-valid-code-reconstructs-the-declared-link-diagram`
9. `cex-knot-kt-47-boundary-case`
10. `ex-knot-kt-47-worked-cases`

Mathematical suppliers opened for the assigned arguments included `def-plane-graph-face-and-boundary`, `thm-euler-formula-for-connected-plane-graphs`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-regular-oriented-link-diagram`, `lem-finite-polygonal-disk-and-collar-surgery`, `def-countable-choice`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `thm-polygonal-jordan-curve`, `thm-simple-polygon-admits-a-triangulation`, `lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type`, `lem-isotopy-extension-for-a-compact-source-with-boundary`, `lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms` (draft supplier, batch 59), `thm-fundamental-theorem-on-flows`, and `def-planar-isotopy-of-link-diagrams`. I also opened the relevant defining or statement clauses of the plane-graph, forest, induction, ordered-field, continuity, subspace, compactness, and real-completeness suppliers cited by those arguments.

## Edits and evidence

- In `alg-planar-code-validation-and-diagram-reconstruction`, step 2 now rejects a crossingless input whose outer-face marker is not exactly `outside`, returning `invalid-outer-face`. The assigned code definition specifies that marker for the crossingless code; the former branch returned a valid circle while silently replacing any supplied outer-face value with `outside`.
- In `thm-planar-code-validation-and-diagram-reconstruction-procedure-properties`, Fact F2 and proof step 3.1 now cover that zero-crossing outer-face check. The theorem's Statement is unchanged.
- In `lem-planar-diagram-code-realizability-and-face-validation`, proof step 1.1 now uses a PL chart of the punctured standard PL sphere, so the spherical polygonal graph maps to a polygonal plane multigraph before the polygonal-plane Euler lemma is applied. Stereographic projection need not preserve polygonal edges. The argument records finite subdivision, face preservation, and the unchanged incidence data; its cited facts and step uses remain unchanged.
- In `cex-knot-kt-47-boundary-case`, `Statement refuted` now states the false sufficiency claim explicitly, and the `-1` word argument is under a separate `Counterexample` section. Previously the section named `Statement refuted` stated a true fact and there was no `Counterexample` section. The two-step argument and its validation result are preserved.
- Corrected the HLP source locators in the assigned items. The old §1/§7 web-line ranges pointed to unrelated text. HLP §1 web lines 92–105 describe the finite diagram representation; §3 lines 271–283 give the regular-projection and crossing-graph conditions; §7 lines 758–854 cover polygonal realization. Visible reference labels were adjusted to state what the cited passages support. No mathematical statement was changed by these citation repairs.
- Updated the batch-102 proof-contract quotes for the algorithm Definition in the contracts of `thm-planar-code-validation-and-diagram-reconstruction-procedure-properties` and `cex-knot-kt-47-boundary-case`. No stale `verification.judge` record was present in the changed carriers.

Source checks included Erickson's rotation-system and outer-face section (web lines 49–72); Knot Atlas Gauss, PD, and DT convention passages; HLP §§1 and 3; Fish, *Codes, Links and Racks*, §5.2.1, printed pp. 67–68 (the signed right-trefoil code and cyclic-shift/relabeling); and Elhamdadi–Hajij–Istvan, *Framed Knots*, §3, Definition 3.1 and Figure 5. The signed right-trefoil code agrees with the worked word after the stated cyclic shift and label swap. The trefoil braid diagram has three positive crossings under the assigned determinant convention, and the displayed edge records and five face cycles agree with the computed dart permutation.

Checks after the final item edits:

- `reflow` and `precheck` passed for all eight changed item files; definitions and algorithms with no proof phase reported zero checked proofs and zero failures.
- Strict `tools/proof-contract.mjs` passed all seven batch-102 proof-contract entries.
- One final `node tools/proof-layout.mjs` command covered all eight changed item paths: 8 items, 21 steps, 0 defects.

## Uneditable finding

`lem-finite-polygonal-disk-and-collar-surgery` is published and outside the edit scope. In proof step 10.1 (line 66), it asserts that a shortest segment from an omitted point to the nonempty surface exists, without deriving or citing attainment of the minimum distance. The surface neighborhood is compact by construction, and the item's declared `thm-compactness-under-continuous-maps` supplier gives the needed minimum for the continuous distance function. A short sentence applying that result closes the omission immediately, so this is nonfatal. The assigned consumer whose dependency reaches this supplier is `lem-planar-diagram-code-realizability-and-face-validation`.

## Page verdicts

- `planar-diagram-codes-and-knot-table-enumeration`: the draft A-page is frontmatter-only with the exact assigned inventory, required pages, and `compact-v1` layout. No page-carrier defect. Its assigned closure includes the nonfatal published-supplier omission above.
- `planar-diagram-codes-and-knot-table-enumeration-examples`: the draft B-page is frontmatter-only with the exact two example items and `compact-v1` layout. No page-carrier defect. The assigned trefoil diagram matches the text's strand directions, crossing order, signs, and closure arcs; the counterexample item was repaired as described.

## Blockers and coverage limits

There is no batch-102 execution blocker. The live autopilot status also showed unrelated blockers at batches 71 (`3a-collect`) and 83 (`3a-split`); they are outside this assignment. I reviewed the assigned items and the supplier claims needed directly for them, but did not independently audit every transitive proof base beneath the published suppliers. HLP §7 was locator-checked for the citation correction; its complete reconstruction argument was not used in place of the assigned local proofs.
