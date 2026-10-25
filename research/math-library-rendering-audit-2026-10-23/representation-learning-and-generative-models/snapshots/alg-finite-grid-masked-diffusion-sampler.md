---
id: alg-finite-grid-masked-diffusion-sampler
kind: algorithm
title: Finite-grid masked reverse sampler
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-masking-diffusion-chain
justified_by:
  - lem-finite-grid-masked-sampler-is-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§§3.2.2–3.2.3, discrete reverse unmasking and SUBS parameterization"
    - title: "Jacob Austin et al., Structured Denoising Diffusion Models in Discrete State-Spaces"
      url: https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf
      locator: "§3, factorized categorical reverse process"
---

## Definition

For the finite masking chain with state space $S=(V\cup\{m\})^L$ and survival schedule $\alpha_0,\ldots,\alpha_N$, take probability vectors $h_{i,j}(z)\in\Delta(V)$ for every position $i\in\{1,\ldots,L\}$, reverse step $j\in\{1,\ldots,N\}$, and current state $z\in S$, where $\Delta(V)=\{p:V\to[0,1]:\sum_{v\in V}p(v)=1\}$. Initialize $Z_N=m^L$. For $j=N,N-1,\ldots,1$, set $c_j=(\alpha_{j-1}-\alpha_j)/(1-\alpha_j)$ and update all positions from the same current state $z=Z_j$ as follows, independently across positions conditional on $z$: if $z_i\ne m$, set $Z_{j-1,i}=z_i$; if $z_i=m$ and $c_j=1$, draw $Z_{j-1,i}$ from $h_{i,j}(z)$; if $z_i=m$ and $c_j<1$, set $Z_{j-1,i}=m$ when $U^{\mathrm{mask}}_{j,i}\ge c_j$, and otherwise draw the clean token from $h_{i,j}(z)$ using $U^{\mathrm{token}}_{j,i}$. The resulting one-coordinate row is $p_{i,j}(w\mid z)=\mathbf1_{\{w=z_i\}}$ when $z_i\ne m$, and, when $z_i=m$, has mass $1-c_j$ at $m$ and mass $c_jh_{i,j}(z)(v)$ at each $v\in V$; the sequence-state kernel is $P_j(z,z')=\prod_{i=1}^L p_{i,j}(z'_i\mid z)$. Return $Z_0$ after the finite loop. The mathematical random source is a finite product of mutually independent uniform $[0,1]$ variables $U^{\mathrm{mask}}_{j,i},U^{\mathrm{token}}_{j,i}$, one pair for each step and position; an implementation seed is valid only insofar as its supplied random kernel has this law. For inverse-CDF token draws, fix any order $V=(v_1,\ldots,v_K)$, choose the first $v_k$ whose cumulative mass strictly exceeds $U^{\mathrm{token}}_{j,i}$, and return $v_K$ if that draw equals $1$. At $j=1$, $c_1=1$, so every remaining mask is unmasked.

## Definition references

[[def-finite-masking-diffusion-chain]]: supplies the finite vocabulary, mask, length, grid, and survival schedule.

[[def-measure-kernel-and-probability-kernel]]: a probability kernel is a family of probability-law rows with measurable evaluation functions; the finite $P_j$ above is a product of such rows.
