---
id: def-complex-manifolds-and-holomorphic-vector-bundles
kind: definition
title: "Complex manifolds, holomorphic vector bundles and Hermitian metrics"
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-topological-manifold-without-boundary
  - def-hausdorff-space
  - def-second-countable-space
  - def-homeomorphism-and-open-maps
  - def-smooth-manifold
  - def-smooth-atlas
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-function-in-several-complex-variables
  - def-holomorphic-map-and-complex-jacobian
  - thm-chain-rule-for-holomorphic-maps-in-several-variables
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-smooth-section-local-section-and-support
  - def-smooth-bundle-metric
  - def-complex-linear-and-compatible-bundle-connections
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Schnell, Complex Manifolds, MAT 545 Fall 2024; Class 4, Definition 4.5 and Proposition 4.6: complex manifolds and their atlases"
      url: https://www.math.stonybrook.edu/~cschnell/mat545/class4.pdf
    - title: "Christian Schnell, Complex Manifolds, MAT 545 Fall 2024; Class 5, Definition 5.4 and Proposition 5.6: vector bundles and their gluing"
      url: https://www.math.stonybrook.edu/~cschnell/mat545/class5.pdf
    - title: "Christian Schnell, Complex Manifolds, MAT 545 Fall 2024; Class 9, Definition 9.4: Hermitian metrics on complex manifolds"
      url: https://www.math.stonybrook.edu/~cschnell/mat545/class9.pdf
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry; Ch. V §11, Definition (11.1) and the following paragraph, printed pp. 267–268: holomorphic vector bundles via holomorphic trivializations and holomorphic transition matrices"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Definition

Let $m\ge1$. A **chart** on a topological space $X$ is a homeomorphism
$\varphi:U\to\varphi(U)$ from an open set $U\subseteq X$ onto an open subset of
$\mathbb C^m$ with its usual topology ([[def-homeomorphism-and-open-maps]]);
two charts $\varphi,\psi$ are **holomorphically compatible** when the
transition maps $\psi\circ\varphi^{-1}$ and $\varphi\circ\psi^{-1}$ are
holomorphic on the open sets where they are defined
([[def-holomorphic-function-in-several-complex-variables]]). A **holomorphic
atlas** is a family of pairwise compatible charts whose domains cover $X$. A
**complex manifold of dimension $m$** is a nonempty Hausdorff
([[def-hausdorff-space]]) second-countable ([[def-second-countable-space]])
topological space carrying a holomorphic atlas; the same maximal-atlas argument
as for [[def-riemann-surface-and-holomorphic-atlas]] applies verbatim with
$\mathbb C^m$ in place of $\mathbb C$: the union of a holomorphic atlas with all
charts compatible with it is again a holomorphic atlas, so one passes to the
unique maximal atlas and calls its members holomorphic charts. Each chart is a
homeomorphism onto an open subset of $\mathbb C^m\cong\mathbb R^{2m}$, so $X$ is
a topological manifold without boundary of real dimension $2m$
([[def-topological-manifold-without-boundary]]), and for connected $X$ the case
$m=1$ recovers Riemann surfaces ([[def-riemann-surface-and-holomorphic-atlas]]).

A **holomorphic map** $f:X\to Y$ between complex manifolds is a continuous map
whose expression in every pair of holomorphic charts is holomorphic
([[def-holomorphic-map-and-complex-jacobian]]); equivalently, for every open
$V\subseteq Y$ and every holomorphic function $h$ on $V$, the function
$h\circ f$ is holomorphic on $f^{-1}(V)$. The forward implication is the
holomorphic chain rule; conversely apply this condition to the coordinate
functions of a chart on $Y$.

**Induced smooth structure and complex structure.** Holomorphic functions on
open subsets of $\mathbb C^m$ are smooth
([[cor-holomorphic-functions-in-several-variables-are-smooth]]), so every
holomorphic atlas is a smooth atlas ([[def-smooth-atlas]]) and $X$ is a smooth
manifold of real dimension $2m$ ([[def-smooth-manifold]]) whose smooth charts
include the holomorphic ones. In holomorphic coordinates
$z_k=x_k+iy_k$ the **complex structure** is the endomorphism field $J$ of the
tangent bundle determined by $J\partial_{x_k}=\partial_{y_k}$ and
$J\partial_{y_k}=-\partial_{x_k}$; it satisfies $J^2=-\mathrm{id}$ and is
independent of the holomorphic chart, because a holomorphic transition map has
complex-linear differential ([[def-holomorphic-map-and-complex-jacobian]],
[[thm-chain-rule-for-holomorphic-maps-in-several-variables]]) and complex-linear
maps intertwine the two coordinate definitions of multiplication by $i$. A
**Hermitian metric** on $X$ is a Riemannian metric $g$
([[def-riemannian-metric-and-riemannian-manifold]]) satisfying
$g(Jv,Jw)=g(v,w)$ for all tangent vectors $v,w$; its Riemannian volume density
is written $\mu_g$ ([[def-riemannian-volume-density]]). The complex structure
makes each tangent space a complex vector space, so the tangent bundle is a
smooth complex vector bundle in the sense of
[[def-complex-linear-and-compatible-bundle-connections]].

**Holomorphic vector bundles and Hermitian bundle metrics.** A **holomorphic
vector bundle of rank $r$** on $X$ is a smooth complex vector bundle
$\pi:E\to X$ of rank $r$
([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]],
[[def-complex-linear-and-compatible-bundle-connections]]) together with an open
cover $(V_\alpha)$ of $X$ and smooth local trivializations
$\theta_\alpha:E|_{V_\alpha}\to V_\alpha\times\mathbb C^r$ whose transition
matrices $g_{\alpha\beta}:V_\alpha\cap V_\beta\to\mathrm{GL}_r(\mathbb C)$,
defined by $\theta_\alpha\theta_\beta^{-1}(p,v)=(p,g_{\alpha\beta}(p)v)$, are
holomorphic. A **holomorphic frame** over an open set $V$ is a smooth
complex-linear trivialization whose transition matrices with the supplied
trivializations are holomorphic on every overlap. Changing holomorphic frame multiplies a local section by a
holomorphic matrix, hence a smooth local section is **holomorphic** exactly when
its representatives in holomorphic frames are holomorphic functions. A
**Hermitian metric** $h$ on $E$ is a smooth bundle metric
([[def-smooth-bundle-metric]]) whose fibre pairings are positive definite
Hermitian forms, linear in the first variable and conjugate-linear in the
second; the condition is frame-independent because the gauge freedom is
conjugation by a pointwise invertible matrix. Smooth sections are
$\Gamma(E)$ ([[def-smooth-section-local-section-and-support]]).

## Remarks

- *Choice.* The structures are supplied data. The maximal-atlas and gluing
  verifications above are local, and no existence of metrics or partitions is
  asserted; no choice principle is used in this definition.
- *Conventions.* The Hermitian convention is linear in the first variable, as in
  [[def-smooth-bundle-metric]]; the Riemannian metric $g$ is used on real
  vectors, and $J$ is declared from the holomorphic charts rather than assumed.
  The case $m=1$ reduces to [[def-riemann-surface-and-holomorphic-atlas]]; the
  general-$m$ statements here are the ones used by the Dolbeault and elliptic
  items of this page.
