---
id: ex-the-state-monad
kind: example
title: "The state monad threads a fixed state set through a computation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint, thm-currying-is-an-adjunction-in-set]
aliases: []
landmark: true
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.2.11(iii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Fix a set $S$. The product–exponential adjunction induces the **state monad**

$$T(X)=(X\times S)^S.$$

An element of $T(X)$ takes an initial state and returns a value together with a new state.

## Facts & Assumptions

**Given:** A fixed set $S$.

[L1] The functor $-\times S$ is left adjoint to $(-)^S$ on $\mathbf{Set}$ ([[thm-currying-is-an-adjunction-in-set]]).

[L2] Every adjunction induces a monad on the domain of its left adjoint ([[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L2] to [L1] gives $T(X)=(X\times S)^S$. [L1, L2]

2.1 The unit is $\eta_X(x)(s)=(x,s)$. For $k\in T(TX)$, write $k(s)=(c,s')$ with $c:S\to X\times S$ and define $\mu_X(k)(s)=c(s')$: the outer computation selects the inner computation and intermediate state, then the inner computation runs at that state. [L1, L2, step 1.1]

3.1 Evaluating at any initial state, either unit inserts a computation that returns its input without changing state, and either associativity bracketing runs the same outer, selected middle, and selected inner computations in order. If $S=\varnothing$, every relevant function has empty domain and the same equations hold vacuously. [L2, step 2.1] ∎
