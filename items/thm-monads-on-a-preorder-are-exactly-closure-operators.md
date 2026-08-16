---
id: thm-monads-on-a-preorder-are-exactly-closure-operators
kind: theorem
title: "On a preorder the monads are exactly the monotone extensive maps with T(Tp) below Tp; on a poset they are exactly the closure operators"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-monad, def-preorder, prop-preorders-as-categories-and-monotone-maps-as-functors, def-partial-order]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a preorder, regarded as a category. A monad on $P$ is equivalently a monotone map $T:P\to P$ such that $p\leq Tp$ and $T(Tp)\leq Tp$ for every $p$. These inequalities force $Tp$ and $T(Tp)$ to be mutually comparable. If $P$ is a poset, this is equivalently a closure operator: a monotone, extensive, idempotent map.

## Facts & Assumptions

**Given:** A preorder $P$, regarded as a category.

[L1] Functors between preorders are exactly monotone maps, and a natural transformation $F\Rightarrow G$ exists exactly when $Fp\leq Gp$ for every $p$ ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L2] A monad has natural transformations $\eta:1\Rightarrow T$ and $\mu:T^2\Rightarrow T$ satisfying the monad equations ([[def-monad]]).

[L3] A partial order is a preorder satisfying antisymmetry ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 By [L1]–[L2], the endofunctor is a monotone map, $\eta$ is exactly the family of inequalities $p\leq Tp$, and $\mu$ is exactly $T(Tp)\leq Tp$. Applying monotonicity to $p\leq Tp$ also gives $Tp\leq T(Tp)$. [L1, L2]

1.2 Conversely, a monotone $T$ with $p\leq Tp$ and $T(Tp)\leq Tp$ supplies the unique transformations $\eta:1\Rightarrow T$ and $\mu:T^2\Rightarrow T$ by [L1]. Every monad diagram commutes because a preorder has at most one arrow between any fixed source and target. [L1, L2]

2.1 If $P$ is a poset, step 1.1 and antisymmetry give $T(Tp)=Tp$; conversely an ordinary closure operator is monotone and extensive and its idempotence supplies $T(Tp)\leq Tp$, so step 1.2 makes it a monad. [L3, step 1.1, step 1.2] ∎
