---
id: thm-levine-algebraic-concordance-classification
kind: theorem
title: "Classification of rational and integral algebraic concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-integral-witt-and-seifert-isometric-structures
  - lem-invertible-seifert-matrix-gives-rational-isometric-structure
  - lem-slice-disk-induces-seifert-metabolizer
  - lem-seifert-matrices-of-a-knot-are-s-equivalent
  - thm-levine-algebraic-concordance-surjection-proof
  - thm-seifert-matrix-presents-knot-alexander-module
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - def-axiom-of-choice
  - lem-isotropic-reduction-of-rational-isometric-structures
  - thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§3, printed pp. 325–326: rational/integral distinction and classification attribution"
    - title: "Neal W. Stoltzfus, Unraveling the Integral Knot Concordance Group"
      url: "https://doi.org/10.1090/memo/0192"
      locator: "Memoirs of the American Mathematical Society 12(192), 1977; full classification and localization sequence"
    - title: "Charles Livingston and Allison N. Miller, The concordance genus of knots, II"
      url: "https://msp.org/agt/2009/9-1/agt-v9-n1-p06-p.pdf"
      locator: "§2, printed pp. 169–171: integral group, rationalization, and injection"
---

## Statement

Assume the full Axiom of Choice for knot Seifert pairings. Let $G_{\mathbb Q}$ be the rational Witt group of finite-dimensional even-dimensional nonsingular symmetric rational forms equipped with an invertible isometry $T$ for which $I-T$ is invertible, modulo metabolic $T$-invariant subspaces, and let $G_{\mathbb Z}$ be the integral algebraic concordance group of Seifert lattices. The rational algebraic concordance classification due to Levine and the integral classification completed by Stoltzfus identify each of these abelian groups, as an abstract group, with
$$
\mathbb Z^{(\mathbb N)}\oplus(\mathbb Z/2\mathbb Z)^{(\mathbb N)}\oplus(\mathbb Z/4\mathbb Z)^{(\mathbb N)}.
$$
Here $A^{(\mathbb N)}$ denotes the direct sum of countably infinitely many copies of the abelian group $A$; the statement does not identify Levine's rational classification with the distinct integral group or claim that their defining objects are the same.

## Statement references

[[def-integral-witt-and-seifert-isometric-structures|The definitions of the integral and rational Witt groups]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The integral metabolic relation]]

## Facts & Assumptions

**Given:** Full AC for knot-derived forms and the two algebraic concordance groups defined in the statement.

[A1] Full AC is the choice-function axiom used by the knot Seifert-pairing convention. [[def-axiom-of-choice]]

[F1] The integral group is defined from integral Seifert lattices and metabolic relations; the rational group uses symmetric rational isometric structures with $I-T$ invertible. [[def-metabolic-seifert-form-and-algebraic-knot-concordance]], [[def-integral-witt-and-seifert-isometric-structures]]

[F2] For a nonsingular Seifert matrix $V$, the pair $(V+V^T,V^{-1}V^T)$ satisfies the rational isometric-structure axioms. [[lem-invertible-seifert-matrix-gives-rational-isometric-structure]]

[F3] The Alexander module and its order are represented from a Seifert matrix by the positive-meridian convention, with determinant $\det(V-tV^T)$ up to a Laurent unit. [[thm-seifert-matrix-presents-knot-alexander-module]], [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

[F4] Rational isometric Witt classes split into the direct sum of self-reciprocal primary components; distinct reciprocal factors are metabolic. [[thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition]]

[F5] Isotropic reduction preserves both the Witt class and metabolicity, and a rational isometric structure has zero class exactly when it is metabolic. [[lem-isotropic-reduction-of-rational-isometric-structures]]

## Proof

1.1 Under the full Axiom of Choice [A1], the knot-derived Seifert pairings fit the stated integral conventions. The item definitions distinguish $G_{\mathbb Z}$, built from integral Seifert lattices, from $G_{\mathbb Q}$, built from rational isometric structures; each classification therefore requires its own proof. [A1, F1, given, construct]

2.1 The invertible-matrix calculation [F2] verifies that a nonsingular Seifert matrix yields an admissible rational structure, and [F3] fixes the Alexander-module polynomial convention used in the arithmetic decomposition. The primary decomposition [F4] is now proved locally: non-self-reciprocal factors occur in metabolic pairs and the remaining primary projections are mutually inverse to their direct-sum inclusions. The reduction lemma [F5] also proves that invariant isotropic quotients preserve the Witt class and detects its zero class by an actual metabolizer. These facts do not yet prove integral rationalization, comparison of primary structures with number-field hermitian forms, the arithmetic Witt computations, the integral localization sequence, or the coupling calculation. [F2, F3, F4, F5, step 1.1, algebra]

3.1 No complete local proof of the two asserted abstract group isomorphisms is available in this batch. The exact remaining arguments are the primary-to-number-field hermitian comparison and arithmetic Witt classification, followed by the integral rationalization and Stoltzfus localization and coupling analysis. The full theorem is retained and escalated; the source attributions in the bibliography are not used as substitutes for these proofs. [F1, F2, F3, step 2.1, construct] ∎

## Unresolved proof obligation

The principal classification proof is substantial and remains incomplete. Livingston's survey states the rational/integral distinction but leaves Levine's classification proof to its cited source; the 17-page Stoltzfus paper read for context explicitly refers the detailed integral computation to the 91-page memoir. The full memoir must be inspected and the remaining rational and integral arithmetic arguments written out or broken into proved A-page suppliers before this item can be ready. The reciprocal-primary decomposition and isotropic-reduction modules have now been proved in the local suppliers [F4]–[F5]; those elementary modules do not imply the displayed abstract group classification. The affected claim is the full displayed isomorphism for both $G_{\mathbb Q}$ and $G_{\mathbb Z}$.
