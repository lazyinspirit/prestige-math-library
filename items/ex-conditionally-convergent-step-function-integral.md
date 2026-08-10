---
id: ex-conditionally-convergent-step-function-integral
kind: example
title: "A step function whose improper integral is the alternating harmonic series"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-absolute-and-conditional-improper-convergence,
       def-improper-integral-at-infinity, lem-alternating-sequence,
       thm-alternating-series-test, thm-p-series-rational,
       thm-additivity-over-subintervals,
       lem-changing-a-function-at-finitely-many-points,
       def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, comparison of series and improper integrals"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

For each nonnegative integer $k$, define
$$f(x)=\frac{(-1)^k}{k+1}\qquad(k\le x<k+1).$$
Then $\int_0^\infty f$ converges conditionally, and its value is the sum of the alternating harmonic series.

## Facts & Assumptions

**Given:** The displayed step function.

[L1] The alternating harmonic series converges ([[thm-alternating-series-test]], [[lem-alternating-sequence]]).

[L2] The harmonic series diverges ([[thm-p-series-rational]]).

[L3] A finite collection of jumps does not obstruct Riemann integrability on a compact interval ([[lem-changing-a-function-at-finitely-many-points]]).

## Verification

**Proof technique:** computation.

1.1 Every compact interval meets only finitely many jumps, so $f$ is properly integrable there. At a positive integer $N$, [given]
$$\int_0^Nf=\sum_{k=0}^{N-1}\frac{(-1)^k}{k+1},$$
which converges as $N\to\infty$ by [L1].

1.2 If $N\le R<N+1$, the remaining integral from $N$ to $R$ has absolute value at most $1/(N+1)$. Hence arbitrary real truncations have the same limit as the integer truncations. [given]

2.1 At integer truncations, $\int_0^N|f|=\sum_{k=0}^{N-1}1/(k+1)$, unbounded by [L2]. Thus the integral converges but not absolutely. [L2] ∎
