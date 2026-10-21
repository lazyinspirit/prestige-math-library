---
category: online-and-reinforcement-learning
status: published
parts:
  - part: online-protocols-and-confidence
    title: Online protocols, regret and adaptive confidence
    pages:
      - online-decision-protocols
      - hedge-and-online-gradient-descent
      - mirror-descent-and-adaptive-regularization
      - anytime-valid-scalar-confidence-sequences
  - part: bandit-feedback
    title: Bandit feedback and contextual decisions
    pages:
      - stochastic-finite-armed-bandits
      - adversarial-bandits-and-importance-weighted-feedback
      - contextual-expert-bandits
      - linear-contextual-bandits-and-linucb
  - part: mdps-and-tabular-learning
    title: MDPs, Bellman operators and tabular learning
    pages:
      - finite-mdps-and-bellman-operators
      - tabular-prediction-and-control
      - pac-mdp-exploration
      - average-reward-regret-and-ucrl2
  - part: policies-planning-and-safety
    title: Policies, planning, offline learning and safety
    pages:
      - policy-gradients-reinforce-and-actor-critic
      - rl-function-approximation-and-off-policy-limits
      - model-based-planning-dyna-and-model-exploitation
      - offline-reinforcement-learning-and-off-policy-evaluation
      - pomdps-and-belief-state-planning
      - imitation-learning-and-dagger
      - constrained-mdps-and-policy-safety
  - part: preferences-and-verifiable-generation
    title: Preferences and verifiable generation
    pages:
      - preference-learning-and-direct-preference-optimization
      - verifiable-generation-and-test-time-sampling
---

## online-protocols-and-confidence

Begin with the decision and feedback protocol, then read Hedge, online gradient descent and mirror descent. Confidence sequences provide a complementary route to uncertainty under adaptive sampling. Keep the comparator class, stopping convention and feedback model explicit.

## bandit-feedback

Move from stochastic finite-armed bandits to adversarial and contextual feedback. Contextual expert methods follow importance weighting; linear contextual bandits use the earlier linear-prediction interface. The learner observes only the feedback specified by each protocol.

## mdps-and-tabular-learning

Read finite MDPs and Bellman operators before tabular prediction and control. Optimistic exploration and average-reward methods add their own horizon, communication and confidence assumptions. Planning with a known model and learning through interaction are distinct operations.

## policies-planning-and-safety

Continue through policy gradients, approximation limits, model-based planning and offline evaluation. Partial observability and imitation modify the information or training protocol; constrained MDPs add explicit policy-safety conditions. Read each tabular or Bellman prerequisite before its extension rather than assuming deep approximation preserves the guarantee.

## preferences-and-verifiable-generation

Preference learning and direct preference optimization use classical calibration and classification together with neural differentiation. Verifiable generation and group-relative updates follow policy-gradient and offline-evaluation interfaces. These objective and sampling results do not by themselves establish broad model alignment or reliable verification outside the stated setting.
