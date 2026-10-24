---
id: thm-general-regular-estimator-convolution-bound
kind: theorem
title: Convolution bound for general regular estimators
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps:
  - def-pathwise-differentiable-functional
  - thm-influence-curve-representers
  - def-qmd-path
  - thm-qmd-implies-lan-for-iid
  - def-lan-experiment
  - def-regular-estimator-under-local-alternatives
  - lem-finite-dimensional-functional-convolution-bound
  - def-axiom-of-choice
  - def-countable-choice
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
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lectures 2 and 4 (Springer, 2002)
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §§3–5 (2017)
      url: https://arxiv.org/pdf/1709.06418
---

## Statement

Assume AC and Countable Choice. Let $\psi$ be pathwise differentiable at $P$ with tangent space $\mathcal T$ and canonical gradient $\phi_{\rm can}\in\mathcal T^k$, and write $V_{\rm can}=P[\phi_{\rm can}\phi_{\rm can}^T]$. If $\mathcal T\ne\{0\}$, suppose a directed family of finite-dimensional, dominated QMD models $\{P_{\gamma,\theta}:\theta\in\Theta_\gamma\subseteq\mathbb R^{d_\gamma}\}$, with each $\Theta_\gamma$ open and $P_{\gamma,\theta_{\gamma,0}}=P$, has score spans $\mathcal S_\gamma\subseteq\mathcal T$ whose union is dense in $\mathcal T$. In each model let $S_\gamma\in L^2_0(P)^{d_\gamma}$ be a score basis, let $I_\gamma=P[S_\gamma S_\gamma^T]$ be nonsingular, and let $D_\gamma=P[\phi_{\rm can}S_\gamma^T]$. Assume for each fixed $h\in\mathbb R^{d_\gamma}$ that $\sqrt n\{\psi(P_{\gamma,\theta_{\gamma,0}+h/\sqrt n})-\psi(P)\}\to D_\gamma h$, and that under each local law the centered estimator $\sqrt n\{\widehat\psi_n-\psi(P_{\gamma,\theta_{\gamma,0}+h/\sqrt n})\}$ converges to one common law $L$, independent of $\gamma$ and $h$. Suppose $L$ has finite covariance. By [[thm-qmd-implies-lan-for-iid]], each model has the required LAN proxy; [[lem-finite-dimensional-functional-convolution-bound]] then applies with derivative matrix $D_\gamma$. If $\mathcal T=\{0\}$, no submodel family is needed. Then

$$\operatorname{Cov}(L)\succeq V_{\rm can}.$$

This is a lower bound for general regular estimators; asymptotic linearity is not assumed.

## Facts & Assumptions

**Given:** AC and Countable Choice; the tangent space and canonical gradient; the directed dense family of finite-dimensional QMD submodels; a common regular limit law with finite covariance; and the finite-dimensional convolution premise stated above.

[F1] [[def-pathwise-differentiable-functional]] and [[thm-influence-curve-representers]]: $\dot\psi_P$ is continuous linear on $\mathcal T$ and is represented by the canonical gradient $\phi_{\rm can}\in\mathcal T^k$.

[F2] [[def-qmd-path]], [[thm-qmd-implies-lan-for-iid]], and [[def-lan-experiment]]: each finite-dimensional submodel is dominated and QMD at an interior point; for every fixed local displacement its iid experiment has the LAN proxy expansion and total-variation control required by the LAN definition.

[F3] [[def-regular-estimator-under-local-alternatives]]: regularity in a finite-dimensional local experiment means the centered estimator has a common limit law under every fixed local displacement; the statement imposes this for the displayed differentiable target in each submodel.

[F4] [[lem-finite-dimensional-functional-convolution-bound]]: in a finite-dimensional LAN experiment with target derivative $D_\gamma$ and information $I_\gamma$, the common regular limit law is a convolution with an independent Gaussian component of covariance $D_\gamma I_\gamma^{-1}D_\gamma^T$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the QMD/LAN and finite-dimensional probability suppliers.

[A2] [[def-countable-choice]]: Countable Choice supplies the Hilbert projection and Riesz representation used for the canonical gradient.

## Proof

**Given:** The hypotheses in the statement. For one index $\gamma$, abbreviate $S=S_\gamma$, $I=I_\gamma$, $D=D_\gamma$, and $\mathcal S=\mathcal S_\gamma$.

1.1 For any $a\in\mathbb R^k$, the projection of $a^T\phi_{\rm can}$ onto $\mathcal S$ is $a^TDI^{-1}S$: its residual has inner product $a^TD-a^TDI^{-1}P[SS^T]=0$ with every linear combination of the score coordinates. Therefore the covariance matrix of the projected gradient is $DI^{-1}D^T$. [A2, F1, given, algebra]

2.1 By [F2] and [[thm-qmd-implies-lan-for-iid]], this finite-dimensional submodel has the required LAN proxy and total-variation control. The regularity premise in the statement and [F4] give $L\stackrel d=G_\gamma+W_\gamma$, where $G_\gamma\sim N_k(0,DI^{-1}D^T)$ is independent of $W_\gamma$. Since $L$ has finite covariance and $G_\gamma$ does, $W_\gamma$ has finite covariance as well; independence yields $\operatorname{Cov}(L)=DI^{-1}D^T+\operatorname{Cov}(W_\gamma)\succeq DI^{-1}D^T$. [A1, F2, F3, F4, step 1.1, given]

2.2 If $\mathcal T=\{0\}$, then $\phi_{\rm can}=0$ and $\operatorname{Cov}(L)\succeq0=V_{\rm can}$. Otherwise fix $a\in\mathbb R^k$ and $\varepsilon>0$. Density of the union of the $\mathcal S_\gamma$ in $\mathcal T$ provides an index $\gamma$ and $g\in\mathcal S_\gamma$ with $\|g-a^T\phi_{\rm can}\|_{L^2(P)}<\varepsilon$. The projection formula in step 1.1 is orthogonal, so for any $g\in\mathcal S_\gamma$, $\|a^T\phi_{\rm can}-g\|_2^2=\|a^T\phi_{\rm can}-\Pi_{\mathcal S_\gamma}(a^T\phi_{\rm can})\|_2^2+\|\Pi_{\mathcal S_\gamma}(a^T\phi_{\rm can})-g\|_2^2$. Thus the projection error is below $\varepsilon$, and the quadratic forms $a^TD_\gamma I_\gamma^{-1}D_\gamma^Ta$ approach $a^TV_{\rm can}a$ as $\varepsilon\downarrow0$. [F1, step 1.1, given, choose, algebra]

3.1 When $\mathcal T\ne\{0\}$, step 2.1 gives $a^T\operatorname{Cov}(L)a\ge a^TD_\gamma I_\gamma^{-1}D_\gamma^Ta$ for every $\gamma$. Take the approximation in step 2.2 with arbitrarily small $\varepsilon$ to obtain $a^T\operatorname{Cov}(L)a\ge a^TV_{\rm can}a$. Since this holds for every $a$, $\operatorname{Cov}(L)\succeq V_{\rm can}$. Together with the zero-tangent case in step 2.2, this proves the claim. [step 2.1, step 2.2, algebra] ∎

