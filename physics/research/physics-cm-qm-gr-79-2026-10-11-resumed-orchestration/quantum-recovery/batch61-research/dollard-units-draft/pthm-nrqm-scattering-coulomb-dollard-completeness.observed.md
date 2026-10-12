---
id: pthm-nrqm-scattering-coulomb-dollard-completeness
aliases: [nrqm-scattering-coulomb-dollard-completeness]
kind: physics-theorem
domain: physics
title: "Completeness of the Dollard-modified wave operators for the declared Coulomb model"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-scattering-coulomb-dollard-model, def-nrqm-scattering-framework-short-range-model, lem-nrqm-scattering-model-scaling-correspondence, thm-nrqm-controlled-dynamics-dollard-integrable-remainder, thm-nrqm-controlled-dynamics-dollard-channel-completeness, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-bounded-borel-pvm-integral, thm-unbounded-borel-functional-calculus, lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators, pthm-nrqm-central-coulomb-energy-observable-and-flow, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-coulomb-dollard-model: formulation-prerequisite
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-dollard-integrable-remainder: mathematical-premise
  thm-nrqm-controlled-dynamics-dollard-channel-completeness: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared long-range Coulomb model with coupling kappa>0 and its Dollard-modified free comparison: existence of the modified wave operators as strong limits, their isometry and intertwining, the completeness equalities of their ranges with the absolutely continuous and continuous subspaces of the Coulomb operator, and unitarity of the modified scattering operator. Conditional on the declared model and the cited mathematics; the item asserts no Coulomb scattering amplitude, no Rutherford cross section, no measured quantity and no ordinary short-range comparison for the Coulomb potential."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.4 printed pages 271-275 (PDF pages 279-283): scattering electrons off hydrogen; the shielded Coulomb potential and the long-range caution"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 12.3 printed pages 253-256 (PDF pages 265-268): short-range completeness, with the long-range case explicitly outside the short-range condition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared long-range Coulomb model
[[def-nrqm-scattering-coulomb-dollard-model]] with mass $m>0$, spin zero,
action constant $\hbar>0$, coupling $\kappa>0$, the assigned energy operator
$H_{\kappa}$ on $H^{2}(\mathbb R^{3};\mathbb C)$, the free operator
$H^{\mathrm{free}}$, the nondimensional coupling
$\gamma=2m\kappa/\hbar^{2}$, the reference time $t_{\star}=2m/\hbar$, the
Dollard-modified comparison $U_{D}(t)$ and the modified wave operators
$\Omega_{D\pm}$ and $S_{D}$ of that definition. Assume the Axiom of Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) the modified wave operators exist as strong limits and are bounded linear
isometries, $\Omega_{D\pm}^{*}\Omega_{D\pm}=I$, and they intertwine,
$$\Omega_{D\pm}e^{-isH^{\mathrm{free}}/\hbar}=e^{-isH_{\kappa}/\hbar}\Omega_{D\pm} \qquad(s\in\mathbb R);$$

(b) the modified wave operators are complete,
$$\operatorname{ran}\Omega_{D+}=\operatorname{ran}\Omega_{D-} =H_{\mathrm{ac}}(H_{\kappa})=H_{\mathrm c}(H_{\kappa});$$

(c) the modified scattering operator $S_{D}=\Omega_{D+}^{*}\Omega_{D-}$ is
unitary on $H_{0}$ and commutes with the free flow;

(d) the ordinary short-range comparison of the model is not substituted:
neither existence nor completeness of
$\operatorname*{s-lim}_{t\to\pm\infty}e^{itH_{\kappa}/\hbar}e^{-itH^{\mathrm{free}}/\hbar}$
is asserted, and the modification is essential to the statement.

The statement is conditional on the declared model and the cited
mathematics. It asserts no explicit Coulomb scattering amplitude, no
Rutherford or other cross section, and no measured quantity; the logarithmic
phase is a comparison construction for the long-range generator.

## Facts & Assumptions

**Given:** the declared Coulomb model with $m,\hbar>0$, spin zero, $\kappa>0$, $\gamma=2m\kappa/\hbar^{2}$, $c=\hbar^{2}/(2m)$, $t_{\star}=2m/\hbar$, the operators $H_{\kappa}=c(-\Delta_{w}-\gamma/|\cdot|)$ and $H^{\mathrm{free}}=c(-\Delta_{w})$ on $W^{2,2}$, the comparison $U_{D}(t)$ and the choice hypotheses.

[F1] **Dollard integrable remainder.** Assume Countable Choice. For $\gamma>0$, with $H_{0}=-\Delta$, $H_{\gamma}=-\Delta-\gamma/|\cdot|$ on $H^{2}$ and the Dollard-modified evolution $U_{D}^{\mathrm{nd}}(\tau)=e^{-i\tau H_{0}}e^{i\operatorname{sign}(\tau)a(P)\log|\tau|}$, $a(p)=\gamma/(2|p|)$, the family is unitary and the remainder $\gamma/|\cdot|-\gamma/(2|\tau||P|)$ is integrable along $U_{D}^{\mathrm{nd}}$: there are $T_{\psi},C_{\psi}$ with $\|\bigl[\gamma/|\cdot|-\gamma/(2|\tau||P|)\bigr]U_{D}^{\mathrm{nd}}(\tau)\psi\|_{2}\le C_{\psi}(1+\log|\tau|)/|\tau|^{2}$ for $|\tau|\ge T_{\psi}$, for vectors in the dense momentum-test class ([[thm-nrqm-controlled-dynamics-dollard-integrable-remainder]] clauses (a), (b)).

[F2] **Dollard channel completeness.** With the hypotheses of [F1], the modified wave operators $\Omega_{D\pm}=s\text{-}\lim_{\tau\to\pm\infty}e^{i\tau H_{\gamma}}U_{D}^{\mathrm{nd}}(\tau)$ exist on all of $L^{2}$, satisfy $\Omega_{D\pm}e^{-isH_{0}}=e^{-isH_{\gamma}}\Omega_{D\pm}$, act in each angular channel as multiplication by a bounded Borel function of the energy with $|b_{l,\pm}(E)|=1$ for a.e. $E>0$, and $\operatorname{ran}\Omega_{D\pm}=H_{\mathrm{ac}}(H_{\gamma})=H_{\mathrm c}(H_{\gamma})$; $S_{D}=\Omega_{D+}^{*}\Omega_{D-}$ is unitary ([[thm-nrqm-controlled-dynamics-dollard-channel-completeness]] clauses (a), (b), (c)).

[F3] **Spectral correspondence of a positive multiple.** For a self-adjoint operator $T$, positive $c_{0}$ and every Borel $B$, the projection valued measure of $c_{0}T$ satisfies $E_{c_{0}T}(B)=E_{T}(B/c_{0})$, so $H_{\mathrm{ac}}$, $H_{\mathrm{sc}}$, $H_{\mathrm{pp}}$ and $H_{\mathrm c}$ of $c_{0}T$ and $T$ coincide; consequently for a bounded Borel $f$ one has $f(c_{0}T)=(f\circ c_{0})(T)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-bounded-borel-pvm-integral]], [[thm-unbounded-borel-functional-calculus]] clause 2, [[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] clauses (a), (b)).

[F4] **The model's readings.** The declared comparison, modified wave operators and spectral vocabulary are those of clauses (b), (c) of the Coulomb definition; the Coulomb operator is self-adjoint on $H^{2}$ with the flow $e^{-itH_{\kappa}/\hbar}$ ([[def-nrqm-scattering-coulomb-dollard-model]] clauses (b), (c), [[pthm-nrqm-central-coulomb-energy-observable-and-flow]] clauses (a), (b)).

## Proof

**Proof technique:** direct; match the model's comparison with the nondimensional Dollard evolution by the identity $\tau=\hbar t/(2m)$ and the pointwise phase identity, then transfer the remainder estimate, the limits and the completeness equalities.

**Given:** the data and hypotheses of the statement and [F1]-[F4].

1.1 Put $\tau:=\hbar t/(2m)$; then $\tau\to\pm\infty$ with $t\to\pm\infty$, $\operatorname{sign}\tau=\operatorname{sign}t$, $\log|\tau|=\log(|t|/t_{\star})$ with $t_{\star}=2m/\hbar$, and $H_{\kappa}=cC_{\gamma}$ with $C_{\gamma}=-\Delta_{w}-\gamma/|\cdot|$ by [F4]. Hence, for $x>0$, the phase function of the definition satisfies $h_{t}(cx)=e^{i\operatorname{sign}\tau\,\gamma(2\sqrt x)^{-1}\log|\tau|}$, which is the Dollard phase $e^{i\operatorname{sign}\tau\,a(p)\log|\tau|}$ evaluated at $|p|=\sqrt x$. [F4, given, algebra]

2.1 By [F3] the bounded functional calculus transfers functions of $H^{\mathrm{free}}=cA_{0}$ to functions of $A_{0}=-\Delta_{w}$: $f(H^{\mathrm{free}})=(f\circ c)(A_{0})$. Applying this with $f=e^{-itx/\hbar}\cdot h_{t}(x)$ and using step 1.1 and $e^{-itH^{\mathrm{free}}/\hbar}=e^{-i\tau A_{0}}$, one obtains $e^{-itH^{\mathrm{free}}/\hbar}h_{t}(H^{\mathrm{free}})=e^{-i\tau A_{0}}e^{i\operatorname{sign}\tau\,a(P)\log|\tau|}=U_{D}^{\mathrm{nd}}(\tau)$ for the multiplier $a(P)$ of [F1]; hence $U_{D}(t)=U_{D}^{\mathrm{nd}}(\tau)$ for every $t$ with $|\tau|>1$, and these are the times that carry the two strong limits. [F3, step 1.1, F1, algebra]

3.1 By [F1] the remainder is integrable along $U_{D}^{\mathrm{nd}}$, so [F2] gives existence of the nondimensional modified wave operators as strong limits of $e^{i\tau C_{\gamma}}U_{D}^{\mathrm{nd}}(\tau)$; by [F3] $e^{i\tau C_{\gamma}}=e^{itH_{\kappa}/\hbar}$, and by step 2.1 the physical comparison coincides with the nondimensional one at large times, so the strong limits $\Omega_{D\pm}$ exist and equal those of [F2], with the intertwining of [F2]. Since both factors $e^{itH_{\kappa}/\hbar}$ and $U_{D}(t)$ are unitary for every $t$, each product $e^{itH_{\kappa}/\hbar}U_{D}(t)$ is unitary, and a strong limit of unitaries is isometric: $\|\Omega_{D\pm}\psi\|=\lim_{t\to\pm\infty}\|e^{itH_{\kappa}/\hbar}U_{D}(t)\psi\|=\|\psi\|$ for every $\psi\in H_{0}$. This is (a). [F2, F1, step 2.1, F3, algebra]

4.1 By [F2] the ranges of the nondimensional modified wave operators equal $H_{\mathrm{ac}}(C_{\gamma})=H_{\mathrm c}(C_{\gamma})$; by [F3] the spectral subspaces of $H_{\kappa}=cC_{\gamma}$ and $C_{\gamma}$ coincide, and the operators coincide by step 3.1, so $\operatorname{ran}\Omega_{D+}=\operatorname{ran}\Omega_{D-}=H_{\mathrm{ac}}(H_{\kappa})=H_{\mathrm c}(H_{\kappa})$, which is (b). [F2, step 3.1, F3, algebra]

5.1 By [F2] the nondimensional modified scattering operator is unitary; since the modified wave operators coincide with the nondimensional ones by step 3.1, $S_{D}=\Omega_{D+}^{*}\Omega_{D-}$ is unitary and inherits the commutation with the free flow, which is (c). [F2, step 4.1, algebra]

6.1 The definition of the model declares the modified comparison and states that the ordinary short-range comparison is not claimed complete for the Coulomb potential; no step of this proof establishes the ordinary limits, so (d) records exactly what the preceding steps give. This completes the proof. [F4, given, step 3.1] ∎

## Remarks

- **Phases and observables.** The modified comparison is not unique: changing
  the reference time $t_{\star}$ changes asymptotic channel phases. The
  completeness equalities of (b) and the unitarity of (c) are invariant
  under that change, which is why the definition declares the reference time
  as a convention.
- **What would be needed for an amplitude.** An explicit Coulomb scattering
  amplitude, and with it any Rutherford-type cross section, would require the
  angular asymptotic analysis of the Coulomb continuum solutions and a
  further normalization statement; neither is contained in the completeness
  theorem, and the pair does not assert one.
