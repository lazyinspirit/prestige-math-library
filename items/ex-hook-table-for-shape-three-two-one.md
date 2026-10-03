---
id: ex-hook-table-for-shape-three-two-one
kind: example
title: Hook table for the shape (3,2,1)
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-hook-arm-leg-and-hook-length, lem-standard-tableau-removal-recursion, thm-hook-length-formula]
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
      locator: "§1.4, printed pp. 7-11: hook-length table convention, the removal recursion and Theorem 1.13 used by the computation; read in the full text."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§7, printed pp. 27-28: the hook formula whose value is being verified; read in the full text."
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "p. 180: the same kind of full hook-table computation (the 9-box example gives 168), used as a convention check; read in the complete article."
---

## Example

For $\lambda=(3,2,1)\vdash6$ the hook lengths
$h(i,j)=\lambda_i-j+\lambda'_j-i+1$ are
$$\begin{array}{lll}5&3&1\\3&1&\\1&&\end{array}$$
(rows of lengths $3,2,1$), with hook product
$5\cdot3\cdot1\cdot3\cdot1\cdot1=45$. The hook length formula gives
$f^{(3,2,1)}=6!/45=720/45=16$. The removal recursion checks the value:
$\operatorname{Rem}((3,2,1))=\{(1,3),(2,2),(3,1)\}$, with removals
$(2,2,1)$, $(3,1,1)$, $(3,2)$, and the same formula gives
$f^{(2,2,1)}=5$, $f^{(3,1,1)}=6$, $f^{(3,2)}=5$, so
$f^{(3,2,1)}=5+6+5=16$.

## Facts & Assumptions

**Given:** The partition $\lambda=(3,2,1)\vdash6$ with Young diagram $[\lambda]$ and conjugate $\lambda'$, and the removals $\lambda-x$ for the removable nodes $x$.

[F1] For $x=(i,j)\in[\lambda]$ one has $h(x)=\lambda_i-j+\lambda'_j-i+1$ and $P(\lambda)=\prod_{x\in[\lambda]}h(x)$; a node is removable exactly when it is at the end of its row and of its column ([[def-hook-arm-leg-and-hook-length]]).

[F2] $f^\lambda=n!/P(\lambda)$ for $\lambda\vdash n$, with the empty product $1$ for $\lambda=\varnothing$ ([[thm-hook-length-formula]]).

[F3] For $\lambda\vdash n$ with $n\ge1$, $f^\lambda=\sum_{x\in\operatorname{Rem}(\lambda)}f^{\lambda-x}$, and deleting a removable node leaves the diagram of the partition $\lambda-x$ ([[lem-standard-tableau-removal-recursion]], [[def-hook-arm-leg-and-hook-length]]).



## Verification

**Proof technique:** direct.

1.1 The conjugate partition is $\lambda'=(3,2,1)$: each column of $[\lambda]$ has heights $3,2,1$. [F1, given]

2.1 Evaluating $h(i,j)=\lambda_i-j+\lambda'_j-i+1$: $h(1,1)=5$, $h(1,2)=1+2=3$, $h(1,3)=0+1=1$, $h(2,1)=1+3-2+1=3$, $h(2,2)=0+2-2+1=1$, $h(3,1)=0+3-3+1=1$; the hook product is $5\cdot3\cdot1\cdot3\cdot1\cdot1=45$. [F1, step 1.1, algebra]

2.2 The removable nodes are $(1,3),(2,2),(3,1)$: each of these is the last box of its row and of its column, while $(1,1),(1,2),(2,1)$ each have a box to the right (and $(1,2),(2,1)$ a box below); indeed $(1,2)$ has $(1,3)$ to its right and $(2,2)$ below, $(2,1)$ has $(2,2)$ to its right, and $(1,1)$ has $(1,2)$ to its right. [F1, step 1.1, given]

3.1 By [F2], $f^{(3,2,1)}=6!/45=720/45=16$. [F2, step 2.1, algebra]

3.2 The three removals are $(2,2,1)$, $(3,1,1)$ and $(3,2)$, of sizes $5$; by [F2] applied in size $5$ and the hook computations: $P(2,2,1)=4\cdot2\cdot3\cdot1\cdot1=24$ so $f^{(2,2,1)}=120/24=5$; $P(3,1,1)=5\cdot2\cdot1\cdot2\cdot1=20$ so $f^{(3,1,1)}=120/20=6$; $P(3,2)=4\cdot3\cdot1\cdot2\cdot1=24$ so $f^{(3,2)}=120/24=5$. [F2, step 2.2, algebra]

4.1 By [F3] the removal recursion predicts $f^{(3,2,1)}=f^{(2,2,1)}+f^{(3,1,1)}+f^{(3,2)}=5+6+5=16$, which agrees with step 3.1. [F3, step 3.1, step 3.2, algebra] ∎
