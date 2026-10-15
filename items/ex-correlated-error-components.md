---
id: ex-correlated-error-components
kind: example
title: "Perfectly correlated error components"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-statistical-and-computational-error-ledger
  - thm-error-ledger-mse-covariance-identity
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $U$ equal $-1$ or $1$ with probability $1/2$ each, and set $V=U$. Both component errors are centered and have variance one, but they are perfectly correlated.

## Facts & Assumptions

**Given:** A two-point probability space with $U\in\{-1,1\}$ equally likely and $V=U$, interpreted as two successive signed stage errors. Compute the mean-squared sum and compare it with the variance-only sum.

[F1] The mean-squared sum of square-integrable components includes twice each pairwise covariance. ([[thm-error-ledger-mse-covariance-identity]])

[F2] An error ledger records each stage error as the difference of adjacent scalar references. ([[def-statistical-and-computational-error-ledger]])

## Verification

1.1 Set the first reference to $0$, the next to $U$, and the returned value to $U+V$; by [F2] the two signed stage errors are exactly $U$ and $V$. [given, F2, construct]

1.2 Since $U$ equals $-1$ or $1$ with equal probability and $V=U$, $\mathbb E U=\mathbb E V=0$ and $\operatorname{Var}(U)=\operatorname{Var}(V)=1$. [given, algebra]

2.1 Because $V=U$, $\operatorname{Cov}(U,V)=\mathbb E[UV]=1$ and $\mathbb E[(U+V)^2]=4$. [given, step 1.2, algebra]

3.1 [F1] gives the same value, $1+1+2(1)=4$, whereas adding only the two component variances gives $2$; the omitted covariance term changes the result. [F1, step 1.2, step 2.1, algebra] ∎
