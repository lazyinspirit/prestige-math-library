---
id: lem-huber-matrix-depth-estimator-operator-error
kind: lemma
title: Operator error bound for the Gaussian Huber matrix-depth estimator
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-matrix-depth-covariance-estimator
  - def-huber-covariance-model
  - def-bounded-spectrum-covariance-class
  - def-block-sparse-covariance-class
  - lem-matrix-depth-maximizer-exists-on-compact-classes
  - lem-scaled-gaussian-covariance-has-depth-at-least-half
  - lem-projection-slab-uniform-deviation
  - lem-matrix-depth-gaussian-scale-constant-exists-uniquely
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - cor-mean-value-theorem
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-axiom-of-choice
  - def-measurable-function-between-measurable-spaces
  - thm-composition-with-borel-functions-preserves-measurability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: AC is inherited through the Gaussian Huber model. The comparison proof takes a Borel statistic as input and adds no choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, Theorem 7.1 and proofs of Theorems 3.1 and 3.6"
      url: "https://arxiv.org/pdf/1506.00691"
dependency_level: 5
---

## Statement

Let $X_1,\ldots,X_n$ be independent with common law
$P_{\epsilon,\Sigma,Q}$ from [[def-huber-covariance-model]], where
$\Sigma\in\mathcal F_p(M)$, $0\le\epsilon<1/5$, $Q$ is arbitrary, and
$M>0$ is fixed. Let $\widehat\Gamma$ be a Borel measurable positive semidefinite symmetric matrix-valued statistic satisfying
$$D_U(\widehat\Gamma,P_n)\ge D_U(\beta\Sigma,P_n)$$
for every sample. This includes every measurable global maximizer and every measurable maximizer over a compact search class containing $\beta\Sigma$. For a direction family
$U=\bigcup_{j=1}^mV_{S_j}$ with $m\ge1$, nonempty $S_j\subseteq[p]$, integer
$r\ge1$, and $|S_j|\le r$, assume $0<\delta<1/2$ and
$C_1(r+\log(m/\delta))/n<1$ for a sufficiently large universal $C_1$.
Then, uniformly over $Q$ and $\Sigma$,
$$\sup_{u\in U}|u^T(\widehat\Gamma/\beta-\Sigma)u| \le C_M\left(\epsilon+\sqrt{\frac{r+\log(m/\delta)}n}\right)$$
with probability at least $1-2\delta$. Here $C_M$ depends only on the
fixed spectrum bound $M$.

This is a comparison bound. Existence of selectors is separate from this argument; the dense and block-sparse global and bounded-class selectors are proved in the local selection lemma.

## Facts & Assumptions

**Given:** The Gaussian Huber model, a Borel measurable positive semidefinite statistic satisfying the displayed empirical-depth comparison,
and the sample-size and confidence conditions in the Statement.

[F1] [[def-matrix-depth-covariance-estimator]]: empirical depth uses both weak tails. The displayed comparison premise applies in particular to a global maximizer or to a maximizer over a class containing $\beta\Sigma$.

[F2] [[lem-scaled-gaussian-covariance-has-depth-at-least-half]]:
$D_U(\beta\Sigma,N_p(0,\Sigma))\ge1/2$, including singular directions.

[F3] [[lem-projection-slab-uniform-deviation]]: for $N$ clean independent
observations, both squared-projection tail classes over $m$ supports of
size at most $r$ have uniform empirical error at most
$C[\sqrt{(r+1)/N}+\sqrt{\log(m/\delta)/N}]$ with probability at least
$1-\delta$.

[F4] [[def-standard-normal-and-normal-laws]] and
[[cor-mean-value-theorem]]: the standard-normal density is positive and
continuous, so its inverse CDF is locally Lipschitz on compact subintervals
of $(0,1)$.

[F5] [[def-multivariate-normal-law]]: if $u^T\Sigma u=0$, then the clean
Gaussian projection $u^TX$ has law $N(0,0)=\delta_0$.

[F6] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] and
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: for
symmetric $B$, the map $B\mapsto\sup_{u\in U}|u^TBu|$ is 1-Lipschitz in
operator norm for every nonempty $U$ of unit vectors.

[F7] [[def-measurable-function-between-measurable-spaces]] and
[[thm-composition-with-borel-functions-preserves-measurability]]: composing
a Borel selector with a continuous real-valued function gives a Borel
random variable.

## Proof

1.1 Expand the finite product mixture law using independent contamination labels. The contaminated count $n_2$ is binomial. For a Bernoulli variable $B$ with mean $\epsilon$, the centered log-mgf $g(\lambda)=\log\mathbb E e^{\lambda(B-\epsilon)}$ satisfies $g(0)=g'(0)=0$ and $g''(\lambda)$ is a variance of a tilted Bernoulli law, hence at most $1/4$. Integrating twice gives $g(\lambda)\le\lambda^2/8$; Chernoff optimization gives $n_2/n\le\epsilon+\sqrt{\log(1/\delta)/(2n)}$ except on an event of probability $\delta$. Put $q=r+\log(m/\delta)$. Since $C_1q/n<1$ and $C_1\ge200$, the square-root term is at most $1/20$. Thus $n_2/n<1/4$ and $n_1=n-n_2>3n/4$. [given, algebra]

1.2 Conditional on the label pattern and clean count $n_1$, the clean observations $Y_1,\ldots,Y_{n_1}$ are independent with law $N_p(0,\Sigma)$. Apply [F3] with confidence $\delta$. Except on a conditional event of probability $\delta$, every clean empirical tail differs from its Gaussian probability by at most $e=C[\sqrt{(r+1)/n_1}+\sqrt{\log(m/\delta)/n_1}]$. [given, F3]

2.1 For fixed $\Gamma$ and $u$, each full-sample tail count lies between the corresponding clean count and that count plus $n_2$. Taking the minimum of the two tails and then the infimum over $u$ yields $$nD_U(\Gamma,P_n)\le n_1D_U(\Gamma,P_{n_1}^Y)+n_2, \qquad nD_U(\Gamma,P_n)\ge n_1D_U(\Gamma,P_{n_1}^Y).$$ Since $D_U(\widehat\Gamma,P_n)\ge D_U(\beta\Sigma,P_n)$ by the comparison premise, these inequalities imply $D_U(\widehat\Gamma,P_{n_1}^Y) \ge D_U(\beta\Sigma,P_{n_1}^Y)-n_2/n_1$. [F1, step 1.2, algebra]

3.1 On the deviation event in step 1.2, replacing clean empirical depth by population depth costs at most $e$ at each matrix. [F2] and the comparison in step 2.1 therefore imply $D_U(\widehat\Gamma,N_p(0,\Sigma))\ge1/2-n_2/n_1-2e$. Since $r\ge1$, $r+1\le2q$ and $\log(m/\delta)\le q$, we have $e\le C(\sqrt2+1)\sqrt{q/n_1} \le C(\sqrt2+1)\sqrt{4/(3C_1)}$. Choose $C_1$ large enough that $e\le1/24$. Step 1.1 gives $n_2/n_1\le1/3$. Retain the actual deficit $\rho:=n_2/n_1+2e\le5/12<1/2$. Also $n_1>3n/4$ and step 1.1 give $n_2/n_1\le(4/3)(\epsilon+\sqrt{\log(1/\delta)/(2n)})$, while $e\le C\sqrt{q/n}$; hence $\rho\le C(\epsilon+\sqrt{q/n})$. [F2, step 1.1, step 1.2, step 2.1, algebra]

4.1 Fix $u\in U$ and put $v=u^T\Sigma u$. If $v>0$, let $z=u^T\widehat\Gamma u/v\ge0$. The Gaussian tails at threshold $u^T\widehat\Gamma u$ are $2\Phi(\sqrt z)-1$ and $2-2\Phi(\sqrt z)$; their minimum is $1/2-2|\Phi(\sqrt z)-3/4|$. Step 3.1 therefore gives $|\Phi(\sqrt z)-\Phi(\sqrt\beta)|\le\rho/2$. The bound $\rho\le5/12$ places both Gaussian probabilities in the fixed compact interval $[13/24,23/24]\subset(0,1)$. On this interval [F4] gives $|\sqrt z-\sqrt\beta|\le C\rho$ and then $|z-\beta|\le C\rho$. Since $u^T(\widehat\Gamma/\beta-\Sigma)u=(v/\beta)(z-\beta)$ and $v\le M$, this implies $|u^T(\widehat\Gamma/\beta-\Sigma)u|\le C_M\rho\le C_M(\epsilon+\sqrt{q/n})$. [F1, F2, F4, step 3.1, algebra]

5.1 If $v=0$, [F5] gives $u^TX=0$ almost surely. If $u^T\widehat\Gamma u>0$, the upper weak tail is zero, contradicting the positive depth lower bound in step 3.1. Hence $u^T\widehat\Gamma u=0$ and the quadratic error is zero. Taking the supremum over $U$ is a Borel function of the Borel selector by [F6, F7]; its Lipschitz bound follows by applying the operator-norm inequality to the difference of two candidate matrices. Intersecting the events from steps 1.1–1.2 gives probability at least $1-2\delta$ and the stated bound. [F1, F5, F6, F7, step 1.1, step 1.2, step 3.1, algebra] ∎
