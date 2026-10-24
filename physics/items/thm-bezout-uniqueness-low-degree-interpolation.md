---
id: thm-bezout-uniqueness-low-degree-interpolation
kind: theorem
title: Curves sharing too many points share a component
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, cor-projective-plane-curves-meet, def-plane-projective-curve, thm-bezout-plane-curves, thm-intersection-multiplicity-basic-properties]
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $C,D$ be plane projective curves of degree $d\ge1$ over the algebraically closed field $k$. If $C\cap D$ contains more than $d^{2}$ distinct points, then $C$ and $D$ share a component. Equivalently, two distinct curves of degree at most $d$ cannot meet in more than $d^{2}$ distinct points without a common component.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], plane projective curves $C,D$ of degree $d\ge1$ over the algebraically closed field $k$.

[F1] For degrees $d_C,d_D\ge1$, if $C,D$ have no common component, then $\sum_{p\in C\cap D}I_p(C,D)=d_Cd_D$, a finite sum over the finitely many intersection points; when both degrees equal $d$, the sum is $d^2$ [[thm-bezout-plane-curves]], [[cor-projective-plane-curves-meet]].

[F2] Whenever $I_p(C,D)$ is finite, it is a positive integer at points of $C\cap D$ and zero at points outside the intersection [[thm-intersection-multiplicity-basic-properties]]. Under the no-common-component hypothesis, [F1] ensures this finiteness at every intersection point.

## Proof

1.1 Suppose $C$ and $D$ had no common component and let $S\subseteq C\cap D$ be a set of pairwise distinct intersection points with $|S|>d^{2}$. By [F2] each $p\in S$ contributes $I_p(C,D)\ge1$ to the Bezout sum, so $\sum_{p\in C\cap D}I_p(C,D)\ge|S|>d^{2}$, contradicting the Bezout identity of [F1]. Hence a common component must exist. [F1, F2, algebra]

2.1 Equivalently, if $C$ and $D$ are distinct curves of degrees $d_C\le d$ and $d_D\le d$ meeting in more than $d^{2}\ge d_Cd_D$ distinct points, then the same counting argument with the product $d_Cd_D$ in place of $d^{2}$ forces a common component; specialising to $d_C=d_D=d$ gives the first formulation, The equal-degree formulation is therefore a special case of the degree-bounded one. [step 1.1, F1, algebra] ∎ 
