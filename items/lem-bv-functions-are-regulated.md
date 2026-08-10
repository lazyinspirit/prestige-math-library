---
id: lem-bv-functions-are-regulated
kind: lemma
title: "Every bounded-variation function is uniformly approximable by step functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-bv-discontinuities-are-countable-and-of-first-kind,
       def-one-sided-limits, def-continuity-real, def-complete-ordered-field,
       def-partition-and-refinement, def-bounded-variation-and-total-variation,
       cor-interval-uncountable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.2"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If $f:[a,b]\to\mathbb R$ has bounded variation, then for every $\varepsilon>0$ there is a finite step function $s$ with $\lVert f-s\rVert_\infty<\varepsilon$. Endpoint values of $s$ may be prescribed to equal those of $f$.

More precisely, if $E\subseteq[a,b]$ is at most countable and $f$ is continuous at every point of $E$, the interior breakpoints of $s$ may all be chosen outside $E$.

## Facts & Assumptions

**Given:** A BV function $f$, a tolerance $\varepsilon>0$, and, for the strengthened assertion, an at most countable set $E$ of continuity points of $f$.

[L1] A BV function has finite one-sided limits at every point ([[cor-bv-discontinuities-are-countable-and-of-first-kind]], [[def-one-sided-limits]]).

[L2] Every nonempty subset of the reals that is bounded above has a supremum ([[def-complete-ordered-field]]).

[L3] Every nonempty open interval is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\eta>0$. Let $A$ be the set of $x\in[a,b]$ for which there is a finite chain $a=x_0<\cdots<x_m=x$ such that the oscillation of $f$ on every open interval $(x_{j-1},x_j)$ is below $\eta$. The set contains $a$ and is bounded above by $b$, so $c:=\sup A$ exists by [L2]. [L2, construct]

2.1 Suppose $c<b$. The left limit at $c$ and the right limit at $c$ supplied by [L1] give one-sided intervals on which the oscillation is below $\eta$. Choose $x\in A$ in the left interval (use $x=a$ if $c=a$), append $c$ to its chain if necessary, and then append a point $y>c$ in the right interval. This puts $y$ in $A$, contradicting that $c$ is an upper bound. Hence $c=b$. The left limit at $b$ now lets a chain ending sufficiently near $b$ be extended to $b$. Thus there is a finite partition of $[a,b]$ on each of whose open components the oscillation of $f$ is below $\eta$. The singleton case is immediate. [step 1.1, L1, L2]

3.1 On each open component choose one value of $f$, and at every partition point assign the actual value of $f$. The resulting finite step function differs from $f$ by less than $\eta$ everywhere. Taking $\eta=\varepsilon/4$ leaves room for the strengthened construction. [step 2.1, choose]

4.1 Only finitely many interior breakpoints lie in $E$. Around each such breakpoint $c$, continuity of $f$ gives a small two-sided interval, disjoint from the corresponding intervals for the other breakpoints, on which the oscillation is below $\varepsilon/4$. By [L3] choose a replacement point outside $E$ in that interval and between the neighboring breakpoints. Moving the breakpoint adds only a subinterval from this continuity neighborhood to either adjacent component; the original component oscillation is below $\varepsilon/4$, and a component can be enlarged at both ends, so its new oscillation is at most $\varepsilon/4+\varepsilon/4+\varepsilon/4<\varepsilon$, the three pieces overlapping at the old breakpoints. Sampling again and retaining the actual values at all breakpoints and endpoints gives the required approximation with every interior breakpoint outside $E$. [step 3.1, L3] ∎
