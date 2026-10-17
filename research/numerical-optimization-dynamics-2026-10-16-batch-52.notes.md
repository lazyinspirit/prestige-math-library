# Batch 52 — stability regions and stiff equations

Run: numerical-optimization-dynamics-2026-10-16. Role: beta. Batch level: 3; prerequisite batches: 35 and 36. This is draft authoring, not independent review, mathematical acceptance, or publication.

## Controlling plan and conflicts

The controlling design is research/plan-numerical-dynamics-track.md §NA-17 and its incorporated mathematical contract at the final appendix (**NA-17 — stability.**), together with the owner direction in research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md. The current plan-spec.json row identifies the dynamics track, the same A/B pages, and the same NA-15/NA-16 page prerequisites. It does not conflict with the controlling pair requirements.

The older pointer research/plan-numerical-analysis-track.md §NA-17 (the assigned task's line 242) is retained design history. Its original scope states the scalar one-step region, multistep roots, Euler, backward Euler, and trapezoidal claims. The controlling dynamics contract adds the approved BDF2 A-stability derivation, the distinction from matrix contractivity and nonnormal growth, and stiff-mode damping/accuracy examples. I preserved those additions and did not assert A-stability for BDF methods of order at least three. The owner direction says the split dynamics plan controls this assigned pair.

## Inventory and dependency order

The pair has 8 A-page items and 4 B-page items. The A manifest is in ascending item level: matrix contractivity/logarithmic norm (0); scalar stability definitions (1); backward Euler and trapezoidal results (2); BDF2 root-locus lemma (3); Euler disk, BDF2 A-stability, and BDF2 stiff-limit roots (4). The B manifest is also level ordered: the nonnormal counterexample (3), then the three Euler/stiff-mode examples (5). Exact item dependencies and levels are recorded in research/numerical-optimization-dynamics-2026-10-16-batch-52.pages.json.

The current dependency-levels artifact assigns batch 52 level 3 with requires [35, 36]. The generated dispatch task records input hash b4e9601f3418e4d869380ba1f3d5167eb5d371b0e951d6d71837e622197c44a5; the current artifact's own input_sha256 is 7feab71278a6cf5fc9513d25514ffc7397bdc4421f8c0fa99e7485d2c1d3041a. The batch-52 level and supplier rows still agree. I did not edit or regenerate the shared artifact; the owner should reconcile the two input snapshots at the next native recomputation.

## Supplier bodies and interface limits

- Batch 35: inspected the actual statement and proof of prop-euler-midpoint-rk4-orders-and-stability-functions, plus the explicit-tableau definition it uses. Its exact scalar interface is R_E(z)=1+z for y'=lambda*y, z=h*lambda. It supplies no nonnormal matrix contractivity or nonlinear accuracy theorem.
- Batch 36: inspected def-linear-multistep-method-consistency-order-and-root-condition and alg-variable-step-bdf2-with-selected-implicit-branch. The former fixes the coefficient, characteristic-polynomial, and simple-unit-root conventions. Setting the latter's positive adjacent-step ratio to one yields 3 Y_(n+1)-4 Y_n+Y_(n-1)=2h f(t_(n+1),Y_(n+1)); its scalar test polynomial is derived locally as (3-2z) zeta^2-4 zeta+1. The scalar implicit branch is unique for Re z<=0 because 3-2z is nonzero there. No variable-grid convergence, nonlinear stiff convergence, or BDF2 order claim is imported.
- I inspected lem-companion-powers-bounded-under-root-condition. Its stated supplier hypothesis is the characteristic polynomial of a real-coefficient LMM, whereas rho-z*sigma has complex coefficients for general nonreal z. The BDF2 proof therefore uses the declared root-based absolute-stability definition and proves its root-locus properties directly; it does not claim that the real-coefficient companion theorem proves power-boundedness for every complex test polynomial.

The latest successful native status was updated at 2026-10-16T00:05:19Z. It reported Step 1 at 1-scaffold, 25/107 batches covered, no workers active, and the existing owner repair/recertification blocker. A final status invocation produced no output for about 61 seconds and was interrupted; no newer status is available. Supplier batches 35 and 36 had no completion artifact or Step-1 decision records at the successful snapshot. Their exact interface bodies were present and inspected, so this pair continued against those bodies; readiness below records body inspection only, not supplier completion, approval, or acceptance. Any upstream body change invalidates the dependent readiness hashes.

## Local proof construction and scope

The A page defines the one-step region and L-stability limit, states the multistep root test with a nonzero leading coefficient, and separately defines matrix contractivity and logarithmic norm in a specified inner product. It locally proves the explicit-Euler disk, backward-Euler A/L-stability, trapezoidal A-stability and failure of stiff decay, the BDF2 root-locus identity, BDF2 A-stability, and vanishing of both BDF2 roots in the stiff limit. The B page gives exact frequency and fast/slow step restrictions, a scalar damping comparison, and the computed nonnormal backward-Euler counterexample. Its stiff-decay example now defines a classical solution on $[0,h]$ and proves uniqueness of the exact factor with an integrating factor, the product rule, and the zero-derivative theorem; this closes the implicit ODE-prerequisite gap. Proof contracts map every cited supplier fact and phase step.

All arguments use exact algebra and limits. No choice axiom, numerical solver branch beyond the supplied BDF2 procedure, finite-smoke registry check, nonlinear convergence claim, positivity claim, or conservation claim is used. The page links the distinct positive-preserving method page for context.

## Source reading and dispositions

research/numerical-optimization-dynamics-2026-10-16-batch-52.coverage.json records the A-page canonical inventory and source harvest. research/numerical-optimization-dynamics-2026-10-16-batch-52.source-coverage.json records full-text locators, supported items, exact result dispositions, source limits, and retrieval history.

- Hairer–Wanner, Chapter III §III.9, PDF pp. 20–23 / printed pp. 76–79: complete relevant test-equation, one-step and multistep stability discussion read. The existing full PDF from batch 35 was inspected again. The current fetch stamp reuses its exact successful full-document retrieval.
- Yano–Penn–Konidaris–Patera, Unit IV Chapter 21: full textbook PDF opened; the scalar model, backward Euler, Crank–Nicolson, BDF1/BDF2 coefficient and stability passages, and fast/slow accuracy discussion were inspected. Diagrams and source assertions are context only; all used inequalities are proved locally.
- MIT 18.330, Chapter 5 §5.2.2, PDF pp. 49–53: complete relevant lecture-note section read. Its strict-decay convention is recorded; this pair uses bounded absolute stability and proves the closed boundary explicitly. The systems discussion is not treated as a matrix-contractivity theorem.

No source was dropped. The source-fetch check successfully verified all three full-text URLs; the Hairer source reused its earlier exact stamp and the two MIT documents received fresh stamps. The web-reader timeout for Hairer was resolved by reusing the already-stamped full PDF; no extra retry or owner escalation was required.

## Final scoped checks and readiness

The final scoped checks after the exact-flow uniqueness repair returned:

- `precheck`: all 10 proof-bearing items passed; definitions are not applicable.
- `proof-contract --strict`: 12/12 items, 0 errors, 0 warnings.
- `proof-layout` on all 12 assigned items: 12 items, 27 steps, 0 defects.
- `rendercheck` on the 12 items and both pages: 14 files passed YAML and KaTeX checks.
- `content-policy`: 12 items, 0 errors, 0 warnings.
- focused `depcheck`: 0 errors and 0 warnings across the 12 assigned items and their 581-item/180-page dependency closure.
- `coverage-checklist --require-destination`: 1 A page, 32 harvested results, 0 errors, 0 warnings.
- Manifest consistency check: both page inventories, all 12 item dependency lists, and all 12 item dependency-level labels agree; 0 discrepancies.
- `source-fetch-check`: 3/3 sources fetch-verified and 3/3 resolved, with no documented drops. The earlier `--stamp` run verified all three and newly stamped the two MIT documents; the Hairer–Wanner source reused its prior exact stamp.
- Scoped in-run dependency closure recomputation: 5 pages and 20 items, 0 errors. All assigned levels match the manifest: `def-matrix-contractivity-and-logarithmic-norm` 0; scalar stability definition 1; backward Euler and trapezoidal results 2; BDF2 root-locus lemma and matrix counterexample 3; Euler disk, BDF2 A-stability, and BDF2 stiff-limit proposition 4; all three remaining examples 5.

The repository-level `node tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` remains blocked before comparison by malformed YAML in an upstream manifest: `Nested mappings are not allowed in compact mappings at line 26, column 14`, at the compact title beginning `David E. Stewart, Dynamics with Inequalities: Impacts and Hard Con…`. The assignment hash `b4e9601f3418e4d869380ba1f3d5167eb5d371b0e951d6d71837e622197c44a5` also differed from the shared artifact hash `7feab71278a6cf5fc9513d25514ffc7397bdc4421f8c0fa99e7485d2c1d3041a` before this batch's final manifest edit. The batch-52 prerequisite row remains level 3 with batches 35 and 36. This batch's dependency-list edit does not add an in-run supplier or change its required batches, but it changes the manifest input; the owner must reconcile and regenerate the shared artifact after fixing the YAML blocker. No shared plan or engine state was edited.

All 12 assigned items have author readiness records based on their complete local arguments, exact inspected prerequisite bodies, manifest placement, checked dependency levels, and passing contracts. These records are not supplier-batch completion, independent mathematical approval, or publication authorization.
