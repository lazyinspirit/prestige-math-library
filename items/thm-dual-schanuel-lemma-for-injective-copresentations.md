---
id: thm-dual-schanuel-lemma-for-injective-copresentations
kind: theorem
title: "The dual Schanuel lemma for injective copresentations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-schanuel-lemma-in-an-abelian-category, thm-the-opposite-of-an-abelian-category-is-abelian]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "The Stacks Project, Section 10.109: Rings of finite global dimension"
      url: "https://stacks.math.columbia.edu/tag/00O2"
pipeline_run: frontier-28
---
## Statement

If $$0\to A\to I\to C\to0\qquad\text{and}\qquad0\to A\to I'\to C'\to0$$ are short exact sequences with $I$ and $I'$ injective, then $$C\oplus I'\cong C'\oplus I.$$
## Facts & Assumptions

**Given:** Two injective copresentations of the same object $A$.

[L1] Schanuel's lemma holds in an abelian category ([[thm-schanuel-lemma-in-an-abelian-category]]).

[L2] The opposite of an abelian category is abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).
## Proof

**Proof technique:** direct.

1.1 By [L2], pass to the opposite abelian category. The two injective copresentations become projective presentations there, so [L1] applies. [L1, L2, construct]

2.1 Translating the resulting stable isomorphism back to the original category gives $$C\oplus I'\cong C'\oplus I,$$ which is the dual Schanuel statement. [step 1.1] ∎
