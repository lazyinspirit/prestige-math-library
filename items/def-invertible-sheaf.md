---
id: def-invertible-sheaf
kind: definition
title: Invertible sheaves
status: draft
origin: pipeline
deps:
  - def-locally-free-sheaf-finite-rank
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

Let $X$ be a scheme. An $\mathcal O_X$-module $\mathcal L$ is **invertible** if
it is locally free of rank $1$
([[def-locally-free-sheaf-finite-rank]]): every point $x\in X$ has an open
neighbourhood $U$ with
$$\mathcal L|_U\;\cong\;\mathcal O_U.$$
Equivalently, $X$ is covered by open sets $U$ on which $\mathcal L|_U$ admits a
generator, that is, a section $s\in\mathcal L(U)$ such that the morphism
$\mathcal O_U\to\mathcal L|_U$, $a\mapsto a\cdot s|_U$, is an isomorphism. The
structure sheaf $\mathcal O_X$ is invertible.

Since local freeness of rank $1$ is a special case of local freeness of finite
rank, an invertible sheaf is quasi-coherent, its rank function is the constant
function $1$, the zero sheaf is not invertible on a nonempty scheme, and
restriction to an open subscheme preserves invertibility. The tensor product,
inverse and dual of invertible sheaves are treated on this page; in particular
$\mathcal L^\vee=\mathcal H om_{\mathcal O_X}(\mathcal L,\mathcal O_X)$ is again
invertible of rank one, and $\mathcal L^\vee\otimes_{\mathcal O_X}\mathcal L$
is canonically $\mathcal O_X$.
