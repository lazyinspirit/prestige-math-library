---
id: ex-aqft-vectorlike-conjugate-chiral-pair
kind: example
title: A conjugate SU(3)×U(1) chiral pair with zero local polynomial
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-thooft-anomalies-examples
deps:
  - def-aqft-anomaly-matching-data
  - def-aqft-cubic-anomaly-polynomial
  - lem-aqft-dual-cubic-anomaly-polynomial-cancellation
  - pthm-aqft-selected-chiral-spectrum-anomaly-cancellation
dependency_roles:
  def-aqft-anomaly-matching-data: formulation-prerequisite
  def-aqft-cubic-anomaly-polynomial: mathematical-premise
  lem-aqft-dual-cubic-anomaly-polynomial-cancellation: mathematical-premise
  pthm-aqft-selected-chiral-spectrum-anomaly-cancellation: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "A worked algebraic check of the flat-space one-loop background model with positive-chirality species (3,+1) and (bar 3,-1); no global-anomaly, dynamical-gauge, empirical, or continuum claim is made."
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies (full lecture notes)
      url: https://arxiv.org/pdf/0802.0634
      locator: "§§7.1–7.2, 9.4, and 10.4, printed pp. 45–50, 75–77, and 87–88: additivity, conjugate-representation traces, and the local descent normalization."
    - title: Enrique Alvarez, Gauge Anomalies
      url: https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf
      locator: "§§2.2–2.3, printed pp. 30–36: linear descent and representation-index cancellation."
verification:
  precheck: pending
---

## Example

Use the flat four-dimensional background data with global group $SU(3)\times U(1)_V$ and the common consistent regulator fixed above. Take the finite spectrum to consist of positive-chirality Weyl species $E=(\mathbf3,+1)$ and $E^*=(\bar{\mathbf3},-1)$. On a formal six-dimensional extension, write the anti-Hermitian $SU(3)$ curvature as $F_A$ and the $U(1)_V$ curvature as $f=dB$. The defining-representation curvature is $F_E=F_A+i f I_3$, with $\operatorname{tr}F_A=0$, so

$$\mathcal I_6(E)=\frac{i}{24\pi^2}\left(\operatorname{tr}F_A^3+3i f\wedge\operatorname{tr}F_A^2+3(if)^3\right).$$

The dual species has the opposite polynomial. The total polynomial and its common linear consistent descent therefore vanish, so this example has zero perturbative local anomaly class in the selected scheme. The six-dimensional extension is only the formal degree-six polynomial domain; the physical model remains four-dimensional.

## Example references

[Bilal, §§7.1–7.2, 9.4, and 10.4](https://arxiv.org/pdf/0802.0634)

[Alvarez, §§2.2–2.3](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf)

## Facts & Assumptions

**Given:** The flat-space spectrum $E\oplus E^*$, smooth background curvatures, the normalized degree-six polynomial, and the common source-backed large-mass Pauli–Villars one-loop descent input.

[F1] [[def-aqft-anomaly-matching-data]]: the selected backgrounds are nondynamical, the common regulator uses one linear consistent descent for each positive-chirality species, and the total polynomial is the sum over species.

[F2] [[def-aqft-cubic-anomaly-polynomial]]: for $E=(\mathbf3,+1)$, $F_E=F_A+ifI_3$ and $\mathcal I_6(E)=\frac{i}{24\pi^2}\operatorname{tr}(F_E^3)$.

[F3] [[lem-aqft-dual-cubic-anomaly-polynomial-cancellation]]: the dual connection has $F_{E^*}=-F_E^T$, so its cubic polynomial and canonical transgression are the negatives of those for $E$.

[F4] [[pthm-aqft-selected-chiral-spectrum-anomaly-cancellation]]: under these model and regulator assumptions, the relative local anomaly class of the conjugate pair is zero.

## Verification

1.1 Since $ifI_3$ commutes with the even two-form $F_A$, the binomial expansion gives $\operatorname{tr}(F_E^3)=\operatorname{tr}(F_A^3)+3if\wedge\operatorname{tr}(F_A^2)+3(if)^2\wedge\operatorname{tr}(F_A)+(if)^3\operatorname{tr}(I_3)$. The third term vanishes because $\operatorname{tr}F_A=0$, and $\operatorname{tr}(I_3)=3$, yielding the displayed polynomial. [F1, F2, algebra]

2.1 The dual representation reverses this entire cubic trace, including its pure $SU(3)$, mixed $U(1)_V$–$SU(3)^2$, and pure $U(1)_V^3$ terms, by [F3]. Summing the two species therefore gives $\mathcal I_6(E)+\mathcal I_6(E^*)=0$. [F2, F3, step 1.1, algebra]

3.1 The common linear descent of the zero polynomial has zero four-form representative, so [F4] applies and gives zero class in $H^{1,4}(s\mid d_H)$. This verifies the example under the stated regulator input only; it is not a test of global transformations. [F1, F4, step 2.1, given] ∎
