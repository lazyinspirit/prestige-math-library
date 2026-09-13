---
id: def-kappa-closure-distributivity-and-chain-condition
kind: definition
title: Closure, distributivity, and chain conditions for forcing orders
status: published
origin: pipeline
deps: [def-forcing-preorder-compatibility-and-filter, def-poset-ccc-and-knaster-property, def-cofinality]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Chapter 4", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

Let $\kappa$ be an infinite regular cardinal and let $P$ be a nonempty forcing preorder, with stronger conditions smaller. The order is **$\kappa$-closed** if every descending sequence $\langle p_\xi:\xi<\gamma\rangle$ of length $\gamma<\kappa$ has a common lower bound. It is **$\kappa$-distributive** if the intersection of every family of fewer than $\kappa$ dense open subsets of $P$ is dense. It is **$\kappa$-cc** if every antichain has cardinality below $\kappa$.

Thus ccc is $\aleph_1$-cc. “Countably closed” or “$\sigma$-closed” means $\aleph_1$-closed: all countable descending chains have lower bounds. It does not mean $\omega$-closed, which only addresses finite chains and is automatic for a preorder with its last member as a lower bound.

