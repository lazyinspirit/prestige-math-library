---
title: Each normaliser coset has exactly one root-permuting representative
status: draft
research_item: lem-author-1c4d8f320a61-unique-normaliser-representatives
dependency_level: 12
---

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)
- [lem-author-1c4d8f320a61-minimum-normaliser-root-basis](item-lem-author-1c4d8f320a61-minimum-normaliser-root-basis)
- [lem-author-1c4d8f320a61-root-permutation-minimum](item-lem-author-1c4d8f320a61-root-permutation-minimum)


## Statement

Let $(W,S)$ be an arbitrary-rank Coxeter system in its standard real root representation, with simple roots $\Pi=\{\alpha_i:i\in\Gamma_0\}$ and length $\ell$. Fix $J\subseteq\Gamma_0$, put $A_J=\{\alpha_j:j\in J\}$ and $W_J=\langle s_j:j\in J\rangle$, and write $M=\operatorname{Norm}_W(W_J)$ and $N_J=\{n\in W:nA_J=A_J\}$. These are the conventions of [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers); $N_J$ is a subgroup of $M$.

Each coset $gW_J$ with $g\in M$ contains exactly one element of $N_J$.

## Facts & Assumptions

[F1] The declared suppliers provide the subgroup and previously established assertions:

## Proof

**Given:** The data in the statement. **Goal:** Prove its conclusion.

[def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)

[lem-author-1c4d8f320a61-minimum-normaliser-root-basis](item-lem-author-1c4d8f320a61-minimum-normaliser-root-basis)

[lem-author-1c4d8f320a61-root-permutation-minimum](item-lem-author-1c4d8f320a61-root-permutation-minimum)

1.1 The minimum-normaliser-root-basis supplier in [F1] gives an element of $N_J$ in every indicated coset. This proves existence of a root-permuting representative. [F1]

2.1 The root-permutation-minimum supplier in [F1] says that every element of $N_J$ in this coset must be its unique minimum-length element. Thus any two root-permuting representatives in that coset are equal. Together with step 1.1, this proves existence and uniqueness. [F1, step 1.1] ∎
