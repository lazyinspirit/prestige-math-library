---
id: thm-bv-functions-form-an-algebra
kind: theorem
title: "Functions of bounded variation form an algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-total-variation-seminorm-laws,
       lem-basic-properties-of-total-variation,
       def-bounded-variation-and-total-variation,
       def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
short: "BV is an algebra"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If $f$ and $g$ have bounded variation on $[a,b]$, so do $f+g$, $cf$, and $fg$.
If $|f|\le M_f$ and $|g|\le M_g$, then

$$\operatorname{Var}(fg)\le M_f\operatorname{Var}(g)+M_g\operatorname{Var}(f).$$

## Facts & Assumptions

**Given:** BV functions $f,g:[a,b]\to\mathbb R$.

[L1] BV functions are closed under sums and scalar multiples ([[lem-total-variation-seminorm-laws]]).

[L2] Every BV function is bounded ([[lem-basic-properties-of-total-variation]]).

[L3] Total variation is the supremum of partition sums ([[def-bounded-variation-and-total-variation]]).

[L4] Partitions and their finite sums are as in [[def-partition-and-refinement]], [[def-finite-sum]], and [[lem-finite-sum-laws]].

[L5] Absolute value is multiplicative and satisfies the triangle inequality ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] choose $M_f,M_g\ge0$ with $|f(x)|\le M_f$ and $|g(x)|\le M_g$ on $[a,b]$. For a partition point pair $x<y$, the identity $f(y)g(y)-f(x)g(x)=f(y)(g(y)-g(x))+g(x)(f(y)-f(x))$ gives $|(fg)(y)-(fg)(x)|\le M_f|g(y)-g(x)|+M_g|f(y)-f(x)|$. [L2, L5, algebra]

2.1 Summing step 1.1 over any partition yields $V(fg,P)\le M_fV(g,P)+M_gV(f,P)\le M_f\operatorname{Var}(g)+M_g\operatorname{Var}(f)$. Taking the supremum proves the displayed bound and that $fg$ is BV. [step 1.1, L3, L4]

3.1 Closure under sums and scalar multiples is [L1], and step 2.1 supplies closure under products, so the BV functions form an algebra under pointwise operations. [step 2.1, L1] ∎

