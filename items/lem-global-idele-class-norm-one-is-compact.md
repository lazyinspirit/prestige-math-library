---
id: lem-global-idele-class-norm-one-is-compact
kind: lemma
title: Norm-one idèle classes form a compact group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - thm-number-field-ideal-class-group-finite-in-zf
  - thm-logarithmic-unit-image-is-a-full-lattice
  - thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field
  - thm-curves-function-fields-equivalence
  - thm-product-formula-for-number-fields
  - thm-product-formula-for-function-fields
  - thm-local-valuation-ring-compact-open
  - thm-tychonoff
proof_strategy: direct
axiom_use: AC and Countable Choice are assumed for compact local units, products, class groups and the logarithmic unit lattice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory, version 4.03
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: "Chapter V §4, p.172 notes: number-field norm-one compactness from finite ideal classes and the unit theorem. Both proofs, including function fields, are supplied below."
verification: {}
---

## Statement

Assume AC and Countable Choice. For a number field $F$ or a global function field with finite exact constant field, endow the idèle-class group $C_F=\mathbb A_F^\times/F^\times$ with its quotient topology. Let $C_F^1$ be the image of the idèles whose product of normalized local absolute values is $1$. Then $C_F^1$ is compact. In the function-field case it is also the kernel of the integral degree homomorphism on $C_F$. This is a compactness result only; it does not assert a reciprocity map or its kernel.

## Facts & Assumptions

**Given:** The global field, normalized absolute values, idèle-class quotient topology and explicit choices in the Statement.

[A1] AC and Countable Choice are assumed. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The idèle group is a restricted product and $C_F$ has its quotient topology. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F2] The number-field ideal class group is finite and the logarithmic image of its unit group is a full lattice in the archimedean norm-one hyperplane. [[thm-number-field-ideal-class-group-finite-in-zf]] [[thm-logarithmic-unit-image-is-a-full-lattice]]

[F3] Every finite-constant global function field has a smooth proper curve model, and its degree-zero divisor class group is finite. [[thm-curves-function-fields-equivalence]] [[thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field]]

[F4] The product formula gives absolute norm one to every principal idèle in either field type. [[thm-product-formula-for-number-fields]] [[thm-product-formula-for-function-fields]]

[F5] Every finite-place unit group is compact; arbitrary products of compact spaces are compact under AC. [[thm-local-valuation-ring-compact-open]] [[thm-tychonoff]]

## Proof

**Proof technique:** finite ideal or divisor classes and compact representatives for the remaining unit quotient.

1.1 Suppose first that $F$ is a number field. Choose one fractional-ideal representative of each of the finitely many ideal classes in [F2], and choose an idèle representing each ideal. Multiply its archimedean components by a suitable positive scalar so that its absolute norm becomes one. Let $x$ be any norm-one idèle. Its associated fractional ideal is in one chosen class, hence after dividing by the chosen representative and by a suitable principal idèle, its finite components are all units. The product formula [F4] shows the residual archimedean components have product of normalized absolute values one. [F1, F2, F4, choose, construct, algebra]

2.1 Take logarithms of the residual archimedean absolute values, using twice the ordinary logarithm at each complex place. They lie in the norm-one hyperplane. By [F2], unit logarithms form a full lattice there, so choose a compact fundamental parallelepiped $P$; multiplying by a global unit moves the logarithm into $P$ without spoiling the finite unit components. The archimedean signs and phases form a finite product of $\{\pm1\}$ and unit circles. Their product with $P$ and the product of all finite-place unit groups is compact by [F5]. Its continuous image in $C_F$ is compact. The finitely many chosen class representatives translate this image into a finite union that covers $C_F^1$ by step 1.1 and lies in $C_F^1$ by construction. Thus $C_F^1$ is compact. The zero-dimensional logarithmic hyperplane and empty unit-rank cases are included. [F1, F2, F5, step 1.1, construct, algebra]

3.1 Suppose $F$ is a function field with exact constants $\mathbb F_q$. Its normalized idèle norm is $q^{-\deg(x)}$, where $\deg(x)=\sum_v\operatorname{ord}_v(x_v)[k(v):\mathbb F_q]$ is a finite sum. Thus norm one is exactly degree zero, and [F4] makes degree well defined on $C_F$. By [F3] there are only finitely many degree-zero divisor classes; choose one degree-zero idèle representative for each. For a norm-one idèle, dividing by its representative and then by a principal idèle leaves all local components units. Their full product is compact by [F5], so its finitely many translates map continuously onto $C_F^1$. Hence $C_F^1$ is compact and is precisely the degree kernel. [F1, F3, F4, F5, choose, construct, algebra] ∎
