---
id: lem-rank-matrices-determine-the-pivot-permutation
kind: lemma
title: Southwest rank matrices determine Bruhat cells
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-standard-subgroups-of-gl-n-over-a-finite-field, def-weyl-group-and-length-for-finite-gl-n, def-row-space-column-space-nullspace-and-matrix-ranks, def-triangular-and-diagonal-matrices-over-a-commutative-ring, thm-row-rank-equals-column-rank, def-matrix-product-and-identity-matrix, thm-invertible-matrix-theorem, def-linear-basis, def-dimension, lem-gaussian-elimination-produces-a-pivot-permutation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5, printed p. 18"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 4.28, printed pp. 38-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with standard Borel subgroup $B$, and for $g\in M_n(\mathbb F_q)$ and
$1\le i,j\le n$ let $r_{i,j}(g)$ denote the rank of the submatrix of $g$ on the
rows $i,i+1,\dots,n$ and the columns $1,2,\dots,j$
([[def-row-space-column-space-nullspace-and-matrix-ranks]]). Then:

1. $r_{i,j}(bg)=r_{i,j}(g)=r_{i,j}(gb)$ for all $b\in B$, so $r_{i,j}$ is
   constant on each double coset $BgB$;
2. if $g\in BwB$ for a permutation matrix $w=P_\sigma$
   ([[def-weyl-group-and-length-for-finite-gl-n]]), then
   $$r_{i,j}(g)=\#\{\,k\le j:\sigma(k)\ge i\,\};$$
3. for $g\in G$, triangular elimination supplies a permutation matrix
   with $g\in BP_\sigma B$
   ([[lem-gaussian-elimination-produces-a-pivot-permutation]]), and the rank matrix $(r_{i,j}(g))_{1\le i,j\le n}$ determines
   $\sigma$, and hence determines the double coset $BgB$, uniquely.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, the group $G=\operatorname{GL}_n(\mathbb F_q)$ with subgroup $B$ of invertible upper triangular matrices, a matrix $g\in M_n(\mathbb F_q)$, the ranks $r_{i,j}(g)$ of its southwest submatrices, and the permutation matrix $P_\sigma$ of $\sigma\in\operatorname{Sym}(\{1,\dots,n\})$.

[L1] $B=\{\,b\in G:b\text{ is upper triangular}\,\}$ and every $b\in B$ is invertible ([[def-standard-subgroups-of-gl-n-over-a-finite-field]], [[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]).

[L2] A matrix $A=(a_{ij})$ is upper triangular exactly when $a_{ij}=0$ for $i>j$ ([[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]).

[L3] For $A\in M_{m\times n}(F)$ the row space $\operatorname{Row}(A)$ is spanned by the rows of $A$, the column space $\operatorname{Col}(A)$ is spanned by the columns, $\operatorname{rrank}(A)=\dim_F\operatorname{Row}(A)$, $\operatorname{crank}(A)=\dim_F\operatorname{Col}(A)$, and the **rank** of $A$ is its row rank ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[L4] For every finite matrix $A$ over a field one has $\operatorname{rrank}(A)=\operatorname{crank}(A)$ ([[thm-row-rank-equals-column-rank]]).

[L5] The product of matrices is given by $(AB)_{ik}=\sum_j a_{ij}b_{jk}$ ([[def-matrix-product-and-identity-matrix]]), so products may be computed block by block.

[L6] For $A\in M_m(F)$ the following are equivalent: $A$ is invertible, and $N(A)=\{0\}$ ([[thm-invertible-matrix-theorem]]).

[L7] The permutation matrix $P_\sigma$ has $(P_\sigma)_{ij}=1$ precisely when $i=\sigma(j)$ ([[def-weyl-group-and-length-for-finite-gl-n]]).

[L8] A basis of a finite-dimensional space is a linearly independent spanning set, and the dimension is the number of elements of any basis ([[def-linear-basis]], [[def-dimension]]).

[L9] Every $g\in G$ has a factorisation $g=b_1P_\sigma b_2$ with $b_1,b_2\in B$ and $\sigma\in S_n$ ([[lem-gaussian-elimination-produces-a-pivot-permutation]]).

## Proof

**Proof technique:** direct.

1.1 Left invariance: for $b\in B$ and any $x\in M_n(\mathbb F_q)$ the submatrix of $bx$ on the rows $i,\dots,n$ and columns $1,\dots,j$ equals the product of the invertible upper triangular block $\beta:=b[i,\dots,n\,;\,i,\dots,n]$ with the submatrix $x[i,\dots,n\,;\,1,\dots,j]$. Indeed, for $k\ge i$ the entry $b_{km}$ vanishes whenever $m<i\le k$, by [L2], so only the columns $m\ge i$ of $b$ contribute, and the product formula of [L5] applies blockwise. The block $\beta$ is invertible: since $b$ is invertible and upper triangular, all its diagonal entries are nonzero, and the trailing block $\beta$ is upper triangular with those same nonzero diagonal entries, so triangular back substitution gives $N(\beta)=\{0\}$ and [L6] applies. Left multiplication by an invertible matrix does not change the row space, since the rows of $YX$ are linear combinations of the rows of $X$ while the rows of $X$ are those of $Y^{-1}(YX)$; hence $\operatorname{Row}(bx[i..n,1..j])=\operatorname{Row}(x[i..n,1..j])$ and $r_{i,j}(bx)=r_{i,j}(x)$. [L1, L2, L3, L5, L6]

1.2 Right invariance: for $b\in B$ and any $x$ the submatrix of $xb$ on the rows $i,\dots,n$ and columns $1,\dots,j$ equals the product of $x[i,\dots,n\,;\,1,\dots,j]$ with the invertible upper triangular block $\gamma:=b[1,\dots,j\,;\,1,\dots,j]$: since $b_{ml}=0$ whenever $m>l$, the sum $\sum_m x_{km}b_{ml}$ of [L5] runs over the indices $m\le l\le j$ only. The block $\gamma$ is invertible, because a nonzero kernel vector $v$ with $\gamma v=0$ gives $b\binom{v}{0}=0$ by [L2] and hence $v=0$ by [L6]. Right multiplication by an invertible matrix does not change the column space: $\operatorname{Col}(X\gamma)=\{X\gamma w:w\in F^j\}=X(F^j)=\operatorname{Col}(X)$ because $\gamma$ is bijective. By [L4] the rank equals the column rank, so $r_{i,j}(xb)=r_{i,j}(x)$. [L1, L2, L3, L4, L5, L6]

1.3 Permutation matrices: the submatrix of $P_\sigma$ on the rows $i,\dots,n$ and columns $1,\dots,j$ has, in column $k\le j$, the single nonzero entry $1$ in row $\sigma(k)$ when $\sigma(k)\ge i$, and is the zero column otherwise, by [L7]. Its nonzero columns are the distinct standard basis vectors $e_{\sigma(k)}$ of the coordinate space on the rows $i,\dots,n$, one for each $k\le j$ with $\sigma(k)\ge i$; they form a linearly independent spanning set of the column space, hence a basis, so by [L3] and [L8] the column rank, and therefore by [L4] the rank of this submatrix, equals the number of such columns, that is $r_{i,j}(P_\sigma)=\#\{\,k\le j:\sigma(k)\ge i\,\}$. [L3, L4, L5, L7, L8]

2.1 Let $g\in BwB$ with $w=P_\sigma$. Writing $g=b_1wb_2$ with $b_1,b_2\in B$ and applying step 1.1 to $b_1$ and step 1.2 to $b_2$, then step 1.3 to $w$, gives $r_{i,j}(g)=r_{i,j}(w)=\#\{k\le j:\sigma(k)\ge i\}$ for all $i,j$. In particular, subtracting consecutive columns of the rank matrix, $r_{i,j}(g)-r_{i,j-1}(g)$ equals $1$ exactly when $\sigma(j)\ge i$, where $r_{i,0}(g):=0$; hence the set of $i$ with $r_{i,j}(g)>r_{i,j-1}(g)$ is $\{1,\dots,\sigma(j)\}$ and $\sigma(j)=\max\{\,i\le n:r_{i,j}(g)>r_{i,j-1}(g)\,\}$ for every $j$. Thus the rank matrix of $g$ determines $\sigma$. By [L9] every element of $G$ admits such a factorisation, so two elements of $G$ lie in the same double coset $BwB$ exactly when their southwest rank matrices agree. ∎ [step 1.1, step 1.2, step 1.3, L3, L9]
