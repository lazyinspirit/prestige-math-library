# Step 3a reader report — batch 6

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `6`  
Date: 2026-10-21

## Opened inventory

Assigned pages:

- `factorized-and-composite-linear-inversion` (A), draft, `page_layout: compact-v1`; its three-item inventory and four required-page edges match the manifest. The Markdown body is empty.
- `factorized-and-composite-linear-inversion-examples` (B), draft, `page_layout: compact-v1`; its `items` inventory is empty and its two `examples` match the manifest. The Markdown body is empty; it requires the A page.

Assigned items, reviewed in supplier-first order:

- `def-ip-composite-double-regularization`
- `thm-ip-double-discrepancy-conditional-convergence`
- `ex-ip-composite-linear-inversion-commuting-diagonal`
- `cex-ip-composite-pseudoinverse-factorization-fails`
- `op-ip-optimal-composite-discrepancy-rate`

The four page-level prerequisite IDs were checked for existence and status: `linear-operators-pseudoinverses-and-picard-criteria`, `deterministic-source-conditions-and-optimal-recovery`, `parameter-choice-and-bakushinskii-veto`, and `spectral-regularization-and-parameter-choice`. The first three are draft pages and the fourth is published. Their page bodies were not needed to establish the item-level claims.

Direct item dependencies and the run-local draft chain needed to check them were opened:

- Batch 1: `def-ip-forward-map-and-solution-classes`.
- Batch 2: `def-ip-compact-linear-inverse-model`, `def-ip-unbounded-hilbert-moore-penrose-inverse`.
- Batch 3: `def-ip-index-source-ball`, `lem-ip-index-source-elements-are-minimum-norm`, `def-ip-power-source-set`, `lem-ip-spectral-interpolation-for-power-source-balls`.
- Published dependencies: `def-countable-choice`, `def-compact-spectral-filter-and-qualification`, `def-hilbert-space-adjoint`, `thm-singular-value-decomposition-for-compact-operators`, `def-moore-penrose-pseudoinverse`, and `thm-moore-penrose-pseudoinverse-exists-and-is-unique`.

The proof contracts and batch-6 source notes/coverage were inspected as evidence and checked against the current item text and source passages. This was not an audit of the full transitive graph of published foundational items.

## Review and evidence

- The composite definition has the correct types and order: (A=G\circ F), then (R^G_\alpha), then (R^F_\gamma). Its TikZ commutative diagram has the forward arrows (X\to Y\to Z), the composite (A), and the estimator arrows (Z\to Y\to X); the labels and directions agree with the prose.
- The conditional convergence theorem's common singular system gives singular values (a_j=\lambda_j\mu_j) for (A). Its proof establishes the required minimum-norm factorization, applies the interpolation estimate to the first-stage and composite biases, bounds both residual-selection parameters, and combines the exact-data and noise terms. The two terms in its radius bound follow from these estimates; the source's printed radius power is not reused.
- The diagonal example's Tikhonov maps and product are correct: the composite coefficients are (6/((4+\gamma)(9+\alpha))) and (4/((1+\gamma)(16+\alpha))), with limit (A^{-1}=\operatorname{diag}(1/6,1/4)).
- In the counterexample, direct multiplication gives (AB=G), (BA=F), and (A^+=B\ne FG=F^+G^+). The four Penrose equations are verified by the displayed products.
- The open problem asks for a sharp worst-case rate and does not claim a lower bound. Brandt and Horn's conclusion, §4, printed p. 17, explicitly asks whether the *a-priori* rate is optimal, then separately states the finite-qualification DDP rate without explicitly posing its sharpness. The assigned item's `Status` records this distinction accurately.
- The complete statement/definition/example formulations are not interrupted by hyperlinks. The assigned counterexample's description references section was the one heading exception and has been repaired below.

Sources checked:

- Christina Brandt and Patrick Horn, “Regularisation and Parameter Choice Rules for Composite Linear Inverse Problems,” arXiv:2610.13483v1, [PDF](https://arxiv.org/pdf/2610.13483). I checked §2.1 equation (2), the DDP assumptions and first-crossing rules (equations (13)–(14), printed pp. 6–7), Lemmas 7–8, Theorem 6 and the relevant proof estimates (equations (15)–(20), printed pp. 6–9), and conclusion §4, printed p. 17. The source uses (x^\dagger=|A|^\nu w) in the proof while a displayed theorem clause mis-types the data variable; its printed radius exponent also does not follow from the proof's final product of bounds.
- Christian Clason, *Regularization of Inverse Problems*, [full lecture notes](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf). I checked the source-condition interpolation result in Theorem 4.11 and proof (printed p. 40), and the one-operator Morozov argument in Theorem 5.11 and proof (printed pp. 52–54). These support the local interpolation and one-stage ingredients, not an independent composite result.
- The arXiv record and targeted searches for the paper identifier/title and DDP optimality showed no later resolution as of 2026-10-21. No matching lower bound is asserted.

## Edit

- In `items/cex-ip-composite-pseudoinverse-factorization-fails.md`, renamed the generic `References` heading after `Counterexample description` to `Counterexample description references`, as required for complete statement sections. No mathematical claim or proof changed.
- Ran `node tools/proof-layout.mjs items/cex-ip-composite-pseudoinverse-factorization-fails.md`: 1 item, 3 proof steps, 0 defects. No material proof repair was made, so no reflow, precheck, contract change, or judge-record removal was needed.

## Defects not edited

1. Published dependency `def-moore-penrose-pseudoinverse`, Definition lines 43–46: after the correct four equations, the explanatory prose concatenates the visible titles “Rectangular matrix multiplication and the identity matrix (I_n)” and “In orthonormal bases, the matrix of the adjoint is the conjugate transpose,” leaving the paragraph ill-formed. The definition is published and outside this batch's write scope. Assigned consumers are `ex-ip-composite-linear-inversion-commuting-diagonal` and `cex-ip-composite-pseudoinverse-factorization-fails`.
2. Published dependency `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, Statement lines 33–36: the statement ends “satisfying the four Penrose equations of The Moore–Penrose pseudoinverse … as the solution of the four Penrose equations,” leaving a malformed link-title residue in the sentence. The intended existence-and-uniqueness claim is recoverable, but the published statement needs editorial repair. Assigned consumers are the same two B items.
3. The assigned open problem's review evidence is inconsistent across non-carrier records. `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-6.proof-contracts.json:553`, `...batch-6.coverage.json:106`, and `...batch-6.notes.md:40,87` say Brandt–Horn explicitly leaves DDP-rate optimality open. In the source's conclusion §4, printed p. 17, the explicit optimality question immediately follows the a-priori rate; the separate DDP sentence states its rate but does not pose the DDP optimality question. The assigned item's own Status is accurate. These review/evidence records are outside my authorized item/page write scope and are recorded as a nonfatal citation-attribution finding.

## Page verdicts and blocker

- `factorized-and-composite-linear-inversion`: verdict **pass** for this reader review. The page inventory and prerequisite metadata are consistent; the body is empty as required.
- `factorized-and-composite-linear-inversion-examples`: verdict **pass** for this reader review. Its examples inventory and prerequisite metadata are consistent; the body is empty as required.
- No mathematical blocker prevented this review. The autopilot status snapshot checked at the start showed the run active in `3a-read` counting with no batch results yet; this report does not advance a gate or certify acceptance. The unresolved published-dependency and review-record defects above remain for their owners.

## Coverage limitation

I reviewed both assigned pages, all five assigned items, their directly used item dependencies, the relevant run-local draft prerequisite chain, and the source passages listed above. I did not independently audit the entire transitive graph of published foundational dependencies, the referenced finite-matrix SVD proof, or the full contents of the four page-level prerequisite pages. No whole-run, gate, acceptance, or publication coverage is claimed.
