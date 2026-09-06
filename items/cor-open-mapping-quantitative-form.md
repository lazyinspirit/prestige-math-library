---
id: cor-open-mapping-quantitative-form
kind: corollary
title: "Quantitative lifting form of the open mapping theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-open-mapping-theorem]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Corollary 2.11", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement
Assume DC. For a surjective bounded linear $T:X\to Y$ between Banach spaces, some $c>0$ satisfies $cB_Y(0,1)\subseteq T(B_X(0,1))$.
## Facts & Assumptions
**Given:** DC and $T$ as in the statement.
## Proof
**Proof technique:** direct.

1.1 By [[thm-open-mapping-theorem]], $T(B_X(0,1))$ is an open neighbourhood of $0$. [given]

2.1 It therefore contains $B_Y(0,c)$ for some $c>0$, which is exactly the claim. [step 1.1] ∎
