---
id: thm-embedded-submanifolds-admit-local-defining-submersions
kind: theorem
title: "Embedded submanifolds admit local defining submersions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-defining-map-for-an-embedded-submanifold, def-embedded-submanifold-and-slice-chart, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets, thm-chain-rule-for-differentials-of-smooth-maps]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $S\subseteq M^m$ be an embedded $k$-submanifold and let $p\in S$. Then $S$
admits a local defining map at $p$.

## Facts & Assumptions

**Given:** An embedded $k$-submanifold $S\subseteq M^m$ and a point $p\in S$.

[F1] In a slice chart near $p$, $S$ is the coordinate slice $\mathbb R^k\times\{0\}$ ([[def-embedded-submanifold-and-slice-chart]]).

[F2] A local defining map is a smooth submersion whose zero fibre is the local trace of the submanifold ([[def-local-defining-map-for-an-embedded-submanifold]]).

[L1] Chart maps are diffeomorphisms onto open Euclidean sets ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

[L2] Differentials satisfy the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof
**Proof technique:** direct.

1.1 Choose a slice chart $\varphi:U\to\Omega\subseteq\mathbb R^k\times\mathbb R^{m-k}$ at $p$ as in [F1], and let $\operatorname{pr}_2:\mathbb R^k\times\mathbb R^{m-k}\to\mathbb R^{m-k}$ be the second-factor projection. Define $\Phi:=\operatorname{pr}_2\circ\varphi:U\to\mathbb R^{m-k}$. Then $S\cap U=\Phi^{-1}(0)$ by the slice description. [F1, F2, given, construct]

2.1 In the same coordinates, $\Phi=\operatorname{pr}_2\circ\varphi$. By [L1], the differential $d\varphi_q$ is an isomorphism for every $q\in U$. Applying [L2] gives $$ d\Phi_q=d(\operatorname{pr}_2)_{\varphi(q)}\circ d\varphi_q. $$ The Euclidean differential $d(\operatorname{pr}_2)_{\varphi(q)}$ is the coordinate projection onto the normal factor, hence surjective. Therefore $d\Phi_q$ is surjective for every $q\in U$, so $\Phi$ is a submersion. [L1, L2, step 1.1]

3.1 Therefore $\Phi$ satisfies the definition in [F2] and is a local defining map for $S$ at $p$. [F2, step 1.1, step 2.1] ∎
