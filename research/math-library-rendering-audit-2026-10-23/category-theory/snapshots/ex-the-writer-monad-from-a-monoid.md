---
id: ex-the-writer-monad-from-a-monoid
kind: example
title: "A monoid defines the writer monad by adjoining an accumulated output"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monad, def-semigroup-and-monoid]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.5(iii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For a monoid $(M,e,\cdot)$, define $T(X)=X\times M$. The resulting writer monad carries a value together with an accumulated element of $M$.

## Facts & Assumptions

**Given:** A monoid $(M,e,\cdot)$.

[L1] The element $e$ is a two-sided identity and multiplication in $M$ is associative ([[def-semigroup-and-monoid]]).

[L2] A monad consists of a functor, a natural unit, and a natural associative multiplication satisfying the unit laws ([[def-monad]]).

## Verification

**Proof technique:** direct.

1.1 Define $T(f)=f\times1_M$, $\eta_X(x)=(x,e)$, and $\mu_X((x,m),n)=(x,mn)$. These formulas have the required types. [L1, L2]

2.1 Naturality follows because the formulas do not change the $M$-coordinate except by multiplication. The two monad unit composites send $(x,m)$ to $(x,em)$ and $(x,me)$, both equal to $(x,m)$ by [L1]. [L1, L2, step 1.1]

3.1 On an element $(((x,m),n),p)$, the two associativity composites produce $(x,(mn)p)$ and $(x,m(np))$, equal by associativity in $M$. [L1, L2, step 1.1] ∎
