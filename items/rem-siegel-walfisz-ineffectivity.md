---
id: rem-siegel-walfisz-ineffectivity
kind: remark
title: "Siegel–Walfisz constants are ineffective"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - thm-siegel-walfisz-prime-distribution
  - thm-siegel-ineffective-lower-bound-dirichlet-zero
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
    - title: "Analytic Number Theory lecture notes, Remark 11.3"
      url: "https://metaphor.ethz.ch/x/2018/hs/401-3100-68L/IANTnotes2018.pdf"
    - title: "Ian Petrow, Introduction to Analytic Number Theory, Corollary 10.5 discussion"
      url: "https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf"
---

## Remarks

Assume the Axiom of Choice, Countable Choice, and Dependent Choice.

The standard Siegel–Walfisz proof obtains its uniform constant by bounding the
possible exceptional-zero contribution with Siegel's lower bound. That lower
bound has an ineffective constant, so the resulting Siegel–Walfisz constant
is ineffective in this proof route. This records the limitation of that route;
it does not assert that no other argument could make a particular bound
effective.

## Remarks references

[Lecture-notes Remark 11.3 on ineffectivity](https://metaphor.ethz.ch/x/2018/hs/401-3100-68L/IANTnotes2018.pdf)

[[thm-siegel-ineffective-lower-bound-dirichlet-zero|Siegel's ineffective exceptional-zero bound]]

[[thm-siegel-walfisz-prime-distribution|Siegel–Walfisz theorem for primes in arithmetic progressions]]

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, and Dependent Choice as
assumptions of the cited Siegel–Walfisz theorem.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice
function; this assumption is inherited through the SW zero-free supplier.

[A2] [[def-countable-choice]]: Every sequence of nonempty sets indexed by
$\mathbb N$ has a choice function; this assumption is inherited through the SW
proof inputs.

[A3] [[def-dependent-choice]]: Every entire relation on a nonempty set admits
an $\mathbb N$-indexed chain from any prescribed start; this assumption is
inherited through the SW zero-free supplier.
