---
id: prop-a-countable-chart-cover-detects-manifold-null-sets
kind: proposition
title: "A countable chart cover detects manifold null sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subset-of-a-smooth-manifold,
       prop-the-null-set-definition-is-independent-of-the-smooth-atlas,
       prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $M$ be a smooth manifold. If $\{(U_j,\varphi_j)\}_{j\in\mathbb N}$ is a
countable smooth atlas with relatively compact domains, then a subset
$E\subseteq M$ is null if and only if every $\varphi_j(E\cap U_j)$ is null in
$\mathbb R^{\dim M}$ when $\dim M\ge 1$, and every
$\varphi_j(E\cap U_j)$ is empty when $\dim M=0$.

## Facts & Assumptions

**Given:** A countable smooth atlas $\{(U_j,\varphi_j)\}_{j\in\mathbb N}$ with relatively compact domains on a smooth manifold $M$.

[F1] On a $0$-manifold, the only null subset is the empty set ([[def-null-subset-of-a-smooth-manifold]]).

[L2] Nullity is independent of the chosen smooth atlas ([[prop-the-null-set-definition-is-independent-of-the-smooth-atlas]]).

## Proof
**Proof technique:** direct.

1.1 If $\dim M=0$, [F1] says that $E$ is null exactly when $E=\varnothing$. Because the chart domains cover $M$, this is equivalent to every $E\cap U_j$ being empty, hence to every chart image being empty. [F1, given, cases]
1.2 Assume $\dim M\ge1$. If $E$ is null, then every chart image $\varphi_j(E\cap U_j)$ is null by definition. [given, cases]
2.1 Conversely, the given countable atlas is itself a smooth atlas, so [L2] says that being null with respect to this atlas is the same as being null with respect to any other. Therefore the displayed chartwise condition implies that $E$ is null. [L2, step 1.1, step 1.2]
3.1 Hence this countable chart cover detects manifold null sets in every dimension. [step 1.1, step 1.2, step 2.1] ∎
