---
id: pthm-qsm-interacting-dimer-gibbs
kind: physics-theorem
title: "Interacting Heisenberg dimer Gibbs model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-qsm-models-statistics-and-preparation
  - thm-qsm-models-dimer-entanglement
  - def-qsm-pauli-two-qubit-conventions
  - lem-qsm-pauli-dimer-spectrum
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-derivative-of-exponential
  - def-real-analytic-function
  - thm-power-series-sums-are-real-analytic
  - thm-real-analytic-functions-closed-under-algebra-quotients-and-composition
  - thm-real-analytic-inverse-and-implicit-function-theorems
  - thm-exponential-beats-every-polynomial
dependency_roles:
  post-qsm-models-statistics-and-preparation: physical-assumption
  thm-qsm-models-dimer-entanglement: mathematical-premise
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  lem-qsm-pauli-dimer-spectrum: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-real-analytic-function: mathematical-premise
  thm-power-series-sums-are-real-analytic: mathematical-premise
  thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: mathematical-premise
  thm-real-analytic-inverse-and-implicit-function-theorems: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
physical_scope: "The finite two-spin Hilbert space C^2 tensor C^2 with the isotropic Pauli exchange Hamiltonian and a uniform z-field, at positive temperature. The exact separability threshold is asserted only at zero field for J>0. There is no measurement, thermalization, material-specific, or infinite-volume claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Doron Cohen, Lecture Notes in Statistical Mechanics and Mesoscopics, §§2.2–2.3"
      url: "https://physics.bgu.ac.il/~dcohen/ARCHIVE/sqm.pdf"
    - title: "Damian Markham, Janet Anders, Vlatko Vedral, Mio Murao, and Akimasa Miyake, Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Statement

Let $e_0,e_1$ and $\sigma_x,\sigma_y,\sigma_z,C$ be as in [[def-qsm-pauli-two-qubit-conventions]], with $\sigma_z e_0=e_0$ and $\sigma_z e_1=-e_1$. By [[lem-qsm-pauli-dimer-spectrum]], the normalized singlet $s=(e_0\otimes e_1-e_1\otimes e_0)/\sqrt2$ has $C$-eigenvalue $-3$, and the three orthonormal triplets have eigenvalue $1$. Adopt the two-spin Hamiltonian as a finite matrix on $\mathbb C^2\otimes\mathbb C^2$, with full domain $D(H_{J,h})=\mathbb C^2\otimes\mathbb C^2$:
$$H_{J,h}:=JC-h(\sigma_z\otimes I+I\otimes\sigma_z),$$
where $J,h\in\mathbb R$ are energies in joules. For inverse temperature $\beta>0$ in J$^{-1}$, use the canonical Gibbs preparation only after normalizing its finite trace. Its singlet energy is $-3J$; its triplet energies are $J-2h$, $J$, and $J+2h$. Here $\cosh y:=(e^y+e^{-y})/2$.
$$Z(\beta,J,h)=e^{3\beta J}+e^{-\beta J}\bigl(1+2\cosh(2\beta h)\bigr)>0.$$
At $h=0$ and $J>0$, the Gibbs density matrix is entangled exactly when $\beta J>(\log3)/4$, and is separable at and below equality. This exact threshold is a finite-state quantum-model conclusion. For every fixed $J,h$, $Z$ and the free energy $-\beta^{-1}\log Z$ are real analytic for $\beta>0$; the entanglement threshold is not a finite-temperature thermodynamic singularity. At zero field the entropy tends to $0$ as $\beta\to\infty$ for $J>0$, to $k_B\log3$ for $J<0$, and to $k_B\log4$ for $J=0$. For $J>0$, a nonzero field makes the singlet and the field-aligned triplet cross at $|h|=2J$ at zero temperature; this ground-space crossing does not make $Z$ singular at finite positive temperature.

## Facts & Assumptions

**Given:** The finite Hilbert space and Pauli conventions in the Statement; $J,h$ are in joules, $\beta>0$ is in J$^{-1}$, and $k_B>0$ is in J K$^{-1}$.

[A1] [[post-qsm-models-statistics-and-preparation]]: adopt the canonical state $\rho=Z^{-1}e^{-\beta H}$ only when its trace is finite and positive; this is a model preparation assumption, not a thermalization claim.

[F1] [[def-qsm-pauli-two-qubit-conventions]]: $C=\sum_{j=x,y,z}\sigma_j\otimes\sigma_j$, and each Pauli matrix acts on all of $\mathbb C^2$.

[F2] [[lem-qsm-pauli-dimer-spectrum]]: the normalized singlet has $C$-eigenvalue $-3$, while the three orthonormal triplets have eigenvalue $1$.

[F3] [[thm-qsm-models-dimer-entanglement]]: for the zero-field two-qubit Gibbs density with dimensionless $x=\beta J\ge0$, separability holds exactly for $x\le(\log3)/4$.

[F4] [[def-real-exponential-function-and-e]] and [[thm-exponential-addition-formula]]: the exponential is its everywhere-convergent power series and $e^{x+y}=e^xe^y$.

[F5] [[def-real-analytic-function]] and [[thm-power-series-sums-are-real-analytic]]: a real function represented locally by a convergent real power series is real analytic on its open domain.

[F6] [[thm-real-analytic-functions-closed-under-algebra-quotients-and-composition]]: sums, products, compatible compositions, and quotients with nonzero denominator preserve real analyticity.

[F7] [[thm-real-analytic-inverse-and-implicit-function-theorems]] and [[thm-derivative-of-exponential]]: a real analytic map with nonzero derivative has a real analytic local inverse, and $\exp'(y)=\exp(y)$.

[F8] [[def-natural-logarithm]]: $\log$ is the inverse of $\exp$ on $(0,\infty)$.

[F9] [[thm-exponential-beats-every-polynomial]]: for fixed $\Delta>0$, $\beta e^{-\beta\Delta}\to0$ as $\beta\to\infty$.

## Proof

1.1 In the ordered basis $e_0e_0,e_0e_1,e_1e_0,e_1e_1$, the field operator $\sigma_z\otimes I+I\otimes\sigma_z$ has eigenvalues $2,0,0,-2$. The middle two basis vectors combine into the singlet and the $m=0$ triplet of [F2]; both have field eigenvalue $0$. The outer vectors are the $m=+1$ and $m=-1$ triplets, with field eigenvalues $2$ and $-2$. Thus the singlet and triplet basis from [F2] is a common orthonormal eigenbasis for $C$ and the field operator. The displayed real eigenvalues make $H_{J,h}$ self-adjoint on its full domain $\mathbb C^2\otimes\mathbb C^2$; the singlet energy is $-3J$ and the triplet energies are $J-2h,J,J+2h$. [given, F1, F2, algebra]

2.1 The canonical trace is the sum of the four positive weights associated with step 1.1. It is therefore finite and positive, and the adopted preparation [A1] gives the displayed partition function. At $h=0$ and $J>0$, setting $x=\beta J$ identifies its normalized state with $\rho_x$ in [F3], so that theorem gives the exact separability and entanglement alternatives, including the equality case. [given, A1, F3, step 1.1, algebra]

2.2 Fix $J,h$ and let $E_{\min}$ be the least of the four energies from step 1.1, with multiplicity $g$. Write the other energies as $E_{\min}+\Delta_i$ with $\Delta_i>0$. After factoring out $e^{-\beta E_{\min}}$, the denominator is $D_\beta=g+\sum_i e^{-\beta\Delta_i}\to g$ and $1\le D_\beta\le4$. The Gibbs probability of each ground vector is $1/D_\beta$, so the total ground entropy tends to $-k_Bg(1/g)\log(1/g)=k_B\log g$. For an excited vector, $p_i=e^{-\beta\Delta_i}/D_\beta$ and $-p_i\log p_i=p_i(\beta\Delta_i+\log D_\beta)\le e^{-\beta\Delta_i}(\beta\Delta_i+\log4)$; this tends to zero by [F9], so the finite sum of excited entropy terms vanishes. At $h=0$, the triplet is the three-dimensional ground space for $J<0$, all four levels coincide for $J=0$, and the singlet is the unique ground state for $J>0$, giving the stated limits. [A1, F2, F9, step 1.1, algebra]

3.1 Fix $J,h$ and any $\beta_0>0$. For each of the four energies $E$ from step 1.1, the addition formula [F4] gives $e^{-\beta E}=e^{-\beta_0E}\sum_{n\ge0}[-E(\beta-\beta_0)]^n/n!$, a convergent power series about $\beta_0$. The four-term sum $Z(\beta)$ is therefore real analytic near $\beta_0$ by [F5]–[F6], and $Z(\beta_0)>0$ by step 2.1. Put $y_0=\log Z(\beta_0)$. By [F8], $\exp(y_0)=Z(\beta_0)$; by [F7], $\exp'(y_0)=\exp(y_0)=Z(\beta_0)\ne0$. The real analytic inverse theorem gives a local analytic inverse to $\exp$ near $Z(\beta_0)$, and [F8] identifies that inverse with $\log$. The composition clause of [F6] now makes $\log Z$ real analytic near $\beta_0$. Since $\beta_0$ was arbitrary, $-\beta^{-1}\log Z$ is real analytic for every $\beta>0$: the identity and constant functions have local polynomial series, so the quotient clause of [F6] makes $\beta\mapsto\beta^{-1}$ analytic on this domain. Thus the finite-volume free energy has no singularity at the entanglement threshold. [given, F4, F5, F6, F7, F8, step 1.1, step 2.1]

4.1 For $J>0$, the lowest triplet energy is $J-2|h|$. It equals the singlet energy $-3J$ exactly at $|h|=2J$. The two energy levels can cross as parameters vary, but step 2.1 is a strictly positive finite sum of exponentials at every $\beta>0$, so this zero-temperature ground-space crossing creates no finite-temperature singularity. [given, step 1.1, step 2.1, algebra] ∎
