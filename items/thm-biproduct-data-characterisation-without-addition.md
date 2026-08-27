---
id: thm-biproduct-data-characterisation-without-addition
kind: theorem
title: "Biproduct data characterisation without addition"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-biproduct, def-products-and-coproducts]
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

Let a category with zero morphisms contain a finite family $(A_i)_{i\in I}$ and
an object $B$ such that $(B,\iota_i)$ is a coproduct and $(B,p_i)$ is a
product. Let $c:B\to B$ be the canonical comparison determined by these
supplied structures. Then $c=1_B$ if and only if

$$p_j\iota_i=\begin{cases}1_{A_i},&i=j,\\0_{A_i,A_j},&i\ne j.\end{cases}$$

## Facts & Assumptions

**Given:** A finite family $(A_i)_{i\in I}$ with maps $\iota_i:A_i\to B$ and
$p_i:B\to A_i$ in a category with zero morphisms.

[L1] A biproduct is a coproduct and a product whose canonical comparison is an
isomorphism ([[def-biproduct]]).

[L2] Products and coproducts have their universal properties
([[def-products-and-coproducts]]).

## Proof

**Proof technique:** direct.

1.1 If $c=1_B$, then the defining equations $p_jc\iota_i=\delta_{ij}$ for the canonical comparison immediately give the displayed zero equations for $p_j\iota_i$. [L1, L2, given]

1.2 Conversely, assume the displayed equations hold. For every $i,j$, the definition of $c$ and the assumed equations give $p_jc\iota_i=p_j\iota_i$. Therefore $c\iota_i=\iota_i$ by the product universal property. Since the $\iota_i$ form a coproduct, $c=1_B$. The supplied structures therefore form the normalized biproduct diagram of [[def-biproduct]]. [L1, L2]

2.1 Steps 1.1 and 1.2 prove the equivalence. No addition on hom-sets was used anywhere; only the given zero morphisms and the product-coproduct universal properties entered. [step 1.1, step 1.2, given] ∎
