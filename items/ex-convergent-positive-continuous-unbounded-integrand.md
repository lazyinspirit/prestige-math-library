---
id: ex-convergent-positive-continuous-unbounded-integrand
kind: example
title: "A positive continuous integrand can have finite integral while unbounded on every tail"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-improper-integral-at-infinity,
       thm-cauchy-criterion-for-improper-integrals,
       thm-additivity-over-subintervals, thm-linearity-of-the-integral,
       thm-geometric-series, thm-algebra-of-derivatives,
       cor-primitives-of-a-continuous-function, def-canonical-natural,
       lem-of-naturals-positive, def-integer-power, def-continuity-real]
justified_by: []
aliases: []
landmark: false
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, exercises on unbounded integrands"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

There is a positive continuous $f:[0,\infty)\to\mathbb R$ for which $\int_0^\infty f$ converges although $f$ is unbounded on every tail.

## Facts & Assumptions

**Given:** For each positive integer $k$, put $h_k=2^{-k-2}/k$ and let $s_k$ be the symmetric triangular function supported on $[k-h_k,k+h_k]$, zero at the endpoints, and of height $k$ at its center. Define
$$f(x)=\frac1{(1+x)^2}+\sum_{k=1}^\infty s_k(x).$$

[L1] The supports of the $s_k$ are pairwise disjoint, and every compact interval meets only finitely many of them.

[L2] A triangle of height $k$ and half-width $h_k$ has integral $kh_k=2^{-k-2}$.

[L3] The geometric series $\sum_{k=1}^\infty2^{-k-2}$ converges ([[thm-geometric-series]]).

## Verification

**Proof technique:** construction.

1.1 Local finiteness and matching zero endpoint values make the spike sum continuous; adding the positive continuous baseline preserves positivity and continuity. Direct differentiation gives primitive $1-1/(1+x)$ for the baseline, whose improper integral is one. [given]

1.2 By [L2], additivity, and [L3], the total integral of all spikes is $\sum_{k=1}^\infty2^{-k-2}<\infty$. Therefore the Cauchy criterion gives convergence of $\int_0^\infty f$. [L2, L3]

2.1 At every positive integer $k$, $f(k)\ge s_k(k)=k$. Integers occur arbitrarily far out, so $f$ is unbounded on every tail. [given] ∎
