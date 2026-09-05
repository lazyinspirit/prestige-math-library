---
id: def-dirichlet-l-function
kind: definition
title: "Dirichlet L-functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dirichlet-character-modulo-q, def-dirichlet-series]
justified_by: []
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 3.4"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Andrew V. Sutherland, Number Theory I, Definition 18.19"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $\chi$ be a Dirichlet character modulo $q$. For $\operatorname{Re}s>1$, the
**Dirichlet $L$-function** of $\chi$ is the Dirichlet series

$$L(s,\chi):=\sum_{n\ge1}\chi(n)n^{-s}.$$

Because $|\chi(n)|\le1$, this series converges absolutely on
$\operatorname{Re}s>1$ by comparison with $\sum n^{-\sigma}$.
