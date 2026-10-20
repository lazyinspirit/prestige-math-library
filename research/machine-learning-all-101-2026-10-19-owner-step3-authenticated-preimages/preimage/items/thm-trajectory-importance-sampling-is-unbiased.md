---
id: thm-trajectory-importance-sampling-is-unbiased
kind: theorem
title: "Trajectory and per-decision importance sampling are unbiased under coverage"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-trajectory-importance-sampling-ope
  - def-axiom-of-choice
  - def-offline-reinforcement-learning-dataset
  - lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§5.5, printed pp. 128–129, equation (5.4), ordinary importance-sampling expectation under coverage."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.2.2, PDF pp. 2–3, equations (4)–(5), trajectory and step-wise IS."
---

## Statement

Assume AC and the finite-horizon dataset conditions with full trajectory coverage $P^\pi_H\ll P^\mu_H$, true known behavior propensities, and the integrability hypotheses in the dataset definition. Whenever the preceding algorithm returns numerical estimates, all three estimates are finite. Under the behavior-generated law of the $n$ independent trajectories, its `unsupported` status occurs only on a null event; assign any fixed finite values to the three estimator expressions there. The ordinary trajectory estimator and per-decision estimator then each have expectation $J_H(\pi;s_0)$. This statement makes no finite-sample unbiasedness claim for the self-normalized weighted estimator.

## Statement references

[[def-offline-reinforcement-learning-dataset|The fixed-start finite-horizon data law, target value, independent sample, and coverage assumptions.]]

[[alg-trajectory-importance-sampling-ope|The OIS and PDIS formulas and their finite-horizon prefix weights.]]

[[lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative|The full and prefix policy-ratio density identities.]]

[[def-axiom-of-choice|The Axiom of Choice required by the path-law and RN suppliers.]]

[Sutton and Barto, Reinforcement Learning: An Introduction, 2nd ed.](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf)

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

## Facts & Assumptions

**Given:** AC, a finite-horizon dataset of $n\ge1$ independent behavior trajectories, target and behavior policies, full trajectory coverage, and the finite-horizon return.

[A1] [[def-axiom-of-choice]]: AC is assumed by the trajectory-law and RN-density suppliers.

[F1] [[def-offline-reinforcement-learning-dataset]]: each feasible trajectory atom has mass $\prod_{k=0}^{H-1}\mu(a_k\mid s_k)p(s_{k+1},r_{k+1}\mid s_k,a_k)$, logged trajectories are independent with law $P^\mu_H$, the target value is $J_H(\pi;s_0)=\mathbb E_{P^\pi_H}G_H$, and the finite-horizon return is integrable.

[F2] [[alg-trajectory-importance-sampling-ope]]: OIS averages $W_{i,H-1}G_i$; PDIS averages $\sum_{t=0}^{H-1}\gamma^tW_{i,t}R_{t+1}^i$.

[F3] [[lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative]]: the full weight changes $P^\mu_H$ to $P^\pi_H$, and each prefix weight changes the behavior prefix law to the target prefix law; the corresponding weighted absolute integrals are finite.

[F4] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral of a finite sum of integrable trajectory functions is the sum of their integrals.

## Proof

**Given:** The hypotheses and conventions in the Statement and [A1], [F1]–[F4].

1.1 On any input where the algorithm returns numerical estimates, each propensity ratio is finite: when $\mu(A_t^i\mid S_t^i)>0$, it is a quotient of finite probabilities by a positive probability; when both probabilities are zero, the algorithm sets the ratio to zero. If $\mu(A_t^i\mid S_t^i)=0<\pi(A_t^i\mid S_t^i)$, the algorithm returns `unsupported` instead. Thus every cumulative weight is finite. Each return and every finite sum in OIS and PDIS is finite because the reward set, horizon, and dataset are finite. The WIS numerator and denominator are finite, and the procedure either divides by a positive finite denominator or returns zero. [F1, F2, algebra]

2.1 An observed pair with $\mu(A_t^i\mid S_t^i)=0$ lies on a behavior-null trajectory atom by [F1]. Since the trajectory space, horizon, and sample size are finite, the event that any observed pair has zero behavior propensity is a finite union of null events. The algorithm therefore returns numerical estimates almost surely under the behavior sample law. Extending the three estimator expressions by any fixed finite values on the `unsupported` null event does not change their expectations. [given, F1, F2, step 1.1, algebra]

3.1 Fix a logged trajectory index $i$. By [F1], its law is $P^\mu_H$, and [F3] applied to $G_i$ gives $\mathbb E_\mu[W_{i,H-1}G_i]=\mathbb E_\pi[G_H]=J_H(\pi;s_0)$. Linearity [F4] gives $\mathbb E_\mu[\widehat J_{\mathrm{OIS}}]=n^{-1}\sum_{i=1}^nJ_H(\pi;s_0)=J_H(\pi;s_0)$. [given, A1, F1, F2, F3, F4, step 2.1, algebra]

3.2 Fix $i$ and $0\le t<H$. The reward $R_{t+1}^i$ is a function of the prefix through $(R_{t+1},S_{t+1})$, so [F3] gives $\mathbb E_\mu[W_{i,t}R_{t+1}^i]=\mathbb E_\pi[R_{t+1}]$. Multiplying each equality by the fixed $\gamma^t$ and summing the finite range $0\le t<H$, [F4] yields $\mathbb E_\mu[\sum_{t=0}^{H-1}\gamma^tW_{i,t}R_{t+1}^i]=J_H(\pi;s_0)$. [given, F1, F2, F3, F4, step 2.1, algebra]

4.1 Each of the $n$ PDIS trajectory scores in [F2] has expectation $J_H(\pi;s_0)$ by step 3.2. Their finite sample average has the same expectation by [F4], proving $\mathbb E_\mu[\widehat J_{\mathrm{PDIS}}]=J_H(\pi;s_0)$. Step 3.1 proves the ordinary-estimator claim. [step 2.1, step 3.1, step 3.2, F2, F4, algebra] ∎
