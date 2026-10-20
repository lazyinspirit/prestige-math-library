---
id: ex-simclr-projection-head-reported-results
kind: example
title: "SimCLR reports an empirical projection-head effect"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-latent-class-contrastive-learning
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ting Chen et al., A Simple Framework for Contrastive Learning of Visual Representations, default setting in Section 4 and Section 4.2, Figure 8"
      url: "https://proceedings.mlr.press/v119/chen20j/chen20j.pdf"
      locator: "§4 default setting, printed p. 6; §4.2 and Figure 8, printed p. 8. Full relevant passages inspected."
    - title: "Ting Chen et al., A Simple Framework for Contrastive Learning of Visual Representations, Supplementary Appendix B.4"
      url: "https://proceedings.mlr.press/v119/chen20j/chen20j-supp.pdf"
      locator: "Appendix B.4 projection-head and representation analysis. Full subsection inspected."
---

## Example

In SimCLR's ImageNet experiments, a projection head is a map $g$ applied to the encoder representation $h$ to produce $z=g(h)$; linear evaluation trains a linear classifier on a fixed representation. The authors report a comparison among an identity head, a linear projection head, and a nonlinear projection head with one additional hidden layer and ReLU. In their Figure 8, the nonlinear head's pre-projection representation $h$ scores about three percentage points above the linear-head condition and more than ten points above the no-head condition; they also report that $h$ scores more than ten points above the projected representation $z=g(h)$. Their default setup uses a ResNet-50 encoder, a two-layer MLP projection head to a 128-dimensional latent space, NT-Xent (normalized temperature-scaled cross-entropy), batch size 4096 and 100 training epochs. These are reported empirical results under the paper's evaluation protocol, not a theorem that projection heads universally improve representations.

## Example references

[[def-latent-class-contrastive-learning]]: supplies the representation-learning context only; the reported benchmark is empirical.

[Chen et al., Section 4 default setup and Section 4.2, Figure 8](https://proceedings.mlr.press/v119/chen20j/chen20j.pdf): reports the encoder/head configuration and linear-evaluation comparisons.

[Chen et al., Supplementary Appendix B.4](https://proceedings.mlr.press/v119/chen20j/chen20j-supp.pdf): provides additional projection-head analysis.

## Facts & Assumptions

**Given:** The published SimCLR paper and its ImageNet projection-head experiments.

[F1] The default configuration in Section 4 uses a ResNet-50 base encoder, a two-layer MLP projection head to dimension 128, NT-Xent, batch size 4096 and 100 epochs. [Chen et al., Section 4, default setting](https://proceedings.mlr.press/v119/chen20j/chen20j.pdf)

[F2] Figure 8 reports linear evaluation for identity, linear and nonlinear projection heads; its text reports roughly a three-point gain over a linear projection, more than ten points over no projection, and more than ten points for pre-projection $h$ over $z=g(h)$. [Chen et al., Section 4.2 and Figure 8](https://proceedings.mlr.press/v119/chen20j/chen20j.pdf)

## Proof

**Given:** The complete relevant passages of the SimCLR paper inspected in [F1] and [F2].

1.1 The setup in [F1] identifies the encoder, projection head, latent dimension, loss, batch size and training duration for the reported default experiment. [F1, given]

2.1 The linear-evaluation comparisons in [F2] state the reported relative performance of the three head choices and of $h$ versus $g(h)$. The Example reports those empirical comparisons with their stated experimental scope and makes no universal claim. [F2, step 1.1, given] ∎
