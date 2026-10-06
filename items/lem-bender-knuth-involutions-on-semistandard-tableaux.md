---
id: lem-bender-knuth-involutions-on-semistandard-tableaux
kind: lemma
title: Bender--Knuth involutions permute the weights of semistandard tableaux
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-semistandard-tableau-and-kostka-number
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-partition-young-diagram-and-conjugate-partition
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. R. Stembridge, A Concise Proof of the Littlewood--Richardson Rule, Electronic Journal of Combinatorics 9 (2002), #N5, 4 pp."
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf"
      locator: "Printed p. 2: 'There is a well-known set of involutions $\\sigma_1,\\dots,\\sigma_{n-1}$ on $S(\\mu/\\nu)$, due to Bender and Knuth [BK], with the property that $\\sigma_k$ acts by changing certain entries of $T$ from $k$ to $k+1$ and vice-versa ... $\\omega(\\sigma_k(T))=s_k\\omega(T)$' and the explicit description of free entries; the existence of the involutions 'proves that $s_{\\mu/\\nu}$ is a symmetric function of $x_1,\\dots,x_n$'."
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "Ch. 11 Definition 11.1 and Theorems 11.6--11.8, printed pp. 54--56 (semistandard tableaux and Schur modules); the involution argument is reproduced here for the symmetry of the tableau generating series."
---

## Statement

Fix $r\ge1$ and a skew shape $\nu/\lambda$ (for a partition shape take
$\lambda=\varnothing$), let $k\in\{1,\dots,r-1\}$, and let $T$ be a
semistandard skew tableau of shape $\nu/\lambda$ with entries in
$\{1,\dots,r\}$ ([[def-skew-diagram-and-semistandard-skew-tableau]],
[[def-semistandard-tableau-and-kostka-number]]). Call an entry $k$ or $k+1$ of
$T$ **free** if there is no $k+1$ respectively no $k$ in the same column. Then:

(i) the free positions in each row occupy consecutive cells of that row;
(ii) replacing in every row the free $k$'s and free $k+1$'s by their
complementary counts (if the row has $a_i$ free $k$'s and $b_i$ free $k+1$'s,
then after the replacement it has $b_i$ free $k$'s and $a_i$ free $k+1$'s in
the same free cells, the remaining entries unchanged, the free cells filled
from left to right by the $b_i$ copies of $k$ followed by the $a_i$ copies of
$k+1$) produces again a semistandard skew tableau $\sigma_k(T)$ of the same
shape, with entries in $\{1,\dots,r\}$;
(iii) $\sigma_k$ is an involution of the set of semistandard skew tableaux of
shape $\nu/\lambda$ with the same set of free positions, and
$\operatorname{wt}(\sigma_k(T))=s_k\operatorname{wt}(T)$, where $s_k$ is the
transposition of $k$ and $k+1$ acting on weights
([[def-semistandard-tableau-and-kostka-number]], with weights read as vectors
in $\mathbb Z^r$).

Consequently, for every weight $\alpha\in\mathbb Z^r_{\ge0}$ the number of
semistandard skew tableaux of shape $\nu/\lambda$ and weight $\alpha$ equals
the number of weight $s_k\alpha$, and the generating function
$\sum_Tx^{\operatorname{wt}(T)}$, over semistandard skew tableaux of shape
$\nu/\lambda$ with entries in $\{1,\dots,r\}$, is symmetric in
$x_1,\dots,x_r$ ([[def-partition-young-diagram-and-conjugate-partition]]).

## Facts & Assumptions

**Given:** $r\ge1$, a skew shape $\nu/\lambda$ with $\lambda,\nu$ partitions and $[\lambda]\subseteq[\nu]$, an index $k\in\{1,\dots,r-1\}$, and a semistandard skew tableau $T$ of shape $\nu/\lambda$ with entries in $\{1,\dots,r\}$.

[F1] A semistandard skew tableau fills the cells of the skew diagram $\nu/\lambda$ with positive integers, weakly increasing from left to right in each row and strictly increasing from top to bottom in each column; its weight is $\operatorname{wt}(T)=(a_1,\dots,a_r)$ with $a_i$ the number of entries equal to $i$, and its monomial is $x^{\operatorname{wt}(T)}$ ([[def-semistandard-tableau-and-kostka-number]], [[def-skew-diagram-and-semistandard-skew-tableau]]).

[F2] The Young diagram $[\nu]$ consists of the cells $(i,j)$ with $1\le i$, $1\le j\le\nu_i$ (English coordinates), and its columns are the $j$'s with $j\le\nu_i$, so a cell $(i,c)$ belongs to $\nu/\lambda$ exactly when $\lambda_i<c\le\nu_i$ ([[def-partition-young-diagram-and-conjugate-partition]], [[def-skew-diagram-and-semistandard-skew-tableau]]).

## Proof

**Given:** $r$, $\nu/\lambda$, $k$, $T$ as above.

1.1 In a skew diagram, row $i$ consists of the interval $\lambda_i<c\le\nu_i$, and column $c$ consists of the interval $\lambda\prime_c<i\le\nu\prime_c$. Two rectangle-completion properties will be used. If $(i,c),(i,c\prime),(i\prime\prime,c)$ are cells with $i<i\prime\prime$ and $c\prime<c$, then $(i\prime\prime,c\prime)$ is a cell: $\lambda_{i\prime\prime}\le\lambda_i<c\prime<c\le\nu_{i\prime\prime}$. If $(i,c),(i,c\prime),(i\prime\prime,c)$ are cells with $i\prime\prime<i$ and $c<c\prime$, then $(i\prime\prime,c\prime)$ is a cell: $\lambda_{i\prime\prime}<c<c\prime\le\nu_i\le\nu_{i\prime\prime}$. These use the weakly decreasing row lengths of both partitions. [F2, given, algebra]

1.2 No column contains two free cells: a column contains at most one $k$ and at most one $k+1$ by strict increase, a column containing a free $k$ contains no $k+1$ at all (freely), and a column containing a free $k+1$ contains no $k$ at all (freely); so a column cannot contain both a free $k$ and a free $k+1$, and cannot contain two entries equal to the same letter. Consequently, in the modification of (ii) each column changes in at most one cell. [F1, given, algebra]

2.1 Structure of the free cells of a row. Let $(i,c)$ be a cell of $T$ with entry $k$ that is not free. Then some cell $(i'',c)$ of the same column has entry $k+1$; by strict increase of the column $i''>i$. If $(i,c')$ is a cell of the same row with $c'<c$ and entry $k$, then $(i'',c')$ is a cell by step 1.1, and inside row $i''$ one has $T(i'',c')\le T(i'',c)=k+1$, while strictly increasing column $c'$ gives $T(i'',c')>T(i,c')=k$; hence $T(i'',c')=k+1$ and $(i,c')$ is not free. So the non-free $k$'s of a row form an initial segment of its block of $k$'s, read from the left. Symmetrically, if the entry $k+1$ at $(i,c)$ is not free, there is a cell $(i'',c)$ with $i''<i$ and entry $k$; for a cell $(i,c')$ with $c'>c$ and entry $k+1$, step 1.1 makes $(i'',c')$ a cell, and $T(i'',c')\ge T(i'',c)=k$ by weak increase in row $i''$ and $T(i'',c')<T(i,c')=k+1$ by strict increase in column $c'$, so $T(i'',c')=k$ and $(i,c')$ is not free. Hence the non-free $k+1$'s of a row form a final segment of its block of $k+1$'s. Since the entries of a row are weakly increasing, the cells carrying $k$ precede those carrying $k+1$, and combining the two statements the unblocked cells carrying $k$ (a final segment of the $k$-block) and those carrying $k+1$ (an initial segment of the $k+1$-block) form one consecutive block of cells of the row, proving (i). [F1, F2, given, step 1.1, algebra]

3.1 The modification produces a semistandard tableau. Rows: by step 2.1 the free cells of a row form consecutive cells, the entry immediately left of the block, if present, is a non-free $k$ or a smaller letter, the entries of the block after the modification lie in $\{k,k+1\}$ and are filled weakly increasingly, and the entry immediately right of the block, if present, is a non-free $k+1$ or a larger letter; so rows stay weakly increasing. Columns: by step 1.2 only one entry of a column can change. If a free $k$ at $(i,c)$ is replaced by $k+1$, then column $c$ contains no $k+1$, so every entry above $(i,c)$ is $<k<k+1$ and every entry below is $>k+1$, and strict increase persists; if a free $k+1$ is replaced by $k$, column $c$ contains no entry $k$, so every entry above is $<k$ and every entry below is $>k+1>k$, and strict increase persists. The entries stay in $\{1,\dots,r\}$ because $1\le k<k+1\le r$. This proves (ii). [F1, step 2.1, step 1.2, algebra]

4.1 Involution and weight. The modification is reversible: it is performed on the free cells, and by step 1.2 the free cells of $\sigma_k(T)$ are the same cells (a cell that was free remains the only cell of its column with an entry in $\{k,k+1\}$, hence remains free), while every other cell is unchanged, so no free cell is created or destroyed. Hence $\sigma_k$ is an involution with the same free cells. For the weight, let $A_k$ and $A_{k+1}$ be the numbers of entries equal to $k$ and to $k+1$ in $T$, and let $a=\sum_ia_i$, $b=\sum_ib_i$ be the total numbers of free $k$'s and free $k+1$'s. The non-free $k$'s are in bijection with the non-free $k+1$'s: send a non-free $k$ to the unique $k+1$ below it in its column (existence is the definition of non-free, uniqueness is strict increase in the column, and the image is non-free because its column contains that $k$); the inverse sends a non-free $k+1$ to the unique $k$ above it. Hence $A_k-a=A_{k+1}-b$. The modification deletes the $a$ free $k$'s and $b$ free $k+1$'s and inserts $b$ copies of $k$ and $a$ copies of $k+1$ in their place, so the number of $k$'s in $\sigma_k(T)$ is $A_k-a+b=A_{k+1}=(s_k\operatorname{wt}T)_k$ and the number of $k+1$'s is $A_{k+1}-b+a=A_k=(s_k\operatorname{wt}T)_{k+1}$, all other letter counts being unchanged. Thus $\operatorname{wt}(\sigma_k(T))=s_k\operatorname{wt}(T)$. [F1, step 2.1, step 1.2, step 3.1, algebra]

5.1 Consequences. By step 3.1 and 4.1, $\sigma_k$ is a weight-$s_k$-equivariant involutive bijection of the set of semistandard skew tableaux of shape $\nu/\lambda$ with entries in $\{1,\dots,r\}$; hence it restricts to a bijection between the tableaux of weight $\alpha$ and those of weight $s_k\alpha$, so those two sets have the same cardinality. Consequently the generating function $G(x_1,\dots,x_r)=\sum_Tx^{\operatorname{wt}(T)}$ satisfies $G=\sum_Tx^{s_k\operatorname{wt}(T)}$, which is $G$ with $x_k$ and $x_{k+1}$ interchanged; thus $G$ is invariant under each adjacent transposition of the variables. Every permutation of $\{1,\dots,r\}$ is a product of adjacent transpositions (bubble-sort any ordering), so $G$ is invariant under all permutations of the variables, that is, symmetric. [F1, step 3.1, step 4.1, algebra] ∎
