---
category: machine-learning-algorithms
status: published
parts:
  - part: representation-and-transfer
    title: Representation objectives and transfer
    pages:
      - foundation-models-transfer-and-scaling-evidence
      - multimodal-contrastive-alignment-and-transfer
      - reconstruction-and-masked-autoencoders
      - self-supervised-and-contrastive-representation-learning
      - variational-autoencoders-and-the-elbo
  - part: generative-objectives-and-transport
    title: Generative objectives and transport
    pages:
      - energy-models-score-matching-and-contrastive-divergence
      - finite-metric-transport-duality
      - generative-adversarial-networks
      - compact-metric-kantorovich-rubinstein-duality
      - integral-probability-metrics-and-wasserstein-gans
  - part: flows-and-diffusion
    title: Flows, diffusion, and reverse generation
    pages:
      - anderson-reverse-time-diffusion
      - discrete-diffusion-and-variational-objectives
      - discrete-masked-diffusion-and-reverse-generation
      - neural-odes-and-continuous-normalizing-flows
      - normalizing-flows-and-exact-density-models
      - score-sdes-and-reverse-time-generation
      - conditional-flow-matching-and-transport-paths
  - part: online-protocols-and-confidence
    title: Online protocols, regret, and confidence
    pages:
      - anytime-valid-scalar-confidence-sequences
      - online-decision-protocols
      - hedge-and-online-gradient-descent
      - mirror-descent-and-adaptive-regularization
  - part: bandit-feedback
    title: Bandit feedback and contextual decisions
    pages:
      - linear-contextual-bandits-and-linucb
      - stochastic-finite-armed-bandits
      - adversarial-bandits-and-importance-weighted-feedback
      - contextual-expert-bandits
  - part: mdps-and-tabular-learning
    title: MDPs, Bellman operators, and tabular learning
    pages:
      - finite-mdps-and-bellman-operators
      - average-reward-regret-and-ucrl2
      - tabular-prediction-and-control
      - pac-mdp-exploration
  - part: policies-planning-and-safety
    title: Policies, planning, offline learning, and safety
    pages:
      - pomdps-and-belief-state-planning
      - imitation-learning-and-dagger
      - rl-function-approximation-and-off-policy-limits
      - model-based-planning-dyna-and-model-exploitation
      - offline-reinforcement-learning-and-off-policy-evaluation
      - policy-gradients-reinforce-and-actor-critic
      - constrained-mdps-and-policy-safety
  - part: preferences-and-verifiable-generation
    title: Preferences and verifiable generation
    pages:
      - preference-learning-and-direct-preference-optimization
      - verifiable-generation-and-test-time-sampling
---

## representation-and-transfer

Begin with contrastive representations, reconstruction, and latent-variable objectives, then explore multimodal alignment and foundation-model transfer. Read the neural and statistical prerequisites in their own collections. Distinguish mathematical guarantees about objectives from empirical scaling evidence.

## generative-objectives-and-transport

Study energy and adversarial models alongside their divergence and score formulations. Finite-metric transport duality precedes compact-metric Kantorovich–Rubinstein duality and the Wasserstein-GAN applications. Ideal objective identities retain their stated optimization assumptions.

## flows-and-diffusion

Follow exact-density and continuous flows into flow matching, using the transport prerequisites from the preceding part. Discrete diffusion and masked generation form a separate route; the continuous branch proceeds from reverse-time diffusion to score-SDE generation. Keep density, regularity, sampling, and solver assumptions explicit.

## online-protocols-and-confidence

Begin the sequential-decision branch with its protocol and comparator class. Hedge and online gradient descent precede adaptive mirror descent. Confidence sequences supply tools for adaptive sampling and stopping under their stated assumptions.

## bandit-feedback

Move from stochastic finite-armed bandits to adversarial and contextual feedback. Contextual expert methods follow importance weighting; linear contextual bandits use their linear-prediction prerequisites. Each guarantee depends on the feedback the learner actually observes.

## mdps-and-tabular-learning

Read finite MDPs and Bellman operators before tabular prediction and control. PAC exploration and average-reward regret add their own horizon, confidence, and communication conditions. Known-model planning and learning through interaction retain distinct assumptions.

## policies-planning-and-safety

Continue to policy gradients, function approximation, model-based planning, and offline evaluation. Partial observability and imitation change the information or training protocol; constrained MDPs follow the policy-gradient prerequisites. Approximation and off-policy results preserve their stated limitations.

## preferences-and-verifiable-generation

Preference learning and direct preference optimization use classical calibration, classification, and neural differentiation. Verifiable generation follows the policy-gradient and offline-evaluation interfaces. Objective and sampling results retain their stated verification and feedback assumptions.
