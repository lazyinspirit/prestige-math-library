---
id: ex-tiled-attention-replay-dropout-mask
kind: example
title: "A different dropout mask changes the reverse result"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-exact-tiled-softmax-attention
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
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, Appendix B.2–B.4"
      url: "https://arxiv.org/pdf/2205.14135"
---

## Example

Consider the optional inverted-dropout extension with dropout rate $\rho=1/2$, in which a fixed realization $\xi_j\in\{0,1\}$ multiplies attention weight $p_j$ by $\xi_j/(1-\rho)$. Take $n=2$, $d=v=1$, $Q=K=\begin{bmatrix}0\\0\end{bmatrix}$, $V=\begin{bmatrix}2\\0\end{bmatrix}$, $c=1$, and let both query rows allow both keys. For upstream matrix $G=\begin{bmatrix}1\\0\end{bmatrix}$, the forward realization $\xi=(1,0)$ has row-$1$ output $2$ and full value gradient $(dV_1,dV_2)=(1,0)$. Recomputing with the different realization $\xi'=(0,1)$ would give value gradient $(0,1)$ for the same upstream matrix, so it is not the reverse derivative of the forward realization.

## Example references

[[alg-exact-tiled-softmax-attention|The base procedure and its same-input recomputation convention]]

## Facts & Assumptions

**Given:** The optional dropout rule, the fixed inputs, and the two dropout realizations stated in the example.

[F1] [[alg-exact-tiled-softmax-attention]]: the base procedure has no dropout; its reverse pass uses the same fixed attention mask and recomputed scores.


## Verification

1.1 All scores are zero, so the undropped probabilities are $(1/2,1/2)$. Under $\xi=(1,0)$ and $\rho=1/2$, the dropped weights are $(1,0)$, hence query row $1$ has output $2$ and derivative with respect to $(V_1,V_2)$ equal to $(1,0)$. Since $G_2=0$, query row $2$ contributes zero to the full value gradient, which is therefore $(1,0)$. [F1, given, algebra]

2.1 Under $\xi'=(0,1)$ the dropped weights are $(0,1)$, so the recomputed value derivative is $(0,1)$. This differs from the derivative of the fixed forward realization in step 1.1, confirming that this extension must replay $\xi$. [F1, step 1.1, algebra] ∎
