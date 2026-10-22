# Step 3a reader report — batch 129

**Run:** physics-non-fluid-129-2026-10-21-r2  
**Role:** reader  
**Scope:** batch 129 only

## Inventory opened

Assigned pages:

- library/thermodynamics-and-general-relativity/tgrx-research-boundaries.md — draft A page, with op-tgrx-continuum-generalized-entropy.
- library/thermodynamics-and-general-relativity/tgrx-research-boundaries-examples.md — draft B page, with rem-tgrx-research-logical-firewall.

Both page bodies are empty, consistent with the current frontmatter-only page policy. The A page requires tgrx-regulated-second-law, tgrx-ads-effective-boundaries, tgrx-jt-disk-model, tgrx-renormalized-stress, and tgr-phs05. The B page requires the A page and tgrx-renormalized-stress. I opened all five prerequisite page carriers and confirmed their page IDs, current inventories, and empty bodies.

Assigned items:

- op-tgrx-continuum-generalized-entropy
- rem-tgrx-research-logical-firewall

The open problem’s six declared suppliers were opened: post-tgrx-semiclassical-equation, def-tgrx-hadamard-stress-contract, def-tgr-horizon-screen-family, def-tgr-regulated-generalized-entropy, post-tgrx-regulated-horizon-balance, and pthm-tgrx-regulated-gsl. The remark’s declared supplier was post-tgrx-semiclassical-equation.

Relevant supporting items opened included post-tgrx-free-collapse-scattering, def-qftx-wavefront-hadamard, def-tgrx-curvature-squared-variation-tensors, def-gr-curvature-tensor-and-derived-tensors, lem-tgr-null-screen-quotient-positive, def-tgr-finite-cutoff-outside-entropy, lem-tgr-renormalization-finite-part-ambiguity, def-tgr-framework-units, prop-tgrx-finite-modular-balance, thm-it-quantum-relative-entropy-partial-trace-data-processing, def-it-finite-dimensional-quantum-relative-entropy, def-it-von-neumann-entropy, and def-qc-partial-trace. I also opened post-tgrx-jt-disk-spectral-model for the local JT scope cited by the remark. Relevant mathematical import snapshots were identified through research/math-imports.json and remained read-only.

## Source review

I independently inspected the cited material at the locators needed for the claims; the source inventory and prior author reviews were treated as evidence, not verdicts.

- Wall, [A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices](https://arxiv.org/pdf/1105.3445): §§2.1, 2.5–2.8, especially equation (50). These sections state the horizon-algebra, semiclassical, renormalized-energy/entropy, and order-of-limits assumptions.
- Reall, [Black Holes lecture notes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf): §10.9, equation (10.113), and the nearby backreaction discussion.
- Jacobson, [Introductory Lectures on Black Hole Thermodynamics](https://physics.umd.edu/grt/taj/776b/lectures.pdf): §3.3.4 on limits of general GSL arguments and §3.4.4 on entanglement entropy and renormalization. The PDF title page gives this title; the linked source had been mislabeled in the original item.
- Faulkner and Speranza, [Gravitational algebras and the generalized second law](https://arxiv.org/pdf/2405.00847): abstract, §3.3, and §5. These support the stated Killing-horizon/modular-flow scope, the slowly varying reference-wavefunction limit, the state-independent entropy constant, and the absence of a demonstrated monotonicity result after the corrections.
- Kirklin, [Generalised second law beyond the semiclassical regime](https://arxiv.org/pdf/2412.01903): abstract, §§3.1–3.4, §§4.1–4.3 (equations (4.25)–(4.26), (4.43)), §§5.2–5.3, and §6. Equation (4.43) gives the exact ordered-cut inequality and later-cut free-energy term; the usual GSL reduction is approximate and leading-order with a UV cutoff and additional cut conditions.
- Kudler-Flam, Leutheusser, and Satishchandran, [Generalized Black Hole Entropy is von Neumann Entropy](https://arxiv.org/pdf/2309.15897): abstract and Introduction, including the stated linear-field, bifurcate-Killing-horizon, stationary-state, and asymptotic-decay assumptions.
- Ali and Suneeta, [A local Generalized second law in crossed product constructions](https://arxiv.org/pdf/2404.00718): abstract and §I, for the static/Kerr scope and constraint assumptions.
- Jia, Qi, and Gao, [Entanglement Entropy and Thermodynamics of Dynamical Black Holes](https://arxiv.org/pdf/2509.05700): abstract, §2.1, and relevant equations in §§4–5. The first-order and leading-local-area-law qualifications are preserved.
- Almheiri et al., [The entropy of Hawking radiation](https://arxiv.org/pdf/2006.06872): §11.2, which lists unresolved contour, saddle, cutoff, and exact-state questions.
- Saad, Shenker, and Stanford, [JT gravity as a matrix integral](https://arxiv.org/pdf/1903.11115): abstract and Introduction on the formal genus expansion and non-unique completion. The local disk-only scope was checked in post-tgrx-jt-disk-spectral-model.

No experiment, measurement, statistical estimate, or empirical premise is claimed in either assigned item.

## Edits and evidence

- In op-tgrx-continuum-generalized-entropy, replaced the undefined smooth solution pair (g, phi) with a smooth Lorentzian metric g and the positive normalized Hadamard state omega that jointly satisfy the adopted equation and supplied data. The local semiclassical-equation supplier has metric and state as its solution inputs and does not define a separate classical phi equation. The statement now says an additional classical scalar field is present only if a selected model specifies its equation and coupling; it still asserts no solution existence, uniqueness, or stability.
- Corrected the Jacobson source title in the open-problem metadata and reference link. The linked 40-page PDF is Introductory Lectures on Black Hole Thermodynamics; its §§3.3.4 and 3.4.4 match the cited GSL-limit and renormalization claims.
- Expanded the source-status definitions in both items: horizon algebras and Killing horizons, the GNS construction and crossed-product representation, Kirklin’s position/translation/boost operators and entropy term, the causal-curve convention for partial Cauchy slices, and the cut area density. These additions state the mathematical content used in the summaries while preserving each source’s conditional scope.
- Added Reall and Jacobson to the remark’s own source references because its text uses both discussions. Added an internal reference to post-tgrx-jt-disk-spectral-model after the remark, keeping that contextual evidence link separate from logical prerequisites.
- Updated the assigned proof-contract evidence for the metric/state formulation and source locators. Neither edited item had a verification.judge record to remove.
- A current items/library reference search found no downstream item consumers of either edited item; the other matches are their assigned page placements.

No page prose, manifest, plan, published content, or mathematical import was edited.

## Page verdicts

- tgrx-research-boundaries (A): **pass**. The title, item placement, five page prerequisites, and conditional open-problem formulation are consistent. The target is expressly an open question, not a claimed theorem or empirical result.
- tgrx-research-boundaries-examples (B): **pass**. Its assigned remark is bounded, source-based prose and does not infer that any cited model result proves the continuum question.

No TikZ or tikzcd diagrams occur in the assigned pages or items.

## Unedited defects and blockers

No confirmed defect remains in an assigned page or item. The frozen batch manifest and batch coverage metadata retain the earlier Jacobson title string; the current item citation is corrected.

The batch-129 author notes report that the stored run-level batch-dependency-level snapshot was stale and required owner refresh. I did not independently rerun that owner-level check; it is outside this reader’s content scope.

## Required checks

- Reflow: both changed items reported unchanged.
- Precheck: both items are non-proof classes; each command reported 0 checked, 0 failing.
- Proof layout: 2 items, 0 steps, 0 defects.

