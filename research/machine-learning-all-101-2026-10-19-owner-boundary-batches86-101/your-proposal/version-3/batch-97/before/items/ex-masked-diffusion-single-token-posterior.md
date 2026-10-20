---
id: ex-masked-diffusion-single-token-posterior
kind: example
title: One-token posterior on a finite mask schedule
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-masking-diffusion-chain
  - thm-masking-chain-posterior
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§3.2.1, Eq. (8), and Appendix A.2.1"
---

## Example

Take $V=\{a,b\}$, $L=1$, $N=2$, $\alpha_0=1$, $\alpha_1=1/2$, $\alpha_2=0$, and clean token $X=a$. At the reverse pair $(s,t)=(1,2)$, observing $Z_2=m$ has probability one and the true posterior assigns probability $1/2$ to $Z_1=a$ and $1/2$ to $Z_1=m$. At the reverse pair $(s,t)=(0,1)$, conditional on the positive-probability event $Z_1=m$, the true posterior removes the mask with probability one.

## Example references

[[def-finite-masking-diffusion-chain]]: gives the one-token survival schedule and absorbing mask.

[[thm-masking-chain-posterior]]: gives the exact conditional probabilities for each reverse pair.

## Facts & Assumptions

**Given:** The one-token finite masking chain in the Example. Verify both posterior rows.

[F1] [[def-finite-masking-diffusion-chain]]: $r_j=\alpha_j/\alpha_{j-1}$ and the mask is absorbing.

[F2] [[thm-masking-chain-posterior]]: at a masked later state, the earlier clean-token probability is $(\alpha_s-\alpha_t)/(1-\alpha_t)$; an unmasked token is copied.

## Verification

1.1 For $(s,t)=(1,2)$, $c_{1,2}=(1/2-0)/(1-0)=1/2$, and $1-c_{1,2}=(1-1/2)/(1-0)=1/2$. Since $\alpha_2=0$, [F1] gives $Z_2=m$ with probability one, so [F2] yields the displayed posterior row. [given, F1, F2, algebra]

2.1 For $(s,t)=(0,1)$, $c_{0,1}=(1-1/2)/(1-1/2)=1$. The conditioning event $Z_1=m$ has probability $1-\alpha_1=1/2>0$, so [F2] gives probability one to $Z_0=a$ and zero to the mask, with no zero-denominator endpoint used. [given, F1, F2, step 1.1, algebra] ∎
