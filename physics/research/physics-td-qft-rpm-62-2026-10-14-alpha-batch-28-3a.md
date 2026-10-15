# Batch 28 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-28`; assigned batch: 28.

Scope owes only `refuter:28:1`; no touched/page/reader obligations. Pre/post snapshots agree, and the reader made no edits. The reader found no defect; the refuter flags the magnetic zero-transverse-momentum statement. These reports are evidence rather than verdicts.

## Completed level 1 review

`pthm-rpm-rindler-clock-gradient`: all six steps independently checked against its current direct supplier definitions and statements. On rho>0 the inverse is smooth, the metric cross terms cancel, U=(c cosh chi,c sinh chi) is future normalized, and A has norm c^4/rho^2. Both radial null directions integrate to the logarithmic travel time; equal radii give zero travel and equal clock increments. Partial_T phase is constant on the chosen constant-phase ray, hence the positive contraction ratio is rho_E/rho_R. The additional local reception postulate is an adopted assumption, with qualitative ray and apparatus qualifications, and does not extend the published SR postulate. No empirical premise or choice principle is used. No defect confirmed; contract risk review complete.

Exact supplier paths: `items/def-sr-affine-minkowski-model.md`, `items/def-inertial-frame-and-inertial-chart.md`, `items/def-sr-si-units-and-coordinate-conventions.md`, `items/thm-sr-proper-time-and-observer-decomposition.md`, `items/def-sr-proper-acceleration.md`, `items/def-hyperbolic-functions.md`, `items/thm-hyperbolic-identities-and-derivatives.md`, `items/thm-logarithm-derivative-and-integral.md`, `items/post-sr-ideal-clocks-and-light.md`, `items/def-sr-null-wave-covector-and-observer-frequency.md`, `items/post-sr-ideal-plane-wave-model.md`, `items/post-rpm-ideal-rindler-phase-reception.md`, `items/pthm-sr-rindler-horizons-and-radar.md`; reception additionally uses `items/lem-sr-phase-rate-along-worldline.md`. Checked their relevant Definition/Postulate/Statement sections; not a transitive published audit.

Sources consulted: [Dray Chapter 4 section 2](https://sites.science.oregonstate.edu/physics/coursewikis/GGR/book/ggr/rindprop.html), stationary proper time and acceleration; [Gourgoulhon](https://people-lux.obspm.fr/gourgoulhon/fr/present_rec/imcce_syrte10.pdf), Rindler coordinate and ray section; [Mashhoon](https://arxiv.org/pdf/gr-qc/0303029), section 1 pp.1-2 and section 4 p.12, locality and finite wave-observation limitations.

Initial risk-report: exit 0, nine items, four CRITICAL theorems.



## Completed level 5 electric review

`pthm-rpm-constant-electric-orbit`: checked all five steps and direct supplier interfaces. The global potential gives F01=-E0/c. The positive energy branch and velocity follow from the massive shell. Pi>=mc>0 makes both roots and the logarithm well-defined, including negative longitudinal momentum and negative force. Differentiating the positions gives v, and differentiating energy gives F0*v1. For F0=0 the free branch has the same initial data. Speed is strictly less than c algebraically; all finite-time formulas are smooth. Force integration fixes momentum, and the zero-derivative result fixes position on each common interval containing the initial datum. AC_omega is explicitly inherited from the draft action suppliers, without a new choice use. No local defect confirmed; risk review complete.

New direct supplier Definition/Postulate/Statement sections checked: `def-rpm-charge-spin-model`, `post-rpm-external-charge-action`, `pthm-rpm-external-charge-action-equivalence`, `pthm-rpm-charge-mass-shell`, `def-countable-choice`, `def-em-electromagnetic-tensor`, `post-sr-massive-particle-dynamics`, `pthm-sr-momentum-and-four-force`, `thm-real-power-continuity-and-derivatives`, `cor-zero-derivative-implies-constant`, all at `items/<id>.md`. Draft RPM supplier status remains conditional, not certified by this review.

Sources consulted: [Likharev section 9.6](https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_(Likharev)/09:_Special_Relativity/9.06:_Relativistic_Particles_in_Electric_and_Magnetic_Fields), uniform-field section; [Fowler Lecture 73](https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_73_Particle_Const_Fields.html), electric, magnetic and crossed-field sections. Fowler uses Gaussian units; the local SI potential, force and momentum formulas were verified directly.



## Completed level 5 magnetic adjudication

`refuter:28:1`: **confirmed_fatal**, repair confidence 1. The observed source is bound by the scope fingerprint and equal pre/post raw hashes. Zero transverse momentum makes both transverse coordinates constant; if p03 also vanishes, the entire spatial image is a point. Thus neither possible reading of the original line clause handles all allowed data. Repaired only the Statement geometry clause and proof step 4.1. The full line occurs precisely for nonzero axial momentum in this branch. Nonzero transverse momentum with zero axial momentum remains a planar circle. No formula, domain, force premise or physical qualification changed.

All five magnetic proof steps checked. The potential gives F12=B0, energy constancy fixes S0, the signed rotation system and integrated positions differentiate correctly, and the conserved squared momentum difference establishes uniqueness. S0>=mc>0 and the separate Omega=0 free branch avoid division by zero; shell algebra gives speed<c for all finite times. New direct supplier sections checked: `items/def-cross-product-in-r3.md`, `items/def-sine-and-cosine-by-power-series.md`, `items/thm-sine-and-cosine-derivatives.md`, `items/thm-algebra-of-derivatives.md`; shared suppliers are listed in the electric review. No new choice use beyond inherited AC_omega.

Consumer search over items and library found only `pthm-rpm-crossed-field-drift`, `ex-rpm-constant-magnetic-helix`, and page `rpm-exact-flat-orbits`. Their actual uses were read: valid orbit formulas/existence/uniqueness including degeneracies, nonzero-transverse circular specialization, and conditional trajectory summary respectively. All remain sound without edits; no outside affected consumer or further propagation. Updated manifest Statement, contract step 4.1, boundary evidence and zero-momentum check. Existing ai-altered provenance remains appropriate; verification has no judge stamp to invalidate. Risk review complete. Closed ledger row: `physics-td-qft-rpm-62-2026-10-14-3a-batch-28-magnetic-zero-momentum`.



## Completed level 6 crossed-field review

`pthm-rpm-crossed-field-drift`: all five steps checked. The combined potential has the stated SI field components. Both signs of E0 and B0 give vd=-E0/B0*e2 and vd cross B=-E; substituting into the arbitrary-direction transformation gives Eprime=0 and Bprime=B/gamma_d. The E0=0 identity boost and q=0 free branch remain valid. The primed initial event is handled by an explicit time shift of the autonomous magnetic system. Metric preservation and potential one-form pullback preserve the action, hence the conditional force equation. Uniqueness supplies the converse correspondence. The positive lower bound dt/dtprime>=gamma_d*(1-|vd|/c) gives strict monotonicity and unboundedness in both directions; continuity fills every real laboratory time. The drift is one force-free orbit; general initial data need not have that velocity. Null and supercritical fields are excluded, and no empirical input or additional choice is introduced. Risk review complete; no confirmed defect.

Additional direct supplier sections checked at `items/<id>.md`: `pthm-em-lorentz-field-transform` Statement (a-prime), `def-euclidean-inner-product` Definition, `lem-cm-cross-product-triple-identity` Statement, `def-lorentz-boost` Definition, `lem-boost-is-proper-orthochronous-with-inverse` Statement (i),(iii),(v), and `post-sr-inertial-covariance` Postulate. Shared supplier sections and the repaired magnetic proof were already checked. The draft RPM suppliers remain conditional prerequisites; this review grants no supplier acceptance.

No defective published supplier was identified, so no published-ledger edit or lock was needed. No unresolved local mathematical blocker, outside affected consumer, or withdrawal was found.



## Final checks and handoff

- `node tools/physics-support/risk-report.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-28.proof-contracts.json --require-reviewed`: exit 0; nine items, four CRITICAL reviews complete, zero errors.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-rpm-constant-magnetic-helix.md`: exit 0; one checked, zero failing.
- `PRESTIGE_APP_DIR=/private/tmp/prestige-physics-render node tools/physics-support/proof-layout.mjs items/pthm-rpm-constant-magnetic-helix.md`: exit 0; one item, five steps, zero defects. This was run after the final item edit. Initial default-loader attempt failed to resolve the renderer alias; the existing temporary tsx setup resolved the environment issue without repository/app changes.
- `node tools/physics-support/rendercheck.mjs items/pthm-rpm-constant-magnetic-helix.md`: exit 0; one file, math parsed under real KaTeX and frontmatter under the renderer YAML parser.
- `node tools/physics-support/proof-contract.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-28.proof-contracts.json --strict --items pthm-rpm-rindler-clock-gradient,pthm-rpm-constant-electric-orbit,pthm-rpm-constant-magnetic-helix,pthm-rpm-crossed-field-drift`: exit 0; four contracts, zero errors/warnings. The initial run identified stale F3 supplier excerpts in the magnetic and crossed-field contracts and the changed F5 magnetic excerpt in the crossed-field contract. Refreshed only those quotations from the exact current Statement sections already reviewed; no supplier claim or dependency changed. No defect-ledger row was created for these mechanical failures.
- Local structural check: exact one-obligation decisions coverage, group batch-28, exactly one fixed defect row at stage 3a-adjudicate, and all eight unedited item raw hashes equal the immutable post snapshot: pass. Reader pre/post item/contract snapshots agree. Manifest Statement mirrors the repaired magnetic Statement; no inventory/order/dependency change.

An attempted `depcheck --help` does not support help and began a broader scan; it was interrupted with exit 130 and is not reported as validation. An initial broad filename search was likewise interrupted; bounded exact paths and the scoped item/page consumer search supplied the review evidence. Neither action edited content.

Exactly one routed decision is written in `research/physics-td-qft-rpm-62-2026-10-14-alpha-batch-28-3a-decisions.json`: refuter:28:1, confirmed_fatal, complete repair with confidence 1. All four risk reviews are complete. No local blocker remains. Current draft supplier status and its open contract records are preserved; this dispatch does not independently certify batch 24. Published/imported mathematical content was read-only. No judge, stamp, certification, dispatch, or gate battery was initiated; current decision hashing and engine gates remain engine-owned.
