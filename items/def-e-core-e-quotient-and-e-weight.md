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
are finite subsets of $\mathbb N_0$ and may overlap. The disjoint union
$\bigsqcup_i\{i\}\times X^{(e)}_i$ records each bead with its runner and row;
the map $(i,a)\mapsto ae+i$ bijects it with $X$.

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

- **Well-definedness.** Under the shift $X\mapsto X+1$, the runner sets satisfy
  $(X+1)^{(e)}_0=(X^{(e)}_{e-1})+1$ and
  $(X+1)^{(e)}_i=X^{(e)}_{i-1}$ for $1\le i<e$, where $+1$ is the beta-set
  shift, including the new bead at row $0$. Thus the new counts are
  $(c_{e-1}+1,c_0,\ldots,c_{e-2})$, not just a permutation of the old counts.
  Top-packing commutes with this shift:
  $(X+1)^{(e)}=(X^{(e)})+1$, so $P$ is unchanged. A shift by $e$ applies a
  beta-set shift by $1$ to every runner, preserving each component partition.
  Hence any two normalised beta-sets give the same ordered quotient and
  weight. These identities and the identification of the core with terminal
  rim $e$-hook removal are proved in
  [[thm-e-core-is-independent-of-the-rim-hook-removal-order]].

- **$e$-cores are $e$-regular and $e$-restricted.** If a positive part $a$
  occurs at least $e$ times, put $r=\lambda'_a$. The bottom $e$ rows of length
  $a$ are $r-e+1,\ldots,r$, and the node $(r-e+1,a)$ has hook length
  $a-a+r-(r-e+1)+1=e$. Thus an $e$-core is $e$-regular. Conjugation
  preserves hook lengths, since it exchanges arm and leg; applying this
  argument to $\lambda'$ and using
  [[def-e-regular-and-e-restricted-partitions]] gives $e$-restrictedness.

- **Normalisation and the quotient's ordering.** Shifting by $1$ rotates
  the component partitions cyclically. Shifting by $e$ increases every runner
  count by $1$ and replaces each row-label set $Y$ by
  $Y+1=\{a+1:a\in Y\}\cup\{0\}$; it preserves $P(Y)$, rather than $Y$ itself.
  The condition $e\mid|X|$ therefore fixes the ordered quotient, as in
  Lemma 4.9 and its normalising remark in the lecture notes.
