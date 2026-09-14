---
id: def-initial-distribution-of-a-markov-chain
kind: definition
title: "Initial distribution of a Markov chain"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-time-homogeneous-markov-chain-with-transition-kernel]
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Notation preceding Theorem 5.1.1, printed pp. 268-269"
---

## Definition

Under the Choice convention in the definition of a Markov chain, the
**initial distribution** of $X$ is the probability measure
$$ \mu=\mathcal L(X_0),\qquad \mu(A)=\mathbb P(X_0\in A),\quad A\in\mathcal E. $$
The notation $\mathbb P_\mu$ denotes a specified law of a chain whose initial
distribution is $\mu$; it does not by itself choose a sample-space realization.
When the initial state is fixed at $x$, write $\mathbb P_x$ for
$\mathbb P_{\delta_x}$ and $\mathbb E_x$ for its expectation.

The definition includes Dirac, one-point, and arbitrary probability initial
laws. There is no initial law on an empty state space, since no probability
measure of total mass one exists there.

