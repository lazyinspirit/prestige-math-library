---
id: lem-partial-energy-continuous-under-w2
kind: lemma
title: Partial one-homogeneous energy is continuous under W2 convergence
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy, def-wasserstein-two-space-and-couplings, thm-bounded-linear-maps-commute-with-bochner-integration, def-axiom-of-choice, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies a sequence of couplings with quadratic costs approaching the W2 infimum; the estimate after coupling selection is deterministic."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC. Let $\mathcal H$ be a separable real Hilbert space, let $R:\mathcal H\to[0,\infty)$ be continuous, and let $\Theta\subseteq\mathbb R^q$ be closed and convex. Let $\varphi:\Theta\to\mathcal H$ and $\widetilde V:\Theta\to[0,\infty)$ be bounded Lipschitz maps, and set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. Here $\mathcal P_2(\mathbb R\times\Theta)$ means the Borel probability measures on $\mathbb R^{1+q}$ concentrated on $\mathbb R\times\Theta$ and having finite second moment. For every such law define the lower-regularity energy by
$$m_\mu=\int_{\mathbb R\times\Theta}w\varphi(\theta)\,d\mu(w,\theta),\qquad F(\mu)=R(m_\mu)+\int_{\mathbb R\times\Theta}|w|\widetilde V(\theta)\,d\mu(w,\theta).$$
These integrals exist and $F(\mu)$ is finite. If $\mu_n,\mu\in\mathcal P_2(\mathbb R\times\Theta)$ and $W_2(\mu_n,\mu)\to0$, then $F(\mu_n)\to F(\mu)$. Whenever the same data also satisfy the full hypotheses of the feature-measure energy definition, this formula agrees with that definition's $F$ on these laws. The present continuity assertion does not require those additional domain or differentiability hypotheses.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-two-space-and-couplings]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[[thm-bochner-integrability-criterion]]

[[lem-bochner-integral-norm-inequality]]

[[lem-linearity-of-the-bochner-integral]]

[Chizat and Bach, Lemma A.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The model and W2-convergent laws in the Statement.

[A1] AC supplies a sequence of couplings whose quadratic costs approach the W2 infimum. [[def-axiom-of-choice]]

[F1] W2 is the infimum of quadratic coupling costs, so couplings can be chosen with RMS displacement tending to zero. [[def-wasserstein-two-space-and-couplings]]

[F2] The coupling marginals are the pushforwards under the coordinate projections, so the scalar integral identity follows first for simple functions and then by approximation. For Bochner feature integrals, apply bounded linear functionals, commute them with the Bochner integral, and identify the resulting vectors by all scalar evaluations. [[def-wasserstein-two-space-and-couplings]] [[thm-bounded-linear-maps-commute-with-bochner-integration]]

[F3] A strongly measurable function is Bochner integrable exactly when its norm is integrable. [[thm-bochner-integrability-criterion]]

[F4] The Bochner integral is linear and its norm is at most the integral of the pointwise norm. [[lem-linearity-of-the-bochner-integral]] [[lem-bochner-integral-norm-inequality]]

[F5] For data satisfying its full hypotheses, the feature-energy definition uses the same risk of the Bochner feature moment plus the integrated penalty whenever both integrals are finite. [[def-feature-measure-energy]]

## Proof

**Given:** $\mu_n,\mu$ and [A1], [F1]–[F4].

1.1 First, $\Phi$ is Borel measurable with values in the separable space $\mathcal H$. Fix a countable dense sequence $(h_j)$ in $\mathcal H$; the map assigning to $\Phi(u)$ a nearest point among $h_1,\ldots,h_k$, breaking ties by least index, is finite-valued and measurable, and its error tends to zero as $k\to\infty$. Thus $\Phi$ is strongly measurable. Moreover, $\|\Phi(w,\theta)\|\le\|\varphi\|_\infty|w|$. A probability law with finite second moment has $\int|w|d\mu\le(\int|w|^2d\mu)^{1/2}<\infty$ by Cauchy–Schwarz. Thus [F3] gives existence of its feature moment, while $0\le V\le\|\widetilde V\|_\infty|w|$ gives a finite penalty; $R$ is finite-valued. This proves the asserted well-definedness for every law in the Statement. By [A1] and [F1] choose couplings $\pi_n$ of $\mu_n$ and $\mu$ with $\delta_n^2=\int(|w-w'|^2+|\theta-\theta'|^2)d\pi_n\to0$. By [F2], the coupling marginal identities hold also for these Bochner feature integrals: apply a bounded linear functional, use the scalar marginal identity, and identify the vectors by all such evaluations. Consequently [F4] and the pointwise bound $$\|w\varphi(\theta)-w'\varphi(\theta')\|\le\|\varphi\|_\infty|w-w'|+\operatorname{Lip}(\varphi)|w'|\,|\theta-\theta'|$$ give $$\|m_{\mu_n}-m_\mu\|\le\left(\|\varphi\|_\infty+\operatorname{Lip}(\varphi)\Bigl(\int|w'|^2d\mu(w',\theta')\Bigr)^{1/2}\right)\delta_n\longrightarrow0.$$ The second-moment factor belongs to the fixed limit marginal and is finite, with no bound on the diameter or interior of $\Theta$ required. [A1, F1, F2, F3, F4, given, algebra]

2.1 Since $\bigl||w|-|w'|\bigr|\le|w-w'|$, the same estimate with scalar $\widetilde V$ in place of $\varphi$ gives $\int Vd\mu_n\to\int Vd\mu$. Step 1.1 gives convergence of feature moments in $\mathcal H$; continuity of $R$ therefore gives convergence of the risk terms. Adding the two limits proves $F(\mu_n)\to F(\mu)$. Under the full feature-energy hypotheses, the identical feature and penalty integrals are finite by step 1.1, so the finite branch in that definition gives exactly this $F$. If $\Theta=\varnothing$, no law in the Statement exists and the assertion is vacuous; zero maps, zero weights and singleton or lower-dimensional $\Theta$ are included in the estimates. [F1, F2, F4, F5, step 1.1, given, algebra] ∎
