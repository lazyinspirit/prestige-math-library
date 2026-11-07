---
id: thm-dynamical-canonical-height-zero-iff-preperiodic
kind: theorem
title: Dynamical canonical height vanishes exactly at preperiodic points over a number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-canonical-height-of-a-morphism-on-projective-line
  - thm-dynamical-canonical-height-limit-and-functional-equation
  - def-preperiodic-point-of-a-self-map
  - thm-northcott-finiteness-for-projective-points
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
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, Corollary 1.1.1, printed p. 168"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §5.2, Theorem 17, printed pp. 14–15"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $d\ge2$, and let $\phi:\mathbb P^1\to\mathbb P^1$ be given by two homogeneous degree-$d$ forms over $K$ with no common zero in the projective line over an algebraic closure of $K$. Let $P$ be a point defined over a finite extension of $K$. Then $\widehat h_\phi(P)=0$ if and only if the forward orbit of $P$ under $\phi$ is finite.

## Statement references

[[def-canonical-height-of-a-morphism-on-projective-line|Projective-line and homogeneous-map conventions]]

[[def-preperiodic-point-of-a-self-map|Finite forward orbit is the definition of preperiodic]]

[[thm-dynamical-canonical-height-limit-and-functional-equation|Canonical-height functional equation and bounded difference]]

[[thm-northcott-finiteness-for-projective-points|Required fixed-field Northcott finiteness input]]

[[def-axiom-of-choice|Axiom of Choice]]

[Call and Silverman, Corollary 1.1.1, printed p. 168](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

[Silverman, §5.2, Theorem 17, printed pp. 14–15](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; a number field $K$; a degree-$d$ map $\phi$ with $d\ge2$; and a point $P$ defined over a finite extension of $K$.

[A1] The number-field height inputs in the supplier theorems assume Choice. [[def-axiom-of-choice]]

[F1] A point is preperiodic precisely when its forward orbit is finite. [[def-preperiodic-point-of-a-self-map]]

[F2] The canonical height satisfies $\widehat h_\phi(\phi(Q))=d\widehat h_\phi(Q)$ and $|\widehat h_\phi(Q)-h(Q)|\le C_\phi$ for every algebraic point $Q$, for a constant $C_\phi\ge0$. [[thm-dynamical-canonical-height-limit-and-functional-equation]]

[F3] For every number field $L$ and real $B_0\ge1$, the set $\{Q\in\mathbb P^1(L):h(Q)\le\log B_0\}$ is finite. [[thm-northcott-finiteness-for-projective-points]]

## Proof

1.1 Suppose the forward orbit of $P$ is finite. Then two iterates agree: choose integers $0\le m<n$ with $\phi^m(P)=\phi^n(P)$. Iterating the functional equation in [F2] gives $d^m\widehat h_\phi(P)=d^n\widehat h_\phi(P)$. Since $d\ge2$ and $m<n$, $d^n-d^m\ne0$, so $\widehat h_\phi(P)=0$. [given, F1, F2, choose, induction, algebra]

1.2 Conversely, suppose $\widehat h_\phi(P)=0$. The functional equation [F2] gives $\widehat h_\phi(\phi^n(P))=0$ for every $n\ge0$ by induction. Its bounded-difference estimate then gives $h(\phi^n(P))\le C_\phi$ for every $n$. [given, F2, induction]

2.1 Choose a finite extension $L/K$ over which $P$ is defined. Since $\phi$ is defined over $K$, every iterate is defined over this same $L$. Apply [F3] in $L$ with $B_0=e^{C_\phi}\ge1$; the orbit lies among the finitely many points of height at most $\log B_0=C_\phi$, so it is finite. By [F1], $P$ is preperiodic. [given, A1, F1, F3, step 1.2, choose] ∎
