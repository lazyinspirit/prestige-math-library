---
id: ex-adhm-u1-one-box-fixed-point
kind: example
title: "The One-Box Fixed Point for U(1)"
status: draft
origin: pipeline
dependency_level: 15
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-framed-u-n-instanton-moduli-and-adhm-data
  - thm-adhm-fixed-point-instanton-count
dependency_roles:
  def-framed-u-n-instanton-moduli-and-adhm-data: mathematical-premise
  thm-adhm-fixed-point-instanton-count: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pending
proof_strategy: direct
---

## Example

Let $\mathfrak M^\zeta_{1,1}$ be the quotient of $V=W=\mathbb C$ data $(B_1,B_2,I,J)$ satisfying $[B_1,B_2]+IJ=0$ and $\operatorname{span}\{B_1^{m_1}B_2^{m_2}I(W):m_1,m_2\geq0\}=V$, modulo $GL(V)$, in the positive stability chamber. Let $t_1,t_2$ be the two rotation characters and set $\epsilon_i=c_1^T(t_i)$. The datum $B_1=B_2=J=0$, $I=1$ is stable and satisfies the complex moment-map equation. The unique fixed point is the one-box partition $Y_1=\{(0,0)\}$; its tangent character is $t_1+t_2$, its equivariant Euler class is $\epsilon_1\epsilon_2$, and its contribution to the degree-one coefficient of the fixed-point series is $(\epsilon_1\epsilon_2)^{-1}$.

## Example references

[[thm-adhm-fixed-point-instanton-count|Fixed-point classification and tangent character]]

## Facts & Assumptions
**Given:** $N=k=1$, $V=W=\mathbb C$, $\zeta>0$, the complex ADHM equation $[B_1,B_2]+IJ=0$, the stability condition, and independent rotation weights $\epsilon_1,\epsilon_2$.

[F1] [[def-framed-u-n-instanton-moduli-and-adhm-data]]: for $V=W=\mathbb C$, stability is equivalent to $I\neq0$ and the complex moment map is $IJ=0$.

[F2] [[thm-adhm-fixed-point-instanton-count]]: the fixed points for $N=1,k=1$ are indexed by the one one-box partition, and their tangent character is computed from the ADHM deformation complex.

## Verification

1.1 The chosen datum has $IJ=0$, so the complex moment-map equation holds. Since $I=1$ maps $W$ onto $V$, its image already spans $V$, so the datum is stable. The $GL(V)=\mathbb C^\times$ action removes the nonzero scalar choice of $I$; the quotient coordinates are $B_1,B_2$. [given, F1, algebra]

2.1 There is exactly one partition of $k=1$ for $N=1$, namely $Y_1=\{(0,0)\}$, so [F2] gives the unique fixed point. Here $\mathbf V_{\vec Y}=e_1$ and $\mathbf W=e_1^{-1}$, whence $\mathbf V^\vee\mathbf V=1$, $\mathbf V^\vee\mathbf W^\vee=1$, and $t_1t_2\mathbf W\mathbf V=t_1t_2$. Substitution in the tangent character gives $t_1+t_2$; the two additive weights are $\epsilon_1,\epsilon_2$, so the Euler class is $\epsilon_1\epsilon_2$. [given, F2, step 1.1, algebra]

3.1 The degree-one coefficient is the sum over the single fixed point, so it equals $(\epsilon_1\epsilon_2)^{-1}$. This is a formal equivariant fixed-point contribution, not an asserted continuum path-integral value. [given, F2, step 2.1, algebra] ∎
