---
id: thm-smc-residual-fixed-horizon-clt-away-from-integer-weights
kind: theorem
title: "Fixed-horizon SMC central limit theorem with residual resampling away from integer weights"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
  - lem-smc-mutation-and-weighted-correction-clt
  - lem-smc-residual-resampling-clt-away-from-integer-weights
  - lem-smc-finite-horizon-empirical-law
  - thm-cramer-wold-device
proof_strategy: direct
axiom_use: "AC is inherited through the finite-horizon particle laws and the cited CLT supplies; the induction and covariance recursion add no selection axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Theorem 2 and Appendix A.1"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4, Theorem 4"
      url: "https://arxiv.org/pdf/math/0602211"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.6"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Fix a finite horizon $t$ and use the target/proposal flow and classes $\Phi_s^{(d)},\Psi_s^{(d)}$ of [[def-smc-clt-function-classes-and-variance-recursions]], with $1\in\Phi_s^{(1)}$ for every $0\le s\le t$. Run SIR with residual resampling at each time. At every $0\le s\le t$, assume either $\upsilon_s=1$ $\widetilde\pi_s$-almost everywhere, or $\widetilde\pi_s(\upsilon_s\in\{1,2,\ldots\})=0$. For $\phi\in\Psi_t^{(d)}$, let $\omega_t^N$ be the corrected weighted empirical law and $\check\eta_t^N$ the post-resampling empirical law. Then
$$\sqrt N\{\omega_t^N(\phi)-\pi_t(\phi)\}\Rightarrow\mathcal N_d(0,V_t(\phi)),\qquad \sqrt N\{\check\eta_t^N(\phi)-\pi_t(\phi)\}\Rightarrow\mathcal N_d(0,\widehat V_t^{\rm res}(\phi)),$$
where $\widehat V_s^{\rm res}=V_s+R_s$ is defined by [[def-smc-clt-function-classes-and-variance-recursions]] in the stated branches. No conclusion is asserted for a nonconstant weight law with positive mass at a positive integer. The horizon is fixed as $N\to\infty$.

## Facts & Assumptions

**Given:** A fixed finite SIR horizon with residual selection, the recursive target-moment class $\Psi_t^{(d)}$, the source condition $1\in\Phi_s^{(1)}$ at every time, and the no-positive-integer-atom or constant-weight condition at every time.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon path-law and particle-law construction.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $\Psi_t$ includes the terminal target moment and recursively places centered forward images in $\Psi_{t-1}$; the source condition is $1\in\Phi_s$; the displayed residual covariance is assigned only in the stated branches.

[F2] [[lem-smc-mutation-and-weighted-correction-clt]]: Given the preceding selected-population CLT, mutation and correction give the weighted-estimator CLT with covariance $V_s$, with the initial ratio CLT at $s=0$.

[F3] [[lem-smc-residual-resampling-clt-away-from-integer-weights]]: Under proposal empirical-law convergence and the stated residual-weight condition, residual selection adds $R_s$ to the weighted-estimator variance and gives the selected-population CLT.

[F4] [[thm-cramer-wold-device]]: Convergence of all scalar linear projections to the corresponding centered Gaussian projections implies vector weak convergence to the multivariate Gaussian with that covariance matrix.

[F5] [[lem-smc-finite-horizon-empirical-law]]: In the stated finite-horizon SIR flow with multinomial or residual selection, proposal empirical averages converge in probability for every proposal-integrable test, and corrected and selected empirical averages do so for every target-integrable test, at each fixed time.

## Proof

**Given:** The hypotheses in the Statement.

1.1 The finite-horizon SIR flow and residual selection satisfy [F5], so all its integrable-test empirical-law conclusions hold at every $s\le t$, as required by [F2] and [F3]. Fix $a\in\mathbb R^d$ and put $h=a^\top\phi$. The bound $|a^\top x|\le\|a\|\,\|x\|$ and linearity of each $E_s$ show from [F1] that $h\in\Psi_t^{(1)}$. We prove by induction on $s\le t$ the scalar assertion for every test in $\Psi_s^{(1)}$; at $s=t$ this includes $h$. [A1, F1, F5, given, algebra]

1.2 Let $1\le s\le t$, assume the assertion holds for every test in $\Psi_{s-1}$, and take arbitrary $h\in\Psi_s$. By [F1], $E_s(h-\pi_s h)\in\Psi_{s-1}$, so the induction hypothesis gives the selected CLT needed by [F2] for the centered weighted test. The source condition $1\in\Phi_s$ makes the correction ratio well defined in the stated class. Thus [F2] yields the weighted CLT at time $s$ with covariance $V_s(h)$. [F1, F2, given, induction]

2.1 At time zero, let $h\in\Psi_0$. By [F2], the initial weighted ratio has CLT variance $V_0(h)$. The assumed residual-weight branch either has constant weight one, in which case selection is deterministic and $R_0(h)=0$, or has no positive-integer atom; in the latter case the target moment and weighted CLT meet [F3], which gives the selected CLT with its stated $R_0(h)$. [F1, F2, F3, step 1.1]

2.2 The target moment $h\in\Psi_s$, the weighted CLT just obtained, the empirical laws from step 1.1, and the residual-weight condition satisfy [F3]. Residual selection gives the selected CLT with covariance $V_s(h)+R_s(h)=\widehat V_s^{\rm res}(h)$. This proves the induction assertion for every $h\in\Psi_s$ while retaining the stated weight condition at each time. [F1, F2, F3, step 1.1, step 1.2]

3.1 The base step 2.1 and induction steps 1.2, 2.2 prove both scalar limits at time $t$ for every $h\in\Psi_t$. For each $a\in\mathbb R^d$, $a^\top\phi\in\Psi_t$ by step 1.1 and has covariance projections $a^\top V_t(\phi)a$ and $a^\top\widehat V_t^{\rm res}(\phi)a$. Since $a$ was arbitrary, [F4] yields the two vector limits. The integer-boundary branch is excluded by hypothesis and receives no conclusion here. [F1, F4, step 1.1, step 2.1, step 1.2, step 2.2] ∎
