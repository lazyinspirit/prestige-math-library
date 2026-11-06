---
id: def-string-bc-ghost-moduli-pairing
kind: definition
title: Bosonic bc ghost and Beltrami moduli pairing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 6
domain: physics
physical_scope: Local bosonic reparametrization-ghost pairing on a fixed moduli chart, including declared conformal-Killing
  zero-mode treatment; no global determinant or gauge slice is asserted.
deps:
- def-st-bosonic-bc-ghost-system
- pthm-string-beltrami-antighost-pairing-coordinate-invariance
dependency_roles:
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
  pthm-string-beltrami-antighost-pairing-coordinate-invariance: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: David Tong, String Theory, Cambridge Part III notes
    url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
    locator: §§5.1.3–5.3, printed pp. 115–119, bc action, weights, and local gauge fixing.
  - title: Sam Christian, Ben Mazel, Yuchen Wang, Xi Yin and Yutai Zhang, Bosonic String Amplitudes From Ribbon Graphs
    url: https://arxiv.org/pdf/2609.17660v1
    locator: §4 and §§5.1–5.6, PDF pp. 21–32, local b-ghost insertions and chartwise moduli pairings; numerical comparisons
      are not a proof of a global measure.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $\Sigma$ be a fixed Riemann surface chart with a chosen Beltrami representative $\mu=\mu_{\bar z}^{\ z}d\bar z\otimes\partial_z$ for a tangent direction to complex structure. Define its local antighost pairing by
$$ (b,\mu)=\int_\Sigma b_{zz}\mu_{\bar z}^{\ z}\,dx\,dy,$$
using a finite chart cover and compactly supported smooth representatives on each patch (and a partition of unity when more than one patch represents the same global tensor). Use dimensionless worldsheet and moduli coordinates, dimensionless Beltrami components, and the dimensionless $b,c$ normalization of the supplied ghost mode algebra; consequently $(b,\mu)$ is dimensionless. The numerical normalization of this pairing is exactly the displayed coefficient $1$ with area $dx\,dy$: in the ghost supplier's convention $d^2z=2dx\,dy$ this is $\tfrac12\int b_{zz}\mu_{\bar z}^{\ z}d^2z$. No additional $2\pi$ or string-tension factor is included. For a tangent basis $\mu_1,\ldots,\mu_m$, the local moduli insertion is the ordered product $\prod_{a=1}^m(b,\mu_a)$ and its antiholomorphic counterpart; because $b$ is odd, the order is fixed and a change of tangent basis contributes its determinant. At fixed punctures, define the conformal-Killing space as $H^0(\Sigma,T_\Sigma(-D))$, where $D$ is the marked divisor. Its zero modes are fixed by a stated gauge slice, represented by the corresponding $c$-ghost evaluations, or divided out by the stated automorphism-group volume. The convention and zero-mode saturation are data of each amplitude. No global determinant line, global gauge slice, or integration measure is included.

## Facts & Assumptions

**Given:** The anticommuting bosonic reparametrization ghost system of [[def-st-bosonic-bc-ghost-system]], a local complex-structure chart, representatives $\mu_a$, marked points, and a specified conformal-Killing zero-mode prescription.

[F1] [[def-st-bosonic-bc-ghost-system]]: $b$ is a quadratic differential of weight $2$, $c$ is a vector field of weight $-1$, and the pair is anticommuting.

[F2] [[lem-string-beltrami-antighost-pairing-coordinate-invariance]]: $b_{zz}\mu_{\bar z}^{\ z}dxdy$ is invariant under holomorphic coordinate changes on overlaps.

## Proof

1.1 The product of a quadratic differential with a Beltrami differential and the area element is a scalar density by [F1]; the explicit overlap calculation in [F2] shows its local expression agrees in every chart. Thus the integral in the Definition is independent of the chosen local coordinates for the fixed representative, provided the stated compact supports and chart cover are used. [given, F1, F2, algebra]

2.1 If the tangent basis changes by $\mu'_a=\sum_b M_a^{\ b}\mu_b$, multilinearity of the pairing makes the ordered exterior product of the $m$ odd insertions change by $\det(M)$. This is exactly the covector transformation of the top differential on the moduli chart. The separate $c$-ghost prescription removes or saturates precisely the declared conformal-Killing zero modes; it is not determined by the local pairing and must be recorded as input. [given, F1, step 1.1, algebra] ∎

## Remarks

For a sphere with three fixed punctures the residual Möbius transformations are fixed by the three marked points; for a torus without punctures, translation remains a one-complex-dimensional conformal-Killing group and the quotient/zero-mode convention must be stated. No zero-mode count for other strata is asserted here without its actual surface and puncture data.
