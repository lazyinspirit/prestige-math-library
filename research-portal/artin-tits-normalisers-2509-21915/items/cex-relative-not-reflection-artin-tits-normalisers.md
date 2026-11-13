---
id: cex-relative-not-reflection-artin-tits-normalisers
kind: counterexample
title: A relative arrangement need not be a reflection arrangement
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-d4-example-data-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - def-hyperplane-arrangement-artin-tits-normalisers
  - ex-d4-restricted-arrangement-artin-tits-normalisers
  - prop-rank-three-reflection-counts-artin-tits-normalisers
dependency_roles:
  def-d4-example-data-artin-tits-normalisers: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  def-hyperplane-arrangement-artin-tits-normalisers: mathematical-premise
  ex-d4-restricted-arrangement-artin-tits-normalisers: mathematical-premise
  prop-rank-three-reflection-counts-artin-tits-normalisers: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 27–28, §7.1 and paragraph following Figure 1
      statement: For the D4 example with J={2}, the relative arrangement is
        irreducible with seven hyperplanes and is not a reflection arrangement;
        the article cites the counts 6, 9 and 15 for irreducible
        three-dimensional finite reflection arrangements.
      hypotheses: The D4 diagram has central vertex 2, and the relative arrangement
        uses the article's geometric representation and relative-cone
        conventions.
      reading_limits: The frozen article text at §7.1 and the paragraph following
        Figure 1 was read for attribution. The argument below uses the completed
        mathematical suppliers and a local irreducibility calculation, not the
        article's assertion as a premise.
dependency_level: 10
---

## Statement refuted

The relative arrangement of a Coxeter system need not be a finite real reflection arrangement. Specifically, for the $D_4$ diagram with central vertex $2$ and $J=\{2\}$, the relative arrangement is three-dimensional and irreducible, with seven hyperplanes. An irreducible finite real reflection arrangement in dimension three has six, nine or fifteen hyperplanes, corresponding to types $A_3$, $B_3$ and $H_3$ respectively.

## Statement references

[[def-d4-example-data-artin-tits-normalisers]]

[[def-relative-cone-artin-tits-normalisers]]

[[def-hyperplane-arrangement-artin-tits-normalisers]]

[[ex-d4-restricted-arrangement-artin-tits-normalisers]]

[[prop-rank-three-reflection-counts-artin-tits-normalisers]]

## Facts & Assumptions

[F1] In the specified $D_4$ example, the relative cone is the three-dimensional space $E=\Theta_J$, and in coordinates $x(f)=f(\alpha_1)$, $y(f)=f(\alpha_3)$ and $z(f)=f(\alpha_4)$ its seven distinct relative hyperplanes are the kernels of $x$, $y$, $z$, $x+y$, $x+z$, $y+z$ and $x+y+z$. [[ex-d4-restricted-arrangement-artin-tits-normalisers]]

[F2] The relative arrangement consists of the distinct nontrivial restrictions of root hyperplanes to $\Theta_J$; the $D_4$ diagram and its root-space notation are as in the specified data. [[def-relative-cone-artin-tits-normalisers]] [[def-d4-example-data-artin-tits-normalisers]]

[F3] A finite real reflection arrangement is the full arrangement of reflecting hyperplanes of a finite linear reflection group. An arrangement is irreducible if it has no product decomposition over a direct sum of two nonzero spaces, even if one factor has no hyperplanes. A product decomposition $E=E_1\oplus E_2$ requires every hyperplane to be either $H_1\oplus E_2$ or $E_1\oplus H_2$, with $H_i$ a hyperplane of $E_i$. [[def-hyperplane-arrangement-artin-tits-normalisers]] [[prop-rank-three-reflection-counts-artin-tits-normalisers]]

[F4] An irreducible finite real reflection arrangement in dimension three has $6$, $9$ or $15$ hyperplanes, respectively for types $A_3$, $B_3$ and $H_3$. [[prop-rank-three-reflection-counts-artin-tits-normalisers]]

## Counterexample



**Proof technique:** direct.

**Given:** The $D_4$ system with central vertex $2$ and $J=\{2\}$, with its relative arrangement as in [F1] and [F2].

**Goal:** Prove that this arrangement is irreducible and cannot be a finite real reflection arrangement.

1.1 Suppose the arrangement has a product decomposition $E=E_1\oplus E_2$ with both summands nonzero. The dual decomposes as $E^*=E_1^*\oplus E_2^*$, where each summand is extended by zero on the other space. By the product condition, a nonzero defining form for each hyperplane belongs to one of these two dual summands: forms with the same kernel are nonzero scalar multiples. In particular $x$, $y$ and $z$ each lie in one summand. Since $x+y$ also lies in one summand, uniqueness of the two components in the direct sum forces $x$ and $y$ to lie in the same summand. The same argument with $x+z$ puts $z$ there too. But $x,y,z$ form a basis of $E^*$, so the other dual summand is zero, contrary to both $E_1$ and $E_2$ being nonzero. Thus the arrangement is irreducible. [F1, F3, given]

2.1 By [F1] the arrangement has seven hyperplanes in dimension three. If it were a finite real reflection arrangement, its irreducibility from 1.1 would make [F4] applicable, requiring its number of hyperplanes to be $6$, $9$ or $15$. Since $7$ is none of these, it is not a finite real reflection arrangement. This example therefore refutes the asserted universal property. [F1, F4, step 1.1] ∎

## Source notes

The article reference attributes the example and the stated reflection counts. The displayed argument uses the mathematical suppliers and proves irreducibility locally.
