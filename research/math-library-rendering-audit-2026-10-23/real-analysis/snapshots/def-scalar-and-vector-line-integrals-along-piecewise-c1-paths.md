---
id: def-scalar-and-vector-line-integrals-along-piecewise-c1-paths
kind: definition
title: "Scalar line integrals with respect to arc length and vector-field line integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-euclidean-inner-product, thm-continuous-implies-integrable]
justified_by: [lem-line-integrals-are-independent-of-the-piecewise-c1-partition]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 9.2"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Definition

Let $\gamma:[a,b]\to\mathbb R^n$ be piecewise-$C^1$. If $a=b$, define both line integrals below to be $0$. If $a<b$, choose an admissible partition $a=t_0<\cdots<t_m=b$ and a continuous derivative extension $v_i$ on each piece. Let $f$ be a continuous scalar field and $F$ a continuous vector field on a set containing the trace of $\gamma$. The **scalar line integral with respect to arc length** and the **vector-field line integral** are

$$\int_\gamma f\,ds:=\sum_{i<m}\int_{t_i}^{t_{i+1}}f(\gamma(t))\lVert v_i(t)\rVert_2\,dt,$$

$$\int_\gamma F\cdot d\mathbf r:=\sum_{i<m}\int_{t_i}^{t_{i+1}}\langle F(\gamma(t)),v_i(t)\rangle\,dt,$$

where the inner product is [[def-euclidean-inner-product]]. The summands exist by [[thm-continuous-implies-integrable]]. Independence of the admissible partition is proved in [[lem-line-integrals-are-independent-of-the-piecewise-c1-partition]].
