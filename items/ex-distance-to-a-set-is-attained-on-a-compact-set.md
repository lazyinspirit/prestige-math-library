---
id: ex-distance-to-a-set-is-attained-on-a-compact-set
kind: example
title: "The distance from a point to a nonempty compact set is attained at a point of that set, and two disjoint compact sets are at positive distance"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-extreme-value-metric, thm-compact-subset-is-closed-and-bounded, lem-distance-to-set-is-lipschitz, def-metric-bounded-diameter, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-metric-continuity, def-metric-compactness, lem-compactness-is-intrinsic, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-infimum, lem-inf-epsilon, def-max-min, def-isometry-and-metric-embedding, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "distances to compact sets"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
pipeline_run: null
---

## Example

Let $(X,d)$ be a metric space ([[def-metric-space]]), with $d(x,A)$ and $d(A,B)$
the distances from a point to a nonempty set and between two nonempty sets
([[def-metric-bounded-diameter]]). Then:

1. If $K \subseteq X$ is nonempty and compact ([[def-metric-compactness]]) and
   $x \in X$, there is $a \in K$ with $d(x,a) = d(x,K)$: the infimum defining the
   distance is attained.
2. If $K, L \subseteq X$ are nonempty, compact and disjoint, then $d(K,L) > 0$,
   and again the value is attained at a point of $K$.

Neither statement holds for arbitrary closed sets, and neither uses a choice
principle.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, nonempty compact subsets $K$ and $L$ of $X$, and a point $x \in X$.

[L1] For nonempty $A \subseteq X$, $d(x,A) = \inf\{d(x,y) : y \in A\}$ and $d(A,B) = \inf\{d(u,v) : u \in A,\ v \in B\}$; an infimum is a lower bound of its set and is at least every lower bound ([[def-metric-bounded-diameter]], [[def-infimum]], [[lem-inf-epsilon]]).

[L2] For nonempty $A \subseteq X$ the map $u \mapsto d(u,A)$ satisfies $|d(u,A) - d(v,A)| \le d(u,v)$, so it is Lipschitz with constant $1$ and therefore continuous ([[lem-distance-to-set-is-lipschitz]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

[L3] A continuous real-valued function on a nonempty compact metric space attains a least value ([[thm-extreme-value-metric]]); a subset is compact exactly when the corresponding metric subspace is, and the restriction of a continuous map to a subspace is continuous ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).

[L4] A compact subset of a metric space is closed, and $u$ lies in the closure of a nonempty $A$ exactly when $d(u,A) = 0$ ([[thm-compact-subset-is-closed-and-bounded]], [[thm-metric-closure-characterisation]], [[def-metric-interior-closure-boundary]]).

[L5] A minimum of a set of reals is a member of it and bounds it below ([[def-max-min]]).

## Verification

**Proof technique:** direct.

1.1 The map $f : K \to \mathbb{R}$, $f(u) := d(x,\{u\}) = d(x,u)$, is the restriction to $K$ of $u \mapsto d(u,\{x\})$, which is Lipschitz with constant $1$ and hence continuous; $K$ with the restricted metric is a nonempty compact metric space. [L2, L3]

2.1 So $f$ attains a least value at some $a \in K$: $d(x,a) \le d(x,u)$ for every $u \in K$. [L3, L5, step 1.1]

3.1 Hence $d(x,a)$ is a lower bound of $\{d(x,u) : u \in K\}$ that belongs to the set, so it is the infimum: $d(x,a) = d(x,K)$, which is claim 1. [L1, L5, step 2.1]

4.1 For claim 2, the map $g : K \to \mathbb{R}$, $g(u) := d(u,L)$, is continuous by the same argument, so it attains a least value at some $b \in K$. [L2, L3, step 3.1]

5.1 $g(b) > 0$: otherwise $d(b,L) = 0$ would put $b$ in the closure of $L$, which equals $L$ because $L$ is compact and hence closed, contradicting $K \cap L = \emptyset$. [L4, step 4.1]

6.1 $d(K,L) = g(b)$: every $u \in K$ and $v \in L$ satisfy $d(u,v) \ge d(u,L) \ge g(b)$, so $g(b)$ is a lower bound of $\{d(u,v) : u \in K, v \in L\}$; and $d(K,L) \le d(b,v)$ for every $v \in L$, so $d(K,L)$ is a lower bound of $\{d(b,v) : v \in L\}$ and therefore $d(K,L) \le d(b,L) = g(b)$. [L1, L5, step 4.1, step 5.1]

7.1 Combining, $d(K,L) = g(b) > 0$ and the value is attained at $b \in K$: claim 2. [step 5.1, step 6.1] ∎

## Remarks

**Compactness is what makes the infimum a minimum.** For a merely closed set the infimum need not be attained and disjoint closed sets can be at distance zero; what claim 1 uses is the extreme value theorem, and claim 2 additionally uses that a compact set is closed ([[thm-compact-subset-is-closed-and-bounded]]).

**Only one of the two sets has to be compact for the attainment in claim 1**, the point $x$ playing the role of a one-point compact set. In claim 2 compactness of $K$ gives the attainment and closedness of $L$ gives the positivity, which is why the proof calls on the two properties in different places.
