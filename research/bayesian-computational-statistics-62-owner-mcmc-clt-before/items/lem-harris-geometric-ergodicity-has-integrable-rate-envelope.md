---
id: lem-harris-geometric-ergodicity-has-integrable-rate-envelope
kind: lemma
title: Harris geometric ergodicity admits an integrable total-variation envelope
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-general-state-aperiodic-markov-chain
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §2, Remark 1"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Sean P. Meyn and Richard L. Tweedie, Markov Chains and Stochastic Stability, second edition, Theorems 14.3.7, 15.3.3, and 15.4.1"
      url: "https://probability.ca/MT/BOOK.pdf"
verification:
  precheck: n/a
axiom_use: "No choice principle is stated in this rate-envelope implication."
---

## Statement

Let $P$ be a probability kernel on a measurable space
$(\mathsf X,\mathcal X)$ with invariant probability $\pi$. Assume it is
$\phi$-irreducible
([[def-phi-irreducible-chain]]), aperiodic
([[def-general-state-aperiodic-markov-chain]]), and Harris recurrent relative
to its nonzero $\sigma$-finite irreducibility measure $\phi$
([[def-harris-recurrent-markov-chain]]). Suppose $P$ is geometrically
ergodic in the sense of
[[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]. Then there exist a
measurable $M:\mathsf X\to[0,\infty)$ with $\pi(M)<\infty$ and $r\in(0,1)$ such
that
$$\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)r^n\quad(x\in\mathsf X,\ n\ge1).$$

## Proof status

No local proof is supplied. Jones (2004, §2, Remark 1) derives the required
integrability through a drift characterization and an invariant drift-moment
theorem. In Meyn–Tweedie’s second edition, Theorem 14.3.7 gives the moment
bound, while the relevant geometric-to-drift route passes through the
f-geometric regularity and f-Kendall petite-set machinery of Theorems 15.3.3
and 15.4.1. The complete local interface for that route has not been supplied
in this batch. This is therefore an unresolved prerequisite for the
geometric strong-mixing and CLT reductions; the statement is not accepted as
proved.
