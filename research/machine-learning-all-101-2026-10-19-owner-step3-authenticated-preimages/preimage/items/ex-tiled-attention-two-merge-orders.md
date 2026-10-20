---
id: ex-tiled-attention-two-merge-orders
kind: example
title: "Two merge orders give the same attention summary"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-attention-block-summary
  - thm-tiled-attention-exactness
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, §3.1 and Appendix C"
      url: "https://arxiv.org/pdf/2205.14135"
    - title: "Maxim Milakov and Natalia Gimelshein, Online normalizer calculation for softmax, §3.1"
      url: "https://arxiv.org/pdf/1805.02867"
---

## Example

Take $n=2$, $d=v=1$, both rows of $Q$ equal to $[1]$, $K_1=[0]$, $K_2=[\ln 2]$, $V_1=[0]$, $V_2=[3]$, scale $c=1$, block size $b=1$, and $A_1=A_2=\{1,2\}$. For either query, merging the summaries of blocks $\{1\}$ then $\{2\}$, or $\{2\}$ then $\{1\}$, gives $(m,\ell,z)=(\ln 2,3/2,3)$ and output $2$.

## Example references

[[def-attention-block-summary|Block summaries and the merge operation]]

[[thm-tiled-attention-exactness|Summary invariant and order-independent exact output]]

## Facts & Assumptions

**Given:** The two query rows, two key/value rows, and allowed sets in the example statement.

[F1] [[def-attention-block-summary]]: a singleton block summary uses its score maximum, shifted exponential sum, and shifted value sum; a merge rescales both blocks to their common maximum.

[F2] [[thm-tiled-attention-exactness]]: the completed summary divided by its normalizer is the rowwise masked attention output.

## Verification

1.1 The two scores are $s_1=0$ and $s_2=\ln2$. Thus $\Sigma(\{1\})=(0,1,0)$ and $\Sigma(\{2\})=(\ln2,1,3)$. [F1, given, algebra]

2.1 Merging in either order gives maximum $\ln2$, normalizer $e^{-\ln2}+1=3/2$, and weighted sum $3$. The output is $3/(3/2)=2$ in either order. [F1, F2, step 1.1, algebra] ∎
