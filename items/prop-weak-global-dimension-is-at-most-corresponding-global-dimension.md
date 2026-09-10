---
id: prop-weak-global-dimension-is-at-most-corresponding-global-dimension
title: "Weak global dimension is at most the corresponding global dimension"
kind: proposition
status: published
origin: pipeline
deps: ["def-left-and-right-weak-global-dimension", "lem-projective-modules-are-flat-over-an-arbitrary-ring", "def-left-and-right-global-dimension-of-a-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Statement

The left and right weak global dimensions of a ring are at most the corresponding global dimensions.

## Proof

**Given:** a module $M$ with a projective resolution of length at most $n$.

1.1 Every projective term in the resolution is flat. [given]

2.1 Thus the same resolution is a flat resolution of $M$ of length at most $n$. [step 1.1, algebra]

3.1 Taking the supremum of flat dimensions over all left, respectively right, modules gives $\operatorname{w.gl.dim}\le\operatorname{gl.dim}$ on each side. [step 2.1, algebra] ∎
