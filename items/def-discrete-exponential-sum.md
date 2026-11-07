---
id: def-discrete-exponential-sum
kind: definition
title: "A Discrete Exponential Sum on a Finite Integer Interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
  - def-finite-sum-in-a-commutative-monoid
  - thm-complex-numbers-form-a-field
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "Opening definition on printed p. 1"
    - title: "Ramdinmawia Vanlalngaia, Hardy's functions of L-series and distribution of primes in arithmetic progressions"
      url: "https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf"
      locator: "Part I, Chapter 1 §1.10, printed pp. 39-41"
---

## Definition

Let $A\le B$ be integers, put $N=B-A+1$, and let $f:[A,B]\to\mathbb R$.
The discrete exponential sum of $f$ on the closed integer interval
$\{A,A+1,\ldots,B\}$ is
$
S(f;A,B):=\sum_{j<N}e\bigl(f(A+j)\bigr),
$
where the natural index $j$ is included in the integers in the argument of
$f$. Thus the sum has exactly $N$ terms, including both integer endpoints.

## Definition references

[[def-exponential-character-e]]

[[def-finite-sum-in-a-commutative-monoid]]

[[thm-complex-numbers-form-a-field]]

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

[Vanlalngaia, Chapter 1 §1.10, complete relevant thesis text](https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf)
