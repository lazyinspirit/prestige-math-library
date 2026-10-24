---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-positional-encoding-and-causal-mask.json
  precheck: n/a
id: def-positional-encoding-and-causal-mask
kind: definition
title: "Positional encodings and causal masks"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vaswani et al., Attention Is All You Need, §§3.2.3 and 3.5"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §§11.6.3 and 11.7.5"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html"
---

## Definition

For a sequence of length $n$ with $d$-dimensional token representations, a positional encoding is a fixed or trainable matrix $P\in\mathbb R^{n\times d}$ added rowwise to the token matrix $X\in\mathbb R^{n\times d}$, giving $X+P$. One fixed choice, with positions $s\in\mathbb N_0$ and coordinates indexed from $0$, is $P_{s,2r}=\sin(s/10000^{2r/d})$ and $P_{s,2r+1}=\cos(s/10000^{2r/d})$ whenever the indicated coordinate is less than $d$.

For decoder self-attention on $n$ positions indexed by $0,\ldots,n-1$, the causal mask is $M\in(\mathbb R\cup\{-\infty\})^{n\times n}$ with $M_{ij}=0$ when $j\le i$ and $M_{ij}=-\infty$ when $j>i$. Thus query position $i$ can use keys at positions $0,\ldots,i$ and cannot use a future position; every row has an allowed key because $M_{ii}=0$.

## Definition references

[Vaswani et al., §3.5: positional encodings added to embeddings and sinusoidal formula](https://arxiv.org/pdf/1706.03762)

[Vaswani et al., §3.2.3: masking illegal decoder connections before softmax](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §11.6.3: absolute and relative positional information](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html)

[Dive into Deep Learning, §11.7.5: autoregressive decoder mask](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html)

## Remarks

For $n=4$, the grid below shows the causal mask $M$, with query index $i$ labeling rows and key index $j$ labeling columns. The right-hand column lists the allowed key positions in each row. The diagonal is allowed: a zero permits that key, while $-\infty$ masks a future key. This illustration is a direct instance of the definition.

```tikz
\begin{tikzpicture}[x=1.1cm,y=0.85cm]
  \node at (2,1.15) {Key position};
  \node at (0.5,0.45) {$j=0$};
  \node at (1.5,0.45) {$j=1$};
  \node at (2.5,0.45) {$j=2$};
  \node at (3.5,0.45) {$j=3$};
  \node at (-0.8,0.45) {Query};
  \node at (5.7,0.45) {Allowed keys};
  \draw (0,0) rectangle (4,-4);
  \draw (1,0) -- (1,-4);
  \draw (2,0) -- (2,-4);
  \draw (3,0) -- (3,-4);
  \draw (0,-1) -- (4,-1);
  \draw (0,-2) -- (4,-2);
  \draw (0,-3) -- (4,-3);
  \node at (-0.8,-0.5) {$i=0$};
  \node at (-0.8,-1.5) {$i=1$};
  \node at (-0.8,-2.5) {$i=2$};
  \node at (-0.8,-3.5) {$i=3$};
  \node at (0.5,-0.5) {$0$};
  \node at (1.5,-0.5) {$-\infty$};
  \node at (2.5,-0.5) {$-\infty$};
  \node at (3.5,-0.5) {$-\infty$};
  \node at (0.5,-1.5) {$0$};
  \node at (1.5,-1.5) {$0$};
  \node at (2.5,-1.5) {$-\infty$};
  \node at (3.5,-1.5) {$-\infty$};
  \node at (0.5,-2.5) {$0$};
  \node at (1.5,-2.5) {$0$};
  \node at (2.5,-2.5) {$0$};
  \node at (3.5,-2.5) {$-\infty$};
  \node at (0.5,-3.5) {$0$};
  \node at (1.5,-3.5) {$0$};
  \node at (2.5,-3.5) {$0$};
  \node at (3.5,-3.5) {$0$};
  \node at (5.7,-0.5) {$\{0\}$};
  \node at (5.7,-1.5) {$\{0,1\}$};
  \node at (5.7,-2.5) {$\{0,1,2\}$};
  \node at (5.7,-3.5) {$\{0,1,2,3\}$};
\end{tikzpicture}
```
