---
id: lem-totally-real-abelian-artin-l-values-at-zero-in-zf
kind: lemma
title: "Abelian Artin L-values at zero over totally real fields in ZF"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - lem-totally-real-abelian-artin-l-values-at-zero-under-choice
  - thm-constructible-inner-model-semantic-and-formal-schema
  - prop-constructible-levels-transitivity-ordinals-and-rank
  - thm-delta-zero-absoluteness-for-transitive-sets
  - thm-rational-polynomial-root-isolation-is-sound-and-finite
  - thm-ring-of-integers-free-of-rank-degree
  - thm-identity-theorem-holomorphic-functions
  - thm-complex-power-series-converge-locally-uniformly
  - cor-complex-power-series-sums-are-analytic
  - lem-character-orthogonality-for-finite-abelian-groups
  - thm-group-ring-is-a-unital-algebra-with-basis-g
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Class Field Theory"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Introduction, printed p. 10: one-dimensional Artin L-functions are Weber L-series and nontrivial ones are entire. The ZF transfer and finite smoothing below are locally proved, not asserted in the source."
---

## Statement

Work in ZF. Let $H/F$ be a finite abelian extension of number fields with $F$ totally real, and let $G=\operatorname{Gal}(H/F)$. For every character $\chi:G\to\mathbb C^\times$, its complete Artin Euler product has an analytic continuation along a connected open set containing both $s=0$ and an open part of $\operatorname{Re}s>1$, and the continuation is holomorphic near $s=0$. For finite sets $S,T$ of places with $T$ nonarchimedean, put $\chi(\operatorname{Frob}_v)=0$ if $\chi$ is nontrivial on inertia at $v$, and otherwise use the arithmetic Frobenius value. The finite smoothed product
$$L_{S,T}(\chi,s)=L_{H/F}(s,\chi)\prod_{v\in S\setminus S_\infty}(1-\chi(\operatorname{Frob}_v)(Nv)^{-s})\prod_{v\in T}(1-\chi(\operatorname{Frob}_v)(Nv)^{1-s})$$
has a well-defined finite value at $s=0$. For finite rational-coordinate presentations, this value agrees with the value computed inside the constructible universe, transferred by the rational-disc power-series construction in the proof. These values for all characters determine a unique element of $\mathbb C[G]$ by finite Fourier inversion. No ambient choice axiom is assumed.

## Facts & Assumptions

**Given:** ZF, the finite extension $H/F$, its character $\chi$ and the finite place sets in the Statement.

[F1] Each fixed ZFC axiom, and each fixed proof using finitely many axiom instances, holds relativized to the definable transitive constructible class $\mathcal L$, which has the ambient ordinals. This is a formula-by-formula schema, not a truth predicate for the class. [[thm-constructible-inner-model-semantic-and-formal-schema]] [[prop-constructible-levels-transitivity-ordinals-and-rank]]

[F2] Bounded formulas are absolute between transitive classes. Rational polynomials have finite exact rational isolating data for their real roots, and every root occurs in that list. The integer ring of a number field is finite free over $\mathbb Z$. [[thm-delta-zero-absoluteness-for-transitive-sets]] [[thm-rational-polynomial-root-isolation-is-sound-and-finite]] [[thm-ring-of-integers-free-of-rank-degree]]

[F3] Under AC, Countable Choice and DC, the Artin function for a nontrivial character is entire, while the trivial character gives a function meromorphic with its only pole at $1$; the smoothed values at zero are finite. [[lem-totally-real-abelian-artin-l-values-at-zero-under-choice]]

[F4] A complex power series defines a holomorphic function on its convergence disc, and two holomorphic functions on a domain agreeing on a set with an interior accumulation point agree everywhere. [[thm-complex-power-series-converge-locally-uniformly]] [[cor-complex-power-series-sums-are-analytic]] [[thm-identity-theorem-holomorphic-functions]]

[F5] Characters of a finite abelian group form a complete orthogonal family; their evaluations uniquely determine an element of its complex group ring. [[lem-character-orthogonality-for-finite-abelian-groups]] [[thm-group-ring-is-a-unital-algebra-with-basis-g]]

## Proof

1.1 Choose a finite rational basis of $F$ and extend it to one for $H$; this is a finite selection. Replace the fields by their isomorphic rational-coordinate presentations. Their multiplication and inclusion tables, and every element of either field, are finite rational data in $\mathcal L$. An element is integral exactly when a finite monic integer polynomial annihilates it, an arithmetic condition on these tables, so the internal and ambient integer rings agree. By [F2] each is finite free over $\mathbb Z$. Every additive subgroup of $\mathbb Z^n$ is finitely generated in ZF: project to one coordinate, use its least positive image generator if nonzero and one preimage, then induct on the kernel. Thus every ideal is specified by a finite integer tuple and belongs to $\mathcal L$; internal and ambient ideals, prime ideals and their finite residue rings agree. The field automorphisms are rational matrices satisfying finite multiplication-table identities, so their group and its finite action on prime ideals agree as well. [F1, F2, given, construct, algebra]

2.1 A value of a finite-group character is a root of unity. Its real and imaginary parts are real algebraic; finite rational root-isolation data and repeated dyadic bisection give their unique rational cuts inside $\mathcal L$. The finite character table therefore belongs to $\mathcal L$ with the same complex values. The real embeddings determining total reality and the archimedean places are likewise described by finite algebraic root data. Each finite place in $S$ or $T$ is a prime ideal from step 1.1, and the finite sets can be coded by finite lists, so the same extension, character and place data satisfy the hypotheses of [F3] inside $\mathcal L$. Inertia, residue degrees and Frobenius on the finite residue rings are finite calculations in the identical ideal and automorphism data. Thus every Artin Euler factor is the same formal factor internally and externally. [F1, F2, step 1.1, given, construct, algebra]

3.1 Apply the fixed proof of [F3] inside $\mathcal L$. Its nontrivial-character continuation is entire; for the trivial character it is holomorphic off $1$. Let $P$ be the fixed polygonal path $2\to2+i\to i\to0$. It stays at distance at least $1$ from $1$. Cover it by a fixed finite chain of discs of radius $1/4$ with rational complex centres at successive distance at most $1/8$, including the endpoints. In $\mathcal L$, expand the continuation at each centre. The closed disc of radius $1/2$ around that centre lies in the holomorphic domain, so its internal Cauchy estimate gives a rational bound $M$ with $|a_n|\le M2^n$ for the Taylor coefficients. These finitely many coefficient sequences and rational bounds are elements of $\mathcal L$. [F1, F3, step 2.1, construct]

4.1 View each coefficient sequence as an ambient sequence of complex numbers. Internal and ambient order on its constructible real and imaginary parts is determined by the same rational cuts, so the inequalities in step 3.1 remain true. On every radius-$1/4$ disc, the tail is bounded by $M\sum_{n\ge N}2^{-n}$; the explicit geometric bound makes the series uniformly convergent there in the ambient universe. By [F4] each series is holomorphic on its open disc. For any rational complex point in the intersection of two successive discs, the internal sums agree because they are expansions of the same internal function. The same rational tail bounds make those sums equal to their ambient sums. Rational complex points in the open intersection have an accumulation point, so [F4] makes the two ambient functions agree throughout that intersection. The finite chain therefore glues to a holomorphic function on a connected open neighborhood of $P$. [F1, F2, F4, step 3.1, algebra]

5.1 On the first disc the real part exceeds $1$. At each rational complex point there, the internal continuation equals the Artin Euler product. Its local factors are the same by step 2.1; the finite partial products and their explicit convergence bounds are arithmetic on the common prime codes. Hence their internal limit and ambient limit have the same rational cut. The ambient disc function therefore agrees with the ambient Euler product at every rational complex point of that disc, and [F4] gives equality throughout it. Step 4.1 is consequently an actual analytic continuation of the original Euler product to a neighborhood of zero. This argument uses one finite disc chain per character, not a choice of data for an infinite family. [F2, F4, step 2.1, step 4.1, algebra]

6.1 The $S$-depletion and $T$-smoothing factors are finite products of entire exponentials, so they preserve the continuation and its finite value at zero. Finite character orthogonality [F5] gives a unique complex group-ring element with these values; the finite family of characters is explicitly enumerated by its finite group and root-of-unity values. All inputs and the construction were handled in ZF. [F5, step 5.1, given, algebra] ∎
