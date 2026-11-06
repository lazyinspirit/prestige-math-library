---
id: def-gts-higher-u-1-bundles-with-connection-via-deligne-hypercocycles
kind: definition
title: Higher U(1)-bundles with connection via Deligne hypercocycles
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
deps:
  - def-gts-smooth-deligne-cohomology-model
  - def-gts-cheegersimons-differential-character
  - lem-gts-deligne-exponential-model-equivalence
dependency_roles:
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  def-gts-cheegersimons-differential-character: mathematical-premise
  lem-gts-deligne-exponential-model-equivalence: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Sections 3.1–3.2, Definitions 3.19 and 3.21 and the Deligne cocycle model, PDF pp. 32–41.
    - title: Michael K. Murray, Bundle Gerbes, arXiv:dg-ga/9407015v1
      url: https://arxiv.org/pdf/dg-ga/9407015v1
      locator: Sections 11–12, Deligne cocycles and gerbe curvature, PDF pp. 14–18.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For $k\ge2$, a degree-$k$ higher $U(1)$-bundle with connection on a finite-dimensional Hausdorff second-countable smooth manifold is a cohomology class represented on a good cover by a total-degree $(k-1)$ cocycle in the Deligne sheaf complex $\mathcal T\xrightarrow{d_{\mathcal T}}\Omega^1\xrightarrow{d}\cdots\xrightarrow{d}\Omega^{k-1}$, where $\mathcal T(V)=C^\infty(V,\mathbb R/\mathbb Z)$ and $d_{\mathcal T}g=(2\pi i)^{-1}(e^{2\pi i g})^{-1}d(e^{2\pi i g})$. Its degree is aligned with $\widehat H^k_{\mathrm{Del}}(M;\mathbb Z)$ by [[def-gts-smooth-deligne-cohomology-model]].

## Statement references

[[def-gts-smooth-deligne-cohomology-model]]

[[lem-gts-deligne-exponential-model-equivalence]]

## Definition

Write $\check C^p(\mathcal U;\mathcal F^q)$ for alternating Cech $p$-cochains with values in the sheaf $\mathcal F^q$. The total differential is $D=\delta_{\mathrm{Cech}}+(-1)^p d_{\mathrm{Del}}$ on bidegree $(p,q)$, where $d_{\mathrm{Del}}$ is $d_{\mathcal T}$ in degree zero and exterior derivative in later degrees. A representative has components $g\in\check C^{k-1}(\mathcal U;\mathcal T)$, $A_1\in\check C^{k-2}(\mathcal U;\Omega^1),\ldots,A_{k-2}\in\check C^1(\mathcal U;\Omega^{k-2})$, and $B\in\check C^0(\mathcal U;\Omega^{k-1})$, and the cocycle equations are exactly $D(g,A_1,\ldots,B)=0$. Two representatives define the same object here when their difference is a total coboundary, with circle-valued addition interpreted in $\mathbb R/\mathbb Z$.

The local curvature forms $dB_i$ agree on overlaps by the top component of the cocycle equation; they therefore define a global closed $k$-form $R$. The integral characteristic class $I$ is the connecting class of the Deligne cocycle under $0\to\mathbb Z\to\Omega^0\to\mathcal T\to0$. We use “higher bundle” for this cocycle class only; this definition does not specify a higher category of morphisms.

## Remarks

For $k=2$ these are line bundles with connection; for $k=3$ they are bundle gerbes with connection and curving. Equivalence to the smooth-singular character model is conditional on [[lem-gts-deligne-character-comparison]].
