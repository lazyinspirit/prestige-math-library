---
id: thm-circle-of-convergence-contains-a-singular-point
kind: theorem
title: "A power series of finite radius has a singular point on its circle of convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-singular-boundary-point-and-natural-boundary, thm-cauchy-hadamard-for-complex-power-series, thm-taylor-expansion-holomorphic-function, thm-heine-borel-rn, thm-identity-theorem-holomorphic-functions, cor-complex-power-series-coefficient-formula]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Henry Wilton, Riemann Surfaces lecture notes, Proposition 2.5"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4 Example 2"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
---

## Statement

Let

$$f(z)=\sum_{n\ge0} c_n (z-a)^n$$

have finite radius of convergence $R$ with $0<R<\infty$, and regard $f$ as a
function element on the disc $D(a,R)$. Then some point of the boundary circle
$|z-a|=R$ is a singular boundary point of that function element.

## Facts & Assumptions

**Given:** A power series $\sum c_n(z-a)^n$ with finite radius $R$.

[L1] A singular boundary point is a boundary point across which no holomorphic extension on a neighbourhood exists ([[def-singular-boundary-point-and-natural-boundary]]).

[L2] Cauchy-Hadamard gives the exact disc of convergence of the series and makes no assertion on its boundary ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L3] A holomorphic function equals its Taylor series throughout the largest centred disc contained in its domain ([[thm-taylor-expansion-holomorphic-function]]).

[L4] A closed and bounded subset of $\mathbb R^n$ is compact ([[thm-heine-borel-rn]]).

[L5] If two holomorphic functions on a complex domain agree on a set with an accumulation point in that domain, then they agree on the whole domain ([[thm-identity-theorem-holomorphic-functions]]).

[L6] If a power series represents a holomorphic function near its centre, then its coefficients are the derivatives at the centre divided by the corresponding factorials ([[cor-complex-power-series-coefficient-formula]]).

## Proof

**Proof technique:** direct.

1.1 Suppose toward a contradiction that every point of the circle $C:=\{z:|z-a|=R\}$ is regular. By [L1], each $\zeta \in C$ then has a disc $B(\zeta,r_\zeta)$ and a holomorphic extension $F_\zeta$ on that disc agreeing with the original series on $B(\zeta,r_\zeta)\cap D(a,R)$. The circle $C$ is closed and bounded in $\mathbb R^2$, hence compact by [L4], so finitely many of these discs cover $C$. [L1, L4, assume-contra, choose]

2.1 The union of those finitely many extension discs is an open neighbourhood of $C$, so some $\varepsilon>0$ satisfies $\{z:R-\varepsilon<|z-a|<R+\varepsilon\}$ inside that union. Hence $D(a,R+\varepsilon)$ is covered by $D(a,R)$ together with the finitely many extension discs. On overlaps, each extension agrees with the original series on a nonempty open subset of $D(a,R)$, so [L5] makes all the local definitions agree on overlaps. Therefore they glue to one holomorphic function $F$ on $D(a,R+\varepsilon)$ that agrees with the original series on $D(a,R)$. [L5, step 1.1, algebra]

3.1 Because $F$ is holomorphic on $D(a,R+\varepsilon)$, [L3] gives a Taylor expansion $$F(z)=\sum_{n\ge0}\frac{F^{(n)}(a)}{n!}(z-a)^n \qquad (|z-a|<R+\varepsilon).$$ On $D(a,R)$ the original series already represents $F$, so [L6] gives $c_n=F^{(n)}(a)/n!$ for every $n$. Thus the original series itself converges on $D(a,R+\varepsilon)$, contradicting [L2] because its radius was $R$. [L2, L3, L6, step 2.1]

4.1 Therefore the assumption of step 1.1 is false, and some point of $|z-a|=R$ is singular. [step 3.1, discharge-contradiction] ∎
