---
id: thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other
kind: theorem
title: "In the presence of symmetry, one hexagon implies the other"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-symmetric-monoidal-category, thm-the-inverse-braiding-is-a-braiding]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Natural Associativity and Commutativity, the hexagon (4.5)"
      url: "https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Version I of the coherence theorem"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

Let $\mathcal C$ be a monoidal category equipped with a natural isomorphism
$c_{X,Y}:X\otimes Y\to Y\otimes X$ that satisfies one of the two braiding
hexagons. If moreover

$$c_{Y,X}\circ c_{X,Y}=1_{X\otimes Y}$$

for all $X,Y$, then the other hexagon also holds. In particular, in a
symmetric monoidal category either hexagon may be taken as the coherence axiom.

## Facts & Assumptions

**Given:** A natural family $c_{X,Y}$ satisfying the symmetry equation and one braiding hexagon.

[L1] In a symmetric monoidal category, the braiding satisfies $c_{Y,X}\circ c_{X,Y}=1_{X\otimes Y}$ ([[def-symmetric-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that the given hexagon is $$\alpha_{Y,Z,X}\circ c_{X,Y\otimes Z}\circ\alpha_{X,Y,Z}=(1_Y\otimes c_{X,Z})\circ\alpha_{Y,X,Z}\circ(c_{X,Y}\otimes1_Z).$$ Inverting this equality gives $$\alpha_{X,Y,Z}^{-1}\circ c_{X,Y\otimes Z}^{-1}\circ\alpha_{Y,Z,X}^{-1}=(c_{X,Y}^{-1}\otimes1_Z)\circ\alpha_{Y,X,Z}^{-1}\circ(1_Y\otimes c_{X,Z}^{-1}).$$ [given, algebra]

2.1 Replace $(X,Y,Z)$ in step 1.1 by $(Z,X,Y)$. By [L1], the symmetry equation implies $c_{U,V}^{-1}=c_{V,U}$ for all objects $U,V$. After that substitution, step 1.1 becomes $$\alpha_{Z,X,Y}^{-1}\circ c_{X\otimes Y,Z}\circ\alpha_{X,Y,Z}^{-1}=(c_{X,Z}\otimes1_Y)\circ\alpha_{X,Z,Y}^{-1}\circ(1_X\otimes c_{Y,Z}),$$ which is exactly the second braiding hexagon. [L1, step 1.1, algebra]

3.1 If instead the second hexagon is given, the same argument with the roles of the two hexagons reversed proves the first. Hence under the symmetry axiom either hexagon implies the other. [step 2.1, algebra] ∎
