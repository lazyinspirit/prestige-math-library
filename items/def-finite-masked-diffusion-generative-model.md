---
id: def-finite-masked-diffusion-generative-model
kind: definition
title: Finite masked-diffusion generative model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-finite-grid-masked-diffusion-sampler
  - def-finite-masking-diffusion-chain
  - lem-finite-grid-masked-sampler-is-well-defined
justified_by:
  - lem-finite-masked-generative-joint-law-is-normalized
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§3.2.2, finite generative path factorization; endpoint prior and decoder conventions are stated locally"
---

## Definition

For the finite masking state space $S=(V\cup\{m\})^L$ and reverse kernels $P_j$ of the finite-grid sampler, put a point-mass prior at $Z_N=m^L$. Define a decoder $D$ from $S$ to $V^L$ by $D(x\mid z_0)=\mathbf1_{\{x=z_0\}}$ when $z_0\in V^L$, and $D(x\mid z_0)=|V|^{-L}$ for every $x\in V^L$ when $z_0\notin V^L$. The finite joint mass of a clean output $x\in V^L$ and latent path $(z_0,\ldots,z_N)\in S^{N+1}$ is
$$p(x,z_0,\ldots,z_N)=\mathbf1_{\{z_N=m^L\}}\left(\prod_{j=1}^N P_j(z_j,z_{j-1})\right)D(x\mid z_0).$$
Thus reverse step $j$ maps the state at level $j$ to the state at level $j-1$; the decoder is deterministic on clean endpoint states and is explicitly normalized on all other states.

## Definition references

[[def-finite-masking-diffusion-chain]]: fixes the finite vocabulary, mask, sequence length, grid, survival schedule, and sequence state space.

[[alg-finite-grid-masked-diffusion-sampler]]: supplies each reverse kernel $P_j$ and starts at $m^L$.

[[def-measure-kernel-and-probability-kernel]]: a probability kernel supplies normalized transition rows.
