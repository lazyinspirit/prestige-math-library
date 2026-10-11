---
id: thm-e-core-is-independent-of-the-rim-hook-removal-order
kind: theorem
title: "The e-core is independent of the rim hook removal order"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-e-core-e-quotient-and-e-weight, lem-hooks-are-bead-gap-pairs-on-an-abacus, def-removable-border-strip-and-height, lem-hooks-correspond-to-removable-border-strips, def-beta-set-and-e-runner-abacus-of-a-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 59-61: Lemma 4.9 (the shift action on runners), Theorem 4.10 with its proof, and Corollary 4.8 (e-hook removal as a one-row bead slide)"
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 5.34 with its printed abacus proof, printed p. 61"
---

## Statement

Let $e\ge2$ and let $\lambda\vdash n$ with $e$-abacus configurations as in
[[def-beta-set-and-e-runner-abacus-of-a-partition]] and the top-packed set
$X^{(e)}$ of [[def-e-core-e-quotient-and-e-weight]]. For every $\beta$-set $X$
of $\lambda$ the partition $P(X^{(e)})$ is the same, so the $e$-core
$C_e(\lambda)=P(X^{(e)})$ is a well-defined $e$-core partition, and it is
exactly the terminal partition reached by successively removing removable
border strips of size $e$ from $[\lambda]$ until none is left
([[def-removable-border-strip-and-height]],
[[lem-hooks-correspond-to-removable-border-strips]]). In particular every
maximal sequence of such removals gives the same terminal partition
$C_e(\lambda)$, each removed strip has size exactly $e$, and the terminal
partition contains no hook of length $e$. Moreover any two normalised beta-sets
($e\mid|X|$) give the same ordered quotient $Q_e(\lambda)$ and weight.

No choice principle is used.

## Facts & Assumptions

**Given:** An integer $e\ge2$, a partition $\lambda\vdash n$, and a $\beta$-set $X$ of $\lambda$ with runner label sets $X^{(e)}_i$, counts $c_i:=|X^{(e)}_i|$ and top-packed set $X^{(e)}$ as in [[def-e-core-e-quotient-and-e-weight]].

[F1] Hooks correspond to bead-gap pairs $(b,g)$ with length $b-g$; deleting the corresponding rim strip replaces $b$ by $g$. If the length is divisible by $e$, the relocation stays on the same runner ([[lem-hooks-are-bead-gap-pairs-on-an-abacus]]).

[F2] The top-packed set has runner $i$ occupied in rows $0,\ldots,c_i-1$, and $C_e(\lambda)=P(X^{(e)})$. The ordered quotient is computed from the partitions of the runner row-label sets of a normalised beta-set ([[def-e-core-e-quotient-and-e-weight]]).

[F3] Every beta-set of $\lambda$ is $X_\lambda+l$ for a unique $l\ge0$, and $P(X+l)=P(X)$. Thus, after interchanging two beta-sets if necessary, the larger one is a shift of the smaller one ([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F4] The hook/rim-strip correspondence is a bijection preserving size ([[def-removable-border-strip-and-height]], [[lem-hooks-correspond-to-removable-border-strips]]).

## Proof

**Proof technique:** direct.

1.1 Fix a $\beta$-set $X$ of a partition $\mu$ and write its elements as $h_1>\cdots>h_m$. By [F1] the hooks of length $e$ of $\mu$ correspond bijectively to the beads $b=h_i$ with $h_i\ge e$ and $h_i-e\notin X$, the correspondence sending such a bead to the rim strip $R_{i,j}(\mu)$ attached to the node with $h_{i,j}(\mu)=e$, and removal of that strip replaces $X$ by $X'=(X\setminus\{h_i\})\cup\{h_i-e\}$, a $\beta$-set for $\mu\setminus R_{i,j}(\mu)$ of the same size $m$. In particular $\mu$ has no hook of length $e$ exactly when no bead of $X$ has a gap in the position $e$ labels above it on its own runner. [F1, F2]

1.2 Compute the shift directly. For $Y=X+1$, its runner sets are $Y^{(e)}_0=(X^{(e)}_{e-1})+1$ and $Y^{(e)}_i=X^{(e)}_{i-1}$ for $1\le i<e$: the last runner wraps to runner $0$ one row lower, and the shift adds the bead at $0$. Its counts are $(c_{e-1}+1,c_0,\ldots,c_{e-2})$. Packing with these counts gives $Y^{(e)}=(X^{(e)})+1$, so $P(Y^{(e)})=P(X^{(e)})$ by [F3]. Iteration proves core independence for all beta-sets of $\lambda$. After $e$ shifts, every runner row-label set has undergone one beta-set shift by $1$, so its partition is unchanged. Normalised beta-sets differ by a multiple of $e$, proving independence of the ordered quotient and its total size. [F2, F3, algebra]

2.1 Call a bead of $X$ *movable* when the position $e$ labels above it on its runner is a gap, so that by step 1.1 the movable beads are exactly the hooks of length $e$ of $\mu$; moving a bead up one row replaces $X$ by a $\beta$-set of $\mu$ minus that hook, and the counts $|X^{(e)}_i|$ of beads on each runner are unchanged. A configuration is top-packed precisely when it has no movable bead: a top-packed runner carries beads in the rows $0,1,\dots,c_i-1$, so the row above a bead is a bead again (and row $0$ has no row above it), while if some runner is not top-packed there are a gap in row $g$ and a bead in a row $a>g$ on that runner; choosing $a$ minimal among the bead rows larger than $g$, the row $a-1$ is a gap, so the bead in row $a$ is movable. [F2, step 1.1]

3.1 Every sequence of moves of steps 1.1 and 2.1 is finite: the quantity $\Phi:=\sum_{i}\sum_{a\in X^{(e)}_i}a$ is the total of the row labels of all beads, and each move replaces a bead's row label $a$ by $a-1$, so $\Phi$ decreases by exactly $1$ and is a nonnegative integer. A sequence is maximal exactly when it stops at a configuration with no movable bead, that is, by step 2.1, exactly when it stops at the top-packed configuration of the counts $(c_i)$; and that configuration is unique, since a runner with $c_i$ beads has exactly one top-packed state, the rows $0,\dots,c_i-1$. Hence every maximal sequence of moves starting from $X$ ends at the same configuration, namely $X^{(e)}$, and therefore at the same terminal partition $P(X^{(e)})$. [F2, step 1.1, step 2.1, algebra]

4.1 By step 1.2 the partition $P(X^{(e)})$ does not depend on the chosen $\beta$-set $X$, so $C_e(\lambda):=P(X^{(e)})$ is well-defined; by step 3.1 it is the common terminal partition of all maximal sequences of e-hook removals, and by step 2.1 a terminal configuration is top-packed, hence carries no movable bead, hence its partition has no hook of length $e$ by step 1.1; thus $C_e(\lambda)$ is an $e$-core. Every strip removed along such a sequence corresponds to a node hook of length exactly $e$ and so has size $e$ by [F4]. This proves all the asserted properties. [F2, F4, step 1.1, step 2.1, step 3.1, step 1.2] ∎
