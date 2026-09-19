---
id: thm-schur-orthogonality-for-compact-lie-groups
kind: theorem
title: Schur orthogonality
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-integration-against-haar-is-invariant-under-translations-and-conjugation, cor-complete-reducibility-for-compact-lie-groups, def-matrix-coefficient-and-character-of-a-compact-group-representation, def-axiom-of-choice, cor-schurs-lemma-for-irreducible-representations, cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integrable-real-and-complex-functions-and-their-integrals, cor-trace-is-invariant-under-similarity, def-self-adjoint-positive-unitary-and-normal-operator, thm-matrix-of-the-adjoint-is-the-conjugate-transpose]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §2, the orthogonality relations for matrix coefficients"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§4.7, Theorem 4.38"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $\mu$, and let $\pi$ and $\sigma$ be irreducible unitary finite-dimensional
complex representations of $G$ of dimensions $d_\pi,d_\sigma$, with orthonormal
bases $(f_i)$ of $V_\pi$ and $(e_k)$ of $V_\sigma$ and matrix coefficient
functions $\pi_{ij},\sigma_{kl}$
([[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).
Then
$$\int_G\pi_{ij}(g)\overline{\sigma_{kl}(g)}\,d\mu(g)=\begin{cases}0&\pi,\sigma\ \text{inequivalent},\\[2pt] \dfrac{\delta_{ik}\delta_{jl}}{d_\pi}&\pi=\sigma\ \text{and }e_k=f_k\ \text{under the fixed identification}.\end{cases}$$

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure $\mu$, irreducible unitary representations $\pi$ on $V_\pi$ with orthonormal basis $(f_i)$ and $\sigma$ on $V_\sigma$ with orthonormal basis $(e_k)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through [L3] and [L5].

[L1] **Schur's lemma.** A nonzero intertwining map between irreducible representations over a field is an isomorphism, and the ring of intertwining endomorphisms of an irreducible representation is a division ring; moreover, every endomorphism of a nonzero finite-dimensional vector space over the algebraically closed field $\mathbb C$ has an eigenvalue ([[cor-schurs-lemma-for-irreducible-representations]], [[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]]).

[L2] The matrix coefficients are $\pi_{ij}(g)=\langle\pi(g)f_j,f_i\rangle$ and $\sigma_{kl}(g)=\langle\sigma(g)e_l,e_k\rangle$; the character of an irreducible representation is a class function ([[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).

[L3] For every integrable $f$ and every $h\in G$, $\int_Gf(gh)\,d\mu(g)=\int_Gf(g)\,d\mu(g)$ and $\int_Gf(x^{-1})\,d\mu(x)=\int_Gf(x)\,d\mu(x)$ ([[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]).

[L4] The integral of an integrable complex function is complex-linear, continuous functions on the compact group are bounded and hence integrable against the finite measure $\mu$, and for a matrix-valued continuous integrand each entry integral exists and the integral of the operator equals the operator built from the entry integrals ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[L5] The trace is invariant under similarity: $\operatorname{tr}(BAB^{-1})=\operatorname{tr}(A)$ for invertible $B$ ([[cor-trace-is-invariant-under-similarity]]).

[L6] If $\sigma$ is unitary for the inner product in which $(e_k)$ is orthonormal, then $\sigma(g)^{-1}=\sigma(g)^*$ for every $g$, and the matrix of $\sigma(g)^*$ in this basis is the conjugate transpose of the matrix of $\sigma(g)$; hence $\sigma(g)^{-1}e_k=\sum_m\overline{\sigma_{km}(g)}\,e_m$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]], [[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).

## Proof

**Proof technique:** direct.

1.1 For $A\in\operatorname{Hom}(V_\sigma,V_\pi)$ define $T(A):=\int_G\pi(g)A\sigma(g)^{-1}\,d\mu(g)$, the entrywise integral of the continuous matrix-valued integrand; by [L4] this is a well-defined element of $\operatorname{Hom}(V_\sigma,V_\pi)$ and $A\mapsto T(A)$ is complex-linear. [L4]

2.1 For every $h\in G$ one has $T(A)\sigma(h)=\pi(h)T(A)$: indeed $T(A)\sigma(h)=\int_G\pi(g)A\sigma(g)^{-1}\sigma(h)\,d\mu(g)=\int_G\pi(g)A\sigma(g^{-1}h)\,d\mu(g)$, and substituting $g=hg'$ in the integral, which the left invariance [L3] permits, gives $\int_G\pi(hg')A\sigma(g'^{-1})\,d\mu(g')=\pi(h)T(A)$. [L3, L4, step 1.1]

2.2 In the special case $V_\sigma=V_\pi=V$ and $\sigma=\pi$, every $A\in\operatorname{End}(V)$ satisfies $\operatorname{tr}T(A)=\operatorname{tr}A$: by [L5] and [L4], $$\operatorname{tr}T(A) =\int_G\operatorname{tr}\bigl(\pi(g)A\pi(g)^{-1}\bigr)\,d\mu(g) =\int_G\operatorname{tr}A\,d\mu(g)=\operatorname{tr}A,$$ because $\mu$ is a probability measure. [L4, L5, step 1.1]

2.3 Let $A=\langle\mathord\cdot,e_l\rangle f_j\in \operatorname{Hom}(V_\sigma,V_\pi)$. Then $A\sigma(g)^{-1}e_k=\overline{\sigma_{kl}(g)}\,f_j$ by [L6], and for all $i,k$, $$\langle T(A)e_k,f_i\rangle =\int_G\pi_{ij}(g)\overline{\sigma_{kl}(g)}\,d\mu(g).$$ [L2, L4, L6, step 1.1]

3.1 If $\pi$ and $\sigma$ are inequivalent, then $T(A)=0$ for every $A$: by step 2.1 the map $T(A)$ intertwines the irreducible $\sigma$ with the irreducible $\pi$, so if it were nonzero it would be an isomorphism by Schur's lemma [L1], contradicting inequivalence. [L1, step 2.1]

3.2 If $V_\sigma=V_\pi=V$ and $\sigma=\pi$, then $T(A)=\lambda(A)\operatorname{id}_V$ for every $A$: by step 2.1 the endomorphism $T(A)$ intertwines the irreducible representation $\pi$ with itself, so the intertwining endomorphisms form a division ring [L1]; if $T(A)\ne0$, then $T(A)$ has an eigenvalue $\lambda$ by [L1] applied to the nonzero finite-dimensional complex space $V$, and $T(A)-\lambda\operatorname{id}_V$ is a non-injective intertwining endomorphism, hence $0$ in the division ring, so $T(A)=\lambda\operatorname{id}_V$ (the case $T(A)=0$ is the same statement with $\lambda=0$). [L1, step 2.1]

4.1 In the equal-representation case of the statement, use the fixed identification for which $V_\sigma=V_\pi=V$, $\sigma=\pi$, and $e_k=f_k$. Then the rank-one operator $A$ of step 2.3 is an endomorphism with $\operatorname{tr}A=\delta_{jl}$. Combining steps 3.2 and 2.2 gives $T(A)=\lambda(A)\operatorname{id}_V$ with $\lambda(A)=\operatorname{tr}A/d_\pi=\delta_{jl}/d_\pi$, and hence $\langle T(A)e_k,f_i\rangle=\delta_{ik}\delta_{jl}/d_\pi$. [step 2.2, step 2.3, step 3.2]

5.1 Comparing step 2.3 with step 4.1 yields $\int_G\pi_{ij}(g)\overline{\sigma_{kl}(g)}\,d\mu(g) =\delta_{ik}\delta_{jl}/d_\pi$ in the equal-representation, aligned-basis case, and comparing step 2.3 with step 3.1 yields zero in the inequivalent case. This is the claimed orthogonality relation, and the Axiom of Choice entered only through the normalized Haar measure of [L3]. [A1, step 2.3, step 3.1, step 4.1] ∎
