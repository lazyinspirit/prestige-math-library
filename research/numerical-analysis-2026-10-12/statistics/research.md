# Numerical statistics, quadrature, and approximation

**Research date:** 2026-10-12
**Scope:** interpolation and approximation, deterministic and randomized integration, Monte Carlo and multilevel Monte Carlo, numerical SDEs, optimization and inverse problems as they support statistical computation. This is a source and coverage dossier; it authors no library items.

The main design point is to keep numerical computation error separate from statistical uncertainty and approximation/model bias. A computed posterior integral, likelihood, or SDE expectation can contain several different errors at once. Numerical analysis should supply reusable contracts for interpolation, quadrature, solver convergence, random integration, and optimization. Bayesian and mathematical statistics should retain responsibility for posterior approximation, sampling-distribution calibration, estimator coverage, and inferential interpretation.

## Source reading record and limits

Full source identities, URLs, rights notes, hashes, cache paths, read ranges, and proof boundaries are recorded in [sources.json](sources.json). The full public-author PDFs and extracted text are confined to the ignored `scratchpad/numerical-analysis-2026-10-12/sources/statistics/` tree. PDFs were extracted with Python 3 and PyMuPDF (`fitz`).

I read the substantive Chapter 2–6 content (physical PDF pp. 14–55) of Trefethen’s 55-page author sample of *Approximation Theory and Approximation Practice*; the sample front matter, pp. 1–13, was not read. I also read the full extracted contents of the selected FNC article pages on interpolation, integration, adaptive integration, adaptive Runge–Kutta, conditioning, and floating point. These sources support interpolation formulas, barycentric evaluation, composite rules, and numerical context, but they do not supply a complete general interpolation remainder proof, a proved Chebyshev Lebesgue-constant bound, or a general adaptive tolerance guarantee. FNC’s adaptive Simpson page contains an explicit failure example where the requested tolerance substantially understates the actual error.

For Art Owen’s author-hosted *Monte Carlo Theory, Methods and Examples*, I read Chapter 7, “Other integration methods,” in full. I also read the main text, endnotes, and exercises of *Practical QMC* Chapters 15 and 17 in full. The one-dimensional summation-by-parts proof is present in Chapter 15; the multidimensional Koksma–Hlawka proof, higher-dimensional discrepancy rates, scrambled-net variance and smoothness rates, and randomized-QMC CLT are cited to external sources or exercises. The cited theorems can be specified precisely, but the cited proof sources are not treated as locally read or imported. Chapter 2, “Simple Monte Carlo,” was read only in §§2.1–2.3 and §2.9. Its IID CLT and Hoeffding theorem are statements with proof citations elsewhere; the mean, variance, RMSE, and sample-variance identities have short local proofs.

I read Giles’s entire 2008 MLMC paper and its full proof of Theorem 3.1. That theorem proves complexity from explicit weak-bias, correction-variance, and per-sample-cost assumptions; it does not prove general Euler–Maruyama rates. I read Higham–Mao–Stuart (2002), pp. 1041–1056, including the stated strong-convergence proofs. The rest of the paper, pp. 1057–1063, was not read. Its optimal-rate theorem is autonomous and requires all-order moment bounds for the exact solution and both Euler processes. It does not establish weak order one. Särkkä–Solin Chapter 8 was read in full, but its preface and chapter explicitly prioritize readable exposition over full rigor; its strong/weak order assertions are contextual only.

For optimization, I read Boyd–Vandenberghe §9.2 and §9.3.1 (physical PDF pp. 477–483; printed pp. 463–469), then §§9.5.1–9.5.3 (physical PDF pp. 498–506; printed pp. 484–492), including the descent, strongly-convex gradient, and damped-Newton proofs. I did not read §9.3.2 beyond its opening context, other Chapter 9 sections, or other chapters. For inverse problems, I read all 29 slides of Hansen’s Chapter 4 on regularization, all 27 slides of Chapter 5 on parameter selection, and Chapters 3 pp. 1–6 for discretization context. These slides are teaching context, not a substitute for the current library’s published proof suppliers. Exact read/unread ranges and interpretive limits are in `sources.json`.

## Interpolation and approximation foundations

For distinct real nodes x₀,…,x_n, define the cardinal polynomials
\[
  \ell_j(x)=\prod_{k\ne j}\frac{x-x_k}{x_j-x_k},
  \qquad I_nf(x)=\sum_{j=0}^n f(x_j)\ell_j(x).
\]
The directly provable contract is: I_n f is the unique polynomial of degree at most n interpolating the n+1 data values. Existence follows from ℓ_j(x_k)=1 when j=k and 0 otherwise; uniqueness follows because the difference of two interpolants has n+1 roots and degree at most n. If f has n+1 continuous derivatives on [a,b], the Lagrange remainder is
\[
 f(x)-I_nf(x)=\frac{f^{(n+1)}(\xi_x)}{(n+1)!}\prod_{j=0}^n(x-x_j)
\]
For each x not equal to a node there is a ξ_x in [a,b] giving this formula; at nodes the error is zero. Its proof uses a divided difference or a repeated-Rolle argument. Do not turn the pointwise formula into a uniform rate unless the derivative and node product are bounded.

Trefethen’s barycentric formula is an algebraically equivalent and efficient way to evaluate the interpolating polynomial; finite-precision stability needs its own stated hypotheses. It does not cure ill-conditioning of equispaced interpolation. A theorem about the Lebesgue constant should state its node family and norm: for Chebyshev roots or Chebyshev–Lobatto nodes, the operator norm Λ_n=||I_n||_{C→C} is O(log n); the usual proof reduces the cardinal basis to trigonometric sums. The interpolation error inequality
\[
 \|f-I_nf\|_\infty\le (1+\Lambda_n)E_n(f),
 \qquad E_n(f)=\inf_{p\in\mathcal P_n}\|f-p\|_\infty,
\]
The inequality is immediate from I_n p=p. A logarithmic Lebesgue bound alone does not imply uniform convergence for every continuous f; a rate on the best degree-n approximation error E_n(f) is still needed. Equispaced interpolation can diverge (Runge phenomenon), so polynomial density is not a convergence theorem for arbitrary interpolation nodes.

The existing cor-weierstrass-approximation-on-the-unit-interval and cor-weierstrass-approximation-on-a-closed-interval are the generic polynomial-density suppliers. A self-contained elementary proof route, if needed in a page, is the Bernstein polynomial B_n f(x)=E[f(S_n/n)] with S_n binomial of parameters n,x. Uniform continuity controls the event |S_n/n−x|<δ and Chebyshev controls its complement using variance at most 1/(4n). The ATAP Chapter 6 proof is an outline and invokes other approximation facts, so use the already published library results rather than claiming this source provides a full import. MSF-26 owns its natural-cubic interpolation and Sobolev spline approximation proof obligations; numerical-analysis interpolation contracts may be an earlier generic supplier, but should not duplicate the statistical spline convergence claim.

## Deterministic quadrature and adaptive rules

For f with two continuous derivatives on [a,b], composite midpoint and trapezoidal rules with uniform step h=(b−a)/n satisfy
\[
 |I(f)-M_n(f)|\le (b-a)h^2\|f''\|_\infty/24,
 \qquad
 |I(f)-T_n(f)|\le (b-a)h^2\|f''\|_\infty/12.
\]
The midpoint proof integrates the local Taylor remainder. The trapezoid proof integrates the error of the piecewise-linear interpolant on each panel; the local contribution is at most h³||f''||∞/12. The same hypotheses give the usual mean-value error formulas. If f''≥0, then M_n≤I(f)≤T_n for the source’s equal-panel conventions.

Composite Simpson requires an even number of panels and four continuous derivatives of f on [a,b]; with the same full-panel step h,
\[
 |I(f)-S_n(f)|\le (b-a)h^4\|f^{(4)}\|_\infty/180.
\]
The local rule is exact through cubic degree by symmetry, and the composite error follows by a Peano-kernel or Taylor-remainder argument. “Exact on degree 2” from the three-node construction is not the full composite-Simpson exactness claim; record the cubic cancellation step.

For Gaussian quadrature, use a positive measure dμ=w(x)dx on [a,b] with finite moments through degree 2m−1 and a positive-definite polynomial inner product through degree m. Let the monic p_m be orthogonal to all lower-degree polynomials. It has m simple roots in (a,b). At these roots x_i, set w_i=∫ℓ_i dμ. Division q=p_mr+s, where deg r and deg s are less than m, proves Σ_i w_iq(x_i)=∫q dμ for every polynomial q of degree at most 2m−1. Positivity follows by applying exactness to ℓ_i²: w_i=∫ℓ_i²dμ>0. The root theorem for orthogonal polynomials is a prerequisite and needs its own sign-change proof. For f with 2m continuous derivatives on [a,b], the Gauss error is
\[
 I(f)-Q_m(f)=\frac{f^{(2m)}(\xi)}{(2m)!}\int_a^b p_m(x)^2\,d\mu(x)
\]
For some ξ in (a,b), with p_m monic; prove by Hermite interpolation at the double nodes and Rolle’s theorem. Owen states Gaussian exactness/error but refers to outside sources rather than proving either result, so these are local proof obligations. Tensor products preserve coordinatewise exactness but cost grows exponentially with dimension; no dimension-free deterministic error rate follows from one-dimensional Gaussian exactness.

Adaptive Simpson estimates local error from Richardson differences of nested Simpson estimates. Adaptive Runge–Kutta controls estimated local defects from embedded formulas. Both are useful algorithms, but their tolerances are not certified global error bounds by default. A rigorous adaptive guarantee needs an a posteriori remainder/defect bound, a stability propagation argument, and controlled arithmetic (often interval or directed rounding); a small estimator is not a proof of small true error. This distinction is essential for likelihoods and evidence integrals.

## Monte Carlo, QMC, RQMC, and MLMC

For IID outcomes Y_i=f(X_i) with mean μ=E[Y] and finite second moment E[Y²], the sample mean μ̂_n is unbiased and
\[
 \operatorname{Var}(\widehat\mu_n)=\sigma^2/n,
 \qquad \operatorname{RMSE}(\widehat\mu_n)=\sigma/\sqrt n.
\]
The variance identity uses independence and identical finite variance. The IID CLT additionally requires 0<σ²<∞; it supplies an asymptotic sampling-calibration statement, not a deterministic numerical error bound. A computed standard error does not account for a biased integrand, a finite solver step, an approximate posterior target, or model misspecification.

For deterministic QMC on the unit cube [0,1]^d, the Koksma–Hlawka contract is
\[
 \left|\frac1n\sum_{i=1}^nf(x_i)-\int_{[0,1]^d}f\right|
 \le D_n^*(x_1,\ldots,x_n)V_{HK}(f),
\]
when f has finite Hardy–Krause variation under the anchored-at-1 convention used in the source. It is deterministic and holds at each n, but it is generally not a usable empirical error interval: both the exact star discrepancy and variation may be harder to calculate than the target integral. Unbounded or infinite-variation integrands are outside this bound. Uniform distribution plus Riemann integrability gives QMC convergence; the source cites the multidimensional proof rather than supplying it.

RQMC requires each point X_i to have the uniform distribution on [0,1]^d, not independence between points. Then μ̂_n is unbiased. A nested uniform scramble of a (0,m,d)-net in base b≥max(d,2), with n=b^m and an L² integrand, satisfies Owen’s stated bound
\[
 \operatorname{Var}(\widehat\mu_n)
 \le \left(\frac b{b-1}\right)^{\min(m,d-1)}\frac{\sigma^2}{n}
 \le e\frac{\sigma^2}{n}.
\]
The theorem proof is referred to Owen (1997a), not given in Chapter 17. For a (λ,t,m,d)-net with 1≤λ<b and a smooth f whose mixed first derivative in each distinct coordinate is continuous, the source states variance O(n⁻³(log n)^(d−1)), again with an outside proof citation. The source’s RQMC CLT needs a (0,m,d)-net, nested uniform scramble, Hölder continuity of the mixed derivative ∂₁⋯∂df with exponent 0<β≤1, and positive L² norm for that derivative; ordinary digital shifts and arbitrary randomizations do not inherit it. Independent replicate estimates quantify randomization variability. They do not estimate data-sampling uncertainty or solver/model bias, and small R t/normal intervals can be badly calibrated for skewed or heavy-tailed replicate distributions.

Theorem 3.1 of Giles (2008) is the appropriate generic MLMC supplier. Let levels have h_l=M⁻ˡT, an unbiased level estimator Y₀ and correction estimators Y_l for P_l−P_(l−1), independent across levels, with
\[
 |\mathbb E(P_l-P)|\le c_1h_l^\alpha,\quad \alpha\ge\tfrac12;
 \quad \operatorname{Var}(Y_l)\le c_2N_l^{-1}h_l^\beta,\quad\beta>0;
 \quad C_l\le c_3N_lh_l^{-1}.
\]
Then for mean-square error at most ε², the work is O(ε⁻²) if β>1, O(ε⁻² log²(ε⁻¹)) if β=1, and O(ε^(-2-(1-β)/α)) if 0<β<1, with constants depending on the rates and M,T. The proof first chooses the finest level to control squared bias, then minimizes total work Σ_l C_lN_l subject to total variance Σ_l V_l/N_l≤ε²/2 using N_l proportional to √(V_l/C_l), and evaluates the geometric sums in the three cases. Giles’s adaptive bias/level-stopping routine estimates unknown rates and constants and is explicitly heuristic, not guaranteed.

For Euler–Maruyama, reuse P-NUM-SDE-01/02 and keep their proof routes separate. The P-NUM-SDE-01 local route assumes X_0 is adapted at time zero, E|X_0|²<∞, and independent of future Brownian increments; coefficients are Borel in time with uniform global-Lipschitz and linear-growth bounds in state, plus the plan’s stated 1/2-Hölder time modulus with linear growth. The local proof must make the modulus constants/norm explicit. It establishes finite second moments and then E sup_{t≤T}|X(t)−X^h(t)|²=O(h) by constructing the continuous interpolation, bounding its drift/diffusion defect, using Itô isometry and BDG, and applying Grönwall. Shared coarse/fine Brownian increments and a globally Lipschitz payoff then give correction variance O(h_l), cost O(h_l⁻¹), β=1, and only the strong-payoff bias α=1/2. This local finite-L² proof is not inferred from Higham–Mao–Stuart.

The current published Itô-integral definition, Itô isometry/linearity theorem, and multidimensional Itô formula were inspected as numerical-SDE prerequisites. Each declares the Axiom of Choice and the standing hypothesis (H) of the elementary predictable Brownian-integrand item; a numerical SDE proof importing them must carry these inherited premises or provide an alternate interface. The exact imported Higham–Mao–Stuart optimal-rate contract is narrower: an autonomous C¹ drift/diffusion, one-sided Lipschitz drift, globally Lipschitz diffusion, polynomial local-Lipschitz drift, and uniform finite moments of every order for the exact solution, step process, and continuous Euler interpolation on [0,T]. Under those hypotheses E sup_{t≤T}|X(t)−Y(t)|²=O(h). Do not weaken this to X₀∈L² or add time-dependent coefficients without a separate proof.

For weak Euler order one, the literature checked here is not a complete proof supplier. A precise local theorem design is possible for a bounded payoff φ if u(t,x)=E[φ(X_T^(t,x))] solves the backward Kolmogorov equation and is C² in time and C⁴ in space, with those derivatives bounded by C(1+|x|^q), and exact/Euler processes have uniform moments of order p≥2q+8. A conditional one-step Gaussian Taylor expansion gives expected remainder O(h²)(1+|x|^(q+4)); the cubic Gaussian term vanishes, ∂_tu+L_tu=0 cancels the first-order term, and telescoping gives bias O(h). Deriving this backward-solution regularity from coefficient and payoff smoothness is a separate obligation. Strong order does not imply weak order one for a particular payoff, and Lipschitz payoff alone gives only the strong-bound bias unless additional weak regularity is proved.

## Optimization, likelihoods, and inverse problems

Boyd–Vandenberghe supplies a proved convex baseline. For C² f with Hessian bounded below by mI and above by MI on the initial sublevel set and an attained minimum f*, gradient descent with exact line search obeys
\[
 f(x_{k+1})-f^*\le(1-m/M)(f(x_k)-f^*).
\]
Armijo backtracking with 0<α<1/2 and 0<β<1 also gives a linear objective-gap rate with factor 1−min(2mα,2βαm/M)<1. Damped Newton additionally requires a Lipschitz Hessian on the same sublevel set; the proof shows finitely many damped steps followed by accepted unit steps and quadratic convergence. These are convex/strongly convex regimes, not global optimization guarantees for nonconvex likelihoods. A local computed-gradient bound follows directly: if f is μ-strongly convex on a convex domain with minimizer x* and the exact gradient norm at x̃ is at most η, then ||x̃−x*||≤η/μ. If the computed gradient has error δ, replace η by η+δ. Do not confuse a small gradient with a small parameter error without a curvature lower bound, or assert a global maximum for a multimodal MLE.

The current library already has a reusable inverse-problem spine: SVD and condition numbers; least-squares minimizer/normal-equation results; QR versus condition-number squaring; Tikhonov’s objective, unique minimizer and singular filters; truncated-SVD filters; and standard floating-point/conditioning suppliers. Use them rather than adding a parallel statistical inverse theory. With b=Ax†+e and Tikhonov inverse A_λ^#=(A^*A+λI)^(-1)A^*, the exact algebra
\[
 x^\dagger-A_\lambda^\#b
 = (I-A_\lambda^\#A)x^\dagger-A_\lambda^\#e
\]
separates regularization bias from data perturbation. Hansen’s Ch. 3 illustrates an earlier, separate discretization error: replacing an integral operator by a quadrature/collocation matrix drops a residual term before the inverse solve. Finite precision and iterative-solver error enter after these. The source’s discrepancy principle, L-curve, generalized cross-validation, and residual-spectrum rules are parameter-selection methods with explicit assumptions and failure cases, not universally reliable guarantees.

For a numerically evaluated likelihood, distinguish the exact target objective, its quadrature/Monte Carlo or solver approximation, and the optimizer’s residual error. If the normalizer is approximated, the resulting objective can be biased even when its approximate gradient is solved exactly. AD returns derivatives of the coded finite computation; it does not bound the difference between that computation and the intended continuous model. The exact-flow versus numerical-ODE distinction belongs to P-NUM-ODE-01/02 and ML-58, not to a posterior-calibration theorem.

## Error ledger and cross-plan boundaries

Use a target chain and a pathwise triangle inequality. For an SDE expectation with learned coefficients, for example,
\[
 \widehat\mu_{n,h,\widetilde b}-\mu_b
 =\underbrace{(\widehat\mu_{n,h,\widetilde b}-\mathbb E\phi(X_h^{\widetilde b}))}_{\text{MC/RQMC estimation}}
 +\underbrace{(\mathbb E\phi(X_h^{\widetilde b})-\mathbb E\phi(X^{\widetilde b}))}_{\text{time discretization}}
 +\underbrace{(\mathbb E\phi(X^{\widetilde b})-\mathbb E\phi(X^b))}_{\text{model/learned-score bias}}.
\]
If the target itself is estimated from data, add a separate sampling term. If an objective or integral is truncated, add a truncation remainder. If floating-point conditioning or a solver approximation matters, add a roundoff/linear-solve term. The triangle bound is deterministic/pathwise; a sum-of-variances or root-sum-square formula requires centering/covariance or independence assumptions. A model/score bias generally remains as h→0, while solver error does not; a highly accurate solver cannot repair misspecification.

The four inspected statistical plans assign the interfaces as follows:

| Consumer | Reusable numerical contract | Consumer-owned claims to keep out of this dossier |
|---|---|---|
| BCS-20 computational foundations | Strongly-convex GD and local/damped Newton; published least-squares gradient/Hessian suppliers | Latent likelihood/KL/EM/VI statements and nonconvex statistical interpretation |
| BCS-23 Laplace and deterministic quadrature | Composite trapezoid/Simpson/Gauss error results | Laplace approximation error and asymptotics |
| BCS-25, BCS-56, BCS-57 | IID MC mean/variance; discrepancy and RQMC integration contracts | Confidence-interval calibration, replicated-estimator inferential meaning, and statistical coverage |
| BCS-54 and BCS-59 | Numerical component definitions and pathwise decomposition only | Full statistical/inferential error ledger, approximation-bias theorem, and total-variation/predictive claims |
| BCS-55 | Abstract MLMC cost theorem and separately qualified EM rate suppliers | Statistical error-budget interpretation; adaptive stopping remains heuristic |
| ML-37–39, ML-58, ML-60–61 | Floating-point/conditioning, ODE/SDE solver contracts, exact-versus-discrete computation | AD correctness for exact functions, learned-model claims, posterior/score inference |
| MSF-26 | Lagrange interpolation and numerical spline algorithms as upstream inputs | Its local natural-cubic interpolation and Sobolev spline approximation proofs |
| SME-02/04/16/36 | Least-squares, optimization, and numerical uncertainty inputs | GLM/Fisher-scoring convergence, design properties, and measurement/statistical uncertainty |

The genuinely unresolved optimal-order question for multidimensional star discrepancy is outside the theorem coverage: for fixed dimension d≥3, the exact best asymptotic order remains unknown (the source gives Roth-type lower and established upper bounds, with the planar case settled). It may be described as an open problem if a dedicated lesson is wanted, but it cannot carry a proof. No established result missing a local item is labeled an open problem here.
