---
id: thm-the-double-braiding-center-is-symmetric
kind: theorem
title: "The double-braiding center is a symmetric monoidal subcategory"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-braided-monoidal-category,
       def-symmetric-monoidal-category,
       thm-the-braiding-is-compatible-with-the-unit-constraints,
       thm-mac-lane-coherence-in-the-canonical-map-form]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

Let $(\mathcal C,c)$ be a braided monoidal category. Let $\mathcal Z_2(\mathcal
C)$ be the full subcategory on those objects $X$ such that

$$c_{Y,X}\circ c_{X,Y}=1_{X\otimes Y}$$

for every object $Y$ of $\mathcal C$. Then $\mathcal Z_2(\mathcal C)$ is closed
under tensor product and unit, and the inherited braiding makes
$\mathcal Z_2(\mathcal C)$ into a symmetric monoidal category.

## Facts & Assumptions

**Given:** A braided monoidal category $(\mathcal C,c)$.

[L1] A braided monoidal category is a monoidal category equipped with a braiding ([[def-braided-monoidal-category]]).

[L2] By definition, a braided monoidal category is symmetric exactly when $c_{Y,X}\circ c_{X,Y}=1_{X\otimes Y}$ for all objects $X,Y$ ([[def-symmetric-monoidal-category]]).

[L3] The braiding is compatible with the unit constraints, so $c_{\mathbf 1,X}=c_{X,\mathbf 1}^{-1}$ ([[thm-the-braiding-is-compatible-with-the-unit-constraints]]).

[L4] Canonical reassociations and unit insertions between fixed parenthesised tensor words are unique ([[thm-mac-lane-coherence-in-the-canonical-map-form]]).

## Proof

**Proof technique:** direct.

1.1 The tensor unit belongs to $\mathcal Z_2(\mathcal C)$: for every $Y$, [L3] gives $c_{Y,\mathbf 1}^{-1}=c_{\mathbf 1,Y}$, hence $c_{Y,\mathbf 1}\circ c_{\mathbf 1,Y}=1_{\mathbf 1\otimes Y}$. [L3, given, algebra]

1.2 Suppose $X$ and $Y$ lie in $\mathcal Z_2(\mathcal C)$, and let $Z$ be arbitrary. By [L4], the canonical associators in the two hexagons may be suppressed after transporting both sides between the same parenthesised source and target. In that coherent notation, the hexagons give $$c_{Z,X\otimes Y}\circ c_{X\otimes Y,Z}=(1_X\otimes c_{Z,Y})(c_{Z,X}\otimes1_Y)(c_{X,Z}\otimes1_Y)(1_X\otimes c_{Y,Z}).$$ [L1, L4, given, algebra]

2.1 Transparency of $X$ gives $(c_{Z,X}\otimes1_Y)(c_{X,Z}\otimes1_Y)=1_{X\otimes Z}\otimes1_Y$. Substituting this into step 1.2 leaves $$(1_X\otimes c_{Z,Y})(1_X\otimes c_{Y,Z})=1_X\otimes(c_{Z,Y}\circ c_{Y,Z}),$$ which is the identity by transparency of $Y$. Hence $X\otimes Y$ lies in $\mathcal Z_2(\mathcal C)$. [step 1.2, given, algebra]

3.1 Because the subcategory is full and is closed under tensor product by step 2.1 and under the unit by step 1.1, tensor products of its morphisms and the ambient associator and unitors all remain in it. The ambient braiding also restricts to it. For central objects $X,Y$, their defining condition says $c_{Y,X}\circ c_{X,Y}=1_{X\otimes Y}$. By the definition in [L2], the restricted braiding is therefore a symmetry. Thus $\mathcal Z_2(\mathcal C)$ is symmetric monoidal. [L2, step 1.1, step 2.1, algebra] ∎
