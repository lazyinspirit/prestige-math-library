---
id: ex-line-segment-and-polygonal-path-length
kind: example
title: "A line segment has length equal to the distance between its endpoints, and a finitely piecewise-linear path has length equal to the sum of its edge lengths"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-piecewise-c1-paths-have-additive-speed-integral-length, thm-arc-length-is-additive-over-subintervals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "U. Lang, Differential Geometry I, Section 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Example

For $p,q\in\mathbb R^n$, the line segment $\gamma(t)=(1-t)p+tq$ on $[0,1]$ has

$$L(\gamma)=\lVert q-p\rVert_2.$$

More generally, a polygonal path with successive vertices $p_0,\ldots,p_m$, traversing each segment once and in that order on adjacent parameter subintervals, has

$$L=\sum_{i<m}\lVert p_{i+1}-p_i\rVert_2.$$

For $m=0$ the path is constant and the empty sum is zero.

## Facts & Assumptions

**Given:** The segment or polygonal path in the statement.

[L1] A piecewise $C^1$ path has length equal to the sum of the integrals of the speeds on its pieces ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L2] Length is additive over adjacent parameter subintervals ([[thm-arc-length-is-additive-over-subintervals]]).

## Verification

**Proof technique:** direct.

1.1 The segment derivative is the constant vector $q-p$, so [L1] gives $L(\gamma)=\int_0^1\lVert q-p\rVert_2\,dt=\lVert q-p\rVert_2$. [given, L1, algebra]

2.1 On a polygonal path, the $i$-th affine piece has length $\lVert p_{i+1}-p_i\rVert_2$ by step 1.1, independently of its positive traversal time. [step 1.1, algebra]

3.1 Add the piece lengths using [L1] or [L2] to obtain the displayed sum. If $m=0$, the path is constant and both sides are zero. [step 2.1, L1, L2] ∎
