---
id: lem-commuting-independent-vector-fields-give-a-coordinate-system
kind: lemma
title: "Commuting independent vector fields give a coordinate system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-on-flows,
       prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains,
       thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute,
       thm-smooth-inverse-function-theorem-on-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $X_1,\dots,X_k$ be smooth vector fields on an $n$-manifold $M$, defined
near $p$, pointwise linearly independent there, and satisfying
$[X_i,X_j] = 0$ for all $i,j$. Then there are local coordinates
$(x^1,\dots,x^n)$ near $p$ such that

$$ X_i = \frac{\partial}{\partial x^i} \qquad (1 \leq i \leq k). $$

## Facts & Assumptions

**Given:** Commuting smooth vector fields $X_1,\dots,X_k$ near $p$ that are linearly independent at $p$.

[A1] Choose a local submanifold $S$ through $p$ transverse to the span of the $X_i$.

## Proof

**Proof technique:** direct.

1.1 Let $\Phi^i$ be the local flow of $X_i$. Because the fields commute, their [given] local flows commute pairwise. Define $$F(t_1,\dots,t_k,s) := \Phi^1_{t_1} \circ \cdots \circ \Phi^k_{t_k}(s)$$ for $(t,s)$ near $(0,p)$ with $s \in S$. This map is smooth. [given, construct]

1.2 The differential of $F$ at $(0,p)$ sends the coordinate vector [given] $\partial_{t_i}$ to $X_i(p)$ and the tangent space of $S$ identically into a complement of their span. Hence $dF_{(0,p)}$ is an isomorphism. By the inverse function theorem, after shrinking domains, $F$ is a local diffeomorphism. [given]

2.1 In the resulting coordinates, changing only $t_i$ applies the $X_i$-flow, [given] so the pushforward of $\partial_{t_i}$ is exactly $X_i$. Renaming the source coordinates as $(x^1,\dots,x^n)$ gives the desired chart. [given] ∎
