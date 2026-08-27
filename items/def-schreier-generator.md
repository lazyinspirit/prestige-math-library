---
id: def-schreier-generator
kind: definition
title: "Schreier generators in the right-coset convention"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-schreier-transversal-and-schreier-system]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Definition

Let $F(X)$ be a free group, let $H\le F(X)$, and let $\mathcal T$ be a
Schreier system of right-coset representatives. For $t\in\mathcal T$ and
$x\in X$, let $\overline{tx}\in\mathcal T$ denote the chosen representative of
the coset $Htx$.

The corresponding **Schreier generator** is

$$s(t,x):=tx\,\overline{tx}^{-1}.$$

This is the right-coset convention: the inverse falls on the representative of
the product coset $Htx$, not on $t$. Inverse letters are handled in the
rewriting map by the rule

$$t x^{-1}\,\overline{t x^{-1}}^{-1}=s(\overline{t x^{-1}},x)^{-1},$$

so the distinguished generators are indexed only by the basis letters $x\in X$.
