---
id: cor-completeness-and-cocompleteness-criteria
kind: corollary
title: "A category is complete exactly when it has all small products and equalizers, and cocomplete exactly when it has all small coproducts and coequalizers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-small-limits-from-products-and-equalizers, thm-small-colimits-from-coproducts-and-coequalizers, def-small-finite-and-large-limits-completeness-and-cocompleteness]
justified_by: []
aliases: []
landmark: true
proof_strategy: biconditional
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.5.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

A category is complete if and only if it has products indexed by every set and
has equalizers of all parallel pairs. Dually, it is cocomplete if and only if
it has all small coproducts and all coequalizers.

## Facts & Assumptions

**Given:** A category $\mathcal C$.

[L1] Existing object-indexed products and equalizers construct the limit of
every small diagram ([[thm-small-limits-from-products-and-equalizers]]).

[L2] Existing object-indexed coproducts and coequalizers construct the colimit
of every small diagram ([[thm-small-colimits-from-coproducts-and-coequalizers]]).

[F1] Complete means having all small limits and cocomplete means having all
small colimits ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

## Proof

**Proof technique:** biconditional.

1.1 If $\mathcal C$ is complete, specialize [F1] to every small discrete category and to the finite parallel-pair category. These limits are all set-indexed products, including the empty product, and all equalizers. [F1]

1.2 Conversely, if those products and equalizers exist, [L1] constructs a limit for every small diagram, so [F1] says that $\mathcal C$ is complete. [L1, F1]

1.3 If $\mathcal C$ is cocomplete, specialization gives all set-indexed coproducts, including the empty one, and all coequalizers. Conversely those colimits construct every small colimit by [L2]. [L2, F1]

2.1 Steps 1.1 and 1.2 prove both directions of the completeness equivalence; step 1.3 proves both directions of its cocomplete dual. [step 1.1, step 1.2, step 1.3] ∎
