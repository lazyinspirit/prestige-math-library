---
id: lem-integral-weierstrass-model-with-discriminant-valuation-under-12-is-minimal
kind: lemma
title: An integral Weierstrass model with discriminant valuation below 12 is minimal
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-weierstrass-model-and-discriminant-invariants
  - lem-two-weierstrass-presentations-of-a-pointed-curve-are-related-by-an-admissible-change
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: J. S. Milne, Elliptic Curves, Chapter II §6
      url: https://www.jmilne.org/math/Books/ectext6.pdf
verification:
  precheck: pass
---

## Statement

Let $R$ be a discrete valuation ring with fraction field $K$ and normalized valuation $v:K^\times\to\mathbb Z$. Let an elliptic curve over $K$ have an integral generalized Weierstrass equation with discriminant $\Delta$. If $0\le v(\Delta)<12$, then this equation is minimal, meaning that no integral Weierstrass equation for the same pointed elliptic curve has smaller discriminant valuation.

## Statement references

[[def-weierstrass-model-and-discriminant-invariants]]

[J. S. Milne, *Elliptic Curves*, Chapter II §6, printed pp. 69–70](https://www.jmilne.org/math/Books/ectext6.pdf)

## Facts & Assumptions

**Given:** The discrete valuation ring, the integral equation, and the discriminant bound in the Statement.

[F1] [[lem-two-weierstrass-presentations-of-a-pointed-curve-are-related-by-an-admissible-change]]: any two Weierstrass equations for the same pointed elliptic curve are related by $x=u^2x'+r$, $y=u^3y'+su^2x'+t$ with $u\in K^\times$ and $r,s,t\in K$.

[F2] [[def-weierstrass-model-and-discriminant-invariants]]: for integral coefficients the discriminant is the displayed polynomial in the Weierstrass coefficients, and minimality means no integral equation for the same pointed curve has smaller discriminant valuation.

## Proof

**Given:** [F1], [F2], the integral equation, and $0\le v(\Delta)<12$.

1.1 By [F1], any competing equation is related by $x=u^2x'+r$, $y=u^3y'+su^2x'+t$. Substitution into the Weierstrass equation gives $a_1'=u^{-1}(a_1+2s)$, $a_2'=u^{-2}(a_2-sa_1+3r-s^2)$, $a_3'=u^{-3}(a_3+ra_1+2t)$, $a_4'=u^{-4}(a_4-sa_3+2ra_2-(t+rs)a_1+3r^2-2st)$, and $a_6'=u^{-6}(a_6+ra_4+r^2a_2+r^3-ta_3-rta_1-t^2)$. Substituting these five formulas into the invariant definitions in [F2] and collecting terms gives $b_2'=u^{-2}(b_2+12r)$, $b_4'=u^{-4}(b_4+rb_2+6r^2)$, $b_6'=u^{-6}(b_6+2rb_4+r^2b_2+4r^3)$, and $b_8'=u^{-8}(b_8+3rb_6+3r^2b_4+r^3b_2+3r^4)$. Substitution of these four expressions into the discriminant polynomial in [F2] cancels the $r$-terms and yields $\Delta'=u^{-12}\Delta$. If another integral equation had $v(\Delta')<v(\Delta)$, then $v(u)$ is a positive integer and $v(\Delta')=v(\Delta)-12v(u)\le v(\Delta)-12<0$. [F1, F2, given, algebra]

2.1 The discriminant of an integral equation is a polynomial with integer coefficients in its integral Weierstrass coefficients, hence belongs to $R$ and has nonnegative valuation when nonzero. This contradicts step 1.1. No integral equation has smaller discriminant valuation, so the given equation is minimal. [F2, step 1.1, algebra] ∎
