# Step 3a reader report — batch 34

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  

## Scope and opened inventory

Opened the batch-34 manifest, proof contracts, cross-batch dependency record, author notes and coverage record. Opened both assigned pages and the required prerequisite page:

- A: `library/numerical-pdes-and-spatial-discretization/mixed-hdiv-fluxes-and-darcy-discretization.md`
- B: `library/numerical-pdes-and-spatial-discretization/mixed-hdiv-fluxes-and-darcy-discretization-examples.md`
- Prerequisite A: `library/numerical-pdes-and-spatial-discretization/mixed-finite-elements-and-stokes-stability.md`

Read all 31 assigned items in dependency-level order. A-page items: level 0 `def-na-contravariant-piola-map`, `def-na-hdiv-space`, `lem-na-l2-zero-mean-hilbert`, `lem-na-smooth-neighborhood-dense-in-h1-simplex`; level 1 `lem-na-hdiv-weak-normal-trace`, `lem-na-piola-divergence-and-flux-identities`; level 2 `def-na-h0div-space`; level 3 `def-na-simplicial-mesh-rt-bdm-spaces`, `lem-na-h0div-div-zero-mean`, `lem-na-h1-zero-boundary-is-zero-normal-hdiv`, `lem-na-hdiv-is-hilbert-and-h0div-closed`; level 4 `def-na-neumann-darcy-mixed-problem`, `lem-na-cell-average-l2-projection`, `lem-na-piola-preserves-rt-bdm-spaces`, `lem-na-rt0-p0-kernel-is-divergencefree`, `lem-na-simplex-h1-facet-trace-bound`; level 5 `def-na-hybridized-rt0-darcy-system`, `lem-na-h1-interior-facet-traces-agree`; level 6 `lem-na-rt0-unisolvence-and-global-conformity`, `thm-na-darcy-mixed-wellposedness`; level 7 `def-na-rt0-h1-interpolation`, `thm-na-rt0-p0-local-mass-conservation`; level 8 `lem-na-rt0-h1-interpolation-bounded-and-commuting`; level 9 `thm-na-rt0-p0-bounded-divergence-lift-and-infsup`; level 10 `thm-na-rt0-bounded-commuting-projection`, `thm-na-rt0-p0-darcy-error-estimate`; level 11 `thm-na-rt0-hybridization-equivalence-static-condensation`.

B-page items: level 4 `ex-na-primal-p1-flux-is-not-locally-conservative`; level 7 `ex-na-constant-flux-reference-triangle`; level 11 `ex-na-checkerboard-permeability-contrast`; level 12 `ex-na-two-triangle-hybrid-static-condensation`.

Also opened the relevant definitions, statements, facts, and proof clauses in the assigned items' direct suppliers: `cor-cauchy-schwarz-inequality-for-l-two`, `def-countable-choice`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-matching-affine-simplicial-meshes`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-sobolev-space-wkp-and-its-norm`, `def-wkp-zero-as-a-sobolev-closure`, `lem-affine-simplex-gauss-green-formula`, `lem-closed-subspace-of-a-banach-space-is-banach`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-mollification-commutes-with-weak-derivatives-in-the-interior`, `lem-na-homogeneous-dirichlet-poincare`, `lem-shape-regular-affine-simplex-scaling`, `lem-smooth-bump-between-concentric-euclidean-balls`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null`, `thm-chain-rule-for-total-derivatives`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-holder-inequality-for-integrals`, `thm-l-one-approximate-identities-converge-in-l-p`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-locally-integrable-functions-embed-in-distributions`, `thm-na-babuska-brezzi-kernel-coercivity`, `thm-na-bounded-lipschitz-domain-divergence-right-inverse`, and `thm-na-mixed-galerkin-quasioptimality`.

For the current-run right-inverse and mixed-solvability closure, additionally read in supplier order: `def-na-star-shaped-bogovskii-integral`, `lem-na-homogeneous-dirichlet-poincare`, `lem-na-lipschitz-domain-finite-star-shaped-cover`, `lem-na-zero-mean-of-zero-boundary-divergence`, `thm-na-infsup-bounded-right-inverse-hilbert`, `lem-na-bogovskii-kernel-support-and-divergence`, `lem-na-finite-cover-zero-mean-data-decomposition`, `thm-na-babuska-brezzi-kernel-coercivity`, `lem-na-bogovskii-truncated-derivative-fourier-formula`, `thm-na-mixed-galerkin-quasioptimality`, `lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound`, `thm-na-star-shaped-bogovskii-bounded-right-inverse`, and `thm-na-bounded-lipschitz-domain-divergence-right-inverse`.

## Repairs made

1. `lem-na-smooth-neighborhood-dense-in-h1-simplex`, Facts & Assumptions F4 and proof step 3.1: made the mollifier construction explicit. The chosen bump equals one on a ball containing a positive-volume cube and has bounded support, so its integral is finite and positive; division by that integral gives unit mass. Added the exact dependency that the rescalings form an L1 approximate identity. This supplies the prerequisite used by the L2 convergence step. Evidence: `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, and `prop-mollifier-families-are-l-one-approximate-identities`.

2. `lem-na-h1-interior-facet-traces-agree`, Facts & Assumptions F2–F4 and proof steps 1.1–2.1: explicitly normalize the nonnegative bump, establish local integrability of the compactly supported H1 zero extension by Holder and finite measure, and state the approximate-identity and convolution facts used to pass smooth traces to the two element traces. Added the corresponding dependencies. This closes the construction and convergence steps rather than presuming those properties of an unspecified bump.

3. `def-na-rt0-h1-interpolation`, Definition: added `lem-na-h1-interior-facet-traces-agree` as a dependency and cited it where shared global H1 facet moments are identified. The local moment prescription alone does not establish that neighboring cells receive the same oriented moment; the trace-agreement result supplies this.

4. Corrected the title and section/page locators for Sayas in seven items: `def-na-neumann-darcy-mixed-problem`, `ex-na-primal-p1-flux-is-not-locally-conservative`, `thm-na-rt0-p0-local-mass-conservation`, `ex-na-constant-flux-reference-triangle`, `def-na-hybridized-rt0-darcy-system`, `thm-na-rt0-hybridization-equivalence-static-condensation`, and `ex-na-two-triangle-hybrid-static-condensation`. The PDF cover names Francisco-Javier Sayas and the book *A gentle introduction to the Finite Element Method* (2015); the former citation title was inaccurate. Corrected the hybridization items to Lesson 10 §§1.1–1.2, printed pp. 174–180; their old Lesson 9 locator did not cover the hybridized implementation. Narrowed the other locators to Lesson 9 §1.1 pp. 152–155 (mixed Darcy formulation), §2.2 pp. 164–165 (global RT0 normal continuity), §3.1 pp. 168–169 (RT0/P0 cell balance), and §§2.1–2.2 pp. 162–165 (facet flux degrees of freedom and local balance).

The three affected proof-contract entries were updated with the new dependency evidence, including the interpolation consumer's definition quote. No stale `verification.judge` record was present on the changed items.

## Uneditable findings

The following defects are in current-run Batch 31 suppliers, outside this batch's edit authority. Each omission is short to repair but currently leaves an unstated existence or convergence prerequisite. They are recorded in the findings JSON with the current source SHA-256 and assigned consumer `thm-na-darcy-mixed-wellposedness`.

- `lem-na-lipschitz-domain-finite-star-shaped-cover`, Proof step 5.1: the construction chooses and normalizes a nonnegative smooth bump on each open tree-edge overlap but does not establish that such a bump exists or has finite positive integral; the stated dependency is only Heine–Borel. A bump supported in a ball contained in the overlap, plus an explicit positive finite integral argument (or the smooth-bump lemma), closes this step.
- `thm-na-star-shaped-bogovskii-bounded-right-inverse`, Facts & Assumptions F9 / Proof step 2.1: the L1 approximate-identity convergence theorem is applied to the rescaled unit-mass kernel, but the item does not establish that this family is an L1 approximate identity. Add `prop-mollifier-families-are-l-one-approximate-identities` or prove mass, uniform L1 norm, and shrinking support for the selected family.
- `thm-na-bounded-lipschitz-domain-divergence-right-inverse`, Facts & Assumptions F2 / Proof step 1.1: the local star-shaped Bogovskii theorem is applied on each cover patch, but its required unit-mass kernel supported in the patch's star-shaped ball is never chosen from the cover. Choose a normalized smooth bump in each supplied ball, or extend the cover construction to supply those kernels.

No confirmed defect was found in the assigned page prose or assigned items beyond the repaired defects above. No defect was found in the relevant published supplier statements that were checked.

## Page verdicts

- A, `mixed-hdiv-fluxes-and-darcy-discretization`: reviewed against its items and prerequisite page; no confirmed page-prose defect.
- B, `mixed-hdiv-fluxes-and-darcy-discretization-examples`: reviewed against the worked items; no confirmed page-prose defect.

## Validation and blocker

Reflow and precheck were run for all ten changed items. Both edited proofs pass direct precheck; all other changed items report zero failing checks. The final single batched proof-layout invocation covered all ten paths: 10 items, 23 steps, 0 defects. Strict proof-contract validation for the three affected rows reports 0 errors, 0 warnings.

There is no batch-34 mathematical blocker. The recomputed run status has no work in flight and reports an unrelated run-level blocker: `3a-collect`, `collect-11 failed 3x (covers 11)`. Batch 34 remains pending in the stage tracker until its reader artifact is ingested.

## Coverage limits

The full assigned pages, item bodies, dependency-order proofs, direct supplier interfaces, and the cited arguments needed for the checked inferences were opened. I also inspected authoritative source passages: Guermond MATH 661 Part III Chapters 14 §§14.1 and 14.4, 16 §§16.1.1–16.1.2, and 49; Boffi–Brezzi–Fortin Chapter 2 §§2.1.1 and 2.1.6 and Chapter 7 §7.2; Durán, arXiv:1103.3718, §2, Lemmas 2.2–2.4 and Theorem 2.1; Hunter, Chapter 3 §3.6, Theorem 3.24; Laugesen, Chapter 3 §3.4, Proposition 3.7; and Sayas, Lesson 9 and Lesson 10 §§1.1–1.2. The Sayas source is [the 2015 PDF](https://team-pancho.github.io/documents/anIntro2FEM_2015.pdf). Published dependencies were checked at the interfaces and proof clauses needed here, not exhaustively audited through every transitive proof; the bibliography as a whole was not exhaustively read.
