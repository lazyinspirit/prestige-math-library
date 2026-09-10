---
id: "def-piecewise-c-one-curve-on-a-manifold"
kind: "definition"
title: "Piecewise c one curve on a manifold"
deps: ["def-piecewise-c1-path-operations-and-oriented-reparametrizations", "def-c-r-and-smooth-maps-between-smooth-manifolds"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
---

## Definition

A **piecewise $C^1$ curve** in $M$ is a continuous map $\gamma:[a,b]\to M$ with a finite subdivision such that, in local charts on each closed piece, its coordinate representative is $C^1$ on the interior and its derivative extends continuously to both endpoints. The endpoint values of this extension are the corresponding one-sided derivatives.

Use the chartwise regularity convention of [[def-c-r-and-smooth-maps-between-smooth-manifolds]] and the finite path operations of [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]. Refining a piece into finitely many chart pieces is allowed. No nonzero-velocity hypothesis is imposed: constant segments and pauses are admissible. A singleton parameter interval is interpreted as a constant curve.

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
