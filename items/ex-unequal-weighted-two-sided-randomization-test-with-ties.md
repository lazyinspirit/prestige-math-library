---
id: ex-unequal-weighted-two-sided-randomization-test-with-ties
kind: example
title: "A weighted two-sided randomization test with tied scores"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-finite-randomized-treatment-assignment-model
  - def-fisher-sharp-null-and-predeclared-test-orderings
  - thm-fisher-sharp-null-randomization-pvalues-are-valid
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let three units have fixed outcomes $y=(0,1,2)$ under every assignment, and
randomize exactly one unit to treatment. The assignments select unit 1, 2,
or 3 with probabilities $1/2$, $1/3$, and $1/6$, respectively. Use the
treatment-minus-control mean as signed score and its absolute value as the
predeclared two-sided ordering about zero. The upper-tail p-value is $2/3$
for either outer assignment and $1$ for the middle assignment. It is
superuniform despite the unequal assignment weights and the tied outer
scores; an independent uniform tie randomizer gives an exactly uniform
p-value.

## Facts & Assumptions

**Given:** The three-unit complete randomization described above, its fixed
potential-outcome schedule, and an independent $U$ uniform on $[0,1]$.

[F1] [[def-finite-randomized-treatment-assignment-model]]: the outcomes are
fixed under the design and the only assignment randomness has the specified
finite law.

[F2] [[def-fisher-sharp-null-and-predeclared-test-orderings]]: a two-sided
ordering about null center zero uses $T(z,y)=|S(z,y)|$ and includes ties in
the upper tail.

[F3] [[thm-fisher-sharp-null-randomization-pvalues-are-valid]]: the weighted
upper-tail value is superuniform under every Fisher sharp-null schedule,
and independent uniform randomization within tied mass is exactly uniform.

[A1] The auxiliary $U$ is independent of the treatment assignment and
satisfies $P(U\le u)=u$ for $u\in[0,1]$.

## Verification

**Given:** The outcomes, assignment weights, treatment-minus-control mean,
and auxiliary randomizer stated above.

1.1 The assignment weights are nonnegative and sum to one, and each unit's outcome is the same under all three assignments, so this is a finite assignment law satisfying the Fisher sharp null. [given, F1, algebra]

2.1 If unit 1, 2, or 3 is treated, the signed differences are respectively $0-(1+2)/2=-3/2$, $1-(0+2)/2=0$, and $2-(0+1)/2=3/2$. The two-sided scores are therefore $3/2,0,3/2$. [given, F2, step 1.1, algebra]

3.1 Each outer assignment has inclusive upper-tail mass $1/2+1/6=2/3$; the middle score is the minimum, so its inclusive upper-tail mass is $1$. The nonrandomized p-value therefore equals $2/3$ with probability $2/3$ and $1$ with probability $1/3$. Its distribution function is $0$ below $2/3$, $2/3$ on $[2/3,1)$, and $1$ at $1$, which is at most its argument throughout $[0,1]$. [F1, step 2.1, algebra]

3.2 At either outer assignment the strict-tail mass is zero and the tied mass is $2/3$, so $p^+=(2/3)U$. At the middle assignment the strict-tail mass is $2/3$ and the tied mass is $1/3$, so $p^+=2/3+U/3$. [given, A1, step 2.1, algebra]

4.1 For $0\le u\le2/3$, the outer assignments contribute $(2/3)P(U\le 3u/2)=u$. For $2/3\le u\le1$, they contribute $2/3$ and the middle assignment contributes $(1/3)P(U\le3u-2)=u-2/3$; hence $P(p^+\le u)=u$ on the entire unit interval. Together with step 3.1, this verifies the theorem's superuniform and uniform conclusions for this assignment law. [A1, F3, step 3.1, step 3.2, algebra] ∎