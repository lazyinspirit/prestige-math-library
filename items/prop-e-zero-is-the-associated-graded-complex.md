---
id: prop-e-zero-is-the-associated-graded-complex
kind: proposition
title: E zero is the associated graded complex
deps: ["def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex", "lem-the-differential-descends-to-a-quotient-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
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

In the specified quotient model, $(E^0,d^0)$ is the associated graded complex: $E^0_{p,q}=\operatorname{gr}_pC_{p+q}$.

## Facts & Assumptions

**Given:** A filtered chain complex with the specified initial-page quotient model.

[F1] The initial page is $F_pC_n/F_{p-1}C_n$ ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F2] At $r=0$, the page differential is characterized on quotient representatives by $[x]\mapsto[d_nx]$ ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

[F3] The associated graded complex has the unique differential satisfying $d^0_{p,q}\pi_{p,n}=\pi_{p,n-1}(d_n|_{F_pC_n})$ ([[prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex]]), as supplied by quotient-complex descent ([[lem-the-differential-descends-to-a-quotient-complex]]).

## Proof

**Proof technique:** direct.

1.1 The defining numerator and denominator of [F1] are $Z^0=F_pC_n$ and $B^0=F_{p-1}C_n$. Their quotient is exactly the chosen model of $\operatorname{gr}_pC_n$. [F1]

2.1 By [F2], the initial-page differential sends every quotient representative $[x]$ to $[d_nx]$, so its composite with the quotient projection is $\pi_{n-1}d_n$. By [F3], the associated-graded quotient differential is the unique map with that same composite. The quotient projection is epic, hence the two maps agree. With $n=p+q$, their common bidegree is $(0,-1)$. [F2, F3, step 1.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
