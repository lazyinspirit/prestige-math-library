---
id: ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six
kind: example
title: "$S_4$ has five conjugacy classes of sizes $1$, $6$, $8$, $6$, and $3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types, cor-symmetric-group-class-equation-by-cycle-type]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 3.3.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Example 3.15"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

The group $S_4$ has five conjugacy classes, represented by $1$, $(12)$,
$(123)$, $(1234)$, and $(12)(34)$, with sizes $1$, $6$, $8$, $6$, and $3$
respectively.

## Facts & Assumptions

**Given:** The symmetric group $S_4$.

[F1] The conjugacy classes of $S_n$ are indexed by cycle types ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

[F2] The class equation counts permutations by cycle type: $n!=\sum_{c}\frac{n!}{\prod_kk^{c_k}c_k!}$ over all tuples $c$ with $\sum_kkc_k=n$ ([[cor-symmetric-group-class-equation-by-cycle-type]]).

[A1] The cycle types of elements of $S_4$ are $(4)$, $(3,1)$, $(2,2)$, $(2,1,1)$, and $(1,1,1,1)$.

## Verification

**Proof technique:** direct.

1.1 By [F1] and [A1], the classes of $S_4$ are exactly those five cycle types. [F1, A1, given]

1.2 The class size of a cycle type $c$ is $\frac{4!}{\prod_kk^{c_k}c_k!}$ by [F2]. For the types of [A1] these sizes are $\frac{24}{4}=6$, $\frac{24}{3}=8$, $\frac{24}{2^{2}\cdot2}=3$, $\frac{24}{2}=6$, and $1$. [F2, A1, algebra]

2.1 Matching the representatives $1$, $(12)$, $(123)$, $(1234)$, $(12)(34)$ with their cycle types in [A1] and the corresponding values from step 1.2 gives class sizes $1$, $6$, $8$, $6$, $3$. The sum $1+6+8+6+3=24=|S_4|$, so the count is complete. [A1, step 1.1, step 1.2, algebra] ∎
