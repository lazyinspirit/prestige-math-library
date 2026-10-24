---
id: ex-first-difference-order-on-a-binary-branching-tree
kind: example
title: "First-difference order on a binary tree"
status: published
origin: pipeline
deps: [lem-suslin-tree-branch-first-difference-order]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Theorem 9.13, printed pp. 68-69"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $T=2^{\leq 3}$, ordered by proper initial segment, and order the two
successors at every nontop node by $0<1$. The first-difference order on its
eight terminal maximal branches is

$$000<001<010<011<100<101<110<111.$$

This finite calculation is ccc but is neither dense nor without endpoints,
and it has nonempty separable open intervals. It therefore isolates the local
dense-successor and unbounded-splitting hypotheses used by the general branch
construction.

## Facts & Assumptions

**Given:** the explicit finite tree $2^{\leq3}$; coordinates are numbered $0,1,2$ from the root, and binary successors have their usual order.

[F1] In the Suslin-tree construction, maximal branches are compared at their least differing coordinate after every immediate-successor set is ordered densely and without endpoints. [[lem-suslin-tree-branch-first-difference-order]]

[F2] The general construction obtains a ccc dense order without endpoints and uses splitting above arbitrary countable height bounds to prove that no nonempty open interval is separable. [[lem-suslin-tree-branch-first-difference-order]]

## Verification

1.1 A branch maximal under inclusion must end on level $3$, so it is determined by one of the eight words $000,001,010,011,100,101,110,111$. Conversely each such word is terminal and hence maximal. For distinct terminal words $s,t$, the comparison rule is $$s<t\quad\Longleftrightarrow\quad s(k)<t(k)\text{ for }k=\min\{i<3:s(i)\ne t(i)\}.$$ The displayed list in the statement follows by sorting first by coordinate $0$, then by coordinate $1$, then by coordinate $2$. [F1, given, construct]

1.2 The first-difference coordinates of consecutive branches are explicit:

| consecutive pair | first difference | comparison at that coordinate | |---|---:|---| | $000,001$ | $2$ | $0<1$ | | $001,010$ | $1$ | $0<1$ | | $010,011$ | $2$ | $0<1$ | | $011,100$ | $0$ | $0<1$ | | $100,101$ | $2$ | $0<1$ | | $101,110$ | $1$ | $0<1$ | | $110,111$ | $2$ | $0<1$ |

For nonconsecutive words the same minimum-coordinate formula applies; for example $d(001,111)=0$ and $d(100,111)=1$. Thus the table and formula determine every pairwise comparison, not only the adjacent ones. [step 1.1, construct]

2.1 The adjacent pair $000<001$ has no branch strictly between it, so this order is not dense. The elements $000$ and $111$ are respectively a first and last element, so it is not endpoint-free. Moreover $(000,010)=\{001\}$ is a nonempty open interval with the countable dense subset $\{001\}$; hence the nowhere-separable conclusion fails. Since the whole order has only eight elements, every antichain of pairwise disjoint nonempty open intervals is finite, so its ccc assertion holds only trivially. [step 1.1, step 1.2, construct]

3.1 The failed order-density and endpoint conclusions in step 2.1 come from the local successor order $\{0<1\}$: it has neither an intermediate successor nor successors on both sides. In [F1], replacing each successor set by a dense order without endpoints supplies exactly those insertions. By contrast, the failure of nowhere separability reflects bounded height: the argument in [F2] first bounds an arbitrary countable candidate dense set by a height $\delta$ and then splits above $\delta$, which is impossible in $2^{\leq3}$. Thus local dense successor orders yield density and no endpoints, while unbounded normal splitting is essential to the later nowhere-separability construction. [F1, F2, step 2.1]

4.1 The root is the empty word, but no empty terminal branch occurs; at height zero it has exactly the two successors $0,1$. Every top word has length exactly three, so there is no hidden extension beyond the listed eight. All lists, comparisons, and witnesses are explicit finite data in ZF, and no choice principle is used. [given, step 1.1, step 1.2, step 2.1] ∎

## Remarks

- Finite ccc is not evidence for the Suslin-tree extraction argument: there is no uncountable family here to test.
- A finite-height tree with densely ordered infinite successor sets could have a dense endpoint-free branch order. The calculation shows that bounded height and binary local branching are distinct obstructions.
