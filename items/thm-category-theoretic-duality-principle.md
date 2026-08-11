---
id: thm-category-theoretic-duality-principle
kind: theorem
title: "Every theorem about categories has a formal dual obtained by reversing morphisms and composition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-opposite-category]
justified_by: []
aliases: []
landmark: true
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

A formal theorem derivable solely from the category axioms has a formal dual:
reverse every morphism, reverse the order of every composite, and exchange each
defined notion with its opposite-category version.

## Facts & Assumptions

**Given:** A derivation in the formal language of categories.

[L1] Passing from $\mathcal C$ to $\mathcal C^{\mathrm{op}}$ reverses arrows and composition, preserves identities, and is involutive ([[def-opposite-category]]).

## Proof

**Proof technique:** direct.

1.1 Translate every typed arrow $f:A\to B$ to $f^{\mathrm{op}}:B\to A$, every $g\circ f$ to $f^{\mathrm{op}}\circ_{\mathrm{op}}g^{\mathrm{op}}$, and leave equality and logical connectives unchanged. [given, L1]

2.1 Under this translation, each category axiom becomes the corresponding category axiom in the opposite category, so every permitted inference in the original derivation remains a permitted inference after translation. [step 1.1, L1]

3.1 Translating the complete derivation therefore proves the translated conclusion; applying the translation twice returns the original theorem. [step 2.1, L1] ∎

