---
id: lem-expectation-is-independent-of-the-ae-representative
kind: lemma
title: "Expectation depends only on the almost-everywhere class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.5"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

If $X$ and $Y$ are integrable real or complex random variables on one
probability space and $X=Y$ almost surely, then
$$\mathbb E[X]=\mathbb E[Y].$$

Thus expectation is a function of the $L^1$-equivalence class.

## Facts & Assumptions

**Given:** Integrable random variables $X,Y$ on one probability space.

[L1] Expectation is the Lebesgue integral with respect to the underlying
probability measure
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[L2] Two integrable functions are equal almost everywhere exactly when all of
their integrals over measurable sets agree
([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

## Proof

**Proof technique:** direct.

1.1 Since $X=Y$ almost surely and both are integrable, [L2] applied to the measurable set $\Omega$ gives $$\int_\Omega X\,d\mathbb P=\int_\Omega Y\,d\mathbb P.$$ [L2, given]

2.1 Rewriting the two integrals as expectations by [L1] yields $\mathbb E[X]=\mathbb E[Y]$. [step 1.1, L1] ∎
