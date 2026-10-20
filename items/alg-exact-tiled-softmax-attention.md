---
id: alg-exact-tiled-softmax-attention
kind: algorithm
title: "Exact tiled softmax attention with block-recomputed vector-Jacobian products"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-attention-block-summary
  - def-scaled-dot-product-attention
  - thm-shared-parameter-backpropagation-gradient-formula
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
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, §§2–3, Appendix B.2–B.4, and Appendix C"
      url: "https://arxiv.org/pdf/2205.14135"
    - title: "Maxim Milakov and Natalia Gimelshein, Online normalizer calculation for softmax, §§2–3"
      url: "https://arxiv.org/pdf/1805.02867"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Chapter 8 §§8.3–8.4"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Definition

**Inputs:** Positive integers $n,d,v$, finite real matrices $Q,K\in\mathbb R^{n\times d}$ and $V\in\mathbb R^{n\times v}$, a real scale $c$, a positive integer key-block size $b$, and fixed nonempty allowed-key sets $A_1,\ldots,A_n\subseteq\{1,\ldots,n\}$. The algorithm reads membership in each $A_i$ on demand; any caller-owned representation of the mask is input storage. All operations below are in exact real arithmetic. Set $J_t=\{(t-1)b+1,\ldots,\min(tb,n)\}$ for $t=1,\ldots,\lceil n/b\rceil$.

**Forward procedure:**

1. For each query row $i$, set the current summary to $\bot$.
2. For $t=1,\ldots,\lceil n/b\rceil$, form $I=J_t\cap A_i$. If $I=\varnothing$, skip this block and leave the summary unchanged. Otherwise compute $\Sigma_i(I)$. If the current summary is $\bot$, copy $\Sigma_i(I)$; otherwise merge the current summary with $\Sigma_i(I)$ using $\star$.
3. After the final block, write $Y_i=z_i/\ell_i$ and retain the final $m_i$ and $\ell_i$ for a later reverse pass.
4. Return $Y\in\mathbb R^{n\times v}$ and the retained row statistics.

**Reverse procedure:** Given a forward run with the same $Q,K,V,c,A_1,\ldots,A_n$ and an upstream matrix $G\in\mathbb R^{n\times v}$, initialize $dQ,dK,dV$ to zero. For each query row $i$, compute $\delta_i=\sum_{a=1}^{v}G_{ia}Y_{ia}$. For every block $J_t$ and each $j\in J_t\cap A_i$, recompute $s_{ij}$ from $Q,K$ and set

$$
p_{ij}=\frac{e^{s_{ij}-m_i}}{\ell_i},\qquad \gamma_{ij}=p_{ij}\left(\sum_{a=1}^{v}G_{ia}V_{ja}-\delta_i\right).
$$

Then, for $r=1,\ldots,d$, add to the query and key gradient arrays, and for $a=1,\ldots,v$, add to the value gradient array:

$$
(dQ)_{ir}\mathrel{+}=c\gamma_{ij}K_{jr},\qquad (dK)_{jr}\mathrel{+}=c\gamma_{ij}Q_{ir},\qquad (dV)_{ja}\mathrel{+}=p_{ij}G_{ia}.
$$

Return $dQ,dK,dV$. Do not store a full score or probability matrix: the reverse procedure recomputes one block's scores from the same inputs and fixed allowed-key sets. The prescribed reverse procedure treats the forward maxima and normalizers as frozen scaling statistics; it does not differentiate a maximum operation. The base algorithm has no dropout. Any dropout extension must replay the same realized dropout mask in its reverse pass.

## Definition references

[[def-attention-block-summary|Summary state and merge convention]]

[[def-scaled-dot-product-attention|Masked scaled dot-product attention]]

[[thm-shared-parameter-backpropagation-gradient-formula|Addition of contributions from repeated uses of shared inputs]]

[[thm-reverse-mode-computes-gradient|Exact reverse-mode differentiation of a finite smooth real-arithmetic graph]]

[Dao et al., §§2–3, Appendix B.2–B.4, and Appendix C: tiled forward, recomputed backward, and the exactness proof](https://arxiv.org/pdf/2205.14135)

[Milakov and Gimelshein, §§2–3: stable online softmax normalizer](https://arxiv.org/pdf/1805.02867)

[MIT OCW, Chapter 8 §§8.3–8.4: reverse-mode chain rule and accumulation at shared inputs](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf)
