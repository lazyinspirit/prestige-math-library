---
id: lem-the-rth-differential-squares-to-zero
kind: lemma
title: The rth differential squares to zero
deps: ["lem-the-filtered-differential-induces-d-r-on-the-r-page"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
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
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

For every $r\ge0$ the page differential satisfies $(d^r)^2=0$.

## Facts & Assumptions

**Given:** A filtered chain complex and its induced page differential at page r≥0.

[F1] The page differential is induced by the chain differential on the numerator quotient ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

## Proof

**Proof technique:** direct.

1.1 Let $\pi:A^r_{p,n}\twoheadrightarrow E^r_{p,q}$ be the numerator quotient (for r=0 use $F_pC_n$). Applying the defining identity of [F1] twice gives $(d^r)^2\pi=\pi''d_{n-1}d_n=0$. The second target is $(p-2r,q+2r-2)$, of total degree $n-2$, so the composite is typed. [F1, algebra]

2.1 The quotient projection π is epic; hence its right cancellation in $(d^r)^2\pi=0\pi$ gives $(d^r)^2=0$. This also applies to r=0 and zero numerators. [step 1.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
