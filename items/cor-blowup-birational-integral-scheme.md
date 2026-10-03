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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
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

1.1 The blowup is integral by [F1], and $W=\pi^{-1}(X\setminus Z)$ is isomorphic to the nonempty dense open $X\setminus Z$ by [F2, F4]. The generic point of an integral scheme belongs to every nonempty open; it is also the generic point of that open. Hence the generic point of the blowup belongs to $W$ and maps to the generic point of $X\setminus Z$, namely the generic point of $X$. The open isomorphism identifies their local rings. This proves the concrete birational assertion for arbitrary integral $X$, and the function-field formulation when [F3] applies. [F1, F2, F3, F4]

2.1 Under the codimension assumption, a point in $Z$ is a specialization of the generic point of an irreducible component of $Z$. Codimension cannot decrease under specialization: locally, the corresponding prime contains that component's prime, and every chain below the latter is also a chain below the former. Thus no point of codimension at most one belongs to $Z$. The isomorphism over $X\setminus Z$ is therefore an isomorphism in codimension one, in exactly the sense stated. Normality is not needed for this implication. [F2, step 1.1] ∎

## Remarks

- Normality of $X$ is not needed for the direction proved here; it is the
  standard hypothesis in the converse statements comparing a birational
  morphism with a blowup, which are not claimed on this page.
- The birationality statement for an arbitrary integral base is the concrete
  one: isomorphism over a nonempty dense open with the generic point carried to
  the generic point; the function-field formulation of
  [[def-birational-morphism-schemes]] applies over a field.
