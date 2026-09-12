---
id: "def-standard-orientation-of-the-affine-simplex"
kind: "definition"
title: "Standard orientation of the affine simplex"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: direct
deps: ["def-standard-topological-simplex-and-its-affine-face-maps","def-orientation-of-a-simplex","def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space","def-induced-boundary-orientation"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Definition

For $k\ge1$, orient the affine span of the standard simplex $\Delta^k=[v_0,\ldots,v_k]$ by the ordered basis
$$E_1=v_1-v_0,\ldots,E_k=v_k-v_0.$$
The ordered face opposite $v_i$ has the remaining vertices in their original order. Its outward-normal-first boundary orientation is $(-1)^i$ times that ordered orientation. Thus the oriented boundary convention is $\partial[v_0,\ldots,v_k]=\sum_{i=0}^k(-1)^i[v_0,\ldots,\widehat v_i,\ldots,v_k]$.

Orient $\Delta^0$ as a positive point. It has no faces. For an interval, the displayed boundary is its positive terminal point minus its positive initial point. These coefficients record determinant-line signs on zero-dimensional faces; they do not assert that a one-vertex abstract simplex has two vertex orderings. Boundary orientation is computed at the relative interior of each face, where the simplex is locally a half-space; no smooth structure on general manifolds with corners is used.

## Facts & Assumptions

[F1] [[def-standard-topological-simplex-and-its-affine-face-maps]] gives barycentric coordinates, vertices and the zero-insertion affine face maps.

[F2] [[def-orientation-of-a-simplex]] identifies ordered vertex lists up to even permutation.

[F3] [[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]] supplies determinant-line rays, including the two rays in dimension zero.

[F4] [[def-induced-boundary-orientation]] uses an outward vector first, followed by a positive boundary determinant.

## Verification

**Given:** The standard simplex and its ordered vertices. For positive dimension write $\Omega=E_1\wedge\cdots\wedge E_k$.

1.1 The affine parametrization $x\mapsto v_0+\sum_{j=1}^k x_jE_j$ identifies the simplex with $x_j\ge0$ and $\sum_jx_j\le1$. The $E_j$ are independent: their coordinates in positions $1,\ldots,k$ form the identity matrix. Swapping two vertices other than $v_0$ swaps two basis columns and changes the wedge sign. Swapping $v_0,v_1$ replaces the basis by $-E_1,E_2-E_1,\ldots,E_k-E_1$, whose wedge is $-\Omega$. These swaps generate the vertex permutations, so a permutation changes the ray by its permutation sign. The affine convention therefore agrees with [F2] for $k\ge1$. [F1, F2, F3, given]

2.1 For $1\le i\le k$, the face $x_i=0$ has its ordered basis $E_1,\ldots,\widehat E_i,\ldots,E_k$. At a relative interior point, $-E_i$ points outward, since the interior has $x_i>0$. Moving this vector from the first position to position $i$ gives $$(-E_i)\wedge E_1\wedge\cdots\wedge\widehat E_i\wedge\cdots\wedge E_k=(-1)^i\Omega.$$ Multiplying the face determinant by $(-1)^i$ makes its wedge after that outward vector positive. Thus [F4] gives exactly the claimed boundary sign on this face. [F3, F4, step 1.1]

2.2 On face zero, $\sum_jx_j=1$, the remaining ordered vertices are $v_1,\ldots,v_k$, with basis $E_2-E_1,\ldots,E_k-E_1$. The vector $E_1$ points outward, since it increases the coordinate sum. Its wedge with this face basis is $\Omega$, because all terms selecting another $E_1$ vanish by alternation. Hence the ordered face already has the boundary orientation, giving sign $(-1)^0=1$. The outward vectors in this calculation need not be perpendicular: their strict transverse directions are exactly what [F4] requires. [F3, F4, step 1.1]

3.1 For $k=1$, the face bases in steps 2.1–2.2 are empty determinants, namely $1\in\Lambda^0\{0\}=\mathbb R$. The outward vectors at $v_0,v_1$ are $-E_1,E_1$, so their induced determinant-line signs are respectively minus and plus. This gives $[v_1]-[v_0]$, despite the unique vertex ordering of each abstract point in [F2]. For $k=0$, the chosen ray is positive and [F1] gives no face maps or negative-dimensional simplex. The simplex is never empty; zero coefficients or degenerate maps into a target do not change this domain orientation. Every vector and sign was specified explicitly, so no choice principle is used. [F1, F2, F3, F4, step 2.1, step 2.2] ∎
