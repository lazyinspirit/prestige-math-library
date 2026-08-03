---
id: lem-submodule-criterion-sums-and-intersections
kind: lemma
title: "The one-step submodule criterion; intersections and sums of submodules are submodules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-submodule, def-left-and-right-modules, lem-subgroup-criterion, lem-module-elementary-consequences]
justified_by: []
aliases: []
landmark: true
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

Let $M$ be a left $R$-module. A nonempty subset $S\subseteq M$ is a submodule
if and only if

$$ru+v\in S\qquad(r\in R, u,v\in S).$$

Consequently, the intersection of every nonempty family of submodules is a
submodule, and, for submodules $A,B\le M$,

$$A+B:=\{a+b:a\in A, b\in B\}$$

is a submodule of $M$.

## Facts & Assumptions

**Given:** A left $R$-module $M$.

[L1] The module axioms include $1_Rm=m$ and distributivity of scalar multiplication over both additions ([[def-left-and-right-modules]]).

[L2] In a module, $(-r)m=-(rm)$; taking $r=1_R$ and using [L1] gives $(-1_R)m=-m$ ([[lem-module-elementary-consequences]]).

[L3] A nonempty subset of a group is a subgroup exactly when it is closed under $xy^{-1}$ ([[lem-subgroup-criterion]]).

[L4] A submodule is an additive subgroup closed under scalar multiplication ([[def-submodule]]).

## Proof

**Proof technique:** direct.

1.1 If $S$ is a submodule, then $u\in S$ implies $ru\in S$, and then $ru+v\in S$ for $r\in R$ and $u,v\in S$. [L4, given]

1.2 Conversely, suppose the displayed closure condition holds and choose $s\in S$. With $r=-1_R$ and both elements equal to $s$, it gives $(-1_R)s+s=0_M\in S$. [L1, L2, given]

1.3 If $u,v\in S$, the same condition with scalar $-1_R$, first element $v$, and second element $u$ gives $(-1_R)v+u=u-v\in S$. [L1, L2, given]

2.1 The additive subgroup test applies by steps 1.2--1.3; scalar closure follows from the displayed condition with $v=0_M$. Thus $S$ is a submodule. [step 1.2, step 1.3, L3, L4, given]

3.1 For a nonempty family $(N_i)$ of submodules, $0_M$ lies in every $N_i$; and if $u,v$ lie in their intersection, then $ru+v$ lies in every $N_i$. The criterion proves $\bigcap_iN_i$ is a submodule. [step 2.1, L4, given]

4.1 For $x=a+b$ and $y=a'+b'$ in $A+B$, distributivity gives $rx+y=(ra+a')+(rb+b')\in A+B$; moreover $0_M=0_M+0_M\in A+B$. The criterion proves $A+B$ is a submodule. [step 2.1, L1, L4, given] ∎
