---
id: thm-set-is-cartesian-closed
kind: theorem
title: "Set is cartesian closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cartesian-closed-category, thm-set-has-all-small-limits, thm-currying-is-an-adjunction-in-set]
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Example 4.4.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
---

## Statement

The category $\mathbf{Set}$ is cartesian closed. For sets $B,C$, an exponential object of $C$ by $B$ is the function set $C^B=\operatorname{Hom}_{\mathbf{Set}}(B,C)$ with evaluation $(f,b)\mapsto f(b)$.

## Facts & Assumptions

**Given:** Sets $A,B,C$.

[L1] A cartesian closed category has finite products and exponentials, equivalently a right adjoint to each product functor $-\times B$ ([[def-cartesian-closed-category]]).

[L2] $\mathbf{Set}$ has all small limits, hence in particular finite products ([[thm-set-has-all-small-limits]]).

[L3] In $\mathbf{Set}$, currying gives a natural bijection $\mathbf{Set}(A\times B,C)\cong\mathbf{Set}(A,C^B)$ ([[thm-currying-is-an-adjunction-in-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $\mathbf{Set}$ has finite products. [given, L2]

1.2 Let $C^B$ be the set of functions $B\to C$, and let $\operatorname{ev}:C^B\times B\to C$ send $(f,b)$ to $f(b)$. By [L3], every map $A\times B\to C$ corresponds naturally and bijectively to a map $A\to C^B$. This is exactly the universal property of an exponential object. [given, L3]

2.1 Step 1.1 gives the finite-product part of [L1], and step 1.2 gives the right adjoint to $-\times B$ for each $B$. Therefore $\mathbf{Set}$ is cartesian closed. [step 1.1, step 1.2, L1] ∎
