---
id: fs-the-free-cocompletion-theorem-holds-for-a-large-source-category
kind: false-statement
title: "FALSE: the free-cocompletion theorem holds for an arbitrary large locally small source category with no change in meaning"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion, prop-size-of-functor-categories, def-small-locally-small-and-large-category, def-yoneda-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 6.5.11 and surrounding discussion"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement refuted

That the statement of
[[thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion]]
remains true with no change in meaning when the source category $\mathcal C$ is
merely locally small and may be large.

Under this library's formation rules the smallness hypothesis is not cosmetic:
without it, the presheaf category is not a category object on disk, and the
Yoneda functor is not a functor into one.

## Facts & Assumptions

**Given:** The large locally small category $\mathbf{Set}$.

[L1] The free-cocompletion theorem is stated for a small source category ([[thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion]]).

[F1] A functor category $[\mathcal C,\mathcal D]$ is formed only when the source $\mathcal C$ is small; for an arbitrary large locally small $\mathcal C$, the notation is only metatheoretic shorthand ([[def-yoneda-embedding]], [[prop-size-of-functor-categories]]).

[F2] A category may be locally small without being small ([[def-small-locally-small-and-large-category]]).

## Refutation

**Proof technique:** direct.

1.1 The category $\mathbf{Set}$ is locally small and large, so it satisfies the weakened hypothesis of the false claim by [F2]. [F2, given]

1.2 But [F1] says that for such a large source the notation $[\mathbf{Set}^{\mathrm{op}},\mathbf{Set}]$ is not formed as a category in this library, and [L1] is a theorem about that presheaf category and the Yoneda functor landing in it. So the unchanged large-source sentence is not even a legal instance of the theorem on disk. [L1, F1]

2.1 Therefore the false claim fails under the house schema: the smallness hypothesis in [L1] is mathematically active here, not removable decoration. [step 1.1, step 1.2] ∎
