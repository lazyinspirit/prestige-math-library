---
id: thm-smc-multinomial-fixed-horizon-clt
kind: theorem
title: "Fixed-horizon SMC central limit theorem with multinomial resampling"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
  - lem-smc-mutation-and-weighted-correction-clt
  - lem-smc-multinomial-resampling-clt
  - lem-smc-finite-horizon-empirical-law
  - thm-cramer-wold-device
proof_strategy: direct
axiom_use: "AC is inherited through the finite-horizon particle laws and the cited CLT supplies; the induction and covariance recursion add no selection axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Theorem 1 and Appendix A.1"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4, Theorem 4"
      url: "https://arxiv.org/pdf/math/0602211"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.6"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Fix a finite horizon $t$ and use the target/proposal flow and classes $\Phi_s^{(d)},\Psi_s^{(d)}$ of [[def-smc-clt-function-classes-and-variance-recursions]], with $1\in\Phi_s^{(1)}$ for every $0\le s\le t$. Run the SIR procedure with multinomial resampling at each time. For $\phi\in\Psi_t^{(d)}$, let $\omega_t^N$ be the corrected weighted empirical law and $\check\eta_t^N$ the post-resampling empirical law. Then
$$\sqrt N\{\omega_t^N(\phi)-\pi_t(\phi)\}\Rightarrow\mathcal N_d(0,V_t(\phi)),\qquad \sqrt N\{\check\eta_t^N(\phi)-\pi_t(\phi)\}\Rightarrow\mathcal N_d(0,\widehat V_t^{\rm multi}(\phi)),$$
where $\widehat V_t^{\rm multi}(\phi)=V_t(\phi)+\operatorname{Cov}_{\pi_t}(\phi)$. The horizon is fixed as $N\to\infty$; the theorem asserts no time-uniform finite-particle accuracy.

## Facts & Assumptions

**Given:** A fixed finite SIR horizon with multinomial selection, the recursive target-moment class $\Psi_t^{(d)}$, and the source normalizer condition $1\in\Phi_s^{(1)}$ at every time through $t$.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon path-law and particle-law construction.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $\Psi_t$ includes the terminal target moment and recursively places each centered forward image in $\Psi_{t-1}$; the source requires $1\in\Phi_s$; $V_t$ and $\widehat V_t^{\rm multi}$ are the stated covariance recursions.

[F2] [[lem-smc-mutation-and-weighted-correction-clt]]: Given the preceding selected-population CLT, the mutation and correction steps give the weighted-estimator CLT with covariance $V_s$; the initial weighted proposal has the ratio CLT under $\Psi_0$.

[F3] [[lem-smc-multinomial-resampling-clt]]: Given the weighted-estimator CLT, a finite target second moment, and the empirical-law conclusions of [F5], multinomial selection adds $\operatorname{Cov}_{\pi_s}(\phi)$ and gives the selected-population CLT.

[F4] [[thm-cramer-wold-device]]: Convergence of all scalar linear projections to the corresponding centered Gaussian projections implies vector weak convergence to the multivariate Gaussian with that covariance matrix.

[F5] [[lem-smc-finite-horizon-empirical-law]]: In the stated finite-horizon SIR flow with multinomial or residual selection, proposal empirical averages converge in probability for every proposal-integrable test, and corrected and selected empirical averages do so for every target-integrable test, at each fixed time.

## Proof

**Given:** The hypotheses in the Statement.

1.1 The finite-horizon SIR flow and multinomial selection satisfy [F5], so all its integrable-test empirical-law conclusions hold at every $s\le t$, as required by [F2] and [F3]. Fix $a\in\mathbb R^d$ and put $h=a^\top\phi$. The bound $|a^\top x|\le\|a\|\,\|x\|$ and linearity of each $E_s$ show from [F1] that $h\in\Psi_t^{(1)}$. We prove by induction on $s\le t$ the scalar assertion for every test in $\Psi_s^{(1)}$; at $s=t$ this includes $h$. [A1, F1, F5, given, algebra]

1.2 Let $1\le s\le t$, assume the assertion holds for every test in $\Psi_{s-1}$, and take arbitrary $h\in\Psi_s$. By [F1], $E_s(h-\pi_s h)\in\Psi_{s-1}$, so the induction hypothesis gives the selected CLT needed by [F2] for the centered weighted test. The source condition $1\in\Phi_s$ makes the correction ratio well defined in the same class. Thus [F2] yields the weighted CLT at time $s$ with covariance $V_s(h)$. [F1, F2, given, induction]

2.1 At time zero, let $h\in\Psi_0$. By [F2], the initial weighted ratio has CLT variance $V_0(h)$. The target moment in $\Psi_0$ and the weighted CLT meet [F3], which gives the post-resampling CLT with variance $V_0(h)+\operatorname{Var}_{\pi_0}(h)$. [F1, F2, F3, step 1.1]

2.2 The target moment $h\in\Psi_s$, the weighted CLT just obtained, and the empirical laws from step 1.1 satisfy [F3]. Multinomial resampling therefore gives the selected CLT with covariance $V_s(h)+\operatorname{Var}_{\pi_s}(h)=\widehat V_s^{\rm multi}(h)$. This proves the induction assertion for every $h\in\Psi_s$. [F1, F2, F3, step 1.1, step 1.2]

3.1 The base step 2.1 and induction steps 1.2, 2.2 prove both scalar limits at time $t$ for every $h\in\Psi_t$. For each $a\in\mathbb R^d$, $a^\top\phi\in\Psi_t$ by step 1.1 and has covariance projections $a^\top V_t(\phi)a$ and $a^\top\widehat V_t^{\rm multi}(\phi)a$. Since $a$ was arbitrary, [F4] gives the two vector limits. No bound uniform over the horizon follows from this fixed-$t$ argument. [F1, F4, step 1.1, step 2.1, step 1.2, step 2.2] ∎
