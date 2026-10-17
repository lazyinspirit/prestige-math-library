---
id: pthm-tgr-finite-stationary-response
kind: physics-theorem
title: Conditional finite stationary response
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
deps:
  - post-tgr-selected-gibbs-kms-preparation
  - thm-tgr-finite-cell-gibbs-factorization
  - thm-tgr-finite-response-redshift
  - def-countable-choice
dependency_roles:
  post-tgr-selected-gibbs-kms-preparation: physical-assumption
  thm-tgr-finite-cell-gibbs-factorization: mathematical-premise
  thm-tgr-finite-response-redshift: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Exact finite-time and spectral predictions for neutral bounded observables and controls in one actually constructed independent finite cell; no observation, infinite-time relaxation, dc transport coefficient, or response law for arbitrary interacting reduced states."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2"
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
      locator: "Complete 17-page scanned PDF; response kernel and causal convolution, printed pp. 572–575."
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.5"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
      locator: "Complete 11-page lecture note; interaction-picture response, retarded kernel, spectral representation, and detailed-balance/FDT discussion."
---

## Statement

Fix one cell $i$ of the preparation in [[post-tgr-selected-gibbs-kms-preparation]]. Let $N_i>0$ be its dimensionless lapse, $H_i=H_i^*$ its proper Hamiltonian in joules, $Q_i$ its dimensionless number matrix, $\mu_i$ its chemical potential in joules, and $G_i=H_i-\mu_iQ_i$. Let $\sigma=\rho_i$ be the constructed density and $\beta_{\mathrm{loc},i}=N_i\beta_K>0$. Take Hermitian matrices $A,B\in\mathcal B(\mathcal H_i)$ with $[A,Q_i]=[B,Q_i]=0$. Let $h:[0,S]\to\mathbb R$ be continuous for $S>0$ seconds, let $\epsilon\in\mathbb R$ be dimensionless, and require $h(\tau)B$ to have units of joules. Define the local and Killing-time dynamics by

$$\alpha^{\mathrm{loc}}_\tau(C)=e^{iG_i\tau/\hbar}Ce^{-iG_i\tau/\hbar},\qquad \alpha^K_t(C)=e^{iN_iG_it/\hbar}Ce^{-iN_iG_it/\hbar}.$$

Let $E_{\mathrm{loc}}(\tau)$ and $E_K(t)$ be the model expectations of $A$ from the same initial density $\sigma$ under the respective physical controls $H_i-\epsilon h(\tau)B$ and $N_iH_i-\epsilon N_i h(N_it)B$. The exact finite-cell predictions are

$$E_K(t)=E_{\mathrm{loc}}(N_it)\qquad(0\le t\le S/N_i),$$

and

$$E_{\mathrm{loc}}(\tau)=\operatorname{Tr}(\sigma\alpha^{\mathrm{loc}}_\tau(A))+\epsilon\int_0^\tau h(s)R_{\mathrm{loc}}(\tau-s)\,ds+r(\tau),$$

where

$$R_{\mathrm{loc}}(u)=\frac{i}{\hbar}\operatorname{Tr}\!\left(\sigma[\alpha^{\mathrm{loc}}_u(A),B]\right),\qquad C_S=\frac{2}{\hbar}\int_0^S|h(s)|\,\|B\|\,ds,\qquad |r(\tau)|\le\|A\|\frac{(|\epsilon|C_S)^2e^{|\epsilon|C_S}}2.$$

Here $C_S$ is dimensionless and $R_{\mathrm{loc}}$ has units $[A][B]/(\mathrm{J\,s})$. For the equilibrium correlations $C_{\mathrm{loc}}(u)=\operatorname{Tr}(\sigma\alpha^{\mathrm{loc}}_u(A)A)$ and $C_K(t)=\operatorname{Tr}(\sigma\alpha^K_t(A)A)$, let $S_{\mathrm{loc}}$ and $S_K$ be their Fourier measures in the distributional convention $S(\omega)=\int_{\mathbb R}e^{i\omega t}C(t)\,dt$, where $\omega$ is in seconds$^{-1}$. Set $D_{N_i}(\omega)=N_i\omega$. Then

$$S_K=(D_{N_i})_*S_{\mathrm{loc}},\qquad S_K(\omega)=N_i^{-1}S_{\mathrm{loc}}(\omega/N_i),$$

the detailed-balance factor is unchanged because $\beta_K\hbar(N_i\omega)=\beta_{\mathrm{loc},i}\hbar\omega$, and any zero-frequency atom remains at zero and is kept separate from the $\coth$ formula. Finally, for the separately re-prepared finite Gibbs family $\sigma_\lambda\propto e^{-\beta_{\mathrm{loc},i}(G_i-\lambda B)}$, where $\lambda B$ has units of joules,

$$\left.\frac{d}{d\lambda}\operatorname{Tr}(\sigma_\lambda B)\right|_{\lambda=0}=\beta_{\mathrm{loc},i}\operatorname{Cov}_{\mathrm{KM},\sigma}(B,B)\ge0,$$

with $\operatorname{Cov}_{\mathrm{KM},\sigma}(B,B)=\int_0^1\operatorname{Tr}(\sigma^{1-u}\delta B\,\sigma^u\delta B)\,du$ and $\delta B=B-\operatorname{Tr}(\sigma B)I$. It equals the ordinary variance when $[B,G_i]=0$; otherwise no such reduction is asserted. These are conditional model predictions, not reported observations or a theorem of relaxation.

## Facts & Assumptions

**Given:** One selected finite-cell state, its proper and Killing grand generators, neutral Hermitian observables, a continuous finite-duration control, and the units stated above.

[F1] [[post-tgr-selected-gibbs-kms-preparation]] adopts the exact normalized finite density from [[thm-tgr-finite-cell-gibbs-factorization]], including $G_i$, $N_i$, $\beta_{\mathrm{loc},i}=N_i\beta_K$, and the neutral observable convention. Its state assignment is conditional on $\mathrm{AC}_\omega$ and is not an empirical premise.

[F2] [[thm-tgr-finite-response-redshift]]: for a finite independent cell with that Gibbs density, neutral Hermitian $A,B$, continuous finite-time $h$, and the stated physical/grand-generator relation, the proper-time Kubo expansion has the displayed commutator kernel and quadratic remainder, Killing frequencies are pushed forward by $\omega\mapsto N_i\omega$, zero-frequency atoms are retained, and the re-prepared static derivative is the nonnegative Kubo–Mori covariance.

[F3] [[def-countable-choice]]: the finite-cell construction carries $\mathrm{AC}_\omega$ through its smooth charged-stationarity supplier; no stronger choice axiom is invoked.

## Proof

1.1 The postulated preparation [F1] supplies a finite-dimensional cell density $\sigma$, the finite Hermitian generator $G_i$, positive $N_i,\beta_{\mathrm{loc},i}$, and the identity $N_i\beta_K=\beta_{\mathrm{loc},i}$. The hypotheses on $A,B,h,\epsilon,S$ in the Statement are exactly the neutral-observable and finite-control inputs required by [F2]. [given, F1, F2, F3]

2.1 Apply [F2] to this cell with the stated $A,B,h,\epsilon$ and $N_i$. Its finite-time identity, exact remainder, spectral pushforward/detailed balance clause, and separately re-prepared static derivative give each displayed conclusion. The first preparation is held fixed in the finite-time response; the $\sigma_\lambda$ derivative is a different family, and neither conclusion is an observed measurement or an infinite-time limit. [given, F2, step 1.1, algebra] ∎
