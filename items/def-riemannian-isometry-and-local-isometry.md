---
id: "def-riemannian-isometry-and-local-isometry"
kind: "definition"
title: "Riemannian isometry and local isometry"
deps: ["def-pullback-riemannian-metric", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "def-diffeomorphism-and-local-diffeomorphism-of-manifolds"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
---

## Definition

An **isometry** $F:(M,g)\to(N,h)$ is a diffeomorphism with $F^*h=g$. A **local isometry** is a smooth local diffeomorphism with $F^*h=g$. An **isometric immersion** is a smooth immersion satisfying that same pullback identity.

Use [[def-pullback-riemannian-metric]] and [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]. Positivity forces injective differential by [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]. In equal dimensions on boundaryless manifolds, the inverse function theorem as applied in the next proposition makes a metric-preserving smooth map a local isometry. At a boundary the definition retains the local-diffeomorphism requirement. An isometric immersion need not have equal source and target dimensions.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
