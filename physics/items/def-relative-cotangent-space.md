---
id: "def-relative-cotangent-space"
kind: "definition"
title: "Relative cotangent and tangent spaces"
status: published
origin: "pipeline"
deps: ["def-sheaf-relative-differentials", "def-residue-field-scheme-point", "def-module-on-ringed-space"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stacks Morphisms, Sections 29.33 and 29.36"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
    - title: "Vakil 22.2.18, pp.582-583"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Definition

Let $f\colon X\to S$ be a morphism of schemes, let $x\in X$ be a point with
image $s=f(x)\in S$, and let $\Omega_{X/S}$ be the sheaf of relative
differentials ([[def-sheaf-relative-differentials]]), an $\mathcal O_X$-module.

**Relative cotangent space.** The **relative cotangent space of $X$ over $S$ at
$x$** is the $\kappa(x)$-vector space

$$\Omega_{X/S,x}\otimes_{\mathcal O_{X,x}}\kappa(x),$$

where $\mathcal O_{X,x}$ is the local ring and $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$
is the residue field of $x$ ([[def-residue-field-scheme-point]]) and the tensor
product is formed along the residue map $\mathcal O_{X,x}\to\kappa(x)$; equivalently
it is the fibre of the $\mathcal O_X$-module $\Omega_{X/S}$ at $x$ in the sense of
the tensor product with the residue field. Its elements are written
$\omega\otimes1$ and, for a local section $a$ of $\mathcal O_X$ near $x$,
$\mathrm d_{X/S}(a)\otimes1$ is the **relative cotangent vector** of $a$ at $x$.

**Relative tangent space.** The **relative tangent space of $X$ over $S$ at
$x$** is the $\kappa(x)$-linear dual

$$T_{X/S,x}:=\operatorname{Hom}_{\kappa(x)}\bigl(\Omega_{X/S,x}\otimes_{\mathcal O_{X,x}}\kappa(x),\,\kappa(x)\bigr).$$

**Residue-field dependence.** The residue field map
$\kappa(s)\to\kappa(x)$ induced by $f$ is part of the data: the $\kappa(x)$-module
$\Omega_{X/S,x}\otimes\kappa(x)$ is a vector space over $\kappa(x)$, and the
$\kappa(s)$-structure obtained by restriction of scalars along $\kappa(s)\to\kappa(x)$
is used whenever the base field is fixed. No finiteness hypothesis is imposed:
the spaces above may be infinite-dimensional over their residue fields, and the
notation applies to any point of any morphism of schemes, including
non-closed points and points of relative dimension $0$.
