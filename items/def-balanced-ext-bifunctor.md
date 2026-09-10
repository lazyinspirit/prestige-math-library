---
id: def-balanced-ext-bifunctor
kind: definition
title: "The balanced Ext bifunctor"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic, lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data, prop-the-ext-balance-isomorphism-is-natural-in-both-variables, thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-injective-comparison-map-exists, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy, def-dependent-choice]
verification:
  precheck: n/a
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-choice-contract-and-coherence-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Definition

Assume the Axiom of Dependent Choice, [[def-dependent-choice]]. Let $\mathcal A$ be an abelian category
with enough projectives and enough injectives, and fix supplied projective and
injective resolution data on all objects of $\mathcal A$. For each $n\geq0$,
define
$$\operatorname{Ext}_{\mathcal A}^{n}(M,N)$$
to mean either $\operatorname{Ext}_{P}^{n}(M,N)$ or $\operatorname{Ext}_{I}^{n}(M,N)$, identified by [[thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]]. The independence and naturality statements in [[lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data]] and [[prop-the-ext-balance-isomorphism-is-natural-in-both-variables]] apply under the stated DC assumption. This is a bifunctor contravariant in $M$ and covariant in $N$, up to the canonical identifications below; it is not a definition by equality of the two complexes.

## Well-definedness under changes of resolution

For projective resolutions $P,P'$ of the same $M$, use
[[thm-projective-comparison-map-exists]] under DC to choose $f:P'\to P$
lifting the identity. Precomposition induces a map
$c_{P,P'}:H^n\operatorname{Hom}(P,N)\to H^n\operatorname{Hom}(P',N)$.
Any two such $f$ are chain-homotopic by
[[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]].
If $f-g=dh+hd$, precomposition by $h$ is the cochain homotopy between
the two Hom maps: in degree $n$ it sends a cochain $\phi$ to
$\phi h_{n-1}$. Thus the induced map on cohomology is independent of $f$.
An identity comparison induces the identity. If $P''$ is a third resolution,
the composite of comparisons $P''\to P'\to P$ lifts the same identity
as a direct comparison; uniqueness up to homotopy gives
$c_{P',P''}c_{P,P'}=c_{P,P''}$. In particular opposite-direction
comparisons induce inverse isomorphisms.

For injective resolutions $I,I'$ of $N$, use
[[thm-injective-comparison-map-exists]] to obtain $g:I\to I'$ under $N$.
Postcomposition gives $c_{I,I'}$ on $H^n\operatorname{Hom}(M,I)$.
The cochain-homotopy uniqueness of
[[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]] makes
this map independent of $g$: postcomposing with a homotopy gives a Hom
cochain homotopy. Identities and composites of the comparison maps prove
$c_{I,I}=1$ and $c_{I',I''}c_{I,I'}=c_{I,I''}$, including invertibility.

Write $\beta_{P,I}$ for the balance isomorphism from the projective
presentation to the injective presentation. The augmentation-compatible
Hom double-complex squares in the cited independence and naturality results
give
$$c_{I,I'}\,\beta_{P,I}=\beta_{P',I'}\,c_{P,P'}.$$
This square, together with the two comparison composition laws, proves
coherence of changing either presentation, including successive mixed
changes. It is the change map $c_{P,P}$ or $c_{I,I}$ that is an identity
when its resolution is unchanged. The balance map $\beta_{P,I}$ between
different presentations need not be a literal identity. No uniqueness
theorem for arbitrary delta-functor morphisms is used in this justification.

The specified resolution systems are hypotheses, not a global selection
deduced here from DC. For fixed resolutions and explicitly supplied comparison
maps and homotopies, the Hom and cohomology calculations above are
choice-free; DC is used for existence of the arbitrary comparison data.
