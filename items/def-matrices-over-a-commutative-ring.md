---
id: def-matrices-over-a-commutative-ring
kind: definition
title: "Finite rectangular matrices over a commutative ring, their entries, rows and columns"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-function, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Notation 4.16"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $m,n\in\mathbb N$. An **$m\times n$ matrix over $R$** is a function
$$A:m\times n\longrightarrow R.$$
Its value at $(i,j)$ is written $a_{ij}$. The set of all such matrices is $M_{m\times n}(R)$, and $M_n(R):=M_{n\times n}(R)$.

For $i<m$, row $i$ is the function $j\mapsto a_{ij}$ on $n$; for $j<n$, column $j$ is the function $i\mapsto a_{ij}$ on $m$. This includes zero-sized shapes: a matrix with empty index set is the unique function from that empty set.

