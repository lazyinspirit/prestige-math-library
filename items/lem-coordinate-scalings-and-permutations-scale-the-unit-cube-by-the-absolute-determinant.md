---
id: lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant
kind: lemma
title: "A coordinate scaling and a coordinate transposition send the unit cube to a set of measure equal to the absolute value of the determinant"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-measure-is-a-complete-measure, def-elementary-matrix, def-determinant-of-a-square-matrix, thm-determinant-under-elementary-row-operations, thm-determinant-of-a-triangular-matrix, def-matrix-product-and-identity-matrix, def-half-open-box, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-abs-value, lem-of-abs-value, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Proposition 2.32"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Section 3"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Work with real matrices and identify a matrix with
the linear map it defines by $(Ax)_i = \sum_{j<n}a_{ij}x_j$
([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

1. **Coordinate scaling.** Let $p<n$, let $c \ne 0$ be real and let $D_p(c)$ be
   the elementary matrix obtained from the identity by multiplying row $p$ by
   $c$ ([[def-elementary-matrix]]). Then $D_p(c)$ sends $x$ to the point whose
   $p$-th coordinate is $cx_p$ and whose other coordinates are those of $x$, the
   image $D_p(c)\big[(0,1]^n\big]$ is Lebesgue measurable, and
   $$\lambda_n\Big(D_p(c)\big[(0,1]^n\big]\Big) \;=\; |c| \;=\; \bigl|\det D_p(c)\bigr| .$$
2. **Coordinate transposition.** Let $n \ge 2$, let $p \ne q$ be below $n$ and
   let $E_{pq}$ be the elementary matrix interchanging rows $p$ and $q$. Then
   $E_{pq}$ exchanges the $p$-th and $q$-th coordinates,
   $E_{pq}\big[(0,1]^n\big] = (0,1]^n$, and
   $$\lambda_n\Big(E_{pq}\big[(0,1]^n\big]\Big) \;=\; 1 \;=\; \bigl|\det E_{pq}\bigr| .$$

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and the elementary matrices $D_p(c)$ and $E_{pq}$ over $\mathbb{R}$.

[L1] If $a_i\le b_i$ are real for $i<n$, then any box obtained from the coordinate interval product $\prod_{i<n}[a_i,b_i]$ by independently choosing for each endpoint whether it is included has Lebesgue measure $\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). In particular $(u,v]^n=B(\mathbf u,\mathbf v)$ ([[def-half-open-box]]).

[F1] An **elementary matrix** is a matrix obtained by applying one elementary row operation to the identity matrix $I_n$; there are three types: $E_{pq}$ interchanges rows $p$ and $q$; $D_p(c)$ multiplies row $p$ by $c\ne0$; and $T_{pq}(c)$ adds $c$ times row $q$ to the distinct row $p$ ([[def-elementary-matrix]], [[def-matrix-product-and-identity-matrix]]).

[F2] Let $n\ge1$ and let $A\in M_n(R)$ be a matrix over a commutative ring; interchanging two rows changes $\det(A)$ to $-\det(A)$, and multiplying one row by any $c\in R$ changes it to $c\det(A)$ ([[thm-determinant-under-elementary-row-operations]], claims 1 and 2; [[def-determinant-of-a-square-matrix]]).

[F3] If $A$ is upper or lower triangular over a commutative ring, with $n\ge1$, then $\det(A)=\prod_{i<n}a_{ii}$ ([[thm-determinant-of-a-triangular-matrix]]).

[F4] For every linear $L:\mathbb R^m\to\mathbb R^n$ there is a unique matrix $A$ such that $(Lh)_i=\sum_{j<m}a_{ij}h_j$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[F5] The absolute value satisfies $|c|>0$ for $c \ne 0$, $|c| = c$ for $c \ge 0$ and $|c| = -c$ for $c \le 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 The identity matrix is triangular with every diagonal entry $1$, so $\det I_n = 1$; the row-operation table applied to $I_n$ then gives $\det D_p(c) = c$ and $\det E_{pq} = -1$, hence $|\det D_p(c)| = |c|$ and $|\det E_{pq}| = 1$. [F1, F2, F3, F5]

1.2 Reading off the matrix entries, $D_p(c)$ sends $x$ to the point with $p$-th coordinate $cx_p$ and the other coordinates unchanged, and $E_{pq}$ sends $x$ to the point with $p$-th coordinate $x_q$, $q$-th coordinate $x_p$ and the others unchanged. [F1, F4]

2.1 For claim 1, $D_p(c)\big[(0,1]^n\big] = \{\, x : 0 < x_i \le 1 \text{ for } i \ne p,\ x_p \in c\,(0,1] \,\}$. When $c>0$ this is the half-open box with $p$-th side $(0,c]$; when $c<0$ it is the box with $p$-th side $[c,0)$ and all other sides $(0,1]$. In either case [L1] gives Lebesgue measurability and measure $\prod_{i<n}(b_i-a_i)=|c|$. [step 1.2, L1, F5]

2.2 For claim 2, $E_{pq}$ restricts to a bijection of $(0,1]^n$ onto itself, since exchanging two coordinates of a point all of whose coordinates lie in $(0,1]$ again gives such a point and the map is its own inverse; hence the image is $(0,1]^n$, of measure $1$. [step 1.2, L1]

3.1 Steps 1.1, 2.1 and 2.2 are the two claims. [step 1.1, step 2.1, step 2.2] ∎
