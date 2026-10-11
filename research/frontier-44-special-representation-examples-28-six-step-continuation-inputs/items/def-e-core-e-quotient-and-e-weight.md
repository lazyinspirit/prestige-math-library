---
id: def-e-core-e-quotient-and-e-weight
kind: definition
title: "The e-core, the e-quotient, and the e-weight"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-beta-set-and-e-runner-abacus-of-a-partition, lem-hooks-are-bead-gap-pairs-on-an-abacus, def-e-regular-and-e-restricted-partitions]
justified_by: [thm-e-core-is-independent-of-the-rim-hook-removal-order]
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 59-62: the definitions of an e-core partition, of $X^{(e)}_i$, of the e-quotient and of $X^{(e)}$ and $C_e(\\lambda)$, Lemma 4.9, and the normalising remark before the worked example"
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 5.34 with its abacus proof, printed p. 61, together with the definition of e-weight preceding Proposition 5.38, printed p. 62"
---

## Definition

Let $e\ge2$, let $\lambda\vdash n$ and let
$X=\{h_1>h_2>\cdots>h_m\}$ be a $\beta$-set for $\lambda$, with first-column
hook lengths $b_i(\lambda)$ and $e$-abacus configuration $A_X$ as in
[[def-beta-set-and-e-runner-abacus-of-a-partition]]; hooks and their lengths
are those of [[def-hook-arm-leg-and-hook-length]], and the hook/bead-gap
dictionary is [[lem-hooks-are-bead-gap-pairs-on-an-abacus]].

**$e$-core partition.** The partition $\lambda$ is an **$e$-core** when
$e\notin H(\lambda)$, that is, when no hook of $\lambda$ has length $e$; by
[[lem-hooks-are-bead-gap-pairs-on-an-abacus]](iii) this is the case exactly
when no bead of $A_X$ has a gap in the position $e$ labels above it on its own
runner. The empty partition is an $e$-core, and so is every $\lambda$ with
$|\lambda|<e$.

**Runner label sets.** For $i\in\{0,1,\dots,e-1\}$ let
$$X^{(e)}_i:=\{a\in\mathbb N_0:ae+i\in X\}$$
be the set of row labels of the beads of $A_X$ on runner $i$. The $X^{(e)}_i$
are finite subsets of $\mathbb N_0$, they are pairwise disjoint, and
$\bigsqcup_{i}X^{(e)}_i$ is the set of all row labels occurring in $A_X$.

**$e$-core.** The **top-packed $\beta$-set** of $X$ is
$$X^{(e)}:=\bigcup_{i=0}^{e-1}\{ae+i:0\le a\le|X^{(e)}_i|-1\},$$
the configuration obtained from $A_X$ by sliding every bead up as far as it
goes on its own runner, i.e. into the topmost $|X^{(e)}_i|$ positions of
runner $i$. The **$e$-core** of $\lambda$ is
$$C_e(\lambda):=P(X^{(e)}).$$

**$e$-quotient and $e$-weight.** Choose the $\beta$-set $X$ of $\lambda$ to be
*normalised*, meaning $|X|\equiv0\pmod e$. Then define the **$e$-quotient** of
$\lambda$ to be the $e$-tuple of partitions
$$Q_e(\lambda):=(\lambda^{(0)},\lambda^{(1)},\dots,\lambda^{(e-1)}),\qquad \lambda^{(i)}:=P(X^{(e)}_i),$$
each runner read as a $1$-abacus, and the **$e$-weight** of $\lambda$ to be
$$w_e(\lambda):=|Q_e(\lambda)|:=\textstyle\sum_{i=0}^{e-1}|\lambda^{(i)}|.$$
A normalised $\beta$-set exists: by
[[def-beta-set-and-e-runner-abacus-of-a-partition]] the $\beta$-sets of
$\lambda$ are the sets $X_\lambda+l$, $l\in\mathbb N_0$, and
$|X_\lambda+l|=|X_\lambda|+l$, so among the $e$ consecutive shifts
$l,\dots,l+e-1$ exactly one has size divisible by $e$.

No choice principle is used.

## Remarks

- **Well-definedness.** The $e$-core is independent of the chosen $\beta$-set:
  replacing $X$ by $X+1$ replaces the runner label sets by
  $(X+1)^{(e)}_0=(X^{(e)}_{e-1})+1$ and $(X+1)^{(e)}_i=X^{(e)}_{i-1}$ for
  $1\le i\le e-1$ (a bead in row $a$ of runner $i<e-1$ moves to row $a$ of
  runner $i+1$, and a bead in row $a$ of runner $e-1$ moves to row $a+1$ of
  runner $0$, while the shift adds the new bead $0$), so that the *counts*
  $|X^{(e)}_i|$ are cyclically permuted; the partition $P(X^{(e)})$ is
  unchanged by this cyclic permutation. Consequently every two $\beta$-sets of
  $\lambda$ give the same $C_e(\lambda)$, which is moreover again an $e$-core,
  and every two *normalised* ones (differing by a multiple of $e$) give the
  same ordered quotient $Q_e(\lambda)$; and $C_e(\lambda)$ is the terminal
  partition of iterated removal of removable border strips of size $e$ from
  $\lambda$, in any order. Both statements — the invariance of
  $P(X^{(e)})$ under shifting and the identification with rim $e$-hook
  removal — are proved in
  [[thm-e-core-is-independent-of-the-rim-hook-removal-order]], which
  therefore justifies this definition.

- **$e$-cores are $e$-regular and $e$-restricted.** Suppose $\lambda$ has $e$
  equal parts and let $a$ be their common value; the $e$ corresponding rows
  have length at least $a$, so the column $a$ of $[\lambda]$ has height
  $\lambda'_a\ge e$. The nodes $(i',a)$ with $1\le i'\le\lambda'_a$ all lie in
  $[\lambda]$, and their hook lengths are
  $h_{i',a}(\lambda)=1+\lambda'_a-i'$, which run through the whole range
  $1,2,\dots,\lambda'_a$; since $\lambda'_a\ge e$, one
  of them equals $e$. Hence an $e$-core has no $e$ equal parts, i.e. it is
  $e$-regular, in the sense of
  [[def-e-regular-and-e-restricted-partitions]]. Conjugation preserves the
  multiset of hook lengths ([[def-partition-young-diagram-and-conjugate-partition]],
  [[def-hook-arm-leg-and-hook-length]]) and a partition is $e$-restricted
  exactly when its conjugate is $e$-regular
  ([[def-e-regular-and-e-restricted-partitions]]); applying the previous
  sentence to $\lambda'$ therefore shows that an $e$-core is $e$-restricted.
  (For finite $e$ the notions agree with $p$-regular and $p$-restricted at
  $p=e$.)

- **Normalisation and the quotient's ordering.** Shifting the $\beta$-set by
  $e$ adds exactly one bead to every runner, so it changes neither the counts
  nor any $X^{(e)}_i$; hence the normalisation $|X|\equiv0\pmod e$ is exactly
  what fixes the *order* of the $e$ components of $Q_e(\lambda)$. The shift by
  $1$ rotates that order cyclically, and by Lemma 4.9 of the lecture notes this
  is the only ambiguity left; the source's convention is followed verbatim.

