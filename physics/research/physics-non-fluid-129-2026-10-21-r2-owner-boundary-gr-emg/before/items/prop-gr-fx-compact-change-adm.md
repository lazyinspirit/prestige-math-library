---
id: prop-gr-fx-compact-change-adm
kind: proposition
title: "Compact interior changes leave a fixed ADM integral unchanged"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "A fixed-chart equality of asymptotic limits under compactly supported metric changes; no field equation or positivity result is used."
deps:
  - def-gr-fx-adm-end
dependency_roles:
  def-gr-fx-adm-end: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), §§7.2.1 and 7.3.1, equations (7.13)–(7.15), PDF pp. 103–106."
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "Sebastiano Bernuzzi, Lecture Notes on 3+1 Numerical Relativity, v0.1 (2021), §§7.1–7.2, equations (7.1a)–(7.6c), PDF pp. 32–34."
      url: "https://www.ias.edu/sites/default/files/NR_notes.pdf"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Eric Gourgoulhon, From Geometry to Numerics, arXiv:0712.2332v2 (2008), §2.1 and equation (2), PDF pp. 7–8."
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: pass
---

## Statement

Let $h$ and $h'$ be two $C^2$ Riemannian metrics on the same end $E=\{x\in\mathbb R^3:r=|x|>R_0\}$, with the same fixed Cartesian chart and asymptotic time normalization stated below. Suppose $h=h'$ outside a compact set $C\subset E$ and both fixed-chart ADM limits exist. Then
$$E_{\mathrm{ADM}}(h;x)=E_{\mathrm{ADM}}(h';x).$$
The symmetric tensors $K$ associated with the two data sets may differ; each need only satisfy the decay in the definition.

## Statement references

[[def-gr-fx-adm-end]]

## Facts & Assumptions

**Given:** The same end chart and ADM formula for both metrics, a compact set $C\subset E$, equality $h=h'$ on $E\setminus C$, and existence of both limits.

[F1] The ADM integrand in the fixed chart is $(\partial_jh_{ij}-\partial_i h_{jj})n^i$ on $S_R$, with the same constant prefactor for both metrics; $K$ does not enter that formula ([[def-gr-fx-adm-end]]).

[A1] The two limits exist, and the metrics agree on the complement of the same compact set in the same chart, as stipulated.

## Proof

**Given:** [F1], [A1], and the two metrics in the Statement.

1.1 If $C$ is nonempty, continuity of $r$ on compact $C$ gives a finite $R_C=\max_{x\in C}r(x)$. If $C$ is empty, set $R_C=R_0$. For every $R>R_C$, the sphere $S_R$ is disjoint from $C$ and lies in the open set $E\setminus C$, on which $h=h'$. Since the metrics agree on this open set, their first Cartesian derivatives also agree at every point of $S_R$. [A1, algebra]

2.1 By [F1] and step 1.1, the two integrands coincide pointwise on every $S_R$ with $R>R_C$, so the two surface integrals are equal for all such $R$. Taking the limits, which exist by [A1], gives equal limits. Multiplication by the common factor $c^4/(16\pi G_N)$ proves the equality of ADM energies. [F1, A1, step 1.1, algebra] ∎

## Remarks

This is a fixed-chart statement. It makes no claim of diffeomorphism invariance, constraint preservation, completeness, or scalar-curvature equality.
