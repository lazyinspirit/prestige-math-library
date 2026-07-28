---
id: thm-metric-spaces-are-completely-normal
kind: theorem
title: "In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal"
status: draft
origin: session
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-metric-space, def-metric-topology, def-metric-ball,
       def-metrizable-space, def-metric-bounded-diameter, thm-metric-closure-characterisation,
       thm-metric-open-set-algebra, def-infimum, thm-infimum-property, def-max-min,
       lem-metric-nonnegativity, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "metric spaces are completely normal"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and let $A, B \subseteq X$ be separated
([[def-separated-sets]]). Then there are disjoint open sets $U \supseteq A$ and
$V \supseteq B$.

Consequently every metrizable space ([[def-metrizable-space]]) is **completely
normal**, and hence normal
([[def-completely-normal-and-perfectly-normal-spaces]],
[[def-normal-and-t4-spaces]]).

**No choice principle is used.** The two open sets are unions indexed by the
points of $A$ and of $B$, and the radius attached to a point is the number
$d(a,B)/2$, which is determined by $a$, by $B$ and by $d$; nothing is selected.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and separated sets $A, B \subseteq X$, so that $\overline{A} \cap B = A \cap \overline{B} = \varnothing$, with closures taken in the metric topology.

[A1] $A$ and $B$ are separated: $\overline{A} \cap B = \varnothing$ and $A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).

[L2] For nonempty $S \subseteq X$, $\overline{S} = \{\, x \in X : d(x,S) = 0 \,\}$ ([[thm-metric-closure-characterisation]], claim 1).

[L3] Open balls are open and an arbitrary union of open sets is open; $\varnothing$ and $X$ are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-topological-space]]).

[L4] $x \in B(x,r)$ for every $r > 0$, and $y \in B(x,r)$ means $d(x,y) < r$ ([[def-metric-ball]]).

[L5] The triangle inequality $d(p,q) \le d(p,x) + d(x,q)$ and symmetry $d(p,q) = d(q,p)$ ([[def-metric-space]]).

[L6] A two-element set of reals has a maximum, which is one of the two and is at least the other ([[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 If $A = \varnothing$ then $U := \varnothing$ and $V := X$ are disjoint open sets with $A \subseteq U$ and $B \subseteq V$; if $B = \varnothing$ then $U := X$ and $V := \varnothing$ do the same. [L3, construct]

1.2 Assume from here that $A$ and $B$ are both nonempty, so that $d(x,A)$ and $d(x,B)$ are defined for every $x \in X$. [L1, assume-hyp]

2.1 For $a \in A$: $a \notin \overline{B}$ by [A1], so $d(a,B) \ne 0$ by [L2], and $d(a,B) \ge 0$ by [L1]; hence $r_a := d(a,B)/2 > 0$. Symmetrically $s_b := d(b,A)/2 > 0$ for $b \in B$. [step 1.2, A1, L1, L2]

3.1 Define $U := \bigcup_{a \in A} B(a, r_a)$ and $V := \bigcup_{b \in B} B(b, s_b)$; both are open by [L3], and $A \subseteq U$ and $B \subseteq V$ by [L4]. [step 2.1, L3, L4, construct]

4.1 Suppose $x \in U \cap V$; then there are $a \in A$ and $b \in B$ with $d(a,x) < r_a$ and $d(b,x) < s_b$. [step 3.1, L4, assume-hyp]

5.1 Under step 4.1: $d(a,b) \le d(a,x) + d(x,b) < r_a + s_b$, using symmetry for $d(x,b) = d(b,x)$. [step 4.1, L5]

5.2 Under step 4.1: $r_a + s_b \le 2\max\{r_a, s_b\} = \max\{d(a,B),\ d(b,A)\}$, by [L6] and the definitions of $r_a$ and $s_b$. [step 2.1, step 4.1, L6]

5.3 $d(a,B) \le d(a,b)$, since $b \in B$ makes $d(a,b)$ a member of the set whose infimum is $d(a,B)$; and $d(b,A) \le d(b,a) = d(a,b)$ for the same reason with the roles exchanged. [step 4.1, L1, L5]

6.1 By steps 5.1, 5.2 and 5.3, $d(a,b) < \max\{d(a,B), d(b,A)\} \le d(a,b)$, which is impossible; so no such $x$ exists and $U \cap V = \varnothing$. [step 5.1, step 5.2, step 5.3]

7.1 By steps 1.1, 3.1 and 6.1 the separated pair $A, B$ has disjoint open supersets in every case. [step 1.1, step 3.1, step 6.1]

8.1 If $(Y,\mathcal{T})$ is metrizable, fix a metric $d$ inducing $\mathcal{T}$; separation of two subsets is a statement about the closure operator, and the topological closure of a metrizable space is the metric closure of any inducing metric, so step 7.1 applies verbatim and $Y$ is completely normal, hence normal. [step 7.1, L2] ∎

## Remarks

- **The halving is what makes the balls miss each other.** Radii $d(a,B)$ and $d(b,A)$ without the factor $2$ would not do: two balls of those radii can meet, and the triangle inequality then gives no contradiction. With the halving the sum of the two radii is at most the larger of the two distances, which is at most $d(a,b)$.

- **Separated, not merely disjoint, is exactly the right hypothesis.** For disjoint sets the radii can fail to be positive: in $\mathbb{R}$ the disjoint sets $(0,1)$ and $[1,2)$ have $d(1, (0,1)) = 0$, and indeed they are not separated. What the hypothesis buys is positivity of every radius, and nothing else.

- **The corresponding statement for $\mathbb{R}$ needs no new proof.** $\mathbb{R}$ with its usual topology is metrizable by the usual metric ([[def-metrizable-space]]), so it is completely normal, and so is every $\mathbb{R}^n$ and every subspace of a metrizable space.
