# Step 3a reader report — batch 103

**Run:** `physics-non-fluid-129-2026-10-21-r2`  
**Role:** reader  
**Scope:** batch 103

## Opened inventory

Assigned pages:

- `library/quantum-statistical-mechanics/qsmx-matrix-product-states.md` (A)
- `library/quantum-statistical-mechanics/qsmx-matrix-product-states-examples.md` (B)

Assigned items, reviewed supplier-first:

1. `thm-qc-schmidt-decomposition` and `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases` (published mathematical suppliers)
2. `def-qsmx-mps-and-transfer`
3. `def-qsm-local-spin-algebras`, `def-qsm-quasilocal-spin-algebra`, `def-qsm-infinite-algebraic-state`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `lem-qsm-matrix-state-calculus`, `lem-qsm-consistent-local-states`, and `def-countable-choice`; then `def-qsmx-transfer-infinite-state)
4. `thm-singular-value-decomposition); then `alg-qsmx-schmidt-mps-truncation`
5. `def-qsmx-information-conventions` (current-run supplier in batch 101), `cor-mean-value-theorem`, `thm-logarithm-derivative-and-integral`, and `thm-natural-logarithm-laws`; then `thm-qsmx-schmidt-mps-error`
6. `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `def-characteristic-polynomial-of-an-operator`, `def-algebraic-and-geometric-multiplicity-of-an-eigenvalue`, `thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity`, `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`, `thm-jordan-canonical-form-from-pid-module-structure`, plus the previously opened QSM matrix-state-calculus lemma; then `thm-qsmx-primitive-transfer-clustering`
7. `ex-qsmx-ghz-noninjective)

Opened the assigned pages' prerequisites `qsmx-entropy-entanglement`, `qsm-quasilocal-states`, and the read-only root mathematics page `pure-and-mixed-states-ensembles-and-schmidt-decomposition`. I read the batch notes, coverage record, and all six proof-contract entries as navigation/evidence; none was treated as an acceptance verdict.

## Mathematical and source review

All six items are mathematical-domain material. There are no physical postulates, experiments, empirical premises, or statistical claims in this batch.

- The finite MPS construction, transfer map, Γ map, injectivity definition, and parent-projector argument are well typed. The algebraic proof shows each local projector kills every block slice of an open MPS. No uniqueness or gap claim is made.
- The transfer insertion proof establishes positivity and normalization of the local functionals, consistency of their density matrices, and unique extension under the stated Countable Choice assumption. It does not select a global infinite tensor-product Hilbert space.
- The truncation procedure supplies exact finite instructions, including its degenerate-singular-value tie rule. The error proof uses nested retained-subspace projections, so the discarded components are orthogonal and the equality is for the current-sweep $\delta_k$ values. It does not identify them as original-input Schmidt tails.
- The entropy argument uses the positive Schmidt spectrum, its rank bound, and the natural-log inequality proved from the cited mean value theorem.
- The clustering proof correctly isolates the rank-one fixed-point projection and bounds powers on the invariant complement using Jordan blocks. Its rate is any (r>q), with the (q=0) and zero-dimensional-complement cases handled. It does not assume diagonalizability.
- The GHZ calculation gives the two constant words in the finite periodic contraction and the infinite-state connected (Z) correlation (1) at every gap.
- The MPS tensor-network diagram matches the contraction formula: the boundary row (ell^*), matrix order, bond labels, right column (r), and open physical legs agree. The proof is algebraic and does not rely on the diagram. No other TikZ/tikzcd diagram occurs in the assigned pages/items.

I opened the cited primary/tutorial sections:

- Pérez-García et al., [*Matrix Product State Representations*](https://arxiv.org/pdf/quant-ph/0608197): §3.1 Theorem 1 states OBC-MPS completeness and describes successive SVD construction; §3.2.2 Eq. (15) gives the transfer CP map; §3.2.4 Eq. (18) and Condition C1 concern the block map and injectivity; §2.2 Eq. (6) gives exponential clustering for the stated finitely-correlated-state setting; §2.4 contains the GHZ example; §4.1.1 treats parent projectors and uniqueness under Condition C1. Those source hypotheses are narrower than some local statements here. The assigned items prove their broader finite-dimensional claims locally and do not import the source's uniqueness or gap conclusions.
- Misguich, [*Introduction to matrix-product states and tensor networks*](https://arxiv.org/pdf/2606.24803): §2.3.1 gives GHZ tensors; §2.4.4 discusses entropy and MPS compression by SVD; §2.5.3 Eqs. (27)–(30) gives transfer-matrix correlations; Appendix A.1 Eqs. (96)–(103) gives the SVD tail bound, Schmidt decomposition, reduced spectra, and entropy; Appendix B.1 defines the block map; Appendix B.3 constructs the parent projector and shows the frustration-free ground-state property in the injective setting.
- Naaijkens, [*Quantum Spin Systems on Infinite Lattices*](https://arxiv.org/pdf/1311.2717v2), §3.2.3, printed pp. 55–57, supports the finite local spin algebras, inclusions, and quasi-local norm completion used by the state construction.
- Watrous, *The Theory of Quantum Information*, Ch. 5 §5.2.1, and Wilde, *From Classical to Quantum Shannon Theory*, Ch. 11 §§11.1 and 11.6, support the finite-dimensional entropy conventions in the batch-101 supplier. The item itself gives the exact mathematical definitions used here.

The reader check found incorrect locators in six assigned item bibliography entries. I corrected them in the item files: Pérez-García's OBC Theorem 1 is in §3.1, the transfer map is §3.2.2 Eq. (15), the FCS correlation Eq. (6) is §2.2, and the GHZ example is §2.4. The batch-103 coverage record and author notes still carry some of their earlier incorrect locator text. Those research evidence files are outside the authorized item/A-page write scope and are not schema-routable item/page findings; I left them unchanged.

## Repairs and validation

1. In `def-qsmx-mps-and-transfer`, I defined ground energy by the infimum of the normalized quadratic form and defined a ground-state vector by attaining that infimum. I then made the proof show that a nonzero MPS is in the kernel and that positivity makes the attained value $0$; the zero vector is explicitly excluded. This repairs the formerly undefined “ground state” term without changing the claimed MPS/projector result or its dependencies. I updated its step 2.1 contract entry and the four consumer contract quotations of this Definition. All five assigned item consumers were checked; they use the transfer map, representation, or bond-factorization clauses and do not rely on the ground-state wording.
2. In `ex-qsmx-ghz-noninjective`, I defined the symbols $E_{ij}$ as the ordered matrix units in the Example and replaced the undefined “algebraic multiplicity” shorthand with the explicit two-dimensional fixed subspace. I updated its step 2.1 contract entry. Its assigned B-page placement is its only current consumer.

No item had a `verification.judge` record, so none was removed; no verification stamp was added. Reflow was unchanged for five items and reflowed the clustering theorem; precheck passed for all five proof-bearing items, while the algorithm correctly had no proof steps to check. The final strict proof-contract check passed for 6/6 items with 0 errors and 0 warnings. The required final proof-layout run reported 6 items, 19 proof steps, and 0 defects.

## Page verdicts

- `qsmx-matrix-product-states` (A): **pass**. The five-item list, empty examples list, and three prerequisites agree with the manifest. Its blank body is consistent with the current frontmatter-only page convention.
- `qsmx-matrix-product-states-examples` (B): **pass**. Its single GHZ example, empty regular-item list, and A-page prerequisite agree with the manifest. Its blank body is consistent with the current convention.

## Uneditable findings and blocker

No confirmed or suspected defect remains in the assigned items/pages or their reviewed dependency uses. No blocker.
