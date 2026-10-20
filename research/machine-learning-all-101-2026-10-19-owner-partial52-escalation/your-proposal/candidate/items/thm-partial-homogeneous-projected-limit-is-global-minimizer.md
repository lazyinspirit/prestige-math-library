---
id: thm-partial-homogeneous-projected-limit-is-global-minimizer
kind: theorem
title: A partially homogeneous signed projection limit is a minimizer
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 13
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, def-axiom-of-choice, lem-partial-homogeneous-projection-limit-is-stationary, lem-partial-relaxed-objective-signwise-optimality, lem-partial-homogeneous-escape-from-nonoptimal-projection, lem-flow-preserves-box-separation, lem-signed-narrow-convergence-controls-bochner-moments, lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses, lem-partial-homogeneous-negative-level-trapping, lem-partial-homogeneous-projection-limit-has-convergent-penalty, lem-characteristics-unique-and-stable, thm-global-wasserstein-flow-existence-uniqueness-and-stability, lem-mean-field-first-variation-and-measure-optimality]
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

[F8] A finite-energy finite nonnegative measure whose first variation is nonnegative everywhere and zero almost everywhere for that measure minimizes $F$ over all finite nonnegative Borel measures. The comparison requires Bochner integrability of $\Phi$ and integrability of $V$ for finite-energy competitors, without a $|w|$-moment or second-moment requirement. [[lem-mean-field-first-variation-and-measure-optimality]]

## Proof

**Given:** The flow and signed projection in the Statement.

1.1 Use the natural slabs $Q_r=[-r,r]\times\Theta$; their cutoff and bounded supporting-selection hypotheses are verified in the box-separation proof [F5], so the initial bounded-weight premise suffices for its characteristic and support conclusions. By [F2] the limit is signwise stationary. If it were not a minimizer, [F3] would force $H=G_s$ to be negative somewhere for one sign $s\in\{+,-\}$. Fix that sign, put $m_t=\int w\varphi(\theta)d\mu_t$, and write $H_t(\theta)=s\,dR_{m_t}[\varphi(\theta)]+\widetilde V(\theta)$ for the time-dependent risk field of the same original flow. Choose a negative regular level $a_0$ and an interior point $\theta_*$ of $K_0=\{H\le a_0\}$; continuity at a negative point and density of regular values allow $H(\theta_*)<a_0<0$. By [F6] choose a larger negative outer trap $K_{\rm out}$ containing $K_0$, and close-forcing radius $\rho>0$, so that $H_t<-b<0$ there. In the unbounded case choose the outer level regular for both finite and limiting sphere functions, as provided by [F6]. Reduce the forcing radius if needed to match the escape neighborhood in [F4] for the selected sign and inner set $K_0$. [F2, F3, F4, F5, F6, given, choose, assume-contra]

2.1 By [F2], the projections eventually remain in that BL neighborhood and the forcing eventually remains within $\rho$ of $f_\nu$. Fix such a time $t_0$ first. Only now use [F5] to choose $M<\infty$ bounding the weights of the entire support at $t_0$. Use the proof coordinate $z=sw$; the model and its feature moment $m_t$ remain unchanged. The constant-penalty conclusion in [F6] gives $\widetilde V=c\ge0$ and $G_{-s,t}=2c-H_t$. On a characteristic with $z<0$ and $\theta\in K_{\rm out}$, the original flow equations become
$$z'=2c-H_t(\theta)\ge b,\qquad\theta'=|z|\nabla H_t(\theta).$$
Consequently, when this angular path is traced backward, it satisfies the favorable equation $\dot\theta=-\rho\nabla H$ from [F6] with the positive continuous scale $\rho=|z|$ and reversed but still close forcing. The universal reversed-forcing trap in [F6] keeps it in $K_{\rm out}$ and hence keeps $z'\ge b$. Now fix $t>t_0+M/b$ and suppose a support point over $K_0$ has $z(t)<0$. Trace its characteristic backward on the maximal interval ending at $t$ on which $z<0$. The reversed trap is first applied on compact subintervals where $|z|>0$; closedness of $K_{\rm out}$ and continuity extend membership to a possible zero endpoint. If it starts at a time $u>t_0$ with $z(u)=0$, integrating $z'\ge b$ from $u$ to $t$ contradicts $z(t)<0$. If it reaches $t_0$, then $z(t)\ge z(t_0)+b(t-t_0)\ge -M+b(t-t_0)>0$, also a contradiction. Thus no support point over $K_0$ has $z<0$ after $t_0+M/b$. By [F5], every support point has a characteristic representative, so this holds for the full support. [F2, F5, F6, step 1.1]

3.1 Fix $t>t_0+M/b$. By [F5] the vertical line over $\theta_*$ meets $\operatorname{spt}\mu_t$, and by step 2.1 one such point has $z\ge0$. If $z>0$, the strict inequality $H(\theta_*)<a_0$ puts this support point in the interior of the favorable cone, so an open neighborhood of it has positive measure. If $z=0$, write $a_t(\theta)=dR_{m_{\mu_t}}[\varphi(\theta)]$. The scalar potential in the isometric coordinate $z=sw$ is $s a_t(\theta)z+c|z|$. Since $H_t(\theta_*)=s a_t(\theta_*)+c<-b$, its minimum-norm subgradient at $z=0$ gives $z'=-H_t(\theta_*)>b$, and the angular velocity is zero. In a small spacetime neighborhood of this point, the favorable equation on $z>0$ has $z'=-H_t>b/2$, while the opposite equation on $z<0$ has $z'=2c-H_t>b/2$. Continuity of the characteristic and its integral equation therefore give $z(t+h)>0$ for every sufficiently small $h>0$, while $\theta(t+h)$ remains strictly inside $K_0$. Its image is still a support point by [F5], so again there is positive favorable-cone mass. In either case [F4] forces a later exit from the neighborhood in which all projections after $t_0$ remain. This contradiction proves global optimality for the original flow, with the original feature moment unchanged. [F4, F5, F6, step 1.1, step 2.1]

4.1 The negative-branch contradiction in steps 1.1–3.1 uses only the existence of a negative value of $G_s$, signwise stationarity and the given flow; hence both $G_+$ and $G_-$ are nonnegative everywhere. Let $\widehat\mu_\nu$ be the Jordan-sign lift from [F1], supported on the sections $w=1$ and $w=-1$. It is a finite nonnegative Borel measure, has feature moment $m_\nu$, and satisfies $F(\widehat\mu_\nu)=J(\nu)<\infty$. Its first variation at an arbitrary $(w,\theta)\in\mathbb R\times\Theta$ is $dR_{m_\nu}[w\varphi(\theta)]+|w|\widetilde V(\theta)$, equal to $wG_+(\theta)$ for $w>0$, $(-w)G_-(\theta)$ for $w<0$, and $0$ for $w=0$. It is therefore nonnegative everywhere. By signwise stationarity [F2], it vanishes $\widehat\mu_\nu$-almost everywhere. Thus [F8] makes $\widehat\mu_\nu$ a global minimizer of $F$ over all finite nonnegative Borel measures, including finite-energy competitors without a finite $|w|$ moment. [F1, F2, F8, step 1.1, step 2.1, step 3.1]

4.2 By [F7], $F(\mu_t)\to J(\nu)$, and step 3.1 gives $J(\nu)=\inf_\lambda J(\lambda)$. Step 4.1 gives $J(\nu)=F(\widehat\mu_\nu)=\inf_{\mu\ge0}F(\mu)$ on the unrestricted finite-nonnegative-measure domain. Consequently $F(\mu_t)\to J(\nu)=\inf_\lambda J(\lambda)=\inf_{\mu\ge0}F(\mu)$, as asserted. [F1, F7, step 3.1, step 4.1, discharge-contradiction] ∎

## Source note

The forcing neighborhood is chosen before the late time and its weight bound $M$; the subsequent clearance wait $M/b$ does not alter that neighborhood. The proof establishes the actual dynamical penalty limit separately. Static equality of signed projections alone still does not determine lifted penalties.
