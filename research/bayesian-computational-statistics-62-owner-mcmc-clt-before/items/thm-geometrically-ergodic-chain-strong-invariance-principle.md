---
id: thm-geometrically-ergodic-chain-strong-invariance-principle
kind: theorem
title: Strong invariance principle for geometrically ergodic chains
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-state-dependent-one-step-minorization
  - def-time-homogeneous-markov-chain-with-transition-kernel
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Lemma 3"
      url: "https://arxiv.org/pdf/0811.1729"
verification:
  precheck: n/a
axiom_use: "The source's construction uses an extension carrying a Brownian motion; the precise construction is part of the missing proof."
---

## Statement

Let $P$ be a geometrically ergodic Markov chain with invariant probability
$\pi$, let $g$ be real Borel, and suppose there are $\delta,\varepsilon>0$
with $\pi(|g|^{2+\delta+\varepsilon})<\infty$. Suppose also that a
state-dependent one-step minorization
[[def-state-dependent-one-step-minorization]] holds. For the Flegal–Jones
strong invariance principle convention, assume its asymptotic standard
deviation satisfies $0<\sigma_g<\infty$. Then on a suitable extension of the
chain's probability space there are a standard Brownian motion $B$, a finite
random constant $C(\omega)$, and a finite random index $N(\omega)$ such that
for all $n\ge N(\omega)$,
$$\left|\sum_{i=1}^n(g(X_i)-\pi(g))-\sigma_g B(n)\right|\le C(\omega)n^{1/(2+\delta)}\log n$$
almost surely.

## Proof status

Flegal–Jones Lemma 3 states this rate but cites Bednorz–Latuszyński and Jones
et al. for its proof. No complete local strong-invariance argument is
supplied; this is an owner escalation. In particular, the positive-variance
convention is explicit and its zero-variance branch is not covered here.
