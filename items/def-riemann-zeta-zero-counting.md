---
id: def-riemann-zeta-zero-counting
kind: definition
title: "The Riemann zeta zero-counting function"
status: draft
origin: pipeline
deps: [thm-riemann-zeta-meromorphic-continuation]
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
    - title: "Nick Andersen, Analytic Number Theory, §11.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Definition

For $T>0$, $N(T)$ is the number, with multiplicity, of nontrivial zeros
$\rho=\beta+i\gamma$ of the meromorphic continuation of zeta satisfying
$0<\gamma\le T$.  Thus a zero on the top boundary is included.
