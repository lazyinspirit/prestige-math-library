---
id: lem-forward-path-is-admissible-for-finite-masked-model
kind: lemma
title: Forward path law is admissible for the finite masked model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-finite-grid-masked-diffusion-sampler
  - def-finite-masked-diffusion-generative-model
  - def-finite-masking-diffusion-chain
  - def-variational-family-and-elbo
  - lem-finite-grid-masked-sampler-is-well-defined
  - lem-finite-masked-generative-joint-law-is-normalized
  - lem-finite-masking-chain-is-well-defined
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the support and integrability check is a finite pointwise argument.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians"
      url: https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf
      locator: "§2.2, admissible variational density and ELBO support/log-integrability conditions"
---

## Statement

Let $V$ be finite and nonempty, $m\notin V$, $L,N\ge1$, and $1=\alpha_0>\cdots>\alpha_N=0$. For each position, reverse step, state with a masked position, and clean token, assume $h_{i,j}(z)(v)>0$. Fix $x\in V^L$, let $q_x$ be the forward path probability vector on $S^{N+1}$ conditioned on $X=x$, let $\gamma_x(z_0,\ldots,z_N)=p(x,z_0,\ldots,z_N)$ be the finite joint model mass, and put $Z_x=\sum_z\gamma_x(z)$ and $\pi_x=\gamma_x/Z_x$. Then $0<Z_x\le1$, $q_x=0$ wherever $\pi_x=0$, and
$$\sum_{z:q_x(z)>0}q_x(z)\bigl(|\log\gamma_x(z)|+|\log q_x(z)|\bigr)<\infty.$$
With weighted log terms set to zero where $q_x=0$, as in the variational definition, $q_x$ is an admissible variational density for the finite joint target $\gamma_x$.

## Statement references

[[def-finite-masked-diffusion-generative-model]]: the joint mass is the terminal point mass times the learned reverse kernels and the decoder.

[[def-finite-masking-diffusion-chain]]: the forward path starts at $x$, masks are absorbing, and the terminal state is $m^L$.

[[def-variational-family-and-elbo]]: admissibility requires support domination and absolute log-integrability for a finite positive normalizer.

## Facts & Assumptions

**Given:** The finite forward path law, the finite reverse generative model, the strict endpoints, and full-support clean-token vectors at every masked reverse state. Prove the forward path density is admissible for the model's conditional joint target.

[F1] [[def-finite-masking-diffusion-chain]]: a forward path starts at $x$, each clean token either survives or becomes $m$, and $m$ remains masked thereafter.

[F2] [[alg-finite-grid-masked-diffusion-sampler]]: reverse rows copy clean tokens and assign mass $c_jh_{i,j}(z)(v)$ to a clean token from a masked position and $d_j=(1-\alpha_{j-1})/(1-\alpha_j)$ to retaining the mask.

[F3] [[lem-finite-masking-chain-is-well-defined]]: $q_x$ is a normalized probability vector on the finite path space.

[F4] [[lem-finite-masked-generative-joint-law-is-normalized]]: the joint model mass is a probability vector, so $Z_x\le1$.

[F5] [[def-variational-family-and-elbo]]: admissibility is $q_x\ll\pi_x$ and finite $\sum q_x(|\log\gamma_x|+|\log q_x|)$, with zero-density terms set to zero.

## Proof

1.1 The forward survival ratios telescope to $\prod_{j=1}^Nr_j=\alpha_N=0$, so for each coordinate the event of remaining clean at $N$ has probability zero; hence every $q_x$-positive path has $z_N=m^L$, while the defining path mass forces $z_0=x$. Fix such a path. A clean-to-clean forward transition copies its token, and the learned reverse row assigns that transition probability one. A clean-to-mask transition has learned reverse probability $c_jh_{i,j}(z_j)(x_i)>0$. A mask-to-mask transition can occur only for $j\ge2$, because $z_0=x$ is clean; then $\alpha_{j-1}<1$ and its learned reverse probability $d_j=(1-\alpha_{j-1})/(1-\alpha_j)>0$. These are all positive-probability forward transitions by [F1]. Thus every factor in the learned reverse path mass is positive, and the terminal prior and clean-state decoder are also positive; hence $\gamma_x(z_0,\ldots,z_N)>0$. [given, F1, F2, construct, algebra]

2.1 By [F3], at least one path has positive $q_x$ mass. Step 1.1 makes its joint model mass positive, so $Z_x>0$; [F4] gives $Z_x\le1$. On every $q_x$-positive path, step 1.1 gives $\gamma_x>0$, hence $\pi_x>0$ and $q_x\ll\pi_x$. [F3, F4, step 1.1, algebra]

3.1 The path space is finite. On each of its finitely many $q_x$-positive states, both $q_x(z)$ and $\gamma_x(z)$ are positive finite real numbers, so both logarithms are finite. Their finite weighted sum is finite; on $q_x=0$ states the variational convention contributes zero. This verifies [F5] and proves admissibility. [F5, step 1.1, step 2.1, algebra] ∎
