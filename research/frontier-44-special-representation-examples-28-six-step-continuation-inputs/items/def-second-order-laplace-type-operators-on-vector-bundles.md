---
id: def-second-order-laplace-type-operators-on-vector-bundles
kind: definition
title: "Second-order Laplace-type operators on metric vector bundles"
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-smooth-section-local-section-and-support
  - def-smooth-bundle-metric
  - def-complex-linear-and-compatible-bundle-connections
  - def-density-bundle-and-smooth-density
  - def-integral-of-a-compactly-supported-smooth-density
  - def-smooth-tensor-field
  - thm-chain-rule-for-total-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (Universite Grenoble Alpes author manuscript); Ch. VI §1, (1.1)–(1.2) and (1.4)–(1.8), printed pp. 287–289: differential operators on vector bundles, principal symbol, L2 pairing, formal adjoint and ellipticity"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    - title: "John M. Lee, Introduction to Smooth Manifolds (2nd ed.); Ch. 13 and Ch. 15: Riemannian metrics and density integration; bundle sections and local frames"
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
verification:
  precheck: n/a
---

## Definition

Let $M$ be a Hausdorff second-countable smooth manifold without boundary of
dimension $n\ge2$ ([[def-smooth-manifold]]), let $\mu$ be a smooth positive
density on $M$ ([[def-density-bundle-and-smooth-density]]), and let $E\to M$ be
a finite-rank smooth vector bundle
([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]) over
$\mathbb K=\mathbb R$ or $\mathbb C$ carrying a smooth bundle metric
$\langle\cdot,\cdot\rangle$ ([[def-smooth-bundle-metric]]), Euclidean in the
real case and Hermitian, linear in the first variable, in the complex case; in
the complex case the fibres are complex vector spaces through a smooth complex
structure on $E$
([[def-complex-linear-and-compatible-bundle-connections]]). Write $\Gamma(E)$
for the smooth sections ([[def-smooth-section-local-section-and-support]]).

A $\mathbb K$-linear map $P:\Gamma(E)\to\Gamma(E)$ is a **linear differential
operator of order at most two** on $E$ when, on every chart domain $\Omega$ of
$M$ with coordinates $x=(x^1,\ldots,x^n)$ and in every local frame of $E$ over
$\Omega$ in which a section is written $s\leftrightarrow u=(u^1,\ldots,u^r)$
and its image as $Ps\leftrightarrow((Ps)_1,\ldots,(Ps)_r)$,
$$(Ps)_\lambda=-\sum_{i,j=1}^na^{ij}_{\lambda\mu}(x)\,\partial_i\partial_ju^\mu(x)+\sum_{j=1}^nb^j_{\lambda\mu}(x)\,\partial_ju^\mu(x)+c_{\lambda\mu}(x)u^\mu(x),\qquad1\le\lambda\le r,$$
with smooth coefficient functions on $\Omega$ and summation over the repeated
index $\mu$ (and over $i,j$). Such an operator is **Laplace type** when in
addition, in every such chart and frame, its second-order coefficients are
scalar multiples of the identity, $a^{ij}_{\lambda\mu}=a^{ij}\delta_{\lambda\mu}$,
with $a^{ij}$ smooth real functions for which the matrix $(a^{ij}(x))$ is
symmetric and positive definite at every $x\in\Omega$. Its **principal symbol**
is the smooth section $\sigma_2(P)$ of $\mathrm{Sym}^2T^*M$
([[def-smooth-tensor-field]]) given on such a chart by
$\sigma_2(P)(x,\xi)=a^{ij}(x)\xi_i\xi_j$ for $\xi\in T_x^*M$; equivalently
$\sigma_2(P)(x,\xi)=a_x(\xi,\xi)\,\mathrm{id}_{E_x}$ for a smooth field of
positive-definite quadratic forms $a_x$ on $T_x^*M$, so that
$\sigma_2(P)(x,\xi)>0$ whenever $\xi\ne0$.

$P$ is **formally symmetric** for $(\mu,\langle\cdot,\cdot\rangle)$ when
$$\int_M\langle Ps,t\rangle\,d\mu=\int_M\langle s,Pt\rangle\,d\mu$$
for all compactly supported smooth sections $s,t\in\Gamma_c(E)$
([[def-integral-of-a-compactly-supported-smooth-density]]).

**Well-definedness.** The definition is local. On a fixed chart and frame the
displayed assignment is a $\mathbb K$-linear map on components with smooth
coefficients, and the chain rule ([[thm-chain-rule-for-total-derivatives]])
computes the transition to another chart and frame on the overlap: the
second-order coefficients transform by the symmetric tensor rule
$a'^{kl}=a^{ij}\frac{\partial x'^k}{\partial x^i}\frac{\partial x'^l}{\partial x^j}$
together with conjugation by the frame-change matrix, while the terms produced
by the second derivatives of the coordinate change are absorbed into the
first-order coefficients. Hence a single operator that admits a local
expression on one cover admits a local expression on every chart and frame, and
the two hypotheses placed on the leading coefficient are invariant: scalar-ness
is preserved by frame conjugation and by the coordinate rule for a field of
symmetric matrices, and symmetric positive definiteness is preserved by both.
The principal symbol is therefore independent of the chart and frame, since two
local expressions of the same operator differ by an operator of order at most
one; it is smooth in $(x,\xi)$ because the $a^{ij}$ are smooth, and it is
positive on nonzero covectors exactly when $(a^{ij})$ is positive definite.
Formal symmetry is an identity between integrals of compactly supported smooth
sections and therefore depends only on the operator, the density and the
metric.

## Remarks

- *Choice.* Supplied data only; all computations are finite chart calculations
  and no choice principle is used. No existence of densities, metrics or
  partitions is asserted.
- *Sign convention.* The minus sign in the leading term makes the model operator
  $-\Delta$ on functions Laplace type with principal symbol $\lvert\xi\rvert^2$;
  the invariance statement above does not depend on this sign choice, which is
  fixed once and for all for this page and its companion.
