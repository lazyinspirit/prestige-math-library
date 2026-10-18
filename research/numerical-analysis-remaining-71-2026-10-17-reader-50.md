# Step 3a reader report — batch 50

Run: `numerical-analysis-remaining-71-2026-10-17`

## Opened inventory

The assigned pages were opened:

- A page `substructuring-feti-dp-and-bddc-preconditioners` at `library/numerical-pdes-and-spatial-discretization/substructuring-feti-dp-and-bddc-preconditioners.md`.
- B examples page `substructuring-feti-dp-and-bddc-preconditioners-examples` at `library/numerical-pdes-and-spatial-discretization/substructuring-feti-dp-and-bddc-preconditioners-examples.md`.

The A page's declared prerequisite page `overlapping-schwarz-and-stable-subspace-decompositions` was also opened for context. Its items were outside this batch and were not audited.

All 23 assigned items and the batch-50 proof-contract rows were reviewed. The item inventory below is grouped by dependency level; each item's assigned suppliers were read before it.

- Level 0: `def-pe26-scalar-substructuring-model`; `lem-pe26-preconditioned-operator-norm-bound`.
- Level 1: `thm-pe26-local-energy-kernel-and-interior-spd`; `def-pe26-primal-interface-spaces-and-jumps`.
- Level 2: `def-pe26-discrete-harmonic-extension-and-schur-complement`.
- Level 3: `thm-pe26-primal-constraints-remove-floating-kernels`; `thm-pe26-harmonic-extension-minimizes-energy`; `thm-pe26-static-condensation-is-exact-interface-solve`.
- Level 4: `def-pe26-scaled-averaging-and-bddc-preconditioner`; `lem-pe26-discrete-trace-schur-equivalence`; `ex-pe26-missing-primal-corner`.
- Level 5: `prop-pe26-bddc-constrained-local-minimization`; `def-pe26-feti-dp-dual-system-and-preconditioner`; `lem-pe26-log-edge-cutoff-and-discrete-sobolev`.
- Level 6: `prop-pe26-feti-dp-is-dual-schur-complement`; `lem-pe26-complementary-primal-dual-spectrum`; `lem-pe26-scaled-averaging-energy-bound`; `rem-pe26-conditioning-and-work-are-separate`; `ex-pe26-two-floating-poisson-subdomains`.
- Level 7: `thm-pe26-nontrivial-spectrum-bddc-feti-dp`.
- Level 8: `thm-pe26-condition-number-2d-polylogarithmic`; `ex-pe26-matching-primal-dual-spectrum`.
- Level 9: `ex-pe26-coarse-solve-work-bottleneck`.

The published dependencies opened were `def-matching-affine-simplicial-meshes`, `def-broken-and-conforming-polynomial-spaces`, `def-reference-finite-element-and-unisolvent-dofs`, `def-block-lu-factorisation`, and `thm-block-lu-factorisation-via-an-invertible-leading-block`. The block-LU identity used by the assigned definition was also checked directly by block multiplication.

## Mathematical source review

- Widlund, *Introduction to the Design and Theory of Domain Decomposition Algorithms*, [PDF](https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf): printed pp. 23–24, trace range and the boundary Gagliardo seminorm; pp. 26–29, the `H^{1/2}_{00}` edge cutoff and product estimate; pp. 30–33, the two-dimensional finite-element Sobolev inequality (5) and its centroid-cone proof; pp. 90–97, complementary averaging/jump projections and the coefficient-scaled two-dimensional FETI-DP estimate.
- Rheinbach, *Parallel Scalable Iterative Substructuring*, [PDF](https://d-nb.info/983219192/34): Chapter 1 `1.7, printed p. 22, equation (1.16), Schur energy equivalence with the boundary `H^{1/2}` seminorm; Chapter 2 `2.4, printed p. 39, Theorem 2.4.1 and its proof on pp. 40–43, the squared-logarithmic scaled-averaging estimate.
- Mandel and Sousedík, *BDDC and FETI-DP under Minimalist Assumptions*, [arXiv PDF](https://arxiv.org/pdf/0708.4031): `3.3, pp. 4–5, the FETI-DP saddle equations and dual elimination; `4, pp. 5–7, Lemmas 4.1–4.2 and Theorem 4.2, the left-inverse eigenvalue bounds and matching nonunit spectra.

## Repairs

1. `thm-pe26-static-condensation-is-exact-interface-solve`, Statement and Proof 3.1: the previous statement said the local discrete harmonic extensions alone reconstruct the Galerkin solution. For nonzero interior load `f_I^{(i)}`, they do not: the interior equation is `K_{II}^{(i)}u_I^{(i)}+K_{I\Gamma}^{(i)}u_\Gamma^{(i)}=f_I^{(i)}`. The statement and proof now give the load-dependent reconstruction `u_I^{(i)}=(K_{II}^{(i)})^{-1}(f_I^{(i)}-K_{I\Gamma}^{(i)}u_\Gamma^{(i)})`, with the harmonic extension identified as its trace-dependent homogeneous part. This is consistent with the local elimination in Proof 1.1 and Widlund's printed pp. 11–12 description of solving the interior Dirichlet problem after the interface trace is known.

   Its only current-run consumer was checked and repaired: `ex-pe26-two-floating-poisson-subdomains`, Facts & Assumptions [F4] and Verification 3.1 now describe the load-dependent reconstruction. The matching proof-contract derivation and F4 quotation were updated.

2. `ex-pe26-missing-primal-corner`, frontmatter `title`: “no primal corner” alone is insufficient to imply singularity when another primal functional detects constants. The title now states the actual condition, a missing constant-detecting primal constraint; the example body already included that caveat.

3. `thm-pe26-condition-number-2d-polylogarithmic`, Proof 1.2: the abstract eigenvalue lemma with `L=B`, `T=B_D^T` bounds `M_{\rm FETI-DP}^{-1}F`, not `F M_{\rm FETI-DP}^{-1}`. The proof now states the correct product order and its bound, and retains the similarity relation for the reverse order. The proof-contract derivation was updated.

4. `lem-pe26-log-edge-cutoff-and-discrete-sobolev`, Proof 1.2: the prior derivation used a cone of height comparable to `H_i` from every maximizing mesh vertex, a property not stated in the model's interior-cone condition. The step now invokes Widlund's finite-element Sobolev estimate (5), printed p. 30, and identifies the centroid-cone, inverse-inequality, radial Cauchy–Schwarz, annulus, and mean-zero Poincaré parts of its proof on pp. 31–33. The source locator and proof-contract derivation were updated.

5. A-page summary, second paragraph: clarified that all *subdomain* vertices are primal and added the theorem's nonzero assembled-space and multiplier-space condition, including the zero-dimensional caveat.

No changed item had a `verification.judge` record, so there was no stale judge entry to remove. No B-page prose, published content, or out-of-batch item was edited.

## Defects not edited

None found in the assigned carriers or the published dependencies needed for the reviewed claims. The B page was reviewed and needed no edit.

## Page verdicts

- `substructuring-feti-dp-and-bddc-preconditioners` (A): pass after the summary caveat edit. Its account of the two-dimensional setting, coefficient-constant subdomains, all-subdomain-vertex primal constraints, coefficient scaling, trace lift, cutoff estimate, and no-three-dimensional claim matches the reviewed items.
- `substructuring-feti-dp-and-bddc-preconditioners-examples` (B): pass with no edit. Its four examples and its distinction between the exact square-mesh matrices and the abstract spectral model match the reviewed item content.

## Validation and blocker

- `reflow` and `precheck` were run for each of the five changed items. Each reflow reported unchanged formatting; each precheck passed.
- `node tools/proof-layout.mjs` was run once on all five changed item paths: 5 items, 15 steps, 0 defects.
- No blocker.

Coverage note: the required overlapping-Schwarz page was opened as prerequisite context, but its listed items were not part of this batch and were not audited. For the published block-LU supplier, I checked the exact identity used by the assigned definition directly rather than auditing its unrelated triangular-solve dependencies.
