---
title: Finite roots and finite Coxeter groups at finite rank
status: published
research_item: lem-author-73bcf419a602-finite-root-finiteness
dependency_level: 8
---

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)
- [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)


## Statement

In the arbitrary-rank setting of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers) and [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers), let $L\subseteq\Gamma_0$ be finite. Then $W_L$ is finite if and only if $\Phi_L$ is finite.

## Facts & Assumptions

**Given:** finite $L\subseteq\Gamma_0$, the root orbit $\Phi_L$ of [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers) in the geometric representation of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers). Put $V_L=\operatorname{span}_{\mathbb R}\{\alpha_i:i\in L\}\subseteq V$; the vectors $\alpha_i$ for $i\in L$ form a basis of $V_L$.

[F1] The Coxeter group presented on $L$ with restricted matrix $m_L(i,j)=m(s_i,s_j)$ is isomorphic to $W_L$ by the map sending its generator indexed by $i$ to $s_i$, by [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword), part 1.

[F2] The canonical reflection representation of a Coxeter group with finitely many generators is faithful, by [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness), part 3.

## Proof

**Given:** finite $L\subseteq\Gamma_0$, the root orbit $\Phi_L$ of [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers) in the geometric representation of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers). Put $V_L=\operatorname{span}_{\mathbb R}\{\alpha_i:i\in L\}\subseteq V$; the vectors $\alpha_i$ for $i\in L$ form a basis of $V_L$.

[F1] The Coxeter group presented on $L$ with restricted matrix $m_L(i,j)=m(s_i,s_j)$ is isomorphic to $W_L$ by the map sending its generator indexed by $i$ to $s_i$, by [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword), part 1.

[F2] The canonical reflection representation of a Coxeter group with finitely many generators is faithful, by [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness), part 3.



**Goal:** Establish the assertion in the Statement.

**Proof technique:** direct.

1.1 If $W_L$ is finite, the expression $\Phi_L=\{w\alpha_i:w\in W_L,i\in L\}$ exhibits $\Phi_L$ as the image of the finite set $W_L\times L$. If $L$ is empty, $\Phi_L$ is empty and $W_L$ is the identity group, so both are finite. [given]

1.2 For $i\in L$ and $v\in V_L$, the ambient reflection formula gives $s_i v=v-2B(v,\alpha_i)\alpha_i\in V_L$. Since $s_i^2=1$, each such generator preserves $V_L$ bijectively, and hence $W_L$ acts on $V_L$. The restricted form $B|_{V_L\times V_L}$ has exactly the Coxeter-form entries for $m_L$. Under the basis identification sending the canonical vector indexed by $i$ to $\alpha_i$, these generator actions are therefore the canonical simple reflections for $m_L$. The isomorphism in [F1] consequently identifies the restricted action with that canonical representation on every group element. Since $L$ is finite, [F2] makes the restricted action faithful. [given, F1, F2, algebra]

2.1 Conversely, suppose $\Phi_L$ is finite. For $w,u\in W_L$ and $i\in L$, one has $w(u\alpha_i)=(wu)\alpha_i\in\Phi_L$; applying the same observation to $w^{-1}$ shows that $w$ permutes $\Phi_L$. This gives a homomorphism from $W_L$ to the finite permutation group of $\Phi_L$. Every $\alpha_i$ for $i\in L$ belongs to $\Phi_L$, by taking $u=1$. An element of the kernel thus fixes the basis of $V_L$ pointwise and, by linearity, acts identically on $V_L$. The faithfulness established in step 1.2 forces that element to be the identity. The permutation homomorphism is injective, so $W_L$ is finite. Together with step 1.1 this proves the equivalence. [given, step 1.1, step 1.2, algebra] ∎
