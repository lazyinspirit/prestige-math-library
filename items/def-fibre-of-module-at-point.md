---
id: def-fibre-of-module-at-point
kind: definition
title: Fibre of a module sheaf at a point
status: published
origin: pipeline
deps:
  - def-residue-field-scheme-point
  - def-module-on-ringed-space
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-stalk-of-presheaf
  - thm-right-exactness-of-tensor-products
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Definition

Let $X$ be a locally ringed space, let $\mathcal F$ be an
$\mathcal O_X$-module in the sense of [[def-module-on-ringed-space]], and let
$x\in X$. Write $\mathcal F_x$ for the stalk of $\mathcal F$ at $x$
([[def-stalk-of-presheaf]]); it is a module over the local ring
$\mathcal O_{X,x}$, and the residue field is
$\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$ with maximal ideal
$\mathfrak m_x\subseteq\mathcal O_{X,x}$
([[def-residue-field-scheme-point]]). The **fibre** of $\mathcal F$ at $x$ is
the tensor product of modules over the ring $\mathcal O_{X,x}$
([[def-tensor-product-of-modules-by-generators-and-relations]])
$$\mathcal F(x):=\mathcal F_x\otimes_{\mathcal O_{X,x}}\kappa(x).$$
The tensor product carries the $\kappa(x)$-module structure induced by the
scalar action on the second factor, so $\mathcal F(x)$ is a vector space over
the residue field $\kappa(x)$.

Right exactness of the tensor product
([[thm-right-exactness-of-tensor-products]]) applied to the exact sequence
$\mathfrak m_x\hookrightarrow\mathcal O_{X,x}\twoheadrightarrow\kappa(x)$
identifies this vector space with the quotient of the stalk by the submodule
$\mathfrak m_x\mathcal F_x$:
$$\mathcal F(x)\;\cong\;\mathcal F_x/\mathfrak m_x\mathcal F_x,\qquad m\otimes\bar\lambda\;\longmapsto\;\lambda m \bmod \mathfrak m_x\mathcal F_x .$$

The fibre and the stalk are different objects: $\mathcal F_x$ is a module over
the local ring $\mathcal O_{X,x}$ and need not be a vector space, while
$\mathcal F(x)$ is a vector space over $\kappa(x)$ equipped with a canonical
surjection $\mathcal F_x\twoheadrightarrow\mathcal F(x)$. For the zero module
$\mathcal F=0$ one has $\mathcal F_x=0$ and $\mathcal F(x)=0$ at every point;
for $\mathcal F=\mathcal O_X$ one has $\mathcal O_X(x)=\kappa(x)$ at every
point. The construction is functorial: a morphism
$\mathcal F\to\mathcal G$ of $\mathcal O_X$-modules induces a $\kappa(x)$-linear
map $\mathcal F(x)\to\mathcal G(x)$ for every $x\in X$, and restriction to an
open $U\subseteq X$ gives $(\mathcal F|_U)(x)=\mathcal F(x)$ for $x\in U$.
