---
id: ex-periodic-pic-leapfrog-energy-drift-for-a-harmonic-mode
kind: example
title: Leapfrog changes the energy of an exact harmonic test mode
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-periodic-pic-separable-hamiltonian-grid-model
  - thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy
  - thm-periodic-pic-leapfrog-geometric-properties-and-order-two-error
  - def-leapfrog-step-map
proof_strategy: direct
axiom_use: No choice principle is used; all updates and energies are exact rational calculations.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration, §3.5
      url: https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Chapter 4
      url: https://djvu.online/file/cjOfwRgltjv1g
---

## Statement

As a scalar diagnostic, consider the separable harmonic Hamiltonian $H(q,p)=\frac12(p^2+q^2)$ and one kick-drift-kick step with $\Delta t=1/2$ from $(q_0,p_0)=(1,0)$. It returns
$$ (q_1,p_1)=\left(\frac78,-\frac{15}{32}\right),\qquad H(q_1,p_1)=\frac{1009}{2048}\ne\frac12=H(q_0,p_0). $$
The exact oscillator conserves $H$. This abstract quadratic test is not claimed to be a trajectory of the periodic electrostatic potential $U_h$ from [[def-periodic-pic-separable-hamiltonian-grid-model]]; it shows why symplecticity or reversibility alone cannot imply exact preservation of an arbitrary Hamiltonian. On the separate PIC branch, [[thm-periodic-pic-leapfrog-geometric-properties-and-order-two-error]] proves its own reversible/symplectic and conditional order-two properties. The exact semidiscrete energy result there is [[thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy]].

## Facts & Assumptions

**Given:** $H(q,p)=\frac12(p^2+q^2)$, the kick-drift-kick convention, and the initial state $(1,0)$.

[F1] [[def-leapfrog-step-map]]: kick and drift shears are $K_a(q,p)=(q,p-a\nabla U(q))$ and $D_b(q,p)=(q+bp,p)$, and leapfrog composes them as a half kick, full drift, half kick.

[F2] [[thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy]]: the exact semidiscrete PIC Hamiltonian flow conserves its continuous Hamiltonian; this is a separate model from the scalar test here.

[F3] [[thm-periodic-pic-leapfrog-geometric-properties-and-order-two-error]]: on the periodic PIC Hamiltonian, leapfrog is reversible and symplectic and has a conditional order-two error bound, with no discrete exact-energy claim.

## Proof

1.1 The half kick gives $p_{1/2}=p_0-(\Delta t/2)q_0=-1/4$. The drift gives $q_1=q_0+\Delta t p_{1/2}=1-(1/2)(1/4)=7/8$. The final half kick gives $p_1=p_{1/2}-(\Delta t/2)q_1=-1/4-7/32=-15/32$. [given, algebra]

2.1 For the oscillator, $\dot q=p$ and $\dot p=-q$, so $\frac{d}{dt}H=qp-pq=0$. The kick and drift matrices for the test are $K_{1/4}=\begin{pmatrix}1&0\\-1/4&1\end{pmatrix},\qquad D_{1/2}=\begin{pmatrix}1&1/2\\0&1\end{pmatrix}.$ Each has determinant one. Direct multiplication gives $A^TJA=(\det A)J=J$ for every real $2\times2$ matrix $A$, where $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, so their composition is symplectic. The shears have inverses $K_{-1/4}$ and $D_{-1/2}$; reversing the palindromic composition with these inverses proves the step reversible. The exact Hamiltonian at the updated point is $H(q_1,p_1)=\frac12\left(\frac{49}{64}+\frac{225}{1024}\right)=\frac12\frac{1009}{1024}=\frac{1009}{2048},$ while $H(q_0,p_0)=1/2=1024/2048$. Their difference is $-15/2048$. Therefore this reversible symplectic step does not preserve its Hamiltonian exactly. The separate PIC results [F2] and [F3] concern their own variational force and tube hypotheses and are not transferred to this scalar test. [F1, F2, F3, step 1.1, algebra] ∎
