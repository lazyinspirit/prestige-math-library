---
id: def-waring-one-variable-mean-value
kind: definition
title: "One-variable mean value for the Waring exponential sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, equations (10.1) and the definition of g(α), printed pp. 1616–1617"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.1, the generating sum T(α), printed pp. 34–35"
---

## Definition

For integers $k\ge2$, $s\ge1$, and $N\ge1$, put
$$g_{k,N}(\alpha):=\sum_{x=1}^{N}e(\alpha x^k),\qquad I_{s,k}(N):=\int_0^1|g_{k,N}(\alpha)|^{2s}\,d\alpha,$$
where $e(t)=\exp(2\pi i t)$ and the integral is the ordinary Riemann integral on $[0,1]$.

## Definition references

[Wooley, §10, equation (10.1)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)
