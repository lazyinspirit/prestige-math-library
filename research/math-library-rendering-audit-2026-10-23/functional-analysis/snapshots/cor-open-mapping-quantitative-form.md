---
id: cor-open-mapping-quantitative-form
kind: corollary
title: "Quantitative lifting form of the open mapping theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-open-mapping-theorem, def-dependent-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Corollary 2.11", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement
Assume DC. For a surjective bounded linear $T:X\to Y$ between Banach spaces, some $c>0$ satisfies $cB_Y(0,1)\subseteq T(B_X(0,1))$.
## Facts & Assumptions
**Given:** DC and $T$ as in the statement.

[A1] The stated Dependent Choice is the premise for the open-mapping theorem ([[def-dependent-choice]]).
## Proof
**Proof technique:** direct.

1.1 Under [A1], [[thm-open-mapping-theorem]] makes $T(B_X(0,1))$ an open neighbourhood of $0$. [given, A1]

2.1 It therefore contains $B_Y(0,c)$ for some $c>0$, which is exactly the claim. [step 1.1] ∎
