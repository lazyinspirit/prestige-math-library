---
id: lem-finite-grid-masked-sampler-is-well-defined
kind: lemma
title: Finite-grid masked sampler defines a normalized law
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-finite-grid-masked-diffusion-sampler
  - def-measure-kernel-and-probability-kernel
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all reverse steps and products are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§§3.2.2–3.2.3, finite reverse unmasking process"
---

## Statement

Let $V$ be finite and nonempty, $m\notin V$, $L,N\ge1$, $0=t_0<\cdots<t_N=1$, and $1=\alpha_0>\cdots>\alpha_N=0$. For each $i,j,z$, let $h_{i,j}(z)$ be a probability vector on $V$, put $c_j=(\alpha_{j-1}-\alpha_j)/(1-\alpha_j)$, and define the reverse coordinate rows to copy an unmasked token and, from $m$, assign mass $1-c_j$ to $m$ and mass $c_jh_{i,j}(z)(v)$ to each $v\in V$. Their product rows are probability vectors. Composing these $N$ kernels from the point mass at $m^L$ therefore gives a normalized finite law, and its final state lies in $V^L$ because $c_1=1$ removes every remaining mask.

## Statement references

[[alg-finite-grid-masked-diffusion-sampler]]: defines $c_j$, the position-wise reverse rows, their product kernel, and the start state $m^L$.

[[def-measure-kernel-and-probability-kernel]]: a probability kernel has probability-law rows.

## Facts & Assumptions

**Given:** A finite strict survival schedule and the probability-vector family $h_{i,j}(z)$ from the sampler definition. Prove the reverse kernels are normalized and end in $V^L$.

[F1] [[alg-finite-grid-masked-diffusion-sampler]]: $c_j=(\alpha_{j-1}-\alpha_j)/(1-\alpha_j)$; a masked coordinate stays masked with mass $1-c_j$ and moves to $v\in V$ with mass $c_jh_{i,j}(z)(v)$; unmasked coordinates are copied.

[F2] [[def-measure-kernel-and-probability-kernel]]: on a finite power-set state space, a nonnegative row summing to one is a probability kernel.

## Proof

1.1 For $j\ge1$, strict decrease gives $\alpha_j<1$ and $\alpha_{j-1}>\alpha_j\ge0$, so $c_j>0$. Since $\alpha_{j-1}\le1$, $\alpha_{j-1}-\alpha_j\le1-\alpha_j$, hence $c_j\le1$. [given, F1, algebra]

2.1 If $z_i\ne m$, the coordinate row in [F1] is a point mass and sums to one. If $z_i=m$, its mass is $(1-c_j)+\sum_{v\in V}c_jh_{i,j}(z)(v)=1$ because $h_{i,j}(z)$ is a probability vector. The product over positions therefore has nonnegative entries summing to the product of $L$ ones, namely one; by [F2] it is a probability-kernel row. [F1, F2, step 1.1, algebra]

3.1 Fix a current state $z$ and position $i$. If $z_i=m$ and $c_j<1$, the uniform threshold satisfies $\Pr(U^{\mathrm{mask}}_{j,i}\ge c_j)=1-c_j$ and $\Pr(U^{\mathrm{mask}}_{j,i}<c_j)=c_j$. For an ordered vocabulary $v_1,\ldots,v_K$, put $H_0=0$ and $H_k=\sum_{a=1}^kh_{i,j}(z)(v_a)$. The inverse-CDF rule selects $v_k$ on the interval $[H_{k-1},H_k)$, whose uniform probability is $H_k-H_{k-1}=h_{i,j}(z)(v_k)$. The fallback at $U^{\mathrm{token}}_{j,i}=1$ has probability zero and so does not change this law, even if the fallback token has zero mass. Since the mask and token uniforms are independent, the resulting row assigns mass $1-c_j$ to $m$ and $c_jh_{i,j}(z)(v)$ to each $v$. If $c_j=1$, the direct token draw has law $h_{i,j}(z)$ and no mask is retained. Unmasked coordinates are copied, and independence of the random pairs across positions makes the sequence row the product in [F1]. Thus the stated random instructions realize the coordinate and product rows from step 2.1. [F1, given, step 2.1, algebra]

4.1 The loop has exactly $N$ reverse-step iterations, each updates the finite set of $L$ positions once, and each inverse-CDF search checks at most the finite number $K=|V|$ of tokens; the fallback defines the draw also at $U^{\mathrm{token}}_{j,i}=1$. Hence every instruction terminates and the algorithm terminates after finitely many operations. Starting from the point mass at $m^L$, composition of the normalized rows from step 2.1 gives a normalized finite path and endpoint law. At $j=1$, $c_1=(\alpha_0-\alpha_1)/(1-\alpha_1)=1$, so the algorithm's direct token-draw branch removes every remaining mask and copies every already clean coordinate. Thus $Z_0\in V^L$, completing the support claim. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎
