---
id: thm-na-certified-unit-circle-phase-enclosure
kind: theorem
title: "Certified phase output encloses the exact unit-circle value"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 12
deps: [alg-na-certified-unit-circle-phase, def-intervals-rectangles-and-complex-balls, thm-real-elementary-range-enclosures, thm-outward-rounded-operations-are-isotone-and-dag-sound, lem-complex-conjugation-and-modulus-laws, thm-na-interval-pi-matches-canonical-fourier-pi]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, pp. 452–454"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 11 §11.7"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Whenever [[alg-na-certified-unit-circle-phase]] returns `certified(\widehat w,\epsilon)` on rational input $q$, its output satisfies $|\widehat w-e^{\pi iq}|\le\epsilon\le\tau$.

## Facts & Assumptions

**Given:** Rational $q$, target $0<\tau\le1/4$, finite precision and evaluation budgets, and a successful output `certified(\widehat w,\epsilon)`.

[F1] On a finite return, the real interval $C$ contains $\cos(\pi q)$ and $S$ contains $\sin(\pi q)$, with the interval and Fourier definitions using the same $\pi$ ([[thm-real-elementary-range-enclosures]], [[def-intervals-rectangles-and-complex-balls]], [[thm-na-interval-pi-matches-canonical-fourier-pi]]).

[F2] The returned lower endpoints are the lower endpoints of $C,S$, and $\epsilon$ is an upward-rounded dyadic at least $(c_+-c_-)+(s_+-s_-)$; directed interval arithmetic encloses these exact widths ([[alg-na-certified-unit-circle-phase]], [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F3] For real $a,b$, $|a+ib|\le|a|+|b|$ by the complex modulus triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

1.1 By [F1], the real coordinate of $w=e^{\pi iq}$ lies in $[c_-,c_+]$ and its imaginary coordinate lies in $[s_-,s_+]$. Since $\widehat w=c_-+is_-$ by [F2], the coordinate differences satisfy $|\Re(w-\widehat w)|\le c_+-c_-$ and $|\Im(w-\widehat w)|\le s_+-s_-$. [given, F1, F2]

2.1 Applying [F3] to these two coordinate differences gives $|w-\widehat w|\le(c_+-c_-)+(s_+-s_-)\le\epsilon$. The algorithm returns only when $\epsilon\le\tau$, proving the claim. [step 1.1, F2, F3, algebra] ∎
