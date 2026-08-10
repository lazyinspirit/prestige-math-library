---
id: thm-nonnegative-improper-integral-bounded-primitive-criterion
kind: theorem
title: "A nonnegative improper integral converges iff its truncated integrals are bounded"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint,
       thm-monotonicity-of-the-integral,
       cor-monotone-converges-iff-bounded, def-complete-ordered-field,
       def-bounded-set, lem-improper-integral-splitting-and-tail-invariance]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 8.3.3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f\ge0$ be Riemann integrable on every compact subinterval of $[a,\infty)$. Then $\int_a^\infty f$ converges if and only if the set
$$\left\{\int_a^R f:R>a\right\}$$
is bounded above. In the convergent case its supremum is the value of the improper integral. The analogous assertion holds at either finite singular endpoint and at $-\infty$, with truncations directed toward that endpoint.

## Facts & Assumptions

**Given:** A nonnegative, locally Riemann-integrable $f$ at one singular end.

[L1] Monotonicity of the proper integral makes integrals over nonnegative functions nonnegative ([[thm-monotonicity-of-the-integral]]).

[L2] A bounded monotone real sequence converges to its supremum or infimum ([[cor-monotone-converges-iff-bounded]]).

[L3] Finite truncations may be moved without changing convergence ([[lem-improper-integral-splitting-and-tail-invariance]]).

## Proof

**Proof technique:** direct.

1.1 At $+\infty$, $F(R)=\int_a^R f$ is nondecreasing by [L1]. If $F(R)$ converges, its range is bounded. Conversely, if its range is bounded above, the integer sequence $F(n)$ is bounded and nondecreasing, so [L2] gives $F(n)\to S=\sup_nF(n)$. [L1, L2]

2.1 For $n\le R\le n+1$, monotonicity gives $F(n)\le F(R)\le F(n+1)$. Hence $F(R)\to S$. Every real truncation lies below a later integer truncation, so $S$ is also the supremum of the full truncation range. [step 1.1, L1]

3.1 Reciprocal truncations and the same squeeze prove the finite-endpoint forms; reversing orientation proves the $-\infty$ form. Moving the initial finite endpoint is harmless by [L3]. [L3] ∎
