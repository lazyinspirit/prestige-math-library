---
id: ex-open-set-decomposed-into-components
kind: example
title: "An explicit open subset of $\\mathbb{R}$ written as the disjoint union of its component intervals"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-open-subsets-of-r-structure, def-interval, def-open-and-closed-in-r, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Exercise 2.29)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Take

$$U \;:=\; (-1,0) \;\cup\; (0,1) \;\cup\; (2,\infty) .$$

This is an open subset of $\mathbb{R}$, and its order components in the sense of
[[thm-open-subsets-of-r-structure]] are exactly the three intervals
$(-1,0)$, $(0,1)$ and $(2,\infty)$: they are pairwise disjoint, their union is
$U$, and there are three of them, a finite and hence at most countable family.
The example is chosen so that one component is unbounded and two are bounded,
and so that the two bounded ones are separated by a single missing point, $0$,
rather than by a gap of positive length.

## Facts & Assumptions

**Given:** The set $U := (-1,0) \cup (0,1) \cup (2,\infty)$, together with the order-convex hull $H(x,y) = \{\, z : x \le z \le y \text{ or } y \le z \le x \,\}$ and the relation $x \sim y \iff H(x,y) \subseteq U$ on $U$, both as in [[thm-open-subsets-of-r-structure]]. Write $A := (-1,0)$, $B := (0,1)$ and $C := (2,\infty)$.

[L1] For an open $U$, the relation $\sim$ is an equivalence relation on $U$, its classes are the order components, and they are nonempty pairwise disjoint open intervals whose union is $U$, forming an at most countable family ([[thm-open-subsets-of-r-structure]]).

[L2] Each of the forms $(a,b)$ and $(a,\infty)$ is an open set, and a union of open sets is open ([[def-open-and-closed-in-r]], [[def-interval]], [[thm-open-set-algebra-r]]).

[L3] Each of the nine interval forms is order-convex ([[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 $U$ is open: $A$, $B$ and $C$ are open sets by [L2], and their union is open by [L2]. [L2]

1.2 $A$, $B$ and $C$ are pairwise disjoint with union $U$: an element of $A$ is negative, an element of $B$ lies strictly between $0$ and $1$, and an element of $C$ exceeds $2$, so no two of the three share a point, and the union is $U$ by definition. [given, L3]

2.1 Any two points of the same one of $A$, $B$, $C$ are equivalent: if $x, y \in A$ then $H(x,y) \subseteq A \subseteq U$ because $A$ is order-convex by [L3], so $x \sim y$; the same argument applies inside $B$ and inside $C$. [step 1.2, L1, L3]

2.2 No two points of different ones of $A$, $B$, $C$ are equivalent: for $x \in A$ and $y \in B$, or for $x \in A$ and $y \in C$, one has $x < 0 < y$, so $0 \in H(x,y)$ while $0 \notin U$; for $x \in B$ and $y \in C$ one has $x < 2 < y$, so $2 \in H(x,y)$ while $2 \notin U$. In each case $H(x,y) \not\subseteq U$ and $x \not\sim y$. [step 1.2, L1]

3.1 Every point of $U$ lies in exactly one of $A$, $B$, $C$ by step 1.2, and by steps 2.1 and 2.2 its equivalence class is precisely that one of the three; so the order components of $U$ are exactly $A$, $B$ and $C$, three pairwise disjoint nonempty open intervals with union $U$, which is the decomposition promised by [L1]. [step 1.2, step 2.1, step 2.2, L1] ∎

## Remarks

- **The count is the number of components, not the number of points.** There are
  three components here, while each of them is an uncountable set
  ([[lem-q-and-irrationals-dense-r]]). The at most countable family of
  [[thm-open-subsets-of-r-structure]] is a family of intervals, and a finite
  family is one instance of it.

- **What keeps two components apart may be a single missing point.** $A$ and $B$
  are kept apart by $0 \notin U$ alone, and no gap of positive length is
  required, although $B$ and $C$ happen to have one. This is why the components
  are defined by an equivalence relation on $U$ and not by measuring distances
  between the pieces.

- **Reading the decomposition off the formula is legitimate here only because
  the three pieces were checked to be the classes.** A presentation of an open
  set as a union of open intervals is not automatically its decomposition into
  components: $(0,2) = (0,1) \cup (0,2)$ writes an open set as a union of open
  intervals that are neither disjoint nor components.
