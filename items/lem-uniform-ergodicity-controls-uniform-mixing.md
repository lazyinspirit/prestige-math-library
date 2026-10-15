---
id: lem-uniform-ergodicity-controls-uniform-mixing
kind: lemma
title: Uniform ergodicity bounds the uniform-mixing coefficient
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-total-variation-distance-for-probability-laws
  - thm-chapman-kolmogorov-equations
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-taking-out-what-is-known
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §§2 and 4.1"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §4.8.2"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
verification:
  precheck: pass
axiom_use: "AC is used through the homogeneous-chain conditional-expectation interface and the bounded-future-path Markov property."
---

## Statement

Assume AC. Let $(X_k)_{k\ge0}$ be a stationary time-homogeneous Markov chain
with invariant probability $\pi$. If for constants $C<\infty$ and $r\in(0,1)$
$$\sup_{x\in\mathsf X}\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le Cr^n\quad(n\ge1),$$
then the uniform-mixing coefficient satisfies
$$\phi_X(n)\le Cr^n\quad(n\ge1).$$

## Facts & Assumptions

**Given:** AC, a stationary homogeneous Markov chain with kernel $P$ and
invariant probability $\pi$, and the displayed uniform rate.

[A1] AC is the choice principle for the conditional classes used by the
Markov-chain interfaces. ([[def-axiom-of-choice]])

[F1] The uniform-mixing coefficient is the supremum of
$|\mathbb P(B\mid A)-\mathbb P(B)|$ over past events $A$ with positive
probability and separated future events $B$.
([[def-mixing-coefficients-for-stationary-markov-chain]])

[F2] For every bounded product-measurable future-path functional $H$, the
conditional expectation of its value on $(X_n,X_{n+1},\ldots)$ is a measurable
function of $X_n$. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F3] For bounded measurable $h$,
$\mathbb E[h(X_{j+n})\mid\mathcal F_j]=P^nh(X_j)$.
([[thm-chapman-kolmogorov-equations]])

[F4] Total variation is
$\|\mu-\nu\|_{\mathrm{TV}}=\sup_A|\mu(A)-\nu(A)|$.
([[def-total-variation-distance-for-probability-laws]])

[F5] A known measurable factor can be taken out of conditional expectation.
([[thm-taking-out-what-is-known]])

## Proof
1.1 Fix $n\ge1$, $j\ge0$, $A\in\mathcal F_j$ with $\mathbb P(A)>0$, and $B\in\sigma(X_{j+n},X_{j+n+1},\ldots)$. By [F2], there is measurable $h:\mathsf X\to[0,1]$ with $\mathbb E[\mathbf1_B\mid\mathcal F_{j+n}]=h(X_{j+n})$. By [F3] and [F5], $\mathbb P(B\mid A)=\mathbb E[P^nh(X_j)\mid A]$. Stationarity gives $\mathbb P(B)=\pi(h)$. [A1, F2, F3, F5, given]

1.2 For probability measures $\mu,\nu$ and measurable $0\le h\le1$, the dyadic simple functions $h_m=2^{-m}\sum_{j=1}^{2^m}\mathbf1_{\{h\ge j2^{-m}\}}$ differ from $h$ by at most $2^{-m}$. Their integrals differ by at most $\|\mu-\nu\|_{\mathrm{TV}}$, since each summand is an indicator and [F4] bounds its measure difference. Letting $m\to\infty$ gives $|\mu(h)-\nu(h)|\le\|\mu-\nu\|_{\mathrm{TV}}$. Applying this with $\mu=P^n(x,\cdot)$ and $\nu=\pi$ proves $|P^nh(x)-\pi(h)|\le Cr^n$ for every $x$. [F4, construct, given]

2.1 Averaging the pointwise bound of step 1.2 conditionally on $A$ in step 1.1 gives $|\mathbb P(B\mid A)-\mathbb P(B)|\le Cr^n$. Taking the supremum in [F1] proves the result. [F1, step 1.1, step 1.2] ∎

## Source notes

Uniform total-variation convergence controls every conditional future event
uniformly over the current state. No moment assumption on the observable is
used in this mixing-coefficient bound.
