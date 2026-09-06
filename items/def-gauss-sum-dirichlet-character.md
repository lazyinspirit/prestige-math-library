---
id: def-gauss-sum-dirichlet-character
kind: definition
title: "Gauss sum of a Dirichlet character"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dirichlet-character-modulo-q]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, section 16.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Definition

Put $e(x)=\exp(2\pi i x)$. For a character $\chi$ modulo $q$, its **Gauss
sum** is
$$\tau(\chi)=\sum_{a\bmod q}\chi(a)e(a/q).$$
The displayed additive character and the complete residue system fix its phase.
