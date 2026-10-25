---
id: def-scaled-dot-product-attention
kind: definition
title: "Scaled dot-product attention"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
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
    - title: "Vaswani et al., Attention Is All You Need, §3.2.1"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §11.3.3 Scaled Dot Product Attention"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/attention-scoring-functions.html"
---

## Definition

Let $n_q,n_k,d_k,d_v$ be positive integers, let $Q\in\mathbb R^{n_q\times d_k}$ and $K\in\mathbb R^{n_k\times d_k}$ be query and key matrices, and let $V\in\mathbb R^{n_k\times d_v}$ be a value matrix. For a real matrix $S$ with $n_q$ rows and $n_k$ columns, define its row softmax by $\operatorname{softmax}_{\rm row}(S)_{ij}=\exp(S_{ij})/\sum_{\ell=1}^{n_k}\exp(S_{i\ell})$. The scaled dot-product attention output is

$$
\operatorname{Attn}(Q,K,V)=\operatorname{softmax}_{\rm row}\!\left(\frac{QK^{\mathsf T}}{\sqrt{d_k}}\right)V\in\mathbb R^{n_q\times d_v}.
$$

Each output row is the weighted average of the value rows, with weights given by the softmax of that query's scaled dot products with all keys. A mask is an array $M\in(\mathbb R\cup\{-\infty\})^{n_q\times n_k}$ whose entries are $0$ for allowed query-key pairs and $-\infty$ for disallowed pairs; masked attention replaces the score matrix by $QK^{\mathsf T}/\sqrt{d_k}+M$ before row softmax and is defined only when every row has at least one allowed key. Here $\exp(-\infty)=0$.

## Definition references

[Vaswani et al., §3.2.1: scaled dot-product formula and query/key/value dimensions](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §11.3.3: matrix formula and batched query/key/value shapes](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/attention-scoring-functions.html)


## Remarks

The dataflow below displays the matrix shapes and the order of the masked-attention operations. Here $S=QK^{\mathsf T}/\sqrt{d_k}$, $A=\operatorname{softmax}_{\rm row}(S+M)$, and $O=AV$. Setting $M=0$ gives unmasked attention. For a mask, $M_{ij}=0$ on allowed pairs and $M_{ij}=-\infty$ on disallowed pairs; every row must have at least one allowed key. The definition above is independent of the illustration.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,rounded corners,align=center] (qk) at (0,0) {$Q:\ n_q\times d_k\qquad K:\ n_k\times d_k$};
\node[draw,rounded corners,align=center] (s) at (0,-1.3) {$S=QK^{\mathsf T}/\sqrt{d_k}$\\$n_q\times n_k$};
\node[draw,rounded corners,align=center] (t) at (0,-2.8) {$S+M$\\$n_q\times n_k$};
\node[draw,rounded corners,align=center] (m) at (-4,-2.8) {$M:\ n_q\times n_k$};
\node[draw,rounded corners,align=center] (a) at (0,-4.3) {$A=\mathrm{softmax}_{\mathrm{row}}(S+M)$\\$n_q\times n_k$};
\node[draw,rounded corners,align=center] (o) at (0,-5.8) {$O=AV$\\$n_q\times d_v$};
\node[draw,rounded corners,align=center] (v) at (-4,-5.8) {$V:\ n_k\times d_v$};
\draw[->] (qk) -- (s);
\draw[->] (s) -- (t);
\draw[->] (m) -- (t);
\draw[->] (t) -- (a);
\draw[->] (a) -- (o);
\draw[->] (v) -- (o);
\end{tikzpicture}
```
