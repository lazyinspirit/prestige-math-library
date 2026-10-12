---
id: def-complex-metric-convergence-and-continuity
kind: definition
title: "The Euclidean metric, convergence, Cauchy sequences, and continuity on the complex plane"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-metric-space, def-metric-convergence, def-cauchy-in-metric, def-metric-continuity]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Definition

For $z=x+iy$ and $w=u+iv$, put
$$ d_{\mathbb C}(z,w):=|z-w|=\sqrt{(x-u)^2+(y-v)^2}=\lVert(x-u,y-v)\rVert_2. $$
Under the identification $\mathbb C=\mathbb R^2$, this is exactly the metric
$d_2$ induced by the Euclidean norm of [[def-p-norms-on-rn]]. It is a metric by
[[lem-p-norms-are-norms-and-induce-the-published-metrics]], so the metric axioms
are established rather than assumed.

Convergence in $\mathbb C$, Cauchy sequences in $\mathbb C$, and continuity of
maps between subsets of $\mathbb C$ mean the notions of
[[def-metric-convergence]], [[def-cauchy-in-metric]], and
[[def-metric-continuity]] for $d_{\mathbb C}$ (and the restricted metric on a
subset). These uses are therefore licensed by the metric-space definition
[[def-metric-space]].
