---
id: ex-empty-and-singleton-rsk-boundaries
kind: example
title: Empty and singleton RSK boundaries
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-hook-arm-leg-and-hook-length, def-row-insertion-and-bumping-route, lem-standard-tableau-removal-recursion, thm-hook-length-formula, thm-robinson-schensted-correspondence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§§1.4-1.5, printed pp. 7-13: the tableau and insertion conventions, and Corollary 1.15 at n=1 (its domain is n positive); the empty case is verified directly here; read in the full text."
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "p. 180: the insertion rule for an absent row, used for the singleton case; the empty case is verified directly here; read in the complete article."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§§7-8, printed pp. 27-30: the hook formula and insertion/deletion correspondence statements; the empty-shape case is verified directly here; read in the full text."
---

## Example

For $n=0$: the only word in $X_0$ is the empty word, it corresponds to the
pair $(\varnothing,\varnothing)$ of empty tableaux, and the hook length formula
reads $f^\varnothing=0!/1=1$. For $n=1$: the only word is $(1)$; row insertion
gives $P=[1]$ and the recording tableau $Q=[1]$, so $X_1$ corresponds to the
single pair $([1],[1])$, and $f^{(1)}=1!/1=1$. At $n=0$ the removal recursion
is not asserted, its index set $\operatorname{Rem}(\varnothing)=\varnothing$
being empty, and $f^\varnothing=1$ is the convention; at $n=1$ it reads
$f^{(1)}=f^\varnothing$.

## Facts & Assumptions

**Given:** The sets $X_0$ and $X_1$ of words, the empty tableau $\varnothing$, and the hook products $P(\varnothing)=1$ and $P((1))=1$.

[L1] For $n\ge0$, $X_n$ is the set of words $(w_1,\dots,w_n)$ of pairwise distinct real numbers with $\{w_1,\dots,w_n\}=\{1,\dots,n\}$; the empty word is the unique element of $X_0$, and $X_1=\{(1)\}$; the Robinson-Schensted map is a bijection from $X_n$ onto the pairs of standard tableaux of common shape $\lambda\vdash n$ ([[thm-robinson-schensted-correspondence]]).

[L2] The empty word inserts to the empty tableau; row-inserting the single letter $1$ into $\varnothing$ appends it in the only box, and the recording tableau carries the label $1$ in that box ([[def-row-insertion-and-bumping-route]], [[thm-robinson-schensted-correspondence]]).

[L3] The hook product $P(\lambda)=\prod_{x\in[\lambda]}h(x)$ is the empty product $1$ for $\lambda=\varnothing$, and $P((1))=h(1,1)=1$; the hook length formula reads $f^\lambda=n!/P(\lambda)$ for $\lambda\vdash n\ge0$, so $f^\varnothing=0!/1$ and $f^{(1)}=1!/1$ ([[def-hook-arm-leg-and-hook-length]], [[thm-hook-length-formula]]).

[L4] For $\lambda\vdash n$ with $n\ge1$, $f^\lambda=\sum_{x\in\operatorname{Rem}(\lambda)}f^{\lambda-x}$; at $n=0$ the index set $\operatorname{Rem}(\varnothing)=\varnothing$ is empty and the recursion is not asserted, the value $f^\varnothing=1$ being the convention for the unique empty tableau, while $\operatorname{Rem}((1))=\{(1,1)\}$ and $(1)-(1,1)=\varnothing$ ([[lem-standard-tableau-removal-recursion]], [[def-hook-arm-leg-and-hook-length]]).



## Verification

**Proof technique:** direct.

1.1 ($n=0$ pair.) The empty word inserts no letters, so $P(\varnothing)=\varnothing$; no box is ever added, so the recording tableau is $\varnothing$ as well; hence the unique element of $X_0$ corresponds under [L1] to the pair $(\varnothing,\varnothing)$ of standard tableaux of the common shape $\varnothing\vdash0$. [L1, L2, given]

1.2 ($n=1$ pair.) The set $X_1$ has the single word $(1)$; inserting $1$ into the empty tableau appends it in the only box, so $P=[1]$, and the recording tableau carries $1$ in that box, so $Q=[1]$; hence $X_1$ corresponds to the single pair $([1],[1])$ of standard tableaux of shape $(1)$. [L1, L2, given]

2.1 ($n=0$ hook formula.) $\lambda=\varnothing$ has no boxes, so its hook product is the empty product $P(\varnothing)=1$, and [L3] gives $f^\varnothing=0!/1=1$, the number of standard $\varnothing$-tableaux (the empty tableau alone), in agreement with the single pair of step 1.1. [L3, step 1.1, algebra]

2.2 ($n=1$ hook formula.) For $\lambda=(1)$ the unique hook length is $h(1,1)=1-1+1-1+1=1$, so $P((1))=1$ and [L3] gives $f^{(1)}=1!/1=1$, in agreement with the single pair of step 1.2. [L3, step 1.2, algebra]

3.1 ($n=0$ removal recursion.) The empty partition has no removable node, so $\operatorname{Rem}(\varnothing)=\varnothing$ and the recursion of [L4] is not asserted at $n=0$; the convention $f^\varnothing=1$ of [L3] is consistent with the count of one empty tableau. [L4, L3, step 2.1]

4.1 ($n=1$ removal recursion.) $\operatorname{Rem}((1))=\{(1,1)\}$ and $(1)-(1,1)=\varnothing$, so the recursion of [L4] reads $f^{(1)}=f^\varnothing=1$, which matches steps 1.2 and 2.2. [L4, step 2.2, step 2.1] ∎
