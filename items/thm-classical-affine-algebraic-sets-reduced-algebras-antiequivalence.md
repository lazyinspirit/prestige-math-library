---
id: "thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence"
kind: "theorem"
title: "Classical affine algebraic sets and reduced finitely generated $k$-algebras are contravariantly equivalent"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-nullstellensatz-correspondence", "def-classical-affine-coordinate-ring", "def-reduced-finitely-generated-k-algebra-interface", "lem-classical-affine-closed-points-are-maximal-ideals", "thm-classical-affine-morphisms-coordinate-ring-antiequivalence", "cor-reduced-quotient-by-the-nilradical", "def-finite-type-and-module-finite-algebras", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3e and Proposition 3.25, pp. 65–67"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. Affine algebraic sets over algebraically closed $k$, with locally regular morphisms, are contravariantly equivalent to reduced finite-type unital $k$-algebras. Both object realization and full faithfulness hold, including the correspondence $\varnothing\leftrightarrow0$.

## Facts & Assumptions

**Given:** AC and an algebraically closed field $k$; the categories of affine algebraic sets and of reduced finite-type unital $k$-algebras, with zero algebras allowed.

[F1] Coordinate rings of algebraic sets are reduced and finite type ([[def-classical-affine-coordinate-ring]]).

[F2] Reducedness excludes nonzero nilpotents and finite type supplies a polynomial presentation ([[def-reduced-finitely-generated-k-algebra-interface]]).

[F3] Radical ideals are exactly vanishing ideals of their zero loci ([[thm-classical-affine-nullstellensatz-correspondence]]).

[F4] The morphism dictionary is a natural bijection for all algebraic sets ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]]).

[F5] Points are canonically the maximal ideals of the coordinate ring ([[lem-classical-affine-closed-points-are-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 For every algebraic set $X$, F1 places $k[X]$ in the proposed algebra category, and F4 makes pullback a contravariant functor that is bijective on every hom-set. Thus it is fully faithful, including the empty cases already verified there. [F1, F4, given]

1.2 Given a reduced finite-type algebra $B$, choose a surjective presentation $R=k[T_1,\ldots,T_m]\to B$ with kernel $J$. If $h^r\in J$ for $r\ge1$, the image of $h$ is nilpotent and hence zero by reducedness, so $h\in J$. Therefore $J$ is radical. F3 gives $I(V(J))=J$, and the presentation identifies $k[V(J)]=R/J$ with $B$. For $B=0$, $J=R$ and $V(J)=\varnothing$. [F2, F3, given]

2.1 The object realization can be made intrinsic: use the maximal ideals of $B$, with the topology and regular functions transported from any presentation. F5 identifies the points, and the algebra isomorphism between two presentations gives inverse morphisms by F4. Their pullbacks are the prescribed identities on $B$, so full faithfulness forces all such comparison maps and their composites to agree. Thus the realization is independent up to canonical isomorphism, and step 1.1 with step 1.2 proves the antiequivalence. [F4, F5, step 1.1, step 1.2] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3e and Proposition 3.25, pp. 65–67. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
