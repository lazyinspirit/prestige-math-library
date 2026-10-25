---
id: lem-aqft-dual-cubic-anomaly-polynomial-cancellation
kind: lemma
title: A conjugate representation reverses the cubic anomaly polynomial
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-thooft-anomalies
deps:
  - def-aqft-cubic-anomaly-polynomial
dependency_roles:
  def-aqft-cubic-anomaly-polynomial: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies (full lecture notes)
      url: https://arxiv.org/pdf/0802.0634
      locator: "§§7.1–7.2 and 9.4, printed pp. 45–50 and 75–77: complex-conjugate representations and the representation trace in the four-dimensional anomaly polynomial."
    - title: Enrique Alvarez, Gauge Anomalies
      url: https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf
      locator: "§§2.2–2.3, printed pp. 30–36: linear descent from an invariant polynomial, additivity, and the sign reversal for conjugate representation indices."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $H=SU(3)\times U(1)$, let $E=\mathbb C^3$ have representation $\rho_E(g,z)=zg$, and let $E^*$ be its dual representation. For a smooth background connection $A_E$ on a smooth manifold $X$, use the induced dual connection $A_{E^*}=-A_E^T$ and curvatures $F_E=dA_E+A_E\wedge A_E$ and $F_{E^*}=dA_{E^*}+A_{E^*}\wedge A_{E^*}$. With the degree-six polynomial $\mathcal I_6$ defined above, one has

$$\mathcal I_6(E^*,A_{E^*})=-\mathcal I_6(E,A_E).$$

For the canonical Chern–Simons transgression

$$Q_5(E,A_E):=3\frac{i}{24\pi^2}\int_0^1\operatorname{tr}_E\!\left(A_E\wedge F_{E,t}\wedge F_{E,t}\right)\,dt,\qquad F_{E,t}:=t\,dA_E+t^2A_E\wedge A_E,$$

the dual transgression satisfies $Q_5(E^*,A_{E^*})=-Q_5(E,A_E)$. Thus any common linear descent of this conjugate pair has zero total cubic polynomial and zero total first consistent descent representative.

## Statement references

[Bilal, §§7.1–7.2 and 9.4](https://arxiv.org/pdf/0802.0634)

[Alvarez, §§2.2–2.3](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf)

## Facts & Assumptions

**Given:** The group $H$, its defining representation $E$, the dual representation $E^*$, a smooth connection $A_E$, its induced dual connection, and the cubic polynomial normalization.

[F1] [[def-aqft-cubic-anomaly-polynomial]]: $\mathcal I_6(\rho,A_\rho)=\frac{i}{24\pi^2}\operatorname{tr}_{V_\rho}(F_\rho\wedge F_\rho\wedge F_\rho)$, and the dual connection is represented by $A_{E^*}=-A_E^T$.

## Proof

1.1 Transposing the curvature formula gives $F_{E^*}=-F_E^T$: for the one-form $A_E$, graded transposition gives $(A_E\wedge A_E)^T=-A_E^T\wedge A_E^T$, so $d(-A_E^T)+(-A_E^T)\wedge(-A_E^T)=-(dA_E+A_E\wedge A_E)^T$. [given, F1, algebra]

2.1 Since each entry of $F_E$ is a two-form, reversing the order of two curvature factors contributes $(-1)^{2\cdot2}=1$. Hence $\operatorname{tr}((F_E^T)^3)=\operatorname{tr}((F_E^3)^T)=\operatorname{tr}(F_E^3)$. The three minus signs in $F_{E^*}^3=(-F_E^T)^3$ therefore give $\mathcal I_6(E^*,A_{E^*})=-\mathcal I_6(E,A_E)$ by [F1]. [F1, step 1.1, algebra]

3.1 For every $t\in[0,1]$, the same transposition calculation applied to $A_{E,t}=tA_E$ gives $F_{E^*,t}=-F_{E,t}^T$. Thus the integrand defining $Q_5(E^*,A_{E^*})$ is $-\operatorname{tr}(A_E^T\wedge F_{E,t}^T\wedge F_{E,t}^T)$. The trace of a transpose reverses the order of the three factors; cyclically moving the degree-one factor past the two degree-two factors contributes sign $(-1)^{1(2+2)}=1$. The integrand is therefore $-\operatorname{tr}(A_E\wedge F_{E,t}\wedge F_{E,t})$. Integration over $t$ proves the transgression identity and the stated cancellation under a common linear descent. [F1, step 1.1, algebra] ∎
