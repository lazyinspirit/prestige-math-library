---
id: ex-tiled-attention-one-key
kind: example
title: "One-key tiled attention"
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
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, §3.1"
      url: "https://arxiv.org/pdf/2205.14135"
---

## Example

Take $n=d=v=1$, $Q=[2]$, $K=[3]$, $V=[7]$, scale $c=1$, block size $b=1$, and allowed-key set $A_1=\{1\}$. The tiled output is $Y=[7]$. For upstream scalar $G=[4]$, the exact reverse output is $dQ=[0]$, $dK=[0]$, and $dV=[4]$.

## Example references

[[alg-exact-tiled-softmax-attention|Tiled forward and reverse procedures]]

[[thm-tiled-attention-exactness|Exactness of the forward and reverse outputs]]

## Facts & Assumptions

**Given:** The scalar inputs and procedures in the example statement.

[F1] [[alg-exact-tiled-softmax-attention]]: for one allowed key the forward summary is copied as the row state, and the reverse updates use $p_{ij}$ and $\gamma_{ij}$.

[F2] [[thm-tiled-attention-exactness]]: the reverse procedure returns the derivative of the scalarized output for each fixed upstream value.

## Verification

1.1 The only score is $s_{11}=2\cdot3=6$. Its summary is $(m,\ell,z)=(6,1,7)$, so the output is $z/\ell=7$. [F1, given, algebra]

2.1 The probability is $p_{11}=1$, the scalar $\delta_1=G_1Y_1=28$, and $\gamma_{11}=1(4\cdot7-28)=0$. The reverse updates therefore give $dQ=0$, $dK=0$, and $dV=p_{11}G_1=4$. [F1, F2, step 1.1, algebra] ∎
