---
id: thm-peter-weyl-for-compact-lie-groups
kind: theorem
title: Peter–Weyl theorem
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-schur-orthogonality-for-compact-lie-groups, cor-complete-reducibility-for-compact-lie-groups, def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group, lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact, lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces, lem-compact-lie-groups-admit-central-continuous-approximate-identities, thm-hilbert-space-fourier-expansion, thm-orthogonal-decomposition-by-a-closed-subspace, def-axiom-of-choice, def-matrix-coefficient-and-character-of-a-compact-group-representation, def-dual-complex-representation]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, Theorem 4.20 with Lemmas 4.17–4.19 and Corollary 4.21"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z"
proof_strategy: direct
landmark: true
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $dg$. Then the normalized matrix coefficients
$\sqrt{d_\pi}\,\pi_{ij}$, over a set of representatives $(\pi,V_\pi)$ of the
equivalence classes of irreducible unitary finite-dimensional complex
representations and orthonormal bases of each $V_\pi$, form an orthonormal
Hilbert basis of $L^2(G)$; moreover the $\pi$-isotypic summand of the left
regular representation occurs with multiplicity $\dim\pi$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure $dg$, and the left and right regular representations on $L^2(G)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar measure, the Hilbert-space projection/basis theory and the compact-spectral theory cited.

[L1] Schur orthogonality: with $\pi_{ij}(g)=\langle\pi(g)e_j,e_i\rangle$, the family $\{\sqrt{d_\pi}\pi_{ij}\}$ over inequivalent irreducible unitary $\pi$ is orthonormal in $L^2(G)$ ([[thm-schur-orthogonality-for-compact-lie-groups]], [[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).

[L2] Left and right translation of a matrix coefficient of $\pi$ is a linear combination of matrix coefficients of $\pi$: $L_x\pi_{ij}(g)=\pi_{ij}(x^{-1}g)=\sum_k\pi_{ik}(x^{-1})\pi_{kj}(g)$ and $R_x\pi_{ij}(g)=\sum_k\pi_{kj}(x)\pi_{ik}(g)$; inversion sends $\pi_{ij}$ to $\overline{\pi_{ji}}$; the contragredient action is $\pi^*(x)f=f\circ\pi(x^{-1})$; and every finite-dimensional continuous complex representation of $G$ is a direct sum of irreducible ones ([[def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group]], [[def-dual-complex-representation]], [[cor-complete-reducibility-for-compact-lie-groups]]).

[L3] For $k\in C(G)$, $T_k$ is compact, commutes with both regular actions, and satisfies $T_k^*=T_{k^*}$; if $k=k^*$ its nonzero eigenspaces are finite-dimensional, invariant under both regular actions, and the closed span of the eigenspaces is the closure of the range ([[lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact]], [[lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces]]).

[L4] $C(G)$ is dense in $L^2(G)$, both regular actions are strongly continuous, and there are central, inversion-invariant, nonnegative continuous $k_n$ of integral one with $T_{k_n}F\to F$ in $L^2$ for every $F$; closed subspaces invariant under the regular actions are stable under the convolution operators with central kernels, under conjugation averaging and under inversion ([[lem-compact-lie-groups-admit-central-continuous-approximate-identities]]).

[L5] In a Hilbert space, the finite-subset net of coefficients along a complete orthonormal family converges to the vector ([[thm-hilbert-space-fourier-expansion]]). Every closed subspace $M$ gives the orthogonal decomposition $H=M\oplus M^\perp$; consequently a proper closed subspace has nonzero orthogonal complement ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the family $\mathcal B=\{\sqrt{d_\pi}\pi_{ij}\}$ is orthonormal in $L^2(G)$; let $U$ be its closed linear span. [L1]

2.1 $U$ is stable under the left and right regular actions, under inversion, and under conjugation: by [L2] each $L_x$, $R_x$, inversion applied to a matrix coefficient is a finite linear combination of matrix coefficients of the same irreducible $\pi$, and conjugation is a composite of a left and a right translation; stability of the closed span follows by continuity. Hence $U^\perp$ has the same stability properties. [L2, step 1.1]

3.1 Suppose $U\ne L^2(G)$; by [L5] choose a nonzero $H\in U^\perp$. By [L4] the convolutions $H_n:=T_{k_n}H$ converge to $H$ in $L^2$, are continuous, and lie in $U^\perp$ because $U^\perp$ is closed and stable under convolution with central kernels; choose $n$ with $F_1:=H_n\ne0$. [L4, L5, step 2.1]

4.1 Replacing $F_1$ by $L_xF_1$ and multiplying by a unimodular scalar, we may assume $F_1(e)$ is real and nonzero: $F_1$ is continuous and nonzero, so there is $x$ with $F_1(x)\ne0$, and $L_{x^{-1}}F_1(e)=F_1(x)$; the adjusted function still lies in $U^\perp$ by step 2.1. [L4, step 3.1]

5.1 Conjugation averaging and Hermitian symmetrisation keep the functions continuous, in $U^\perp$, and nonvanishing at $e$: set $F_2(x):=\int_GF_1(yxy^{-1})\,dy$ and $F(x):=F_2(x)+\overline{F_2(x^{-1})}$; then $F$ is continuous, central, Hermitian, satisfies $F(e)=2F_1(e)\ne0$, and lies in $U^\perp$ by [L4] and step 2.1, so $F\ne0$. [L4, step 4.1]

6.1 The operator $T_F$ is a nonzero compact self-adjoint convolution commuting with both regular actions: self-adjointness is the kernel identity $F^*=F$ of [L3], compactness is [L3], and commutation with translations holds because $F$ is central. By the spectral theorem in [L3] some nonzero eigenvalue $\lambda$ has a finite-dimensional eigenspace $E_\lambda$ invariant under both regular actions. [L3, step 5.1]

7.1 Restricting the left regular representation to $E_\lambda$ and using complete reducibility from [L2], choose an irreducible subrepresentation $W\subseteq E_\lambda$ with orthonormal basis $f_1,\dots,f_d$; its diagonal matrix coefficients $h_i(x):=\langle L_xf_i,f_i\rangle$ lie in $U$ by the definition of $U$ and [L2]. On the other hand Fubini's theorem, the centrality of $F$ and the convolution convention give $\langle F,h_i\rangle=\langle T_Ff_i,f_i\rangle=\lambda\ne0$, contradicting $F\in U^\perp$. Hence $U=L^2(G)$ and $\mathcal B$ is an orthonormal Hilbert basis. [L2, L3, step 6.1]

8.1 Multiplicity: for an irreducible $\rho$ of dimension $d_\rho$, put $$ V_j(\rho):=\operatorname{span}\{\rho_{ij}:i=1,\dots,d_\rho\}, \qquad j=1,\dots,d_\rho. $$ These finite-dimensional spaces are mutually orthogonal by [L1]. The formula in [L2] gives $$ L_x\rho_{ij}=\sum_k\rho_{ik}(x^{-1})\rho_{kj}, $$ which is the contragredient matrix formula in [L2]; hence each $V_j(\rho)$ is invariant under the left regular action and is equivalent to $\rho^*$, not to $\rho$. Therefore, for a fixed irreducible $\pi$, the spaces $V_j(\pi^*)$, $j=1,\dots,d_\pi$, are $d_\pi$ mutually orthogonal copies of $(\pi^*)^*\cong\pi$. Conversely every basis vector in the complete family $\mathcal B$ belongs to one of the spaces $V_j(\rho)$ and hence has left type $\rho^*$; duality permutes the irreducible equivalence classes. It follows that the $\pi$-isotypic summand is exactly $$ \bigoplus_{j=1}^{d_\pi}V_j(\pi^*), $$ a Hilbert direct sum of $d_\pi$ copies of $\pi$. The Axiom of Choice entered only through the cited Haar, Hilbert-space and spectral theory. [A1, L1, L2, step 7.1] ∎
