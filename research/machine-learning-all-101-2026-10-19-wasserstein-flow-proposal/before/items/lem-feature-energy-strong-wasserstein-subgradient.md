---
id: lem-feature-energy-strong-wasserstein-subgradient
kind: lemma
title: The selected pointwise field is a strong Wasserstein subgradient
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-localized-hilbert-lift, lem-lifted-energy-lipschitz-gradient, lem-localized-lift-subdifferential, def-generalized-wasserstein-geodesic-and-strong-subgradient, thm-continuity-equation-implies-ac2, thm-ac2-curve-admits-minimal-velocity, def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, thm-bochner-dominated-convergence]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the minimum pointwise selection and the optimal-plan and Bochner branches; the subgradient inequality is valid for every coupling."
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

Assume AC and the feature-measure energy hypotheses. Fix $r>0$ and $\mu\in\mathcal P_2(\Omega)$ concentrated on $Q_r$. Define $g_\mu(u)=d\Phi_u^*\nabla R(\int\Phi\,d\mu)+\zeta_\mu(u)$, where $\zeta_\mu(u)$ is the minimum-norm element of $\partial_{\lambda_V}(V+\iota_{Q_r})(u)$. For every $\eta\in\mathcal P_2(\Omega)$ concentrated on $Q_r$ and every coupling $\gamma$ of $\mu$ and $\eta$,
$$F(\eta)\ge F(\mu)+\int g_\mu(x)\cdot(y-x)d\gamma(x,y)+\frac{\lambda_V-C_r}{2}\int|y-x|^2d\gamma(x,y),\qquad C_r=L_rA_r^2+N_rB_r.$$
In particular, $g_\mu$ is a strong Wasserstein subgradient in the all-coupling sense, with zero remainder after the stated quadratic term.

## Statement references

[[def-feature-measure-energy]]

[[lem-lifted-energy-lipschitz-gradient]]

[[lem-localized-lift-subdifferential]]

[[def-generalized-wasserstein-geodesic-and-strong-subgradient]]

[Chizat and Bach, Lemma B.2](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Proposition 10.4.2](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, $r$, $\mu,\eta$, and a coupling $\gamma$ as in the Statement.

[F1] The localized lifted energy has semiconvexity coefficient $\lambda_V-C_r$. [[lem-lifted-energy-lipschitz-gradient]]

[F2] The localized lifted subdifferential equals the smooth feature gradient plus the pointwise constrained potential subdifferential, and its minimum section is measurable. [[lem-localized-lift-subdifferential]]

[F3] The first marginal of a coupling is $\mu$ and the second is $\eta$. [[def-wasserstein-two-space-and-couplings]]

[F4] AC supplies the minimum section and Bochner integrability used to identify the lifted inner product with the coupling integral. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]] [[thm-bochner-dominated-convergence]]

## Proof


**Given:** AC and the data above.

1.1 On $(\mathbb R^d\times\mathbb R^d,\gamma)$, set $X(x,y)=x$ and $Y(x,y)=y$. These are admissible lifts because both marginals are concentrated on $Q_r$. Their laws are $\mu$ and $\eta$ by [F3], so their lifted energies are $F(\mu)$ and $F(\eta)$. The pointwise minimum section and smooth gradient in [F2] give the lifted subgradient $s(x,y)=g_\mu(x)\in L^2(\gamma;\mathbb R^d)$. [F2, F3, F4, construct]

2.1 Apply the semiconvex subgradient inequality [F1] to the two lifts. The Hilbert inner product is $\int g_\mu(x)\cdot(y-x)d\gamma$ and the squared displacement norm is $\int|y-x|^2d\gamma$. Substitution gives exactly the asserted inequality for this coupling. Since $\gamma$ was arbitrary, it holds for every coupling and proves the strong-subgradient claim. [F1, step 1.1] ∎