---
id: def-unit-disc-upper-half-plane-and-blaschke-factor
kind: definition
title: "The unit disc, the upper half-plane, and Blaschke factors"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Definition

Fix the **unit disc** and the **upper half-plane**

$$\mathbb D:=\{\,z\in\mathbb C:|z|<1\,\},\qquad \mathbb H:=\{\,z\in\mathbb C:\operatorname{Im}z>0\,\},$$

using modulus and imaginary part of
[[def-complex-conjugate-real-imaginary-part-and-modulus]].

For $a\in\mathbb D$ define the **Blaschke factor**

$$\varphi_a(z):=\frac{a-z}{1-\overline a\,z}.$$

For every $z$ with $|z|\le1$, one has $|\overline a\,z|\le|a|<1$, so the
denominator never vanishes on the closed unit disc. Thus $\varphi_a$ is
holomorphic on an open disc containing the closed unit disc and in particular
on $\mathbb D$. Direct substitution records

$$\varphi_a(0)=a,\qquad \varphi_a(a)=0.$$
