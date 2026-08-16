---
id: ex-the-closure-operator-monad-on-a-topological-space
kind: example
title: "Topological closure is a monad on the preorder of subsets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-monads-on-a-preorder-are-exactly-closure-operators, cor-algebras-for-a-closure-operator-monad-are-its-fixed-points, thm-kuratowski-closure-axioms]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Examples 5.1.7 and 5.2.6(iv)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For a topological space $X$, topological closure defines a monad on the poset $(\mathcal P(X),\subseteq)$. Its algebras are exactly the closed subsets of $X$.

## Facts & Assumptions

**Given:** A topological space $X$.

[L1] Closure is monotone, extensive, and idempotent; in particular $\overline\varnothing=\varnothing$ and $\overline X=X$ ([[thm-kuratowski-closure-axioms]]).

[L2] Closure operators on a poset are exactly monads on its associated category ([[thm-monads-on-a-preorder-are-exactly-closure-operators]]).

[L3] Algebras for such a monad are exactly its fixed points ([[cor-algebras-for-a-closure-operator-monad-are-its-fixed-points]]).

## Verification

**Proof technique:** direct.

1.1 On $\mathcal P(X)$ ordered by inclusion, [L1] says $A\mapsto\overline A$ is monotone and satisfies $A\subseteq\overline A$. [L1]

2.1 The identity $\overline{\overline A}=\overline A$ gives the multiplication comparison and, with step 1.1, makes closure a monad by [L2]. [L1, L2, step 1.1]

3.1 By [L3], its algebra objects are the subsets $A$ with $\overline A=A$, exactly the closed subsets. The boundary subsets $\varnothing$ and $X$ are fixed by [L1]. [L1, L3, step 2.1] ∎
