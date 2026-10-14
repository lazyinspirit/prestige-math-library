---
id: thm-kernel-regression-conditional-asymptotic-variance
kind: theorem
title: Conditional asymptotic variance of Nadaraya–Watson and local-linear estimators
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-convergence-in-probability
  - def-identically-distributed-and-iid-random-variables
  - def-measure-with-density
  - def-moments-variance-and-covariance
  - def-nadaraya-watson-estimator
  - def-local-polynomial-estimator
  - def-regression-target-version
  - lem-local-linear-normalized-moment-matrix-converges-in-probability
  - cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Whitney K. Newey, Locally Linear Regression, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/40cac15c5fb98b5bf72b8cfaab90c273_local_lin_reg.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Statement

Assume AC for the chosen regression version. Let $X_i$ be independent and
identically distributed with density $f$ continuous and positive at an
interior point $x$. For the chosen conditional law $Q(t,dy)$ in
[[def-regression-target-version]], set
$\sigma^2(t)=\int (y-m(t))^2Q(t,dy)$ where finite. Conditional on the
predictor vector, assume the responses are independent, have means $m(X_i)$,
and have variances $\sigma^2(X_i)$, where $\sigma^2$ is finite and continuous
at $x$. Let $K$ be finite-valued Borel, nonnegative, symmetric, with $\int K=1$,
$0<\mu_2=\int u^2K(u)\,du<\infty$ and $R(K)=\int K^2<\infty$.
Assume compact kernel support, globally bounded $f,\sigma^2$, or the
rapid-tail alternative: $\mathbb E Y^2<\infty$, bounded $K$, and
$\sup_{|u|\ge A}|u|^3K(u)\to0$. In this last alternative the stated
local continuity is sufficient.
For the local-linear conclusion also assume $\int u^2K(u)^2\,du<\infty$;
this extra squared moment is automatic for compactly supported kernels.
The Nadaraya–Watson conclusion requires only $R(K)<\infty$. For $h_n\to0$ with $nh_n\to\infty$, use the fixed
fallbacks in [[def-nadaraya-watson-estimator]] and
[[def-local-polynomial-estimator]]. Then, with variance taken conditionally
on $X_1,\ldots,X_n$,
$$nh_n\operatorname{Var}(\widehat m_{\mathrm{NW},h_n}(x)\mid X_1,\ldots,X_n) \longrightarrow \frac{R(K)\sigma^2(x)}{f(x)} \quad\text{in probability},$$
and the same limit holds with $\widehat m_{\mathrm{NW},h_n}(x)$ replaced by
the degree-one local-linear estimator. This is a conditional-variance
statement for both estimators. If additionally $m$ is continuous at $x$
and bounded globally (only bounded near $x$ is required for compact $K$),
or if the rapid-tail alternative holds and $m$ is continuous at $x$,
with $nh_n^3\to\infty$ additionally in this rapid-tail unconditional clause,
then the Nadaraya–Watson estimator is square-integrable for large $n$ and
$$\operatorname{Var}(\widehat m_{\mathrm{NW},h_n}(x))=\frac{R(K)\sigma^2(x)}{nh_nf(x)}+o((nh_n)^{-1}).$$
No unconditional local-linear variance is asserted: near-singular designs
can make even its finite-sample expectation undefined.

## Facts & Assumptions

**Given:** The conditional sampling, density, kernel, tail control, bandwidth, and fallback hypotheses in the statement.

[F1] The Nadaraya–Watson estimate is a normalized nonnegative weighted average when its denominator is positive. [[def-nadaraya-watson-estimator]].

[F2] The local-polynomial estimate is the intercept from weighted least squares when the moment matrix is nonsingular, with a fixed fallback otherwise. [[def-local-polynomial-estimator]].

[F3] The normalized degree-one moment matrix converges to $f(x)\operatorname{diag}(1,\mu_2)$, and its singularity probability tends to zero. [[lem-local-linear-normalized-moment-matrix-converges-in-probability]].

[F4] Variance is the expectation of squared deviation from the mean for a square-integrable variable. [[def-moments-variance-and-covariance]].

[F5] Convergence in probability has its usual event-probability definition. [[def-convergence-in-probability]].

[F6] Independent and identically distributed variables have a common law and are mutually independent. [[def-identically-distributed-and-iid-random-variables]].

[F7] In the rapid-tail alternative, conditional integration gives $\int\!\int y^2Q(t,dy)P_X(dt)=\mathbb E[Y^2]$. For $P_X$-almost every $t$, $m(t)^2\le\int y^2Q(t,dy)$ and $\sigma^2(t)\le\int y^2Q(t,dy)$, so $\int m^2f\le\mathbb E[Y^2]$ and $\int\sigma^2f\le\mathbb E[Y^2]$. Also $\int|m|f\le\mathbb E|Y|$. [[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]]

[A1] AC is inherited through the chosen regression version; conditional response independence is stated explicitly so every conditional covariance used below is zero.

## Proof

**Proof technique:** weighted moment limits and conditional variance formulas.

1.1 By [F3], $M_n=(nh)^{-1}\sum_iK(U_i)(1,U_i)^\mathsf T(1,U_i)\to f(x)\operatorname{diag}(1,\mu_2)$ in probability. Put $V_n=(nh)^{-1}\sum_iK(U_i)^2\sigma^2(X_i)(1,U_i)^\mathsf T(1,U_i)$. The scalar generalization proved in [F3] applies also to a continuous multiplier $\sigma^2(x-hu)$: on fixed truncated support this multiplier converges uniformly to $\sigma^2(x)$ and is bounded, and the tail expectation is bounded by $C\int_{\mathrm{tail}}|L|$. Thus, for $L=K^2$ the $(0,0)$ entry tends to $f(x)\sigma^2(x)R(K)$. In the rapid-tail alternative, local truncation remains valid. For $j=0,1,2$ the expected absolute far contribution to $V_{n,j}$ is bounded by $C h^{5-j}\int_{|z-x|>\delta}|z-x|^{j-6}\sigma^2(z)f(z)\,dz=o(1)$, since [F7] gives $\int\sigma^2f\le\mathbb EY^2$. Also $\int(1+u^2)K^2<\infty$ follows from boundedness and the rapid tail. For the local-linear conclusion, $\int(1+u^2)K^2<\infty$ permits $L=K^2u^j$, $j=0,1,2$, by the same truncation argument. All entries then converge to $f(x)\sigma^2(x)\int K^2u^{j+k}$; symmetry makes the off-diagonal limit zero. Terms with $K(U_i)=0$ are interpreted as zero. Every active response-law variance is finite almost surely; these are variances under the specified conditional response laws, without an assumption of unconditional square integrability. [given, F3, F5, F6, F7, A1, algebra]

2.1 On the event $\sum_iK(U_i)>0$, [F1], conditional response independence, and [F4] give $\operatorname{Var}(\widehat m_{\mathrm{NW},h_n}(x)\mid X_{1:n})=\dfrac{\sum_iK(U_i)^2\sigma^2(X_i)}{(\sum_iK(U_i))^2}$. Writing $M_{n,00}=(nh_n)^{-1}\sum_iK(U_i)$ and $V_{n,00}=(nh_n)^{-1}\sum_iK(U_i)^2\sigma^2(X_i)$ makes the scaled variance $V_{n,00}/M_{n,00}^2$, which converges to $f(x)\sigma^2(x)R(K)/f(x)^2$. The zero-denominator event has probability tending to zero by [F3]'s $(0,0)$ entry, so the same convergence holds with the fallback. [given, F1, F3, F4, step 1.1, algebra]

2.2 On a nonsingular local-linear design matrix, weighted least squares gives conditional variance $(nh_n)^{-1}e_0^\mathsf TM_n^{-1}V_nM_n^{-1}e_0$, where $e_0=(1,0)^\mathsf T$. The limit matrix is diagonal with entries $f(x)$ and $f(x)\mu_2$, so its inverse has first diagonal entry $1/f(x)$; the $(0,0)$ limit of $V_n$ is $f(x)\sigma^2(x)R(K)$. Matrix inversion is continuous at this invertible limit, because its entries are quotients of entries of the adjugate by the nonzero determinant. Thus the scaled conditional variance converges to $R(K)\sigma^2(x)/f(x)$. By [F3] the singular-design event has probability tending to zero, and the fallback does not change convergence in probability. [given, F2, F3, F4, F5, step 1.1, algebra]

3.1 For the extra Nadaraya–Watson clause, choose $A,\kappa>0$ with $J=\{|u|\le A,K(u)\ge\kappa\}$ of positive measure, possible since $\int K=1$. Its predictor count is binomial with success probability $p_h\asymp h$. On $G_n=\{N\ge np_h/2\}$, $T_n=n^{-1}\sum_iK(U_i)\ge c_1h$, whereas Markov's bound applied to $e^{-N}$ gives $\mathbb P(G_n^c)\le\exp(-c_2nh)$. The truncation argument of step 1.1 also proves $V_{n,00}\to f(x)\sigma^2(x)R(K)$ in $L^1$: the bounded truncated average converges in $L^2$, while the expected absolute tail is uniformly small. On $G_n$, $(T_n/h)^{-2}$ is bounded and converges in probability to $f(x)^{-2}$. It follows that the expectation of the scaled conditional variance on $G_n$ has the stated limit: separate $V_{n,00}$ into its constant limit and an $L^1$ error, and use bounded convergence in probability for the reciprocal factor. On $G_n^c$, the conditional variance is at most the active-region bound on $\sigma^2$, since the weights are nonnegative and sum to one, or the fallback is deterministic. Hence its scaled expectation is $O(nh e^{-c_2nh})\to0$ in those alternatives. Under rapid tails, the conditional variance is at most $\sum_i\sigma^2(X_i)$; the count among the other $n-1$ observations is independent of $X_i$ and is below $np_h/2$ on $G_n^c$. Its binomial lower-tail bound gives $\mathbb E[\sigma^2(X_i);G_n^c]\le\mathbb EY^2 e^{-c_3nh}$. Thus the contribution to the expected scaled conditional variance is at most $n^2h\mathbb EY^2e^{-c_3nh}$. Under the stated $nh^3\to\infty$ condition, $nh\ge n^{2/3}$ eventually, so this polynomial factor times the exponential tends to zero. [given, F1, F4, F6, step 1.1, step 2.1, algebra]

4.1 Let $A_n$ be the response-law mean of the Nadaraya–Watson fit, including its fallback, and let $m_h=\int Kmf/\int Kf$. The kernel integrals and localization or global bounds imply $m_h\to m(x)$. Put $Z_i=K(U_i)$ and $R_n=n^{-1}\sum_i Z_i(m(X_i)-m_h)$. Then $\mathbb ER_n=0$ and $\mathbb ER_n^2\le n^{-1}\mathbb E[Z_1^2(m(X_1)-m_h)^2]=o(h/n)$: after change of variables, continuity at $x$ handles a fixed compact $u$-set and the integrable $K^2$ tail is dominated by bounded $f,m$. On $G_n$, $A_n-m_h=R_n/T_n$, so its expected square is $o((nh)^{-1})$. On $G_n^c$, $A_n$ and $m_h$ are bounded in the compact/global alternatives. Under rapid tails, [F7] gives $\int m^2f<\infty$; the far part of the second-moment integral is $O(h^6)\int m^2f=o(h)$, and the leave-one-out binomial argument in step 3.1 gives $\mathbb E[A_n^2;G_n^c]\le n\mathbb EY^2e^{-c_4nh}+a_0^2\mathbb P(G_n^c)$. Its expected squared bad-event contribution is therefore negligible in all stated cases, and $\operatorname{Var}(A_n)\le\mathbb E(A_n-m_h)^2=o((nh)^{-1})$. Bounded active-region means and variances, or the bound $\widehat m^2\le\sum_iY_i^2+a_0^2$ under rapid tails, make the Nadaraya–Watson fit square-integrable. Expanding its centered square and integrating first under the response laws gives total variance equal to the expected conditional variance plus $\operatorname{Var}(A_n)$. Step 3.1 therefore proves the unconditional Nadaraya–Watson expansion. [given, F1, F4, F6, F7, step 3.1, algebra] ∎

