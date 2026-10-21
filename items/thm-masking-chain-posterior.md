---
id: thm-masking-chain-posterior
kind: theorem
title: Posterior of a finite masking chain
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-masking-diffusion-chain
  - lem-finite-masking-chain-is-well-defined
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all conditional probabilities are finite ratios on positive-probability events.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§3.2.1, Eq. (6); Appendix A.2.1, Eqs. (19)–(22)"
    - title: "Jacob Austin et al., Structured Denoising Diffusion Models in Discrete State-Spaces"
      url: https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf
      locator: "§3, Eqs. (2)–(3), forward posterior for categorical Markov chains"
---

## Statement

Let $V$ be a finite nonempty vocabulary, let $m\notin V$, let $L,N\ge1$, and let $1=\alpha_0>\alpha_1>\cdots>\alpha_N=0$ be the survival schedule of the finite masking chain. Fix a clean sequence $x\in V^L$ and grid indices $0\le s<t\le N$. For every state $z_t\in(V\cup\{m\})^L$ with $\Pr(Z_t=z_t\mid X=x)>0$, the conditional law of $Z_s$ given $X=x,Z_t=z_t$ is a product over coordinates. At coordinate $i$, if $z_{t,i}\in V$, then $Z_{s,i}=z_{t,i}$ with probability one. If $z_{t,i}=m$, then, with $c_{s,t}=(\alpha_s-\alpha_t)/(1-\alpha_t)$, the only possible values are $x_i$ and $m$, with probabilities
$$\Pr(Z_{s,i}=x_i\mid X=x,Z_{t,i}=m)=c_{s,t},\qquad \Pr(Z_{s,i}=m\mid X=x,Z_{t,i}=m)=\frac{1-\alpha_s}{1-\alpha_t}.$$
The denominator is positive because $t\ge1$ implies $\alpha_t<1$; at $s=0$ the mask posterior has zero mass.

## Statement references

[[def-finite-masking-diffusion-chain]]: conditional on $X=x$, coordinates and masking draws are independent, clean tokens never change, and $m$ is absorbing.

## Facts & Assumptions

**Given:** The finite masking chain, a fixed clean string $x$, grid indices $0\le s<t\le N$, and a state $z_t$ with positive conditional probability given $X=x$. Prove the displayed product posterior.

[F1] [[def-finite-masking-diffusion-chain]]: at step $j$, a clean token survives with probability $r_j=\alpha_j/\alpha_{j-1}$, the mask is absorbing, and corruption factors over positions conditional on the clean string.

[F2] [[lem-finite-masking-chain-is-well-defined]]: the finite path mass is a normalized probability law.

## Proof

1.1 For one coordinate, the probability of surviving all steps through $s$ is $\prod_{j=1}^{s}r_j=\alpha_s$, with the empty product equal to one when $s=0$. Survival through $t$ has probability $\alpha_t$. Since the mask is absorbing, the event “clean at $s$ and masked at $t$” has probability $\alpha_s-\alpha_t$, while “masked at $t$” has probability $1-\alpha_t$. The latter is positive for $t\ge1$. Dividing these finite event probabilities gives the two displayed conditional masses, which sum to one. [given, F1, F2, algebra]

2.1 If $z_{t,i}\in V$, positive conditional probability forces $z_{t,i}=x_i$; the token could not have changed or been unmasked after masking, so its earlier value is the same. If $z_{t,i}=m$, step 1.1 gives the two possible earlier values and their probabilities. By [F1], conditional on $x$ the coordinate paths are independent; conditioning on the coordinatewise event $Z_t=z_t$ therefore leaves the coordinate posterior laws independent, and their product is the asserted full conditional law. [F1, F2, step 1.1, algebra]

3.1 The strict schedule gives $0<c_{s,t}\le1$ and $1-c_{s,t}=(1-\alpha_s)/(1-\alpha_t)$. At $s=0$, $c_{s,t}=1$; at $t=N$, $\alpha_t=0$ and the denominator is one. Thus the formula covers both endpoints without conditioning on the zero-probability event $Z_0=m$. [given, F1, step 1.1, algebra] ∎
