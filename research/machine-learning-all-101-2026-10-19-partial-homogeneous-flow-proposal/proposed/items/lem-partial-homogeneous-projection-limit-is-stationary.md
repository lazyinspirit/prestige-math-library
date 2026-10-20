---
id: lem-partial-homogeneous-projection-limit-is-stationary
kind: lemma
title: Stationarity of a partially homogeneous signed projection limit
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, def-axiom-of-choice, lem-signed-narrow-convergence-controls-bochner-moments, lem-partial-feature-flow-moment-and-energy-identities, thm-cauchy-schwarz-in-an-inner-product-space]
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

Assume AC, a separable real Hilbert space $\mathcal H$, and the feature-energy hypotheses: $R$ is convex and differentiable with locally Lipschitz differential bounded on sublevels, $\Phi$ is Fr\acute{e}chet differentiable, $V$ is semiconvex, and the nested cutoff sets and derivative-growth bounds in the feature-energy definition hold. Let $d\ge2$, $\Theta\subseteq\mathbb R^{d-1}$, $\varphi:\Theta\to\mathcal H$ be bounded and continuously differentiable with Lipschitz differential, and $\widetilde V:\Theta\to[0,\infty)$ be bounded and continuously differentiable with Lipschitz differential; set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. For every $f\in\mathcal H$, require dense regular values for $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every $f\in\mathcal H$, or (ii) $\Theta=\mathbb R^{d-1}$ and for every $f\in\mathcal H$, $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ to a limit with dense regular values as $r\to\infty$. Write $\Phi(w,\theta)=w\varphi(\theta)$, $V(w,\theta)=|w|\widetilde V(\theta)$, and let $\mu_t$ be a Wasserstein gradient flow. Suppose the finite signed measures $h^1(\mu_t)$ converge weakly on $\Theta$ to a finite signed measure $\nu$, where weak convergence means convergence against every function in $C_b(\Theta)$. Define $m_\nu:=\int\varphi d\nu$ by the signed Bochner-integral convention for the relaxed objective. Put $a_\nu(\theta)=dR_{m_\nu}[\varphi(\theta)]$, $G_+(\theta)=a_\nu(\theta)+\widetilde V(\theta)$, and $G_-(\theta)=-a_\nu(\theta)+\widetilde V(\theta)$. Then $G_+=0$ for $\nu^+$-almost every point and $G_-=0$ for $\nu^-$-almost every point, where $\nu=\nu^+-\nu^-$ is the Jordan decomposition. This is the sign-correct formulation of stationarity for the reduced functional $J(\nu)=R(\int\varphi\,d\nu)+\int\widetilde V\,d|\nu|$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[def-partial-homogeneous-relaxed-objective]]

[[lem-mean-field-projection-identities]]

[Chizat and Bach, Lemma C.6 and Appendix A.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC and the full hypotheses in the Statement.

[F1] Signed narrow convergence on the closed Euclidean domain implies norm convergence of bounded continuous Hilbert-valued moments, BL convergence, and positive-Jordan-part lower semicontinuity. [[lem-signed-narrow-convergence-controls-bochner-moments]]

[F2] The actual flow satisfies the all-endpoint energy and radial identities, finite total action, and $S(t)\le S(0)+Ct$ when its feature moments are bounded. [[lem-partial-feature-flow-moment-and-energy-identities]]

[F3] The raw projections $\alpha_t,\beta_t$ are nonnegative and $\sigma_t=h^1(\mu_t)=\alpha_t-\beta_t$; their difference's Jordan parts need not equal them. [[def-partial-one-homogeneous-measure-projection]]

[F4] Cauchy–Schwarz bounds products of square-integrable functions. [[thm-cauchy-schwarz-in-an-inner-product-space]]

## Proof

**Given:** The flow and signed projection in the Statement.

1.1 Write $m_t=\int\varphi d\sigma_t$ and $f_t=\nabla R(m_t)$. By [F1], $m_t\to m_\nu$ in norm, so $f_t\to f_\nu$ in norm and $G_{\pm,t}=\pm\langle f_t,\varphi\rangle+\widetilde V$ converge uniformly to $G_\pm$. The functions have a common finite magnitude bound $B\ge1$. The moments are uniformly bounded for all $t\ge0$: convergence bounds the tail, and finite-horizon continuity from [F2] bounds the remaining compact interval. Thus [F2] gives $S(t)\le S(0)+Ct$ and $\int_0^\infty A(t)dt<\infty$, where $A(t)=\int|v_t|^2d\mu_t$. [F1, F2, given]

2.1 Suppose $G_+$ is nonzero on a set of positive $\nu^+$ measure. Regularity yields $\delta>0$ and $\psi\in C_c(\Theta)$, $0\le\psi\le1$, supported in $\{|G_+|>2\delta\}$, with $c_0=\int\psi d\nu^+>0$. Indeed choose a compact subset of a positive-measure level set and a continuous distance cutoff in that open set. For late $t$, $|G_{+,t}|\ge\delta$ on this support. Since $\alpha_t\ge\sigma_t^+$ (use the partition formula for the positive part of $\alpha_t-\beta_t$), [F1] gives $\liminf_{t\to\infty}\int\psi d\alpha_t\ge c_0$. This asserts no convergence of either raw component. [F1, F3, step 1.1, construct]

3.1 Put $L(t)=\int_{w>0}wG_{+,t}^2d\mu_t+\int_{w<0}(-w)G_{-,t}^2d\mu_t$. Step 2.1 implies $L(t)\ge\delta^2c_0/2$ eventually. Off $w=0$, the weight component of the flow velocity is $-G_{+,t}$ for positive weights and $G_{-,t}$ for negative weights. Therefore [F4] gives $$L(t)^2\le\left(\int_{w\ne0}G_{\operatorname{sign}(w),t}^2d\mu_t\right)\left(\int_{w\ne0}w^2G_{\operatorname{sign}(w),t}^2d\mu_t\right)\le A(t)B^2S(t).$$ Thus $A(t)\ge c/(S(0)+Ct)$ for almost every sufficiently late $t$. A zero denominator contradicts $L(t)>0$; a positive constant denominator already forces infinite action, and a growing linear denominator has divergent reciprocal integral. Every case contradicts [F2]. Hence $G_+=0$ $\nu^+$-almost everywhere. [F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Apply steps 2.1–3.1 with $-\sigma_t=\beta_t-\alpha_t$, its positive limit part $\nu^-$, and $G_-$ in place of $G_+$. This proves $G_-=0$ $\nu^-$-almost everywhere, completing both sign conclusions. [F1, F2, F3, F4, step 3.1] ∎

## Source note

The action is integrated against $\mu_t$, whereas the projection carries the factor $|w|$. The radial second-moment identity and the Cauchy–Schwarz estimate bridge those measures. The proof never identifies raw components with Jordan parts, never assumes their separate convergence, and does not import an AGS stationarity theorem.
