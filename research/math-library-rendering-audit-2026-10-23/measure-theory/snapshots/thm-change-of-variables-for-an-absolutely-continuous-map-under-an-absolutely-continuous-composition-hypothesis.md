---
id: thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis
kind: theorem
title: "Change of variables for an absolutely continuous map under an absolutely continuous composition hypothesis"
status: published
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Introduction to Real Analysis, Theorem 6.5.6"
      url: "https://doi.org/10.1007/978-3-030-26903-6"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. Under the hypotheses of
[[lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition]],
$$\int_a^bf(g(x))g'(x)\,dx=F(g(b))-F(g(a)).$$

## Facts & Assumptions

**Given:** Countable choice, dependent choice, and $f,F,g$ as in the cited chain-rule lemma.

## Proof

**Proof technique:** direct.

1.1 The lemma identifies $f(g)g'$ with $(F\circ g)'$ almost everywhere and proves it integrable. [given]

2.1 Apply [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] to the AC function $F\circ g$. [step 1.1]

3.1 Its endpoint formula is exactly the displayed equality, including $a=b$. [step 2.1] ∎
