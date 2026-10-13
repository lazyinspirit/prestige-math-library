---
id: def-beta-set-and-e-runner-abacus-of-a-partition
kind: definition
title: "Beta-sets, the shift, and the e-runner abacus of a partition"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-partition-young-diagram-and-conjugate-partition, def-hook-arm-leg-and-hook-length]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "(5.20) and (5.21) with the following paragraph, printed pp. 52-53: the beta numbers $\\beta_i=n-i+\\nu'_i$ of a partition $\\nu$, the recovery formula $\\nu'_i=b_i-n+i$, and the permutation sign attached to a rearranged sequence"
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 54-55: the definition of a beta-set, the shift $X+l$, the partition $P(X)$, Lemma 4.2, and the definition of James's e-abacus with the bijection between beta-sets and bead configurations"
---

## Definition

Let $\lambda\vdash n$ be a partition with English Young diagram $[\lambda]$, parts
$\lambda_1\ge\cdots\ge\lambda_m>0$ and conjugate $\lambda'$
([[def-partition-young-diagram-and-conjugate-partition]]). For $1\le i\le m$ put
$$b_i(\lambda):=\lambda_i+m-i=h_{i,1}(\lambda),$$
the hook length of the first node of row $i$
([[def-hook-arm-leg-and-hook-length]]); since
$h_{i,1}(\lambda)=\lambda_i+\lambda'_1-i$ and $m=\lambda'_1$, the two expressions
agree. Then
$$X_\lambda:=\{b_1(\lambda)>b_2(\lambda)>\cdots>b_m(\lambda)\}$$
is the set of **first-column hook lengths** of $\lambda$, a finite strictly
decreasing set of positive integers.

A **$\beta$-set** is a finite set $X=\{h_1>\cdots>h_m\}\subseteq\mathbb N_0$ of
nonnegative integers, written in strictly decreasing order. For $l\in\mathbb N_0$
the **$l$-shift** of $X$ is
$$X+l:=\{h+l:h\in X\}\cup\{l-1,l-2,\dots,1,0\}$$
(for $l=0$ this is $X$ itself, the second set being empty), and the **partition
of $X$** is
$$P(X):=(h_1-(m-1),\,h_2-(m-2),\,\dots,\,h_m-0),$$
with trailing zeros deleted; this is a weakly decreasing sequence of
nonnegative integers ending in $h_m$, hence a partition of
$\sum_i h_i-m(m-1)/2$ after deleting its zeros. A $\beta$-set **for** $\lambda$
is a $\beta$-set $X$ with $P(X)=\lambda$.

Let $e\ge2$. **James's $e$-abacus** has $e$ runners $0,1,\dots,e-1$ drawn left to
right, with rows labelled $a=0,1,2,\dots$ downward; the position in row $a$ of
runner $i$ carries the label $ae+i$. An **$e$-abacus configuration** $A$ is a
finite set of **beads** placed in distinct positions of this abacus; a position
without a bead is a **gap**. The configuration $A_X$ of a $\beta$-set $X$ carries
a bead in the positions of $X$, and conversely $X_A$ is the set of position
labels of the beads of $A$; the two constructions are mutually inverse, so they
biject finite $\beta$-sets with finite bead configurations. Finally
$P(A):=P(X_A)$, and $A_\lambda:=A_{X_\lambda}$.

## Remarks

- **$P(X_\lambda)=\lambda$.** For $1\le i\le m$ one has
  $h_{i,1}(\lambda)-(\lambda'_1-i)=(\lambda_i+\lambda'_1-i)-(\lambda'_1-i)=\lambda_i$,
  so $X_\lambda$ is a $\beta$-set for $\lambda$; the shift convention of the
  definition is exactly the one for which this holds with $l=0$.

- **Shifts describe all $\beta$-sets of $\lambda$.** Let $X=\{h_1>\cdots>h_m\}$
  be a $\beta$-set and $t=\ell(\lambda)$ the number of parts of $\lambda$. By the
  definition of $P$ and the deletion of trailing zeros,
  $P(X)=\lambda$ if and only if $m\ge t$, $h_j-(m-j)=\lambda_j$ for $j\le t$ and
  $h_j-(m-j)=0$ for $t<j\le m$. This holds if and only if $m-t\in\mathbb N_0$
  and $h_j=(\lambda_j+t-j)+(m-t)=b_j(\lambda)+(m-t)$ for $j\le t$ while
  $\{h_{t+1},\dots,h_m\}=\{m-t-1,\dots,1,0\}$; that is, if and only if
  $X=X_\lambda+(m-t)$. Hence the $\beta$-sets for $\lambda$ are exactly the sets
  $X_\lambda+l$ with $l\in\mathbb N_0$, and $l$ is recovered as $l=m-t$; in
  particular $P(X+l)=P(X)$ for every $\beta$-set $X$ and every $l$, since the
  two sets have the same $P$. This is Lemma 4.2 of the lecture notes and the
  display preceding (5.21) of the manuscript; it is the sense in which the
  shift is a normalisation and not a change of partition.

- **The runner labelling.** Writing $h=ae+i$ with $a\in\mathbb N_0$ and
  $i\in\{0,1,\dots,e-1\}$ gives a bijection
  $\mathbb N_0\to\mathbb N_0\times\{0,\dots,e-1\}$, so every position of the
  abacus has exactly one label and $X\mapsto A_X$ is a bijection onto the finite
  bead configurations, with inverse $A\mapsto X_A$. The **runner** of a position
  $h$ is its residue $h\bmod e$; the residue of a bead is the residue of its
  label. No choice principle is used anywhere in this definition.

