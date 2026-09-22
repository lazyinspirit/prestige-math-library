---
id: thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem
kind: theorem
title: Multiplication operator form of the bounded normal spectral theorem
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces, thm-cyclic-spectral-representation, def-cyclic-vector-and-cyclic-normal-operator, thm-continuous-functional-calculus-for-bounded-normal-operators, def-c-star-algebra-generated-by-a-normal-operator, lem-scalar-and-complex-measures-from-a-pvm, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-separable-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.7 and Theorem 5.84, printed pp.293–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Andreas Kriegl, Funktionalanalysis, §8.61, printed pp.196–198"
      url: "https://www.mat.univie.ac.at/~kriegl/Skripten/2019SSe.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$, with spectral projection valued measure $E$ on $\sigma(T)$. Then
there is a family of nonzero finite positive regular Borel measures
$(\mu_j)_{j\in J}$ on $\sigma(T)$ and a unitary operator

$$U:\bigoplus_{j\in J}L^2(\sigma(T),\mu_j)\longrightarrow H$$

such that $U(\bigoplus_jM_z)U^{-1}=T$, where $M_z$ is multiplication by the
coordinate function on each summand. Concretely one may take a family
$(x_j)_{j\in J}$ of vectors with $H=\bigoplus_jH_{x_j}$ and
$\mu_j=E_{x_j}=\langle E(\cdot)x_j,x_j\rangle$, and $U=\bigoplus_jU_j$ with
$U_j[f]=f(T)x_j$ the cyclic representation of
[[thm-cyclic-spectral-representation]]. If in addition $H$ is separable, the
index set may be taken finite or countable.

## Facts & Assumptions

[A1] There is a family $(H_j)_{j\in J}$ of pairwise orthogonal nonzero closed $T$-reducing subspaces, each cyclic for $T|_{H_j}$, with the closed span of the union equal to $H$; in the separable case the family may be taken finite or countable ([[lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces]], [[def-separable-space]]).

[A2] If $x\in H$ has cyclic subspace $H_x$, then $U_x[f]:=f(T)x$ extends to a unitary $U_x:L^2(\sigma(T),E_x)\to H_x$ with $U_xM_z=TU_x$, where $E_x$ is the finite positive regular measure $\langle E(\cdot)x,x\rangle$ ([[thm-cyclic-spectral-representation]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[A3] If $H_j$ reduces $T$ and $R_j:=T|_{H_j}$, then $T^*|_{H_j}=R_j^*$ and every star-polynomial restricts by $q(T,T^*)|_{H_j}=q(R_j,R_j^*)$. The normal calculus maps onto $C^*(I,R_j)$, the norm closure of those restricted star-polynomials ([[def-cyclic-vector-and-cyclic-normal-operator]], [[thm-continuous-functional-calculus-for-bounded-normal-operators]], [[def-c-star-algebra-generated-by-a-normal-operator]]).

[A4] Orthogonal direct sums of Hilbert spaces: vectors with pairwise orthogonal component subspaces have squares of norms summing, and a direct sum of unitaries between corresponding summands is a unitary between the Hilbert sums; the direct sum of multiplication operators acts componentwise ([[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A5] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded normal operator $T$ with spectral PVM $E$; a family $(H_j)$ as in the maximal-orthogonal-family lemma, with cyclic vectors $x_j\in H_j$.

1.1 For each $j$ put $R_j:=T|_{H_j}$. Since $H_j$ reduces $T$, every star-polynomial in $T,T^*$ preserves $H_j$, and norm approximation in $C^*(I,T)$ shows $f(T)x_j\in H_j$ for every $f\in C(\sigma(T))$; hence $H_{x_j}\subseteq H_j$. Conversely, if $g\in C(\sigma(R_j))$, choose star-polynomials $q_n(R_j,R_j^*)\to g(R_j)$ using the range description of the calculus. Then $q_n(R_j,R_j^*)x_j=q_n(T,T^*)x_j\in H_{x_j}$, so closedness gives $g(R_j)x_j\in H_{x_j}$. Since $x_j$ is cyclic for $R_j$, these vectors have dense span in $H_j$, whence $H_j\subseteq H_{x_j}$ and therefore $H_{x_j}=H_j$. [A1, A3]

2.1 For each $j$ the cyclic representation gives a unitary $U_j:L^2(\sigma(T),E_{x_j})\to H_j$ with $U_j[f]=f(T)x_j$ on continuous $f$ and $U_jM_z=TU_j$. [step 1.1, A2]

3.1 The direct sum $U:=\bigoplus_jU_j$ maps $\bigoplus_jL^2(\sigma(T),E_{x_j})$ onto the closed span $\bigoplus_jH_j=H$: it is isometric because $\|(f_j)_j\|^2=\sum_j\|f_j\|^2=\sum_j\|U_jf_j\|^2$, and it is surjective because each $U_j$ is onto $H_j$ and the Hilbert sum of the $H_j$ is $H$. [step 2.1, A1, A4]

3.2 Intertwining: $U(\bigoplus_jM_z)(f_j)_j=U(M_zf_j)_j=(U_jM_zf_j)_j=(TU_jf_j)_j=T\,U(f_j)_j$, so $U(\bigoplus_jM_z)U^{-1}=T$. [step 2.1, A2, A4]

3.3 In the separable case the family from the maximal-orthogonal-family lemma may be chosen finite or countable, and the construction above then exhibits $H$ as a finite or countable orthogonal sum of cyclic $L^2$ summands. [step 2.1, A1]

4.1 $T$ is therefore unitarily equivalent to the coordinate multiplication on an orthogonal sum of $L^2$-spaces over the scalar spectral measures of cyclic vectors, with a finite or countable index set in the separable case. [step 3.1, step 3.2, step 3.3, A5] ∎
