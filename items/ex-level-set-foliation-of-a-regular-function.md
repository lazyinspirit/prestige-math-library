---
id: ex-level-set-foliation-of-a-regular-function
kind: example
title: "The level-set foliation of a regular function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-kernel-of-a-constant-rank-submersion-is-integrable,
       thm-regular-foliations-and-integrable-distributions-correspond]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

On the punctured plane $\mathbb R^2 \setminus \{0\}$, the function
$$f(x,y) = x^2 + y^2$$
has no critical points. Its level sets are the circles of positive radius, and
they form a regular foliation of the punctured plane.

## Facts & Assumptions

**Given:** The regular function $f(x,y) = x^2 + y^2$ on $\mathbb R^2 \setminus \{0\}$.

[A1] Its differential is $df = 2x\,dx + 2y\,dy$.

## Verification

**Proof technique:** direct.

1.1 On the punctured plane, the differential $df$ is never zero, so $f$ is a [given]
submersion to $(0,\infty)$. [given]

1.2 Therefore $\ker df$ is an integrable line distribution, and its leaves are [given]
the connected components of the level sets $x^2 + y^2 = c$. Those components
are exactly the circles of radius $\sqrt c$. [given]

1.3 The correspondence between integrable distributions and regular foliations [given]
turns this family of circles into a regular foliation of
$\mathbb R^2 \setminus \{0\}$. [given] ∎
