---
id: ex-matrix-of-a-map-between-coordinate-spaces
kind: example
title: 'A matrix represents a map $F^2\to F^3$ by its images of the standard basis vectors'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coordinate-column-and-matrix-of-a-linear-map,
       thm-coordinate-action-of-a-linear-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Example 3.32'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Example

Over a field $F$, define

$$T:F^2\to F^3,\qquad T(x,y)=(x+2y,\,3x-y,\,x+y).$$

In the standard ordered bases,

$$[T]=\begin{pmatrix}1&2\\3&-1\\1&1\end{pmatrix},$$

whose columns are the coordinate columns of $T(1,0)$ and $T(0,1)$.

## Facts & Assumptions

**Given:** The displayed linear map and the standard ordered bases of $F^2$ and $F^3$.

[L1] The $j$-th column of a linear map's matrix is the coordinate column of the image of the $j$-th domain basis vector ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

## Verification

**Proof technique:** direct.

1.1 One has $T(1,0)=(1,3,1)$ and $T(0,1)=(2,-1,1)$, so [L1] gives the two displayed columns and hence the displayed $3$ by $2$ matrix. [given, L1]

2.1 Multiplication by a general coordinate column gives $\begin{pmatrix}1&2\\3&-1\\1&1\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}x+2y\\3x-y\\x+y\end{pmatrix}=[T(x,y)]$, independently verifying that the matrix represents $T$. [step 1.1, L1] ∎
