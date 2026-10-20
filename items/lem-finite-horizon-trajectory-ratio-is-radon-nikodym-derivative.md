---
id: lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative
kind: lemma
title: "Finite-horizon policy ratios are trajectory Radon-Nikodym derivatives"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-axiom-of-choice
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-offline-reinforcement-learning-dataset
  - def-radon-nikodym-derivative
  - lem-finite-mdp-policy-action-state-reward-path-law
  - thm-chain-rule-for-radon-nikodym-derivatives
  - thm-integration-against-a-density
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§5.5, printed pp. 128–129; equation (5.3), trajectory probability ratios."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.2.2, PDF pp. 2–3; finite-horizon trajectory and step-wise importance-sampling estimators."
---

## Statement

Assume AC and the finite-horizon dataset conditions of the preceding definition, with full horizon coverage $P^\pi_H\ll P^\mu_H$. For $0\le t<H$, let $\Omega_{t+1}$ be the finite set of trajectory prefixes through $(R_{t+1},S_{t+1})$, and let $P^\sigma_{t+1}$ be the marginal law of this prefix under policy $\sigma\in\{\pi,\mu\}$. On a behavior-positive prefix define

$$W_{0:t}=\prod_{k=0}^{t}\frac{\pi(A_k\mid S_k)}{\mu(A_k\mid S_k)},$$

and set $W_{0:t}=0$ on behavior-null prefixes. Then $P^\pi_{t+1}\ll P^\mu_{t+1}$, and $W_{0:t}$ is a version of $dP^\pi_{t+1}/dP^\mu_{t+1}$ up to $P^\mu_{t+1}$-almost-everywhere equality. In particular, for every real $G$ integrable under $P^\pi_H$, the full-horizon weight $W_{0:H-1}$ satisfies

$$\mathbb E_{P^\mu_H}[W_{0:H-1}G]=\mathbb E_{P^\pi_H}[G],\qquad \mathbb E_{P^\mu_H}[W_{0:H-1}|G|]<\infty.$$

The same identity holds prefixwise: for each $0\le t<H$ and every real $g$ integrable under $P^\pi_{t+1}$, with $g$ evaluated on the observed prefix,

$$\mathbb E_{P^\mu_H}[W_{0:t}g]=\mathbb E_{P^\pi_H}[g],\qquad \mathbb E_{P^\mu_H}[W_{0:t}|g|]<\infty.$$

## Statement references

[[def-offline-reinforcement-learning-dataset|Finite MDP, fixed-start trajectory law, target value, behavior propensities, and full trajectory coverage.]]

[[lem-finite-mdp-policy-action-state-reward-path-law|Under AC, a stationary policy has finite-prefix atom masses formed from its action probabilities and the shared joint transition/reward law.]]

[[def-absolutely-continuous-with-respect-to-a-positive-measure|Absolute continuity transfers null sets from the behavior measure to the target measure.]]

[[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality|Under AC, a sigma-finite signed measure absolutely continuous with respect to a sigma-finite positive measure has a unique almost-everywhere density.]]

[[def-radon-nikodym-derivative|The Radon-Nikodym derivative is the almost-everywhere class of densities.]]

[[thm-chain-rule-for-radon-nikodym-derivatives]]: For sigma-finite measures on a common finite exhaustion, the derivative of $\nu\ll\mu\ll\lambda$ factors as the product of the two derivatives.

[[thm-integration-against-a-density|Integrating a nonnegative function against a density measure equals integrating its product against the base measure.]]

[[def-integrable-real-and-complex-functions-and-their-integrals|A real function is integrable exactly when its absolute value has finite integral.]]

[[thm-linearity-of-the-lebesgue-integral-on-l-one|The Lebesgue integral is linear on integrable real and complex functions.]]

[Sutton and Barto, Reinforcement Learning: An Introduction, 2nd ed.](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf)

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

## Facts & Assumptions

**Given:** AC, a finite MDP with fixed initial state $s_0$, finite horizon $H$, stationary policies $\pi,\mu$, their induced laws $P^\pi_H,P^\mu_H$, full horizon coverage $P^\pi_H\ll P^\mu_H$, and integrable $G$.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function; the finite-MDP path-law supplier and the RN density and chain-rule suppliers assume it.

[F1] [[def-offline-reinforcement-learning-dataset]]: for each policy $\sigma$, a feasible length-$H$ trajectory atom has mass $\prod_{k=0}^{H-1}\sigma(a_k\mid s_k)p(s_{k+1},r_{k+1}\mid s_k,a_k)$; the initial state and transition/reward law are the same for $\pi$ and $\mu$.

[F2] [[lem-finite-mdp-policy-action-state-reward-path-law]]: under AC, a finite MDP and stationary policy have the finite-prefix probabilities given by the same product formula.

[F3] [[def-absolutely-continuous-with-respect-to-a-positive-measure]]: $P^\pi_H\ll P^\mu_H$ means every $P^\mu_H$-null measurable set is $P^\pi_H$-null.

[F4] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: under AC, a signed measure $\nu\ll\lambda$ with sigma-finite common finite exhaustion has a measurable density unique up to $\lambda$-almost-everywhere equality; if $|\nu|$ is finite, the density is integrable.

[F5] [[def-radon-nikodym-derivative]]: $d\nu/d\lambda$ is the almost-everywhere class of functions representing $\nu$ by measurable-set integrals.

[F6] [[thm-chain-rule-for-radon-nikodym-derivatives]]: under AC and the common finite-exhaustion hypotheses, $\nu\ll\mu\ll\lambda$ implies $d\nu/d\lambda=(d\nu/d\mu)(d\mu/d\lambda)$ $\lambda$-almost everywhere.

[F7] [[thm-integration-against-a-density]]: for nonnegative measurable $f,g$, $\int g\,d(f\,d\mu)=\int gf\,d\mu$ on any measure space.

[F8] [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: real integrable functions have finite positive and negative integrals, and their integrals are linear.

## Proof

**Given:** The hypotheses and conventions in the Statement.

1.1 For a complete trajectory atom $\tau=(s_0,a_0,r_1,\ldots,a_{H-1},r_H,s_H)$, [F1] gives $P^\sigma_H(\{\tau\})=\prod_{k=0}^{H-1}\sigma(a_k\mid s_k)p(s_{k+1},r_{k+1}\mid s_k,a_k)$. If this atom has positive target mass, coverage makes its behavior mass positive. The initial state and every transition/reward factor are common, so on every behavior-positive atom the quotient $P^\pi_H(\{\tau\})/P^\mu_H(\{\tau\})$ is exactly $\prod_{k=0}^{H-1}\pi(a_k\mid s_k)/\mu(a_k\mid s_k)$; if the target mass is zero, this quotient is zero. [given, F1, F3, algebra]

2.1 Fix $t<H$ and project the full trajectory law onto $\Omega_{t+1}$. If a prefix set is behavior-null, its inverse image in $\Omega_H$ is behavior-null; full coverage makes that inverse image target-null, so $P^\pi_{t+1}\ll P^\mu_{t+1}$. The prefix space is finite. Let $\lambda_{t+1}$ be counting measure on it; $P^\mu_{t+1}\ll\lambda_{t+1}$, and the whole prefix space is a common finite exhaustion for $\lambda_{t+1}$, $P^\mu_{t+1}$, and $P^\pi_{t+1}$. By [A1], [F4]–[F6] give the RN density classes and their chain rule. On each behavior-positive prefix, [F1]–[F2] give the atom-mass quotient by cancelling the common initial and transition/reward factors, leaving $\prod_{k=0}^{t}\pi(A_k\mid S_k)/\mu(A_k\mid S_k)$. Thus $W_{0:t}=dP^\pi_{t+1}/dP^\mu_{t+1}$ almost everywhere. [given, A1, F1, F2, F3, F4, F5, F6, step 1.1, construct]

3.1 Fix $t<H$ and a real $g$ integrable under $P^\pi_{t+1}$. Step 2.1 supplies the prefix density $W_{0:t}$. Applying [F7] to $g^+$ and $g^-$ gives $\mathbb E_{P^\mu_H}[W_{0:t}|g|]=\mathbb E_{P^\pi_{t+1}}|g|<\infty$ and equality of the two weighted integrals for each part. Subtracting the finite positive and negative integrals by [F8] proves the prefix expectation identity. Taking $t=H-1$ and $g=G$ gives the full-horizon assertion. [given, F7, F8, step 2.1, algebra] ∎
