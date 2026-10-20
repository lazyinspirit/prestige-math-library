---
id: thm-sgd-stability-convex-loss
kind: theorem
title: Expected generalization of convex stochastic gradient training
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-uniform-stability
  - thm-uniform-stability-implies-expected-generalization
  - lem-convex-gradient-step-nonexpansive
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-gradient-represents-directional-derivatives-and-steepest-ascent
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-identically-distributed-and-iid-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Moritz Hardt, Benjamin Recht, and Yoram Singer, Train faster, generalize better: Stability of stochastic gradient descent, arXiv-version Theorem 3.8 and proof (conference Theorem 3.7)"
      url: "https://arxiv.org/pdf/1509.01240"
      locator: "§3.3, Theorem 3.8 and complete convex stability proof; the ICML proceedings version numbers this result Theorem 3.7"
    - title: "Nikolai Matni, ESE680 Lecture 16: Algorithmic Stability and Stochastic Gradient Descent, Theorem 3 and proof"
      url: "https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf"
      locator: "§4, Lemma 2 and Theorem 3, PDF pp. 5–6"
---

## Statement

Let $n,T,d\ge1$, let $\beta>0$ and $L\ge0$, and let $(\mathsf X,\Sigma_X)$, $(\mathsf Y,\Sigma_Y)$, and $(\mathsf A,\Sigma_A)$ be measurable spaces. Let $P$ be a probability measure on $\mathsf X\times\mathsf Y$, let $\ell:\mathsf A\times\mathsf Y\to[0,+\infty)$ be a measurable loss, and let $f_w:\mathsf X\to\mathsf A$ be a measurable predictor for every $w\in\mathbb R^d$. For $z=(x,y)$ set $g(w,z)=\ell(f_w(x),y)$ and assume this map and $(w,z)\mapsto\nabla_wg(w,z)$ are jointly measurable. For every observation $z$, assume $w\mapsto g(w,z)$ is totally differentiable and convex, its Euclidean gradient is $\beta$-Lipschitz, and its values are $L$-Lipschitz in the sense that $|g(w,z)-g(v,z)|\le L\|w-v\|_2$ for all $w,v\in\mathbb R^d$. Let $S=(Z_1,\ldots,Z_n)$ be IID with law $P$, and abbreviate $R_P(f_w)=\int g(w,z)\,P(dz)$ and $\widehat R_S(f_w)=n^{-1}\sum_{i=1}^ng(w,Z_i)$. Let $I_1,\ldots,I_T$ be random indices in $\{1,\ldots,n\}$, independent of $S$ and satisfying $\mathbb P(I_t=i)=1/n$ for every $1\le t\le T$ and $1\le i\le n$; dependence between indices at different times is allowed. From a fixed $w_0\in\mathbb R^d$, set

$$w_t=w_{t-1}-\alpha_t\nabla_wg(w_{t-1},Z_{I_t}),\qquad 1\le t\le T,$$

where the deterministic steps satisfy $0\le\alpha_t\le2/\beta$. Assume the displayed sample-dependent loss and risk maps are measurable and integrable. Then this randomized procedure has uniform replacement stability at level

$$\varepsilon_{\mathrm{stab}}=\frac{2L^2}{n}\sum_{t=1}^T\alpha_t,$$

and its expected population-minus-empirical risk gap satisfies

$$\left|\mathbb E_{S,I}\left[R_P(f_{w_T})-\widehat R_S(f_{w_T})\right]\right|\le\varepsilon_{\mathrm{stab}}.$$

The result concerns the specified uniform-marginal sample-selection updates, including independent sampling with replacement and uniform random-permutation passes. It does not assert generalization for every stochastic-gradient oracle.

## Statement references

Hardt, Recht, and Singer, arXiv-version Theorem 3.8 and proof (conference Theorem 3.7): [full arXiv paper](https://arxiv.org/pdf/1509.01240).

Matni, Lecture 16, Lemma 2 and Theorem 3 with proof: [full lecture notes](https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf).

## Facts & Assumptions

**Given:** The IID supervised sample, independent uniform-marginal indices, fixed initialization, loss hypotheses, and integrability conditions in the Statement.

[F1] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity is the segment inequality on a convex Euclidean domain.

[F2] [[def-total-derivative-in-euclidean-space]] and [[def-jacobian-matrix-and-gradient]]: total differentiability means a linear first-order approximation with normwise $o(\|h\|_2)$ remainder, and the scalar gradient is the vector of its partial derivatives.

[F3] [[def-euclidean-inner-product]]: $\langle u,v\rangle$ is the Euclidean inner product and $\|u\|_2=\sqrt{\langle u,u\rangle}$.

[F4] [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]: for a totally differentiable scalar field, $D_vg(w,z)=\langle\nabla_wg(w,z),v\rangle$.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality and every normalized nonzero vector has norm $1$.

[F6] [[lem-convex-gradient-step-nonexpansive]]: for a differentiable convex loss with $\beta$-Lipschitz gradient, the update $w\mapsto w-\alpha\nabla\ell(w,z)$ is nonexpansive when $0\le\alpha\le2/\beta$.

[F7] [[def-uniform-stability]]: stability compares expected test losses for every fixed neighboring ordered sample pair and every fixed test observation.

[F8] [[thm-uniform-stability-implies-expected-generalization]]: uniform replacement stability at level $\varepsilon$ implies an absolute expected generalization gap at most $\varepsilon$ when the sample, algorithm, and risk maps satisfy its measurability and integrability hypotheses.

[F9] [[def-supervised-learning-problem]] and [[def-population-and-empirical-risk]]: the test loss, population risk, and empirical risk use the stated measurable loss and law $P$.

[F10] [[def-identically-distributed-and-iid-random-variables]]: the observations are mutually independent and have the common law $P$.

[A1] The random index vector is independent of the sample and each coordinate is uniform; no independence between different indices is assumed.

[A2] The population-risk and empirical-risk random variables are measurable and integrable, as required in the Statement.

## Proof

1.1 Fix $w,z$ and suppose $\nabla_wg(w,z)\ne0$. Put $v=\nabla_wg(w,z)/\|\nabla_wg(w,z)\|_2$, which is a unit vector by [F3] and [F5]. The directional derivative of $t\mapsto g(w+tv,z)$ at $0$ is $\langle\nabla_wg(w,z),v\rangle=\|\nabla_wg(w,z)\|_2$ by [F2] and [F4]. The $L$-Lipschitz inequality in the Statement bounds every difference quotient by $L$, so passage to the derivative gives $\|\nabla_wg(w,z)\|_2\le L$; the same bound is immediate when the gradient is zero. [F2, F3, F4, F5, given, algebra]

2.1 Fix neighboring samples $S,S'$ differing at coordinate $j$ and couple their runs using the same index vector. Put $\delta_t=\|w_t(S)-w_t(S')\|_2$, so $\delta_0=0$. If $I_t\ne j$, both runs apply the same convex-loss gradient step and [F6] gives $\delta_t\le\delta_{t-1}$. If $I_t=j$, the triangle inequality from [F5] and step 1.1 give $\delta_t\le\delta_{t-1}+2\alpha_tL$. Thus, pathwise, $\delta_t\le\delta_{t-1}+2\alpha_tL\mathbf1_{\{I_t=j\}}$. [A1, F1, F5, F6, step 1.1, given, construct]

3.1 Taking expectation in the pathwise inequality and using only $\mathbb P(I_t=j)=1/n$ yields $\mathbb E\delta_t\le\mathbb E\delta_{t-1}+2\alpha_tL/n$. Summing from $t=1$ to $T$ gives $\mathbb E\delta_T\le(2L/n)\sum_{t=1}^T\alpha_t$. [A1, step 2.1, algebra]

4.1 For every test observation $z$, the value-Lipschitz hypothesis gives $\mathbb E_I|g(w_T(S),z)-g(w_T(S'),z)|\le L\mathbb E\delta_T\le(2L^2/n)\sum_t\alpha_t$. Hence the absolute difference of the two expected losses is at most this value, proving the stated uniform stability. [F7, step 3.1, given, algebra]

5.1 The sample is IID by [F10], the index vector is independent of it by [A1], and the risk maps $R_P(f_{w_T})$ and $\widehat R_S(f_{w_T})$ are measurable and integrable by [A2]; they use the loss and risk conventions of [F9]. Apply [F8] with the stability level from step 4.1 to obtain the expected generalization bound. [A1, A2, F8, F9, F10, step 4.1, given] ∎
