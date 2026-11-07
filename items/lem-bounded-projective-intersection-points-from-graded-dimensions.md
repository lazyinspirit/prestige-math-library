---
id: lem-bounded-projective-intersection-points-from-graded-dimensions
kind: lemma
title: "Coprime plane forms have at most the product of their degrees in common projective points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-projective-space-points
  - def-algebraically-closed-field
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-monomials-multidegree-and-total-degree
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Theorems 3 and 4"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

Let $k$ be an algebraically closed field, and let $F,G\in k[x_0,x_1,x_2]$ be
nonzero homogeneous forms of positive degrees $d$ and $e$ with no common
nonconstant factor. Then the set of distinct points
$[x_0:x_1:x_2]\in\mathbb P^2(k)$ at which both forms vanish has at most $de$
elements.

## Statement references

[Heath-Brown, the plane-curve intersection bound used in Theorems 3 and 4](https://arxiv.org/pdf/math/0405392v1)

## Facts & Assumptions

**Given:** The field and forms in the Statement.

[F1] [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]:
$S=k[x_0,x_1,x_2]$ is a unique factorization domain.

[F2] [[def-homogeneous-polynomial-and-homogeneous-ideal]],
[[def-monomials-multidegree-and-total-degree]]: A degree-$N$ homogeneous part
$S_N$ has the degree-$N$ monomials as a basis, and multiplication by a
homogeneous form adds degrees.

[F3] [[def-projective-space-points]]: Projective points are nonzero coordinate
vectors modulo nonzero scalar multiplication.

## Proof

1.1 Put $S_N=0$ for $N<0$. For $N\ge d+e$, consider the linear map
$\phi:S_{N-d}\oplus S_{N-e}\to S_N$ given by
$\phi(A,B)=AF+BG$. Its image is the degree-$N$ part of the ideal $(F,G)$.
If $AF+BG=0$, then $F\mid BG$. Factor $F$ into irreducibles in [F1]; none of
those irreducible factors divides $G$ by the no-common-factor hypothesis, so
each factor of $F$, with its multiplicity, divides $B$. Hence $B=FC$ and
$A=-GC$ for a homogeneous $C\in S_{N-d-e}$. Conversely every such pair is in
the kernel. Thus $\ker\phi$ is isomorphic to $S_{N-d-e}$. [F1, F2, given, algebra]

1.2 The number of degree-$j$ monomials in three variables is
$\binom{j+2}{2}$. Rank-nullity applied to step 1.1 therefore gives
$$\dim_k(S/(F,G))_N=\binom{N+2}{2}-\binom{N-d+2}{2}-\binom{N-e+2}{2}+\binom{N-d-e+2}{2}=de.$$
The last equality follows by expanding the four quadratic polynomials in $N$.
[step 1.1, F2, algebra]

2.1 Take any finite set of $r$ distinct common projective zeros
$P_1,\ldots,P_r$. Choose $N\ge\max(d+e,r-1)$. For each pair $i\ne j$,
representatives of $P_i$ and $P_j$ are linearly independent by [F3], so there
is a linear form $L_{ij}$ that vanishes at $P_j$ but not at $P_i$. For each
$i$, the product $Q_i=\prod_{j\ne i}L_{ij}$ vanishes at every $P_j$ with
$j\ne i$ and is nonzero at $P_i$. Multiplying $Q_i$ by a suitable power of a
coordinate form nonzero at $P_i$ gives a degree-$N$ form $R_i$ with the same
vanishing pattern. Thus evaluation from $S_N$ to $k^r$ is surjective. [F2, F3, choose, construct]

2.2 Since $F$ and $G$ vanish at all $P_i$, evaluation annihilates the image
of $\phi$ in step 1.1 and hence factors through $(S/(F,G))_N$. Step 2.1 is a
surjection from that quotient to $k^r$, while step 1.2 gives quotient
dimension $de$; therefore $r\le de$. Every finite subset of the common zero
set has size at most $de$, so the full set has at most $de$ elements. This
argument uses finite choices only and no choice axiom. [step 1.1, step 1.2, step 2.1, algebra] ∎
