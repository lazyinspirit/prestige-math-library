---
id: ex-strong-goldbach-open-status
kind: example
title: "Binary Goldbach Remains Open"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Eric W. Weisstein, Goldbach Conjecture, Wolfram MathWorld"
      url: "https://mathworld.wolfram.com/GoldbachConjecture.html"
      locator: "Binary formulation, open status, and published verification table; accessed 2026-10-26."
    - title: "H. A. Helfgott and D. J. Platt, Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30, arXiv:1305.3062v2"
      url: "https://arxiv.org/pdf/1305.3062v2"
      locator: "Introduction, printed p. 1, separates the binary and ternary formulations."
proof_strategy: direct
axiom_use: None. These deductions concern the written scope of dated source reports, not an open conjecture or a new numerical result.
---

## Example

The MathWorld source recorded as accessed on 2026-10-26 formulates the binary Goldbach conjecture as asking whether every even integer greater than $2$ is a sum of two primes, and labels it open. Here a prime is an integer greater than $1$ whose only positive divisors are $1$ and itself. The separately reported finite ternary statement for odd $7\le n\le8{,}875{,}694{,}145{,}621{,}773{,}516{,}800{,}000{,}000{,}000$ makes no claim about this binary statement.

## Example references

[Wolfram MathWorld, “Goldbach Conjecture,” accessed 2026-10-26](https://mathworld.wolfram.com/GoldbachConjecture.html)

[Helfgott–Platt, *Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30*, introduction](https://arxiv.org/pdf/1305.3062v2)

## Facts & Assumptions

**Given:** The archived MathWorld page, with its existing recorded access date 2026-10-26, says that the strong/binary Goldbach conjecture concerns positive even $n\ge4$ and two prime summands, and calls it open. The separately cited Helfgott–Platt introduction distinguishes the binary question from its finite ternary range. These are dated source reports; no fresh current-status survey or proof of either conjecture is assumed.

## Proof

1.1 For even integers, “greater than two” and “at least four” describe the same positive range. Thus the example reproduces the written binary formulation and the status label of the archived dated record, without asserting a proof of that formulation or a newly surveyed status. [given, algebra]

2.1 The separately quoted finite ternary assertion is written for odd inputs in a bounded interval and three prime summands. The binary formulation in step 1.1 is written for all even inputs above two and two summands. These written domains and conclusions are different; quoting the former supplies no assertion of the latter in this example. This is a comparison of source scope, not a formal independence theorem or a new finite computation. [given, step 1.1, algebra] ∎
