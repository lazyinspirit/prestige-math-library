---
id: fs-free-product-of-abelian-groups-is-abelian
kind: false-statement
title: "FALSE: a free product of abelian groups is abelian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-normal-form-for-free-products, prop-integers-modulo-n-as-a-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Statement

**False claim:** the free product of abelian groups is abelian.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Every element of $\ast_{i\in I}G_i$ has a unique reduced syllable expression. The identity is represented by the empty word, and no nonempty reduced word represents the identity. ([[thm-normal-form-for-free-products]]).

[L2] For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$ in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset addition is the published addition of congruence classes. Thus $$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$ as the same group on the same underlying set. This includes $n=0$ and $n=1$. ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Refutation

**Proof technique:** direct.

1.1 Take the two abelian groups $C_2=\langle s\rangle$ and $C_2=\langle t\rangle$. [given, L1, L2]

2.1 In $C_2\ast C_2$, the words $st$ and $ts$ are distinct reduced words by normal-form uniqueness. [step 1.1]

3.1 Thus $s$ and $t$ do not commute, so their free product is nonabelian and the claim is false. [step 2.1] ∎
