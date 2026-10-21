---
id: lem-feature-energy-continuous-under-w2-on-a-common-cutoff
kind: lemma
title: Feature energy is W2-continuous on a common cutoff
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy, def-wasserstein-two-space-and-couplings, thm-bounded-linear-maps-commute-with-bochner-integration]
justified_by: []
proof_strategy: direct
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

Assume the feature-energy hypotheses on a closed convex set $Q_r\subseteq\Omega$, and let $\mu_n,\mu\in\mathcal P_2(\mathbb R^d)$ be concentrated on $Q_r$, with finite feature energy and $W_2(\mu_n,\mu)\to0$. Then $F(\mu_n)\to F(\mu)$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-two-space-and-couplings]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[Chizat and Bach, Lemma A.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The measures and cutoff in the Statement.

[F1] On $Q_r$, $d\Phi$ is Lipschitz and uniformly bounded by the stated linear growth bound. At every $x\in Q_r$ there is also a supporting vector $\xi_x\in\partial_{\lambda_V}V(x)$ with $|\xi_x|\le C_1+C_2r$; the definition requires this bounded selection rather than a bound on the full relative-domain subdifferential. [[def-feature-measure-energy]]

[F2] $W_2(\mu_n,\mu)^2$ is the infimum of $\int|x-y|^2d\pi$ over all Borel couplings $\pi$ of $\mu_n,\mu$. [[def-wasserstein-two-space-and-couplings]]

[F3] The coupling marginals are the pushforwards of $\pi$ under its coordinate projections, so the scalar integral identity holds first for simple functions and then by approximation. For the Bochner feature moments, apply each bounded linear functional, use its commutation with Bochner integration, and use equality of all evaluations to identify the vectors. [[def-wasserstein-two-space-and-couplings]] [[thm-bounded-linear-maps-commute-with-bochner-integration]]

## Proof

**Given:** The data in the Statement.

1.1 For $x,y\in Q_r$, the segment between them lies in $Q_r$. The bound on $d\Phi$ and the fundamental theorem of calculus on this segment give $\|\Phi(x)-\Phi(y)\|\le L_\Phi|x-y|$. For $V$, divide the segment into $N$ equal pieces. The two $\lambda_V$-support inequalities at consecutive endpoints and the uniform bound $M_V$ on subgradients yield $|V(x_{j+1})-V(x_j)|\le M_V|x-y|/N+|\lambda_V||x-y|^2/(2N^2)$. Summing and letting $N\to\infty$ gives $|V(x)-V(y)|\le M_V|x-y|$. [F1, given, algebra]

2.1 For any coupling $\pi\in\Gamma(\mu_n,\mu)$, [F3] and [F1] give $\|\int\Phi d\mu_n-\int\Phi d\mu\|\le L_\Phi\int|x-y|d\pi\le L_\Phi(\int|x-y|^2d\pi)^{1/2}$. The same coupling gives $|\int Vd\mu_n-\int Vd\mu|\le M_V(\int|x-y|^2d\pi)^{1/2}$. Taking the infimum over couplings and using [F2] makes both differences tend to zero. Continuity of $R$ then gives $F(\mu_n)\to F(\mu)$. [F1, F2, F3, step 1.1, algebra] ∎
