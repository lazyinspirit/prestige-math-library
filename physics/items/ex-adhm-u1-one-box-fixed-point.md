---
id: ex-adhm-u1-one-box-fixed-point
kind: example
title: "The One-Box Fixed Point for U(1)"
status: draft
origin: pipeline
dependency_level: 15
axiom_base: "ZF + full AC through the fixed-point theorem supplier; this example uses only finite calculations."
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - def-axiom-of-choice
  - thm-adhm-fixed-point-instanton-count
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
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

Assume full AC. Let $V=W=\mathbb C$, let $\zeta>0$, and let $T=(S^1)^2\times S^1$ have rotation characters $t_1,t_2$ and a framing-circle factor acting on $W$ in its defining representation. Write $h\in U(W)=S^1$ for a framing element; its character on $W$ is $e_1^{-1}$, and $e_1$ is the dual character. The action on ADHM data is
$$(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ).$$
Put $\epsilon_i=c_1^T(t_i)$ and $a_1=c_1^T(e_1)$, and work over $K=\mathbb Q(\epsilon_1,\epsilon_2,a_1)$ with algebraically independent generators. Let $\mathfrak M^\zeta_{1,1}$ be the quotient by $GL(V)$ of data satisfying $[B_1,B_2]+IJ=0$ and $\operatorname{span}\{B_1^{m_1}B_2^{m_2}I(W):m_1,m_2\geq0\}=V$, in the positive stability chamber, and let $q$ be the formal variable in the theorem's fixed-point series.

The datum $B_1=B_2=J=0$, $I=1$ is stable and satisfies the complex moment-map equation. The full-AC fixed-point theorem classifies the fixed points by one-color partitions; at total size one the unique tuple is $Y_1=\{(0,0)\}$. Its tangent character is $t_1+t_2$, with additive tangent weights $\epsilon_1,\epsilon_2$. Define its tangent Euler product as the product of those additive weights, so $E_{Y_1}=\epsilon_1\epsilon_2$. The theorem's formal series $Z^{\mathrm{fp}}_1(q)$ has degree-$k$ coefficient $\sum_{|Y_1|=k}E_{Y_1}^{-1}$; hence the degree-one contribution is $(\epsilon_1\epsilon_2)^{-1}$.
## Example references

[[thm-adhm-fixed-point-instanton-count|Fixed-point classification and tangent character]]

## Facts & Assumptions
**Given:** Full AC, $N=k=1$, $V=W=\mathbb C$, $\zeta>0$, the stated ADHM equation, stability condition and exact $T$-action, and algebraically independent formal weights.

[A1] [[def-axiom-of-choice]]: full AC is required by the theorem supplier’s stable-quotient and fixed-scheme arguments that yield the fixed-point and tangent results; this example’s finite character calculation uses no additional choices.

[F1] [[def-qftx-adhm-linear-data-stability-and-regularity]]: for $N=1$, the raw ADHM maps, equation, word stability, and dual-framing torus action have the conventions displayed in the Example.

[F2] [[thm-adhm-fixed-point-instanton-count]]: under full AC, the stable quotient is smooth, the fixed points are indexed by one-tuples of partitions, their tangent characters are computed from the ADHM deformation complex, and the formal series sums inverse tangent Euler products.
## Verification

1.1 The chosen datum has $IJ=0$, so the complex moment-map equation holds. Since $I=1$ maps $W$ onto $V$, its image already spans $V$, so the datum is stable. The $GL(V)=\mathbb C^\times$ action removes the nonzero scalar choice of $I$; the quotient coordinates are $B_1,B_2$. [given, F1, algebra]

2.1 There is exactly one partition of $k=1$ for $N=1$, namely $Y_1=\{(0,0)\}$, so [F2] gives the unique fixed point. Here $\mathbf V_{\vec Y}=e_1$ and $\mathbf W=e_1^{-1}$, whence $\mathbf V^\vee\mathbf V=1$, $\mathbf V^\vee\mathbf W^\vee=1$, and $t_1t_2\mathbf W\mathbf V=t_1t_2$. Substitution in the tangent character gives $t_1+t_2$; the two additive weights are $\epsilon_1,\epsilon_2$, so the Euler class is $\epsilon_1\epsilon_2$. [given, A1, F2, step 1.1, algebra]

3.1 The degree-one coefficient is the sum over the single fixed point, so it equals $(\epsilon_1\epsilon_2)^{-1}$. This is a formal equivariant fixed-point contribution, not an asserted continuum path-integral value. [given, A1, F2, step 2.1, algebra] ∎
