---
id: thm-monoid-objects-in-abelian-groups-are-rings
kind: theorem
title: "Monoid objects in abelian groups are rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-monoid-object-and-comonoid-object-in-a-monoidal-category, def-ring, thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Statement

A monoid object in the monoidal category $\mathbf{Ab}$ is exactly a ring in the
sense of [[def-ring]].

## Facts & Assumptions

**Given:** An abelian group $A$.

[L1] A monoid object in a monoidal category is an object with multiplication and unit morphisms satisfying associative and unital diagrams ([[def-monoid-object-and-comonoid-object-in-a-monoidal-category]]).

[L2] In $\mathbf{Ab}$ the tensor product is $\otimes_{\mathbb Z}$, the unit object is $\mathbb Z$, and maps $A\otimes_{\mathbb Z}A\to A$ correspond exactly to bilinear maps $A\times A\to A$ ([[thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product]]).

[L3] A ring is an abelian group under addition together with an associative unital multiplication distributing over addition on both sides ([[def-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], a monoid object structure on $A$ is a homomorphism $\mu:A\otimes_{\mathbb Z}A\to A$ and a homomorphism $\eta:\mathbb Z\to A$. The map $\mu$ corresponds to a bilinear operation $(x,y)\mapsto x\cdot y$ on $A$, and $\eta$ is determined by the element $1:=\eta(1)\in A$. [given, L1, L2]

2.1 The monoid-object associativity and unit diagrams from [L1] translate under the correspondence in [L2] to $(x\cdot y)\cdot z=x\cdot(y\cdot z)$ and $1\cdot x=x=x\cdot1$. Because $\mu$ is a group homomorphism in each variable, the operation is bilinear, hence distributes over the abelian-group addition on both sides. [step 1.1, L1, L2, L3]

3.1 Thus the additive abelian-group structure on $A$, together with multiplication $\cdot$ and unit $1$, satisfies exactly the axioms in [L3], so $A$ is a ring. Conversely, any ring yields such a bilinear multiplication and unit homomorphism, hence a monoid object in $\mathbf{Ab}$. [step 2.1, L2, L3]

4.1 Therefore monoid objects in abelian groups are exactly rings. [step 3.1, L3] ∎
