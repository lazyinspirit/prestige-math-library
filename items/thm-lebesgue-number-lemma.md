---
id: thm-lebesgue-number-lemma
kind: theorem
title: "Every open cover of a compact metric space has a Lebesgue number: a $\\delta > 0$ such that every nonempty subset of diameter less than $\\delta$ lies inside a single member of the cover"
status: published
origin: session
deps: [def-metric-compactness, thm-extreme-value-metric, thm-compact-subset-is-closed-and-bounded, lem-distance-to-set-is-lipschitz, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-metric-continuity, def-metric-bounded-diameter, def-infimum, def-metric-ball, def-metric-topology, lem-compactness-is-intrinsic, lem-finite-set-has-max, def-max-min, def-metric-space]
justified_by: []
forward_refs: [cex-open-cover-with-no-lebesgue-number]
aliases: [thm-lebesgue-number]
landmark: true
short: "Lebesgue number lemma"
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
    - title: "J. Munkres, Topology, 2nd ed., §27"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $\mathcal{U}$ be an open cover of $X$. Then there
is a real $\delta > 0$, a **Lebesgue number** for $\mathcal{U}$, such that every
nonempty $A \subseteq X$ with $\operatorname{diam}(A) < \delta$
([[def-metric-bounded-diameter]]) satisfies $A \subseteq U$ for some
$U \in \mathcal{U}$.

Diameters of nonempty subsets of $X$ are defined because a compact space is
bounded ([[thm-compact-subset-is-closed-and-bounded]]) and a subset of a bounded
set is bounded. No choice principle is used.

## Facts & Assumptions

**Given:** A compact metric space $(X,d)$ and an open cover $\mathcal{U}$ of it.

[L1] $(X,d)$ is compact: every family of open subsets with union $X$ has a finite subfamily with union $X$ ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).

[L2] A compact metric space is bounded, and $\operatorname{diam}(A) = \sup\{d(u,v) : u,v \in A\}$ is defined for every nonempty bounded $A$ ([[thm-compact-subset-is-closed-and-bounded]], [[def-metric-bounded-diameter]]).

[L3] For nonempty $S \subseteq X$, $d(x,S) = \inf\{d(x,y) : y \in S\}$; an infimum is a lower bound of its set and is at least every lower bound ([[def-metric-bounded-diameter]], [[def-infimum]]).

[L4] For nonempty $S \subseteq X$ the map $u \mapsto d(u,S)$ satisfies $|d(x,S) - d(y,S)| \le d(x,y)$, so it is Lipschitz with constant $1$, and a Lipschitz map is continuous ([[lem-distance-to-set-is-lipschitz]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

[L5] A continuous real-valued function on a nonempty compact metric space attains a least value ([[thm-extreme-value-metric]]).

[L6] A nonempty finite set of reals has a maximum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] $U$ is open exactly when every point of $U$ has a ball around it inside $U$ ([[def-metric-topology]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 If $X = \emptyset$ then $\delta := 1$ serves, there being no nonempty subset of $X$ to test; assume from now on $X \ne \emptyset$. [L2]

2.1 Compactness gives $m \in \mathbb{N}$ and $U_0, \dots, U_m \in \mathcal{U}$ with $X = U_0 \cup \dots \cup U_m$. [L1, step 1.1]

3.1 If $U_i = X$ for some $i \le m$, then $\delta := 1$ serves again, every nonempty $A \subseteq X$ being contained in that $U_i$; assume from now on that $X \setminus U_i \ne \emptyset$ for every $i \le m$. [step 2.1]

4.1 For $\alpha_0, \dots, \alpha_m$ and $\beta_0, \dots, \beta_m$ real one has $\alpha_i \le \beta_i + |\alpha_i - \beta_i| \le \max_j \beta_j + \max_j|\alpha_j - \beta_j|$ for every $i$, so $\max_i \alpha_i \le \max_j \beta_j + \max_j |\alpha_j - \beta_j|$, and by symmetry $|\max_i \alpha_i - \max_i \beta_i| \le \max_i |\alpha_i - \beta_i|$. [L6, step 3.1]

5.1 Define $g : X \to \mathbb{R}$ by $g(x) := \max\{\, d(x, X \setminus U_i) : i \le m \,\}$, a maximum of a nonempty finite set of reals; each $x \mapsto d(x, X\setminus U_i)$ changes by at most $d(x,y)$ between $x$ and $y$, so by step 4.1 $|g(x) - g(y)| \le d(x,y)$, and $g$ is Lipschitz with constant $1$, hence continuous. [L4, L6, step 4.1]

6.1 $g(x) > 0$ for every $x \in X$: such an $x$ lies in some $U_i$ by step 2.1, openness gives a real $r > 0$ with $B(x,r) \subseteq U_i$, so every $y \in X \setminus U_i$ has $d(x,y) \ge r$, making $r$ a lower bound of $\{d(x,y) : y \in X \setminus U_i\}$ and hence $g(x) \ge d(x, X\setminus U_i) \ge r > 0$. [L3, L7, step 2.1, step 5.1]

7.1 By the extreme value theorem applied to the nonempty compact $X$ and the continuous $g$, there is $x^{\ast} \in X$ with $g(x^{\ast}) \le g(x)$ for every $x$; put $\delta := g(x^{\ast})$, a real with $\delta > 0$ by step 6.1. [L5, step 5.1, step 6.1]

8.1 Let $A \subseteq X$ be nonempty with $\operatorname{diam}(A) < \delta$ and fix $a \in A$; then $g(a) \ge \delta$, so some $i \le m$ has $d(a, X \setminus U_i) \ge \delta$, the maximum defining $g(a)$ being one of its members, and the least such $i$ may be taken. [L2, L6, step 7.1]

9.1 Every $y \in A$ satisfies $d(a,y) \le \operatorname{diam}(A) < \delta \le d(a, X\setminus U_i)$, so $y \notin X \setminus U_i$, since a point of that set would make $d(a, X\setminus U_i) \le d(a,y)$; hence $A \subseteq U_i$ with $U_i \in \mathcal{U}$, and $\delta$ is a Lebesgue number for $\mathcal{U}$. [L2, L3, step 8.1] ∎

## Remarks

**What the lemma buys.** An open cover gives, around each point, *some* member containing a ball about that point, with a radius depending on the point. A Lebesgue number is one radius that works everywhere at once, and that uniformity is exactly what turns pointwise continuity into uniform continuity in [[thm-heine-cantor-metric]].

**Compactness is not removable.** The cover of the interval $(0,1)$ by the intervals $(1/(k+2), 1)$, $k \in \mathbb{N}$, has no Lebesgue number ([[cex-open-cover-with-no-lebesgue-number]]), and $(0,1)$ is not compact.

**The two degenerate cases in steps 1.1 and 3.1 are genuine.** If $X$ is empty the conclusion is vacuous, and if some member of the finite subcover is the whole space the function $g$ of step 5.1 would call for the distance to the empty set, which this library leaves undefined ([[def-metric-bounded-diameter]]). Handling both separately costs two lines and avoids writing something undefined.
