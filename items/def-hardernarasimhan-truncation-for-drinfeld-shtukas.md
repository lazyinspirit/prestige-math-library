---
id: def-hardernarasimhan-truncation-for-drinfeld-shtukas
kind: definition
title: Harder–Narasimhan polygon and truncation for a Drinfeld shtuka
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-drinfeld-shtuka-with-bounded-modification
- def-degree-divisor-proper-curve
- lem-frobenius-independent-leg-pairs-form-a-scheme-intersection-of-opens
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands
    url: https://www.laurentlafforgue.org/math/fulltext.pdf
    locator: Chapter I §1(c), definition of the canonical Harder–Narasimhan polygon
      and Proposition I.3, printed pp. 20–21.
  - title: Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique
      des invariants
    url: https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf
    locator: Chapter I §1.2, HN polygons and truncated substacks.
verification:
  precheck: n/a
---

## Definition

Fix $\alpha\in\mathbb R$. If $\alpha\notin[0,1]$, restrict the two legs to the intersection subfunctor $\Lambda\to X\times X$ of the complements of all Frobenius graphs on which no nonnegative power of Frobenius on either factor carries one leg to the other; if $\alpha\in[0,1]$, use all pairs of legs. For a geometric rank-$r$ shtuka, use the sub-shtuka filtrations and $\alpha$-degree from the preceding definition. Its **canonical Harder–Narasimhan polygon of index $\alpha$** is the largest filtration polygon, when it exists; the least-fine filtration defining that largest polygon is its canonical filtration. A **convex truncation polygon** uses the source's upper-convex convention: $p:[0,r]\to\mathbb R_{\ge0}$ is affine on each interval $[i-1,i]$, satisfies $p(0)=p(r)=0$, and has nonincreasing successive slopes, equivalently $2p(i)\ge p(i-1)+p(i+1)$ for $1\le i<r$. Thus it is concave in the usual analytic terminology. The **$p$-truncated shtuka groupoid of index $\alpha$** is the full subgroupoid of objects whose every geometric fibre has canonical polygon pointwise at most $p$. The intersection subfunctor $\Lambda$ is generally not open; its scheme realization under AC and its partial Frobenius base maps are proved in [[lem-frobenius-independent-leg-pairs-form-a-scheme-intersection-of-opens]].

## Definition references

[[def-drinfeld-shtuka-with-bounded-modification|Sub-shtukas, filtrations, and $\alpha$-degree]]

[Laurent Lafforgue, Chapter I §1(c)](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Tuan Ngo Dac, Chapter I §1.2](https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf)
