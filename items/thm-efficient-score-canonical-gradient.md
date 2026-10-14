---
id: thm-efficient-score-canonical-gradient
kind: theorem
title: Efficient score gives the canonical gradient
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 10
deps: [def-axiom-of-choice, def-countable-choice, def-efficient-score, def-mean-zero-square-integrable-space, def-orthogonality-and-orthogonal-complement, def-pathwise-differentiable-functional, thm-cauchy-schwarz-in-an-inner-product-space, thm-influence-curve-representers, thm-mean-zero-square-integrable-space-is-hilbert, thm-orthogonal-decomposition-by-a-closed-subspace, thm-tangent-space-is-closed-linear-subspace]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lectures 2–3 (Springer, 2002)"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
    - title: "Edward H. Kennedy, Semiparametric theory, arXiv:1709.06418v1 (2017)"
      url: "https://arxiv.org/pdf/1709.06418"
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $H=L^2_0(P)$, let $S_\theta\in H^p$ be a finite-dimensional interest-score vector, and let $\mathcal T_\eta\subseteq\mathcal T\subseteq H$ be closed linear nuisance and full tangent spaces, with $\mathcal T_\eta$ a subspace of $\mathcal T$. Assume the designated allowed score set is exactly

$$\mathcal S=\{a^TS_\theta+t:a\in\mathbb R^p,\ t\in\mathcal T_\eta\},\qquad \mathcal T=\overline{\mathcal S}^{\,L^2(P)},$$

and every allowed one-sided path with score $a^TS_\theta+t\in\mathcal S$ has right target derivative $a$ for the parameter $\theta$. If $I_{\mathrm{eff}}=E_P[S_{\mathrm{eff}}S_{\mathrm{eff}}^T]$ is nonsingular, then $\theta$ is pathwise differentiable and its canonical gradient is

$$\phi_{\mathrm{can}}=I_{\mathrm{eff}}^{-1}S_{\mathrm{eff}}.$$

Its covariance matrix is $E_P[\phi_{\mathrm{can}}\phi_{\mathrm{can}}^T]=I_{\mathrm{eff}}^{-1}$. This theorem does not assert that an estimator attaining the covariance bound exists.

## Facts & Assumptions

**Given:** The score-space decomposition and right-derivative convention in the statement, $S_\theta\in L^2_0(P)^p$, a closed nuisance tangent space $\mathcal T_\eta$, a closed full tangent space $\mathcal T$, the Axiom of Choice for selected score-density representatives, Countable Choice for Hilbert projection/Riesz representation, and nonsingular $I_{\mathrm{eff}}$.

[F1] [[def-efficient-score]]: $S_{\mathrm{eff}}=S_\theta-\Pi_{\mathcal T_\eta}S_\theta$ and $I_{\mathrm{eff}}=E_P[S_{\mathrm{eff}}S_{\mathrm{eff}}^T]$.

[F2] [[def-pathwise-differentiable-functional]]: a derivative represented by $\phi\in L^2_0(P)^p$ through $E_P[\phi s]$ is a pathwise derivative; its canonical gradient is the unique representer in the full tangent space.

[F3] [[thm-influence-curve-representers]]: the canonical gradient is the unique representer in the full tangent space.

[F4] [[def-mean-zero-square-integrable-space]]: $L^2_0(P)$ is the space of mean-zero real $L^2(P)$ classes.

[F5] [[thm-mean-zero-square-integrable-space-is-hilbert]]: under Countable Choice, $L^2_0(P)$ is a real Hilbert space.

[F6] [[thm-tangent-space-is-closed-linear-subspace]]: the full tangent space is a closed linear subspace of $L^2_0(P)$.

[F7] [[thm-orthogonal-decomposition-by-a-closed-subspace]]: under Countable Choice, projection onto a closed linear subspace exists and has an orthogonal residual.

[F8] [[def-orthogonality-and-orthogonal-complement]]: a residual orthogonal to every nuisance direction belongs to the nuisance orthogonal complement.

[F9] [[thm-cauchy-schwarz-in-an-inner-product-space]]: inner products are bounded by products of norms, so represented linear functionals are continuous.

[A1] [[def-axiom-of-choice]]: the selected density representatives in the score definition use the Axiom of Choice.

[A2] [[def-countable-choice]]: Countable Choice is assumed by the Hilbert projection and representer results in [F3], [F5], and [F7].

## Proof

**Given:** The hypotheses above. Write $R=\Pi_{\mathcal T_\eta}S_\theta$, so $S_{\mathrm{eff}}=S_\theta-R$.

1.1 By the orthogonal-projection definition in [F1] and [F7], $R\in\mathcal T_\eta^p$ and each coordinate of $S_{\mathrm{eff}}$ is orthogonal to every element of $\mathcal T_\eta$ by [F8]. Since $\mathcal T_\eta\subseteq\mathcal T$, both $S_\theta$ and $R$ belong to $\mathcal T^p$, hence $S_{\mathrm{eff}}\in\mathcal T^p$. The projection exists by the Hilbert and closed-subspace hypotheses [F5] and [F6] under [A2]; [A1] is carried through the selected score definition. [given, F1, F5, F6, F7, F8, A1, A2]

2.1 Because $S_\theta=S_{\mathrm{eff}}+R$ and $R$ is nuisance-tangent-valued, orthogonality [F8] gives $E_P[S_{\mathrm{eff}}S_\theta^T]=E_P[S_{\mathrm{eff}}S_{\mathrm{eff}}^T]=I_{\mathrm{eff}}$. Therefore for every $a\in\mathbb R^p$ and $t\in\mathcal T_\eta$, $E_P[S_{\mathrm{eff}}(a^TS_\theta+t)]=I_{\mathrm{eff}}a$. [given, F1, F8, step 1.1, algebra]

3.1 If $a^TS_\theta+t=a'^TS_\theta+t'$ for $t,t'\in\mathcal T_\eta$, step 2.1 applied to the difference gives $I_{\mathrm{eff}}(a-a')=0$. Nonsingularity forces $a=a'$, so the target derivative assigned to a score in the allowed score set is well-defined. [given, step 2.1, algebra]

4.1 Set $\phi=I_{\mathrm{eff}}^{-1}S_{\mathrm{eff}}$. For a score $s=a^TS_\theta+t$, step 2.1 gives $E_P[\phi s]=a$. Moreover $\phi\in\mathcal T^p$ by step 1.1 and [F4]. The map $s\mapsto E_P[\phi s]$ is continuous in $L^2(P)$ by [F9], so it extends uniquely from the dense allowed score set to $\mathcal T$ and agrees there with the path derivative. Thus $\phi$ is a representer in the full tangent space. [given, step 1.1, step 2.1, step 3.1, F2, F4, F5, F9]

5.1 By [F3], a representer in $\mathcal T^p$ is the unique canonical gradient, so $\phi_{\mathrm{can}}=I_{\mathrm{eff}}^{-1}S_{\mathrm{eff}}$. The second-moment matrix $I_{\mathrm{eff}}$ is symmetric, hence so is its inverse. Direct multiplication gives $E_P[\phi\phi^T]=I_{\mathrm{eff}}^{-1}I_{\mathrm{eff}}I_{\mathrm{eff}}^{-1}=I_{\mathrm{eff}}^{-1}$. No existence of an estimator is used. [step 4.1, F1, F3, algebra] ∎
