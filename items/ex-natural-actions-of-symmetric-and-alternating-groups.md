---
id: ex-natural-actions-of-symmetric-and-alternating-groups
kind: example
title: "The natural actions of symmetric and alternating groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-k-transitive-and-k-homogeneous-actions, def-sharply-k-transitive-actions]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Example

For $n \ge 2$, the natural action of $S_n$ on $\{1,\dots,n\}$ is sharply
$n$-transitive. For $n \ge 4$, the natural action of $A_n$ on the same set is
$(n-2)$-transitive.

## Facts & Assumptions

**Given:** The natural permutation actions of $S_n$ and $A_n$ on $\{1,\dots,n\}$.

[L1] For $k \ge 1$, a sharply $k$-transitive action has a unique group element carrying any ordered $k$-tuple of distinct points to any other such tuple ([[def-sharply-k-transitive-actions]]).

[L2] For $k \ge 1$, a $k$-transitive action carries any ordered $k$-tuple of distinct points to any other such tuple ([[def-k-transitive-and-k-homogeneous-actions]]).

## Verification

**Proof technique:** direct.

1.1 For the action of $S_n$, a permutation is determined uniquely by the images of the ordered tuple $(1,\dots,n)$, and every ordered $n$-tuple of distinct points is another listing of $\{1,\dots,n\}$. So this action is sharply $n$-transitive by [L1]. [L1]

1.2 For the action of $A_n$ with $n \ge 4$, take two ordered $(n-2)$-tuples of distinct points and let $c_1,c_2$ and $d_1,d_2$ be the two complementary points. Some $\sigma \in S_n$ sends the first full $n$-tuple $(\alpha_1,\dots,\alpha_{n-2},c_1,c_2)$ to the second $(\beta_1,\dots,\beta_{n-2},d_1,d_2)$. [L2, choose]

2.1 If $\sigma \in A_n$, then $\sigma$ already sends $\alpha_i$ to $\beta_i$ for $1 \le i \le n-2$. If $\sigma \notin A_n$, compose it with the transposition $(d_1\,d_2)$, which fixes each $\beta_i$ and reverses parity. So in either case there is an even permutation sending the first $(n-2)$-tuple to the second. Hence the natural action of $A_n$ is $(n-2)$-transitive. [step 1.2, L2] ∎
