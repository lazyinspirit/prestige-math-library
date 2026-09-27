---
id: prop-coordinate-vector-fields-commute
kind: proposition
title: "Coordinate vector fields commute"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lie-bracket-of-smooth-vector-fields, thm-clairaut-schwarz-mixed-partials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (prop-coordinate-vector-fields-commute). No independent judge or whole-closure certification.
    delegated_by: owner
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

[L1] The Lie bracket is the commutator of vector-field actions on smooth functions ([[def-lie-bracket-of-smooth-vector-fields]]).

[L2] Mixed coordinate partial derivatives of a smooth scalar function commute ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 In the chosen chart, the coordinate fields act on smooth functions by $\partial_i$ and $\partial_j$. [given]

2.1 For every smooth function $f$ on the chart, [L1] and [L2] give $[\partial_i,\partial_j]f=\partial_i\partial_jf-\partial_j\partial_if=0$. Thus the bracket is the zero derivation, hence the zero coordinate vector field. [L1, L2, step 1.1]

3.1 Therefore the coordinate vector fields commute. [step 2.1] ∎
