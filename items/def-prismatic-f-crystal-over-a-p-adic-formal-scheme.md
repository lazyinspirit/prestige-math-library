---
id: def-prismatic-f-crystal-over-a-p-adic-formal-scheme
kind: definition
title: "Prismatic F-crystal on a p-adic formal scheme"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-bounded-prism-and-absolute-prismatic-site
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bhatt and Scholze, Prismatic F-crystals and Crystalline Galois Representations, Definition 4.1"
      url: "https://arxiv.org/pdf/2106.14735v2.pdf"
    - title: "Du and Liu, A prismatic approach to (phi, G-hat)-modules and F-crystals, §1.1"
      url: "https://arxiv.org/pdf/2107.12240v3.pdf"
verification:
  precheck: n/a
---

## Definition

Let $Y$ be a $p$-adic formal scheme, with bounded absolute prismatic site $Y_\Delta$, structure sheaf $\mathcal O_\Delta$, Cartier ideal sheaf $\mathcal I_\Delta$, and Frobenius $\phi$ as specified by the bounded-prism definition. A **vector bundle** on $(Y_\Delta,\mathcal O_\Delta)$ is an $\mathcal O_\Delta$-module sheaf which is locally free of finite rank. For such a sheaf $E$, write $\phi^*E=\mathcal O_\Delta\otimes_{\phi^{-1}\mathcal O_\Delta}\phi^{-1}E$ and let $E[1/\mathcal I_\Delta]$ denote localization at local generators of the Cartier ideal. A **prismatic F-crystal of vector bundles** on $Y$ is a pair $(E,\varphi_E)$ consisting of a vector bundle $E$ and an isomorphism
$$
\varphi_E:\phi^*E[1/\mathcal I_\Delta]\xrightarrow{\sim}E[1/\mathcal I_\Delta].
$$
A morphism $(E,\varphi_E)\to(E',\varphi_{E'})$ is an $\mathcal O_\Delta$-linear map $f:E\to E'$ satisfying $f[1/\mathcal I_\Delta]\circ\varphi_E=\varphi_{E'}\circ\phi^*f[1/\mathcal I_\Delta]$. Such an F-crystal is **effective** if $\varphi_E$ carries $\phi^*E$ into $E$ before localization.

Tensor product makes this category symmetric monoidal, with unit $(\mathcal O_\Delta,\phi_{\mathcal O_\Delta})$. Its **étale realization** is the symmetric monoidal functor obtained by $p$-completed base change to $\mathcal O_\Delta[1/\mathcal I_\Delta]^{\wedge}_p$ and the Frobenius-fixed identification with $\mathbb Z_p$-local systems on the rigid generic fibre $Y_\eta$.

## Definition references

[[def-bounded-prism-and-absolute-prismatic-site]]

[Bhargav Bhatt and Peter Scholze, *Prismatic F-crystals and Crystalline Galois Representations*, Definition 4.1](https://arxiv.org/pdf/2106.14735v2.pdf)

[Bhargav Bhatt and Peter Scholze, *Prismatic F-crystals and Crystalline Galois Representations*, Construction 4.8 and Corollary 3.7](https://arxiv.org/pdf/2106.14735v2.pdf)

[Heng Du and Tong Liu, *A prismatic approach to (phi, G-hat)-modules and F-crystals*, §1.1](https://arxiv.org/pdf/2107.12240v3.pdf)
