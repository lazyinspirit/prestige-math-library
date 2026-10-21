---
id: lem-finite-masked-generative-joint-law-is-normalized
kind: lemma
title: Finite masked-diffusion joint model is normalized
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-masked-diffusion-generative-model
  - lem-finite-grid-masked-sampler-is-well-defined
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the joint law is a finite sum of finite products.
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
      locator: "§3.2.2, finite reverse generative path factorization"
---

## Statement

Let $V$ be finite and nonempty, $m\notin V$, $L,N\ge1$, and $S=(V\cup\{m\})^L$. Let $P_j$ be probability kernels on $S$, put prior mass one at $z_N=m^L$, and let $D(x\mid z_0)=\mathbf1_{\{x=z_0\}}$ when $z_0\in V^L$ and $D(x\mid z_0)=|V|^{-L}$ otherwise. Then the finite joint mass $p(x,z_0,\ldots,z_N)=\mathbf1_{\{z_N=m^L\}}\left(\prod_{j=1}^NP_j(z_j,z_{j-1})\right)D(x\mid z_0)$ is nonnegative and sums to one over $x\in V^L$ and $(z_0,\ldots,z_N)\in S^{N+1}$.

## Statement references

[[def-finite-masked-diffusion-generative-model]]: defines the terminal point mass, reverse-kernel product, normalized decoder, and joint mass.

## Facts & Assumptions

**Given:** The finite generative joint mass and the sampler's probability kernels. Prove the total joint mass is one.

[F1] [[def-finite-masked-diffusion-generative-model]]: $p(x,z_0,\ldots,z_N)=\mathbf1_{\{z_N=m^L\}}\left(\prod_{j=1}^NP_j(z_j,z_{j-1})\right)D(x\mid z_0)$.

[F2] [[lem-finite-grid-masked-sampler-is-well-defined]]: each reverse-kernel row $P_j(z,\cdot)$ is a probability vector.

## Proof

1.1 For fixed $z_0\in S$, if $z_0\in V^L$ then $D(\cdot\mid z_0)$ is a point mass; otherwise it assigns $|V|^{-L}$ to each of the $|V|^L$ clean outputs. In both cases $\sum_{x\in V^L}D(x\mid z_0)=1$. [F1, given, algebra]

2.1 Sum [F1] first over $x$, using step 1.1. Then sum over $z_0$ in $P_1(z_1,z_0)$, over $z_1$ in $P_2(z_2,z_1)$, and successively over $z_{N-1}$ in $P_N(z_N,z_{N-1})$. Each inner sum is one by [F2], leaving $\sum_{z_N}\mathbf1_{\{z_N=m^L\}}=1$. All sums are finite, so this iterated summation equals the total joint mass. [F1, F2, step 1.1, algebra]

3.1 Every factor in [F1] is nonnegative, and step 2.1 shows the finite total mass is one. Therefore the displayed function is a probability law. [F1, step 2.1, algebra] ∎
