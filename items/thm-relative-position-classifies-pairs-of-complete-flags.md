---
id: thm-relative-position-classifies-pairs-of-complete-flags
kind: theorem
title: Relative position classifies pairs of complete flags
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-complete-flags-form-gl-n-over-b, thm-bruhat-decomposition-of-gl-n-over-a-finite-field, lem-rank-matrices-determine-the-pivot-permutation, def-standard-subgroups-of-gl-n-over-a-finite-field, thm-dimension-formula, thm-dimension-of-a-linear-subspace, lem-quotient-basis-lifts-to-an-adapted-basis, def-coordinate-column-and-matrix-of-a-linear-map, def-row-space-column-space-nullspace-and-matrix-ranks, def-linear-independence, def-linear-basis, def-injection-surjection-bijection, lem-standard-basis-of-f-n, def-linear-isomorphism-and-invertible-linear-map]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5 and Lemma 4.7, printed p. 18"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 4.28, printed pp. 38-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge1$, let $q$ be a prime power, put $V=\mathbb F_q^n$ and
$G=\operatorname{GL}_n(\mathbb F_q)$, let $X$ be the set of complete flags
$0=F_0<F_1<\cdots<F_n=V$ with $\dim_{\mathbb F_q}F_i=i$, and let $V_\bullet$ be
the standard flag with $V_i=\langle e_1,\dots,e_i\rangle$, so that the stabiliser
of $V_\bullet$ is the standard Borel subgroup $B$ and $G$ acts on $X$ by
componentwise transport ([[thm-complete-flags-form-gl-n-over-b]]). Write
$\overline F:=hV_\bullet$ for the flag with components $hV_i$ and consider the
diagonal action of $G$ on $X\times X$. Then:

1. **Invariant.** The assignment
   $$\Psi(\overline h,\overline g):=B\,h^{-1}g\,B\quad\text{for}\quad(\overline h,\overline g):=(hV_\bullet,gV_\bullet)\in X\times X,$$
   is a well-defined $G$-invariant map $\Psi:X\times X\to B\backslash G/B$, and
   its fibres are exactly the diagonal $G$-orbits; composing with the Bruhat
   bijection $\sigma\mapsto BP_\sigma B$ of
   [[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]] therefore gives a
   bijection from the set of diagonal orbits on $X\times X$ onto $S_n$. The
   permutation $\sigma(F,E)\in S_n$ attached to a pair is its **relative
   position**.
2. **Intersection dimensions.** For $x\in G$ and all $1\le i,j\le n$,
   $$\dim_{\mathbb F_q}(V_i\cap xV_j)=j-r_{i+1,j}(x),$$
   where $r_{i+1,j}(x)$ is the rank of the submatrix of $x$ on the rows
   $i+1,\dots,n$ and the columns $1,\dots,j$, with the convention
   $r_{n+1,j}(x):=0$. Consequently for a pair with $\overline h,\overline g$ and
   all $i,j$
   $$\dim_{\mathbb F_q}(F_i\cap E_j)=j-r_{i+1,j}(h^{-1}g);$$
   in particular, if $F=V_\bullet$ is the standard flag and $E=gV_\bullet$, then
   $\dim_{\mathbb F_q}(V_i\cap E_j)=j-r_{i+1,j}(g)$: the southwest ranks of a
   matrix sending the standard flag to $E$ compute the intersection dimensions.
3. **Complete invariant.** Two pairs $(\overline h,\overline g)$ and
   $(\overline{h'},\overline{g'})$ lie in the same diagonal $G$-orbit if and only
   if $\dim(F_i\cap E_j)=\dim(F'_i\cap E'_j)$ for all $i,j$, if and only if
   $h^{-1}g$ and $h'^{-1}g'$ have the same southwest rank matrix; in particular
   the intersection dimensions determine the relative position $\sigma(F,E)$.
   The diagonal orbits, the relative positions and the double cosets $BxB$
   are thus in canonical bijection.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, the space $V=\mathbb F_q^n$ with its standard basis $e_1,\dots,e_n$ and standard flag $V_0\subsetneq V_1\subsetneq\cdots\subsetneq V_n=V$, the group $G=\operatorname{GL}_n(\mathbb F_q)$ with standard Borel subgroup $B$, the set $X$ of complete flags of $V$, and the diagonal action of $G$ on $X\times X$.

[L1] $G$ acts on $X$ by $g\cdot F=(g(F_0),\dots,g(F_n))$, the standard flag $V_\bullet$ is complete with $\dim_{\mathbb F_q}V_i=i$, its stabiliser is $B$, and $gB\mapsto g\cdot V_\bullet$ is a $G$-equivariant bijection $G/B\to X$ ([[thm-complete-flags-form-gl-n-over-b]]).

[L2] $G=\bigsqcup_{\sigma\in S_n}BP_\sigma B$ and $\sigma\mapsto BP_\sigma B$ is a bijection from $S_n$ onto the set of double cosets $BxB$ ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]).

[L3] For $x\in M_n(\mathbb F_q)$ and $1\le i,j\le n$ let $r_{i,j}(x)$ be the rank of the submatrix on the rows $i,\dots,n$ and the columns $1,\dots,j$. Then $r_{i,j}(bx)=r_{i,j}(x)=r_{i,j}(xb)$ for $b\in B$, if $x\in BP_\sigma B$ then $r_{i,j}(x)=\#\{\,k\le j:\sigma(k)\ge i\,\}$, and, for $x\in G$, the rank matrix $(r_{i,j}(x))_{1\le i,j\le n}$ determines $\sigma$ and hence the double coset $BxB$ ([[lem-rank-matrices-determine-the-pivot-permutation]]).

[L4] $V_i=\langle e_1,\dots,e_i\rangle$, $\dim_{\mathbb F_q}V_i=i$ and $V_{i-1}\subsetneq V_i$, and $e_1,\dots,e_n$ is an ordered basis of $V$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]], [[lem-standard-basis-of-f-n]], [[def-linear-basis]]).

[L5] For finite-dimensional linear subspaces $U,W$ of a vector space over a field one has $\dim_F(U+W)+\dim_F(U\cap W)=\dim_F U+\dim_F W$ ([[thm-dimension-formula]]).

[L6] If $V$ is finite-dimensional and $W\le V$ is a linear subspace, then $\dim_F(V/W)=\dim_F V-\dim_F W$ ([[lem-quotient-basis-lifts-to-an-adapted-basis]]), and a linearly independent subset of a finite-dimensional space is contained in a basis ([[thm-dimension-of-a-linear-subspace]]).

[L7] For ordered bases $\mathcal B$ of $V$ and $\mathcal C$ of $W$ the matrix $[T]_{\mathcal B}^{\mathcal C}$ of a linear map $T:V\to W$ has as its $j$-th column the coordinate column of $T(b_j)$ ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L8] For a matrix $A$ over a field, the rank is the dimension of its column space and equals the dimension of its row space ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[L9] A function $f:A\to B$ is injective when $f(x)=f(y)$ implies $x=y$, surjective when every $b\in B$ equals $f(x)$ for some $x\in A$, and bijective when it is both; $f[S]$ denotes the image of $S$ under $f$ and $f^{-1}[T]$ its preimage ([[def-injection-surjection-bijection]]). An invertible linear map, called a linear isomorphism, satisfies two inverse equations that make it bijective ([[def-linear-isomorphism-and-invertible-linear-map]]).

[L10] A finite list $v_0,\dots,v_{m-1}$ of vectors is linearly independent when every list of scalars with $\sum_i\lambda_iv_i=0$ has all $\lambda_i=0$, and a basis is a linearly independent spanning set ([[def-linear-independence]], [[def-linear-basis]]).

## Proof

**Proof technique:** direct.

1.1 **Well-definedness of $\Psi$.** Suppose $hV_\bullet=h'V_\bullet$ and $gV_\bullet=g'V_\bullet$ in $X$. Then $h^{-1}h'$ stabilises every $V_i$, hence $h^{-1}h'\in B$ by [L1], so $h'=hb$ with $b\in B$; likewise $g'=gc$ with $c\in B$. Therefore $h'^{-1}g'=b^{-1}h^{-1}gc\in B(h^{-1}g)B$, so $B h'^{-1}g' B=B h^{-1}gB$: the class $\Psi(\overline h,\overline g)$ does not depend on the chosen representatives. [L1]

1.2 **A quotient identification.** Fix $x\in G$ and $1\le i,j\le n$, and let $\varphi:\mathbb F_q^j\to V/V_i$ be the linear map $\varphi(v):=x(v,0)+V_i$, where $(v,0)\in\mathbb F_q^n$ denotes $v$ placed in the first $j$ coordinates. Its image is $\{xv+V_i:v\in\mathbb F_q^j\}=(xV_j+V_i)/V_i$, so by [L6], [L5] and $\dim_{\mathbb F_q}V_i=i$ of [L4] we have $\dim_{\mathbb F_q}\operatorname{im}\varphi=\dim_{\mathbb F_q}(xV_j+V_i)-\dim_{\mathbb F_q}V_i=i+j-\dim_{\mathbb F_q}(V_i\cap xV_j)-i=j-\dim_{\mathbb F_q}(V_i\cap xV_j)$, where $\dim_{\mathbb F_q}xV_j=j$ because $x$ is bijective by [L9] and $xV_j$ is the image of $V_j$. The images $e_{i+1}+V_i,\dots,e_n+V_i$ of the basis vectors of [L4] form a basis of $V/V_i$: they span, because $e_1,\dots,e_i$ lie in $V_i$, so the class of every $v$ lies in their span; and they are linearly independent, because a relation $\sum_{k>i}c_k(e_k+V_i)=0$ means $\sum_{k>i}c_ke_k\in V_i\cap\langle e_{i+1},\dots,e_n\rangle=\{0\}$, by [L4] and [L10]. Therefore, by [L7], the matrix of $\varphi$ with respect to the standard basis of $\mathbb F_q^j$ and this basis of $V/V_i$ is the submatrix of $x$ on the rows $i+1,\dots,n$ and the columns $1,\dots,j$, whose rank equals $\dim_{\mathbb F_q}\operatorname{im}\varphi$ by [L8]. Comparing the two computations gives $\dim_{\mathbb F_q}(V_i\cap xV_j)=j-r_{i+1,j}(x)$ for $i\le n-1$, and for $i=n$ both sides equal $j$ because $V_n=V$ and $r_{n+1,j}(x)=0$ by the convention of the statement. [L4, L5, L6, L7, L8, L9, L10]

2.1 **$G$-invariance.** For $\gamma\in G$ the representatives $\gamma h,\gamma g$ give $(\gamma h)^{-1}(\gamma g)=h^{-1}\gamma^{-1}\gamma g=h^{-1}g$, so $\Psi(\gamma\cdot\overline h,\gamma\cdot\overline g)=\Psi(\overline h,\overline g)$: the map $\Psi$ is constant on diagonal orbits. It is surjective, since $\Psi(V_\bullet,xV_\bullet)=B x B$ for every $x\in G$. [step 1.1, L1]

2.2 **Pairs of flags.** Let $(\overline h,\overline g)\in X\times X$ and $1\le i,j\le n$. The invertible linear map $h^{-1}$ satisfies $h^{-1}(F_i\cap E_j)=V_i\cap h^{-1}gV_j$, and it preserves dimensions by [L9]; hence by step 1.2 with $x:=h^{-1}g$ we get $\dim_{\mathbb F_q}(F_i\cap E_j)=j-r_{i+1,j}(h^{-1}g)$. For $F=V_\bullet$ the representative may be taken to be $h=I_n$, so $\dim_{\mathbb F_q}(V_i\cap E_j)=j-r_{i+1,j}(g)$ for any $g\in G$ with $gV_\bullet=E$. [step 1.2, L1, L9]

3.1 **The fibres of $\Psi$ are the orbits.** Suppose $\Psi(\overline h,\overline g)=\Psi(\overline{h'},\overline{g'})$, that is $B h^{-1}g B=B h'^{-1}g'B$. Then $h'^{-1}g'=b_1h^{-1}gb_2$ for some $b_1,b_2\in B$, so $b_1h^{-1}g=h'^{-1}g'b_2^{-1}$. Put $\rho:=h'b_1h^{-1}\in G$. Then $\rho h=h'b_1$, so $\rho(hV_\bullet)=h'(b_1V_\bullet)=h'V_\bullet$ because $b_1$ stabilises $V_\bullet$ by [L1]; and $\rho g=h'b_1h^{-1}g=h'(h'^{-1}g'b_2^{-1})=g'b_2^{-1}$, so $\rho(gV_\bullet)=g'V_\bullet$ as well. Hence $(\overline{h'},\overline{g'})=\rho\cdot(\overline h,\overline g)$ lies in the same diagonal orbit. Together with step 2.1 this shows that two pairs have the same image under $\Psi$ exactly when they lie in the same diagonal orbit. [step 1.1, step 2.1, L1]

4.1 **The dimension function is a complete invariant.** Suppose $\dim(F_i\cap E_j)=\dim(F'_i\cap E'_j)$ for all $i,j$. By step 2.2 the rank matrices of $x:=h^{-1}g$ and $x':=h'^{-1}g'$ satisfy $r_{i+1,j}(x)=j-\dim(F_i\cap E_j)=j-\dim(F'_i\cap E'_j)=r_{i+1,j}(x')$ for all $i,j$; since $r_{n+1,j}=0$ is fixed by the convention of the statement and $r_{1,j}(x)=r_{1,j}(x')=j$ because $x,x'$ are invertible, this determines the whole southwest rank matrix of [L3], so $x$ and $x'$ lie in one double coset $BxB=Bx'B$ by [L3]. Then step 3.1 shows that the two pairs lie in the same diagonal orbit. Conversely, if the pairs lie in the same orbit, say $(\overline{F'},\overline{E'})=\gamma\cdot(\overline F,\overline E)$ with $\gamma\in G$, then $F'_i=\gamma F_i$ and $E'_j=\gamma E_j$, so $F'_i\cap E'_j=\gamma(F_i\cap E_j)$ and the dimensions agree by [L9]. [step 2.2, step 3.1, L3, L9]

5.1 By step 4.1 the fibres of the composite assignment (pair $\mapsto$ intersection-dimension function $\mapsto$ southwest rank matrix $\mapsto$ double coset) are exactly the diagonal orbits, and by step 3.1 the fibres of $\Psi$ are the same orbits; the Bruhat decomposition [L2] identifies the double cosets $BxB$ bijectively with $S_n$ through $\sigma\mapsto BP_\sigma B$. Hence $\sigma(F,E)$ is well defined, is determined by the intersection dimensions $\dim(F_i\cap E_j)$, and classifies the diagonal $G$-orbits on $X\times X$. In particular, when $F=V_\bullet$ the southwest rank matrix of the single matrix $g$ with $E=gV_\bullet$ determines $\sigma$ by [L3], while two choices $g,g'$ with $gV_\bullet=g'V_\bullet$ differ by right multiplication by an element of $B$ and give the same rank matrix by the first assertion of [L3]. ∎ [step 1.1, step 2.1, step 3.1, step 4.1, L2, L3]

**Remark.** The relative position is the analogue for complete flags of the Bruhat index of a matrix: the double coset $B h^{-1}gB$ records how the two flags are positioned, and the intersection dimensions $\dim(F_i\cap E_j)$ are the coordinate-free form of the southwest rank matrix. The dimension identity of step 1.2 is the only place where the direction of the picture enters: the ranks are taken on the rows $i+1,\dots,n$, so the formula pairs the prefix flag $V_j$ with the suffix quotient $V/V_i$.
