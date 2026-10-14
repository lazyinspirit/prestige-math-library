---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
id: ex-efficient-score-nuisance-projection
kind: example
title: A finite nuisance-score projection
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 11
deps: [def-axiom-of-choice, def-countable-choice, def-efficient-score, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-pathwise-differentiable-functional, def-probability-measure, def-score-and-fisher-information, thm-efficient-score-canonical-gradient]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Let $U,V$ be the coordinate functions on $\Omega=\{-1,1\}^2$, with $P$ uniform and counting measure as a common dominator. For $2|\theta|+|\eta|<1$, define
$$P_{\theta,\eta}\{(u,v)\}=\frac14\bigl(1+\theta(u+v)+\eta u\bigr).$$
Take $\theta$ as the scalar parameter of interest and $\eta$ as nuisance. At $(0,0)$ designate the straight one-sided paths $(\theta_t,\eta_t)=(at,bt)$ as allowed paths, with those having $a=0$ designated as nuisance paths. Then the interest score is $S_\theta=U+V$, the nuisance tangent space is $\mathcal T_\eta=\operatorname{span}\{U\}$, and the full tangent space is $\mathcal T=\operatorname{span}\{U,V\}$. The efficient score is $V$, the efficient information is $1$, and the canonical gradient for $\theta$ is $V$.

## Facts & Assumptions

**Given:** The four-point sample space, uniform law $P=P_{0,0}$, and the displayed parameterized family.

[F1] [[def-efficient-score]]: $S_{\mathrm{eff}}=S_\theta-\Pi_{\mathcal T_\eta}S_\theta$ and $I_{\mathrm{eff}}=E_P[S_{\mathrm{eff}}^2]$ in the scalar case.

[F2] [[def-pathwise-differentiable-functional]]: one-sided DQM paths define tangent scores, their closed linear span is the tangent space, and the canonical gradient is the unique representer in that space.

[F3] [[def-score-and-fisher-information]]: in a dominated differentiable parametric submodel, score coordinates are derivatives of the log density.

[F4] [[thm-efficient-score-canonical-gradient]]: under Axiom of Choice and Countable Choice, if the full score space is the interest-score plus nuisance-tangent sum, the target derivative along score $a^TS_\theta+t$ is $a$, and $I_{\mathrm{eff}}$ is nonsingular, then $I_{\mathrm{eff}}^{-1}S_{\mathrm{eff}}$ is the canonical gradient.

[F5] [[def-probability-measure]]: a probability measure has total mass one.

[F6] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectations of integrable functions are their integrals against the law.

[A1] [[def-axiom-of-choice]]: the general score-density convention assumes the Axiom of Choice.

[A2] [[def-countable-choice]]: Countable Choice is assumed by the Hilbert projection and canonical-gradient results used here.

## Verification

**Given:** $U(u,v)=u$, $V(u,v)=v$, $P(u,v)=1/4$, and the displayed model.

1.1 For each parameter in the stated domain, $|\theta(u+v)+\eta u|\le2|\theta|+|\eta|<1$, so each mass is positive. Their sum is one because $\sum_{u,v}(u+v)=\sum_{u,v}u=0$ and the four constant terms sum to four. Thus the family consists of probability laws by [F5]. [given, F5, algebra]

1.2 Finite averaging, using [F6], gives $E_PU=E_PV=0$, $E_PU^2=E_PV^2=1$, and $E_PUV=0$. Thus $w=a(U+V)+bU$ is bounded and centered. Along $(\theta_t,\eta_t)=(at,bt)$ the likelihood ratio is $1+tw$, which is nonnegative and integrates to one for sufficiently small $t\ge0$. The square-root identity $\sqrt{1+z}-1-z/2=-z^2/[2(1+\sqrt{1+z})^2]$ gives an $L^2(P)$ remainder bounded by $t^2\|w^2\|_2/2=o(t)$, so the path is DQM with score $w$ by [F2]. Direct differentiation of the log density gives interest score $U+V$ and nuisance score $U$ by [F3]. Thus the designated nuisance scores span $\{U\}$, which is closed since $\|cU\|_2=|c|$, and all designated scores $a(U+V)+bU$ span $\{U,V\}$, which is closed because $\|aU+bV\|_2^2=a^2+b^2$. [given, F2, F3, F6, algebra]

2.1 Since $U\in\mathcal T_\eta$ and $E_P[(U+V-U)U]=E_P[VU]=0$, $U$ is the orthogonal projection of $S_\theta=U+V$ onto $\mathcal T_\eta$. Hence $S_{\mathrm{eff}}=V$ and $I_{\mathrm{eff}}=E_PV^2=1$ by [F1]. [given, F1, step 1.2, algebra]

3.1 Along each direction $(at,bt)$, the target parameter is $\theta_t=at$, so its right derivative is $a$. Step 1.2 gives the full score-space decomposition $\mathcal T=\overline{\{aS_\theta+bU:a,b\in\mathbb R\}}$; step 2.1 gives nonsingular $I_{\mathrm{eff}}=1$. The finite densities are explicit, and the theorem's stated axiom inputs are Axiom of Choice [A1] and Countable Choice [A2]. Therefore the hypotheses of [F4] apply, and the canonical gradient is $I_{\mathrm{eff}}^{-1}S_{\mathrm{eff}}=V$. [given, F2, F4, step 1.2, step 2.1, A1, A2, algebra] ∎
