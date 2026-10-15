---
id: ex-periodic-finite-chain-fails-time-convergence
kind: example
title: "A finite periodic chain need not converge in total variation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-phi-irreducible-chain
  - def-general-state-aperiodic-markov-chain
  - def-total-variation-distance-for-probability-laws
  - def-transition-matrix-and-n-step-transition-probabilities
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains"
      url: "https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf"
axiom_use: "No choice principle is used in this finite or explicitly constructed example."
---
## Statement

The deterministic two-state chain that alternates $0\leftrightarrow1$ is $\phi$-irreducible and has invariant law $\pi=(\delta_0+\delta_1)/2$, but its laws do not converge in total variation to $\pi$.

## Facts & Assumptions

**Given:** The state space $\{0,1\}$ and transition matrix in the Statement.

[F1] [[def-transition-matrix-and-n-step-transition-probabilities]]: the rows specify the one-step probabilities and matrix powers specify $P^n$.

[F2] [[def-phi-irreducible-chain]]: every positive-$\phi$ set must be reached at some finite positive time from every state.

[F3] [[def-general-state-aperiodic-markov-chain]]: a period-two cyclic partition violates aperiodicity.

[F4] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum of event-probability differences.

## Verification

**Given:** The alternating transition matrix and facts [F1]–[F4].

1.1 Let $\phi$ be counting measure. Every nonempty set is reachable from either state at a positive time of at most two steps, so [F2] holds. The uniform law is invariant because each column sum and row sum of the transition matrix equals one. [F1, F2, given]

2.1 The partition $\mathsf X_0=\{0\}$, $\mathsf X_1=\{1\}$ has positive invariant mass in both classes and transitions alternate deterministically, so it is a cyclic decomposition of period two under [F3]. [F3, step 1.1]

3.1 From $0$, $P^n(0,\cdot)=\delta_0$ for even $n$ and $\delta_1$ for odd $n$. Taking event $\{0\}$ in [F4], the distance to $\pi$ equals $1/2$ for every $n$. Hence convergence fails despite irreducibility and invariance. [F1, F4, step 1.1, algebra] ∎
