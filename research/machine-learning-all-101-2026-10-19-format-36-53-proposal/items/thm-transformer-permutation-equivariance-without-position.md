---
id: thm-transformer-permutation-equivariance-without-position
kind: theorem
title: "Position-free unmasked self-attention is permutation equivariant"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-transformer-encoder-decoder-layer
  - def-multihead-self-attention
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Yun et al., Are Transformers Universal Approximators of Sequence-to-Sequence Functions?, Appendix A"
      url: "https://arxiv.org/pdf/1912.10077"
    - title: "Vaswani et al., Attention Is All You Need, §§3.1–3.2.3"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §§11.6.1 and 11.7.1"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html"
---

## Statement

Let $X\in\mathbb R^{n\times d}$ be a sequence matrix whose rows are token representations, and let $P$ be any $n\times n$ permutation matrix. Every finite composition $T$ of position-shared encoder layers built from unmasked multi-head self-attention, residual additions, rowwise layer normalization, and a shared positionwise feedforward map, with no positional encoding, satisfies

$$
T(PX)=P\,T(X).
$$

For a fixed attention mask $M$, the corresponding layer satisfies $\operatorname{Layer}_{PMP^{\mathsf T}}(PX)=P\operatorname{Layer}_{M}(X)$. Hence a fixed mask preserves only the permutations that leave $M$ unchanged. The standard causal mask $M_{ij}=0$ for $j\le i$ and $M_{ij}=-\infty$ for $j>i$ is preserved only by the identity permutation.

## Statement references

[Yun et al., Appendix A: self-attention and tokenwise feedforward permutation equivariance](https://arxiv.org/pdf/1912.10077)

[Vaswani et al., §3.2.3: causal masking of future decoder positions](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §11.6.1: self-attention without positional order information](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html)

## Facts & Assumptions

**Given:** A sequence matrix $X$, a permutation matrix $P$, shared projections and positionwise maps, and—when a mask is present—a mask transformed together with the token indices.

[F1] Each multi-head self-attention head forms query, key, and value rows by applying the same matrices to every token; its output is scaled-dot-product attention followed by a shared output projection ([[def-multihead-self-attention]]).

[F2] Residual addition, rowwise layer normalization, and a positionwise feedforward map apply the same vector function at every position ([[def-transformer-encoder-decoder-layer]]).

## Proof

1.1 For one head, write $Q=XW^Q$, $K=XW^K$, and $V=XW^V$. On input $PX$, the projections are $PQ$, $PK$, and $PV$. The unmasked score matrix therefore becomes $(PQ)(PK)^{\mathsf T}=P(QK^{\mathsf T})P^{\mathsf T}$. [given, F1, algebra]

2.1 Row softmax commutes with simultaneous row and column permutation: every row's logits are merely reordered, so its normalized entries are reordered by the same permutation. Thus $\operatorname{softmax}_{\rm row}(PSP^{\mathsf T})=P\operatorname{softmax}_{\rm row}(S)P^{\mathsf T}$; multiplying by $PV$ gives $P\operatorname{softmax}_{\rm row}(S)V$. Concatenation and the shared output projection preserve this identity, and so does the residual addition. [step 1.1, F1, algebra]

3.1 A shared positionwise map applies the same function to each row, hence maps $PX$ to the permutation of its outputs. Rowwise layer normalization has the same property because each row's mean and variance are unchanged by reordering rows. Combining these identities with the attention and residual identity in step 2.1 shows that one encoder layer is equivariant; induction over the finite stack gives $T(PX)=PT(X)$. [step 2.1, F2, induction]

4.1 For a masked head, transforming the mask to $PMP^{\mathsf T}$ gives the same score-and-weight calculation as steps 1.1–2.1, proving the stated mask identity. A permutation preserving the causal mask must preserve the relation $j\le i$ on the finite chain $1<\cdots<n$; its unique least element must map to itself, and then induction on the remaining ordered positions makes every position fixed. Therefore only the identity preserves the standard causal mask. [step 1.1, step 2.1, given, algebra, induction] ∎