---
id: prop-cardinality-of-a-finite-bruhat-cell
kind: proposition
title: Cardinality of a finite Bruhat cell
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-bruhat-decomposition-of-gl-n-over-a-finite-field, def-standard-subgroups-of-gl-n-over-a-finite-field, def-weyl-group-and-length-for-finite-gl-n, thm-lagrange, def-index, def-triangular-and-diagonal-matrices-over-a-commutative-ring, def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws, thm-product-rule, def-finite-field-and-its-order]
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

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with standard Borel subgroup $B$, standard torus $T$ and standard unipotent
subgroup $U$, and for $\sigma\in S_n$ let $w:=P_\sigma$ be the permutation
matrix and $\ell(\sigma)$ the number of inversions of $\sigma$
([[def-weyl-group-and-length-for-finite-gl-n]]), so that
$G=\bigsqcup_{\sigma\in S_n}BwB$ is the Bruhat decomposition
([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]). Then for every
$\sigma\in S_n$:

1. the cell $BwB$ is a union of exactly
   $$|BwB/B|=q^{\ell(\sigma)}$$
   left cosets of $B$;
2. consequently $|BwB|=|B|\,q^{\ell(\sigma)}
   =(q-1)^nq^{\,n(n-1)/2+\ell(\sigma)}$, so the Bruhat decomposition writes
   $|G|$ as $\sum_{\sigma\in S_n}(q-1)^nq^{\,n(n-1)/2+\ell(\sigma)}$:
   the cells are indexed by $W$, and their numbers of left $B$-cosets are
   the powers $q^{\ell(\sigma)}$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, the group $G=\operatorname{GL}_n(\mathbb F_q)$ with standard Borel subgroup $B$, standard torus $T$ and standard unipotent subgroup $U$, and a permutation $\sigma\in S_n$ with permutation matrix $w:=P_\sigma$ and length $\ell(\sigma)$.

[L1] $B=\{\,b\in G:b\text{ is upper triangular}\,\}$ is a subgroup of $G$ with $B=T\ltimes U$; $U$ is the set of unitriangular matrices, $T$ the set of invertible diagonal matrices, and $|U|=q^{n(n-1)/2}$, $|T|=(q-1)^n$, $|B|=(q-1)^nq^{n(n-1)/2}$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[L2] $G=\bigsqcup_{\sigma\in S_n}BP_\sigma B$, and since $B$ is a subgroup each $BP_\sigma B$ is a union of left cosets $bB$ ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]).

[L3] For $\sigma\in S_n$ the permutation matrix satisfies $(P_\sigma)_{ij}=1$ exactly when $i=\sigma(j)$ and $P_\sigma P_\tau=P_{\sigma\tau}$, so $P_{\sigma^{-1}}w=I_n$ ([[def-weyl-group-and-length-for-finite-gl-n]]).

[L4] The length $\ell(\sigma)=\#\operatorname{Inv}(\sigma)$ counts the pairs $i<j$ with $\sigma(i)>\sigma(j)$, and $\ell(\sigma^{-1})=\ell(\sigma)$ ([[def-weyl-group-and-length-for-finite-gl-n]]).

[L5] If $G$ is a finite group and $H\le G$, then $|G|=[G:H]\,|H|$, where the index $[G:H]$ is the number of left cosets of $H$ in $G$ ([[thm-lagrange]], [[def-index]]).

[L6] Matrix products satisfy $(XY)_{ij}=\sum_kX_{ik}Y_{kj}$ and $I_n$ has entries $\delta_{ij}$ ([[def-matrix-product-and-identity-matrix]], [[thm-matrix-multiplication-laws]]).

[L7] A matrix is upper triangular when $a_{ij}=0$ for $i>j$; a unitriangular matrix is an upper triangular matrix with all diagonal entries equal to $1$ ([[def-triangular-and-diagonal-matrices-over-a-commutative-ring]], [[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[L9] If $A_0,\dots,A_{m-1}$ are finite sets then $\big|\prod_{i<m}A_i\big|=\prod_{i<m}|A_i|$ ([[thm-product-rule]]), and the field $\mathbb F_q$ has exactly $q$ elements ([[def-finite-field-and-its-order]]).

## Proof

**Proof technique:** direct.

1.1 **Conjugation by $w$.** For every $b\in M_n(\mathbb F_q)$ and all $i,j$ the product formula of [L6] together with the entries $(P_\sigma)_{ij}=\delta_{i,\sigma(j)}$ and $(P_{\sigma^{-1}})_{ij}=\delta_{i,\sigma^{-1}(j)}$ of [L3] give $(w^{-1}bw)_{ij}=b_{\sigma(i),\sigma(j)}$: in the sum $\sum_{k,l}(w^{-1})_{ik}b_{kl}w_{lj}$ the only nonzero term has $k=\sigma(i)$ and $l=\sigma(j)$. In particular $(w^{-1}bw)_{ii}=b_{\sigma(i),\sigma(i)}$, so conjugation by $w$ permutes the diagonal entries. [L3, L6]

1.2 **The coset bijection.** Put $C:=B\cap wBw^{-1}$, a subgroup of the group $B$ of [L1], and define $\psi:B/C\to BwB/B$ by $\psi(bC):=bwB$. This is well defined: if $bC=b'C$, then $b'^{-1}b\in C\subseteq wBw^{-1}$, so $ (b'w)^{-1}(bw)=w^{-1}b'^{-1}bw\in B$, that is $bwB=b'wB$. It is injective: $bwB=b'wB$ means $w^{-1}b'^{-1}bw\in B$, while $b'^{-1}b\in B$ because $B$ is a group, so $b'^{-1}b\in C$ and $bC=b'C$. It is surjective: every element of $BwB$ is $b_1wb_2$ with $b_1,b_2\in B$, and $b_1wb_2B=b_1wB$ because $b_2B=B$. Hence the number of left cosets of $B$ inside the cell is $|BwB/B|=|B/C|=[B:C]$. [L1, L2]

2.1 **The index lives in $U$.** Put $K:=U\cap wUw^{-1}$ and note $wTw^{-1}=T$, so $T\subseteq C$. An element $b=tu$ of $B$ with $t\in T$, $u\in U$ (unique form by [L1]) lies in $wBw^{-1}$ if and only if $u=t^{-1}b$ does, because $t\in wBw^{-1}$ and $wBw^{-1}$ is a subgroup; hence $C=T\cdot K$. Indeed, if $u\in U$ and $w^{-1}uw\in B$, then $w^{-1}uw$ is upper triangular with $(i,i)$ entry $1$ by step 1.1, hence unitriangular by [L7], so $u\in wUw^{-1}$; the reverse inclusion $K\subseteq C$ is clear because $U\subseteq B$ and $wUw^{-1}\subseteq wBw^{-1}$. Consequently the map $U/K\to B/C$, $uK\mapsto uC$, is a bijection: it is well defined since $K\subseteq C$; it is injective because $uC=u'C$ forces $u'^{-1}u\in C\cap U=K$; and it is surjective because $tuC=(tut^{-1})C$ with $tut^{-1}\in U$ by [L1] and $t\in T\subseteq C$. Therefore $[B:C]=[U:K]$. [step 1.1, L1, L3, L6, L7]

2.2 **Description of $K$.** By step 1.1 an element $u\in U$ lies in $K=U\cap wUw^{-1}$ if and only if $w^{-1}uw$ is unitriangular, that is, if and only if $u$ is unitriangular and $u_{\sigma(i),\sigma(j)}=0$ for all $i>j$; writing $a=\sigma(i)$ and $b=\sigma(j)$ this says
   $$u_{ab}=0\ \text{whenever }a>b\ \text{or }\big(a<b\text{ and }\sigma^{-1}(a)>\sigma^{-1}(b)\big),$$
   the first alternative being the unitriangular condition of [L7] and the second the condition coming from $i>j$. [step 1.1, L3, L7]

3.1 **Cardinality of $K$.** A set of matrices whose entries are constrained only by fixing some entries to $0$ or $1$ and leaving $m$ off-diagonal entries free has exactly $q^m$ elements, since each free entry ranges over the field $\mathbb F_q$ of $q$ elements and the choices are independent, by [L9]. By step 2.2 the free entries of $u\in K$ are the entries $u_{ab}$ with $a<b$ and $\sigma^{-1}(a)<\sigma^{-1}(b)$, the non-inversions of the permutation $\sigma^{-1}$; all other entries are forced. Among the $\binom n2$ pairs $a<b$, $\sigma^{-1}$ has $\binom n2-\ell(\sigma^{-1})=\binom n2-\ell(\sigma)$ non-inversions by [L4]. Hence $|K|=q^{\binom n2-\ell(\sigma)}$. [step 2.2, L4, L9]

4.1 By [L5] applied to the subgroup $K$ of $U$, whose order is $|U|=q^{\binom n2}$ by [L1], the index of $K$ in $U$ is $[U:K]=|U|\,/\,|K|=q^{\binom n2}q^{-(\binom n2-\ell(\sigma))}=q^{\ell(\sigma)}$. By step 2.1 this equals $[B:C]$, and by step 1.2 it equals $|BwB/B|$, which is claim 1. Multiplying by $|B|=(q-1)^nq^{\binom n2}$ from [L1] gives $|BwB|=|B|q^{\ell(\sigma)}=(q-1)^nq^{\binom n2+\ell(\sigma)}$, and summing over the disjoint cells of [L2] gives $|G|=\sum_{\sigma\in S_n}(q-1)^nq^{\binom n2+\ell(\sigma)}$, which is claim 2. ∎ [step 1.2, step 2.1, step 3.1, L1, L2, L5]

**Remark.** The left cosets of $B$ inside $BwB$ are the $B$-orbit of the coset $wB$ in $G/B$, so $q^{\ell(\sigma)}$ is the number of complete flags in the $B$-orbit of $wV_\bullet$; the torus contributes the constant factor $(q-1)^n$, and the entire dependence on $\sigma$ is carried by the unipotent subgroup, through the index $[U:U\cap wUw^{-1}]$. All these are finite cardinalities of explicit matrix sets, so no choice principle is used.
