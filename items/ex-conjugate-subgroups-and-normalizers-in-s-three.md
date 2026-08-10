---
id: ex-conjugate-subgroups-and-normalizers-in-s-three
kind: example
title: "The three subgroups of order $2$ in $S_3$ are conjugate and each is self-normalizing"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-conjugate-subgroups-are-counted-by-the-normalizer, def-normalizer-of-a-subgroup, def-symmetric-group, lem-symmetric-group-is-a-group, ex-class-equation-of-s-three]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets, Example 3.111"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Example

The subgroups

$$\langle(1\,2)\rangle,\qquad\langle(1\,3)\rangle,\qquad\langle(2\,3)\rangle$$

are the three subgroups of order $2$ in $S_3$. They form one conjugacy orbit,
and each equals its own normalizer.

## Facts & Assumptions

**Given:** The symmetric group $S_3$ and $H=\langle(1\,2)\rangle$.

[L1] The conjugates of $H$ are counted by $[S_3:N_{S_3}(H)]$ ([[thm-conjugate-subgroups-are-counted-by-the-normalizer]]).

[L2] The normalizer consists of the elements preserving $H$ under conjugation ([[def-normalizer-of-a-subgroup]]).

[L3] The symmetric group consists of all permutations ([[def-symmetric-group]]).

[L4] The symmetric group is a group under composition ([[lem-symmetric-group-is-a-group]]).

[L5] The identity, the three transpositions, and the two $3$-cycles exhaust the six elements of $S_3$ ([[ex-class-equation-of-s-three]]).

## Verification

**Proof technique:** direct.

1.1 Each transposition generates a two-element subgroup, and these are distinct. Every element of order $2$ in $S_3$ is a transposition, so these are all the subgroups of order $2$. [L3, L4, algebra]

2.1 Conjugation relabels the two moved points, so the three subgroups in step 1.1 are conjugate. [step 1.1, L2, L3]

3.1 By [L1], $[S_3:N_{S_3}(H)]=3$. Since $|S_3|=6$ by [L5], the normalizer has order $2$; it contains $H$, so it equals $H$. The same holds for each conjugate subgroup. [step 1.1, step 2.1, L1, L2, L5, algebra] ∎
