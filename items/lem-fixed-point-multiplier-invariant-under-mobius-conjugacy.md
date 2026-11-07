---
id: lem-fixed-point-multiplier-invariant-under-mobius-conjugacy
kind: lemma
title: Fixed-point multipliers are invariant under Möbius conjugacy
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-fixed-point-multiplier-rational-map
  - def-isotrivial-rational-map-over-function-field
  - def-relative-projective-space-standard-charts
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Laura DeMarco, Bifurcations, intersections, and heights, §2"
      url: "https://msp.org/ant/2016/10-5/ant-v10-n5-p.pdf"
verification: {}
---

## Statement

Let $K$ be a field, let $\phi:\mathbb P^1_K\to\mathbb P^1_K$ be a rational
self-map, and let $M$ be a Möbius transformation over $K$. If $a$ is a fixed
point of $\phi$ over an algebraic closure, then $M^{-1}(a)$ is a fixed point
of $M^{-1}\circ\phi\circ M$ and its multiplier equals the multiplier of
$\phi$ at $a$.

## Statement references

[[def-fixed-point-multiplier-rational-map]]

[[def-isotrivial-rational-map-over-function-field]]

## Facts & Assumptions

**Given:** A field $K$, a rational map $\phi$, a Möbius transformation $M$,
and a fixed point $a$ of $\phi$ over $\overline K$.

[F1] A Möbius transformation is represented by an invertible $2\times2$
matrix and is an automorphism of the projective line; the affine and
reciprocal coordinates form its two standard charts.
([[def-isotrivial-rational-map-over-function-field]],
[[def-relative-projective-space-standard-charts]])

## Proof

1.1 Put $b=M^{-1}(a)$. Since $\phi(a)=a$, one has
$(M^{-1}\circ\phi\circ M)(b)=M^{-1}(\phi(a))=M^{-1}(a)=b$, so $b$ is a
fixed point of the conjugate map. [given, algebra]

1.2 Choose local parameters $s$ at $a$ and $t$ at $b$. By [F1], $M$ and
$M^{-1}$ are regular at these points and induce inverse formal power series
in the chosen coordinates. Write their expansions as
$$s\circ M\circ t^{-1}(T)=cT+O(T^2),\qquad
t\circ M^{-1}\circ s^{-1}(S)=c^{-1}S+O(S^2)$$
for some $c\ne0$: the linear coefficients must be nonzero and reciprocal,
because the two series compose to the identity. If the multiplier of $\phi$
at $a$ is $\lambda$, then
$s\circ\phi\circ s^{-1}(S)=\lambda S+O(S^2)$. Composing these three series
shows
$$t\circ(M^{-1}\circ\phi\circ M)\circ t^{-1}(T)
=c^{-1}\lambda cT+O(T^2)=\lambda T+O(T^2).$$
Thus the multiplier at $b$ equals $\lambda$. [F1, step 1.1, algebra]

2.1 Steps 1.1 and 1.2 prove both the fixed-point correspondence and equality
of its multipliers. [step 1.1, step 1.2] ∎
