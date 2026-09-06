---
id: cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm
kind: counterexample
title: A gauge of a nonbalanced set need not be a seminorm
status: published
origin: pipeline
deps: [def-minkowski-functional, lem-minkowski-functional-is-sublinear]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, §5.1
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Statement refuted

An absorbing convex set need not have a seminorm as its gauge.

## Facts & Assumptions

**Given:** The convex absorbing set $C=(-1,2)\subseteq\mathbb R$.

[F1] The gauge is the infimum of positive $t$ for which $x\in tC$ ([[def-minkowski-functional]]).

## Counterexample

**Proof technique:** direct.

1.1 From $x\in t(-1,2)\Longleftrightarrow -t<x<2t$, [F1] gives $p_C(x)=x/2$ for $x\ge0$ and $p_C(x)=-x$ for $x<0$. [F1, given, algebra]

2.1 Hence $p_C(1)=1/2$ while $p_C(-1)=1$, contradicting the required equality $p_C(-1)=|-1|p_C(1)$. The missing hypothesis is balancedness. [step 1.1] ∎
