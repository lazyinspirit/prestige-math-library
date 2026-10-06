---
id: ex-tangent-line-conic-double-intersection
kind: example
title: A tangent line meets a conic with multiplicity two at one point
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-line-meets-degree-d-curve-counted-with-multiplicity, def-axiom-of-choice, def-flex-and-bitangent-plane-curve, def-local-intersection-multiplicity-plane-curves, def-plane-projective-curve, def-tangent-lines-plane-curve-point, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-gauss-lemma-over-a-ufd, lem-intersection-with-line-order-of-vanishing, lem-smooth-plane-curve-unique-tangent]
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

Over an algebraically closed field $k$ of characteristic not two, let $C=V(x_0^2-x_1x_2)$ and let $L=V(x_1)$ be the tangent line to $C$ at $p=[0:0:1]$. Then $L\cap C=\{p\}$ as a set, and substituting $x_1=0$ leaves the restriction $x_0^2$ with a double root at $p$, so $I_p(C,L)=2$ and the single point accounts for the full degree-two total.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], an algebraically closed field $k$ of characteristic not two, the conic $C=V(x_0^2-x_1x_2)$, the line $L=V(x_1)$, and the point $p=[0:0:1]$.

[F1] The quadratic is primitive and linear in $x_2$ over $k[x_0,x_1]$, so Gauss lemma makes it irreducible and square-free [[lem-gauss-lemma-over-a-ufd]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]. Therefore $C$ is a plane projective curve of degree two and $L$ a line with $L\not\subseteq C$; $p\in L\cap C$ because $x_1(p)=0$ and $x_0(p)^2-x_1(p)x_2(p)=0$ [[def-plane-projective-curve]].

[F2] The gradient of $x_0^2-x_1x_2$ at $p$ is $(2x_0,-x_2,-x_1)=(0,-1,0)$, nonzero, and the tangent line it defines is $x_1=0$, i.e. $T_pC=L$; so $L$ is the tangent line of the conic at $p$ [[lem-smooth-plane-curve-unique-tangent]], [[def-tangent-lines-plane-curve-point]].

[F3] Restricting the defining form to $L$: every point of $L$ has $x_1=0$, and the restriction is the binary form $x_0^2$ in the coordinates $(x_0,x_2)$, with a double root at $[x_0:x_2]=[0:1]$, the point $p$. By the order-of-vanishing formula $I_p(C,L)$ equals that root multiplicity [[lem-intersection-with-line-order-of-vanishing]], [[def-local-intersection-multiplicity-plane-curves]].

[F4] The line-intersection count for the degree-two conic and the degree-one line gives $\sum_{q\in L\cap C}I_q(C,L)=2$ [[cor-line-meets-degree-d-curve-counted-with-multiplicity]].

## Verification

1.1 The set $L\cap C$ is exactly $\{p\}$: on $L$ the equation becomes $x_0^2=0$, so $x_0=0$ and the point is $[0:0:1]$. [F1, algebra]

1.2 Since the restriction $x_0^2$ has a double root at $p$, the order of vanishing is two, so $I_p(C,L)=2$ by [F3]; the value is consistent with the total $2$ of [F4], the line being tangent at its unique intersection point. [F2, F3, F4, algebra]

2.1 The single point $p$ with multiplicity two accounts for the full degree total $2=2\cdot1$, so tangency is exactly the phenomenon that distinct-point counting misses. [step 1.1, step 1.2, F4] ∎ 