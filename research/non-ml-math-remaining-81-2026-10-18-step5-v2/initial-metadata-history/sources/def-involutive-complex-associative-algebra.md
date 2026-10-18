---
id: def-involutive-complex-associative-algebra
kind: definition
title: Complex associative algebra with involution
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: [thm-associative-symmetrization-satisfies-jordan-identity]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "Holger P. Petersson, Albert Algebras, §4.3"
      url: https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf
---

## Definition

A **complex associative algebra with involution** is a unital associative
algebra over $\mathbb C$ as in [[def-algebra-over-a-commutative-ring]], equipped
with a conjugate-linear map $a\mapsto a^*$ using complex conjugation from
[[def-complex-conjugate-real-imaginary-part-and-modulus]] such that
$(a^*)^*=a$, $(ab)^*=b^*a^*$, and $1^*=1$. Its **self-adjoint part** is

$$ A_{\rm sa}:=\{a\in A:a^*=a\}. $$

The theorem [[thm-associative-symmetrization-satisfies-jordan-identity]] proves
that this subset is a real vector subspace closed under the symmetrized
product.
