---
id: ex-gl-one-and-the-trivial-parabolic-boundary
kind: example
title: GL_1 and the trivial parabolic endpoints
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-standard-subgroups-of-gl-n-over-a-finite-field, def-weyl-group-and-length-for-finite-gl-n, thm-complete-flags-form-gl-n-over-b, thm-bruhat-decomposition-of-gl-n-over-a-finite-field, prop-cardinality-of-a-finite-bruhat-cell, def-compositions-partial-flags-and-standard-parabolics, thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq, def-harish-chandra-induction-and-restriction-for-finite-gl-n, def-cuspidal-support-and-harish-chandra-series, def-simple-module, cor-general-linear-group-is-a-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5, Definition 9.2 and Definition 10.2, printed pp. 18 and 38-41"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Definition 5.7 and Proposition 5.9, printed pp. 43-44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Example

Let $q$ be a prime power and put $G=\operatorname{GL}_1(\mathbb F_q)$, so that
$G=\mathbb F_q^\times$ is the multiplicative group of the field with $q$
elements ([[def-standard-subgroups-of-gl-n-over-a-finite-field]],
[[cor-general-linear-group-is-a-group]]). Then the standard Borel subgroup, the
standard torus and the Weyl group of $G$ are
$$B=T=G,\qquad U=\{I_1\},\qquad W=N/T=S_1=\{1\},$$
the space $V=\mathbb F_q^1$ carries exactly one complete flag, namely
$0<V$, and the Bruhat decomposition of $G$ reduces to the single cell
$B\,P_{\mathrm{id}}\,B=B=G$: there is exactly one Bruhat cell, with
$q^{\ell(\mathrm{id})}=q^0=1$ left coset of $B$
([[thm-complete-flags-form-gl-n-over-b]],
[[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]],
[[prop-cardinality-of-a-finite-bruhat-cell]]). For the one-part composition
$\alpha=(1)$ of $n=1$ one has $P_\alpha=L_\alpha=G$ and $U_\alpha=\{I_1\}$, so
the parabolic is the group itself and both Harish-Chandra functors with respect
to it are the identity functors
$$R_G^G(W)=W,\qquad {}^*\!R_G^G(X)=X^{U_\alpha}=X$$
on complex $G$-modules ([[def-compositions-partial-flags-and-standard-parabolics]],
[[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]],
[[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]). Moreover
$(\{1\})$ is the only ordered partition of $\{1\}$ and it has no proper
refinement, so every complex $G$-module is cuspidal; the cuspidal pairs are
therefore the pairs $(G,\chi)$ with $\chi$ a simple complex $G$-module, and the
Harish-Chandra series of $(G,\chi)$ is the singleton $\{\chi\}$
([[def-cuspidal-support-and-harish-chandra-series]], [[def-simple-module]]).

## Facts & Assumptions

**Given:** A prime power $q$, the group $G=\operatorname{GL}_1(\mathbb F_q)$, its standard subgroups $B,T,U$, the monomial subgroup $N$ and the Weyl group $W=N/T$, the space $V=\mathbb F_q^1$, the composition $\alpha=(1)$ of $n=1$, and the ordered partition $\gamma_0=(\{1\})$ of $\{1\}$.

[F1] For $n\ge1$ the standard Borel subgroup $B$ consists of the invertible upper triangular matrices, the standard torus $T$ of the diagonal ones and the standard maximal unipotent subgroup $U$ of the upper unitriangular ones; all three are subgroups with $T\le B$, $U\le B$ and $T\cap U=\{I_n\}$, and $G=\operatorname{GL}_n(\mathbb F_q)$ is a group with identity $I_n$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]], [[cor-general-linear-group-is-a-group]]).

[F2] For $n\ge1$ the monomial subgroup $N$ consists of the monomial matrices, $\sigma\mapsto P_\sigma T$ is an isomorphism $S_n\to W=N/T$, and $\ell(\sigma)$ is the number of inversions of $\sigma$, so that $\ell(\mathrm{id})=0$; for a composition $\alpha$ of $n$ the standard parabolic is $P_\alpha=L_\alpha\ltimes U_\alpha$ with the entry criteria $\operatorname{blk}_\alpha(k)>\operatorname{blk}_\alpha(l)$ for $P_\alpha$, $\operatorname{blk}_\alpha(k)\ne\operatorname{blk}_\alpha(l)$ for $L_\alpha$ and $k\ne l$, $\operatorname{blk}_\alpha(k)\ge\operatorname{blk}_\alpha(l)$, $g_{kk}=1$ for $U_\alpha$ ([[def-weyl-group-and-length-for-finite-gl-n]], [[def-compositions-partial-flags-and-standard-parabolics]], [[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]]).

[F3] For $n\ge1$ the complete flags $0=F_0<F_1<\cdots<F_n=V$ of $V=\mathbb F_q^n$ are in $G$-equivariant bijection with the left cosets $G/B$ by $gB\mapsto gV_\bullet$ for the standard flag $V_\bullet$ ([[thm-complete-flags-form-gl-n-over-b]]).

[F4] For $n\ge1$ one has $G=\bigsqcup_{\sigma\in S_n}BP_\sigma B$, the double cosets $BP_\sigma B$ are pairwise disjoint with union $G$, and $|BwB/B|=q^{\ell(\sigma)}$ for every $\sigma\in S_n$ ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]], [[prop-cardinality-of-a-finite-bruhat-cell]]).

[F5] For a split parabolic $P=L\ltimes U$ of a finite group the Harish-Chandra functors are $R_L^G(W)=\operatorname{Ind}_P^G(\operatorname{Inf}_L^PW)$ and ${}^*\!R_L^G(X)=X^U$, and for a composition $\alpha$ of $n$ they are taken with respect to $P_\alpha=L_\alpha\ltimes U_\alpha$; they are additive functors on complex modules, and $R_L^G$ is taken along the parabolic named in the notation ([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]).

[F6] Let $\gamma$ and $\delta$ be ordered partitions of $\{1,\dots,n\}$; $\delta$ is a proper refinement of $\gamma$ when every block of $\delta$ is contained in a block of $\gamma$ and the two set partitions differ, and a complex $L_\gamma$-module $N$ is cuspidal when ${}^*\!R_{L_\delta}^{L_\gamma}(N)=N^{U_\delta\cap L_\gamma}$ vanishes for every proper refinement $\delta$ of $\gamma$; a cuspidal pair is a pair $(L_\gamma,N)$ with $N$ simple and cuspidal, and its Harish-Chandra series is the set of isomorphism classes of simple complex $G$-modules which are quotients of $R_{L_\gamma}^G(N)$ ([[def-cuspidal-support-and-harish-chandra-series]], [[def-simple-module]]).

## Verification

**Proof technique:** direct.

1.1 At $n=1$ the three defining conditions of [F1] read: a $1\times1$ matrix is upper triangular and diagonal always, and it is upper unitriangular exactly when its entry is $1$; hence $B=T=G$ and $U=\{I_1\}$. By [F2] the monomial matrices are all of $G$, so $N=G$, $W=N/T$ is the trivial group, and it is $S_1=\{1\}$ under the isomorphism $\sigma\mapsto P_\sigma T$. [given, F1, F2]

1.2 For the composition $\alpha=(1)$ of $n=1$ the block is $I_1=\{1\}$, so $\operatorname{blk}_\alpha(1)=\operatorname{blk}_\alpha(1)$ and the criteria of [F2] impose no vanishing condition: $P_\alpha=L_\alpha=G$; the condition for $U_\alpha$ is $g_{11}=1$, so $U_\alpha=\{I_1\}$. In particular $P_\alpha=G=L_\alpha$ and $U_\alpha=\{I_1\}$, and the standard parabolic is the whole group. [given, F2]

1.3 The set $\{1\}$ has exactly one ordered partition, namely $\gamma_0=(\{1\})$, whose single block is $\{1\}$; a proper refinement of $\gamma_0$ would be an ordered partition of $\{1\}$ whose set partition differs from $\{\{1\}\}$, and no such partition exists, since an ordered partition of $\{1\}$ consists of nonempty disjoint blocks covering $\{1\}$. Hence $\gamma_0$ has no proper refinement at all. [given, F6]

2.1 The vectors of $V=\mathbb F_q^1$ are the scalar multiples of $e_1$, so the only subspace different from $0$ is $V$ itself and the chain $0<V$ is the only complete flag of $V$; by [F3] the coset space $G/B$ is a single point, and by $B=T=G$ of step 1.1 the standard flag is fixed by every element of $G$. [given, F1, F3, step 1.1]

2.2 The inflation $\operatorname{Inf}_{L_\alpha}^{P_\alpha}$ of [F5] is taken along the identity homomorphism $P_\alpha\to L_\alpha$, since $P_\alpha=L_\alpha=G$, so it is the identity functor on complex $G$-modules; likewise $\operatorname{Ind}_{P_\alpha}^G$ is the identity functor, because $P_\alpha=G$. Hence $R_G^G(W)=W$ for every complex $G$-module $W$, and ${}^*\!R_G^G(X)=X^{U_\alpha}=X^{\{I_1\}}=X$ for every complex $G$-module $X$: both Harish-Chandra functors attached to the one-part composition of $n=1$ are the identity functors. [step 1.2, F5]

3.1 By [F4] the group is the disjoint union of the cells $BP_\sigma B$ over $\sigma\in S_1=\{1\}$, so $G=B\,P_{\mathrm{id}}\,B=B$ by step 1.1: there is exactly one Bruhat cell, namely the cell of the identity, and it is the single right coset of $B=G$ in $G$; this matches $|B P_{\mathrm{id}}B/B|=q^{\ell(\mathrm{id})}=q^0=1$ of [F4] and the single point $G/B$ of step 2.1. [step 1.1, step 2.1, F3, F4]

3.2 Let $M$ be a complex $G$-module. By step 1.3 the only ordered partition of $\{1\}$ is $\gamma_0$, which has no proper refinement, so the vanishing condition of [F6] is vacuous and $M$ is cuspidal. If moreover $M=\chi$ is simple, then $(G,\chi)$ is a cuspidal pair, and its Harish-Chandra series consists of the simple quotients of $R_G^G(\chi)=\chi$ (step 2.2), that is of $\chi$ itself: the series is the singleton $\{\chi\}$. Every simple complex $G$-module is one-dimensional, since $G=\mathbb F_q^\times$ is abelian, and each of them forms its own Harish-Chandra series. [step 1.3, step 2.2, F5, F6]

4.1 Consequently, at $n=1$ the general theory takes the following form: $B=T=G$, $U=\{I_1\}$ and $W=S_1$; the complete flag variety $G/B$ and the set of Bruhat cells and double cosets $B\backslash G/B$ each have exactly one element; the one-part composition $(1)$ has $P_\alpha=L_\alpha=G$ with trivial unipotent radical, so both Harish-Chandra functors are the identity; and every simple module is cuspidal with a one-element series. ∎ [step 3.1, step 2.2, step 3.2]

## Remarks

The example records the two degenerate endpoints of the page: the Borel
subgroup of $\operatorname{GL}_1(\mathbb F_q)$ is the whole group, so the flag
variety is a point and the Bruhat decomposition has a single cell, and the
trivial parabolic $P_{(n)}$ gives the identity functors of
[[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]. At $n=1$ the
Levi $L_{(\{1\})}=G$ is also the diagonal torus, so the two extremes of the
cuspidality definition coincide: the all-singleton and the one-block partition
of $\{1\}$ are the same ordered partition, and the series of the pair
$(G,\chi)$ is the singleton $\{\chi\}$ rather than a genuine principal series.
