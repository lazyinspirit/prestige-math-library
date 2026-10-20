---
id: lem-exp4-unbiased-expert-reward-estimates
kind: lemma
title: Exp4 expert reward estimates are conditionally unbiased
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-contextual-bandit-protocol
  - alg-exp4
  - def-bandit-importance-weighted-estimator
  - lem-bandit-importance-weighted-estimator-has-conditional-moments
  - def-conditional-expectation-given-a-sigma-algebra
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; every conditional calculation is a finite sum over actions and histories.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§18.4, Eq. (18.10), PDF pp. 238–239 / printed pp. 229–230; zero-probability support is handled locally."
    - title: "Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, The Nonstochastic Multiarmed Bandit Problem"
      url: "https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf"
      locator: "§7 conditional unbiasedness calculation in the proof of Theorem 7.1, PDF pp. 19–20 / SIAM printed pp. 67–68; only positive-probability arms are used."
---

## Statement

In Exp4, at every round $t\in[n]$ and for every expert $m\in[M]$, the expert's estimated reward satisfies
$$
\mathbb E[\widetilde X_{t,m}\mid\mathcal F_{t-1}]=\langle E(t)_m,x_t\rangle.
$$
The assertion includes rounds where some actions have zero sampling probability; no componentwise unbiasedness claim is made for an unsupported action.

## Statement references

[[alg-exp4|Exp4 estimates and zero-probability convention]]: the estimated action rewards and expert rewards are defined in the algorithm.

[[lem-bandit-importance-weighted-estimator-has-conditional-moments|Conditional importance-weighted loss mean]]: on an arm with positive sampling probability, the estimated loss has conditional mean equal to its true loss.

## Facts & Assumptions

**Given:** A fixed oblivious instance with $n\ge1$, $k>1$, $M>1$, the Exp4 algorithm, and a round $t$.

[F1] [[alg-exp4]]: $P_{t,i}=\sum_{r=1}^M Q_{t,r}E(t)_{r,i}$, every $Q_{t,r}>0$, $\widehat X_{t,i}=1-\widehat Y_{t,i}$, and the quotient in $\widehat Y_{t,i}$ is set to zero when $P_{t,i}=0$.

[F2] [[def-contextual-bandit-protocol]]: $x_t$ and $E(t)$ are fixed before the learner's action, each advice row is a probability vector, and $\mathcal F_{t-1}$ records the pre-action history.

[F3] [[def-bandit-importance-weighted-estimator]]: for $P_{t,i}>0$, $\widehat Y_{t,i}=\mathbf1\{A_t=i\}(1-X_t)/P_{t,i}$ is the loss estimate for true loss $1-x_{t,i}$.

[F4] [[lem-bandit-importance-weighted-estimator-has-conditional-moments]]: when $P_{t,i}>0$, $\mathbb E[\widehat Y_{t,i}\mid\mathcal F_{t-1}]=1-x_{t,i}$.

[F5] [[def-conditional-expectation-given-a-sigma-algebra]]: conditional expectation is characterized by its integrals on pre-action history events; with a finite action set, its value on each positive-probability history is the finite conditional sum over actions.

## Proof

1.1 Fix a positive-probability pre-action history. On it, $Q_t$ and $E(t)$ are fixed. If $P_{t,i}=0$, then $0=\sum_r Q_{t,r}E(t)_{r,i}$ is a sum of nonnegative terms and every $Q_{t,r}>0$; hence $E(t)_{r,i}=0$ for every expert $r$. Such a coordinate contributes nothing to any expert reward estimate. [F1, F2, algebra]

2.1 If $P_{t,i}>0$, [F3] and [F4] give $\mathbb E[\widehat Y_{t,i}\mid\mathcal F_{t-1}]=1-x_{t,i}$. For fixed expert $m$, its row sums to one, so $\widetilde X_{t,m}=1-\sum_i E(t)_{m,i}\widehat Y_{t,i}$. Distributing the finite conditional sum over the finite action set and using step 1.1 for unsupported coordinates yields $\mathbb E[\widetilde X_{t,m}\mid\mathcal F_{t-1}]=1-\sum_{i:P_{t,i}>0}E(t)_{m,i}(1-x_{t,i})=\sum_{i=1}^kE(t)_{m,i}x_{t,i}$. The last equality uses that each row sums to one and the omitted coefficients are zero by step 1.1. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎
