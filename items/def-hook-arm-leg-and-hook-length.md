---
id: def-hook-arm-leg-and-hook-length
kind: definition
title: Hook, arm, leg, and hook length of a box
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-removable-and-addable-nodes-of-a-partition, def-young-tableau-standard-tableau-and-shape]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.2, printed pp. 2-3: hook eta_x, arm, leg, hook/arm/leg lengths, and Proposition 1.4(i); read in the full 42-page text."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§7, printed p. 27: hook formula statement and the hook lengths h_{ij} of [lambda]; read in the full 40-page PDF text."
    - title: "Pavel Etingof et al., Introduction to Representation Theory, MIT 18.712 Chapter 4 (OCW Chapter 4 file, 32 pp.)"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
      locator: "§4.17, PDF pp. 17-18: the hook of (i,j) and its length h(i,j); read in the 32-page Chapter 4 file."
---

## Definition

Let $\lambda\vdash n$ with English Young diagram $[\lambda]$
([[def-partition-young-diagram-and-conjugate-partition]]) and let
$x=(i,j)\in[\lambda]$. The **hook of $x$** is the set
$$H(x):=\{(i,j')\in[\lambda]:j'\ge j\}\cup\{(i',j)\in[\lambda]:i'\ge i\},$$
the union of the boxes of $[\lambda]$ weakly to the right of $x$ in row $i$
and weakly below $x$ in column $j$; the box $x$ itself belongs to both parts
and is counted once. The **arm** $\operatorname{arm}(x)$ is the part in row
$i$ strictly to the right of $x$, so
$\operatorname{arm}(x)=\{(i,j'):j<j'\le\lambda_i\}$; the **leg**
$\operatorname{leg}(x)$ is the part in column $j$ strictly below $x$, so
$\operatorname{leg}(x)=\{(i',j):i<i'\le\lambda'_j\}$. The **arm length** is
$a(x):=\lambda_i-j$, the **leg length** is $\ell(x):=\lambda'_j-i$, and the
**hook length** is

$$h(x):=a(x)+\ell(x)+1=\lambda_i-j+\lambda'_j-i+1,$$

so that $H(x)$ has exactly $h(x)$ boxes. Here $\lambda'_j$ is the number of
rows of $[\lambda]$ of length at least $j$, so the boxes of column $j$ below
row $i$ are exactly the rows $i+1,\dots,\lambda'_j$ and the arm has
$\lambda_i-j$ boxes; the arm, the leg and the anchor $x$ are pairwise disjoint
and exhaust $H(x)$, which gives the count.

A box is removable in the sense of
[[def-removable-and-addable-nodes-of-a-partition]] if and only if it is the
last box of its row and of its column, i.e. if and only if $h(x)=1$: a row
endpoint $(i,\lambda_i)$ is removable exactly when no box lies immediately
below it, that is when $\lambda_i>\lambda_{i+1}$, and then
$a(x)=\lambda_i-\lambda_i=0$ and $\ell(x)=\lambda'_{\lambda_i}-i=0$; conversely
$h(x)=1$ forces $a(x)=\ell(x)=0$, so $x$ ends both its row and its column. The
empty partition has no boxes.

Finally $P(\lambda):=\prod_{x\in[\lambda]}h(x)$ denotes the **hook product**
of $\lambda$, the empty product $P(\varnothing)=1$ being part of the
convention. This fixes the off-by-one convention used by the whole page: the
anchor box contributes $1$, the arm contributes $\lambda_i-j$ and the leg
contributes $\lambda'_j-i$. No choice principle is used.
