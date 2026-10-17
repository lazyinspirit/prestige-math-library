---
id: thm-integration-by-parts-for-absolutely-continuous-functions
kind: theorem
title: "Integration by parts for absolutely continuous functions"
status: published
origin: pipeline
landmark: true
deps: [def-countable-choice, def-dependent-choice, lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
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
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Corollary 6.3.9"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. For $F,G\in AC[a,b]$,
$$\int_a^bFG'+\int_a^bF'G=F(b)G(b)-F(a)G(a).$$

## Facts & Assumptions

**Given:** Countable choice, dependent choice, and absolutely continuous functions $F,G$ on $[a,b]$.

## Proof

**Proof technique:** direct.

1.1 The product lemma makes $FG$ AC. At the common full-measure set where $F'$ and $G'$ exist, the ordinary product rule gives $(FG)'=F'G+FG'$. The sharp FTC makes $F',G'$ integrable, and continuity on the compact interval bounds $F,G$, so both products are integrable. [given, algebra]

2.1 Apply [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] to $FG$ and integrate the displayed derivative. [step 1.1]

3.1 Rearranging gives the stated identity, with identical zero sides on $[a,a]$. [step 2.1, algebra] ∎
