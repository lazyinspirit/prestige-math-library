---
id: prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject
kind: proposition
title: "Extension classes are contravariant in the quotient and covariant in the subobject"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-pullback-and-pushout-descend-to-extension-classes, thm-baer-sum-makes-extension-classes-an-abelian-group]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

For fixed extension classes, pullback in the quotient object and pushout in the subobject define additive maps; thus $\operatorname{YExt}^1(-,-)$ is contravariant in its first and covariant in its second variable.

## Facts & Assumptions

**Given:** Morphisms $a:M'\to M$ and $b:N\to N'$.

## Proof

**Proof technique:** direct.

1.1 Pullback along $a$ and pushout along $b$ are well-defined on equivalence classes by [[lem-pullback-and-pushout-descend-to-extension-classes]]. Their universal properties make their composites agree with pullback and pushout along composite maps. [given, construct]

2.1 Both constructions commute with the direct-sum, diagonal, and codiagonal steps defining Baer addition. Hence they are homomorphisms for the group structure of [[thm-baer-sum-makes-extension-classes-an-abelian-group]], with the stated variance. [step 1.1, algebra] ∎
