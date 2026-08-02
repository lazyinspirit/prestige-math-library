---
id: ex-finite-set-system-sdr
kind: example
title: "A three-set family with an explicit system of distinct representatives"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-hall-sdr-finite-families]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $A_1=\{a,b\}$, $A_2=\{b,c\}$, and $A_3=\{a,c\}$, the assignment
$r(1)=a$, $r(2)=b$, $r(3)=c$ is an SDR.

## Facts & Assumptions

**Given:** The three finite sets $A_1,A_2,A_3$.

[L1] A family with finite index set and finite union has an SDR exactly when every indexed subfamily has union at least as large as its index set ([[cor-hall-sdr-finite-families]]).

## Verification

**Verification technique:** constructive.

1.1 Each singleton union has size two, each two-set union is $\{a,b,c\}$, and the three-set union is $\{a,b,c\}$; the Hall union inequalities all hold. [given, construct]

1.2 By [L1], the family has an SDR. [L1]

2.1 The displayed assignment chooses an element of each $A_i$ and has three distinct values, so it is the promised SDR. [step 1.1, step 1.2, discharge-construct] ∎
