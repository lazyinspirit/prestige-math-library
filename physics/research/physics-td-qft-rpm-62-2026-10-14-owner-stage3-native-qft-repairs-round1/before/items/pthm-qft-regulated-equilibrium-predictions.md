---
id: pthm-qft-regulated-equilibrium-predictions
kind: physics-theorem
domain: physics
library: physics
title: Finite-regulator Gibbs predictions
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 7
deps:
  - post-qft-regulated-equilibrium-state
  - post-qft-constructed-model-and-measurement
  - def-qft-regulated-thermal-parameter
  - thm-qft-regulated-gibbs-trace
  - def-countable-choice
dependency_roles:
  post-qft-regulated-equilibrium-state: physical-assumption
  post-qft-constructed-model-and-measurement: physical-assumption
  def-qft-regulated-thermal-parameter: formulation-prerequisite
  thm-qft-regulated-gibbs-trace: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Trace-normalized bounded-observable expectations at T>0 for one fixed finite regulator. No infinite-volume or continuum trace, empirical data, or unbounded-observable formula is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §6.3"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Printed pp.163–169, trace-class operators and basis-independent trace."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Ch.8 and Ch.9"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Printed pp.48–54, confining-potential eigenvalues and variational characterization."
    - title: "David Tong, Statistical Physics, author-hosted lecture notes, Chapter 1, §§1.3–1.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html"
      locator: "Complete Chapter 1 HTML; canonical density matrix and trace partition function."
---

## Statement

Assume Countable Choice and the finite-regulator coercivity hypotheses of
[[thm-qft-regulated-gibbs-trace]]. Use the model state of
[[post-qft-regulated-equilibrium-state]] and the inverse-energy parameters of
[[def-qft-regulated-thermal-parameter]]. Let
$\alpha_j:=\sqrt{a_jc}$, $j=1,\ldots,N$, for the dimensionless kinetic
coefficients and coercivity constant in the model, and let
$C_0\ge0$ be its potential lower-bound shift. Then

$$0<Z_T=\sum_{k\ge0}e^{-\widehat\beta\lambda_k}\le e^{\widehat\beta C_0}\prod_{j=1}^N\frac{e^{-\widehat\beta\alpha_j}}{1-e^{-2\widehat\beta\alpha_j}}<\infty,$$

where $\lambda_k$ are the eigenvalues of $h$. The adopted state
$\rho_T$ is a positive trace-class operator with trace one. For every
bounded linear operator $B:H_N\to H_N$,

$$\operatorname{Tr}(\rho_TB)=Z_T^{-1}\sum_{k\ge0}e^{-\widehat\beta\lambda_k}\langle B\psi_k,\psi_k\rangle,$$

and the series is absolutely convergent. If $E_a$ is an effect in a supplied
normalized finite instrument of
[[post-qft-constructed-model-and-measurement]], this trace is its adopted
canonical model probability. These are conditional finite-regulator
predictions, not measured outcomes or a continuum-limit claim.

## Facts & Assumptions

**Given:** Countable Choice; $N\ge1$; dimensionless $a_j,c>0$ and $C_0\ge0$; the fixed coercive real polynomial; $E_*>0$ joules; $T>0$; $\beta_{\rm phys}=(k_BT)^{-1}$; and the selected form realization $h$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function. The QFT-IR01 Gibbs-trace proof assumes this principle.

[A2] [[post-qft-regulated-equilibrium-state]]: using its supplied complete eigenbasis and eigenvalues $(\psi_k,\lambda_k)$, the postulate defines $e^{-\gamma h}$ by $G_\gamma f=\sum_ke^{-\gamma\lambda_k}\langle f,\psi_k\rangle\psi_k$. It defines $e^{-\beta_{\rm phys}H_{\rm phys}}f=\sum_ke^{-\beta_{\rm phys}E_*\lambda_k} \langle f,\psi_k\rangle\psi_k$; since $\widehat\beta=E_*\beta_{\rm phys}$, this is the same operator $G_{\widehat\beta}=e^{-\widehat\beta h}$. Thus $\rho_T=G_{\widehat\beta}/Z_T$.

[A3] [[post-qft-constructed-model-and-measurement]]: a supplied normalized finite instrument assigns model probability $\operatorname{Tr}(\rho E_a)$ to its outcome effect $E_a$, but only after the density operator and instrument are actually constructed.

[F1] [[thm-qft-regulated-gibbs-trace]]: for dimensionless $\gamma>0$, the supplier defines $\rho_\gamma$ as the operator-norm limit of finite-rank truncations and gives its action $\rho_\gamma f=\sum_ke^{-\gamma\lambda_k}\langle f,\psi_k\rangle\psi_k$. It proves that this operator is positive trace class, that its trace is positive and finite with the oscillator-product upper bound, and that for bounded $B$ the trace $\operatorname{Tr}(\rho_\gamma B)$ is the absolutely convergent eigenbasis sum.

[F2] [[def-qft-regulated-thermal-parameter]]: $\beta_{\rm phys}=1/(k_BT)$ has unit $\mathrm{J^{-1}}$ and $\widehat\beta=E_*\beta_{\rm phys}>0$ is dimensionless.

## Proof

**Proof technique:** direct.

1.1 By [F2], $\widehat\beta=E_*\beta_{\rm phys}>0$ is dimensionless. For each $f\in H_N$, the series defining $e^{-\beta_{\rm phys}H_{\rm phys}}f$ has coefficients $e^{-\beta_{\rm phys}E_*\lambda_k}\langle f,\psi_k\rangle$, while the series defining $e^{-\widehat\beta h}f$ has coefficients $e^{-\widehat\beta\lambda_k}\langle f,\psi_k\rangle$. These coefficients are equal term by term, and both series converge in $H_N$; hence $e^{-\beta_{\rm phys}H_{\rm phys}}=e^{-\widehat\beta h}=G_{\widehat\beta}$ as operators. The trace supplied by [F1] is therefore $Z_T=\sum_ke^{-\widehat\beta\lambda_k}$. [A2, F1, F2, given, algebra]

2.1 Under Countable Choice [A1], apply [F1] at $\widehat\beta>0$. It gives $Z_T>0$, the stated finite upper bound, and trace-class positivity of $G_{\widehat\beta}=e^{-\widehat\beta h}$. Dividing by $Z_T$ yields $\operatorname{Tr}(\rho_T)=1$ and preserves positivity and trace class. [A1, A2, F1, step 1.1, algebra]

3.1 Under the same Countable Choice assumption [A1], for bounded $B$, [F1]
gives the absolutely convergent sum for $\operatorname{Tr}(G_{\widehat\beta}B)$. Since $\rho_T=Z_T^{-1}G_{\widehat\beta}$, linearity of the trace and $Z_T>0$ give the displayed normalized formula. If $B=E_a$ is an effect in the instrument of [A3], that postulate supplies its physical model probability interpretation; the finite trace calculation supplies its value. [A1, A2, A3, F1, step 2.1, algebra] ∎
