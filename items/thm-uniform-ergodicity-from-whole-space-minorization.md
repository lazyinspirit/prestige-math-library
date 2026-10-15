---
id: thm-uniform-ergodicity-from-whole-space-minorization
kind: theorem
title: "Whole-space minorization gives uniform geometric ergodicity"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-small-set-minorization-and-drift
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-total-variation-distance-for-probability-laws
  - def-measure-kernel-and-probability-kernel
  - lem-total-variation-coupling-and-kernel-contraction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains"
      url: "https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf"
axiom_use: "AC is used only where stated in Facts & Assumptions; otherwise the proof is choice-free."
---
## Statement

Let $P$ have invariant probability $\pi$. If for some $m\ge1$, $0<\epsilon\le1$, and probability $\nu$,
$$P^m(x,\cdot)\ge\epsilon\nu(\cdot)\quad\text{for every }x,$$
then for every $n\ge0$,
$$\sup_x\|P^n(x,\cdot)-\pi\|_{\rm TV}\le(1-\epsilon)^{\lfloor n/m\rfloor}.$$
Thus this chain is uniformly geometrically ergodic: there are common $M<\infty$ and $r<1$ with $\sup_x\|P^n(x,\cdot)-\pi\|_{\rm TV}\le Mr^n$. No converse is asserted. When $\epsilon=1$, the floor bound means $1$ for $n<m$ and $0$ for $n\ge m$.
## Facts & Assumptions

**Given:** The probability kernel, invariant probability, and whole-space minorization in the Statement.

[F1] [[def-small-set-minorization-and-drift]]: the stated lower bound is a probability-kernel minorization.

[F2] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi P^n=\pi$.

[F3] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum over measurable events (up to the stated normalization).

[F4] [[lem-total-variation-coupling-and-kernel-contraction]]: a probability kernel contracts total variation.

## Proof

**Given:** The hypotheses and facts [F1]–[F4].

1.1 Write $P^m(x,\cdot)=\epsilon\nu+(1-\epsilon)R_x$; if $\epsilon=1$, take any probability residual because its coefficient is zero. For probabilities $\mu,\mu'$, the common term cancels, so $\|\mu P^m-\mu'P^m\|_{\rm TV}\le(1-\epsilon)\|\mu-\mu'\|_{\rm TV}$ by the event-supremum definition and kernel contraction. [F1, F3, F4]

2.1 Iterating step 1.1 $q=\lfloor n/m\rfloor$ times and using invariance yields $\|\delta_xP^{qm}-\pi\|_{\rm TV}\le(1-\epsilon)^q$. Write $n=qm+r$ with $0\le r<m$; the remaining $P^r$ contracts total variation and leaves $\pi$ invariant, so the same bound holds at $n$. Taking the supremum over $x$ proves the result. [F2, F4, step 1.1, algebra] ∎
