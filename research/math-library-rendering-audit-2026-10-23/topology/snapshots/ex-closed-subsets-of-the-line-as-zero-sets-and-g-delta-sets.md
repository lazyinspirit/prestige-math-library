---
id: ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets
kind: example
title: "Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-metric-spaces-are-tychonoff-and-perfectly-normal, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-f-sigma-g-delta,
       lem-distance-to-set-is-lipschitz, def-metric-bounded-diameter,
       lem-real-line-is-a-metric-space, def-metrizable-space, def-metric-space,
       def-canonical-natural, cor-archimedean-reciprocal, def-infimum,
       def-max-min, lem-of-abs-value, def-interval, def-open-and-closed-in-r,
       def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "closed subsets of $\\mathbb{R}$ as zero sets"
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
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
pipeline_run: null
---

## Example

Let $\mathbb{R}$ carry its usual metric $d_{\mathbb{R}}(s,t) = |s-t|$ and its
usual topology ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]),
and write $1/(n+1)$ for the inverse of the canonical natural $\iota(n+1)$
([[def-canonical-natural]]). Let $A \subseteq \mathbb{R}$ be nonempty and closed,
and put $d(x,A) := \inf\{\, |x - a| : a \in A \,\}$
([[def-metric-bounded-diameter]]). Then, as the general metric theorem
([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]]) specialises:

1. $x \mapsto d(x,A)$ is continuous and $A = Z(d(\cdot,A))$
   ([[def-zero-sets-and-cozero-sets]]), so $A$ is a zero set.
2. $A = \bigcap_{n \in \mathbb{N}} \{\, x \in \mathbb{R} : d(x,A) < 1/(n+1) \,\}$,
   an intersection of open sets, so $A$ is a $G_\delta$ of the topological space
   $\mathbb{R}$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]) and hence a
   $G_\delta$ subset of $\mathbb{R}$ in the sense of [[def-f-sigma-g-delta]], the
   two notions being the same one.

Two worked instances:

- **$A = [0,1]$** ([[def-interval]]). Here
  $$d(x,[0,1]) = \begin{cases} -x & x < 0 \\ 0 & 0 \le x \le 1 \\ x - 1 & x > 1 \end{cases}$$
  so $Z(d(\cdot,[0,1])) = [0,1]$ and, for every real $\varepsilon > 0$,
  $\{\, x : d(x,[0,1]) < \varepsilon \,\} = (-\varepsilon,\ 1 + \varepsilon)$.
  Taking $\varepsilon = 1/(n+1)$ gives
  $$[0,1] \;=\; \bigcap_{n \in \mathbb{N}} \big(-1/(n+1),\ 1 + 1/(n+1)\big).$$
- **$A = \{0\}$**. Here $d(x,\{0\}) = |x|$, so
  $$\{0\} \;=\; \bigcap_{n \in \mathbb{N}} \big(-1/(n+1),\ 1/(n+1)\big),$$
  the standard presentation of a point of $\mathbb{R}$ as a $G_\delta$.

**The converse fails.** A $G_\delta$ subset of $\mathbb{R}$ need not be closed:
$(0,1)$ is open, hence a $G_\delta$ by the constant sequence, and it is not
closed.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the usual metric and topology, a nonempty closed $A \subseteq \mathbb{R}$, and reals $x, a, \varepsilon$ with $\varepsilon > 0$.

[A1] $d(x,A) = \inf\{\, |x-a| : a \in A \,\}$ exists for nonempty $A$, is a lower bound of that set, and is $\le |x-a|$ for every $a \in A$; and any real that is a lower bound of the set is $\le d(x,A)$ ([[def-metric-bounded-diameter]], [[def-infimum]]).

[L1] In a metric space every nonempty closed set $A$ satisfies $A = Z(d(\cdot,A))$ and $A = \bigcap_n \{x : d(x,A) < 1/(n+1)\}$, and $d(\cdot,A)$ is continuous ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], claims 1 and 2, [[lem-distance-to-set-is-lipschitz]]).

[L2] The topological notions of $G_\delta$ and $F_\sigma$ for $\mathbb{R}$ with its usual topology coincide with those of [[def-f-sigma-g-delta]], the two collections of open subsets of $\mathbb{R}$ being one collection ([[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-open-and-closed-in-r]]).

[L3] $|s| \ge 0$, $|s| = 0$ exactly when $s = 0$, and for $c > 0$ one has $|s| < c$ exactly when $-c < s < c$ ([[lem-of-abs-value]]).

[L4] $[0,1] = \{\, t : 0 \le t \le 1 \,\}$ and $(u,v) = \{\, t : u < t < v \,\}$; a two-element set of reals has a minimum ([[def-interval]], [[def-max-min]]).

[L5] Every open set is a $G_\delta$, by the constant sequence; $(0,1)$ is open and is not closed, since $0$ lies in every open interval around it and not in $(0,1)$ ([[def-g-delta-and-f-sigma-in-a-topological-space]], [[lem-real-line-is-a-metric-space]], [[def-topological-space]], [[def-metric-space]]).

## Verification

**Proof technique:** direct.

1.1 Claims 1 and 2 are [L1] applied to the metric space $\mathbb{R}$ with $d_{\mathbb{R}}$, and the identification of the two readings of $G_\delta$ is [L2]. [L1, L2]

1.2 For $x < 0$: every $a \in [0,1]$ has $a \ge 0 > x$, so $|x - a| = a - x$ by [L3], and this is minimised over $a \in [0,1]$ at $a = 0$ with value $-x$; since $-x$ belongs to the set and is a lower bound of it, $d(x,[0,1]) = -x$ by [A1]. [A1, L3, L4]

1.3 For $0 \le x \le 1$: $x \in [0,1]$ gives $|x - x| = 0$ in the set, and $0$ is a lower bound by [L3], so $d(x,[0,1]) = 0$ by [A1]. [A1, L3, L4]

1.4 For $x > 1$: every $a \in [0,1]$ has $a \le 1 < x$, so $|x-a| = x-a$, minimised at $a = 1$ with value $x - 1$, which lies in the set and is a lower bound; so $d(x,[0,1]) = x-1$ by [A1]. [A1, L3, L4]

1.5 The set $(0,1)$ is open, hence a $G_\delta$ by [L5], and is not closed, so a $G_\delta$ subset of $\mathbb{R}$ need not be closed. [L5]

2.1 By steps 1.2, 1.3 and 1.4 the zero set of $d(\cdot,[0,1])$ is $\{x : 0 \le x \le 1\} = [0,1]$, since $-x > 0$ for $x < 0$ and $x - 1 > 0$ for $x > 1$. [step 1.2, step 1.3, step 1.4, L4]

2.2 By steps 1.2, 1.3 and 1.4, for $\varepsilon > 0$ the condition $d(x,[0,1]) < \varepsilon$ holds exactly when $-x < \varepsilon$ for $x < 0$, always for $0 \le x \le 1$, and $x - 1 < \varepsilon$ for $x > 1$; that is, exactly when $-\varepsilon < x < 1 + \varepsilon$. [step 1.2, step 1.3, step 1.4, L4]

2.3 For $A = \{0\}$ the set $\{\, |x - a| : a \in \{0\} \,\}$ is the single value $|x|$, so $d(x,\{0\}) = |x|$ by [A1]; hence $\{x : d(x,\{0\}) < 1/(n+1)\} = (-1/(n+1),\ 1/(n+1))$ by [L3], and intersecting over $n$ gives $\{0\}$ by claim 2 of step 1.1. [step 1.1, A1, L3]

3.1 Taking $\varepsilon = 1/(n+1)$ in step 2.2 and intersecting over $n \in \mathbb{N}$ gives $[0,1] = \bigcap_n (-1/(n+1),\ 1 + 1/(n+1))$ by claim 2 of step 1.1. [step 1.1, step 2.2]

4.1 Steps 1.1, 3.1, 2.3 and 1.5 establish the two claims, the two worked instances and the failure of the converse. [step 1.1, step 3.1, step 2.3, step 1.5] ∎

## Remarks

- **The index starts at $n = 0$**, where the radius is $1/(0+1) = 1$, so the first set in each intersection is $(-1, 2)$ for $[0,1]$ and $(-1,1)$ for $\{0\}$. Writing $1/n$ instead would divide by zero ([[def-canonical-natural]]).

- **The two presentations are not independent.** A zero set is always a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]), so claim 2 follows from claim 1; the explicit intersection is written out because it is the presentation an argument actually uses, and because it makes the radii visible.

- **Why this is the metric case of perfect normality.** That every closed set is a $G_\delta$ is one of the two conjuncts of perfect normality ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]]); the other, that $\mathbb{R}$ is normal, comes from the same theorem's completely normal clause. So $\mathbb{R}$ is $T_6$, and everything below it in the chain.
