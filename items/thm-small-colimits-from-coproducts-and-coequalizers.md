---
id: thm-small-colimits-from-coproducts-and-coequalizers
kind: theorem
title: "Every small colimit can be constructed as a coequalizer between coproducts over the arrows and objects of the index category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-small-limits-from-products-and-equalizers, prop-limit-colimit-duality, def-products-and-coproducts, def-equalizers-and-coequalizers]
justified_by: []
aliases: []
landmark: true
proof_strategy: duality
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.5.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Let $D:\mathcal J\to\mathcal C$ be small. If the coproducts

$$R=\coprod_{u:j\to k}D(j),\qquad S=\coprod_jD(j)$$

and the coequalizer of $d,c:R\rightrightarrows S$, where on the $u$-summand
$d\iota_u=\iota_j$ and $c\iota_u=\iota_kD(u)$, exist, then that coequalizer is
a colimit of $D$.

## Facts & Assumptions

**Given:** The displayed coproducts and coequalizer.

[L1] The product-equalizer construction yields every small limit when its
constituent limits exist ([[thm-small-limits-from-products-and-equalizers]]).

[L2] Formal duality exchanges limits with colimits, products with coproducts,
and equalizers with coequalizers ([[prop-limit-colimit-duality]]).

[F1] Coproducts give unique maps out of families of summands
([[def-products-and-coproducts]]).

[F2] A coequalizer gives a unique factor for each arrow that equalizes its pair
([[def-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** duality.

1.1 Apply [L1] to $D^{\mathrm{op}}:\mathcal J^{\mathrm{op}}\to\mathcal C^{\mathrm{op}}$. By [L2], its object-indexed product becomes $S$, its arrow-indexed product becomes $R$, and the two coordinate maps become $d$ and $c$ with exactly the displayed summand equations. [L1, L2, F1]

2.1 The equalizer universal property in $\mathcal C^{\mathrm{op}}$ becomes the coequalizer property [F2] in $\mathcal C$. The limiting cone equations become $q\iota_j=q\iota_kD(u)$, and existence and uniqueness of mediating arrows both reverse to the colimit clauses. [L2, F2, step 1.1]

3.1 Thus the coequalizer is a colimit. When $\mathcal J$ is empty, both coproducts are initial and the construction returns the initial-object colimit, exactly dual to the boundary case in [L1]. [L1, L2, step 2.1] ∎
