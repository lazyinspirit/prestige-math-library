---
id: lem-nonaffine-smooth-affine-open-cartier-boundary
kind: lemma
title: "An affine open in a smooth integral variety has Cartier boundary"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-nonaffine-regular-local-ring-is-ufd, thm-cartier-weil-isomorphism-locally-factorial, thm-morphisms-into-affine-scheme-global-sections, def-separated-morphism-schemes]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemmas 31.17.5 and 31.17.6"
      url: https://stacks.math.columbia.edu/tag/0BCW
    - title: "Stacks Project, regular local factoriality"
      url: https://stacks.math.columbia.edu/tag/0AG0
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth integral separated finite-type $k$-scheme, and $U\subset X$ a nonempty affine open. There is an effective Cartier divisor $D$ on $X$ with support $X\setminus U$, so $X\setminus D=U$. The empty divisor is allowed.

## Facts & Assumptions

[F1] Smooth local rings are UFDs, and effective Weil divisors on a locally factorial Noetherian integral scheme are effective Cartier divisors. ([[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-cartier-weil-isomorphism-locally-factorial]])

[F2] A separated scheme has closed diagonal. Morphisms into an affine scheme are determined by maps on global sections. ([[def-separated-morphism-schemes]], [[thm-morphisms-into-affine-scheme-global-sections]])

## Proof

**Given:** AC, $X$, and $U$ as above.

1.1 Let $Z$ be an irreducible component of the closed complement and $\eta$ its generic point. In $\operatorname{Spec}R$, with $R=\mathcal O_{X,\eta}$, the inverse image of $X\setminus U$ is just the closed point: no different component of the complement contains $\eta$. Thus the inverse image of $U$ is the punctured spectrum. The open immersion $U\to X$ is affine, because for every affine open $T\subset X$ the intersection $U\cap T$ is the pullback of the closed diagonal into $U\times_kT$, hence affine. Affineness is preserved by base change by its spectrum description. Hence the punctured spectrum of $R$ is affine. [F2, given, construct]

2.1 The ring $R$ is a local UFD by [F1]. If $\dim R\ge2$, every height-one prime remains in the punctured spectrum. A section there is an element of the fraction field regular at all such primes. In a UFD, write a fraction in relatively prime numerator and denominator; a nonunit denominator has an irreducible prime factor and yields a pole in its height-one localization. Therefore the fraction must be in $R$. Conversely every element of $R$ restricts to a section, so the punctured spectrum has global-section ring $R$. Since it is affine, [F2] identifies it with $\operatorname{Spec}R$ via its canonical restriction map, contradicting omission of the closed point. Thus $\dim R=1$; dimension zero is excluded because $U$ is dense. [F1, F2, step 1.1, algebra]

3.1 The complement has finitely many irreducible components by Noetherianity, each of codimension one by step 2.1. Their sum, each with coefficient one, is an effective Weil divisor, and [F1] makes it an effective Cartier divisor with exactly the required support. If the complement is empty, take the zero divisor. [F1, step 2.1, construct] ∎
