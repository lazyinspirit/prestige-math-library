# Foundations-05 source dossier

**Assignment:** nonparametric and semiparametric inference; density and regression estimation; kernels and splines; approximation rates; tangent spaces, influence functions, efficient scores, and semiparametric efficiency; rigorous local prerequisite map.

**Status:** substantive source reading and dependency review complete; this is a planning dossier, not authored library content. The proposed item IDs and supplier interfaces below are recommendations only. The nine source PDFs and complete fitz extractions are catalogued in [sources.json](./sources.json); [progress.json](./progress.json) records the reading status.

## Scope and source standard

I downloaded nine full author or institutional PDFs and extracted every PDF page with Python/PyMuPDF fitz 1.27.2.3. The PDFs total 634 pages; their complete extracted texts total 31,620 lines. Six complete focused texts (122 pages) were read in full, and three longer works were read only in the complete units listed in the source ledger. Full extraction is not treated as full reading. Figures were not visually inspected. Newey's two slide PDFs were re-extracted in readable slide order and the final nonparametric extraction was re-read end to end; hashes and actual line counts refer to those final files.

The strongest nonparametric proof sources are Newey's complete MIT lecture and Lyche–Manni–Speleers' complete spline-approximation notes. APTS is independent corroboration, but its kernel calculations are informal and its cubic interpolation rank argument explicitly has a gap. Tibshirani's Berkeley notes give a useful direct cubic smoothing-spline proof and kernel/local-linear derivations, but are course notes with several deferred hypotheses/proofs. For semiparametric geometry, van der Vaart's selected St-Flour lectures provide the principal proofs; Kosorok's complete introductory chapter and Kennedy's complete short paper are independent treatments, with their proof limitations recorded. The Kosorok file itself is a preliminary partial copy with a no-redistribution notice; Part III is absent and is not represented as read or used as a proof source.

## Findings and result-level proof ledger

### 1. Targets, function classes, and risk

Use two distinct statistical targets:

- A density \(f\) of an observation with respect to a specified dominating measure, typically Lebesgue measure on \(\mathbb R^d\).
- A regression function \(m(x)=E[Y\mid X=x]\), initially an equivalence class up to \(P_X\)-null sets. Pointwise smoothness and pointwise estimation require selecting a version and assuming that version has the claimed regularity; conditional expectation alone does not provide a smooth version.

Define the target-specific loss explicitly. For density estimation use pointwise squared error or integrated squared error (MISE); for regression use integrated squared error under \(P_X\), a specified Lebesgue-weighted \(L^2\) risk, or the empirical training-design loss. Do not call these interchangeable. In particular, Newey's series proposition bounds expected in-sample empirical prediction error at the training \(X_i\)'s; it is not by itself an independent test-risk theorem.

For smoothness, state Hölder \(C^{s}\) and Sobolev \(W^{s,2}\) separately and state the domain. The existing Hölder definition is bounded/global; it should not silently stand for a Sobolev condition. Approximation theorems below are stated for Sobolev classes and the statistical risk corollary adds a bounded design density to pass from Lebesgue \(L^2\) error to \(L^2(P_X)\).

### 2. Kernel density estimation

For iid \(X_1,\ldots,X_n\sim f\) on \(\mathbb R^d\), define
\[
\widehat f_h(x)=\frac{1}{n h^d}\sum_{i=1}^n K((x-X_i)/h).
\]
This is an estimator definition. Its risk properties are separate theorems.

A safe pointwise second-order statement assumes \(h\to0\), \(nh^d\to\infty\), \(K\in L^1\cap L^2\), \(\int K=1\), \(\int uK(u)\,du=0\), \(\int \|u\|^2|K(u)|\,du<\infty\), and a density \(f\in C^2\) with bounded continuous Hessian. Then, at a fixed \(x\),
\[
E\widehat f_h(x)-f(x)=\tfrac12 h^2\sum_{j,k}\mu_{jk}\partial_{jk}f(x)+o(h^2),
\quad
\operatorname{Var}(\widehat f_h(x))
=\frac{f(x)}{nh^d}\int K^2+o((nh^d)^{-1}),
\]
where \(\mu_{jk}=\int u_ju_kK(u)\,du\). A compactly supported kernel or global derivative bounds make the Taylor remainder domination direct. The variance proof is the iid variance identity, change of variables, dominated convergence, and the observation that the subtracted \(O(1/n)\) mean-square term is \(o((nh^d)^{-1})\).

For a global MISE claim add assumptions that justify integrated remainders, for example \(f\in W^{2,2}(\mathbb R^d)\) with the required derivative integrability, a second-order kernel with finite squared norm and moments, and no finite-support boundary. Then
\[
\operatorname{MISE}(\widehat f_h)=O(h^4+(nh^d)^{-1}),
\]
and balancing the two terms gives \(h\asymp n^{-1/(d+4)}\) and MISE \(O(n^{-4/(d+4)})\). State this as an upper rate under those assumptions; do not promote the course-slide bandwidth calculation into a minimax lower bound. For compactly supported densities, the ordinary symmetric estimator has boundary bias; either restrict the expansion to interior points or add a boundary correction and prove its properties.

Newey, pp. 2-5, derives the convolution expression, Taylor bias, variance, and MSE. Its Proposition 1 uses a twice continuously differentiable density with bounded second derivative, kernel mass one, zero first moment and finite second moment; Proposition 2 assumes the density continuous and bounded, \(K^2\) integrable, \(h\to0\), and \(nh\to\infty\). APTS pp. 6-8 independently gives a density-estimation review but is informal. Newey's multivariate pp. 6-7 gives the \(n^{-4/(d+4)}\) balance with some global regularity details suppressed. The scaffold theorem should supply the explicit global conditions above rather than inherit those omissions.

### 3. Kernel regression and local polynomial estimation

The population target is a chosen version of \(m(x)=E[Y\mid X=x]\). For scalar \(X\), define the Nadaraya–Watson (local-constant) estimator when its denominator is positive:
\[
\widehat m_{\rm NW}(x)=
\frac{\sum_i K((x-X_i)/h)Y_i}{\sum_i K((x-X_i)/h)}.
\]
For degree \(p\), define local polynomial estimation as the intercept of a minimizer of
\[
\sum_i K((x-X_i)/h)\left[Y_i-\sum_{j=0}^{p}\beta_j(X_i-x)^j\right]^2.
\]
These are definitions; existence requires a positive denominator for local constant and a nonsingular local moment/design matrix for local polynomial.

For an interior point with \(f_X(x)>0\), smooth \(m\) and \(f_X\), symmetric kernel with the needed moments, conditional variance continuous and finite, and \(h\to0, nh\to\infty\), the one-dimensional interior leading biases are
\[
\operatorname{Bias}(\widehat m_{\rm NW}(x))
=\frac{h^2\mu_2}{2}\left(m''(x)+2m'(x)\frac{f_X'(x)}{f_X(x)}\right)+o(h^2),
\]
\[
\operatorname{Bias}(\widehat m_{\rm LL}(x))
=\frac{h^2\mu_2}{2}m''(x)+o(h^2).
\]
For an even kernel normalized to \(\mu_0=1\), the leading local-linear variance is \(R(K)\sigma^2(x)/(nh f_X(x))\), where \(R(K)=\int K^2\) and \(\sigma^2(x)=\operatorname{Var}(Y\mid X=x)\); the local-constant variance has the same first-order interior term. These formulae require finite second/fourth moments and remainders sufficient for the triangular-array ratio expansion.

The local-linear proof route is explicit in Newey pp. 12-16: write the weighted least-squares normal equations, rescale the moment matrix, apply a law of large numbers to kernel moments, Taylor-expand \(m(X_i)\), and control the conditional variance matrix. The note gives the local-constant bias as an exercise rather than a complete proof; APTS §2.2 confirms the formulas but calls its calculation informal. Therefore the scaffold must prove the local-constant ratio expansion under its stated conditions. At a support boundary, local-linear reproduction still removes the first-order design-gradient term when the one-sided local moment matrix is nonsingular, but constants differ; do not use the interior variance constant or an unproved uniform claim at the boundary.

### 4. Splines, approximation rates, and spline regression

A spline-space supplier should define degree, knot multiplicity, continuity across knots, the B-spline recurrence, support, nonnegativity and partition of unity, and identify the basis of the resulting piecewise-polynomial space. Lyche–Manni–Speleers §§1.1-1.4 give the full proof treatment. Their approximation theorem can be used in the directly proved quasi-interpolant form: for degree \(p\), \(0\le l\le p\), \(f\in W^{l+1,q}\), and a bounded local \(L^q\)-quasi-interpolant \(Q\) reproducing polynomials through degree \(l\), the local error on a knot interval is bounded by a degree/locality constant times
\[
h_{m,\xi}^{\,l+1}\|D^{l+1}f\|_{L^q(J_m)}.
\]
Theorem 32 proves this using Taylor polynomial reproduction, local stability, and bounded overlap; it also gives a global bound. For the statistical rate use \(q=2\), uniform or controlled local mesh, and \(r=0\). Theorem 41 states the stronger best-approximation derivative bound
\[
\inf_{s\in S_{p,\xi}}\|D^r(f-s)\|_{L^q}
\le K h_\xi^{\,l+1-r}\|D^{l+1}f\|_{L^q},
\quad 0\le r\le l\le p,
\]
but the arbitrary-knot constant is obtained via the thinning construction in Theorem 48, whose details are incomplete in these notes. The proposed core should use Theorem 32 in the explicit mesh regime and flag Theorem 41's stronger uniformity as an optional extension requiring that construction.

Newey Proposition 3 (pp. 10-11) gives a complete least-squares series bound. Let \(p_K(X)\) span a sample linear space of rank at most \(K\), let the iid model have \(E[Y\mid X]=g_0(X)\) and \(\operatorname{Var}(Y\mid X)\le\Delta\), and suppose a deterministic coefficient vector satisfies
\[
E\{g_0(X)-p_K(X)^\top\bar\beta_K\}^2\le C^2K^{-2\gamma}.
\]
For the least-squares series fit using the generalized inverse, its expected empirical training loss obeys
\[
E\left[\frac1n\sum_{i=1}^n\{\widehat g_K(X_i)-g_0(X_i)\}^2\right]
\le \Delta K/n+C^2K^{-2\gamma}.
\]
The proof decomposes with the orthogonal projection \(Q=P(P^\top P)^{-}P^\top\); the approximation residual is contracted by \(I-Q\); conditional iid errors have diagonal covariance; and \(\operatorname{tr}(Q)\le K\). For univariate uniform-knot splines of degree \(p\ge s-1\), \(g_0\in W^{s,2}\), and a bounded design density, the quasi-interpolant bound gives \(\gamma=s\) with \(K\asymp h^{-1}\). Balancing \(K/n\) and \(K^{-2s}\) yields the empirical training-risk upper rate \(n^{-2s/(2s+1)}\). Any independent-test risk result must be stated and proved separately.

For the variational cubic smoothing spline define the estimator by minimizing, over \(g\in W^{2,2}(a,b)\),
\[
\sum_i(Y_i-g(x_i))^2+\lambda\int_a^b|g''(t)|^2\,dt,\qquad \lambda>0.
\]
Point evaluation is meaningful on the unique one-dimensional \(W^{1,2}\) representative. With at least two distinct observed input locations, the minimizer is unique and is the natural cubic spline with knots at the distinct inputs, extended linearly over data-free endpoint intervals. The proof route is the natural-cubic interpolation projection: construct the interpolant to \(g(x_i)\), integrate by parts piecewise to establish \(\int s''(g-s)''=0\), and conclude \(\int|g''|^2=\int|s''|^2+\int|(g-s)''|^2\). If the residual has zero second derivative it is affine, and its values at two distinct inputs force it to vanish. The objective then reduces to a finite-dimensional spline problem. The Berkeley notes supply the orthogonality calculation but assert interpolation existence by dimension count. APTS Proposition 3.3 and Theorem 3.5 use the same incomplete rank argument; its footnote explicitly says full rank remains to be proved. At one distinct input uniqueness is false because every affine function through that input has zero roughness and zero residual. Add the following local supplier before using the theorem:
- proposed A-item: **thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots**;
- statement: for \(r\ge2\) strictly increasing knots and arbitrary values there is a unique natural cubic interpolant;
- proof route: solve the standard tridiagonal system for interior second derivatives; show its quadratic form is positive definite (positive interval lengths), then recover the cubic pieces and linear endpoint pieces. State knot ordering and endpoint conditions explicitly.
Existing one-dimensional Sobolev representative and endpoint-estimate suppliers suffice to define the variational objective and evaluation functionals; no new general Sobolev prerequisite is needed.

### 5. DQM paths, tangent spaces, influence functions

At a law \(P\), a one-dimensional dominated path \(P_t\) is differentiable in quadratic mean with score \(s\in L^2(P)\) when
\[
\left\|\sqrt{p_t}-\sqrt p-\frac{t}{2}s\sqrt p\right\|_{L^2(\mu)}=o(|t|),
\]
for a common dominating measure (or the measure-independent equivalent). Van der Vaart Lemma 1.8 proves \(P s=0\) and \(P s^2<\infty\). The tangent set is the set of scores of allowed paths; the tangent space is its closed linear span in \(L^2_0(P)\). Keep the tangent set and its linear closure distinct: constraints and boundary paths can make the actual score set a cone or another proper subset, and enlarging it can change regularity and the bound.

For a scalar/vector functional \(\psi(P)\), pathwise differentiability means the derivative along allowed paths is a well-defined continuous linear map of the score on the tangent space. Riesz representation then gives a mean-zero \(\phi\in L^2(P)\) such that
\[
\dot\psi_P(s)=P[\phi s]\quad\text{for every allowed score }s.
\]
Any such representer is an influence curve for the parameter. The canonical gradient is the unique representer in the tangent space. Kennedy §3 uses “influence function” for an estimator's asymptotic linear expansion and “influence curve” for the parameter derivative; preserve that distinction. An estimator influence function \(\varphi\) means
\[
\widehat\psi_n-\psi(P)=(P_n-P)\varphi+o_P(n^{-1/2}),
\quad P\varphi=0,\quad P\|\varphi\|^2<\infty.
\]
With the category-1 iid CLT supplier, this yields its Gaussian limit. Mean example: for \(\psi(P)=P Y\), the canonical gradient in the unrestricted model is \(Y-PY\), and the sample mean has that influence function exactly before the CLT remainder. This example needs no causal or other category-2 model dependency.

Proof route: DQM score lemma; identify the derivative on each path; check linearity and continuity in the tangent \(L^2\) norm; apply the existing Hilbert-space Riesz theorem; characterize all representers by adding the orthogonal complement. If the derivative is not continuous in the tangent norm, no finite-variance influence curve exists. Neither Kennedy's short review nor Kosorok Chapter 3 supplies all these proofs; van der Vaart Lecture 1 and the existing Hilbert-space suppliers do.

### 6. Nuisance tangent space, efficient score, and bound

For a finite-dimensional parameter of interest \(\theta\) with score vector \(S_\theta\), and a closed nuisance tangent space \(T_\eta\subset L^2_0(P)\), define
\[
S_{\rm eff}=S_\theta-\Pi(S_\theta\mid T_\eta),\qquad
I_{\rm eff}=P[S_{\rm eff}S_{\rm eff}^{\top}].
\]
This is the nuisance-orthogonal efficient score and its information matrix. If \(I_{\rm eff}\) is nonsingular, the canonical gradient for \(\theta\) is \(I_{\rm eff}^{-1}S_{\rm eff}\), with covariance \(I_{\rm eff}^{-1}\). State the DQM path model, nuisance tangent closure, square integrability and nonsingularity assumptions. For a general functional use the Riesz/projection characterization in the preceding pair instead of forcing a finite-dimensional score formula.

For any regular asymptotically linear estimator, its influence curve satisfies the pathwise derivative equations. Orthogonally decompose it into the canonical gradient plus a component orthogonal to the tangent space; its covariance exceeds the canonical covariance in positive-semidefinite order. This is the Hilbert-space efficiency bound for regular asymptotically linear estimators. It does not establish that an estimator attaining the bound exists. A lower bound for general regular estimators, not already known to be asymptotically linear, uses the local asymptotic normality/contiguity and convolution theorem route; require the explicit category-1-03 supplier and the regularity conditions there. Van der Vaart Lecture 2 proves the Cramér–Rao comparison along submodels and develops the efficient-score projection; Lecture 4 gives the convolution theorem proof under its stated limit/measurability assumptions. Some other lower-bound proofs are deferred.

An estimator algorithm and its guarantee remain separate items. A proposed efficient-score estimating-equation definition may be \(\widehat\theta\) as a consistent zero of \(P_n S_{\rm eff,\widehat\eta,\theta}\). The guarantee may invoke van der Vaart Theorems 6.29 and 7.2 only with their stated DQM, nonsingular derivative/information, no-bias, \(L^2\) consistency/moment, and Donsker-class hypotheses. The Donsker hypothesis is a category-1-04 interface. These results do not imply validity of cross-fitting, double robustness, or a generic \(n^{-1/4}\) nuisance-rate rule; no such claims are proposed here.

## Existing library suppliers checked by reading item bodies

No existing library page/item supplies nonparametric or semiparametric statistics, density/regression estimators, kernel/spline statistical rates, DQM tangent geometry, influence curves, efficient scores, or semiparametric efficiency. The existing mathematical suppliers below are adequate only for the clauses stated; their titles or old plans are not treated as evidence.

| Use | Existing supplier and inspected clause | Scope / limitation |
|---|---|---|
| Probability laws, variables, expectations | [probability-spaces-random-variables-and-expectation.md](../../../../library/probability/probability-spaces-random-variables-and-expectation.md): **def-random-element-and-real-random-variable**, **def-law-or-distribution-of-a-random-element**, **def-expectation-of-a-nonnegative-or-integrable-random-variable**, and moment/variance/covariance definitions. | Supplies measurable random elements, pushforward laws, Lebesgue expectation, and finite moment definitions; not statistical experiments or estimator risk. |
| Conditional mean and \(L^2\) projection | [conditional-expectation.md](../../../../library/probability/conditional-expectation.md): **def-conditional-expectation-given-a-sigma-algebra**, **thm-conditional-expectation-is-the-l2-orthogonal-projection**, and **cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable**. | Conditional expectation is an almost-sure class; the last item yields a measurable function of a standard-Borel conditioning variable from a regular conditional law, not a smooth pointwise version. The projection theorem's AC hypothesis is inherited. |
| Conditional laws | **def-conditional-law-given-a-random-element** and its referenced disintegration/RCD suppliers. | Supports a conditional distribution kernel under the stated standard-Borel and AC assumptions; values on marginal-null fibres are version-dependent. |
| Density expectations and integrals | **def-measure-with-density**, **thm-integration-against-a-density**, in [product-measures-and-the-fubini-tonelli-theorems.md](../../../../library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md), and **thm-tonelli-theorem-for-sigma-finite-product-spaces**. | Exact nonnegative density integral identity and Tonelli under sigma-finiteness; use DCT/Tonelli for kernel expectation/variance exchanges with integrability stated. |
| \(L^p\) and convergence | [the-lp-spaces-holder-minkowski-and-riesz-fischer.md](../../../../library/measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer.md): \(L^p\) quotient/conventions, Hölder, Minkowski, Riesz–Fischer; **thm-dominated-convergence**. | Supplies the needed integral norm and convergence facts; no statistics-specific stochastic limit result. |
| Hilbert projections and Riesz | [hilbert-space-geometry-and-riesz-representation.md](../../../../library/functional-analysis/hilbert-space-geometry-and-riesz-representation.md): **thm-orthogonal-decomposition-by-a-closed-subspace**, **thm-riesz-representation-for-hilbert-space**. | Closed-subspace projection and continuous linear-functional representation are adequate for tangent geometry, subject to the exact Choice hypotheses in the item bodies. |
| Sobolev regularity and point evaluation | [weak-derivatives-and-sobolev-spaces.md](../../../../library/pde/weak-derivatives-and-sobolev-spaces.md): **def-sobolev-space-wkp-and-its-norm**, **cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives**; [sobolev-poincare-and-morrey-inequalities.md](../../../../library/pde/sobolev-poincare-and-morrey-inequalities.md): **lem-one-dimensional-sobolev-endpoint-estimate**. | In one dimension the unique AC representative and endpoint estimate control evaluations needed by \(W^{2,2}\) smoothing splines. **thm-higher-order-sobolev-embedding** concerns \(n\ge2\) extension domains and is not the one-dimensional evaluation argument. |
| Hölder classes and Taylor formula | **def-holder-spaces-c-k-alpha-and-their-scaled-norms**, **thm-multivariable-taylor-formula-with-lagrange-remainder**. | The Hölder definition and Taylor remainder are usable with their exact bounded-domain/open-convex hypotheses. Do not identify Hölder and Sobolev classes without another theorem. |
| Basic asymptotic normality | [central-limit-theorems.md](../../../../library/probability/central-limit-theorems.md): **thm-lindeberg-levy-iid-central-limit-theorem**. | iid real observations with finite positive variance; distributional convergence, no rate. It supports the mean example once the AL expansion is established. |
| Qualitative approximation | [approximation-and-compactness-in-ck.md](../../../../library/real-analysis/approximation-and-compactness-in-ck.md): Bernstein polynomial convergence and Weierstrass density. | Qualitative uniform density only; no quantitative spline or statistical approximation rate. |

The one-dimensional Sobolev point-evaluation issue is therefore not a missing general math prerequisite. The genuinely incomplete mathematical source step is natural-cubic interpolation existence/full rank; add the narrow theorem stated above within the assigned nonparametric sequence.

## Proposed dependency-ordered A/B scaffold

Every ID below is proposed. A is the reusable definition/theorem supplier. B is an example, worked calculation, or counterexample page and is not an upstream supplier. The natural-cubic interpolation theorem is an additional A supplier nested before the smoothing-spline result.

| Pair | A supplier / B item | Purpose, key statements, proof route, and source anchors |
|---|---|---|
| 1 | **npf-targets-and-risk-a** / **npf-targets-and-risk-b** | Define density and regression targets, versions, iid sample, function classes, pointwise/MISE/\(L^2(P_X)\)/training-design losses and rate notation. B: normal density and \(m(x)=x\); contrast a conditional-expectation class with a selected smooth version. Use Newey 2007 pp. 1-2, Tibshirani 2024 §1, and existing conditional-law suppliers. Statistical experiment/estimator/risk definitions should be consumed from planned foundations-01 if it supplies adequate bodies. |
| 2 | **npf-kernel-density-estimator-a** / **npf-kernel-density-estimator-b** | Define kernel, bandwidth and \(\widehat f_h\), including normalizing and moment conditions as assumptions. B: Gaussian or compactly supported kernel and a finite-sample boundary example as a counterexample to the interior expansion. Newey pp. 1-2; Tibshirani kernel note §3; APTS §1.2. The algorithm is a definition, not a proved consistency claim. |
| 3 | **npf-kde-bias-variance-a** / **npf-kde-bias-variance-b** | Prove the pointwise second-order bias/variance and the explicit MISE upper-rate under the assumptions in §2. Proof: Taylor plus DCT, iid variance, change of variables, Tonelli for integration, then bandwidth balance. B: \(d=1\) \(n^{-4/5}\) example and a boundary-bias counterexample. Newey Propositions 1-2 and pp. 5-7; independent informal APTS §1.2. Do not claim a minimax lower bound from these readings. |
| 4 | **npf-kernel-regression-a** / **npf-kernel-regression-b** | Define Nadaraya-Watson and degree-\(p\) local polynomial algorithms; prove scalar interior bias/variance with positive design density, smooth \(m,f_X\), finite conditional moments, bandwidth conditions and nonsingular local moments. B: \(m(x)=x\) (local linear reproduces exactly where fitted) and a boundary-design example showing the Nadaraya-Watson density-gradient bias. Newey pp. 8-16; Tibshirani 2024 §3; APTS §§2.1-2.2. Explicitly mark the Newey Nadaraya-Watson bias as an exercise and fill the proof rather than inheriting it. |
| 5 | **npf-spline-spaces-and-smoothing-a** / **npf-spline-spaces-and-smoothing-b** | Define polynomial/B-spline spaces and cubic smoothing spline, including the \(W^{2,2}\) domain and \(\lambda>0\). Add **thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots** before the representer theorem. Prove the roughness projection identity and finite-dimensional reduction; require at least two distinct input values. B: two-point linear interpolant, three-knot spline, and one-distinct-knot nonuniqueness. Lyche §§1.1-1.4; Tibshirani spline §§1-2.4; APTS §3.2.3. This is the only identified missing local math theorem for the selected smoothing-spline proof. |
| 6 | **npf-spline-approximation-rate-a** / **npf-spline-approximation-rate-b** | State the bounded-local-quasi-interpolant approximation bound for \(W^{l+1,q}\), \(0\le l\le p\), and uniform/controlled local mesh; optionally state derivative error \(h^{l+1-r}\). Prove with polynomial reproduction, Taylor remainder, local stability and finite overlap. B: uniform mesh example with degree \(p\) and \(W^{s,2}\) target. Lyche Theorem 32 and §2.3.1. Keep the stronger arbitrary-knot Theorems 41/48 in a clearly marked extension unless the thinning proof is supplied. |
| 7 | **npf-series-and-spline-risk-a** / **npf-series-and-spline-risk-b** | Define least-squares series/spline regression and prove expected empirical training risk \(\Delta K/n+C^2K^{-2\gamma}\) under iid observations, bounded conditional variance and an \(L^2(P_X)\) approximation bound. Derive the spline corollary \(n^{-2s/(2s+1)}\) with bounded design density, degree at least \(s-1\), and \(K\asymp n^{1/(2s+1)}\). B: trace/rank calculation and explicit training-risk versus independent-test-risk distinction. Newey Proposition 3 proof, pp. 10-11; Lyche Theorem 32. |
| 8 | **spif-dqm-paths-and-tangent-spaces-a** / **spif-dqm-paths-and-tangent-spaces-b** | Define dominated DQM paths, score, tangent set, closed tangent space and nuisance tangent space in \(L^2_0(P)\); prove scores have mean zero and finite variance. B: unrestricted model via bounded mean-zero score perturbations, and a finite-dimensional submodel. Van der Vaart Lecture 1 §§1.1-1.2, Lemmas 1.8-1.10; Kosorok Chapter 3 §3.1; Kennedy §§2,4. |
| 9 | **spif-pathwise-derivative-and-influence-a** / **spif-pathwise-derivative-and-influence-b** | Define pathwise derivative and parameter influence curve by continuous linear score representation; use Hilbert Riesz to identify the canonical gradient. Separately define estimator asymptotic linearity and its influence function. B: mean functional and sample mean; optionally show a derivative that is not continuous has no finite-variance representer. Van der Vaart Lecture 1 and Lecture 3 §3.1; Kennedy §3; Kosorok Chapter 3 §3.1. Existing Hilbert Riesz item supplies the representation theorem. |
| 10 | **spif-efficient-score-and-information-a** / **spif-efficient-score-and-information-b** | Define nuisance-score projection \(S_{\rm eff}=S_\theta-\Pi(S_\theta\mid T_\eta)\), efficient information, and \(I_{\rm eff}^{-1}S_{\rm eff}\) when nonsingular. Prove orthogonality and score covariance identities. B: finite-dimensional score vector with a one-dimensional nuisance score; verify the projection directly. Van der Vaart Lecture 2 §2.2 and Lecture 3 §3.1; Kosorok Chapter 3 §3.2; Kennedy §4. |
| 11 | **spif-semiparametric-efficiency-bound-a** / **spif-semiparametric-efficiency-bound-b** | State the covariance lower bound for regular asymptotically linear estimators with a representer and separately the LAN/convolution route for general regular estimators. Require the exact regularity and local-experiment hypotheses; no estimator-existence conclusion follows from a bound. B: mean parameter attaining the bound and a redundant nuisance score. Van der Vaart Lecture 2 Lemma 2.2 and Lecture 4 convolution theorem; planned foundations-02 information-bound and foundations-03 LAN/contiguity/convolution interfaces. |
| 12 | **spif-efficient-score-equation-a** / **spif-efficient-score-equation-b** | Define the plug-in efficient-score estimating equation as an algorithm, then state its separate asymptotic-efficiency theorem only under DQM, nonsingular derivative, no-bias and \(L^2\) conditions, and the Donsker/envelope hypothesis. B: a finite-dimensional parametric submodel and a nuisance plug-in that violates no-bias. Van der Vaart Lecture 6 Theorem 6.29 and Lecture 7 Theorem 7.2; planned foundations-03 asymptotic Z-estimation and foundations-04 Donsker supplier. Do not generalize this theorem to cross-fitting or modern debiased estimators. |

### Category and prerequisite interfaces

This is category 1. No proposed supplier consumes a category-2 model, category-3 Bayesian/computational statistics, or category-4 machine-learning item, directly or transitively. Examples remain generic density/regression experiments, Hilbert score geometry, and an iid mean. Classical statistical-learning course notes are used only for stated kernel/spline formulas and proof sketches; their course topic or terminology is not an item dependency.

The minimum upstream contracts to reconcile with the other foundations dossiers are:

1. **Foundations-01:** an iid statistical experiment/model, estimator as a measurable rule, parameter/estimand, loss and risk, and empirical/sample-law notation. The current math library does not contain those statistical interfaces.
2. **Foundations-02:** score/Fisher-information and parametric information-bound clauses, if the team wants to cite a unified parametric Cramér–Rao supplier. Otherwise foundations-05 must state the submodel lower-bound interface locally.
3. **Foundations-03:** asymptotic linearity/regularity, weak convergence, DQM-to-LAN/contiguity, and the convolution/lower-bound theorem with exact hypotheses.
4. **Foundations-04:** Donsker or other empirical-process equicontinuity conditions only for the optional efficient-score-equation theorem. KDE pointwise variance and the series empirical-risk bound do not require this edge.

These are planned category-1 contracts, not existing published suppliers. No new upstream real-analysis, probability, functional-analysis, or PDE supplier is needed based on the bodies inspected. Within foundations-05, add the interpolation theorem above and the topic-specific definitions/result items in the pair table. A pointwise smooth conditional-mean version is a model assumption for kernel-rate results, not a theorem currently provided by the conditional-expectation library.

## Topic-to-pair/source coverage matrix

| Topic | Proposed pairs | Primary full-text evidence | Independent treatment / limitation |
|---|---|---|---|
| Density and regression targets, losses | 1 | Newey nonparametric pp. 1-2; Tibshirani kernels §1 | Existing conditional-law item supplies only a measurable a.s. version; smooth pointwise version is assumed. |
| Kernel density estimator, bias, variance, MISE, bandwidth rate | 2-3 | Newey Propositions 1-2 and pp. 2-7 | APTS §1.2 corroborates informally; boundary correction and minimax lower rate remain outside this evidence. |
| Nadaraya-Watson, local linear/local polynomial | 4 | Newey pp. 8-16; Tibshirani kernels §3 | APTS §§2.1-2.2 confirms but expressly informal; Newey leaves NW bias calculation as exercise. |
| Spline spaces and B-spline basis | 5-6 | Lyche–Manni–Speleers §§1.1-1.4, Theorem 32 | APTS §§3.2.1-3.2.4 is a selected second treatment; some properties are exercises. |
| Natural cubic smoothing spline | 5 | Tibshirani spline §§2.2-2.4 | APTS §3.2.3 independent orthogonality proof; both source treatments leave interpolation rank/existence incomplete. New local proof needed. |
| Spline approximation and regression rates | 6-7 | Lyche Theorem 32; Newey Proposition 3 proof | Theorem 41/48 arbitrary-knot constant has a thinning-proof gap; use explicit local quasi-interpolant regime. |
| DQM, score, tangent set/space | 8 | van der Vaart Lecture 1, especially Lemmas 1.8-1.10 | Kosorok Chapter 3 and Kennedy §§2,4 are independent expositions, not complete proofs. |
| Pathwise derivative and influence curve/function | 9 | van der Vaart Lectures 1 and 3 | Existing Hilbert Riesz theorem closes representation; Kennedy distinction is clear but review-level. |
| Nuisance tangent projection and efficient score | 10 | van der Vaart Lectures 2-3 | Kosorok Ch. 3 §3.2 and Kennedy §4 independent; Kosorok defers proof to absent Part III. |
| Semiparametric efficiency lower bound | 11 | van der Vaart Lecture 2 and Lecture 4 | General regular-estimator claim needs planned foundations-03 LAN/convolution interface; no attainment claim from the bound alone. |
| Efficient-score estimating equations | 12 | van der Vaart Lecture 6 Theorem 6.29 and Lecture 7 Theorem 7.2 | Donsker/no-bias/\(L^2\) assumptions are essential; empirical-process edge is to planned foundations-04. |

## Explicit exclusions and unresolved claims

- Do not claim minimax-optimality of the KDE/local-polynomial/spline rates without a lower-bound source and proof. The read kernel notes state or defer lower bounds; the proposed scaffold contains upper-rate theorems only.
- Do not assert uniform-in-\(x\) kernel limits, boundary constants, data-driven bandwidth optimality, or multivariate regression rates without separate hypotheses and proof.
- Do not convert Newey's series training-design risk into population test risk.
- Do not claim arbitrary-knot spline approximation constants from Lyche–Manni–Speleers without completing the thinning construction.
- Do not claim unique natural cubic interpolation from equal dimension alone. Add and prove the tridiagonal-system theorem with at least two distinct knots.
- Do not treat a differentiable parameter functional as guaranteeing an efficient estimator. Attainment needs a separate estimator construction and regularity theorem.
- Do not claim the van der Vaart book was fully read. Only Lectures 1-4, selected §§6.5-6.6 and §§7.1-7.3 were read; preface-noted omitted proofs and unvisited lectures remain gaps.
- Do not claim the Kosorok book or its Part III proofs were read or available in the cached file. Only its complete Chapter 3 was read; the author-hosted preliminary copy omits the advertised theoretical Part III.
- Causal, Bayesian, computation, cross-fitting, double-robustness, and machine-learning results are outside this dossier's dependency scope.
