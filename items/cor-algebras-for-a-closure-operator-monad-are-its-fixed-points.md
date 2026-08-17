---
id: cor-algebras-for-a-closure-operator-monad-are-its-fixed-points
kind: corollary
title: "Algebras for a preorder monad are exactly its fixed objects up to preorder equivalence; on a poset they are its fixed points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-t-algebra-and-algebra-homomorphism, thm-monads-on-a-preorder-are-exactly-closure-operators, thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory, def-preorder, def-partial-order]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Examples 5.1.7 and 5.2.6(iv)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a monad $T$ on a preorder $P$, a $T$-algebra structure exists on $p$ exactly when $p$ and $Tp$ are mutually comparable. On a poset this says exactly that $Tp=p$.

## Facts & Assumptions

**Given:** A monad $T$ on a preorder $P$.

[L1] A $T$-algebra on $p$ includes an arrow $Tp\to p$ ([[def-t-algebra-and-algebra-homomorphism]]).

[L2] The monad unit supplies $p\leq Tp$, and every required diagram between fixed objects of a preorder commutes automatically ([[thm-monads-on-a-preorder-are-exactly-closure-operators]]).

[L3] Antisymmetry turns mutual comparability into equality ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 If $p$ carries a $T$-algebra, [L1] gives $Tp\leq p$, while [L2] gives $p\leq Tp$; hence the two objects are mutually comparable. [L1, L2]

2.1 Conversely, if $Tp\leq p$, the corresponding unique arrow is an algebra structure: its unit and associativity diagrams commute because parallel arrows in a preorder are equal. [L1, L2, step 1.1]

3.1 When $P$ is a poset, [L3] changes mutual comparability into $Tp=p$, and equality plainly gives the comparison required in step 2.1. [L3, step 2.1] ∎
