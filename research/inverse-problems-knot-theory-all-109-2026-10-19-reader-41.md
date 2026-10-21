# Step 3a reader report — batch 41

**Run:** inverse-problems-knot-theory-all-109-2026-10-19  
**Role:** reader  
**Result:** 11 assigned items repaired; no uneditable defects identified; no blocker.

## Opened assignment inventory

Opened both assigned pages and all 24 listed items. Items are grouped below by manifest dependency level, with suppliers before consumers.

**Page A — calderon-problem-and-cgo-uniqueness** (library/inverse-problems/calderon-problem-and-cgo-uniqueness.md):

- **Level 0:** def-ip-injective-geodesic-ray-transform; def-ip-sobolev-spaces-on-compact-riemannian-domain; def-ip-transversally-anisotropic-product-domain; lem-ip-euclidean-cgo-solvability.
- **Level 1:** lem-ip-conductivity-map-wellposedness; lem-ip-cta-gaussian-beam-ray-limit; lem-ip-limiting-carleman-estimate-on-product; lem-ip-smooth-manifold-elliptic-nonresonant-regularity.
- **Level 2:** lem-ip-boundary-quasimode-jets-and-borel-correction; def-ip-conductivity-dirichlet-to-neumann-map; lem-ip-cubic-dn-small-data-differentiability; thm-ip-cgo-solvability-and-remainder-bound.
- **Level 3:** lem-ip-alessandrini-identity; lem-ip-conductivity-liouville-transform-and-dn-conjugacy; lem-ip-cubic-dn-third-linearization-identity; lem-ip-intersecting-gaussian-beam-four-factor-limit.
- **Level 4:** thm-ip-euclidean-schrodinger-calderon-uniqueness; thm-ip-boundary-determination-of-scalar-conductivity; thm-ip-semilinear-cubic-dn-identification; thm-ip-transversely-anisotropic-calderon-uniqueness.
- **Level 5:** cor-ip-euclidean-cta-conductivity-uniqueness.

**Page B — calderon-problem-and-cgo-uniqueness-examples** (library/inverse-problems/calderon-problem-and-cgo-uniqueness-examples.md):

- ex-ip-transversally-anisotropic-product-with-simple-transversal; ex-ip-boundary-jets-do-not-imply-interior-uniqueness; ex-ip-partial-data-outside-full-data-theorem.

Also opened the dependency and consumer material needed to verify claims and check interface impact:

- Simple-surface/X-ray suppliers: def-ip-simple-surface-and-geodesic-xray-transform, thm-ip-2d-simple-surface-xray-injectivity, cor-uniqueness-of-the-l-one-fourier-transform, lem-ip-surface-geodesic-flow-index-form-and-transport, lem-ip-pestov-identity-for-geodesic-data, and lem-ip-orientation-cover-preserves-simplicity.
- Interface-impact consumers: lem-ip-euclidean-trace-quotient-is-h12, op-ip-general-anisotropic-calderon-uniqueness, def-ip-anisotropic-conductivity-dirichlet-to-neumann-map, lem-ip-anisotropic-conductivity-map-wellposedness, thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map, and ex-ip-anisotropic-boundary-fixing-gauge-example.
- The direct consumers of the geodesic-ray-transform definition, lem-ip-cta-gaussian-beam-ray-limit and thm-ip-transversely-anisotropic-calderon-uniqueness, were reviewed in the assigned batch. The consumer checks found no required out-of-scope edits.

## Repairs and evidence

All repairs below are in assigned draft items. The corresponding batch-41 proof-contract entries were regenerated; no edited item had a stale verification.judge record.

1. **def-ip-sobolev-spaces-on-compact-riemannian-domain:** specified the complex H^{-1/2} space as the continuous conjugate-linear dual, while retaining the real linear-dual convention. This makes the complex boundary pairing type explicit and consistent with the sesquilinear DN convention.
2. **def-ip-injective-geodesic-ray-transform:** specified that geodesics solve the Levi-Civita geodesic equation in the interior and extend smoothly to the endpoints with one-sided derivatives. Added the relevant Levi-Civita-geodesic dependency/reference; the former geodesic definition did not establish the boundary-endpoint convention used here.
3. **lem-ip-conductivity-map-wellposedness:** added the trace, trace-kernel, and chartwise Sobolev dependencies and facts needed for the global fixed-atlas trace and ker(trace)=H_0^1. Replaced the unsupported weak-H^1-subsequence step in the Poincare argument with Rellich L^2 convergence and the resulting H^1-Cauchy conclusion; used the trace-kernel fact for uniqueness and smooth regularity.
4. **lem-ip-smooth-manifold-elliptic-nonresonant-regularity:** added the trace-kernel/chart dependencies, the needed boundary regularity result, and the interior regularity supplier. Replaced the unsupported assertion that iterated tangential derivatives automatically retain zero trace with the cutoff-commutator argument and the directly applicable boundary regularity result; included the interior estimate. Added the pointwise dimension-zero and ODE dimension-one cases to preserve the stated dimension range.
5. **def-ip-conductivity-dirichlet-to-neumann-map:** made the complex anti-dual pairing explicit, identified the smooth flux convention, and added the sharp trace dependency. Added the bounded-lift estimate establishing that each boundary test function defines the required continuous conjugate-linear functional.
6. **lem-ip-cubic-dn-small-data-differentiability:** stated the result on compact smooth Riemannian domains with every connected component meeting the boundary, in all dimensions n≥1, instead of restricting it to CTA domains. Added the metric dependency, described the nonlinear map for finite boundary directions, specified real Banach realification, and handled the one-dimensional algebra/embedding case.
7. **lem-ip-cubic-dn-third-linearization-identity:** replaced the undefined/global D^3Λ notation by the mixed derivative of the explicit finite-parameter nonlinear data map. Matched the helper result's finite-direction C^3 statement and its connected, nonempty-boundary-component hypothesis.
8. **thm-ip-cgo-solvability-and-remainder-bound:** corrected the sign of the conjugated quadratic phase term: it is -τ^2 g(dΦ,dΦ).
9. **lem-ip-cta-gaussian-beam-ray-limit:** defined m=dim M_0 where the beam amplitude scaling uses it.
10. **lem-ip-intersecting-gaussian-beam-four-factor-limit:** changed the overstrong Gaussian-beam title to “Four-harmonic-product realization of a longitudinal Fourier integral.” The proof now uses the cited harmonic-product density result and constructs the Q-dependent witnesses allowed by the unchanged statement. Removed the obsolete CGO statement reference and Gaussian-beam calculation from the proof, and corrected the source note so it does not claim that the full cited proof was independently checked. Lassas–Liimatainen–Lin–Salo, Proposition 5.1, arXiv:1903.12562, supports the imported density statement; Paternain–Salo–Uhlmann, §3.8, Propositions 3.8.4–3.8.5, supports the simple-surface uniqueness/orientability facts used in the proof.
11. **thm-ip-euclidean-schrodinger-calderon-uniqueness:** applied the CGO result directly with phase $-\bar{\zeta}_2$, removing the confusing intermediate claim that conjugating the theorem's result supplied the needed solution.

Relevant primary-source checks included:

- Dos Santos Ferreira–Kenig–Salo–Uhlmann, [arXiv:1305.1273](https://arxiv.org/pdf/1305.1273): Proposition 2.1 (PDF p. 10) for the L^2-forcing solver, Proposition 2.2 (p. 11) for correction, Proposition 3.1 (pp. 14–22) for the Gaussian-beam construction and ray limit, and equation (3.6) (pp. 21–22) for cross terms. The amplitude uses transverse dimension m and scaling τ^((m−1)/4).
- Salo, [arXiv:1908.03041](https://arxiv.org/pdf/1908.03041): Proposition 5.5 (PDF pp. 25–30) for the boundary-quasimode construction and estimates.
- Lassas–Liimatainen–Lin–Salo, [arXiv:1903.12562](https://arxiv.org/html/1903.12562): Proposition 5.1, statement and context, for density of products of at least four smooth harmonic functions on the stated CTA class.
- Paternain–Salo–Uhlmann, [Geometric inverse problems, with emphasis on two dimensions](https://users.jyu.fi/~salomi/pub/GIP2D_driver.pdf): §3.8, Proposition 3.8.4 (printed p. 106) for unique minimizing geodesics and Proposition 3.8.5 (printed p. 107) for the disk diffeomorphism of a simple surface.

## Page verdicts

- **A — calderon-problem-and-cgo-uniqueness: pass.** The page inventory and metadata match the assigned manifest; the page is YAML frontmatter only, carries page_layout: compact-v1, and has no summary body. No page edit was needed.
- **B — calderon-problem-and-cgo-uniqueness-examples: pass.** The page inventory and metadata match the assigned manifest; the page is YAML frontmatter only, carries page_layout: compact-v1, and has no summary body. No page edit was needed.

No TikZ or tikzcd diagrams occurred in the assigned pages or items, so there were no diagrams to repair or add. No uneditable defect or blocker was identified. The prior root boundary template_review records remain bound to their pre-reader hashes; they were not changed or recertified by this review.

## Validation

- Regenerated the affected batch-41 proof-contract entries for the 11 repaired items.
- Ran reflow.mts and precheck.mts on all 11 repaired items after the final edits: reflow reported unchanged for every item, and precheck reported 0 failures for every item.
- Ran the required combined proof-layout command once after the final edits: **11 items, 35 steps, 0 defects**.
- Checked the edited items for stale verification.judge records: none were present.

## Coverage note

All 24 assigned items and both assigned pages were opened and reviewed. The Lassas–Liimatainen–Lin–Salo Proposition 5.1 statement and context were checked, but I did not independently read the full Section 5 proof; the repaired item now records the density theorem as an imported result without claiming that its proof was reconstructed. The other external-source checks were limited to the cited passages and locations listed above. The initial inventory pass opened the level-zero items before their direct suppliers; the relevant supplier statements were then read and the items were checked against them before repairs and final validation.
