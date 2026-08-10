---
id: lem-jumps-of-the-variation-function
kind: lemma
title: "The jumps of a variation function equal the absolute jumps of the original function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-variation-additive-on-subintervals,
       lem-basic-properties-of-total-variation,
       cor-bv-discontinuities-are-countable-and-of-first-kind,
       def-one-sided-limits, thm-algebra-of-function-limits,
       def-continuity-real]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Statement

Let $f:[a,b]\to\mathbb R$ have bounded variation and let $V_f(x)=\operatorname{Var}_{[a,x]}(f)$. At an interior point $c$,

$$V_f(c+)-V_f(c)=|f(c+)-f(c)|,\qquad V_f(c)-V_f(c-)=|f(c)-f(c-)|.$$

The corresponding one-sided formula holds at either endpoint. In particular,
$V_f$ is continuous at every point where $f$ is continuous.

## Facts & Assumptions

**Given:** A bounded-variation function $f:[a,b]\to\mathbb R$, its variation function $V_f$, and a point $c\in[a,b]$.

[L1] $V_f(y)-V_f(x)=\operatorname{Var}_{[x,y]}(f)$ whenever $x\le y$ ([[lem-variation-additive-on-subintervals]]).

[L2] $|f(y)-f(x)|\le\operatorname{Var}_{[x,y]}(f)$ ([[lem-basic-properties-of-total-variation]]).

[L3] Every relevant one-sided limit of a BV function exists ([[cor-bv-discontinuities-are-countable-and-of-first-kind]], [[def-one-sided-limits]]).

[L4] Finite sums and differences preserve existing one-sided limits ([[thm-algebra-of-function-limits]]).

[L5] Continuity is equality of the relevant limit with the function value ([[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 Since $V_f$ is nondecreasing and bounded above by $V_f(b)$, its one-sided limits exist. By [L1] and [L2], $V_f(x)-V_f(c)\ge|f(x)-f(c)|$ for $x>c$; passage to the right limit gives $V_f(c+)-V_f(c)\ge|f(c+)-f(c)|$. [L1, L2, L3, L4]

1.2 For the reverse inequality, fix $x_0>c$. Additivity gives $\operatorname{Var}_{[c,x_0]}(f)=\operatorname{Var}_{[c,x]}(f)+\operatorname{Var}_{[x,x_0]}(f)$ for $c<x<x_0$. The increasing quantity $\operatorname{Var}_{[x,x_0]}(f)$ has supremum at most $\operatorname{Var}_{[c,x_0]}(f)$. If $\operatorname{Var}_{[c,x]}(f)$ did not tend to $|f(c+)-f(c)|$, partitions witnessing a fixed positive excess on a nested sequence of intervals shrinking to $c$ could be spliced on disjoint successive annuli; the resulting finite variation sums would exceed $\operatorname{Var}_{[c,x_0]}(f)$. Therefore $\lim_{x\downarrow c}\operatorname{Var}_{[c,x]}(f)=|f(c+)-f(c)|$. [L1, L2, L3]

2.1 Combining step 1.2 with [L1] proves the right-hand formula. Applying the same argument to the reversed interval proves the left-hand formula. If $f$ is continuous at $c$, both absolute jumps vanish by [L5], so both one-sided limits of $V_f$ equal $V_f(c)$ and $V_f$ is continuous there. Endpoint cases use only the available side. [step 1.1, step 1.2, L1, L3, L5] ∎
