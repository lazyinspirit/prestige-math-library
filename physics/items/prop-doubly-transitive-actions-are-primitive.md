---
id: prop-doubly-transitive-actions-are-primitive
kind: proposition
title: "Every doubly transitive action is primitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-block-and-block-system-for-a-group-action, def-k-transitive-and-k-homogeneous-actions, def-primitive-and-imprimitive-actions]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement

Every doubly transitive action is primitive.

## Facts & Assumptions

**Given:** A doubly transitive action of $G$ on $\Omega$.

[L1] A block $B$ satisfies: for every $g \in G$, either $g \cdot B = B$ or $(g \cdot B) \cap B = \varnothing$ ([[def-block-and-block-system-for-a-group-action]]).

[L2] A $2$-transitive action sends any ordered pair of distinct points to any other such pair ([[def-k-transitive-and-k-homogeneous-actions]]).

[L3] A transitive action is primitive when its only block systems are the singleton partition and the one-block partition ([[def-primitive-and-imprimitive-actions]]).

## Proof

**Proof technique:** direct.

1.1 Let $B$ be a block containing some $\alpha \in \Omega$. If $B = \{\alpha\}$ there is nothing to prove, so suppose $B$ also contains $\beta \ne \alpha$. [L1, choose]

1.2 For any $\gamma \ne \alpha$, [L2] gives an element $g \in G$ with $g \cdot \alpha = \alpha$ and $g \cdot \beta = \gamma$. Then $\gamma \in g \cdot B$, while $\alpha \in g \cdot B \cap B$ because $g$ fixes $\alpha$. So [L1] gives $g \cdot B = B$, and therefore $\gamma \in B$. [L1, L2]

2.1 Step 1.2 shows that every $\gamma \ne \alpha$ lies in $B$, so $B = \Omega$. Thus any block containing more than one point is all of $\Omega$, and the only block systems are the trivial ones. By [L3], the action is primitive. [step 1.1, step 1.2, L3] ∎
