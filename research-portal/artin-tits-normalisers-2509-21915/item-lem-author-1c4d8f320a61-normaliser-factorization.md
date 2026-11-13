---
title: Every normalising element factors through the root-permuting subgroup
status: draft
research_item: lem-author-1c4d8f320a61-normaliser-factorization
dependency_level: 12
---

## Prerequisites

- [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)
- [lem-author-1c4d8f320a61-minimum-normaliser-root-basis](item-lem-author-1c4d8f320a61-minimum-normaliser-root-basis)
- [math:def-coset](https://alphabetamath.cc/item/def-coset)


## Statement

Let $(W,S)$ be an arbitrary-rank Coxeter system in its standard real root representation, with simple roots $\Pi=\{\alpha_i:i\in\Gamma_0\}$ and length $\ell$. Fix $J\subseteq\Gamma_0$, put $A_J=\{\alpha_j:j\in J\}$ and $W_J=\langle s_j:j\in J\rangle$, and write $M=\operatorname{Norm}_W(W_J)$ and $N_J=\{n\in W:nA_J=A_J\}$. These are the conventions of [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers); $N_J$ is a subgroup of $M$.

$M=W_JN_J$.

## Facts & Assumptions

[F1] The declared suppliers provide the subgroup and previously established assertions:

[F2] For a subgroup $H$ of a group $G$ and $g\in G$, the left coset is $gH=\{gh:h\in H\}$. [math:def-coset](https://alphabetamath.cc/item/def-coset)

## Proof

**Given:** The data in the statement. **Goal:** Prove its conclusion.

[def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)

[lem-author-1c4d8f320a61-minimum-normaliser-root-basis](item-lem-author-1c4d8f320a61-minimum-normaliser-root-basis)

1.1 Let $g\in M$. By [F1], the minimum $d$ in $gW_J$ belongs to $N_J$. By [F2], write $d=gv$ with $v\in W_J$; then $g=dv^{-1}$. Put $u=v^{-1}\in W_J$. Since $d$ normalises $W_J$, the element $h=dud^{-1}$ lies in $W_J$ and $g=hd$. This proves $M\subseteq W_JN_J$. [F1, F2, algebra]

2.1 Both $W_J$ and $N_J$ lie in the normaliser subgroup $M$ by [F1], so every product of an element of the former and an element of the latter belongs to $M$. This proves the reverse inclusion. [F1, step 1.1] ∎
