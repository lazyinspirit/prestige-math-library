---
id: cex-factorized-reverse-kernel-fails-for-correlated-tokens
kind: counterexample
title: A factorized reverse kernel fails for correlated tokens
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-finite-grid-masked-diffusion-sampler
  - def-finite-masking-diffusion-chain
  - thm-masking-chain-posterior
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§3.2, coordinatewise absorbing mask process and learned reverse parameterization"
    - title: "Jacob Austin et al., Structured Denoising Diffusion Models in Discrete State-Spaces"
      url: https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf
      locator: "§3, factorized categorical transitions on sequence positions"
---

## Statement refuted

For every finite clean-sequence law and every finite absorbing-mask schedule with independent forward masking conditional on the clean sequence, the exact reverse conditional law of the earlier sequence given a later masked state factorizes over positions.

## Statement references

[[thm-masking-chain-posterior]]: its product posterior is conditional on the clean sequence; marginalizing a dependent clean-sequence law need not preserve the product form.

## Facts & Assumptions

**Given:** $V=\{0,1\}$, $L=2$, $N=1$, $\alpha_0=1$, $\alpha_1=0$, and $\Pr(X=(0,0))=\Pr(X=(1,1))=1/2$. The forward corruption is the finite absorbing-mask chain, and the proposed learned reverse sampler uses independent position draws with $h_{1,1}(m^2)=h_{2,1}(m^2)=(1/2,1/2)$.

[F1] [[def-finite-masking-diffusion-chain]]: at terminal survival $\alpha_1=0$, every clean token is masked, while the clean sequence itself retains its original law.

[F2] [[thm-masking-chain-posterior]]: for the endpoint pair $s=0,t=1$, the true reverse conditional given $X$ and the all-mask state returns the clean string with probability one.

[F3] [[alg-finite-grid-masked-diffusion-sampler]]: at $c_1=1$, the learned sampler draws each masked coordinate independently from its position predictor.

## Counterexample

**Given:** The finite model and probability law in the Statement.

1.1 Since $\alpha_1=0$, [F1] gives $Z_1=(m,m)$ with probability one, independent of $X$. By [F2], conditioning on this state and reversing to $s=0$ returns $X$ exactly. Hence the true reverse law puts mass $1/2$ on $(0,0)$ and $1/2$ on $(1,1)$, and zero on the two unequal strings. [given, F1, F2, algebra]

2.1 Each marginal coordinate of that true law is uniform on $\{0,1\}$, but its joint law is not their product: the product would assign mass $1/4$ to $(0,1)$, while the true law assigns zero. Therefore the exact reverse conditional is not independent across positions. [given, step 1.1, algebra]

3.1 The learned sampler has $c_1=1$ and draws the two coordinates independently from their uniform predictors by [F3]. Its output assigns probability $1/4$ to each of the four strings, so it cannot equal the true reverse law in step 1.1. This refutes the universal factorization statement while leaving the forward conditional independence assumption intact. [F3, step 1.1, step 2.1, algebra] ∎
