---
id: lem-geometric-local-integers-are-power-series-in-a-uniformizer
kind: lemma
title: "Complete geometric local integers are power series in a uniformizer"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-discrete-valuation
  - def-discrete-valuation-ring
  - def-geometric-local-field-at-a-curve-point
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: pending
---
## Statement

Let $k$ be a field, let $L$ be a complete discretely valued field containing $k$ as a coefficient subfield, and assume that the residue map identifies $k$ with the residue field of $L$. Let $v_L$ be the normalized valuation, let $\mathcal O_L$ be its valuation ring, and let $\pi$ be a uniformizer. Then the map $k\llbracket T\rrbracket\to\mathcal O_L$ that sends $T$ to $\pi$ and each coefficient to the corresponding element of $k$ is an isomorphism of complete topological $k$-algebras.

## Statement references

[[def-geometric-local-field-at-a-curve-point|Geometric local field at a curve point]]

[Richard Crew, *Local Class Field Theory*, §§1.2.5–1.2.7](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** $k\subset L$, the complete valuation ring $\mathcal O_L$ with residue field $k$, and a uniformizer $\pi$.

[F1] [[def-discrete-valuation]]: the normalized discrete valuation on $L$ is an integer-valued valuation, and a uniformizer has value one.

[F2] [[def-discrete-valuation-ring]]: the valuation ring consists of the elements of nonnegative valuation.

[A1] The residue map $\mathcal O_L\to k$ is surjective with kernel $\pi\mathcal O_L$, and $\mathcal O_L$ is complete for the $\pi$-adic topology, as specified in the Statement.

## Proof

1.1 Let $a_0=a\in\mathcal O_L$. Recursively define $c_n\in k$ to be the residue of $a_n$ and set $a_{n+1}=(a_n-c_n)/\pi$. The residue map is the identity on the coefficient subfield, so each $a_{n+1}$ is integral and $a-\sum_{n=0}^{N}c_n\pi^n\in\pi^{N+1}\mathcal O_L$ for every $N\geq0$. The partial sums are Cauchy; completeness gives a limit in $\mathcal O_L$, and the displayed remainders show that its limit is $a$. Thus the map is surjective. [F1, F2, given, A1, algebra]

2.1 If a nonzero series has first nonzero coefficient $c_m$, then it equals $\pi^m(c_m+\pi b)$ for some $b\in\mathcal O_L$. The parenthesized factor has nonzero residue $c_m$ and is a unit, so the series has valuation exactly $m$ and is nonzero in $L$. Hence the map is injective. It preserves the valuation and the coefficient field, so it and its inverse are continuous. [F1, given, step 1.1, algebra] ∎
