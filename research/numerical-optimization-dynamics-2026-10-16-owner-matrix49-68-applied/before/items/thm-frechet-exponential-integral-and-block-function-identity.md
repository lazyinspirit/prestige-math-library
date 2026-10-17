---
id: thm-frechet-exponential-integral-and-block-function-identity
kind: theorem
title: "The exponential Fréchet derivative has an integral and block-matrix formula"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-analytic-primary-matrix-function
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - lem-exponential-series-of-a-bounded-operator
  - cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace
  - cor-finite-dimensional-normed-spaces-are-banach
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, $f:\Omega\to\mathbb C$ holomorphic,
$A\in\mathbb C^{n\times n}$ with $\sigma(A)\subset\Omega$, and
$E\in\mathbb C^{n\times n}$. The map $A\mapsto f(A)$ is real Fréchet
differentiable at $A$, and
$$Df(A)[E]=\frac{1}{2\pi i}\int_\Gamma f(z)(zI-A)^{-1}E(zI-A)^{-1}\,dz$$
for any admissible Cauchy cycle $\Gamma$ from
[[thm-analytic-primary-matrix-function-jordan-contour-agreement]].
Consequently
$$f\!\left(\begin{pmatrix}A&E\\0&A\end{pmatrix}\right) = \begin{pmatrix}f(A)&Df(A)[E]\\0&f(A)\end{pmatrix}.$$
For $f(z)=e^z$, the same derivative also has the formula
$$D\exp(A)[E]=\int_0^1 e^{(1-t)A}E e^{tA}\,dt.$$

## Facts & Assumptions

**Given:** The domain, holomorphic function, matrices, and an admissible Cauchy
cycle enclosing $\sigma(A)$.

[F1] The real Fréchet derivative on a complex matrix space is the real-linear
first-order approximation in the Frobenius norm
([[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]).

[F2] The primary matrix function has the contour formula on every admissible
cycle ([[thm-analytic-primary-matrix-function-jordan-contour-agreement]]).

[F3] The exponential power series converges absolutely in operator norm for
bounded operators; finite-dimensional matrix spaces are Banach
([[cor-finite-dimensional-normed-spaces-are-banach]],
[[lem-exponential-series-of-a-bounded-operator]]).

[F4] The index of a cycle is locally constant away from its trace
([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

## Proof

1.1 For compatible matrices $U,V$, Cauchy–Schwarz applied to each entry gives $|(UV)_{ij}|^2\le(\sum_k|u_{ik}|^2)(\sum_k|v_{kj}|^2)$. Summing over $i,j$ proves $\|UV\|_F\le\|U\|_F\|V\|_F$. Use this submultiplicative Frobenius norm below. [given, algebra]

1.2 The cycle trace is compact and disjoint from $\sigma(A)$, so $R(z)=(zI-A)^{-1}$ is continuous and bounded on it. By [F4], each eigenvalue of $A$ has an open neighborhood disjoint from the trace on which the cycle index remains one; the finite union of these neighborhoods is an open index-one region $U_1$. Every sufficiently small $H$ has $\sigma(A+H)\subset U_1$: otherwise choose $H_j\to0$ and $\lambda_j\in\sigma(A+H_j)\setminus U_1$. Normalize corresponding eigenvectors to Euclidean norm one; Cauchy–Schwarz gives $|\lambda_j|\le\|A+H_j\|_F$, so a subsequence converges to some $\lambda$. Continuity of the determinant, a polynomial in the entries, gives $\det(\lambda I-A)=0$, so $\lambda\in\sigma(A)\subset U_1$. Since $U_1$ is open, $\lambda_j$ is eventually in $U_1$, a contradiction. [given, F2, F4, algebra]

2.1 Put $M=\sup_{z\in\Gamma}\|R(z)\|_F$. If $\|H\|_F<1/(2M)$, then $\|R(z)H\|_F<1/2$ uniformly. The Neumann expansion gives $(zI-A-H)^{-1}=R(z)+R(z)HR(z)+\sum_{k\ge2}(R(z)H)^kR(z),$ and its final sum is bounded uniformly by $\sum_{k\ge2}M^{k+1}\|H\|_F^k\le2M^3\|H\|_F^2$. [step 1.1, step 1.2, algebra]

3.1 Apply [F2] to $A+H$ and $A$, whose spectra lie in $U_1$ by step 1.2. Subtract the contour formulas and use the uniform expansion in step 2.1. The integral of its remainder is $O(\|H\|_F^2)$ because $\Gamma$ has finite length. Therefore $f(A+H)-f(A)=\frac{1}{2\pi i}\int_\Gamma f(z)R(z)HR(z)\,dz+O(\|H\|_F^2),$ which is the real Fréchet derivative in [F1] and gives the stated derivative formula. [F1, F2, step 1.2, step 2.1, algebra]

4.1 For $\widetilde A=\begin{pmatrix}A&E\\0&A\end{pmatrix}$, direct block multiplication gives $(zI-\widetilde A)^{-1} =\begin{pmatrix}R(z)&R(z)ER(z)\\0&R(z)\end{pmatrix}.$ The determinant of a block upper-triangular matrix is the product of the determinants of its diagonal blocks, so $\sigma(\widetilde A)=\sigma(A)$ and the cycle has index one on this spectrum. Applying [F2] to $\widetilde A$ and reading its four blocks therefore gives the asserted block-function identity, with the upper-right block equal to the derivative integral from step 3.1. [F2, step 3.1, algebra]

5.1 The terms linear in $E$ in the absolutely convergent series for $\exp(A+E)$ are $\sum_{p,q\ge0}A^pEA^q/(p+q+1)!$; terms containing at least two factors $E$ are $O(\|E\|_F^2)$ by the binomial bound, submultiplicativity from step 1.1, and absolute convergence [F3]. Indeed their norm sum is at most $e^{\|A\|_F}(e^{\|E\|_F}-1-\|E\|_F)=O(\|E\|_F^2)$. Thus this is also $D\exp(A)[E]$. Expanding $e^{(1-t)A}Ee^{tA}$ into its two uniformly absolutely convergent series and integrating termwise, the coefficient of $A^pEA^q$ is $\frac{1}{p!q!}\int_0^1(1-t)^pt^q\,dt=\frac{1}{(p+q+1)!},$ where the integral identity follows by repeated integration by parts. Hence the time integral equals the same derivative series. [F3, step 1.1, step 3.1, algebra] ∎
