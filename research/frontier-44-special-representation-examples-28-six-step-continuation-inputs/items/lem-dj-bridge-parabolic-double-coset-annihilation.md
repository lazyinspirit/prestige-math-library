---
id: lem-dj-bridge-parabolic-double-coset-annihilation
kind: lemma
title: "Row symmetrizers and signed column symmetrizers vanish outside dominance"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-dj-bridge-row-column-permutation-modules-and-polytabloids, lem-dj-bridge-row-permutation-module-standard-action, lem-dj-bridge-sign-automorphism-and-star-dual, def-dominance-order-on-partitions, def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Matthew Fayers, An algorithm for semistandardising homomorphisms, author version accepted by J. Algebra, 16 PDF pages"
      url: "http://webspace.maths.qmul.ac.uk/m.fayers/papers/garnirhoms.pdf"
      locator: "Section 2.1, index of notation, PDF p. 3, in the normalization (T_i - q)(T_i + 1) = 0: the row symmetrizer x_lambda = sum_{w in W_lambda} T_w, the signed column-type sum y_lambda = sum_{w in W_lambda} (-q)^{-ell(w)} T_w and the modules M^lambda = x_lambda H_n and S^lambda = x_lambda T_{w_lambda} y_{lambda'} H_n, whose dominance behaviour this lemma records."
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-19 (PDF pp. 27-28): Proposition 3.3 and Corollary 3.4, the double-coset and standard-basis methods used in the proof; and printed pp. 22-26 for the dominance ideals and the parity argument of the cellular theory. The concrete factorization argument of this item is proved here from the presentation, not quoted."
---

## Statement

Let $R$ be a commutative ring, let $q\in R^\times$, let $n\ge0$, and let
$\alpha,\nu\vdash n$ be partitions of $n$ with conjugate $\nu'$ and
$x_\alpha,y_\nu\in H_{R,q}(S_n)$ as in
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]]. If $\alpha$
is not dominated by $\nu'$ in the sense of
[[def-dominance-order-on-partitions]], that is, if
$\sum_{i\le k}\alpha_i>\sum_{i\le k}\nu'_i$ for some $k\ge1$, then
$$x_\alpha Hy_\nu=0.$$
The vanishing is a universal Laurent-polynomial identity, remains valid at
singular parameters and uses no cancellation of $q+1$. The proof explicitly
sorts parabolic double cosets and uses the zero product
$(1+T_i)(1-q^{-1}T_i)=0$. Empty shapes and $n=0,1$ are included. No choice
principle is used.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, partitions
$\alpha,\nu\vdash n$, the Hecke algebra $H=H_{R,q}(S_n)$ with standard basis
$\{T_w\}$, the row blocks $B_1,\dots,B_k$ of $\alpha$ and the row blocks
$C_1,\dots,C_l$ of $\nu$ (consecutive intervals of positions as in
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]]), and the
elements $x_\alpha=\sum_{w\in S_\alpha}T_w$ and
$y_\nu=\sum_{v\in S_\nu}(-q)^{-\ell(v)}T_v$.

[F1] The multiplication rule: $T_wT_i=T_{ws_i}$ if $\ell(ws_i)=\ell(w)+1$ and
$T_wT_i=(q-1)T_w+qT_{ws_i}$ if $\ell(ws_i)=\ell(w)-1$; the mirror rule
$T_iT_w=T_{s_iw}$ respectively $T_iT_w=(q-1)T_w+qT_{s_iw}$ holds on the left,
and $\{T_w\}$ is an $R$-basis
([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]],
[[def-generic-type-a-hecke-algebra]]).

[F2] $x_\alpha T_w=T_wx_\alpha=q^{\ell(w)}x_\alpha$ for every $w\in S_\alpha$
([[lem-dj-bridge-row-permutation-module-standard-action]]).

[F3] The star map is an anti-automorphism with $T_w^*=T_{w^{-1}}$ and
$y_\nu^*=y_\nu$
([[def-dj-bridge-row-column-permutation-modules-and-polytabloids]],
[[lem-dj-bridge-sign-automorphism-and-star-dual]]).

[F4] Dominance: $\mu\unrhd\lambda$ means
$\sum_{i\le k}\mu_i\ge\sum_{i\le k}\lambda_i$ for all $k\ge1$, so
"$\alpha$ is not dominated by $\nu'$" means
$\sum_{i\le k}\alpha_i>\sum_{i\le k}\nu'_i$ for some $k$
([[def-dominance-order-on-partitions]]).

## Proof

**Proof technique:** direct.

1.1 **The intersection matrix.** For $d\in S_n$ put $a_{ij}(d):=|B_i\cap d(C_j)|$, the number of positions of the $\nu$-block $C_j$ that $d$ sends into the $\alpha$-block $B_i$. Then $\sum_ja_{ij}(d)=|B_i|=\alpha_i$ and $\sum_ia_{ij}(d)=|C_j|=\nu_j$. For $w\in S_\alpha$ and $v\in S_\nu$ one has $w^{-1}(B_i)=B_i$ and $v(C_j)=C_j$, so $a_{ij}(wdv)=|B_i\cap wdv(C_j)|=|w^{-1}(B_i)\cap dv(C_j)|=|B_i\cap d(C_j)|=a_{ij}(d)$; hence the matrix $a(d)$ is constant on the double coset $S_\alpha dS_\nu$. [F4, algebra]

1.2 **The eigenvector identities.** By [F2], $x_\alpha T_w=T_wx_\alpha=q^{\ell(w)}x_\alpha$ for all $w\in S_\alpha$. For a generator $s_i\in S_\nu$ split $S_\nu$ into $A=\{u:\ell(us_i)=\ell(u)+1\}$ and its complement $B$; right multiplication by $s_i$ bijects $A$ onto $B$, and the multiplication rule gives $$y_\nu T_i=\sum_{u\in A}(-q)^{-\ell(u)}T_{us_i}+\sum_{u\in B}(-q)^{-\ell(u)}\bigl((q-1)T_u+qT_{us_i}\bigr)=(-q+q-1)\sum_{v\in B}(-q)^{-\ell(v)}T_v-\sum_{v\in A}(-q)^{-\ell(v)}T_v=-y_\nu.$$ Hence $y_\nu T_v=(-1)^{\ell(v)}y_\nu$ for every $v\in S_\nu$ by induction along reduced words, and since $y_\nu^*=y_\nu$ one gets $T_vy_\nu=(y_\nu T_{v^{-1}})^*=(-1)^{\ell(v)}y_\nu$. [F1, F2, F3, algebra]

1.3 **Sorted representatives exist.** Let $a=(a_{ij})$ be any matrix with row sums $\alpha_i$ and column sums $\nu_j$. For each $\nu$-block index $j$ list its multiset of target blocks increasingly as $i_1\le i_2\le\dots\le i_{\nu_j}$, where $i$ occurs $a_{ij}$ times. Process the positions $x=1,2,\dots,n$ in increasing order and, when $x$ is the $k$-th element of $C_j$, define $d(x)$ to be the smallest unused element of $B_{i_k}$. At each step block $B_{i_k}$ has been requested $\sum_{j'<j}a_{ij'}+k\le\sum_{j'\le j}a_{ij'}\le\alpha_i$ times, so an unused element exists; after all positions have been processed each block $B_i$ has been requested exactly $\sum_ja_{ij}=\alpha_i$ times and all its elements are used, so $d$ is a bijection. The map $d$ is increasing on each $C_j$: within a fixed target block the values are taken in increasing order, and blocks are used in the nondecreasing order $i_1\le i_2\le\dots$ while all elements of $B_i$ are smaller than all elements of $B_{i'}$ for $i<i'$. The inverse $d^{-1}$ is increasing on each $B_i$: if $y<y'$ lie in $B_i$, then $y$ is taken before $y'$ by the smallest-unused rule and hence is assigned to a smaller position. Finally $a_{ij}(d)=a_{ij}$ by construction. Thus every matrix with these row and column sums is realised by a permutation that is increasing on the $\nu$-blocks and whose inverse is increasing on the $\alpha$-blocks. [construct, algebra]

1.4 **The dominance inequality.** If $a_{ij}\le1$ for all $i,j$, then for every $k$ one has $\sum_{i\le k}\alpha_i=\sum_{i\le k}\sum_ja_{ij}=\sum_j\sum_{i\le k}a_{ij}\le\sum_j\min(k,\nu_j)$; since $\min(k,\nu_j)$ counts the pairs $(i,j)$ with $i\le k$ and $i\le\nu_j$, this equals $\sum_{i\le k}\nu'_i$, where $\nu'_i$ is the $i$-th column height of $\nu$. Hence if $\alpha$ is not dominated by $\nu'$, so that $\sum_{i\le k}\alpha_i>\sum_{i\le k}\nu'_i$ for some $k$, then every matrix with row sums $\alpha$ and column sums $\nu$ has an entry at least $2$. [F4, algebra]

2.1 **Reduction to sorted representatives.** For arbitrary $d\in S_n$, $w\in S_\alpha$, $v\in S_\nu$ one has $x_\alpha T_{wdv}y_\nu=x_\alpha T_wT_dT_vy_\nu=q^{\ell(w)}(-1)^{\ell(v)}x_\alpha T_dy_\nu$ by step 1.2. Let $C$ be a double coset and let $d_0\in C$ be the sorted representative of step 1.3 for the matrix $a(C)$ of step 1.1. Since $d=d_0$ is allowed and every $d\in C$ has the form $w d_0v$, the terms $x_\alpha T_dy_\nu$, $d\in C$, all vanish if and only if $x_\alpha T_{d_0}y_\nu=0$. [step 1.1, step 1.2, step 1.3, algebra]

2.2 **A repeated intersection gives adjacent transpositions.** Let $d_0$ be the sorted representative with matrix $a$, and suppose $a_{ij}\ge2$. Put $X:=C_j\cap d_0^{-1}(B_i)$, the positions of $C_j$ sent into $B_i$, and $Y:=d_0(X)=B_i\cap d_0(C_j)$; then $|X|=|Y|=a_{ij}\ge2$. Both are intervals: if $x_0<x<x_1$ with $x_0,x_1\in X$ and $x\in C_j$, then $d_0(x_0)<d_0(x)<d_0(x_1)$ by monotonicity of $d_0$ on $C_j$ and the two outer values lie in the interval $B_i$, so $d_0(x)\in B_i$ and $x\in X$; and if $p<r<q$ with $p,q\in Y$ and $r\in B_i$, then $d_0^{-1}(p)<d_0^{-1}(r)<d_0^{-1}(q)$ by monotonicity of $d_0^{-1}$ on $B_i$ and the outer preimages lie in $C_j$, so $r\in Y$. The increasing bijection $d_0:X\to Y$ between finite intervals of the same size is the shift $x\mapsto x+(\min Y-\min X)$. Writing $a:=\min X$ we have $a,a+1\in C_j$ and $d_0(a),d_0(a)+1\in B_i$ with $d_0(a+1)=d_0(a)+1$. Then $t:=s_a\in S_\nu$ and $s:=s_{d_0(a)}\in S_\alpha$ satisfy $sd_0=d_0t$: both sides agree at $a$ and $a+1$ and fix all other positions. [step 1.3, algebra]

3.1 **The factorization and vanishing.** Let $s\in S_\alpha$, $t\in S_\nu$ be simple with $sd_0=d_0t$ as in step 2.2. If $\ell(sd_0)=\ell(d_0)+1$ then $T_sT_{d_0}=T_{sd_0}=T_{d_0t}=T_{d_0}T_t$ by [F1], and if $\ell(sd_0)=\ell(d_0)-1$ then both sides equal $(q-1)T_{d_0}+qT_{sd_0}$; in both cases $T_sT_{d_0}=T_{d_0}T_t$. Split $S_\alpha$ into right cosets $\{u,us\}$ of the subgroup $\{1,s\}$ with minimal representatives $u$, and $S_\nu$ into left cosets $\{v,tv\}$ of $\{1,t\}$ with minimal representatives $v$; then $x_\alpha=X(1+T_s)$ with $X:=\sum_uT_u$, because $T_uT_s=T_{us}$, and $y_\nu=(1-q^{-1}T_t)Y$ with $Y:=\sum_v(-q)^{-\ell(v)}T_v$, because $T_{tv}=T_tT_v$ and $(-q)^{-\ell(tv)}=(-q)^{-1}(-q)^{-\ell(v)}=-q^{-1}(-q)^{-\ell(v)}$. Therefore $$x_\alpha T_{d_0}y_\nu=X(1+T_s)T_{d_0}(1-q^{-1}T_t)Y=XT_{d_0}(1+T_t)(1-q^{-1}T_t)Y=0,$$ since $(1+T_t)(1-q^{-1}T_t)=1-q^{-1}T_t+T_t-q^{-1}T_t^2=1+(1-q^{-1})T_t-q^{-1}((q-1)T_t+q)=0$. No division or cancellation of $q+1$ occurs. [step 2.2, F1, algebra]

4.1 **All terms of such a double coset vanish.** Let $C$ be a double coset whose matrix $a(C)$ has an entry at least $2$, and let $d_0$ be its sorted representative. Then $x_\alpha T_{d_0}y_\nu=0$ by steps 2.2 and 3.1, so $x_\alpha T_dy_\nu=0$ for every $d\in C$ by step 2.1. [step 2.1, step 2.2, step 3.1]

5.1 Suppose $\alpha$ is not dominated by $\nu'$. By step 1.4 every double coset matrix has an entry at least $2$, so by step 4.1 every $x_\alpha T_dy_\nu$ with $d\in S_n$ vanishes; since the $T_d$ are an $R$-basis of $H$ by [F1], $x_\alpha Hy_\nu=0$. All structure constants lie in $\mathbb Z[q^{\pm1}]$, no factor $q+1$ is inverted, and no choice principle is used; for $n=0,1$ the groups are trivial and the claim is immediate. [step 1.4, step 4.1, F1] ∎
