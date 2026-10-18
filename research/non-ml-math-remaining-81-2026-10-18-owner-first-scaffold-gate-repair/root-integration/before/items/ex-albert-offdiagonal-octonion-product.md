---
id: ex-albert-offdiagonal-octonion-product
kind: example
title: An off-diagonal product in the Albert algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras-examples
dependency_level: 3
deps: [def-hermitian-three-by-three-octonion-matrix-data, thm-real-albert-algebra-is-jordan, def-octonion-algebra-by-cayley-dickson, def-quaternions]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §8"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "John C. Baez, The Octonions, PDF pp. 31–35"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Statement

Write $E_{ab}(q)$ for the $3\times3$ matrix with $q$ in row $a$, column $b$,
and zero elsewhere. Let $X=E_{12}(i)+E_{21}(-i)$ and
$Y=E_{23}(j)+E_{32}(-j)$ in $H_3(\mathbb O)$. Their Jordan product has $k/2$ in the $(1,3)$ entry and
$-k/2$ in the $(3,1)$ entry.

## Facts & Assumptions

**Given:** The Hermitian matrix space $H_3(\mathbb O)$ and its product
$X\circ Y=(XY+YX)/2$.

[F1] The matrix product is $(XY)_{ab}=\sum_rX_{ar}Y_{rb}$, and
$X\circ Y=(XY+YX)/2$ ([[def-hermitian-three-by-three-octonion-matrix-data]]).

[F2] The embedded quaternion units obey $ij=k$, $ji=-k$, and
$\bar i=-i$, $\bar j=-j$, $\bar k=-k$
([[def-octonion-algebra-by-cayley-dickson]], [[def-quaternions]]).

[F3] The product maps Hermitian matrices into $H_3(\mathbb O)$
([[thm-real-albert-algebra-is-jordan]]).

## Proof
1.1 The identities in [F2] make $X$ and $Y$ Hermitian. In $XY$, the only possibly nonzero entry is $(XY)_{13}=X_{12}Y_{23}=ij=k$. In $YX$, the only possibly nonzero entry is $(YX)_{31}=Y_{32}X_{21}=(-j)(-i)=ji=-k$. Thus their half-sum has entries $k/2$ at $(1,3)$ and $-k/2$ at $(3,1)$, with all others zero. [given, F1, F2, algebra]

2.1 The product from step 1.1 is Hermitian, and by [F3] it belongs to the Albert Jordan algebra. [given, F3, step 1.1] ∎
