---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-group-convolution.json
  precheck: n/a
id: def-group-convolution
kind: definition
title: "First-layer and group-to-group cross-correlation"
status: published
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

## Remarks

For a fixed output index $g\in G$, the two rows show how indexed input values are combined. Each product multiplies a $1\times C_{\rm in}$ row vector by a $C_{\rm in}\times C_{\rm out}$ matrix, giving a $1\times C_{\rm out}$ output contribution. Arrows indicate evaluation and summation, not a commutative diagram.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={align=center}]
\node (group) at (0,0) {$\begin{array}{c}f(h),\ \Psi(g^{-1}h)\\h\in G\end{array}$};
\node[draw,rounded corners,minimum width=3.5cm,minimum height=1.1cm] (gsum) at (4.5,0) {$\displaystyle\sum_{h\in G} f(h)\Psi(g^{-1}h)$};
\node (gout) at (8.3,0) {$(C_\Psi f)(g)$};
\draw[->] (group) -- (gsum);
\draw[->] (gsum) -- (gout);
\node (image) at (0,-2.2) {$\begin{array}{c}f(x),\ \Psi(g^{-1}\cdot x)\\x\in\mathbb Z^2\end{array}$};
\node[draw,rounded corners,minimum width=3.5cm,minimum height=1.1cm] (isum) at (4.5,-2.2) {$\displaystyle\sum_{x\in\mathbb Z^2} f(x)\Psi(g^{-1}\cdot x)$};
\node (iout) at (8.3,-2.2) {$(E_\Psi f)(g)$};
\draw[->] (image) -- (isum);
\draw[->] (isum) -- (iout);
\end{tikzpicture}
```

The top row uses group multiplication in the filter argument; the bottom row uses the given left action on the lattice. Both outputs are indexed by $g\in G$. The sums retain exactly the finite-support or absolute-convergence condition in the definition; the schematic imposes no finiteness or commutativity assumption.
