---
id: thm-the-diagram-lemmas-hold-in-the-opposite-category
kind: theorem
title: "The diagram lemmas hold in the opposite category"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-opposite-of-an-abelian-category-is-abelian,
       thm-snake-lemma-in-an-abelian-category,
       thm-four-lemma-in-an-abelian-category,
       thm-sharp-five-lemma-in-an-abelian-category,
       thm-nine-lemma-in-an-abelian-category,
       thm-sharp-nine-lemma]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

If $\mathcal A$ is abelian, then every diagram lemma proved on this page
remains valid in $\mathcal A^{\mathrm{op}}$, and each dual statement is one of
the named lemmas on the same page.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$.

[L1] The opposite of an abelian category is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L2] The snake, four, sharp five, nine, and sharp nine lemmas have already been
proved in an arbitrary abelian category
([[thm-snake-lemma-in-an-abelian-category]],
[[thm-four-lemma-in-an-abelian-category]],
[[thm-sharp-five-lemma-in-an-abelian-category]],
[[thm-nine-lemma-in-an-abelian-category]],
[[thm-sharp-nine-lemma]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the opposite category $\mathcal A^{\mathrm{op}}$ is abelian, so each theorem listed in [L2] applies there as stated. [L1, L2, given]

2.1 Interpreting those statements back in $\mathcal A$ swaps kernels with cokernels, monic with epic, pullbacks with pushouts, and top-row exactness with bottom-row exactness. Those are exactly the dual formulations already named on this page. [L1, L2, step 1.1]

3.1 Therefore every diagram lemma on this page is closed under passage to the opposite category. [step 2.1] ∎
