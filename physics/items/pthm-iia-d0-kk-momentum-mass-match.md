---
id: pthm-iia-d0-kk-momentum-mass-match
kind: physics-theorem
title: IIA D0 and First Kaluza-Klein Momentum Mass Match
status: published
origin: session
domain: physics
library: physics
dependency_level: 10
deps: [post-m-theory-type-iia-circle-limit-dictionary, post-type-ii-dp-brane-dbi-wz-action]
dependency_roles:
  post-m-theory-type-iia-circle-limit-dictionary: physical-assumption
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
physical_scope: >-
  Conditional equality of the leading single-D0 rest energy and the first Kaluza-Klein momentum magnitude on a flat asymptotic IIA/M-theory circle in hbar=c=1 units; assumes the stated D0/KK sector identification and says nothing about completeness or exact duality.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Edward Witten, String Theory Dynamics in Various Dimensions, §§1–2.2"
      url: https://arxiv.org/pdf/hep-th/9503124v2
    - title: "Tom Banks, Willy Fischler, Stephen H. Shenker, and Leonard Susskind, M Theory As A Matrix Model: A Conjecture, §§1 and 3"
      url: https://arxiv.org/pdf/hep-th/9610043v3
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, Lecture III §3.3"
      url: https://arxiv.org/pdf/hep-th/9602052v2
    - title: "Paul K. Townsend, Four Lectures on M-theory, §§1–3"
      url: https://arxiv.org/pdf/hep-th/9612121v3
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume $\hbar=c=1$, positive string length $\ell_s=\sqrt{\alpha'}$, positive dimensionless coupling $g_s$, and a flat asymptotic circle of radius $R_{11}=g_s\ell_s$ with angle $\theta\sim\theta+2\pi$. Put $y=R_{11}\theta$ and define the $n$th Kaluza-Klein mode by its single-valued Fourier wave $e^{in\theta}$ with momentum operator $p_{11}=-i\partial_y$. For a free massless eleven-dimensional mode, adopt the flat-space mass shell $E^2=|\mathbf p|^2+p_{11}^2$, where $\mathbf p\in\mathbb R^9$ is the momentum in the noncompact spatial directions. Define its ten-dimensional rest mass to be the nonnegative rest energy $m_{\mathrm{KK},n}:=E|_{\mathbf p=0}\ge 0$, so the mass shell gives $m_{\mathrm{KK},n}=|p_{11}^{(n)}|$. Adopt the leading Abelian D-brane tension formula $T_p=\mu_p/g_s$ with $\mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1}$, and identify the single unit D0 sector with the first Kaluza-Klein mode. Then
$$
T_0=m_{\mathrm{KK},1}=|p_{11}^{(1)}|=\frac{1}{g_s\ell_s}=\frac{1}{R_{11}}.
$$
This conditional mass match proves neither a complete Kaluza–Klein tower, full M/IIA equivalence, nor a nonperturbative M-theory construction.

## Statement references

[Witten, *String Theory Dynamics in Various Dimensions*, §§1–2.2](https://arxiv.org/pdf/hep-th/9503124v2)

[Banks, Fischler, Shenker, and Susskind, *M Theory As A Matrix Model: A Conjecture*, §§1, 3](https://arxiv.org/pdf/hep-th/9610043v3)

[Polchinski, Chaudhuri, and Johnson, *Notes on D-Branes*, Lecture III §3.3](https://arxiv.org/pdf/hep-th/9602052v2)

[Townsend, *Four Lectures on M-theory*, §§1–3](https://arxiv.org/pdf/hep-th/9612121v3)

## Facts & Assumptions

**Given:** The positive circle radius, positive string length and coupling, periodic angle, leading D-brane normalization, free massless eleven-dimensional mass shell, and adopted unit D0/first-KK sector identification in the statement.

[F1] The adopted M/IIA circle dictionary states $R_{11}=g_s\ell_s$ with $g_s,\ell_s>0$ ([[post-m-theory-type-iia-circle-limit-dictionary]]).

[F2] The leading Abelian D$p$-brane action uses $\alpha'>0$, $\mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1}$ and $T_p=\mu_p/g_s$ ([[post-type-ii-dp-brane-dbi-wz-action]]).

[A1] The asymptotic eleven-dimensional mode is free and massless, so its flat-space energy satisfies $E^2=|\mathbf p|^2+p_{11}^2$; in the ten-dimensional rest frame $\mathbf p=0$, its rest mass is $|p_{11}|$. The single D0/first-mode sector identification is adopted, not derived.

## Proof

**Proof technique:** direct arithmetic.

1.1 Periodicity makes $e^{in\theta}$ single-valued exactly for $n\in\mathbb Z$. With $y=R_{11}\theta$, applying $p_{11}=-i\partial_y$ gives $p_{11}e^{in\theta}=(n/R_{11})e^{in\theta}$. Thus the unit mode has $|p_{11}^{(1)}|=1/R_{11}=1/(g_s\ell_s)$ by [F1], with inverse-length units. [given, A1, F1, algebra]

1.2 Set $p=0$ in [F2]. Then $(2\pi)^0=1$ and $\alpha'^{(0+1)/2}=\sqrt{\alpha'}=\ell_s$, so $\mu_0=1/\ell_s$ and $T_0=\mu_0/g_s=1/(g_s\ell_s)$. [given, F2, algebra]

2.1 In the ten-dimensional rest frame $\mathbf p=0$, [A1] reduces the eleven-dimensional mass shell to $E^2=p_{11}^2$. The positive rest energy is therefore $m_{\mathrm{KK},1}=|p_{11}^{(1)}|=1/R_{11}$ by step 1.1. [given, A1, step 1.1, algebra]

3.1 Steps 2.1 and 1.2 give $T_0=m_{\mathrm{KK},1}=|p_{11}^{(1)}|=1/(g_s\ell_s)=1/R_{11}$. This equality is conditional on the sector identification in [A1]; it neither proves that identification nor any tower-completeness or duality claim. [given, A1, step 2.1, step 1.2, algebra] ∎

