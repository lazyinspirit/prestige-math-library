---
id: ex-coercive-nonsymmetric-form-can-have-nonreal-galerkin-eigenvalues
kind: example
title: "A coercive non-symmetric form can have non-real Galerkin eigenvalues"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bounded-coercive-and-symmetric-sesquilinear-forms, def-characteristic-polynomial-of-a-matrix, def-complex-conjugate-real-imaginary-part-and-modulus, def-countable-choice, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-hilbert-space, def-matrix-product-and-identity-matrix, def-real-and-complex-inner-product-space, thm-cauchy-schwarz-in-an-inner-product-space, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.4, nonsymmetric sesquilinear forms, printed pp. 98-100 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 4, symmetry hypothesis and the matrix preview, printed pp. 26-28 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

On $\mathbb C^2$ let $\beta>0$, $M=\begin{pmatrix}1&\beta\\-\beta&1\end{pmatrix}$ and $a(u,v):=(Mu,v)$. Then $a$ is bounded and coercive with constant $1$, since $\operatorname{Re}a(u,u)=|u_1|^2+|u_2|^2$; but the eigenvalues of $M$ are $1\pm i\beta$, which are non-real. Consequently for every real $\lambda$ the equation $a(u,v)=\lambda(u,v)$ for all $v\in\mathbb C^2$ has no nonzero solution: this non-symmetric coercive form has no weak eigenpair with a real eigenvalue, and its $2\times2$ Galerkin matrix has a conjugate pair of non-real eigenvalues. This shows that the reality of the eigenvalues in the discrete spectral theorem is a consequence of symmetry and not of coercivity.

## Facts & Assumptions

**Given:** a real $\beta>0$, the matrix $M=\begin{pmatrix}1&\beta\\-\beta&1\end{pmatrix}$, and the sesquilinear form $a(u,v)=(Mu,v)$ on $\mathbb C^2$.

[F1] Boundedness and coercivity of a sesquilinear form on a Hilbert space are defined by $|a(u,v)|\le C\|u\|\|v\|$ and $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$, with the form linear in the first argument and conjugate-linear in the second ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] $\mathbb C^2$ is a complex Hilbert space with the standard inner product, and $(Mu,v)$ is computed by matrix multiplication and conjugation accordingly ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]], [[def-matrix-product-and-identity-matrix]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] For an endomorphism of a finite-dimensional complex vector space the spectrum is the root set of its characteristic polynomial, the characteristic polynomial of a matrix $A$ is $\chi_A(\lambda)=\det(\lambda I-A)$, and a weak eigenpair identity $a(u,v)=\lambda(u,v)$ for all $v$ is equivalent to $Mu=\lambda u$ when $a(u,v)=(Mu,v)$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-characteristic-polynomial-of-a-matrix]], [[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

[F4] Cauchy--Schwarz: $|(u,v)|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Verification

**Proof technique:** direct.

1.1 Coercivity. For $u=(u_1,u_2)$ one computes $Mu=(u_1+\beta u_2,\,-\beta u_1+u_2)$ and $$\operatorname{Re}a(u,u)=\operatorname{Re}\bigl(|u_1|^2+\beta u_2\overline{u_1}-\beta u_1\overline{u_2}+|u_2|^2\bigr)=|u_1|^2+|u_2|^2=\|u\|^2,$$ because $u_2\overline{u_1}-\overline{u_2\overline{u_1}}$ is purely imaginary and $\beta$ is real. Hence $\operatorname{Re}a(u,u)=\|u\|^2\ge1\cdot\|u\|^2$ and $a$ is coercive with constant $1$. [F1, F2, given, algebra]

1.2 Boundedness. Applying Cauchy--Schwarz in the index, $|u_1+\beta u_2|^2\le(1+\beta^2)(|u_1|^2+|u_2|^2)$ and $|-\beta u_1+u_2|^2\le(1+\beta^2)(|u_1|^2+|u_2|^2)$, so $$\|Mu\|^2=|u_1+\beta u_2|^2+|-\beta u_1+u_2|^2\le 2(1+\beta^2)\|u\|^2 .$$ Thus $\|Mu\|\le\sqrt{2+2\beta^2}\,\|u\|$, and [F4] gives $|a(u,v)|=|(Mu,v)|\le\sqrt{2+2\beta^2}\,\|u\|\|v\|$, so $a$ is bounded. [F1, F2, F4, given, algebra]

1.3 Spectrum. The characteristic polynomial is $\chi_M(\lambda)=\det(\lambda I-M)=(1-\lambda)^2+\beta^2$, and because $\beta>0$ its two roots are $\lambda=1\pm i\beta$, which are not real. By [F3] the spectrum of the endomorphism $u\mapsto Mu$ is exactly $\{1+i\beta,1-i\beta\}$, a conjugate pair of non-real eigenvalues of the Galerkin matrix $M$. [F2, F3, given, algebra]

2.1 No real-eigenvalue weak eigenpair. Let $\lambda\in\mathbb R$ be real and suppose a nonzero $u\in\mathbb C^2$ satisfies $a(u,v)=\lambda(u,v)$ for every $v$. Subtracting, $(Mu-\lambda u,v)=0$ for every $v$, and testing with $v=Mu-\lambda u$ gives $\|Mu-\lambda u\|^2=0$, so $Mu=\lambda u$; by [F3], $\lambda$ would be a real eigenvalue of $M$, contradicting step 1.3. Hence there is no real $\lambda$ with a nonzero weak eigenpair. Since $a$ is nevertheless bounded and coercive by steps 1.1 and 1.2, this two-dimensional model shows that coercivity alone does not force real eigenvalues. Its complex eigenpairs at $1\pm i\beta$ do exist; the exclusion just proved concerns real eigenvalues. [F1, F3, step 1.1, step 1.2, step 1.3] ∎

