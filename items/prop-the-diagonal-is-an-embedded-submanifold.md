---
id: prop-the-diagonal-is-an-embedded-submanifold
kind: proposition
title: "The diagonal is an embedded submanifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-embedded-submanifold-and-slice-chart, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
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

For every smooth manifold $M$, the diagonal

$$\Delta_M:=\{(p,p):p\in M\}\subseteq M\times M$$

is an embedded submanifold of dimension $\dim M$.

## Facts & Assumptions

**Given:** A smooth manifold $M$.

[F1] Embedded submanifolds are characterized by slice charts
([[def-embedded-submanifold-and-slice-chart]]).

[L1] $M\times M$ has the canonical product smooth structure
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[L2] Chart maps are diffeomorphisms onto open Euclidean sets
([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

## Proof
**Proof technique:** direct.

1.1 Fix $(p,p)\in\Delta_M$. Choose a chart $\varphi:U\to\Omega\subseteq\mathbb R^m$ at $p$. By [L1] and [L2], the product chart $\varphi\times\varphi:U\times U\to\Omega\times\Omega$ is a smooth chart on $M\times M$. [L1, L2, given]

2.1 In coordinates $(u,v)\in\Omega\times\Omega$, the diagonal becomes $\{(u,v):u=v\}$. The linear change of variables $L(u,v):=(u,v-u)$ is a diffeomorphism from $\Omega\times\Omega$ onto the open set $L(\Omega\times\Omega)$, and $$L(\{(u,u):u\in\Omega\})=L(\Omega\times\Omega)\cap(\mathbb R^m\times\{0\}).$$ Therefore $\Delta_M$ is locally a coordinate slice and hence an embedded submanifold by [F1]. [F1, step 1.1, algebra]

3.1 The slice has dimension $m=\dim M$, so the diagonal has that dimension as an embedded submanifold. [step 2.1] ∎
