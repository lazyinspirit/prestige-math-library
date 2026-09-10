---
id: "def-extended-riemannian-distance-on-a-disconnected-manifold"
kind: "definition"
title: "Extended riemannian distance on a disconnected manifold"
deps: ["thm-riemannian-distance-is-a-metric"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
---

## Definition

The **extended Riemannian distance** on arbitrary $M$ is the componentwise Riemannian distance when two points are in the same component, and $+\infty$ otherwise.

Within each component use [[thm-riemannian-distance-is-a-metric]]. Components are open, since small coordinate balls are connected. A continuous curve cannot meet two components because its connected interval image is connected, so the cross-component curve family is empty, with $\inf\varnothing=+\infty$. This is an extended metric: if two endpoints are in different components, any third point is in a different component from at least one of them, so the triangle inequality has infinite right side. It is a finite metric precisely when there are no distinct components. Empty and singleton manifolds retain their unique distances.

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
