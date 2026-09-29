---
page: unitary-representations-positive-type-and-gns-examples
title: "Unitary Representations, Positive Type and GNS — Examples"
status: draft
items: []
examples:
  - ex-positive-type-functions-on-a-discrete-group
  - ex-gns-representation-of-a-one-dimensional-character
  - ex-positive-type-gaussian-on-the-real-line
  - cex-a-bounded-continuous-function-need-not-have-positive-type
---

The examples show how positive-type functions arise from familiar unitary
representations and how the GNS construction recovers those models. On a
discrete group, the identity mass is normalized positive type, and the GNS
representation is the left regular representation on $\ell^2(\Gamma)$ with
cyclic vector $\delta_e$. Normalized characters of finite-dimensional unitary
representations give further positive-type functions.

A continuous unitary character $\chi:G\to\mathbb T$ is the diagonal
coefficient of the scalar representation $\pi_\chi(g)z=\chi(g)z$ on
$\mathbb C$. Its finite-support GNS quotient is one-dimensional, with
$[\delta_g]=\chi(g)[\delta_e]$; under AC, pointed uniqueness identifies this
model with the canonical GNS triple.

For the additive real group, the Gaussian density
$w(s)=e^{-s^2/4}/(2\sqrt\pi)$ has total mass one, and its positive-phase Fourier
coefficient is
$\int_{\mathbb R}e^{its}w(s)\,ds=e^{-t^2}$. Multiplication by $e^{its}$ on
complex $L^2(\mathbb R)$ restricts to a cyclic strongly continuous unitary
representation on the closed orbit span of $\sqrt w$. This gives a concrete
GNS model for $e^{-t^2}$. The local proof derives the Fourier identity; Dyatlov,
*Lecture notes for 18.155*, §11.1.4, Proposition 11.14, is used as a
comparison for the Gaussian transform.

The counterexample separates bounded continuity and normalization from
positive type. The function $f(t)=e^{-t^4}$ on $\mathbb R$ is continuous,
even, bounded by one and satisfies $f(0)=1$. At the points
$0,\frac12,1$, its positive-type matrix tested on $(1,-2,1)$ has value
$6-8e^{-1/16}+2e^{-1}\le-\frac12$, so the matrix is not positive
semidefinite and $f$ is not of positive type.

The positive-type calculations for the discrete identity mass and finite-dimensional
characters, and the displayed counterexample witness, are choice-free. The
GNS identifications use AC; the Gaussian model also uses AC through the
Countable Choice assumptions of its $L^2$ and integration suppliers.
