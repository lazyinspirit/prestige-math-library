# Step 3a reader report — batch 102

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader  
Scope: batch 102

## Opened inventory

Assigned pages:

- A page: library/quantum-statistical-mechanics/qsmx-lieb-robinson-spectral-flow.md
- B page: library/quantum-statistical-mechanics/qsmx-lieb-robinson-spectral-flow-examples.md

Assigned items reviewed in their current form (some external supplier statements were opened after the initial item read and checked before the final verdict):

- def-qsmx-summable-interaction-norm
- lem-qsmx-lattice-weight-convolution
- def-qsmx-local-conditional-expectation
- lem-qsmx-local-expectation-locality
- thm-qsmx-weighted-lieb-robinson
- lem-qsmx-separable-positive-generator-spectral-measures
- lem-qsmx-gaussian-ground-correlation-filter
- thm-qsmx-gapped-ground-state-clustering
- lem-qsmx-filtered-spectral-generator
- lem-qsmx-filtered-generator-locality
- thm-qsmx-gapped-spectral-flow
- cex-qsmx-gap-not-automatic
- cex-qsmx-degenerate-gap-not-clustering

I also opened the page dependencies qsm-finite-range-spin-dynamics and qsmx-operator-algebra-prerequisites, and the required mathematics page summaries the-residue-theorem, approximation-and-compactness-in-ck, and primitive-dirichlet-l-functions-and-functional-equations. Direct supplier statements needed for the proofs included the local spin algebra, finite-range interaction and dynamics, quasi-local completion, local expectation, consistent-state/GNS and compactness results, finite-matrix calculus, spectral-measure analysis, Fourier estimates, measure convergence, and operator-domain results. The current batch-102 notes, source-reading record, coverage record, and proof-contract file were consulted as evidence, not as verdicts; the full large proof-contract file was not loaded in this session.

## Review and edits

The A-page title matches its current contents: it includes a weighted Lieb–Robinson bound, an infinite-volume ground-state clustering theorem, and gapped spectral transport. The current A-page inventory contains the clustering theorem, so the older note about its absence is stale. The A-page carrier itself has no prose body under the selected compact layout.

The B page has the two listed counterexamples and no prose body. The one-spin path has endpoint gaps 2 and closes at s=1/2. The Ising mixture construction has a two-dimensional zero-energy kernel, excitation gap 2, and connected Z correlation 1 at every positive integer separation, so it refutes exponential decay for that state.

Three in-scope statement clarifications were made:

1. In items/lem-qsmx-lattice-weight-convolution.md, the Statement now defines C_F by the same convolution formula used for C_G, with F=F_{d+1}. This removes the previously undefined C_F in the conclusion. The shell-count proof gives summability for rho=d+1, and the distance-splitting proof gives its finite positive convolution constant; the F_a estimate then follows from d_infinity(x,z)+d_infinity(z,y) >= d_infinity(x,y). The direct consumers thm-qsmx-weighted-lieb-robinson and thm-qsmx-gapped-ground-state-clustering were checked; their arguments use the admissible C_G constants and remain valid.

2. In items/lem-qsmx-filtered-generator-locality.md, the decomposition sum and the coefficient continuity/convergence claims now say nonempty support. The interaction definition indexes finite nonempty supports, and every constructed shell has support Y_k intersected with Lambda_n for a nonempty Y. I updated the corresponding F3 statement in items/thm-qsmx-gapped-spectral-flow.md. I checked that consumer's finite-volume flow and norm bounds use only nonempty interaction supports.

3. In items/cex-qsmx-degenerate-gap-not-clustering.md, the Statement refuted now defines the quasi-local spin algebra, finite-range interaction and dynamics, algebraic state, positive-energy ground-state representation, generator, spectrum, and gap before using them. The existing proof constructs the specified representation and dynamics. Its direct dependencies already include thm-qsm-finite-range-spin-dynamics; no dependency edge was added.

For each changed item, reflow reported the existing proof contract unchanged, and precheck passed. No stale verification.judge record was present on the changed items. I did not add or alter review stamps. After the final item edits, proof-layout was run once on the complete changed-item list: 4 items, 18 steps, 0 defects.

## Diagram review

The TikZCD square in thm-qsmx-gapped-spectral-flow is correct: the restricted unitary maps Ran P_n(0) to Ran P_n(s), and the square commutes with the inclusion maps by P_n(s)=U_n(s)P_n(0)U_n(s)^*. No other assigned item contains a diagram, and no additional diagram was needed. The proofs remain independent of the diagram.

## Uneditable findings and page verdicts

A published page outside this batch, qsm-finite-range-spin-dynamics, says in line 19 that lem-qsm-finite-matrix-cstar-and-state-duality is a “draft supplier.” Its current item carrier has status: published. This is a stale published-page claim, classified nonfatal; assigned consumer cex-qsmx-degenerate-gap-not-clustering reaches the page through its dependency on the listed thm-qsm-finite-range-spin-dynamics. The page and item are outside this reader's write scope.

I also found published proof-bearing dependencies in the declared 1,834-carrier dependency closure whose current frontmatter has no verification.audited or verification.verified marker and no verification.repair receipt. The physics [SCHEMA.md verification rules](../SCHEMA.md#verification-fields) and root [SCHEMA.md verification rules](../../SCHEMA.md#verification-fields) require an audit or delegated verified record for a published proved-here item, and explicitly state that a judge stamp alone is insufficient. These items are outside this batch's write scope. Each finding identifies an assigned consumer whose dependency closure reaches the supplier.

The exact metadata findings are:

| Published dependency | Current verification keys | Assigned consumer |
|---|---|---|
| lem-average-convergence-of-a-continuous-banach-valued-function | precheck | lem-qsmx-separable-positive-generator-spectral-measures |
| lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units | judge | thm-qsmx-weighted-lieb-robinson |
| lem-c-star-positive-calculus-and-order-estimates | no verification field | thm-qsmx-weighted-lieb-robinson |
| lem-complex-coordinate-l1-is-a-norm | judge, precheck | thm-qsmx-weighted-lieb-robinson |
| lem-complex-modulus-of-real-embedding-equals-real-absolute-value | precheck | lem-qsmx-separable-positive-generator-spectral-measures |
| lem-complex-norm-realification-is-a-real-norm | precheck | lem-qsmx-separable-positive-generator-spectral-measures |
| lem-complex-normed-subspace-realifies-to-real-normed-subspace | judge | thm-qsmx-weighted-lieb-robinson |
| lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves | judge, precheck | lem-qsmx-separable-positive-generator-spectral-measures |
| lem-linearity-of-the-bochner-integral | judge, precheck | lem-qsmx-separable-positive-generator-spectral-measures |
| lem-mean-value-inequality-for-a-differentiable-banach-valued-curve | judge, precheck | lem-qsmx-separable-positive-generator-spectral-measures |
| lem-qsm-boundary-dynamics-cauchy | judge, precheck | cex-qsmx-degenerate-gap-not-clustering |
| lem-qsm-consistent-local-states | judge | thm-qsmx-gapped-ground-state-clustering |
| lem-qsm-finite-matrix-cstar-and-state-duality | judge | thm-qsmx-gapped-spectral-flow |
| lem-qsm-finite-range-commutator-path-bound | judge, precheck | cex-qsmx-degenerate-gap-not-clustering |
| lem-qsm-integer-lattice-countable | judge, precheck | def-qsmx-summable-interaction-norm |
| lem-qsm-local-spin-inclusions-isometric | judge, precheck | thm-qsmx-gapped-spectral-flow |
| lem-qsm-matrix-state-calculus | judge | lem-qsmx-separable-positive-generator-spectral-measures |
| lem-qsm-quasilocal-completion | judge | thm-qsmx-gapped-spectral-flow |
| lem-qsm-spin-state-compactness | judge | thm-qsmx-gapped-spectral-flow |
| lem-qsm-state-gns-construction | judge | thm-qsmx-gapped-ground-state-clustering |
| thm-complex-coordinate-isometry-and-topology-transport | judge | thm-qsmx-weighted-lieb-robinson |
| thm-complex-coordinate-map-preserves-real-scalar-multiplication | judge | thm-qsmx-weighted-lieb-robinson |
| thm-complex-coordinate-map-preserves-real-total-differentiability | judge | thm-qsmx-weighted-lieb-robinson |
| thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed | judge | thm-qsmx-weighted-lieb-robinson |
| thm-complex-path-length-invariant-under-monotone-reparametrization | judge | thm-qsmx-weighted-lieb-robinson |
| thm-qc-density-operator-existence | judge | thm-qsmx-weighted-lieb-robinson |
| thm-qsm-finite-range-spin-dynamics | judge, precheck | cex-qsmx-degenerate-gap-not-clustering |

Each row's exact location is the named item's frontmatter verification field; each is status: published and proof-bearing. All 27 are classified fatal for their consuming proofs under the publication rule. The issue is missing publication evidence, not a finding that the displayed mathematical statement is false.

- A page verdict: the page title and current item scope agree; no assigned A-page prose defect remains.
- B page verdict: the companion contains the two promised counterexamples; no assigned B-page prose defect remains.
- Published qsm-finite-range-spin-dynamics page verdict: one stale supplier-status claim remains for owner disposition.
- Other required-page verdicts: the draft cross-batch qsmx-operator-algebra-prerequisites page and the three published mathematics prerequisite page summaries were opened; no other page-summary defect was found in the inspected text.

## Source and coverage limits

I independently checked selected primary-source HTML passages from Bachmann–Michalakis–Nachtergaele–Sims, arXiv:1102.0842: Proposition 2.4 and the spectral-filter interface, Theorem 4.6, the Theorem 4.8 statement, Proposition 5.3, and Theorem 5.5 with Lemma 5.6. I checked the exponential-clustering paper arXiv:math-ph/0506030v3 for its Theorem 2 and Gaussian-tail argument. The assigned items supply local proofs of the weighted bound, real-time clustering estimate, filtered shell bounds, and finite-volume-to-thermodynamic transport. The retained batch source-reading record describes full-PDF retrieval and broader reading by its authors; I did not independently reread either full PDF in this reader session. Pieter Naaijkens's cited spin-dynamics results were checked through the exact local supplier statements and proofs, not by rereading the full lecture-notes PDF.

All assigned items and pages were opened. Some external supplier statements were checked after their consumers rather than in a strictly linear supplier-first reading order. The declared transitive dependency closure was enumerated for publication metadata, but I did not independently reprove every proof in its 1,834-item closure. No empirical observations or statistical claims occur in this batch. The only outstanding blockers are the published dependency metadata and published-page status defects recorded for owner review.

