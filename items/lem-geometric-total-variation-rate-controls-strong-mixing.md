---
id: lem-geometric-total-variation-rate-controls-strong-mixing
kind: lemma
title: A total-variation rate bounds strong-mixing coefficients
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
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
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §§2–4"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §4.8.2"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
verification:
  precheck: pass
axiom_use: "AC is used through the homogeneous-chain conditional-expectation interface and the bounded-future-path Markov property."
---

## Statement

Assume AC. Let $(X_k)_{k\ge0}$ be a stationary time-homogeneous Markov chain
with invariant probability $\pi$. Suppose there are a measurable
$M:\mathsf X\to[0,\infty)$ with $\pi(M)<\infty$ and $r\in(0,1)$ such that
$$\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)r^n\quad\text{for every }x\in\mathsf X,\ n\ge1.$$
Then the strong-mixing coefficient of the stationary process satisfies
$$\alpha_X(n)\le\pi(M)r^n\quad(n\ge1).$$

## Facts & Assumptions

**Given:** AC, a stationary homogeneous Markov chain with kernel $P$ and
invariant law $\pi$, an integrable envelope $M$, and the displayed geometric
total-variation bound.

[A1] AC is the choice principle for the conditional classes used by the
Markov-chain interfaces. ([[def-axiom-of-choice]])

[F1] The strong-mixing coefficient is the supremum of
$|\mathbb P(A\cap B)-\mathbb P(A)\mathbb P(B)|$ over past and separated future
events. ([[def-mixing-coefficients-for-stationary-markov-chain]])

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
1.1 Fix $n\ge1$, $j\ge0$, $A\in\mathcal F_j$, and a future event $B\in\sigma(X_{j+n},X_{j+n+1},\ldots)$. By [F2], for the path indicator defining $B$ there is a measurable $h:\mathsf X\to[0,1]$ with $\mathbb E[\mathbf1_B\mid\mathcal F_{j+n}]=h(X_{j+n})$. Applying [F3] and the tower property gives $\mathbb E[\mathbf1_B\mid\mathcal F_j]=P^nh(X_j)$. Stationarity gives $\mathbb P(B)=\pi(h)$. [A1, F2, F3, given]

1.2 For probability measures $\mu,\nu$ and measurable $0\le h\le1$, the dyadic simple functions $h_m=2^{-m}\sum_{j=1}^{2^m}\mathbf1_{\{h\ge j2^{-m}\}}$ differ from $h$ by at most $2^{-m}$. Their integrals differ by at most $\|\mu-\nu\|_{\mathrm{TV}}$, since each summand is an indicator and [F4] bounds its measure difference. Letting $m\to\infty$ proves $|\mu(h)-\nu(h)|\le\|\mu-\nu\|_{\mathrm{TV}}$. [F4, construct]

2.1 Apply step 1.2 with $\mu=P^n(x,\cdot)$ and $\nu=\pi$. The given rate then yields $|P^nh(x)-\pi(h)|\le M(x)r^n$ for every $x$. [step 1.2, given]

3.1 Using [F5], [F2], and [F3], $\displaystyle |\mathbb P(A\cap B)-\mathbb P(A)\mathbb P(B)|=|\mathbb E[\mathbf1_A(P^nh(X_j)-\pi(h))]|\le\mathbb E|P^nh(X_j)-\pi(h)|\le\pi(M)r^n.$ The first inequality uses $0\le\mathbf1_A\le1$; the last follows from the preceding pointwise bound and stationarity of $X_j$. Since $A,B,j$ were arbitrary, taking the supremum in [F1] proves the claim. [A1, F1, F2, F3, F5, step 2.1, given] ∎

## Source notes

The proof is local: the Markov property converts separated future events to a
bounded function of the state, and the total-variation bound controls its
expectation. The source's factor convention is matched to the repository
definition of total variation as a supremum over events.
