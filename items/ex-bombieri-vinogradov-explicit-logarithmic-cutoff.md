---
id: ex-bombieri-vinogradov-explicit-logarithmic-cutoff
kind: example
title: "An explicit logarithmic cutoff for a chosen BV saving"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - thm-bombieri-vinogradov-prime-distribution
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 18, Theorem 18.4 proof"
      url: "https://kskedlaya.org/18.785/bombieri2.pdf"
---

## Example

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. For the
Bombieri–Vinogradov saving $A=2$, the proof's sufficient cutoff exponent is
$B=2A+6=10$. Thus, for all sufficiently large $x$, the modulus range
$q\le x^{1/2}(\log x)^{-10}$ gives an average full-weighted Chebyshev
discrepancy of size $O(x(\log x)^{-2})$ over reduced residue classes.

## Example references

[Kedlaya, Chapter 18, Theorem 18.4 proof, with $B(A)=2A+6$](https://kskedlaya.org/18.785/bombieri2.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, and the stated
Bombieri–Vinogradov theorem.

[F1] [[thm-bombieri-vinogradov-prime-distribution]]: Under these three axioms,
for every $A>0$ the exponent $B=2A+6$ is sufficient in the average discrepancy
bound.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice
function.

[A2] [[def-countable-choice]]: Every sequence of nonempty sets indexed by
$\mathbb N$ has a choice function.

[A3] [[def-dependent-choice]]: Every entire relation on a nonempty set admits
an $\mathbb N$-indexed chain from any prescribed starting point.

## Verification

1.1 Substituting $A=2$ into $B=2A+6$ gives $B=10$. The fixed positive saving and all three assumptions are exactly those required by [F1]. [F1, A1, A2, A3, given, algebra]

2.1 Substituting $A=2$ and $B=10$ into [F1] gives $q\le x^{1/2}(\log x)^{-10}$ and an average discrepancy $O(x(\log x)^{-2})$, as stated. [F1, step 1.1] ∎
