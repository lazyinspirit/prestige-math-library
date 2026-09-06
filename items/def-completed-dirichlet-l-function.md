---
id: def-completed-dirichlet-l-function
kind: definition
title: "Completed primitive Dirichlet L-function"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dirichlet-l-function, def-parity-dirichlet-character]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, section 16.3"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Definition

For primitive $\chi$ modulo $q$ of parity $a$, define
$$\Lambda(s,\chi)=\left(\frac q\pi\right)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi).$$
This is the completed function, not the entire xi-function used in a theta proof.
