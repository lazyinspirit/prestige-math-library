---
id: def-wirtinger-operators-in-several-complex-variables
kind: definition
title: "Wirtinger operators in $\\mathbb{C}^m$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-complex-euclidean-space-dictionary, def-wirtinger-derivatives, def-directional-and-partial-derivatives, def-total-derivative-in-euclidean-space, thm-total-derivative-computes-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-complex-conjugate-real-imaginary-part-and-modulus, lem-standard-basis-of-f-n, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.3"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Definition

Fix $m\ge1$, let $U\subseteq\mathbb C^m$ be open and let $f:U\to\mathbb C$. Read
$\mathbb C^m$ as $\mathbb R^{2m}$ through
[[rem-complex-euclidean-space-dictionary]], with real coordinates $x_k,y_k$ for
$k<m$ given by $z_k=x_k+iy_k$
([[def-complex-conjugate-real-imaginary-part-and-modulus]]), and let
$\partial_{x_k}f$ and $\partial_{y_k}f$ be the partial derivatives of
[[def-directional-and-partial-derivatives]] applied to the two real components of
$f$ and recombined.

At a point where all $2m$ of these partial derivatives exist, define the
**Wirtinger operators**

$$\partial_{z_k}f:=\tfrac12\bigl(\partial_{x_k}f-i\,\partial_{y_k}f\bigr), \qquad \partial_{\bar z_k}f:=\tfrac12\bigl(\partial_{x_k}f+i\,\partial_{y_k}f\bigr) \qquad(k<m).$$

**The differential identity.** Suppose in addition that $f$ is real totally
differentiable at a point $a\in U$, so that $Df(a)$ is the $\mathbb R$-linear
map with
$Df(a)h=\sum_{k<m}\Bigl(\bigl(\partial_{x_k}f(a)\bigr)\xi_k+\bigl(\partial_{y_k}f(a)\bigr)\eta_k\Bigr)$
for $h_k=\xi_k+i\eta_k$, by
[[thm-total-derivative-computes-directional-and-partial-derivatives]] read in the standard basis
([[lem-standard-basis-of-f-n]]). Substituting
$\xi_k=\tfrac12(h_k+\overline{h_k})$ and
$\eta_k=\tfrac1{2i}(h_k-\overline{h_k})$ and collecting the coefficients of
$h_k$ and $\overline{h_k}$ using finite sums in the additive commutative monoid
of $\mathbb C$ ([[def-finite-sum-in-a-commutative-monoid]]) and distributivity
in the complex field ([[thm-complex-numbers-form-a-field]]) gives

$$Df(a)h=\sum_{k<m}\Bigl(\bigl(\partial_{z_k}f(a)\bigr)h_k +\bigl(\partial_{\bar z_k}f(a)\bigr)\overline{h_k}\Bigr).$$

Indeed the coefficient of $h_k$ is
$\tfrac12\partial_{x_k}f(a)+\tfrac1{2i}\partial_{y_k}f(a)
=\tfrac12(\partial_{x_k}f(a)-i\partial_{y_k}f(a))$, and the coefficient of
$\overline{h_k}$ is
$\tfrac12\partial_{x_k}f(a)-\tfrac1{2i}\partial_{y_k}f(a)
=\tfrac12(\partial_{x_k}f(a)+i\partial_{y_k}f(a))$.

## Remarks

**At $m=1$ these are the published Wirtinger derivatives.** The two displayed
formulas are literally those of [[def-wirtinger-derivatives]] with $x_0,y_0$
written $x,y$, and the differential identity reduces to the identity
$Df(h)=(\partial_zf)h+(\partial_{\bar z}f)\overline h$ recorded there.

**These are operators on real-differentiable functions, not on holomorphic ones.**
Nothing above assumes any complex differentiability: the definition needs only the
$2m$ real partial derivatives, and the differential identity needs only real
total differentiability. Which functions have all $\partial_{\bar z_k}f=0$ is the
question the next lemma and the Cauchy–Riemann characterisation answer.
