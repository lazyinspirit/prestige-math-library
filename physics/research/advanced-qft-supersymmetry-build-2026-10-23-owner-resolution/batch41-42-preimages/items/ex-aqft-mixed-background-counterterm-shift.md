---
id: ex-aqft-mixed-background-counterterm-shift
kind: example
title: A mixed-background counterterm shifts the local representative
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-thooft-anomalies-examples
deps:
  - def-aqft-anomaly-matching-data
  - def-aqft-thooft-anomaly
  - lem-aqft-local-counterterm-shift-is-relative-coboundary
dependency_roles:
  def-aqft-anomaly-matching-data: formulation-prerequisite
  def-aqft-thooft-anomaly: formulation-prerequisite
  lem-aqft-local-counterterm-shift-is-relative-coboundary: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "A local counterterm calculation on trivial flat-space SU(3) and U(1) backgrounds with compact support. It records one infinitesimal U(1) variation and does not claim that the full combined anomaly class vanishes or that a global counterterm exists on nontrivial bundles."
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies (full lecture notes)
      url: https://arxiv.org/pdf/0802.0634
      locator: "§§8.3 and 9.2–9.4, printed pp. 63–77: local Chern–Simons descent and the anomaly/counterterm ambiguity."
    - title: Enrique Alvarez, Gauge Anomalies
      url: https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf
      locator: "§§3.1–2.4, printed pp. 25–38: Chern–Simons forms, local counterterm shifts, and the distinction between consistent and covariant anomalies."
verification:
  precheck: pending
---

## Example

Let $A$ be a smooth compactly supported anti-Hermitian $\mathfrak{su}(3)$ connection one-form on trivial $\mathbb R^{1,3}$, with curvature $F_A=dA+A\wedge A$, and let $B$ be a smooth real $U(1)_V$ background one-form with compactly supported gauge parameter $\alpha$. In natural units, $[A]=[B]=\text{mass}$ and $[F_A]=\text{mass}^2$. Define the local three-form

$$K_3(A):=\operatorname{tr}\left(A\wedge dA+\frac23A\wedge A\wedge A\right)$$

and add the four-dimensional local counterterm $C_4=\lambda B\wedge K_3(A)$ to the effective action, with dimensionless coefficient $\lambda$. Under the $U(1)_V$ background transformation $B\mapsto B+d\alpha$ with $A$ fixed, its local variation is

$$\delta_\alpha C_4=\lambda\,d(\alpha K_3(A))-\lambda\,\alpha\operatorname{tr}(F_A\wedge F_A).$$

The first term integrates to a boundary term and vanishes for compactly supported $\alpha$. Thus this counterterm shifts the $U(1)_V$ component of the local anomaly representative by $-\lambda\alpha\operatorname{tr}(F_A\wedge F_A)$ while the full relative class is unchanged modulo the admitted counterterm space. This calculation does not assert that the full $SU(3)\times U(1)_V$ anomaly vanishes or that the $SU(3)$ component of the representative is unchanged.

## Example references

[Bilal, §§8.3 and 9.2–9.4](https://arxiv.org/pdf/0802.0634)

[Alvarez, §§3.1–2.4](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf)

## Facts & Assumptions

**Given:** The trivial flat-space background fields, the compact-support boundary condition, the selected local counterterm space, and the displayed counterterm.

[F1] [[def-aqft-anomaly-matching-data]]: $A$ and $B$ are nondynamical background connections with compactly supported variations; the selected counterterm space is local and the boundary convention discards compact-support total derivatives.

[F2] [[def-aqft-thooft-anomaly]]: the local anomaly is defined modulo the admitted local counterterms and total derivatives in the relative BRST complex.

[F3] [[lem-aqft-local-counterterm-shift-is-relative-coboundary]]: an allowed local counterterm changes the anomaly representative by a relative coboundary and leaves its class unchanged.

## Verification

1.1 Differentiate $K_3(A)$. The graded Leibniz rule gives $dK_3=\operatorname{tr}(dA\wedge dA+2dA\wedge A\wedge A)$. In the trace, $\operatorname{tr}(A\wedge A\wedge dA) = \operatorname{tr}(dA\wedge A\wedge A)$, while $\operatorname{tr}(A\wedge A\wedge A\wedge A)=0$ because cyclically moving its first one-form past the other three contributes a minus sign. Expanding $F_A\wedge F_A$ therefore gives $dK_3(A)=\operatorname{tr}(F_A\wedge F_A)$. [F1, algebra]

2.1 Since only $B$ varies, $\delta_\alpha C_4=\lambda d\alpha\wedge K_3(A)=\lambda d(\alpha K_3(A))-\lambda\alpha\,dK_3(A)$. Substitute step 1.1. Compact support makes the integral of the exact first term vanish, so the stated $U(1)_V$ representative shifts by $-\lambda\alpha\operatorname{tr}(F_A\wedge F_A)$. [given, F1, step 1.1, algebra]

3.1 The shift is the variation of an allowed local counterterm, so [F2] and [F3] imply that it changes the representative but not the relative local anomaly class. The computation concerns only the displayed $U(1)_V$ component; it does not set the combined class or the $SU(3)$ variation to zero. [F2, F3, step 2.1] ∎
