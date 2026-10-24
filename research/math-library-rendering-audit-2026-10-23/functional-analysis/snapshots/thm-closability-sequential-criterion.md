---
id: thm-closability-sequential-criterion
kind: theorem
title: "Sequential criterion for closability"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closable-linear-operator, def-metric-interior-closure-boundary, def-dependent-choice]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Lemma 2.26", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement
Assume DC. A densely defined linear $A:D(A)\subseteq X\to Y$ is closable if and only if every sequence $x_n\in D(A)$ with $x_n\to0$ and $Ax_n\to y$ has $y=0$.
## Facts & Assumptions
**Given:** DC and $A$ as in the statement.
## Proof
**Proof technique:** direct.

1.1 If the graph closure is a graph and $(0,y)$ lies in it, it must equal the graph point $(0,0)$; this proves the sequential condition. [given]

1.2 Conversely, if $(x,y)$ and $(x,z)$ lie in the graph closure, sequences of graph points converging to them exist by metric closure (using DC to choose $1/(n+1)$ approximants). Their differences give a sequence tending to $(0,y-z)$. [given, construct]

2.1 The sequential condition gives $y-z=0$, so the graph closure has at most one second coordinate over each first coordinate; as a closed linear subspace it is a graph. [step 1.2] ∎
