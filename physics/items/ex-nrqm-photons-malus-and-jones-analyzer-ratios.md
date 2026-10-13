---
id: ex-nrqm-photons-malus-and-jones-analyzer-ratios
kind: example
title: "Malus and Jones ratios of the declared analyser: the same cos^2 from the
  Born law and from a classical transverse amplitude"
status: published
origin: pipeline
domain: physics
dependency_level: 13
deps:
  [
    post-nrqm-photons-radiation-extension-and-transverse-mode-assignment,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-photons-framework-fixed-mode-polarization-model,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-photons-analyzer-projections-and-overlaps,
    pthm-nrqm-photons-fixed-mode-polarization-outcome-law,
    def-countable-choice, def-dependent-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-photons-framework-fixed-mode-polarization-model: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-photons-analyzer-projections-and-overlaps: mathematical-premise
  pthm-nrqm-photons-fixed-mode-polarization-outcome-law: physical-result
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite-dimensional model comparison on the declared fixed
  propagation-mode polarisation space: the Born probability cos^2(theta) of the
  quantised model's ideal analyser for the preparation along e_1, and the
  dimensionless relative-intensity ratio cos^2(theta) of a declared normalized
  classical transverse complex amplitude passed through the same projection. The
  example establishes that the two declared models agree on this ratio and
  asserts no field quantisation, no detector claim, no Maxwell derivation and no
  empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6 printed pages 14-15 (PDF pages 22-23): the electric vector
        component transmitted by a polaroid with factor cos(theta), the energy
        fraction cos^2(theta), the individual-photon amplitude reading, and the
        remark that the transmitted fraction agrees with classical physics"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 3 'Linear
        algebra: vector spaces and operators', Section 5 'Orthonormal basis and
        orthogonal projectors': finite-dimensional orthogonal projection
        formulas, ranges and eigenspaces"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349\
        e84d74129eef504498472_MIT8_05F13_Chap_03.pdf"
---

## Example

Adopt the state and composition postulate P1, the observable and probability
postulate P2 ([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]]), the radiation extension
postulate clause (i)
([[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]]) and
the declared fixed-mode polarisation model
[[def-nrqm-photons-framework-fixed-mode-polarization-model]] with polarisation
space $V$, orthonormal basis $(e_{1},e_{2})$ and analyser projections
$P_{\theta}$. Assume the Axioms of Countable Choice, Dependent Choice and Choice
([[def-countable-choice]], [[def-dependent-choice]], [[def-axiom-of-choice]]). Fix an angle
$\theta\in\mathbb R$. This example compares two declared models of the same
analyser:

**(a) The quantised-model ratio.** Consider the pure one-photon polarisation
preparation of the ray $[e_{1}]$ and the declared ideal analyser at angle
$\theta$. By
[[pthm-nrqm-photons-fixed-mode-polarization-outcome-law]] the outcome law of
the analyser is
$$p_{+1}=\|P_{\theta}e_{1}\|^{2}=\cos^{2}\theta,\qquad p_{-1}=\sin^{2}\theta,$$
so the **transmitted Born probability** is $\cos^{2}\theta$ in the unit $1$ of
dimensionless probabilities.

**(b) The declared classical transverse-amplitude model.** Declare the
following elementary model, with no claim that it is Maxwell theory: its
**field data** are complex vectors $E\in V$ whose coordinates are dimensionless
amplitude ratios relative to one fixed reference amplitude $E_{\mathrm{ref}}$;
no absolute field strength is assigned. The **analyser at angle $\theta$**
acts on the field data by the orthogonal projection
$$E\longmapsto P_{\theta}E;$$
the model's **declared dimensionless relative intensity** of a field datum is
$$I(E):=\|E\|^{2},$$
and the **transmitted intensity fraction** is $I(P_{\theta}E)/I(E)$ for
$E\ne0$.
This is a declared idealisation of the classical description of a
polariser as projecting the transverse field amplitude (the Jones-vector
reading); it imports no Maxwell equation and makes no detector claim.

The example computes both ratios for the same declared data and compares them.

## Verification

**Given:** The declared polarisation space $V$ with orthonormal basis $(e_{1},e_{2})$, the analyser projections $P_{\theta},P_{\theta}^{\perp}$ and the angle $\theta$.

[L1] **Projection formulas.** $\langle e_{\theta},e_{1}\rangle=\cos\theta$, $P_{\theta}e_{1}=\cos\theta\,e_{\theta}$, $\|P_{\theta}e_{1}\|^{2}=\cos^{2}\theta$, and $\|P_{\theta}E\|^{2}=\langle E,P_{\theta}E\rangle$ for every $E\in V$ ([[lem-nrqm-photons-analyzer-projections-and-overlaps]] clauses (a),(b)).

[L2] **Born law of the analyser.** For the declared analyser and a pure preparation of unit vector $\psi$, the outcome probability is $\|P_{\theta}\psi\|^{2}$ ([[pthm-nrqm-photons-fixed-mode-polarization-outcome-law]] clause (c), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).

[L3] **Norm positivity.** For $E\ne0$ one has $I(E)=\|E\|^{2}>0$; and $I(cE)=|c|^{2}I(E)$ for $c\in\mathbb C$ ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-photons-analyzer-projections-and-overlaps]] Fact [F1] of the inner-product conventions).

**Proof technique:** direct; evaluate the projection on $e_{1}$ and form the ratio of the squared norms.

**Given:** The data of the Example and [L1]-[L3].

1.1 [Quantised ratio] By [L1] the projectors satisfy $P_{\theta}e_{1}=\cos\theta\,e_{\theta}$ and hence $p_{+1}=\|P_{\theta}e_{1}\|^{2}=\cos^{2}\theta$; the complementary probability is $p_{-1}=1-p_{+1}=\sin^{2}\theta$. This is (a) read from the theorem of [L2]. [L1, L2, algebra]

1.2 [Classical ratio] Let $E\in V$, $E\ne0$. Applying [L1] with $E$ in place of $e_{1}$ gives $\|P_{\theta}E\|^{2}=\langle E,P_{\theta}E\rangle$; for the particular field datum $E=e_{1}$ this is $\|P_{\theta}e_{1}\|^{2}=\cos^{2}\theta$, and $I(e_{1})=\|e_{1}\|^{2}=1$ by [L1] and [L3]. Hence the declared transmitted intensity fraction is $$\frac{I(P_{\theta}e_{1})}{I(e_{1})}=\cos^{2}\theta .$$ [L1, L3, algebra]

2.1 [Comparison] Steps 1.1 and 1.2 show that the quantised model's transmitted Born probability and the declared classical model's transmitted intensity fraction coincide at $\cos^{2}\theta$ for the same declared angle and the same declared alignment $e_{1}$. This shared prediction does not distinguish these two models, and agreement with it alone does not establish field quantisation. An observation could still bear on a comparison with another specified model under a declared observation model; no observation or statistical comparison is supplied here. The declared classical model is not refuted by the shared prediction. This completes the announced computation. [step 1.1, step 1.2, algebra] ∎

## Remarks

- **What is compared.** Only the two declared models on the declared
  two-dimensional space are compared. No claim is made that the elementary
  classical model reproduces the photon counting statistics or the
  non-classical states of the radiation sector. Quantum count laws are computed in
  [[ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal]];
  [[texp-nrqm-photons-classical-field-and-quantized-detection-comparison]]
  states the additional classical count law, preparation and detector declarations
  required for a count-statistics comparison.
- **Sources and status.** The coincidence of the classical transmitted
  fraction with the quantum transmitted probability is explicitly noted in the
  cited source; the classical model here is an elementary declared idealisation
  constructed for the comparison and is not a derivation from Maxwell theory.
