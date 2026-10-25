---
id: def-ergodic-measure-preserving-system
kind: definition
title: Ergodicity relative to an invariant measure
deps: [def-strict-and-mod-null-invariant-sigma-algebras]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Sarig Definition 1.4 p.5
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
  scraped: []
status: published
origin: pipeline
---

## Definition

A measure-preserving system is **ergodic for $\mu$** if each $E\in\mathcal I$ has $\mu(E)=0$ or $\mu(X\setminus E)=0$, with $\mathcal I$ as in [[def-strict-and-mod-null-invariant-sigma-algebras]]. For a probability system this means $\mu(E)\in\{0,1\}$. The definition is relative to the invariant measure; no probability assumption is implicit in the general null/conull formulation.
