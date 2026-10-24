---
id: def-discrete-convolutional-layer
kind: definition
title: "Discrete convolutional layer with local receptive fields, channel mixing, stride, and padding"
status: published
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
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


## Remarks

For a concrete indexing picture, take $D=\{0,1,2,3\}\times\{0,1,2\}$, $K=\{-1,0,1\}^2$, $a=(0,1)$, $s=(2,1)$, and $O=\{p,q\}$ with $p=(0,0)$ and $q=(1,0)$, using zero padding. The shaded square is $a+s\odot p+K$: its three sites outside $D$ contribute zero, while its six sites in $D$ contribute their input row vectors multiplied by the corresponding $W_\delta$. The two circled anchors differ by $(2,0)$, illustrating the first-coordinate stride. This is the plus-offset convention in the definition; no kernel reversal is depicted.

```tikz
\begin{tikzpicture}[scale=1.15]
\fill[blue!10] (-1.25,-0.25) rectangle (1.25,2.25);
\draw[thick] (-0.35,-0.35) rectangle (3.35,2.35);
\node at (3.15,2.7) {$D$};
\foreach \u in {-1,0,1,2,3} {
  \draw[gray!40] (\u,0) -- (\u,2);
}
\foreach \v in {0,1,2} {
  \draw[gray!40] (-1,\v) -- (3,\v);
  \foreach \u in {0,1,2,3} {
    \fill (\u,\v) circle (2pt);
  }
  \draw[red,thick] (-1,\v) circle (3pt);
}
\draw[blue,thick] (-1.25,-0.25) rectangle (1.25,2.25);
\draw[blue,thick] (0,1) circle (6pt);
\draw[thick] (2,1) circle (6pt);
\draw[->,thick] (0,2.9) -- (2,2.9);
\node[above] at (1,2.9) {$s\odot(q-p)=(2,0)$};
\draw[dashed] (0,2.4) -- (0,2.9);
\draw[dashed] (2,2.4) -- (2,2.9);
\node[below] at (0,-0.65) {$a+s\odot p=(0,1)$};
\node[below] at (2.7,-1.2) {$a+s\odot q=(2,1)$};
\draw[->] (0,-0.65) -- (0,0.75);
\draw[->] (2.7,-1.2) -- (2,0.75);
\node[red,left] at (-1.35,1) {$\widetilde x=0$};
\node[blue] at (0,3.85) {$a+s\odot p+K$};
\end{tikzpicture}
```
