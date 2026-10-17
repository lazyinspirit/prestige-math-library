---
id: thm-stochastic-gradient-biased-noise-floor
kind: theorem
title: "Biased SGD has an explicit weighted stationarity floor"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - lem-l-smoothness-descent-inequality
  - def-conditional-variance
  - lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induction-principle
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018), §§4.1 and 4.3"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "§4.1, first- and second-moment assumptions; §4.3, nonconvex fixed-step descent and telescoping"
---

## Statement

Assume AC. Let $f:\mathbb R^d\to\mathbb R$ have $L$-Lipschitz gradient for $L>0$ and satisfy $f(x)\ge f_{\inf}$ for a real lower bound $f_{\inf}$. Run the unconstrained update of [[def-stochastic-gradient-oracle-and-unconstrained-update]] from square-integrable $x_0$ with deterministic steps $0<\alpha_k\le1/(4L)$. Suppose
$$\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k)+b_k,\qquad \|b_k\|_2\le\beta_k,\qquad \operatorname{Var}(G_k\mid\mathcal F_k)\le\sigma_k^2$$
almost surely, where $b_k$ is $\mathcal F_k$-measurable and $\beta_k,\sigma_k$ are deterministic nonnegative bounds. For $N\ge1$ and $\Delta=\mathbb E f(x_0)-f_{\inf}<\infty$,
$$\frac{\sum_{k=0}^{N-1}\alpha_k\mathbb E\|\nabla f(x_k)\|_2^2}{\sum_{k=0}^{N-1}\alpha_k}\le \frac{2\Delta+2\sum_{k<N}\alpha_k\beta_k^2+2L\sum_{k<N}\alpha_k^2\beta_k^2+L\sum_{k<N}\alpha_k^2\sigma_k^2}{\sum_{k<N}\alpha_k}.$$
In particular, for constant $\alpha,\beta,\sigma$ the uniform average is at most
$$\frac{2\Delta}{\alpha N}+\frac52\beta^2+L\alpha\sigma^2,$$
and therefore
$$\limsup_{N\to\infty}\frac1N\sum_{k=0}^{N-1}\mathbb E\|\nabla f(x_k)\|_2^2\le\frac52\beta^2+L\alpha\sigma^2.$$
Decreasing steps retain the displayed weighted bias and noise sums.

## Facts & Assumptions

**Given:** AC; the smooth objective, lower bound, update, conditional mean and variance conditions in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the conditional-expectation classes.

[F1] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: the update is $x_{k+1}=x_k-\alpha_kG_k$, with conditional mean and vector variance defined coordinatewise.

[F2] [[lem-l-smoothness-descent-inequality]]: $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(L/2)\|y-x\|_2^2$.

[F3] [[def-conditional-variance]] and [[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]]: vector second moment equals squared conditional mean plus the sum of coordinate conditional variances.

[F4] [[thm-taking-out-what-is-known]]: an integrable finite measurable factor may be taken outside conditional expectation when the products are integrable.

[F5] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and preserves ordinary expectation.

[F6] [[def-euclidean-inner-product]]: $\|u\|_2^2=\langle u,u\rangle$.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$, and the Euclidean norm satisfies the triangle inequality.

[F8] [[thm-induction-principle]]: a property true at the first index and inherited by each successor holds at every natural index.

## Proof

1.1 By the oracle definition [F1], each $G_k$ used in the conditional variance is square-integrable. Since $x_0$ is square-integrable and each deterministic step is finite, the update and [F8] give square-integrable $x_k$ for every finite $k$ by induction. The Lipschitz gradient and the triangle inequality in [F7] make $g_k=\nabla f(x_k)$ square-integrable. Applying [F2] at $0,x_k$, and using [F7] and $2ab\le a^2+b^2$, gives $|f(x_k)|\le C(1+\|x_k\|_2^2)$ for a finite constant $C$ depending on $f(0),\nabla f(0),L,f_{\inf}$; thus the objective values are integrable. Write $\bar G_k=\mathbb E[G_k\mid\mathcal F_k]=g_k+b_k$. By [F3] and the bias bound, $\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]=\|\bar G_k\|_2^2+\operatorname{Var}(G_k\mid\mathcal F_k)\le\|g_k+b_k\|_2^2+\sigma_k^2.$ The conditional products are integrable by the square-integrable oracle and the stated moment hypotheses. [A1, F1, F2, F3, F4, F5, F6, F7, F8, given, algebra, induction]

2.1 Apply [F2] to $x_{k+1}=x_k-\alpha_kG_k$, condition on $\mathcal F_k$, and use step 1.1. Expanding $\|g_k+b_k\|_2^2$ gives $\mathbb E[f(x_{k+1})\mid\mathcal F_k]\le f(x_k)-\alpha_k(1-L\alpha_k/2)\|g_k\|_2^2-\alpha_k(1-L\alpha_k)\langle g_k,b_k\rangle+\frac{L\alpha_k^2}{2}(\beta_k^2+\sigma_k^2).$ [A1, F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 Put $q=L\alpha_k\le1/4$. By [F7] and $(\|g_k\|_2/2-(1-q)\beta_k)^2\ge0$, $(1-q)\|g_k\|_2\beta_k\le\frac14\|g_k\|_2^2+(1-q)^2\beta_k^2.$ Use this to bound the possibly positive cross term in step 2.1. Its gradient coefficient is at most $-\alpha_k(3/4-q/2)\le-\alpha_k/2$, and the bias terms are at most $\alpha_k\beta_k^2+L\alpha_k^2\beta_k^2$. Hence $\mathbb E[f(x_{k+1})\mid\mathcal F_k]\le f(x_k)-\frac{\alpha_k}{2}\|g_k\|_2^2+\alpha_k\beta_k^2+L\alpha_k^2\beta_k^2+\frac{L\alpha_k^2}{2}\sigma_k^2.$ [F7, step 2.1, given, algebra]

4.1 Take ordinary expectations and sum step 3.1 from $k=0$ to $N-1$. The objective terms telescope and $\mathbb E f(x_N)\ge f_{\inf}$, giving $\frac12\sum_{k<N}\alpha_k\mathbb E\|g_k\|_2^2\le\Delta+\sum_{k<N}\alpha_k\beta_k^2+L\sum_{k<N}\alpha_k^2\beta_k^2+\frac{L}{2}\sum_{k<N}\alpha_k^2\sigma_k^2.$ Multiply by $2$ and divide by $\sum_{k<N}\alpha_k>0$ to obtain the weighted bound. [F5, step 3.1, given, algebra]

5.1 For constant $\alpha,\beta,\sigma$, divide the numerator in step 4.1 by $N\alpha$; the result is $2\Delta/(\alpha N)+2\beta^2+2L\alpha\beta^2+L\alpha\sigma^2$. Since $L\alpha\le1/4$, this is at most $2\Delta/(\alpha N)+(5/2)\beta^2+L\alpha\sigma^2$. Taking the upper limit as $N\to\infty$ proves the displayed limit-superior bound. [step 4.1, given, algebra] ∎

