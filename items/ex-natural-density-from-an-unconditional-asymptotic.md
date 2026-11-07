---
id: ex-natural-density-from-an-unconditional-asymptotic
kind: example
title: "Natural density of the transposition class in an S3 extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - thm-natural-density-chebotarev
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  The example inherits AC, Countable Choice, and Dependent Choice from the
  natural-density theorem; counting the conjugacy class uses no additional
  choice.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. C. Lagarias and A. M. Odlyzko, Effective Versions of the Chebotarev Density Theorem"
      url: "https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf"
      locator: "Theorem 1.3 and §9, printed pp. 409–464."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §7, Theorem 7.4, printed pp. 259–260."
verification: {}
---

## Example

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $L/F$ be a finite Galois extension of number fields with Galois group isomorphic to $S_3$, the group of permutations of a three-element set, and let $C$ be the conjugacy class of the three transpositions. Among the nonzero prime ideals of $\mathcal O_F$, counted by absolute norm, the unramified primes with arithmetic Frobenius class in $C$ have natural density $1/2$.

## Example references

[[thm-natural-density-chebotarev]]

[Lagarias and Odlyzko, Theorem 1.3 and §9](https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf)

[Milne, Class Field Theory, Chapter VIII §7](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice; a finite Galois extension $L/F$ with Galois group isomorphic to $S_3$.

[F1] [[thm-natural-density-chebotarev]]: for a conjugacy-stable set $C$ in a finite Galois group $G$, the natural density of the unramified prime ideals with Frobenius in $C$ is $|C|/|G|$. Its current proof derives this ratio from the unified effective Chebotarev estimate, using cyclic subgroups meeting the conjugacy classes and removing finitely many ramified primes.

[A1] The AC, Countable Choice, and Dependent Choice hypotheses are inherited from [F1]. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Verification

**Given:** the data in the Example.

1.1 In $S_3$, conjugation sends a transposition to a transposition, and for any two transpositions a permutation carrying their moved letters to each other conjugates one to the other. Thus $C$ is one conjugacy class with three elements, while $|S_3|=3!=6$. [given, algebra]

2.1 Apply [F1] to this conjugacy class. Its natural density is $|C|/|G|=3/6=1/2$. [F1, step 1.1, given, algebra] ∎

## Readiness

The finite group calculation is complete. The application in step 2.1 relies on [F1] and its actual prerequisites; this example supplies no proof or acceptance of those inputs.
