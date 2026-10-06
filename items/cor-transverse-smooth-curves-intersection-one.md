---
id: cor-transverse-smooth-curves-intersection-one
kind: corollary
title: Transversal smooth curves meet with multiplicity one
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-local-intersection-multiplicity-plane-curves, def-multiplicity-plane-curve-point, def-plane-projective-curve, def-tangent-lines-plane-curve-point, lem-smooth-plane-curve-unique-tangent, thm-intersection-multiplicity-at-least-product-multiplicities]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $C,D$ be plane projective curves over the algebraically closed field $k$ meeting at $p$ transversally: both are smooth at $p$ and their tangent lines at $p$ are distinct. Then $m_p(C)=m_p(D)=1$ and $I_p(C,D)=1$. Conversely $I_p(C,D)=1$ forces $C$ and $D$ to be smooth at $p$ with distinct tangent lines.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], plane projective curves $C,D$ over the algebraically closed field $k$ meeting at $p$, with $C,D$ smooth at $p$ and distinct tangent lines.

[F1] A point of a plane curve is smooth exactly when its multiplicity is one, and then the curve has exactly one tangent line at that point [[lem-smooth-plane-curve-unique-tangent]], [[def-tangent-lines-plane-curve-point]], [[def-multiplicity-plane-curve-point]].

[F2] If $C,D$ have no common local component at $p$, then $I_p(C,D)\ge m_p(C)m_p(D)$, with equality exactly when the tangent cones share no line [[thm-intersection-multiplicity-at-least-product-multiplicities]], [[def-local-intersection-multiplicity-plane-curves]]. Smooth curves at a common point with distinct tangent lines have no common local component there, since a common branch would force a common tangent line.

[F3] At a point where they share no local component, $I_p(C,D)\ge1$ exactly when $p\in C\cap D$ [[def-local-intersection-multiplicity-plane-curves]].

## Proof

1.1 By [F1] smoothness at $p$ gives $m_p(C)=m_p(D)=1$; distinct tangent lines mean the tangent cones share no line, and then the two curves share no local component at $p$. Applying the product inequality [F2] with $m=n=1$ gives $I_p(C,D)\ge1$, and since the tangent cones are separated, equality holds: $I_p(C,D)=1$. [F1, F2, given]

1.2 Conversely suppose $I_p(C,D)=1$. Since the value is finite, $C$ and $D$ share no local component at $p$, so [F2] applies with $m=m_p(C)\ge1$, $n=m_p(D)\ge1$: $1=I_p(C,D)\ge mn\ge1$, hence $mn=1$, so $m=n=1$, and equality in the product inequality holds; therefore by [F2] the tangent cones share no line. By [F1], $m_p(C)=m_p(D)=1$ means both curves are smooth at $p$, each with a unique tangent line, and the tangent lines are distinct. [F1, F2, algebra, F3]

2.1 The two implications establish the equivalence: transversal smooth curves have local multiplicity one, and local multiplicity one forces smoothness with distinct tangents. [step 1.1, step 1.2] ∎ 