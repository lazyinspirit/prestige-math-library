---
id: ex-holomorphy-of-integral-of-t-to-z
kind: example
title: "Morera proves holomorphy of $z\\mapsto\\int_0^1 t^z\\,dt$ on $\\operatorname{Re}z>1$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "Principal powers are undefined at base zero unless an endpoint value is supplied and proved jointly continuous."
  counterexample_search: "Checked the endpoint along arbitrary convergent pairs $(t,z)$ with $t\\to0^+$ and $\\operatorname{Re}z>1$ locally; the bound $|t^z|\\le t$ closes the joint-continuity risk."
deps: [thm-holomorphic-parameter-riemann-integral, def-complex-logarithms-principal-logarithm-and-complex-powers, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-natural-logarithm, thm-exponential-is-strictly-increasing, thm-natural-logarithm-laws, cor-complex-differentiability-implies-continuity, thm-chain-rule-for-complex-derivatives, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 5.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Example

Let $\Omega=\{z\in\mathbb C:\operatorname{Re}z>1\}$. For $t>0$, use the principal power $t^z=\exp(z\log t)$, and set $0^z:=0$ for $z\in\Omega$. Then

$$F(z):=\int_0^1t^z\,dt$$

is holomorphic on $\Omega$.

## Facts & Assumptions

**Given:** The half-plane $\Omega=\{z:\operatorname{Re}z>1\}$ and the endpoint convention in the example.

[L1] For a nonzero complex base $t$ and exponent $z$, the principal power is $t^z=\exp(z\operatorname{Log}t)$; for positive real $t$, $\operatorname{Log}t=\log t$ ([[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[def-natural-logarithm]]).

[L2] The complex exponential is entire and has derivative equal to itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L3] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L4] The complex exponential agrees with the real exponential on the real axis ([[thm-complex-exponential-addition-and-real-extension]]).

[L5] The real exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[L6] The natural logarithm is continuous and strictly increasing on the positive reals, with $\log1=0$ ([[thm-natural-logarithm-laws]]).

[L7] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L8] The composite of complex differentiable functions is complex differentiable ([[thm-chain-rule-for-complex-derivatives]]).

[L9] Complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

[L10] A jointly continuous finite-interval integral of holomorphic parameter slices is holomorphic ([[thm-holomorphic-parameter-riemann-integral]]).

## Verification

**Proof technique:** direct.

1.1 For $t>0$ define $\varphi(t,z)=\exp(z\log t)$ by [L1], and define $\varphi(0,z)=0$ as stated in the example. [given, L1]

2.1 For fixed $t>0$, the map $z\mapsto z\log t$ is complex linear and [L2] with [L8] makes $\varphi(t,\cdot)$ entire; for $t=0$ the slice is the constant zero function and is entire. [step 1.1, L2, L8]

2.2 On $(0,1]\times\Omega$, [L3] and [L4] give $|\varphi(t,z)|=\exp((\operatorname{Re}z)\log t)$; [L6] gives $\log t\le0$, so $\operatorname{Re}z>1$ and [L5] yield $|\varphi(t,z)|\le\exp(\log t)=t$. Thus $\varphi(t,z)\to0$ uniformly for $z$ near any fixed point of $\Omega$ as $t\to0^+$; away from $t=0$, continuity follows from [L6], [L7], and the multiplication estimate from [L9], so $\varphi$ is jointly continuous on $[0,1]\times\Omega$. [step 1.1, L3, L4, L5, L6, L7, L9, algebra]

3.1 Steps 2.1 and 2.2 satisfy [L10] on the finite interval $[0,1]$, so $F(z)=\int_0^1\varphi(t,z)\,dt$ is holomorphic on $\Omega$. [step 2.1, step 2.2, L10] ∎
