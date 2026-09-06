---
id: thm-the-exterior-derivative-commutes-with-pullback
kind: theorem
title: "The exterior derivative commutes with pullback"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-coordinate-formula-for-the-exterior-derivative, def-pullback-of-a-differential-form, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

For every smooth map $F:M\to N$ and every form $\omega$ on $N$, $$d(F^*\omega)=F^*(d\omega).$$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that On a chart, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p\in M$, choose target coordinates $(y^1,\ldots,y^n)$ near $F(p)$, and write $\omega=\sum_I\omega_I\,dy^I$ there.  Pullback sends $\omega_I$ to $\omega_I\circ F$ and $dy^a$ to $d(y^a\circ F)$. [given]

2.1 On a neighbourhood of $p$, the coordinate formula and the pullback wedge law give $$ \begin{aligned} d(F^*\omega) &=\sum_I d(\omega_I\circ F)\wedge d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)\\ &=F^*\!\left(\sum_I d\omega_I\wedge dy^I\right) =F^*(d\omega). \end{aligned} $$ Since $p$ was arbitrary, the identity holds on $M$. [F1, step 1.1] ∎
