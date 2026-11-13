---
title: Localization and analytic scope of the free control construction
status: published
research_item: rem-se-linear-proof-scope
dependency_level: 19
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 6, §1.4(i), (iii); PDF page 13, Remarks (1)–(4)
      statement: The authors describe the localization, force operator, geometry,
        commutator and regularity ranges used in their free control construction
        and observability argument.
      hypotheses: The article's smooth non-trapping obstacle setting and the parameter
        ranges specified in the cited passages.
      reading_limits: The frozen extracted text at the cited passages was read for
        attribution; the comparison with Laurent's Proposition 7.2 was not
        independently checked here.
---

PDF p. 6: ` §1.4(i), (iii) `; PDF p. 13: ` Remarks (1)–(4) `

## Prerequisites

- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-hum-map](item-def-se-hum-map)
- [thm-se-3-6](item-thm-se-3-6)
- [prop-se-integer-commutator](item-prop-se-integer-commutator)
- [prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-nontrapping](item-def-se-nontrapping)
- [math:def-support-of-a-distribution](https://alphabetamath.cc/item/def-support-of-a-distribution)


## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, be the connected exterior of a nonempty compact obstacle with smooth boundary, and suppose the obstacle is non-trapping: its generalized reflected rays leave every compact set in finite forward time. Let $T>0$, $s\in[-2,2]$, and let $\varphi$ be the smooth real control cutoff, equal to zero for $|x|\le R$ and one for $|x|\ge R+1$. Write $\Delta_D$ for the Dirichlet Laplacian, $A=I-\Delta_D$, and $H_D^r$ for the associated spectral scale: for $r\ge0$ it is $D(A^{r/2})$, while for negative $r$ it is the corresponding pivot antidual.

In the free Hilbert uniqueness method (HUM) construction, for the free solution $v(t)=e^{it\Delta_D}v_0$ with $v_0\in H_D^{-s}$, the control is $h(t)=-iA^{-s}(\varphi v(t))$. Its forcing is $\varphi h=-i\varphi A^{-s}\varphi v$ and is supported in $\{|x|\ge R\}$ relative to $\Omega$; the construction does not assert that $h$ itself is supported there. The article compares this force operator with Laurent [23, Proposition 7.2].

The article describes its free observability proof as requiring non-trapping rather than star-shapedness, and as using no integration by parts up to the obstacle boundary and no normal boundary trace. It distinguishes the outer Dirichlet trace used in its boundary-control result. It also says that its treatment of the full scale $[-2,2]$ uses no commutator of $\varphi$ with fractional powers of $\Delta_D$: for $\sigma\in(-1,0)$ it combines the integer resolvent identity with a weaker remainder. The cutoff multipliers are used only on levels $[-2,2]$, so the argument does not invoke higher-order boundary compatibility. Its smoothing input is used only at indices in $[0,1]$; for $\sigma\in[-2,0)$ it is applied to $A^{-1}v_0\in H_D^{\sigma+2}$. These are descriptions of the authors' method, not additional claims that all possible proofs have the same scope.

## Statement references

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-hum-map](item-def-se-hum-map)

[thm-se-3-6](item-thm-se-3-6)

[prop-se-integer-commutator](item-prop-se-integer-commutator)

[prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous)

[prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[def-se-nontrapping](item-def-se-nontrapping)

[math:def-support-of-a-distribution](https://alphabetamath.cc/item/def-support-of-a-distribution)

## Facts & Assumptions

[F1] The cutoff and exterior conventions are those of [def-se-control-cutoffs](item-def-se-control-cutoffs). Under Choice, [def-se-dirichlet-scale](item-def-se-dirichlet-scale) defines $A$, its spectral powers and the scale, including negative levels as pivot antiduals. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) The generalized reflected-ray and non-trapping conventions are those of [def-se-nontrapping](item-def-se-nontrapping).

[F2] The free HUM construction of [def-se-hum-map](item-def-se-hum-map) defines $v$ and $h$ as stated. The bounded continuous endpoint-to-control operator in [thm-se-3-6](item-thm-se-3-6) uses the same construction and states that its force is supported where $|x|\ge R$.

[F3] The integer resolvent identity and its localized remainder are supplied, with their scale hypotheses, by [prop-se-integer-commutator](item-prop-se-integer-commutator). The homogeneous local smoothing estimate for non-trapping obstacles and indices in $[0,1]$ is supplied by [prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous). The cutoff multiplier bounds through orders $[-2,2]$ are supplied by [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers).

[F4] The support of a spatial distribution on $\Omega$ is the complement in $\Omega$ of its largest vanishing open subset. In particular, vanishing on an open subset excludes that subset from its relative support. [math:def-support-of-a-distribution](https://alphabetamath.cc/item/def-support-of-a-distribution)

## Proof

**Given:** The geometry, Choice assumption, cutoff, time, index, and free HUM variables in the statement.

**Goal:** Identify the force and its localization, while recording the article's stated proof scope.

1.1 By the definition of the HUM control, $h=-iA^{-s}(\varphi v)$. Multiplying by $\varphi$ gives $\varphi h=-i\varphi A^{-s}\varphi v$. The scale and cutoff conventions give the displayed composition its stated meaning, including at negative orders. [F1, F2, F3]

2.1 Since $\varphi$ vanishes on $|x|<R$, the resulting force vanishes there as a spatial distribution; its relative support is consequently contained in $\{|x|\ge R\}$. The factor $A^{-s}$ lies between the two cutoff factors, so this calculation alone gives no corresponding support assertion for $h$. [F1, F2, F4, step 1.1]

3.1 The integer identity, the indicated smoothing range, and the cutoff multiplier range are available under their respective stated hypotheses in [F3]. The remaining statements about which devices the authors use or avoid, and their comparison with Laurent, are attributed to the cited article passages; they are not used here to prove those suppliers or to assert an independently checked comparison. [F3, step 1.1, step 2.1] ∎

## Source notes

The article is cited for attribution of its description of its own proof and for its comparison with Laurent. The force identity and support conclusion above use the declared mathematical suppliers. No independent reading of Laurent's proposition is claimed.
