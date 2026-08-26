---
id: thm-block-systems-and-g-invariant-equivalence-relations-correspond
kind: theorem
title: "G-invariant block systems are exactly the invariant equivalence relations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-block-and-block-system-for-a-group-action]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
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

Let $G$ act on a set $\Omega$.

1. If $\mathcal B$ is a $G$-invariant partition of $\Omega$ into blocks, then the relation
   $x \sim_{\mathcal B} y$ defined by “$x$ and $y$ lie in the same member of
   $\mathcal B$” is a $G$-invariant equivalence relation.
2. If $\sim$ is a $G$-invariant equivalence relation on $\Omega$, then its
   equivalence classes form a $G$-invariant block system.

Here $G$-invariance of a partition means that $g\cdot B$ is again a member of
the partition for every part $B$ and every $g\in G$.

## Facts & Assumptions

**Given:** A left action of $G$ on $\Omega$.

[L1] A block system is a partition of $\Omega$ into blocks, and a block $B$ satisfies: for every $g \in G$, either $g \cdot B = B$ or $(g \cdot B) \cap B = \varnothing$ ([[def-block-and-block-system-for-a-group-action]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, let $\mathcal B$ be a $G$-invariant partition into blocks. The relation $\sim_{\mathcal B}$ is reflexive because every point lies in its own part, symmetric because “lying in the same part” is symmetric, and transitive because two parts that meet are equal. [L1, given]

1.2 For the converse direction, let $\sim$ be a $G$-invariant equivalence relation. Its equivalence classes partition $\Omega$: every point lies in its own class, and two classes that meet are equal because symmetry and transitivity identify every element of one with every element of the other. [given, algebra]

1.3 For the converse direction, fix an equivalence class $C=[x]$. Invariance gives $g\cdot C=[g\cdot x]$ for every $g\in G$, so $G$ permutes the equivalence classes. In particular, if $(g \cdot C) \cap C \ne \varnothing$, the two equivalence classes are equal; otherwise they are disjoint. Thus every class is a block and the class partition is $G$-invariant. [given, algebra]

2.1 For the forward direction, if $x \sim_{\mathcal B} y$ and both lie in a part $B$, then $g \cdot x$ and $g \cdot y$ lie in the part $g \cdot B$ of the same partition by its $G$-invariance. Thus $\sim_{\mathcal B}$ is $G$-invariant. [step 1.1, given]

3.1 Step 1.3 shows that the equivalence classes form a $G$-invariant block system, and steps 1.1 and 2.1 give the converse construction. [step 1.1, step 2.1, step 1.2, step 1.3] ∎
