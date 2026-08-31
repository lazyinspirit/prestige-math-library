---
id: fs-a-cartesian-closed-category-has-all-finite-limits
kind: false-statement
title: "FALSE: every cartesian closed category has all finite limits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cartesian-closed-category]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
---

## Statement

Every cartesian closed category has all finite limits.

## Facts & Assumptions

**Given:** The full subcategory $\mathbf{Set}_{\ne\varnothing}$ of $\mathbf{Set}$ on the nonempty sets.

[L1] A cartesian closed category is required to have finite products and exponentials, but not arbitrary finite limits as part of the definition ([[def-cartesian-closed-category]]).

[A1] If $A,B$ are nonempty sets, then $A\times B$ and $B^A$ are again nonempty, so $\mathbf{Set}_{\ne\varnothing}$ is cartesian closed.

## Refutation

**Proof technique:** direct.

1.1 By [A1], the category $\mathbf{Set}_{\ne\varnothing}$ has products and exponentials for all of its objects, so by [L1] it is cartesian closed. [given, L1, A1]

2.1 Consider the two constant maps $1\rightrightarrows 2$ with values $0$ and $1$. Their equalizer in $\mathbf{Set}$ is the empty set, which is not an object of $\mathbf{Set}_{\ne\varnothing}$. So that equalizer does not exist in $\mathbf{Set}_{\ne\varnothing}$. [step 1.1, given, algebra]

3.1 Therefore a cartesian closed category need not have all finite limits. The statement is false. [step 2.1] ∎
