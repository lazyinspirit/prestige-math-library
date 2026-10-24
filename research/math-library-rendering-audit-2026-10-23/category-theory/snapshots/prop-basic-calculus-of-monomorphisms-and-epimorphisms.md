---
id: prop-basic-calculus-of-monomorphisms-and-epimorphisms
kind: proposition
title: "Identities and composites of monomorphisms or epimorphisms retain cancellation; split monomorphisms are monic and split epimorphisms are epic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monomorphism-and-epimorphism, def-split-monomorphism-and-split-epimorphism, thm-category-theoretic-duality-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Identity morphisms are monic and epic; composites of monomorphisms are monic,
composites of epimorphisms are epic; every split monomorphism is monic, and every
split epimorphism is epic.

## Facts & Assumptions

**Given:** Composable morphisms in a category.

[L1] Monomorphisms and epimorphisms are defined by left and right cancellation ([[def-monomorphism-and-epimorphism]]).

[L2] A split monomorphism has a left inverse and a split epimorphism has a right inverse ([[def-split-monomorphism-and-split-epimorphism]]); the two halves are dual by [[thm-category-theoretic-duality-principle]].

## Proof

**Proof technique:** direct.

1.1 Identities cancel trivially; if $f$ and $g$ are monic and $(g\circ f)u=(g\circ f)v$, cancellation by $g$ and then by $f$ gives $u=v$, so composites of monomorphisms are monic. [given, L1]

2.1 Applying the dual argument of [L2] proves that identities and composites of epimorphisms are epic. [step 1.1, L1, L2]

3.1 If $r\circ f=1$, then $fu=fv$ implies $u=r fu=r fv=v$, so a split monomorphism is monic; dually, $f\circ s=1$ makes a split epimorphism epic. [step 2.1, L1, L2] ∎

