---
id: thm-wada-deleted-minor-equals-twisted-reidemeister-torsion
kind: theorem
title: "The admissible Wada deleted minor equals based twisted torsion"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-wada-quotient-for-deficiency-one-presentation
  - lem-twisted-acyclicity-from-torsion-module
  - lem-twisted-fox-jacobian-is-cellular-boundary
  - lem-twisted-torsion-cell-basis-change-ambiguity
  - def-field-of-fractions
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, Theorem 4.1 and Lemma 4.2"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete §4, printed pp. 646–648; Wada ratio and complete exact-sequence proof."
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, §§2.3–2.4"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF; torsion basis convention and Wada matrix setup."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, Theorem 15"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes, printed p. 7; alternating determinant formula for based torsion."
---

## Statement

Assume the Axiom of Choice convention of the twisted-chain definition. Let $X$ be a certified based deficiency-one exterior spine with one $0$-cell, $n\ge2$ $1$-cells and $n-1$ $2$-cells, let $\psi:\pi_1(X)\twoheadrightarrow H\cong\mathbb Z^m$ have $m\ge1$, let $\rho:\pi_1(X)\to\mathrm{GL}_d(\mathbb F)$, and let $H_1(C_*^{\rho,\psi}(X;\mathbb F[H]^d))$ be torsion over $\mathbb F[H]$. Form the Fox block matrix $J$ and a chosen Wada column quotient $W_j=\det(J_{\widehat j})/D_j$ with $D_j=\det(\rho(x_j)\psi(x_j)-I_d)\ne0$. Then the fraction-field complex is acyclic, $\det(J_{\widehat j})\ne0$, and $W_j$ equals its based twisted Reidemeister torsion in $Q^\times/\mathcal U_{\rho,\psi}$. Every admissible deleted column gives the same class. This conclusion applies only to the specified cellular spine; an abstract presentation of the same group is insufficient.

## Statement references

[[def-knot-wada-quotient-for-deficiency-one-presentation|Wada quotient and denominator]]

[[lem-twisted-fox-jacobian-is-cellular-boundary|Fox Jacobian as the cellular differential]]

[[lem-twisted-acyclicity-from-torsion-module|Localized acyclicity]]

[[lem-twisted-torsion-cell-basis-change-ambiguity|Torsion unit ambiguity]]

[Kirk and Livingston, Theorem 4.1 and Lemma 4.2](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Conway, §§2.3–2.4](https://arxiv.org/pdf/1510.06678)

[Ranicki, Theorem 15](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)

## Facts & Assumptions

**Given:** AC; the certified based deficiency-one exterior spine; a positive-rank free abelian deck epimorphism; a field-valued representation; torsion degree-one homology over the Laurent ring; and an index $j$ with $D_j\ne0$.

[A1] AC is inherited from the maximal-abelian-cover convention. [[def-axiom-of-choice]]

[F1] $J$ has blocks $\Phi(\partial r_i/\partial x_k)$, $D_j=\det(\rho(x_j)\psi(x_j)-I_d)$, and $W_j=\det(J_{\widehat j})/D_j$ only for $D_j\ne0$. [[def-knot-wada-quotient-for-deficiency-one-presentation]]

[F2] With row coefficient vectors, $\partial_1$ sends $y=(y_1,\ldots,y_n)$ to $\sum_k y_kA_k$ for $A_k=\rho(x_k)\psi(x_k)-I_d$, and $\partial_2$ acts on the right by the Fox block matrix $J$. [[lem-twisted-fox-jacobian-is-cellular-boundary]]

[F3] Under the positive-rank deck and cell-count hypotheses, torsion $H_1$ implies the fraction-field complex is acyclic. [[lem-twisted-acyclicity-from-torsion-module]]

[F4] Changing cell lifts, orientations or certified simple-spine structure changes the torsion only by $\mathcal U_{\rho,\psi}$. [[lem-twisted-torsion-cell-basis-change-ambiguity]]

[F5] For an acyclic based complex, torsion is the alternating product of determinants of boundary bases and their lifts in the chosen cellular bases. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

## Proof



1.1 By [A1] and [F3], the fraction-field complex $0\to Q^{(n-1)d}\xrightarrow{\partial_2}Q^{nd}\xrightarrow{\partial_1}Q^d\to0$ is acyclic. Therefore $\partial_2$ is injective and its image is $\ker\partial_1$, both of dimension $(n-1)d$. [A1, given, F3]

2.1 In the ordered $1$-cell basis, [F2] gives the stacked $d_1$ blocks $A_1,\ldots,A_n$; a row vector $y=(y_1,\ldots,y_n)$ lies in its kernel exactly when $\sum_k y_kA_k=0$. Since $A_j$ is invertible, projection $p_{\widehat j}:\ker d_1\to Q^{(n-1)d}$ onto all non-$j$ blocks is an isomorphism: for arbitrary non-$j$ row coordinates $y_k$, the unique missing coordinate is $y_j=-\left(\sum_{k\ne j}y_kA_k\right)A_j^{-1}$. Thus $p_{\widehat j}\partial_2$ is an isomorphism, and its row-coefficient matrix is $J_{\widehat j}$ by [F2]. In particular $\det(J_{\widehat j})\ne0$. [given, F2, step 1.1, algebra]

3.1 Let $\mathbf c_0,\mathbf c_1,\mathbf c_2$ be the standard cellular bases. In degree zero choose $\mathbf b_0=\mathbf c_0$. In degree one choose $\mathbf b_1=\partial_2\mathbf c_2$, and lift $\mathbf b_0$ to degree one using the $j$-block $A_j^{-1}$ and zero in the other blocks. After moving the $j$-block to the final position, the matrix of $[\mathbf b_1,\widetilde{\mathbf b}_0]$ in $\mathbf c_1$ is block triangular with diagonal blocks $J_{\widehat j}$ and $A_j^{-1}$; its determinant is $\pm\det(J_{\widehat j})/D_j$. The degree-zero and degree-two torsion brackets equal $1$, so [F5] gives $\tau=\pm W_j$. The sign lies in $\mathcal U_{\rho,\psi}$ by [F4], proving the equality of classes. [F1, F2, F4, F5, step 2.1, algebra]

4.1 The same construction applies to every index $k$ with $D_k\ne0$. Each quotient class equals the single torsion class of the same based complex by step 3.1; hence all admissible columns give the same class in $Q^\times/\mathcal U_{\rho,\psi}$. [F1, F4, step 3.1, algebra] ∎

