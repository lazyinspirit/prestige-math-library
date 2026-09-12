---
id: prop-doubling-map-is-strongly-mixing
kind: proposition
title: Doubling is strongly mixing for Lebesgue measure
deps: ["def-circle-rotation-and-doubling-map", "thm-integer-base-map-is-strongly-mixing", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Proposition 1.5 p.9
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. Doubling is strongly mixing for Borel Lebesgue probability and for its completion: $\lambda(A\cap D^{-n}B)\to\lambda(A)\lambda(B)$ for every pair of measurable circle sets.

## Facts & Assumptions

[F1] The strong-mixing theorem covers b=2 and both measure domains. [[thm-integer-base-map-is-strongly-mixing]].

[F2] Doubling is the base-two fractional-part map. [[def-circle-rotation-and-doubling-map]].

## Proof

**Given:** Assume countable choice. Doubling is strongly mixing for Borel Lebesgue probability and for its completion: $\lambda(A\cap D^{-n}B)\to\lambda(A)\lambda(B)$ for every pair of measurable circle sets.

1.1 The definition gives D=D_2. Taking b=2 in the integer-base theorem, with exactly its countable-choice assumption, yields the stated correlation limit for every Borel pair and every completed pair. [F1, F2]

2.1 For clarity, if A and B are dyadic intervals of depths r and s, the proof gives the exact value $2^{n-r}2^{-(n+s)}=2^{-r-s}=\lambda(A)\lambda(B)$ for every n>=r. This includes the depth-zero whole circle; an empty test set gives zero. Thus the specialization retains the explicit dyadic correlation calculation as well as the general measurable-set conclusion. [step 1.1, F1] ∎

