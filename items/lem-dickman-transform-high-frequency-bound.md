---
id: lem-dickman-transform-high-frequency-bound
kind: lemma
title: High-frequency bound for the Dickman transform
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
proof_strategy: direct
axiom_use: No choice axiom is used; each integral and analytic continuation is for fixed complex data.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-dickman-entire-laplace-transform
- lem-dickman-method-of-steps-existence-uniqueness-and-positivity
- thm-ftc-second-part
- thm-identity-theorem-holomorphic-functions
sources:
  references:
  - title: Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
    locator: Lemma 2.7 and its use in equation 3.7. The exponential-integral identity below is derived locally.
---

## Statement

For every $\xi\ge0$ and real $\tau\ne0$, put $z=-\xi+i\tau$. Then
$$|z\widehat\rho(z)|\le\exp\!\left(\frac{e^\xi}{|\tau|}\right).$$
If additionally $|\tau|\ge2e^\xi$, then
$$|z\widehat\rho(z)-1|\le\frac{2e^\xi}{|\tau|}.$$
No Euler-product or smooth-counting estimate is asserted.

## Facts & Assumptions

**Given:** $\xi,\tau,z$ as in the Statement.

[F1] The entire transform has both the absolutely convergent integral $\widehat\rho(z)=\int_0^\infty\rho(u)e^{-zu}du$ and the exponential formula $$\widehat\rho(z)=\exp\!\left(\gamma+\int_0^1\frac{e^{-zr}-1}{r}dr\right).$$ [[lem-dickman-entire-laplace-transform]]

[F2] $\rho$ is continuous and positive and equals one on $[0,1]$. [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]]

[F3] Compact integration by parts and endpoint evaluation follow from the fundamental theorem of calculus. [[thm-ftc-second-part]]

[F4] Holomorphic functions agreeing on a set with a limit point in a connected domain agree throughout it. [[thm-identity-theorem-holomorphic-functions]]

## Proof

1.1 On $D=\mathbb C\setminus(-\infty,0]$, define $$E(z)=\int_0^\infty\frac{e^{-z-h}}{z+h}dh.$$ On every compact subset of $D$, the denominator is uniformly bounded away from zero when $h$ is bounded and is at least $h/2$ for large $h$; the exponentially decreasing numerator gives locally uniform convergence and permits differentiation under the integral. Integrating the derivative in $h$ gives $$E'(z)=-\frac{e^{-z}}z.$$ If $z=-\xi+i\tau$ then $|z+h|\ge|\tau|$, so $|E(z)|\le e^\xi/|\tau|$. [F3, given, algebra]

2.1 Differentiating [F1] under its finite integral gives $\widehat\rho'(z)/\widehat\rho(z)=-(1-e^{-z})/z$, with its removable value at zero. Consequently the derivative of $z\widehat\rho(z)e^{E(z)}$ is zero on $D$. For real $z\to+\infty$, [F2] gives $$z\widehat\rho(z)=1-e^{-z}+z\int_1^\infty\rho(u)e^{-zu}du\longrightarrow1:$$ the tail is bounded by $ze^{-z/2}\int_1^\infty\rho(u)e^{-u/2}du$ for $z\ge1$. Also $E(z)\to0$. Thus $z\widehat\rho(z)e^{E(z)}=1$ on the positive real line, and [F4] extends this identity throughout $D$. In particular $z\widehat\rho(z)=e^{-E(z)}$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Apply the modulus inequality $|e^w|\le e^{|w|}$ to step 2.1 and use step 1.1. If $|\tau|\ge2e^\xi$, then $|E(z)|\le1/2$ and the exponential series gives $|e^{-E(z)}-1|\le|E(z)|e^{|E(z)|}\le2|E(z)|$. These are the two stated bounds. [step 1.1, step 2.1, given, algebra] ∎
