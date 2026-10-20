---
id: lem-partial-homogeneous-projection-limit-is-stationary
kind: lemma
title: Stationarity of a partially homogeneous signed projection limit
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 12
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, lem-mean-field-projection-identities, def-axiom-of-choice, thm-global-wasserstein-flow-existence-uniqueness-and-stability, thm-jordan-decomposition-for-signed-measures]
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

Assume AC, a separable real Hilbert space $\mathcal H$, and the feature-energy hypotheses: $R$ is convex and differentiable with locally Lipschitz differential bounded on sublevels, $\Phi$ is Fr\acute{e}chet differentiable, $V$ is semiconvex, and the nested cutoff sets and derivative-growth bounds in the feature-energy definition hold. Let $d\ge2$, $\Theta\subseteq\mathbb R^{d-1}$, $\varphi:\Theta\to\mathcal H$ be bounded and continuously differentiable with Lipschitz differential, and $\widetilde V:\Theta\to[0,\infty)$ be bounded and continuously differentiable with Lipschitz differential; set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. Require dense regular values for every relevant $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every relevant $f$, or (ii) $\Theta=\mathbb R^{d-1}$ and each $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ to a limit with dense regular values as $r\to\infty$. Write $\Phi(w,\theta)=w\varphi(\theta)$, $V(w,\theta)=|w|\widetilde V(\theta)$, and let $\mu_t$ be a Wasserstein gradient flow. Suppose the finite signed measures $h^1(\mu_t)$ converge weakly on $\Theta$ to a finite signed measure $\nu$. Define $m_\nu:=\int\varphi d\nu$ by the signed Bochner-integral convention for the relaxed objective. Put $a_\nu(\theta)=dR_{m_\nu}[\varphi(\theta)]$, $G_+(\theta)=a_\nu(\theta)+\widetilde V(\theta)$, and $G_-(\theta)=-a_\nu(\theta)+\widetilde V(\theta)$. The intended stationarity conclusion is $G_+=0$ for $\nu^+$-almost every point and $G_-=0$ for $\nu^-$-almost every point, where $\nu=\nu^+-\nu^-$ is the Jordan decomposition. This is the sign-correct formulation of stationarity for the reduced functional $J(\nu)=R(\int\varphi\,d\nu)+\int\widetilde V\,d|\nu|$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[def-partial-homogeneous-relaxed-objective]]

[[lem-mean-field-projection-identities]]

[Chizat and Bach, Lemma C.6 and Appendix A.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the flow, the signed projection, and weak convergence in the Statement.

[A1] AC supplies the Wasserstein flow, characteristic representation and minimum-norm selection, and the canonical Jordan decomposition of the finite signed projection. [[def-axiom-of-choice]] [[thm-jordan-decomposition-for-signed-measures]]

[F1] For every $z\in\mathcal H$, $\langle z,m_{\mu_t}\rangle=\int\langle z,\varphi(\theta)\rangle dh^1(\mu_t)$, using the scalar pairing from the projection definition. [[lem-mean-field-projection-identities]]

[F2] If $\alpha_t,\beta_t$ are the raw positive- and negative-weight measures in the definition of $h^1(\mu_t)$, then $h^1(\mu_t)=\alpha_t-\beta_t$; its Jordan parts exist by [A1] and are computed after cancellation, so they need not equal $\alpha_t,\beta_t$. [[def-partial-one-homogeneous-measure-projection]] [[thm-jordan-decomposition-for-signed-measures]]

[F3] On finite horizons the flow obeys energy dissipation, with action $\int|v_t|^2d\mu_t$ and nonincreasing nonnegative energy. [[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

## Proof

**Given:** AC, the flow and projection limits in the Statement, and [F1]–[F3].

1.1 By [F1], weak convergence of $h^1(\mu_t)$ against bounded continuous tests gives convergence of the feature moments after testing against every continuous scalar evaluation $\theta\mapsto\langle z,\varphi(\theta)\rangle$, $z\in\mathcal H$. Thus $m_{\mu_t}$ converges weakly in $\mathcal H$ to $m_\nu$. This scalar-pairing convergence does not by itself give norm convergence in an infinite-dimensional Hilbert space. [F1, given]

2.1 By [F3] and the lower bound $F\ge0$, the time integral of the squared velocity action is finite. This controls velocities in $L^2(dt\,d\mu_t)$ but does not identify their pointwise values on the positive and negative $w$ parts from the signed projection alone. [A1, F2, F3, given]

3.1 To conclude the Statement one still needs either (i) weak convergence and the required dissipation identity separately for $h^1(\mu_t)^+$ and $h^1(\mu_t)^-$, or (ii) a proved closed-subgradient argument that identifies the sign-dependent minimum-norm velocity from weak convergence of their difference. Neither conclusion follows from [F1]–[F3]: the two Jordan parts can vary while their difference is fixed, and the action is integrated against $\mu_t$, not against $|w|\mu_t$. The exact supplier/proof obligation is therefore unresolved; no stationarity conclusion is asserted by these steps. [A1, F1, F2, F3, step 1.1, step 2.1]

## Escalation

Chizat–Bach Lemma C.6 claims this conclusion from weak convergence of the signed $h^1$ projection and uniform convergence of a velocity field on $\{1\}\times\Theta$. Its displayed argument does not show that the energy action $\int|v_t|^2d\mu_t$ is represented by that signed projection; negative weights and the $|w|\widetilde V$ term require separate positive and negative parts. The exact gap is whether signed weak convergence plus the actual flow dynamics suffices to force $G_+=0$ on $\nu^+$ and $G_-=0$ on $\nu^-$. The partial projected-limit theorem and its energy-convergence claim depend on this item. [Chizat and Bach, Lemma C.6, Appendix C.4.2](https://arxiv.org/pdf/1805.09545)
