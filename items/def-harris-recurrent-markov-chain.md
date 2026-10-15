---
id: def-harris-recurrent-markov-chain
kind: definition
title: "Harris recurrence relative to an irreducibility measure"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-phi-irreducible-chain
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "AC is used only where stated in Facts & Assumptions; otherwise the proof is choice-free."
---
## Definition

Let $P$ be $\phi$-irreducible with nonzero $\sigma$-finite irreducibility measure $\phi$. It is **Harris recurrent relative to $\phi$** if for every $A\in\mathcal X$ with $\phi(A)>0$ and every starting state $x$, the first hitting time $\tau_A=\inf\{n\ge0:X_n\in A\}$ satisfies $\Pr_x(\tau_A<\infty)=1$. This is an all-start almost-sure hitting property; it is stronger than $\phi$-irreducibility, which requires only positive probability at some finite time.
