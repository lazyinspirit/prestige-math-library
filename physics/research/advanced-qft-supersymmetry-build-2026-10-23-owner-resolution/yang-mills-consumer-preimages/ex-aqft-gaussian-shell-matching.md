---
id: ex-aqft-gaussian-shell-matching
kind: example
domain: physics
library: physics
title: One-dimensional finite Gaussian matching and shell composition
status: draft
origin: pipeline
dependency_level: 5
deps:
  - def-aqft-model-and-scale-data
  - def-aqft-wilsonian-action
  - def-aqft-derivative-expansion-and-truncation
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-qftx-finite-gaussian-shell-transform
  - prop-aqft-finite-gaussian-shell-composition
  - texp-aqft-finite-heavy-scalar-matching
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-model-and-scale-data: formulation-prerequisite
  def-aqft-wilsonian-action: formulation-prerequisite
  def-aqft-derivative-expansion-and-truncation: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-multivariate-normal-law: mathematical-premise
  def-qftx-finite-gaussian-shell-transform: mathematical-premise
  prop-aqft-finite-gaussian-shell-composition: mathematical-premise
  texp-aqft-finite-heavy-scalar-matching: physical-result
physical_scope: A one-coordinate finite Gaussian regulator example and a separate normalized shell calculation; no empirical claim, continuum limit, or generic matching theorem.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume AC. Use one positive mass unit $m_0$ and a one-site finite regulator with $M=2m_0$, $A=(m_0^2)$, $E=m_0$, $\mu_W=\tfrac32m_0$, $\Lambda=3m_0$, source $J=(m_0)$, and truncation order $N=0$. Then $K=M^2I+A=(5m_0^2)$. Let $\gamma_{K^{-1}}=N_1(0,K^{-1})$ be the centered normalized Gaussian with covariance $K^{-1}$. For $Z_H(J)=\int e^{J^T\chi}\,d\gamma_{K^{-1}}(\chi)$ and the action increment $\Delta S_W=-\log Z_H(J)$, the exact increment is $-1/10$, the order-zero approximation is $-1/8$, the vector remainder is $1/(20m_0)$, and the action remainder is $1/40\le1/32$.

For a separate dimensionless shell coordinate, let $\gamma_C=N_1(0,C)$ be the centered normalized Gaussian of variance $C$, define $T_Cf(x)=\int f(x+z)\,d\gamma_C(z)$, and take $f(x)=x^2$, $C_1=1$, and $C_2=3$. The successive normalized shell value at zero and the combined-shell value are both $4$.

This is a model-specific finite calculation. It reports no observation and asserts no continuum limit or general interacting matching rule.

## Example references

[[def-aqft-model-and-scale-data]]

[[def-aqft-wilsonian-action]]

[[def-aqft-derivative-expansion-and-truncation]]

[[texp-aqft-finite-heavy-scalar-matching]]

[[prop-aqft-finite-gaussian-shell-composition]]

[[def-multivariate-normal-law]]

[[def-qftx-finite-gaussian-shell-transform]]

## Facts & Assumptions

**Given:** The finite model and units in the Example, AC, and the normalized Gaussian conventions.

[A1] [[def-axiom-of-choice]]: AC is the assumption used by the exact finite Gaussian suppliers.

[F1] [[texp-aqft-finite-heavy-scalar-matching]]: in the finite positive Gaussian sector, $\Delta S_W(J)=-\tfrac12J^TK^{-1}J$, with the stated spectral-band truncation bounds.

[F2] [[prop-aqft-finite-gaussian-shell-composition]]: two normalized Gaussian shell transforms compose by adding their covariance matrices.

[F3] [[def-multivariate-normal-law]]: $N_1(0,C)$ has mean zero and covariance $C$, including $C=0$.

[F4] [[def-qftx-finite-gaussian-shell-transform]]: $T_Cf(x)=\int f(x+z)\,d\gamma_C(z)$ for a nonnegative Borel function $f$.

## Verification

**Proof technique:** exact one-dimensional arithmetic and covariance moments.

**Given:** The data in the Example.

1.1 Here $K=5m_0^2$ is positive, $J$ is an eigenvector of $A$ with eigenvalue $E^2=m_0^2$, and $E<M$. Thus $K^{-1}J=1/(5m_0)$ and $S_0J=M^{-2}J=1/(4m_0)$. By [F1], $Z_H(J)=e^{1/10}$ and $\Delta S_W=-1/10$, while the order-zero action is $-\tfrac12J^TS_0J=-1/8$. [A1, F1, given, algebra]

2.1 The vector remainder is $|1/(5m_0)-1/(4m_0)|=1/(20m_0)\le1/(16m_0)$, the bound in [F1] for $N=0$. The action remainder is $|-1/10+1/8|=1/40$, while [F1] bounds it by $\tfrac12(m_0^2/(4m_0^2))(m_0^2/(4m_0^2))=1/32$. Both inequalities are exact rational comparisons. [F1, step 1.1, algebra]

3.1 For $Z_C\sim N_1(0,C)$, [F3] gives $\mathbb E Z_C=0$ and $\mathbb E Z_C^2=C$. Hence [F4] gives $T_Cf(x)=\mathbb E[(x+Z_C)^2]=x^2+C$. Therefore $T_3(T_1f)(0)=T_3(x^2+1)(0)=4=T_4f(0)$, in agreement with [F2]. The shell measures are normalized, so no determinant factor is introduced. [A1, F2, F3, F4, given, algebra] ∎
