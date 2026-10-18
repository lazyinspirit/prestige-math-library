# Batch 47 authoring notes

Run: numerical-analysis-remaining-71-2026-10-17
Pair: meshfree-kernel-approximation-and-conservative-sph
Authoring scope: assigned A/B pages, this batch's item inventory and evidence.

## Plan and prerequisite reconciliation

The assigned A-page inventory is 17 local items; its B page contains 5 examples/counterexamples. The A inventory is ordered by item dependency level 0–5 in research/numerical-analysis-remaining-71-2026-10-17-batch-47.pages.json. The B items are also level-labelled against their A-page suppliers. The batch-level artifact records batch 47 at level 0 with no in-run supplier batch; that remains correct because its only planned page requirement is the already-published XD-08 page.

The design at research/plan-numerical-spatial-track.md lines 1032–1038 calls XD-08 a same-frontier pair and also lists NA-10, NA-12, NA-15, NA-22 and published matrix-norm interfaces. The current research/plan-spec.json instead requires only interacting-particle-mean-field-and-vortex-blob-error. The actual XD-08 A/B pages exist and are published, outside this run's 71-pair scope ledger. The task manifest also requires only XD-08. I followed the current plan and task manifest; no shared plan or outside pair was changed.

I inspected the published XD-08 page and these actual supplier bodies/proofs:

- def-mean-field-and-weighted-vortex-particle-systems defines equal-probability mean-field and signed Biot–Savart particle systems.
- thm-w1-dobrushin-stability-with-force-defect assumes characteristic flows for the same globally Lipschitz two-variable kernel and bounded label defects, and takes an infimum over prescribed initial couplings.
- thm-rk4-global-error-for-regularized-vortex-particles is for that regularized mean-field/vortex vector field and RK4 stages admitted in a controlled tube.

Those results do not establish the state-dependent SPH pressure-force identities or the SPH vector-field error estimate here. The SPH claims are proved locally. The published XD-08 page remains the declared page prerequisite and context; no item-level logical dependency on its mean-field results is claimed.

The other named interfaces are not used: NA-10 polynomial interpolation is unnecessary for the local kernel/Taylor proof; NA-12 composite quadrature is distinct from the cellwise particle rule; NA-15 is unnecessary because the time error is proved for forward Euler; NA-22 is unnecessary because no Hamiltonian or leapfrog claim is made; the published matrix-norm items are not needed for the direct pair and tensor estimates. The design's optional RK route is therefore not invoked.

The boundary clause follows the design's interior/periodic alternative. The A-page claims only where the full kernel footprint lies in the domain, and the B page computes the exact half-line boundary bias. A uniformly invertible boundary moment fit or another boundary solver remains a separate obligation; arbitrary boundary consistency is not claimed.

## Source reading and dispositions

Both independent full-text sources were read in the stated locators and passed the actual fetch stamp:

- Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, full author text at https://arxiv.org/html/1109.2219: §2.1 kernel interpolants, §2.2 variational derivation and matched energy discussion, and §5.7 tensile instability. Its harvest and item mappings are recorded in the coverage JSON.
- Benjamin Seibold, MIT OpenCourseWare 18.336 Lecture 25, Particle Methods, complete six-page PDF at https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf: all pages, especially the non-equidistant meshfree approximation, kernel convolution, point-cloud quadrature and SPH momentum/energy equations.

The actual command node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-47.coverage.json --stamp returned exit 0: 2/2 full-text sources fetch-verified and stamped. No retrieval failed, so no source-resolution retry or drop was recorded. The source harvest dispositions are in the coverage file; the literature supplies context, while the local proofs supply the quantitative bounds and conservation identities.

## Dependency and boundary review

- Batch dependency level: 0; in-run prerequisite batches: none.
- Maximum local item level: 5, from the ordered SPH definition → pair identities → invariants / Lipschitz bound → local well-posedness → forward-Euler tube error chain.
- The meshfree value estimate gives the explicit cellwise error and sufficient condition h/ε → 0. The derivative estimate gives O(ε² + h/ε²) under the stated mesh assumptions; h/ε² → 0 is a sufficient joint refinement condition.
- The oscillation lemma uses the standard cell oscillation over pairs of points, hence the factor 2h; the derivative/value theorem absorbs this fixed factor into its generic constant. The fixed-neighbor witness verifies its periodic rule with fill radius 3ε/4, C_V=2 and C_L=8.
- The kernel and SPH definitions specify their domains and well-definedness conditions. The regularized SPH ODE is only claimed on the open positive-density state domain; the error theorem additionally assumes an exact path with a positive tube margin.
- The matched internal-energy equation is part of the defined semidiscrete model. No artificial viscosity, energy-conserving time integrator, arbitrary boundary correction, shock convergence, or singular-limit theorem is inferred.

## Scoped mechanical results

Final results after the item, manifest, contract, and page edits:

- Batch 47 has no in-run supplier batch and remains at dependency level 0. The scoped item check covers 22 items across the two pages, maximum item level 5, with no cycles or label errors. The A items and B examples match the carrier frontmatter and page requirements.
- precheck: 19 proof-bearing items checked, 0 failing. proof-layout: 22 items, 50 numbered steps, 0 defects.
- Strict proof-contract validation: all 22 manifest items checked, 19 proof-bearing contracts, 0 errors and 0 warnings. Contracts were regenerated from the final item text and contain supplier excerpts, claims, inputs, boundary dispositions, and exact finite checks for the three explicit counterexamples.
- coverage-checklist --require-destination: 1 A page, 11 harvested source results, 0 errors and 0 warnings. source-fetch-check --stamp: both full-text sources verified and resolved; no drops or retrieval failures.
- Focused depcheck: 22 selected items and their prerequisite closure, 0 errors or warnings. Focused fwdcheck: 0 open/closed forward references and 0 errors. Focused extcheck: 22 items, 0 unproved records, 0 errors or warnings. rendercheck: all 22 items and both page carriers checked, 0 errors or warnings.
- All 3 TikZ figures compiled to SVG with node-tikzjax 1.0.5 installed temporarily under /tmp; the repository was not changed for that check. The app checkout did not have that package installed locally, so the temporary isolated install supplied the compiler.
- citecheck reported two keyword-match warnings, both reviewed as false positives: ex-two-particle-sph-force-pair.md:40 cites force antisymmetry, and prop-sph-matched-internal-energy-conserves-total-energy.md:38 uses oddness of the kernel gradient plus commutativity. Neither uses an order axiom.
- All 22 assigned items have Step 1 ready records with their exact manifest dependency IDs and examined-dependency evidence. The records document authoring readiness; they are not independent approval.
