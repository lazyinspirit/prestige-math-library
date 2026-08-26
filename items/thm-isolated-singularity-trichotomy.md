---
id: thm-isolated-singularity-trichotomy
kind: theorem
title: "Every isolated singularity is removable, a pole, or essential"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-singularity-types, thm-laurent-expansion-annulus, thm-removable-singularity-characterizations, thm-pole-characterizations]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
    - title: "David Greenfield, Rutgers Math 403 diary"
      url: "https://sites.math.rutgers.edu/~greenfie/mill_courses/math403/diary2.html"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on a punctured disc $0<|z-a|<R$. Then exactly one of the
following holds:

1. $a$ is a removable singularity of $f$;
2. $a$ is a pole of $f$;
3. $a$ is an essential singularity of $f$.

Equivalently, if

$$f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n,$$

then the three cases are: no negative coefficients, finitely many negative
coefficients but not all zero, or infinitely many negative coefficients.

## Facts & Assumptions

**Given:** A function $f$ holomorphic on $0<|z-a|<R$ and its Laurent expansion there.

[L1] A removable singularity is exactly the case of zero principal part ([[thm-removable-singularity-characterizations]]).

[L2] A pole is exactly the case of a finite nonzero principal part ([[thm-pole-characterizations]]).

[L3] An essential singularity is, by definition, an isolated singularity that is neither removable nor a pole ([[def-isolated-singularity-types]]).

[L4] Every holomorphic function on a punctured disc has a Laurent expansion there ([[thm-laurent-expansion-annulus]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], the Laurent expansion exists, and its set of negative coefficients is either empty, finite nonempty, or infinite. [given, L4]

2.1 If there are no negative coefficients, the principal part is zero, so [L1] makes the singularity removable. [step 1.1, L1]

2.2 If there are finitely many negative coefficients and at least one is nonzero, the principal part is finite and nonzero, so [L2] makes the singularity a pole. [step 1.1, L2]

3.1 If there are infinitely many negative coefficients, the singularity is neither removable nor a pole by steps 2.1 and 2.2, so [L3] makes it essential. [step 1.1, step 2.1, step 2.2, L3]

4.1 The three coefficient cases are mutually exclusive and exhaustive, and steps 2.1 through 3.1 identify them with the three singularity types. [step 1.1, step 2.1, step 2.2, step 3.1] ∎
