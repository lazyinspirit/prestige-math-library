---
id: lem-standard-tableau-removal-recursion
kind: lemma
title: The removal recursion for standard tableaux
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-removable-and-addable-nodes-of-a-partition, def-young-tableau-standard-tableau-and-shape, lem-largest-entry-of-a-standard-tableau-is-removable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.4, printed p. 7: the bijection between standard lambda-tableaux and the union of the standard (lambda minus x)-tableaux, and the displayed recursion f^lambda = sum_{x in Rem(lambda)} f^{lambda minus x}; read in the full text."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "Chapter 7 opening, printed p. 27: the recalled recursion f^lambda = sum_i f^{lambda minus i} with the convention that non-partitions contribute zero; read in the full text."
---

## Statement

Let $n\ge1$ and $\lambda\vdash n$. The map that sends a standard
$\lambda$-tableau $t$ to the pair $(x,t^-)$, where $x$ is the box occupied by
$n$ and $t^-$ is the restriction of $t$ to $[\lambda]\setminus\{x\}$, is a
bijection from the set of standard $\lambda$-tableaux onto the disjoint union,
over the removable nodes $x\in\operatorname{Rem}(\lambda)$, of the sets of
standard $(\lambda-x)$-tableaux. Consequently

$$f^\lambda=\sum_{x\in\operatorname{Rem}(\lambda)}f^{\lambda-x}\qquad(\lambda\vdash n,\ n\ge1),$$

and we adopt the convention $f^\varnothing=1$. For $n=0$ the disjoint union is
empty and the recursion is not asserted: the value $f^\varnothing=1$ is the
convention for the unique empty tableau.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a partition $\lambda\vdash n$, and the family of partitions $\lambda-x$ for $x\in\operatorname{Rem}(\lambda)$.

[L1] A standard $\lambda$-tableau is a bijection $t:[\lambda]\to\{1,\dots,n\}$ that strictly increases along rows and down columns; the shape is determined by $t$ ([[def-young-tableau-standard-tableau-and-shape]]).

[L2] The box occupied by the largest entry $n$ of a standard $\lambda$-tableau is a removable node of $\lambda$, and deleting it leaves a standard tableau of shape $\lambda-x$ ([[lem-largest-entry-of-a-standard-tableau-is-removable]]).

[L3] A node $x$ is removable exactly when $[\lambda]\setminus\{x\}$ is the diagram of a partition $\lambda-x\vdash n-1$; the diagram $[\lambda-x]$ determines $\lambda-x$ ([[def-removable-and-addable-nodes-of-a-partition]]).

## Proof

**Proof technique:** direct.

1.1 The map is well defined: by [L2] the box $x$ of $n$ is removable and $t^-$ is a standard tableau of shape $\lambda-x$, and $(x,t^-)$ lies in the $x$-component of the displayed disjoint union. [L2, given]

1.2 The map is injective: given its image $(x,t^-)$ one recovers $t$ by $t(x)=n$ and $t=t^-$ on $[\lambda]\setminus\{x\}$, so two tableaux with the same image are equal. [L1, given]

1.3 The map is surjective onto the displayed union: let $x\in\operatorname{Rem}(\lambda)$ and let $t^-$ be a standard tableau of shape $\lambda-x$; define $t(x):=n$ and $t(y):=t^-(y)$ for $y\in[\lambda-x]$. Then $t$ is a bijection $[\lambda]\to\{1,\dots,n\}$, because $t^-$ is a bijection onto $\{1,\dots,n-1\}$ and $x\notin[\lambda-x]$. [L1, L3, given]

2.1 The bijection $t$ of step 1.3 is standard: adjacent pairs in $[\lambda]$ not involving $x$ are adjacent in $[\lambda-x]$ and satisfy the required strict inequality by standardness of $t^-$, while a pair involving $x$ has its other entry in $\{1,\dots,n-1\}$ and hence satisfies $t^-(\cdot)\le n-1<n=t(x)$ in the direction of $x$, and the inequalities along rows and columns run into $x$ only from the left and from above, since $x$ is a corner. [L1, L3, step 1.3]

2.2 The two constructions of steps 1.1 and 1.3 are inverse: starting from $t$, the tableau reconstructed from $(x,t^-)$ agrees with $t$ because $t(x)=n$ and $t$ restricts to $t^-$; starting from $x,t^-$, the pair extracted from the reconstructed $t$ is $(x,t^-)$ because the only entry greater than $n-1$ is $t(x)=n$. [L1, step 1.1, step 1.3]

3.1 The components of the disjoint union are indexed by the distinct removable nodes $x$, and for fixed $x$ the standard $(\lambda-x)$-tableaux number $f^{\lambda-x}$; the bijection of steps 1.1–2.2 therefore gives the stated recursion, and for $\lambda=\varnothing$ the union is empty while $f^\varnothing=1$ is the adopted convention. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, L1] ∎
