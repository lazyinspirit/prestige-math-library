---
id: thm-local-linear-population-bias
kind: theorem
title: Pointwise population bias of local-linear regression
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-local-polynomial-estimator
  - def-measure-with-density
  - def-regression-target-version
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
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Statement

Assume AC for the chosen regression version [[def-regression-target-version]].
Let $X$ have density $f$, with $f(x)>0$ at a fixed interior point $x$,
and let $f,m$ be $C^2$ near $x$. Let $K$ be a finite-valued Borel,
nonnegative symmetric kernel with $\int K=1$,
$0<\mu_2=\int u^2K(u)\,du<\infty$ and $\int K^2<\infty$.
Assume either compact kernel support, or that $f,m$ and their first two
derivatives are bounded and continuous on $\mathbb R$.
A further localization alternative, including the Gaussian kernel, is that
$\mathbb E[Y^2]<\infty$, $K$ is bounded, and
$$\lim_{A\to\infty}\sup_{|u|\ge A}|u|^3K(u)=0.$$
Under this rapid-tail alternative only the stated local smoothness of
$f,m$ is needed; no global boundedness of $m$ or of its derivatives is assumed.
Set
$$S_j(h)=\int K(u)u^j f(x-hu)\,du,\qquad T_j(h)=\int K(u)u^j f(x-hu)m(x-hu)\,du.$$
For sufficiently small $h$, $D_h=S_0S_2-S_1^2>0$ and the population
local-linear intercept, in the coordinates of [[def-local-polynomial-estimator]], is
$$m_{\mathrm{LL},h}(x)=\frac{S_2T_0-S_1T_1}{D_h}.$$
Then
$$m_{\mathrm{LL},h}(x)-m(x)=\frac{h^2\mu_2}{2}m''(x)+o(h^2).$$
This requires no fourth kernel moment.

## Facts & Assumptions

**Given:** The density, selected version, kernel moments and localization or global domination hypotheses in the statement.

[F1] The local-polynomial fit returns the intercept of the weighted normal equations on a nonsingular design. [[def-local-polynomial-estimator]].

[F2] The selected regression function is a Borel conditional-mean version. [[def-regression-target-version]].

[F3] A density supplies its integration law $f\,d\lambda$. [[def-measure-with-density]].

[F4] For $P_X$-almost every $t$, $m(t)=\int y\,Q(t,dy)$, and conditional integration gives $\int |m(t)|f(t)\,dt\le\mathbb E|Y|<\infty$ by the triangle inequality. [[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]]

## Proof

1.1 Write $r_h(u)=m(x-hu)-m(x)+hu m'(x)$. Taylor's integral formula bounds $|r_h(u)|\le C h^2u^2$ and gives $r_h(u)/h^2\to\tfrac12m''(x)u^2$ pointwise. It also gives $|r_h(u)|\le C h|u|$ and $r_h(u)/(h|u|)\to0$ for each nonzero $u$. These bounds hold on compact kernel support for small $h$, or globally under the alternative assumptions. With $R_j=\int K(u)u^jf(x-hu)r_h(u)\,du$, splitting at a fixed $|u|\le A$ and controlling the tails by $\int_{|u|>A}u^2K(u)\,du$ proves $R_0=\tfrac12h^2m''(x)f(x)\mu_2+o(h^2)$ and $R_1=o(h)$. The same split yields $S_0\to f(x)$, $S_2\to f(x)\mu_2$; symmetry and the first-order expansion of $f$ give $S_1=-h f'(x)\mu_2+o(h)=O(h)$. In the rapid-tail alternative [F4] gives $\int|m|f<\infty$. Write $z=x-hu$ and split at $|z-x|=\delta$. The far parts of $S_0,S_1,S_2$ are respectively $o(h^2),o(h),o(1)$, since $K((x-z)/h)\le\epsilon_hh^3/|x-z|^3$ and $\int f=1$. The far parts of $R_0,R_1$ are $o(h^2),o(h)$: expand $r=m(z)-m(x)-m'(x)(z-x)$ and use $\int |m|f<\infty$ with $|z-x|\ge\delta$. On the near region the preceding local bounds and the integrable $u^2K$ apply; letting $\delta\to0$ after $h\to0$ gives the same remainder limits. These estimates also make every stated integral finite. [given, F2, F3, F4, algebra]

2.1 The determinant tends to $f(x)^2\mu_2>0$. Since $T_j=m(x)S_j-hm'(x)S_{j+1}+R_j$ for $j=0,1$, the affine terms in the intercept cancel exactly and $m_{\mathrm{LL},h}(x)-m(x)=(S_2R_0-S_1R_1)/D_h$. Step 1.1 makes $S_1R_1=o(h^2)$ and gives the asserted coefficient after division by the positive limiting determinant. [given, F1, step 1.1, algebra] ∎
