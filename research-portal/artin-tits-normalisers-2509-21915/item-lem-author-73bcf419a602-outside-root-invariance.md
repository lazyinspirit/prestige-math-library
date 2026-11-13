---
title: Outside parabolic roots form an invariant set
status: draft
research_item: lem-author-73bcf419a602-outside-root-invariance
dependency_level: 8
---

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)


## Statement

Let $(W,S)$ be a Coxeter system indexed by a possibly infinite set $\Gamma_0$, acting geometrically on the real vector space $V$ with simple-root basis $(\alpha_i)_{i\in\Gamma_0}$. For $L\subseteq\Gamma_0$, write $W_L=\langle s_i:i\in L\rangle$ and $\Phi_L=\{u\alpha_i:u\in W_L,\ i\in L\}$. Let $I\subseteq\Gamma_0$ and $a\in\Gamma_0\setminus I$, and define $I+a=I\cup\{a\}$ and $D=\Phi_{I+a}\setminus\Phi_I$. Then $\alpha_a\in D$ and $wD=D$ for every $w\in W_I$.

## Statement references

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

[def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)

## Facts & Assumptions

**Given:** the Coxeter system, geometric action, parabolic subgroups and root sets in the Statement. **Goal:** prove $\alpha_a\in D$ and $wD=D$ for all $w\in W_I$.

[F1] The vectors $(\alpha_i)_{i\in\Gamma_0}$ form a basis of $V$, every vector has finite support, and $s_i(v)=v-2B(v,\alpha_i)\alpha_i$, by [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers). Define $V_I$ to be the subspace consisting of all finite real linear combinations of $\alpha_i$ with $i\in I$.

[F2] For each $L\subseteq\Gamma_0$, the definitions $W_L=\langle s_i:i\in L\rangle$ and $\Phi_L=\{u\alpha_i:u\in W_L,\ i\in L\}$ are supplied by [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers). In particular, elements of $W_L$ are finite words in these involutive generators.

## Proof

**Proof technique:** direct.

1.1 For $i\in I$ and $v\in V_I$, the reflection formula gives $s_i(v)\in V_I$, since both $v$ and $\alpha_i$ belong to $V_I$. Thus every finite $W_I$-word preserves $V_I$, so $\Phi_I\subseteq V_I$. Since $a\in I+a$, the identity word shows $\alpha_a\in\Phi_{I+a}$. Basis independence and $a\notin I$ give $\alpha_a\notin V_I$, hence $\alpha_a\notin\Phi_I$. Therefore $\alpha_a\in D$. [F1, F2, given]

2.1 Since $I\subseteq I+a$, every $W_I$-word is a $W_{I+a}$-word, giving $W_I\leq W_{I+a}$. For $L=I$ or $L=I+a$, $w\in W_I$ and $u\alpha_i\in\Phi_L$, one has $w(u\alpha_i)=(wu)\alpha_i\in\Phi_L$. The same argument for $w^{-1}$ yields $w\Phi_L=\Phi_L$. If $\beta\in D$, then $w\beta\in\Phi_{I+a}$; membership of $w\beta$ in $\Phi_I$ would imply $\beta\in\Phi_I$ by applying $w^{-1}$, a contradiction. Thus $wD\subseteq D$, and applying this inclusion to $w^{-1}$ gives $wD=D$. [F2, given] ∎
