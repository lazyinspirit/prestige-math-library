---
title: The root-permuting subgroup intersects the parabolic trivially
status: draft
research_item: lem-author-1c4d8f320a61-normaliser-trivial-intersection
dependency_level: 12
---

## Prerequisites

- [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)
- [lem-author-1c4d8f320a61-root-permutation-minimum](item-lem-author-1c4d8f320a61-root-permutation-minimum)
- [math:def-arbitrary-rank-coxeter-system-and-bruhat-order](https://alphabetamath.cc/item/def-arbitrary-rank-coxeter-system-and-bruhat-order)


## Statement

Let $(W,S)$ be an arbitrary-rank Coxeter system in its standard real root representation, with simple roots $\Pi=\{\alpha_i:i\in\Gamma_0\}$ and length $\ell$. Fix $J\subseteq\Gamma_0$, put $A_J=\{\alpha_j:j\in J\}$ and $W_J=\langle s_j:j\in J\rangle$, and write $M=\operatorname{Norm}_W(W_J)$ and $N_J=\{n\in W:nA_J=A_J\}$. The subgroup $N_J$ lies in $M$.

$W_J\cap N_J=\{1\}$.

## Statement references

[def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)

[math:def-arbitrary-rank-coxeter-system-and-bruhat-order](https://alphabetamath.cc/item/def-arbitrary-rank-coxeter-system-and-bruhat-order)

## Facts & Assumptions

[F1] By [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers), $N_J=\{n\in W:nA_J=A_J\}$ is a subgroup of $M=\operatorname{Norm}_W(W_J)$, with the root and parabolic conventions in the statement.

[F2] Every $n\in N_J$ is the unique minimum-length element of $nW_J$, by [lem-author-1c4d8f320a61-root-permutation-minimum](item-lem-author-1c4d8f320a61-root-permutation-minimum).

[F3] By [math:def-arbitrary-rank-coxeter-system-and-bruhat-order](https://alphabetamath.cc/item/def-arbitrary-rank-coxeter-system-and-bruhat-order), $\ell(w)$ is the least number of simple generators in a word representing $w$, and the empty word represents $1$. Thus $\ell$ is nonnegative, $\ell(1)=0$, and $\ell(w)=0$ implies $w=1$, since the only word with zero letters is the empty word. This definition allows arbitrary rank.

## Proof

**Given:** The data in the statement. **Goal:** Prove its conclusion.

1.1 Let $n\in W_J\cap N_J$. By [F2], $n$ is the unique minimum-length element of $nW_J=W_J$. The identity belongs to this coset and has length zero by [F3]; nonnegativity therefore gives $\ell(n)=0$. [F2, F3, given]

2.1 By [F3] and step 1.1, $n=1$. Conversely the identity preserves $A_J$ and belongs to $W_J$, so by [F1] it lies in both subgroups. Their intersection is therefore exactly $\{1\}$. [F1, F3, step 1.1] ∎
