---
id: ex-pe26-coarse-solve-work-bottleneck
kind: example
title: A dense coarse solve can dominate local work
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [thm-pe26-condition-number-2d-polylogarithmic]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the operation counts follow the stated dense direct-solver model."
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Consider a dense direct-solve cost model with $N$ subdomains, local matrix dimension $m$ fixed, and a coarse dimension $n_c$ proportional to $N$. If local matrices are factored concurrently by dense Cholesky, the local arithmetic is $O(Nm^3)$ in total and $O(m^3)$ ideal parallel time. The coarse factorization uses $O(n_c^3)$ arithmetic and $O(n_c^2)$ storage. For fixed $H/h$, [[thm-pe26-condition-number-2d-polylogarithmic]] keeps the iteration condition bound independent of $N$, while the dense coarse solve can dominate total work.

## Facts & Assumptions

**Given:** $N$ local matrices of equal fixed dimension $m$, one primal variable per subdomain, concurrent local factorizations, and a dense direct Cholesky model for the coarse solve.

[F1] [[thm-pe26-condition-number-2d-polylogarithmic]]: under its fixed geometric and coefficient assumptions, the condition-number bound contains $H/h$ but no subdomain-count factor.

## Verification

1.1 A dense Cholesky factorization of an $m\times m$ SPD matrix uses a constant multiple of $m^3$ arithmetic operations and stores $O(m^2)$ entries. Repeating on $N$ local matrices gives total $O(Nm^3)$ work, and perfect concurrency reduces the local phase to $O(m^3)$ time. [given, algebra]

2.1 Since $n_c$ is proportional to $N$, dense coarse Cholesky uses $O(N^3)$ arithmetic and $O(N^2)$ storage. If $H/h$ stays fixed while the number of subdomains grows, [F1] leaves the iteration condition bound unchanged, but the coarse direct-solve work grows cubically. [given, F1, step 1.1, algebra] ∎
