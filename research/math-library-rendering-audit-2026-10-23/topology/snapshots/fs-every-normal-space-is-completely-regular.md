---
id: fs-every-normal-space-is-completely-regular
kind: false-statement
title: "FALSE: Every normal space is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-urysohns-lemma-closes-the-separation-chain,
       def-normal-and-t4-spaces, def-completely-regular-and-tychonoff-spaces,
       thm-completely-regular-implies-regular, def-regular-and-t3-spaces,
       def-standard-topologies, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "normal does not imply completely regular"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

**FALSE.** Every normal space is completely regular.

This is exactly why [[cor-urysohns-lemma-closes-the-separation-chain]] carries
the hypothesis $T_1$: normality alone, without $T_1$, gives no separation
property above itself.

## Facts & Assumptions

**Given:** Sierpinski space $S = \{a,b\}$, $a \ne b$, with topology $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$ ([[def-standard-topologies]]).

[L1] The closed sets of $S$ are the complements of $\mathcal{T}_{\mathrm{Sier}}$: $S \setminus \varnothing = S$, $S \setminus \{b\} = \{a\}$, $S \setminus S = \varnothing$; so the closed sets are $\{S, \{a\}, \varnothing\}$ ([[def-standard-topologies]], [[def-topological-space]]).

[L2] $S$ is normal when disjoint closed subsets of $S$ admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L3] $S$ is regular when a point and a closed set not containing it admit disjoint open neighbourhoods ([[def-regular-and-t3-spaces]]).

[L4] Every completely regular space is regular ([[thm-completely-regular-implies-regular]], [[def-completely-regular-and-tychonoff-spaces]]).

## Refutation

**Proof technique:** constructive.

1.1 Let $S = \{a,b\}$ with $a \ne b$ and $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing,\{b\},S\}$; by [L1] its closed sets are $\{S,\{a\},\varnothing\}$. [given, L1, construct]

2.1 $S$ is normal: let $A, B$ be disjoint closed subsets of $S$. The nonempty closed sets are $\{a\}$ and $S$, and $\{a\} \subseteq S$, so any two nonempty closed sets of $S$ meet at $a$; hence disjointness of $A,B$ forces $A=\varnothing$ or $B=\varnothing$. If $A=\varnothing$, take $U:=\varnothing \supseteq A$ and $V:=S \supseteq B$; if $B=\varnothing$, take $U:=S \supseteq A$ and $V:=\varnothing \supseteq B$. Either way $U,V$ are open and $U \cap V = \varnothing$. [step 1.1, L1, L2, algebra]

2.2 $S$ is not regular: $b \notin \{a\}$, since $a \ne b$, and $\{a\}$ is closed by step 1.1. Every open set containing $a$ equals $S$, since among $\varnothing, \{b\}, S$ only $S$ contains $a$; so any open $V \supseteq \{a\}$ has $V=S$, and any open $U \ni b$ then satisfies $U \cap V = U \cap S = U \ne \varnothing$, since $b \in U$. So no disjoint open $U \ni b$, $V \supseteq \{a\}$ exist, and $S$ is not regular. [step 1.1, L1, L3]

3.1 By [L4], complete regularity implies regularity; by step 2.2, $S$ is not regular, so $S$ is not completely regular. With step 2.1, $S$ is a normal space that is not completely regular, refuting the statement. [step 2.1, step 2.2, L4, discharge-construct] ∎

## Remarks

- **The failure is exactly the missing $T_1$.** Sierpinski space is $T_0$ (the open set $\{b\}$ distinguishes $a$ from $b$) but not $T_1$: the singleton $\{b\}$ is not among the closed sets $\{S,\{a\},\varnothing\}$ of step 1.1, so $b$ has no closed singleton. Consequently [[cor-urysohns-lemma-closes-the-separation-chain]] never claims anything about a normal space that is not $T_1$.

- **Every disjoint closed pair in $S$ is separated for a trivial reason.** Step 2.1 never invokes Urysohn's lemma or any function; normality here has nothing to do with continuous functions, because the only disjoint pairs available involve $\varnothing$.
