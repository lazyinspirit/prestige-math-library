---
id: prop-the-riemannian-hessian-is-symmetric
kind: proposition
title: "The riemannian hessian is symmetric"
status: published
origin: pipeline
deps: ["prop-gradient-hessian-and-divergence-connection-formulas","thm-fundamental-theorem-of-riemannian-geometry","def-lie-bracket-of-smooth-vector-fields"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
verification:
  audited: 2026-09-12
---

## Statement

For a smooth function $f$ on a Riemannian manifold, the Levi–Civita Hessian is symmetric: $\operatorname{Hess}f(X,Y)=\operatorname{Hess}f(Y,X)$ for all local smooth vector fields.

## Facts & Assumptions

**Given:** A smooth Riemannian metric and smooth $f$.

[F1] $\operatorname{Hess}f(X,Y)=X(Yf)-(\nabla_XY)f$ is a smooth two-tensor ([[prop-gradient-hessian-and-divergence-connection-formulas]]).

[F2] Levi–Civita exists and is torsion free ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F3] $[X,Y]f=X(Yf)-Y(Xf)$ ([[def-lie-bracket-of-smooth-vector-fields]]).

## Proof

1.1 Subtract the two formulas in [F1]. By [F3], the difference is $[X,Y]f-(\nabla_XY-\nabla_YX)f$. Torsion freeness in [F2] identifies the vector fields in the parentheses with $[X,Y]$, so the difference is zero. This uses no assumption that $X,Y$ commute. [F1, F2, F3]

2.1 The identity holds for all local fields, hence all tangent vectors by the tensoriality in [F1]. Zero fields and constant functions give zero values; dimension zero has the zero tensor and dimension one the single symmetric entry. The same bracket identity and torsion equation apply in boundary charts, so no endpoint exception or choice assumption is introduced. [F1, step 1.1] ∎
