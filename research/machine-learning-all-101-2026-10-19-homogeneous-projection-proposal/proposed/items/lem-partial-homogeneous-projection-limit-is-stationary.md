---
id: lem-partial-homogeneous-projection-limit-is-stationary
kind: lemma
title: Stationarity of a partially homogeneous signed projection limit
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, lem-mean-field-projection-identities, def-axiom-of-choice, thm-global-wasserstein-flow-existence-uniqueness-and-stability]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Wasserstein flow and its minimum-norm velocity selection."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC and the partially one-homogeneous feature-energy hypotheses on $\Omega=\mathbb R\times\Theta$, where $\Theta$ is bounded or equals $\mathbb R^{d-1}$. Write $\Phi(w,\theta)=w\varphi(\theta)$, $V(w,\theta)=|w|\widetilde V(\theta)$, and let $\mu_t$ be a Wasserstein gradient flow. Suppose the finite signed measures $h^1(\mu_t)$ converge weakly on $\Theta$ to a finite signed measure $\nu$. Put $a_\nu(\theta)=dR_{m_\nu}[\varphi(\theta)]$, $G_+(\theta)=a_\nu(\theta)+\widetilde V(\theta)$, and $G_-(\theta)=-a_\nu(\theta)+\widetilde V(\theta)$. The intended stationarity conclusion is $G_+=0$ for $\nu^+$-almost every point and $G_-=0$ for $\nu^-$-almost every point, where $\nu=\nu^+-\nu^-$ is the Jordan decomposition. This is the sign-correct formulation of stationarity for the reduced functional $J(\nu)=R(\int\varphi\,d\nu)+\int\widetilde V\,d|\nu|$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[lem-mean-field-projection-identities]]

[Chizat and Bach, Lemma C.6 and Appendix A.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the flow, the signed projection, and weak convergence in the Statement.

[F1] For bounded continuous $\varphi$, the feature moment factors through the signed projection: $m_{\mu_t}=\int\varphi\,dh^1(\mu_t)$. [[lem-mean-field-projection-identities]]

[F2] The Jordan parts $h^1(\mu_t)^+$ and $h^1(\mu_t)^-$ are finite nonnegative measures and $h^1(\mu_t)=h^1(\mu_t)^+-h^1(\mu_t)^-$. [[def-partial-one-homogeneous-measure-projection]]

[F3] On finite horizons the flow obeys energy dissipation, with action $\int|v_t|^2d\mu_t$ and nonincreasing nonnegative energy. [[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

## Proof

**Given:** AC, the flow and projection limits in the Statement, and [F1]–[F3].

1.1 By [F1], weak convergence of $h^1(\mu_t)$ against bounded continuous tests gives convergence of the feature moments after testing against every continuous scalar evaluation of $\varphi$. This determines at most weak convergence of $m_{\mu_t}$ in $\mathcal H$; it does not by itself give norm convergence in an infinite-dimensional Hilbert space. The boundedness of $\varphi$ gives boundedness, but not relative compactness, of those moments. [F1, given]

2.1 By [F3] and the lower bound $F\ge0$, the time integral of the squared velocity action is finite. This controls velocities in $L^2(dt\,d\mu_t)$ but does not identify their pointwise values on the positive and negative $w$ parts from the signed projection alone. [F2, F3, given]

3.1 To conclude the Statement one still needs either (i) weak convergence and the required dissipation identity separately for $h^1(\mu_t)^+$ and $h^1(\mu_t)^-$, or (ii) a proved closed-subgradient argument that identifies the sign-dependent minimum-norm velocity from weak convergence of their difference. Neither conclusion follows from [F1]–[F3]: the nonnegative lift measures $\alpha_t=(\pi_\Theta)_\#(w_+\mu_t)$ and $\beta_t=(\pi_\Theta)_\#(w_-\mu_t)$ can vary while their difference is fixed; they need not be the Jordan parts of that difference. The action is integrated against $\mu_t$, not against $|w|\mu_t$. The exact supplier/proof obligation is therefore unresolved; no stationarity conclusion is asserted by these steps. [F1, F2, F3, step 1.1, step 2.1]

## Escalation

Chizat–Bach Lemma C.6 claims this conclusion from weak convergence of the signed $h^1$ projection and uniform convergence of a velocity field on $\{1\}\times\Theta$. Its displayed argument does not show that the energy action $\int|v_t|^2d\mu_t$ is represented by that signed projection; negative weights and the $|w|\widetilde V$ term require separate positive and negative parts. The exact gap is whether signed weak convergence plus the actual flow dynamics suffices to force $G_+=0$ on $\nu^+$ and $G_-=0$ on $\nu^-$. The partial projected-limit theorem and its energy-convergence claim depend on this item. [Chizat and Bach, Lemma C.6, Appendix C.4.2](https://arxiv.org/pdf/1805.09545)
