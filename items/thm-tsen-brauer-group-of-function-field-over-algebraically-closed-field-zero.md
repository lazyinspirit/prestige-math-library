---
id: thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero
kind: theorem
title: 'Tsen''s theorem: the Brauer group of a one-variable function field over an
  algebraically closed field is zero'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
- cor-weak-nullstellensatz-algebraically-closed-coordinate-form
- def-axiom-of-choice
- def-brauer-group-as-galois-cohomology
- def-finitely-generated-field-extension
- def-one-variable-function-field-with-constant-field
- lem-function-field-over-algebraically-closed-field-is-c1
- thm-curves-function-fields-equivalence
- lem-central-division-reduced-norm-and-c1-splitting
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- thm-choice-implies-dependent-implies-countable-choice
- lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: SGA 4½, Exposé I, §3.2, Theorem 3.2.3 and Proposition 3.2.2
    url: https://grothendiecksga.com/read/sga4.5/en/I_3.html
  - title: J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.7
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let
$K/k$ be a finitely generated field extension of transcendence degree one.
Then $\operatorname{Br}(K)=0$.

## Statement references

[[def-one-variable-function-field-with-constant-field]]

[SGA 4½, Exposé I, §3.2, Theorem 3.2.3 and Proposition 3.2.2](https://grothendiecksga.com/read/sga4.5/en/I_3.html)

[J. S. Milne, *Arithmetic Duality Theorems*, Appendix A.7](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, and $K/k$ finitely generated of transcendence degree one.

[A1] AC supplies the curve-model and algebraic choices here and implies DC for the cohomological comparison. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Such a function field over the perfect field $k$ has a smooth proper geometrically integral curve model. [[thm-curves-function-fields-equivalence]]

[F2] Under AC, every nonempty finite-type scheme over an algebraically closed field has a rational point. [[lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point]]

[F3] The Riemann–Roch argument makes its function field $C_1$. [[lem-function-field-over-algebraically-closed-field-is-c1]]

[F4] Under AC, the reduced-norm construction makes every central simple algebra over a $C_1$ field split. [[lem-central-division-reduced-norm-and-c1-splitting]]

[F5] Under AC and DC the standard crossed-product comparison identifies the classical and continuous-cohomological Brauer groups. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

## Proof

**Proof technique:** curve model, Riemann–Roch $C_1$ argument, then the descended anisotropic reduced norm.

**Given:** The data above.

1.1 Every irreducible polynomial over the algebraically closed field $k$ is linear, so $k$ is perfect. The minimal polynomial of any element of $K$ algebraic over $k$ is likewise linear, so $k$ is relatively algebraically closed in $K$. Thus the perfect-base and relative-constant hypotheses of [F1] both hold. By [A1] and [F1], choose a smooth proper geometrically integral curve $C/k$ with $K\cong k(C)$. It has a $k$-point by [F2]. [A1, F1, F2, given, choose]

1.2 Apply the actual Riemann–Roch construction in [F3] to $C$ and its point. It gives the $C_1$ property for $K$. [F3, step 1.1]

2.1 The hypotheses of [F4] now hold with the same AC already assumed in the Statement. Hence every central simple algebra over $K$ is split and its classical Brauer group is zero. No use is made of the unqualified $C_1$ theorem's remaining choice-scope hold. [A1, F4, step 1.2]

2.2 By [A1], DC is available, so [F5] identifies this zero group with the continuous-cohomological Brauer group as well. This proves the Statement with its original full characteristic and transcendence-degree scope. [A1, F5, step 2.1] ∎
