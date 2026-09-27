---
id: lem-gaussian-elimination-produces-a-pivot-permutation
kind: lemma
title: Triangular elimination produces a pivot permutation
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-standard-subgroups-of-gl-n-over-a-finite-field, def-weyl-group-and-length-for-finite-gl-n, thm-gaussian-elimination-produces-row-echelon-form, thm-invertible-matrix-theorem, def-triangular-and-diagonal-matrices-over-a-commutative-ring, def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws, def-invertible-matrix-and-general-linear-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5 and Lemma 4.7, printed p. 18"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 4.28, printed pp. 38-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $q$ be a prime power and let $G=\operatorname{GL}_n(\mathbb F_q)$
with standard Borel subgroup $B$
([[def-standard-subgroups-of-gl-n-over-a-finite-field]]). Then every $g\in G$
has a factorisation
$$g=b_1P_\sigma b_2$$
with $b_1,b_2\in B$ and a permutation matrix $P_\sigma$, $\sigma\in S_n=\operatorname{Sym}(\{1,\dots,n\})$
as in [[def-weyl-group-and-length-for-finite-gl-n]]. The permutation $\sigma$
produced by the elimination below is determined by the algorithm's pivots; the
factorisation itself, with the permutation matrix supplied by that elimination,
is what this item proves.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, the group $G=\operatorname{GL}_n(\mathbb F_q)$ with subgroup $B$ of invertible upper triangular matrices, and an element $g\in G$.

[L1] $B=\{\,b\in G:b\text{ is upper triangular}\,\}$ is a subgroup of $G$ containing $I_n$, $T\subseteq B$ is the set of invertible diagonal matrices, $U\subseteq B$ the unitriangular matrices, and $B=T\ltimes U$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]], [[def-invertible-matrix-and-general-linear-group]]).

[L2] $A=(a_{ij})$ is upper triangular when $a_{ij}=0$ for $i>j$; a unitriangular matrix is an upper triangular matrix with all diagonal entries $1$ ([[def-triangular-and-diagonal-matrices-over-a-commutative-ring]], [[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[L3] The product of matrices is given by $(AB)_{ik}=\sum_{j}a_{ij}b_{jk}$, and $I_n$ has entries $\delta_{ij}$ ([[def-matrix-product-and-identity-matrix]]); matrix multiplication is associative and distributes over addition ([[thm-matrix-multiplication-laws]]).

[L4] For $A\in M_m(F)$ the following are equivalent: $A$ is invertible; $N(A)=\{0\}$; and $x\mapsto Ax$ is a bijective linear map ([[thm-invertible-matrix-theorem]]).

[L5] For $\sigma,\tau\in\operatorname{Sym}(\{1,\dots,n\})$ the permutation matrix $P_\sigma$ of [[def-weyl-group-and-length-for-finite-gl-n]] satisfies $P_\sigma P_\tau=P_{\sigma\circ\tau}$ and $P_{\mathrm{id}}=I_n$, and $(P_\sigma)_{ij}=1$ exactly when $i=\sigma(j)$.

## Proof

**Proof technique:** direct.

1.1 Write $E_{ab}$ for the matrix with entry $1$ at $(a,b)$ and $0$ elsewhere. For $1\le i<n$ and $\lambda\in\mathbb F_q$ the matrix $I_n+\lambda E_{in}$ is unitriangular, hence lies in $B$ by [L2]; by the product formula of [L3] left multiplication by it adds $\lambda$ times row $n$ to row $i$ and leaves all other rows unchanged. Likewise for $1\le j<k\le n$ the matrix $I_n+\lambda E_{jk}$ is unitriangular, hence lies in $B$, and right multiplication by it adds $\lambda$ times column $j$ to column $k$ and leaves all other columns unchanged. Finally, for $c\ne0$ the diagonal matrix $\operatorname{diag}(1,\dots,1,c^{-1})$ lies in $B$ and scales row $n$ by $c^{-1}$. [L1, L2, L3]

2.1 **Reduction of the last row and its column.** Since $g$ is invertible, its last row is nonzero: if it were zero, then $gx=e_n$ would have no solution, contradicting [L4]. Let $j$ be the leftmost column with $g_{nj}\ne0$ and put $c:=g_{nj}$. First, for $k=j+1,\dots,n$ multiply on the right by the unitriangular matrix that adds $\,g_{nk}/c$ times column $j$ to column $k$ (with the sign chosen so as to cancel the entry); this successively kills every entry of the last row strictly to the right of $j$ and does not change column $j$, so afterwards the last row is $c\,e_j^{T}$. Second, for $i=1,\dots,n-1$ multiply on the left by the unitriangular matrix that adds a suitable multiple of row $n$ to row $i$; since row $n$ is $c\,e_j^{T}$, this only changes the entry $(i,j)$ of the matrix and makes it $0$, leaving the last row and all the zeros in it unchanged. Third, multiply on the left by $\operatorname{diag}(1,\dots,1,c^{-1})$. All factors lie in $B$ by step 1.1, so the resulting matrix satisfies $M=L\,g\,R$ with $L,R\in B$ and has $M_{nb}=\delta_{bj}$ and $M_{aj}=\delta_{an}$ for all admissible $a,b$. [step 1.1, L1, L3, L4]

3.1 Let $C=(c_1<c_2<\cdots<c_{n-1})$ be the increasing list of the elements of $\{1,\dots,n\}\setminus\{j\}$ and let $A$ be the $(n-1)\times(n-1)$ matrix $A_{ab}:=M_{a,c_b}$ formed from the first $n-1$ rows of $M$ and the columns in $C$. Then $A$ is invertible: if $Av=0$ with $v\ne0$ and $x\in\mathbb F_q^n$ is the vector with $x_{c_b}:=v_b$ for all $b$ and $x_j:=0$, then $(Mx)_a=\sum_b M_{a,c_b}v_b=(Av)_a=0$ for $a<n$ by [L3], while $(Mx)_n=\sum_b M_{nb}x_b=0$ because $M_{nb}=\delta_{bj}$ and $x_j=0$; thus $Mx=0$ with $x\ne0$, contradicting the invertibility of $M$ by [L4]. [step 2.1, L3, L4]

4.1 We prove the asserted factorisation by induction on $n$. For $n=1$ every nonzero $g\in G$ is a $1\times1$ matrix, so $B=G$ and $g=g\cdot I_1\cdot I_1$ is a factorisation with the permutation matrix $I_1=P_{\mathrm{id}}$; assume now that $n\ge2$ and that every invertible matrix of size $n-1$ over $\mathbb F_q$ admits such a factorisation. Applying this hypothesis to the invertible matrix $A$ of step 3.1 gives $A=b_1'P_{\sigma'}b_2'$ with $b_1',b_2'$ upper triangular matrices of size $n-1$ and $\sigma'\in\operatorname{Sym}(\{1,\dots,n-1\})$. [step 3.1, L1, L4, L5]

5.1 **Separate triangular extensions.** Let $L$ be the block diagonal matrix with upper-left $(n-1)\times(n-1)$ block $b_1'$ and last diagonal entry $1$. Let $R$ fix the $j$-th coordinate and act on the coordinates indexed by the increasing list $C=(c_1,\dots,c_{n-1})$ through $b_2'$: explicitly, $R_{c_a,c_b}=(b_2')_{ab}$, $R_{j,j}=1$, and all other entries are zero. Both $L$ and $R$ are invertible and upper triangular. This is immediate for $L$; for $R$, an entry $(b_2')_{ab}\ne0$ has $a\le b$ and therefore $c_a\le c_b$, and the inverse is obtained by the same extension of $(b_2')^{-1}$. Define $\sigma$ by $\sigma(c_b)=\sigma'(b)$ for $1\le b<n$ and $\sigma(j)=n$. These assignments give a permutation of $\{1,\dots,n\}$, and its permutation matrix $P_\sigma$ has ones exactly at $(\sigma'(b),c_b)$ and $(n,j)$ by [L5]. For $a<n$ and $1\le b<n$, the $(a,c_b)$ entry of $LP_\sigma R$ is $(b_1'P_{\sigma'}b_2')_{ab}=A_{ab}=M_{a,c_b}$; its last row has a single $1$ in column $j$, and its $j$-th column has a single $1$ in row $n$. Thus $M=LP_\sigma R$ entry by entry. [step 2.1, step 3.1, step 4.1, L1, L3, L5]

6.1 By step 5.1, $M=LP_\sigma R$ with $L,R\in B$ and $P_\sigma$ a permutation matrix; by step 2.1 also $M=L_0gR_0$ with $L_0,R_0\in B$. Hence $g=L_0^{-1}LP_\sigma RR_0^{-1}$. Since $B$ is a subgroup of $G$ by [L1], both $L_0^{-1}L$ and $RR_0^{-1}$ lie in $B$; writing them as $b_1$ and $b_2$ gives $g=b_1P_\sigma b_2$, as asserted. ∎ [step 2.1, step 5.1, L1]

**Remark.** The reduction of step 2.1 is the two-sided triangular analogue of the row reduction of [[thm-gaussian-elimination-produces-row-echelon-form]]: the last row plays the role of the pivot row, and the column operations are the right multiplications by unitriangular matrices that keep every intermediate factor inside $B$. No choice principle is used: the pivot column $j$ is the least column with a nonzero entry in the last row, and every subsequent operation is determined by the entries of the current matrix.
