---
id: ex-psd-nystrom-residual-is-psd
kind: example
title: "A PSD Nyström residual remains positive semidefinite"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-psd-nystrom-approximation
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-psd-nystrom-order-and-exactness
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For $A=\operatorname{diag}(4,1)$ and $S=e_1$, the Nyström approximation is $\operatorname{diag}(4,0)$ and its residual is the positive-semidefinite matrix $\operatorname{diag}(0,1)$.

## Facts & Assumptions

**Given:** $A=\operatorname{diag}(4,1)$ and the one-column sketch $S=e_1$.

[A1] The matrix $A$ and sketch $S$ are those stated in the Example.

[F1] [[def-psd-nystrom-approximation]]: $\widehat A_{\mathrm{nys}}=AS(S^*AS)^\dagger S^*A$.

[F2] [[thm-psd-nystrom-order-and-exactness]]: $0\preceq\widehat A_{\mathrm{nys}}\preceq A$ for every PSD $A$ and conformal sketch.

[F3] [[def-moore-penrose-pseudoinverse]]: the Moore-Penrose inverse is characterized by the four Penrose equations.

[F4] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite matrix has a unique Moore-Penrose inverse.



**Given:** $A,S$ from [A1].

## Verification

1.1 We have $AS=(4,0)^T$ and $S^*AS=[4]$. The scalar $[1/4]$ satisfies all four equations [F3], so it is the Moore-Penrose inverse by uniqueness [F4]. Substitution in [F1] gives $\widehat A_{\mathrm{nys}}=\operatorname{diag}(4,0)$. [given, A1, F1, F3, F4, algebra]

2.1 Subtracting from $A$ gives $A-\widehat A_{\mathrm{nys}}=\operatorname{diag}(0,1)$, which is positive semidefinite by its nonnegative diagonal entries. The general order statement [F2] also gives $0\preceq\widehat A_{\mathrm{nys}}\preceq A$ in this instance. [A1, F2, step 1.1, algebra] ∎
