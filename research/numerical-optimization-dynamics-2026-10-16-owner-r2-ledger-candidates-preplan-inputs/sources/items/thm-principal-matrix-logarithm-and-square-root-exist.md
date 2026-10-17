---
id: thm-principal-matrix-logarithm-and-square-root-exist
kind: theorem
title: "The principal matrix logarithm and square root exist off the closed negative-real axis"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-analytic-primary-matrix-function
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - def-complex-power-from-holomorphic-logarithm-branch
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-sylvester-unique-solvability-spectral-separation
  - lem-exponential-series-of-a-bounded-operator
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

Let $S=\mathbb C\setminus(-\infty,0]$, and let $A\in\mathbb C^{n\times n}$,
$n\ge1$, satisfy $\sigma(A)\subset S$. The analytic primary matrices
$L(A)=(\operatorname{Log})(A)$ and
$R(A)=(z^{1/2}_{\operatorname{Log}})(A)$ exist and satisfy
$$\exp(L(A))=A,\qquad R(A)^2=A.$$
Moreover, $\sigma(L(A))$ lies in the strip
$\{w:-\pi<\operatorname{Im}w<\pi\}$, and $\sigma(R(A))$ lies in the open
right half-plane. These are the unique matrices $Y$ and $Q$ satisfying
respectively $\exp(Y)=A$ and $Q^2=A$ with the stated spectral restrictions;
this specifies what “logarithm” and “square root” mean in the uniqueness
clause.

## Facts & Assumptions

**Given:** A finite complex matrix $A$ with spectrum in the slit plane $S$.

[F1] On $S$, the principal logarithm is holomorphic and satisfies
$\exp(\operatorname{Log}z)=z$; its values have imaginary part in
$(-\pi,\pi)$ ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]],
[[def-complex-logarithms-principal-logarithm-and-complex-powers]]).

[F2] The principal branch power is
$z^{1/2}_{\operatorname{Log}}=\exp(\tfrac12\operatorname{Log}z)$ and is
holomorphic on $S$ ([[def-complex-power-from-holomorphic-logarithm-branch]]).

[F3] The primary matrix function is given by finite Taylor jets on each Jordan
block and is similarity invariant ([[def-analytic-primary-matrix-function]],
[[thm-analytic-primary-matrix-function-jordan-contour-agreement]]).

[F4] The Sylvester map $X\mapsto BX+XC$ is uniquely solvable for every
right-hand side when $\sigma(B)\cap(-\sigma(C))=\varnothing$
([[thm-sylvester-unique-solvability-spectral-separation]]).

[F5] On a finite-dimensional complex normed space the bounded-operator
exponential is the absolutely convergent power series
$\sum_{k\ge0}T^k/k!$ ([[cor-finite-dimensional-normed-spaces-are-banach]],
[[lem-exponential-series-of-a-bounded-operator]]).

## Proof

1.1 On a Jordan block $J=\lambda I+N$ of size $d$, the primary value of a holomorphic $h$ is $\sum_{k<d}h^{(k)}(\lambda)N^k/k!$. Products of such truncated Taylor polynomials agree modulo $N^d$ with the truncated Taylor polynomial of the scalar product, by the finite Leibniz rule. For composition, write the inner Taylor series as $\lambda+\sum_{j\ge1}a_j u^j$ modulo $u^d$; substitution into the outer Taylor polynomial and discarding powers $u^d$ and higher gives exactly the Taylor series of the scalar composition modulo $u^d$. Thus analytic identities on a neighborhood of $\lambda$ remain valid on this Jordan block. In particular, the matrix exponential series agrees with the primary value of the scalar exponential: the binomial theorem and absolute convergence in [F5] give $\sum_{n\ge0}\frac{J^n}{n!} =\sum_{k=0}^{d-1}\frac{N^k}{k!} \left(\sum_{r\ge0}\frac{\lambda^r}{r!}\right) =\sum_{k=0}^{d-1}\frac{e^\lambda N^k}{k!}.$ Only finitely many nilpotent powers occur, so rearranging the absolutely convergent sum is legitimate. [F3, F5, algebra]

2.1 Applying step 1.1 to $\exp\circ\operatorname{Log}(z)=z$ and $(z^{1/2}_{\operatorname{Log}})^2=z$ gives $\exp(L(A))=A$ and $R(A)^2=A$ block by block and then by similarity. The eigenvalues of these primary matrices are their scalar values at the eigenvalues of $A$, so [F1] and [F2] give the stated strip and right-half-plane restrictions. [F1, F2, F3, step 1.1, algebra]

2.2 Suppose $Y$ is another logarithm of $A$ with spectrum in the open strip. On a Jordan block at $\mu\in\sigma(Y)$, $\exp(\mu)$ lies in $S$ and $\operatorname{Log}(\exp z)=z$ on a neighborhood of $\mu$. Step 1.1 therefore gives $\operatorname{Log}(\exp(J))=J$. Applying this on every block of $Y$ and using similarity invariance yields $L(A)=\operatorname{Log}(\exp(Y))=Y$. [F1, F3, step 1.1, algebra]

3.1 Suppose $Q^2=A$ and $\sigma(Q)$ lies in the open right half-plane. Put $D=Q-R(A)$. Then $QD+DR(A)=Q(Q-R(A))+(Q-R(A))R(A)=Q^2-R(A)^2=0$. The spectra of $Q$ and $R(A)$ lie in the right half-plane, so $\sigma(Q)\cap(-\sigma(R(A)))=\varnothing$. By [F4], the homogeneous Sylvester equation has only the zero solution; hence $D=0$ and $Q=R(A)$. [given, F4, step 2.1, algebra] ∎
