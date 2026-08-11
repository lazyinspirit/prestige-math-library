---
id: ex-rectangular-products-have-equal-traces
kind: example
title: 'A $2$ by $3$ matrix and a $3$ by $2$ matrix give square products of different sizes but equal traces'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-trace-of-ab-equals-trace-of-ba]
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

## Example

Over any field $F$, let

$$A=\begin{pmatrix}1&2&0\\0&1&3\end{pmatrix},\qquad B=\begin{pmatrix}1&0\\2&1\\0&1\end{pmatrix}.$$

The product $AB$ is $2$ by $2$, the product $BA$ is $3$ by $3$, and their
traces are equal.

## Facts & Assumptions

**Given:** The displayed rectangular matrices over a field $F$.

[L1] For conformable rectangular matrices, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $AB=\begin{pmatrix}5&2\\2&4\end{pmatrix}$ and $BA=\begin{pmatrix}1&2&0\\2&5&3\\0&1&3\end{pmatrix}$. [given, L1]

2.1 Hence $\operatorname{tr}(AB)=5+4=9$ and $\operatorname{tr}(BA)=1+5+3=9$ as elements of $F$, verifying [L1] for products of different square sizes. [step 1.1, L1] ∎
