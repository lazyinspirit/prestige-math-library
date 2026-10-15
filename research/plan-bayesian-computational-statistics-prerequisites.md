# Bayesian computation: necessary independent SDE prerequisites

Planning scope for `bayesian-computational-statistics-62`: 59 BCS pairs plus the three independent A/B pairs below. This is a source-and-interface plan, not authored proof completion or an audit. The native engine authors all six pages and their items/contracts.

The BCS-55 conditional Euler examples require strong SDE well-posedness, Euler construction/moments, and separate strong/weak rates. No existing complete equivalent was found in the current item inventory. Existing Brownian/Itô calculus is reusable context; it does not imply those results.

| Pair | Category | A page | B page | A requirements |
|---|---|---|---|---|
| P-SDE-01 | probability | `forward-ito-sde-well-posedness` | `forward-ito-sde-well-posedness-examples` | `brownian-motion-construction-and-continuity`, `the-ito-integral-with-respect-to-brownian-motion`, `itos-formula-and-brownian-martingales` |
| P-NUM-SDE-01 | numerical-analysis | `euler-maruyama-scheme-and-conditions` | `euler-maruyama-scheme-and-conditions-examples` | `forward-ito-sde-well-posedness` |
| P-NUM-SDE-02 | numerical-analysis | `euler-maruyama-convergence` | `euler-maruyama-convergence-examples` | `forward-ito-sde-well-posedness`, `euler-maruyama-scheme-and-conditions` |

Every B page requires its own A page. BCS-55 adds the scheme and convergence A pages to its existing BCS-25/54 requirements; its examples companion requires its own A page. No B page exports logical suppliers.

## P-SDE-01 — Forward Itô SDE well-posedness

- Use the existing canonical P-SDE-01 page slug, but complete only the strong-solution slice required by BCS-55. Define d-dimensional Ito SDE with finite-coordinate matrix integrals, strong solution, pathwise uniqueness and global solution on a finite horizon.
- On a complete usual filtered space supporting filtration-relative m-dimensional Brownian motion, take F_0-measurable X_0 in L2 with independence of future increments; coefficients jointly Borel in time/state, uniformly globally Lipschitz in state and of uniform linear growth. Prove adapted continuous strong existence and indistinguishable pathwise uniqueness by Picard iteration, scalar Ito isometry/maximal estimates summed over coordinates and Gronwall. Provide finite-horizon E sup |X_t|^2 bound with constants independent of later numerical mesh.
- Carry the existing AC/filtration hypotheses wherever consumed. Make integrand predictability/progressive measurability and continuous versions explicit. Prove required moment estimates and any completeness/limit/interchange step locally or cite an exact existing proved interface.
- For higher-moment numerical consumers, provide exact-solution finite-p moment estimates under X_0 in Lp and global Lipschitz/linear growth for the required p; preserve the separate all-moment specialization. Any additional maximal estimate needed for these higher moments must be proved locally, not assumed from the L2 bound.
- Do not assert positive smooth transition densities, forward-KFP uniqueness, augmented joint KFP regularity or reversal from well-posedness. The broader original ML P-SDE-01 density branch remains a separate unauthored/source-audit obligation, preserved verbatim in this proposal.

B page requirements: Globally Lipschitz scalar drift with nondegenerate constant diffusion; verify all strong-solution assumptions. A singular initial law showing well-posedness does not assert smooth density at the initial endpoint; no unsupplied density theorem.

Proposed reusable A interfaces: `def-ito-sde-and-strong-solution`, `thm-global-strong-well-posedness-for-lipschitz-ito-sdes`, `thm-finite-horizon-moments-for-lipschitz-ito-sdes`.

## P-NUM-SDE-01 — Euler–Maruyama scheme and coefficient conditions

- Define grid t_k=kh on [0,T] with T/h integral, eta_h(t)=max{t_k:t_k<=t}, Euler recursion Y_{k+1}=Y_k+b(t_k,Y_k)h+sigma(t_k,Y_k)(W_{t_{k+1}}-W_{t_k}), step process barY_t=Y_{eta_h(t)}, and continuous interpolation Y_t=X_0+integral_0^t b(eta_h(s),barY_s)ds+integral_0^t sigma(eta_h(s),barY_s)dW_s. State endpoint convention.
- State shared exact/numerical assumptions: adapted X_0 in L2 independent of future Brownian increments, Borel coefficients, uniform global state Lipschitz and linear-growth bounds, and |b(t,x)-b(s,x)|+||sigma(t,x)-sigma(s,x)||_F <= K(1+|x|)|t-s|^(1/2). Retain finite horizon and dimension/norm conventions.
- Prove adaptedness, well-definedness, grid/continuous/step finite-second-moment estimates uniformly over 0<h<=1, and interpolation increment E|Y_t-barY_t|^2 <= C h. Separate which estimates require time regularity.
- Supply uniform finite-p moment bounds needed for weak p>=2q+8 and the all-moment specialization under the corresponding X_0 moment assumptions; do not infer all moments from L2. Do not assert density regularity from the scheme.

B page requirements: Scalar additive-noise SDE with exact scheme/interpolation; check finite moments. Superlinear coefficient outside the globally Lipschitz contract, explaining why the theorem cannot be invoked.

Proposed reusable A interfaces: `alg-euler-maruyama`, `def-euler-maruyama-step-process-and-continuous-interpolation`, `thm-euler-maruyama-uniform-moment-and-increment-bounds`.

## P-NUM-SDE-02 — Euler–Maruyama strong and weak convergence

- Prove a separate finite-L2 theorem under P-NUM-SDE-01 state bounds and half-Holder time modulus: E sup_{t<=T}|X_t-Y_t|^2 <= C h. Use interpolation-defect decomposition, Ito isometry, existing p=2 Ito maximal estimate (the needed BDG specialization) and Gronwall. Constant may depend on T, coefficient constants, dimensions and E|X_0|^2, but not h. This is not a consequence of the H-M-S all-moment theorem.
- Preserve a separate autonomous Higham–Mao–Stuart rate theorem with exact C1 drift/diffusion, one-sided Lipschitz drift, globally Lipschitz diffusion, polynomial local-Lipschitz drift, and uniform finite moments of every order for exact, step and continuous Euler processes: E sup_{t<=T}|X_t-Y_t|^2=O(h). Reproduce the full necessary proof locally under the exact source premises; no active unproved import. Derive the globally Lipschitz all-moment specialization only from all-moment X_0. Do not extend the source theorem to nonautonomous coefficients without a separate proof.
- Prove conditional weak order one for the chosen bounded test phi: u(t,x)=E phi(X_T^{t,x}) solves backward Kolmogorov, belongs to C^(2,4), with stated time derivatives through two and spatial derivatives through four bounded by C(1+|x|^q), and exact/Euler processes have uniform moments of order p>=2q+8. Specify any mixed derivative control actually used by the Taylor proof rather than assuming it follows without proof. Derive one-step cancellation and expected remainder O(h^2)(1+|x|^(q+4)), then telescope to |E phi(X_T)-E phi(Y_N)|<=C h. Deriving u-regularity merely from coefficient/test smoothness remains an additional independent obligation; this theorem assumes the exact backward regularity.
- Define coarse/fine coupling by summing the same fine Brownian increments to form each coarse increment, refinement integer M>=2. Deduce E|Y_T^{h_l}-Y_T^{h_{l-1}}|^2=O(h_l) by the common exact solution and L2 triangle inequality. For globally Lipschitz payoff deduce correction variance O(h_l) and bias O(h_l^(1/2)); under the additional weak contract and Lipschitz payoff deduce bias O(h_l). State per-path work O(h_l^(-1)) under fixed-dimensional unit-cost coefficient/payoff evaluations.
- Export rate interfaces to BCS-55 without importing BCS-55 or ML-60. Preserve (alpha,beta)=(1/2,1) and (1,1) with their distinct premises. Learned drift/score bias is outside the solver theorem and requires its own bound.

B page requirements: Additive-noise Euler strong error and shared-increment Lipschitz-payoff rate example. Smooth bounded Lipschitz payoff satisfying a verified backward contract, illustrating weak order one conditionally or by explicit calculation. Nonzero learned-drift bias persists as h tends to zero; distinguish target bias from solver error.

Proposed reusable A interfaces: `thm-euler-maruyama-strong-rate-for-square-integrable-initial-data`, `thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses`, `thm-euler-maruyama-weak-order-one-under-backward-regularity`, `thm-shared-brownian-euler-level-correction-rates`.

## Reuse and scope preserved

Reuse `def-continuous-brownian-ito-process` for finite-coordinate vector/matrix integral expressions and `thm-doob-maximal-bound-for-the-ito-integral` for the exact L2 supremum bound. These avoid adding a general vector stochastic integral theory or general BDG prerequisite pair merely for the finite-L2 route. Higher-moment estimates needed by the other branches still require explicit local proof. Reuse the published Brownian motion, Ito isometry, multidimensional Ito formula, Gaussian moments and Gronwall interfaces listed in the JSON proposal, with their actual AC, filtration and regularity conditions.

P-SDE-01 retains its original canonical slug `forward-ito-sde-well-posedness`. This build supplies its strong-solution/moment slice only. The full original ML P-SDE-01 positive-density/forward-KFP regularity design is preserved unchanged and remains an additional unauthored source-audit/proof obligation, including exact ellipticity/domain/initial-data conditions, augmented joint-density premises and singular-start endpoint limits. This build must not report that broader ML design complete. P-SDE-02, numerical ODE pairs and ML-60 are outside this necessary scope.

BCS-55 retains both conditional Euler cases: Lipschitz payoff plus the finite-L2 strong theorem gives (alpha,beta)=(1/2,1); the additional weak backward-regularity contract, with a Lipschitz payoff, gives (1,1). Both instantiate the logarithmic MLMC complexity. H-M-S remains a separate autonomous all-moment route and cannot replace the finite-L2 proof. The abstract MLMC theorem does not acquire SDE assumptions.

## Scaffold and source anchors

- `research/plan-bayesian-computational-statistics-track.md`, BCS-55, contains the current exact consumer clause (copied verbatim into the JSON).
- `research/plan-machine-learning-track.md`, P-SDE-01 and P-NUM-SDE-01/02, contains the original independent provider designs (copied verbatim into the JSON).
- `research/statistics-ml-scaffold-audit-2026-10-12/bayesian/{pair-audit.json,supplier-index.json,final-report.md}` records the BCS-55 audit and supplier trace.
- `research/statistics-advanced-scaffolds-2026-10-11/bayesian-06/{dossier.md,sources.json}` records source work for the computation scaffold.
- Higham–Mao–Stuart (2002), Assumptions 3.1/4.1/4.2, Lemma 4.3 and Theorem 4.4 with proof, printed pp. 1054–1056: autonomous all-moment strong-rate route only. The original ML clause also identifies §2 Assumption 2.1/Theorem 2.2, pp. 1042–1046.
- Finite-L2 strong convergence and the conditional weak Taylor argument remain local proof obligations. Higham introduction pp. 532–538 and Särkkä–Solin §8.3 pp. 137–139 do not supply the full weak proof; Anderson/Song do not discharge forward existence/density obligations.

Only repository clauses and existing item interfaces were inspected in this planning resolution. No new full-text source reading, completed mathematical proof, tests or gate result is claimed. Exact original clauses and all page requirements are in `research/bayesian-computational-statistics-59-prerequisite-resolution.json`.
