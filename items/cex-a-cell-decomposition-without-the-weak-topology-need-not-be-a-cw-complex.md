---
id: cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex
kind: counterexample
title: A cell decomposition without the weak topology need not be a CW complex
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cw-complex-with-closure-finiteness-and-weak-topology, prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Chapter 0
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement refuted

A closure-finite decomposition into characteristic cells is automatically a CW complex.

## Counterexample

**Given:** The Hawaiian earring in its subspace topology, decomposed into its
common vertex and the punctured constituent circles.

**Proof technique:** direct.

1.1 Each punctured circle is the image of the interior of a characteristic interval, and its closed circle meets only itself and the common vertex. Thus this is a closure-finite characteristic-cell decomposition. [given]

2.1 Put the radius-$1/n$ circle tangent at the origin with centre $(1/n,0)$, and choose its far point $x_n=(2/n,0)$. The set $\{x_n:n\geq1\}$ meets every closed cell in a closed set, but it is not closed in the Hawaiian earring since $x_n\to0$. Hence the topology is not the weak topology on these closed cells, so this decomposition is not a CW complex. [step 1.1] ∎
