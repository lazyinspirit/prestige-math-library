---
id: lem-quotient-spectrum-map-is-a-closed-immersion
kind: lemma
title: A surjective ring map induces a closed immersion of affine spectra
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 0
deps:
  - def-affine-scheme
  - def-closed-immersion-schemes
  - def-localisation-at-a-prime-ideal
  - def-morphism-affine-schemes-from-ring-map
  - lem-localisation-preserves-surjectivity
  - lem-quotient-spectrum-map-is-closed
  - thm-exactness-of-sheaves-stalkwise
  - thm-first-isomorphism-theorem-rings
  - thm-prime-spectrum-of-a-quotient-bijection
  - thm-stalk-structure-sheaf-prime-localization
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Appendix A §A(c), A.24 and A.26, printed pp. 574-575 (PDF 585-586): closed subschemes of an affine algebraic scheme are spectra of quotients and quotient maps are immersions."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "October 1st lecture, Definition 34, printed p. 11: a closed subscheme of an affine scheme is represented by a quotient of the coordinate algebra."
proof_strategy: direct
---

## Statement

Let $\varphi\colon B\to A$ be a surjective homomorphism of commutative unital rings and let $I=\ker\varphi$, so that $A\cong B/I$. Then the induced morphism $\operatorname{Spec}\varphi\colon\operatorname{Spec}A\to\operatorname{Spec}B$ ([[def-morphism-affine-schemes-from-ring-map]], [[def-affine-scheme]]) is a closed immersion in the sense of [[def-closed-immersion-schemes]]: its underlying map is a homeomorphism onto the closed subset $V(I)$, and the map $\mathcal O_{\operatorname{Spec}B}\to(\operatorname{Spec}\varphi)_*\mathcal O_{\operatorname{Spec}A}$ is surjective. No choice principle is used.

## Facts & Assumptions

[F1] A morphism is a closed immersion exactly when its underlying map is a homeomorphism onto a closed subset and its structure-sheaf map is surjective. ([[def-closed-immersion-schemes]])

[F2] A ring homomorphism $\psi\colon B\to A$ induces the morphism $\operatorname{Spec}\psi\colon\operatorname{Spec}A\to\operatorname{Spec}B$ whose underlying map is contraction of primes, and whose map on the basic open $D(b)$ is the localization $B_b\to A_{\psi(b)}$; these section maps are compatible with restrictions. ([[def-morphism-affine-schemes-from-ring-map]])

[F3] If $\pi\colon B\to B/I$ is a quotient map, then contraction along $\pi$ is a homeomorphism from $\operatorname{Spec}(B/I)$ onto the closed subset $V(I)$. ([[thm-prime-spectrum-of-a-quotient-bijection]], [[lem-quotient-spectrum-map-is-closed]])

[F4] The first isomorphism theorem identifies $A$ with $B/I$ through $\varphi$. ([[thm-first-isomorphism-theorem-rings]])

[F5] For a prime $\mathfrak p\in\operatorname{Spec}B$ the stalk of the structure sheaf at $\mathfrak p$ is $B_{\mathfrak p}$, the localization at the multiplicative set $B\setminus\mathfrak p$. ([[def-localisation-at-a-prime-ideal]], [[thm-stalk-structure-sheaf-prime-localization]])

[F6] Localizing a surjective module homomorphism at a multiplicative set gives a surjective homomorphism. ([[lem-localisation-preserves-surjectivity]])

[F7] A sequence of sheaves of abelian groups is exact if and only if it is exact on every stalk; in particular a morphism of sheaves is surjective if and only if all its stalk maps are surjective. ([[thm-exactness-of-sheaves-stalkwise]])

## Proof

**Given:** A surjective unital ring homomorphism $\varphi\colon B\to A$ with $I=\ker\varphi$, and the identification $A\cong B/I$ from [F4].

1.1 Replacing $A$ by $B/I$ along the isomorphism of [F4], the morphism $\operatorname{Spec}\varphi$ is the contraction map $\operatorname{Spec}(B/I)\to\operatorname{Spec}B$ of [F2], which by [F3] is a homeomorphism onto the closed subset $V(I)$. [F2, F3, F4]

1.2 At a prime $\mathfrak p\supseteq I$ of $B$, the sections of the direct image $(\operatorname{Spec}\varphi)_*\mathcal O_{\operatorname{Spec}A}$ over a basic open $D(b)\ni\mathfrak p$ are $A_{\varphi(b)}=(B/I)_{\varphi(b)}$ by [F2], and the basic opens $D(b)\ni\mathfrak p$ are cofinal among the neighbourhoods of $\mathfrak p$; hence the stalk of the direct image at $\mathfrak p$ is $(B/I)_{\mathfrak p}$, with stalk map $B_{\mathfrak p}\to(B/I)_{\mathfrak p}$ induced by localizing $\varphi$ at $B\setminus\mathfrak p$. Localization of the surjection $\varphi$ at each multiplicative set is surjective by [F6], so this stalk map is surjective, and the identification of the source stalk is [F5]. [F2, F5, F6]

1.3 At a prime $\mathfrak p\nsupseteq I$ of $B$, choose $u\in I\setminus\mathfrak p$; then $D(u)\ni\mathfrak p$ and the sections of the direct image over $D(u)$ are $(B/I)_{\varphi(u)}=(B/I)_0=0$, because $\varphi(u)=0$ becomes invertible in the localization. Every smaller basic open containing $\mathfrak p$ also lies in $D(u)$ and has zero sections, so the stalk of the direct image at $\mathfrak p$ is the zero ring and the stalk map is surjective trivially. [F2, F5, F6]

2.1 Steps 1.2 and 1.3 compute every stalk of the structure-sheaf map $\mathcal O_{\operatorname{Spec}B}\to(\operatorname{Spec}\varphi)_*\mathcal O_{\operatorname{Spec}A}$ and show each is surjective, so by the stalk criterion [F7] the sheaf map is surjective. With the homeomorphism onto $V(I)$ from step 1.1, [F1] makes $\operatorname{Spec}\varphi$ a closed immersion. Only the first isomorphism theorem, localizations of the given surjection and the stalk criterion were used, all applied to structures already determined by $\varphi$; no choice principle is used. [F1, F7, step 1.1, step 1.2, step 1.3] ∎ 