---
id: ex-flex-cubic-contact-order-three
kind: example
title: A flex of a cubic has contact order three
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-tangent-line-flex-multiplicity, def-axiom-of-choice, def-flex-and-bitangent-plane-curve, def-plane-projective-curve, def-tangent-lines-plane-curve-point, lem-local-intersection-as-vanishing-order-on-smooth-curve, lem-smooth-plane-curve-unique-tangent]
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Example

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

For the Fermat cubic $C=V(x_0^3+x_1^3+x_2^3)$ over an algebraically closed field of characteristic not three, the point $p=[1:-1:0]$ is a flex. Its tangent line is $T=V(x_0+x_1)$: substituting $x_0=-x_1$ into the equation gives $x_2^3$, so the restriction to $T$ has a triple root at $p$ and $I_p(C,T_pC)=3$.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], an algebraically closed field $k$ of characteristic not three, the Fermat cubic $C=V(F)$ with $F=x_0^3+x_1^3+x_2^3$, the point $p=[1:-1:0]$, and the line $T=V(x_0+x_1)$.

[F1] If $F$ had a repeated irreducible factor, it would divide all of $3x_0^2,3x_1^2,3x_2^2$, impossible since $3\ne0$ and these polynomials have no common nonconstant divisor. Thus $F$ is square-free of degree three, and $p\in C$ because $1^3+(-1)^3+0^3=0$; the gradient of $F$ at $p$ is $(3x_0^2,3x_1^2,3x_2^2)=(3,3,0)$, nonzero since the characteristic is not three, so $p$ is a smooth point [[def-plane-projective-curve]], [[lem-smooth-plane-curve-unique-tangent]].

[F2] The tangent line at the smooth point $p$ is computed from the gradient: $3x_0+3x_1+0\cdot x_2=0$, i.e. $x_0+x_1=0$, so $T=T_pC$ [[def-tangent-lines-plane-curve-point]], [[lem-smooth-plane-curve-unique-tangent]].

[F3] For a smooth point $p$ whose tangent line $T$ is not a component of $C$, $I_p(C,T)=\operatorname{ord}_p(F|_T)$, the order of vanishing of the nonzero restricted form, and $p$ is a flex exactly when that order is at least three; an ordinary flex is the case of order exactly three [[cor-tangent-line-flex-multiplicity]], [[lem-local-intersection-as-vanishing-order-on-smooth-curve]].

## Verification

1.1 The restriction to $T$: parametrise $T$ by $(s:-s:t)$; then $F$ restricts to $s^3-s^3+t^3=t^3$, a binary cubic in $(s,t)$ whose only root is $[s:t]=[1:0]$, the point $p=[1:-1:0]$, with multiplicity three. [F1, F2, algebra]

2.1 Since the restriction in step 1.1 is nonzero, $T$ is not a component of $C$. By [F3] the vanishing order three of the restriction is exactly the intersection multiplicity $I_p(C,T_pC)=3$, so $p$ is a flex, and it is an ordinary flex. [step 1.1, F3, algebra]

3.1 The example exhibits a smooth cubic point where the tangent line meets the curve with contact order three; this realises the flex criterion $I_p(C,T_pC)=3$ concretely in homogeneous coordinates. [step 1.1, step 2.1, F1, F2, F3] ∎ 
