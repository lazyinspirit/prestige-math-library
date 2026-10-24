---
id: def-continuous-annihilator-of-a-subspace
kind: definition
title: Continuous annihilator of a linear subspace
status: published
origin: pipeline
deps: [def-dual-space-of-a-normed-space, def-linear-subspace]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Definition 2.52
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Definition

Let $X$ be a normed space and let $M\subseteq X$ be a linear subspace.  Its
**continuous annihilator** is

$$M^\perp:=\{f\in X^*:f(m)=0\text{ for every }m\in M\}.$$

This is an annihilator in the topological dual $X^*$, not in the unrestricted
algebraic dual.
