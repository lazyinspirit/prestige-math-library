---
id: def-spectral-network-complexity
kind: definition
title: "Spectral network complexity with reference matrices"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-operator-norm-is-the-largest-singular-value
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter L. Bartlett, Dylan J. Foster, and Matus Telgarsky, Spectrally-normalized margin bounds for neural networks, Definition (1.2)"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Definition

Let $L\ge1$ and let $d_0,\ldots,d_L\ge1$ be layer widths, with $K:=d_L\ge2$ output classes. For each $i\in\{1,\ldots,L\}$, fix a matrix $M_i\in\mathbb R^{d_i\times d_{i-1}}$ and a vector activation $\sigma_i:\mathbb R^{d_i}\to\mathbb R^{d_i}$ satisfying $\sigma_i(0)=0$ and
$$\lVert\sigma_i(u)-\sigma_i(v)\rVert_2\le\rho_i\lVert u-v\rVert_2\qquad(u,v\in\mathbb R^{d_i})$$
for a fixed $\rho_i>0$. A network has matrices $A_i\in\mathbb R^{d_i\times d_{i-1}}$, no biases, and is evaluated by $h_0(x)=x$ and $h_i(x)=\sigma_i(A_i h_{i-1}(x))$, with score vector $F_A(x)=h_L(x)$. For a real matrix $B$, define $\lVert B\rVert_{2,1}:=\sum_j\lVert B_{\cdot j}\rVert_2$, the sum of the Euclidean norms of its columns. Write $\lVert A\rVert_\sigma$ for the induced Euclidean operator norm $\max_{\lVert u\rVert_2=1}\lVert Au\rVert_2$ and put $W:=\max_{0\le i\le L}d_i$.

For a network whose layer matrices all have nonzero operator norm, its **spectral network complexity relative to $(M_i)$** is
$$R_A:=\left(\prod_{i=1}^L\rho_i\lVert A_i\rVert_\sigma\right)\left(\sum_{i=1}^L\left(\frac{\lVert A_i^\top-M_i^\top\rVert_{2,1}}{\lVert A_i\rVert_\sigma}\right)^{2/3}\right)^{3/2}.$$
If some $A_i=0$, the network is instead handled as the constant-zero score map: the recurrence gives $h_i=0$ and all later hidden vectors are zero. The displayed complexity is not defined in that zero-layer case.

The block diagram is schematic for $L\ge3$ and depicts the stated recurrence. Each node is the entire vector at one layer; the arrow labelled $A_i$ is the zero-bias linear map, followed by the vector activation shown in the next node. The omitted middle layers are represented by the ellipsis, and the widths are those in the definition. For $L=1$ or $L=2$, omit the ellipsis and use the corresponding initial segment of the recurrence. The diagram is illustrative and is not used in any proof.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners] (h0) at (0,0) {$h_0=x\in\mathbb R^{d_0}$};
  \node[draw,rounded corners] (h1) at (3.1,0) {$h_1=\sigma_1(A_1h_0)$};
  \node (dots) at (4.9,0) {$\cdots$};
  \node[draw,rounded corners] (hL) at (6.8,0) {$h_L=F_A(x)$};
  \draw[->] (h0) -- node[above] {$A_1$} (h1);
  \draw[->] (h1) -- (dots);
  \draw[->] (dots) -- node[above] {$A_L$} (hL);
\end{tikzpicture}
```

## Definition references

[[def-feedforward-neural-network]]: finite acyclic computation graphs and their layered evaluation provide the broader feedforward-network context; the displayed vector-valued layer convention is defined fully above.

[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the induced norm is the maximum Euclidean output norm over unit input vectors.

[[thm-operator-norm-is-the-largest-singular-value]]: the induced Euclidean operator norm equals the largest singular value, including rectangular real matrices.

[Bartlett, Foster, and Telgarsky, Definition (1.2)](https://arxiv.org/pdf/1706.08498): defines the layerwise spectral/reference-matrix complexity used in the margin bound.
