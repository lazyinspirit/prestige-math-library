---
id: lem-module-elementary-consequences
kind: lemma
title: "In a module, $0_Rm=0_M$, $r0_M=0_M$, $(-r)m=-(rm)$ and $r(-m)=-(rm)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-modules, def-ring, lem-group-cancellation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Statement

For every left $R$-module $M$, scalar $r\in R$, and element $m\in M$,

$$0_Rm=0_M,\qquad r0_M=0_M,\qquad (-r)m=-(rm),\qquad r(-m)=-(rm).$$

## Facts & Assumptions

**Given:** A left $R$-module $M$, $r\in R$, and $m\in M$.

[L1] The module action distributes over both addition operations, and $(M,+,0_M)$
is an abelian group ([[def-left-and-right-modules]]).

[L2] The additive structure $(R,+,0_R)$ is an abelian group, so
$r+(-r)=0_R$ ([[def-ring]]).

[L3] Cancellation holds in every group, hence in the additive groups of $R$
and $M$ ([[lem-group-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 Since $0_R=0_R+0_R$, distributivity gives $0_Rm=0_Rm+0_Rm$; cancellation yields $0_Rm=0_M$. [L1, L3, given]

1.2 Since $0_M=0_M+0_M$, distributivity gives $r0_M=r0_M+r0_M$; cancellation yields $r0_M=0_M$. [L1, L3, given]

2.1 From $(r+(-r))m=0_Rm=0_M$, distributivity and step 1.1 give $rm+(-r)m=0_M$, so $(-r)m=-(rm)$. [step 1.1, L1, L2, L3, given]

3.1 From $r(m+(-m))=r0_M=0_M$, distributivity and step 1.2 give $rm+r(-m)=0_M$, so $r(-m)=-(rm)$. [step 1.2, L1, L3, given] ∎
