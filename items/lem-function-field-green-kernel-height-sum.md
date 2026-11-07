---
dependency_level: 9
id: lem-function-field-green-kernel-height-sum
kind: lemma
title: "The global canonical height is the sum of local Green kernels"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-local-dynamical-green-function
  - lem-local-homogeneous-dynamical-height-and-filled-julia-set
  - lem-local-dynamical-green-conjugacy-and-good-reduction
  - def-one-variable-function-field-with-constant-field
  - thm-function-field-projective-height-well-defined
  - thm-function-field-dynamical-height-growth-and-functional-equation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, \u00a73.1, equation (1.10) and its product-formula justification"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field datum with exact constants, and let $\phi$ have degree $d\ge2$. For each place $v$, form the classical kernel $g_{\phi,v}$ using its specified absolute value on $K$. For distinct $P,Q\in\mathbb P^1(K)$, only finitely many terms are nonzero and
$$\sum_{v\in M_K}g_{\phi,v}(P,Q)=\widehat h_{\phi,K}(P)+\widehat h_{\phi,K}(Q).$$
No extension of a valuation, completion, or Berkovich space is needed for this identity.

## Statement references

[[def-one-variable-function-field-with-constant-field]]

[[def-local-dynamical-green-function]]

[[thm-function-field-dynamical-height-growth-and-functional-equation]]

## Facts & Assumptions

**Given:** The function-field datum, map, and distinct rational points in the statement. Choose a homogeneous lift $F$ over $K$ and lifts $z,w\in K^2\setminus\{0\}$.

[F1] Every nonzero element of $K$ has absolute value $1$ at all but finitely many places, and $\sum_v\log|a|_v=0$. ([[def-one-variable-function-field-with-constant-field]])

[F2] $h_K([x:y])=\sum_v\log\max(|x|_v,|y|_v)$, and $\widehat h_{\phi,K}(P)=\lim_nd^{-n}h_K(\phi^{\circ n}(P))$. ([[thm-function-field-projective-height-well-defined]], [[thm-function-field-dynamical-height-growth-and-functional-equation]])

[F3] Local heights are the limits of the logarithmic iterate norms; good reduction gives $H_{F,v}=\log\|\cdot\|_v$. The Green expression is independent of lifts. ([[lem-local-homogeneous-dynamical-height-and-filled-julia-set]], [[def-local-dynamical-green-function]], [[lem-local-dynamical-green-conjugacy-and-good-reduction]])

[A1] The Axiom of Choice is assumed by the function-field and height suppliers; the finite algebraic calculations below use no further choice. ([[def-axiom-of-choice]])

## Proof

1.1 Let $S$ contain the finite supports of the nonzero coefficients of $F$, of $R_F$, of the nonzero coordinates of $z,w$, and of the nonzero determinant $z\wedge w$. Finiteness follows from [F1]. For $v\notin S$, the lift has integral coefficients and unit resultant, $\|z\|_v=\|w\|_v=1$, and $|z\wedge w|_v=1$. By [F3], each local height and kernel term is therefore zero. The same good-reduction norm identity gives $\|F^{\circ n}(z)\|_v=\|F^{\circ n}(w)\|_v=1$ for every $n$. [F1, F3, algebra]

1.2 By [F2] and step 1.1, the canonical-height limit for $P$ is the limit of the finite sum $\sum_{v\in S}d^{-n}\log\|F^{\circ n}(z)\|_v$. Passing through this fixed finite sum yields $\widehat h_{\phi,K}(P)=\sum_{v\in S}H_{F,v}(z)$; the identical argument applies to $Q$. Summing the kernel formula, its wedge term vanishes by the product formula for $z\wedge w$, and its resultant term vanishes by the product formula for $R_F$. The remaining two sums are the canonical heights just computed. [F1, F2, F3, step 1.1, algebra] ∎
