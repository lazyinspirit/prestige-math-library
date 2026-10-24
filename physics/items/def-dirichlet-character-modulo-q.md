---
id: def-dirichlet-character-modulo-q
kind: definition
title: "Dirichlet characters modulo q"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 3.1"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Andrew V. Sutherland, Number Theory I, Definition 18.6"
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

Let $q \ge 1$. A **Dirichlet character modulo $q$** is the datum of a group
homomorphism

$$\bar\chi:(\mathbb Z/q\mathbb Z)^\times \to \mathbb C^\times.$$

Its associated arithmetic function is the map $\chi:\mathbb Z\to\mathbb C$
defined by

$$\chi(n)= \begin{cases} \bar\chi(\bar n),&(n,q)=1,\\ 0,&(n,q)>1, \end{cases}$$

where $\bar n$ is the residue class of $n$ modulo $q$. The modulus is part of
the datum: the same arithmetic function may arise from different nonminimal
moduli, and that conductor story is not built into this definition.
