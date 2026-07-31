---
id: lem-finite-lattice-join-irreducible-decomposition
kind: lemma
title: "A finite lattice has a bottom and a top, and every element is the join of the join-irreducible elements below it"
status: published
origin: session
deps: [def-lattice-distributive-lattice-and-order-ideal, def-join-irreducible-element, def-finite-cardinality, thm-subset-of-a-finite-set, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

Every nonempty finite lattice $L$ has a least element $0_L$ and a greatest
element $1_L$. Moreover, every $x\in L$ is the join of the join-irreducible
elements $j\le x$. For $x=0_L$ this is the empty join.

## Facts & Assumptions

**Given:** A nonempty finite lattice $L$.

[F1] Every pair in a lattice has a meet and a join ([[def-lattice-distributive-lattice-and-order-ideal]]).

[F2] A join-irreducible element is non-bottom and cannot be written as a join of two strictly smaller elements ([[def-join-irreducible-element]]).

[L1] Every nonempty subset of $\mathbb N$ has a least element; a subset of a finite set is finite, and a proper subset has strictly smaller cardinality ([[thm-well-ordering-principle]], [[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** induction.

1.1 Since $L$ is nonempty and finite, [L1] lets us choose $m$ for which the principal ideal $\downarrow m$ has least cardinality. If $y<m$, then $\downarrow y$ is a proper subset of $\downarrow m$ and [L1] makes its cardinality strictly smaller, contradicting that choice, so $m$ is minimal. If $m'$ is another minimal element, then $m\wedge m'\le m,m'$, so minimality gives $m\wedge m'=m=m'$. Thus the minimal element is unique and lies below every $x\in L$, because $m\wedge x\le m$ forces $m\wedge x=m$. Call it $0_L$. [given, F1, L1, choose]

1.2 Dually, choosing an element whose principal filter has least cardinality gives a unique maximal element $1_L$, and every $x\in L$ lies below it. [given, F1, L1, choose]

2.1 We prove the decomposition of $x$ by induction on the cardinality of its principal ideal $\downarrow x=\{y:y\le x\}$. For $x=0_L$, the empty join is $0_L$. [base, step 1.1]

3.1 Assume every element with a smaller principal ideal is the join of the join-irreducibles below it. [ih, step 2.1]

4.1 If $x\ne0_L$ is join-irreducible, then $x$ itself is the required one-term join. [step 3.1, F2]

4.2 If $x\ne0_L$ is not join-irreducible, there are $a,b<x$ with $x=a\vee b$. The principal ideals of $a$ and $b$ are proper subsets of $\downarrow x$, so [L1] gives each strictly smaller cardinality and the induction hypothesis writes each as a join of join-irreducibles below it. Joining those two finite families writes $x=a\vee b$ as a join of join-irreducibles below $x$. [step 3.1, ih, F1, F2, L1]

5.1 In every case, steps 2.1, 4.1 and 4.2 give a finite subfamily $\mathcal D_x$ of the join-irreducibles below $x$ whose join is $x$. Let $\mathcal J_x$ be the set of all join-irreducibles below $x$. Since every member of $\mathcal J_x$ is at most $x$, its finite join is at most $x$; since $\mathcal D_x\subseteq\mathcal J_x$, that join is also at least $\bigvee\mathcal D_x=x$. Hence $x$ is the join of all members of $\mathcal J_x$. [step 2.1, step 4.1, step 4.2, F1]

6.1 Step 5.1 proves the decomposition for every $x\in L$, while steps 1.1 and 1.2 provide the bottom and top. [step 1.1, step 1.2, step 5.1, discharge-induction] ∎
