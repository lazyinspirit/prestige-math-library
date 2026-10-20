---
id: lem-characteristics-unique-and-stable
kind: lemma
title: One-sided semiconvex characteristics give W2 uniqueness and stability
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-wasserstein-gradient-flow-for-feature-energy, lem-localized-lift-subdifferential, thm-superposition-for-finite-action-continuity-equations, def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, thm-disintegration-of-a-joint-law-on-standard-borel-spaces, def-standard-borel-space, lem-finite-products-of-standard-borel-spaces-are-standard-borel, def-measure-kernel-and-probability-kernel, thm-measurability-of-integration-against-a-kernel, def-product-measure-on-sigma-finite-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, def-axiom-of-choice, def-feature-measure-energy]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the path superposition and the joint coupling of two path laws conditional on their initial points; disintegration uses full AC."
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

Assume AC and the feature-measure energy hypotheses. Fix $r>0$ and a closed convex constraint $D\subseteq\Omega$. For every continuous moment path $m:[0,T]\to\mathcal H$, the nonautonomous inclusion
$$\dot X(t)\in-\partial_{\lambda_V}(V+\iota_D)(X(t))-d\Phi_{X(t)}^*\nabla R(m(t))$$
has a unique forward solution from each $X(0)\in D\cap Q_r$; its characteristic map is jointly continuous in $(t,X(0))$ and locally Lipschitz in the initial point on each $Q_r$. Let $\mu_t$ and $\nu_t$ be two finite-action solutions on $[0,T]$ of the continuity equation with laws concentrated on $D\cap Q_r$ and velocities
$$v_t^\mu(x)=-d\Phi_x^*\nabla R(m_{\mu_t})-\zeta_D(x),\qquad v_t^\nu(y)=-d\Phi_y^*\nabla R(m_{\nu_t})-\zeta_D(y),$$
where $m_\alpha=\int\Phi\,d\alpha$ and $\zeta_D(x)$ is the same Borel minimum-norm selection from $\partial_{\lambda_V}(V+\iota_D)(x)$ in both equations. Then for all $t\in[0,T]$,
$$W_2(\mu_t,\nu_t)\le e^{(C_r-\lambda_V)t}W_2(\mu_0,\nu_0),\qquad C_r=L_rA_r^2+N_rB_r.$$
In particular, the localized measure-valued flow is unique for each initial law. The estimate does not assume that $v_t$ is continuous in position.

## Statement references

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[lem-localized-lift-subdifferential]]

[[thm-superposition-for-finite-action-continuity-equations]]

[Chizat and Bach, Proposition 2.5 and Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Theorem 8.3.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the regularity data, and two localized continuity-equation solutions.

[F1] Each finite-action solution has a path law concentrated on absolutely continuous trajectories satisfying its velocity equation almost everywhere. [[thm-superposition-for-finite-action-continuity-equations]]

[F2] The path laws can be disintegrated conditional on their initial points and joined using any coupling of their initial marginals. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]] [[def-standard-borel-space]] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]] [[def-measure-kernel-and-probability-kernel]] [[thm-measurability-of-integration-against-a-kernel]]

[F3] The pointwise constrained subdifferential of $V+\iota_D$ is $\lambda_V$-monotone; the smooth feature gradient has the bounds $N_rB_r$ in position and $A_rL_r$ in feature moment. [[def-feature-measure-energy]]

[F4] AC supplies the superposition and disintegration constructions. [[def-axiom-of-choice]]

## Proof


**Given:** AC, the data, and two solutions as in the Statement.

1.1 Choose an optimal coupling $\gamma_0$ of $\mu_0,\nu_0$. By [F1], take path laws $\Pi_\mu,\Pi_\nu$ for the two solutions. Disintegrate each law conditional on its time-zero position, then combine the two kernels with $\gamma_0$ using [F2]. This gives a joint law of paths $(X,Y)$ with marginals $\Pi_\mu,\Pi_\nu$ and initial pair law $\gamma_0$. Set $D(t)=\mathbb E|X_t-Y_t|^2$. The path equations and the scalar chain rule show $D$ is absolutely continuous and $\displaystyle \frac12D'(t)=\mathbb E\langle X_t-Y_t,v_t^\mu(X_t)-v_t^\nu(Y_t)\rangle$ for almost every $t$. The product is integrable by Cauchy–Schwarz because both path actions and second moments are finite. [F1, F2, F4, construct]

2.1 Adding the two defining subgradient inequalities for $\zeta_D(x)$ and $\zeta_D(y)$ gives $\langle\zeta_D(x)-\zeta_D(y),x-y\rangle\ge\lambda_V|x-y|^2$. For the smooth terms, add and subtract $d\Phi_y^*\nabla R(m_{\mu_t})$: their difference has norm at most $N_rB_r|x-y|+A_rL_r|m_{\mu_t}-m_{\nu_t}|$. Along the joint law, $|m_{\mu_t}-m_{\nu_t}|\le A_r\mathbb E|X_t-Y_t|\le A_rD(t)^{1/2}$. Hence [F3] gives $\displaystyle \frac12D'(t)\le(C_r-\lambda_V)D(t).$ Multiplying by $e^{-2(C_r-\lambda_V)t}$ and differentiating proves $D(t)\le e^{2(C_r-\lambda_V)t}D(0)$. The time-$t$ path pair couples $\mu_t,\nu_t$, so $W_2^2(\mu_t,\nu_t)\le D(t)$; taking square roots and using optimality of $\gamma_0$ proves the stated estimate. If the initial laws agree, its right side is zero, proving uniqueness. [F1, F3, step 1.1] ∎

## Unresolved proof obligation

The coupling argument above proves law-level uniqueness and stability for finite-action PDE solutions. It does not yet prove existence of the nonautonomous characteristic map in the first paragraph. That requires the finite-dimensional time-dependent implicit-Euler construction for a semiconvex potential with continuous forcing, including uniform step bounds, convergence of interpolants, and passage of the limiting variational inequality. This is the exact G4 subclaim still escalated.
