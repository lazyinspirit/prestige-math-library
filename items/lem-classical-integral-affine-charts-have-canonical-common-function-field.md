---
id: "lem-classical-integral-affine-charts-have-canonical-common-function-field"
kind: "lemma"
title: "Compatible affine charts of an integral classical variety have one function field"
status: "draft"
origin: "pipeline"
deps: ["def-classical-integral-affine-atlas-and-chartwise-morphism", "lem-classical-irreducible-space-open-intersection-criterion", "lem-classical-principal-opens-form-affine-basis", "thm-classical-principal-open-is-affine-variety", "thm-classical-function-field-independent-of-affine-open", "lem-classical-regular-functions-on-open-embed-in-function-field", "def-axiom-of-choice"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, 3k p. 74, 5.10 p. 103, §5k p. 116"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. All nonempty affine charts and all nonempty affine opens of an integral classical variety $X$ have canonically isomorphic fraction fields. These comparisons satisfy the cocycle identity on triple intersections and commute with restriction and isomorphisms. The resulting field is denoted $k(X)$.

## Facts & Assumptions

**Given:** AC, an integral classical variety $X$ over algebraically closed $k$ with a compatible affine atlas, and nonempty affine opens of $X$.

[F1] Transition maps identify the regular functions on chart overlaps ([[def-classical-integral-affine-atlas-and-chartwise-morphism]]).

[F2] Two nonempty opens of an irreducible space meet, and every nonempty open remains irreducible ([[lem-classical-irreducible-space-open-intersection-criterion]]).

[F3] Principal opens form a basis in each affine chart ([[lem-classical-principal-opens-form-affine-basis]]).

[F4] Nonempty principal opens of a chart are affine ([[thm-classical-principal-open-is-affine-variety]]).

[F5] An affine variety and a nonempty affine open have the same function field ([[thm-classical-function-field-independent-of-affine-open]]).

[F6] Equality of sections on a nonempty open determines equality of the associated fractions ([[lem-classical-regular-functions-on-open-embed-in-function-field]]).

## Proof

**Proof technique:** direct.

1.1 Let U,V be two nonempty affine opens of X. Their overlap is nonempty by F2. F3 supplies a nonempty principal open $W\subseteq U\cap V$ in U. By F4 it is affine, and F1 identifies its locally regular structure with that inherited from V. Thus W is also an affine open of V. F5 identifies both k(U) and k(V) with k(W), defining a comparison $c_{UV}:k(U)\to k(V)$. [F1, F2, F3, F4, F5, given]

2.1 For another choice $W^{\prime}$, the intersection $W\cap W^{\prime}$ is nonempty open in U. Choose a nonempty principal open T of U in that intersection. It is affine with the inherited structure in W and $W^{\prime}$. F5 says all field comparisons are restriction maps, and F6 says two fraction values that agree after restriction are equal. Both candidate comparisons therefore agree after passing to k(T), an isomorphic field, so they are equal. [F2, F3, F4, F5, F6, step 1.1]

3.1 For three nonempty affine opens U,V,Z, choose a nonempty principal open T of U inside $U\cap V\cap Z$, possible by applying F2 twice and then F3. By step 2.1 it may be used in every pairwise comparison. All three identifications then pass through k(T), so $c_{VZ}\circ c_{UV}=c_{UZ}$, $c_{UU}$ is the identity, and $c_{VU}=c_{UV}^{-1}$. Restrictions commute by the same construction. An isomorphism of varieties carries common affine opens and their regular-function restrictions to common affine opens; its pullbacks commute pointwise with restrictions and hence with their field extensions. This proves compatibility with isomorphisms and defines a single field independent of the chosen chart. [F1, F2, F3, F5, step 1.1, step 2.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, 3k p. 74, 5.10 p. 103, §5k p. 116. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
