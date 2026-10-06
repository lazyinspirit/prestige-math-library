---
id: ex-line-conic-two-intersections
kind: example
title: A line and a conic meet in two points counted with multiplicity
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-line-meets-degree-d-curve-counted-with-multiplicity, cor-transverse-smooth-curves-intersection-one, def-axiom-of-choice, def-local-intersection-multiplicity-plane-curves, def-plane-projective-curve, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-gauss-lemma-over-a-ufd, lem-intersection-with-line-order-of-vanishing]
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

Let $C=V(x_0^2-x_1x_2)\subseteq\mathbf P^2$ over an algebraically closed field of characteristic not two and let $L=V(x_1-x_2)$. Then $L\not\subseteq C$ and $L\cap C=\{[1:1:1],[-1:1:1]\}$; both intersections are transversal, so $I_p(C,L)=1$ at each point and the total is $2=\deg C\cdot\deg L$.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], an algebraically closed field $k$ of characteristic not two, the conic $C=V(x_0^2-x_1x_2)$, the line $L=V(x_1-x_2)$, and the parametrisation $(s:t)\mapsto[s:t:t]$ of $L$.

[F1] Viewed in $k[x_0,x_1][x_2]$, the polynomial $x_0^2-x_1x_2$ is primitive (its two nonzero coefficients are coprime) and linear, hence irreducible over $k(x_0,x_1)$ and over $k[x_0,x_1]$ by [[lem-gauss-lemma-over-a-ufd]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]. Thus it is a square-free quadratic form, so $C$ is a plane projective curve of degree two with no linear component; $L$ is a line and $L\not\subseteq C$ [[def-plane-projective-curve]].

[F2] Substituting the parametrisation into the defining form gives the binary quadratic $s^2-t^2=(s-t)(s+t)$; its roots are $[s:t]=[1:1]$ and $[-1:1]$, corresponding to $[1:1:1]$ and $[-1:1:1]$, and both roots are simple [[lem-intersection-with-line-order-of-vanishing]].

[F3] At each of the two points the gradients of $x_0^2-x_1x_2$ and of $x_1-x_2$ are nonzero with distinct tangent directions, so the curves meet transversally and $I_p(C,L)=1$; the line-intersection count confirms the total $2$ [[cor-transverse-smooth-curves-intersection-one]], [[cor-line-meets-degree-d-curve-counted-with-multiplicity]], [[def-local-intersection-multiplicity-plane-curves]].

## Verification

1.1 The restrictions: substituting $(s:t)\mapsto[s:t:t]$ gives $x_0^2-x_1x_2\mapsto s^2-t^2$, so the intersection points of $L$ with $C$ are exactly $[1:1:1]$ and $[-1:1:1]$. [F1, F2, given]

1.2 At $[1:1:1]$ the gradient of the conic is $(2x_0,-x_2,-x_1)=(2,-1,-1)$ and at $[-1:1:1]$ it is $(-2,-1,-1)$, both nonzero, while $L$ is a line with constant gradient $(0,1,-1)$; the tangent lines are distinct at both points, so each local multiplicity is $1$. [F3, algebra]

2.1 The two simple roots account for the full degree total $2\cdot1=2=de$, in agreement with the line-intersection count; there are exactly two distinct intersection points and both are transversal. [step 1.1, step 1.2, F2, F3] ∎ 