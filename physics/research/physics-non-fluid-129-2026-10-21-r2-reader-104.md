# Step 3a reader report — batch 104

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `104`

## Opened inventory

- Assigned pages: `qsmx-topological-lattice` (A) and `qsmx-topological-lattice-examples` (B), including their current frontmatter and compact page layouts.
- Assigned items, reviewed supplier before consumer: `def-qsmx-toric-cellular-hamiltonian`; `thm-qsmx-toric-ground-space` and `lem-qsmx-toric-local-pauli-centralizer`; `thm-qsmx-toric-strings-and-local-tests`; `ex-qsmx-toric-defect-pair`.
- Direct mathematical prerequisites opened: `def-qsm-local-spin-algebras`, `def-topological-manifold-with-and-without-boundary`, `def-r-orientation-of-a-topological-manifold`, `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g`, `def-axiom-of-choice`, `thm-classification-of-compact-connected-surfaces`, and `def-euler-characteristic-of-a-finite-cw-complex`.
- Required prerequisite pages opened: `qsm-quasilocal-states`, `qsmx-lieb-robinson-spectral-flow`, `orientations-poincare-lefschetz-and-alexander-duality`, and `classification-of-compact-connected-surfaces`.
- Also inspected the current batch-104 notes, proof contracts, cross-batch dependency row, and batch-102 manifest entry for the required `qsmx-lieb-robinson-spectral-flow` page. After clarifying the shared definition, I checked its other current direct consumer, `ex-qsmx-double-z2` in batch 105; its coordinate-cycle use is unchanged.
- Read the relevant full-text passages of Kitaev, *Fault-tolerant quantum computation by anyons*, arXiv HTML, §1 equations (1)–(4) and §2 equation (5), and Preskill, *Lecture Notes for Physics 219: Quantum Computation*, §9.6’s torus-degeneracy discussion and §9.7, PDF pp. 16–21. These support the cited stabilizer, Hamiltonian, torus-cycle, ground-space, excitation, and gap conventions. The local proofs establish the stated generalizations; the sources are not treated as substitutes for those proofs.

## Edits and evidence

- `def-qsmx-toric-cellular-hamiltonian`: changed the title from “on an oriented cellulation” because the construction assigns no orientation to the surface or cells and works with mod-two incidence data. Clarified the cell-attaching and repeated-incidence conventions, standard coordinate pairings and transposes, and the finite graph-path and mod-two chain definitions used by consumers. The orientation hypothesis remains available for the later genus result. The batch-104 consumers and the batch-105 consumer use these conventions consistently; no consumer statement or proof needed repair.
- `thm-qsmx-toric-ground-space`, proof 2.1: replaced the asserted kernel/common-eigenspace equivalence with the quadratic-form identity for a positive weighted sum of orthogonal penalty projections. This shows directly that zero energy is equivalent to every penalty vanishing. Proof 2.2 now proves the common eigenbasis needed to infer a spectral bound for every eigenvalue, by successively restricting commuting projections to invariant eigenspaces. Updated the corresponding proof-contract derivations.
- `thm-qsmx-toric-strings-and-local-tests`, proof 1.2: supplied the finite Pauli-basis argument, including the finite support index set and zero extension outside it. Updated its proof-contract derivation.
- `ex-qsmx-toric-defect-pair`, Verification 1.1: supplied the quadratic-form argument establishing that the Hamiltonian kernel is exactly the common stabilizer space. Updated its proof-contract derivation and corrected the contract’s stale finite-check step references (primal: 2.1 and 3.1; dual: 2.2 and 4.1).
- No stale `verification.judge` record was present on the edited items. Reflow reported all four edited items unchanged. Precheck passed for the three proof-bearing edited items; the definition had zero proof steps to check. The final proof-layout run reported 4 items, 15 steps, 0 defects.

## Mathematical and diagram review

The local centralizer lemma’s rank and homology argument is valid: connectedness gives ranks $|V|-1$ and $|F|-1$, hence first homology dimension two on the square torus; the stated intersection matrix detects both classes. Its support hypothesis makes the local cycle and cocycle pair trivially with the complementary coordinate cycles, yielding the claimed boundaries and coboundaries. The ground-space dimension and gap calculation preserve the finite, unperturbed scope. The scalar-compression proof reduces each supported operator to Pauli terms and handles anticommuting and commuting terms separately. The open-string example’s endpoint parity and energy costs follow from the stated incidence maps and positive couplings. The cited sources match their locators; no empirical conclusion is asserted.

Checked both assigned TikZ diagrams. In `thm-qsmx-toric-strings-and-local-tests`, the horizontal primal and vertical dual representatives cross once on a shared edge, matching the labels and odd intersection parity. In `ex-qsmx-toric-defect-pair`, the three-edge primal string has exactly the two marked endpoints and is explicitly presented as a torus patch. The prerequisite `qsm-quasilocal-states` inclusion triangle also has the correct nested-region arrows and commuting direct inclusion. The assigned pages themselves contain no diagrams.

## Page verdicts

- `qsmx-topological-lattice` (A): pass after the title correction to its shared definition. Its listed items cover the Hamiltonian, ground-space result, local centralizer lemma, and local scalar-compression result. Its empty body is consistent with the compact-v1 page layout. No page-prose defect found.
- `qsmx-topological-lattice-examples` (B): pass. Its example listing matches the endpoint-defect item, and its empty body is consistent with compact-v1. No page-prose defect found.

## Defect outside edit scope and coverage limit

Two published prerequisite pages contain items whose carriers omit the schema-required status field. `library/topology/classification-of-compact-connected-surfaces.md` has `status: published` and lists `thm-classification-of-compact-connected-surfaces`; that item carrier has no `status`, which the schema treats as draft. The assigned consumer `thm-qsmx-toric-ground-space` reaches this page through `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g`. `library/set-theory/relations-functions-and-quotients.md` likewise has `status: published` and lists `def-axiom-of-choice`, whose carrier has no `status`; `thm-qsmx-toric-ground-space` depends on that item directly. Both are reported as fatal `ill-formed` published-page findings. I did not edit either published page or item.

The batch-104 cross-batch evidence row for `qsmx-lieb-robinson-spectral-flow` says that all nine manifested items were checked. The current batch-102 manifest and supplier page list eleven items. This makes the row’s stated nine-item coverage stale or incomplete. I did not inspect the three additional supplier proofs or their readiness records, and cannot edit the other batch or the cross-batch evidence file. No assigned item’s `deps` or `justified_by` closure reaches an item on that page; batch 104 uses no Lieb–Robinson, spectral-flow, or clustering result in its proofs. The page-level `requires` edge therefore has no assigned-item consumer for a routed in-run-dependency finding. This discrepancy does not block the mathematical review of the batch-104 claims, but the cross-batch readiness coverage remains unverified here.

No blocker remains within the assigned items or pages. The two uneditable published-page findings are recorded in the findings JSON.
