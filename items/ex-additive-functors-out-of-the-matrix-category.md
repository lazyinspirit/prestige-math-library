---
id: ex-additive-functors-out-of-the-matrix-category
kind: example
title: "Additive functors out of the matrix category"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules, thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules, thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Example 1.2.2"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Example 1.2.6"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
pipeline_run: frontier-20
---

## Example

An additive functor $F:\mathbf{Mat}_R\to\mathbf{Ab}$ is determined by the left
$R$-module $M:=F(1)$, and then $F(n)\cong M^{\oplus n}$ for every $n$.

## Facts & Assumptions

**Given:** An additive functor $F:\mathbf{Mat}_R\to\mathbf{Ab}$.

[L1] Additive functors out of the one-object ring category are exactly left
$R$-modules
([[thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules]]).

[L2] The matrix category is equivalent to the finitely generated free modules
([[thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules]]).

[L3] Between additive categories, additivity is equivalent to preserving finite
biproducts
([[thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]]).

## Verification

**Proof technique:** direct.

1.1 Restrict $F$ to the full one-object subcategory on $1\in\mathbf{Mat}_R$. By [L1], this restriction is the same thing as a left $R$-module, namely $M:=F(1)$. [L1]

2.1 The object $n$ of $\mathbf{Mat}_R$ is the $n$-fold biproduct of $1$. Since $F$ is additive, [L3] says it preserves those finite biproducts, so $F(n)\cong M^{\oplus n}$. This is the matrix-category form of the finite-free-module equivalence in [L2]. [L2, L3, step 1.1] ∎
