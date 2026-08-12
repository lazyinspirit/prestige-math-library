---
id: cor-scalar-line-integral-of-one-is-arc-length
kind: corollary
title: "The scalar line integral of one is the arc length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, cor-piecewise-c1-paths-have-additive-speed-integral-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 9.2"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Statement

For every piecewise-$C^1$ path $\gamma$,

$$\int_\gamma1\,ds=L(\gamma).$$

## Facts & Assumptions
**Given:** A piecewise-$C^1$ path $\gamma$, with an admissible partition when its parameter interval is nondegenerate.

[L1] On a nondegenerate interval, substituting $f=1$ in the scalar line-integral definition gives the sum of the speed integrals over the smooth pieces; on a singleton interval the scalar line integral is zero ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L2] That sum of speed integrals equals the path length; on a singleton interval the empty sum and the length are both zero ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).



## Proof

**Proof technique:** direct.

1.1 On a nondegenerate interval, [L1] gives $$\int_\gamma1\,ds=\sum_{i<m}\int_{t_i}^{t_{i+1}}\lVert v_i(t)\rVert_2\,dt.$$ [given, L1]

2.1 By [L2], the right-hand side of step 1.1 is $L(\gamma)$. [step 1.1, L2]

3.1 On a singleton interval both sides are zero by [L1] and [L2]. A constant path on a nondegenerate interval has zero speed, so step 2.1 gives zero on both sides there as well. [L1, L2, step 2.1, algebra] ∎
