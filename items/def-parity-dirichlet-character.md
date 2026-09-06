---
id: def-parity-dirichlet-character
kind: definition
title: "Parity of a Dirichlet character"
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
    - title: "Kiran S. Kedlaya, A Course in Analytic Number Theory, Definition 6.1"
      url: "https://kskedlaya.org/ant/chap-funceq2.html"
---

## Definition

Since $\chi(-1)\in\{1,-1\}$, define $a\in\{0,1\}$ by
$\chi(-1)=(-1)^a$. The character is **even** for $a=0$ and **odd** for $a=1$.
The character modulo $1$ is even.
