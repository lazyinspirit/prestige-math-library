# Step 3a reader report — batch 97

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `97`

## Run and scope

The live Autopilot status was `3a-read`; batch 97 had not yet been split and no worker was active. I used the batch-97 manifest and current item files, not historical resume claims. The batch contains the A page `khovanov-homology-detects-the-unknot` and the B page `khovanov-homology-detects-the-unknot-examples`. Both page files are YAML frontmatter only, retain `page_layout: compact-v1`, match their item inventories, and have no Markdown body.

## Opened inventory

**Assigned A-page items (dependency order):**

- `def-mirror-of-a-classical-knot`
- `lem-essential-curves-on-torus-with-same-primitive-class-are-isotopic`
- `lem-normal-boundary-hodge-estimate-on-four-dimensional-balls`
- `lem-strong-l-two-neumann-inverse-on-four-dimensional-balls`
- `lem-strong-lp-neumann-inverse-on-four-dimensional-balls`
- `def-singular-instanton-knot-and-sutured-closure-data`
- `lem-neumann-coulomb-gauge-correction-by-contraction`
- `def-instanton-knot-homology-and-canonical-class`
- `lem-knot-exterior-is-irreducible`
- `lem-small-critical-curvature-coulomb-gauges-on-four-balls`
- `lem-instanton-knot-complex-asd-analytic-foundations`
- `lem-nontrivial-knot-exterior-boundary-incompressible`
- `lem-kh-to-instanton-resolution-spectral-sequence`
- `thm-sutured-instanton-khi-rank-detects-unknot`
- `thm-khovanov-to-instanton-spectral-sequence`
- `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`

**Assigned B-page items:**

- `cex-knot-kt-44-boundary-case`
- `ex-knot-kt-44-worked-cases`

**Opened supplier and direct/indirect consumer items:**

- Current-run knot suppliers from batches 57 and 60: `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three`, and `lem-knot-genus-zero-iff-unknot`.
- Current-run Khovanov suppliers from batch 90: `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `alg-khovanov-chain-complex-from-diagram`, `def-reduced-khovanov-cohomology-of-a-knot`, `lem-khovanov-cube-differential-squares-to-zero`, and `thm-reduced-khovanov-basepoint-and-reidemeister-invariance`.
- Singular analytic and continuation chain: `lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts`, `lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections`, `lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators`, `lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set`, `lem-order-two-asd-bubbles-have-relative-fredholm-index-loss-at-least-four`, `lem-earring-gauge-components-force-index-energy-monotonicity`, `lem-bounded-holonomy-forced-orbifold-asd-trajectories-have-bubble-compactness`, `lem-earring-holonomy-perturbations-regularize-all-trajectory-indices`, `lem-regular-earring-trajectories-have-exponential-ends-and-low-index-broken-compactness`, `lem-regular-earring-broken-trajectories-have-exhaustive-nonlinear-gluing-collars`, `lem-earring-trajectory-determinants-have-coherent-integral-orientations`, `thm-earring-instanton-complexes-have-canonical-continuation-equivalences`, and `lem-singular-earring-instanton-homology-of-the-unknot-is-integrally-rank-one`.
- Resolution-cobordism chain: `thm-based-link-earring-complexes-and-resolution-unlink-groups-are-well-defined`, `lem-earring-skein-cobordisms-admit-compatible-marked-orbifold-backgrounds`, `thm-admissible-earring-cobordisms-have-finite-oriented-family-counts-and-gluing`, `lem-three-cyclic-skein-saddles-have-the-pentagon-cap-and-product-replacement-geometry`, `thm-cyclic-skein-cap-families-have-degree-one`, `thm-earring-skein-cobordisms-give-integral-exact-triangles`, and `thm-integral-earring-unlink-saddles-are-the-reduced-frobenius-operations`.
- ASD compactness/index inputs: `lem-small-uniform-curvature-gauges-on-four-dimensional-annuli`, `lem-small-critical-drift-poisson-gradient-inverse`, `lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth`, `lem-euclidean-asd-small-energy-curvature-bound`, `lem-finite-energy-punctured-euclidean-asd-connections-have-l-four-gauges`, `lem-critical-four-dimensional-coulomb-estimate-and-extraction`, `lem-critical-coulomb-transition-maps-have-holder-representatives`, `lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover`, `lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms`, `lem-finite-energy-euclidean-asd-point-singularity-is-removable`, `lem-uhlenbeck-compactness-and-removable-singularities`, `def-asd-moduli-fredholm-index-and-lattice-setup`, and `thm-asd-deformation-complex-index-formula`.
- The functional-analytic suppliers needed by the Neumann/Hodge estimates were opened at their cited interfaces: the Riesz-transform and Plancherel statements, Fourier identities, Meyers–Serrin density, weak Leibniz rule, smooth bump, Rellich compactness, harmonic regularity, Poincaré, extension/Sobolev embeddings, Hölder, Riesz–Fischer, monotone convergence, and divergence theorem items.
- For the post-repair definition interface, I checked `thm-poincare-lefschetz-duality`, `thm-first-chern-class-classifies-complex-line-bundles`, and `def-stiefel-whitney-classes-from-the-projective-bundle-relation`. I also checked its out-of-batch consumers `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs` and `thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots` at their use of the unchanged supplied-bundle interface.

**Primary literature consulted for source-sensitive claims:** Kronheimer–Mrowka, *Knots, sutures and excision*, §§7.1–7.6 (Definitions 7.3, 7.10, 7.13; Propositions 7.4–7.5; Theorem 7.7; Propositions 7.11 and 7.16), https://arxiv.org/pdf/0807.4891v2; Kronheimer–Mrowka, *Khovanov homology is an unknot-detector*, §§1.1, 5.4, and 6–8.7, https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf; and the cited Hatcher and Khovanov/Bar-Natan material recorded in the item references. The torus-closure eigenspace identity and rational coefficient allowance were verified at the stated locations; the Khovanov reflection/cube conventions and the assigned trefoil crossing sign were checked against the repository definitions.

## Review results and edits

- The torus-slope argument for boundary incompressibility, the local Neumann correction, the Hodge and Neumann estimates, the knot homology calculation, the reduced Khovanov cube, the finite-rank spectral-sequence argument, and the two worked diagrams are consistent with their stated hypotheses and conventions. The braid picture’s left-over crossing has negative determinant under the repository’s crossing-sign definition; its closure arrows and basepoint match the prose. The Frobenius `tikzcd` supplier diagram matches its displayed equality.
- **Repair:** `def-singular-instanton-knot-and-sutured-closure-data` included a (PU(2)) bundle with prescribed (w_2) as data, but no existence construction supported the later universal knot statements. I added an explicit construction: orient the relative arc, take its integral Poincaré–Lefschetz dual (c), choose a line bundle with (c_1=c), and projectivize the unitary frame bundle of that line plus a trivial line. The clutch calculation gives the required mod-two lifting obstruction. I added the two dependency IDs and references, and synchronized the item’s dependency and statement snapshot in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-97.pages.json`. The definition’s consumer interface is unchanged. There was no proof-contract entry for this proof-free Definition under the run’s current contract scope, and no `verification.judge` block was present.
- Repair validation: `node tools/tsx-run.mjs tools/reflow.mts items/def-singular-instanton-knot-and-sutured-closure-data.md` reported unchanged; targeted precheck reported `0 checked, 0 failing` because the item is a Definition; the required final `node tools/proof-layout.mjs items/def-singular-instanton-knot-and-sutured-closure-data.md` reported `1 items, 0 steps, 0 defects`.

## Uneditable findings

1. **Published dependency — `thm-riesz-fischer-completeness-of-l-p`, Statement, opening paragraph.** The text is malformed: “Then (L^p(\mu)), with the norm of / The (L^p) norm descends to the quotient and makes (L^p) a normed space …, is complete.” This dependency is used by assigned item `lem-normal-boundary-hodge-estimate-on-four-dimensional-balls`. The intended completeness claim is recoverable, so severity is nonfatal, but the published statement needs editorial repair by its owner.
2. **Current-run draft dependency — `lem-regular-earring-broken-trajectories-have-exhaustive-nonlinear-gluing-collars`, Proof 2.1 and 4.1.** Step 2.1 asserts that patching the two level inverses and the critical full-line inverse produces a uniformly bounded inverse on (K_T^perp), with both left and right errors below (1/2), but does not define the patched operator or establish those error bounds in the global Sobolev norms, the domains/cutoff compatibility, or how removing the scalar stabilizations preserves surjectivity. Step 4.1 then uses a uniform finite-interval estimate without a complete boundary-value estimate or its residual term. The cited local inverses and critical spectral gap do not alone establish the asserted long-neck inverse/exhaustion. A full parametrix with uniform error estimates and a proof of the normal-complement isomorphism, or an authoritative gluing theorem with matching order-two orbifold and holonomy-perturbation hypotheses, is needed. This source is directly in the dependency closure of assigned consumer `lem-instanton-knot-complex-asd-analytic-foundations` and consequently blocks its integral (d^2=0) claim. The item has the current run’s `pipeline_run` but is not itself listed as an item in any run batch manifest, so no exact producer batch can be named; its observed current-source SHA-256 is recorded in the findings JSON.

## Page verdicts

- `khovanov-homology-detects-the-unknot` (A page): **HOLD.** Its frontmatter, inventory, and no-body presentation are correct. The assigned analytic complex/spectral-sequence chain remains dependent on the unclosed nonlinear gluing proof above. The Hodge prerequisite chain also reaches the malformed published Riesz–Fischer statement.
- `khovanov-homology-detects-the-unknot-examples` (B page): **PASS.** Its frontmatter, inventory, and no-body presentation are correct. The counterexample and specified reduced cube calculations check out, and the TikZ braid agrees with the declared crossing convention.

## Blocker and coverage note

The A-page theorem chain cannot be accepted until the long-neck inverse/exhaustion argument is supplied or replaced with a matching authoritative result. The current-run producer has no exact batch assignment in the manifests, which limits routing precision. I reviewed the gauge-theory suppliers at their relevant statements and proof sections and checked the required consumer interfaces; I did not independently reconstruct every analytic theorem from the literature. No page prose or B-page prose was edited.
