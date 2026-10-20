---
id: lem-feature-energy-geodesically-semiconvex
kind: lemma
title: The localized feature energy is semiconvex along generalized geodesics
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-localized-hilbert-lift, lem-lifted-energy-lipschitz-gradient, def-generalized-wasserstein-geodesic-and-strong-subgradient, thm-wasserstein-two-is-a-metric, prop-existence-and-lower-semicontinuity-of-optimal-couplings, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the optimal couplings used to form the generalized geodesic; the inequality itself is an integral Taylor estimate."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC and the feature-measure energy hypotheses. Fix $r>0$ and let $\mu_0,\mu_1\in\mathcal P_2(\Omega)$ be concentrated on $Q_r$. Let $\pi$ define any generalized $W_2$ geodesic between them, and put $\mu_t=((1-t)x+ty)_\#\pi$. With $C_r=L_rA_r^2+N_rB_r$, for every $t\in[0,1]$,
$$F(\mu_t)\le(1-t)F(\mu_0)+tF(\mu_1)-\frac{\lambda_V-C_r}{2}t(1-t)\int|x-y|^2d\pi.$$
The cost in this inequality is the cost of the specified plan and need not equal $W_2^2(\mu_0,\mu_1)$ when $\lambda_V-C_r<0$. This does not assert global displacement convexity.

## Statement references

[[def-feature-measure-energy]]

[[def-localized-hilbert-lift]]

[[lem-lifted-energy-lipschitz-gradient]]

[[def-generalized-wasserstein-geodesic-and-strong-subgradient]]

[Chizat and Bach, Lemma B.2](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Definition 9.2.4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, $r$, the localized feature energy, endpoint measures, and the generalized-geodesic plan $\pi$.

[F1] On label functions valued in $Q_r$, the lifted smooth feature term has semiconvexity coefficient $-C_r$. [[lem-lifted-energy-lipschitz-gradient]]

[F2] The potential $V$ is $\lambda_V$-semiconvex on every segment in $Q_r$. [[def-feature-measure-energy]]

[F3] A generalized geodesic is the pushforward under $(1-t)x+ty$ of a triple plan with the stated optimal marginals. [[def-generalized-wasserstein-geodesic-and-strong-subgradient]]

[A1] The plan $\pi$ is a probability measure with finite second moments and $x,y\in Q_r$ almost surely. [[def-generalized-wasserstein-geodesic-and-strong-subgradient]]

## Proof


**Given:** The data and hypotheses in the Statement.

1.1 Regard $(x,y)$ as random variables on the probability space $(\mathbb R^{3d},\pi)$ and set $X(z,x,y)=x$, $Y(z,x,y)=y$ in $L^2(\pi;\mathbb R^d)$. The Euclidean label dimension is $3d$ and the output dimension is $d$; the arbitrary-label lift and Taylor statement apply independently of these dimensions. These are admissible $Q_r$-valued lifts by [A1], and $X_t=(1-t)X+tY$ lifts $\mu_t$ by [F3]. Therefore the feature and potential integrals defining $F(\mu_t)$ equal the corresponding lifted integrals. [A1, F3, construct]

2.1 The gradient-Lipschitz estimate [F1] implies $X\mapsto R(\int\Phi(X)d\pi)+\frac{C_r}{2}\|X\|_{L^2(\pi)}^2$ is convex on the segment: its derivative is monotone along the segment, since the gradient difference has norm at most $C_r$ times the segment displacement. The one-dimensional convex secant inequality gives $\displaystyle R\!\left(\int\Phi(X_t)d\pi\right)\le(1-t)R\!\left(\int\Phi(X)d\pi\right)+tR\!\left(\int\Phi(Y)d\pi\right)+\frac{C_r}{2}t(1-t)\|X-Y\|_{L^2(\pi)}^2.$ By [F2], $\int V(X_t)d\pi\le(1-t)\int V(X)d\pi+t\int V(Y)d\pi-\frac{\lambda_V}{2}t(1-t)\|X-Y\|_{L^2(\pi)}^2$. Add these inequalities and use $\|X-Y\|^2=\int|x-y|^2d\pi$ to obtain the displayed claim. [F1, F2, step 1.1] ∎