---
id: rem-parity-barrier-scope
kind: remark
title: "The parity problem and the scope of sieve-only limitations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - thm-brun-combinatorial-sieve-inequalities
  - thm-selberg-sieve-upper-bound-with-remainders
  - def-liouville-function
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes, §8"
      url: "https://arxiv.org/pdf/1407.4897v4"
verification:
  precheck: n/a
---

## Remark

The **parity barrier** is a heuristic obstruction for a specific information
model: one has distribution estimates for shifted arithmetic functions in
arithmetic progressions and control of their corresponding main terms, and
hypothesizes that these controls persist after inserting a nonnegative weight.
For a positive integer $m$, write $\lambda(m)=(-1)^{\Omega(m)}$, where
$\Omega(m)$ is the number of prime factors of $m$ counted with multiplicity;
this is Liouville's function. For
$$A':=\{n\ge1:n,n+2\text{ are both prime}\}\cup
\{n\ge1:n+2,n+6\text{ are both prime}\},$$
Polymath8b considers the nonnegative weight
$$w(n):=(1-\lambda(n)\lambda(n+2))(1-\lambda(n+2)\lambda(n+6)).$$
Each factor is $0$ or $2$, and if either prime pair in the definition of
$A'$ occurs, its corresponding product of Liouville values is $1$; hence
$w(n)=0$ for every $n\in A'$. The paper's heuristic is that the stated
distribution and main-term controls, if they persist after inserting $w$,
would turn a positive sieve lower bound for $A'$ into a positive lower bound
weighted by $w$, although that weighted sum is identically zero. This is the
paper's informal explanation for why that linear-sieve information does not
improve its gap-at-most-$6$ result to gap at most $4$. For the twin-prime
problem the paper gives the simpler weight
$1-\lambda(n)\lambda(n+2)$ and makes the analogous heuristic argument. It
also says stronger bilinear input could evade the obstruction. These are not
theorems that every sieve method or every future information class fails.

## Remark references

[[def-liouville-function|Liouville function definition]]

[Polymath8b, *Variants of the Selberg sieve*, §8, pp. 68–71](https://arxiv.org/pdf/1407.4897v4)
