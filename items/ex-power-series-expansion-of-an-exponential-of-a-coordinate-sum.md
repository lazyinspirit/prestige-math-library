---
id: ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum
kind: example
title: "The power series of $\\exp(z_0+z_1)$ on every bidisc"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multivariable-power-series, thm-power-series-define-holomorphic-functions-in-several-variables, cor-uniqueness-of-multivariable-power-series-coefficients, lem-cauchy-product-of-absolutely-convergent-complex-series, thm-double-series-fubini, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-exponential, thm-complex-exponential-addition-and-real-extension, lem-complex-exponential-series-converges-everywhere, def-factorial-and-falling-factorial, lem-binomial-theorem-over-complex-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

For $f(z)=\exp(z_0+z_1)$ on $\mathbb C^2$,

$$\exp(z_0+z_1)=\sum_{\alpha\in\mathbb N^2}\frac{z^\alpha}{\alpha!} =\sum_{m=0}^{\infty}\sum_{n=0}^{\infty}\frac{z_0^m z_1^n}{m!n!}.$$

The series converges absolutely on every bidisc, and its coefficient at
$z^\alpha$ is exactly $1/\alpha!$.

## Facts & Assumptions

**Given:** The complex exponential and the multi-index notation on $\mathbb C^2$.

[L1] $\exp(z_0+z_1)=\exp(z_0)\exp(z_1)$ ([[thm-complex-exponential-addition-and-real-extension]]).

[L2] The exponential series $\sum_{n\ge0} z^n/n!$ converges for every complex $z$ and equals $\exp(z)$ ([[lem-complex-exponential-series-converges-everywhere]], [[def-complex-exponential]]).

[L3] The Cauchy product of two absolutely convergent complex series converges absolutely and has the product sum ([[lem-cauchy-product-of-absolutely-convergent-complex-series]]).

[L4] An absolutely summable complex double array has the same sum along a bijective enumeration and in either iterated order: real double-series Fubini applies separately to its real and imaginary parts, whose absolute values are bounded by the complex moduli ([[thm-double-series-fubini]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [L2], $\exp(z_0+z_1)=\left(\sum_{m\ge0}z_0^m/m!\right)\left(\sum_{n\ge0}z_1^n/n!\right)$. [L1, L2]

2.1 Each one-variable exponential series is absolutely convergent. Moreover, for the double array $a_{mn}=z_0^mz_1^n/(m!n!)$, [L2] gives $\sum_n|a_{mn}|=(|z_0|^m/m!)\exp(|z_1|)$ and then $\sum_m\sum_n|a_{mn}|=\exp(|z_0|)\exp(|z_1|)<\infty$. Hence [L3] identifies the product in step 1.1 with the absolutely convergent diagonal enumeration $\sum_{N\ge0}\sum_{m=0}^N z_0^m z_1^{N-m}/(m!(N-m)!)$. The substitution $(m,n)=(m,N-m)$ enumerates every pair in $\mathbb N^2$ exactly once, and [L4] now permits regrouping the array in iterated order. Therefore $$\exp(z_0+z_1)=\sum_{m\ge0}\sum_{n\ge0}\frac{z_0^m z_1^n}{m!\,n!}=\sum_{\alpha\in\mathbb N^2}\frac{z^\alpha}{\alpha!}.$$ [step 1.1, L2, L3, L4]

3.1 On every bidisc the series is absolutely convergent because it is the product of two absolutely convergent one-variable exponential series there, and step 2.1 already identifies the coefficient of $z^\alpha$ as exactly $1/\alpha!$. [step 2.1] ∎
