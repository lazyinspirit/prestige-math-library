---
id: rem-bombieri-vinogradov-cutoff-depends-on-error-saving
kind: remark
title: "The BV logarithmic cutoff depends on the requested saving"
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
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 18, Theorem 18.4 proof"
      url: "https://kskedlaya.org/18.785/bombieri2.pdf"
    - title: "Terence Tao, 254A Notes 3, Theorem 17 proof"
      url: "https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/"
---

## Remarks

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. For a
requested saving $x(\log x)^{-A}$, the stated proof route chooses the modulus
cutoff exponent $B=2A+6$. Thus the target saving and logarithmic cutoff are
linked: increasing $A$ changes the sufficient value of $B$. This value is a
proof-route bound, not a claim that $2A+6$ is minimal or that every smaller
cutoff fails.

## Remarks references

[Kedlaya, Chapter 18, Theorem 18.4 proof, including the choice $B(A)=2A+6$](https://kskedlaya.org/18.785/bombieri2.pdf)

[Tao, Notes 3, Theorem 17 proof](https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/)

[[thm-bombieri-vinogradov-prime-distribution|Bombieri–Vinogradov theorem in Chebyshev progression form]]

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, and Dependent Choice as
assumptions of the cited Bombieri–Vinogradov theorem.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice
function; it is inherited through the SW zero-free supplier.

[A2] [[def-countable-choice]]: Every sequence of nonempty sets indexed by
$\mathbb N$ has a choice function; it is inherited through the SW and PNT-error
inputs.

[A3] [[def-dependent-choice]]: Every entire relation on a nonempty set admits
an $\mathbb N$-indexed chain from any prescribed start; it is inherited through
the SW zero-free supplier.
