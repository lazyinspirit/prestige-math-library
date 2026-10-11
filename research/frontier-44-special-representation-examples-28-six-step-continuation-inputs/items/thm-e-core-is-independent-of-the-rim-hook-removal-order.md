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
partition contains no hook of length $e$.

No choice principle is used.

## Facts & Assumptions

**Given:** An integer $e\ge2$, a partition $\lambda\vdash n$, and a $\beta$-set
$X$ of $\lambda$ with runner label sets $X^{(e)}_i$, counts
$c_i:=|X^{(e)}_i|$ and top-packed set $X^{(e)}$ as in
[[def-e-core-e-quotient-and-e-weight]].

[F1] For a $\beta$-set $X$ of a partition $\mu$ and a node $(i,j)\in[\mu]$
with hook length $h:=h_{i,j}(\mu)$ and bead-gap pair $(b,g)=(h_i,h_i-h)$, the
set $X'=(X\setminus\{b\})\cup\{g\}$ is a $\beta$-set for the partition
$\mu\setminus H_{i,j}(\mu)$; the node set $H_{i,j}(\mu)$ is a removable border
strip of $\mu$ of size $h$ and height $\ell(i,j)=\mu'_j-i$, $X'$ is obtained
from $A_X$ by moving the bead $b$ to the gap $g$, and $e\mid h$ if and only if
$b$ and $g$ lie on the same runner, in which case the move slides the bead up
$h/e$ rows of its runner
([[lem-hooks-are-bead-gap-pairs-on-an-abacus]]).

[F2] $\lambda$ is an $e$-core exactly when no hook of $\lambda$ has length
$e$, and $C_e(\lambda):=P(X^{(e)})$ is the partition of the configuration
obtained by sliding every bead up as far as possible on its own runner, i.e.
into the topmost $c_i$ positions of runner $i$; a hook of length $e$ exists in
row $i$ of a partition with $\beta$-set $Y$ exactly when $y_i-e\notin Y$, so
the configurations with no hook of length $e$ are exactly the top-packed ones
([[def-e-core-e-quotient-and-e-weight]],
[[lem-hooks-are-bead-gap-pairs-on-an-abacus]]).

[F3] The $\beta$-sets of a partition are determined up to shift: if $X$ and
$Y$ are $\beta$-sets for the same partition, then $Y=X+l$ for a unique
$l\in\mathbb N_0$, and $P$ is invariant under shifting,
$P(X+l)=P(X)$ ([[def-beta-set-and-e-runner-abacus-of-a-partition]]).

[F4] Removable border strips of size $e$ and removable $e$-hooks agree, with
size and height as in [F1]
([[def-removable-border-strip-and-height]],
[[lem-hooks-correspond-to-removable-border-strips]]).

## Proof


**Proof technique:** direct.

1.1 Fix a $\beta$-set $X$ of a partition $\mu$ and write its elements as $h_1>\cdots>h_m$. By [F1] the hooks of length $e$ of $\mu$ correspond bijectively to the beads $b=h_i$ with $h_i\ge e$ and $h_i-e\notin X$, the correspondence sending such a bead to the hook $H_{i,j}(\mu)$ with $h_{i,j}(\mu)=e$, and the removal of that hook replaces $X$ by $X'=(X\setminus\{h_i\})\cup\{h_i-e\}$, a $\beta$-set for $\mu\setminus H_{i,j}(\mu)$ of the same size $m$. In particular $\mu$ has no hook of length $e$ exactly when no bead of $X$ has a gap in the position $e$ rows above it on its own runner. [F1, F2]

2.1 Call a bead of $X$ *movable* when the position $e$ labels above it on its runner is a gap, so that by step 1.1 the movable beads are exactly the hooks of length $e$ of $\mu$; moving a bead up one row replaces $X$ by a $\beta$-set of $\mu$ minus that hook, and the counts $|X^{(e)}_i|$ of beads on each runner are unchanged. A configuration is top-packed precisely when it has no movable bead: a top-packed runner carries beads in the rows $0,1,\dots,c_i-1$, so the row above a bead is a bead again (and row $0$ has no row above it), while if some runner is not top-packed there are a gap in row $g$ and a bead in a row $a>g$ on that runner; choosing $a$ minimal among the bead rows larger than $g$, the row $a-1$ is a gap, so the bead in row $a$ is movable. [F2, step 1.1]

3.1 Every sequence of moves of steps 1.1 and 2.1 is finite: the quantity $\Phi:=\sum_{i}\sum_{a\in X^{(e)}_i}a$ is the total of the row labels of all beads, and each move replaces a bead's row label $a$ by $a-1$, so $\Phi$ decreases by exactly $1$ and is a nonnegative integer. A sequence is maximal exactly when it stops at a configuration with no movable bead, that is, by step 2.1, exactly when it stops at the top-packed configuration of the counts $(c_i)$; and that configuration is unique, since a runner with $c_i$ beads has exactly one top-packed state, the rows $0,\dots,c_i-1$. Hence every maximal sequence of moves starting from $X$ ends at the same configuration, namely $X^{(e)}$, and therefore at the same terminal partition $P(X^{(e)})$. [F2, step 1.1, step 2.1, algebra]

4.1 The same computation is independent of the choice of the $\beta$-set. Let $X$ and $Y$ be two $\beta$-sets of $\lambda$. By [F3] the abstract data attached to a partition and its hooks do not depend on the $\beta$-set: a node $(i,j)$ of the current partition $[\nu]$ is a hook of length $e$ of $\nu$ if and only if its bead in the current configuration is movable, by step 1.1, and the partition after removal of that hook depends only on $[\nu]$ and $(i,j)$ by [F1]. Start two runs of the same maximal sequence of hook removals, one realized on $X$ and one on $Y$; by induction on the number of steps the two runs carry the same current partition at every stage, so the same hooks are removable and the same terminal partition is reached. By step 3.1 the run on $X$ ends at $P(X^{(e)})$ and the run on $Y$ ends at $P(Y^{(e)})$, so $P(X^{(e)})=P(Y^{(e)})$. [F1, F3, step 1.1, step 3.1]

5.1 By step 4.1 the partition $P(X^{(e)})$ does not depend on the chosen $\beta$-set $X$, so $C_e(\lambda):=P(X^{(e)})$ is well-defined; by step 3.1 it is the common terminal partition of all maximal sequences of e-hook removals, and by step 2.1 a terminal configuration is top-packed, hence carries no movable bead, hence its partition has no hook of length $e$ by step 1.1; thus $C_e(\lambda)$ is an $e$-core. Every strip removed along such a sequence is the hook of a node of length exactly $e$ and so has size $e$ by [F4]. This proves all the asserted properties. [F2, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎
