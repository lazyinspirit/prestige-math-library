---
id: rem-complex-plane-euclidean-dictionary
kind: remark
title: "$\\mathbb C=\\mathbb R[x]/(x^2+1)$ as the Euclidean plane and as a normed real algebra: what the identification preserves"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-numbers-and-arithmetic, thm-complex-numbers-are-the-real-coordinate-plane,
       def-complex-conjugate-real-imaginary-part-and-modulus,
       lem-complex-conjugation-and-modulus-laws,
       def-complex-metric-convergence-and-continuity,
       rem-euclidean-topology-dictionary]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Ch. 2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

The complex field used here is the quotient $\mathbb C=\mathbb R[x]/(x^2+1)$ of [[def-complex-numbers-and-arithmetic]], with $i$ the class of $x$. The bijection $\Phi(a+bi)=(a,b)$ of [[thm-complex-numbers-are-the-real-coordinate-plane]] carries addition and real scalar multiplication to the coordinatewise operations on $\mathbb R^2$, while complex multiplication becomes

$$ (a,b)(u,v)=(au-bv,av+bu). $$

Thus $\mathbb C$ is the Euclidean plane as a real vector space, together with the additional bilinear operation of complex multiplication. A general real-linear map of the plane need not respect that operation and therefore need not be complex-linear.

The definitions in [[def-complex-conjugate-real-imaginary-part-and-modulus]] make conjugation the reflection $(a,b)\mapsto(a,-b)$ and give $|a+bi|=\sqrt{a^2+b^2}$. In particular

$$ |z-w|=\lVert\Phi(z)-\Phi(w)\rVert_2, $$

so the metric, convergence, Cauchy, and continuity notions of [[def-complex-metric-convergence-and-continuity]] are exactly their Euclidean-plane counterparts. The metric topology is consequently the usual topology on $\mathbb R^2$, in accordance with [[rem-euclidean-topology-dictionary]]. Openness, connectedness, and real total differentiability will always be read through this identification.

The identification supplies no compatible field order. Indeed $i^2=-1$, while in any ordered field a square is nonnegative and $1$ is positive. This obstruction concerns the multiplication, not the Euclidean geometry: the plane still has its inner product and orientation, but neither orders $\mathbb C$ as a field.
