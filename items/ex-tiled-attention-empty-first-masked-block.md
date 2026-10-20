---
id: ex-tiled-attention-empty-first-masked-block
kind: example
title: "An empty first masked key block"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-exact-tiled-softmax-attention
  - thm-tiled-attention-exactness
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, §3.1 and Appendix C"
      url: "https://arxiv.org/pdf/2205.14135"
---

## Example

Take $n=2$, $d=v=1$, $Q=K=\begin{bmatrix}0\\0\end{bmatrix}$, $V=\begin{bmatrix}3\\5\end{bmatrix}$, scale $c=1$, block size $b=1$, and allowed-key sets $A_1=\{2\}$ and $A_2=\{1,2\}$. The first key block is empty for query row $1$ but nonempty for query row $2$. The tiled output is $Y=\begin{bmatrix}5\\4\end{bmatrix}$.

## Example references

[[alg-exact-tiled-softmax-attention|Empty-block and nonempty-block handling]]

[[thm-tiled-attention-exactness|Exactness for every nonempty allowed row]]

## Facts & Assumptions

**Given:** The two-row inputs, fixed allowed-key sets, and block size in the example statement.

[F1] [[alg-exact-tiled-softmax-attention]]: each row begins in state $\bot$; an empty allowed block is skipped, while the first nonempty block summary is copied.

[F2] [[thm-tiled-attention-exactness]]: a nonempty row's final weighted summary divided by its positive normalizer is its exact attention output.

## Verification

1.1 For query row $1$, the first block has $J_1\cap A_1=\varnothing$, so the state remains $\bot$. The second block contains key $2$, whose score is $0$ and value is $5$, giving summary $(0,1,5)$ and output $5$. [F1, given, algebra]

2.1 For query row $2$, both blocks are allowed and have score $0$. The first summary is $(0,1,3)$ and merging the second gives $(0,2,8)$, so the output is $8/2=4$. Both allowed-key sets are nonempty, so these are defined rows of the claimed attention map. [F1, F2, step 1.1, algebra] ∎
