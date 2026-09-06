---
id: def-induced-dirichlet-character
kind: definition
title: "Induced Dirichlet characters"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dirichlet-character-modulo-q]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Lemma 16.1"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Definition

Let $d\mid q$, and let $\chi^*$ be a Dirichlet character modulo $d$. Its
**induction to modulus $q$** is the Dirichlet character $\chi$ modulo $q$
whose arithmetic function is
$$\chi(n)=\begin{cases}\chi^*(n),&(n,q)=1,\\0,&(n,q)>1.\end{cases}$$
Equivalently, on units modulo $q$ it is the pullback along reduction to units
modulo $d$. Thus it can be zero at an integer which is a unit modulo $d$ but
not modulo $q$; this is stronger than merely composing unit-group maps.
