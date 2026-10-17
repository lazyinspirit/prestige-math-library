# Step 5 repair: impact-initial-pass-2, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/impact-initial-pass-2-1.json.







Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-impact-initial-pass-2-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"impact-initial-pass-2",round:1,unit:"3",input_sha256:"67bb471061e0ed400ea90b8d668c93e80ec6129a316f4d060b698455361b9603",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

This pass retains your own genuine prior reviewer session. Selected same-reviewer obligations for this lane: alg-age-structured-renewal-upwind-finite-volume, alg-pade-scaling-and-squaring-exponential, thm-xd-uniformization-truncation-and-error, alg-xd-finite-budget-adaptive-projection, cex-full-lsqr-can-amplify-data-noise, cex-raw-prplus-loses-descent-and-safeguard-restarts, def-centered-leapfrog-wave-scheme, def-periodic-one-way-advection-schemes, thm-finite-input-bochner-l2-is-hilbert, def-uniformly-elliptic-affine-random-diffusion, ex-damped-newton-halves-step-before-local-phase, ex-morozov-noise-level-underestimate-prevents-crossing, ex-rosenbrock-fr-prplus-trace, ex-sqp-augmented-lagrangian-penalty-conditioning, ex-two-call-spsa-biological-simulator, thm-periodic-centered-wave-amplification-and-endpoint, ex-wave-cfl-endpoint-and-energy-breakdown, ex-xd-birth-death-poisson-tail, lem-dirichlet-grid-poincare-inequality, lem-dirichlet-grid-summation-by-parts, lem-finite-modified-hamiltonian-exists, lem-fr-descent-and-direction-growth-bound, lem-periodic-advection-amplification-symbols, lem-safeguarded-pr-plus-uniform-angle, rem-matrix-function-condition-estimates-are-not-certified-bounds, thm-affine-random-diffusion-solution-is-bochner, thm-fletcher-reeves-liminf-gradient-under-strong-wolfe, thm-fr-and-raw-prplus-exact-line-search-match-linear-cg, thm-kahan-and-neumaier-finite-error-identities, thm-lsqr-residual-minimizes-on-krylov-subspace, thm-morozov-discrepancy-choice-converges, thm-nearest-neighbor-cfl-domain-condition, thm-nested-dissection-grid-work-and-storage-bounds, thm-neutral-delay-euler-first-order-error, thm-nonlinear-cg-finite-budget-terminates, thm-parabolic-fe-gradient-error-with-time-dependent-ritz, thm-product-chaos-and-spatial-density-in-bochner-l2, thm-safeguarded-pr-plus-gradient-norms-converge, thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two, thm-spsa-gradient-bias-is-second-order, thm-spsa-gradient-has-inverse-step-variance-bound, thm-spsa-stochastic-approximation-has-stationary-limit-points, thm-sqp-augmented-lagrangian-local-convergence, thm-stochastic-galerkin-coercivity-and-cea, thm-strong-rrqr-swap-rule-terminates, thm-two-product-fma-error-free-transform. Actually examine each current assigned consumer against your earlier supplier changes. Another reviewer may separately owe the same consumer in a later serialized pass; your review supplies only your own obligation.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "action": "record-repaired-finding",
    "id": "cor-shape-regular-affine-fe-primal-energy-approximation",
    "reason": "Expanded F2 to include the same derivative-mean polynomial's top Sobolev norm, licensed by Bramble-Hilbert with parameter r+1 and s=r+1. This bounds both terms in 1.1; fixed extensions, conformity, Countable Choice and the Statement remain intact.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "def-chaos-quadrature-coefficient-estimator",
    "reason": "Made the opening index domain explicitly the supplied admissible degree box and tensor basis. This prevents undefined out-of-box polynomials while preserving every finite cubature formula, including the empty index set and the no-accuracy caveat.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "def-centered-taylor-model-with-derivative-interval",
    "reason": "Matched the repaired Taylor enclosure theorem's finite-operation hypothesis: unavailable data or non-finite operations/conversions supply no finite certificate. The analytic remainder, arbitrary differentiable input domain and successful outward formula are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "def-sqp-augmented-lagrangian-equality-and-inequality",
    "reason": "Replaced the inherited smooth-program label by C2, matching the repaired supplier and avoiding an unintended C-infinity assertion. The augmented Lagrangian, piecewise gradient and multiplier formulas are untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "lem-composite-simpson-asymptotic-error-expansion",
    "reason": "Corrected cubic to quartic in F1: the cited kernel is a cubic factor times a nonconstant linear factor. Its sign, mass and error identity are unchanged, so the uniform-continuity asymptotic proof and Statement remain intact.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "ex-bounded-engineering-design-mixed-integer-gap-certificate",
    "reason": "Encoded the identical feasible set with redundant inequalities -x<=0 and x-1<=0, selecting constrained mode where attaining endpoint witnesses are permitted. Three one-call exact reports then yield the original L=U=0 and witness (2,1) within N=4; no zero-gap claim was weakened.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "lem-dirichlet-forcing-coefficients-exceed-the-generator-domain",
    "reason": "Corrected F1's stale l2(N) notation to the supplier's positive-index set and made the generator sum range explicit. The Fourier coefficient integral, square summability and divergent generator norm already use k>=1; Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "lem-discrete-summation-by-parts-poincare-and-inverse-bound",
    "reason": "Removed positive from the generic flux operator in Given. Arbitrary face coefficients support the summation-by-parts identity, while positivity and invertibility are asserted only under the explicit face lower bound a0>0; Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "thm-local-index-one-saddle-certificate-from-enclosures",
    "reason": "Added the existing continuous-partials theorem to deps and F3. Coordinate C4 regularity gives continuous gradient partials; applying the theorem at every point and continuity of the Hessian establish the C1 gradient required by the residual-to-root lemma. Statement, radius and index bounds are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "thm-adaptive-finite-candidate-gp-search-posterior-correct",
    "reason": "Carried the algorithm's deterministic history-measurable availability condition into Statement/Given and the induction. Conditional on H_t, success is then predetermined and adds no latent-process or fresh-noise information; Gaussian conditioning on the actually selected list is licensed. Informative censoring is no longer included.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "thm-sdc-finite-sweeps-raise-order",
    "reason": "Stated exact initialization y0=y(0) for the global-order conclusion and in A1, licensing the existing e0=0 recurrence argument. Fixed-k local defects, uniform contraction/tube hypotheses and p=min(M,k+1) are preserved; no initializer is needed for the local-step assertion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "ex-rounded-cholesky-two-by-two-residual",
    "reason": "Renamed Statement/Proof to Example/Verification as required for its example kind. The positive quadratic form, exactly representable first entries and irrational final square root still give the same nonzero residual under the unchanged rounded recurrence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "ex-subnormal-and-overflow-range-failure",
    "reason": "Renamed Statement/Proof to Example/Verification. The two-input trees fail at their sole root addition under the no-subnormal/overflow policy; the supplier's corrected early-termination count does not change these branches.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "lem-finite-budget-scf-iteration-work",
    "reason": "Added response-evaluation to the terminal-status list and early-return induction branch, matching the certified DIIS algorithm's distinct response-evaluation-failure. This branch adds no tests or updates, so the original N, N+1 and 2N+1 work bounds remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "alg-svrg-finite-sum-method",
    "reason": "Qualified the control-variate naming coordinatewise at fixed history with one uniform-index sample, current gradient integrand, snapshot control, known full-gradient coordinate mean and coefficient one. This exactly meets the scalar supplier without changing sampling, updates, output law or inherited AC.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "thm-exponential-euler-etd2-global-error-and-action",
    "reason": "Replaced the definition-only completeness citation/dependency in F14 by thm-dedekind-complete. The displayed nonempty amplification sets and explicit exponential upper bounds meet its hypotheses. Every uniform step lies within 0<=t<t+h<=T, so the repaired local-defect suppliers apply unchanged; Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "ex-svrg-saga-gradient-work-storage-comparison",
    "reason": "Added the missing implementation-equivalence proof: presample the independent uniform output index and retain its iterate in one vector. Updates ignore that index, so the returned law and n+2m gradient count are unchanged while O(d) storage is justified. Coordinatewise control-variate naming changes neither SVRG nor SAGA instructions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "action": "record-repaired-finding",
    "id": "ex-bouncing-ball-transverse-event-error-and-reset",
    "reason": "Removed the repeated guard calculation and used step 3.1 directly for the timing bound; renumbered the reset and direct-check phases as required by precheck. The explicit reset, common convex outgoing tube and aligned-error calculation remain valid under the typed reset convention.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_acceptance": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-bounded-interface-examinations",
    "reason": "Appended unit-3 interface review under the shared-write lock. No published or outside-frontier direct consumer was found and no published item was edited; draft Bochner follow-ups remain recorded in downstream_reviews.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "alg-age-structured-renewal-upwind-finite-volume",
  "alg-pade-scaling-and-squaring-exponential",
  "thm-xd-uniformization-truncation-and-error",
  "alg-xd-finite-budget-adaptive-projection",
  "cex-full-lsqr-can-amplify-data-noise",
  "cex-raw-prplus-loses-descent-and-safeguard-restarts",
  "def-centered-leapfrog-wave-scheme",
  "def-periodic-one-way-advection-schemes",
  "thm-finite-input-bochner-l2-is-hilbert",
  "def-uniformly-elliptic-affine-random-diffusion",
  "ex-damped-newton-halves-step-before-local-phase",
  "ex-morozov-noise-level-underestimate-prevents-crossing",
  "ex-rosenbrock-fr-prplus-trace",
  "ex-sqp-augmented-lagrangian-penalty-conditioning",
  "ex-two-call-spsa-biological-simulator",
  "thm-periodic-centered-wave-amplification-and-endpoint",
  "ex-wave-cfl-endpoint-and-energy-breakdown",
  "ex-xd-birth-death-poisson-tail",
  "lem-dirichlet-grid-poincare-inequality",
  "lem-dirichlet-grid-summation-by-parts",
  "lem-finite-modified-hamiltonian-exists",
  "lem-fr-descent-and-direction-growth-bound",
  "lem-periodic-advection-amplification-symbols",
  "lem-safeguarded-pr-plus-uniform-angle",
  "rem-matrix-function-condition-estimates-are-not-certified-bounds",
  "thm-affine-random-diffusion-solution-is-bochner",
  "thm-box-muller-finite-bit-coupling-error",
  "thm-centered-taylor-model-encloses-function-range",
  "thm-damped-newton-vector-residual-accepted-merit-decrease",
  "thm-dirichlet-leapfrog-discrete-energy",
  "thm-fem-control-proximal-gradient-residual-distance-bound",
  "thm-fletcher-reeves-liminf-gradient-under-strong-wolfe",
  "thm-forward-mode-computes-directional-derivative",
  "thm-fr-and-raw-prplus-exact-line-search-match-linear-cg",
  "thm-full-memory-bfgs-local-superlinear-convergence",
  "thm-index-one-dae-backward-euler-first-order-with-residuals",
  "thm-index-one-dae-bdf2-second-order-with-residuals",
  "thm-index-one-dae-finite-budget-solvers-terminate",
  "thm-kahan-and-neumaier-finite-error-identities",
  "thm-lsqr-residual-minimizes-on-krylov-subspace",
  "thm-minimum-intensity-tau-leap-level-variance",
  "thm-morozov-discrepancy-choice-converges",
  "thm-na-arbitrary-length-fft-correctness-and-cost",
  "thm-na-computed-unitary-radix-two-fft-error-bound",
  "thm-na-bluestein-chirp-phase-error-separate-from-fft-error",
  "thm-nearest-neighbor-cfl-domain-condition",
  "thm-nested-dissection-grid-work-and-storage-bounds",
  "thm-neutral-delay-euler-first-order-error",
  "thm-nonlinear-cg-finite-budget-terminates",
  "thm-parabolic-fe-gradient-error-with-time-dependent-ritz",
  "thm-product-chaos-and-spatial-density-in-bochner-l2",
  "thm-pseudo-arclength-finite-trace-partial-correctness-and-termination",
  "thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted",
  "thm-safeguarded-pr-plus-gradient-norms-converge",
  "thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two",
  "thm-spsa-gradient-bias-is-second-order",
  "thm-spsa-gradient-has-inverse-step-variance-bound",
  "thm-spsa-stochastic-approximation-has-stationary-limit-points",
  "thm-sqp-augmented-lagrangian-local-convergence",
  "thm-stochastic-galerkin-coercivity-and-cea",
  "thm-strong-rrqr-swap-rule-terminates",
  "thm-two-product-fma-error-free-transform"
]


