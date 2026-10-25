---
id: pthm-aqft-selected-chiral-spectrum-anomaly-cancellation
kind: physics-theorem
title: Local anomaly cancellation for a conjugate chiral pair
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-thooft-anomalies
deps:
  - def-aqft-anomaly-matching-data
  - def-aqft-thooft-anomaly
  - lem-aqft-dual-cubic-anomaly-polynomial-cancellation
  - lem-aqft-local-counterterm-shift-is-relative-coboundary
dependency_roles:
  def-aqft-anomaly-matching-data: formulation-prerequisite
  def-aqft-thooft-anomaly: formulation-prerequisite
  lem-aqft-dual-cubic-anomaly-polynomial-cancellation: mathematical-premise
  lem-aqft-local-counterterm-shift-is-relative-coboundary: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "A conditional one-loop result for infinitesimal background transformations of the stated flat-space SU(3)×U(1) global symmetry in one common large-mass Pauli–Villars subtraction convention. It proves only vanishing of the perturbative local class for the conjugate pair; it does not test global anomalies, establish a dynamical gauge theory, or construct a continuum QFT."
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies (full lecture notes)
      url: https://arxiv.org/pdf/0802.0634
      locator: "§§5.2–5.2.4, 7.1–7.2, 9.4, and 10.4, printed pp. 31–39, 45–50, 75–77, and 87–88: the Pauli–Villars-regulated chiral triangle, representation trace, local descent, and exact anomaly-polynomial convention."
    - title: Enrique Alvarez, Gauge Anomalies
      url: https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf
      locator: "§§2.1–2.4, printed pp. 25–38: independent descent, representation additivity/conjugation, and consistent-counterterm convention."
verification:
  precheck: pending
---

## Statement

Use the selected flat-space anomaly-matching model on oriented $M=\mathbb R^{1,3}$ with metric $\eta=\operatorname{diag}(-,+,+,+)$ and natural units $c=\hbar=1$. Its nondynamical global-symmetry backgrounds are a smooth compactly supported anti-Hermitian $SU(3)$ connection $A$ and a smooth compactly supported real $U(1)_V$ connection $B$ on the trivial bundles. The finite field spectrum consists of two massless positive-chirality Weyl species, one in $E=(\mathbf3,+1)$ and one in its dual $E^*=(\bar{\mathbf3},-1)$. The background is not integrated over. Use one common large-mass Pauli–Villars subtraction scheme and the consistent effective-action convention fixed in the model data.

Adopt the source-backed one-loop input that each positive-chirality species in this regulator has consistent local variation given by descent from $\mathcal I_6(R)=2\pi[\operatorname{tr}_R\exp(-iF_R/(2\pi))]_6$, with the same linear descent for every species: $\mathcal I_6=dI_5^{(0)}$, $sI_5^{(0)}+d_HI_4^{(1)}=0$, and $sI_4^{(1)}+d_HI_3^{(2)}=0$, and $\delta_{\epsilon,\alpha}\Gamma=\sum_R\int_M\mathcal E^4_{\epsilon,\alpha}(I_4^{(1)}(R))$. Here $s$ is the component BRST differential extended with $s(dx^\mu\wedge a)=-dx^\mu\wedge s(a)$. The linear map $\mathcal E^4_{\epsilon,\alpha}$ writes each ghost-number-one form with its four $dx$ factors on the left, then replaces its single $\mathfrak{su}(3)$ or real $U(1)_V$ ghost jet by the corresponding ordinary parameter jet; it is not an algebra substitution on products of ghosts. The local anomaly class is the class of $I_4^{(1)}$ in $H^{1,4}(s\mid d_H)$: local ghost-number-one four-forms satisfying the second descent equation, modulo $s$-variations of admitted local counterterms and total derivatives.

Then the total perturbative local anomaly class of this conjugate pair vanishes. This conclusion concerns only the identity component of the background-transformation group in the adopted one-loop convention; it asserts no absence of large-transformation or torsion anomalies and no consistency result for a dynamical gauge redundancy.

## Statement references

[Bilal, §§5.2, 7.1–7.2, 9.4, and 10.4](https://arxiv.org/pdf/0802.0634)

[Alvarez, §§2.1–2.4](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf)

## Facts & Assumptions

**Given:** The selected flat-space background model, its two positive-chirality species $E=(\mathbf3,+1)$ and $E^*=(\bar{\mathbf3},-1)$, compactly supported infinitesimal transformations, and the common consistent descent convention in the Statement.

[F1] [[def-aqft-anomaly-matching-data]]: the background group is the fixed global form $SU(3)\times U(1)_V$; the connections are anti-Hermitian in the stated representations; the common large-mass Pauli–Villars subtraction assigns, after the regulator masses are sent to infinity, each positive-chirality species the consistent descent of its degree-six polynomial and adds species linearly.

[F2] [[def-aqft-thooft-anomaly]]: the local anomaly of a nondynamical global-symmetry background is the class in $H^{1,4}(s\mid d_H)$ modulo the model’s admitted local counterterms and total derivatives; the definition makes no global-anomaly claim.

[F3] [[lem-aqft-dual-cubic-anomaly-polynomial-cancellation]]: for the dual background connection, $\mathcal I_6(E^*)=-\mathcal I_6(E)$ and the canonical Chern–Simons transgressions also cancel.

[F4] [[lem-aqft-local-counterterm-shift-is-relative-coboundary]]: adding an admitted local counterterm changes a local anomaly representative only by an $s$-coboundary and a total derivative, so its relative cohomology class is unchanged.

[A1] Adopt the source-backed one-loop determinant law in [F1] as a premise for this regulator. The proof below does not derive the chiral determinant variation from a loop integral or an index theorem.

## Proof

1.1 By [A1] and [F1], the total consistent background variation is the common linear descent of $\mathcal I_6(E)+\mathcal I_6(E^*)$. Because the two species use the same regulator and trace normalization, additivity of the determinant variation identifies its ghost-number-one representative with the descent of this sum; its physical variation is the stated linear evaluation of that representative. [given, A1, F1, algebra]

2.1 By [F3], $\mathcal I_6(E)+\mathcal I_6(E^*)=0$ and the chosen transgressions have zero sum. Applying the same linear BRST and exterior-derivative descent to this zero transgression gives $I_4^{(1)}(E)+I_4^{(1)}(E^*)=0$ as a local representative. [F3, step 1.1, algebra]

3.1 The representative in step 2.1 is the zero four-form, whose class in $H^{1,4}(s\mid d_H)$ is zero by the quotient definition in [F2]. The linear map $\mathcal E^4_{\epsilon,\alpha}$ sends this zero representative to zero ordinary variation. Hence this specified chiral spectrum has no perturbative local ’t Hooft anomaly under the stated infinitesimal background transformations. [F2, step 2.1, algebra]

4.1 By [F4], any admitted local counterterm changes only the representative by a relative coboundary; it cannot create a nonzero class from this zero class. The result remains a local one-loop statement and does not test transformations outside the stated identity component. [F2, F4, step 3.1] ∎
