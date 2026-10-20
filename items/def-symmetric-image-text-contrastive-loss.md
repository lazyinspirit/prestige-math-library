---
id: def-symmetric-image-text-contrastive-loss
kind: definition
title: "Symmetric image-text contrastive loss"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - cor-exponential-is-a-bijection-onto-positive-reals
  - def-feedforward-neural-network
  - def-natural-logarithm
  - def-real-exponential-function-and-e
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Alec Radford et al., Learning Transferable Visual Models From Natural Language Supervision"
      url: "https://arxiv.org/pdf/2103.00020"
    - title: "Machine Learning II, Lecture notes — 2021 Clip"
      url: "https://csci4052u.science.ontariotechu.ca/generative_models/2021_clip/notes.html"
---

## Definition

Let $\mathsf X$ and $\mathsf T$ be nonempty sets of image and text inputs, let $d,N\ge1$, and let $((x_i,t_i))_{i=1}^N$ be an indexed batch whose $i$th image and $i$th text are the designated matched pair. Let $f_\theta:\mathsf X\to\mathbb R^d$ and $g_\phi:\mathsf T\to\mathbb R^d$ be image and text encoder maps into one shared $d$-dimensional space; any learned projection into that space is included in the corresponding map. A finite feedforward network on vectorized inputs is one possible encoder realization. Assume $f_\theta(x_i)\ne0$ and $g_\phi(t_i)\ne0$ for every $i$. For $a,b\in\mathbb R^d$, set $\langle a,b\rangle:=\sum_{r=1}^d a_rb_r$ and $\|a\|_2:=\sqrt{\langle a,a\rangle}$. Define normalized embeddings

$$u_i:=\frac{f_\theta(x_i)}{\|f_\theta(x_i)\|_2},\qquad v_i:=\frac{g_\phi(t_i)}{\|g_\phi(t_i)\|_2}.$$

For a learned real log-scale $\tau$, set $s:=\exp(\tau)>0$ and define the logits $\ell_{ij}:=s\langle u_i,v_j\rangle$. For each image-to-text row and text-to-image column, respectively, define

$$p_{ij}^{I\to T}:=\frac{\exp(\ell_{ij})}{\sum_{k=1}^N\exp(\ell_{ik})},\qquad p_{ji}^{T\to I}:=\frac{\exp(\ell_{ij})}{\sum_{k=1}^N\exp(\ell_{kj})}.$$

The two directional cross-entropies use the matched diagonal as their labels:

$$L_{I\to T}:=-\frac1N\sum_{i=1}^N\log p_{ii}^{I\to T},\qquad L_{T\to I}:=-\frac1N\sum_{j=1}^N\log p_{jj}^{T\to I}.$$

The **symmetric image-text contrastive loss** on this batch is

$$L_{\mathrm{sym}}:=\frac12\left(L_{I\to T}+L_{T\to I}\right).$$

Since the batch is nonempty, the embeddings are nonzero, the exponential is finite and positive on real inputs, and the logarithm is defined on positive reals, every displayed normalization and loss term is well-defined. Each off-diagonal candidate in a row or column denominator is treated as a negative for that anchor, whether or not the corresponding image and text might also be semantically compatible. This is an index-matching objective on the supplied batch; it makes no assumption about latent classes, sampling, or semantic alignment.

For $N=3$, the similarity matrix has this pattern. Row $i$ indexes image $i$ and column $j$ indexes text $j$; outlined diagonal cells are designated matches and dashed off-diagonal cells are other batch candidates. The definition and its formula do not rely on the diagram.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \node at (1.2,1.3) {text index $j$};
  \node at (-1.25,-0.8) {image index $i$};
  \node at (0,0.65) {$1$};
  \node at (1.2,0.65) {$2$};
  \node at (2.4,0.65) {$3$};
  \node at (-0.55,0) {$1$};
  \node at (-0.55,-0.8) {$2$};
  \node at (-0.55,-1.6) {$3$};
  \node[draw,thick,minimum width=1cm,minimum height=0.55cm] at (0,0) {$\ell_{11}$};
  \node[draw,dashed,minimum width=1cm,minimum height=0.55cm] at (1.2,0) {$\ell_{12}$};
  \node[draw,dashed,minimum width=1cm,minimum height=0.55cm] at (2.4,0) {$\ell_{13}$};
  \node[draw,dashed,minimum width=1cm,minimum height=0.55cm] at (0,-0.8) {$\ell_{21}$};
  \node[draw,thick,minimum width=1cm,minimum height=0.55cm] at (1.2,-0.8) {$\ell_{22}$};
  \node[draw,dashed,minimum width=1cm,minimum height=0.55cm] at (2.4,-0.8) {$\ell_{23}$};
  \node[draw,dashed,minimum width=1cm,minimum height=0.55cm] at (0,-1.6) {$\ell_{31}$};
  \node[draw,dashed,minimum width=1cm,minimum height=0.55cm] at (1.2,-1.6) {$\ell_{32}$};
  \node[draw,thick,minimum width=1cm,minimum height=0.55cm] at (2.4,-1.6) {$\ell_{33}$};
\end{tikzpicture}
```

## Definition references

[Radford et al., §§2.3–2.5 and Figure 3: batch matching objective, encoders, and training setup](https://arxiv.org/pdf/2103.00020)

[Machine Learning II lecture notes, “The contrastive objective” and “Encoders and scaling”](https://csci4052u.science.ontariotechu.ca/generative_models/2021_clip/notes.html)

[[def-feedforward-neural-network]]: a finite acyclic weighted/activation graph evaluates to an input-output map; this is one possible encoder model class here.

[[def-real-exponential-function-and-e]]: defines the real exponential on every real input by its convergent power series.

[[cor-exponential-is-a-bijection-onto-positive-reals]]: the real exponential has positive range, so the scale and softmax denominators are positive.

[[def-natural-logarithm]]: defines the logarithm on positive reals as the inverse of the exponential.
