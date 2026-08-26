---
id: thm-normal-subgroups-of-a-primitive-action-are-transitive-or-kernel-contained
kind: theorem
title: "Normal subgroups of a primitive action are transitive or lie in the kernel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-subgroup, def-primitive-and-imprimitive-actions, thm-block-systems-and-g-invariant-equivalence-relations-correspond]
justified_by: []
aliases: []
landmark: true
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

Let $G$ act primitively on $\Omega$, and let $N \trianglelefteq G$ be a normal
subgroup. Then either $N$ acts transitively on $\Omega$, or every element of
$N$ fixes every point of $\Omega$. In other words, every normal subgroup of a
primitive action is either transitive or contained in the action kernel.

In particular, if the action is faithful and $N \ne 1$, then $N$ is transitive.

## Facts & Assumptions

**Given:** A primitive action of $G$ on $\Omega$ and a normal subgroup $N \trianglelefteq G$.

[L1] A primitive action is a transitive action whose only block systems are the singleton partition and the one-block partition ([[def-primitive-and-imprimitive-actions]]).

[L2] Partitions into blocks are exactly the $G$-invariant equivalence relations ([[thm-block-systems-and-g-invariant-equivalence-relations-correspond]]).

[L3] A normal subgroup satisfies $gNg^{-1} = N$ for every $g \in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Define $x \sim_N y$ when $y = n \cdot x$ for some $n \in N$. This is an equivalence relation because $1 \in N$, inverses in $N$ reverse the relation, and products in $N$ compose it. [given, algebra]

2.1 The relation $\sim_N$ is $G$-invariant: if $y = n \cdot x$ with $n \in N$, then for every $g \in G$ one has $g \cdot y = (gng^{-1}) \cdot (g \cdot x)$, and [L3] puts $gng^{-1}$ back in $N$. [L3, step 1.1]

3.1 By [L2], the $\sim_N$-classes form a block system. Since the action is primitive, [L1] makes that block system either the one-block partition or the singleton partition. [L1, L2, step 2.1]

4.1 In the one-block case, every point lies in the $N$-orbit of every other point, so $N$ is transitive. In the singleton case, every $N$-orbit has one point, so each $n \in N$ fixes every point of $\Omega$. [step 3.1]

5.1 If the action is faithful and $N \ne 1$, the second case of step 4.1 is impossible. Hence a nontrivial normal subgroup of a faithful primitive action is transitive. [step 4.1] ∎
