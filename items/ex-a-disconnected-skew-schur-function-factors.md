---
id: ex-a-disconnected-skew-schur-function-factors
kind: example
title: A disconnected skew Schur function factors
status: draft
origin: pipeline
deps:
  - def-partition-young-diagram-and-conjugate-partition
  - def-stable-graded-ring-of-symmetric-functions
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - def-skew-diagram-and-semistandard-skew-tableau
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - thm-skew-jacobi-trudi-and-tableau-expansion
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §5 equations (5.4), (5.7), and (5.12), printed pp. 70–73
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
---

## Statement

For $\lambda=(3,1)$ and $\mu=(1)$, the two edge-disconnected components of
$\lambda/\mu$ give
$$s_{(3,1)/(1)}=h_2h_1.$$

## Facts & Assumptions

**Given:** English Young-diagram coordinates, the stable rank projections and
multiplication, complete homogeneous functions, skew-tableau conventions,
and the skew Jacobi–Trudi and tableau formulas.

[F1] In English coordinates, row $i$ of $[\lambda]$ contains $\lambda_i$
boxes, and trailing zeros pad partitions for row comparisons
([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] The stable ring is the graded direct sum of its degreewise inverse
limits; multiplication is coordinatewise, and its rank projections set
added variables to zero ([[def-stable-graded-ring-of-symmetric-functions]]).

[F3] In $N$ variables, $h_k$ sums all monomials of total degree $k$; at
rank zero $h_k=0$ for $k>0$
([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F4] The stable complete functions $h_k$ are compatible sequences obtained
from the finite complete homogeneous polynomials, and
$h_\rho=\prod_i h_{\rho_i}$
([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F5] Two skew boxes are side-adjacent when their coordinates differ by one
in exactly one coordinate; edge-connected components use this adjacency
([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F6] A semistandard skew tableau is weakly increasing along rows and
strictly increasing down columns ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F7] At rank zero, $h_k=0$ for $k>0$
([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F8] For $\mu\subseteq\lambda$, every allowed padded size $r$ gives
$s_{\lambda/\mu}=\det(h_{\lambda_i-\mu_j-i+j})$ and the sum of the weight
monomials of semistandard skew tableaux; negative subscripts have value zero
([[thm-skew-jacobi-trudi-and-tableau-expansion]]).

## Proof

**Proof technique:** direct.

1.1 Pad $\mu=(1)$ to $(1,0)$. By [F1], the remaining cells of $\lambda/\mu$ are exactly $(1,2),(1,3),(2,1)$. The first two share an edge; $(2,1)$ shares no edge with either, since $(1,1)$ was removed and $(1,2)$ is only diagonally adjacent. Thus the components are the two-cell row and the single cell. [F1, F5]

1.2 The minimum allowed determinant size is $r=2$. Its matrix entries are $h_{3-1-1+1}=h_2$, $h_{3-0-1+2}=h_4$, $h_{1-1-2+1}=h_{-1}$, and $h_{1-0-2+2}=h_1$, so [F8] gives $\det\begin{pmatrix}h_2&h_4\\0&h_1\end{pmatrix}=h_2h_1$. The off-diagonal $h_4$ term contributes zero because the lower-left entry is $h_{-1}=0$. [F1, F8, algebra]

1.3 A semistandard filling assigns entries $a\le b$ to the top row and an arbitrary positive entry $c$ to the isolated lower cell; there is no row or column inequality connecting the components [F5, F6]. By [F3], its weight generating series in rank $N$ is $\sum_{1\le a\le b\le N}\sum_{1\le c\le N}x_ax_bx_c=h_2^{(N)}h_1^{(N)}$. The tableau formula [F8] and compatible stable products [F2, F4] therefore give $s_{(3,1)/(1)}=h_2h_1$ in $\Lambda$. [F2, F3, F4, F5, F6, F8]

1.4 At rank $3$, [F3] gives $h_2^{(3)}=x_1^2+x_2^2+x_3^2+x_1x_2+x_1x_3+x_2x_3$ and $h_1^{(3)}=x_1+x_2+x_3$, hence $h_2^{(3)}h_1^{(3)}=x_1^3+x_2^3+x_3^3+2\sum_{i\ne j}x_i^2x_j+3x_1x_2x_3$. Each cube occurs once, each $x_i^2x_j$ with $i\ne j$ occurs twice (from $x_i^2x_j$ and $x_ix_jx_i$), and the triple product occurs three times, once from each pair term of $h_2^{(3)}$. [F2, F3, F4]

2.1 The fixed skew shape has three boxes, so an empty-shape case does not arise. At rank zero both positive-degree complete functions vanish [F7] and no positive entry is available [F6]; at rank one [F3] gives $h_2^{(1)}h_1^{(1)}=x_1^3$, matching the unique filling with $1$ in all three cells. Hence this example is nonzero, as the rank-three expansion also shows. The determinant uses its minimum size $r=2$ [F8]; each finite-rank tableau set is finite and the compatible stable passage makes no choice. The example asserts no biconditional. [F1, F2, F3, F6, F7, F8, algebra] ∎
