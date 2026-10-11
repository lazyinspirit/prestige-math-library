---
id: def-finite-q-wedge-space-and-normal-ordering-relations
kind: definition
title: "The finite q-wedge space and the normal-ordering relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel,
       lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis,
       def-the-level-one-vector-representation-its-affinization-and-energy-function,
       def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.5, printed pp. 19-20: the q-wedge space $\\wedge^r_qU=U^{\\otimes r}/I_r$ and the straightening Prop. 8; sec. 3.6-3.7, printed pp. 20-22: bar involution and the ordered-wedge basis."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.3, printed pp. 5-8: the wedge space, relations (43),(45) and the normally ordered wedge basis."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 3.3, printed pp. 14-17: normal ordering via the energy function and Lemmas 3.3.1-3.3.3."
---

## Definition

For $N\ge1$ let $V_{\mathrm{aff}}^{\otimes N}$ carry the affine Hecke action and put
$W_N:=V_{\mathrm{aff}}^{\otimes N}\big/\ker A_N$, where $A_N=\sum_{w\in S_N}S_w$;
write $u_{m_1}\wedge\cdots\wedge u_{m_N}$ for the image of the pure tensor, and let
$\wedge$ denote this product. Call an index tuple **normal** (or normally
ordered) if $m_1>m_2>\cdots>m_N$, and set $W_A:=\sum_{\text{normal }I}\mathbb Z[q,q^{-1}]\,u_I$,
$W_0:=\bigoplus_{\text{normal }I}\mathbb Z[q]\,u_I$, where $u_I$ is the image of
the corresponding ordered wedge.

For $l<m$ write $m-l=ae+b$ with $a\ge0$, $0\le b<e$ (so $a=\lfloor(m-l)/e\rfloor$
and $b$ is the residue difference). The **normal-ordering relations** are:

$$u_l\wedge u_l=0;\qquad u_l\wedge u_m=-u_m\wedge u_l\quad(b=0);\qquad u_l\wedge u_m=-q^{-1}u_m\wedge u_l\quad(a=0,\ b>0);$$

$$u_l\wedge u_m=-q^{-1}u_m\wedge u_l-u_{l+ae}\wedge u_{m-ae}-q^{-1}u_{m-ae}\wedge u_{l+ae}\quad(a>0,\ b>0),$$

where the last line is to be read as a relation in $W_N$ and is applied
recursively to its two remaining unordered pairs; each recursion step strictly
decreases the gap of the unordered pair it rewrites and keeps every index
between $l$ and $m$, so the procedure terminates. The energy normal order is
the equivalent formulation through the opposite-channel energy:
$u_{m_1}\wedge u_{m_2}$ is rewritten toward decreasing indices by
$H_{\mathrm{op}}(u_{m_1}\otimes u_{m_2})>0\iff m_1>m_2$ of
[[def-the-level-one-vector-representation-its-affinization-and-energy-function]].

## Facts & Assumptions

**Given:** The quotient and charts in the Definition, with the stated affine Hecke Laurent action.

[F1] The contract of [[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]] gives $\ker A_N=\sum_i\ker(S_i+1)$ and $A_NS_i=QA_N$, where $Q=q^2$; therefore each $S_i$ induces the scalar $Q$ on $W_N$. The kernel is stable under the quantum group action.

[F2] The residue operator and its exact Laurent extension are those of [[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]: $S(fw)=s(f)S(w)+(1-Q)Y_2(f-s(f))/(Y_1-Y_2)w$.

[F3] Each $u_m=Y^{p}v_j$ with $m=j-pe$, $1\le j\le e$, and $Y$ is invertible; the opposite energy is positive exactly for decreasing indices ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]]).



## Verification

**Proof technique:** calculate the actual Laurent two-factor kernel vectors and their symmetric-loop multiples, then use finite dominance followed by inversions for termination.

1.1 Symmetric Laurent multiplication preserves $\ker(S+1)$. If $g=s(g)$, [F2] gives $S(gx)=gS(x)$, since the divided difference of $g$ is zero; this applies also to negative common loop shifts $(Y_1Y_2)^r$. On a diagonal $d_j=v_j\otimes v_j$ one has $S(d_j)=-d_j$. For $j<k$, set $w=v_j\otimes v_k$ and $w'=v_k\otimes v_j$; substitution gives $S(w+q^{-1}w')=-(w+q^{-1}w')$. For $j>k$ the divided differences of $Y_1,Y_2$ give $S(Y_1w)=-qY_2w'$ and $S(Y_2w')=-qY_1w+(Q-1)Y_2w'$, so $Y_1w+q^{-1}Y_2w'$ is a $-1$ eigenvector. These calculations take place in the original Laurent tensor space. Their images vanish in every adjacent pair of slots by [F1]. [F1, F2, F3, given, algebra]

2.1 Diagonal and equal-residue relations. A repeated-index tensor is $(Y_1Y_2)^pd_j$ and hence vanishes. If $l<m$ have the same residue, write $l=j-(r+a)e$, $m=j-re$ with $a>0$. The symmetric multiple $(Y_1Y_2)^r(Y_1^a+Y_2^a)d_j$ is in $\ker(S+1)$ by step 1.1; its image is $u_l\wedge u_m+u_m\wedge u_l$, giving the equal-residue relation. No individual nonsymmetric loop multiplier of a kernel vector has been assumed to preserve the kernel. [step 1.1, F1, F3, algebra]

2.2 Distinct residues without wrapping. Write $l=j-pe$, $m=k-re$ with $j<k$. Then $m-l=(p-r)e+(k-j)=ae+b$, so $p=r+a$ and $b=k-j$. If $a=0$, the symmetric common shift $(Y_1Y_2)^r(w+q^{-1}w')$ gives $u_l\wedge u_m=-q^{-1}u_m\wedge u_l$. If $a>0$, multiply the same kernel vector by the symmetric Laurent polynomial $(Y_1Y_2)^r(Y_1^a+Y_2^a)$. The four resulting images are, with coefficients $1,q^{-1},1,q^{-1}$, respectively $(l,m)$, $(m-ae,l+ae)$, $(l+ae,m-ae)$, $(m,l)$. Their sum is zero, which is precisely the fourth displayed relation. [step 1.1, F1, F2, F3, algebra]

3.1 Distinct residues across the representative boundary. If $j>k$, the same expressions have $p-r=a+1$ and $b=e+k-j$. The wrapped base kernel vector of step 1.1 is $h=Y_1w+q^{-1}Y_2w'$. For $a=0$, its common shift $(Y_1Y_2)^rh$ gives the third displayed relation. For $a>0$, its symmetric multiple $(Y_1Y_2)^r(Y_1^a+Y_2^a)h$ has images $(l,m)$, $(m,l)$, $(l+ae,m-ae)$ and $(m-ae,l+ae)$ with coefficients $1,q^{-1},1,q^{-1}$. Thus it gives the same fourth relation in this case also. Together with step 2.1 this exhausts all residue and Laurent-exponent configurations. [step 1.1, step 2.1, step 2.2, F1, F2, F3, algebra]

4.1 Pair recursion and whole-word termination. In the mixed case the correction indices are $m-b$ and $l+b$, strictly between $l$ and $m$, with gap $ae-b<ae+b$; the first correction pair is already decreasing, and the reverse pair can be rewritten recursively. For a word of length $N$, fix its original interval $[L,U]$ and total sum $T$. Every branch stays among the finitely many integer tuples in $[L,U]^N$ of sum $T$. Sort a tuple decreasingly and list its first $N-1$ prefix sums. Balancing a pair of extremes strictly decreases this list in lexicographic order: the sums of the largest $r$ coordinates cannot increase, and at least one decreases since the sorted multisets differ. A leading adjacent swap preserves this list and decreases by one the number of pairs of positions whose indices are increasing. Hence the lexicographic pair consisting of prefix-sum list and inversion count strictly decreases along each nonzero branch. Its range is finite, so rewriting terminates. Equal adjacent indices vanish; a terminal nonzero word is strictly decreasing. [step 2.1, step 2.2, step 3.1, given, algebra]

5.1 Charts and energy. All coefficients in the displayed relations belong to $A=\mathbb Z[q,q^{-1}]$. Step 4.1 therefore expresses every Laurent tensor-lattice image in the $A$-span of the normal wedges; conversely each normal wedge is such an image. These two lattices equal $W_A$. For independence, take finitely many distinct normal tuples $I_1,\ldots,I_t$ and their raw tensors $t_{I_k}$. By [F2], the Laurent Hecke action is regular at $q=1$, where its residue formula gives $S_i=-P_i$ with $P_i$ the factor flip and its divided-difference term vanishes. Thus $A_N$ specializes to the signed antisymmetrizer. The coefficient matrix of $A_Nt_{I_k}$ on the decreasing raw rows $t_{I_j}$ specializes to the identity: a different normal tuple has a different multiset, and only the identity permutation contributes to its own decreasing row. This minor is nonzero over $\mathbb Q(q)$. A relation $\sum_k c_ku_{I_k}=0$ in the quotient implies $\sum_k c_kA_Nt_{I_k}=0$ by its definition, so the minor forces every $c_k=0$. Consequently the positive chart is the internal direct sum $W_0=\bigoplus_I\mathbb Z[q]u_I$ as asserted. Since $q$ is a unit on $W_A$, $W_A/qW_A=0$. The energy criterion is exactly [F3] and concerns the opposite channel. These computations establish every displayed relation and chart assertion in the Definition, using the kernel contract in [F1]. [step 4.1, F1, F3, given, algebra] ∎

