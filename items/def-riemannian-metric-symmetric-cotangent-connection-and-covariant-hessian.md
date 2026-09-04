---
id: def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian
kind: definition
title: "Riemannian metrics, symmetric cotangent-bundle connections, and covariant Hessians"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-differential-of-a-smooth-real-valued-function, def-smooth-bundle-metric]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Definition

Let $M$ be a smooth manifold.

- A **Riemannian metric** on $M$ is a smooth bundle metric on the tangent
  bundle $TM$ ([[def-smooth-bundle-metric]]).
- A **cotangent-bundle connection** is an $\mathbb R$-bilinear assignment
  $(X,\alpha)\mapsto \nabla_X\alpha$ from smooth vector fields $X$ and smooth
  one-forms $\alpha$ to smooth one-forms such that
  $$\nabla_{hX}\alpha=h\nabla_X\alpha,\qquad   \nabla_X(h\alpha)=X(h)\alpha+h\nabla_X\alpha$$
  for every smooth function $h$.

In a smooth chart $x=(x^1,\dots,x^n)$, such a connection is determined by its
Christoffel symbols $\Gamma^k_{ij}$ through

$$\nabla_{\partial_{x^i}}(dx^k)=-\sum_j\Gamma^k_{ij}\,dx^j,$$

or equivalently, for $\alpha=\sum_j\alpha_j\,dx^j$,

$$\nabla_{\partial_{x^i}}\alpha=\sum_j\left(\frac{\partial\alpha_j}{\partial x^i}-\sum_k\Gamma^k_{ij}\alpha_k\right)dx^j.$$

If $g$ is a Riemannian metric with local coefficients
$g_{ij}:=g(\partial_{x^i},\partial_{x^j})$, write
$\Gamma_{ijk}:=\sum_\ell g_{k\ell}\Gamma^\ell_{ij}$. The connection is

- **symmetric** when $\Gamma^k_{ij}=\Gamma^k_{ji}$ in every chart;
- **metric-compatible** with $g$ when
  $$\frac{\partial g_{jk}}{\partial x^i}=\Gamma_{ijk}+\Gamma_{ikj}$$
  in every chart.

For a smooth function $f:M\to\mathbb R$, the tensor

$$\nabla^2f:=\nabla(df)$$

is the **covariant Hessian** of $f$. In coordinates, if $g=f\circ x^{-1}$,

$$\bigl(\nabla^2f\bigr)_{ij} =\frac{\partial^2 g}{\partial x^i\partial x^j} -\sum_k\Gamma^k_{ij}\frac{\partial g}{\partial x^k}.$$
