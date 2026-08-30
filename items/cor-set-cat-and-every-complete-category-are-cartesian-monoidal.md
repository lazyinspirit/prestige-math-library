---
id: cor-set-cat-and-every-complete-category-are-cartesian-monoidal
kind: corollary
title: "Set, Cat, and every complete category are cartesian monoidal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-category-with-finite-products-is-monoidal, prop-sets-and-functions-form-category-set, thm-small-categories-form-a-strict-two-category, def-small-finite-and-large-limits-completeness-and-cocompleteness]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "E. Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The categories $\mathbf{Set}$ and $\mathbf{Cat}$ are cartesian monoidal.
More generally, every complete category is cartesian monoidal.

## Facts & Assumptions

**Given:** The standard product structures on sets and on small categories.

[L1] Any category with binary products and a terminal object is monoidal under that product ([[thm-a-category-with-finite-products-is-monoidal]]).

[L2] Sets and functions form the category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]), and small categories, functors, and natural transformations form the strict 2-category $\mathbf{Cat}$ ([[thm-small-categories-form-a-strict-two-category]]).

[L3] A complete category has all small limits and in particular a terminal object and binary products ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

## Proof

**Proof technique:** direct.

1.1 The cartesian product of sets and the singleton set give binary products and a terminal object in $\mathbf{Set}$, so [L1] yields a monoidal structure on $\mathbf{Set}$. [L1, L2]

1.2 In $\mathbf{Cat}$, the product category is the categorical binary product and the one-object category is terminal, so [L1] yields a monoidal structure on $\mathbf{Cat}$. [L1, L2]

1.3 If $\mathcal C$ is complete, then [L3] gives the required terminal object and binary products, and [L1] makes $\mathcal C$ cartesian monoidal. [L1, L3]

2.1 Therefore $\mathbf{Set}$, $\mathbf{Cat}$, and every complete category are cartesian monoidal. [step 1.1, step 1.2, step 1.3] ∎
