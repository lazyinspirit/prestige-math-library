---
id: lem-conditional-expectation-is-unique-almost-surely
kind: lemma
title: "Conditional expectation is unique almost surely"
status: draft
origin: pipeline
deps: [def-conditional-expectation-given-a-sigma-algebra, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-closure-properties-of-measurable-functions-used-by-the-integral]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

If $Y,Z$ are conditional-expectation versions of the same real integrable $X$ given $\mathcal G$, then $Y=Z$ almost surely.

## Facts & Assumptions

**Given:** A probability space, a sub-sigma-algebra $\mathcal G$, an integrable real X, and two versions Y,Z with all its G-event integrals.

[F1] Both versions have the same event integrals. ([[def-conditional-expectation-given-a-sigma-algebra]])

[F2] The difference is integrable and its integral is the difference of integrals. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F3] Differences and their positive and negative parts are measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F4] Zero integral of a nonnegative function implies it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

## Proof

**Proof technique:** direct.

1.1 The difference $D=Y-Z$ is $\mathcal G$-measurable and integrable, and $\int_A D\,dP=0$ for every $A\in\mathcal G$. In particular the sets $A_+=\{D>0\}$ and $A_-=\{D<0\}$ belong to $\mathcal G$. [F1, F2, F3]

2.1 On $A_+$, $D\mathbf1_{A_+}=D^+\ge0$ has zero integral; on $A_-$, $-D\mathbf1_{A_-}=D^-\ge0$ also has zero integral. By [F4], both parts vanish almost surely. Off the union of their two null exceptional sets, $D=D^+-D^-=0$, proving $Y=Z$ almost surely. [step 1.1, F4] ∎

## Source notes

Durrett §4.1, uniqueness paragraph, printed p.206; van der Vaart Theorem 1.3, printed p.2.
