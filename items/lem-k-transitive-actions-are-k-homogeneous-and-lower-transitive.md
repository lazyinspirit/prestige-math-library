---
id: lem-k-transitive-actions-are-k-homogeneous-and-lower-transitive
kind: lemma
title: "k-transitivity implies k-homogeneity and lower transitivity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-k-transitive-and-k-homogeneous-actions]
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

## Statement

Let $1 \le j \le k$, and let $G$ act on a set $\Omega$ with at least $k$
distinct points. If the action is $k$-transitive, then it is $k$-homogeneous
and also $j$-transitive.

## Facts & Assumptions

**Given:** Integers $1 \le j \le k$, a $G$-action on a set $\Omega$ with at least $k$ distinct points, and the action is $k$-transitive.

[L1] For $k \ge 1$, a $k$-transitive action sends any ordered $k$-tuple of distinct points to any other, and a $k$-homogeneous action sends any $k$-element subset to any other ([[def-k-transitive-and-k-homogeneous-actions]]).

## Proof

**Proof technique:** direct.

1.1 To prove $k$-homogeneity, let $A,B \subseteq \Omega$ be $k$-element subsets. Choose orderings $A = \{\alpha_1,\dots,\alpha_k\}$ and $B = \{\beta_1,\dots,\beta_k\}$. By [L1], some $g \in G$ sends each $\alpha_i$ to $\beta_i$, so $g \cdot A = B$. [L1, choose]

1.2 To prove $j$-transitivity, start with ordered $j$-tuples of distinct points $(\alpha_1,\dots,\alpha_j)$ and $(\beta_1,\dots,\beta_j)$. Because $\Omega$ has at least $k$ distinct points, extend them to ordered $k$-tuples of distinct points $(\alpha_1,\dots,\alpha_k)$ and $(\beta_1,\dots,\beta_k)$. Then [L1] gives $g \in G$ with $g \cdot \alpha_i = \beta_i$ for all $1 \le i \le k$, in particular for $1 \le i \le j$. [L1, choose]

2.1 Step 1.1 gives $k$-homogeneity and step 1.2 gives $j$-transitivity. [step 1.1, step 1.2] ∎
