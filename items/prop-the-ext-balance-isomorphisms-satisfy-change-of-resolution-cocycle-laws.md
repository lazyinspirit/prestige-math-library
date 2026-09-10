---
id: prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws
kind: proposition
title: "Ext balance isomorphisms satisfy change-of-resolution cocycle laws"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic, lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data, prop-the-ext-balance-isomorphism-is-natural-in-both-variables, thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-injective-comparison-map-exists, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy, def-dependent-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-typed-coherence-and-choice-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume Dependent Choice (DC) in an abelian category with enough projectives
and injectives, and supply the projective and injective resolutions used
below. For fixed objects $M,N$ and $n\ge0$, write
$E_P=\operatorname{Ext}_P^n(M,N)$ and $E_I=\operatorname{Ext}_I^n(M,N)$.
Let $c_{P,P'}:E_P\to E_{P'}$ and $c_{I,I'}:E_I\to E_{I'}$ be the maps
induced by resolution comparisons over or under the identity objects.
Then
$$c_{P,P}=1,\qquad c_{P',P''}c_{P,P'}=c_{P,P''},\qquad c_{I,I}=1,\qquad c_{I',I''}c_{I,I'}=c_{I,I''}.$$
These maps are isomorphisms. For the balance maps
$\beta_{P,I}:E_P\to E_I$ one has the correctly typed square
$$c_{I,I'}\beta_{P,I}=\beta_{P',I'}c_{P,P'}.$$
Thus successive changes through any intermediate supplied resolutions give
the same identification as direct comparison, naturally in both objects.
The identity laws concern unchanged presentations; $\beta_{P,I}$ between
different presentations is not asserted to be a literal identity.

## Facts & Assumptions

**Given:** the stated resolution data and [[def-dependent-choice]]. The
balance maps are supplied by
[[thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]].

## Proof

**Proof technique:** direct.

1.1 By [[thm-projective-comparison-map-exists]] choose $f:P'\to P$ lifting $1_M$, and let $c_{P,P'}=H^n(f^*)$ on the Hom cochain complexes. Two such $f,g$ differ by $dh+hd$ by [[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]. Precomposition by $h$, in degree $n$ sending $\phi$ to $\phi h_{n-1}$, is a cochain homotopy between $f^*$ and $g^*$, so their induced maps on cohomology coincide. Identity comparison gives $c_{P,P}=1$. A composite $P''\to P'\to P$ lifts $1_M$, so comparison uniqueness proves $c_{P',P''}c_{P,P'}=c_{P,P''}$. Opposite-direction comparisons consequently induce inverse maps. [given, construct]

2.1 By [[thm-injective-comparison-map-exists]] choose $g:I\to I'$ extending $1_N$ and let $c_{I,I'}=H^n(g_*)$. The uniqueness theorem [[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]] supplies a homotopy between any two such extensions; postcomposition with it is a Hom cochain homotopy. Thus this map is independent of the extension. Identity extensions and composites give the two injective comparison laws, and reverse extensions give inverses, exactly as in step 1.1. [given, construct]

3.1 The chosen comparison maps induce the augmentation-compatible Hom double-complex squares in [[lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data]]. Both edge-to-total maps commute with them. Taking cohomology and inverting the appropriate edge isomorphism proves $c_{I,I'}\beta_{P,I}=\beta_{P',I'}c_{P,P'}$. The comparison laws of steps 1.1–2.1 and this square reduce successive changes, including mixed projective/injective changes, to direct comparison. Naturality in module morphisms follows from [[prop-the-ext-balance-isomorphism-is-natural-in-both-variables]] and comparison uniqueness: the two composite lifts in each change-of-resolution naturality square lift the same object morphism and hence induce equal cohomology maps. [step 1.1, step 2.1, algebra] ∎

## Remarks

DC supplies arbitrary comparisons and their homotopies. The equations are
choice-free when these data are explicitly supplied. This proof does not
use a uniqueness theorem for arbitrary morphisms of delta functors merely
because they agree in degree zero.
