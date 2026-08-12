---
id: cor-yoneda-preserves-and-reflects-small-limits
kind: corollary
title: "For a small category, the Yoneda functor preserves and reflects all existing small limits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-representable-functors-preserve-small-limits, thm-limits-and-colimits-in-functor-categories-are-computed-pointwise, prop-fully-faithful-functors-reflect-limits-and-colimits, def-yoneda-embedding, thm-yoneda-embedding-is-fully-faithful]
justified_by: []
aliases: []
landmark: true
proof_strategy: pointwise
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.5.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

For a small category $\mathcal C$, its Yoneda embedding
$y:\mathcal C\to[\mathcal C^{\mathrm{op}},\mathbf{Set}]$ preserves and
reflects every small limit that is defined in $\mathcal C$.

## Facts & Assumptions

**Given:** A small category $\mathcal C$ and a small diagram in it.

[F1] The Yoneda embedding sends $a$ to $\mathcal C(-,a)$
([[def-yoneda-embedding]]).

[L1] Covariant representable functors preserve small limits
([[thm-representable-functors-preserve-small-limits]]).

[L2] Limits in functor categories are computed pointwise
([[thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]]).

[L3] Fully faithful functors reflect limits
([[prop-fully-faithful-functors-reflect-limits-and-colimits]]).

[L4] The Yoneda embedding is fully faithful
([[thm-yoneda-embedding-is-fully-faithful]]).

## Proof

**Proof technique:** pointwise.

1.1 At $c\in\mathcal C$, evaluation of the Yoneda image of a limiting cone is its image under $\mathcal C(c,-)$ by [F1]. This is a limiting cone of sets by [L1]. [F1, L1]

2.1 Since every evaluation is limiting, [L2] says the Yoneda-image cone is a limit in the presheaf category. Thus Yoneda preserves the small limit. [L2, step 1.1]

3.1 By [L4], Yoneda is fully faithful, so [L3] makes it reflect every limit. The smallness of $\mathcal C$ ensures that the stated presheaf category and embedding are formed under the library convention. [L3, L4] ∎
