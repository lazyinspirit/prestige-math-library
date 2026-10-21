---
category: representation-learning-and-generative-models
status: published
parts:
  - part: representation-objectives
    title: Representation and latent-variable objectives
    pages:
      - self-supervised-and-contrastive-representation-learning
      - reconstruction-and-masked-autoencoders
      - variational-autoencoders-and-the-elbo
  - part: energy-adversarial-and-transport
    title: Energy models, adversarial learning and transport
    pages:
      - energy-models-score-matching-and-contrastive-divergence
      - generative-adversarial-networks
      - finite-metric-transport-duality
      - compact-metric-kantorovich-rubinstein-duality
      - integral-probability-metrics-and-wasserstein-gans
  - part: flows-and-transport-paths
    title: Density flows and transport paths
    pages:
      - normalizing-flows-and-exact-density-models
      - neural-odes-and-continuous-normalizing-flows
      - conditional-flow-matching-and-transport-paths
  - part: diffusion-and-reverse-generation
    title: Diffusion and reverse generation
    pages:
      - discrete-diffusion-and-variational-objectives
      - anderson-reverse-time-diffusion
      - score-sdes-and-reverse-time-generation
      - discrete-masked-diffusion-and-reverse-generation
  - part: multimodal-transfer-and-foundations
    title: Multimodal transfer and foundation models
    pages:
      - multimodal-contrastive-alignment-and-transfer
      - foundation-models-transfer-and-scaling-evidence
---

## representation-objectives

Start with contrastive representations and reconstruction objectives, then study variational autoencoders and pathwise training. Distinguish the objective being optimized from claims about representation quality or identifiability. Relevant neural approximation and variational-inference prerequisites remain in their existing collections.

## energy-adversarial-and-transport

Energy and adversarial objectives lead to their distinct divergence and score formulations. Finite-metric transport duality precedes compact-metric Kantorovich-Rubinstein duality, followed by integral probability metrics and Wasserstein GANs. Optimization assumptions and ideal-discriminator identities do not establish successful adversarial training.

## flows-and-transport-paths

Begin with exact-density normalizing flows and their change-of-variables assumptions. Continue to neural ODEs and continuous normalizing flows, then conditional flow matching. Continuous trajectories, density integration and numerical error each retain their own regularity and solver prerequisites.

## diffusion-and-reverse-generation

Study discrete diffusion and masked finite-state generation, then the reverse-time diffusion interface and score-SDE generation. The continuous branch requires the published forward-SDE, Gaussian-smoothing and Euler convergence suppliers. Reverse dynamics, approximation error and learned-model bias remain separate claims.

## multimodal-transfer-and-foundations

Multimodal alignment follows its contrastive and neural context; foundation-model transfer follows attention and distribution-shift prerequisites. Keep mathematical statements about objectives and transfer conditions separate from empirical scaling or benchmark observations. Preference and policy optimization form a later bridge to Online and Reinforcement Learning.
