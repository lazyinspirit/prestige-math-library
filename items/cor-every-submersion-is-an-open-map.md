---
id: cor-every-submersion-is-an-open-map
kind: corollary
title: "Every submersion is an open map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-local-normal-form-for-submersions, def-homeomorphism-and-open-maps, thm-product-universal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry, Proposition 6.13"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, Submersions"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Every smooth submersion $F:M\to N$ is an open map.

## Facts & Assumptions

**Given:** A smooth submersion $F:M\to N$.

[F1] An open map sends open sets to open sets
([[def-homeomorphism-and-open-maps]]).

[L1] Around each point of $M$, a submersion is locally the projection
$(u,v)\mapsto u$ ([[cor-local-normal-form-for-submersions]]).

[L2] Products carry the usual product topology, so if $(u_0,v_0)$ lies in an
open set of a product, some product neighbourhood of $(u_0,v_0)$ lies inside
that open set ([[thm-product-universal-property]]).

## Proof
**Proof technique:** direct.

1.1 Let $W\subseteq M$ be open and let $y\in F(W)$. Choose $x\in W$ with $F(x)=y$. By [L1], after shrinking around $x$ and $y$, the map is identified with a coordinate projection $(u,v)\mapsto u$. [L1, given]

2.1 Since $W$ is open and contains $x$, [L2] gives a product neighbourhood $U_1\times U_2\subseteq W$ in those coordinates. The projection sends this product neighbourhood onto the open set $U_1$. Therefore $y$ has an open neighbourhood contained in $F(W)$. [step 1.1, L2]

3.1 Because every point of $F(W)$ is interior, $F(W)$ is open. Thus $F$ is an open map in the sense of [F1]. [F1, step 2.1] ∎