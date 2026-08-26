---
id: fs-the-yoneda-embedding-preserves-colimits
kind: false-statement
title: "FALSE: the Yoneda embedding preserves colimits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-yoneda-embedding, cor-yoneda-preserves-and-reflects-small-limits, def-initial-terminal-and-zero-object, thm-limits-and-colimits-in-functor-categories-are-computed-pointwise, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, Warning 6.2.14"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement refuted

That the Yoneda embedding
$y:\mathcal C\to[\mathcal C^{\mathrm{op}},\mathbf{Set}]$
([[def-yoneda-embedding]]) preserves colimits in general.

The true statement already on disk is the limit half:
[[cor-yoneda-preserves-and-reflects-small-limits]].

## Facts & Assumptions

**Given:** The terminal category $\mathbf 1$ with unique object $*$.

[F1] In the terminal category, the unique object is in particular initial ([[def-initial-terminal-and-zero-object]]).

[F2] Colimits in a functor category are computed pointwise, so an initial object in $[\mathbf 1^{\mathrm{op}},\mathbf{Set}]$ has the empty set at $*$ ([[thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]], [[prop-sets-and-functions-form-category-set]]).

[F3] The Yoneda embedding sends $*$ to the representable presheaf $\mathbf 1(-,*)$ ([[def-yoneda-embedding]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1], the object $*$ is a colimit of the empty diagram in $\mathbf 1$. If the Yoneda embedding preserved colimits, then $y(*)$ would be an initial object of the presheaf category on $\mathbf 1$. [F1, assume-hyp]

1.2 But by [F3], the presheaf $y(*)$ takes the value $\mathbf 1(*,*)$, which is the singleton set $\{1_*\}$. By [F2], an initial presheaf has value $\varnothing$ at $*$. Therefore $y(*)$ is not initial. [F2, F3]

2.1 So the Yoneda embedding does not preserve colimits in general. The published limit-preservation theorem is not contradicted, because it is about limits, not colimits. [step 1.1, step 1.2] ∎
