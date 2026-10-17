---
id: thm-centered-taylor-model-encloses-function-range
kind: theorem
title: Centered Taylor models with derivative intervals enclose the function range
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-centered-taylor-model-with-derivative-interval, lem-taylor-integral-remainder, thm-outward-rounded-operations-are-isotone-and-dag-sound]
sources:
  references:
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §11.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

Under the hypotheses in
[[def-centered-taylor-model-with-derivative-interval]],
$f(X)\subseteq\mathcal T_n(f,X,c,(C_j)_{j=0}^n,D)$. For $n=0$ this gives
$f(X)\subseteq C_0+[-M R,M R]$.

## Facts & Assumptions

**Given:** The Taylor model in
[[def-centered-taylor-model-with-derivative-interval]], Taylor's integral
remainder formula in [[lem-taylor-integral-remainder]], and the outward
interval operations in
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]].

[L1] [[def-centered-taylor-model-with-derivative-interval]]: each $C_j$
contains $f^{(j)}(c)/j!$, $D$ contains $f^{(n+1)}(X)$, $M$ bounds the
absolute values of $D$, and $R$ bounds $|x-c|$ for every $x\in X$.

[L2] [[lem-taylor-integral-remainder]]: each Taylor remainder is an integral
and has absolute value at most $M|x-c|^{n+1}/(n+1)!$ when
$|f^{(n+1)}|\le M$ on the segment.

[L3] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: the
computed polynomial range and interval sum enclose their exact counterparts.

## Proof

1.1 Fix $x\in X$. If $x=c$, the polynomial already equals $f(c)$ and the remainder is zero. Otherwise the segment from $c$ to $x$ lies in $X$, so [L1] places $f^{(n+1)}$ there in $D$ and gives $|f^{(n+1)}|\le M$; also $|x-c|\le R$. The Taylor integral remainder bound [L2] is therefore at most $M R^{n+1}/(n+1)!$. [given, L1, L2]

2.1 For every $x\in X$, [L1] puts each exact coefficient of $P_n(x)$ inside the corresponding $C_j$, so the polynomial interval evaluation contains $P_n(x)$ by [L3]. The remainder from step 1.1 lies in the symmetric interval used in $\mathcal T_n$. Thus $f(x)$ lies in the exact sum, and outward evaluation preserves that inclusion by [L3]. Since $x$ was arbitrary, the whole range $f(X)$ is enclosed. [step 1.1, L1, L3, algebra] ∎

