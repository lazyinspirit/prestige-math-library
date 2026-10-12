---
id: ex-nrqm-oscillator-ground-state-gaussian
aliases: [nrqm-oscillator-example-ground-state-gaussian]
kind: example
domain: physics
title: "The Gaussian ground state: position and momentum laws and the saturated bound"
status: draft
origin: pipeline
dependency_level: 12
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-oscillator-framework-quadratic-potential-model, def-nrqm-oscillator-coherent-states, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-uncertainty-preparation-spread, pthm-nrqm-oscillator-energy-spectrum-and-completeness, pthm-nrqm-oscillator-coherent-state-fluctuations, pthm-nrqm-observables-preparation-moments, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-nrqm-oscillator-hermite-recurrence, thm-plancherel, lem-nrqm-oscillator-unitary-transport-of-spectral-pvms, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-observables-l2-multiplication-spectral-measure, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, def-heat-kernel, lem-heat-kernel-normalisation-scaling-and-derivatives, lem-first-and-second-moments-of-the-heat-kernel, cor-c-one-change-of-variables-for-l-one-functions, def-nrqm-framework-quantities-and-units, def-countable-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-oscillator-coherent-states: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  pthm-nrqm-oscillator-energy-spectrum-and-completeness: physical-result
  pthm-nrqm-oscillator-coherent-state-fluctuations: physical-result
  pthm-nrqm-observables-preparation-moments: physical-result
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-nrqm-oscillator-unitary-transport-of-spectral-pvms: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  def-heat-kernel: mathematical-premise
  lem-heat-kernel-normalisation-scaling-and-derivatives: mathematical-premise
  lem-first-and-second-moments-of-the-heat-kernel: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The ground state of the one-dimensional oscillator model: its explicit Gaussian representative, its position and momentum outcome laws with means zero and variances l^2/2 and hbar^2/(2l^2), and the saturation of the model's position-momentum relation in the ground preparation. The example is a conditional computation inside the adopted model and asserts no measured distribution, no apparatus realisation and no empirical value."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 printed pages 37-41 (PDF pages 45-49): the normalized Gaussian ground-state wavefunction (3.15), its position and momentum dispersions (3.16) and the saturated uncertainty product"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §1 printed pages 1-9 and §4.3 printed pages 30-33: the ground-state Gaussian and the position and momentum uncertainties of the oscillator states"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Example

Adopt the state and composition postulate P1, the observable and probability postulate P2 and the kinematics and massive-particle model postulate P5, read through the one-dimensional oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (a), (b), (c), and assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $\psi_0$ be the ground eigenvector of the model's energy operator $H_1$, let $\ell=\sqrt{\hbar/(m\omega)}$, and let $Q$, $P$ be the model's position and momentum observables. Then:

(a) the class $\psi_0$ has the representative
$$\psi_0(x)=\ell^{-1/2}\pi^{-1/4}e^{-x^{2}/(2\ell^{2})},$$
it is a unit vector, it is the model's coherent state of label $0$, and $H_1\psi_0=\frac{\hbar\omega}{2}\psi_0$;

(b) the position outcome law of the assigned observable $(Q,\mathrm m)$ in the ground preparation has the density
$$f(x)=\ell^{-1}\pi^{-1/2}e^{-x^{2}/\ell^{2}},$$
with $\int_{\mathbb R}f=1$, mean $0$ and second moment $\ell^{2}/2$; hence $\Delta_{\psi_0}Q=\ell/\sqrt2$;

(c) the momentum outcome law of the assigned observable $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$ has the density
$$g(p)=\frac{\ell}{\hbar\sqrt\pi}e^{-\ell^{2}p^{2}/\hbar^{2}},$$
with $\int_{\mathbb R}g=1$, mean $0$ and second moment $\hbar^{2}/(2\ell^{2})$; hence $\Delta_{\psi_0}P=\hbar/(\ell\sqrt2)$;

(d) consequently $\Delta_{\psi_0}Q\,\Delta_{\psi_0}P=\hbar/2$: the ground preparation is one of the coherent preparations of [[pthm-nrqm-oscillator-coherent-state-fluctuations]], and it saturates the model's position-momentum relation;

(e) the computation is one preparation of the adopted model; it identifies no measured distribution with $f$ or $g$ and no laboratory state with the ground state.

## Facts & Assumptions

**Given:** the model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] with parameters $m,\omega,\hbar>0$, length $\ell=\sqrt{\hbar/(m\omega)}$, energy operator $H_1$, eigenbasis $(\psi_n)$ and ground vector $\psi_0$; the operators $Q$ and $P$ with their domains.

[F1] **The ground vector from the scaling theorem.** With $g_0(y)=\pi^{-1/4}e^{-y^{2}/2}$ and $D$ the scaling unitary of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], one has $\psi_0=Dg_0$, $\psi_0(x)=\ell^{-1/2}g_0(x/\ell)=\ell^{-1/2}\pi^{-1/4}e^{-x^{2}/(2\ell^{2})}$, $\|\psi_0\|=1$, and $H_1\psi_0=\frac{\hbar\omega}{2}\psi_0$; moreover $\psi_0=\Psi_0$ is the coherent state of label $0$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clauses (a), (b); [[thm-nrqm-oscillator-hermite-recurrence]] clause (a); [[def-nrqm-oscillator-coherent-states]] clause (c); [[pthm-nrqm-oscillator-energy-spectrum-and-completeness]] clause (a)).

[F2] **The position law.** $(Q,\mathrm m)$ is an assigned sharp observable of the model with $Q=M_x$ on $D(Q)=\{f:xf\in L^{2}\}$ and law $\mu^{Q}_{\psi}(B)=\|E_Q(B)\psi\|^{2}$; for the real multiplier $m(x)=x$ on the $\sigma$-finite space $(\mathbb R,\text{Lebesgue})$ the assignment $E(B)=M_{\mathbf 1_{x^{-1}(B)}}$ is the spectral projection-valued measure of $M_x$ and $\|E(B)\psi\|^{2}=\int_{x^{-1}(B)}|\psi|^{2}\,dx$ ([[def-nrqm-oscillator-framework-quadratic-potential-model]] clause (b); [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b); [[lem-nrqm-observables-l2-multiplication-spectral-measure]] clauses (b), (c)).

[F3] **Heat kernel and its moments.** For $t>0$ and $n=1$, $\Gamma(x,t)=(4\pi t)^{-1/2}e^{-x^{2}/(4t)}$ satisfies $\int\Gamma(x,t)dx=1$, and all first and second moments are absolutely integrable with $\int x\Gamma(x,t)dx=0$ and $\int x^{2}\Gamma(x,t)dx=2t$ ([[def-heat-kernel]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]] clause (i), [[lem-first-and-second-moments-of-the-heat-kernel]]).

[F4] **The momentum law.** $\mathcal F_2(P\psi)(\xi)=2\pi\hbar\,\xi\,\mathcal F_2\psi(\xi)$ for $\psi\in D(P)$, and $D(P)=\{\psi:\xi\mathcal F_2\psi\in L^{2}\}$; with $g(\xi):=2\pi\hbar\xi$ and $M_g$ the multiplication operator on $L^{2}(\mathbb R,d\xi)$ one has $P=\mathcal F_2^{-1}M_g\mathcal F_2$ with $D(P)=\mathcal F_2^{-1}D(M_g)$, so by the transport lemma the spectral projection-valued measure of $P$ is $E_P(B)=\mathcal F_2^{-1}E_{M_g}(B)\mathcal F_2$ and, for a unit $\psi$, $\mu^{P}_{\psi}(B)=\|E_{M_g}(B)\mathcal F_2\psi\|^{2}$; the multiplication lemma applied to $M_g$ gives $E_{M_g}(B)=M_{\mathbf 1_{g^{-1}(B)}}$ and $\mu^{P}_{\psi}(B)=\int_{g^{-1}(B)}|\mathcal F_2\psi(\xi)|^{2}\,d\xi$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (b) at $d=1$, $r=1$; [[lem-nrqm-oscillator-unitary-transport-of-spectral-pvms]] clauses (b), (c); [[lem-nrqm-observables-l2-multiplication-spectral-measure]] clauses (b), (c)).

[F5] **Gaussian Fourier transform and linear change of variables.** $\mathcal F_2(e^{-\pi tx^{2}})(\xi)=t^{-1/2}e^{-\pi\xi^{2}/t}$ for $t>0$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]); and for the $C^{1}$ diffeomorphism $T(\xi)=2\pi\hbar\xi$ of $\mathbb R$ and $h\in L^{1}$, $\int_{\mathbb R}h(p)\,dp=\int_{\mathbb R}h(2\pi\hbar\xi)\,2\pi\hbar\,d\xi$, so $\int_{\mathbb R}h(2\pi\hbar\xi)\,d\xi=(2\pi\hbar)^{-1}\int_{\mathbb R}h(p)\,dp$ ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F6] **Means, variances and spreads.** For an assigned sharp observable $(A,u_A)$ and a unit vector $\psi\in D(A)$ the outcome-law mean and second moment exist and equal $\langle A\psi,\psi\rangle$ and $\|A\psi\|^{2}$, and the preparation spread is the square root of the outcome-law variance $\int(\lambda-m)^{2}d\mu^{A}_{\psi}$; for the coherent preparations of the model the identity $\Delta Q\,\Delta P=\hbar/2$ is known ([[pthm-nrqm-observables-preparation-moments]] clauses (a), (b); [[def-nrqm-uncertainty-preparation-spread]] clauses (b), (c); [[pthm-nrqm-oscillator-coherent-state-fluctuations]] clause (a)).

## Verification

**Given:** the data of the Example and [F1]-[F6].

1.1 [The ground vector] By [F1], $\psi_0=Dg_0$ with $g_0(y)=\pi^{-1/4}e^{-y^{2}/2}$, so its representative is $\psi_0(x)=\ell^{-1/2}\pi^{-1/4}e^{-x^{2}/(2\ell^{2})}$ and $\|\psi_0\|=\|g_0\|=1$ because $D$ is an isometry; $H_1\psi_0=\frac{\hbar\omega}{2}\psi_0$ and $\psi_0=\Psi_0$ are also from [F1]. [given, F1]

1.2 [The position law] By [F2] and [F1], for every Borel $B\subseteq\mathbb R$ the position law of the ground preparation is $\mu^{Q}_{\psi_0}(B)=\int_{x^{-1}(B)}|\psi_0(x)|^{2}dx=\int_B\ell^{-1}\pi^{-1/2}e^{-x^{2}/\ell^{2}}dx$, so $f(x)=\ell^{-1}\pi^{-1/2}e^{-x^{2}/\ell^{2}}$ is its density, with $\int f=1$ because $|\psi_0|^{2}$ is a probability density. [given, F1, F2]

1.3 [The momentum law] By [F4] and [F5], for every Borel $B$ the momentum law is $\mu^{P}_{\psi_0}(B)=\int_{g^{-1}(B)}|\mathcal F_2\psi_0(\xi)|^{2}d\xi=\int_B(2\pi\hbar)^{-1}|\mathcal F_2\psi_0(p/(2\pi\hbar))|^{2}dp$, using the substitution $p=2\pi\hbar\xi$ in the second step; hence the density is $g(p)=(2\pi\hbar)^{-1}|\mathcal F_2\psi_0(p/(2\pi\hbar))|^{2}$. [given, F4, F5]

1.4 [The Fourier transform of the ground vector] By [F5] applied with $t=1/(2\pi\ell^{2})$, $\mathcal F_2(e^{-x^{2}/(2\ell^{2})})(\xi)=(\frac{1}{2\pi\ell^{2}})^{-1/2}e^{-2\pi^{2}\ell^{2}\xi^{2}}=\sqrt{2\pi}\,\ell\,e^{-2\pi^{2}\ell^{2}\xi^{2}}$, so by [F1] $\mathcal F_2\psi_0(\xi)=\ell^{-1/2}\pi^{-1/4}\sqrt{2\pi}\,\ell\,e^{-2\pi^{2}\ell^{2}\xi^{2}}=\sqrt{2\pi}\,\ell^{1/2}\pi^{-1/4}e^{-2\pi^{2}\ell^{2}\xi^{2}}$ and $|\mathcal F_2\psi_0(\xi)|^{2}=2\pi\ell\pi^{-1/2}e^{-4\pi^{2}\ell^{2}\xi^{2}}=2\sqrt\pi\,\ell\,e^{-4\pi^{2}\ell^{2}\xi^{2}}$. [given, F1, F5, algebra]

2.1 [Clause (a)] By step 1.1 the ground vector has the displayed representative, is a unit vector, equals $\Psi_0$, and satisfies $H_1\psi_0=\frac{\hbar\omega}{2}\psi_0$. [step 1.1]

2.2 [Clause (b)] By step 1.2 the position density is $f(x)=\ell^{-1}\pi^{-1/2}e^{-x^{2}/\ell^{2}}$, which equals the heat kernel $\Gamma(x,\ell^{2}/4)$; by [F3] it integrates to $1$, and its mean and second moment are those of $\Gamma(\cdot,\ell^{2}/4)$: $\int x f=0$ and $\int x^{2}f=2\cdot\frac{\ell^{2}}{4}=\frac{\ell^{2}}{2}$. [step 1.2, F3]

2.3 [Clause (c)] By steps 1.3 and 1.4, $g(p)=(2\pi\hbar)^{-1}\cdot2\sqrt\pi\,\ell\,e^{-4\pi^{2}\ell^{2}(p/(2\pi\hbar))^{2}}=(2\pi\hbar)^{-1}2\sqrt\pi\,\ell\,e^{-\ell^{2}p^{2}/\hbar^{2}}=\frac{\ell}{\hbar\sqrt\pi}e^{-\ell^{2}p^{2}/\hbar^{2}}$, which equals the heat kernel $\Gamma(p,\hbar^{2}/(4\ell^{2}))$; by [F3] it integrates to $1$ and has mean $0$ and second moment $2\cdot\frac{\hbar^{2}}{4\ell^{2}}=\frac{\hbar^{2}}{2\ell^{2}}$. [step 1.3, step 1.4, F3]

3.1 [Clause (d)] By steps 2.2 and 2.3 the ground preparation has position variance $\ell^{2}/2$ and momentum variance $\hbar^{2}/(2\ell^{2})$, so by [F6] its spreads are $\Delta_{\psi_0}Q=\ell/\sqrt2$ and $\Delta_{\psi_0}P=\hbar/(\ell\sqrt2)$ with product $\hbar/2$; by [F6] this is the value of the coherent preparations, and by [[pthm-nrqm-oscillator-coherent-state-fluctuations]] it is the minimum of the spread product over the common domain. [step 2.2, step 2.3, F6]

4.1 [Clause (e)] The computation used only the model's ground vector, the multiplication and Fourier forms of the model's position and momentum observables and the Gaussian heat-kernel facts; no measured distribution, apparatus or empirical value entered. [step 3.1, given] ∎
