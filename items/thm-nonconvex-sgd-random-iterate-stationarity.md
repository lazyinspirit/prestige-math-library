---
id: thm-nonconvex-sgd-random-iterate-stationarity
kind: theorem
title: "Nonconvex SGD weighted random-iterate stationarity"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-stochastic-gradient-descent
  - lem-sgd-trajectory-integrability
  - lem-independent-finite-random-index-extension
  - def-axiom-of-choice
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-random-element-and-real-random-variable
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-variance
  - lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-tower-property-of-conditional-expectation
  - def-martingale-difference-sequence
  - lem-l-smoothness-descent-inequality
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-stochastic-gradient-nonconvex-randomized-iterate-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Saeed Ghadimi and Guanghui Lan, Stochastic First- and Zeroth-Order Methods for Nonconvex Stochastic Programming, §2.1, Theorem 2.1(a) and proof"
      url: "https://arxiv.org/pdf/1309.5549"
      locator: "RSG update, Assumption A1, Theorem 2.1(a), equations (2.8)–(2.11), and Corollary 2.2, PDF pp. 4–7"
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, §4.3"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "Theorem 4.8 and fixed-step uniform-iterate interface, PDF pp. 32–34"
    - title: "MIT 6.7220/15.084 Nonlinear Optimization, Lecture 15: Stochastic Gradient Descent"
      url: "https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec15.pdf"
      locator: "Theorem L15.1 and finite-horizon nonconvex stationarity derivation, PDF pp. 3–4"

---

## Statement

Assume AC. Let $d\ge1$, $L>0$, $\sigma\ge0$, and let $f:\mathbb R^d\to\mathbb R$ be continuously differentiable with $L$-Lipschitz gradient and finite global infimum $f^*=\inf_{x\in\mathbb R^d}f(x)\in\mathbb R$; the infimum need not be attained. Start at a deterministic $x_1$ and, on a discrete filtered probability space $(\Omega,\mathcal F,(\mathcal F_k)_{k\ge0},P)$, run stochastic gradient descent for an integer horizon $N\ge1$ with square-integrable oracle vectors $G_k$, adapted iterates $x_k$, and updates $x_{k+1}=x_k-\gamma_kG_k$. Suppose, almost surely for $k=1,\ldots,N$,
$$\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k),\qquad \operatorname{Var}(G_k\mid\mathcal F_k)\le\sigma^2,$$
where the conditional variance of a vector is the sum of the coordinate conditional variances, and let $0<\gamma_k<2/L$. Put $a_k=2\gamma_k-L\gamma_k^2$, $S_N=\sum_{k=1}^Na_k$, and $D_f:=\sqrt{2(f(x_1)-f^*)/L}\ge0$, so $D_f^2=2(f(x_1)-f^*)/L$. On an independent finite probability-space extension, choose $R\in\{1,\ldots,N\}$ with $P(R=k)=a_k/S_N$ and output $x_R$. Then $S_N>0$ and
$$\frac1L\mathbb E\|\nabla f(x_R)\|_2^2\le\frac{D_f^2+\sigma^2\sum_{k=1}^N\gamma_k^2}{\sum_{k=1}^N(2\gamma_k-L\gamma_k^2)}.$$

If $D_f>0$ and $\sigma>0$, the constant choice $\gamma_k=\min\{1/L,D_f/(\sigma\sqrt N)\}$ gives
$$\frac1L\mathbb E\|\nabla f(x_R)\|_2^2\le\frac{2LD_f^2}{N}+\frac{2D_f\sigma}{\sqrt N}.$$
If $\sigma=0$, the choice $\gamma_k=1/L$ gives the bound $LD_f^2/N$. If $D_f=0<\sigma$, the choice $\gamma_k=1/(L\sqrt N)$ gives $\sigma^2/[L(2\sqrt N-1)]$. Thus the constant-step guarantee is $O(N^{-1}+N^{-1/2})$ for fixed $L,D_f,\sigma$, with the zero cases covered separately. No global-minimum or iterate-convergence conclusion is asserted.

## Facts & Assumptions

**Given:** AC; the smooth objective, deterministic initial point, filtered SGD trajectory, square-integrable oracle, conditional unbiasedness and variance assumptions, and the stepsize range in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the conditional-expectation classes used in the oracle assumptions and proof.

[A2] The local conditional-unbiasedness hypothesis is $\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k)$ almost surely.

[A3] The local conditional-variance hypothesis is $\operatorname{Var}(G_k\mid\mathcal F_k)\le\sigma^2$ almost surely.

[A4] The global lower-bound hypothesis is $f(x)\ge f^*$ for every $x\in\mathbb R^d$; no minimizer is required.

[F1] [[alg-stochastic-gradient-descent]]: the update is $x_{k+1}=x_k-\gamma_kG_k$.

[F2] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: conditional oracle moments are coordinatewise, and the vector second moment is conditional squared mean plus conditional variance.

[F3] [[def-filtration-and-filtered-probability-space]] and [[def-adapted-and-integrable-stochastic-process]]: $x_k$ is $\mathcal F_k$-measurable and $G_k$ is $\mathcal F_{k+1}$-measurable.

[F4] [[def-random-element-and-real-random-variable]]: vector iterates and oracle outputs are measurable maps into $\mathbb R^d$.

[F5] [[def-conditional-expectation-as-an-ae-class]]: conditional expectations are almost-sure classes under AC.

[F6] [[def-conditional-variance]] and [[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]]: the coordinate variance formula gives the vector conditional second-moment identity.

[F7] [[def-martingale-difference-sequence]]: each coordinate of $G_k-\mathbb E[G_k\mid\mathcal F_k]$, with the filtration shifted by one index, is a martingale difference.

[F8] [[lem-sgd-trajectory-integrability]]: finite-horizon iterates, gradients, and objective values are integrable.

[F9] [[lem-l-smoothness-descent-inequality]]: $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(L/2)\|y-x\|_2^2$.

[F10] [[thm-taking-out-what-is-known]]: an integrable measurable factor may be taken outside conditional expectation when the products are integrable.

[F11] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and order preserving and preserves ordinary expectation.

[F12] [[thm-tower-property-of-conditional-expectation]]: nested conditional expectations satisfy the tower identity.

[F13] [[lem-independent-finite-random-index-extension]]: a finite index with weights summing to one can be added independently, and $\mathbb E[H_R]=\sum_kP(R=k)\mathbb E[H_k]$ for integrable $H_k$.

[F14] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: norms and inner products use the Euclidean convention and satisfy Cauchy–Schwarz.

[F15] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is integration and is finite for integrable real random variables.

## Proof

1.1 Fix $k$ and put $g_k=\nabla f(x_k)$ and $\varepsilon_k=G_k-g_k$. The filtration and adapted-process convention [F3] puts $x_k$ and $G_k$ at their stated time indices, and [F4] records their random-element measurability. Under AC [A1], the conditional-expectation classes used here are the almost-sure classes in [F5]. By [F8], the objective values, gradients, and directions used in the descent calculation are integrable. The residual $\varepsilon_k$ has conditional mean zero given $\mathcal F_k$; after shifting the filtration by one index, its coordinates form martingale differences by [F3, F7]. The conditional variance identity [F2, F6] and [A3] yield $\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]=\|g_k\|_2^2+\operatorname{Var}(G_k\mid\mathcal F_k)\le\|g_k\|_2^2+\sigma^2$. [A1, A2, A3, F2, F3, F4, F5, F6, F7, F8, given, algebra]

2.1 Apply the smoothness inequality [F9] to $x_{k+1}=x_k-\gamma_kG_k$ and condition on $\mathcal F_k$. The products are integrable because $2|g_{k,j}G_{k,j}|\le g_{k,j}^2+G_{k,j}^2$ coordinatewise, with finite expectations by [F8]. Take the $\mathcal F_k$-measurable gradient factor outside conditional expectation by [F10], then use [A2], [F11], and step 1.1 to obtain $\mathbb E[f(x_{k+1})\mid\mathcal F_k]\le f(x_k)-\left(\gamma_k-\frac{L}{2}\gamma_k^2\right)\|g_k\|_2^2+\frac{L\gamma_k^2\sigma^2}{2}$. [A1, A2, A3, F1, F8, F9, F10, F11, F14, F15, step 1.1, algebra]

3.1 Take ordinary expectations in step 2.1 using the tower property [F11, F12], and sum from $k=1$ to $N$. The objective terms telescope; by [A4], $\mathbb E f(x_{N+1})\ge f^*$. Therefore $\sum_{k=1}^N\left(\gamma_k-\frac{L}{2}\gamma_k^2\right)\mathbb E\|g_k\|_2^2\le f(x_1)-f^*+\frac{L\sigma^2}{2}\sum_{k=1}^N\gamma_k^2$. Multiplying by $2$ gives $\sum_{k=1}^Na_k\mathbb E\|g_k\|_2^2\le2(f(x_1)-f^*)+L\sigma^2\sum_{k=1}^N\gamma_k^2$. [A4, F11, F12, F15, step 2.1, given, algebra]

4.1 Since $a_k=\gamma_k(2-L\gamma_k)>0$, $S_N>0$ and $(a_k/S_N)_{k=1}^N$ is a probability vector. Apply [F13] to the integrable random variables $H_k=\|g_k\|_2^2$; it gives $\mathbb E\|\nabla f(x_R)\|_2^2=S_N^{-1}\sum_ka_k\mathbb E\|g_k\|_2^2$. Dividing step 3.1's bound by $LS_N$ yields the claimed weighted estimate. [F8, F13, step 3.1, given, algebra]

5.1 Suppose $D_f,\sigma>0$ and set $\gamma=\min\{1/L,D_f/(\sigma\sqrt N)\}$. If $\gamma=D_f/(\sigma\sqrt N)\le1/L$, then $2\gamma-L\gamma^2\ge\gamma$ and $D_f^2+N\sigma^2\gamma^2=2D_f^2$, so the weighted bound is at most $2D_f\sigma/\sqrt N$. If $\gamma=1/L$, the bound equals $LD_f^2/N+\sigma^2/L$, and the clipping condition implies $\sigma^2/L\le LD_f^2/N$, giving at most $2LD_f^2/N$. Thus it is bounded by the stated sum of the two terms. If $\sigma=0$, use $\gamma=1/L$ in the formula to obtain $LD_f^2/N$. If $D_f=0<\sigma$, use $\gamma=1/(L\sqrt N)$; then $S_N=(2\sqrt N-1)/L$ and the right side is $\sigma^2/[L(2\sqrt N-1)]$. These cases prove the asserted constant-step rate and handle the zero boundaries. [step 3.1, given, algebra] ∎

## Remarks

With constant $\gamma_k=\alpha\le1/L$, all weights $a_k$ are equal, so $R$ is uniform. The published uniform-index theorem covers this exact regime under its global lower-bound and square-integrable conditional-oracle hypotheses and gives $\mathbb E\|\nabla f(x_R)\|_2^2\le2(f(x_1)-f^*)/(\alpha N)+L\alpha\sigma^2$. The weighted statement above retains the nonuniform stepsizes and the full interval $0<\gamma_k<2/L$.

## Remarks references

[[thm-stochastic-gradient-nonconvex-randomized-iterate-bound|Published constant-step uniform-random-iterate theorem]]: its exact oracle hypotheses and bound are the comparison interface stated above.
