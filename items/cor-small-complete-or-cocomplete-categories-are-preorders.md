---
id: cor-small-complete-or-cocomplete-categories-are-preorders
kind: corollary
title: "Assuming Choice, every small complete category and every small cocomplete category is a preorder"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cardinality-sized-products-or-coproducts-force-a-preorder, def-small-finite-and-large-limits-completeness-and-cocompleteness]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct-corollary
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Corollary after Proposition 3.7.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Assume Choice. Every small complete category is a preorder, and every small
cocomplete category is a preorder.

## Facts & Assumptions

**Given:** A small category $\mathcal C$ that is complete or cocomplete.

[L1] If a small category has constant products or coproducts indexed by the
cardinality of its morphism set, it is a preorder
([[thm-cardinality-sized-products-or-coproducts-force-a-preorder]]).

[F1] Complete categories have every small limit, and cocomplete categories
have every small colimit
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

## Proof

**Proof technique:** direct corollary.

1.1 Let $\kappa=|\operatorname{Mor}(\mathcal C)|$. Since $\mathcal C$ is small, a discrete category on the set $\kappa$ is a small indexing category. [given]

2.1 If $\mathcal C$ is complete, [F1] supplies the product of every constant $\kappa$-family. The product clause of [L1] makes $\mathcal C$ a preorder. [F1, L1, step 1.1]

3.1 If $\mathcal C$ is cocomplete, [F1] instead supplies every constant $\kappa$-coproduct, and the coproduct clause of [L1] gives the same conclusion. [F1, L1, step 1.1] ∎
