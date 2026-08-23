---
id: cor-real-gamma-positive-integer-values
kind: corollary
title: '$\Gamma(n+1)=n!$ for every natural number $n$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-gamma-functional-equation, def-factorial-and-falling-factorial, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

For every natural number $n$, $\Gamma(n+1)=n!$.

## Facts & Assumptions

**Given:** Factorial recursion $0!=1$ and $(n+1)!=(n+1)n!$ from [[def-factorial-and-falling-factorial]].

[F1] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

## Proof

**Proof technique:** induction.

1.1 At $n=0$, [F1] gives $\Gamma(1)=1=0!$. [F1, base]

1.2 Assume $\Gamma(n+1)=n!$. Then [F1] gives $\Gamma(n+2)=(n+1)\Gamma(n+1)=(n+1)n!=(n+1)!$. [F1, ih, algebra]

2.1 The induction principle therefore proves $\Gamma(n+1)=n!$ for every $n\in\mathbb N$. [step 1.1, step 1.2, discharge-induction] ∎
