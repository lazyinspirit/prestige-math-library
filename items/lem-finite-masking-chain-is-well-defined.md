---
id: lem-finite-masking-chain-is-well-defined
kind: lemma
title: Finite masking-chain transitions define a probability law
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-masking-diffusion-chain
  - def-measure-kernel-and-probability-kernel
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite products and finite sums are formed.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§3.2.1, finite absorbing-state chain"
    - title: "David A. Levin and Yuval Peres, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf
      locator: "Chapter 1, §1.1, finite transition matrices"
---

## Statement

For a finite absorbing-mask chain with finite clean vocabulary, mask symbol, sequence length, strict grid, and survival schedule as specified above, each sequence-state transition row is a probability vector, and the displayed joint path mass $\mu(x)\mathbf 1_{\{z_0=x\}}\prod_{j=1}^N\prod_{i=1}^L a_j(z_{j-1,i},z_{j,i})$ sums to one over $x\in V^L$ and $z_0,\ldots,z_N\in S$. Thus it defines a probability law on the finite clean-sequence and path space.

## Statement references

[[def-finite-masking-diffusion-chain]]: fixes $V,m,L,N,\alpha,\mu$, the one-coordinate rows, product sequence kernels, and the path-mass formula.

## Facts & Assumptions

**Given:** A finite nonempty $V$, $m\notin V$, $L,N\ge1$, the strict survival schedule, and a probability vector $\mu$ on $V^L$ as in the defining item. Prove each row and the joint path mass are normalized.

[F1] [[def-finite-masking-diffusion-chain]]: $r_j=\alpha_j/\alpha_{j-1}$ and $a_j(v,v)=r_j$, $a_j(v,m)=1-r_j$, $a_j(m,m)=1$, with all other entries zero; $Q_j(z,z')=\prod_i a_j(z_i,z'_i)$.

[F2] [[def-measure-kernel-and-probability-kernel]]: a probability kernel has probability-measure rows and measurable evaluation functions.

## Proof

1.1 The strict schedule gives $0\le r_j\le1$. For a clean token $v$, its one-coordinate row has total mass $r_j+(1-r_j)=1$; for $m$, the row mass is $1$. Therefore every product row satisfies $\sum_{z'\in S}Q_j(z,z')=\prod_{i=1}^L\sum_{w\in V\cup\{m\}}a_j(z_i,w)=1$. Its entries are nonnegative. Since $S$ is finite with its power-set sigma-algebra, [F2] makes $Q_j$ a probability kernel. [given, F1, F2, algebra]

2.1 For fixed $x$, sum the conditional path mass backward: summing first over $z_N$ uses the row sum of $Q_N$ from step 1.1 and removes that factor; repeating for $z_{N-1},\ldots,z_1$ leaves $\mathbf 1_{\{z_0=x\}}$. Summing over $z_0$ then gives $1$, so each conditional path mass sums to one. [F1, step 1.1, algebra]

3.1 Multiplying these conditional path laws by $\mu(x)$ and summing over the finite set $V^L$ gives total mass $\sum_x\mu(x)=1$. All masses are nonnegative and the path space is finite, so the joint mass is a probability vector. [given, F1, step 2.1, algebra] ∎
