---
id: lem-geometric-reversible-chain-rho-mixing
kind: lemma
title: Geometric ergodicity and reversibility give exponential rho-mixing
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-phi-irreducible-chain
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorem 2, part 3"
      url: "https://arxiv.org/pdf/math/0409112"
verification:
  precheck: n/a
axiom_use: "No additional choice principle is asserted by the cited spectral-gap implication."
---

## Statement

Let $P$ be a probability kernel on $(\mathsf X,\mathcal X)$ with invariant
probability $\pi$, and consider its stationary output process $X$. Assume it is $\phi$-irreducible ([[def-phi-irreducible-chain]]), aperiodic
([[def-general-state-aperiodic-markov-chain]]), and Harris recurrent relative
to its nonzero $\sigma$-finite irreducibility measure $\phi$
([[def-harris-recurrent-markov-chain]]). Suppose it is geometrically
ergodic in the sense of
[[def-geometric-and-uniform-ergodicity-for-mcmc-clt]] and reversible with
respect to $\pi$ in the symmetric-flow sense of
[[def-general-state-reversibility-by-symmetric-flow-measure]]. Then there are
$C<\infty$ and $r\in(0,1)$ such that its maximal-correlation mixing
coefficient satisfies
$$\rho_X(n)\le Cr^n\quad(n\ge1).$$

## Proof status

The source obtains this conclusion from a nontrivial spectral-gap theorem for
the reversible Markov operator. The complete geometric-ergodicity-to-spectral-
gap proof is not supplied in this batch, so the lemma remains escalated.
