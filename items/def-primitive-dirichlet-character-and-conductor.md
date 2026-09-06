---
id: def-primitive-dirichlet-character-and-conductor
kind: definition
title: "Primitive Dirichlet characters and conductor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-induced-dirichlet-character]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, section 16.1"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Definition

A character modulo $q$ is **primitive** if it is not induced from a proper
divisor of $q$. By [[thm-dirichlet-character-primitive-induction]], every
character has a unique primitive ancestor; its modulus is the **conductor**.
The principal character modulo $1$ is primitive and has conductor $1$.
