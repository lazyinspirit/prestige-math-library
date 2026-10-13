---
id: pthm-nrqm-scattering-wave-operator-existence-and-free-continuity
aliases: [ nrqm-scattering-wave-operator-existence-and-free-continuity ]
kind: physics-theorem
domain: physics
title: "Existence of the model's wave operators, isometry and intertwining, and
  the purely absolutely continuous free spectrum"
status: published
origin: session
dependency_level: 11
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    lem-nrqm-scattering-model-scaling-correspondence,
    thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence,
    thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining,
    thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-state-geometry-framework-state-space,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-schwartz-space-and-its-seminorms,
    def-sobolev-space-wkp-and-its-norm,
    cor-one-dimensional-change-of-variables-with-absolute-derivative,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence: mathematical-premise
  thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining: mathematical-premise
  thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  cor-one-dimensional-change-of-variables-with-absolute-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a real bounded
  compactly supported potential, for the assigned free and interacting energy
  observables of the pair: self-adjointness of the interacting operator on the
  Sobolev domain, the Cook integrability of the potential along the free
  evolution, existence of the model's wave operators as strong limits with
  isometry and intertwining, the purely absolutely continuous free spectrum with
  the explicit free spectral density in the pair's variables, and the absence of
  positive eigenvalues of the interacting operator. Conditional on P1, P2, P4,
  P5, P6, P7, the declared model and the cited mathematics; no measurement,
  detector, cross section or empirical value is asserted."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 12.1 Theorem 12.4 printed page 249 (PDF page 261): existence of
        the wave operators for V in L^2(R^3) by Cook's criterion"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.1, printed pages 257-261 (PDF pages 265-269)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass parameter $m>0$,
spin zero, action constant $\hbar>0$, and a declared potential $V$ of the
**compact-support class**, so that $V$ is real, bounded and vanishes almost
everywhere outside a ball $B_{R}$; let $H^{\mathrm{free}}$ and
$H=H^{\mathrm{free}}+M_{V}$ be the assigned energy observables of the model on
$D(H)=W^{2,2}(\mathbb R^{3};\mathbb C)$, and let $\Omega_{\pm}$, $S$,
$\mu^{H}_{\psi}$ and $H_{\mathrm{ac}}(H)$ be as in clause (d) of that
definition. Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) $H$ is self-adjoint on $D(H)=W^{2,2}(\mathbb R^{3};\mathbb C)$ and bounded
below, and for every Schwartz function $\psi\in\mathcal S(\mathbb R^{3};\mathbb C)$
([[def-schwartz-space-and-its-seminorms]])
$$\int_{0}^{\infty}\bigl\|Ve^{-itH^{\mathrm{free}}/\hbar}\psi\bigr\|_{2}\,dt<\infty, \qquad \int_{-\infty}^{0}\bigl\|Ve^{-itH^{\mathrm{free}}/\hbar}\psi\bigr\|_{2}\,dt<\infty;$$

(b) the strong limits
$$\Omega_{\pm}=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH/\hbar}e^{-itH^{\mathrm{free}}/\hbar}$$
exist as bounded linear isometries of $H_{0}$, so $\Omega_{\pm}^{*}\Omega_{\pm}=I$;
they intertwine the two flows,
$$e^{-isH/\hbar}\Omega_{\pm}=\Omega_{\pm}e^{-isH^{\mathrm{free}}/\hbar}\qquad(s\in\mathbb R),$$
and satisfy $H\Omega_{\pm}\psi=\Omega_{\pm}H^{\mathrm{free}}\psi$ for every
$\psi\in D(H^{\mathrm{free}})$;

(c) the free operator has purely absolutely continuous spectrum: for every
$\psi\in H_{0}$ the scalar measure $\mu^{H^{\mathrm{free}}}_{\psi}$ is
absolutely continuous with respect to Lebesgue measure and gives zero mass to
$\{0\}$ and to $(-\infty,0)$; hence
$H_{\mathrm{ac}}(H^{\mathrm{free}})=H_{\mathrm c}(H^{\mathrm{free}})=H_{0}$
and $H^{\mathrm{free}}$ has no eigenvalues;

(d) $H$ has no eigenvalue in $(0,\infty)$: if $\psi\in D(H)$, $\psi\ne0$ and
$H\psi=\lambda\psi$ with $\lambda>0$, then no such $\psi$ exists.

The statement is conditional on the declared model and the cited mathematics.
It asserts no completeness of the ranges, no unitarity of $S$, no cross
section and no measured quantity; completeness is the content of the two
following theorems of this page.

## Facts & Assumptions

**Given:** the declared short-range scattering model with $m,\hbar>0$, spin zero and a compact-support-class potential $V$ with support in $B_{R}$; the operators $H^{\mathrm{free}}$, $H$ on $W^{2,2}$; the choice hypotheses.

[F1] **Scaling correspondence.** With $c=\hbar^{2}/(2m)$ and $W:=2mV/\hbar^{2}$, the operators $A_{0}:=-\Delta_{w}$ and $A:=-\Delta_{w}+M_{W}$ on $W^{2,2}(\mathbb R^{3};\mathbb C)$ satisfy $H^{\mathrm{free}}=cA_{0}$ and $H=cA$ on that domain, $E_{H}(cB)=E_{A}(B)$ for every Borel $B$, $e^{-itH/\hbar}=e^{-i\tau A}$ and $e^{-itH^{\mathrm{free}}/\hbar}=e^{-i\tau A_{0}}$ with $\tau=\hbar t/(2m)$, the strong limits in the physical and energy-divided times coincide, and $H$ has an eigenvalue $\lambda>0$ if and only if $A$ has the eigenvalue $\lambda/c>0$ ([[lem-nrqm-scattering-model-scaling-correspondence]] clauses (a), (b), (c), (d), (e)).

[F2] **Concrete Cook existence.** Assume Countable Choice. For real $V_{0}\in L^{2}(\mathbb R^{3})$, with $H_{0}=-\Delta$ on $W^{2,2}$ and $H=H_{0}+M_{V_{0}}$ self-adjoint on the same domain, the Cook integrals $\int_{0}^{\infty}\|V_{0}e^{-itH_{0}}\psi\|_{2}dt$ and its negative-time analogue converge for every Schwartz $\psi$, the wave operators $\Omega_{\pm}=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH}e^{-itH_{0}}$ exist as bounded linear isometries with $\Omega_{\pm}e^{-isH_{0}}=e^{-isH}\Omega_{\pm}$ and $H\Omega_{\pm}\psi=\Omega_{\pm}H_{0}\psi$ for $\psi\in D(H_{0})$, and $H_{0}$ has purely absolutely continuous spectrum with $L^{2}=H_{\mathrm{ac}}(H_{0})$, the scalar spectral measure of $\psi$ having the displayed density with respect to Lebesgue measure and zero mass at $0$ ([[thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence]] clauses (a), (b), (c)).

[F3] **Cook isometry and intertwining.** Under the hypotheses of [F2] the wave operators satisfy $\Omega_{\pm}^{*}\Omega_{\pm}=I$, the intertwining identity, and $\Omega_{\pm}D(H_{0})\subseteq D(H)$ with $H\Omega_{\pm}\psi=\Omega_{\pm}H_{0}\psi$; no surjectivity is asserted ([[thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining]] clauses (a)-(d)).

[F4] **No positive compact-potential eigenvalues.** Assume Countable Choice. For real bounded compactly supported $V_{0}$ and $k>0$, the operator $-\Delta+M_{V_{0}}$ on $H^{2}(\mathbb R^{3})$ has no eigenvalue $k^{2}$ ([[thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues]]).

[F5] **The model's readings.** The assigned energy observables are $(H^{\mathrm{free}},\mathrm J)$ and $(H,\mathrm J)$ on $H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$ with flow $U(t)=e^{-itH/\hbar}$; in the compact-support class $H$ is self-adjoint on $D(H)$ and bounded below by $-\|V\|_{\infty}$, and the wave operators and the scattering operator are read as the strong limits of the model's flow comparison ([[def-nrqm-scattering-framework-short-range-model]] clauses (c), (d)).

## Proof

**Proof technique:** direct; use physical-coordinate $W=W_x$ and $A_0=A_{0,x}$, whose numerical representatives in the fixed metre convention are the abstract source operators; the auxiliary parameter $\tau=\hbar t/(2m)$ has square-metre units; identify the model's operators with the energy-divided operators of the cited mathematics through the scaling lemma, transfer the Cook estimates by the linear change of variables $\tau=\hbar t/(2m)$, and transfer the spectral statements by the projection valued measure correspondence.

**Given:** the data and hypotheses of the statement and [F1]-[F5].

1.1 By [F5], the model supplies self-adjointness of $H=H^{\mathrm{free}}+M_V$ on $W^{2,2}$ and its lower bound $-\|V\|_\infty$. By [F1], the reduced operator $A=-\Delta_w+M_W$ is self-adjoint on the same domain and $H=cA$, with $W=2mV/\hbar^2$. Since $V$ is real, bounded and compactly supported, so is $W$, and in particular $W\in L^2(\mathbb R^3)$. Thus [F2] applies to the actual reduced potential $V_0=W$ and this already self-adjoint $A$; Cook existence is not used as a proof of the self-adjointness it presupposes. [F1, F2, F5, given]

1.2 For $\psi\in\mathcal S$ put $\tau(t)=\hbar t/(2m)$. By [F1], $Ve^{-itH^{\mathrm{free}}/\hbar}\psi=cW e^{-i\tau(t)A_{0}}\psi$, and by [F2] the function $\tau\mapsto\|We^{-i\tau A_{0}}\psi\|_{2}$ is integrable on $[0,\infty)$; the substitution $t\mapsto\tau(t)$ in the Lebesgue integral of a continuous integrand, [[cor-one-dimensional-change-of-variables-with-absolute-derivative]], gives $\int_{0}^{\infty}\|We^{-i\tau(t)A_{0}}\psi\|_{2}dt=\frac{2m}{\hbar}\int_{0}^{\infty}\|We^{-i\tau A_{0}}\psi\|_{2}d\tau<\infty$, hence the first Cook integral of (a); the negative half-line is identical. [F1, F2, algebra]

1.3 By [F1] the strong limits in physical time exist exactly when the energy-divided limits in [F2] exist and then coincide; [F2] exhibits them, so $\Omega_{\pm}$ of the statement exist as strong limits and are the operators of [F2]. This is (b)'s existence assertion. [F2, F1, given]

1.4 Let $\psi\in D(H)$ with $H\psi=\lambda\psi$ and $\lambda>0$. By [F1] $\psi$ is an eigenvector of $A$ with eigenvalue $\lambda/c>0$; [F4] applied with $k=\sqrt{\lambda/c}>0$ gives $\psi=0$. This is (d). [F1, F4, algebra]

2.1 By [F3] the operators of step 1.3 satisfy $\Omega_{\pm}^{*}\Omega_{\pm}=I$, $e^{-isH/\hbar}\Omega_{\pm}=\Omega_{\pm}e^{-isH^{\mathrm{free}}/\hbar}$ (after replacing the energy-divided time by the physical time through the same reparametrisation) and $H\Omega_{\pm}\psi=\Omega_{\pm}H^{\mathrm{free}}\psi$ for $\psi\in D(H^{\mathrm{free}})$. This completes (b). [F3, step 1.3, algebra]

3.1 By [F2] the scalar measures $\mu^{A_{0}}_{\psi}$ are absolutely continuous with respect to Lebesgue measure with zero mass at $0$; by [F1] $\mu^{H^{\mathrm{free}}}_{\psi}(B)=\mu^{A_{0}}_{\psi}(c^{-1}B)$, and since multiplication by $c^{-1}>0$ preserves Lebesgue null sets, the transfer preserves absolute continuity and atomlessness, and $\mu^{H^{\mathrm{free}}}_{\psi}(\{0\})=\mu^{A_{0}}_{\psi}(\{0\})=0$; the spectrum is contained in $[0,\infty)$ because $H^{\mathrm{free}}=cA_{0}$ with $A_{0}\ge0$. Hence every vector is absolutely continuous, $H_{\mathrm{ac}}(H^{\mathrm{free}})=H_{0}$, and there are no eigenvectors. This is (c) and completes the proof. [F1, F2, step 1.4, algebra] ∎

## Remarks

- **What is not claimed.** Ranges, asymptotic completeness and unitarity of
  $S$ are deliberately absent; they are the content of
  [[pthm-nrqm-scattering-compact-support-asymptotic-completeness]] and
  [[pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness]]. The Cook
  estimates are stated for Schwartz vectors exactly as in the cited
  mathematics; density then gives the strong limits on all of $H_{0}$.
- **Units.** The displayed Cook integrals carry the dimensions of the
  integrand times time; no numerical value of $m$, $\hbar$ or $V$ is asserted.
