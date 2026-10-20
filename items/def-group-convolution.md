---
id: def-group-convolution
kind: definition
title: "First-layer and group-to-group cross-correlation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-discrete-convolutional-layer, def-group-action-on-feature-maps, def-group, def-function]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§6.1, first-layer and group-to-group correlation, Eqs. (10)–(12)."
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §§9.1, 9.2, and 9.5, discrete and multichannel cross-correlation."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $G$ be a discrete group acting on the lattice $\mathbb Z^2$ on the left. Let $C_{\rm in},C_{\rm out}$ be positive integers, and regard channel vectors as row vectors. For a feature map $f:G\to\mathbb R^{C_{\rm in}}$ and a filter $\Psi:G\to\mathbb R^{C_{\rm in}\times C_{\rm out}}$, the group-to-group cross-correlation is the map $C_\Psi f:G\to\mathbb R^{C_{\rm out}}$ defined by

$$
(C_\Psi f)(g)=\sum_{h\in G} f(h)\Psi(g^{-1}h).
$$

For an image feature map $f:\mathbb Z^2\to\mathbb R^{C_{\rm in}}$ and a lattice filter $\Psi:\mathbb Z^2\to\mathbb R^{C_{\rm in}\times C_{\rm out}}$, the first-layer image-to-group cross-correlation is the map $E_\Psi f:G\to\mathbb R^{C_{\rm out}}$ defined by

$$
(E_\Psi f)(g)=\sum_{x\in\mathbb Z^2} f(x)\Psi(g^{-1}\cdot x).
$$

Each displayed sum is required to have finite support or to converge absolutely in every output coordinate. The first operation takes group-indexed features and filters; the second takes lattice-indexed image features and filters and returns group-indexed features. These are cross-correlations, with the filter argument displayed as written; they need not be commutative, and no finiteness of $G$ is assumed.

## Definition references

[[def-group|groups and their multiplication and inverses]]

[[def-group-action-on-feature-maps|left actions on feature maps]]

[[def-discrete-convolutional-layer|discrete cross-correlation and channel mixing]]

[[def-function|functions and declared domains/codomains]]

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §6.1, Eqs. (10)–(12)](https://arxiv.org/pdf/1602.07576)

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §§9.1–9.2 and §9.5](https://www.deeplearningbook.org/contents/convnets.html)
