---
id: "thm-classical-principal-open-is-affine-variety"
kind: "theorem"
title: "Every nonempty principal open is a classical affine variety"
status: published
origin: "pipeline"
deps: ["thm-classical-affine-variety-prime-coordinate-ring", "thm-classical-principal-open-coordinate-ring-localization", "def-classical-affine-variety-morphism", "thm-classical-affine-morphisms-coordinate-ring-antiequivalence", "thm-universal-property-of-a-polynomial-ring", "thm-quotient-ring-universal-property", "thm-universal-property-of-localisation", "thm-classical-affine-nullstellensatz-correspondence", "lem-classical-morphism-inverse-image-of-closed-is-closed", "def-axiom-of-choice", "thm-classical-affine-global-regular-functions-coordinate-ring", "thm-classical-polynomial-functions-equal-coordinate-ring"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3h pp. 71–72 and Proposition 3.11 pp. 61–62"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For an affine variety $X$ and $0\ne f\in A=k[X]$, $D_X(f)$ with its regular functions is isomorphic to the closed graph $$Z=\{(x,t)\in X\times k:tf(x)=1\}.$$ Its coordinate ring is canonically $A[T]/(Tf-1)\cong A_f$, a nonzero domain; hence $D_X(f)$ is affine in this intrinsic realization.

## Facts & Assumptions

**Given:** AC, an affine variety $X$ over algebraically closed $k$, $A=k[X]$, and a nonzero element $f\in A$.

[F1] A variety has a nonzero domain coordinate ring and conversely ([[thm-classical-affine-variety-prime-coordinate-ring]]).

[F2] Regular functions on D(f) form A_f ([[thm-classical-principal-open-coordinate-ring-localization]]).

[F3] Coordinate-ring maps describe affine morphisms ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]]).

[F4] A value for T defines a polynomial-ring map ([[thm-universal-property-of-a-polynomial-ring]]).

[F5] An annihilated relation permits passage to the quotient ([[thm-quotient-ring-universal-property]]).

[F6] A map making f invertible factors through A_f ([[thm-universal-property-of-localisation]]).

[F7] Prime ideals equal the vanishing ideals of their zero loci ([[thm-classical-affine-nullstellensatz-correspondence]]).

[F8] Locally regular functions pull back under morphisms ([[lem-classical-morphism-inverse-image-of-closed-is-closed]]).

[F9] Every global regular function on an affine algebraic set belongs to its coordinate ring ([[thm-classical-affine-global-regular-functions-coordinate-ring]]).

[F10] Coordinate-ring elements are polynomial functions in the coordinate classes ([[thm-classical-polynomial-functions-equal-coordinate-ring]]).

## Proof

**Proof technique:** direct.

1.1 In $B=A[T]/(Tf-1)$ the classes of $T$ and $f$ are inverses. F6 defines $A_f\to B$ sending $a/f^r$ to $aT^r$. Conversely F4 and F5 define $B\to A_f$ by $T\mapsto1/f$, since the relation maps to zero. The composites fix $A$ and $T$ on one side and send $a/f^r$ to itself on the other, hence are identities. [F4, F5, F6, given, algebra]

2.1 By F1, A is a domain. Since $f\ne0$, fractions with powers of $f$ embed into its fraction field (a zero image forces the numerator zero). Thus $A_f$, and hence $B$, is a nonzero domain. The polynomial presentation of $B$ has prime kernel: the inverse image of 0 under its surjection is proper and satisfies the product test. F7 makes its zero locus precisely $Z$ and its coordinate ring exactly $B$. F1 therefore makes $Z$ a variety. [F1, F7, step 1.1, algebra]

3.1 The projection $p:Z\to X$ has image $D(f)$, and $q:D(f)\to Z$, $x\mapsto(x,1/f(x))$, is its set-theoretic inverse. Projection is a morphism by the coordinate dictionary F3. The coordinate pullbacks for q are regular: those of X are polynomial restrictions and the last is $1/f$, which belongs to F2. Every global regular function on Z is a polynomial in its coordinates by F9 and F10, so q is a morphism as well. [F2, F3, step 2.1, F9, F10]

4.1 F8 upgrades these maps to pullback on all target opens. Viewing p as a map into the open $D(f)$ has the same property, because any section on an open there is a section on the same open in X. Thus p and q are inverse locally regular morphisms. Finally $D(f)$ is nonempty: otherwise f is the zero polynomial function, contrary to $f\ne0$ by F2. [F2, F8, step 3.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3h pp. 71–72 and Proposition 3.11 pp. 61–62. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
