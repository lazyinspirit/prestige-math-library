---
id: def-equivariant-neural-layer
kind: definition
title: "Equivariant neural layers between group-action feature spaces"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-group-action-on-feature-maps, def-equivariant-map-of-group-actions, def-function]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§2, structured and equivariant representations, Eq. (1)."
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §9.2, translation-equivariant representations."
verification:
  precheck: n/a
---

## Definition

Let a group $G$ act on sets $X$ and $Y$ by left actions $T$ and $T'$, respectively. A layer is a function $\Phi:X\to Y$. It is $G$-equivariant when

$$
\Phi(T_gx)=T'_g\Phi(x)\qquad(g\in G,\ x\in X).
$$

The input and output actions need not be the same. The layer is $G$-invariant when $\Phi(T_gx)=\Phi(x)$ for every $g\in G$ and $x\in X$; equivalently, it is equivariant into $Y$ equipped with the trivial action.

## Definition references

[[def-equivariant-map-of-group-actions|equivariant maps between acted-on sets]]

[[def-group-action-on-feature-maps|the induced action on feature maps]]

[[def-function|functions and declared domains/codomains]]

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §2](https://arxiv.org/pdf/1602.07576)

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §9.2](https://www.deeplearningbook.org/contents/convnets.html)
