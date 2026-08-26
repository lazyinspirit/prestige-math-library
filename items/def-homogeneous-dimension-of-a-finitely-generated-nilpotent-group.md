---
id: def-homogeneous-dimension-of-a-finitely-generated-nilpotent-group
kind: definition
title: "The homogeneous dimension of a finitely generated nilpotent group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-free-rank-of-a-finitely-generated-pid-module, def-nilpotent-group-and-nilpotency-class, def-subgroup-commutator-and-lower-central-series]
justified_by: [rem-bass-guivarch-growth-degree-formula]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "J. Milnor, Growth of finitely generated solvable groups"
      url: "https://www.jstor.org/stable/1970728"
pipeline_run: null
---

## Definition

Let $G$ be a finitely generated nilpotent group of class $c$, and write
$$\gamma_1(G)=G, \qquad \gamma_{i+1}(G)=[G,\gamma_i(G)]$$
for its lower central series ([[def-subgroup-commutator-and-lower-central-series]],
[[def-nilpotent-group-and-nilpotency-class]]).

The later source-backed remark
[[rem-bass-guivarch-growth-degree-formula]] records that each quotient
$$\gamma_i(G)/\gamma_{i+1}(G)$$
is a finitely generated abelian group, so its free rank as a $\mathbb Z$-module
is defined ([[def-free-rank-of-a-finitely-generated-pid-module]]).

The **homogeneous dimension** of $G$ is
$$D(G) := \sum_{i=1}^c i \cdot \operatorname{rank}_{\mathbb Z}\!\bigl(\gamma_i(G)/\gamma_{i+1}(G)\bigr).$$
