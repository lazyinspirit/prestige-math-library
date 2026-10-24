---
id: alg-transformer-forward-pass
kind: algorithm
title: "Transformer encoder-decoder forward pass"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-transformer-encoder-decoder-layer
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Vaswani et al., Attention Is All You Need, §§3.1–3.5"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §§11.7.1–11.7.7"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html"
---

## Definition

**Inputs:** A nonempty source token sequence $(x_1,\ldots,x_n)$, a target prefix $(y_0,\ldots,y_{m-1})$ with $m\ge1$ and a start token $y_0$, source and target embedding maps into $\mathbb R^d$, positional encoding matrices of compatible shapes, a finite encoder stack, a finite decoder stack, and a linear output map to a finite vocabulary of logits. Each layer has the parameters and conventions in the transformer encoder/decoder definition. All self-attention and cross-attention masks must leave at least one allowed key in every query row.

**Procedure:**

1. Embed each source token and add its positional vector to form $X\in\mathbb R^{n\times d}$.
2. Apply the encoder layers in order to $X$ and call the final matrix $E\in\mathbb R^{n\times d}$.
3. Embed each target-prefix token and add its positional vector to form $U\in\mathbb R^{m\times d}$.
4. Apply each decoder layer in order. In every decoder layer, use the causal mask on decoder self-attention, use the current decoder rows as queries and $E$ as keys and values for cross-attention, and then apply the positionwise feedforward sublayer.
5. Apply the output linear map to each final decoder row and apply softmax over vocabulary coordinates. Return the encoder matrix $E$, the final decoder hidden matrix, and the rowwise next-token probability matrix.

**Outputs:** The source representations, decoder representations, and one probability vector for each target-prefix position. At position $i$, the decoder self-attention calculation uses only target-prefix positions $j\le i$; the encoder cross-attention may use every source position.

## Definition references

[Vaswani et al., §3.1: encoder/decoder stacks and shifted autoregressive targets](https://arxiv.org/pdf/1706.03762)

[Vaswani et al., §§3.2.3–3.5: cross-attention, causal mask, feedforward maps, and positional encodings](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §§11.7.1–11.7.7: encoder-decoder model and forward computation](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html)

[[def-transformer-encoder-decoder-layer]]: exact residual, normalization, attention, and feedforward layer conventions.

## Remarks

The diagram separates the source and target-prefix streams. The decoder-stack box abbreviates the complete layers in the definition: in each layer, causal self-attention precedes cross-attention and the positionwise feedforward sublayer, with the stated residual and normalization operations. Cross-attention takes queries from the current decoder rows and keys and values from $E$; any additional allowed masks remain in force. Let $D\in\mathbb R^{m\times d}$ denote the final decoder matrix and let $V$ be the finite vocabulary. The outputs are $E$, $D$, and $P\in\mathbb R^{m\times |V|}$. This is an illustration of the procedure, not an additional correctness argument.

```tikz
\begin{tikzpicture}[>=stealth,scale=0.9,transform shape]
  \tikzstyle{blk}=[draw,rounded corners,align=center,font=\small,minimum width=3.2cm,minimum height=0.7cm]
  \node[blk] (src) at (0,0) {Source tokens\\ $x_1,\ldots,x_n$};
  \node[blk] (semb) at (0,-1.3) {Embedding + position\\ $X\in\mathbb R^{n\times d}$};
  \node[blk] (enc) at (0,-2.7) {Encoder stack};
  \node[blk] (e) at (0,-4.1) {$E\in\mathbb R^{n\times d}$};
  \node[blk] (tgt) at (6,0) {Target-prefix tokens\\ $y_0,\ldots,y_{m-1}$};
  \node[blk] (temb) at (6,-1.3) {Embedding + position\\ $U\in\mathbb R^{m\times d}$};
  \node[blk,minimum height=1.6cm] (dec) at (6,-3.7) {Decoder stack: in each layer\\causal self-attn ($j\le i$)\\cross-attn to $E$; feedforward};
  \node[blk] (d) at (6,-5.4) {$D\in\mathbb R^{m\times d}$};
  \node[blk] (out) at (6,-6.8) {Rowwise linear map\\and vocabulary softmax};
  \node[blk] (p) at (6,-8.2) {$P\in\mathbb R^{m\times |V|}$\\one next-token distribution per row};
  \draw[->] (src) -- (semb);
  \draw[->] (semb) -- (enc);
  \draw[->] (enc) -- (e);
  \draw[->] (tgt) -- (temb);
  \draw[->] (temb) -- (dec);
  \draw[->] (e.east) -- node[above,align=center,font=\small] {keys / values\\source rows} (dec.west);
  \draw[->] (dec) -- (d);
  \draw[->] (d) -- (out);
  \draw[->] (out) -- (p);
\end{tikzpicture}
```
