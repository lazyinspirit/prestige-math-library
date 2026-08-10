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
       def-one-sided-limits, def-continuity-real, thm-heine-borel-r,
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

[L2] Every open cover of $[a,b]$ has a finite subcover ([[thm-heine-borel-r]]).

[L3] Every nonempty open interval is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each $x\in(a,b)$ has a left neighborhood and a right neighborhood on each of which the values of $f$ differ by less than $\varepsilon$; use the corresponding one-sided neighborhood at an endpoint. Shrinking them if necessary gives an open cover of $[a,b]$. A finite subcover exists by [L2].

1.2 Order all endpoints of the finitely many chosen neighborhoods and refine them to a partition $P$. On each open component between consecutive partition points, one of the chosen one-sided neighborhoods contains the component, so the oscillation of $f$ there is less than $2\varepsilon$. Sampling $f$ on every component and assigning the actual endpoint values gives a step function within $2\varepsilon$ uniformly. Starting with $\varepsilon/2$ proves the first assertion. [step 1.1]

2.1 For the strengthened assertion, continuity at each point of $E$ permits every covering neighborhood centered there to work on both sides. Every proposed interior endpoint can then be moved slightly while retaining the finite-cover containment relations. By [L3], each available open interval contains a point outside the countable set $E$; choosing such points makes every interior breakpoint avoid $E$. The construction of step 1.2 is unchanged. [step 1.1, step 1.2, L3] ∎
