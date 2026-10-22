# Batch 123 authoring notes — tgrx-regulated-second-law

Evidence updated 2026-10-22 (Australia/Sydney); run physics-non-fluid-129-2026-10-21-r2.

## Plan, design, and ownership

- The run-specific owner-authoring-direction.md is absent.
- The task, the current A/B rows in research/plan-spec.json, and the assigned design at research/plan-thermodynamics-and-general-relativity-frontier-expansion-track.md § “A conditional regulated generalized second law” agree on page IDs, titles, order 943/944, category, library, companions, and earlier page requirements. The A page requires tgrx-relative-entropy-balance and tgr-phs05; the B page requires the A page. No conflict was found.
- The complete item design in research/frontier-expansion-2026-10-19/thermodynamics-and-general-relativity/prose-scaffold.md § tgrx-regulated-second-law is retained: the A page has the finite-balance postulate and conditional theorem; the B page has the product-environment example. The initially empty run item arrays were the expected pre-authoring state.
- No shared plan, dependency-level file, other batch, imported mathematics, published item, or engine state was edited. The assigned A page has two items and the B page has one, well below the page cap.

## Claims and proof route

- post-tgrx-regulated-horizon-balance defines a finite matrix model on an explicitly specified Lorentzian null hypersurface and ordered compact spacelike cuts. Its factor nesting, density matrices, faithful references, modular traces, geometric values, fixed scheme, and balance identity are adopted premises.
- The model entropy is expressly reference-subtracted. The prior finite-regulator definition supplies horizon-section, scheme, and units context; it does not itself impose this subtraction or balance. The carrier does not identify the balance with an area formula, Wall's continuum proof, or a semiclassical Einstein equation.
- pthm-tgrx-regulated-gsl derives the exact finite equality from the finite modular identity and the adopted geometric balance, then applies partial-trace data processing in the correct direction. Its limit clause assumes both endpoint sequences have finite real limits under the same fixed scheme; the epsilon argument proves the order of those limits without asserting their existence.
- ex-tgrx-product-environment-gsl proves product consistency, modular-energy additivity, entropy additivity (including zero eigenvalues), and the relative-entropy product identity by finite basis and spectral sums. It includes the explicit qubit instance with growth k_B log 2. A small TikZ diagram records the environment-trace map; the coordinate proof supplies the justification. No local helper item was necessary because the product identities are proved in the example itself.
- No empirical premise or observation is used. The result is a conditional model deduction, not a claim that the model describes an actual black hole or physical evolution.

## Dependencies and authoring levels

| Item | In-run direct suppliers | Level |
|---|---|---:|
| post-tgrx-regulated-horizon-balance | def-tgr-regulated-generalized-entropy (batch 114, level 1); prop-tgrx-finite-modular-balance (batch 122, level 0) | 2 |
| pthm-tgrx-regulated-gsl | post-tgrx-regulated-horizon-balance (level 2); prop-tgrx-finite-modular-balance (level 0) | 3 |
| ex-tgrx-product-environment-gsl | pthm-tgrx-regulated-gsl (level 3); post-tgrx-regulated-horizon-balance (level 2); prop-tgrx-finite-modular-balance (level 0) | 4 |

The A/B batch level recorded in the run dependency-level file is 2 with page prerequisites 114 and 122. Its recorded row agrees with the current A-page requires list. The item graph for this pair is acyclic.

Before authoring, loadStep1Record and step1Decision returned current ready rows for prop-tgrx-finite-modular-balance (hash d79d61e798d1876c8224df77f5e9535d74e2b11dae3d141ca69301de2b8a28ac) and def-tgr-regulated-generalized-entropy (hash 3e6743521423512198c840600ed9e421c96eef91bf3d92e86e254b72d72a7fc0). Their draft status and pending prechecks do not make them missing prerequisites. The proposition's complete finite proof was inspected; its positive-reference identity and finite partial-trace DPI hypotheses match the use here. The regulated-entropy Definition's actual finite-regulator and fixed-scheme interface was inspected.

The new example also uses the published mathematical thm-natural-logarithm-laws, def-qc-density-operator, thm-non-negative-operator-characterisations, def-qc-partial-trace, and def-trace-of-an-endomorphism; their exact interfaces and relevant proofs or definitions were inspected. thm-natural-logarithm-laws is outside this run, so its missing run-local readiness row is expected and is not treated as a prerequisite gap. No dependency requires an owner escalation.

## Sources and retrieval

- The A page has two independent full-text GSL treatments, including full lecture notes: Aron C. Wall's 44-page paper and H. S. Reall's 149-page Cambridge lecture notes. Watrous's complete book manuscript provides a third, mathematical treatment of finite partial-trace data processing. Exact URLs, locators, item mappings, limitations, search history, and each result's disposition are recorded in research/physics-non-fluid-129-2026-10-21-r2-batch-123.coverage.json.
- Wall §2.5 gives the finite relative-entropy identity and restriction monotonicity; §§2.6–2.8 explain the additional horizon-algebra, exterior-region, semiclassical, and renormalization assumptions. Those physical assumptions are not imported into the finite proof.
- Reall §10.9 supplies a concise generalized-entropy summary and a backreaction qualification, not a proof of general monotonicity. The complete retrieval and §10.7–10.9 reading record from batch 114 is reused. Its PDF-renderer error was recovered by an earlier direct full-text fetch; it was not a source-fetch failure.
- Watrous §5.2.3, Theorem 5.35 and its proof, was read in full in batch 122. The current proposition's proof and exact use were also inspected. Any base-2 presentation is a positive ln(2) rescaling and does not reverse the data-processing inequality.
- source-fetch-check --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-123.coverage.json --stamp passed: 3/3 full-text sources fetch-verified, 0 newly stamped because the successful prior retrieval stamps were reused; 0 drops. No source-resolution escalation or alternative proof was needed.

## Scoped checks

- content-policy on the batch manifest: 3 items, 0 errors, 0 warnings.
- content-policy --manifest-only --authored on the batch manifest: 3 items, 0 errors, 0 warnings.
- Focused depcheck using batch-123.item-selection.json: 3 assigned items, 2713 closure items and 600 prerequisite pages checked; 0 errors, 0 warnings.
- rendercheck on the three items and two page files: 5 files, 0 errors, 0 warnings.
- Strict proof-contract check: all 3 assigned items covered, 0 errors, 0 warnings.
- Normative precheck: postulate nonproof structure passed; both proof-bearing items passed after adopting the proposed phase numbering.
- proof-layout on all three changed items: 3 items, 10 numbered proof steps, 0 defects.
- The batch cross-dependency file was checked as a JSON array with 6 unique rows, all consumers owned by batch 123 and all required fields nonempty. Each verified row records only the scoped interface check, not independent proof approval.

## Run-wide blockers outside batch 123

These failures are from the full-run dependency and proof-contract-coverage checks, not from this pair's closure. No out-of-batch content or shared evidence was changed.

- item-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2 exited 1. It reported no level error for the three batch-123 items (their current values are 2, 3, and 4). Other exact blockers were:
  - Empty inventories: emx-waveguide-scattering-channels, emx-waveguide-scattering-channels-examples, emg-fx08, emg-fx08-examples, emg-fx13, emg-fx13-examples, gr-fx09-bootstrap-and-stability-boundaries, gr-fx09-bootstrap-and-stability-boundaries-examples, nrqmx-certified-spectral-computation, nrqmx-certified-spectral-computation-examples, qftx-anomaly-cocycles, qftx-anomaly-cocycles-examples, qftx-ribbon-braid-representations, qftx-ribbon-braid-representations-examples, qftx-modular-tqft-sewing, qftx-modular-tqft-sewing-examples, qftx-chern-simons-bf-gravity, qftx-chern-simons-bf-gravity-examples, qftx-kz-chiral-interface, qftx-kz-chiral-interface-examples, qftx-hall-bps-wall-crossing, qftx-hall-bps-wall-crossing-examples, qftx-categorified-line-operators, qftx-categorified-line-operators-examples, csm-frontier-sampling-certificates, csm-frontier-sampling-certificates-examples, csm-frontier-inverse-gibbs, csm-frontier-inverse-gibbs-examples, csm-frontier-planar-critical-point, csm-frontier-planar-critical-point-examples, csm-frontier-rare-event-numerics, csm-frontier-rare-event-numerics-examples, qsmx-quantum-double, qsmx-quantum-double-examples, qsmx-transverse-ising-spectral, qsmx-transverse-ising-spectral-examples, tgrx-focusing-boundary, tgrx-focusing-boundary-examples, tgrx-finite-code-holography-examples, tgrx-ads-effective-boundaries, tgrx-ads-effective-boundaries-examples, tgrx-topological-entropy-models, tgrx-topological-entropy-models-examples, tgrx-jt-disk-model, tgrx-jt-disk-model-examples, tgrx-research-boundaries, and tgrx-research-boundaries-examples.
  - Batch 89's current manifest stores these A-page item IDs as bare strings rather than item objects: def-csm-frontier-infinite-volume-criticality, def-csm-frontier-finite-gaussian-precision, lem-csm-frontier-periodic-laplacian-spectrum, lem-csm-frontier-sine-comparison, lem-csm-frontier-schur-complement-positive, def-csm-frontier-gaussian-lattice, thm-csm-frontier-gaussian-massless-dimension, alg-csm-frontier-gaussian-block-rg, thm-csm-frontier-gaussian-block-rg-correct, and lem-csm-frontier-quartic-engineering-scaling. Its B page similarly stores ex-csm-frontier-rg-generates-couplings as a string. The dependency checker reports these 11 entries as “item has no ID.”
  - Stale levels: post-nrqmx-finite-mode-light-matter-model 5 (computed 1); def-nrqmx-finite-mode-g2-statistic 6 (2); pthm-nrqmx-jaynes-cummings-blocks 6 (2); pthm-nrqmx-beam-splitter-count-statistics 6 (2); pthm-nrqmx-finite-mode-loss-channel 7 (2); ex-nrqmx-jc-vacuum-rabi 7 (3); ex-nrqmx-single-photon-antibunching 7 (3); thm-qsmx-finite-mazur-bound 1 (2); cex-qsmx-dc-order-of-limits 2 (3).
- batch-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2 exited 1 with Duplicate item undefined. Batch 89's bare-string item entries are in the current run input. The shared dependency-level file was left untouched.
- proof-contract-coverage.mjs --run physics-non-fluid-129-2026-10-21-r2 --contracts research/physics-non-fluid-129-2026-10-21-r2-batch-123.proof-contracts.json exited 1 with Empty or invalid frontier page inventory qsmx-quantum-double (batch 105). The strict local proof-contract check for batch 123 passed independently.

## Step 1 readiness

Final item readiness rows are current and closed/ready, all with owner false:

- research/physics-non-fluid-129-2026-10-21-r2-step1-post-tgrx-regulated-horizon-balance.json — hash c178d8da501a3552d10f3e8bda4bd8dc570ad73eb4570d7ee31978138a17bef0; dependencies def-tgr-regulated-generalized-entropy and prop-tgrx-finite-modular-balance.
- research/physics-non-fluid-129-2026-10-21-r2-step1-pthm-tgrx-regulated-gsl.json — hash 43ef803027fe20a93cd4a4162e088abe368f23e9891ddf78a232360499ad75c7; dependencies post-tgrx-regulated-horizon-balance and prop-tgrx-finite-modular-balance.
- research/physics-non-fluid-129-2026-10-21-r2-step1-ex-tgrx-product-environment-gsl.json — hash c2ab3a199b0ceaade358eaee22cee1022b92744a517d2f5fba07b848d91d3126; dependencies def-qc-density-operator, def-qc-partial-trace, def-trace-of-an-endomorphism, post-tgrx-regulated-horizon-balance, prop-tgrx-finite-modular-balance, pthm-tgrx-regulated-gsl, thm-natural-logarithm-laws, and thm-non-negative-operator-characterisations.

The current loadStep1Record and step1Decision query confirms each hash and decision. These records bind the current item/dependency closures and A/B placement only; they are not independent mathematical acceptance or proof approval.
