---
id: thm-the-opposite-of-an-abelian-category-is-abelian
kind: theorem
title: "The opposite of an abelian category is abelian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abelian-category, cor-additive-categories-are-closed-under-passage-to-the-opposite, def-opposite-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.2"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

If $\mathcal A$ is an abelian category, then the opposite category
$\mathcal A^{\mathrm{op}}$ is also abelian.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$.

[L1] An abelian category is additive and every morphism in it has a kernel and
a cokernel ([[def-abelian-category]]).

[L2] The opposite of an additive category is additive
([[cor-additive-categories-are-closed-under-passage-to-the-opposite]]).

[L3] Passing to the opposite reverses every morphism while keeping the same
objects ([[def-opposite-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the opposite category is additive. Under [L3], a kernel in $\mathcal A$ becomes a cokernel in $\mathcal A^{\mathrm{op}}$, and a cokernel becomes a kernel, so every morphism of $\mathcal A^{\mathrm{op}}$ also has both. [L1, L2, L3]

2.1 The image of $f^{\mathrm{op}}$ in the opposite category is the opposite of the coimage of $f$, and the coimage of $f^{\mathrm{op}}$ is the opposite of the image of $f$. Therefore the canonical comparison for $f^{\mathrm{op}}$ is the opposite of the canonical comparison for $f$, which is an isomorphism by [L1]. So $\mathcal A^{\mathrm{op}}$ satisfies the same AB2 clause and is abelian. [L1, L3, step 1.1] ∎
