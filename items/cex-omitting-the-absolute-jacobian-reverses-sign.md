---
id: cex-omitting-the-absolute-jacobian-reverses-sign
kind: counterexample
title: 'Omitting the absolute value from the Jacobian gives negative length under the reflection $x\mapsto1-x$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cor-one-dimensional-change-of-variables-with-absolute-derivative, thm-substitution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

**False claim.** In the unoriented change-of-variables formula, one may replace $|\varphi'|$ by $\varphi'$.

## Facts & Assumptions

**Given:** The reflection $\varphi(x)=1-x$ on $[0,1]$ and the constant function $f=1$ on its image.

[L1] The one-dimensional unoriented formula uses the absolute derivative ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]).

[L2] Oriented substitution records orientation through the order of its endpoint limits ([[thm-substitution]]).

## Counterexample

**Proof technique:** direct.

1.1 The image is $[0,1]$, so its unoriented length integral is $\int_0^1 1\,dy=1$. [given]

2.1 Since $\varphi'=-1$, the proposed un-absolute right side is $\int_0^1(-1)\,dx=-1$, not $1$. [given, step 1.1]

3.1 With the required absolute value, [L1] gives $\int_0^1|-1|\,dx=1$. The negative value in step 2.1 instead belongs to the oriented formula [L2], whose image endpoints occur in reverse order. Hence the claim is false. [L1, L2, step 2.1] ∎
