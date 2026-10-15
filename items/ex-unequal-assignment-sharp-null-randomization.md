---
id: ex-unequal-assignment-sharp-null-randomization
kind: example
title: "Unequal assignment weights under the Fisher sharp null"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-measurable-finite-group-permutation-setup
  - def-measurable-finite-group-orbit-pvalues
  - thm-finite-group-permutation-validity
  - def-finite-randomized-treatment-assignment-model
  - def-fisher-sharp-null-and-predeclared-test-orderings
  - def-finite-population-average-treatment-effect-and-weak-null
  - thm-fisher-sharp-null-randomization-pvalues-are-valid
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 2, §2.4"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Siva Balakrishnan, CMU 36-705 Lecture 28, §28.5 Fisher's Exact p-values"
      url: "https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf"
---

## Example

Two fixed units have two allowed assignments, $a=(1,0)$ and $b=(0,1)$, with
known assignment probabilities $P(Z=a)=0.9$ and $P(Z=b)=0.1$. Suppose the
potential-outcome schedule satisfies the Fisher sharp null and the
predeclared score is $T(a,y)=1$, $T(b,y)=0$. The design-based inclusive
randomization p-value is $0.9$ when $a$ is observed and $1$ when $b$ is
observed.

## Facts & Assumptions

**Given:** The finite assignment law, fixed sharp-null potential outcomes,
and the predeclared score above. Compute the weighted upper-tail p-value and
identify which validity premise is being used.

[F1] [[def-finite-randomized-treatment-assignment-model]]: the units and potential-outcome schedule are fixed, the known finite assignment law supplies the randomness, and the observed response vector is determined by the realized assignment.

[F2] [[def-fisher-sharp-null-and-predeclared-test-orderings]]: under the Fisher sharp null, one response vector is imputable under every allowed assignment; the ordering score is fixed before observing assignment and outcomes.

[F3] [[thm-fisher-sharp-null-randomization-pvalues-are-valid]]: the inclusive p-value sums the actual assignment probabilities over assignments whose imputed score is at least the observed score, and is valid under every Fisher-sharp schedule.

[F4] [[thm-finite-group-permutation-validity]]: the full-orbit group-rank validity conclusion assumes each null law is invariant under every group transformation.

[F5] [[def-finite-population-average-treatment-effect-and-weak-null]]: the weak zero-average-effect null constrains only the average unit effect and is weaker than the Fisher sharp null.

## Verification

**Given:** Assignments $a,b$ with weights $0.9,0.1$, a Fisher-sharp schedule, and the score ordering $T(a,y)=1>T(b,y)=0$.

1.1 The assignment weights are nonnegative and sum to one. Under the sharp null the same fixed response vector $y$ is available at both assignments, so the two score values in the Example are imputable before observing $Z$. The published weighted randomization theorem [F3] therefore applies to this schedule and this predeclared ordering. [F1, F2, F3, given]

1.2 If $Z=a$, the only assignment with score at least $1$ is $a$, so $p_{\mathrm{rand}}(a,y)=0.9$. If $Z=b$, both assignments have score at least $0$, so $p_{\mathrm{rand}}(b,y)=0.9+0.1=1$. [F1, F2, F3, given, algebra]

2.1 The p-value is $0.9$ with probability $0.9$ and $1$ with probability $0.1$. Its CDF is $0$ for $u<0.9$, $0.9\le u$ for $0.9\le u<1$, and $1$ at $u=1$, hence it is superuniform. The assignment law is not invariant under the swap $a\leftrightarrow b$, since the two assignment masses differ, so the group-invariance theorem [F4] is not the justification here. This example uses the Fisher sharp null and makes no claim under the weaker average-effect null [F5]. [F1, F3, F4, F5, step 1.2, algebra] ∎
