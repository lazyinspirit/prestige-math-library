---
id: cor-blowup-birational-integral-scheme
kind: corollary
title: "Blowing up a nonzero ideal on an integral scheme is birational"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - lem-blowup-isomorphism-off-center
  - lem-blowup-reduced-integral-under-domain-rees
  - def-birational-morphism-schemes
  - def-integral-scheme
  - def-generic-point-irreducible-closed-subset
  - def-reduction-of-scheme
  - lem-blowup-local-on-base-scheme
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: "Combine integrality of the blowup with the off-center isomorphism over the dense open X minus Z, then read off the generic-point and codimension-one statements"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.9 (integral) and Lemma 31.33.4(1) (the blowup is an isomorphism over X minus Z), section 31.33"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Discussion of proper transforms and birationality, pp. 379-382"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, inherited from the blowup construction
([[def-axiom-of-choice]]). Let $X$ be an integral scheme
([[def-integral-scheme]]) and let $\mathcal I$ be a nonzero quasi-coherent
ideal sheaf of finite type. Then $\operatorname{Bl}_{\mathcal I}X$ is integral
and $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ is birational: $\pi$ is an
isomorphism over the nonempty dense open $X\smallsetminus Z$, and the generic
point of $\operatorname{Bl}_{\mathcal I}X$ maps to the generic point of $X$. If
moreover $X$ is normal and every irreducible component of $Z$ has codimension
at least two, the blowup is an isomorphism in codimension one, i.e. over the
complement of a closed subset of codimension at least two.

## Facts & Assumptions

**Given:** An integral scheme $X$, a nonzero quasi-coherent ideal sheaf
$\mathcal I$ of finite type with zero scheme $Z=V(\mathcal I)$, the blowup
$\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$
([[def-blowup-scheme-along-ideal]]), and the generic points $\eta_X$ of $X$ and
$\eta_{\operatorname{Bl}}$ of $\operatorname{Bl}_{\mathcal I}X$
([[def-generic-point-irreducible-closed-subset]]).

[F1] [[lem-blowup-reduced-integral-under-domain-rees]]: For an integral $X$ and
a nonzero ideal sheaf $\mathcal I$ of finite type, the blowup
$\operatorname{Bl}_{\mathcal I}X$ is integral; in particular it is nonempty,
reduced and irreducible, with a unique generic point.

[F2] [[lem-blowup-isomorphism-off-center]]: The restriction
$\pi\colon\pi^{-1}(X\smallsetminus Z)\to X\smallsetminus Z$ is an isomorphism
of schemes, and $E=\pi^{-1}(Z)$ is the complement of this open subscheme.

[F3] [[def-birational-morphism-schemes]]: For integral $k$-schemes of finite
type, a morphism $f$ is birational when it carries the generic point of the
source to the generic point of the target and the induced map on local rings at
the generic points is an isomorphism; equivalently $f$ identifies the function
fields.

[F4] [[def-integral-scheme]] and [[def-reduction-of-scheme]]: An integral
scheme is reduced, so its nilradical ideal is zero; hence a nonzero ideal sheaf
$\mathcal I$ has $V(\mathcal I)\neq X$, and $X\smallsetminus Z$ is a nonempty
open subset of the irreducible space $X$, therefore dense.

## Proof

1.1 The blowup is integral by [F1], so it is irreducible with a unique generic point and is nonempty; by [F2] the morphism $\pi$ restricts to an isomorphism $\pi^{-1}(X\smallsetminus Z)\cong X\smallsetminus Z$, and by [F4] the open $X\smallsetminus Z$ is nonempty and dense in the irreducible space $X$. [F1, F2, F4]

2.1 Consequently the fibre of $\pi$ over the generic point $\eta_X$ of $X$ is a single point: $\eta_X\in X\smallsetminus Z$ because $Z\ne X$ by [F4], and over the open $X\smallsetminus Z$ the morphism $\pi$ is an isomorphism, so $\pi^{-1}(\eta_X)$ consists of one point $\xi$. [F2, F4, step 1.1]

2.2 If every irreducible component of $Z$ has codimension at least two in $X$, then every point of codimension at most one lies in the open $X\smallsetminus Z$: a point of codimension at most one has closure an irreducible closed subset of dimension at most one, which cannot be contained in a component of $Z$ of codimension at least two. Since $\pi$ is an isomorphism over $X\smallsetminus Z$ by [F2], the blowup is an isomorphism in codimension one, over the complement of the closed subset $Z$ of codimension at least two; no normality of $X$ is used for this direction. [F2, step 1.1]

3.1 The point $\xi$ is the generic point of $\operatorname{Bl}_{\mathcal I}X$: the blowup is irreducible by step 1.1, so it has exactly one generic point, and a point of an irreducible scheme is generic exactly when it is not contained in any proper closed subset; since $\xi$ lies over the generic point of $X$ and $\pi$ is an isomorphism over the dense open $X\smallsetminus Z$, $\xi$ is not in $E=\pi^{-1}(Z)$ and every closed subset of the blowup either contains $\xi$ or is contained in $E$, while $E$ is a proper closed subset (its complement is nonempty); hence $\xi$ is generic. Therefore $\pi(\eta_{\operatorname{Bl}})=\eta_X$ and the map of local rings at the generic points is the isomorphism induced by the off-center isomorphism, so $\pi$ is birational in the sense of [F3] whenever $X$ is an integral $k$-scheme of finite type over a field. [F1, F2, F3, step 1.1, step 2.1]

4.1 Steps 1.1, 3.1 and 2.2 prove all the assertions: $\operatorname{Bl}_{\mathcal I}X$ is integral, $\pi$ is an isomorphism over the nonempty dense open $X\smallsetminus Z$, the generic point of the blowup maps to the generic point of $X$ with an isomorphism of local rings, so $\pi$ is birational, and the codimension hypothesis puts the non-isomorphism locus in codimension at least two. [step 1.1, step 3.1, step 2.2] ∎

## Remarks

- Normality of $X$ is not needed for the direction proved here; it is the
  standard hypothesis in the converse statements comparing a birational
  morphism with a blowup, which are not claimed on this page.
- The birationality statement for an arbitrary integral base is the concrete
  one: isomorphism over a nonempty dense open with the generic point carried to
  the generic point; the function-field formulation of
  [[def-birational-morphism-schemes]] applies over a field.
