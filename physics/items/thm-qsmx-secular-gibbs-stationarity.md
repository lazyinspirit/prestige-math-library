---
id: thm-qsmx-secular-gibbs-stationarity
kind: theorem
title: Thermal balance makes Gibbs stationary
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-secular-thermal-generator
  - def-qsm-dt-channel-definition
  - def-qsm-dt-gksl-definition
  - thm-qsm-dt-gksl-sufficient
  - lem-qsm-matrix-state-calculus
dependency_roles:
  def-qsmx-secular-thermal-generator: mathematical-premise
  def-qsm-dt-channel-definition: mathematical-premise
  def-qsm-dt-gksl-definition: mathematical-premise
  thm-qsm-dt-gksl-sufficient: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ángel Rivas and Susana F. Huelga, Open Quantum Systems: An Introduction, Springer Briefs in Physics, arXiv:1104.5242v2, §6.2.8"
      url: https://arxiv.org/pdf/1104.5242
    - title: "Lin Lin, Notes on Lindblad Equations and Davies Generator, §3"
      url: https://ruizhezhang.com/teaching_2025/Lindblad_Notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $d\geq1$, let $H=H^*\in M_d(\mathbb C)$ have entries in joules and a finite spectral decomposition $H=\sum_E E P_E$ with pairwise orthogonal projections summing to $I_d$, and let $S_1,\ldots,S_m$ be a finite family of dimensionless Hermitian matrices, where $m\geq0$. Set $\Omega_H=\{(E'-E)/\hbar:E,E'\in\operatorname{spec}(H)\}$ and, for each $\omega\in\Omega_H$, define $S_a(\omega)=\sum_{E'-E=\hbar\omega}P_E S_aP_{E'}$. Suppose that the rate matrices $\Gamma(\omega)=(\gamma_{ab}(\omega))$, $\omega\in\Omega_H$, have entries in seconds$^{-1}$, are positive semidefinite in the explicit sense that $\Gamma(\omega)=\Gamma(\omega)^*$ and $v^*\Gamma(\omega)v\geq0$ for every $v\in\mathbb C^m$, and satisfy $\gamma_{ab}(-\omega)=e^{-\beta\hbar\omega}\gamma_{ba}(\omega)$, with $\beta\in\mathbb R$ in joules$^{-1}$ and $\hbar>0$ in joule-seconds. Let $H_{\rm LS}=H_{\rm LS}^*$ have entries in joules and commute with $H$, and let $\mathcal L$ be the finite generator

$$\mathcal L(X)=-\frac{i}{\hbar}[H+H_{\rm LS},X]+\sum_{\omega\in\Omega_H}\sum_{a,b=1}^{m}\gamma_{ab}(\omega)\left(S_b(\omega)X S_a(\omega)^*-\frac12\{S_a(\omega)^*S_b(\omega),X\}\right).$$

For $\rho\in M_d(\mathbb C)$, being a density matrix means $\rho=\rho^*$, $v^*\rho v\geq0$ for every $v\in\mathbb C^d$, and $\operatorname{Tr}\rho=1$; it is faithful when it is positive definite. For $Z_\beta:=\operatorname{Tr}(e^{-\beta H})>0$, define the faithful Gibbs density $\sigma_\beta:=e^{-\beta H}/Z_\beta$. For time $t\geq0$ measured in seconds, $T_t:=e^{t\mathcal L}$ is completely positive and trace-preserving, and $T_t(\sigma_\beta)=\sigma_\beta$. This statement asserts stationarity only; it asserts neither uniqueness of the stationary density nor convergence to $\sigma_\beta$.

## Statement references

[[def-qsmx-secular-thermal-generator]]

[[def-qsm-dt-channel-definition]]

[[def-qsm-dt-gksl-definition]]

[[thm-qsm-dt-gksl-sufficient]]

[[lem-qsm-matrix-state-calculus]]

## Facts & Assumptions

**Given:** The finite-dimensional system, energy-resolved couplings, rate matrices, balance relation, and commuting Lamb-shift matrix in the Statement. Use the ordered finite spectral projections and SI units there.

[A1] [[def-qsmx-secular-thermal-generator]]: for each $\omega$, $S_a(\omega)=\sum_{E'-E=\hbar\omega}P_E S_aP_{E'}$; $\Gamma(\omega)=\Gamma(\omega)^*$ and $v^*\Gamma(\omega)v\geq0$ for every $v\in\mathbb C^m$; and the matrices obey $\gamma_{ab}(-\omega)=e^{-\beta\hbar\omega}\gamma_{ba}(\omega)$. Also, $H_{\rm LS}$ is Hermitian and commutes with $H$.

[F1] [[def-qsm-dt-channel-definition]]: complete positivity means positivity is preserved by every finite ancilla amplification, and trace preservation means traces agree on every matrix input; a finite channel is a complex-linear map with both properties.

[F2] [[def-qsm-dt-gksl-definition]]: a finite GKSL generator has the form $-i[H,X]/\hbar+\sum_j(J_jXJ_j^*-\frac12\{J_j^*J_j,X\})$ for Hermitian $H$ and finite jump matrices $J_j$.

[F3] [[thm-qsm-dt-gksl-sufficient]]: the finite GKSL generator of [F2] has an exponential semigroup of finite channels for all $t\geq0$.

[F4] [[lem-qsm-matrix-state-calculus]]: a finite Hermitian matrix has orthogonal spectral projections and basis-independent spectral calculus.

## Proof

1.1 For each $\omega$, positive semidefiniteness of the finite matrix $\Gamma(\omega)$ gives a finite factorization $\gamma_{ab}(\omega)=\sum_r\overline{c_{ra}(\omega)}c_{rb}(\omega)$, with $c_{ra}(\omega)$ in seconds$^{-1/2}$. Define $J_{r,\omega}:=\sum_b c_{rb}(\omega)S_b(\omega)$. Expanding yields $\sum_rJ_{r,\omega}XJ_{r,\omega}^*=\sum_{a,b}\gamma_{ab}(\omega)S_b(\omega)XS_a(\omega)^*$ and $\sum_rJ_{r,\omega}^*J_{r,\omega}=\sum_{a,b}\gamma_{ab}(\omega)S_a(\omega)^*S_b(\omega)$. Thus the displayed generator has the finite GKSL form of [F2] with Hamiltonian $H+H_{\rm LS}$ and finite jumps $J_{r,\omega}$, so [F3] gives a finite channel semigroup; [F1] states its complete-positivity and trace-preservation content. [given, A1, F1, F2, F3, F4, algebra, construct]

1.2 From the spectral definition, $[H,S_a(\omega)]=-\hbar\omega S_a(\omega)$ and $S_a(\omega)^*=S_a(-\omega)$. Therefore $S_a(\omega)e^{-\beta H}=e^{-\beta\hbar\omega}e^{-\beta H}S_a(\omega)$. Every $S_a(-\omega)S_b(\omega)$ commutes with $H$ because its two energy shifts cancel, hence it commutes with each spectral projection of $H$ and with $\sigma_\beta$. Also $[H_{\rm LS},H]=0$ implies $H_{\rm LS}$ preserves every eigenspace of $H$: if $Hx=Ex$, then $H(H_{\rm LS}x)=H_{\rm LS}(Hx)=E(H_{\rm LS}x)$. Thus $H_{\rm LS}$ commutes with every spectral projection of $H$ and with $\sigma_\beta$. Finally, the exponential $e^{-\beta H}$ is positive definite with positive finite trace, making $\sigma_\beta$ a faithful density. [given, A1, F4, algebra]

2.1 Fix $\omega>0$ and put $q=e^{-\beta\hbar\omega}$. The $\omega$ contribution is $\mathcal D_{\omega}(\sigma_\beta)=\sigma_\beta\sum_{a,b}\gamma_{ab}(\omega)(qS_b(\omega)S_a(-\omega)-S_a(-\omega)S_b(\omega))$, using $S_b(\omega)\sigma_\beta=q\sigma_\beta S_b(\omega)$ and commutation of the anticommutator product with $\sigma_\beta$. For the negative frequency, substitute $\gamma_{ab}(-\omega)=q\gamma_{ba}(\omega)$ and $S_a(-\omega)^*=S_a(\omega)$, then reindex $a,b$ to obtain $\mathcal D_{-\omega}(\sigma_\beta)=\sigma_\beta\sum_{a,b}\gamma_{ab}(\omega)(S_a(-\omega)S_b(\omega)-qS_b(\omega)S_a(-\omega))=-\mathcal D_{\omega}(\sigma_\beta)$. Thus every nonzero frequency pair cancels. [given, A1, step 1.2, algebra]

3.1 At $\omega=0$, the balance relation gives $\gamma_{ab}(0)=\gamma_{ba}(0)$. Each $S_a(0)$ is Hermitian and commutes with $H$, hence with $\sigma_\beta$; consequently the zero-frequency contribution is $\sigma_\beta\sum_{a,b}\gamma_{ab}(0)(S_b(0)S_a(0)-S_a(0)S_b(0))=0$, after swapping $a,b$ in the first finite sum. The Hamiltonian contribution vanishes because both $H$ and $H_{\rm LS}$ commute with $\sigma_\beta$. Together with step 2.1 this gives $\mathcal L(\sigma_\beta)=0$, and the exponential series then gives $T_t(\sigma_\beta)=\sigma_\beta$ for all $t\geq0$. [given, A1, step 1.2, step 2.1, algebra] ∎
