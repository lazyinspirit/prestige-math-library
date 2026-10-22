---
id: lem-ip-augmented-observation-range-invariance-and-remainder
kind: lemma
title: Observation augmentation gives an explicit range factorization and inverse
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-differential-range-invariance
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography
      url: https://arxiv.org/pdf/2403.18704
      locator: Section 2.4, equations (2.42)–(2.43)
---

## Statement

Let $V,Y$ be real Banach spaces, let $B\subset V$ be an open convex ball of radius $R$ centered at $v_0$, and let $G:B\to Y$ be continuously Fréchet differentiable. Suppose $\|G'(v)-G'(w)\|\le L\|v-w\|$ on $B$. Give $X=Z=V\times Y$ the sum norm. Fix $z_0\in Y$, and write $x_0=(v_0,z_0)$ and $U=B\times Y$. Set
$$F(v,z)=G(v)+z,\quad T(v)=G(v)-G(v_0)-G'(v_0)(v-v_0),$$
$$r(v,z)=(v-v_0,z-z_0+T(v)),\qquad K(a,b)=G'(v_0)a+b.$$
Then $F(x)-F(x_0)=Kr(x)$ on $U$, and $r$ is a bijection onto $(B-v_0)\times Y$, with inverse
$$r^{-1}(a,b)=(v_0+a,z_0+b-T(v_0+a)).$$
Both $r$ and $r^{-1}$ are Lipschitz with constant at most $1+LR$. Moreover,
$$\|r(x_1)-r(x_2)-r'(x_2)(x_1-x_2)\|_Z\le LR\|r(x_1)-r(x_2)\|_Z\qquad(x_1,x_2\in U).$$
Thus its Taylor constant can be made arbitrarily small by restricting the ball while retaining the same $L$. For the projection $P(v,z)=(0,z)$ one also has $\|Pr^{-1}(a,b)-Pr^{-1}(a',b')\|_X\le(1+LR)\|(a,b)-(a',b')\|_Z$.

## Statement references

[[def-ip-differential-range-invariance]]

[Kaltenbacher, Section 2.4](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The Banach spaces, convex ball, differentiable map, and derivative bound in the Statement.

[A1] $\|G'(v)-G'(w)\|\le L\|v-w\|$ for $v,w\in B$.

## Proof

1.1 Along the segment from $w$ to $v$, the fundamental theorem of calculus for the continuously differentiable Banach-valued curve gives $G(v)-G(w)=\int_0^1G'(w+t(v-w))(v-w)\,dt$. This identity follows directly by subdividing $[0,1]$: the difference of each increment and its derivative Riemann sum has norm bounded by the modulus of continuity of the derivative times the subinterval length, which tends uniformly to zero; completeness supplies the integral. Subtracting $G'(v_0)(v-w)$ and applying [A1] shows $\|T(v)-T(w)\|\le LR\|v-w\|$, since every point of the segment is at distance at most $R$ from $v_0$. Similarly $\|G(v)-G(w)-G'(w)(v-w)\|\le L\|v-w\|^2/2$. [A1, given, algebra]

2.1 Direct substitution gives $Kr(v,z)=G'(v_0)(v-v_0)+z-z_0+T(v)=F(v,z)-F(x_0)$. Substitution of the displayed inverse in $r$, and of $r$ in that inverse, gives the identity in both orders. For two inputs, the triangle inequality and step 1.1 give $\|r(v,z)-r(w,\zeta)\|\le(1+LR)\|v-w\|+\|z-\zeta\|\le(1+LR)\|(v,z)-(w,\zeta)\|$. The same calculation with the minus sign before $T$ gives the inverse bound. Dropping the first component of the inverse difference gives the projection bound. [step 1.1, given, algebra]

3.1 The derivative is $r'(v,z)(a,b)=(a,b+(G'(v)-G'(v_0))a)$. Therefore its Taylor remainder has first component zero and second component $G(v_1)-G(v_2)-G'(v_2)(v_1-v_2)$. By step 1.1 it is bounded by $L\|v_1-v_2\|^2/2$. Since $\|v_1-v_2\|\le2R$ and the first component of $r(x_1)-r(x_2)$ is $v_1-v_2$, this is at most $LR\|r(x_1)-r(x_2)\|$. Restricting $R$ makes this constant as small as desired. [step 1.1, step 2.1, algebra] ∎
