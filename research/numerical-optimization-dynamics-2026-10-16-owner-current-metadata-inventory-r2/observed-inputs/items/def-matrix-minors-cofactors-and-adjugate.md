---
id: def-matrix-minors-cofactors-and-adjugate
kind: definition
title: "Deleted-row-and-column minors, cofactors, the cofactor matrix and the adjugate over a commutative ring"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring,
       def-determinant-of-a-square-matrix,
       def-ring-matrix-product-identity-and-transpose]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Interactive Linear Algebra"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "András Pál, Introduction to Commutative Algebra"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring, let $n\geq 1$, and let
$A=(a_{ij})\in M_n(R)$, with rows and columns indexed by
$0,\ldots,n-1$ ([[def-matrices-over-a-commutative-ring]]).

For $0\leq i,j<n$, the **deleted-row-and-column matrix** $A^{(i,j)}$ is
obtained by deleting row $i$ and column $j$. The **minor** and **cofactor** at
$(i,j)$ are

$$M_{ij}(A):=\det(A^{(i,j)}),\qquad C_{ij}(A):=\varepsilon_{ij}M_{ij}(A),$$

where the sign is taken in $R$ by parity: $\varepsilon_{ij}:=1_R$ when $i+j$ is
even and $\varepsilon_{ij}:=-1_R$ when $i+j$ is odd. Writing this as
$(-1)^{i+j}$ is the usual abbreviation; it is the ring element $-1_R$ raised to
a natural-number power in $R$, not a real power. When $n=1$,
$A^{(0,0)}$ is the unique $0\times0$ matrix and its determinant is defined
locally to be $1$. For $n>1$, the determinant is the published matrix
determinant ([[def-determinant-of-a-square-matrix]]).

The **cofactor matrix** is
$\operatorname{cof}(A):=(C_{ij}(A))$, and the **adjugate** is

$$\operatorname{adj}(A):=\operatorname{cof}(A)^{\mathsf T},$$

using the published transpose operation
([[def-ring-matrix-product-identity-and-transpose]]).
