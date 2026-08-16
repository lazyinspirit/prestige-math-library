---
id: cor-a-reflective-subcategory-of-a-complete-category-is-complete
kind: corollary
title: "A reflective subcategory of a complete category is complete"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-reflective-inclusion-creates-all-limits, def-small-finite-and-large-limits-completeness-and-cocompleteness]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, corollary 4.5.15"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

If $\mathcal A$ is a reflective full subcategory of a complete category $\mathcal C$, then $\mathcal A$ is complete: every small diagram in $\mathcal A$ has a limit.

## Facts & Assumptions

**Given:** A reflective full inclusion $I:\mathcal A\to\mathcal C$ and a complete category $\mathcal C$.

[L1] A reflective inclusion creates every ambient limit in the ordinary isomorphism-invariant sense ([[thm-a-reflective-inclusion-creates-all-limits]]).

[L2] A category is complete when every small diagram in it has a limit, including the empty diagram ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

## Proof

**Proof technique:** direct.

1.1 Let $D$ be any small diagram in $\mathcal A$. Completeness of $\mathcal C$ gives a limit of $ID$. [given, L2]

2.1 By [L1], the inclusion creates from that ambient limit a limit of $D$ in $\mathcal A$. This applies to every small $D$, including the empty diagram, so [L2] proves that $\mathcal A$ is complete. [step 1.1, L1, L2] ∎
