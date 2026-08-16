---
id: def-algebra-of-subsets
kind: definition
title: "Algebras of subsets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Definition 2.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. An **algebra of subsets of $X$** is a family
$\mathcal A\subseteq\mathcal P(X)$ such that:

1. $\varnothing\in\mathcal A$;
2. if $A\in\mathcal A$, then $X\setminus A\in\mathcal A$;
3. if $A,B\in\mathcal A$, then $A\cup B\in\mathcal A$.

Thus an algebra is closed under complements relative to its fixed ambient set,
finite unions, finite intersections, and differences. In particular
$X=X\setminus\varnothing$ belongs to every algebra on $X$.
