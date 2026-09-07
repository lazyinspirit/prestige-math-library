---
id: def-identically-distributed-and-iid-random-variables
title: "Identical distribution and IID families"
kind: definition
status: published
origin: pipeline
deps: ["def-independent-random-elements", "def-law-or-distribution-of-a-random-element"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Section 2.2.1, p. 58, IID paragraph"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

Let $(X_i)_{i\in I}$ be random elements with the same measurable target $(E,\mathcal E)$. They are **identically distributed** if $\mathbb P(X_i\in B)=\mathbb P(X_j\in B)$ for all $i,j\in I$ and $B\in\mathcal E$, that is, their laws in [[def-law-or-distribution-of-a-random-element]] agree. They are **independent and identically distributed (IID)** if, in addition, the whole family is independent in [[def-independent-random-elements]]. Independence means mutual independence, not merely pairwise independence. No moment assumption is part of either definition. The empty family satisfies these universal conditions vacuously.
