---
id: ex-two-composition-series-of-a-module-refined
kind: example
title: "Two composition series of Z/12 refine to the same simple factors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-zassenhaus-butterfly-lemma-in-an-abelian-category, thm-schreier-refinement-theorem-in-an-abelian-category, thm-jordan-holder-theorem-in-an-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Example

In the $\mathbb Z$-module $\mathbb Z/12$, the chains

$$0<\langle 6\rangle<\langle 2\rangle<\mathbb Z/12,\qquad 0<\langle 4\rangle<\langle 2\rangle<\mathbb Z/12$$

are two composition series. Their successive factors are
$\mathbb Z/2,\mathbb Z/3,\mathbb Z/2$ and
$\mathbb Z/3,\mathbb Z/2,\mathbb Z/2$, so the same simple factors occur up to
permutation.

## Facts & Assumptions

**Given:** The module $\mathbb Z/12$.

[L1] The butterfly lemma is the cell-by-cell quotient comparison behind refinements ([[thm-zassenhaus-butterfly-lemma-in-an-abelian-category]]).

[L2] Any two finite subobject chains admit equivalent refinements ([[thm-schreier-refinement-theorem-in-an-abelian-category]]).

[L3] Jordan-Holder identifies the factor multiset up to permutation ([[thm-jordan-holder-theorem-in-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 The subgroup $\langle 6\rangle$ has order $2$ and $\langle 2\rangle/\langle 6\rangle$ has order $3$, while $(\mathbb Z/12)/\langle 2\rangle$ has order $2$. Likewise $\langle 4\rangle$ has order $3$, $\langle 2\rangle/\langle 4\rangle$ has order $2$, and the top quotient is again order $2$. So both displayed chains are composition series. [L1, algebra]

2.1 The two series already display the same three simple factors up to permutation, which is the conclusion predicted abstractly by [L2] and [L3]. This is the concrete module calculation that the categorical refinement theorems package. [L2, L3, step 1.1] ∎
