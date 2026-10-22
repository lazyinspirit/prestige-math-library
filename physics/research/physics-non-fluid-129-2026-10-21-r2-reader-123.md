# Step 3a reader report — batch 123

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Review date: 2026-10-22 (Australia/Sydney)

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity/tgrx-regulated-second-law.md`
- `library/thermodynamics-and-general-relativity/tgrx-regulated-second-law-examples.md`

Immediate prerequisite pages:

- `library/thermodynamics-and-general-relativity-mathematics/tgrx-relative-entropy-balance.md`
- `library/thermodynamics-and-general-relativity/tgr-phs05.md`

Assigned items, reviewed in dependency order:

- `post-tgrx-regulated-horizon-balance`
- `pthm-tgrx-regulated-gsl`
- `ex-tgrx-product-environment-gsl`

Relevant current dependencies inspected:

- `def-tgr-regulated-generalized-entropy`
- `def-tgr-finite-cutoff-outside-entropy`
- `def-tgr-framework-units`
- `def-tgr-horizon-screen-family`
- `def-gr-smooth-lorentzian-objects`
- `def-gr-metric-selected-connection`
- `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`
- `prop-tgrx-finite-modular-balance`

Relevant mathematical supplier interfaces and proofs inspected:

- `def-it-finite-dimensional-quantum-relative-entropy`
- `def-it-von-neumann-entropy`
- `def-trace-of-an-endomorphism`
- `def-qc-partial-trace`
- `def-qc-density-operator`
- `def-qc-tensor-register-and-permutation`
- `def-real-and-complex-inner-product-space`
- `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`
- `thm-non-negative-operator-characterisations`
- `thm-it-quantum-relative-entropy-partial-trace-data-processing`
- `thm-it-quantum-relative-entropy-joint-convexity`
- `lem-it-quantum-relative-entropy-isometric-invariance`
- `thm-qc-partial-trace-positive-and-trace-preserving`
- `cor-complex-de-moivre-formula`
- `thm-kernel-and-fibres-of-complex-exponential`
- `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`
- `thm-natural-logarithm-laws`

Review aids opened were the batch-123 manifest, proof contracts, coverage record, authoring notes, item selection, and cross-batch dependency ledger, plus the batch-114 and batch-122 manifests. They were used as navigation and status evidence, not as verdicts.

## Mathematical and physical review

The postulate adopts the modular-geometric balance as a model premise. It does not claim to derive it from area increase, semiclassical Einstein dynamics, or observations. Its finite-dimensional Hilbert factors, density operators, positive-definite reference states, partial-trace consistency, finite geometric data, and natural-logarithm convention are explicit. The Lorentzian background, null hypersurface, affine generator, compact spacelike cuts, and transversality conditions use the cited exact geometry conventions. The physical Boltzmann constant is stated in SI units; the dimensionless modular data and nats-valued terms are multiplied by $k_B$ to give entropy in $\mathrm{J\,K^{-1}}$. The scope excludes continuum factorization, physical evolution, regulator independence, area calibration, and an unrestricted semiclassical generalized second law.

The finite mathematical supplier `prop-tgrx-finite-modular-balance` proves the identity

$$D(\rho\|\sigma)=\Delta_K(\rho,\sigma)-(s(\rho)-s(\sigma))$$

under a positive-definite reference, using the stated support-restricted relative-entropy definition. Its partial-trace inequality has the correct direction and is supported by the finite-dimensional data-processing theorem. The proposition remains draft mathematics; I assessed its current proof and did not infer acceptance from its readiness record.

In `pthm-tgrx-regulated-gsl`, the balance premise and the finite identity give the exact finite equality $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_B(D_1-D_2)$. Data processing gives $D_2\le D_1$. The limit clause assumes both endpoint sequences converge to finite real values in one fixed scheme; the epsilon argument proves the ordering of those limits without asserting their existence. No empirical premise is used.

The example proves the product-state partial-trace consistency, modular-energy additivity, and entropy additivity by finite basis and eigenvalue sums, including zero eigenvalues under $0\log0:=0$. The qubit calculation gives $D(\rho_E\|\sigma_E)=\log 2$, $\Delta_E=0$, and an explicit choice satisfying the adopted balance. The TikZ arrow from $\operatorname{End}(H_2\otimes H_E)$ to $\operatorname{End}(H_2)$ labeled $\operatorname{Tr}_E$ matches the text; the proof does not rely on the diagram.

Source checks confirm the limited source use recorded in the items. Wall's [§2.5, equations (38) and (43)](https://arxiv.org/pdf/1105.3445) gives the finite relative-entropy definition and restriction monotonicity; [§2.8, equation (50)](https://arxiv.org/pdf/1105.3445) expressly treats the renormalized decomposition as an assumption in its continuum argument. Reall's [§10.9, equation (10.113), and the following backreaction discussion](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf) gives a concise generalized-entropy summary and states that the Hawking calculation neglects backreaction. Watrous's [§5.2.3, Theorem 5.35 and proof](https://jhwatrous.github.io/TQI.pdf) states channel monotonicity and supplies a complete finite-dimensional proof in the author-hosted pre-publication manuscript; partial trace is a special case. Wilde's [§11.1, Definition 11.1.1, and §11.8, Theorem 11.8.1](https://arxiv.org/pdf/1106.1445v8) give the entropy definition and state relative-entropy monotonicity, while deferring that theorem's proof to Chapter 12. These sources provide context or mathematical supplier support; none proves the adopted postulate or an empirical fact.

No claim about an actual black hole, nature, or experimental observation is made. Statistical evidence and uncertainty rules therefore do not create an additional obligation for this batch.

## Page verdicts

- `tgrx-regulated-second-law`: **Pass.** Draft physics A-page metadata, item order, and its two immediate prerequisite page IDs match the current carriers and manifest. The frontmatter-only body is consistent with the current workflow.
- `tgrx-regulated-second-law-examples`: **Pass.** Draft physics B-page metadata, companion relation, prerequisite on the A page, and example placement match the manifest. The frontmatter-only body is consistent with the current workflow.

## Edits, findings, and blocker

No item or page prose was edited; no repair or formatter was needed. I found no confirmed or suspected defect in the assigned carriers or in the relevant supplier uses. The findings JSON therefore has an empty `findings` array. No batch-local blocker was identified.

Coverage limitation: the declared item dependency graph from the three assigned items contains 2,525 unique item files. I inspected the claim-relevant current suppliers and the finite data-processing proof used by the assigned mathematics, but did not re-audit every remote foundational item in that full transitive mathematical closure or every upstream page prerequisite tree.
