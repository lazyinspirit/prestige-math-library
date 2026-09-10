---
id: "def-riemannian-volume-of-a-compactly-supported-smooth-density"
kind: "definition"
title: "Riemannian volume of a compactly supported smooth density"
deps: ["lem-the-riemannian-volume-density-is-coordinate-independent", "def-integral-of-a-compactly-supported-smooth-density", "thm-density-integration-is-defined-without-an-orientation", "def-countable-choice"]
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

Let $(M,g)$ be a Riemannian manifold and assume countable choice. For a smooth compactly supported function $f:M\to\mathbb R$, define $\int_M f\mu_g$ by the intrinsic smooth density integral. More generally every compactly supported signed smooth density $\sigma$ on $M$ has its existing intrinsic integral, independently of a Riemannian metric.

[[lem-the-riemannian-volume-density-is-coordinate-independent]] makes $f\mu_g$ a smooth compactly supported density. Apply [[def-integral-of-a-compactly-supported-smooth-density]] and [[thm-density-integration-is-defined-without-an-orientation]]; [[def-countable-choice]] is inherited precisely at chart-partition selection. In a chart the summand is the integral of the partition-weighted coefficient $f\sqrt{\det G}$. On a zero-manifold it is the finite sum of scalar density values, and empty support gives zero. No orientation is required.

## Source locator

Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.
