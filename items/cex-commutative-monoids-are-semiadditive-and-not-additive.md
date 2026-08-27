---
id: cex-commutative-monoids-are-semiadditive-and-not-additive
kind: counterexample
title: "Commutative monoids are semiadditive and not additive"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-semiadditive-category, thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse, cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Exercise 2A"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-20
---

## Statement refuted

**Refuted claim:** the category $\mathbf{CMon}$ of commutative monoids is
additive.

It is only semiadditive.

## Facts & Assumptions

**Given:** The category $\mathbf{CMon}$ and the monoid $\mathbb N$.

[L1] A semiadditive category has finite biproducts
([[def-semiadditive-category]]).

[L2] A semiadditive category is preadditive exactly when every morphism has an
additive inverse
([[thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse]]).

[L3] There is a zero-kernel, non-monic morphism in a merely semiadditive
category
([[cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category]]).

## Counterexample

**Proof technique:** direct.

1.1 Finite products and finite coproducts of commutative monoids are both given by finite Cartesian products: for finitely many summands, every tuple automatically has finite support. So $\mathbf{CMon}$ has finite biproducts and is semiadditive by [L1]. [L1]

2.1 The identity endomorphism of $\mathbb N$ has no additive inverse under pointwise addition, since $f+g=0$ in $\operatorname{End}(\mathbb N)$ would force $f(1)=0$. Therefore [L2] says $\mathbf{CMon}$ is not preadditive and hence not additive. The witness [L3] records the same failure through kernels and monicity. [L2, L3, step 1.1] ∎
