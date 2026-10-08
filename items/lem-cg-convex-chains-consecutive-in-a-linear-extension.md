---
id: lem-cg-convex-chains-consecutive-in-a-linear-extension
kind: lemma
title: "A convex chain (in particular a covering pair) of a finite poset occurs consecutively in some linear extension"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [lem-cg-finite-poset-linear-extensions-and-connectivity, def-partial-order, def-chain, def-graded-poset-and-rank, def-cg-linear-extension-of-a-finite-poset]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. R. Stembridge, On the Fully Commutative Elements of Coxeter Groups, author manuscript (March 1995, minor revisions September 1995); published in J. Algebraic Combin. 5 (1996), 353-385"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Proposition 2.3 and its proof, PDF pp. 9-10 ('For any convex chain (or covering relation) of a poset P, there exist linear extensions in which the members of the chain appear consecutively')"
    - title: "P. Nadeau, On the length of fully commutative elements, arXiv:1511.08788"
      url: "https://arxiv.org/pdf/1511.08788"
      locator: "Definition of convexity in §2.4, PDF p. 6; the local proof of chain contiguity is supplied here"
    - title: "C. Krattenthaler, The theory of heaps and the Cartier-Foata monoid, appendix to the electronic reedition of P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements (2006)"
      url: "https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf"
      locator: "§3, PDF pp. 4-5 (linear extensions read the words of a heap)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(P,\preceq)$ be a finite poset ([[def-partial-order]]) and let $C\subseteq P$ be a nonempty convex chain, meaning that $C$ is a chain ([[def-chain]]) and that $x,z\in C$ and $x\preceq y\preceq z$ imply $y\in C$. Then there is a linear extension of $P$ ([[def-cg-linear-extension-of-a-finite-poset]]) in which the elements of $C$ occur consecutively. In particular, for every covering pair $x\lessdot y$ of $P$ ([[def-graded-poset-and-rank]]) there is a linear extension of $P$ in which $x$ and $y$ are consecutive.

## Facts & Assumptions

**Given:** A finite poset $(P,\preceq)$ and a nonempty convex chain $C\subseteq P$.

[F1] A partial order is reflexive, antisymmetric and transitive, and its strict order is defined by $x\prec y$ if and only if $x\preceq y$ and $x\ne y$ ([[def-partial-order]]).

[F2] A subset of a poset is a chain when any two of its elements are comparable ([[def-chain]]).

[F3] An element $y$ covers $x$ when $x\prec y$ and there is no $z\in P$ with $x\prec z\prec y$ ([[def-graded-poset-and-rank]]).

[F4] Every finite poset has a linear extension ([[lem-cg-finite-poset-linear-extensions-and-connectivity]], clause (2)).

[F5] A linear extension of a finite poset $Q$ is a tuple listing every element of $Q$ exactly once in which $x\prec y$ implies that $x$ occurs before $y$ ([[def-cg-linear-extension-of-a-finite-poset]]).

## Proof

**Given:** A finite poset $(P,\preceq)$ and a nonempty convex chain $C\subseteq P$.

**Proof technique:** direct.

1.1 Setup. Enumerate the nonempty chain $C$ in increasing order as $C=\{c_1\prec c_2\prec\cdots\prec c_m\}$, and set $Q:=(P\setminus C)\cup\{\ast\}$ for a new element $\ast\notin P$. Let $R$ be the relation on $Q$ consisting of the pairs $(x,y)$ with $x,y\in P\setminus C$ and $x\prec y$, the pairs $(x,\ast)$ with $x\in P\setminus C$ and $x\prec c$ for some $c\in C$, and the pairs $(\ast,y)$ with $y\in P\setminus C$ and $c\prec y$ for some $c\in C$. Let $\preceq_Q$ be the reflexive transitive closure of $R$, so $\preceq_Q$ is reflexive and transitive by construction. [given, F1, F2]

2.1 The relation $\preceq_Q$ is antisymmetric. A cycle of $R$ whose vertices lie in $P\setminus C$ would produce $x_1\prec x_2\prec\cdots\prec x_1$ in the poset $P$, impossible by transitivity and antisymmetry; so every nontrivial cycle passes through $\ast$, and between two consecutive occurrences of $\ast$ it consists of an edge $(\ast,y)$, a path inside $P\setminus C$ from $y$ to an element $x$, and an edge $(x,\ast)$. By the definition of $R$ there are then $c',c\in C$ with $c'\prec y$ and $x\prec c$, and the path inside $P\setminus C$ gives $y\preceq x$; hence $c'\preceq y\preceq x\preceq c$. Since $c',c\in C$ and $C$ is convex, this forces $x\in C$, contradicting $x\in P\setminus C$. Therefore $R$ has no nontrivial cycles, and $\preceq_Q$ is a partial order on the finite set $Q$. [given, F1, step 1.1]

3.1 By [F4] the finite poset $Q$ has a linear extension $\pi_Q=(u_1,\dots,u_r)$; let $\pi$ be the tuple obtained from $\pi_Q$ by replacing the one occurrence of $\ast$ with the block $(c_1,\dots,c_m)$. Then $\pi$ lists every element of $P$ exactly once. It is a linear extension of $P$: if $x\prec y$ with $x,y\in P\setminus C$ then $x\preceq_Q y$, so $x$ precedes $y$ in $\pi$; if $x\in P\setminus C$ and $x\prec c_i$ then $(x,\ast)\in R$, so $x$ precedes $\ast$ in $\pi_Q$ and hence precedes the whole block; if $c_i\prec y$ with $y\in P\setminus C$ then $(\ast,y)\in R$, so the whole block precedes $y$; and the block itself lists $c_1,\dots,c_m$ in increasing order, so it respects the relations inside $C$. Since $C$ exhausts the block, its elements occur consecutively in $\pi$. [given, F1, F4, F5, step 2.1]

4.1 In particular, let $x\lessdot y$ be a covering pair and put $C:=\{x,y\}$. Then $C$ is a nonempty chain, and it is convex: if $x\preceq z\preceq y$ with $z\in P$, then either $z=x$, or $z=y$, or $x\prec z\prec y$, which is excluded by [F3]; in all cases $z\in C$. So step 3.1 applies and yields a linear extension of $P$ in which $x$ and $y$ are consecutive. [given, F3, step 3.1] ∎
