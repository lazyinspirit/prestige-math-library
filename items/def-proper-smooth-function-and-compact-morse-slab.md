---
id: def-proper-smooth-function-and-compact-morse-slab
kind: definition
title: "Proper smooth functions and compact Morse slabs"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-compact-space, def-continuous-map-top]
justified_by: []
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, §2.4"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Definition

A continuous map $f:M\to\mathbb R$ is **proper** when $f^{-1}(C)$ is compact
for every compact $C\subseteq\mathbb R$. For $a\le b$, call

$$ f^{-1}([a,b]) $$

a **compact Morse slab** when it is compact. In particular, a proper $f$ has a
compact Morse slab for every compact interval $[a,b]$.
