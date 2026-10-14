---
id: thm-local-linear-conditional-bias
kind: theorem
title: Conditional-on-design bias of the empirical local-linear estimator
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-local-polynomial-estimator
  - def-measure-with-density
  - def-identically-distributed-and-iid-random-variables
  - def-convergence-in-probability
  - lem-local-linear-normalized-moment-matrix-converges-in-probability
  - def-regression-target-version
  - cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Statement

Assume AC for the chosen regression version. Let $X_i$ be iid with density
$f$, with $f(x)>0$ at a fixed interior point $x$, and let $f,m$ be $C^2$
near $x$. Let $K$ be finite-valued Borel, nonnegative and symmetric, with
$\int K=1$, $0<\mu_2=\int u^2K<\infty$ and
$\int(1+u^2)K(u)^2\,du<\infty$. Assume either compact kernel support, or
that $f,m$ and their first two derivatives are bounded and continuous
globally. A further localization alternative, including the Gaussian kernel, is that
$\mathbb E[Y^2]<\infty$, $K$ is bounded, and
$$\lim_{A\to\infty}\sup_{|u|\ge A}|u|^3K(u)=0.$$
Under this rapid-tail alternative only the stated local smoothness of
$f,m$ is needed; no global boundedness of $m$ or of its derivatives is assumed.
Let $h_n\to0$ with $nh_n^3\to\infty$. For almost every realized design,
integrate the degree-one fit of [[def-local-polynomial-estimator]] against
the independent response laws $\prod_iQ(X_i,dy_i)$; call the resulting
finite response-law mean $b_n(x)$, with the same fixed fallback on singular
designs. Then
$$b_n(x)-m(x)=\frac{h_n^2\mu_2}{2}m''(x)+o_P(h_n^2).$$
Here $Z_n=o_P(h_n^2)$ means $Z_n/h_n^2\to0$ in probability. This is a
conditional response-law mean statement; it neither assumes nor asserts
that the estimator has an unconditional Lebesgue expectation.

## Facts & Assumptions

**Given:** The selected conditional response laws and the sampling, smoothness, kernel, tail control, bandwidth and fallback hypotheses in the statement.

[F1] A nonsingular local-polynomial fit solves the weighted normal equations. [[def-local-polynomial-estimator]].

[F2] The normalized local-linear moment matrix converges in probability to $f(x)\operatorname{diag}(1,\mu_2)$. Its scalar truncation extension for an arbitrary integrable Borel function $L$ requires globally bounded $f$ or compact support of $L$; under the rapid-tail alternative, its localization argument establishes the three matrix moments $L(u)=u^jK(u)$, $j=0,1,2$. [[lem-local-linear-normalized-moment-matrix-converges-in-probability]].

[F3] The selected Borel function gives the mean under $Q(t,dy)$ for almost every predictor. [[def-regression-target-version]].

[F4] Convergence in probability is convergence of the fixed-error event probabilities to zero. [[def-convergence-in-probability]].

[F5] For $P_X$-almost every $t$, $m(t)=\int y\,Q(t,dy)$, and conditional integration gives $\int |m(t)|f(t)\,dt\le\mathbb E|Y|<\infty$ by the triangle inequality. [[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]]

## Proof

1.1 Put $h=h_n$, $U_i=(x-X_i)/h$, $S_j=(nh)^{-1}\sum_iK(U_i)U_i^j$ and $r_h(u)=m(x-hu)-m(x)+hu m'(x)$. Then $S_0\to f(x)$, $S_2\to f(x)\mu_2$ by [F2]. Symmetry and the first-order density expansion give $\mathbb ES_1=-hf'(x)\mu_2+o(h)$; the tail is controlled by $u^2K$ under the global alternative. Also $\operatorname{Var}(S_1)\le C(nh)^{-1}\int u^2K^2$, using localization or the global density bound. In the rapid-tail alternative its local part has this bound, and the far contribution to $\operatorname{Var}(S_1)$ is at most $C h^2n^{-1}\int_{|z-x|>\delta}f(z)|z-x|^{-4}\,dz$, hence no larger than $O((nh)^{-1})$. Since $nh^3\to\infty$, $(S_1-\mathbb ES_1)/h\to0$ in probability by the variance bound, so $S_1=O_P(h)$. [given, F2, F4, algebra]

2.1 Set $R_j=(nh)^{-1}\sum_iK(U_i)U_i^jr_h(U_i)$. Taylor's integral formula gives $|r_h(u)|\le Ch^2u^2$ and $r_h(u)/h^2\to\tfrac12m''(x)u^2$. The truncation proof of [F2] applies to this varying integrand: on any fixed set where $|u|$ and $K(u)$ are bounded it converges uniformly, its average has variance $O_A((nh)^{-1})$, and the absolute tail expectation is at most $C\int_{\mathrm{tail}}u^2K$. Hence $R_0/h^2\to\tfrac12m''(x)f(x)\mu_2$ in probability. Furthermore $|r_h(u)|\le Ch|u|$ and $r_h(u)/(h|u|)\to0$ pointwise. Splitting the integral as before gives $\mathbb E|R_1|/h\le\int K(u)|u||r_h(u)|f(x-hu)/h\,du\to0$. Markov's bound yields $R_1=o_P(h)$. Under the rapid-tail alternative [F5] gives $\int|m|f<\infty$; first apply these arguments on $|X_i-x|\le\delta$. For the far part put $\epsilon_h=\sup_{|u|\ge\delta/h}|u|^3K(u)\to0$ and expand $r=m(z)-m(x)-m'(x)(z-x)$. Its expected absolute contributions to $R_0/h^2$ and $R_1/h$ are bounded by $C_\delta\epsilon_h\int(1+|m|)f\to0$. The same tail estimate gives the stated expectation expansion for $S_1$. Thus all limits hold without global smoothness. [given, F2, F4, F5, step 1.1, algebra]

3.1 On a nonsingular design, [F1] and [F3] give $b_n-m(x)=(S_2R_0-S_1R_1)/(S_0S_2-S_1^2)$, since the constant and slope terms cancel exactly in the intercept. Steps 1.1–2.1 give $S_1R_1=o_P(h^2)$, and the denominator tends to $f(x)^2\mu_2>0$. Division gives the claimed coefficient. The singular-design event has probability tending to zero by [F2]; even after scaling by $h^{-2}$ the probability of any nonzero fallback contribution is at most that event probability, so it does not change convergence in probability. This argument integrates the response law separately for each design and never interchanges an undefined unconditional signed expectation. [given, F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎
