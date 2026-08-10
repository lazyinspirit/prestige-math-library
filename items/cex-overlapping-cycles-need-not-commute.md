---
id: cex-overlapping-cycles-need-not-commute
kind: counterexample
title: 'Overlapping cycles need not commute'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-symmetric-group, lem-disjoint-cycles-commute]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

**False claim.** Any two cycles commute, even when their supports overlap.

## Facts & Assumptions

**Given:** The cycles $\alpha=(0\,1)$ and $\beta=(1\,2)$ in $S_3$.

[L1] Cycles with disjoint supports commute; disjointness is a hypothesis of that result ([[lem-disjoint-cycles-commute]]).

## Counterexample

**Proof technique:** direct.

1.1 With the right-hand factor acting first, $\alpha\beta(0)=\alpha(0)=1$, whereas $\beta\alpha(0)=\beta(1)=2$. [given, L1]

2.1 Therefore $\alpha\beta\ne\beta\alpha$. Their supports overlap at $1$, so this explicit pair refutes the claim and shows why the disjoint-support hypothesis in [L1] is necessary. [step 1.1, L1] ∎
