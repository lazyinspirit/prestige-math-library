---
id: lem-partial-homogeneous-escape-from-nonoptimal-projection
kind: lemma
title: Nonoptimal partial projections have an escaping sign branch
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, lem-partial-negative-weight-crossing-time, lem-mean-field-projection-identities, lem-characteristics-unique-and-stable, thm-global-wasserstein-flow-existence-uniqueness-and-stability, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the flow, characteristic and minimum-norm selection suppliers; the scalar crossing estimate itself is choice-free."
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

Assume AC and the full partially one-homogeneous hypotheses on $\Omega=\mathbb R\times\Theta$: $\Phi(w,\theta)=w\varphi(\theta)$, $V(w,\theta)=|w|\widetilde V(\theta)$, convex differentiable risk with the prescribed derivative bounds, the dense-regular-value condition, and either (i) bounded closed convex $\Theta$ with the source Neumann condition for every relevant function $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$, or (ii) $\Theta=\mathbb R^{d-1}$ with the uniform $C^1$-at-infinity condition. Let $\nu$ be a finite signed projection with nonoptimal relaxed objective $J(\nu)$, and let $\mu_t$ be a Wasserstein gradient flow. For a chosen negative regular level in each unfavorable sign branch, put $K_+=\{G_+\le-\eta\}$, $K_-=\{G_-\le-\eta\}$, where $G_+(\theta)=dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$ and $G_-(\theta)=-dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$, and set $A=(\mathbb R_{>0}\times K_+)\cup(\mathbb R_{<0}\times K_-)$. There is $\epsilon>0$ such that if $\|h^1(\mu_{t_0})-\nu\|_{BL}<\epsilon$ and $\mu_{t_0}(A)>0$, then the intended escape conclusion is that $\|h^1(\mu_{t_1})-\nu\|_{BL}\ge\epsilon$ for some $t_1>t_0$. This claim retains both sign branches and the full source boundary alternatives.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[def-partial-homogeneous-relaxed-objective]]

[[lem-partial-negative-weight-crossing-time]]

[[lem-characteristics-unique-and-stable]]

[Chizat and Bach, Propositions C.4–C.5 and Lemma C.18](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the partial flow, signed projection, and regularity assumptions in the Statement.

[F1] The feature moment factors through $h^1$, and on bounded sets of feature moments the risk differential is Lipschitz. [[lem-mean-field-projection-identities]] [[def-feature-measure-energy]]

[F2] The positive and negative projected parts are $h^1(\mu)^+(B)=\int_{w>0,\theta\in B}w\,d\mu$ and $h^1(\mu)^-(B)=\int_{w<0,\theta\in B}(-w)\,d\mu$; their difference, not either part separately, is $h^1(\mu)$. [[def-partial-one-homogeneous-measure-projection]]

[F3] Along a characteristic, for $w>0$ the equations are $\dot w=-G_{+,t}(\theta)$ and $\dot\theta=-w\nabla G_{+,t}(\theta)$; for $w<0$ they are $\dot w=G_{-,t}(\theta)$ and $\dot\theta=-|w|\nabla G_{-,t}(\theta)$ wherever the potential is differentiable. [[def-feature-measure-energy]] [[def-wasserstein-gradient-flow-for-feature-energy]]

[F4] If along a negative-weight trajectory one has $\dot w\ge\eta/2$ and $q'=|\theta-\theta_0|'\le |w|(\epsilon+Lq)$, then the corrected crossing time is at most $2M/\eta$, and the angular displacement is bounded by $\epsilon(e^{LM^2/\eta}-1)/L$ (with the stated $L=0$ limit). [[lem-partial-negative-weight-crossing-time]]

## Proof

**Given:** AC, the partial flow, and [F1]–[F4].

1.1 For signed finite measures $\sigma=h^1(\mu)-\nu$ on compact $\Theta$, the feature moment obeys $\|m_\mu-m_\nu\|\le C_\varphi\|\sigma\|_{BL}$, where $C_\varphi=\sup_{\|z\|\le1}(\|\langle z,\varphi\rangle\|_\infty+\operatorname{Lip}\langle z,\varphi\rangle)$. On a bounded set of projected measures, the Lipschitz bound for $dR$ therefore gives uniform convergence of both functions $G_{+,t},G_{-,t}$ to their values at $\nu$, including their angular derivatives. This supplies the regular-level persistence part of the escape argument in the bounded branch. [F1, given, algebra]

2.1 The signed projection decomposes as [F2], but its weak convergence controls only the difference of these two nonnegative measures. The energy action is integrated against $\mu_t$, while $h^1$ weights each particle by $w$ and changes sign. Thus [F1]–[F4] alone do not show that positive contributions in the escaping cone dominate possible negative contributions, nor that a negative-weight characteristic satisfies the hypotheses of [F4] for the positive-branch function $G_+$. [F2, F3, F4, step 1.1]

3.1 On $w<0$, [F3] involves $G_{-,t}$, whereas the source's C.18 crossing estimate is applied near a local minimum of a negative sublevel of $G_+$. The inequalities $G_+<0$ and $\nabla G_+=0$ do not by themselves imply the required bound $|\nabla G_-|\le\epsilon+L|\theta-\theta_0|$; at a point where $\nabla G_+=0$, one has $\nabla G_- =2\nabla\widetilde V$ in general. No hypothesis in the Statement makes this vanish. A further sign-specific dynamical lemma is required before applying [F4], and the unbounded-$\Theta$ branch additionally needs the compactified boundary estimate. The full escape claim remains escalated. [F3, F4, step 2.1]

## Escalation

Unresolved exact input: derive the negative-weight angular inequality used by the source from the stated $\Phi=w\varphi$, $V=|w|\widetilde V$ dynamics, or identify a missing assumption on $\widetilde V$; then prove bounded-Lipschitz escape without losing control to cancellation between $h^1(\mu_t)^+$ and $h^1(\mu_t)^-$. A valid proof must cover both the Neumann and compactified-at-infinity branches. The partial projected-limit theorem depends on this result.
