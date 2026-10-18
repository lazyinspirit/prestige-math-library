---
id: lem-power-rangefinder-projector-is-borel
kind: lemma
title: Measurability of the reorthogonalized power range finder
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-randomized-power-subspace-iteration-with-qr, lem-finite-scan-range-basis-is-borel, thm-composition-with-borel-functions-preserves-measurability]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Algorithms 4.1 and 4.4 and Gaussian conventions in section 10.1; local prerequisite proof"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
---

## Statement

Assume Countable Choice. For fixed $A\in F^{m\times n}$, sketch width
$\ell\ge1$, and integer $q\ge0$, the basis returned by
[[alg-randomized-power-subspace-iteration-with-qr]] is Borel measurable on
each output-rank stratum. Its projector and spectral error on $A$ are Borel
functions of $\Omega$, including rank-deficient and zero samples.

## Facts & Assumptions

**Given:** Countable Choice, fixed $A$, and finite integers $\ell\ge1$, $q\ge0$.

[F1] The power procedure applies the finite scan to $A\Omega$ and then successively to $A^*Q_{j-1}$ and $A\widetilde Q_j$, for $1\le j\le q$. [[alg-randomized-power-subspace-iteration-with-qr]]

[F2] The finite scan terminates, returns a basis of its input range, and is Borel on its finitely many output-rank strata; its projector and spectral error are Borel. [[lem-finite-scan-range-basis-is-borel]]

[F3] A composition of measurable maps is measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

## Proof

1.1 By [F2], the initial scan on $A\Omega$ is Borel, since multiplication by fixed $A$ is continuous. On each rank stratum, multiplication by fixed $A^*$ and then the scan are Borel by [F3], as are multiplication by $A$ and the next scan. There are finitely many possible ranks, so the resulting maps on their disjoint union are Borel. Finite induction over the $q$ iterations proves measurability of the final basis. The empty-basis branches remain empty under multiplication and scanning, and $q=0$ is the initial scan. [given, F1, F2, F3, algebra]

2.1 On every rank stratum $Q\mapsto QQ^*$ is continuous, and the matrix norm is continuous by the norm inequality in [F2]'s proof. Hence the final projector and error are Borel on their finite union, including zero samples. [step 1.1, F2, algebra] ∎
