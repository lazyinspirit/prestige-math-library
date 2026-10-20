---
id: thm-finite-particle-flows-converge-in-w2
kind: theorem
title: Finite-particle flows converge to the measure-valued flow in W2
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, thm-global-wasserstein-flow-existence-uniqueness-and-stability, thm-localized-wasserstein-flow, def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, prop-existence-and-lower-semicontinuity-of-optimal-couplings, def-axiom-of-choice, def-localized-hilbert-lift, lem-feature-flow-escape-bound, lem-characteristics-unique-and-stable]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the measure-valued and localized flows and supplies optimal W2 couplings; the atomic lift itself uses only a finite sum."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC and the full feature-measure energy hypotheses. Let $\mu_0\in\mathcal P_2(\Omega)$ be concentrated on a common $Q_{r_0}$, and let $\mu_{m,0}=m^{-1}\sum_{i=1}^m\delta_{x_i^{(m)}(0)}$ be empirical laws with every particle in $Q_{r_0}$ and $W_2(\mu_{m,0},\mu_0)\to0$. Define $F_m(x_1,\ldots,x_m)=F(m^{-1}\sum_i\delta_{x_i})$. Here $\partial F_m(x)$ is the Euclidean Fréchet subdifferential: $p\in\partial F_m(x)$ when $F_m(y)\ge F_m(x)+p\cdot(y-x)+o(\|y-x\|)$ as $y\to x$ in $\Omega^m$, with the remainder divided by $\|y-x\|$ tending to zero. A classical particle subgradient flow is a locally absolutely continuous vector $x^{(m)}(t)\in\Omega^m$ satisfying $\dot x^{(m)}(t)\in-m\partial F_m(x^{(m)}(t))$ almost everywhere, under the inner product $m^{-1}\sum_i x_i\cdot y_i$. Let $x_i^{(m)}(t)$ be such flows and put $\mu_{m,t}=m^{-1}\sum_i\delta_{x_i^{(m)}(t)}$. If $\mu_t$ is the unique global measure-valued flow from $\mu_0$, then for every $T<\infty$ there is a finite constant $K_T$ independent of $m$ such that
$$\sup_{0\le t\le T}W_2(\mu_{m,t},\mu_t)\le e^{K_TT}W_2(\mu_{m,0},\mu_0)\longrightarrow0.$$
This is a deterministic continuity estimate in the initial W2 error; it asserts no statistical rate for random initial particles and no conclusion for stochastic gradient descent.

## Statement references

[[def-feature-measure-energy]]

[[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[[thm-localized-wasserstein-flow]]

[[def-wasserstein-two-space-and-couplings]]

[Chizat and Bach, Theorem 2.6 and Appendix B.3](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Giuseppe Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, $\mu_0$, the empirical initial laws, and their particle flows.

[F1] On an atomic probability label space with mass $1/m$ per label, the Hilbert inner product is $m^{-1}\sum_i x_i\cdot y_i$ and the lifted energy is exactly $F_m$. [[def-localized-hilbert-lift]] [[def-feature-measure-energy]]

[F2] The localized flow equation on this atomic label space is the particle subgradient equation with the stated normalization. [[thm-localized-wasserstein-flow]]

[F3] Initial laws supported on a common $Q_{r_0}$ have a common energy bound under the stated boundedness assumptions, so the escape lemma supplies one cutoff radius for both flows on $[0,T]$. [[def-feature-measure-energy]] [[lem-feature-flow-escape-bound]]

[F4] Localized flows with the same model velocity satisfy the stability estimate $W_2(\mu_t,\nu_t)\le e^{K_Tt}W_2(\mu_0,\nu_0)$. [[lem-characteristics-unique-and-stable]]

[F5] AC supplies the flow and optimal coupling constructions. [[def-axiom-of-choice]] [[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

## Proof


**Given:** AC and the hypotheses in the Statement.

1.1 Put the finite labels on the probability space $\{1,\ldots,m\}$ with mass $1/m$. Then $K=L^2(\{1,\ldots,m\};\mathbb R^d)$ has inner product $m^{-1}\sum_i x_i\cdot y_i$, and its lifted energy is $F(m^{-1}\sum_i\delta_{x_i})=F_m$ by [F1]. The Hilbert gradient-flow equation of [F2] is therefore exactly the particle subgradient flow, including the factor $m^{-1}$ in the metric; its pushforward is $\mu_{m,t}$. [F1, F2, construct]

2.1 By [F3], for each fixed $T$ both the particle flows and the measure flow remain inside a common larger cutoff $Q_R$ and solve the same localized equation. Apply [F4] on that cutoff to get $W_2(\mu_{m,t},\mu_t)\le e^{K_Tt}W_2(\mu_{m,0},\mu_0)$ for $0\le t\le T$. Since $e^{K_Tt}\le e^{K_TT}$ when $K_T\ge0$ (replace it by $\max(K_T,0)$ otherwise), taking the supremum and using the assumed initial convergence proves the result. [F3, F4, F5, step 1.1] ∎