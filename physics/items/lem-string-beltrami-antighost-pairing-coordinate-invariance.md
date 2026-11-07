---
id: lem-string-beltrami-antighost-pairing-coordinate-invariance
kind: lemma
title: Coordinate invariance of the local Beltrami antighost pairing
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 5
domain: physics
physical_scope: "Local tensorial coordinate covariance of the bosonic bc/Beltrami pairing on an overlap; it supplies no global gauge slice or determinant line."
deps:
  - def-st-bosonic-bc-ghost-system
dependency_roles:
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, String Theory, Cambridge Part III notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§§5.1.3–5.3, printed pp. 115–119, bc tensor weights and local gauge-fixing pairing."
    - title: "Sam Christian, Ben Mazel, Yuchen Wang, Xi Yin and Yutai Zhang, Bosonic String Amplitudes From Ribbon Graphs"
      url: "https://arxiv.org/pdf/2609.17660v1"
      locator: "§4, PDF pp. 21–24, local Beltrami differentials and antighost insertions."
verification:
  precheck: pass
---

## Statement

Let $z$ and $w=f(z)$ be holomorphic coordinates with $f'(z)\ne0$ on an overlap. If $b=b_{zz}(z)dz^2$ is the antighost quadratic differential and $\mu=\mu_{\bar z}^{\ z}d\bar z\otimes\partial_z$ is a Beltrami differential, then the local density $b_{zz}\mu_{\bar z}^{\ z}dx\,dy$ is invariant under this coordinate change. Hence, for compactly supported local data, $(b,\mu)=\int b_{zz}\mu_{\bar z}^{\ z}dx\,dy$ is independent of the chosen holomorphic chart.

## Facts & Assumptions

**Given:** A complex coordinate overlap $w=f(z)$ with nonvanishing derivative and compactly supported local $b,\mu$.

[F1] [[def-st-bosonic-bc-ghost-system]]: $b$ has holomorphic conformal weight $2$ and transforms as a quadratic differential; the Beltrami coefficient is a $(0,1)$-form valued in the holomorphic tangent line.

## Proof

1.1 The tensor transformation laws from [F1] are $b_{ww}=b_{zz}(dz/dw)^2=b_{zz}/f'(z)^2$ and $\mu_{\bar w}^{\ w}=(\partial w/\partial z)(\partial\bar z/\partial\bar w)\mu_{\bar z}^{\ z}=f'(z)\mu_{\bar z}^{\ z}/\overline{f'(z)}$. The area elements satisfy $dx_wdy_w=|f'(z)|^2dx_zdy_z$. [given, F1, algebra]

2.1 Multiplying these three factors gives
$$b_{ww}\mu_{\bar w}^{\ w}dx_wdy_w=\frac{b_{zz}}{f'^2}\frac{f'}{\overline{f'}}\,|f'|^2dx_zdy_z=b_{zz}\mu_{\bar z}^{\ z}dx_zdy_z.$$
Because the support is compact and the density agrees pointwise on each overlap, a partition into coordinate patches gives the same integral in either atlas. No statement about a global gauge slice or determinant trivialization follows. [step 1.1, algebra] ∎
