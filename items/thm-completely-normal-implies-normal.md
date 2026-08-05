---
id: thm-completely-normal-implies-normal
kind: theorem
title: "Every completely normal space is normal, and every perfectly normal space is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "completely normal implies normal"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separated sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separated_sets"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

1. If $X$ is completely normal
   ([[def-completely-normal-and-perfectly-normal-spaces]]) then $X$ is normal
   ([[def-normal-and-t4-spaces]]).
2. If $X$ is perfectly normal then $X$ is normal.
3. Consequently $T_5$ implies $T_4$ and $T_6$ implies $T_4$.

Claim 2 is immediate from the definition, normality being one of the two
conjuncts of perfect normality; it is recorded here so that the chain assembled
at the end of this page has a single item to cite for both implications. Claim 1
is the one with content, and its content is that disjoint *closed* sets are a
special case of separated sets.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and closed sets $A, B \subseteq X$ with $A \cap B = \varnothing$.

[A1] $X$ completely normal: every pair of separated sets admits disjoint open supersets ([[def-completely-normal-and-perfectly-normal-spaces]]).

[A2] $X$ perfectly normal: $X$ is normal and every closed subset of $X$ is a $G_\delta$ ([[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] $A$ and $B$ are separated when $\overline{A} \cap B = A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[L2] A set is closed exactly when it equals its own closure ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L3] Normality is the assertion that disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 $\overline{A} = A$ and $\overline{B} = B$, both sets being closed. [L2]

1.2 If $X$ is perfectly normal then $X$ is normal, this being the first conjunct of [A2], which is claim 2. [A2, L3]

2.1 $\overline{A} \cap B = A \cap B = \varnothing$ and $A \cap \overline{B} = A \cap B = \varnothing$, so $A$ and $B$ are separated. [step 1.1, L1]

3.1 If $X$ is completely normal, [A1] applied to the separated pair of step 2.1 gives disjoint open $U \supseteq A$ and $V \supseteq B$; since $A$ and $B$ were arbitrary disjoint closed sets, $X$ is normal, which is claim 1. [step 2.1, A1, L3]

4.1 Adding the hypothesis $T_1$ to either of steps 3.1 and 1.2 turns $T_5$, respectively $T_6$, into $T_4$, which is claim 3. [step 3.1, step 1.2] ∎

## Remarks

- **Neither converse is proved here and neither is asserted.** Whether a normal space must be completely normal, and whether a normal space must be perfectly normal, are left open on this page: any witness would need machinery this page does not have, and no false statement asserting a reversal is planted here.

- **Where the strength of complete normality actually shows.** It is not in the closed case above but in pairs like $(0,1)$ and $(1,2)$ in $\mathbb{R}$, which are separated and not closed. The metric theorem later on this page separates every such pair at once, which is why every metrizable space is completely normal and not merely normal.
