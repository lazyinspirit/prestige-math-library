---
id: ex-cusp-line-intersection-multiplicities
kind: example
title: Line multiplicities at a cusp
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-composition-series-and-length-of-a-module, def-local-intersection-multiplicity-plane-curves, def-multiplicity-plane-curve-point, def-plane-projective-curve, def-tangent-lines-plane-curve-point, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-gauss-lemma-over-a-ufd, lem-local-intersection-length-finite, thm-intersection-multiplicity-at-least-product-multiplicities]
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

## Example

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $C=V(y^2z-x^3)\subseteq\mathbf P^2$ be the cuspidal cubic at the cusp $p=[0:0:1]$, so $m_p(C)=2$ with double tangent line $T=V(y)$. Then

$$ I_p(C,T)=3,\qquad I_p(C,V(x))=2,$$

and both values agree with the local lengths $\ell\bigl(k[x,y]_{(x,y)}/(y^2-x^3,y)\bigr)=3$ and $\ell\bigl(k[x,y]_{(x,y)}/(y^2-x^3,x)\bigr)=2$.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], an algebraically closed field $k$, the curve $C=V(y^2z-x^3)$ with the affine chart $z=1$, affine equation $f=y^2-x^3$, the cusp $p=(0,0)$, and $O=k[x,y]_{(x,y)}$.

[F1] The homogeneous equation $y^2z-x^3$ is primitive and linear in $z$ over $k[x,y]$, so it is irreducible by [[lem-gauss-lemma-over-a-ufd]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]. Its dehomogenisation is square-free, so $C$ is a plane projective curve; in the chart $z=1$ the point $p$ has $m_p(C)=2$ and the lowest-degree part of $f$ is $y^2$, so the tangent cone is the double line $V(y)$ [[def-plane-projective-curve]], [[def-multiplicity-plane-curve-point]], [[def-tangent-lines-plane-curve-point]].

[F2] The local intersection multiplicity is the length of $O/(f,g)$ for a local equation $g$ of the second curve, and it is computed by $I_p(C,D)=\ell_O(O/(f,g))$ [[def-local-intersection-multiplicity-plane-curves]]. Simplicity: $O/(y,x^3)$ has $k$-basis the classes of $1,x,x^2$, and $O/(x,y^2)$ has $k$-basis the classes of $1,y$ Each quotient is respectively $k[x]_{(x)}/(x^3)$ or $k[y]_{(y)}/(y^2)$; the descending-power flag has simple residue-$k$ factors, hence lengths three and two [[def-composition-series-and-length-of-a-module]], [[lem-local-intersection-length-finite]].

[F3] The point is a double point, so the product bound gives $I_p(C,L)\ge2$ for every line $L$ through $p$, with equality exactly when the tangent cones are separated; the tangent line $V(y)$ shares its (double) tangent direction with the cusp, so there the value is at least $3$ [[thm-intersection-multiplicity-at-least-product-multiplicities]].

## Verification

1.1 The tangent line $T=V(y)$: the ideal $(y^2-x^3,\,y)$ equals $(y,x^3)$ in $O$, so $I_p(C,T)=\ell_O(O/(y,x^3))=3$, the number of basis elements $1,x,x^2$. [F1, F2, given]

1.2 The transverse line $V(x)$: the ideal $(y^2-x^3,\,x)$ equals $(x,y^2)$, so $I_p(C,V(x))=\ell_O(O/(x,y^2))=2$, the number of basis elements $1,y$. [F1, F2, given]

2.1 The values $3$ and $2$ are compatible with the product bound: both are at least $m_p(C)\cdot m_p(\text{line})=2$, and the tangent line carries the strict inequality because the two tangent cones share the line $V(y)$, while the line $V(x)$ is transverse to the cusp and realises equality. [step 1.1, step 1.2, F1, F3] ∎ 