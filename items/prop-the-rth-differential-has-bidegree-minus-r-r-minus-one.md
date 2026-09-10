---
id: prop-the-rth-differential-has-bidegree-minus-r-r-minus-one
kind: proposition
title: The rth differential has bidegree minus r r minus one
deps: ["lem-the-filtered-differential-induces-d-r-on-the-r-page"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

In the homological convention the $r$th differential has bidegree $(-r,r-1)$ and total degree $-1$. The stable item ID is retained; its verbal suffix does not specify the sign convention.

## Facts & Assumptions

**Given:** The induced page differential of a filtered chain complex, at page r≥0 and position (p,q).

[F1] $d^r$ is induced from $d_n$ with target filtration index $p-r$ and chain degree $n-1$ ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

## Proof

**Proof technique:** direct.

1.1 At bidegree $(p,q)$ the total degree is $n=p+q$. By [F1] the target total degree is $n-1$ and its first index is $p-r$. Hence its second index is $(n-1)-(p-r)=q+r-1$. [F1, algebra]

2.1 The changes in the two indices are therefore $-r$ and $r-1$, whose sum is $-1$. At r=0 they are $(0,-1)$ and at r=1 they are $(-1,0)$, as asserted. [step 1.1, algebra] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
