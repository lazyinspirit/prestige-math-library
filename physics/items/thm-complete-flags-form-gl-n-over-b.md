---
id: thm-complete-flags-form-gl-n-over-b
kind: theorem
title: Complete flags are G/B
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-standard-subgroups-of-gl-n-over-a-finite-field, def-group-action, thm-transitive-actions-are-coset-actions, thm-invertible-matrix-theorem, def-triangular-and-diagonal-matrices-over-a-commutative-ring, def-coordinate-column-and-matrix-of-a-linear-map, def-linear-basis, def-dimension, def-linear-subspace, thm-dimension-formula, thm-dimension-of-a-linear-subspace, thm-rank-nullity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5 and Example 8.4, printed pp. 18 and 30"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 4.28, printed pp. 38-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $n\ge1$ and let $q$ be a prime power. Put $G=\operatorname{GL}_n(\mathbb F_q)$
and let $V=\mathbb F_q^n$. Then:

1. $G$ acts on the set $X$ of complete flags
   $0=F_0<F_1<\cdots<F_n=V$ with $\dim_{\mathbb F_q}F_i=i$ by
   $g\cdot F:=(\,g(F_0),\dots,g(F_n)\,)$;
2. the standard flag $V_\bullet$ with $V_i=\langle e_1,\dots,e_i\rangle$, where
   $e_1,\dots,e_n$ is the standard basis of $V$, is a complete flag whose
   stabiliser is the standard Borel subgroup $B$ of
   [[def-standard-subgroups-of-gl-n-over-a-finite-field]];
3. consequently $gB\mapsto g\cdot V_\bullet$ is a $G$-equivariant bijection
   $G/B\to X$, so the complete flags are in bijection with the left cosets of
   $B$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, the group $G=\operatorname{GL}_n(\mathbb F_q)$ acting by matrix-vector multiplication on $V=\mathbb F_q^n$, the standard basis $e_1,\dots,e_n$ of $V$, and the set $X$ of complete flags of $V$.

[L1] $B=\{\,b\in G:b\text{ is upper triangular}\,\}$, $T\le B$, $U\le B$, $T\cap U=\{I_n\}$ and $B=T\ltimes U$; $T$, $U$ and $B$ are the standard torus, the standard maximal unipotent subgroup and the standard Borel subgroup of $G$, with $U\trianglelefteq B$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[L2] The standard flag of $V=\mathbb F_q^n$ is the chain $V_0:=\{0\}\subsetneq V_1:=\langle e_1\rangle\subsetneq\cdots\subsetneq V_n:=\langle e_1,\dots,e_n\rangle=V$ of standard coordinate subspaces, and each $V_i$ has $\dim_{\mathbb F_q}V_i=i$ with $V_{i-1}\subsetneq V_i$ for $1\le i\le n$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[L3] A matrix $A=(a_{ij})\in M_n(\mathbb F_q)$ is upper triangular when $a_{ij}=0$ for $i>j$ ([[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]).

[L4] A left action of $G$ on a set $X$ is a map $G\times X\to X$, $(g,x)\mapsto g\cdot x$, with $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ for all $g,h\in G$, $x\in X$; the action is transitive when every $x,y\in X$ satisfy $g\cdot x=y$ for some $g\in G$ ([[def-group-action]]).

[L5] If $X$ is a transitive $G$-set and $x\in X$, the orbit map $G/G_x\to X$, $gG_x\mapsto g\cdot x$, is an equivariant isomorphism from the left-coset action to the given action ([[thm-transitive-actions-are-coset-actions]]).

[L6] For $A\in M_n(F)$ the following are equivalent: $A$ is invertible; and $x\mapsto Ax$ is a linear isomorphism ([[thm-invertible-matrix-theorem]]).

[L7] For an ordered basis $b_1,\dots,b_m$ of a vector space and a linear map $T$, the $j$-th column of the matrix of $T$ is the coordinate column of $T(b_j)$; conversely a matrix with prescribed columns defines the linear map sending $b_j$ to the corresponding vector ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L8] $\langle e_1,\dots,e_i\rangle$ has $e_1,\dots,e_i$ as a basis, so every $g\in G$ satisfies $g(\langle e_1,\dots,e_i\rangle)=\langle g(e_1),\dots,g(e_i)\rangle$ and $\dim_{\mathbb F_q}g(\langle e_1,\dots,e_i\rangle)=i$ ([[def-linear-basis]], [[def-dimension]], [[def-linear-subspace]], [[thm-rank-nullity]]).

[L9] If $U,W$ are finite-dimensional linear subspaces then $\dim(U+W)+\dim(U\cap W)=\dim U+\dim W$ ([[thm-dimension-formula]]).

[L10] If $U\le W$ are finite-dimensional linear subspaces with $\dim U=\dim W$ then $U=W$ ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 The map $G\times X\to X$, $(g,F_\bullet)\mapsto g\cdot F_\bullet$ with $(g\cdot F)_i:=g(F_i)$, is a well-defined left action: for $g\in G$ and $F_\bullet\in X$ each $g(F_i)$ is a linear subspace with $g(F_0)=\{0\}$ and $g(F_n)=V$, and by [L6] the map $x\mapsto gx$ is injective, so restricting it to $F_i$ and applying [L8] gives $\dim_{\mathbb F_q}g(F_i)=\dim_{\mathbb F_q}F_i=i$; dimensions therefore increase by one at each step, so $g(F_{i-1})\subsetneq g(F_i)$ and $g\cdot F_\bullet\in X$. Moreover $I_nx=x$ and $(gh)x=g(hx)$ for all $x\in V$, so $I_n\cdot F_\bullet=F_\bullet$ and $(gh)\cdot F_\bullet=g\cdot(h\cdot F_\bullet)$; thus $X$ is a $G$-set. [L4, L6, L8, given]

1.2 The standard flag $V_\bullet$ lies in $X$: by [L2] each $V_i=\langle e_1,\dots,e_i\rangle$ is a linear subspace of $V$ with $V_0=\{0\}$, $V_n=V$, $\dim_{\mathbb F_q}V_i=i$ and $V_{i-1}\subsetneq V_i$. [L2, given]

1.3 The stabiliser of $V_\bullet$ is $B$. Let $g\in G$ have matrix $A=(a_{ij})$ in the standard basis, so that $g(e_i)=\sum_{k}a_{ki}e_k$ and $g(e_i)\in V_i$ if and only if $a_{ki}=0$ for every $k>i$, that is, if and only if $A$ is upper triangular by [L3]. If $g\cdot V_\bullet=V_\bullet$ then $g(e_i)\in g(V_i)=V_i$ for every $i$; conversely, if $g(e_i)\in V_i$ for every $i$, then $g(V_i)=\langle g(e_1),\dots,g(e_i)\rangle\subseteq V_i$ by [L8], and both spaces have dimension $i$ by [L8] and [L2], so $g(V_i)=V_i$ by [L10]. Hence $g$ stabilises $V_\bullet$ if and only if $A$ is upper triangular, that is, if and only if $g\in B$ by [L1], so $G_{V_\bullet}=B$. [L1, L2, L3, L7, L8, L10, given]

1.4 Let $F_\bullet\in X$ be an arbitrary complete flag. Since $F_{i-1}\subsetneq F_i$, for each $1\le i\le n$ there is a vector $v_i\in F_i\setminus F_{i-1}$. [construct, given]

2.1 The list $v_1,\dots,v_i$ is a basis of $F_i$ for every $i$, by induction on $i$: $v_1\ne0$ spans the line $F_1$; and if $v_1,\dots,v_{i-1}$ is a basis of $F_{i-1}$, then $F_{i-1}+\langle v_i\rangle\subseteq F_i$ has dimension $(i-1)+1-\dim(F_{i-1}\cap\langle v_i\rangle)=i$ by [L9], because $v_i\notin F_{i-1}$ forces $F_{i-1}\cap\langle v_i\rangle=\{0\}$, while $\dim_{\mathbb F_q}F_i=i$; hence $F_{i-1}+\langle v_i\rangle=F_i$ by [L10], so $v_1,\dots,v_i$ spans $F_i$, and it is linearly independent because a relation $\sum_{j\le i}c_jv_j=0$ with $c_i\ne0$ expresses $v_i$ as an element of $\operatorname{span}(v_1,\dots,v_{i-1})=F_{i-1}$, contrary to the choice of $v_i$, while $c_i=0$ reduces the relation to the independent list $v_1,\dots,v_{i-1}$. In particular $v_1,\dots,v_n$ is a basis of $F_n=V$. [step 1.4, L9, L10]

3.1 Let $g:V\to V$ be the linear map with $g(e_i)=v_i$ for all $i$; by [L7] it has a unique matrix in the standard basis. It carries the basis $e_1,\dots,e_n$ of $V$ onto the basis $v_1,\dots,v_n$ of $V$ from step 2.1, hence is bijective, so its matrix is invertible by [L6] and $g\in G$. Moreover, for every $i$, the members $V_i$ of the standard flag of [L2] satisfy $g(V_i)=\langle g(e_1),\dots,g(e_i)\rangle=\langle v_1,\dots,v_i\rangle=F_i$ by [L8], the last equality by step 2.1, so $g\cdot V_\bullet=F_\bullet$. [step 2.1, L2, L6, L7, L8]

4.1 By step 3.1 every $F_\bullet\in X$ has the form $g\cdot V_\bullet$ for some $g\in G$, so the action of step 1.1 is transitive in the sense of [L4]; with $G_{V_\bullet}=B$ by step 1.3, the orbit map of [L5], applied to the transitive $G$-set $X$ and the point $V_\bullet$, is a $G$-equivariant bijection $G/B\to X$, $gB\mapsto g\cdot V_\bullet$. This is the asserted bijection between complete flags and left cosets of $B$. ∎ [step 1.1, step 1.3, step 3.1, L4, L5]
