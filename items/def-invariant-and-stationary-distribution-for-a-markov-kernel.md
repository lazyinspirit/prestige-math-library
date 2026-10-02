---
id: def-invariant-and-stationary-distribution-for-a-markov-kernel
kind: definition
title: "Invariant and stationary distribution for a Markov kernel"
status: draft
origin: pipeline
landmark: false
deps:
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - thm-monotone-convergence-for-the-integral
  - thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
  - def-transition-matrix-and-n-step-transition-probabilities
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Definition

Let $K$ be a probability kernel on a measurable space $(E,\mathcal E)$
([[def-measure-kernel-and-probability-kernel]]), and let $\pi$ be a
probability measure on $(E,\mathcal E)$ ([[def-probability-measure]]). The
probability measure $\pi$ is **invariant** for $K$, and $\pi$ is a
**stationary distribution** of $K$, when

$$(\pi K)(A):=\int_E K(x,A)\,\pi(dx)=\pi(A)\qquad\text{for every }A\in\mathcal E .$$

The set function $\pi K$ is again a probability measure: for fixed $A$ the map
$x\mapsto K(x,A)$ is measurable and lies in $[0,1]$, so the integral exists in
$[0,1]$; for pairwise disjoint $A_n\in\mathcal E$ the identity
$K(x,\bigcup_nA_n)=\sum_nK(x,A_n)$ of the measure $K(x,\cdot)$ and the
monotone convergence theorem for nonnegative functions
([[thm-monotone-convergence-for-the-integral]]) give
$\sigma$-additivity of $\pi K$; and $K(x,E)=1$ for every $x$ gives
$(\pi K)(E)=1$. Thus $(\pi K)(A)=\pi(A)$ is an identity between two probability
measures evaluated at $A$.

A $K$-chain whose initial law is $\pi$ is called **stationary** when
$\pi K=\pi$. Stationarity of the process is a statement about all of its
finite-dimensional laws and is proved, not assumed, from $\pi K=\pi$; see
[[thm-invariant-initial-law-makes-the-chain-stationary]].

On a countable state space $E$ with sigma-algebra $2^E$ and transition matrix
$p(x,y)=K(x,\{y\})$ ([[def-transition-matrix-and-n-step-transition-probabilities]]),
a measure on $E$ is its weighted sum of Dirac masses at singletons
([[thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums]]), so
invariance is equivalent to the matrix identity

$$\pi(y)=\sum_{x\in E}\pi(x)\,p(x,y)\qquad\text{for every }y\in E .$$

The definition fixes no irreducibility, aperiodicity or uniqueness hypothesis,
and it selects no conditional-expectation versions; the display defines a
single measure $\pi K$ and asserts an identity for it. A transient, periodic or
reducible chain may have several invariant probability measures or none.
