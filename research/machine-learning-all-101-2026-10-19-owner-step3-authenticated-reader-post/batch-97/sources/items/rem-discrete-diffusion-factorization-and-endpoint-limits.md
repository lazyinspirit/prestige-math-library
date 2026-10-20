---
id: rem-discrete-diffusion-factorization-and-endpoint-limits
kind: remark
title: Factorization and finite-endpoint warnings
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - alg-finite-grid-masked-diffusion-sampler
  - cor-masked-diffusion-finite-elbo-cross-entropy
  - def-finite-masking-diffusion-chain
  - thm-masked-diffusion-kl-reduces-to-cross-entropy
  - thm-masking-chain-posterior
forward_refs:
  - cex-factorized-reverse-kernel-fails-for-correlated-tokens
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§3.3, Rao–Blackwellized likelihood bounds; Appendix B.1.1–B.1.2, objective simplifications"
---

## Remark

The learned sampler assumes conditional independence across positions at each reverse update. Forward masking is independent across positions only after conditioning on the clean sequence; marginalizing a dependent clean-sequence law can make the true reverse coordinates dependent, so a normalized learned sampler need not be the exact reverse law. The counterexample on the companion page gives a finite witness. The identities here concern a fixed finite grid only; they assert no continuous-time or zero-mesh limit, which would require separate convergence hypotheses. The weighted-cross-entropy ELBO identity uses the exact clean and all-mask endpoints and their matching decoder and prior; approximate endpoints retain their reconstruction and terminal-prior terms. Sahoo et al. label their zero-masking and carry-over substitutions as “RB techniques” and call the simplified objective “Rao–Blackwellized”; this finite identity makes no variance-reduction claim, because no estimator and conditioning comparison are specified here.

## Remark references

[[cex-factorized-reverse-kernel-fails-for-correlated-tokens]]: a two-token finite witness where the true reverse posterior is dependent but the learned reverse draw is a product.

[[cor-masked-diffusion-finite-elbo-cross-entropy]]: the exact-endpoint finite ELBO identity and the support condition for its finite proof.

[Sahoo et al., §3.3 and Appendix B.1](https://arxiv.org/pdf/2406.07524v1): the paper's finite objective simplification and its explicit loose use of “Rao–Blackwellization.”
