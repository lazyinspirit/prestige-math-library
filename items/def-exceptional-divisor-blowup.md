---
id: def-exceptional-divisor-blowup
kind: definition
title: "Exceptional subscheme of a blowup"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-relative-proj-quasi-coherent-graded-algebra
  - def-rees-algebra-ideal-sheaf
  - def-blowup-scheme-along-ideal
  - def-scheme-theoretic-inverse-image-subscheme
  - def-closed-immersion-schemes
  - def-quasi-coherent-ideal-sheaf
  - def-base-change-morphism-schemes
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4 and the surrounding discussion of E=b^{-1}Z, section 31.33"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Definition of E_{X}Y in 19.2.0.1, p. 381"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Definition

Let $X$ be a scheme, let $\mathcal I\subseteq\mathcal O_X$ be a quasi-coherent
ideal sheaf ([[def-quasi-coherent-ideal-sheaf]]) with zero scheme
$Z=V(\mathcal I)\hookrightarrow X$, the closed subscheme cut out by $\mathcal I$
([[def-closed-immersion-schemes]]), and let
$\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of
[[def-blowup-scheme-along-ideal]]. The **exceptional subscheme** of the blowup
is the scheme-theoretic inverse image

$$E:=\pi^{-1}(Z)=Z\times_X\operatorname{Bl}_{\mathcal I}X$$

of [[def-scheme-theoretic-inverse-image-subscheme]]
([[def-base-change-morphism-schemes]]); it is a closed subscheme
$E\hookrightarrow\operatorname{Bl}_{\mathcal I}X$, its ideal sheaf is the
inverse image ideal
$\mathcal I\mathcal O_{\operatorname{Bl}_{\mathcal I}X}
:=\operatorname{Im}\bigl(\pi^*\mathcal I\to
\mathcal O_{\operatorname{Bl}_{\mathcal I}X}\bigr)$, and the structural
morphism of the blowup restricts to a morphism $E\to Z$. Set-theoretically,
$E$ is the preimage $\pi^{-1}(Z)$ of the underlying set of $Z$.

## Remarks

For an ideal not of finite type, the notation here extends
[[def-blowup-scheme-along-ideal]] by using
$\operatorname{Proj}_X(\bigoplus_{n\ge0}\mathcal I^n)$ directly. Its graded
algebra is quasi-coherent by the affine ideal-power calculation of
[[def-rees-algebra-ideal-sheaf]], and no finite generation is required by
[[def-relative-proj-quasi-coherent-graded-algebra]].

- The exceptional subscheme is defined for every quasi-coherent ideal sheaf
  $\mathcal I$ on $X$; no smoothness of $X$, regularity of $Z$, or
  invertibility of $\mathcal I$ is assumed.
- The construction inherits the Axiom of Choice from the blowup
  ([[def-blowup-scheme-along-ideal]]), and no further data is chosen.
- Nothing is asserted here about the components of $E$, its codimension in
  the blowup, or the invertibility of its ideal sheaf; those are supplied by
  later items of this page.
