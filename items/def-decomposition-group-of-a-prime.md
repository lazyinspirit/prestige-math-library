---
id: def-decomposition-group-of-a-prime
title: "Decomposition group of a prime"
kind: definition
status: draft
origin: pipeline
deps: [def-prime-above-and-residue-degree]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.3, Definition 9.3.1, p.104"
      url: https://wstein.org/books/ant/ant.pdf
---

## Definition

For finite Galois L/K and a chosen nonzero prime $P\mid p$, the **decomposition group** is the stabilizer
$$D(P/p)=\{\sigma\in\operatorname{Gal}(L/K):\sigma(P)=P\}.$$
It is a subgroup: identity stabilizes P and stabilizers are closed under composition and inverse. The prime P, not just p, is part of the data.
