---
id: def-transformer-encoder-decoder-layer
kind: definition
title: "Transformer encoder, decoder, and fixed-width expressivity blocks"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-multihead-self-attention
  - def-positional-encoding-and-causal-mask
  - def-feedforward-neural-network
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Vaswani et al., Attention Is All You Need, §§3.1–3.5"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Yun et al., Are Transformers Universal Approximators of Sequence-to-Sequence Functions?, §2"
      url: "https://arxiv.org/pdf/1912.10077"
    - title: "Dive into Deep Learning, §§11.7.1–11.7.5"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html"
---

## Definition

Fix a model width $d\ge1$ and a feedforward hidden width $d_{\rm ff}\ge1$. A row-token matrix $X\in\mathbb R^{n\times d}$ has one token in each row. Define $\operatorname{ReLU}(t)=\max(0,t)$ and apply it coordinatewise to vectors and matrices. A positionwise feedforward network with parameters $W_1\in\mathbb R^{d\times d_{\rm ff}}$, $b_1\in\mathbb R^{d_{\rm ff}}$, $W_2\in\mathbb R^{d_{\rm ff}\times d}$, and $b_2\in\mathbb R^d$ maps each row $x$ to $\operatorname{ReLU}(xW_1+b_1)W_2+b_2$, using the same parameters at every position. For $z\in\mathbb R^d$, let $\bar z=d^{-1}\sum_{r=1}^d z_r$ and $s^2(z)=d^{-1}\sum_{r=1}^d(z_r-\bar z)^2$. Layer normalization with parameters $\gamma,\beta\in\mathbb R^d$ and $\epsilon>0$ is

$$
\operatorname{LN}_{\gamma,\beta,\epsilon}(z)=\gamma\odot\frac{z-\bar z\mathbf 1}{\sqrt{s^2(z)+\epsilon}}+\beta,
$$

applied rowwise; $\odot$ is coordinatewise multiplication. The positive $\epsilon$ makes the denominator nonzero.

A post-normalized encoder layer is the composition

$$
S=\operatorname{LN}_{\gamma_1,\beta_1,\epsilon_1}\!\bigl(X+\operatorname{MHA}(X,X,X)\bigr),\qquad
Y=\operatorname{LN}_{\gamma_2,\beta_2,\epsilon_2}\!\bigl(S+\operatorname{FFN}(S)\bigr).
$$

A post-normalized decoder layer takes decoder states $U\in\mathbb R^{m\times d}$ and encoder states $E\in\mathbb R^{n\times d}$. It first applies masked self-attention to $U$ using the causal mask, then cross-attention with queries from the resulting decoder states and keys and values from $E$, and then a positionwise feedforward network; each sublayer output is added to its own input and followed by layer normalization. The decoder's causal mask admits keys at positions $j\le i$ for query position $i$. Encoder and decoder stacks are finite compositions of their respective layers, with positional encodings added to token embeddings before the stacks.

The diagram records the dataflow and residual branches of one encoder layer and one decoder layer. Each arrow is a tensor passed to the indicated sublayer; each “Add & LN” node adds its sublayer input to its output and applies the stated rowwise layer normalization. The encoder output $E$ supplies the key and value rows for decoder cross-attention. The diagram illustrates the definition and is not used in any proof.

```tikz
\begin{tikzpicture}[>=stealth,scale=0.72,transform shape]
  \tikzstyle{blk}=[draw,rounded corners,align=center,font=\small,minimum width=1.35cm,minimum height=0.65cm]
  \node[blk] (ex) at (0,0) {$X$};
  \node[blk] (em) at (2.0,0) {MHA\\self-attn};
  \node[blk] (ea) at (4.0,0) {Add \& LN};
  \node[blk] (ef) at (6.0,0) {Positionwise\\FFN};
  \node[blk] (eo) at (8.0,0) {Add \& LN};
  \node[blk] (ey) at (10.0,0) {Encoder\\output $E$};
  \draw[->] (ex) -- (em);
  \draw[->] (em) -- (ea);
  \draw[->] (ex.south) to[bend right=28] (ea.south);
  \draw[->] (ea) -- (ef);
  \draw[->] (ef) -- (eo);
  \draw[->] (ea.south) to[bend right=28] (eo.south);
  \draw[->] (eo) -- (ey);

  \node[blk] (dx) at (0,-2.3) {$U$};
  \node[blk] (dm) at (2.0,-2.3) {Causal\\self-attn};
  \node[blk] (da) at (4.0,-2.3) {Add \& LN};
  \node[blk] (dc) at (6.0,-2.3) {Cross-attn\\to $E$};
  \node[blk] (db) at (8.0,-2.3) {Add \& LN};
  \node[blk] (df) at (10.0,-2.3) {Positionwise\\FFN};
  \node[blk] (do) at (12.0,-2.3) {Add \& LN};
  \draw[->] (dx) -- (dm);
  \draw[->] (dm) -- (da);
  \draw[->] (dx.south) to[bend right=25] (da.south);
  \draw[->] (da) -- (dc);
  \draw[->] (dc) -- (db);
  \draw[->] (da.south) to[bend right=25] (db.south);
  \draw[->] (db) -- (df);
  \draw[->] (df) -- (do);
  \draw[->] (db.south) to[bend right=25] (do.south);
  \draw[->] (ey.south) -- (dc.north);
\end{tikzpicture}
```

The fixed-width expressivity result uses a different, explicitly defined block without layer normalization. In the column-token convention $X\in\mathbb R^{d\times n}$, one Yun attention sublayer with two heads of size one is

$$
\operatorname{Attn}_{Y}(X)=X+\sum_{i=1}^{2}W_O^iW_V^iX\,\operatorname{softmax}_{\rm col}\!\bigl((W_K^iX)^{\mathsf T}(W_Q^iX+b_Q^i\mathbf 1_n^{\mathsf T})\bigr),
$$

where $W_Q^i,W_K^i,W_V^i\in\mathbb R^{1\times d}$, $W_O^i\in\mathbb R^{d\times1}$, and $b_Q^i\in\mathbb R$ is a shared scalar query bias; $\operatorname{softmax}_{\rm col}$ normalizes each column over its key positions. Its tokenwise feedforward sublayer is

$$
\operatorname{FF}_{Y}(Z)=Z+W_2\operatorname{ReLU}(W_1Z+b_1\mathbf 1_n^{\mathsf T})+b_2\mathbf 1_n^{\mathsf T},
$$

with $W_1\in\mathbb R^{4\times d}$ and $W_2\in\mathbb R^{d\times4}$. A Yun block is $\operatorname{FF}_{Y}\circ\operatorname{Attn}_{Y}$, and $\mathcal T^{2,1,4}$ is the set of all finite compositions of such blocks. Its positional class consists of maps $X\mapsto g(X+E)$ with $g\in\mathcal T^{2,1,4}$ and a trainable $E\in\mathbb R^{d\times n}$. This expressivity block has no layer normalization; its widths and head sizes are exactly as displayed.

## Definition references

[Vaswani et al., §3.1: encoder and decoder residual sublayers and post-normalization](https://arxiv.org/pdf/1706.03762)

[Vaswani et al., §§3.2.3 and 3.3: causal masks and shared positionwise ReLU feedforward maps](https://arxiv.org/pdf/1706.03762)

[Yun et al., §2: the width-4, two-head, head-size-one block without layer normalization](https://arxiv.org/pdf/1912.10077)

[Dive into Deep Learning, §§11.7.1–11.7.5: encoder, decoder, residual, and positionwise sublayers](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html)

[[def-multihead-self-attention]]: projected query, key, and value heads and featurewise concatenation.

[[def-positional-encoding-and-causal-mask]]: rowwise positional addition and the lower-triangular decoder mask.

[[def-feedforward-neural-network]]: finite feedforward computation graphs and layered MLP evaluation.
