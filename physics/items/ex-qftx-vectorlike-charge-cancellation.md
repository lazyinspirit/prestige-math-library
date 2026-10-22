---
id: ex-qftx-vectorlike-charge-cancellation
kind: example
title: Vectorlike charges cancel cubic and linear sums
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 13
deps:
  - def-qftx-chiral-anomaly-interface
justified_by: []
dependency_roles:
  def-qftx-chiral-anomaly-interface: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies
      url: https://arxiv.org/pdf/0802.0634
      locator: §7.1, equations (7.1)–(7.9), PDF pp. 45–49; chirality signs, conjugate representations, and the representation trace coefficient.
    - title: Anomalies and Differential Forms, 2024 Fall QFT lecture notes
      url: https://web2.ph.utexas.edu/~vadim/Classes/2024f-qft/adf.pdf
      locator: “Non Abelian Anomaly in 4 Dimensions,” equations (54)–(57), PDF pp. 10–11; left-minus-right chiral traces and cubic-index cancellation.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $\mathfrak g=\mathbb R t$ be the one-dimensional Abelian real Lie algebra and take $V_+=V_-=\mathbb C$. For $q\in\mathbb R$, define complex-linear representations by $\rho_\pm(zt)=\pm qz\,\operatorname{id}_{\mathbb C}$ for $z\in\mathbb C$, and attach the left-handed bookkeeping label to both. This opposite-charge pair is called vectorlike at the representation-data level here. It does not construct spinor fields or a charge-conjugation map; an interpretation as a field pair requires a separately specified field model and convention. The coefficient sums satisfy $q^3+(-q)^3=0$ and $q+(-q)=0$. With the no-half anticommutator convention $\{A,B\}=AB+BA$, the cubic coefficient is $d=2(q^3+(-q)^3)=0$, and the separate linear representation coefficient is $\ell=q+(-q)=0$. This verifies cancellation of these two algebraic coefficients in that interface only; it does not identify them with a regulated anomaly, prove an all-orders theorem, or establish a nonperturbative gauge theory or cancellation of global anomalies.

## Example references

[[def-qftx-chiral-anomaly-interface]]

## Facts & Assumptions

**Given:** The two one-dimensional representations $\rho_\pm$ of $\mathfrak g=\mathbb R t$ and their left-handed bookkeeping labels from the Example.

[A1] The representation matrices for $t$ are the scalars $T_+=q$ and $T_-=-q$, and both species are included once in the finite coefficient sum.

[F1] [[def-qftx-chiral-anomaly-interface]]: with $\{A,B\}=AB+BA$, $d^{abc}=\sum_i\operatorname{tr}_{V_i}(T^a_{R_i}\{T^b_{R_i},T^c_{R_i}\})$; the separate linear representation coefficient is $\ell^a=\sum_i\operatorname{tr}_{V_i}(T^a_{R_i})$. These coefficient definitions do not construct a field model or assert an anomaly/descent identification.

## Verification

**Given:** [A1] and [F1].

1.1 In one dimension the trace of a scalar is that scalar, and $\{q,q\}=2q^2$, $\{-q,-q\}=2q^2$. Therefore the two contributions to the cubic coefficient sum to $q(2q^2)+(-q)(2q^2)=2(q^3+(-q)^3)=0$. [given, A1, F1, algebra]

2.1 The linear representation coefficient is $q+(-q)=0$. Thus both the cubic coefficient and the separately defined linear coefficient vanish by direct arithmetic. This calculation asserts no descent identification, loop theorem, global-anomaly conclusion, or nonperturbative existence claim. [given, A1, F1, step 1.1, algebra] ∎

