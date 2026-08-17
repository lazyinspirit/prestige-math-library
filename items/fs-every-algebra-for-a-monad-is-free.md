---
id: fs-every-algebra-for-a-monad-is-free
kind: false-statement
title: "FALSE: Every algebra for a monad is free"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-free-t-algebra, thm-the-free-monoid-monad-and-its-algebras-are-monoids, def-semigroup-and-monoid]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definitions 5.2.4 and 5.2.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim:** every algebra for every monad is a free algebra.

The free-monoid monad has a two-element algebra that is not free.

## Facts & Assumptions

**Given:** The free-monoid monad on $\mathbf{Set}$.

[L1] Its algebras are monoids, while its free algebras are free word monoids ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]; [[def-free-t-algebra]]).

[L2] A monoid has associative multiplication and a two-sided identity ([[def-semigroup-and-monoid]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], it suffices to exhibit a monoid that is not isomorphic to a free word monoid. [L1]

1.2 Let $M=\{1,e\}$ with $1$ an identity and $e^2=e$. Its multiplication is associative by inspection, so it is a monoid and hence an algebra for the free-monoid monad. [L1, L2]

2.1 A free word monoid on the empty set has one element. A free word monoid on a nonempty set contains the distinct words $[],[x],[x,x],\ldots$ for any chosen generator $x$, so it is infinite. Therefore no free word monoid has two elements, and $M$ is not free. [L1, step 1.2] ∎
