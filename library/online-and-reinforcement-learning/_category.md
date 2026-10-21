---
name: online-and-reinforcement-learning
title: Online and Reinforcement Learning
status: published
---

Online learning studies sequences of decisions, feedback and updates. Its guarantees compare cumulative performance with an explicit benchmark, often through regret. Reinforcement learning adds a state whose future evolution can depend on the chosen actions. This collection connects these settings through their information and decision structures. Online refers to sequential interaction, not an internet connection. Probability, martingales, optimization and selected classical prediction methods supply external prerequisites.

The pathway starts with online protocols, Hedge, gradient methods, mirror descent and confidence sequences under adaptive sampling. It then develops stochastic, adversarial and contextual bandits, where the learner receives only the feedback allowed by the protocol. Confidence statements must retain their sampling and stopping assumptions. Regret and sample complexity describe different guarantees and are not interchangeable.

Finite MDPs and Bellman operators lead to tabular prediction, control and exploration. Later pages cover policy gradients, function approximation, model-based planning, offline evaluation, partial observability, imitation and constrained policies. Their assumptions determine which conclusions survive approximation or distribution mismatch. The final part connects preference learning, direct preference optimization and verifiable generation with policy objectives. Most of the collection can be read after the relevant classical and probability foundations; the preference branch additionally uses differentiation from Neural Networks and Learning Dynamics. Generative modeling is a parallel pathway rather than a prerequisite for every decision method.
