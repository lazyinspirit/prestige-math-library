---
id: lem-hook-product-change-under-corner-removal
kind: lemma
title: Removing a corner changes hooks in its row and column
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-hook-arm-leg-and-hook-length, def-partition-young-diagram-and-conjugate-partition, def-removable-and-addable-nodes-of-a-partition]
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
      locator: "§1.4, printed pp. 8-10: Lemma 1.11 and the first-column hook updates on p. 9 in the proof of Theorem 1.13. The local row-and-column update stated here follows directly from the hook coordinates."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§7, printed p. 28: Theorem 7.3(b) and its hook-product manipulation; the same local hook reduction is behind Lemma 7.2 on the same pages."
---

## Statement

Let $\lambda\vdash n$ with $n\ge1$, let $x=(a,b)\in\operatorname{Rem}(\lambda)$
be a removable node (so $b=\lambda_a$ and $a=\lambda'_b$, and the arm and leg
of $x$ are empty), and let $\mu:=\lambda-x$. Put
$$R_x:=\{(a,j):1\le j<b\}\cup\{(i,b):1\le i<a\},$$
the boxes of $[\mu]$ lying in row $a$ or in column $b$; these are exactly the
boxes whose hook contains $x$. Then:

1. $h_\mu(y)=h_\lambda(y)$ for every $y\in[\mu]\setminus R_x$, and
   $h_\mu(y)=h_\lambda(y)-1$ for every $y\in R_x$; in particular every
   $y\in R_x$ has $h_\lambda(y)\ge2$.
2. Consequently, with $P$ the hook product of
   [[def-hook-arm-leg-and-hook-length]],

$$\frac{P(\lambda)}{P(\mu)}=\prod_{y\in R_x}\frac{h_\lambda(y)}{h_\lambda(y)-1}.$$

## Facts & Assumptions

**Given:** Integers $n\ge1$ and $\lambda\vdash n$, a removable node $x=(a,b)\in\operatorname{Rem}(\lambda)$ with $b=\lambda_a$, and $\mu:=\lambda-x$.

[L1] Hook lengths are $h_\nu(i,j)=\nu_i-j+\nu'_j-i+1$ for a partition $\nu$ and a box $(i,j)\in[\nu]$, where $\nu'_j$ is the number of rows of $[\nu]$ of length at least $j$; a box is removable if and only if $h_\nu=1$ ([[def-hook-arm-leg-and-hook-length]], [[def-partition-young-diagram-and-conjugate-partition]]).

[L2] A node $(i,\lambda_i)$ is removable if and only if $\lambda_i>\lambda_{i+1}$ (with $\lambda_{k+1}:=0$ for a $k$-part partition), and deleting a removable node leaves the diagram of a partition $\lambda-x\vdash n-1$ ([[def-removable-and-addable-nodes-of-a-partition]]).

[L3] The conjugate $\lambda'$ has $\lambda'_j=\#\{i:\lambda_i\ge j\}$; consequently $\lambda'_b=a$ when $b=\lambda_a$ and rows $a+1,a+2,\dots$ all have length $<b$. For equal-index comparisons, if $i\ne a$ then $\mu_i=\lambda_i$, and if $j\ne b$ then $\mu'_j=\lambda'_j$ ([[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** direct.

1.1 For these coordinate comparisons, extend row lengths by zero beyond the last nonempty row. The row lengths of $\mu$ are $\mu_a=\lambda_a-1=b-1$ and $\mu_i=\lambda_i$ for $i\ne a$: deleting the row-end box of row $a$ shortens exactly that row, and the result is a partition by [L2]. The column heights are $\mu'_b=\lambda'_b-1=a-1$ and $\mu'_j=\lambda'_j$ for $j\ne b$: column $b$ loses exactly its bottom box, since row $a$ is the last row of length at least $b$ (rows below row $a$ have length $<b$ by [L3] and removability), while a column $j\ne b$ either still meets row $a$ (if $j<b$, when row $a$ has length $b-1\ge j$) or never met row $a$ (if $j>b$, when row $a$ has length $b<j$), so its height is unchanged. [L1, L2, L3, given]

1.2 Every $y\in R_x$ satisfies $h_\lambda(y)\ge2$: a box of row $a$ at column $j<b$ is not the end of its row, and a box $(i,b)$ with $i<a$ has the box $(i+1,b)$ of $[\lambda]$ directly below it, since $\lambda_{i+1}\ge\lambda_a=b$ for $i+1\le a$; in both cases $y$ is not removable, so $h_\lambda(y)\ne1$ and, being positive, $h_\lambda(y)\ge2$. [L1, L2, given]

2.1 For $y=(i,j)\in[\mu]$ with $i\ne a$ and $j\ne b$, both summands of $h(y)=\nu_i-j+\nu'_j-i+1$ are the same for $\nu=\lambda$ and for $\nu=\mu$, so $h_\mu(y)=h_\lambda(y)$. [step 1.1, L1]

2.2 For $y=(a,j)\in[\mu]$ with $j<b$ one has $h_\mu(y)=\mu_a-j+\mu'_j-a+1=(\lambda_a-1)-j+\lambda'_j-a+1=h_\lambda(y)-1$, because $j\ne b$ leaves the column height unchanged. [step 1.1, L1]

2.3 For $y=(i,b)\in[\mu]$ with $i<a$ one has $h_\mu(y)=\mu_i-b+\mu'_b-i+1=\lambda_i-b+(\lambda'_b-1)-i+1=h_\lambda(y)-1$, because $i\ne a$ leaves the row length unchanged. [step 1.1, L1]

3.1 The multiset of hook factors: $h_\lambda(x)=1$, so $P(\lambda)=\prod_{y\in[\mu]}h_\lambda(y)\cdot h_\lambda(x)=\prod_{y\in[\mu]}h_\lambda(y)$, while $P(\mu)=\prod_{y\in[\mu]}h_\mu(y)=\bigl(\prod_{y\in[\mu]\setminus R_x}h_\lambda(y)\bigr)\bigl(\prod_{y\in R_x}(h_\lambda(y)-1)\bigr)$. Dividing the two finite products, all factors with $y\notin R_x$ cancel and the factors with $y\in R_x$ contribute $h_\lambda(y)/(h_\lambda(y)-1)$; the division is legitimate because $h_\lambda(y)-1\ge1$ on $R_x$ by step 1.2. [step 1.1, step 2.1, step 2.2, step 2.3, step 1.2, L1] ∎
