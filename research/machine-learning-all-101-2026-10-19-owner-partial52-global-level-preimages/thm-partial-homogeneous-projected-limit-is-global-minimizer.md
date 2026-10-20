---
id: thm-partial-homogeneous-projected-limit-is-global-minimizer
kind: theorem
title: A partially homogeneous signed projection limit is a minimizer
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, def-axiom-of-choice, lem-partial-homogeneous-projection-limit-is-stationary, lem-partial-relaxed-objective-signwise-optimality, lem-partial-homogeneous-escape-from-nonoptimal-projection, lem-flow-preserves-box-separation, lem-signed-narrow-convergence-controls-bochner-moments, lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses, lem-partial-homogeneous-negative-level-trapping, lem-partial-homogeneous-projection-limit-has-convergent-penalty, lem-characteristics-unique-and-stable, thm-global-wasserstein-flow-existence-uniqueness-and-stability]
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

Assume AC, a separable real Hilbert space $\mathcal H$, and the feature-energy hypotheses: $R$ is convex and differentiable with locally Lipschitz differential bounded on sublevels, $\Phi$ is Fr\acute{e}chet differentiable, $V$ is semiconvex, and the nested cutoff sets and derivative-growth bounds in the feature-energy definition hold. Let $d\ge2$, $\Theta\subseteq\mathbb R^{d-1}$, $\varphi:\Theta\to\mathcal H$ be bounded and continuously differentiable with Lipschitz differential, and $\widetilde V:\Theta\to[0,\infty)$ be bounded and continuously differentiable with Lipschitz differential; set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. For every $f\in\mathcal H$, require dense regular values for $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every $f\in\mathcal H$, or (ii) $\Theta=\mathbb R^{d-1}$ and for every $f\in\mathcal H$, $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ to a limit with dense regular values as $r\to\infty$. Let $\mu_t$ be a Wasserstein gradient flow whose initial support is contained in $[-r_0,r_0]\times\Theta$ and separates the faces $\{-r_0\}\times\Theta$ and $\{r_0\}\times\Theta$. If $h^1(\mu_t)$ converges weakly against every bounded continuous real test function to the finite signed measure $\nu$, then $\nu$ globally minimizes the relaxed objective $J$ and $F(\mu_t)\to J(\nu)=\inf_\lambda J(\lambda)=\inf_{\mu\ge0}F(\mu)$.

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

**Given:** AC and the full hypotheses in the Statement.

[F1] The relaxed objective is the infimum of the lifted energy at fixed signed projection and admits the Jordan-sign minimizing lift. [[def-partial-homogeneous-relaxed-objective]]

[F2] Signed narrow projection convergence gives norm moments, BL convergence, and signwise stationarity at the limit. [[lem-signed-narrow-convergence-controls-bochner-moments]] [[lem-partial-homogeneous-projection-limit-is-stationary]]

[F3] Nonnegative signwise first variations plus signwise stationarity characterize a minimizer of the relaxed objective. [[lem-partial-relaxed-objective-signwise-optimality]]

[F4] Favorable positive mass in a negative inner sign sublevel forces finite-time exit from a fixed BL neighborhood. [[lem-partial-homogeneous-escape-from-nonoptimal-projection]]

[F5] On every finite horizon the support is the closed image of the initial support by continuous characteristics, remains in a bounded weight slab, and meets every vertical line. [[lem-flow-preserves-box-separation]] [[lem-characteristics-unique-and-stable]] [[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[F6] The full hypotheses force $\widetilde V=c\ge0$. Negative sublevels have universal robust outer traps, including for reversed-time close forcing. [[lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses]] [[lem-partial-homogeneous-negative-level-trapping]]

[F7] The actual lifted penalty and energy converge to the Jordan penalty and $J(\nu)$ under the asserted signed narrow limit. [[lem-partial-homogeneous-projection-limit-has-convergent-penalty]]

## Proof

**Given:** The flow and signed projection in the Statement.

1.1 Use the natural slabs $Q_r=[-r,r]\times\Theta$; their cutoff and bounded supporting-selection hypotheses are verified in the box-separation proof [F5], so the initial bounded-weight premise suffices for its characteristic and support conclusions. By [F2] the limit is signwise stationary. If it were not a minimizer, [F3] would force $H=G_s$ to be negative somewhere for some sign $s$. Reflecting $w$ if necessary, treat $s=+$. Choose a negative regular level $a_0$ and an interior point $\theta_*$ of $K_0=\{H\le a_0\}$; continuity at a negative point and density of regular values allow $H(\theta_*)<a_0<0$. By [F6] choose a larger negative outer trap $K_{\rm out}$ containing $K_0$, and close-forcing radius $\rho>0$, so that $H_t< -b<0$ there. In the unbounded case choose the outer level regular for both finite and limiting sphere functions, as provided by [F6]. Reduce the forcing radius if needed to match the escape neighborhood in [F4] for inner set $K_0$. [F2, F3, F4, F5, F6, given, choose, assume-contra]

2.1 By [F2], the projections eventually remain in that BL neighborhood and the forcing eventually remains within $\rho$ of $f_\nu$. Fix such a time $t_0$ first. Only now use [F5] to choose $M<\infty$ bounding the weights of the entire support at $t_0$. We show that for $t>t_0+M/b$ no negative-weight support point can lie over $K_0$. Take any characteristic with such an endpoint and reverse it on its preceding maximal negative-weight interval. Since $G_{-,t}=2c-H_t$ by [F6], forward on that interval $$w'=2c-H_t\ge b,\qquad\theta'=|w|\nabla H_t.$$ The reversed angular curve, with normalized time change $d\tau/ds=|w|/k(\theta)>0$, follows the favorable negative-gradient field with reversed but still close forcing. The universal trap in [F6] keeps its angular history in $K_{\rm out}$. The reversed weight decreases at rate at least $b$, so it cannot end the backward interval by reaching zero. On any finite original-time interval the characteristic exists and is continuous; the trap prevents leaving $K_{\rm out}$. Consequently this negative interval reaches $t_0$. Integrating gives $w(t)\ge-M+b(t-t_0)>0$, a contradiction. This applies to every initial support characteristic, and [F5] represents every support point by one of them. [F2, F5, F6, step 1.1]

3.1 Fix $t>t_0+M/b$. By [F5] the vertical line over $\theta_*$ meets $\operatorname{spt}\mu_t$, and by step 2.1 its intersection has weight $w\ge0$. If $w>0$, the strict inequality $H(\theta_*)<a_0$ puts this support point in the interior of the favorable cone, so an open neighborhood of it has positive measure. If $w=0$, the minimum scalar subgradient at that point gives $w'=-H_t(\theta_*)\ge b$ and angular velocity zero. More explicitly, in a small spacetime neighborhood of this point $H_q(\theta)<-b/2$; at $w>0$ the radial velocity is $-H_q>b/2$, at $w<0$ it is $2c-H_q>b/2$, and at zero it is $-H_q>b/2$. Continuity of the characteristic and its integral equation therefore give $w(t+h)>0$ for every sufficiently small $h>0$, while $\theta(t+h)$ remains strictly inside $K_0$. Its image is still a support point by [F5], so again there is positive favorable-cone mass. In either case [F4] forces a later exit from the neighborhood in which all projections after $t_0$ remain. This contradiction proves global optimality. The reflected argument gives the same conclusion if the negative branch was $s=-$. [F4, F5, F6, step 1.1, step 2.1]

4.1 By [F7], $F(\mu_t)\to J(\nu)$. Optimality gives $J(\nu)=\inf J$. Finally [F1] gives equality of the infima over finite signed measures and finite nonnegative lifts. Hence $F(\mu_t)\to J(\nu)=\inf J=\inf_{\mu\ge0}F(\mu)$, with the comparison domain and integrability convention in [F1]. [F1, F7, step 3.1, discharge-contradiction] ∎

## Source note

The forcing neighborhood is chosen before the late time and its weight bound $M$; the subsequent clearance wait $M/b$ does not alter that neighborhood. The proof establishes the actual dynamical penalty limit separately. Static equality of signed projections alone still does not determine lifted penalties.
