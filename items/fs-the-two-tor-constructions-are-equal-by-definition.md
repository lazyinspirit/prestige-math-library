---
id: fs-the-two-tor-constructions-are-equal-by-definition
title: "The two resolution constructions of Tor are not equal by definition"
kind: false-statement
status: draft
origin: pipeline
deps: ["thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

False claim: resolving the left and resolving the right variable produce literally equal Tor complexes by definition.

## Refutation

**Given:** $R=\mathbb Z$, $N=\mathbb Z/2$, $M=\mathbb Z/3$, and their standard
two-term free resolutions.

1.1 Resolving $M$ gives the left-resolved complex $\mathbb Z/2\xrightarrow{3}\mathbb Z/2$, whose differential is the identity. Resolving $N$ gives the right-resolved complex $\mathbb Z/3\xrightarrow{2}\mathbb Z/3$. [given]

2.1 These complexes are not literally equal: even their degree-zero groups are $\mathbb Z/2$ and $\mathbb Z/3$. Nevertheless both have zero homology, as required because $\mathbb Z/2\otimes\mathbb Z/3=0$ and the positive Tor groups also vanish. [step 1.1, algebra]

3.1 The tensor double-complex argument supplies a natural isomorphism only after passing to homology; this refutes equality by definition. [step 2.1, algebra] ∎
