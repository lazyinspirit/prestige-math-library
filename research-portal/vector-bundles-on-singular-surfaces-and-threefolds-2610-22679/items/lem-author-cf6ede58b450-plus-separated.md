---
id: lem-author-cf6ede58b450-plus-separated
kind: lemma
title: The plus presheaf is separated
status: published
domain: mathematics
deps:
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-cf6ede58b450-cover-intersections
  - lem-author-cf6ede58b450-plus-presheaf
dependency_roles:
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  lem-author-cf6ede58b450-cover-intersections: mathematical-premise
  lem-author-cf6ede58b450-plus-presheaf: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
formulation_deps:
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-cf6ede58b450-plus-presheaf
argument_deps:
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-cf6ede58b450-cover-intersections
  - lem-author-cf6ede58b450-plus-presheaf
---

## Statement
For every set-valued presheaf F on a small site, F+ is separated. Moreover, if two sections of F agree after restriction along every arrow of a covering sieve, their images in F+ agree.

## Facts & Assumptions
[F1] The site, matching families and separatedness are defined in [[def-author-cf6ede58b450-site-plus-data]].

[F2] Cover intersections cover by [[lem-author-cf6ede58b450-cover-intersections]], and F+ is a presheaf by [[lem-author-cf6ede58b450-plus-presheaf]].

## Proof
**Given:** A covering sieve R on X and two elements of F+(X) with equal restrictions along every arrow of R.

**Goal:** Prove their equality and the stated property of η_F.

1.1 Represent the two elements by matching families s and t on covering sieves S and T. For each f in R, equality of the restricted classes means that they agree on a covering sieve of arrows into dom f after pulling back S and T. Let E be the sieve of arrows h in S ∩ T for which $s_h=t_h$. For every f in R, $f^*E$ contains such a covering sieve and therefore covers. Transitivity shows that E covers X. [F1, F2, given]

2.1 The representatives agree on E, so their classes agree. Hence F+ is separated. If two sections of F agree on R, their restrictions on the maximal sieve agree on R, so their η_F images agree by the definition of the equivalence relation. [F1, step 1.1] ∎
