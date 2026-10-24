---
id: thm-poisson-summation-for-schwartz-functions
kind: theorem
title: Poisson summation for Schwartz functions
deps: ["thm-fourier-transform-maps-schwartz-space-continuously-to-itself", "lem-schwartz-functions-and-all-derivatives-are-integrable", "lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-dominated-convergence", "thm-uniform-derivative-limit-on-a-closed-interval", "def-countable-choice", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "cor-c-one-change-of-variables-for-l-one-functions"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices
      url: https://people.math.harvard.edu/~elkies/aws09.pdf
      locator: Theorem 2 and proof, pp.10–11, specialized to Zn with the negative-sign convention
---

## Statement

Assume countable choice. For $f\in\mathcal S(\mathbb R^n)$,
$$\sum_{k\in\mathbb Z^n}f(x+k)=\sum_{k\in\mathbb Z^n}\widehat f(k)e^{2\pi ik\cdot x}\qquad(x\in\mathbb R^n).$$
The left series converges locally uniformly with every derivative; the right series converges absolutely uniformly on all of $\mathbb R^n$. At $x=0$ this gives $\sum_kf(k)=\sum_k\widehat f(k)$, both sums absolutely convergent.

## Facts & Assumptions

**Given:** [[def-countable-choice]]; sums over $\mathbb Z^n$ are limits over increasing integer cubes, with absolute convergence making their ordering immaterial.

[F1] Fourier preserves Schwartz space ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

[F2] Schwartz derivatives are integrable; their proof supplies the product-weight bound ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F3] Continuous periodic functions are uniquely determined by their coefficients ([[lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients]]).

[F4] Tonelli, Fubini and dominated convergence apply with nonnegative or absolute-integrable majorants as appropriate ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]]).

[F5] Uniform convergence of functions and their derivatives on coordinate segments permits differentiating the limit ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F6] Complex interval FTC computes exponential integrals ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F7] Translation substitution holds for integrable complex functions ([[cor-c-one-change-of-variables-for-l-one-functions]]).

## Proof

**Proof technique:** direct.

1.1 For each $\beta$, expansion of $W(y)=\prod_j(1+y_j^2)$ gives $|\partial^\beta f(y)|\le A_\beta/W(y)$ with $A_\beta=\sum_{\epsilon\in\{0,1\}^n}p_{2\epsilon,\beta}(f)$, as in [F2]. On a fixed bounded box $|x_j|\le L$, the elementary inequality $1+k_j^2\le(2+2L^2)(1+(x_j+k_j)^2)$ shows $|\partial^\beta f(x+k)|\le A_\beta(2+2L^2)^n\prod_j(1+k_j^2)^{-1}$. The one-dimensional series of reciprocal weights converges: on $2^r\le|k|<2^{r+1}$ its sum is at most $2^{1-r}$, with the term $k=0$ separate. The finite product series therefore converges. Uniform tail bounds prove absolute uniform convergence of all derivative series on that box. Applying [F5] componentwise on each coordinate segment to finite partial sums, and iterating for ordered derivatives, proves that $P(x)=\sum_kf(x+k)$ is smooth with the asserted derivatives. Absolute convergence permits reindexing, so $P$ is periodic. [F2, F5, given, algebra]

2.1 On $Q=[0,1)^n$, the tiling $\{Q+k:k\in\mathbb Z^n\}$ is disjoint and exhausts $\mathbb R^n$. Translation substitution [F7] and [F4] give $\sum_k\int_Q|f(x+k)|\,dx=\int|f|<\infty$. Thus exchanging the coefficient integral and sum is justified. For $\ell\in\mathbb Z^n$, substitute $y=x+k$ in each term; $e^{2\pi i\ell\cdot k}=1$, so $\int_QP(x)e^{-2\pi i\ell\cdot x}\,dx=\int_{\mathbb R^n}f(y)e^{-2\pi i\ell\cdot y}\,dy=\widehat f(\ell)$. The closed cube gives the same integral because its added coordinate faces are null. [step 1.1, F2, F4, F7, given]

2.2 By [F1] and the weight estimate of step 1.1 at $x=0$, $\sum_k|\widehat f(k)|<\infty$. Therefore $H(x)=\sum_k\widehat f(k)e^{2\pi ik\cdot x}$ converges absolutely uniformly for all $x$, is continuous and periodic. Its coefficient at $\ell$ is $\widehat f(\ell)$: interchange sum and integral by the summable constant majorant, using [F4]. Each exponential product integral factors by [F4], and each factor is $\int_0^1e^{2\pi i rt}\,dt=0$ for nonzero integer $r$, by its antiderivative and [F6], or $1$ for $r=0$. Hence only $k=\ell$ survives. [step 1.1, F1, F4, F6, given]

3.1 The continuous periodic function $P-H$ has every coefficient zero by steps 2.1 and 2.2. [F3] makes it zero everywhere. Evaluation at zero gives the unshifted formula, with absolute convergence already proved. Countable choice is precisely the inherited Euclidean integration and Schwartz Fourier hypothesis; the lattice ordering, majorants and partial sums are explicit. [step 2.1, step 2.2, F3] ∎
