---
id: cex-carleson-maximal-operator-is-not-strong-type-one-one
kind: counterexample
title: The Carleson maximal operator is not strong type (1,1)
deps: [def-carleson-maximal-partial-sum-operator, lem-fejer-kernel-is-a-positive-approximate-identity, thm-fejer-uniform-convergence-for-continuous-periodic-functions, lem-fourier-partial-sums-are-dirichlet-convolutions, lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-riesz-fischer-completeness-of-l-p, thm-uniform-boundedness-principle, thm-tonelli-theorem-for-sigma-finite-product-spaces]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 9, Example 9.4, p. 55'}]
status: published
origin: pipeline
proof_strategy: Choose N with ||D_N||_1>A+1. For f=F_K, finite Fourier sums give S_N F_K=F_K*D_N=sigma_K D_N -> D_N uniformly as K grows. Hence ||C F_K||_1>=||S_N F_K||_1>A for large K while ||F_K||_1=1. This supplies a local endpoint counterexample without using Kolmogorov as a hidden logical prerequisite. As an inline consequence under DC, ||S_N:L1->L1||>=||D_N||_1 is unbounded, so Riesz–Fischer completeness and uniform boundedness give an integrable h with sup_N||S_N h||_1=infinity. Check each S_N is bounded by the convolution integral and Tonelli. This norm consequence is distinct from a.e. divergence.
---

## Statement refuted

There exists a finite constant bounding $\|Cf\|_1$ by that constant times $\|f\|_1$ for every $f\in L^1(\mathbb T)$.

In fact, for every $A>0$ there is a nonnegative trigonometric polynomial $f$ on the period-one torus, with Haar mass one, such that

$$\|f\|_1=1,\qquad \|Cf\|_1>A.$$

As a further consequence under DC, there exists a real $h\in L^1(\mathbb T)$ with $\sup_N\|S_Nh\|_1=\infty$.

## Facts & Assumptions

**Given:** $A>0$ and normalized Haar measure on $\mathbb T=\mathbb R/\mathbb Z$. DC is assumed only for the further norm-divergence consequence.

[F1] The measurable maximal operator is $Cf=\sup_{N\ge0}|S_Nf|$ for $f\in L^1$ ([[def-carleson-maximal-partial-sum-operator]]).

[F2] The Fejer kernel satisfies $F_K(t)=(K+1)^{-1}|\sum_{j=0}^Ke^{2\pi ijt}|^2\ge0$ and $\int_0^1F_K(t)\,dt=1$ for every $K\ge0$ ([[lem-fejer-kernel-is-a-positive-approximate-identity]]).

[F3] Fejer means of a continuous one-periodic complex function converge uniformly to that function ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]).

[F4] For every one-period integrable $f$ and every $x$, $S_Nf(x)=(f*D_N)(x)$ ([[lem-fourier-partial-sums-are-dirichlet-convolutions]]).

[F5] The quantities $\|D_N\|_1$ equal the norms of the partial-sum operators on continuous functions and are at least $(3\pi)^{-1}\log(N+1)$ for $N\ge1$ ([[lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant]]).

[F6] For every measure space and $1\le p\le\infty$, $L^p$ is complete in its norm ([[thm-riesz-fischer-completeness-of-l-p]]).

[F7] Under DC, pointwise bounded families of bounded linear maps from a Banach space to a normed space have uniformly bounded norms ([[thm-uniform-boundedness-principle]]).

[F8] For two sigma-finite measure spaces and a nonnegative product-measurable function, the product integral equals both iterated integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Counterexample

**Proof technique:** Fejer-kernel tests, with an additional uniform-boundedness consequence.

1.1 Choose an integer $N\ge1$ with $\|D_N\|_1>A+1$, possible from the logarithmic lower bound. For each $K\ge0$, the function $F_K$ is a real nonnegative trigonometric polynomial of $L^1$ norm one. [F2, F5, given]

1.2 Expanding the square formula for $F_K$ gives coefficient $1-|k|/(K+1)$ for $|k|\le K$ and zero otherwise. Orthogonality of finite characters therefore gives $S_NF_K=F_K*D_N=\sigma_KD_N$: either side has coefficient $1-|k|/(K+1)$ for $|k|\le\min\{K,N\}$ and zero elsewhere. Since $D_N$ is continuous, $\|S_NF_K-D_N\|_\infty\to0$ as $K\to\infty$, with $N$ fixed. [F2, F3, F4]

1.3 For the additional consequence, let $h$ be a real integrable periodic representative. The convolution formula, after a periodic change of variables, gives $|S_Nh(x)|\le\int_0^1|h(u)||D_N(x-u)|\,du$. The integrand is product-measurable: $h(u)$ depends on one coordinate and $D_N(x-u)$ is continuous. Both measure spaces are finite, so Tonelli and translation invariance give $\|S_Nh\|_1\le\int_0^1|h(u)|\int_0^1|D_N(x-u)|\,dx\,du=\|D_N\|_1\|h\|_1$. Thus $S_N$ is a bounded real linear operator on real $L^1$. [F4, F8]

2.1 Choose $K$ large enough that this uniform error is less than one. The measure has mass one, so $\|S_NF_K\|_1\ge\|D_N\|_1-\|S_NF_K-D_N\|_1>A$. Since $CF_K\ge|S_NF_K|$, the polynomial $f=F_K$ is the required witness. Its maximal function is finite and bounded: when the partial-sum index is at least $K$, the partial sum equals $F_K$, so only finitely many distinct continuous polynomials enter its supremum. Thus the strict norm inequality is an ordinary finite integral, not an artifact of an infinite value. [F1, step 1.1, step 1.2]

2.2 For each fixed $N$, step 1.2 and the unit-norm tests $F_K$ imply $\|S_N:L^1(\mathbb T,\mathbb R)\to L^1(\mathbb T,\mathbb R)\|\ge\lim_{K\to\infty}\|S_NF_K\|_1=\|D_N\|_1$. These operator norms are consequently unbounded. [F2, F5, step 1.2, step 1.3]

3.1 Now assume DC. Real $L^1$ is Banach by completeness. If $\sup_N\|S_Nh\|_1$ were finite for each $h$, uniform boundedness would contradict step 2.2. Therefore some real integrable $h$ has unbounded $L^1$ norms of its partial sums. This is a norm-divergence conclusion and does not assert almost-everywhere divergence. [F6, F7, step 1.3, step 2.2, given] ∎
