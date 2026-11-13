---
title: Root-permuting elements are minimum coset representatives
status: draft
research_item: lem-author-1c4d8f320a61-root-permutation-minimum
dependency_level: 11
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root systems, Tits cones and imaginary
        cones of Brink–Howlett groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: §1.4, PDF p.4; Proposition 2.10(b),(c) and Proposition 2.11(c), PDF p.23
      statement: Dyer–Gimenez, Proposition 2.10(b),(c), states that a
        reflection-subgroup coset $xU$ has a unique minimum-length element and
        that an element $y$ of it is that minimum exactly when
        $y\Pi_U\subseteq\Phi^+$. Proposition 2.11(c) identifies $\Pi_{W_J}=A_J$
        for each standard parabolic subgroup. These assertions hold without
        finite rank by §1.4.
      hypotheses: Arbitrary-rank Coxeter system with standard based root system;
        arbitrary subset of simple roots; W_J is a reflection subgroup. No
        sphericity or finite-rank assumption.
      reading_limits: Checked the retrieved v1 PDF text of §§1.3–1.4, §1.7, the §2.8
        introduction, and Proposition 2.10(b),(c) and Proposition 2.11(c), PDF
        pp.3–4 and 22–23, for the root conventions, arbitrary-rank scope and
        exact imported criterion. The proof/reference paragraphs adjacent to
        these propositions were inspected; their cited older works were not
        read, and no reconstruction of their proofs is claimed.
---

## Prerequisites

- [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [` Matthew Dyer and Harrison Gimenez, Root systems, Tits cones and imaginary cones of Brink–Howlett groupoids · §1.4, PDF p.4; Proposition 2.10(b),(c) and Proposition 2.11(c), PDF p.23 `](https://arxiv.org/abs/2606.12937v1)


## Statement

Let $(W,S)$ be an arbitrary-rank Coxeter system in its standard real root representation, with simple roots $\Pi=\{\alpha_i:i\in\Gamma_0\}$ and length $\ell$. Fix $J\subseteq\Gamma_0$, put $A_J=\{\alpha_j:j\in J\}$ and $W_J=\langle s_j:j\in J\rangle$, and write $M=\operatorname{Norm}_W(W_J)$ and $N_J=\{n\in W:nA_J=A_J\}$. These are the conventions of [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers); $N_J$ is a subgroup of $M$.

Every $n\in N_J$ is the unique minimum-length element of $nW_J$.

## External input

Dyer–Gimenez, Proposition 2.10(b),(c), states that a reflection-subgroup coset $xU$ has a unique minimum-length element and that an element $y$ of it is that minimum exactly when $y\Pi_U\subseteq\Phi^+$. Proposition 2.11(c) identifies $\Pi_{W_J}=A_J$ for each standard parabolic subgroup. These assertions hold without finite rank by §1.4.

## Facts & Assumptions

[F1] By [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers), $N_J=\{n\in W:nA_J=A_J\}$ is a subgroup of $M=\operatorname{Norm}_W(W_J)$.

[F2] The canonical simple-system identification and minimum-coset positivity criterion are the imported assertions in the External input section above.

[F3] The arbitrary-rank conventions in [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers) define $\ell(w)$ as the least number of simple generators representing $w$, $\Phi=\{w\alpha_i:w\in W,\ i\in\Gamma_0\}$, and $\Phi^+=\Phi\cap V_+$, where $V_+$ consists of finite nonnegative linear combinations of the simple-root basis. In particular $A_J\subseteq\Phi^+$.

## Proof

**Given:** The data in the statement. **Goal:** Prove its conclusion.

1.1 By [F1], $nA_J=A_J$, and [F3] gives $A_J\subseteq\Phi^+$. The imported identification $\Pi_{W_J}=A_J$ in [F2] therefore gives $n\Pi_{W_J}\subseteq\Phi^+$. [F1, F2, F3]

2.1 Apply the imported positivity criterion in [F2] to the reflection subgroup $W_J$ and the element $n\in nW_J$. By step 1.1 its positivity condition holds, so $n$ is the unique minimum-length element of $nW_J$, as claimed. [F2, step 1.1] ∎

## Source notes

The displayed external input is imported from the exact independent source locations recorded above. The argument applies those assertions to a standard parabolic subgroup; it does not reconstruct the source proofs or use the article under study as a prerequisite.
