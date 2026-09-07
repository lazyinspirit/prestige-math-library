---
id: "def-canonical-t-structure-on-a-derived-category"
kind: "definition"
title: "Canonical t structure on a derived category"
deps: ["thm-the-derived-category-inherits-a-triangulated-structure", "prop-cohomology-factors-through-the-derived-category"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www.math.fsu.edu/~aluffi/archive/paper306.pdf"
      title: "Lecture 3, section 3, definition and Main example, pp. 28–29"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
justified_by: ["thm-the-canonical-pair-is-a-t-structure"]
---

## Definition

For a triangulated category $T$ with shift $[1]$, a **t-structure** is a pair of strictly full subcategories $(T^{\leq0},T^{\geq0})$ such that $T^{\leq0}[1]\subseteq T^{\leq0}$, $T^{\geq0}[-1]\subseteq T^{\geq0}$, $\operatorname{Hom}_T(T^{\leq0},T^{\geq1})=0$, and every $X$ has a distinguished triangle $A\to X\to B\to A[1]$ with $A\in T^{\leq0}$ and $B\in T^{\geq1}$. Here $T^{\geq1}=T^{\geq0}[-1]$ and $T^{\leq n}=T^{\leq0}[-n]$, $T^{\geq n}=T^{\geq0}[-n]$. Its **heart** is $T^{\leq0}\cap T^{\geq0}$.

For the triangulation of [[thm-the-derived-category-inherits-a-triangulated-structure]], the canonical candidate is $D^{\leq0}=\{X:H^i(X)=0\text{ for }i>0\}$ and $D^{\geq0}=\{X:H^i(X)=0\text{ for }i<0\}$, using [[prop-cohomology-factors-through-the-derived-category]].
