---
id: lem-finite-dimensional-galois-representation-has-composition-series
title: "Finite-dimensional group representations have composition series"
kind: lemma
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-group
  - def-vector-space
  - def-linear-subspace
  - def-quotient-module
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5, Composition series and the Jordan–Hölder theorem"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
---

## Statement

Let $k$ be a field, $G$ a group, and $V$ a finite-dimensional $k$-vector
space with a linear action $\rho:G\to\operatorname{GL}_k(V)$. A subspace is
$G$-invariant when $\rho(g)U=U$ for every $g\in G$; it is simple when it is
nonzero and has no proper nonzero $G$-invariant subspace. Then there is a finite
chain of $G$-invariant subspaces
$$0=V_0\subsetneq V_1\subsetneq\cdots\subsetneq V_r=V$$
whose successive quotients $V_i/V_{i-1}$ are simple $G$-representations. When
$V=0$, take the empty chain, so $r=0$.

## Statement references

[Arvind Nair, *Algebra I*, Lecture 5, “Composition series and the Jordan–Hölder theorem”](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf)

## Facts & Assumptions

**Given:** A field $k$, a group $G$, and a finite-dimensional $k$-vector space
$V$ with a linear action of $G$.

[F1] [[def-vector-space]]: A vector space over $k$ has a vector addition and a
scalar action by $k$; its finite dimension is the number of vectors in a basis.

[F2] [[def-linear-subspace]]: A linear subspace contains zero and is closed
under addition and scalar multiplication.

[F3] [[def-group]]: A group action is encoded by a group homomorphism into the
group of invertible linear maps, so each $\rho(g)$ is an invertible linear map
and $\rho(gh)=\rho(g)\rho(h)$.

[F4] [[def-quotient-module]]: if $U$ is invariant, the cosets $V/U$ form a
vector space with the induced action $g\cdot(v+U)=\rho(g)v+U$; invariant
subspaces and their quotients inherit the corresponding actions.

## Proof

1.1 We argue by induction on $n=\dim_kV$. If $n=0$, the empty chain works; if $n>0$ and there is no proper nonzero invariant subspace, then $0\subsetneq V$ is a one-factor series with simple quotient. [F1, F3, given, algebra]

1.2 Otherwise choose a proper nonzero invariant $U$. Then $0<\dim_kU<n$ and $0<\dim_k(V/U)<n$, and [F2]–[F4] give the induced quotient action $g\cdot(v+U)=\rho(g)v+U$; induction supplies series for $U$ and $V/U$. [F1, F2, F3, F4, given, choose, construct]

2.1 Concatenate the series for $U$ with the inverse images in $V$ of the nonzero terms of the quotient series. Each new factor is isomorphic to a simple quotient factor of $V/U$, while the earlier factors are those of $U$, so the chain is a composition series. [F2, F3, F4, step 1.2, construct, algebra] ∎
