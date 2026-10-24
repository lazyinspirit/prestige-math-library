---
id: lem-finite-masking-path-reversal-factorization
kind: lemma
title: Finite masking path law factors backward by its posterior rows
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-masking-diffusion-chain
  - lem-finite-masking-chain-is-well-defined
  - thm-masking-chain-posterior
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all conditional ratios are finite and taken on positive-probability events.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§3.2.1, Eq. (6), and Appendix A.2.1, Eqs. (19)–(22), for the one-step posterior rows; the path factorization is proved locally"
---

## Statement

Fix a clean string $x\in V^L$ and let $q_x$ be the finite forward path law of the absorbing-mask chain. For every path $(z_0,\ldots,z_N)$ with $q_x(z_0,\ldots,z_N)>0$, the reversed path probability factors as
$$q_x(z_0,\ldots,z_N)=q_x(Z_N=z_N)\prod_{j=N}^{1}q_x(Z_{j-1}=z_{j-1}\mid Z_j=z_j).$$
Each factor on the right is the true one-step posterior conditional on the clean string $x$; the identity is asserted only on positive-probability paths.

## Statement references

[[def-finite-masking-diffusion-chain]]: the conditional forward path mass is the product of its one-step transition rows.

[[thm-masking-chain-posterior]]: gives the finite conditional law of each preceding state given $x$ and the current state.

## Facts & Assumptions

**Given:** A fixed clean string $x$, the finite Markov path mass, and a positive-probability path $z_0,\ldots,z_N$. Prove the reversed factorization.

[F1] [[def-finite-masking-diffusion-chain]]: conditional on $x$, the path mass is $\mathbf1_{\{z_0=x\}}\prod_{j=1}^N a_j(z_{j-1},z_j)$, with each transition depending only on its preceding state.

[F2] [[lem-finite-masking-chain-is-well-defined]]: these path masses form a probability law on the finite path space.

[F3] [[thm-masking-chain-posterior]]: for a positive-probability current state, the conditional law of $Z_{j-1}$ given $x,Z_j$ is the stated posterior row.

## Proof

1.1 Fix $j$ and a positive-probability suffix $(z_j,\ldots,z_N)$. By [F1], for every prefix ending at $z_j$, the probability of adjoining the fixed future suffix is multiplied by the same factor $\prod_{k=j+1}^N a_k(z_{k-1},z_k)$, which does not depend on $z_{j-1}$. Summing over earlier coordinates preserves this common factor, so it cancels in the conditional ratio. Thus $q_x(Z_{j-1}=z_{j-1}\mid Z_j=z_j,\ldots,Z_N=z_N)=q_x(Z_{j-1}=z_{j-1}\mid Z_j=z_j)$ on this positive suffix. [F1, F2, given, algebra]

2.1 Repeated finite conditioning in reverse order gives $q_x(z_{0:N})=q_x(z_N)\prod_{j=N}^{1}q_x(z_{j-1}\mid z_j,\ldots,z_N)$. Replace each suffix conditional by step 1.1 and identify the one-step row using [F3]. The resulting equality is the displayed factorization, including $N=1$. [F2, F3, step 1.1, algebra] ∎
