---
id: thm-global-class-field-existence-number-field
kind: theorem
title: "Every open finite-index subgroup of a number-field idèle class group is a norm group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - thm-global-artin-reciprocity-and-norm-index
  - lem-number-field-open-idelic-subgroup-contains-norm-group
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "VI §6, Theorem 6.1, printed pp. 395–397"
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII §9, Theorem 9.1 and Lemma 9.4; Lemma 9.4 uses norm limitation"
verification: {}
---

## Statement

Assume the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC). Let $K$ be a number field and let $H$ be an open subgroup of finite index in $C_K=\mathbb A_K^\times/K^\times$. There is a finite abelian extension $L/K$ such that

$$H=N_{L/K}C_L.$$

The extension is unique inside a fixed separable closure, and inclusion of norm subgroups reverses inclusion of the corresponding fields.

## Statement references

[[thm-global-artin-reciprocity-and-norm-index]]

[[lem-number-field-open-idelic-subgroup-contains-norm-group]]

[Neukirch, *Algebraic Number Theory*, VI §6](https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf)

[Milne, *Class Field Theory*, VII §9](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC); a number field $K$ and an open finite-index subgroup $H\le C_K$.

[F1] Every open finite-index subgroup contains the norm subgroup of some finite abelian extension. [[lem-number-field-open-idelic-subgroup-contains-norm-group]]

[F2] For every finite abelian extension $E/K$, the Artin map induces $C_K/N_{E/K}C_E\cong\operatorname{Gal}(E/K)$. [[thm-global-artin-reciprocity-and-norm-index]]

[F3] For an intermediate field $L$ of $E/K$, norm compatibility identifies $N_{L/K}C_L$ with the preimage of $\operatorname{Gal}(E/L)$ under the Artin map for $E/K$. [[thm-global-artin-reciprocity-and-norm-index]]


[A1] AC, Countable Choice, and DC are inherited from the norm-cofinality and global reciprocity inputs [F1]–[F3] used in steps 1.1–3.1. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[lem-number-field-open-idelic-subgroup-contains-norm-group]] [[thm-global-artin-reciprocity-and-norm-index]]
## Proof

**Given:** The data above.

1.1 By [F1], choose a finite abelian extension $E/K$ with $N_{E/K}C_E\subseteq H$. Under [F2], the subgroup $H/N_{E/K}C_E$ of $C_K/N_{E/K}C_E$ corresponds to a subgroup $J\le\operatorname{Gal}(E/K)$. [F1, F2, given, choose, A1]

2.1 Let $L=E^J$ be the fixed field of $J$. Then [F3] identifies $N_{L/K}C_L$ with the preimage of $J$, which is exactly $H$. This proves existence. [F1, F3, step 1.1, algebra]

3.1 If $L_1/K$ and $L_2/K$ have the same norm subgroup, form their finite abelian compositum $E=L_1L_2$. By [F2]–[F3], the preimages of that norm subgroup in $\operatorname{Gal}(E/K)$ are both $\operatorname{Gal}(E/L_1)$ and $\operatorname{Gal}(E/L_2)$; hence these subgroups agree and their fixed fields agree. The same preimage relation shows that inclusion of norm subgroups reverses inclusion of fields. This proves uniqueness and the order reversal. [F1, F2, F3, step 2.1, algebra, A1] ∎
