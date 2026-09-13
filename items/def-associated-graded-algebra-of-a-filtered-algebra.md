---
id: def-associated-graded-algebra-of-a-filtered-algebra
kind: definition
title: Associated graded algebra of a filtered algebra
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-direct-sum-of-a-family-of-modules, def-quotient-module]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §12.2, printed p. 70"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Definition

Let $A$ be a unital algebra with an increasing **multiplicative filtration**

$$0=F_{-1}A\subseteq F_0A\subseteq F_1A\subseteq\cdots,$$

where $1\in F_0A$ and $(F_mA)(F_nA)\subseteq F_{m+n}A$. Its
**associated graded algebra** is

$$\operatorname{gr}_F A=\bigoplus_{n\geq0}F_nA/F_{n-1}A,$$

with multiplication on homogeneous classes

$$ (a+F_{m-1}A)(b+F_{n-1}A)=ab+F_{m+n-1}A.$$

This product is well-defined. Indeed, if $a$ changes by
$u\in F_{m-1}A$ and $b$ by $v\in F_{n-1}A$, the product changes by
$ub+av+uv\in F_{m+n-1}A$. Associativity and the unit class descend from $A$.
