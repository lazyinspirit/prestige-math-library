---
title: Elementary properties of the function H
status: published
research_item: prop-expander-sync-h-properties
dependency_level: 2
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 13, prose before Lemma 2.3; PDF p. 14, Figure 1
      statement: H dominates the square of sine and is increasing on [0, pi]; its
        displayed definition has constant value one beyond pi/2 in absolute
        angle.
      hypotheses: H is the piecewise function displayed immediately before Lemma 2.3,
        on the domain shown in Figure 1.
      reading_limits: The supplied article text at the definition and remark and the
        Figure 1 caption were inspected for attribution. The citation is not
        used as proof of the proposition.
---

PDF p. 13: ` Prose before Lemma 2.3 `; PDF p. 14: ` Figure 1 `

## Prerequisites

- [def-expander-sync-h](item-def-expander-sync-h)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)
- [math:def-complex-trigonometric-and-hyperbolic-functions](https://alphabetamath.cc/item/def-complex-trigonometric-and-hyperbolic-functions)


## Statement

Let $H:(-\pi,\pi]\to\mathbb R$ be the truncated sine-square function: $H(\theta)=\sin^2(|\theta|)$ for $|\theta|\le\pi/2$, and $H(\theta)=1$ for $\pi/2\le|\theta|\le\pi$. Then $H(\theta)\ge0$ and $H(\theta)\ge\sin^2\theta$ for every $\theta$ in its domain. On $[0,\pi]$, $H$ is nondecreasing, meaning that $H(a)\le H(b)$ whenever $0\le a\le b\le\pi$, and it is constant on $[\pi/2,\pi]$.

## Statement references

[Truncated sine-square function](item-def-expander-sync-h)

## Facts & Assumptions

[F1] The two branches in the statement define $H$ on $(-\pi,\pi]$ and agree at their overlap ([def-expander-sync-h](item-def-expander-sync-h)).

[F2] Sine is strictly increasing on $[-\pi/2,\pi/2]$ and has range $[-1,1]$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)).

[F3] Sine is nonnegative on $[0,\pi]$ ([prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)).

[F4] Complex sine is defined by $\sin z=(\exp(iz)-\exp(-iz))/(2i)$, so substitution gives $\sin(-z)=-\sin z$ ([math:def-complex-trigonometric-and-hyperbolic-functions](https://alphabetamath.cc/item/def-complex-trigonometric-and-hyperbolic-functions)).

## Proof

**Given:** $\theta\in(-\pi,\pi]$ and $0\le a\le b\le\pi$.

**Goal:** Prove the nonnegativity, sine-square bound, monotonicity and constancy in the statement.

1.1 If $|\theta|\le\pi/2$, [F1] gives $H(\theta)=\sin^2(|\theta|)=\sin^2\theta$; the second equality follows from [F4], whether $\theta$ is nonnegative or negative. If $|\theta|\ge\pi/2$, [F1] gives $H(\theta)=1\ge\sin^2\theta$, since [F2] gives $|\sin\theta|\le1$. Both branches are nonnegative, so the first two assertions hold. [F1, F2, F4, given, algebra]

2.1 If $b\le\pi/2$, then [F2] and [F3] give $0\le\sin a\le\sin b$, so $H(a)=\sin^2a\le\sin^2b=H(b)$. If $a\ge\pi/2$, both values are $1$ by [F1]. Otherwise $a\le\pi/2\le b$; then $H(b)=1$ and $H(a)=\sin^2a\le1$ by [F1] and [F2]. Thus $H(a)\le H(b)$ in every case. The same branch formula gives $H=1$ throughout $[\pi/2,\pi]$, completing the proof. [F1, F2, F3, given, algebra] ∎





## Source attribution

The definition, the comparison with $\sin^2\theta$, and the increasing-on-$[0,\pi]$ assertion are attributed to the article, PDF p. 13; Figure 1 on p. 14 specifies the plotted domain. The proof above is local and uses the stated suppliers.
