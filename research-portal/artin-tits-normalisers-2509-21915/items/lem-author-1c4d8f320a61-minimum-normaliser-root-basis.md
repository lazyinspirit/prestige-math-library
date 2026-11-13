---
id: lem-author-1c4d8f320a61-minimum-normaliser-root-basis
kind: lemma
title: Minimum representatives of normaliser cosets preserve the simple roots
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-normaliser-complement-artin-tits-normalisers
  - math:def-arbitrary-rank-coxeter-system-and-bruhat-order
dependency_roles:
  def-normaliser-complement-artin-tits-normalisers: mathematical-premise
  math:def-arbitrary-rank-coxeter-system-and-bruhat-order: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root systems, Tits cones and imaginary
        cones of Brink–Howlett groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: §1.4, PDF p.4; Proposition 2.10(b),(d) and Proposition 2.11(c), PDF p.23
      statement: Dyer–Gimenez, Proposition 2.10(b),(d), states that for a reflection
        subgroup $U$ and $x\in W$, the coset $xU$ has a unique minimum-length
        element $d$ and the canonical simple system satisfies
        $\Pi_{xUx^{-1}}=d\Pi_U$. Proposition 2.11(c) states that for the
        standard parabolic subgroup $W_J$, its canonical simple system is
        $\Pi_{W_J}=A_J$. Here the canonical simple system is the distinguished
        positive simple-root system of the reflection subgroup in the ambient
        based root system.
      hypotheses: Arbitrary-rank Coxeter system with standard based root system;
        arbitrary subset of simple roots; W_J is a reflection subgroup. No
        sphericity or finite-rank assumption.
      reading_limits: Checked the retrieved v1 PDF text in §§1.3–1.4, §1.7 and §2.8,
        Proposition 2.10(b),(d) and Proposition 2.11(c), PDF pp.3–5 and 22–23,
        including the displayed proof/reference paragraphs relevant to the
        imported assertions. Only the exact stated inputs and their application
        are checked; the older works cited there were not read, and no
        reconstruction of their proofs or visual PDF inspection is claimed.
        Infinite rank is explicitly permitted in §1.4.
dependency_level: 11
---

## Statement

Let $(W,S)$ be an arbitrary-rank Coxeter system in its standard real root representation, with simple roots $\Pi=\{\alpha_i:i\in\Gamma_0\}$ and length $\ell$. Fix $J\subseteq\Gamma_0$, put $A_J=\{\alpha_j:j\in J\}$ and $W_J=\langle s_j:j\in J\rangle$, and write $M=\operatorname{Norm}_W(W_J)$ and $N_J=\{n\in W:nA_J=A_J\}$. These are the conventions of [[def-normaliser-complement-artin-tits-normalisers]]; $N_J$ is a subgroup of $M$.

For every $g\in M$, the coset $gW_J$ has a unique minimum-length element $d$, and $dA_J=A_J$. In particular $d\in N_J$.

## External input

Dyer–Gimenez, Proposition 2.10(b),(d), states that for a reflection subgroup $U$ and $x\in W$, the coset $xU$ has a unique minimum-length element $d$ and the canonical simple system satisfies $\Pi_{xUx^{-1}}=d\Pi_U$. Proposition 2.11(c) states that for the standard parabolic subgroup $W_J$, its canonical simple system is $\Pi_{W_J}=A_J$. Here the canonical simple system is the distinguished positive simple-root system of the reflection subgroup in the ambient based root system.

## Facts & Assumptions

[F99] Dyer–Gimenez, Proposition 2.10(b),(d), states that for a reflection subgroup $U$ and $x\in W$, the coset $xU$ has a unique minimum-length element $d$ and the canonical simple system satisfies $\Pi_{xUx^{-1}}=d\Pi_U$. Proposition 2.11(c) states that for the standard parabolic subgroup $W_J$, its canonical simple system is $\Pi_{W_J}=A_J$. Here the canonical simple system is the distinguished positive simple-root system of the reflection subgroup in the ambient based root system.

## Proof

**Given:** The data in the statement. **Goal:** Prove its conclusion.

[F1] The declared suppliers provide the subgroup and previously established assertions:

[[def-normaliser-complement-artin-tits-normalisers]]

[[math:def-arbitrary-rank-coxeter-system-and-bruhat-order]]



Dyer–Gimenez, Proposition 2.10(b),(d), states that for a reflection subgroup $U$ and $x\in W$, the coset $xU$ has a unique minimum-length element $d$ and the canonical simple system satisfies $\Pi_{xUx^{-1}}=d\Pi_U$. Proposition 2.11(c) states that for the standard parabolic subgroup $W_J$, its canonical simple system is $\Pi_{W_J}=A_J$. Here the canonical simple system is the distinguished positive simple-root system of the reflection subgroup in the ambient based root system.



**Given:** The reflection subgroup and normalising element in the statement.

1.1 Apply the external input to the reflection subgroup $U=W_J$ and $x=g$. It gives a unique minimum $d$ in $gW_J$ and $\Pi_{gW_Jg^{-1}}=d\Pi_{W_J}$. Since $g$ normalises $W_J$, the left side is $\Pi_{W_J}$. The standard-parabolic part of the same input identifies this canonical simple system with $A_J$. Thus $A_J=dA_J$. [F1, given, F99]

2.1 The equality says exactly that $d\in N_J$, by [F1]. No part of the argument requires $J$ or $S$ finite. [F1, step 1.1] ∎

## Source notes

The displayed external input is imported from the exact independent source locations recorded above. The argument applies those assertions to a standard parabolic subgroup; it does not reconstruct the source proofs or use the article under study as a prerequisite.
