---
id: def-matrix-equation-augmented-matrix-and-linear-system
kind: definition
title: 'Matrix equation $Ax=b$, its solution set, consistency, homogeneous systems and the augmented matrix $[A\mid b]$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-space, def-matrix-product-and-identity-matrix, def-vector-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §§1.2–1.3"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Definition

Let $A\in M_{m\times n}(F)$ and let $b\in F^m$, viewed as an $m\times1$ column. The **matrix equation** $Ax=b$ asks for columns $x\in F^n$ satisfying the displayed equality. Equivalently it is the linear system
$$\sum_{j<n}a_{ij}x_j=b_i\qquad(i<m).$$

Its **solution set** is $S(A,b):=\{x\in F^n:Ax=b\}$. The system is **consistent** when $S(A,b)\ne\varnothing$ and **inconsistent** otherwise. It is **homogeneous** when $b=0$.

The **augmented matrix** is $[A\mid b]\in M_{m\times(n+1)}(F)$, obtained by adjoining $b$ as the last column. Elementary row operations act on every entry of a row, including its augmented entry.
