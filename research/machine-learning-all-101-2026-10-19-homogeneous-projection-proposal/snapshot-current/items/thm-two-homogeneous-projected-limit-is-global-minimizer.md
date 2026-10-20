---
id: thm-two-homogeneous-projected-limit-is-global-minimizer
kind: theorem
title: A separating two-homogeneous flow has globally minimizing projection limits
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-two-homogeneous-measure-projection, lem-mean-field-projection-identities, lem-mean-field-first-variation-and-measure-optimality, lem-two-homogeneous-projection-limit-is-stationary, lem-two-homogeneous-escape-from-nonoptimal-projection, lem-flow-preserves-spherical-separation, thm-global-wasserstein-flow-existence-uniqueness-and-stability, def-axiom-of-choice, cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets]
justified_by: []
proof_strategy: contradiction
axiom_use: "AC is inherited from the flow, characteristic, degree, and minimum-norm constructions; the limiting contradiction itself uses no further choice."
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

Assume AC and the full two-homogeneous hypotheses on $\Omega=\mathbb R^d$, $d\ge2$: convex differentiable risk with the prescribed derivative bounds, positive two-homogeneity of $\Phi,V$, the dense-regular-value condition, and the feature-energy assumptions. Let $\mu_t$ be a Wasserstein gradient flow whose initial support is compact, lies in $B(0,r_b)$, and separates $r_a\mathbb S^{d-1}$ from $r_b\mathbb S^{d-1}$ for $0<r_a<r_b$. If $h^2(\mu_t)$ converges weakly as finite measures on $\mathbb S^{d-1}$ to $\nu$, then the measure $\nu$ viewed on $\mathbb R^d$ is a global minimizer of $F$ over finite nonnegative Borel measures, and $F(\mu_t)\to F(\nu)=\inf_{\lambda\ge0}F(\lambda)$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-two-homogeneous-measure-projection]]

[[lem-mean-field-first-variation-and-measure-optimality]]

[[lem-two-homogeneous-projection-limit-is-stationary]]

[[lem-two-homogeneous-escape-from-nonoptimal-projection]]

[[lem-flow-preserves-spherical-separation]]

[Chizat and Bach, Theorem 3.3 and Theorem C.16](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Theorem 11.2.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the two-homogeneous flow, its separated initial support, and weak convergence of its projections.

[F1] A weak two-homogeneous projection limit is stationary: $G_\nu=0$ $\nu$-almost everywhere. [[lem-two-homogeneous-projection-limit-is-stationary]]

[F2] If $\nu$ is not a minimizer, convexity and first-variation optimality give a direction where $G_\nu<0$; the regular-value hypothesis supplies the compact negative sublevel needed for escape. [[lem-mean-field-first-variation-and-measure-optimality]] [[lem-two-homogeneous-escape-from-nonoptimal-projection]]

[F3] Spherical separation is preserved for every finite time, and the support is the image of the initial support under the characteristic map. [[lem-flow-preserves-spherical-separation]]

[F4] In the nonoptimal case, positive mass in the negative cone forces the projection to exit every sufficiently small bounded-Lipschitz neighborhood of $\nu$. [[lem-two-homogeneous-escape-from-nonoptimal-projection]]

[F5] Weak convergence of $h^2(\mu_t)$ gives convergence of the feature moment in Hilbert norm and convergence of the regularizer integral. [[lem-mean-field-projection-identities]]

[F6] The bounded-Lipschitz unit ball on a compact metric space is relatively compact in the uniform norm, so weak convergence of finite measures with convergent masses implies bounded-Lipschitz convergence. [[cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets]]

## Proof

**Given:** AC, the flow and convergence in the Statement, and [F1]–[F5].

1.1 Suppose for contradiction that $\nu$ is not a global minimizer. By [F1] and [F2], $G_\nu$ vanishes $\nu$-almost everywhere but is negative at some sphere point. Choose a negative regular sublevel $K$ with that point in its interior, as in [F2]. [F1, F2, given]

2.1 Weak convergence on the compact sphere implies convergence of total masses by testing the constant function. The bounded-Lipschitz unit ball is equicontinuous and uniformly bounded; Arzelà–Ascoli [F6] gives a finite uniform $\delta$-net for it. Weak convergence controls each member of that finite net, and the convergent masses bound the error from replacing any test by its net representative. Letting $\delta\downarrow0$ proves bounded-Lipschitz convergence. Thus there is $t_0$ after which $\|h^2(\mu_t)-\nu\|_{BL}<\epsilon$, where $\epsilon$ is the escape radius from [F4]. By [F3], the support at $t_0$ separates some spheres $\rho_a\mathbb S^{d-1}$ and $\rho_b\mathbb S^{d-1}$ with $0<\rho_a<\rho_b$. For a point $\theta_0\in\operatorname{int}K$, the radial path $r\mapsto r\theta_0$ between these spheres must meet $\operatorname{spt}\mu_{t_0}$. That support point has positive radius and direction in $\operatorname{int}K$; every sufficiently small open neighborhood of it has positive $\mu_{t_0}$ mass, so the negative cone in [F4] has positive mass. [F3, F4, F6, given, step 1.1]

2.2 Applying [F4] at time $t_0$ gives $t_1>t_0$ with $\|h^2(\mu_{t_1})-\nu\|_{BL}\ge\epsilon$, contradicting the choice of $t_0$. Thus $\nu$ is a global minimizer. [F4, step 2.1]

3.1 By [F5], $F(\mu_t)\to F(\nu)$. Since $\nu$ is a minimizer over all finite nonnegative measures, $F(\nu)=\inf_{\lambda\ge0}F(\lambda)$. This proves both conclusions. [F5, step 2.2] ∎
