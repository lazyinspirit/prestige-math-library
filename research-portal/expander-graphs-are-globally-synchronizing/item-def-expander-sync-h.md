---
title: Truncated sine-square function
status: published
research_item: def-expander-sync-h
dependency_level: 1
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 13, definition before Lemma 2.3; PDF p. 14, Figure 1
      statement: The article defines H by the sine-square branch for absolute angle at
        most pi/2 and the constant-one branch for absolute angle between pi/2
        and pi, and Figure 1 depicts H on (-pi, pi].
      hypotheses: Real angle in the displayed domain (-pi, pi].
      reading_limits: The supplied article text around the definition and Figure 1
        caption was inspected for attribution; this citation is not used to
        prove well-definedness.
---

PDF p. 13: ` Definition before Lemma 2.3 `; PDF p. 14: ` Figure 1 `

## Prerequisites

- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)
- [math:def-abs-value](https://alphabetamath.cc/item/def-abs-value)
- [math:def-pi-via-first-positive-cosine-zero](https://alphabetamath.cc/item/def-pi-via-first-positive-cosine-zero)



## Definition

For a real angle $\theta\in(-\pi,\pi]$, let $|\theta|$ denote its absolute value, and let $\sin$ be the real sine function. Define $H:(-\pi,\pi]\to\mathbb R$ by $H(\theta)=\sin^2(|\theta|)$ when $|\theta|\le\pi/2$, and $H(\theta)=1$ when $\pi/2\le|\theta|\le\pi$. The two formulas agree where their conditions overlap. Figure 1 of the article plots this function.

## Definition references

[Absolute value in an ordered field](https://alphabetamath.cc/item/def-abs-value)

[Real sine as the restriction of complex sine](item-def-expander-prereq-phasor-calculus)

## Facts & Assumptions

[F1] Real sine is the restriction of the complex sine function ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F2] $\sin(\pi/2)=1$ ([math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F3] In an ordered field, $|x|=x$ for $x\ge0$ and $|x|=-x$ for $x<0$; apply this definition to the real field ([math:def-abs-value](https://alphabetamath.cc/item/def-abs-value)).

[F4] The constant $\pi$ is twice the smallest positive zero of cosine; in particular $\pi>0$ ([math:def-pi-via-first-positive-cosine-zero](https://alphabetamath.cc/item/def-pi-via-first-positive-cosine-zero)).

## Justification

**Given:** A real $\theta\in(-\pi,\pi]$.

**Goal:** Show that the displayed rule assigns exactly one real value to $H(\theta)$.

1.1 By [F4], $\pi>0$. By [F3], if $\theta\ge0$ then $|\theta|=\theta\in[0,\pi]$; if $\theta<0$ then $|\theta|=-\theta\in(0,\pi)$, since $-\pi<\theta<0$. Thus $0\le|\theta|\le\pi$, so at least one branch applies, and both apply only when $|\theta|=\pi/2$. The sine branch is a real value by [F1], and the other branch is the real number $1$. [F1, F3, F4, given, algebra]

2.1 At the overlap, [F2] gives $\sin^2(|\theta|)=\sin^2(\pi/2)=1$, equal to the second branch. Consequently the rule defines one real value for every point of the stated domain. [F2, step 1.1, algebra] ∎

## Source attribution

The definition and its plotted domain are attributed to the article, PDF pp. 13–14, immediately before Lemma 2.3 and in Figure 1.
