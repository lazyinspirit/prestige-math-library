---
id: lem-partial-homogeneous-escape-from-nonoptimal-projection
kind: lemma
title: Nonoptimal partial projections have an escaping sign branch
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 12
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, lem-partial-negative-weight-crossing-time, lem-mean-field-projection-identities, lem-characteristics-unique-and-stable, thm-global-wasserstein-flow-existence-uniqueness-and-stability, def-axiom-of-choice, thm-jordan-decomposition-for-signed-measures]
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

Assume AC, a separable real Hilbert space $\mathcal H$, and the feature-energy hypotheses: $R$ is convex and differentiable with locally Lipschitz differential bounded on sublevels, $\Phi$ is Fr\acute{e}chet differentiable, $V$ is semiconvex, and the nested cutoff sets and derivative-growth bounds in the feature-energy definition hold. Let $d\ge2$, $\Theta\subseteq\mathbb R^{d-1}$, $\varphi:\Theta\to\mathcal H$ be bounded and continuously differentiable with Lipschitz differential, and $\widetilde V:\Theta\to[0,\infty)$ be bounded and continuously differentiable with Lipschitz differential; set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. Require dense regular values for every relevant $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every relevant $f$, or (ii) $\Theta=\mathbb R^{d-1}$ and each $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ to a limit with dense regular values as $r\to\infty$. Let $\nu$ be a finite signed projection with nonoptimal relaxed objective $J(\nu)$, set $m_\nu=\int\varphi d\nu$ by the signed Bochner-integral convention in the relaxed-objective definition, and define $G_+(\theta)=dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$ and $G_-(\theta)=-dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$. Assume at least one of $G_+,G_-$ is negative somewhere, as is necessary for a nonempty negative cone. Let $I\subseteq\{+,-\}$ be the nonempty set of signs with a negative value, choose a negative regular level $-\eta_s$ for each $s\in I$, and put $K_s=\{G_s\le-\eta_s\}$ for $s\in I$ and $K_s=\varnothing$ otherwise. For a finite signed measure $\sigma$ on $\Theta$, define

$$\|\sigma\|_{BL(\Theta)}:=\sup\left\{\left|\int f d\sigma\right|:f:\Theta\to\mathbb R,\ \|f\|_\infty+\operatorname{Lip}(f)\le1\right\},$$

where $\|f\|_\infty:=\sup_{\theta\in\Theta}|f(\theta)|$ and $\operatorname{Lip}(f):=\sup_{\theta\ne\theta'}|f(\theta)-f(\theta')|/|\theta-\theta'|$ for Euclidean distance, taking $0$ when there are no distinct points. Set $A=(\mathbb R_{>0}\times K_+)\cup(\mathbb R_{<0}\times K_-)$. There is $\epsilon>0$ such that if $\|h^1(\mu_{t_0})-\nu\|_{BL(\Theta)}<\epsilon$ and $\mu_{t_0}(A)>0$ for a Wasserstein gradient flow $\mu_t$, then for some $t_1>t_0$,

$$\|h^1(\mu_{t_1})-\nu\|_{BL(\Theta)}\ge\epsilon.$$

The statement retains both sign branches and both source boundary alternatives.

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

[F2] If $\alpha_\mu,\beta_\mu$ are the raw positive- and negative-weight measures in the definition of $h^1(\mu)$, then $h^1(\mu)=\alpha_\mu-\beta_\mu$; its canonical Jordan parts exist by [A1] after cancellation and need not equal those raw measures. [[def-partial-one-homogeneous-measure-projection]] [[thm-jordan-decomposition-for-signed-measures]]

[F3] Along a characteristic, for $w>0$ the equations are $\dot w=-G_{+,t}(\theta)$ and $\dot\theta=-w\nabla G_{+,t}(\theta)$; for $w<0$ they are $\dot w=G_{-,t}(\theta)$ and $\dot\theta=-|w|\nabla G_{-,t}(\theta)$ wherever the potential is differentiable. [[def-feature-measure-energy]] [[def-wasserstein-gradient-flow-for-feature-energy]]

[F4] If along a negative-weight trajectory one has $\dot w\ge\eta/2$ and $q'=|\theta-\theta_0|'\le |w|(\epsilon+Lq)$, then the corrected crossing time is at most $2M/\eta$, and the angular displacement is bounded by $\epsilon(e^{LM^2/\eta}-1)/L$ (with the stated $L=0$ limit). [[lem-partial-negative-weight-crossing-time]]

[A1] AC supplies the Wasserstein flow, characteristic representation and minimum-norm selection, and the canonical Jordan decomposition of the finite signed projection. [[def-axiom-of-choice]] [[thm-jordan-decomposition-for-signed-measures]]

## Proof

**Given:** AC, the partial flow, and [F1]–[F4].

1.1 For signed finite measures $\sigma=h^1(\mu)-\nu$ on compact $\Theta$, the feature moment obeys $\|m_\mu-m_\nu\|\le C_\varphi\|\sigma\|_{BL}$, where $C_\varphi=\sup_{\|z\|\le1}(\|\langle z,\varphi\rangle\|_\infty+\operatorname{Lip}\langle z,\varphi\rangle)$. On a bounded set of projected measures, the Lipschitz bound for $dR$ therefore gives uniform convergence of both functions $G_{+,t},G_{-,t}$ to their values at $\nu$, including their angular derivatives. This supplies the regular-level persistence part of the escape argument in the bounded branch. [F1, given, algebra]

2.1 The signed projection decomposes as [F2], but its weak convergence controls only the difference of these two nonnegative measures. The energy action is integrated against $\mu_t$, while $h^1$ weights each particle by $w$ and changes sign. Thus [F1]–[F4] alone do not show that positive contributions in the escaping cone dominate possible negative contributions, nor that a negative-weight characteristic satisfies the hypotheses of [F4] for the positive-branch function $G_+$. [A1, F1, F2, F3, F4, step 1.1]

3.1 On $w<0$, [F3] involves $G_{-,t}$, whereas the source's C.18 crossing estimate is applied near a local minimum of a negative sublevel of $G_+$. The inequalities $G_+<0$ and $\nabla G_+=0$ do not by themselves imply the required bound $|\nabla G_-|\le\epsilon+L|\theta-\theta_0|$; at a point where $\nabla G_+=0$, one has $\nabla G_- =2\nabla\widetilde V$ in general. No hypothesis in the Statement makes this vanish. A further sign-specific dynamical lemma is required before applying [F4], and the unbounded-$\Theta$ branch additionally needs the compactified boundary estimate. The full escape claim remains escalated. [F3, F4, step 2.1]

## Escalation

Unresolved exact input: derive the negative-weight angular inequality used by the source from the stated $\Phi=w\varphi$, $V=|w|\widetilde V$ dynamics, or identify a missing assumption on $\widetilde V$; then prove bounded-Lipschitz escape without losing control to cancellation between $h^1(\mu_t)^+$ and $h^1(\mu_t)^-$. A valid proof must cover both the Neumann and compactified-at-infinity branches. The partial projected-limit theorem depends on this result.
