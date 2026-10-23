---
id: def-fd-real-trigonometric-functions
kind: definition
title: "Real sine and cosine as real restrictions of complex trigonometric functions"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01
deps:
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - def-complex-trigonometric-and-hyperbolic-functions
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-trigonometric-hyperbolic-dictionary
dependency_roles:
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  def-complex-trigonometric-and-hyperbolic-functions: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-trigonometric-hyperbolic-dictionary: mathematical-premise
dependency_level: 0
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Chapter 1, §§2.2–2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
verification:
  precheck: pending
---

## Definition

For $z\in\mathbb C$, let $E(z)=\sum_{n=0}^{\infty}z^n/n!$ be the complex exponential and set $s_{\mathbb C}(z)=(E(iz)-E(-iz))/(2i)$ and $c_{\mathbb C}(z)=(E(iz)+E(-iz))/2$, where $i^2=-1$. For $t\in\mathbb R$, define the real-valued functions $S(t)=\operatorname{Re}(s_{\mathbb C}(t))$ and $C(t)=\operatorname{Re}(c_{\mathbb C}(t))$, with $\operatorname{Re}(x+iy)=x$. These are the real restrictions of the complex sine and cosine; on real inputs they agree with the usual real sine and cosine.

## Definition references

[[def-complex-exponential]]

[[lem-complex-exponential-series-converges-everywhere]]

Complex sine and cosine: [[def-complex-trigonometric-and-hyperbolic-functions]].

Real part of a complex number: [[def-complex-conjugate-real-imaginary-part-and-modulus]].

Agreement with real sine and cosine on real arguments: [[thm-complex-trigonometric-hyperbolic-dictionary]].

Complex sine and cosine power series and their real restrictions: [Stein and Shakarchi, *Complex Analysis*, Chapter 1, §2.3, printed pp. 16–17 (PDF pp. 34–35)](https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf).

## Source notes


Complex exponential and its convergence on all of $\mathbb C$: [[def-complex-exponential]] and [[lem-complex-exponential-series-converges-everywhere]].

