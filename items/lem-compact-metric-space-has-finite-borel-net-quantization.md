---
id: lem-compact-metric-space-has-finite-borel-net-quantization
kind: lemma
title: "A compact metric space has a finite Borel nearest-center quantization at every positive scale"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-metric-space
  - def-metric-compactness
  - def-metric-ball
  - def-metric-topology
  - def-borel-sigma-algebra
  - lem-metric-nonnegativity
  - lem-finite-set-has-max
justified_by: []
axiom_use: "No choice principle is used. Compactness supplies one finite subcover for the given scale, and selecting centers from its finite list is justified by finite induction."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Dmitriy Panchenko, Lecture Notes on Probability Theory, §4.4"
      url: "https://drive.google.com/uc?export=download&id=0B6JeBUquZ5BwVlV1dEpsTHVVbTA&resourcekey=0-5xbvKhDXZjrYRLfqppsHuQ"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §1.1, PDF pp. 3–4"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Statement

Let $(X,d)$ be a nonempty compact metric space and let $\varepsilon>0$. Then there are an integer $m\ge1$, distinct points $x_1,\ldots,x_m\in X$, a Borel partition $C_1,\ldots,C_m$ of $X$, and a Borel map $Q:X\to F:=\{x_1,\ldots,x_m\}$ such that $Q(x)=x_i$ for $x\in C_i$ and $d(x,Q(x))<\varepsilon$ for every $x\in X$. The partition assigns each point to a nearest point of $F$, and ties are assigned to the least index.

## Facts & Assumptions

**Given:** A nonempty compact metric space $(X,d)$ and $\varepsilon>0$.

[F1] Every open cover of a compact metric space has a finite subcover. [[def-metric-compactness]]

[F2] A metric is symmetric and satisfies the triangle inequality; its values are nonnegative. [[def-metric-space]] [[lem-metric-nonnegativity]]

[F3] Every nonempty finite list of real numbers has an attained minimum. [[lem-finite-set-has-max]]

[F4] The Borel sigma-algebra contains every open and closed set and is closed under finite unions and intersections. [[def-borel-sigma-algebra]]

## Proof

**Proof technique:** direct.

1.1 For any $x\in X$, the ball $B(x,\varepsilon)$ is open: if $y\in B(x,\varepsilon)$, set $\delta=\varepsilon-d(x,y)>0$; whenever $d(y,z)<\delta$, [F2] gives $d(x,z)\le d(x,y)+d(y,z)<\varepsilon$, so $B(y,\delta)\subseteq B(x,\varepsilon)$. Also $x\in B(x,\varepsilon)$, so $\{B(x,\varepsilon):x\in X\}$ is an open cover. [given, F1, F2]

2.1 By [F1], finitely many members of that cover still cover $X$. Each selected member is a ball with at least one center; since the list is finite, finite induction selects a center for every selected member without any choice axiom. Removing repeated centers and preserving their first-occurrence order leaves a finite nonempty distinct list $x_1,\ldots,x_m$ whose $\varepsilon$-balls cover $X$. [step 1.1, F1, construct]

3.1 For $i<j$, the function $h_{ij}(x)=d(x,x_i)-d(x,x_j)$ satisfies $|h_{ij}(x)-h_{ij}(y)|\le2d(x,y)$ by applying the triangle inequality in both directions to each distance. If $h_{ij}(x)<0$, then the ball of radius $-h_{ij}(x)/4$ around $x$ lies in $\{h_{ij}<0\}$; if $h_{ij}(x)>0$, then the ball of radius $h_{ij}(x)/4$ around $x$ lies in $\{h_{ij}>0\}$. Hence $\{h_{ij}<0\}$ is open and $\{h_{ij}\le0\}$ is closed. [step 2.1, F2, algebra]

4.1 Define $C_i:=\bigcap_{j<i}\{x:d(x,x_i)<d(x,x_j)\}\cap\bigcap_{j>i}\{x:d(x,x_i)\le d(x,x_j)\}$. These are Borel sets by [F4] and step 3.1. For each $x$, [F3] gives a least index minimizing the finite list $d(x,x_1),\ldots,d(x,x_m)$, so $x$ belongs to the corresponding $C_i$. If $i<j$, membership in $C_i$ gives $d(x,x_i)\le d(x,x_j)$ while membership in $C_j$ gives $d(x,x_j)<d(x,x_i)$; therefore the cells are disjoint and form a partition. [step 2.1, step 3.1, F3, F4]

5.1 Define $Q(x)=x_i$ on $C_i$. For every subset $A\subseteq F$, $Q^{-1}(A)=\bigcup_{i:x_i\in A}C_i$ is a finite union of Borel sets, so $Q$ is Borel. The net points from step 2.1 have $\varepsilon$-balls covering $X$; hence a nearest center is at distance less than $\varepsilon$ from every point. Thus $d(x,Q(x))<\varepsilon$ for all $x$. [step 2.1, step 4.1, F4] ∎

