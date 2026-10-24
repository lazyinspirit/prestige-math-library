---
id: fs-every-cartesian-closed-category-is-locally-cartesian-closed
kind: false-statement
title: "FALSE: every cartesian closed category is locally cartesian closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cartesian-closed-category, def-locally-cartesian-closed-category]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

Every cartesian closed category is locally cartesian closed.

## Facts & Assumptions

**Given:** The category $\mathbf{Set}_{\ne\varnothing}$ of nonempty sets.

[L1] Local cartesian closedness requires every slice to be cartesian closed ([[def-locally-cartesian-closed-category]]).

[A1] The category $\mathbf{Set}_{\ne\varnothing}$ is cartesian closed, by the same function-set argument as in the previous false statement.

## Refutation

**Proof technique:** direct.

1.1 By [A1], $\mathbf{Set}_{\ne\varnothing}$ is cartesian closed. [given, A1]

2.1 In the slice over the two-point set $2=\{0,1\}$, consider the singleton inclusions $\{0\}\hookrightarrow 2$ and $\{1\}\hookrightarrow 2$. Their product in the slice would be their pullback, which is the empty set over $2$. That object is not present in $\mathbf{Set}_{\ne\varnothing}/2$. [step 1.1, given, algebra]

3.1 So the slice over $2$ is not even finitely complete, hence not cartesian closed. Therefore $\mathbf{Set}_{\ne\varnothing}$ is not locally cartesian closed, and the statement is false. [step 2.1, L1] ∎
