---
id: thm-partial-homogeneous-projected-limit-is-global-minimizer
kind: theorem
title: A partially homogeneous signed projection limit is a minimizer
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, lem-partial-homogeneous-projection-limit-is-stationary, lem-partial-relaxed-objective-signwise-optimality, lem-partial-homogeneous-escape-from-nonoptimal-projection, lem-partial-negative-weight-crossing-time, lem-flow-preserves-box-separation, lem-mean-field-projection-identities, thm-global-wasserstein-flow-existence-uniqueness-and-stability, def-axiom-of-choice]
justified_by: []
proof_strategy: contradiction
axiom_use: "AC is inherited from the flow, characteristic and boundary-degree constructions; the finite-mass comparison is choice-free."
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

Assume AC and the full partially one-homogeneous hypotheses on $\Omega=\mathbb R\times\Theta$: $\Phi(w,\theta)=w\varphi(\theta)$, $V(w,\theta)=|w|\widetilde V(\theta)$, convex differentiable risk with the prescribed derivative bounds, and the dense-regular-value condition. Retain both boundary cases: either bounded closed convex $\Theta$ with the Neumann condition for every relevant $G_f$, or $\Theta=\mathbb R^{d-1}$ with the uniform $C^1$-at-infinity condition. Let $\mu_t$ be a Wasserstein gradient flow whose initial support is contained in $[-r_0,r_0]\times\Theta$ and separates the faces $\{-r_0\}\times\Theta$ and $\{r_0\}\times\Theta$. If $h^1(\mu_t)$ converges weakly as finite signed measures to $\nu$, the retained projected-limit claim is that $\nu$ globally minimizes the relaxed objective $J$ and $F(\mu_t)\to J(\nu)=\inf_\lambda J(\lambda)=\inf_{\mu\ge0}F(\mu)$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[def-partial-homogeneous-relaxed-objective]]

[[lem-partial-homogeneous-projection-limit-is-stationary]]

[[lem-partial-homogeneous-escape-from-nonoptimal-projection]]

[[lem-flow-preserves-box-separation]]

[Chizat and Bach, Theorem 3.5 and Theorem C.17](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Theorem 11.2.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the partial flow and separated initialization, signed-projection convergence, and the suppliers below.

[F1] The relaxed objective is the infimum of the lifted feature energy over all nonnegative lifts with a given signed projection; its minimizing lift is the Jordan-sign lift at $w=\pm1$. [[def-partial-homogeneous-relaxed-objective]]

[F2] The intended stationarity conclusion identifies $G_+=0$ on $\nu^+$ and $G_-=0$ on $\nu^-$. [[lem-partial-homogeneous-projection-limit-is-stationary]]

[F3] Nonnegative signwise first variations, together with those stationarity equalities, suffice for $\nu$ to minimize $J$. [[lem-partial-relaxed-objective-signwise-optimality]]

[F4] The intended escape lemma forces a flow with positive mass in an unfavorable sign cone to leave a bounded-Lipschitz neighborhood of a nonoptimal projection. [[lem-partial-homogeneous-escape-from-nonoptimal-projection]]

[F5] The box-separation lemma preserves intersection of every vertical line with the evolving support in both boundary branches. [[lem-flow-preserves-box-separation]]

[F6] Signed weak convergence factors the feature integral through $\nu$, but does not determine the penalty $\int|w|\widetilde Vd\mu_t$ from $h^1(\mu_t)$. [[lem-mean-field-projection-identities]]

## Proof

**Given:** AC, the flow, and [F1]–[F5].

1.1 If $\nu$ were not a minimizer of $J$, [F2] and [F3] imply that at least one of $G_+,G_-$ is negative somewhere: if both were nonnegative everywhere, [F2] supplies the almost-everywhere equalities and [F3] would make $\nu$ a minimizer. The dense-regular-value hypothesis then gives the negative regular sublevel required by [F4]. [F2, F3, F4, given]

2.1 Weak convergence of $h^1(\mu_t)$ makes all sufficiently late projections remain in the escape neighborhood. For an interior direction of the negative sublevel, [F5] gives a support point on the vertical line. The sign-sensitive crossing and escape in [F4] would then force a later exit from that neighborhood, a contradiction. The derivation of this crossing from the actual two sign-dependent angular equations is unresolved in [F4], so this step is not established. [F4, F5, step 1.1]

3.1 Even if the preceding contradiction established $J(\nu)=\inf J$, the energy identity [F1] only gives $F(\mu_t)\ge J(h^1(\mu_t))$. Weak convergence controls the feature term but not the penalty term by [F6]. For example, at one fixed $\theta$, $\delta_{(1,\theta)}$ and $2\delta_{(1,\theta)}+\delta_{(-1,\theta)}$ have the same $h^1=\delta_\theta$ and, when $\widetilde V(\theta)=1$, penalties $1$ and $3$. An additional dynamical argument proving convergence of the penalty is required to infer $F(\mu_t)\to J(\nu)$. [F1, F6, step 2.1]

## Escalation

The full source claim is retained, but its proof is not complete. Required missing results are (i) the sign-specific negative-weight crossing estimate from $G_+$ or $G_-$ under the actual equations and (ii) a dynamical penalty-convergence theorem. Weak signed $h^1$ convergence alone cannot supply (ii); the explicit equal-projection, unequal-penalty lifts above refute that continuity inference. The exact dependency blockers are `lem-partial-homogeneous-projection-limit-is-stationary` and `lem-partial-homogeneous-escape-from-nonoptimal-projection`.
