---
id: ex-qftx-vectorlike-charge-cancellation
kind: example
title: Vectorlike charges cancel cubic and linear sums
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 11
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
---

## Example

For a $U(1)$ gauge generator, take two one-dimensional left-handed representations with charges $q$ and $-q$, where $q\in\mathbb R$. This is the left-handed representation form of a vectorlike pair: a right-handed field of charge $q$ is represented by its left-handed charge-conjugate field of charge $-q$. The charge sums satisfy $q^3+(-q)^3=0$ and $q+(-q)=0$. With the no-half anticommutator convention in [[def-qftx-chiral-anomaly-interface]], the cubic coefficient is $d=2(q^3+(-q)^3)=0$, and the separate mixed linear trace coefficient is $\ell=q+(-q)=0$. This verifies cancellation of these two algebraic coefficients in that interface only; it does not identify them with a regulated anomaly, prove an all-orders theorem, exclude global anomalies, or establish a nonperturbative gauge theory.

## Example references

[[def-qftx-chiral-anomaly-interface]]

## Facts & Assumptions

**Given:** A one-dimensional $U(1)$ representation of charge $q$ and one of charge $-q$, both with left-handed chirality.

[A1] The two representation matrices for the fixed $U(1)$ generator are the scalars $q$ and $-q$, and both species are included once in the finite left-handed matter sum.

[F1] [[def-qftx-chiral-anomaly-interface]]: with $\{A,B\}=AB+BA$, $d^{abc}=\sum_i\operatorname{tr}_{V_i}(T^a_{R_i}\{T^b_{R_i},T^c_{R_i}\})$; the separate mixed linear trace coefficient is $\ell^a=\sum_i\operatorname{tr}_{V_i}(T^a_{R_i})$, which is $\sum_iq_i$ for a $U(1)$ generator. The coefficient definitions do not assert an anomaly/descent identification.

## Verification

**Given:** [A1] and [F1].

1.1 In one dimension the trace of a scalar is that scalar, and $\{q,q\}=2q^2$, $\{-q,-q\}=2q^2$. Therefore the two contributions to the cubic coefficient sum to $q(2q^2)+(-q)(2q^2)=2(q^3+(-q)^3)=0$. [given, A1, F1, algebra]

2.1 The linear trace coefficient is $q+(-q)=0$. Thus both the Abelian cubic coefficient and the separately tracked mixed linear coefficient vanish by direct arithmetic. This calculation asserts no descent identification, loop theorem, global-anomaly conclusion, or nonperturbative existence claim. [given, A1, F1, step 1.1, algebra] ∎

