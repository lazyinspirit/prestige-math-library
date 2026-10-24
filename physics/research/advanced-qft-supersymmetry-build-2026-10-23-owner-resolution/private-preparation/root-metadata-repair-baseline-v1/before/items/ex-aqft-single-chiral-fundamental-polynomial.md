---
id: ex-aqft-single-chiral-fundamental-polynomial
kind: example
title: A single chiral fundamental has a nonzero local polynomial
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-thooft-anomalies-examples
deps:
  - def-aqft-anomaly-matching-data
  - def-aqft-cubic-anomaly-polynomial
dependency_roles:
  def-aqft-anomaly-matching-data: formulation-prerequisite
  def-aqft-cubic-anomaly-polynomial: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "A worked check of the formal one-loop polynomial for one positive-chirality (3,+1) species; it does not assert that its local cohomology class is nontrivial, that all counterterms fail, or that any global anomaly is present."
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies (full lecture notes)
      url: https://arxiv.org/pdf/0802.0634
      locator: "§§7.1–7.2, 9.4, and 10.4, printed pp. 45–50, 75–77, and 87–88: positive-chirality trace coefficient and descent polynomial."
    - title: Enrique Alvarez, Gauge Anomalies
      url: https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf
      locator: "§§2.2–2.3, printed pp. 30–36: the cubic representation index and chiral spectrum anomaly polynomial."
verification:
  precheck: pending
---

## Example

Use the same flat-space background convention but take the spectrum to contain only one positive-chirality species $E=(\mathbf3,+1)$. Its polynomial is

$$\mathcal I_6(E)=\frac{i}{24\pi^2}\left(\operatorname{tr}F_A^3+3i f\wedge\operatorname{tr}F_A^2+3(if)^3\right),$$

where $F_A$ is the anti-Hermitian $SU(3)$ curvature, $f=dB$ is the $U(1)_V$ curvature, and the expression is evaluated as a degree-six polynomial on the formal extension used for descent. The mixed $U(1)_V$–$SU(3)^2$ term and the pure $U(1)_V^3$ term have nonzero coefficients. This example verifies that the one-field polynomial is not the zero invariant polynomial; it does not claim that the associated relative BRST class is nontrivial modulo every admissible counterterm or that a global anomaly has been evaluated.

## Example references

[Bilal, §§7.1–7.2, 9.4, and 10.4](https://arxiv.org/pdf/0802.0634)

[Alvarez, §§2.2–2.3](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf)

## Facts & Assumptions

**Given:** The single positive-chirality species $E=(\mathbf3,+1)$, its smooth background connection, and the source-backed one-loop polynomial convention.

[F1] [[def-aqft-anomaly-matching-data]]: for one species, the selected regulator assigns the degree-six polynomial from the same consistent descent convention as in the conjugate-pair model.

[F2] [[def-aqft-cubic-anomaly-polynomial]]: $\mathcal I_6(E)=\frac{i}{24\pi^2}\operatorname{tr}(F_E^3)$ with $F_E=F_A+ifI_3$.

## Verification

1.1 Expand $F_E^3=(F_A+ifI_3)^3$. Since $F_A$ is traceless and $\operatorname{tr}(I_3)=3$, the result is the displayed sum of pure $SU(3)$, mixed $U(1)_V$–$SU(3)^2$, and pure $U(1)_V^3$ terms. [F1, F2, algebra]

2.1 The invariant polynomial is not identically zero: on a formal six-dimensional extension take $F_A=0$ and $f=dx^1\wedge dx^2+dx^3\wedge dx^4+dx^5\wedge dx^6$. Then $f^3=6\,dx^1\wedge dx^2\wedge dx^3\wedge dx^4\wedge dx^5\wedge dx^6\ne0$, so $\mathcal I_6(E)=\frac{3i}{24\pi^2}(if)^3\ne0$. This only checks the polynomial; it does not infer a nonzero relative cohomology class. [F2, step 1.1, algebra]

3.1 The scope is exactly the stated polynomial calculation. No conclusion about whether local counterterms remove its descent, or about large transformations, follows from steps 1.1–2.1. [given, step 2.1] ∎
