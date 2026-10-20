---
id: lem-localized-lift-generates-continuity-equation
kind: lemma
title: The Hilbert lift induces the localized Wasserstein continuity equation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-localized-hilbert-lift, thm-semiconvex-hilbert-gradient-flow, lem-lifted-energy-lipschitz-gradient, lem-localized-lift-subdifferential, def-wasserstein-gradient-flow-for-feature-energy, lem-feature-energy-strong-wasserstein-subgradient, thm-superposition-for-finite-action-continuity-equations, thm-continuity-equation-implies-ac2, thm-ac2-curve-admits-minimal-velocity, def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, thm-bounded-linear-maps-commute-with-bochner-integration, thm-change-of-variables-for-expectation, def-axiom-of-choice, lem-hilbert-valued-path-energy-characterization]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the Hilbert gradient-flow and Bochner path representatives; it is inherited by the Wasserstein action interface."
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

Assume AC and the feature-measure energy hypotheses. Let $\mu_0\in\mathcal P_2(\Omega)$ have finite energy and be concentrated on $Q_r$, and let $X:[0,\infty)\to K=L^2(\mu_0;\mathbb R^d)$ be the Hilbert gradient flow of the localized lift $E_r$ from $X(0,s)=s$. Define $\mu_t=(X(t,\cdot))_\#\mu_0$, $m_t=\int\Phi(X(t,s))d\mu_0(s)$, and
$$v_t(u)=-d\Phi_u^*\nabla R(m_t)-\zeta_r(u),$$
where $\zeta_r(u)$ is the minimum-norm element of $\partial_{\lambda_V}(V+\iota_{Q_r})(u)$. Then $v$ is Borel, $\int_0^T\int|v_t|^2d\mu_tdt<\infty$ for each $T<\infty$, and $\partial_t\mu_t+\nabla\cdot(v_t\mu_t)=0$ in distributions on $(0,T)\times\mathbb R^d$. The curve $\mu_t$ is in $AC^2([0,T];\mathcal P_2(\mathbb R^d),W_2)$, and $v$ is the minimum-action velocity, satisfying $\int_0^T\int|v_t|^2d\mu_tdt=\int_0^T|\dot\mu_t|_{W_2}^2dt$.

## Statement references

[[def-feature-measure-energy]]

[[def-localized-hilbert-lift]]

[[thm-semiconvex-hilbert-gradient-flow]]

[[lem-localized-lift-subdifferential]]

[[def-continuity-equation-with-finite-action]]

[Chizat and Bach, Proposition 2.5 and Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Theorem 8.3.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the localized lift, the initial law, and its Hilbert gradient flow.

[F1] The Hilbert flow is locally absolutely continuous, has a Bochner derivative, and its derivative is the negative Hilbert subgradient almost everywhere. [[thm-semiconvex-hilbert-gradient-flow]]

[F2] The Hilbert subdifferential is the smooth feature gradient plus the measurable pointwise constrained potential subgradient. [[lem-localized-lift-subdifferential]]

[F3] Bochner paths have strongly measurable representatives and their integrals commute with bounded linear functionals. [[lem-hilbert-valued-path-energy-characterization]] [[thm-bounded-linear-maps-commute-with-bochner-integration]]

[F4] A curve satisfying the finite-action continuity equation is $W_2$-absolutely continuous with squared metric speed bounded by its action. [[thm-continuity-equation-implies-ac2]]

[F5] AC is the inherited axiom in the flow and transport suppliers. [[def-axiom-of-choice]]

## Proof


**Given:** AC and the data above.

1.1 Since $m_t$ is the image of $X_t$ under Bochner integration, [F3] and the Lipschitz bound on $\Phi$ show $t\mapsto m_t$ is continuous. The pointwise selection $\zeta_r$ is Borel by [F2]; all other factors in $v_t(u)$ are continuous in $t$ and Borel in $u$, so $v$ is Borel. By [F1] and [F2], a representative of the Hilbert derivative satisfies $\dot X(t,s)=v_t(X(t,s))$ for almost every $(t,s)$. Its squared integral is $\int_0^T\int|v_t(u)|^2d\mu_t(u)dt=\int_0^T\|\dot X(t)\|_K^2dt<\infty$. [F1, F2, F3, F5]

2.1 For $\varphi\in C_c^\infty((0,T)\times\mathbb R^d)$, the scalar chain rule along the almost-everywhere absolutely continuous label paths gives $\displaystyle \frac d{dt}\varphi(t,X(t,s))=\partial_t\varphi(t,X(t,s))+\nabla_x\varphi(t,X(t,s))\cdot v_t(X(t,s))$ for almost every $(t,s)$. The right side is integrable: the test derivatives are bounded, $\mu_t$ is a probability, and [F1] gives finite $L^1$ velocity action on $[0,T]$. Integrating in $s$ and $t$, Fubini and the vanishing of $\varphi$ near $t=0,T$ give the weak continuity-equation identity for $\mu_t$. [F1, step 1.1]

3.1 The coupling $(X(s),X(t))_\#\mu_0$ gives $W_2(\mu_s,\mu_t)^2\le\|X(s)-X(t)\|_K^2$. Cauchy–Schwarz in time and [F1] imply $W_2(\mu_s,\mu_t)\le\int_s^t\|\dot X(q)\|_K,dq$ for $s<t$. Thus $\mu\in AC^2$ on $[0,T]$. Alternatively [F4] applies to the continuity equation and the action bound from step 1.1. [F1, F4, step 1.1] ∎

## Unresolved proof obligation

Steps 1.1–2.2 prove the Borel field, continuity equation, finite action, and $AC^2$ curve. They do not prove that this model velocity is minimum-action among all continuity-equation velocities. That equality requires showing the selected pointwise field lies in the closure of spatial gradients modulo the domain normal cone; the pointwise subdifferential identity alone does not establish this orthogonality. The minimum-action assertion in the Statement remains escalated.
