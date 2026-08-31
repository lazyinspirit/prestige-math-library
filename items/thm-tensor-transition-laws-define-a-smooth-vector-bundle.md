---
id: thm-tensor-transition-laws-define-a-smooth-vector-bundle
kind: theorem
title: "Tensor transition laws define a smooth vector bundle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-type-r-s-tensor-bundle,
       def-vector-bundle-chart-and-transition-function,
       thm-vector-bundle-construction-from-a-smooth-cocycle,
       thm-change-of-coordinate-formula-for-tangent-bases,
       lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

For every smooth manifold $M$ and integers $r,s\ge 0$, the tensor-coordinate
change rules define a smooth vector bundle whose fibre over $p$ is the space of
type $(r,s)$ tensors on $T_pM$.

## Facts & Assumptions

**Given:** A smooth manifold $M$ with overlapping charts $(U,x)$ and $(V,y)$.

[F1] The fibre of $T^r_sM$ at $p$ is the space of type $(r,s)$ tensors on $T_pM$ ([[def-type-r-s-tensor-bundle]]).

[L1] Tangent bases transform by the Jacobian, and cotangent bases transform by the inverse transpose Jacobian ([[thm-change-of-coordinate-formula-for-tangent-bases]], [[lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian]]).

[L2] A smooth cocycle of fibrewise linear transition maps defines a smooth vector bundle ([[thm-vector-bundle-construction-from-a-smooth-cocycle]]).

## Proof
**Proof technique:** direct.

1.1 On a chart domain $U$, the coordinate bases $\partial/\partial x^i$ and [F1, given, construct]
$dx^i$ identify each fibre in [F1] with the fixed finite-dimensional vector
space
$$ \operatorname{Mult}\bigl(((\mathbb R^m)^*)^r\times(\mathbb R^m)^s,\mathbb R\bigr) $$
of type $(r,s)$ tensors on $\mathbb R^m$. This gives local trivializations
$$ T^r_sM|_U\cong U\times \operatorname{Mult}\bigl(((\mathbb R^m)^*)^r\times(\mathbb R^m)^s,\mathbb R\bigr). $$
[F1, given, construct]

2.1 On an overlap, [L1] shows that each contravariant slot picks up one inverse [L1, step 1.1, algebra]
Jacobian factor and each covariant slot picks up one Jacobian factor. Hence the
tensor-coordinate change map is fibrewise linear, smooth in the base point, and
satisfies the cocycle law because Jacobians and inverse Jacobians do. [L1, step 1.1, algebra]

3.1 Therefore [L2] applies to these local transition maps and produces a smooth [F1, L2, step 2.1]
vector bundle. By construction its fibre over $p$ is the tensor space from
[F1]. [F1, L2, step 2.1]

4.1 Thus the tensor transition laws define the smooth tensor bundle $T^r_sM$. [step 3.1]
[step 3.1] ∎
