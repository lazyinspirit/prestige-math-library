---
id: def-self-adjoint-and-normal-endomorphism
kind: definition
title: "Self-adjoint and normal endomorphisms of a finite-dimensional real or complex inner product space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces]
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Definition

Let $V$ be a finite-dimensional real or complex inner product space and let
$T:V\to V$ be an endomorphism. The endomorphism $T$ is **self-adjoint** when

$$T^*=T,$$

and **normal** when

$$TT^*=T^*T,$$

where $T^*$ is the adjoint from
[[def-adjoint-of-a-linear-map-between-inner-product-spaces]].

Every self-adjoint endomorphism is normal, because $TT^*=T^2=T^*T$.
