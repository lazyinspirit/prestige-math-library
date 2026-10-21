---
id: thm-stochastic-direction-expected-average-stationarity
kind: theorem
title: "Expected-average stationarity under aligned stochastic directions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-stochastic-gradient-descent
  - lem-sgd-trajectory-integrability
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
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, Assumptions 4.1/4.3 and Theorems 4.8/4.10"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "§§4.1 and 4.3, Assumptions 4.1/4.3, Lemmas 4.2/4.4 and proofs, Theorems 4.8/4.10 and proofs, PDF pp. 21–34"
    - title: "MIT 6.7220/15.084 Nonlinear Optimization, Lecture 15: Stochastic Gradient Descent"
      url: "https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec15.pdf"
      locator: "Theorem L15.1 and the nonconvex expected-average stationarity derivation, PDF pp. 3–4"

---

## Statement

Assume AC. Let $d\ge1$, $L>0$, and let $f:\mathbb R^d\to\mathbb R$ be continuously differentiable with $L$-Lipschitz gradient. On a discrete filtered probability space $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0},P)$, start at a deterministic $x_1$ and run stochastic gradient descent with square-integrable directions $G_t$, adapted iterates $x_t$, and updates $x_{t+1}=x_t-\alpha_tG_t$. For each $t\ge1$, put $g_t=\nabla f(x_t)$ and $m_t=\mathbb E[G_t\mid\mathcal F_t]$, with conditional expectations interpreted coordinatewise almost surely. Let the conditional variance of a vector be the sum of its coordinate conditional variances. Suppose there are constants $\mu_G\ge\mu>0$, $M\ge0$, $M_V\ge0$, and $F_{\inf}\in\mathbb R$ such that, almost surely for every $t$,
$$\langle g_t,m_t\rangle\ge\mu\|g_t\|_2^2,\qquad \|m_t\|_2\le\mu_G\|g_t\|_2,\qquad \operatorname{Var}(G_t\mid\mathcal F_t)\le M+M_V\|g_t\|_2^2,\qquad f(x_t)\ge F_{\inf}.$$
Set $M_G=M_V+\mu_G^2>0$.

If the stepsize is constant, $\alpha_t=\alpha$ with $0<\alpha\le\mu/(LM_G)$, then for every integer $T\ge1$,
$$\mathbb E\left[\frac1T\sum_{t=1}^T\|\nabla f(x_t)\|_2^2\right]\le\frac{\alpha LM}{\mu}+\frac{2(f(x_1)-F_{\inf})}{T\mu\alpha}.$$

If instead the deterministic stepsizes satisfy $\alpha_t>0$, $\sum_{t=1}^{\infty}\alpha_t=\infty$, and $\sum_{t=1}^{\infty}\alpha_t^2<\infty$, then, with $A_T=\sum_{t=1}^T\alpha_t$,
$$\mathbb E\left[\frac1{A_T}\sum_{t=1}^T\alpha_t\|\nabla f(x_t)\|_2^2\right]\longrightarrow0\qquad(T\to\infty).$$
Conditional unbiasedness is the special case $\mu=\mu_G=1$; a uniform conditional-variance bound $\sigma^2$ then gives $M=\sigma^2$ and $M_V=0$. No convexity or minimizer attainment is assumed.

## Facts & Assumptions

**Given:** AC; the objective, filtered process, SGD updates, conditional direction moments, pathwise lower bound, and either stepsize regime in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the conditional-expectation classes used in this theorem.

[A2] The local alignment hypothesis is $\langle g_t,m_t\rangle\ge\mu\|g_t\|_2^2$ almost surely, with $\mu>0$.

[A3] The local conditional-mean norm hypothesis is $\|m_t\|_2\le\mu_G\|g_t\|_2$ almost surely, with $\mu_G\ge\mu$.

[A4] The local conditional-variance hypothesis is $\operatorname{Var}(G_t\mid\mathcal F_t)\le M+M_V\|g_t\|_2^2$ almost surely, with $M,M_V\ge0$.

[A5] The objective lower bound is $f(x_t)\ge F_{\inf}$ almost surely at each iterate.

[F1] [[alg-stochastic-gradient-descent]]: the algorithm uses $x_{t+1}=x_t-\alpha_tG_t$ and imposes no moment or unbiasedness conclusion by itself.

[F2] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: oracle vectors are adapted; conditional means and vector conditional variances are coordinatewise; the second-moment identity is $\mathbb E[\|G_t\|_2^2\mid\mathcal F_t]=\|m_t\|_2^2+\operatorname{Var}(G_t\mid\mathcal F_t)$.

[F3] [[def-filtration-and-filtered-probability-space]]: $\mathcal F_t\subseteq\mathcal F_{t+1}\subseteq\mathcal F$.

[F4] [[def-adapted-and-integrable-stochastic-process]]: an adapted vector process is measurable at its stated time, and integrability is timewise.

[F5] [[def-random-element-and-real-random-variable]]: a vector-valued random element is a measurable map into $\mathbb R^d$.

[F6] [[def-conditional-expectation-as-an-ae-class]]: under AC, conditional expectations are almost-sure classes and their equalities are almost-sure equalities.

[F7] [[def-conditional-variance]] and [[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]]: conditional variance is the sum of coordinate variances and yields the vector second-moment identity in [F2].

[F8] [[def-martingale-difference-sequence]]: an integrable adapted sequence with conditional mean zero at the preceding filtration time is a martingale-difference sequence.

[F9] [[lem-l-smoothness-descent-inequality]]: $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(L/2)\|y-x\|_2^2$.

[F10] [[thm-taking-out-what-is-known]]: an integrable product with a finite measurable factor may be taken outside conditional expectation when both products are integrable.

[F11] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear, preserves order, and preserves ordinary expectation.

[F12] [[thm-tower-property-of-conditional-expectation]]: nested conditional expectations satisfy the tower identity.

[F13] [[def-euclidean-inner-product]]: the inner product and norm are the coordinatewise Euclidean ones.

[F14] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ and the Euclidean norm satisfies the triangle inequality.

[F15] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is the Lebesgue integral, finite for integrable real random variables.

[F16] [[lem-sgd-trajectory-integrability]]: finite-horizon SGD iterates, their gradients, and objective values have the integrability needed for conditional expectations and telescoping.

## Proof

1.1 Fix $t\ge1$ and write $g_t=\nabla f(x_t)$, $m_t=\mathbb E[G_t\mid\mathcal F_t]$, and $\varepsilon_t=G_t-m_t$. The filtration and adapted-process conventions [F3, F4], together with the random-element convention [F5], make the time-indexed measurability explicit. By [F16], the objective values, gradients, and oracle vectors used below are integrable. The vector $\varepsilon_t$ is $\mathcal F_{t+1}$-measurable and has conditional mean zero given $\mathcal F_t$, so each coordinate, after shifting the filtration to $\mathcal H_n=\mathcal F_{n+1}$, is a martingale difference by [F8]. The conditional variance identity [F2, F7] and [A3]–[A4] give $\mathbb E[\|G_t\|_2^2\mid\mathcal F_t]=\|m_t\|_2^2+\operatorname{Var}(G_t\mid\mathcal F_t)\le M+(M_V+\mu_G^2)\|g_t\|_2^2=M+M_G\|g_t\|_2^2$. [A1, A3, A4, F2, F3, F4, F5, F6, F7, F8, F15, F16, given, algebra]

2.1 Apply [F9] with $x=x_t$ and $y=x_{t+1}=x_t-\alpha_tG_t$, condition on $\mathcal F_t$, and use [F10] to take the $\mathcal F_t$-measurable gradient factor outside. Each coordinate product is integrable because $2|g_{t,j}G_{t,j}|\le g_{t,j}^2+G_{t,j}^2$, with finite expectations by [F16] and the stated oracle moments. Conditional linearity and order [F11] give $\mathbb E[f(x_{t+1})\mid\mathcal F_t]\le f(x_t)-\alpha_t\langle g_t,m_t\rangle+\frac{L\alpha_t^2}{2}\mathbb E[\|G_t\|_2^2\mid\mathcal F_t]\le f(x_t)-\left(\mu\alpha_t-\frac{LM_G\alpha_t^2}{2}\right)\|g_t\|_2^2+\frac{LM\alpha_t^2}{2}$. All remaining terms are integrable by [F15]–[F16] and the second-moment bound in step 1.1. [A1, A2, A3, A4, F1, F9, F10, F11, F13, F14, F15, F16, step 1.1, algebra]

3.1 For constant $\alpha\le\mu/(LM_G)$, $\mu\alpha-LM_G\alpha^2/2\ge\mu\alpha/2$. Take ordinary expectations in step 2.1, using [F11]–[F12], and sum from $t=1$ to $T$. The objective terms telescope and [A5] gives $\frac{\mu\alpha}{2}\sum_{t=1}^T\mathbb E\|g_t\|_2^2\le f(x_1)-F_{\inf}+\frac{L\alpha^2MT}{2}$. Divide by $T\mu\alpha/2$ to obtain the stated constant-step average bound. [A5, F11, F12, F15, F16, step 2.1, given, algebra]

4.1 In the diminishing-step regime, $\sum_t\alpha_t^2<\infty$ implies $\alpha_t\to0$: otherwise some $\epsilon>0$ would satisfy $\alpha_t\ge\epsilon$ at infinitely many indices, forcing the square sum to diverge. Since $\mu/(LM_G)>0$, choose $K$ so that $\alpha_t\le\mu/(LM_G)$ for every $t\ge K$. Apply step 2.1 on this tail, take expectations, and telescope through $T\ge K$; then $\frac\mu2\sum_{t=K}^T\alpha_t\mathbb E\|g_t\|_2^2\le\mathbb E f(x_K)-F_{\inf}+\frac{LM}{2}\sum_{t=K}^T\alpha_t^2$. The right side is bounded independently of $T$ by [F15], [F16], and square summability. The omitted finite prefix has finite weighted sum by [F16]. Thus $\sum_{t=1}^T\alpha_t\mathbb E\|g_t\|_2^2$ stays bounded while $A_T=\sum_{t=1}^T\alpha_t\to\infty$. Their ratio tends to zero, which is the claimed expectation of the weighted average because each $\alpha_t$ is deterministic. [A1, A2, A3, A4, A5, F11, F12, F15, F16, step 2.1, choose, algebra] ∎

