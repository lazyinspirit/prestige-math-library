---
id: lem-partial-homogeneous-escape-from-nonoptimal-projection
kind: lemma
title: Nonoptimal partial projections have an escaping sign branch
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, def-axiom-of-choice, lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses, lem-partial-homogeneous-negative-level-trapping, lem-partial-feature-flow-moment-and-energy-identities, thm-superposition-for-finite-action-continuity-equations]
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

Assume AC, a separable real Hilbert space $\mathcal H$, and the feature-energy hypotheses: $R$ is convex and differentiable with locally Lipschitz differential bounded on sublevels, $\Phi$ is Fr\acute{e}chet differentiable, $V$ is semiconvex, and the nested cutoff sets and derivative-growth bounds in the feature-energy definition hold. Let $d\ge2$, $\Theta\subseteq\mathbb R^{d-1}$, $\varphi:\Theta\to\mathcal H$ be bounded and continuously differentiable with Lipschitz differential, and $\widetilde V:\Theta\to[0,\infty)$ be bounded and continuously differentiable with Lipschitz differential; set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. For every $f\in\mathcal H$, require dense regular values for $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every $f\in\mathcal H$, or (ii) $\Theta=\mathbb R^{d-1}$ and for every $f\in\mathcal H$, $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ to a limit with dense regular values as $r\to\infty$. Let $\nu$ be a finite signed projection with nonoptimal relaxed objective $J(\nu)$, set $m_\nu=\int\varphi d\nu$ by the signed Bochner-integral convention in the relaxed-objective definition, and define $G_+(\theta)=dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$ and $G_-(\theta)=-dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$. Assume at least one of $G_+,G_-$ is negative somewhere, as is necessary for a nonempty negative cone. Let $I\subseteq\{+,-\}$ be the nonempty set of signs with a negative value, choose a negative regular level $-\eta_s$ for each $s\in I$, and put $K_s=\{G_s\le-\eta_s\}$ for $s\in I$ and $K_s=\varnothing$ otherwise. For a finite signed measure $\sigma$ on $\Theta$, define

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

**Given:** AC and the full hypotheses in the Statement.

[F1] The full globally semiconvex partial-model hypotheses imply $\widetilde V\equiv c\ge0$; in particular $G_-=2c-G_+$ and their angular gradients are opposite. The bounded branch uses the Neumann premise for $f=0$. [[lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses]]

[F2] A negative inner sublevel of either sign function has a larger negative outer trap, robust under all sufficiently close time-dependent forcing, in both the bounded and compactified unbounded branches. [[lem-partial-homogeneous-negative-level-trapping]]

[F3] Every flow in the definition has finite total squared action and a superposition by its characteristic paths, without a bounded-initial-weight assumption. [[lem-partial-feature-flow-moment-and-energy-identities]] [[thm-superposition-for-finite-action-continuity-equations]]

[F4] Feature moments factor through the signed projection, not its individual raw or Jordan components. [[def-partial-one-homogeneous-measure-projection]] [[def-partial-homogeneous-relaxed-objective]]

## Proof

**Given:** The flow and signed projection in the Statement.

1.1 Boundedness and Lipschitz differential of $\varphi$ give a finite $C_\varphi=\|\varphi\|_\infty+\|D\varphi\|_\infty$ on either domain alternative. For any finite signed $\sigma$, test its BL norm with $\langle z,\varphi\rangle/C_\varphi$ for unit $z$ to obtain $\|\int\varphi d\sigma\|\le C_\varphi\|\sigma\|_{BL}$ (if $C_\varphi=0$ the assertion is immediate). Local Lipschitz continuity of $\nabla R$ near $m_\nu$ then bounds $\|f_t-f_\nu\|$ by $C\|h^1(\mu_t)-\nu\|_{BL}$ whenever this BL distance is small. This is a norm bound on the Hilbert forcing, on bounded and unbounded $\Theta$ alike. [F4, given, algebra]

2.1 By [F1] write $\widetilde V=c$. Apply [F2] to each nonempty $K_s$ using its level $-\eta_s$ as the inner threshold; if necessary choose a regular outer level strictly between that threshold and zero, also regular for the sphere limit in the unbounded case. The common forcing radius $\rho>0$ and constant $b>0$ can be chosen for the at most two branches. Whenever $\|f_t-f_\nu\|<\rho$, every favorable characteristic starting with $z=s w>0$ and $\theta\in K_s$ stays in the corresponding outer negative trap, satisfies $z'=-G_{s,t}(\theta)\ge b$, and retains its sign. Indeed its angular equation is $\theta'=-z\nabla G_{s,t}$, and time change by the positive factor $z/k(\theta)$ gives precisely the normalized curve in [F2]. On each finite interval all quantities are finite and $z\ge z(t_0)>0$, so this time change is legitimate; if its total normalized time is finite, the same trap follows on every finite physical interval. [F1, F2, step 1.1]

3.1 Choose $\epsilon>0$ so that step 1.1 sends BL distance less than $\epsilon$ into the forcing ball in step 2.1. Suppose, to the contrary, that after $t_0$ this distance always remains less than $\epsilon$. By hypothesis the set of superposed paths starting in the union of the favorable cones has probability $P=\mu_{t_0}(A)>0$. Step 2.1 gives $|w'(t)|\ge b$ along every such path for almost every later time. Thus $A(t)\ge Pb^2$ for almost every $t>t_0$. Integrating on the infinite time interval contradicts the finite total action in [F3]. Hence there is a finite $t_1>t_0$ with distance at least $\epsilon$, as claimed. This action lower bound is positive before any signed projection is taken, so no opposite-sign mass can cancel it. [F2, F3, step 2.1] ∎

## Source note

The source's common-time version of Lemma C.18 is unnecessary. The proof uses positive action from retained favorable trajectories, not a claim that their signed projected mass dominates the opposite sign. The full hypotheses and both source boundary alternatives are retained.
