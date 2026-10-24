---
id: thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation
kind: theorem
title: "In a strict braided monoidal category the braiding satisfies the Yang-Baxter equation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-braided-monoidal-category, def-strict-monoidal-category]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 8.1.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $\mathcal C$ be a strict braided monoidal category. Then for all objects
$X,Y,Z$,

$$(c_{Y,Z}\otimes1_X)\circ(1_Y\otimes c_{X,Z})\circ(c_{X,Y}\otimes1_Z) =(1_Z\otimes c_{X,Y})\circ(c_{X,Z}\otimes1_Y)\circ(1_X\otimes c_{Y,Z}).$$

In particular, when $X=Y=Z$, both sides are endomorphisms of $X\otimes X\otimes
X$, and the relation becomes

$$(c\otimes1)(1\otimes c)(c\otimes1)=(1\otimes c)(c\otimes1)(1\otimes c).$$

## Facts & Assumptions

**Given:** A strict braided monoidal category.

[L1] A braided monoidal category carries a braiding satisfying the two hexagon identities ([[def-braided-monoidal-category]]).

[L2] In a strict monoidal category, the associator and both unitors are identity morphisms ([[def-strict-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], both hexagon identities from [L1] lose all associators. They become $c_{X,Y\otimes Z}=(1_Y\otimes c_{X,Z})\circ(c_{X,Y}\otimes1_Z)$ and $c_{X\otimes Y,Z}=(c_{X,Z}\otimes1_Y)\circ(1_X\otimes c_{Y,Z})$. [given, L1, L2, algebra]

2.1 Naturality of $c_{X,-}$ with respect to the morphism $c_{Y,Z}:Y\otimes Z\to Z\otimes Y$ gives $$(c_{Y,Z}\otimes1_X)\circ c_{X,Y\otimes Z}=c_{X,Z\otimes Y}\circ(1_X\otimes c_{Y,Z}).$$ [L1, step 1.1, algebra]

3.1 Expand the left-hand occurrence of $c_{X,Y\otimes Z}$ in step 2.1 by the first formula of step 1.1, and expand $c_{X,Z\otimes Y}$ by the same formula with $Y$ and $Z$ interchanged. This yields $$(c_{Y,Z}\otimes1_X)\circ(1_Y\otimes c_{X,Z})\circ(c_{X,Y}\otimes1_Z)=(1_Z\otimes c_{X,Y})\circ(c_{X,Z}\otimes1_Y)\circ(1_X\otimes c_{Y,Z}),$$ which is the stated Yang-Baxter relation. The special case $X=Y=Z$ is the displayed braid equation. [step 1.1, step 2.1, algebra] ∎
