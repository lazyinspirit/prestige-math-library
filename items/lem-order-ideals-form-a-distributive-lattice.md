---
id: lem-order-ideals-form-a-distributive-lattice
kind: lemma
title: "The order ideals of a finite poset form a distributive lattice under union and intersection"
status: published
origin: session
deps: [def-lattice-distributive-lattice-and-order-ideal, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.212, Lecture 16: Distributive lattices"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/resources/mit18_212s19_lec16/"
pipeline_run: null
---

## Statement

For a finite poset $P$, the order ideals $J(P)$ form a finite distributive
lattice under inclusion. Its meet is intersection, its join is union, its
bottom is $\varnothing$, and its top is $P$.

## Facts & Assumptions

**Given:** A finite poset $P$ and order ideals $I,J,K\in J(P)$.

[F1] An order ideal is downward closed, and a distributive lattice satisfies the two distributive identities for meet and join ([[def-lattice-distributive-lattice-and-order-ideal]]).

[L1] The power set of a finite set is finite ([[cor-cardinality-of-the-power-set]]), and every subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 The sets $I\cap J$ and $I\cup J$ are order ideals: if $y$ belongs to the intersection or union and $x\le y$, downward closure in the relevant ideal puts $x$ in the same intersection or union. [given, F1]

1.2 Set union and intersection satisfy $I\cap(J\cup K)=(I\cap J)\cup(I\cap K)$ and $I\cup(J\cap K)=(I\cup J)\cap(I\cup K)$ element by element. [given, algebra]

2.1 In the inclusion order, $I\cap J$ is the greatest lower bound of $I,J$ and $I\cup J$ is their least upper bound. Also $\varnothing$ and $P$ are respectively the least and greatest order ideals. [step 1.1, F1]

3.1 Thus $J(P)$ is a distributive lattice with the asserted operations and bounds. It is finite because it is a subcollection of the finite power set of $P$. [step 2.1, step 1.2, F1, L1] ∎
