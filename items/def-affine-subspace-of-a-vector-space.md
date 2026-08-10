---
id: def-affine-subspace-of-a-vector-space
kind: definition
title: "Affine subspaces as translates $x+U$ of linear subspaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-subspace, def-vector-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §2.7"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over $F$, let $U\subseteq V$ be a linear subspace, and let $x\in V$. The translate
$$x+U:=\{x+u:u\in U\}$$
is an **affine subspace** of $V$. The same affine subspace can have different representatives: if $y\in x+U$, then $y+U=x+U$. It is a linear subspace exactly when it contains $0$, equivalently when $x\in U$.

