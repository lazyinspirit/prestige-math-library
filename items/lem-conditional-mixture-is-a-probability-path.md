---
id: lem-conditional-mixture-is-a-probability-path
kind: lemma
title: A conditional mixture is a probability path
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-probability-path-and-velocity-field
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
axiom_use: No choice principle is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §3.1"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §3.1"
      url: "https://arxiv.org/html/2506.02070"
---

## Statement

Let $\lambda$, $\pi$, and $\rho$ satisfy the conditional probability-density path definition, and for each $t\in[0,1]$ set $p_t(x)=\int_{\mathbb R^d}\rho_t(x\mid x_1)\,\pi(dx_1)$. Then $p_t$ is a nonnegative measurable function and $\int_{\mathbb R^d}p_t(x)\,\lambda(dx)=1$ for every $t$; hence it is a probability density with respect to $\lambda$.

## Statement references

[Lipman et al., §3.1](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §3.1](https://arxiv.org/html/2506.02070)

## Facts & Assumptions

**Given:** A sigma-finite Borel measure $\lambda$, a Borel probability measure $\pi$, and a conditional density $\rho_t$ normalized for $\pi$-almost every endpoint.

[F1] [[def-probability-path-and-velocity-field]]: $\rho_t(x\mid x_1)$ is product-measurable, nonnegative, and has $\lambda$-integral $1$ for $\pi$-almost every $x_1$; $p_t(x)$ is its $\pi$-mixture.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for a nonnegative product-measurable function on two sigma-finite measure spaces, the section integrals are measurable and either iterated integral equals the product integral.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $t\in[0,1]$. The measures $\lambda$ and $\pi$ are sigma-finite, and $(x,x_1)\mapsto\rho_t(x\mid x_1)$ is nonnegative and product-measurable by [F1]. Tonelli's theorem [F2] therefore makes $x\mapsto p_t(x)$ measurable and gives $$\int_{\mathbb R^d}p_t(x)\,\lambda(dx)=\int_{\mathbb R^d}\left(\int_{\mathbb R^d}\rho_t(x\mid x_1)\,\lambda(dx)\right)\pi(dx_1).$$ [given, F1, F2]

2.1 The inner integral in step 1.1 equals $1$ for $\pi$-almost every $x_1$ by [F1]. Since $\pi$ is a probability measure, the right-hand side is $\int 1\,d\pi=1$. The mixture is nonnegative by [F1], so $p_t$ is a probability density with respect to $\lambda$. [step 1.1, F1, algebra] ∎

## Source notes

The normalization is proved locally by Tonelli; the source citations document the conditional-to-marginal mixture convention.
