---
id: ex-relative-position-of-flags-in-gl3-fq
kind: example
title: The six relative positions of GL_3 flags
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-relative-position-classifies-pairs-of-complete-flags, lem-rank-matrices-determine-the-pivot-permutation, thm-bruhat-decomposition-of-gl-n-over-a-finite-field, def-weyl-group-and-length-for-finite-gl-n, def-standard-subgroups-of-gl-n-over-a-finite-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5, printed p. 18"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Section 3.5, printed pp. 37-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Example

Let $q$ be a prime power, put $G=\operatorname{GL}_3(\mathbb F_q)$ and write the
six elements of $S_3$ in one-line notation. For each $\sigma\in S_3$ let
$w=P_\sigma$ be the permutation matrix and let
$r_{i,j}(w)=\#\{k\le j:\sigma(k)\ge i\}$ be the southwest ranks of $w$
([[lem-rank-matrices-determine-the-pivot-permutation]],
[[def-weyl-group-and-length-for-finite-gl-n]]). Then
$$r(w)=\begin{pmatrix} 1&2&3\\0&1&2\\0&0&1\end{pmatrix},\quad \begin{pmatrix}1&2&3\\0&1&2\\0&1&1\end{pmatrix},\quad \begin{pmatrix}1&2&3\\1&1&2\\0&0&1\end{pmatrix},$$
$$r(w)=\begin{pmatrix} 1&2&3\\1&2&2\\0&1&1\end{pmatrix},\quad \begin{pmatrix}1&2&3\\1&1&2\\1&1&1\end{pmatrix},\quad \begin{pmatrix}1&2&3\\1&2&2\\1&1&1\end{pmatrix}$$
for $\sigma=123,132,213,231,312,321$ respectively, and the equivalent
intersection-dimension matrices $\bigl(\dim_{\mathbb F_q}(V_i\cap wV_j)\bigr)_{i,j}=
\bigl(j-r_{i+1,j}(w)\bigr)_{i,j}$, with $r_{4,j}(w):=0$, are
$$\begin{pmatrix}1&1&1\\1&2&2\\1&2&3\end{pmatrix},\quad \begin{pmatrix}1&1&1\\1&1&2\\1&2&3\end{pmatrix},\quad \begin{pmatrix}0&1&1\\1&2&2\\1&2&3\end{pmatrix},$$
$$\begin{pmatrix}0&0&1\\1&1&2\\1&2&3\end{pmatrix},\quad \begin{pmatrix}0&1&1\\0&1&2\\1&2&3\end{pmatrix},\quad \begin{pmatrix}0&0&1\\0&1&2\\1&2&3\end{pmatrix}$$
in the same order. The six southwest rank matrices are pairwise distinct, and
so are the six intersection-dimension matrices; by
[[thm-relative-position-classifies-pairs-of-complete-flags]] the six
permutations therefore realise the six distinct relative positions of pairs of
complete flags of $\mathbb F_q^3$ ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]).

## Facts & Assumptions

**Given:** A prime power $q$, the space $V=\mathbb F_q^3$ with standard basis $e_1,e_2,e_3$ and standard flag $V_\bullet$ with $V_i=\langle e_1,\dots,e_i\rangle$, the group $G=\operatorname{GL}_3(\mathbb F_q)$ with standard Borel subgroup $B$, and the six permutations of $\{1,2,3\}$ in one-line notation.

[F1] For $g\in M_n(\mathbb F_q)$ the symbol $r_{i,j}(g)$ denotes the rank of the submatrix on the rows $i,i+1,\dots,n$ and the columns $1,2,\dots,j$; if $g\in BwB$ for a permutation matrix $w=P_\sigma$, then $r_{i,j}(g)=\#\{k\le j:\sigma(k)\ge i\}$, these ranks are constant on the double coset $BwB$, and for $g\in G$ the rank matrix determines $\sigma$ uniquely ([[lem-rank-matrices-determine-the-pivot-permutation]], [[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[F2] For a permutation matrix $w=P_\sigma$ one has $wV_j=\langle e_{\sigma(1)},\dots,e_{\sigma(j)}\rangle$ for the standard flag $V_\bullet$, and for $x\in G$ and all $i,j$ one has $\dim_{\mathbb F_q}(V_i\cap xV_j)=j-r_{i+1,j}(x)$, with the convention $r_{n+1,j}(x):=0$ ([[thm-relative-position-classifies-pairs-of-complete-flags]]).

[F3] The map $\sigma\mapsto BP_\sigma B$ is a bijection from $S_3$ onto the set of double cosets $B\backslash G/B$, and the relative position $\sigma(F,E)$ of a pair of complete flags is the element of $S_3$ attached to it by [[thm-relative-position-classifies-pairs-of-complete-flags]]; two pairs have the same relative position exactly when they lie in the same diagonal $G$-orbit on $X\times X$ ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]], [[thm-relative-position-classifies-pairs-of-complete-flags]]).

## Verification

**Proof technique:** direct.

1.1 For the three permutations $123,132,213$ with values $\sigma(1),\sigma(2),\sigma(3)$ equal to $1,2,3$ and $1,3,2$ and $2,1,3$ the defining count of [F1] gives: for $\sigma=123$ one has $r_{1,j}=j$ and $r_{i,j}=\max(0,j-i+1)$, so the rows are $[1,2,3],[0,1,2],[0,0,1]$; for $\sigma=132$ the rows are $[1,2,3]$, then $\#\{k\le j:\sigma(k)\ge2\}=[0,1,2]$, then $\#\{k\le j:\sigma(k)\ge3\}=[0,1,1]$; for $\sigma=213$ the rows are $[1,2,3]$, then $\#\{k\le j:\sigma(k)\ge2\}=[1,1,2]$ (for $j=1$ the value $\sigma(1)=2$ contributes, for $j=2$ only $k=1$ does, for $j=3$ the values $2$ and $3$ do), then $\#\{k\le j:\sigma(k)\ge3\}=[0,0,1]$. [given, F1]

1.2 For the three permutations $231,312,321$ with values $2,3,1$ and $3,1,2$ and $3,2,1$ the same count gives: for $\sigma=231$ the rows are $[1,2,3]$, then $\#\{k\le j:\sigma(k)\ge2\}=[1,2,2]$, then $\#\{k\le j:\sigma(k)\ge3\}=[0,1,1]$; for $\sigma=312$ the rows are $[1,2,3]$, then $[1,1,2]$, then $[1,1,1]$; for $\sigma=321$ the rows are $[1,2,3]$, then $[1,2,2]$, then $[1,1,1]$. [given, F1]

2.1 For each of the six permutations the intersection-dimension matrix is obtained from the rank matrix by the formula of [F2], $D_{i,j}:=j-r_{i+1,j}(w)$ with $r_{4,j}(w)=0$: using the second and third rows listed in steps 1.1 and 1.2 this gives $D_{1,j}=[1,1,1]$ for $123$ and $132$ (second rows $[0,1,2]$), $[0,1,1]$ for $213$ and $312$ (second rows $[1,1,2]$) and $[0,0,1]$ for $231$ and $321$ (second rows $[1,2,2]$); $D_{2,j}=[1,2,2]$ for $123$ and $213$ (third rows $[0,0,1]$), $[1,1,2]$ for $132$ and $231$ (third rows $[0,1,1]$) and $[0,1,2]$ for $312$ and $321$ (third rows $[1,1,1]$); and $D_{3,j}=[1,2,3]$ for all six, because $r_{4,j}=0$. Explicitly, in the order $123,132,213,231,312,321$ these are the six displayed matrices of the Example section, and the formula $r_{i+1,j}(w)=j-D_{i,j}$ recovers the rank matrix from the intersection-dimension matrix. [step 1.1, step 1.2, F2]

2.2 The six rank matrices are pairwise distinct: those of $123$ and $132$ differ in position $(3,2)$, where they are $0$ and $1$; each of those of $123,132$ differs from that of $213$ in position $(2,1)$, where $123$ and $132$ have $0$ and $213$ has $1$; $213$ and $312$ differ in position $(3,1)$, where they are $0$ and $1$; $231$ and $321$ differ in position $(3,1)$, where they are $0$ and $1$; and each of $231,321$ differs from each of $213,312$ in position $(2,2)$, where $231,321$ have $2$ and $213,312$ have $1$. Since the rank matrices of the six permutations are pairwise distinct and a rank matrix determines its double coset by [F1], the six elements of $S_3$ realise six distinct double cosets in $B\backslash G/B$, in agreement with the bijection of [F3]. [step 1.1, step 1.2, F1, F3]

3.1 The six intersection-dimension matrices displayed in the Example section are pairwise distinct as well: the entry $(1,1)$ equals $1$ for $123$ and $132$ and $0$ for $213,231,312,321$, so it separates these two groups; within the first group the entry $(2,2)$ is $2$ for $123$ and $1$ for $132$; and within the second group the pair of entries $\bigl((1,2),(2,1)\bigr)$ takes the four distinct values $(1,1),(1,0),(0,1),(0,0)$ for $213,312,231,321$ respectively. Consequently the six permutations of $S_3$ give the six pairwise distinct relative positions of pairs of complete flags of $\mathbb F_q^3$, and the intersection dimensions $\dim_{\mathbb F_q}(V_i\cap wV_j)$ are the complete invariant of the diagonal orbit of the pair $(V_\bullet,wV_\bullet)$ by [F3]. ∎ [step 2.1, step 2.2, F2, F3]

## Remarks

The example illustrates the complete invariant of
[[thm-relative-position-classifies-pairs-of-complete-flags]] at $n=3$: the
six $3\times3$ intersection-dimension matrices, which is equivalent to the
southwest rank matrix, distinguishes the $3!=6$ relative positions, and the
first column $\dim(V_i\cap wV_1)$ recovers the least $i$ for which the line
$wV_1$ lies in $V_i$. For the two extreme permutations the intersection
matrices are the pattern $\min(i,j)$ (for $123$) and its opposite
counterpart $D_{i,j}=\max(0,i+j-3)$ (for $321$), which is the extreme opposite
position, while the four remaining matrices are the intermediate positions.
