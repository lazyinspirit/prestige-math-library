---
id: prop-in-a-poset-adjunction-the-triangle-identities-are-automatic
kind: proposition
title: 'In a poset adjunction the triangle identities are automatic'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-galois-connection, prop-preorders-as-categories-and-monotone-maps-as-functors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Tom Leinster, Basic Category Theory, Example 2.2.7'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Section 4.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

Let $F:A\to B$ and $G:B\to A$ be monotone maps between posets. If there are natural transformations $\eta:1_A\Rightarrow GF$ and $\varepsilon:FG\Rightarrow1_B$, equivalently the pointwise inequalities

$$a\le GF(a),\qquad FG(b)\le b,$$

then both triangle identities hold automatically. In particular, the unit and counit inequalities of a Galois connection determine an adjunction without a separate triangle calculation.

## Facts & Assumptions

**Given:** The monotone maps and pointwise inequalities in the Statement.

[F1] A preorder determines a category with at most one morphism between any two objects, and functors between such categories are exactly monotone maps ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L1] A Galois connection supplies the unit inequalities $a\le GF(a)$ and counit inequalities $FG(b)\le b$ ([[def-galois-connection]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], each pointwise inequality is the unique possible morphism with its source and target, so the supplied families are natural transformations. [F1]

1.2 At $a\in A$, the two sides of the first triangle identity are parallel morphisms $F(a)\to F(a)$ in the thin category $B$, hence they are equal. [F1]

1.3 At $b\in B$, the two sides of the second triangle identity are parallel morphisms $G(b)\to G(b)$ in the thin category $A$, hence they are equal. [F1]

2.1 Thus both triangle identities hold. Applying this to the inequalities in [L1] proves the final assertion. [step 1.2, step 1.3, L1] ∎
