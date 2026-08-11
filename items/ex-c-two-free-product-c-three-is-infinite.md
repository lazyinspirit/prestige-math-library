---
id: ex-c-two-free-product-c-three-is-infinite
kind: example
title: "C_2 free-product C_3 has presentation with only the two factor relations and is infinite"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-presentation-of-a-free-product, thm-normal-form-for-free-products, prop-integers-modulo-n-as-a-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---
## Example

The free product $C_2\ast C_3$ has presentation $$\langle s,t\mid s^2=e,\ t^3=e\rangle$$ and is infinite.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Suppose each $G_i$ has a presentation $\langle X_i\mid R_i\rangle$, with the alphabets replaced by disjoint copies. Then $$\ast_iG_i\cong\left\langle\bigsqcup_iX_i\ \middle|\ \bigcup_iR_i\right\rangle.$$ ([[thm-presentation-of-a-free-product]]).

[L2] Every element of $\ast_{i\in I}G_i$ has a unique reduced syllable expression. The identity is represented by the empty word, and no nonempty reduced word represents the identity. ([[thm-normal-form-for-free-products]]).

[L3] For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$ in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset addition is the published addition of congruence classes. Thus $$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$ as the same group on the same underlying set. This includes $n=0$ and $n=1$. ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Verification

**Proof technique:** direct.

1.1 The presentation theorem contributes only the defining relations of the two factors. [given, L1, L2, L3]

2.1 For $n\in\mathbb N$, the words $(st)^n$ are reduced; the $n=0$ word is empty and positive $n$ have distinct lengths. Normal form therefore makes them pairwise distinct, proving infinitude. [step 1.1] ∎
