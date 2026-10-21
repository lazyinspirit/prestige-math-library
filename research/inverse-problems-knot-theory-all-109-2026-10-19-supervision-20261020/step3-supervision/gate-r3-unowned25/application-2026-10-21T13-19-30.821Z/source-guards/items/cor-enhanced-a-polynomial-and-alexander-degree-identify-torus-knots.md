---
id: cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots
kind: corollary
title: Enhanced A-polynomial and Alexander degree identify torus knots
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots
  - lem-torus-knot-enhanced-a-polynomial
  - def-enhanced-a-polynomial
  - thm-torus-knot-alexander-and-genus-formulas
  - def-coprime-torus-knot
  - lem-torus-knot-unit-slope-is-unknot
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: The algebraic identification inherits the full-AC branch of the
  torus-knot Alexander/genus supplier; full AC supplies the countable-choice
  hypothesis of the unit-slope unknot lemma via the named implication.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), Corollary 1.4 and §4
      url: https://arxiv.org/pdf/2405.19197v2
---

## Statement

Assume full AC. Let $a\ge b\ge1$ be coprime positive integers, and let $T_{a,b}\subset S^3$ be the corresponding torus knot. If a knot $K\subset S^3$ has the same enhanced A-polynomial as $T_{a,b}$ up to a Laurent unit and the same Alexander-polynomial breadth (highest exponent minus lowest exponent of its symmetrized Alexander polynomial), then $K$ has the same underlying unoriented knot type as $T_{a,b}$. When $b\ge2$, the absolute torus parameters of $K$ agree with $\{a,b\}$.

## Statement references

[[thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots|Thin enhanced-A classification]]

[[thm-torus-knot-alexander-and-genus-formulas|Alexander breadth formula for torus knots]]

[Baldwin and Sivek, Corollary 1.4 and §4](https://arxiv.org/pdf/2405.19197v2)

## Facts & Assumptions

**Given:** Full AC, a knot $K$, a positive torus knot $T_{a,b}$, equality of enhanced A-polynomials up to a Laurent unit, and equality of Alexander breadths.

[F1] A knot whose enhanced A-polynomial has Newton polygon contained in a line is a torus knot. For a positive nontrivial torus knot $T_{a,b}$ with $a>b\ge2$, its enhanced A-polynomial has a line-segment Newton polygon of slope $ab$ in the stated convention; the unknot has enhanced A-polynomial $1$ ([[thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots]]; [[lem-torus-knot-enhanced-a-polynomial]]). The same segment-slope formula holds for signed parameters: the mirror changes peripheral coordinates by $(M,L)\mapsto(M^{-1},L)$, reversing the knot orientation changes them by $(M,L)\mapsto(M^{-1},L^{-1})$, and these transformations are proved for the enhanced locus in [[thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots]], Proof2.1. They send the positive segment slope $|pq|$ to the signed product $pq$.

[F2] For signed coprime parameters, the Alexander breadth of $T_{p,q}$ is $(|p|-1)(|q|-1)$; changing both signs reverses knot orientation and changing one sign takes the mirror ([[thm-torus-knot-alexander-and-genus-formulas]]; [[def-coprime-torus-knot]]).

[F3] A torus knot with one parameter of absolute value $1$ is the standard unknot ([[lem-torus-knot-unit-slope-is-unknot]]).

[A1] Full AC implies countable choice, the hypothesis used by [F3] ([[def-axiom-of-choice]]; [[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] The classification used in [F1] is now complete with the explicit external input Baldwin–Sivek, arXiv:2405.19197v2, Theorem 1.2. Their Corollary 1.4 (p.2) independently states detection by the enhanced polynomial together with Alexander degree; the finite parameter-recovery proof below is retained locally. The source statement was consulted directly, not its gauge-theoretic proof reconstructed. The breadth used here is twice the degree of the symmetric polynomial for torus knots, so equality of breadths gives exactly the equality used in step2.1.

## Proof

1.1 Equality of enhanced A-polynomials up to a Laurent unit gives the same Newton polygon shape. By [F1], this polygon lies in a line, so write $K=T_{p,q}$ for signed coprime nonzero parameters. If $b\ge2$, both polygons are line segments and [F1] gives equality of slopes, hence $pq=ab$. If $b=1$, the target polygon is a point and no slope equation is asserted. [F1, given, cases, algebra]

2.1 Suppose $b\ge2$ and put $u=|p|$, $v=|q|$. From $pq=ab>0$, $p$ and $q$ have the same sign and $uv=ab$. Equality of Alexander breadths and [F2] give $(u-1)(v-1)=(a-1)(b-1)$. Expanding and substituting $uv=ab$ yields $u+v=a+b$. [F2, step 1.1, algebra]

2.2 Suppose $b=1$. Then [F3] says $T_{a,1}$ is the unknot, whose Alexander breadth is zero. By [F2] and the assumed breadth equality, $(|p|-1)(|q|-1)=0$. Thus $|p|=1$ or $|q|=1$, and [A1] supplies the countable-choice hypothesis of [F3], so $K=T_{p,q}$ is the unknot as well. Hence its underlying unoriented knot type equals $T_{a,1}$. [A1, F2, F3, step 1.1, given, algebra]

3.1 The monic quadratics $x^2-(u+v)x+uv$ and $x^2-(a+b)x+ab$ are equal, so their root multisets agree and $\{u,v\}=\{a,b\}$. The same-sign conclusion in step 2.1 means that $K$ is $T_{a,b}$ up to orientation, so the underlying unoriented knot types agree. [step 2.1, algebra]

4.1 Steps 3.1 and 2.2 cover respectively the nontrivial and unknot target cases, proving the stated identification; in the nontrivial case step 3.1 also identifies the absolute parameters up to interchange. [step 3.1, step 2.2] ∎
