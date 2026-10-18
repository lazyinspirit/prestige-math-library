---
id: def-differential-graded-module
kind: definition
title: "Cohomological left and right differential graded modules"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-differential-graded-algebra
  - def-bimodule
  - def-left-and-right-modules
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Chapter 22: Differential Graded Algebra, §§22.4 and 22.11"
      url: "https://stacks.math.columbia.edu/download/book.pdf"
---

## Definition

Let $A$ be a cohomological DGA over a commutative ring $R$. A **cohomological
left differential graded $A$-module** is a graded unital left $A$-module
$M=\bigoplus_{q\in\mathbb Z}M^q$ (with module action as in
[[def-left-and-right-modules]]) whose action has degree zero,
$A^pM^q\subseteq M^{p+q}$, together with $R$-linear maps
$d_M^q:M^q\to M^{q+1}$ satisfying $d_M^{q+1}d_M^q=0$ and, for homogeneous
$a\in A^p$ and $m\in M^q$,
$$d_M(am)=d_A(a)m+(-1)^p a d_M(m).$$

A **cohomological right differential graded $A$-module** is a graded unital
right $A$-module $M$ with $M^qA^p\subseteq M^{q+p}$ and a degree-one
square-zero $R$-linear differential satisfying, for homogeneous $m\in M^q$
and $a\in A^p$,
$$d_M(ma)=d_M(m)a+(-1)^q m d_A(a).$$

The left and right conventions are separate. A differential graded bimodule
uses both actions with the commuting-action condition of
[[def-bimodule]]; both differential compatibility identities then apply. A
left module is not silently identified with a right module when $A$ is
noncommutative.
