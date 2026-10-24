---
id: ex-lebesgue-number-of-a-two-set-cover
kind: example
title: "The cover of $[0,1]$ by $(-1, 2/3)$ and $(1/3, 2)$ has Lebesgue number $1/3$, and no larger one"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-lebesgue-number-lemma, thm-heine-borel-rn, def-metric-compactness, lem-compactness-is-intrinsic, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-interval, def-metric-bounded-diameter, def-metric-topology, def-metric-ball, def-bounded-set]
justified_by: []
aliases: []
landmark: false
short: "an exact Lebesgue number"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Lebesgue's number lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue%27s_number_lemma"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Example

Work in $\mathbb{R}$ with its usual metric $d(x,y) = |x-y|$
([[lem-real-line-is-a-metric-space]]) and let $[0,1]$ carry the restricted metric
([[def-isometry-and-metric-embedding]], [[def-interval]]). Put

$$U := (-1,\ 2/3) \cap [0,1] = [0,\ 2/3), \qquad V := (1/3,\ 2) \cap [0,1] = (1/3,\ 1],$$

so that $\{U,V\}$ is an open cover of the compact metric space $[0,1]$
([[def-metric-compactness]], [[thm-heine-borel-rn]]). Then:

1. $\delta = 1/3$ is a Lebesgue number for $\{U,V\}$
   ([[thm-lebesgue-number-lemma]]): every nonempty $A \subseteq [0,1]$ with
   $\operatorname{diam}(A) < 1/3$ ([[def-metric-bounded-diameter]]) is contained
   in $U$ or in $V$.
2. No larger $\delta$ works: for every real $\delta' > 1/3$ the set
   $A := [1/3,\ 2/3]$ is nonempty with $\operatorname{diam}(A) = 1/3 < \delta'$
   and is contained in neither $U$ nor $V$.

## Facts & Assumptions

**Given:** The compact metric space $[0,1]$ with $d(x,y) = |x-y|$, and the sets $U = [0,2/3)$ and $V = (1/3,1]$.

[L1] A closed bounded subset of $\mathbb{R}$ is a compact subset of $(\mathbb{R},d)$, and $[0,1]$ is closed and bounded ([[thm-heine-borel-rn]], [[def-interval]], [[def-bounded-set]]).

[L2] The sets open in the subspace $[0,1]$ are the traces on $[0,1]$ of the open subsets of $\mathbb{R}$, and $(-1,2/3)$ and $(1/3,2)$ are open in $\mathbb{R}$ ([[lem-compactness-is-intrinsic]], [[def-metric-topology]], [[def-metric-ball]], [[lem-real-line-is-a-metric-space]]).

[L3] $\operatorname{diam}(A) = \sup\{|u-v| : u,v \in A\}$ for nonempty bounded $A$, so $|u - v| \le \operatorname{diam}(A)$ for all $u,v \in A$ ([[def-metric-bounded-diameter]]).

[L4] A Lebesgue number for an open cover of a compact metric space is a real $\delta > 0$ such that every nonempty subset of diameter less than $\delta$ lies in a single member of the cover; one exists ([[thm-lebesgue-number-lemma]]).

## Verification

**Proof technique:** direct.

1.1 $U$ and $V$ are open in $[0,1]$, being the traces of $(-1,2/3)$ and $(1/3,2)$, and $U \cup V = [0,1]$, because a point of $[0,1]$ is either below $2/3$, and then in $U$, or at least $2/3 > 1/3$, and then in $V$. [L1, L2]

2.1 Let $A \subseteq [0,1]$ be nonempty with $\operatorname{diam}(A) < 1/3$, and suppose first that every $y \in A$ satisfies $y < 2/3$; then $A \subseteq U$. [L3, step 1.1]

3.1 Otherwise some $a \in A$ has $a \ge 2/3$, and then every $y \in A$ satisfies $y \ge a - |a - y| \ge a - \operatorname{diam}(A) > 2/3 - 1/3 = 1/3$, so $A \subseteq (1/3,1] = V$. [L3, step 2.1]

4.1 In both cases $A$ lies in a single member of $\{U,V\}$, so $1/3$ is a Lebesgue number: claim 1. [L4, step 2.1, step 3.1]

5.1 For claim 2 let $\delta' > 1/3$ be real and put $A := [1/3, 2/3]$, a nonempty subset of $[0,1]$ with $|u-v| \le 1/3$ for $u,v \in A$ and with $|2/3 - 1/3| = 1/3$ attained, so $\operatorname{diam}(A) = 1/3 < \delta'$. [L3, step 4.1]

6.1 $A \not\subseteq U$ because $2/3 \in A$ and $2/3 \notin [0,2/3)$, and $A \not\subseteq V$ because $1/3 \in A$ and $1/3 \notin (1/3,1]$; so no $\delta' > 1/3$ is a Lebesgue number for this cover, and $1/3$ is the largest one: claim 2. [L4, step 5.1] ∎

## Remarks

**The number is exactly the overlap.** $U \cap V = (1/3, 2/3)$ has length $1/3$, and that is the Lebesgue number: a set of diameter below the overlap cannot straddle both ends. The example shows that the conclusion of [[thm-lebesgue-number-lemma]] is sharp, the lemma asserting only that some positive $\delta$ exists.

**The strict inequality in the definition matters.** The set $[1/3,2/3]$ has diameter exactly $1/3$ and lies in neither member, so a Lebesgue number could not be required to work for subsets of diameter *at most* $\delta$.
