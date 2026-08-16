---
id: prop-deck-transformations-are-determined-by-one-point-and-act-freely
kind: proposition
title: "On a connected covering space, a deck transformation is determined by one point and the deck action is free"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-deck-transformation-and-deck-group, thm-uniqueness-of-lifts-from-a-connected-space, def-free-group-action]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Statement

For a covering with connected total space, two deck transformations agreeing at one point are equal. Consequently the deck group acts freely on the total space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a covering $p:E\to B$, a **deck transformation** is an isomorphism $h:E\to E$ over $B$, so $p\circ h=p$ (def-map-and-isomorphism-of-covering-spaces). Deck transformations form the **deck group** $\operatorname{Deck}(p)$ under composition, and this group acts on $E$ by evaluation (def-group, def-group-action). ([[def-deck-transformation-and-deck-group]]).

[F2] Let $Y$ be connected and let $f,g:Y\to E$ be lifts through the same covering of the same map $Y\to B$. If $f(y_0)=g(y_0)$ for some $y_0\in Y$, then $f=g$. ([[thm-uniqueness-of-lifts-from-a-connected-space]]).

[F3] A left action of a group $G$ on a set $X$ (def-group-action) is **free** when $$g\cdot x=x\quad\Longrightarrow\quad g=e$$ for every $g\in G$ and $x\in X$. Equivalently, no nonidentity element of $G$ fixes any point of $X$. ([[def-free-group-action]]).

## Proof

**Proof technique:** direct.

1.1 Two deck transformations are lifts of the same projection. [given, F1, F2]

2.1 If they agree at one point, uniqueness of lifts from the connected total space makes them equal. [step 1.1, F2, F3]

3.1 Applying this to a deck transformation and the identity shows that a fixed point forces the transformation to be the identity. [step 2.1, F1, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
