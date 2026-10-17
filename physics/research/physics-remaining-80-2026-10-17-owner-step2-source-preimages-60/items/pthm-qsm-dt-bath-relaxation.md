---
id: pthm-qsm-dt-bath-relaxation
kind: physics-theorem
title: Conditional specified thermal bath relaxation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
physical_scope: Conditional predictions for a specified finite connected Gibbs-jump GKSL model and its two-level specialization; no measured rates, microscopic bath limit, or universal thermalization law is claimed.
deps:
  - post-qsm-dt-effective-bath
  - thm-qsm-dt-gibbs-jump
  - thm-qsm-dt-detailed-balance-gap
  - def-axiom-of-choice
dependency_roles:
  post-qsm-dt-effective-bath: physical-assumption
  thm-qsm-dt-gibbs-jump: mathematical-premise
  thm-qsm-dt-detailed-balance-gap: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §§1.3.4 and 1.5.3
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: Eric A. Carlen and Jan Maas, Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance, §2
      url: https://arxiv.org/pdf/1609.01254
---

## Statement

Assume full AC, the adopted finite effective-bath model [[post-qsm-dt-effective-bath]], and the connected finite Gibbs-jump hypotheses of [[thm-qsm-dt-gibbs-jump]]. For any initial density $\rho$, let $\rho_t=e^{t\mathcal L}\rho$, where $\mathcal L$ is the chosen finite Schrödinger generator, and let $\sigma=Z_\beta^{-1}e^{-\beta H_{\rm s}}$. If $d>1$, the finite detailed-balance gap $\gamma>0$ gives the conditional model prediction

$$\|\rho_t-\sigma\|_1\leq\|\sigma^{-1/2}(\rho-\sigma)\|_2e^{-\gamma t}.$$

For the two-level specialization, let $H_{\rm s}=\Delta Z/2$, $\Delta>0$ joules, $Z=|0\rangle\langle0|-|1\rangle\langle1|$, and $X=|0\rangle\langle1|+|1\rangle\langle0|$, $Y=-i|0\rangle\langle1|+i|1\rangle\langle0|$. Adopt downward jump $\sqrt a\,|1\rangle\langle0|$ with $a>0$ seconds$^{-1}$, upward jump $\sqrt b\,|0\rangle\langle1|$ with $b/a=e^{-\beta\Delta}$, and optionally a dephasing jump $\sqrt{\gamma_\phi/2}\,Z$ with $\gamma_\phi\geq0$ seconds$^{-1}$. Put

$$\omega:=\Delta/\hbar,\quad \gamma_1:=a+b,\quad \gamma_2:=\frac{a+b}{2}+\gamma_\phi,\quad z_{\rm eq}:=\frac{b-a}{a+b}=-\tanh(\beta\Delta/2).$$

Then the exact model expectations and coherence satisfy

$$\langle Z\rangle_t=z_{\rm eq}+e^{-\gamma_1t}(\langle Z\rangle_0-z_{\rm eq}),\qquad \rho_{01}(t)=e^{-(\gamma_2+i\omega)t}\rho_{01}(0).$$

Equivalently, $e^{tG}X=e^{-\gamma_2t}(X\cos\omega t-Y\sin\omega t)$ and $e^{tG}Z=z_{\rm eq}I+e^{-\gamma_1t}(Z-z_{\rm eq}I)$. For $d=1$, $\rho=\sigma$ and relaxation is trivial. These are conditional model deductions, not experimental findings or claims that a physical bath realizes the postulate.

## Facts & Assumptions

**Given:** Full AC, the adopted effective-bath postulate, finite connected Gibbs rates, $\beta>0$, and, for the qubit branch, the stated $H_{\rm s}$, jump matrices, and initial density.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is retained in the formal supplier chain for the selected monitoring instrument in [[post-qsm-dt-effective-bath]]; the density-decay calculation itself is finite-dimensional.

[A2] [[post-qsm-dt-effective-bath]]: on the selected finite time scale the specified subsystem is modeled by the adopted finite GKSL generator, Gibbs preparation, and selected instrument; no microscopic bath limit or calibration data are asserted.

[F1] [[thm-qsm-dt-gibbs-jump]]: connected Gibbs-balanced energy jumps give a faithful stationary Gibbs density and a dissipator with scalar kernel.

[F2] [[thm-qsm-dt-detailed-balance-gap]]: under [F1], all initial densities satisfy the stated trace-norm exponential relaxation bound.

## Proof

1.1 The rate relation $b/a=e^{-\beta\Delta}$ is exactly $\pi_0a=\pi_1b$ for $\pi_j\propto e^{-\beta E_j}$ with $E_0=\Delta/2$, $E_1=-\Delta/2$. Since $a,b>0$, the two-vertex rate graph is connected. The postulate [A2] adopts this finite generator for the selected physical model; [F1] therefore supplies its faithful stationary Gibbs state and scalar dissipative kernel. [given, A1, A2, F1, algebra]

1.2 Applying [F2] to this finite GNS detailed-balance generator proves the trace-norm estimate for $d>1$. For $d=1$ there is only one density matrix, so the difference from $\sigma$ is zero. [A2, F1, F2, algebra]

1.3 In the qubit basis, direct matrix multiplication gives $\dot\rho_{00}=-a\rho_{00}+b\rho_{11}$, $\dot\rho_{11}=a\rho_{00}-b\rho_{11}$, and $\dot\rho_{01}=-(\gamma_2+i\omega)\rho_{01}$. The dephasing jump contributes $-\gamma_\phi\rho_{01}$ and vanishes on diagonal entries. With $z=\rho_{00}-\rho_{11}$, the population equations become $\dot z=(b-a)-(a+b)z=-\gamma_1(z-z_{\rm eq})$. [given, A2, algebra]

2.1 Solving the scalar linear equations in step 1.3 yields $z(t)=z_{\rm eq}+e^{-\gamma_1t}(z(0)-z_{\rm eq})$ and $\rho_{01}(t)=e^{-(\gamma_2+i\omega)t}\rho_{01}(0)$. The dual observable generator acts as $G(X)=-\gamma_2X-\omega Y$, $G(Y)=\omega X-\gamma_2Y$, and $G(Z)=-\gamma_1(Z-z_{\rm eq}I)$; exponentiating these two-dimensional and one-dimensional invariant subspaces gives the displayed formulas for $e^{tG}$. [step 1.3, algebra] ∎

## Remarks

The positive-temperature relation fixes the rate ratio, while the numerical values of $a$, $b$, and $\gamma_\phi$ remain model inputs. No observation, calibration uncertainty, or empirical agreement is claimed here.
