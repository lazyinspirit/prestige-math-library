---
id: pthm-nrqm-oscillator-coherent-state-evolution
aliases: [ nrqm-oscillator-coherent-state-evolution ]
kind: physics-theorem
domain: physics
title: "Evolution of the oscillator coherent states: classical mean motion and
  stationary fluctuations"
status: draft
origin: pipeline
dependency_level: 13
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-oscillator-framework-quadratic-potential-model,
    def-nrqm-oscillator-coherent-states,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-uncertainty-preparation-spread,
    def-nrqm-framework-quantities-and-units,
    pthm-nrqm-oscillator-energy-spectrum-and-completeness,
    pthm-nrqm-oscillator-coherent-state-fluctuations,
    pthm-nrqm-observables-preparation-moments,
    thm-nrqm-oscillator-coherent-evolution-and-variance,
    thm-nrqm-oscillator-coherent-state-convergence,
    lem-nrqm-oscillator-closed-ladder-domains,
    def-complex-exponential,
    lem-complex-exponential-series-converges-everywhere,
    cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
    thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
    cor-complex-trigonometric-and-hyperbolic-derivatives,
    def-hilbert-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-oscillator-coherent-states: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  pthm-nrqm-oscillator-energy-spectrum-and-completeness: physical-result
  pthm-nrqm-oscillator-coherent-state-fluctuations: physical-result
  pthm-nrqm-observables-preparation-moments: physical-result
  thm-nrqm-oscillator-coherent-evolution-and-variance: mathematical-premise
  thm-nrqm-oscillator-coherent-state-convergence: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  cor-complex-trigonometric-and-hyperbolic-derivatives: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The time evolution of the coherent states of the
  one-dimensional oscillator model: under the model's unitary flow the coherent
  preparation of label z passes to the coherent preparation of label z exp(-i
  omega t); the preparation means of position and momentum perform the classical
  harmonic motion through (x_0,p_0) with frequency omega, while the position and
  momentum spreads stay at l/sqrt(2) and hbar/(l sqrt(2)) and the saturated
  product hbar/2 is preserved; the excitation-number mean is |z|^2 in the
  assigned dimensionless unit 1/count; and the energy outcome law of the
  coherent preparation is the Poisson law of parameter |z|^2 shifted by hbar
  omega/2 under the convention subtracting the potential-energy value V(0), with
  energy spread hbar omega |z|. The statement is a conditional consequence of
  P1, P2, P4 and P5, of the adopted oscillator model and of the cited
  coherent-state and excursion mathematics; it asserts no measurement record, no
  apparatus realisation and no empirical result."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', §§4.3-4.5 printed pages 30-41: the time evolution of coherent
        states, the oscillation of the mean position and the time-independent
        uncertainties"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.2 printed
        pages 41-44 (PDF pages 49-52): the oscillation of the position
        expectation value at the classical frequency omega"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Adopt the state and composition postulate P1, the observable and probability postulate P2, the autonomous-dynamics postulate P4 and the kinematics and massive-particle model postulate P5, read through the one-dimensional oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (a), (b), (c), and the coherent-state family of [[def-nrqm-oscillator-coherent-states]]; assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $U(t)=\exp(-itH_1/\hbar)$ be the model's flow, let $\Psi_z$ be the coherent state of label $z\in\mathbb C$, put $z(t):=ze^{-i\omega t}$ and, for $|z|>0$, $x_0:=\sqrt2\,\ell\operatorname{Re}z$, $p_0:=\frac{\sqrt2\,\hbar}{\ell}\operatorname{Im}z$. Then:

(a) **Coherent evolution.** For every $t\in\mathbb R$, $U(t)$ is a bijective linear isometry of $H_1$ and
$$U(t)\Psi_z=e^{-i\omega t/2}\,\Psi_{z(t)};$$
consequently the preparation $[\Psi_z]$ evolves under the model's Schroedinger dynamics to the coherent preparation $[\Psi_{z(t)}]$, and the labels of the evolved family rotate with angular frequency $\omega$;

(b) **Classical mean motion.** The preparation means of position and momentum at time $t$ are
$$\langle Q\rangle_{z(t)}=\sqrt2\,\ell\operatorname{Re}z(t),\qquad \langle P\rangle_{z(t)}=\frac{\sqrt2\,\hbar}{\ell}\operatorname{Im}z(t),$$
equivalently, for every $t\in\mathbb R$, $x(t)=x_0\cos\omega t+\frac{p_0}{m\omega}\sin\omega t$ and $p(t)=p_0\cos\omega t-m\omega x_0\sin\omega t$ with $x(t):=\langle Q\rangle_{z(t)}$, $p(t):=\langle P\rangle_{z(t)}$; these functions are differentiable with $\dot x(t)=\frac{p(t)}{m}$ and $\dot p(t)=-m\omega^{2}x(t)$ for every $t$, so the means follow the classical harmonic motion of frequency $\omega$ through $(x_0,p_0)$;

(c) **Stationary fluctuations.** For every $t\in\mathbb R$ the evolved preparation has
$$\Delta_{\Psi_{z(t)}}Q=\frac{\ell}{\sqrt2},\qquad \Delta_{\Psi_{z(t)}}P=\frac{\hbar}{\ell\sqrt2},\qquad \Delta_{\Psi_{z(t)}}Q\,\Delta_{\Psi_{z(t)}}P=\frac{\hbar}{2};$$
the position and momentum spreads and their product are constant along the evolution;

(d) **Energy statistics.** The mean and the outcome law of the assigned energy observable in the coherent preparation are
$$\langle H_1\rangle_{z}=\hbar\omega\Bigl(|z|^{2}+\frac12\Bigr),\qquad \mu^{H_1}_{\Psi_z}\bigl(\{\hbar\omega(n+\tfrac12)\}\bigr)=e^{-|z|^{2}}\frac{|z|^{2n}}{n!}\quad(n\in\mathbb N),$$
the law of a Poisson variable of parameter $|z|^{2}$ shifted by $\hbar\omega/2$; consequently $\Delta_{\Psi_z}H_1=\hbar\omega|z|$;

(e) **Status.** Clauses (a)-(d) are conditional consequences of P1, P2, P4, P5, the adopted oscillator model, the model's spectrum theorem, the coherent-state fluctuation theorem and the cited mathematics. They concern the exact evolution of the model's coherent preparations and the statistics of its assigned observables; no measurement record, no apparatus realization, no damping or driving and no empirical value is asserted, and the identification of the mean motion with the motion of a laboratory oscillator is a tested identification under P7.

## Facts & Assumptions

**Given:** the adopted postulates P1, P2, P4, P5; the Axiom of Countable Choice and the Axiom of Choice; the one-dimensional oscillator model with parameters $m,\omega,\hbar>0$, length $\ell$ and energy operator $H_1$; the coherent states $\Psi_z$; a complex number $z$ and a real number $t$.

[F1] **The model's flow.** $H_1$ is the model's assigned energy observable, and the model's flow is the strongly continuous one-parameter unitary group $U(t)=\exp(-itH_1/\hbar)=\int e^{-it\lambda/\hbar}\,dE_{H_1}(\lambda)$ of the autonomous-dynamics reading of the model definition, whose generator is $-\frac{i}{\hbar}H_1$ with domain $D(H_1)$ ([[def-nrqm-oscillator-framework-quadratic-potential-model]] clause (c); [[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (a), (b), (c); [[post-nrqm-framework-autonomous-dynamics]]).

[F2] **Explicit flow and coherent evolution.** The family $U(t)f=\sum_ne^{-i\omega(n+\frac12)t}\langle f,\psi_n\rangle\psi_n$ is the strongly continuous one-parameter unitary group with generator $-\frac{i}{\hbar}H_1$, so it is the flow of [F1]; and for every $z$, $U(t)\Psi_z=e^{-i\omega t/2}\Psi_{ze^{-i\omega t}}$, while the evolved coherent means and variances are $\langle Q\rangle_{z(t)}=\sqrt2\ell\operatorname{Re}z(t)$, $\langle P\rangle_{z(t)}=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}z(t)$, $\operatorname{Var}(Q)_{z(t)}=\ell^{2}/2$, $\operatorname{Var}(P)_{z(t)}=\hbar^{2}/(2\ell^{2})$ with $z(t)=ze^{-i\omega t}$ ([[thm-nrqm-oscillator-coherent-evolution-and-variance]] clauses (a), (b), (c), (e), (f); [[def-nrqm-oscillator-framework-quadratic-potential-model]] clause (c)).

[F3] **Coherent coefficients and the energy law.** $\Psi_z=e^{-|z|^{2}/2}\sum_n\frac{z^{n}}{\sqrt{n!}}\psi_n$ with coefficients $\langle\Psi_z,\psi_n\rangle=e^{-|z|^{2}/2}\frac{z^{n}}{\sqrt{n!}}$; the mean of the assigned excitation-number outcome law in unit $1/\mathrm{count}$ is $\langle N_\psi\Psi_z,\Psi_z\rangle=|z|^{2}$, since $\Psi_z\in D(N_\psi)$ by [[def-nrqm-oscillator-coherent-states]] clause (c), the numerical value is given by [[thm-nrqm-oscillator-coherent-state-convergence]] clause (e), and the outcome-law moment formula is [[pthm-nrqm-observables-preparation-moments]] clause (a). The energy outcome law of the assigned observable $(H_1,\mathrm J)$ is $\mu^{H_1}_{\Psi_z}(B)=\sum_{n:E_n\in B}|\langle\Psi_z,\psi_n\rangle|^{2}$ with $E_n=\hbar\omega(n+\frac12)$; its mean is $\langle H_1\rangle_z=\hbar\omega(|z|^{2}+\frac12)$ by $H_1=\hbar\omega(N_\psi+\frac12I)$ and the same moment formula, using $D(H_1)=D(N_\psi)$ from [[pthm-nrqm-oscillator-energy-spectrum-and-completeness]] clause (b). ([[thm-nrqm-oscillator-coherent-state-convergence]] clauses (a), (e); [[def-nrqm-oscillator-coherent-states]] clause (b); [[pthm-nrqm-oscillator-energy-spectrum-and-completeness]] clauses (b), (c); [[pthm-nrqm-observables-preparation-moments]] clause (a); [[lem-nrqm-oscillator-closed-ladder-domains]] clause (e)).

[F4] **Euler's formula, parity and derivatives.** For real $\theta$, $e^{i\theta}=\cos\theta+i\sin\theta$, hence $e^{-i\omega t}=\cos\omega t-i\sin\omega t$ and $z(t)=(z_1\cos\omega t+z_2\sin\omega t)+i(z_2\cos\omega t-z_1\sin\omega t)$ for $z=z_1+iz_2$; the trigonometric functions satisfy $\sin'=\cos$, $\cos'=-\sin$, $\sin(-\theta)=-\sin\theta$ and $\cos(-\theta)=\cos\theta$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[F5] **Means and spreads.** For an assigned sharp observable $(A,u_A)$ and a unit vector $f\in D(A)$ the mean and second moment of the outcome law exist with mean $\langle Af,f\rangle$ and variance $\|(A-\langle Af,f\rangle I)f\|^{2}$, and the preparation spread is its square root ([[pthm-nrqm-observables-preparation-moments]] clauses (a), (b); [[def-nrqm-uncertainty-preparation-spread]] clauses (b), (c), (d)).

[F6] **Coherent fluctuations.** For every $w\in\mathbb C$ one has $\Delta_{\Psi_w}Q=\ell/\sqrt2$, $\Delta_{\Psi_w}P=\hbar/(\ell\sqrt2)$ and $\Delta_{\Psi_w}Q\Delta_{\Psi_w}P=\hbar/2$ ([[pthm-nrqm-oscillator-coherent-state-fluctuations]] clauses (a), (b)).

[F7] **The exponential series.** For every real $s$, $e^{s}=\sum_{n\ge0}s^{n}/n!$ as the sum of an absolutely convergent series, and $\sum_{n\ge1}n\frac{s^{n}}{n!}=se^{s}$, $\sum_{n\ge2}n(n-1)\frac{s^{n}}{n!}=s^{2}e^{s}$ by reindexing ([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]).

## Proof

**Given:** the data of the Statement and [F1]-[F7].

1.1 [The flow and its coherent action] By [F1] the model's flow is the strongly continuous unitary group generated by $-\frac{i}{\hbar}H_1$; by [F2] the explicit spectral family $U(t)f=\sum_ne^{-i\omega(n+\frac12)t}\langle f,\psi_n\rangle\psi_n$ has the same generator, so by the uniqueness of the generator recorded in the autonomous-dynamics reading the two families agree, and $U(t)\Psi_z=e^{-i\omega t/2}\Psi_{z(t)}$ for every $z$ and $t$. [given, F1, F2]

1.2 [Energy law of the coherent preparation] By [F3] the coefficients of $\Psi_z$ in the eigenbasis are $\langle\Psi_z,\psi_n\rangle=e^{-|z|^{2}/2}\frac{z^{n}}{\sqrt{n!}}$, so $|\langle\Psi_z,\psi_n\rangle|^{2}=e^{-|z|^{2}}\frac{|z|^{2n}}{n!}$ and the energy law is the atomic law $\mu^{H_1}_{\Psi_z}(\{E_n\})=e^{-|z|^{2}}\frac{|z|^{2n}}{n!}$ with $E_n=\hbar\omega(n+\frac12)$; and the mean energy is $\langle H_1\rangle_z=\hbar\omega(|z|^{2}+\frac12)$ by [F3]. [given, F3]

1.3 [Euler and trigonometric calculus] By [F4], $e^{-i\omega t}=\cos\omega t-i\sin\omega t$, so for $z=z_1+iz_2$ one has $z(t)=z(\cos\omega t-i\sin\omega t)=(z_1\cos\omega t+z_2\sin\omega t)+i(z_2\cos\omega t-z_1\sin\omega t)$, and the derivatives of $\sin$ and $\cos$ are $\cos$ and $-\sin$. [given, F4]

2.1 [Clause (a)] By step 1.1, $U(t)\Psi_z=e^{-i\omega t/2}\Psi_{z(t)}$ for every $t$; since $U(t)$ is a bijective linear isometry by [F1], the Schroedinger-picture state of the preparation $[\Psi_z]$ at time $t$ is the ray $[U(t)\Psi_z]=[\Psi_{z(t)}]$, which is again a coherent preparation; the label $z(t)=ze^{-i\omega t}$ rotates with angular frequency $\omega$. [step 1.1, F1]

2.2 [Clause (b), complex form] By step 1.1 the evolved vector is $e^{-i\omega t/2}\Psi_{z(t)}$, and multiplying by the phase $e^{-i\omega t/2}$ does not change the quadratic-form means; by [F2] and [F5], $\langle Q\rangle_{z(t)}=\sqrt2\ell\operatorname{Re}z(t)$ and $\langle P\rangle_{z(t)}=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}z(t)$. [step 1.1, F2, F5]

2.3 [Clause (c)] By step 1.1 the preparation at time $t$ is the coherent preparation of label $z(t)$, so [F6] applied with $w=z(t)$ gives $\Delta_{\Psi_{z(t)}}Q=\ell/\sqrt2$, $\Delta_{\Psi_{z(t)}}P=\hbar/(\ell\sqrt2)$ and product $\hbar/2$ for every $t$: the spreads are constant along the evolution. [step 1.1, F6]

2.4 [Clause (d), Poisson law and energy spread] Let $p_n:=e^{-|z|^{2}}\frac{|z|^{2n}}{n!}$ and $s:=|z|^{2}$. By step 1.2 the law is $\mu^{H_1}_{\Psi_z}(\{E_n\})=p_n$; by [F7], $\sum_np_n=e^{-s}\sum_n\frac{s^{n}}{n!}=1$, $\sum_nnp_n=e^{-s}\sum_nn\frac{s^{n}}{n!}=e^{-s}se^{s}=s$, and $\sum_nn^{2}p_n=e^{-s}\sum_nn^{2}\frac{s^{n}}{n!}=e^{-s}\bigl(s^{2}e^{s}+se^{s}\bigr)=s^{2}+s$, because $n^{2}=n(n-1)+n$ and the two reindexed series of [F7] apply. Hence the variance of the law is $\sum_n(n-s)^{2}p_n=(s^{2}+s)-s^{2}=s=|z|^{2}$, so the energy spread is $\Delta_{\Psi_z}H_1=\hbar\omega|z|$ and the law is the Poisson law of parameter $|z|^{2}$ carried by the shifted energies $E_n=\hbar\omega(n+\frac12)$. [step 1.2, F7]

3.1 [Clause (b), classical form] By step 2.2 and step 1.3, with $z=z_1+iz_2$, $x(t)=\sqrt2\ell(z_1\cos\omega t+z_2\sin\omega t)$ and $p(t)=\frac{\sqrt2\hbar}{\ell}(z_2\cos\omega t-z_1\sin\omega t)$; since $x_0=\sqrt2\ell z_1$ and $\frac{p_0}{m\omega}=\frac{\sqrt2\hbar z_2}{\ell m\omega}=\sqrt2\ell z_2$ by $\ell^{2}=\hbar/(m\omega)$, while $m\omega x_0=\sqrt2\,m\omega\ell z_1=\frac{\sqrt2\hbar z_1}{\ell}$ by the same identity, the displays $x(t)=x_0\cos\omega t+\frac{p_0}{m\omega}\sin\omega t$ and $p(t)=p_0\cos\omega t-m\omega x_0\sin\omega t$ follow. Differentiating with the trigonometric derivatives of step 1.3 gives $\dot x(t)=-x_0\omega\sin\omega t+\frac{p_0}{m}\cos\omega t=\frac{p(t)}{m}$ and $\dot p(t)=-p_0\omega\sin\omega t-m\omega x_0\omega\cos\omega t=-m\omega^{2}\bigl(x_0\cos\omega t+\frac{p_0}{m\omega}\sin\omega t\bigr)=-m\omega^{2}x(t)$ for every $t$. [step 1.3, step 2.2, F4, algebra]

4.1 [Clause (e)] Clauses (a), (b), (c) and (d) were obtained from the model's flow and energy observable, the explicit coherent evolution, the coherent fluctuation theorem and the exponential and trigonometric identities; no measurement record, apparatus model, damping or driving and no empirical value entered, and the identification of the mean motion with a laboratory oscillator is a tested identification under P7. This is clause (e). [step 2.1, step 2.3, step 2.4, step 3.1] ∎
