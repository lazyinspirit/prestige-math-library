---
id: thm-northcott-finiteness-of-preperiodic-points
kind: theorem
title: Preperiodic points have bounded height and are finite in bounded degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-canonical-height-of-a-morphism-on-projective-line
  - thm-dynamical-canonical-height-zero-iff-preperiodic
  - thm-dynamical-canonical-height-limit-and-functional-equation
  - def-preperiodic-point-of-a-self-map
  - thm-northcott-finiteness-for-projective-points
  - thm-northcott-finiteness-for-projective-line-bounded-degree
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, Corollary 1.1.1(b), printed p. 168"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §5.1, Theorem 15, printed pp. 12–13"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $d\ge2$, and let $\phi([X:Y])=[F_0(X,Y):F_1(X,Y)]$ be given by two homogeneous degree-$d$ forms over $K$ with no common zero in the projective line over an algebraic closure of $K$. There is a constant $B_\phi\ge0$ such that every algebraic point preperiodic for $\phi$ has absolute logarithmic height at most $B_\phi$. Consequently, for every integer $D\ge1$, the preperiodic points that admit a field of definition $L/K$ with $[L:K]\le D$ form a finite set; in particular, the $K$-rational preperiodic points form a finite set.

## Statement references

[[def-canonical-height-of-a-morphism-on-projective-line|Projective-line and homogeneous-map conventions]]

[[def-preperiodic-point-of-a-self-map|Finite forward orbit is the definition of preperiodic]]

[[thm-dynamical-canonical-height-zero-iff-preperiodic|Zero canonical height characterizes preperiodicity]]

[[thm-dynamical-canonical-height-limit-and-functional-equation|Uniform bounded difference from the absolute height]]

[[thm-northcott-finiteness-for-projective-points|Fixed-field Northcott finiteness input]]

[[thm-northcott-finiteness-for-projective-line-bounded-degree|Bounded-degree Northcott finiteness input]]

[[def-axiom-of-choice|Axiom of Choice]]

[Call and Silverman, Corollary 1.1.1(b), printed p. 168](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

[Silverman, §5.1, Theorem 15, printed pp. 12–13](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; a number field $K$; a degree-$d$ map $\phi$ with $d\ge2$; and an algebraic point $P$ preperiodic for $\phi$.

[A1] The height and number-field inputs are stated under the Axiom of Choice. [[def-axiom-of-choice]]

[F1] A point is preperiodic exactly when its forward orbit is finite. [[def-preperiodic-point-of-a-self-map]]

[F2] A preperiodic point has canonical height zero. [[thm-dynamical-canonical-height-zero-iff-preperiodic]]

[F3] The canonical height differs from the absolute logarithmic height by a uniform bounded amount. [[thm-dynamical-canonical-height-limit-and-functional-equation]]

[F4] Every height-bounded subset of $\mathbb P^1(\overline K)$ whose points have a field of definition over $K$ of degree at most $D$ is finite. [[thm-northcott-finiteness-for-projective-line-bounded-degree]]

[F5] For fixed $K$, every bounded-height subset of $\mathbb P^1(K)$ is finite. [[thm-northcott-finiteness-for-projective-points]]

## Proof

1.1 By [F1] and [F2], $\widehat h_\phi(P)=0$. The uniform bounded-difference estimate [F3] gives $h(P)\le C_\phi$ for a constant independent of $P$. Taking $B_\phi=C_\phi$ proves the height bound. [given, F1, F2, F3]

2.1 Fix $D\ge1$. Every preperiodic point in the stated degree-bounded set satisfies $h(P)\le B_\phi$ by step 1.1. By [F4], the full set of projective points with this height and degree bound is finite, so its preperiodic subset is finite. [given, F4, step 1.1]

3.1 Taking $D=1$ in step 2.1 shows that the $K$-rational preperiodic points are finite. Independently, [F5] applies to the same height-bounded subset and confirms this fixed-field special case. [given, F5, step 1.1, step 2.1] ∎
