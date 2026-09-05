---
id: def-principal-dirichlet-character
kind: definition
title: "The principal character modulo q"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dirichlet-character-modulo-q]
justified_by: []
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, section 3.1"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Andrew V. Sutherland, Number Theory I, Definition 18.11"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

For $q\ge1$, the **principal Dirichlet character modulo $q$** is the character
$\chi_0$ modulo $q$ defined by

$$\chi_0(n)= \begin{cases} 1,&(n,q)=1,\\ 0,&(n,q)>1. \end{cases}$$

Equivalently, its underlying homomorphism on $(\mathbb Z/q\mathbb Z)^\times$ is
the trivial group homomorphism.
