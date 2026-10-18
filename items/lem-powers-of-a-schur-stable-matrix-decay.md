---
id: lem-powers-of-a-schur-stable-matrix-decay
kind: lemma
title: "Powers of a Schur-stable matrix decay geometrically up to a polynomial factor"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-lqr-stabilizability-and-detectability
  - thm-schur-triangularisation
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-every-complex-polynomial-splits-into-linear-factors
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-determinant-of-a-triangular-matrix
  - thm-spectrum-is-the-root-set-of-the-characteristic-polynomial
  - def-characteristic-polynomial-of-a-matrix
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§§5.1–5.2, Schur-stable DARE feedback and doubling convergence"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§§2.5–2.7, stable finite invariant subspaces and DARE pencil spectrum"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $M\in\mathbb C^{n\times n}$ be Schur stable and let $r$ satisfy $\rho(M)<r<1$. For the Euclidean induced operator norm there is a finite $C_r$ such that
$$\|M^k\|_2\le C_r r^k\qquad(k\ge0).$$
For a real matrix, interpret the same statement on its complexification.

## Facts & Assumptions

**Given:** A finite Schur-stable matrix $M$ and $r$ with $\rho(M)<r<1$.

[A1] For $n\ge1$, the notation $\rho(M)$ means $\max\{ |\lambda| : \lambda\in\sigma_{\mathbb C}(M)\}$; for the unique $0\times0$ matrix set $\rho(M)=0$.

[F1] [[def-lqr-stabilizability-and-detectability]]: Schur stable means every eigenvalue has modulus strictly less than one.

[F2] [[thm-schur-triangularisation]]: a complex finite-dimensional endomorphism has an orthonormal basis in which its matrix is upper triangular.

[F3] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|ST\|_2\le\|S\|_2\|T\|_2$ for compatible finite-dimensional maps.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|T\|_2=\max_{\|v\|_2=1}\|Tv\|_2$.

[F5] [[cor-every-complex-polynomial-splits-into-linear-factors]]: every nonconstant characteristic polynomial over $\mathbb C$ splits over $\mathbb C$, so the hypothesis of [F2] holds.

[F6] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary operator and its adjoint preserve the Euclidean norm.

[F7] [[def-characteristic-polynomial-of-a-matrix]] and [[thm-determinant-of-a-triangular-matrix]]: for upper-triangular $T$, $\chi_T(z)=\det(zI-T)=\prod_i(z-T_{ii})$.

[F8] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]] and [[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]: the complex spectrum is the root set of the characteristic polynomial.

## Proof

1.1 If $n=0$, the unique endomorphism and every power of it is the zero map on the zero domain; its operator norm is zero, so the assertion holds with $C_r=0$. Assume now $n\ge1$ and regard a real matrix, if present, as a complex matrix. Its characteristic polynomial is a nonconstant complex polynomial, so [F5] and [F2] give $M=UTU^*$ with $U$ unitary and $T=D+N$, where $D$ is diagonal and $N$ is strictly upper triangular. Similar matrices have the same eigenvalues: $Mv=\lambda v$ is equivalent to $T(U^*v)=\lambda(U^*v)$. By [F7] and [F8], the eigenvalues are the diagonal entries of $T$; hence $\rho(M)=\max_i|T_{ii}|=\|D\|_2$, where the last equality follows directly from the Euclidean induced norm. Set $\rho=\rho(M)<r$. Each occurrence of $N$ in a product raises the row-to-column index, while $D$ preserves it, so every word containing at least $n$ copies of $N$ is zero. [A1, F1, F2, F5, F7, F8, construct]

2.1 Expand $(D+N)^k$ as the sum of noncommuting words. The terms with exactly $j$ copies of $N$ number $\binom{k}{j}$, vanish for $j\ge n$, and for $j<n$ have norm at most $\rho^{k-j}\|N\|_2^j$ by [F3] and $\|D\|_2=\rho$. Thus $\|T^k\|_2\le\sum_{j=0}^{\min(k,n-1)}\binom{k}{j}\rho^{k-j}\|N\|_2^j.$ Because $U$ and $U^*$ preserve vector norms by [F6] and $U^*$ maps the unit sphere onto itself, the induced norm [F4] gives $\|M^k\|_2=\|UT^kU^*\|_2=\|T^k\|_2$. [F3, F4, F6, step 1.1, algebra]

3.1 If $\rho=0$, then $D=0$ and $T=N$, so $T^k=0$ for $k\ge n$; taking $C_r=\max_{0\le k<n}\|T^k\|_2r^{-k}$ proves the claim. If $0<\rho<r$, each fixed $j<n$ satisfies $\binom{k}{j}\rho^{k-j}\|N\|_2^j/r^k\le c_j k^j(\rho/r)^k$ for a finite $c_j$. The ratio of consecutive terms $k^j(\rho/r)^k$ tends to $\rho/r<1$, so this sequence is bounded. Summing its finitely many bounds over $0\le j<n$ gives a finite $C_r$ in step 2.1. [step 2.1, algebra, cases] ∎
