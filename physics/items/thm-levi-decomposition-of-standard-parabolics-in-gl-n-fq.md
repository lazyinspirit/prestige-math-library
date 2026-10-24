---
id: thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq
kind: theorem
title: Block Levi decomposition of standard parabolics
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-compositions-partial-flags-and-standard-parabolics, def-standard-subgroups-of-gl-n-over-a-finite-field, thm-matrix-multiplication-laws, thm-invertible-matrix-theorem, cor-general-linear-group-is-a-group, def-subgroup, def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 8.4(a) and Proposition 8.1, printed pp. 30 and 29"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Section 5.1, printed p. 42"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge1$, let $q$ be a prime power and let $\alpha=(a_1,\dots,a_r)$ be a
composition of $n$, with standard parabolic $P_\alpha$, standard Levi subgroup
$L_\alpha$ and standard unipotent radical $U_\alpha$
([[def-compositions-partial-flags-and-standard-parabolics]]). Then $L_\alpha$
and $U_\alpha$ are subgroups of $P_\alpha$, $L_\alpha\cap U_\alpha=\{I_n\}$,
$U_\alpha\trianglelefteq P_\alpha$, and the multiplication map
$$L_\alpha\times U_\alpha\longrightarrow P_\alpha,\qquad (l,u)\longmapsto lu,$$
is a bijection; equivalently
$$P_\alpha=L_\alpha\ltimes U_\alpha .$$
Moreover the block diagonal map is an isomorphism of groups
$$L_\alpha\longrightarrow \operatorname{GL}_{a_1}(\mathbb F_q)\times\cdots\times\operatorname{GL}_{a_r}(\mathbb F_q),\qquad l\longmapsto(A_{11},\dots,A_{rr}),$$
whose inverse assembles the blocks, and the two extreme cases are
$P_{(n)}=G=L_{(n)}$, $U_{(n)}=\{I_n\}$ and $P_{(1^n)}=B=L_{(1^n)}\ltimes U_{(1^n)}$
with $L_{(1^n)}=T$ the diagonal torus and $U_{(1^n)}=U$ the standard maximal
unipotent subgroup.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, a composition $\alpha=(a_1,\dots,a_r)$ of $n$ with blocks $I_1,\dots,I_r$ and partial sums $d_i=a_1+\cdots+a_i$, the group $G=\operatorname{GL}_n(\mathbb F_q)$, and the subgroups $P_\alpha$, $L_\alpha$, $U_\alpha\le G$ of [[def-compositions-partial-flags-and-standard-parabolics]].

[L1] $P_\alpha$ is the set of invertible matrices $p=(p_{kl})$ with $p_{kl}=0$ whenever $\operatorname{blk}(k)>\operatorname{blk}(l)$, and it is a subgroup of $G$ containing $B$; $L_\alpha$ is the set of block diagonal matrices in $P_\alpha$, $U_\alpha$ the set of $u\in P_\alpha$ with $u_{kk}=1$ all $k$ and $u_{kl}=0$ whenever $k\ne l$ and $\operatorname{blk}(k)\ge\operatorname{blk}(l)$; $P_{(n)}=G$ and $P_{(1^n)}=B$ ([[def-compositions-partial-flags-and-standard-parabolics]]).

[L2] $B=T\ltimes U$ where $T$ is the set of invertible diagonal matrices and $U$ the set of unitriangular matrices; $U_{(1^n)}=U$ and $L_{(1^n)}=T$ in the notation of [L1] ([[def-standard-subgroups-of-gl-n-over-a-finite-field]], [[def-compositions-partial-flags-and-standard-parabolics]]).

[L3] Matrix multiplication over a field is associative and distributive over addition, products of compatible blocks are computed blockwise, and the diagonal blocks of a product of upper block triangular matrices are the products of the diagonal blocks ([[def-matrix-product-and-identity-matrix]], [[thm-matrix-multiplication-laws]]).

[L4] For $A\in M_n(F)$ the following are equivalent: $A$ is invertible; and $N(A)=\{0\}$ ([[thm-invertible-matrix-theorem]]).

[L5] For every field $F$ and natural $m$, $\operatorname{GL}_m(F)$ is a group under matrix multiplication ([[cor-general-linear-group-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 $L_\alpha$ is a subgroup of $P_\alpha$: it contains $I_n$; if $l,l'\in L_\alpha$ then $l\,l'\in L_\alpha$ and $l^{-1}\in L_\alpha$, because block diagonal matrices of the given block sizes multiply and invert blockwise by [L3], the inverse of an invertible block diagonal matrix having the inverted diagonal blocks. [L1, L3, given]

1.2 The **diagonal block map** $\varphi:P_\alpha\to L_\alpha$, $\varphi(p):=\operatorname{diag}(A_{11},\dots,A_{rr})$ formed from the diagonal blocks $A_{ii}$ of $p$, is a well-defined group homomorphism. It is well defined because $p$ is invertible and each diagonal block is invertible: since $p^{-1}\in P_\alpha$ by [L1], write its diagonal blocks as $B_{ii}$. The block product rule [L3] applied to $pp^{-1}=p^{-1}p=I_n$ gives $A_{ii}B_{ii}=B_{ii}A_{ii}=I_{a_i}$, so each $A_{ii}$ is invertible and belongs to $\operatorname{GL}_{a_i}(\mathbb F_q)$ by [L4], so each diagonal block lies in the group $\operatorname{GL}_{a_i}(\mathbb F_q)$ of [L5]. It is a homomorphism because the diagonal blocks of a product of upper block triangular matrices are the products of the diagonal blocks, by [L3]. [L1, L3, L4, L5, given]

2.1 The kernel of $\varphi$ is $U_\alpha$: a matrix $p\in P_\alpha$ satisfies $\varphi(p)=I_n$ exactly when $p_{kk}=1$ for every $k$ and $p_{kl}=0$ for $k\ne l$ with $\operatorname{blk}(k)\ge\operatorname{blk}(l)$, which is the definition of $U_\alpha$; since $\varphi$ is a homomorphism by step 1.2, this makes $U_\alpha$ a subgroup of $P_\alpha$ and $U_\alpha\trianglelefteq P_\alpha$. [step 1.2, L1]

3.1 The map $\varphi:P_\alpha\to L_\alpha$ is surjective, since $\varphi(l)=l$ for every $l\in L_\alpha$; thus inclusion $L_\alpha\hookrightarrow P_\alpha$ is a section of $\varphi$. Separately, the block-extraction map $\psi:L_\alpha\to\prod_{i=1}^r\operatorname{GL}_{a_i}(\mathbb F_q)$, $\psi(l)=(A_{11},\dots,A_{rr})$, is a group homomorphism by [L3]. Its inverse is the assembly map $(g_1,\dots,g_r)\mapsto\operatorname{diag}(g_1,\dots,g_r)$: both composites are identities by inspection of the blocks. This proves the asserted isomorphism for $L_\alpha$, while $\ker\varphi=U_\alpha$ remains as in step 2.1. [step 1.2, step 2.1, L3, L5]

4.1 Every $p\in P_\alpha$ factors as $p=\varphi(p)\cdot\varphi(p)^{-1}p$ with $\varphi(p)\in L_\alpha$ by step 3.1 and $\varphi(p)^{-1}p\in U_\alpha$ by step 2.1, so $P_\alpha=L_\alpha U_\alpha$; if $p=lu=l'u'$ with $l,l'\in L_\alpha$ and $u,u'\in U_\alpha$, then $l^{-1}l'=u(u')^{-1}$ lies in $L_\alpha\cap U_\alpha$, and a block diagonal matrix in $U_\alpha$ has $u_{kk}=1$ and $u_{kl}=0$ for $k\ne l$, hence equals $I_n$, so $l=l'$ and $u=u'$. Therefore the multiplication map $L_\alpha\times U_\alpha\to P_\alpha$ is a bijection and, with $L_\alpha\cap U_\alpha=\{I_n\}$ and $U_\alpha\trianglelefteq P_\alpha$ from step 2.1, the group $P_\alpha$ is the internal semidirect product $P_\alpha=L_\alpha\ltimes U_\alpha$. [step 2.1, step 3.1, L1, given]

5.1 The extreme cases: at $\alpha=(n)$ there is one block, so $P_{(n)}=G$ by [L1] and every matrix is block diagonal of type $(n)$, whence $L_{(n)}=G$ and $U_{(n)}=\{I_n\}$; at $\alpha=(1^n)$ every block is a singleton, so $L_{(1^n)}$ is the set of diagonal matrices in $G$ and $U_{(1^n)}$ the set of unitriangular matrices, that is $L_{(1^n)}=T$ and $U_{(1^n)}=U$ by [L2], with $P_{(1^n)}=B$ and $B=T\ltimes U$. ∎ [step 4.1, L1, L2]
