---
id: lem-scaffold-nonconvex-server-variance
kind: lemma
title: Nonconvex SCAFFOLD server-update moments
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - lem-scaffold-control-tracking-identity
  - lem-finite-martingale-difference-sum-variance
  - lem-uniform-client-sampling-moments
  - lem-relaxed-euclidean-squared-norm
  - lem-finite-sum-gradient-is-average
  - def-euclidean-inner-product
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 14"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $f_i:\mathbb R^d\to\mathbb R$ be differentiable with $\beta$-Lipschitz
gradients and let $f=N^{-1}\sum_i f_i$. Run Option II SCAFFOLD with
$1\le S\le N$ uniformly sampled clients, $K\ge1$ local steps, and
conditionally unbiased local stochastic gradients of variance at most
$\sigma^2$. Initialize $c_i^0=\nabla f_i(x_0)$ and
$c^0=N^{-1}\sum_i c_i^0$, and set $\widetilde\eta=K\eta_l\eta_g$. Let
$E_r$ and $\Xi_{r-1}$ be the drift and tracking errors in the SCAFFOLD
analysis-trajectory definition, and let $\mathcal F_{r-1}$ be the history
before the fresh round-$r$ client sample. All outer expectations below include
that history and the current round. Then
$$ \mathbb E\left\|\mathbb E[x_r\mid\mathcal F_{r-1}]-x_{r-1}\right\|_2^2 \le2\widetilde\eta^2\beta^2E_r +2\widetilde\eta^2\mathbb E\|\nabla f(x_{r-1})\|_2^2, $$
and
$$ \mathbb E\|x_r-x_{r-1}\|_2^2 \le6\widetilde\eta^2\beta^2E_r +12\widetilde\eta^2\beta^2\Xi_{r-1} +3\widetilde\eta^2\mathbb E\|\nabla f(x_{r-1})\|_2^2 +\frac{18\widetilde\eta^2\sigma^2}{KS}. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 14 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The SCAFFOLD server and client updates, smooth client gradients, and stochastic-gradient hypotheses in the Statement.

[F1] [[alg-scaffold]]: the server displacement is the scaled selected mean of corrected client gradients, and $c=N^{-1}\sum_i c_i$.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: $E_r$ averages squared displacements of the gradient-query points from $x_{r-1}$, while $\Xi_{r-1}$ averages squared distances of stored anchors from $x_{r-1}$.

[F3] [[lem-scaffold-control-tracking-identity]]: each control equals the mean full gradient at its stored anchors plus a residual; the client controls average to the server control; the average residual second moment per client is at most $\sigma^2/K$.

[F4] [[lem-finite-martingale-difference-sum-variance]]: a finite sum of predictable conditional means plus centered local errors has second moment at most twice the mean-sum second moment plus twice the total conditional variance bound.

[F5] [[lem-uniform-client-sampling-moments]]: conditional on the history, the fresh uniform sample is unbiased and its centered mean variance is at most twice $(1-S/N)/S$ times the population second moment.

[F6] [[lem-finite-sum-gradient-is-average]]: the population mean of client gradients at $x$ is $\nabla f(x)$.

[F7] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: for three vectors, $\|u+v+w\|_2^2\le3(\|u\|_2^2+\|v\|_2^2+\|w\|_2^2)$; squared norms expand as inner products.

[F8] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: conditional expectations are linear and preserve the integrable bounds.

[A1] Current-round client sampling is independent of the preceding history, and each local error is conditionally centered with second moment at most $\sigma^2$.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F8].

## Proof

1.1 Write $x=x_{r-1}$ and [given]
$d_{i,k}=\nabla f_i(y_{i,k-1}^r)-\nabla f_i(x)$. Conditional on the
round-start history, client sampling is unbiased, local stochastic-gradient
errors are centered, and the client-control terms cancel because
$c=N^{-1}\sum_i c_i$. Thus
$$ \mathbb E[x_r-x\mid\mathcal F_{r-1}] =-\widetilde\eta\left(\nabla f(x) +\frac1{KN}\sum_{i,k}\mathbb E[d_{i,k}\mid\mathcal F_{r-1}]\right). $$
Conditional Jensen, Lipschitzness, and the two-vector relaxed-square bound
imply, after averaging the history,
$$ \mathbb E\left\|\mathbb E[x_r\mid\mathcal F_{r-1}]-x\right\|_2^2 \le2\widetilde\eta^2\mathbb E\|\nabla f(x)\|_2^2 +2\widetilde\eta^2\beta^2E_r. $$ [F1, F2, F6, F7, F8, A1, A2, given, algebra]

1.2 Let $m_i=K^{-1}\sum_k\nabla f_i(\alpha_{i,k}^{r-1})$, [given]
$a_i=m_i-\nabla f_i(x)$, and $e_i=c_i-m_i$. Define
$\bar a=N^{-1}\sum_i a_i$ and
$\bar a_{\mathcal S}=S^{-1}\sum_{i\in\mathcal S}a_i$, with analogous
notation for $e_i$. The corrected server direction has the decomposition
$$ \frac1{KS}\sum_{i\in\mathcal S,k} (g_i(y_{i,k-1})-c_i+c) =A+\nabla f(x)+Q, $$
where
$$ A=\frac1{KS}\sum_{i\in\mathcal S,k} (g_i(y_{i,k-1})-\nabla f_i(x)),\qquad Q=\bar a-\bar a_{\mathcal S}+\bar e-\bar e_{\mathcal S}. $$
Apply [F4] to the current-query terms in $A$; Jensen and Lipschitzness give
$\mathbb E\|A\|_2^2\le2\beta^2E_r+2\sigma^2/(KS)$. For the anchor
vectors, [F2], Jensen and Lipschitzness give
$N^{-1}\sum_i\mathbb E\|a_i\|_2^2\le\beta^2\Xi_{r-1}$. Apply [F5]
conditionally to $a_i$ and $e_i$, then [F3] to their residual average. This
yields
$$ \mathbb E\|Q\|_2^2 \le\frac{4(1-S/N)}{S}\left(\beta^2\Xi_{r-1} +\frac{\sigma^2}{K}\right) \le4\beta^2\Xi_{r-1}+\frac{4\sigma^2}{KS}. $$
[F2, F3, F4, F5, F6, F8, A1, A2, given, algebra]

2.1 Apply [F7] to the three-term decomposition in step 1.2 and multiply by $\widetilde\eta^2$. Substitute the bounds from that step. The local-drift, anchor-tracking, gradient and noise coefficients are $6\beta^2$, $12\beta^2$, $3$ and $18\sigma^2/(KS)$, respectively. This is the second inequality in the Statement. [F1, F2, F7, step 1.2, given, algebra] ∎
