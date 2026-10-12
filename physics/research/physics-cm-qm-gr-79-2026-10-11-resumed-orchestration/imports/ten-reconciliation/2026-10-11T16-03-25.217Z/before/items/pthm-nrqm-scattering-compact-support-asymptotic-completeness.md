---
id: pthm-nrqm-scattering-compact-support-asymptotic-completeness
aliases: [nrqm-scattering-compact-support-asymptotic-completeness]
kind: physics-theorem
domain: physics
title: "Asymptotic completeness and the unitary scattering operator for real bounded compactly supported potentials"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-scattering-framework-short-range-model, pthm-nrqm-scattering-wave-operator-existence-and-free-continuity, lem-nrqm-scattering-model-scaling-correspondence, thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness, thm-nrqm-controlled-dynamics-compact-scattering-defects, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  pthm-nrqm-scattering-wave-operator-existence-and-free-continuity: physical-result
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness: mathematical-premise
  thm-nrqm-controlled-dynamics-compact-scattering-defects: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a real bounded compactly supported potential: asymptotic completeness of the model's wave operators, the vanishing of the singular continuous spectral subspace, the identification of the two ranges with the absolutely continuous and continuous subspaces of the interacting operator, and unitarity of the model's scattering operator with its commutation with the free flow. Conditional on P1, P2, P4, P5, P6, P7, the declared model and the cited mathematics; the item asserts no cross section, no preparation, no detector and no empirical claim."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 12.3 Theorem 12.12 printed pages 253-256 (PDF pages 265-268): asymptotic completeness (Enss) for short-range potentials"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.2 printed pages 263-270 (PDF pages 271-278): the S-matrix and its interpretation for scattering experiments"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero, action constant $\hbar>0$ and a declared **compact-support-class**
potential $V$ supported in a ball $B_{R}$. Let $\Omega_{\pm}$ and $S$ be the
wave operators and scattering operator of clause (d) of that definition,
$E_{H}$ the projection valued measure of the self-adjoint interacting operator
$H$, and $\mu^{H}_{\psi}$ its scalar measures. Assume the Axiom of Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) the wave operators exist by
[[pthm-nrqm-scattering-wave-operator-existence-and-free-continuity]], and
$\operatorname{ran}\Omega_{\pm}\subseteq H_{\mathrm{ac}}(H)$ and
$H_{\mathrm{sc}}(H)=\{0\}$, where
$$H_{\mathrm{sc}}(H):=\{\psi\in H_{0}:\mu^{H}_{\psi}\ \text{is atomless and singular with respect to Lebesgue measure}\};$$

(b) each wave operator is asymptotically complete,
$$\operatorname{ran}\Omega_{+}=\operatorname{ran}\Omega_{-}=H_{\mathrm{ac}}(H)=H_{\mathrm c}(H);$$

(c) $S=\Omega_{+}^{*}\Omega_{-}$ is unitary on $H_{0}$ and commutes with the
free flow, $Se^{-itH^{\mathrm{free}}/\hbar}=e^{-itH^{\mathrm{free}}/\hbar}S$ for
every $t\in\mathbb R$.

The statement is a conditional consequence of the declared model with a
compactly supported real bounded potential; it asserts no stationary amplitude,
no partial-wave decomposition, no cross section and no measured quantity.

## Facts & Assumptions

**Given:** the declared short-range scattering model with $m,\hbar>0$, spin zero and a compact-support-class potential $V$ supported in $B_{R}$; the choice hypotheses.

[F1] **Scaling correspondence.** With $c=\hbar^{2}/(2m)$ and $W:=2mV/\hbar^{2}$, the operators $A=-\Delta_{w}+M_{W}$ and $H$ on $W^{2,2}$ satisfy $H=cA$, $E_{H}(cB)=E_{A}(B)$ for every Borel $B$, the strong wave-operator limits in physical and nondimensional time coincide, and the sets $H_{\mathrm{ac}}$, $H_{\mathrm{sc}}$, $H_{\mathrm{pp}}$, $H_{\mathrm c}$ of $H$ and of $A$ are equal ([[lem-nrqm-scattering-model-scaling-correspondence]] clauses (a), (b), (d), (e)).

[F2] **Compact-support asymptotic completeness.** Assume Countable Choice. For real bounded $V_{0}$ with support in a ball, the nondimensional operator $-\Delta+M_{V_{0}}$ on $H^{2}(\mathbb R^{3})$ has wave operators with $\operatorname{ran}\Omega_{\pm}\subseteq H_{\mathrm{ac}}$, $H_{\mathrm{sc}}=\{0\}$, $\operatorname{ran}\Omega_{+}=\operatorname{ran}\Omega_{-}=H_{\mathrm{ac}}=H_{\mathrm c}$, and $S=\Omega_{+}^{*}\Omega_{-}$ unitary and commuting with the free flow ([[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]] clauses (a), (b), (c)).

[F3] **Scattering-state vocabulary.** The model reads its wave operators and $S$ exactly as the strong limits and the product of clause (d) of its definition, and reads asymptotic completeness as the equality of the ranges with $H_{\mathrm{ac}}(H)$ and $H_{\mathrm c}(H)$ ([[def-nrqm-scattering-framework-short-range-model]] clause (d)).

## Proof

**Proof technique:** direct; apply the nondimensional compact-support completeness theorem to the rescaled potential and transfer the range, spectral-subspace and unitarity statements to the model through the scaling correspondence.

**Given:** the data and hypotheses of the statement and [F1]-[F3].

1.1 The declared potential $V$ is real, bounded and supported in $B_{R}$, so $W=V/c$ is real, bounded and supported in the same ball; hence [F2] applies to $W$. By [F1] the model's interacting operator is $H=cA$ with $A=-\Delta_{w}+M_{W}$ on the common domain. [F1, F2, given]

1.2 By [F2] the nondimensional wave operators exist with ranges inside $H_{\mathrm{ac}}(A)$ and with $H_{\mathrm{sc}}(A)=\{0\}$; by [F1] the physical strong limits exist exactly together with the nondimensional ones and coincide, and the spectral subspaces of $H$ and $A$ agree; this gives (a). [F1, F2, given]

2.1 By [F2], $\operatorname{ran}\Omega_{+}=\operatorname{ran}\Omega_{-}=H_{\mathrm{ac}}(A)=H_{\mathrm c}(A)$ for the nondimensional operators; by [F1] the same displayed equalities hold with $H$ in place of $A$ and the same operators, which is (b). [F2, step 1.2, F1, algebra]

3.1 By [F2] the operator $\Omega_{+}^{*}\Omega_{-}$ for the nondimensional pair is unitary and commutes with the free flow; since the physical and nondimensional wave operators coincide by [F1], $S=\Omega_{+}^{*}\Omega_{-}$ is unitary and commutes with $e^{-itH^{\mathrm{free}}/\hbar}$ for every $t$. This is (c) and completes the proof. [F2, step 2.1, F1, F3, algebra] ∎

## Remarks

- **No uniform threshold statement.** The cited mathematics includes a threshold
  obstruction: for compactly supported potentials the compactness of the
  scattering defects fails uniformly at zero energy unless the energy cutoff
  vanishes there ([[thm-nrqm-controlled-dynamics-compact-scattering-defects]]).
  Completeness itself, as stated here, is not affected; the obstruction concerns
  the uniform compact-defect statement, not the range equalities.
- **Zero-energy scattering.** The theorem asserts nothing about the behaviour of
  the stationary solutions at $k=0$; every stationary statement of this page is
  made for $k>0$.
