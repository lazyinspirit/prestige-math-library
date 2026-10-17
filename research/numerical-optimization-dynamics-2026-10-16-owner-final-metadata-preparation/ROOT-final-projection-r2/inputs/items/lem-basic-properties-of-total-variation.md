---
id: lem-basic-properties-of-total-variation
kind: lemma
title: "Total variation bounds increments; bounded-variation functions are bounded; zero variation means constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-variation-and-total-variation, def-partition-and-refinement,
       lem-finite-sum-laws, lem-of-triangle-inequality, def-bounded-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f:[a,b]\to\mathbb R$ have bounded variation. Then

1. $|f(y)-f(x)|\le\operatorname{Var}_{[a,b]}(f)$ for all $x,y\in[a,b]$;
2. $f$ is bounded on $[a,b]$;
3. $\operatorname{Var}_{[a,b]}(f)=0$ if and only if $f$ is constant.

These claims include the singleton interval $a=b$.

## Facts & Assumptions

**Given:** Reals $a\le b$ and a bounded-variation function $f:[a,b]\to\mathbb R$.

[L1] Total variation is the supremum of the partition sums $V(f,P)$, with value $0$ on a singleton interval ([[def-bounded-variation-and-total-variation]]).

[L2] A point of an interval can be inserted into a partition without deleting its existing points ([[def-partition-and-refinement]]).

[L3] Finite sums of nonnegative terms dominate every term ([[lem-finite-sum-laws]]).

[L4] $|u+v|\le |u|+|v|$ in an ordered field ([[lem-of-triangle-inequality]]).

[L5] A subset of $\mathbb R$ is bounded when the absolute values of its members have a common real bound ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 If $a<b$ and $x<y$ lie in $[a,b]$, insert $x$ and $y$ into the endpoint partition. The resulting partition sum contains $|f(y)-f(x)|$ as a nonnegative term, so $|f(y)-f(x)|\le V(f,P)\le\operatorname{Var}_{[a,b]}(f)$. The same inequality is $0\le\operatorname{Var}_{[a,b]}(f)$ when $x=y$, and when $a=b$ only that case occurs. [L1, L2, L3]

2.1 Put $M:=|f(a)|+\operatorname{Var}_{[a,b]}(f)$. For $x\in[a,b]$, $|f(x)|\le |f(x)-f(a)|+|f(a)|\le M$, so $f([a,b])$ is bounded. [step 1.1, L4, L5]

3.1 If the total variation is $0$, step 1.1 gives $|f(y)-f(x)|=0$ for every $x,y$, hence $f$ is constant. Conversely, if $f$ is constant then every increment in every partition sum is $0$, so every sum and its supremum are $0$; the singleton convention gives the same conclusion when $a=b$. [step 1.1, L1, L3] ∎

