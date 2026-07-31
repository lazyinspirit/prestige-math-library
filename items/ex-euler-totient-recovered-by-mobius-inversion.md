---
id: ex-euler-totient-recovered-by-mobius-inversion
kind: example
title: "Möbius inversion of $\\sum_{d\\mid n}\\varphi(d)=n$ gives $\\varphi(n)=\\sum_{d\\mid n}\\mu(d)(n/d)$"
status: published
origin: session
deps: [cor-classical-mobius-inversion, thm-sum-of-totients-over-divisors, def-number-theoretic-mobius-function]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
pipeline_run: null
---

## Example

The divisor-sum theorem from the CRT development states

$$n=\sum_{d\mid n}\varphi(d)$$

for every positive integer $n$ ([[thm-sum-of-totients-over-divisors]]). Apply [[cor-classical-mobius-inversion]] with $g(n)=n$ and $f(n)=\varphi(n)$. The form indexed by the complementary divisor gives

$$\varphi(n)=\sum_{d\mid n}\mu(d)g(n/d)=\sum_{d\mid n}\mu(d)\frac nd.$$

At $n=12$, the values from [[def-number-theoretic-mobius-function]] give

$$\varphi(12)=12-6-4+0+2+0=4,$$

where the terms correspond to $d=1,2,3,4,6,12$. Thus Möbius inversion recovers $\varphi(12)=4$ directly from the CRT divisor-sum theorem.
