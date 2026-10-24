---
id: lem-closed-immersion-local-on-target
kind: lemma
title: Closed immersions are local on the target
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-closed-immersion-schemes]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.4.2 (tag 01HL), printed p.5"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $i:Z\to X$ be a morphism of schemes and let $X=\bigcup_{j}V_j$ be an open
cover. Then $i$ is a closed immersion if and only if the restriction
$i^{-1}(V_j)\to V_j$ is a closed immersion for every $j$.

## Facts & Assumptions

**Given:** A morphism of schemes $i:Z\to X$ and an open cover $X=\bigcup_j V_j$, the restrictions carrying the restricted structure sheaves.

[F1] A morphism $i:Z\to X$ is a **closed immersion** if its underlying map is a homeomorphism onto a closed subset and the morphism $\mathcal O_X\to i_*\mathcal O_Z$ is surjective. ([[def-closed-immersion-schemes]])



**Proof technique:** direct.

## Proof

1.1 Assume $i$ is a closed immersion and fix $j$. The map $i$ restricts to a homeomorphism of $i^{-1}(V_j)$ onto $i(Z)\cap V_j$, which is closed in $V_j$. For $x\in V_j$ with $i(z)=x$ one has $(i_*\mathcal O_Z)_x=\mathcal O_{Z,z}$ and $(i|_{i^{-1}(V_j)})_*\mathcal O_{i^{-1}(V_j)}$ has the same stalk at $x$, namely $\mathcal O_{Z,z}$; the stalk map is the surjection $\mathcal O_{X,x}\to\mathcal O_{Z,z}$ of [F1]. Hence $\mathcal O_{V_j}\to(i|_{i^{-1}(V_j)})_*\mathcal O_{i^{-1}(V_j)}$ is surjective and the restriction is a closed immersion by [F1]. [F1, given]

1.2 Conversely assume that every restriction $i^{-1}(V_j)\to V_j$ is a closed immersion, hence injective on points. If $i(z)=i(z')=x$, choose $j$ with $x\in V_j$; then $z,z'\in i^{-1}(V_j)$ and injectivity gives $z=z'$. So $i$ is injective. [given]

2.1 For each $j$ the set $i(Z)\cap V_j=i(i^{-1}(V_j))$ is closed in $V_j$, since it is the image of the restriction $i^{-1}(V_j)\to V_j$, a homeomorphism onto a closed subset. A subset of $X$ whose intersection with every member of an open cover is closed is closed, so $i(Z)$ is closed in $X$. [given, step 1.2]

2.2 Let $C\subseteq Z$ be closed. Then $C\cap i^{-1}(V_j)$ is closed in $i^{-1}(V_j)$, so its image $i(C)\cap V_j=i(C\cap i^{-1}(V_j))$ is closed in $i(Z)\cap V_j$ for every $j$, using the first direction of [F1] for each restriction. Hence $i(C)$ is closed in the closed subset $i(Z)$, and $i:Z\to i(Z)$ is a homeomorphism. [F1, given, step 1.2]

2.3 Finally $\mathcal O_X\to i_*\mathcal O_Z$ is surjective, because surjectivity of a morphism of sheaves is checked on stalks and at $x\in V_j$ the stalk map is the stalk at $x$ of the surjective map $\mathcal O_{V_j}\to(i|_{i^{-1}(V_j)})_*\mathcal O_{i^{-1}(V_j)}$ of step 1.2. [F1, step 1.2]

3.1 Steps 1.2, 2.1, 2.2 and 2.3 exhibit $i$ as a homeomorphism onto the closed subset $i(Z)$ with surjective structure map, so $i$ is a closed immersion by [F1]; the forward direction is step 1.1. ∎ [F1, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3]
