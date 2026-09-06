---
id: def-tame-and-wild-ramification
kind: definition
title: "Tame and wild ramification"
status: draft
origin: pipeline
deps: [def-ramification-index]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Theorem 4.13"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Definition

For $\mathfrak P\mid p$, ramification is **tame** if $p\nmid e(\mathfrak P/p)$ and **wild** if $p\mid e(\mathfrak P/p)$.
