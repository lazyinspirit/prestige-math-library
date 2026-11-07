---
id: ex-yang-quantitative-nonvanishing-two-parameter-regimes
kind: example
title: "The Two M,T Regimes in Quantitative Nonvanishing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-countable-choice
  - thm-yang-quantitative-simultaneous-nonvanishing-glnplus1-gln
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Theorem C"
      url: "https://arxiv.org/pdf/2309.07534v2"
---

## Example

In the hypotheses and notation of Yang's quantitative simultaneous nonvanishing theorem, assume $n=2$ and Countable Choice. If $N(T,M)$ denotes the number of members of the specified cuspidal family for which both central Rankin–Selberg values are nonzero, then

$$N(T,M)\gg_\varepsilon (TM)^{-\varepsilon}\begin{cases}M^{2/13}T^{1/26},&1\leq M\leq T^3,\\[4pt]M^{1/7}T^{1/14},&M>T^3.\end{cases}$$

At the boundary $M=T^3$, the two displayed powers both equal $T^{1/2}$, and equality is assigned to the first branch.

## Example references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Theorem C](https://arxiv.org/pdf/2309.07534v2)

## Facts & Assumptions

**Given:** The hypotheses and notation in the Example, and the general theorem below. Verify the rank-two specialization and the regime boundary.

[F1] [[thm-yang-quantitative-simultaneous-nonvanishing-glnplus1-gln]]: for general $n\geq2$, the first branch uses $M^{n/(3n^2+n-1)}T^{1/[2(3n^2+n-1)]}$ when $M\leq T^{(n+1)/(n^2-n-1)}$, and the second uses $M^{1/(n^2+n+1)}T^{1/[2(n^2+n+1)]}$ otherwise.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; this is inherited from the theorem's stated axiom.

## Verification

1.1 At $n=2$, the exponents become $3n^2+n-1=13$, $n^2-n-1=1$, and $n^2+n+1=7$. The threshold is therefore $M\leq T^3$, and the two branch powers become $M^{2/13}T^{1/26}$ and $M^{1/7}T^{1/14}$. [given, F1, algebra]

2.1 At $M=T^3$, the first power is $T^{3(2/13)+1/26}=T^{1/2}$ and the second is $T^{3/7+1/14}=T^{1/2}$. Since $M\leq T^3$ includes equality, the boundary is assigned consistently to the first branch. [given, step 1.1, algebra] ∎


## Verification status

The exponent and boundary calculation is complete conditional on the full quantitative theorem and its exact family. That theorem remains held, including central-character/level compatibility and the extension from compact-type-finite to smooth microlocal tests; this example supplies neither analytic input.
