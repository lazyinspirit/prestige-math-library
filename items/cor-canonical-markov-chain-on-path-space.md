---
id: cor-canonical-markov-chain-on-path-space
kind: corollary
title: "Canonical Markov chain on path space"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-ionescu-tulcea-construction-of-a-markov-chain]
proof_strategy: specialization
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Shalizi, Building Infinite Processes from Finite-Dimensional Distributions, Theorem 33"
      url: "https://www.stat.cmu.edu/~cshalizi/754/2006/notes/lecture-03.pdf"
      locator: "Theorem 33, all 5 PDF pages; course pp. 22-24"
---

## Statement

Assume Choice. For every probability measure $\mu$ and probability kernel $K$
on an arbitrary measurable space $(E,\mathcal E)$, the canonical path space
$$ (E^{\mathbb N_0},\mathcal E^{\otimes\mathbb N_0}) $$
carries a unique probability $\mathbb P_\mu$ under which the coordinate maps
form a Markov chain with initial law $\mu$ and transition kernel $K$.

## Facts & Assumptions

**Given:** Choice, $(E,\mathcal E)$, $\mu$, and $K$ as in the statement.

[F1] Ionescu--Tulcea constructs a unique countable-product law for specified history-dependent kernels, and its homogeneous last-coordinate specialization is a Markov chain. ([[thm-ionescu-tulcea-construction-of-a-markov-chain]])

## Proof

1.1 In [F1], take $E_n=E$ for all $n$, initial law $\mu$, and [F1] $$K_n(x_0,\ldots,x_n,A)=K(x_n,A).$$ The last display is a probability kernel because it is the composition of the measurable last-coordinate projection with each measurable evaluation of $K$. [F1]

2.1 The theorem [F1] therefore gives a unique law on the product sigma-algebra and says that [F1, step 1.1] the coordinates are the required $(\mu,K)$-chain. Choice is exactly the assumption of [F1]. The construction includes Dirac initial laws, one-point spaces, and $n=0$; an empty $E$ admits no probability $\mu$ and so cannot meet the hypotheses. [F1, step 1.1] ∎
