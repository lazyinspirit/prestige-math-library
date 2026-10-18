# Step 1 — prerequisite drift review

Run: numerical-analysis-48-2026-10-16  
Role: alpha  
Coverage: all 48 A pages in the scope ledger, batches 1–48.

I compared the scope ledger, all assigned batch manifests and prose-design locations, the current canonical plan, the rendered drift-evidence closures, and the owner’s scope direction. The 48 manifest orders and declared requires agree with plan-spec.json. The in-run dependency edges are ordered supplier-first; no authorized ordering correction or existing-page edge addition was identified. The evidence bundle’s candidate/nearby names were treated as a reading list, not as findings. Local proof obligations already assigned inside a page do not by themselves require graph edges.

One substantial prerequisite remains unresolved at mixed finite elements and is escalated below. I made no plan edits: no existing page supplies the missing theorem, and adding a new pair or scope was not authorized. plan-spec.json already has working-tree changes; I left it untouched.

### one-step-ode-consistency-and-local-error
VERDICT: no-drift

Evidence: Order 2286; batch 1 and the plan agree on the Picard–Lindelöf, total-derivative, and mixed-Taylor suppliers. The P-NUM-ODE-01 design at plan-numerical-analysis-prerequisites.md:5–7 names the maximal-solution, chain-rule, and Taylor-remainder contracts. The uniform Euler defect and stability estimates are explicit local proof obligations.

Remaining uncertainty: No missing closure edge found. The design’s matching numerical-ODE source check remains an authoring obligation.

### global-ode-and-density-error
VERDICT: no-drift

Evidence: Order 2288; the direct in-run edge is one-step-ode-consistency-and-local-error (order 2286), together with the declared Picard–Lindelöf supplier. P-NUM-ODE-02 at plan-numerical-analysis-prerequisites.md:9–11 requires discrete Grönwall and the divergence-Lipschitz estimate, and explicitly assigns either local proof or an exact supplier check; both are local lemmas, not omitted page edges.

Remaining uncertainty: No missing closure edge found. State and log-density error bounds remain separate authoring proofs under their stated smoothness assumptions.

### floating-point-arithmetic-and-error-propagation
VERDICT: no-drift

Evidence: Order 2290; the canonical plan and batch 3 agree on matrix-norms-condition-numbers-and-numerical-stability (an existing supplier). The NA-01 design at plan-numerical-analysis-track.md:18–30 reuses the precise floating-point, conditioning, and residual-to-forward-error results from that page.

Remaining uncertainty: No missing closure edge found. The normal-range and exceptional-operation caveats remain part of the approved claims.

### finite-precision-direct-factorizations
VERDICT: no-drift

Evidence: Order 2292; floating-point-arithmetic-and-error-propagation (order 2290) is the in-run predecessor, and the manifest matches the plan’s linear-algebra suppliers. NA-02 at plan-numerical-analysis-track.md:32–44 explicitly requires local rounding models and proofs for square roots, complex arithmetic, computed Cholesky, and any claimed computed least-squares result; P-NA-ARITH-01 is the approved earliest local supplier proposal at lines 733–735.

Remaining uncertainty: No missing closure edge found. Computed stability remains conditional on successful branches and the stated arithmetic model.

### sparse-matrix-models-and-kernel-costs
VERDICT: no-drift

Evidence: Order 2294; floating-point-arithmetic-and-error-propagation (order 2290) precedes it, and the direct-factorization supplier is declared. NA-03 at plan-numerical-analysis-track.md:46–58 supplies the CSR conventions and proves cost by counting the declared representation.

Remaining uncertainty: No missing closure edge found. The operation count depends on the exact CSR conventions stated in the design.

### stationary-iterations-and-relaxation
VERDICT: no-drift

Evidence: Order 2296; sparse-matrix-models-and-kernel-costs (order 2294) is the in-run predecessor, while the matrix-norm and exact Krylov suppliers are in the declared closure. NA-04 at plan-numerical-analysis-track.md:60–72 separates the spectral-radius equivalence from the named sufficient tests.

Remaining uncertainty: No missing closure edge found. Nonnormal transient growth and the restricted SOR hypotheses remain explicit caveats.

### krylov-methods-and-lanczos-convergence
VERDICT: no-drift

Evidence: Order 2298; its in-run suppliers are sparse-matrix-models-and-kernel-costs (order 2294) and stationary-iterations-and-relaxation (order 2296); the remaining exact-arithmetic Krylov, spectrum, and conditioning pages are declared. NA-05 at plan-numerical-analysis-track.md:74–86 assigns the CSR cost and Lanczos polynomial estimate locally.

Remaining uncertainty: No missing closure edge found. The finite-precision nontermination caveat is retained.

### preconditioner-algorithms-and-residual-metrics
VERDICT: no-drift

Evidence: Order 2300; sparse-matrix-models-and-kernel-costs (order 2294), stationary-iterations-and-relaxation (order 2296), and krylov-methods-and-lanczos-convergence (order 2298) all precede this page. NA-06 at plan-numerical-analysis-track.md:88–100 specifies the local ILU(0) recurrence and zero-pivot branch.

Remaining uncertainty: No missing closure edge found. No universal preconditioner-improvement claim is authorized.

### multigrid-methods-and-complexity
VERDICT: no-drift

Evidence: Order 2302; the in-run suppliers are sparse-matrix-models-and-kernel-costs (order 2294) and preconditioner-algorithms-and-residual-metrics (order 2300), with the declared SPD and weak-elliptic suppliers. NA-07 at plan-numerical-analysis-track.md:102–114 supplies the transfer identities and level-uniform estimates required by its proof.

Remaining uncertainty: No missing closure edge found. A mesh-independent rate is conditional on the level-uniform constants in the design.

### randomized-low-rank-approximation
VERDICT: no-drift

Evidence: Order 2304; floating-point-arithmetic-and-error-propagation (order 2290) and sparse-matrix-models-and-kernel-costs (order 2294) precede it; SVD and conditioning suppliers are declared. NA-08 at plan-numerical-analysis-track.md:116–128 assigns its Gaussian pseudoinverse-moment and spectral estimates as local lemmas.

Remaining uncertainty: No missing closure edge found. The expected-error theorem is exact-arithmetic only; no omitted tail or concentration claim is included.

### nonlinear-equations-and-newton-methods
VERDICT: no-drift

Evidence: Order 2306; its declared completeness, inverse-function, Taylor, and ODE suppliers cover the stated theorem interface. NA-09 at plan-numerical-analysis-track.md:130–142 proves only the close-start ordinary Newton result and distinguishes it from damped and frozen-Jacobian variants.

Remaining uncertainty: No missing closure edge found. The local basin and regularity hypotheses remain essential.

### polynomial-interpolation-and-remainder
VERDICT: no-drift

Evidence: Order 2308; the calculus and Taylor pages in the declared requires provide the derivative, Rolle, and polynomial-root facts used by NA-10 at plan-numerical-analysis-track.md:144–156. The higher-order Rolle step is explicitly a local proof obligation.

Remaining uncertainty: No missing closure edge found. No uniform convergence claim is inferred from pointwise interpolation error.

### polynomial-approximation-and-chebyshev-interpolation
VERDICT: no-drift

Evidence: Order 2310; polynomial-interpolation-and-remainder (order 2308) is the in-run predecessor, and the declared approximation/Chebyshev suppliers are in closure. NA-11 at plan-numerical-analysis-track.md:158–170 makes the logarithmic Lebesgue-constant estimate a local proof obligation.

Remaining uncertainty: No missing closure edge found. The transfer estimate still requires the stated best-approximation rate.

### composite-quadrature-rules
VERDICT: no-drift

Evidence: Order 2312; polynomial-interpolation-and-remainder (order 2308), the working FTC, and Riemann integrability suppliers are declared. NA-12 at plan-numerical-analysis-track.md:172–184 states the derivative and panel-count assumptions and supplies separate local error proofs.

Remaining uncertainty: No missing closure edge found. The first-FTC/Countable-Choice route is expressly excluded from the quadrature proof.

### gaussian-quadrature
VERDICT: no-drift

Evidence: Order 2314; polynomial-interpolation-and-remainder (order 2308) and inner-product-spaces-and-orthogonality are declared. NA-13 at plan-numerical-analysis-track.md:186–198 locally supplies the root, exactness, positivity, and Hermite-remainder arguments under its moment hypotheses.

Remaining uncertainty: No missing closure edge found. The degree-2m moment requirement is retained for the remainder branch.

### adaptive-quadrature-and-error-indicators
VERDICT: no-drift

Evidence: Order 2316; composite-quadrature-rules (order 2312) is the declared supplier. NA-14 at plan-numerical-analysis-track.md:200–212 limits the claim to finite-cap termination and explicitly disclaims a true-error certificate.

Remaining uncertainty: No missing closure edge found. The estimator reliability gap is part of the approved caveat, not an assumed supplier theorem.

### runge-kutta-methods-and-order
VERDICT: no-drift

Evidence: Order 2318; the generic local and global contracts are supplied by one-step-ode-consistency-and-local-error (order 2286) and global-ode-and-density-error (order 2288), both earlier than this method-specific pair. NA-15 at plan-numerical-analysis-track.md:214–226 keeps concrete order conditions separate from the generic error theorem.

Remaining uncertainty: No missing closure edge found. There is no P-NUM-ODE → NA-15 → P-NUM-ODE cycle.

### linear-multistep-methods-and-dahlquist-equivalence
VERDICT: no-drift

Evidence: Order 2320; stationary-iterations-and-relaxation (order 2296) is the in-run dependency, and the ODE, Taylor, and algebraic-root suppliers are declared. NA-16 at plan-numerical-analysis-track.md:228–240 supplies the repeated-root and bounded-companion-power proof obligations.

Remaining uncertainty: No missing closure edge found. The result remains fixed-step and requires consistent starting values and the root condition.

### stability-regions-and-stiff-equations
VERDICT: no-drift

Evidence: Order 2322; runge-kutta-methods-and-order (order 2318) and linear-multistep-methods-and-dahlquist-equivalence (order 2320) both precede this pair. NA-17 at plan-numerical-analysis-track.md:242–254 defines the scalar stability properties and retains the multistep root-condition premise.

Remaining uncertainty: No missing closure edge found. Stability is not used as an accuracy theorem.

### adaptive-ode-solvers-and-error-estimation
VERDICT: no-drift

Evidence: Order 2324; runge-kutta-methods-and-order (order 2318) and one-step-ode-consistency-and-local-error (order 2286) are declared earlier suppliers. NA-18 at plan-numerical-analysis-track.md:256–268 explicitly proves finite-budget termination only, not global adaptive accuracy.

Remaining uncertainty: No missing closure edge found. The step controller remains heuristic outside its local estimator model.

### linear-scheme-stability-and-lax-equivalence
VERDICT: no-drift

Evidence: Order 2326; the declared Baire and countability pages are in the closure. The current uniform-boundedness item states DC, and the rendered closure includes the Baire page and order-zorn-and-the-axiom-of-choice, which supplies the DC definition. NA-19 at plan-numerical-analysis-track.md:270–282 states the common-space semigroup and dense-core contract explicitly.

Remaining uncertainty: No missing closure edge found. Mesh-space reconstruction must still be proved for any mesh-dependent variant.

### numerical-boundary-value-problems
VERDICT: no-drift

Evidence: Order 2328; linear-scheme-stability-and-lax-equivalence (order 2326) is the declared in-run supplier. NA-20 at plan-numerical-analysis-track.md:284–296 requires a complete boundary residual and a uniform inverse estimate, both local to the fixed-grid example.

Remaining uncertainty: No missing closure edge found. The O(h²) claim is limited to the specified Dirichlet problem and norm.

### nonlinear-boundary-value-solvers
VERDICT: no-drift

Evidence: Order 2330; nonlinear-equations-and-newton-methods (order 2306) and linear-scheme-stability-and-lax-equivalence (order 2326) precede this page; the IVP suppliers are declared. NA-21 at plan-numerical-analysis-track.md:298–310 assigns parameter sensitivity as a local lemma.

Remaining uncertainty: No missing closure edge found. Continuous BVP conditioning, IVP error, discretization, and algebraic residual remain distinct.

### geometric-numerical-integration
VERDICT: no-drift

Evidence: Order 2332; runge-kutta-methods-and-order (order 2318) and the declared symplectic/Hamiltonian suppliers are in closure. NA-22 at plan-numerical-analysis-track.md:312–324 and P-NA-GEO-01–05 at lines 742–746 allocate the finite-regularity, partial-map, and modified-energy lemmas locally.

Remaining uncertainty: No missing closure edge found. The finite-order energy horizon and compact-domain assumptions remain explicit.

### elliptic-finite-difference-methods
VERDICT: no-drift

Evidence: Order 2334; linear-scheme-stability-and-lax-equivalence (order 2326) and the declared weak-elliptic, Sobolev–Poincaré suppliers are in closure. NA-23 at plan-numerical-analysis-track.md:328–340 proves the discrete energy or maximum-principle estimate locally.

Remaining uncertainty: No missing closure edge found. Variable coefficients require the stated face-value regularity and full residual estimate.

### parabolic-finite-difference-methods
VERDICT: no-drift

Evidence: Order 2336; linear-scheme-stability-and-lax-equivalence (order 2326) and elliptic-finite-difference-methods (order 2334) are declared earlier suppliers; the heat-equation page is external context. NA-24 at plan-numerical-analysis-track.md:342–354 separates periodic-mode stability from boundary energy arguments.

Remaining uncertainty: No missing closure edge found. L² stability and a discrete maximum principle retain distinct conditions.

### hyperbolic-finite-difference-methods
VERDICT: no-drift

Evidence: Order 2338; linear-scheme-stability-and-lax-equivalence (order 2326), parabolic-finite-difference-methods (order 2336), and stationary-iterations-and-relaxation (order 2296) are earlier suppliers. NA-25 at plan-numerical-analysis-track.md:356–368 calls for separate finite-boundary energy and endpoint-CFL arguments.

Remaining uncertainty: No missing closure edge found. Periodic Fourier stability is not transferred to finite boundaries.

### conservative-finite-volume-weak-limits
VERDICT: no-drift

Evidence: Order 2340; scalar-conservation-laws-and-entropy-solutions is the declared supplier. NA-26 at plan-numerical-analysis-track.md:370–382 makes strong L¹_loc convergence a premise and proves only the weak conservation-law passage.

Remaining uncertainty: No missing closure edge found. No compactness or entropy conclusion is assumed here.

### monotone-finite-volume-entropy-convergence
VERDICT: no-drift

Evidence: Order 2342; conservative-finite-volume-weak-limits (order 2340) and the scalar entropy page are declared suppliers. NA-27 at plan-numerical-analysis-track.md:384–396 and P-NA-BV-01 at line 740 explicitly assign the needed spacetime compactness and local-trace lemmas.

Remaining uncertainty: No missing closure edge found. The BV, CFL, mesh-to-time-ratio, and initial-trace hypotheses remain part of the claim.

### finite-element-meshes-and-interpolation
VERDICT: no-drift

Evidence: Order 2344; polynomial-interpolation-and-remainder (order 2308) and the declared Sobolev, extension, Poincaré, and trace pages are in closure. NA-28 at plan-numerical-analysis-track.md:398–410 and P-NA-CELL-01/P-NA-APPROX-01 at lines 738–739 explicitly place reference-cell trace, Bramble–Hilbert, and point-evaluation proofs here.

Remaining uncertainty: No missing closure edge found. The published bounded-C¹ trace theorem is not applied directly to simplex faces.

### ceas-lemma-and-aubin-nitsche-error-estimates
VERDICT: no-drift

Evidence: Order 2346; finite-element-meshes-and-interpolation (order 2344), Lax–Milgram, weak Dirichlet, and the declared elliptic-regularity suppliers are in closure. NA-29 at plan-numerical-analysis-track.md:412–424 carries the adjoint regularity index and domain restrictions.

Remaining uncertainty: No missing closure edge found. The h^(r+1) L² rate is conditional on full H² adjoint regularity.

### variational-crimes-and-strang-lemmas
VERDICT: no-drift

Evidence: Order 2348; finite-element-meshes-and-interpolation (order 2344) and ceas-lemma-and-aubin-nitsche-error-estimates (order 2346) precede it; weak-elliptic and quadrature pages are declared. NA-30 at plan-numerical-analysis-track.md:426–438 states the comparison norm and local quadrature/geometry bounds.

Remaining uncertainty: No missing closure edge found. Exact Galerkin orthogonality is not claimed after quadrature replacement.

### crouzeix-raviart-finite-elements
VERDICT: no-drift

Evidence: Order 2350; finite-element-meshes-and-interpolation (order 2344), ceas-lemma-and-aubin-nitsche-error-estimates (order 2346), and variational-crimes-and-strang-lemmas (order 2348) are declared earlier suppliers. NA-31 at plan-numerical-analysis-track.md:440–452 assigns the broken Poincaré and jump-control proof locally.

Remaining uncertainty: No missing closure edge found. The normal-trace and dual-smoothing thresholds remain explicit.

### nitsche-methods-for-weak-boundary-enforcement
VERDICT: no-drift

Evidence: Order 2352; finite-element-meshes-and-interpolation (order 2344), ceas-lemma-and-aubin-nitsche-error-estimates (order 2346), and variational-crimes-and-strang-lemmas (order 2348) are earlier suppliers; trace and Poincaré pages are declared. NA-32 at plan-numerical-analysis-track.md:454–466 assigns the inverse-trace threshold and adjoint-consistency proof locally.

Remaining uncertainty: No missing closure edge found. Penalty and dual-regularity assumptions are retained.

### discontinuous-galerkin-methods
VERDICT: no-drift

Evidence: Order 2354; finite-element-meshes-and-interpolation (order 2344), ceas-lemma-and-aubin-nitsche-error-estimates (order 2346), and variational-crimes-and-strang-lemmas (order 2348) precede it; Sobolev and trace suppliers are declared. NA-33 at plan-numerical-analysis-track.md:468–480 states the penalty and broken-space conventions.

Remaining uncertainty: No missing closure edge found. No universal penalty constant or automatic H(div) flux result is claimed.

### mixed-finite-elements-and-stokes-stability
VERDICT: drift-blocked — mixed-finite-elements-and-stokes-stability (order 2356); missing continuous divergence-lifting supplier needs owner placement

Evidence: Order 2356; the manifest/plan closure contains finite-element-meshes-and-interpolation (order 2344), Lax–Milgram, Sobolev trace, and Sobolev–Poincaré pages, but no current local supplier for a bounded right inverse div:L²₀(D)→H¹₀(D)^d on the domain used. The approved scope at plan-numerical-analysis-track.md:482–494 requires Korn coercivity and a continuous divergence right inverse; its “Requires” clause names only the mesh, Lax–Milgram, trace, and Poincaré pages. The contract row at line 715 lists Korn, divergence right inverse, and Fortin as root proposals, but the root-supplier appendix at lines 729–748 defines no Stokes/divergence supplier or proof interface. Current item search found no local Korn or divergence-lifting item.

The source check confirms this is substantive: Guermond, Chapter 53, Lemma 53.9 states the Lipschitz-domain divergence-surjectivity result; part (i) refers to Girault–Raviart, pp. 18–26, rather than proving it there. Chapter 53 then uses that lemma and Korn’s estimate in Theorem 53.11 for continuous Stokes well-posedness. Chapter 54, Lemma 54.5, separately proves the discrete mini-element inf-sup result with a Fortin operator; it does not supply the continuous divergence-lifting theorem. Sources: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf, printed pp. 395–397, Lemma 53.9/Theorem 53.11; https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf, printed pp. 411–412, Lemma 54.5; the stated external proof reference is https://link.springer.com/chapter/10.1007/BFb0063448, Girault–Raviart, pp. 18–26. The last source is paywalled in the publisher view and its scan was not legible through this review, so I do not claim to have read that cited proof.

Owner decision requested before authoring: authorize a proved intermediate supplier for the continuous divergence right inverse before the continuous inf-sup/BNB and mixed Galerkin claims in this page, preferably inside this earliest mixed-FEM owning pair if its scope is sufficient; otherwise authorize a separate prerequisite pair and edge before order 2356. A local Korn identity/inequality can be proved in-page. Do not mint an ID or change scope until authorized. Consuming claims are the continuous Stokes well-posedness/inf-sup, the mixed Galerkin estimate, and the concrete mini-element pressure-error theorem. The only in-frontier page consumer is mixed-finite-elements-and-stokes-stability-examples (order 2357); no other A page in the 48-page scope declares this page as a prerequisite.

Remaining uncertainty: The bounded-domain hypothesis and exact right-inverse proof route must be selected by the owner; the current source section delegates that proof externally, and the local closure has no supplier.

### adaptive-finite-element-methods
VERDICT: no-drift

Evidence: Order 2358; finite-element-meshes-and-interpolation (order 2344), ceas-lemma-and-aubin-nitsche-error-estimates (order 2346), and variational-crimes-and-strang-lemmas (order 2348) are earlier suppliers; weak-elliptic/Lax–Milgram pages are declared. NA-35 at plan-numerical-analysis-track.md:496–508 states the closure routine and distinguishes convergence from optimal complexity.

Remaining uncertainty: No missing closure edge found. The coefficient-dependent general complexity theorem is explicitly excluded.

### parabolic-finite-element-methods
VERDICT: no-drift

Evidence: Order 2360; finite-element-meshes-and-interpolation (order 2344) and ceas-lemma-and-aubin-nitsche-error-estimates (order 2346) are earlier suppliers. NA-36 at plan-numerical-analysis-track.md:510–522 and P-NA-EVOL-01 at line 741 explicitly assign the evolution-triple trace and variational well-posedness lemmas locally.

Remaining uncertainty: No missing closure edge found. Time-dependent form measurability and fully discrete time regularity remain separate obligations.

### finite-element-eigenvalue-approximation
VERDICT: no-drift

Evidence: Order 2362; finite-element-meshes-and-interpolation (order 2344) and ceas-lemma-and-aubin-nitsche-error-estimates (order 2346) precede it; compact-resolvent and compact-self-adjoint suppliers are declared. NA-37 at plan-numerical-analysis-track.md:524–536 limits the proved theorem to the symmetric conforming case.

Remaining uncertainty: No missing closure edge found. Nonsymmetric and multiplicity extensions remain conditional or optional.

### spectral-collocation-and-galerkin-methods
VERDICT: no-drift

Evidence: Order 2364; polynomial-interpolation-and-remainder (order 2308), polynomial-approximation-and-chebyshev-interpolation (order 2310), composite-quadrature-rules (order 2312), and gaussian-quadrature (order 2314) are all earlier suppliers; Chebyshev definitions are declared. NA-38 at plan-numerical-analysis-track.md:538–550 carries the basis, endpoint, and scheme-stability assumptions.

Remaining uncertainty: No missing closure edge found. The unavailable pressure-splitting proof and general PDE convergence claims are excluded.

### monte-carlo-integration-and-sampling-error
VERDICT: no-drift

Evidence: Order 2366; probability, independence, and iid-CLT pages are declared. NA-39 at plan-numerical-analysis-track.md:552–564 uses finite-second-moment unbiasedness locally and the CLT only under positive finite variance.

Remaining uncertainty: No missing closure edge found. Sampling variance remains distinct from deterministic solver or model bias.

### quasi-monte-carlo-and-discrepancy-bounds
VERDICT: no-drift

Evidence: Order 2368; monte-carlo-integration-and-sampling-error (order 2366) is the in-run predecessor and the discrepancy definitions/rules page is declared. NA-40 at plan-numerical-analysis-track.md:566–578 and P-NA-QMC-01/02 at line 747 assign the boundary-compatible Koksma–Hlawka proof locally.

Remaining uncertainty: No missing closure edge found. The HK/Stieltjes proof is an explicit local obligation because the cited exposition defers it.

### randomized-quasi-monte-carlo
VERDICT: no-drift

Evidence: Order 2370; monte-carlo-integration-and-sampling-error (order 2366) and quasi-monte-carlo-and-discrepancy-bounds (order 2368) precede it; product-measure/Fubini and randomized-replicate suppliers are declared. NA-41 at plan-numerical-analysis-track.md:580–592 assigns the nested-scramble ANOVA and occupancy proof locally.

Remaining uncertainty: No missing closure edge found. Exact randomization and digit-boundary conventions remain necessary.

### multilevel-monte-carlo-complexity
VERDICT: no-drift

Evidence: Order 2372; monte-carlo-integration-and-sampling-error (order 2366) is declared in-run, and the Euler–Maruyama/forward-Itô pages are external prerequisites. NA-42 at plan-numerical-analysis-track.md:594–606 and the BCS-55 design at plan-bayesian-computational-statistics-track.md:233–235 separate the abstract complexity proof from optional, hypothesis-qualified Euler rates.

Remaining uncertainty: No missing closure edge found. The SDE example remains conditional on its exact local or published rate contract.

### convex-numerical-optimization-for-statistical-computation
VERDICT: no-drift

Evidence: Order 2374; nonlinear-equations-and-newton-methods (order 2306) is the in-run predecessor; convexity, Taylor, and matrix-differentiation suppliers are declared. NA-43 at plan-numerical-analysis-track.md:608–620 states the trial-domain, strong-convexity, and computed-gradient premises.

Remaining uncertainty: No missing closure edge found. Global optimization for nonconvex objectives is not claimed.

### numerical-inverse-problems-and-regularization-error
VERDICT: no-drift

Evidence: Order 2376; floating-point-arithmetic-and-error-propagation (order 2290) and finite-precision-direct-factorizations (order 2292) precede it; SVD, conditioning, factorization, and pseudoinverse pages are declared. NA-44 at plan-numerical-analysis-track.md:622–634 keeps data, discretization, regularization, and roundoff terms separate.

Remaining uncertainty: No missing closure edge found. The exact Tikhonov convention and cutoff rules remain stated hypotheses.

### error-budgets-for-computational-inference
VERDICT: no-drift

Evidence: Order 2378; its declared within-run suppliers—floating-point-arithmetic-and-error-propagation (order 2290), composite-quadrature-rules (order 2312), gaussian-quadrature (order 2314), adaptive-quadrature-and-error-indicators (order 2316), monte-carlo-integration-and-sampling-error (order 2366), quasi-monte-carlo-and-discrepancy-bounds (order 2368), randomized-quasi-monte-carlo (order 2370), multilevel-monte-carlo-complexity (order 2372), convex-numerical-optimization-for-statistical-computation (order 2374), numerical-inverse-problems-and-regularization-error (order 2376), one-step-ode-consistency-and-local-error (order 2286), and global-ode-and-density-error (order 2288)—all precede it. NA-45 at plan-numerical-analysis-track.md:636–648 also declares the external SDE contracts.

Remaining uncertainty: No missing closure edge found. The triangle decomposition is pathwise; an RSS or inferential-coverage claim is not imported.

### optimal-star-discrepancy-order-in-dimension-at-least-three
VERDICT: no-drift

Evidence: Order 2380; quasi-monte-carlo-and-discrepancy-bounds (order 2368) supplies the star-discrepancy definition. NA-46 at plan-numerical-analysis-track.md:650–662 and the current Owen Practical QMC chapter, printed pp. 18–19, retain the fixed-d≥3 unknown order. A current search also found the 2026 inverse-discrepancy tractability result, whose dimension/error asymptotics do not settle the fixed-d question.

Remaining uncertainty: The reviewed fixed-d claim remains open on the consulted evidence; the bounded current-source search cannot prove no uninspected result exists. Refresh status at the later publication gate as the design requires.
