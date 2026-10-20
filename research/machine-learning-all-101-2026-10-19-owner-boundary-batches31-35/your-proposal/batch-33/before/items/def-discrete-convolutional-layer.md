---
id: def-discrete-convolutional-layer
kind: definition
title: "Discrete convolutional layer with local receptive fields, channel mixing, stride, and padding"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-function]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §§9.1–9.5, printed pp. 327–351."
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§5, translation correlation formula (7) and derivation (8)."
verification:
  precheck: n/a
---

## Definition

Let $D,O\subseteq\mathbb Z^2$ be input and output index sets, let $C_{\rm in},C_{\rm out}$ be positive integers, and let $x:D\to\mathbb R^{C_{\rm in}}$ assign a row vector of input channels to each input site. A boundary extension is a function $\widetilde x:\mathbb Z^2\to\mathbb R^{C_{\rm in}}$ whose restriction to $D$ is $x$; zero padding is the extension that is zero off $D$. Choose a finite receptive-field offset set $K\subseteq\mathbb Z^2$, a positive integer stride vector $s\in\mathbb Z_{>0}^2$, an origin $a\in\mathbb Z^2$, one matrix $W_\delta\in\mathbb R^{C_{\rm in}\times C_{\rm out}}$ for each $\delta\in K$, and an output bias row vector $b\in\mathbb R^{C_{\rm out}}$. The discrete convolutional layer is the map $y:O\to\mathbb R^{C_{\rm out}}$ given by

$$
y(p)=b+\sum_{\delta\in K}\widetilde x(a+s\odot p+\delta)W_\delta\qquad(p\in O),
$$

where $s\odot p$ is coordinatewise multiplication. Thus each output uses only the input sites in its receptive field, mixes input channels by matrix multiplication, and uses the same weights and bias at every output site. With unit stride on the full lattice and no boundary truncation, this formula is a discrete cross-correlation; many machine-learning software packages call it convolution. Mathematical convolution instead reverses the kernel offsets. The choices of $O$, the extension $\widetilde x$, and the stride specify cropping, padding, and subsampling, and need not preserve a symmetry of the full lattice.

## Definition references

[[def-function|functions and declared domains/codomains]]

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §§9.1–9.5](https://www.deeplearningbook.org/contents/convnets.html)

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §5](https://arxiv.org/pdf/1602.07576)
