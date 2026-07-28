---
id: ex-the-metric-urysohn-function-costs-no-choice
kind: example
title: "In a metric space the function $d(x,A)/(d(x,A) + d(x,B))$ separates two disjoint closed sets outright, so the metric case spends no choice principle"
status: draft
origin: session
deps: [thm-urysohn-lemma, thm-metric-spaces-are-completely-normal,
       thm-metric-spaces-are-tychonoff-and-perfectly-normal, def-metric-space,
       def-metric-topology, def-dependent-choice, def-continuous-map-top,
       def-interval, def-metrizable-space, lem-distance-to-set-is-lipschitz]
justified_by: []
aliases: []
landmark: false
short: "an explicit choice-free metric Urysohn function"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
pipeline_run: null
---

## Example

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), metrizable ([[def-metrizable-space]]) and hence
normal ([[thm-metric-spaces-are-completely-normal]]), and let $A, B \subseteq X$
be disjoint, nonempty and closed. Define $h : X \to [0,1]$ by

$$h(x) \;:=\; \frac{d(x,A)}{d(x,A)+d(x,B)}.$$

Then $h$ is a witness for [[thm-urysohn-lemma]] applied to $A$ and $B$, and it
is written down by a single formula: no choice principle, dependent or
otherwise, is spent in producing it, in contrast with the general
construction inside that theorem.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and disjoint, nonempty, closed $A, B \subseteq X$.

[L1] For nonempty $S \subseteq X$: $d(\cdot,S)$ is $1$-Lipschitz, hence continuous ([[lem-distance-to-set-is-lipschitz]]); $d(x,S) \ge 0$; and $d(x,S)=0$ exactly when $x \in \overline{S} = S$, $S$ being closed ([[thm-metric-spaces-are-completely-normal]]'s own Facts, [[def-metric-space]]).

## Verification

**Proof technique:** direct.

1.1 For every $x \in X$: $d(x,A) \ge 0$ and $d(x,B) \ge 0$ by [L1], and they are not both $0$, since $d(x,A)=d(x,B)=0$ would give $x \in A \cap B = \varnothing$ by [L1] (A, B closed); so $d(x,A)+d(x,B) > 0$ and $h(x)$ is a well-defined real number. [given, L1, algebra]

2.1 $0 \le h(x) \le 1$ for every $x$, since $0 \le d(x,A) \le d(x,A)+d(x,B)$ by step 1.1. [step 1.1, algebra]

2.2 $h$ is continuous: it is the quotient of the continuous functions $d(\cdot,A)$ and $d(\cdot,A)+d(\cdot,B)$ (both continuous by [L1], the second a sum of continuous functions), and the denominator is nowhere $0$ by step 1.1. [step 1.1, L1]

2.3 For $x \in A$: $d(x,A)=0$ by [L1], so $h(x) = 0/(0+d(x,B)) = 0$. For $x \in B$: $d(x,B)=0$, and $d(x,A) \ne 0$ by step 1.1, so $h(x) = d(x,A)/(d(x,A)+0) = 1$. [step 1.1, L1, algebra]

3.1 By steps 2.1, 2.2 and 2.3, $h : X \to [0,1]$ is continuous with $A \subseteq h^{-1}(\{0\})$ and $B \subseteq h^{-1}(\{1\})$, exactly the conclusion of [[thm-urysohn-lemma]] for the pair $A,B$. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Nothing is selected.** Every value $h(x)$ is computed from $d(x,A)$ and $d(x,B)$, both determined by $x$, $A$, $B$ and $d$ alone; no step above fixes a witness from a nonempty set of alternatives. This is the same observation [[thm-metric-spaces-are-completely-normal]] and [[thm-metric-spaces-are-tychonoff-and-perfectly-normal]] make about their own constructions, and it is why the metric case of every separation theorem on this page needs no choice hypothesis at all.

- **The nonemptiness of $A$ and $B$ is not decoration.** If $A=\varnothing$ then $d(x,A)$ is undefined for every $x$ ([[lem-distance-to-set-is-lipschitz]] presupposes a nonempty set), and the constant function $1$ serves instead; the formula above is written for the case that matters, where both sets carry a point to measure distance from.
