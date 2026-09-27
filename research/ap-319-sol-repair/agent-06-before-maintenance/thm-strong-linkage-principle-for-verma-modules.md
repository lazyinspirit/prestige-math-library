---
id: thm-strong-linkage-principle-for-verma-modules
kind: theorem
title: "The strong linkage principle for Verma modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-strong-linkage-order-on-weights, prop-verma-composition-multiplicities-are-finite, lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule, thm-jantzen-sum-formula-for-a-verma-module]
proof_strategy: induction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Theorem 20.13"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

If $[M(\lambda):L(\mu)]\ne0$, then $\mu\uparrow\lambda$.

## Facts & Assumptions

**Given:** Strong linkage [[def-strong-linkage-order-on-weights]], finite multiplicities [[prop-verma-composition-multiplicities-are-finite]], the first filtration term [[lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule]], and the Jantzen sum formula [[thm-jantzen-sum-formula-for-a-verma-module]].

## Proof

**Proof technique:** induction.

1.1 Induct on the height of $\lambda-\mu$. Height zero gives $L(\lambda)$ and the empty linkage chain. [given, base]

1.2 For positive height, the factor is in the maximal submodule $M^1(\lambda)$. The Jantzen sum and finite multiplicities place it in some $M(s_\alpha\mathbin\cdot\lambda)$ with $\langle\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z_{>0}$. [given, ih]

2.1 The new difference has smaller height, so induction gives $\mu\uparrow s_\alpha\mathbin\cdot\lambda$; appending the indicated positive-integral reflection gives $\mu\uparrow\lambda$. [step 1.2, ih, discharge-induction] ∎
