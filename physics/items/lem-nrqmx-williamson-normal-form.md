---
id: lem-nrqmx-williamson-normal-form
kind: lemma
domain: mathematics
title: Positive definite Williamson normal form
status: published
origin: pipeline
dependency_level: 2
deps: [def-nrqmx-finite-mode-symplectic-data]
dependency_roles:
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Arvind, B. Dutta, N. Mukunda and R. Simon, The Real Symplectic Groups in Quantum Mechanics and Optics, §IX"
      url: "https://arxiv.org/pdf/quant-ph/9509002"
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §6.4, pp. 158–162"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
---

## Statement

Let $r\ge1$, $\hbar>0$, and
$J=\bigoplus_{j=1}^r\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.
For every real symmetric positive definite $2r\times2r$ matrix $V$, there
are an interleaved symplectic matrix $S$ ($S^TJS=J$) and positive numbers
$\nu_1,\ldots,\nu_r$ such that
$$V=S D S^T,\qquad D=\operatorname{diag}(\nu_1,\nu_1,\ldots,\nu_r,\nu_r).$$
Moreover,
$$V+i\hbar J/2\succeq0\quad\Longleftrightarrow\quad \nu_j\ge\hbar/2\ \text{for every }j.$$
Here $A\succeq0$ means the Hermitian matrix $A$ has nonnegative quadratic
form on every complex vector.

## Facts & Assumptions

**Given:** $r\ge1$, $\hbar>0$, and a real symmetric positive definite
$V\in M_{2r}(\mathbb R)$.

[A1] The dimension is finite and positive, the action scale satisfies
$\hbar>0$, and $V=V^T$ obeys $x^TVx>0$ for every nonzero real $x$.

[F1] In finite-dimensional Euclidean space, a real symmetric matrix has an
orthonormal eigenbasis: maximize its Rayleigh quotient on the compact unit
sphere to obtain an eigenvector, restrict to its invariant orthogonal
complement, and induct on dimension. A positive definite matrix therefore
has a real symmetric positive definite square root.

[F2] The local convention uses interleaved quadrature order with
$J=\oplus_j\begin{pmatrix}0&1\\-1&0\end{pmatrix}$
([[def-nrqmx-finite-mode-symplectic-data]]); this item tests positivity of
the Hermitian matrix $V+i\hbar J/2$ defined in its Statement.

## Proof

1.1 First diagonalize $V$ by the Rayleigh-quotient induction in [F1]: a
maximizer of $x^TVx$ on the unit sphere is an eigenvector, because the
derivative at zero of the quotient at $e+tv$ vanishes for every $v\perp e$;
the orthogonal complement is invariant under a symmetric matrix, so induction
gives an orthonormal eigenbasis. Positivity makes each eigenvalue positive,
and replacing it by its positive square root constructs the real symmetric
positive definite $M=V^{1/2}$. Now let $K=MJM$. Then $K^T=-K$, and $K$ is
invertible because both $M$ and $J$ are. The matrix $B=-K^2=K^TK$ is real
symmetric positive definite. Apply the same Rayleigh-quotient argument to $B$
to choose a unit eigenvector $e$ with eigenvalue $\nu^2>0$ and put
$f=-Ke/\nu$. Since
$\|Ke\|^2=e^TBe=\nu^2$, $f$ is unit; since $K$ is skew,
$e^Tf=0$. Also $Ke=-\nu f$ and
$Kf=-K^2e/\nu=\nu e$. Thus in the orthonormal ordered pair $(e,f)$,
$$\begin{pmatrix}e^TKe&e^TKf\\f^TKe&f^TKf\end{pmatrix} =\begin{pmatrix}0&\nu\\-\nu&0\end{pmatrix}.$$
For any $x$ orthogonal to both $e,f$, skew-symmetry gives
$e^TKx=-(Ke)^Tx=\nu f^Tx=0$ and
$f^TKx=-(Kf)^Tx=-\nu e^Tx=0$, so their orthogonal complement is
$K$-invariant. Repeating the argument on this complement gives an
orthogonal matrix $O$ and positive $\nu_j$ with
$O^TKO=JD$, where $D=\operatorname{diag}(\nu_1,\nu_1,\ldots,\nu_r,\nu_r)$.
[given, A1, F1, algebra]

2.1 Set $S=MO D^{-1/2}$. Then
$$SDS^T=MO D^{-1/2}D D^{-1/2}O^TM=M^2=V,$$
and
$$S^TJS=D^{-1/2}O^TMJM O D^{-1/2} =D^{-1/2}(JD)D^{-1/2}=J,$$
because $D$ commutes with $J$. This proves the Williamson factorization and
symplecticity of $S$. [F2, step 1.1, algebra]

3.1 For symplectic $S$, congruence by $S^{-1}$ maps
$V+i\hbar J/2$ to $D+i\hbar J/2$, since
$S^{-1}JS^{-T}=J$. In each $(Q_j,P_j)$ block the latter matrix is
$$\begin{pmatrix}\nu_j&i\hbar/2\\-i\hbar/2&\nu_j\end{pmatrix},$$
whose eigenvalues are $\nu_j+\hbar/2$ and $\nu_j-\hbar/2$. Congruence by an
invertible matrix preserves nonnegative quadratic forms, so the full matrix
is positive semidefinite exactly when every $\nu_j\ge\hbar/2$. [step 2.1,
algebra] ∎
