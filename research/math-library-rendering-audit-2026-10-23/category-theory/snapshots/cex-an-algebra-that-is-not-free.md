---
id: cex-an-algebra-that-is-not-free
kind: counterexample
title: "A two-element idempotent monoid is an algebra for the free-monoid monad but is not free"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "A finite monoid witness must satisfy associativity and must be excluded from every possible rank of free word monoid."
  counterexample_search: "Checked the full multiplication table and separated the empty generating set from every nonempty generating set by cardinality."
deps: [thm-the-free-monoid-monad-and-its-algebras-are-monoids, def-semigroup-and-monoid]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Let $M=\{1,e\}$ with $1$ a two-sided identity and $e^2=e$. This is an algebra for the free-monoid monad, but it is not a free algebra.

## Facts & Assumptions

**Given:** The displayed multiplication on $M$.

[L1] A monoid is a set with associative multiplication and a two-sided identity ([[def-semigroup-and-monoid]]).

[L2] The algebras for the free-monoid monad are monoids, and its free algebras are free word monoids ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

## Verification

**Proof technique:** direct.

1.1 The multiplication table is $1\cdot1=1$, $1\cdot e=e\cdot1=e$, and $e\cdot e=e$. The element $1$ is an identity, and every triple product containing $e$ evaluates to $e$, so multiplication is associative. [L1]

2.1 Hence $M$ is a monoid and therefore an Eilenberg–Moore algebra by [L2]. [L2, step 1.1]

3.1 The free monoid on the empty set is a singleton. On a nonempty set, choosing a generator $x$ yields the distinct words $[],[x],[x,x],\ldots$, so the free monoid is infinite. Therefore the two-element algebra $M$ is not free. [L2, step 2.1] ∎
