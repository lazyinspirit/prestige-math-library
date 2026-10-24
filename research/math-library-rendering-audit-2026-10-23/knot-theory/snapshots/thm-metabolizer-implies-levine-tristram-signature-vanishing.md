---
id: thm-metabolizer-implies-levine-tristram-signature-vanishing
kind: theorem
title: "A metabolizer forces Levine–Tristram signatures to vanish"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - def-axiom-of-choice
  - def-knot-seifert-pairing-and-matrix
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-levine-tristram-hermitian-form-and-signature
  - lem-seifert-stabilization-preserves-levine-tristram-signature
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§3.1, printed pp. 325–326: a metabolic Seifert form has zero signature away from Alexander roots."
    - title: "Anthony Conway, The Levine–Tristram Signature: A Survey"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§2.1 and Remark 2.10, printed pp. 3–5: Hermitian form convention, nonsingularity away from roots, and metabolic vanishing."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, let $F$ be a connected compact smooth oriented Seifert surface of genus $g$, and let $V$ be the positive-push Seifert matrix in an ordered integral basis. Suppose the integral Seifert lattice has a rank-$g$ direct summand $M$ on which $V$ vanishes identically. For every $\omega\in S^1\setminus\{1\}$ with $\Delta_K(\omega)\ne0$, the Levine–Tristram signature $\sigma_\omega(K)$ is zero. The assertion concerns only points away from Alexander roots; no value at a root is asserted here.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|A metabolizer is a vanishing rank-half direct summand]]

[[def-levine-tristram-hermitian-form-and-signature|The Levine–Tristram Hermitian matrix and signature]]

[[lem-seifert-stabilization-preserves-levine-tristram-signature|Independence from the chosen Seifert surface and basis]]

## Facts & Assumptions

**Given:** Full AC, a knot Seifert matrix $V$ of size $2g$, a rank-$g$ direct-summand metabolizer $M$, and $\omega\in S^1\setminus\{1\}$ with $\Delta_K(\omega)\ne0$.

[A1] Full AC is the choice axiom stated by the knot Seifert-pairing convention; the finite-dimensional Hermitian argument below is choice-free. [[def-axiom-of-choice]]

[F1] In an ordered integral basis, $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. [[def-knot-seifert-pairing-and-matrix]]

[F2] A metabolizer is a rank-$g$ direct summand $M$ with $V(x,y)=0$ for every $x,y\in M$. [[def-metabolic-seifert-form-and-algebraic-knot-concordance]]

[F3] The determinant $d_V(t)=\det(V-tV^T)$ differs from $\Delta_K(t)$ by a Laurent unit. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

[F4] The matrix $H_\omega(V)=(1-\omega)V+(1-\bar\omega)V^T$ is Hermitian, and its signature is the value $\sigma_\omega(K)$. [[def-levine-tristram-hermitian-form-and-signature]]

[F5] The nonroot Levine–Tristram signature is independent of the chosen surface and basis. [[lem-seifert-stabilization-preserves-levine-tristram-signature]]

## Proof

1.1 If $g=0$, the Hermitian matrix is empty and has signature $0$ by [F4]. Suppose $g>0$. Choose an integral basis of $M$ and extend it by a basis of a complementary summand of $H_1(F;\mathbb Z)$. In this basis, $V=\begin{pmatrix}0&B\\C&D\end{pmatrix}$ and $H_\omega(V)=\begin{pmatrix}0&A\\A^*&E\end{pmatrix}$, where $A=(1-\omega)B+(1-\bar\omega)C^T$, $E=E^*$, and the upper-left block is zero because $V$ vanishes on $M\times M$. [A1, F1, F2, F4, given, choose, construct]

2.1 Write $d(t)=\det(V-tV^T)$. Transposition and factoring $-t$ from the $2g$ rows give $d(t)=t^{2g}d(t^{-1})$. By [F3], $d(\omega)\ne0$ since $\Delta_K(\omega)\ne0$ and the Laurent unit is nonzero at $\omega$; the reciprocal identity gives $d(\omega^{-1})\ne0$. Since $H_\omega(V)=(1-\omega)(V-\omega^{-1}V^T)$ and $\omega\ne1$, the Hermitian matrix is nonsingular. [F3, step 1.1, given, algebra]

3.1 If $A^*x=0$, then $H_\omega(V)(x,0)=0$. Nonsingularity from step 2.1 forces $x=0$; because $A^*$ is a square $g\times g$ matrix, it is invertible. [step 2.1, algebra]

4.1 For the Hermitian form with matrix in step 1.1, make the invertible coordinate change $x=x'-\tfrac12(A^*)^{-1}Ey$. This cancels the lower-right term $y^*Ey$ and leaves $x'^*Ay+y^*A^*x'$. The further change $z=Ay$ reduces it to the form with matrix $\begin{pmatrix}0&I_g\\I_g&0\end{pmatrix}$. Its $g$-dimensional subspaces $(u,u)$ and $(u,-u)$ have eigenvalues $+1$ and $-1$, respectively, so its signature is zero. Invertible congruence preserves positive and negative indices, and [F4] identifies this matrix signature with the signature of the chosen matrix; [F5] identifies it with $\sigma_\omega(K)$. [F4, F5, step 1.1, step 3.1, algebra] ∎
