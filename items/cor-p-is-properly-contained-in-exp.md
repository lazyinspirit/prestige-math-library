---
id: cor-p-is-properly-contained-in-exp
kind: corollary
title: "P is properly contained in EXP"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-deterministic-time-hierarchy, def-p, def-exp-and-nexp]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Sebastiaan Terwijn, Complexity Theory, §2.2"
      url: "https://www.math.ru.nl/~terwijn/teaching/complexitytheory.pdf"
---

## Statement

$$ P\subsetneq EXP. $$

## Facts & Assumptions

**Given:** $f(n)=2^{\lceil\sqrt n\rceil}$ and $g(n)=2^n$.

## Proof

**Proof technique:** direct.

1.1 Every polynomial is $O(f)$, while $f\log f=o(g)$; both displayed bounds are time constructible. [given, algebra]

2.1 The time hierarchy gives $\mathrm{DTIME}(f)\subsetneq\mathrm{DTIME}(g)$. Since $P\subseteq\mathrm{DTIME}(f)$ and $\mathrm{DTIME}(g)\subseteq EXP$, this supplies a language in $EXP\setminus P$. [step 1.1] ∎
