---
id: def-hahn-hard-soft-attention-sequence-model
kind: definition
title: "Hard and soft attention sequence models"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-scaled-dot-product-attention
  - def-feedforward-neural-network
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, §3"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
    - title: "Vaswani et al., Attention Is All You Need, §3.2"
      url: "https://arxiv.org/pdf/1706.03762"
---

## Definition

Let $\Sigma$ be a finite token alphabet, let $\mathtt{eos}\notin\Sigma$ be an end-of-sequence symbol, and let $d,L,H\ge1$ be fixed integers. For each length $n\ge1$, an input is $(x_1,\ldots,x_{n-1},\mathtt{eos})$. A symbol embedding assigns a vector $v_a\in\mathbb R^d$ to each $a\in\Sigma\cup\{\mathtt{eos}\}$; a positional embedding sequence assigns $p_i\in\mathbb R^d$ independent of the input symbols. A fixed shared input map gives $y_i^{(0)}=f_{\rm in}(v_{x_i},p_i)$. For each layer $k=1,\ldots,L$ and head $h=1,\ldots,H$, a fixed score map $s_{k,h}:\mathbb R^d\times\mathbb R^d\to\mathbb R$ gives scores $a_{i,j}^{(k,h)}=s_{k,h}(y_i^{(k-1)},y_j^{(k-1)})$ for every query position $i$ and key position $j$. In the soft model, $\widehat a_{i,\cdot}^{(k,h)}=\operatorname{softmax}(a_{i,\cdot}^{(k,h)})$. In the hard model, $\widehat a_{i,j}^{(k,h)}=1$ at the smallest index $j$ attaining $\max_{r\le n}a_{i,r}^{(k,h)}$ and is $0$ at other indices. With fixed value maps $V_{k,h}:\mathbb R^d\to\mathbb R^d$ and fixed positionwise maps $F_k:(\mathbb R^d)^{H+1}\to\mathbb R^d$, the update is

$$
b_{i,k,h}=\sum_{j=1}^{n}\widehat a_{i,j}^{(k,h)}V_{k,h}(y_j^{(k-1)}),\qquad y_i^{(k)}=F_k(y_i^{(k-1)},b_{i,k,1},\ldots,b_{i,k,H}).
$$

Each score, value, and positionwise map is shared across positions and is fixed independently of $n$. In the hard-attention limit theorem, the score, value, and positionwise maps may be arbitrary fixed maps; no activation-function or parameter-norm bound is imposed. For the soft-influence theorem below, each score is a scaled dot product of fixed linear query and key projections, each value map is a fixed linear map, the token and positional embeddings are uniformly bounded over all positions and lengths, the combined initial states satisfy $\sup_{i\ge1,\ a\in\Sigma\cup\{\mathtt{eos}\}}\|f_{\rm in}(v_a,p_i)\|_2<\infty$, and every positionwise map is globally Lipschitz. The initial-state bound holds for addition or concatenation of bounded embeddings, but must be imposed separately for an arbitrary input map. A hard-attention recognizer classifies the input from $y_n^{(L)}$ after reading $\mathtt{eos}$. A soft next-token predictor applies a fixed linear logit map and softmax to $y_n^{(L)}$ to obtain a probability vector on a fixed finite alphabet.

## Definition references

[Hahn, §3: positionwise activations, softmax attention, hard attention, and end-of-sequence prediction](https://aclanthology.org/2020.tacl-1.11.pdf)

[Vaswani et al., §3.2: query, key, value, and scaled dot-product attention conventions](https://arxiv.org/pdf/1706.03762)

[[def-feedforward-neural-network]]: finite feedforward graphs and layered MLPs specify positionwise maps when those implementations are chosen; the abstract hard-attention model above also permits arbitrary fixed maps.

[[def-scaled-dot-product-attention]]: row softmax and scaled query-key products.

## Remarks

For a fixed query position $i$, layer $k$, and head $h$, the two branches below are alternative rules for the same score row; only one branch is used in a model. Write $a=(a_{i,j}^{(k,h)})_{j=1}^n$ and $\alpha=(\widehat a_{i,j}^{(k,h)})_{j=1}^n$. The hard branch uses $j_*=\min\{j:a_{i,j}^{(k,h)}=\max_{r\le n}a_{i,r}^{(k,h)}\}$ and $\alpha_j=1$ exactly when $j=j_*$. Both branches feed the same value aggregation. The final update uses the aggregates from all $H$ heads together with the previous state at $i$. Arrows show data flow; the picture adds no hypotheses and is independent of any proof.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners] (scores) at (0,3.8) {$a\in\mathbb R^n$};
  \node[draw,rounded corners,align=center] (soft) at (-2.8,2.5) {Soft rule\\
  $\alpha=\mathrm{softmax}(a)$};
  \node[draw,rounded corners,align=center] (hard) at (2.8,2.5) {Hard rule\\
  $\alpha_j=\mathbf 1_{\{j=j_*\}}$};
  \node[draw,rounded corners] (weights) at (0,1.2) {$\alpha\in\mathbb R^n$};
  \node[draw,rounded corners] (values) at (-4.5,-0.1) {$\bigl(V_{k,h}(y_j^{(k-1)})\bigr)_{j=1}^n$};
  \node[draw,rounded corners] (sum) at (1,-0.1) {$b_{i,k,h}=\sum_j\alpha_j V_{k,h}(y_j^{(k-1)})$};
  \node[draw,rounded corners] (previous) at (-4.5,-1.7) {$y_i^{(k-1)}$};
  \node[draw,rounded corners] (update) at (1,-1.7) {$F_k\bigl(y_i^{(k-1)},b_{i,k,1},\ldots,b_{i,k,H}\bigr)$};
  \node (output) at (1,-2.8) {$y_i^{(k)}$};
  \draw[->] (scores) -- (soft);
  \draw[->] (scores) -- (hard);
  \draw[->] (soft) -- (weights);
  \draw[->] (hard) -- (weights);
  \draw[->] (weights) -- (sum);
  \draw[->] (values) -- (sum);
  \draw[->] (sum) -- node[right] {all heads} (update);
  \draw[->] (previous) -- (update);
  \draw[->] (update) -- (output);
\end{tikzpicture}
```
