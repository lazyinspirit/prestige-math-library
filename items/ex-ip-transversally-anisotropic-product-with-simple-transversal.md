---
id: ex-ip-transversally-anisotropic-product-with-simple-transversal
kind: example
title: "A product geometry with an injective simple-surface transversal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-simple-surface-and-geodesic-xray-transform
  - thm-ip-2d-simple-surface-xray-injectivity
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Section 1, product CTA geometry and simple transversal examples."
---

## Example

Let $D=\{x'\in\mathbb R^2:|x'|\leq1\}$ with its Euclidean metric and let
$$M=\{(x_1,x')\in\mathbb R\times D:x_1^2+4|x'|^2\leq1\}$$
with the restricted Euclidean product metric. Then $M$ is a compact smooth three-dimensional product subdomain compactly contained in $\mathbb R\times D^\circ$, and the transversal $D$ is a simple surface whose unweighted scalar geodesic ray transform is injective on real-valued compactly supported smooth functions.

## Example references

[[def-ip-transversally-anisotropic-product-domain|Product-domain convention]]

[[def-ip-simple-surface-and-geodesic-xray-transform|Simple surface and scalar ray transform]]

[[thm-ip-2d-simple-surface-xray-injectivity|Injectivity on simple surfaces]]

## Facts & Assumptions

**Given:** the disk $D$, the ellipsoid $M$, and the Euclidean product metric in the statement.

[F1] [[def-ip-transversally-anisotropic-product-domain]]: a compact smooth three-dimensional domain compactly contained in a product $\mathbb R\times M_0^\circ$ with product metric is transversally anisotropic.

[F2] [[def-ip-simple-surface-and-geodesic-xray-transform]]: a compact surface is simple when its boundary is strictly convex, there are no conjugate points, and geodesics exit in finite time.

[F3] [[thm-ip-2d-simple-surface-xray-injectivity]]: for a real $f\in C_c^\infty(D^\circ)$, zero integrals over all nontangential boundary-to-boundary geodesics on a simple surface imply $f=0$.

## Proof

**Given:** the data in the statement.

1.1 The boundary of $M$ is the level set $x_1^2+4|x'|^2=1$. Its defining function has gradient $(2x_1,8x_2,8x_3)$, which cannot vanish on that level set, so $M$ is a compact smooth three-dimensional domain. Every point of $M$ has $|x'|\leq1/2<1$, hence $M\Subset\mathbb R\times D^\circ$; the ambient metric is exactly $dx_1^2\oplus g_D$. By [F1], this is a transversally anisotropic product domain. [F1, given, algebra]

1.2 The disk has strictly convex boundary: its outward unit normal is $x'$ on $|x'|=1$ and $g(\nabla_w\nu_{\rm out},w)=|w|^2>0$ for every nonzero tangent $w$. Its curvature is zero, so a normal Jacobi field has scalar coefficient $a+bt$; if it vanishes at two distinct times then $a=b=0$, proving no conjugate points. Every unit-speed straight line exits the bounded disk in finite forward and backward time, and the segment between two points in the disk is unique. Thus $D$ is simple by [F2]. [F2, given, algebra]

2.1 Apply [F3] to this simple surface. Its unweighted scalar geodesic ray transform is injective on the stated compactly supported smooth real functions. This verifies the injective-transversal condition for $M$. [F2, F3, step 1.2] ∎

