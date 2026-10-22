---
id: lem-tgr-emitter-quasistatic-bounds
kind: lemma
title: Exact quasistatic and finite-interval mass-change bounds
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-countable-choice
  - def-tgr-emitter-quasistatic-diagnostic
  - prop-tgr-ideal-evaporation-accounting
  - cor-mean-value-theorem
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tgr-emitter-quasistatic-diagnostic: mathematical-premise
  prop-tgr-ideal-evaporation-accounting: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §2, PDF pp. 6–10, and §3, PDF pp. 10–16, for the stationary horizon and evaporation context. The exact inequalities below are proved from the local ODE."
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, lecture notes for the Roberto Salmeron School in Mathematical Physics (2025), arXiv:2512.24929v1"
      url: "https://arxiv.org/pdf/2512.24929v1"
      locator: "Complete 84-page lecture notes; §1.3, PDF pp. 14–16, and §2.1, PDF pp. 18–20, for stationary-family conventions. The exact inequalities below are proved from the local ODE."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume $\mathrm{AC}_\omega$ as defined by [[def-countable-choice]]. Let $G,c,\hbar,\eta,M_0,M_{\min}>0$ be the relevant constants and initial/cutoff data of [[prop-tgr-ideal-evaporation-accounting]], with $0<\eta\leq1$ and $0<M_{\min}<M_0$. Let
$$
M(t_\infty)=(M_0^3-3\alpha t_\infty)^{1/3}, \qquad \alpha=\frac{\eta\hbar c^4}{15360\pi G^2}, \qquad \tau=\frac{M_0^3-M_{\min}^3}{3\alpha}
$$
be the positive solution and cutoff supplied by that proposition.
Use the diagnostic of [[def-tgr-emitter-quasistatic-diagnostic]]. Then
$$
\epsilon_{\mathrm{qs}}(t_\infty)=\frac{2G\alpha}{c^3M(t_\infty)^2} \leq\frac{2G\alpha}{c^3M_{\min}^2}.
$$
For any $\epsilon_0>0$, the condition $M_{\min}^2\geq2G\alpha/(c^3\epsilon_0)$ therefore implies $\epsilon_{\mathrm{qs}}(t_\infty)\leq\epsilon_0$ throughout $[0,\tau]$.

There is also an exact finite-interval bound. If $0\leq t_\infty\leq t_\infty+\Delta t\leq\tau$ and
$$
\delta:=\frac{3\alpha\Delta t}{M(t_\infty)^3}\leq\frac12,
$$
then
$$
\frac{M(t_\infty+\Delta t)}{M(t_\infty)}=(1-\delta)^{1/3}, \qquad \left|\frac{M(t_\infty+\Delta t)}{M(t_\infty)}-1\right| \leq\frac{2^{2/3}}{3}\,\delta.
$$
Both bounds are exact internal consequences of the adopted ODE. They give no error bound between that ODE and an unconstructed Einstein–quantum backreaction solution.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the fixed-reference ODE, its positive solution, the cutoff and constants of [[prop-tgr-ideal-evaporation-accounting]], with $0<M_{\min}<M_0$, $0<\eta\leq1$, and $\alpha>0$.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every countable family of nonempty sets has a choice function; this is the exact choice assumption carried by the mathematical photon-flux supplier.

[F1] [[prop-tgr-ideal-evaporation-accounting]]: its Statement defines $r_H=2GM/c^2$, $\alpha=\eta\hbar c^4/(15360\pi G^2)$, and the exact positive solution $M(t_\infty)=(M_0^3-3\alpha t_\infty)^{1/3}$ until $M_{\min}>0$.

[F2] [[def-tgr-emitter-quasistatic-diagnostic]]: $t_{\mathrm{cross}}=r_H(M(t_\infty))/c$ and $\epsilon_{\mathrm{qs}}=|M'|t_{\mathrm{cross}}/M$; the latter is a dimensionless ODE diagnostic only.

[F3] [[cor-mean-value-theorem]]: if a function is continuous on a closed interval and differentiable in its interior, its endpoint difference equals its derivative at an interior point times the interval length.

## Proof

**Given:** A positive solution $M$ of the stated ODE on $[0,\tau]$, positive $G,c,\alpha$, and the definitions in [F1]–[F2].

1.1 Differentiate the exact solution in [F1] on $0\leq t_\infty\leq\tau$; since $M(t_\infty)>0$, this gives $M'=-\alpha/M^2$. Also [F1] gives $r_H=2GM/c^2$, so substituting these identities and $t_{\mathrm{cross}}=r_H/c$ into [F2] yields
$$
\epsilon_{\mathrm{qs}}=\frac{(\alpha/M^2)(2GM/c^3)}{M} =\frac{2G\alpha}{c^3M^2}.
$$
All factors are positive on the interval. [given, A1, F1, F2, algebra]

1.2 From [F1], $M(t_\infty+\Delta t)^3=M(t_\infty)^3-3\alpha\Delta t$. Divide by the positive $M(t_\infty)^3$ and take positive cube roots to get $M(t_\infty+\Delta t)/M(t_\infty)=(1-\delta)^{1/3}$. [given, A1, F1, algebra]

2.1 Since $M(t_\infty)\geq M_{\min}>0$, one has $M(t_\infty)^{-2}\leq M_{\min}^{-2}$. The formula in step 1.1 gives the uniform upper bound; if $M_{\min}^2\geq2G\alpha/(c^3\epsilon_0)$, multiplying by the positive denominator yields $\epsilon_{\mathrm{qs}}\leq\epsilon_0$. [given, A1, step 1.1, algebra]

3.1 If $\delta=0$, step 1.2 gives a ratio of one and the bound is equality. If $0<\delta\leq1/2$, $h(x)=(1-x)^{1/3}$ is continuous on $[0,\delta]$, differentiable on its interior, and satisfies $|h'(x)|=\frac13(1-x)^{-2/3}\leq2^{2/3}/3$. Apply [F3] on this nondegenerate interval and use $h(0)=1$ to obtain $|h(\delta)-1|\leq(2^{2/3}/3)\delta$. Step 1.2 gives the claimed ratio bound. [given, A1, F3, step 1.2, algebra] ∎
