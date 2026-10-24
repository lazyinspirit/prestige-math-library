---
id: thm-cartesian-closed-preorders-have-relative-implications
kind: theorem
title: "A cartesian closed preorder has relative implications"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cartesian-closed-category, prop-preorders-as-categories-and-monotone-maps-as-functors, def-products-and-coproducts]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.4.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

Let $P$ be a preorder regarded as a category. If $P$ is cartesian closed, then for every $a,b\in P$ there is an element $b^a\in P$ such that for every $x\in P$,

$$x\le b^a\iff x\wedge a\le b,$$

where $\wedge$ is the binary product in the preorder.

## Facts & Assumptions

**Given:** A cartesian closed preorder $P$ and elements $a,b,x\in P$.

[L1] A preorder can be regarded as a category with at most one morphism between two objects ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L2] In a cartesian closed category, the product functor $-\times a$ has right adjoint $(-)^a$ ([[def-cartesian-closed-category]]).

[L3] Binary products satisfy the usual universal property; in a preorder they are meets ([[def-products-and-coproducts]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the inequality $u\le v$ is the same as the existence of a morphism $u\to v$ in the associated thin category. By [L3], the product $x\times a$ is exactly the meet $x\wedge a$. [given, L1, L3]

2.1 Let $b^a$ denote the exponential object given by [L2]. The adjunction $-\times a\dashv(-)^a$ gives $\operatorname{Hom}(x\wedge a,b)\cong\operatorname{Hom}(x,b^a)$. Since each hom-set in a preorder is either empty or a singleton, this bijection says precisely that $x\wedge a\le b$ iff $x\le b^a$. [step 1.1, L2, algebra]

3.1 Therefore every cartesian closed preorder has the stated relative implication operation. [step 2.1] ∎
