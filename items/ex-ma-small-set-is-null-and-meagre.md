---
id: ex-ma-small-set-is-null-and-meagre
kind: example
title: A small set of reals is both null and meagre under MA
status: published
origin: pipeline
deps: [thm-ma-small-unions-of-meagre-sets, thm-ma-small-unions-of-null-sets]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Kunen, Set Theory, consequences of Martin's Axiom", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Statement

Under MA, if $X$ is a set of reals with $|X|<2^{\aleph_0}$, then $X$ is both Lebesgue null and meagre, though these notions are independent for arbitrary sets.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-ma-small-unions-of-meagre-sets]] handles small unions of meagre sets.

[F2] [[thm-ma-small-unions-of-null-sets]] handles small unions of null sets.

## Proof

1.1 Write $X=\bigcup_{x\in X}\{x\}$. Every singleton is closed nowhere dense and has Lebesgue measure zero. [F1, F2]

2.1 Since the index family has size below the continuum, F1 makes its union meagre and F2 makes it null. The two conclusions are proved separately; neither is inferred from the other. [F1, F2, step 1.1] ∎
