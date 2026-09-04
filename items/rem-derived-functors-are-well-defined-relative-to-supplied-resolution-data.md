---
id: rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data
kind: remark
title: "Derived functors are well defined relative to supplied resolution data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, lem-the-induced-homology-map-is-independent-of-the-comparison-lift, lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension, thm-left-derived-functors-relative-to-supplied-data-are-additive-functors, thm-right-derived-functors-relative-to-supplied-data-are-additive-functors, thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws, prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
Assume the Axiom of Dependent Choice. Derived functors are well defined here
in a specific seven-part sense, and each
part is now on the page rather than being collapsed into one slogan:

1. supplied resolutions give the object assignments;
2. comparison maps or extensions exist for each morphism
   ([[lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions]],
   [[lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions]]);
3. the induced map is independent of the chosen lift
   ([[lem-the-induced-homology-map-is-independent-of-the-comparison-lift]],
   [[lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]]);
4. those maps preserve identities
   ([[thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]],
   [[thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]]);
5. those maps preserve composition
   ([[thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]],
   [[thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]]);
6. changing the supplied data yields a natural isomorphism
   ([[thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]],
   [[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]); and
7. those change-of-data isomorphisms satisfy identity and cocycle laws
   ([[prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws]],
   [[prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws]]).

What this remark does **not** claim is a global theorem saying that enough
projectives or enough injectives canonically choose one resolution for every
object. The present conclusions are relative to displayed supplied data, and
two different data are compared by natural isomorphism rather than by an
unstated class-sized choice.
