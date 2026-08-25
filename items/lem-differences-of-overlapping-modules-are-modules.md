---
id: lem-differences-of-overlapping-modules-are-modules
kind: lemma
title: "If two modules overlap, then each difference and their symmetric difference are modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-module-of-a-graph, lem-module-criteria, lem-union-of-two-meeting-modules-is-a-module, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.1"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Let $M$ and $N$ be modules of a finite simple graph $G$ that **overlap**, that
is, $M\cap N$, $M\setminus N$ and $N\setminus M$ are all nonempty. Then
$M\setminus N$, $N\setminus M$ and $M\triangle N=(M\setminus N)\cup(N\setminus M)$
are modules of $G$.

The overlap hypothesis cannot be weakened to $M\cap N\ne\varnothing$: for nested
modules the difference need not be a module.

## Facts & Assumptions

**Given:** Overlapping modules $M,N$ of a finite simple graph $G$; the sets $A=M\setminus N$, $B=N\setminus M$ and $C=M\cap N$, all nonempty.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[L1] For a module $M$ of $G$: for all $x,y\in M$ and all $v\in V(G)\setminus M$, $vx\in E(G)$ if and only if $vy\in E(G)$ ([[lem-module-criteria]]).

[L2] The union of two modules with a common vertex is a module ([[lem-union-of-two-meeting-modules-is-a-module]]).

[F2] The pair $(A,B)$ of disjoint sets is complete when every $a\in A$ is adjacent to every $b\in B$, anticomplete when no $a\in A$ is adjacent to any $b\in B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** cases.

1.1 Fix $w\in B$ and note $w\notin M$. For $x,x'\in A$ the vertices $x,x'$ lie in $M$, so [L1] applied to $M$ gives that $wx\in E(G)$ if and only if $wx'\in E(G)$. [L1, given, choose]

1.2 For $x\in A$ we have $x\notin N$, so [L1] applied to $N$ gives, for all $p,q\in N$, that $xp\in E(G)$ if and only if $xq\in E(G)$; in particular this holds for $p\in C$ and $q=w$, both of which lie in $N$. [L1, given]

1.3 First case for $A$: a vertex $v\notin M$. Then $(\{v\},M)$ is pure, and since $A\subseteq M$ the pair $(\{v\},A)$ is pure as well. [assume-case outM, F1, F2]

1.4 Second case for $A$: a vertex $v\in C$. Then $v\in N$, and $v\notin A$. [assume-case inC, given]

1.5 Turning to the symmetric difference, let $v\notin A\cup B$ and take first the subcase $v\notin M\cup N$. The set $M\cup N$ is a module by [L2], since $C\ne\varnothing$, so $(\{v\},M\cup N)$ is pure and hence $(\{v\},A\cup B)$ is pure, as $A\cup B\subseteq M\cup N$. [L2, F1, F2, given]

2.1 In the second case for $A$, let $x,x'\in A$. By step 1.2 applied to $x$ with $p=v$ and $q=w$, $vx\in E(G)$ if and only if $wx\in E(G)$; by step 1.1, $wx\in E(G)$ if and only if $wx'\in E(G)$; and by step 1.2 applied to $x'$, $wx'\in E(G)$ if and only if $vx'\in E(G)$. Hence $vx\in E(G)$ if and only if $vx'\in E(G)$, so $(\{v\},A)$ is complete or anticomplete. [step 1.1, step 1.2, step 1.4, F2]

2.2 A vertex $v\notin A$ satisfies $v\notin M$, or else $v\in M$ and then $v\notin A$ forces $v\in N$, so $v\in C$; the two cases of steps 1.3 and 1.4 are therefore exhaustive. [step 1.3, step 1.4, given, cases-exhaustive]

3.1 Steps 1.3, 2.1 and 2.2 make $(\{v\},A)$ pure for every $v\notin A$, so $A=M\setminus N$ is a module; exchanging the roles of $M$ and $N$, which the overlap hypothesis leaves unchanged, shows that $B=N\setminus M$ is a module. [step 1.3, step 2.1, step 2.2, F1]

3.2 Still for the symmetric difference, take the remaining subcase $v\in M\cup N$ with $v\notin A\cup B$, so that $v\in C$. Step 2.1 makes $(\{v\},A)$ pure and its mirror image makes $(\{v\},B)$ pure, while step 1.2 applied to some $x\in A$ with $p=v$ and $q\in B$ gives $vx\in E(G)$ if and only if $qx\in E(G)$, and [L1] applied to $M$ with $q\notin M$ and $x,v\in M$ gives $qx\in E(G)$ if and only if $qv\in E(G)$. So the adjacency of $v$ to $A$ and its adjacency to $B$ agree, and $(\{v\},A\cup B)$ is pure. [step 1.2, step 2.1, L1, F2]

4.1 Combining steps 1.5 and 3.2, every vertex outside $A\cup B$ has $(\{v\},A\cup B)$ pure, so $M\triangle N$ is a module of $G$. [step 3.1, step 1.5, step 3.2, F1] ∎
