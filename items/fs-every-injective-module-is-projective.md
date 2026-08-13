---
id: fs-every-injective-module-is-projective
kind: false-statement
title: "Every injective module is projective (refuted under the Axiom of Choice)"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-injective-modules-over-a-pid-are-exactly-divisible, thm-projective-module-characterizations, def-free-module-on-a-set-and-standard-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

> **False.** Every injective module is projective.

## Facts & Assumptions

**Given:** The Axiom of Choice, and the abelian group $I=\mathbb Q/\mathbb Z$ viewed as a $\mathbb Z$-module. Choice enters through [L1]: the implication *divisible $\Rightarrow$ injective* rests on Baer's criterion and its Zorn-lemma argument, so the refutation below is carried out under AC.

[L1] Under AC, a $\mathbb Z$-module is injective exactly when it is divisible ([[thm-injective-modules-over-a-pid-are-exactly-divisible]]).

[L2] Under AC, a projective module is a direct summand of a free module ([[thm-projective-module-characterizations]]).

[F1] A free $\mathbb Z$-module consists of finite integer linear combinations of basis vectors with unique coefficients ([[def-free-module-on-a-set-and-standard-basis]]).

## Refutation

**Proof technique:** contradiction.

1.1 The group $I$ is divisible: for $q+\mathbb Z\in I$ and nonzero integer $n$, the class $q/n+\mathbb Z$ is an $n$-th preimage. Thus $I$ is injective by [L1]. [L1, algebra]

1.2 The class $1/2+\mathbb Z$ is nonzero and killed by two, so $I$ has nonzero torsion. [algebra]

1.3 Suppose $I$ were projective. By [L2], it would be isomorphic to a direct summand, hence a subgroup, of a free abelian group. [assume-contra, L2]

2.1 A free abelian group is torsion-free by uniqueness of the finite coordinate expression in [F1], and every subgroup of a torsion-free group is torsion-free. This contradicts step 1.2. [step 1.3, step 1.2, F1]

3.1 Therefore the injective module $\mathbb Q/\mathbb Z$ is not projective, refuting the statement. [step 1.1, step 2.1, discharge-contradiction] ∎
