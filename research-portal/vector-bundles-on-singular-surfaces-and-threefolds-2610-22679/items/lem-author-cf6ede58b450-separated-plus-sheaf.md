---
id: lem-author-cf6ede58b450-separated-plus-sheaf
kind: lemma
title: The plus construction turns a separated presheaf into a sheaf
status: published
domain: mathematics
deps:
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-cf6ede58b450-cover-intersections
  - lem-author-cf6ede58b450-plus-presheaf
  - lem-author-cf6ede58b450-plus-separated
dependency_roles:
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  lem-author-cf6ede58b450-cover-intersections: mathematical-premise
  lem-author-cf6ede58b450-plus-presheaf: mathematical-premise
  lem-author-cf6ede58b450-plus-separated: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
formulation_deps:
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-cf6ede58b450-plus-presheaf
  - lem-author-cf6ede58b450-plus-separated
argument_deps:
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-cf6ede58b450-cover-intersections
  - lem-author-cf6ede58b450-plus-presheaf
  - lem-author-cf6ede58b450-plus-separated
---

## Statement
If F is a separated set-valued presheaf on a small site, then F+ is a sheaf.

## Facts & Assumptions
[F1] Matching families, separated presheaves and sheaves are defined in [[def-author-cf6ede58b450-site-plus-data]].

[F2] Cover intersections cover by [[lem-author-cf6ede58b450-cover-intersections]]; the plus construction is a presheaf by [[lem-author-cf6ede58b450-plus-presheaf]] and is separated by [[lem-author-cf6ede58b450-plus-separated]].

## Proof
**Given:** A separated presheaf F and a matching family $x_f$ in F+(dom f) on a covering sieve R of X.

**Goal:** Construct the unique section of F+(X) restricting to that family.

1.1 Let S consist of arrows h: Z → X for which there are f: Y → X in R, g: Z → Y with h = fg, and a representative (T,s) of $x_f$ with g in T. Assign h the value $s_g$ in F(Z). This does not depend on the factorization or representative: the matching condition for the $x_f$ and the definition of equality in F+ make any two proposed values locally equal after a covering pullback, and separatedness of F makes them equal. Restrictions preserve the assigned value, so these values form a matching family of F on the sieve S. [F1, F2, given]

2.1 For each f in R, a representative sieve T of $x_f$ is contained in $f^*S$, so $f^*S$ covers. Transitivity makes S covering. Its matching family determines a class x in F+(X). For each f in R, the restriction of x and $x_f$ agree on the covering sieve T, so x restricts to $x_f$. Separatedness of F+ gives uniqueness. Thus F+ is a sheaf. [F1, F2, step 1.1] ∎
