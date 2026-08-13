---
id: cex-a-full-subcategory-limit-can-differ-from-ambient-limit
kind: counterexample
title: "A limit in a full subcategory need not be the ambient limit"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-products-and-coproducts, def-full-faithful-and-essentially-surjective-functor, prop-preorders-as-categories-and-monotone-maps-as-functors, lem-canonical-comparison-characterises-limit-preservation]
justified_by: []
aliases: []
landmark: false
proof_strategy: finite-poset-counterexample
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: frontier-12
---

## Statement refuted

The inclusion of every full subcategory preserves all limits that exist in the
subcategory and the ambient category.

## Facts & Assumptions

**Given:** The poset $P=\{0,q,m,a,b\}$ with
$0<q<m<a$, $0<q<m<b$, and $a,b$ incomparable, and its full subposet
$Q=\{0,q,a,b\}$.

[F1] Products represent common lower bounds universally
([[def-products-and-coproducts]]).

[F2] A full functor is surjective on every hom-set map
([[def-full-faithful-and-essentially-surjective-functor]]).

[F3] Posets form categories with an arrow exactly for an order relation
([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L1] Preservation is detected by the canonical comparison to the ambient
chosen limit ([[lem-canonical-comparison-characterises-limit-preservation]]).

## Counterexample

**Proof technique:** finite posets.

1.1 The inclusion $i:Q\hookrightarrow P$ is full: for retained objects, an arrow exists in $Q$ exactly when it exists in $P$. [F2, F3]

1.2 In $P$, the greatest common lower bound of $a,b$ is $m$, so [F1] makes $m=a\times b$. In $Q$, the object $m$ is absent and the greatest common lower bound of $a,b$ is $q$, so $q$ is their product there. [F1, F3]

2.1 The image under $i$ of the product cone in $Q$ has apex $q$, whereas the ambient product has apex $m$. Its canonical comparison is $q\to m$, not an isomorphism because $m\nleq q$. By [L1], the full inclusion does not preserve this product, refuting the statement. [L1, step 1.1, step 1.2] ∎
