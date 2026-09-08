---
id: thm-upward-lowenheim-skolem-with-choice
kind: theorem
title: "Upward Löwenheim–Skolem, including elementary extensions"
status: published
origin: pipeline
deps: [lem-elementary-diagram-embedding, thm-well-ordered-language-henkin-completeness, thm-downward-lowenheim-skolem-with-parameters, def-axiom-of-choice, cor-cardinal-absorption]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Weiss–D’Mello, Theorem 6 proof p21, Theorem 9(2) and Exercise 15 p25; full elementary-diagram extension argument supplied locally."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
proof_strategy: direct
---

## Statement

In ZFC, let $M$ be an infinite structure for a set signature $L$. For every infinite cardinal $\kappa\ge\max(|M|,|L|)$, $M$ has an elementary extension of size exactly $\kappa$, with literal inclusion after transport. Consequently a countable-language theory with an infinite model has models in every infinite cardinality.

## Facts & Assumptions

**Given:** The infinite structure $M$, the stated cardinal inequality, and AC.

[F1] A model of the elementary diagram of $M$ induces an elementary embedding of $M$, and this can be transported to literal inclusion. ([[lem-elementary-diagram-embedding]])

[F2] Under AC, a finitely satisfiable theory in a language of size at most infinite $\kappa$ has a model of size at most $\kappa$. ([[thm-well-ordered-language-henkin-completeness]])

[F3] An infinite structure in a language of size at most infinite $\lambda$ has an elementary substructure of size $\lambda$ when $\lambda\le|M|$. ([[thm-downward-lowenheim-skolem-with-parameters]])

[F4] The sum of finitely many sets of size at most infinite $\kappa$ has size at most $\kappa$. ([[cor-cardinal-absorption]])

[A1] AC is assumed, including for the general-language theorem and hulls. ([[def-axiom-of-choice]])

## Proof

1.1 Expand $L$ by one diagram name for each element of $M$ and by distinct fresh symbols $d_\alpha$ for $\alpha<\kappa$. Its size is at most $\kappa$ by the two given bounds and F4. Let $S$ be the elementary diagram together with all $d_\alpha\ne d_\beta$ for $\alpha\ne\beta<\kappa$. [F1, F4]

2.1 A finite subset of $S$ mentions finitely many of the $d$ symbols. The infinitude of $M$ permits interpreting them distinctly: after choosing fewer than their finite number of distinct elements, another exists because $M$ is not that finite set. Interpret diagram names by their named elements, and all other $d$ symbols by one fixed element of $M$. This expansion satisfies the finite subset, because all its diagram sentences hold and all its listed inequalities hold. No requirement says the new $d$ values avoid the old named elements. [F1, step 1.1]

3.1 F2 under A1 supplies $N\models S$ of size at most $\kappa$. The map $\alpha\mapsto d_\alpha^N$ is injective by the inequalities, so $|N|\ge\kappa$ and therefore $|N|=\kappa$. F1 gives an elementary embedding of $M$ into the $L$-reduct of $N$ and its transported copy as a literal elementary extension. The transport is a bijection, so size remains $\kappa$. [F1, F2, A1, step 1.1, step 2.1]

4.1 For an infinite model $M$ of a countable-language theory and any infinite cardinal $\lambda$, if $\lambda\ge|M|$ apply step 3.1 with $\kappa=\lambda$; the language bound holds because $|L|\le\aleph_0\le\lambda$. If $\lambda\le|M|$, apply F3 with empty parameter set. An elementary extension or substructure satisfies the same sentences as $M$, hence is a model of the theory. Equality of cardinals permits $M$ itself. This proves every infinite target size. [F3, A1, step 3.1] ∎
