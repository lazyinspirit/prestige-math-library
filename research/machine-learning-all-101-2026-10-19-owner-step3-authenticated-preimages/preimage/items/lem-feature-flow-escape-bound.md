---
id: lem-feature-flow-escape-bound
kind: lemma
title: The localized flow cannot escape all cutoffs in finite time
status: draft
dependency_level: 10
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, thm-localized-wasserstein-flow, lem-characteristics-unique-and-stable, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the localized flow and its path representatives; the cutoff-radius estimate is deterministic."
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

Assume AC and the feature-measure energy hypotheses. Let $r_0>0$ and let $\mu_0\in\mathcal P_2(\Omega)$ have finite energy and be concentrated on $Q_{r_0}$. Set $M_0=\sup\{\|\nabla R(z)\|:R(z)\le F(\mu_0)\}$, $a=(1+M_0)C_1$, and $b=(1+M_0)C_2$. For $T<\infty$, define
$$r(T)=\begin{cases}(r_0+aT),&b=0,\\(r_0+a/b)e^{bT}-a/b,&b>0.\end{cases}$$
For every $R>r(T)$, the localized flow with indicator $\iota_{Q_R}$ remains in $Q_{r(T)}$ for $0\le t\le T$ and therefore solves the continuity equation with the constraint $\Omega$ alone on this interval. Localized flows with different cutoffs larger than $r(T)$ agree on $[0,T]$. In particular no trajectory starting in $Q_{r_0}$ can escape every cutoff in finite time.

## Statement references

[[def-feature-measure-energy]]

[[thm-localized-wasserstein-flow]]

[[def-axiom-of-choice]]

[Chizat and Bach, Proposition 2.5 and Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the model assumptions, initial law and cutoff family.

[F1] Along a localized flow the energy decreases, and $R(m_{\mu_t})\le F(\mu_0)$ because $V\ge0$. [[thm-localized-wasserstein-flow]] [[def-feature-measure-energy]]

[F2] The constrained minimum-norm field is no larger than the admissible field obtained by adding zero from the cutoff normal cone; on $Q_s$ its norm is at most $(1+M_0)(C_1+C_2s)$. [[def-feature-measure-energy]] [[thm-localized-wasserstein-flow]]

[F3] If a point of $\Omega$ is within distance $s$ of $Q_r$, then it lies in $Q_{r+s}$. [[def-feature-measure-energy]]

[F4] AC supplies the locally absolutely continuous label paths representing the localized flow. [[def-axiom-of-choice]] [[thm-localized-wasserstein-flow]]

[F5] Solutions using the same $\Omega$-constrained velocity are unique by their W2 stability estimate. [[lem-characteristics-unique-and-stable]]

## Proof


**Given:** AC, $T$, and $\mu_0$ as in the Statement.

1.1 By [F1], $m_{\mu_t}$ stays in the $R$-sublevel set used to define $M_0$. The unconstrained part of the negative velocity has norm at most $M_0(C_1+C_2R)+(C_1+C_2R)=(a+bR)$. Since $0$ belongs to the normal cone of $Q_R$ at each point of $Q_R$, adding the cutoff constraint and taking the minimum norm cannot increase this bound by [F2]. Thus every localized label path has speed at most $a+bR$ before leaving $Q_R$. [F1, F2, F4]

2.1 Fix $R>r(T)$ and a label path starting at $u_0\in Q_{r_0}$. Let $s_R(t)=\int_0^t|\dot X_q|dq$. By [F3], its displacement from $u_0$ gives $\operatorname{dist}(X_t,Q_{r_0})\le s_R(t)$ and hence $X_t\in Q_{r_0+s_R(t)}$. At almost every time apply [F2] at its current radius (the bounded potential supporting vector at the current point remains admissible after restriction to $Q_R$), obtaining $s_R'(t)\le a+b(r_0+s_R(t))$ almost everywhere. If $b>0$, multiply by $e^{-bt}$ and integrate to get $r_0+s_R(t)\le(r_0+a/b)e^{bt}-a/b$; if $b=0$, integration gives $r_0+s_R(t)\le r_0+at$. Thus $r_0+s_R(t)\le r(t)$. This estimate holds for the entire localized path; in particular $r(T)<R$ places it in the relative $\Omega$-interior of $Q_R$ on this interval. The bound holds for almost every label, so the measure flow stays in $Q_{r(T)}$. [F2, F3, step 1.1]

3.1 For $x\in Q_{r(T)}$, the relative-neighborhood condition places an $\Omega$-neighborhood of $x$ inside $Q_R$ because $R>r(T)$. Thus the cutoff and $\Omega$ constraints have the same local normal cone along these paths, so each localized flow solves the equation with the common $\Omega$-constrained field. If two cutoffs exceed $r(T)$, [F5] gives equality for the common initial law. Taking $T$ arbitrary and increasing the cutoff constructs a compatible global flow, so finite-time escape from all cutoffs is impossible. [F3, F5, step 2.1] ∎