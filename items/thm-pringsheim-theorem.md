---
id: thm-pringsheim-theorem
kind: theorem
title: "Pringsheim's theorem for power series with nonnegative coefficients"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-circle-of-convergence-contains-a-singular-point, def-singular-boundary-point-and-natural-boundary, thm-cauchy-hadamard-for-complex-power-series, thm-taylor-expansion-holomorphic-function, cor-complex-power-series-sums-have-derivatives-of-all-orders]
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
    - title: "Philippe Flajolet, Symbolic Enumerative Combinatorics and Complex Asymptotic Analysis, Theorem 4"
      url: "https://algo.inria.fr/seminars/sem00-01/flajolet.html"
    - title: "Henry Wilton, Riemann Surfaces lecture notes, §2.1"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
---

## Statement

Let

$$f(z)=\sum_{n\ge0} a_n z^n$$

have radius of convergence $R$ with $0<R<\infty$, and assume that every
$a_n \ge 0$ is real. Then the boundary point $R$ is singular for the function
element defined by $f$ on $D(0,R)$.

## Facts & Assumptions

**Given:** A power series $\sum_{n\ge0} a_n z^n$ with radius $R \in (0,\infty)$ and nonnegative coefficients.

[L1] Singular boundary points are those across which no holomorphic extension on a neighbourhood exists ([[def-singular-boundary-point-and-natural-boundary]]).

[L2] A holomorphic function equals its Taylor series throughout the largest centred disc contained in its domain ([[thm-taylor-expansion-holomorphic-function]]).

[L3] The radius of convergence is the one given by Cauchy-Hadamard ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L4] A complex power-series sum has derivatives of every order, obtained by repeated termwise differentiation ([[cor-complex-power-series-sums-have-derivatives-of-all-orders]]).

## Proof

**Proof technique:** direct.

1.1 Replacing $z$ by $Rz$ reduces the theorem to the case $R=1$: the rescaled series $\sum_{n\ge0} a_n R^n z^n$ still has nonnegative coefficients, has radius $1$ by [L3], and $1$ is regular for it exactly when $R$ is regular for the original series. [L1, L3, algebra]

1.2 Assume from now on that $R=1$, and suppose toward a contradiction that $1$ is regular. Then there is $\rho>0$ and a holomorphic extension $F$ on $D(1,\rho)$ agreeing with the original series on $D(0,1)\cap D(1,\rho)$. By [L2], $F$ has a Taylor expansion $$F(1+h)=\sum_{m\ge0} b_m h^m \qquad (|h|<\rho).$$ [L1, L2, assume-contra]

2.1 Fix $m,N\in\mathbb N$ and choose real $x$ with $\max\{0,1-\rho\}<x<1$, so $x$ lies in the overlap where both series represent $F$. Applying [L4] to the original series about $0$ gives $$\frac{F^{(m)}(x)}{m!}=\sum_{n\ge m}\binom{n}{m}a_n x^{n-m}\ge\sum_{n=m}^N \binom{n}{m}a_n x^{n-m},$$ because every $a_n\ge0$. Applying [L4] to the Taylor series about $1$ shows that $F^{(m)}(x)\to m!b_m$ as $x\to1^-$. Letting $x\to1^-$ therefore yields $$b_m\ge\sum_{n=m}^N \binom{n}{m}a_n.$$ [L4, step 1.2, algebra]

3.1 Choose $t$ with $0<t<\rho$ and put $y:=1+t/2>1$. By step 1.2, $$F(y)=\sum_{m\ge0} b_m (t/2)^m<\infty.$$ For every $N$, $$\sum_{n=0}^N a_n y^n=\sum_{n=0}^N a_n\sum_{m=0}^n \binom{n}{m}(t/2)^m =\sum_{m=0}^N\left(\sum_{n=m}^N\binom{n}{m}a_n\right)(t/2)^m \le\sum_{m=0}^N b_m(t/2)^m\le F(y),$$ where the inequality is step 2.1. Since the left-hand partial sums are nondecreasing, letting $N\to\infty$ gives $\sum_{n\ge0} a_n y^n\le F(y)<\infty$. [step 1.2, step 2.1, algebra]

4.1 Step 3.1 says that the original power series converges at the real point $y>1$, contradicting [L3] because the radius in the reduced case is $1$. Therefore $1$ is singular, and undoing the rescaling proves that the point $R$ is singular for the original series. [L3, step 1.1, step 3.1, discharge-contradiction] ∎
