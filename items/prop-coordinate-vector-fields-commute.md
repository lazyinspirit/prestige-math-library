---
id: prop-coordinate-vector-fields-commute
kind: proposition
title: "Coordinate vector fields commute"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-coordinate-formula-for-the-lie-bracket]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

In any smooth chart $(U,x^1,\dots,x^n)$, the coordinate vector fields
$\partial/\partial x^i$ and $\partial/\partial x^j$ satisfy

$$ \left[\frac{\partial}{\partial x^i},\frac{\partial}{\partial x^j}\right]=0 $$

on $U$.

## Facts & Assumptions

**Given:** A smooth chart $(U,x^1,\dots,x^n)$ and indices $i,j$.

[L1] The Lie bracket has the coordinate formula from the previous proposition ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Proof

**Proof technique:** direct.

1.1 In the chosen chart, the coefficient functions of $\partial/\partial x^i$ and $\partial/\partial x^j$ are constants: each is either $0$ or $1$. [given]

2.1 Substituting those constant coefficients into the formula of [L1] makes every derivative term vanish, so each coefficient of the bracket is zero. [L1, step 1.1]

3.1 Therefore the coordinate vector fields commute. [step 2.1] ∎
