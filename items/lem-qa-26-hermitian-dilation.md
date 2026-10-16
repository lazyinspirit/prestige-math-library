---
id: lem-qa-26-hermitian-dilation
kind: lemma
title: "Hermitian dilation for a rectangular linear system"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - thm-singular-value-decomposition
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all singular subspaces are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement

For $A:\mathbb C^n\to\mathbb C^m$, define $H_A:\mathbb C^m\oplus\mathbb C^n\to\mathbb C^m\oplus\mathbb C^n$ using the adjoint $A^*$ of [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] by $H_A(x,y)=(Ay,A^*x)$. Then $H_A$ is Hermitian; its nonzero eigenvalues are $+\sigma_j,-\sigma_j$ for the positive singular values of $A$, its kernel is $\ker(A^*)\oplus\ker(A)$, and $H_A^+(b,0)=(0,A^+b)$. When $A$ has positive rank, its nonzero condition number is preserved; the output is tagged in the domain summand.

## Facts & Assumptions

**Given:** A finite-dimensional map $A$ and its singular system.

[F1] [[thm-singular-value-decomposition]]: $A$ has orthonormal singular pairs $(u_j,v_j)$ with positive values $\sigma_j$; in these bases its matrix is diagonal with entries $\sigma_j$ and zero on the remaining coordinates.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Ax,y\rangle=\langle x,A^*y\rangle$, so the adjoint of a block matrix swaps the blocks and takes their adjoints.

[F3] [[def-moore-penrose-pseudoinverse]]: a pseudoinverse $G$ satisfies $HGH=H$, $GHG=G$, and $HG,GH$ are self-adjoint; [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: each finite matrix has exactly one such pseudoinverse.

## Proof


1.1 The block matrix of $H_A$ is $\begin{pmatrix}0&A\\A^*&0\end{pmatrix}$. Its adjoint, by [F2], is the same block matrix, so $H_A^*=H_A$. [given, F2, algebra]

1.2 Multiplying the SVD in [F1] gives $Av_j=\sigma_j u_j$ and $A^*u_j=\sigma_jv_j$. Therefore $H_A(u_j,v_j)=\sigma_j(u_j,v_j)$ and $H_A(u_j,-v_j)=-\sigma_j(u_j,-v_j)$. After division by $\sqrt2$ these are unit eigenvectors. Orthonormality of the singular pairs makes all such vectors mutually orthogonal. [F1, algebra]

1.3 In the SVD bases, write $A=U\Sigma V^*$ with positive diagonal entries $\sigma_j$. The diagonal matrix $\Sigma^+$ that replaces each positive entry by $1/\sigma_j$ and leaves zero entries zero satisfies $\Sigma\Sigma^+\Sigma=\Sigma$, $\Sigma^+\Sigma\Sigma^+=\Sigma^+$, and both products $\Sigma\Sigma^+$ and $\Sigma^+\Sigma$ are diagonal projections. Unitary transport shows $V\Sigma^+U^*$ satisfies the four equations in [F3], so uniqueness gives $A^+=V\Sigma^+U^*$ and $A^+u_j=v_j/\sigma_j$. [F1, F3, algebra]

2.1 The equation $H_A(x,y)=0$ is equivalent to $Ay=0$ and $A^*x=0$, so $\ker H_A=\ker(A^*)\oplus\ker(A)$. Together with step 1.2, the nonzero eigenvalue magnitudes are exactly the positive singular values, each appearing with both signs. Thus when there is positive rank their maximum-to-minimum ratio is unchanged. [step 1.2, algebra]

3.1 The vectors from step 1.2 together with orthonormal bases of $\ker(A^*)$ and $\ker(A)$ form an orthonormal eigenbasis of the direct sum. Define $G$ on this basis by $Gw_{j,+}=w_{j,+}/\sigma_j$, $Gw_{j,-}=-w_{j,-}/\sigma_j$, and $G=0$ on the kernel. Then $H_AG$ and $GH_A$ are self-adjoint projections, while diagonal multiplication gives $H_AGH_A=H_A$ and $GH_AG=G$. Thus $G$ satisfies [F3], and uniqueness gives $G=H_A^+$. Since $(u_j,0)=(w_{j,+}+w_{j,-})/\sqrt2$, this definition gives $H_A^+(u_j,0)=(0,v_j/\sigma_j)$. Complete the positive left singular vectors to the left singular basis from [F1]. The remaining basis vectors have zero singular coordinates, so the diagonal SVD gives $A^*u_j=0$ for each; hence they span the complementary part $\ker(A^*)$. Thus every $b\in\mathbb C^m$ has a decomposition $b=\sum_{j:\sigma_j>0}\beta_j u_j+b_0$ with $b_0\in\ker(A^*)$. Since $A^*b_0=0$, its positive left-singular coordinates vanish, so $\Sigma^+U^*b_0=0$ and the formula in step 1.3 gives $A^+b_0=0$. By step 2.1 $(b_0,0)\in\ker(H_A)$, so $H_A^+(b_0,0)=G(b_0,0)=0$. Applying the positive-pair calculation to the other summands gives $H_A^+(b,0)=(0,A^+b)$ for arbitrary $b$, including $b\notin\operatorname{ran}(A)$. [F1, F3, step 1.2, step 2.1, step 1.3, algebra] ∎

