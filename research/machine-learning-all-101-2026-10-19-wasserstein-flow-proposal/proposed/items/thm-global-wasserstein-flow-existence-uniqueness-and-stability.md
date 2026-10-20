---
id: thm-global-wasserstein-flow-existence-uniqueness-and-stability
kind: theorem
title: The global Wasserstein gradient flow exists uniquely and is stable
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, lem-feature-flow-escape-bound, thm-localized-wasserstein-flow, lem-characteristics-unique-and-stable, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the localized existence, stability, and path-space constructions; the global curve is assembled by cutoff compatibility on finite intervals."
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

Assume AC and the full feature-measure energy hypotheses. Let $\mu_0\in\mathcal P_2(\Omega)$ have finite energy and be concentrated on $Q_{r_0}$. There is a unique global curve $\mu:[0,\infty)\to\mathcal P_2(\Omega)$ in $AC^2_{\mathrm{loc}}$ with $\mu_{t=0}=\mu_0$ that solves the continuity equation with the negative minimum-norm subgradient velocity of the extended potential $F'(\mu_t)+\iota_\Omega$. For every finite $T$, the curve is concentrated on some $Q_{r(T)}$ and satisfies
$$F(\mu_t)-F(\mu_s)=-\int_s^t\int|v_q(u)|^2d\mu_q(u)dq\qquad(0\le s\le t\le T).$$
For any $\mu_0,\nu_0$ concentrated on the same $Q_{r_0}$, their flows obey $\sup_{0\le t\le T}W_2(\mu_t,\nu_t)\le e^{K_TT}W_2(\mu_0,\nu_0)$ for a finite constant $K_T$ depending only on $T$, $r_0$, and a common upper bound for the initial energies. Consequently, W2-convergent initial laws in a common $Q_{r_0}$ have flows converging uniformly in W2 on every compact time interval.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[lem-feature-flow-escape-bound]]

[[thm-localized-wasserstein-flow]]

[Chizat and Bach, Proposition 2.5 and Theorem 2.6](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Giuseppe Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the model hypotheses, $\mu_0,\nu_0$, and a finite time horizon $T$.

[F1] Every localized flow exists uniquely, satisfies the continuity equation and energy identity, and has the localized stability estimate. [[thm-localized-wasserstein-flow]]

[F2] A finite-time radius can be chosen uniformly for initial laws in a fixed $Q_{r_0}$ with uniformly bounded initial energy; the cutoff equation agrees with the equation constrained only by $\Omega$. [[lem-feature-flow-escape-bound]]

[F3] AC supplies the local flows and their compatible path representatives. [[def-axiom-of-choice]]

[F4] Continuous prescribed forcing has unique global constrained characteristics, uniform cutoff bounds for starts in a common $Q_r$, and finite-action PDE solutions are their pushforwards; the self-consistent localized laws obey W2 uniqueness. [[lem-characteristics-unique-and-stable]]

## Proof


**Given:** AC, $T$, and initial laws as in the Statement.

1.1 Let $E_*\ge\max(F(\mu_0),F(\nu_0))$ be a common energy bound. The escape estimate [F2] supplies a radius $R_T$ that works for both localized flows throughout $[0,T]$. By [F1], each localized flow exists on that interval and remains in a smaller $Q_{r(T)}\subset Q_{R_T}$, so the added cutoff normal cone is inactive and each curve solves the equation constrained by $\Omega$. If $S>T$, the curves constructed with a larger radius agree on $[0,T]$ by localized uniqueness [F1]; hence the finite-horizon curves patch to a well-defined global curve. [F1, F2, F3, construct]

2.1 The energy identity on $[0,T]$ is inherited from [F1]. Applying the localized stability estimate on the common radius $R_T$ gives $W_2(\mu_t,\nu_t)\le e^{K_Tt}W_2(\mu_0,\nu_0)$ for $0\le t\le T$; taking the supremum gives the displayed bound. Its right side tends to zero when the initial W2 distance does, proving compact-time uniform convergence. Since $T$ was arbitrary, existence, uniqueness, energy dissipation, and stability hold globally in time. [F1, F2, step 1.1]

3.1 We check uniqueness against every curve in the stated definition, without presuming its energy decreases or its support stays in a cutoff. Choose $q\in Q_1$. The neighborhood premise and derivative growth give $\|d\Phi_x\|\le C(1+|x|)$ on $\Omega$, after increasing $C$ to absorb $q$. Segment integration yields $\|\Phi(x)-\Phi(y)\|\le C(1+|x|+|y|)|x-y|$. Consequently every $\mathcal P_2(\Omega)$ law has a Bochner feature moment, and coupling Cauchy–Schwarz gives $\|m_\alpha-m_\beta\|\le C(1+(\int|x|^2d\alpha)^{1/2}+(\int|y|^2d\beta)^{1/2})W_2(\alpha,\beta)$. The same growth argument for bounded potential supporting vectors shows $V$ has at most quadratic growth. For a competing $AC^2$ solution, second moments are uniformly bounded on $[0,T]$ by the triangle inequality with $\delta_q$, so its moment and forcing $\nabla R(m_t)$ are continuous. The global fixed-forcing construction and superposition representation in [F4] therefore apply with $D=\Omega$. Starting in $Q_{r_0}$, this competitor is concentrated throughout $[0,T]$ on a single $Q_S$, using the uniform radius estimate of [F4] for its bounded forcing. Increase $S$ slightly so the added cutoff constraint is locally inactive relative to $\Omega$. Both the competitor and the constructed flow then solve the same localized model equation on a common larger cutoff, so the law uniqueness estimate in [F4] makes them equal. No energy bound on a previously unconfined competitor was assumed. This completes global uniqueness in the full stated class. [F1, F2, F4, step 1.1, step 2.1] ∎
