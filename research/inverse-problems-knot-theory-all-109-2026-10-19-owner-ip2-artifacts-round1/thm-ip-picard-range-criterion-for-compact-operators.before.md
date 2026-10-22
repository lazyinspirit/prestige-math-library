---
id: thm-ip-picard-range-criterion-for-compact-operators
kind: theorem
title: Picard range and pseudoinverse-domain criterion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-compact-linear-operator
  - def-countable-choice
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-ip-compact-linear-inverse-model
  - def-ip-unbounded-hilbert-moore-penrose-inverse
  - def-real-and-complex-inner-product-space
  - lem-finite-bessel-inequality
  - lem-kernel-range-orthogonality-for-hilbert-adjoints
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-hilbert-space-fourier-expansion
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-singular-value-decomposition-for-compact-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2, Theorem 3.10"
      url: "https://arxiv.org/pdf/2001.00617"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, 2015, Theorem 6.7"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
    - title: "Vesa Kaarnioja, Inverse Problems: Fourth Lecture, FU Berlin, 8 May 2023"
      url: "https://vkaarnioja.github.io/ip23/week4.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $K:X\to Y$ be a compact linear map
between real or complex Hilbert spaces, with Hilbert adjoint $K^*:Y\to X$.
Write $\mathbb N_{>0}:=\{1,2,3,\ldots\}$. If $R(K)$ has finite dimension
$r\in\mathbb N$, put $J=\{1,\ldots,r\}$, interpreted as empty when $r=0$;
if $R(K)$ is infinite-dimensional, put $J=\mathbb N_{>0}$. Thus $J$ indexes
exactly the positive singular values $s_j>0$ in nonincreasing order. Let
$(v_j)_{j\in J}$ and $(u_j)_{j\in J}$ be complete
orthonormal families in $N(K)^\perp$ and $\overline{R(K)}$, respectively,
with $Kv_j=s_ju_j$ and $K^*u_j=s_jv_j$. The empty sum is zero, finite $J$
uses a finite sum, and infinite $J$ uses the norm-convergent series whenever
the stated square-summability condition holds. Use inner products linear in the
first argument. Define the Picard sum
$$P_K(y):=\sum_{j\in J}\frac{|\langle y,u_j\rangle_Y|^2}{s_j^2},\qquad y\in Y.$$
Then:

1. The exact equation $Kx=y$ is solvable if and only if
   $y\perp N(K^*)$ and $P_K(y)<\infty$.

2. The domain of the Hilbert-space Moore–Penrose inverse is
   $$D(K^\dagger)=R(K)\oplus R(K)^\perp=\{y\in Y:P_K(y)<\infty\},$$
   and for every $y\in D(K^\dagger)$,
   $$K^\dagger y=\sum_{j\in J}\frac{\langle y,u_j\rangle_Y}{s_j}v_j.$$
   Thus the orthogonal component in $R(K)^\perp=N(K^*)$ is discarded by
   $K^\dagger$; exact range membership additionally requires that component
   to be zero.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[[def-ip-unbounded-hilbert-moore-penrose-inverse|Hilbert-space Moore–Penrose inverse and its domain]]

[[thm-singular-value-decomposition-for-compact-operators|Compact-operator singular system and expansion]]

[[lem-kernel-range-orthogonality-for-hilbert-adjoints|Adjoint kernel and range orthogonality]]

[Clason, Theorem 3.10 and complete proof, §3.2, printed pp. 22–23](https://arxiv.org/pdf/2001.00617)

[Scherzer and Mindrinos, Theorem 6.7, printed p. 87](https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf)

[Kaarnioja, “Solvability of $y=Ax$,” printed pp. 9–11](https://vkaarnioja.github.io/ip23/week4.pdf)

## Singular-system diagram

For a fixed positive singular index $j$, the diagram records the domain/codomain
action on its one-dimensional singular directions:

```tikzcd
\mathbb{F} \arrow[r, "{\lambda\mapsto s_j\lambda}"] \arrow[d, "{\lambda\mapsto\lambda v_j}"'] & \mathbb{F} \arrow[d, "{\lambda\mapsto\lambda u_j}"] \\
X \arrow[r, "K"'] & Y
```

The two composites agree because $K(\lambda v_j)=\lambda Kv_j=\lambda s_ju_j$.
This diagram explains the singular-pair convention; no proof step relies on it.

## Facts & Assumptions

**Given:** Countable Choice, the compact Hilbert-space model $K:X\to Y$, its adjoint $K^*$, and the positive singular system described in the statement.

[F1] The model supplies real or complex Hilbert parameter/data spaces and a compact linear forward map ([[def-ip-compact-linear-inverse-model]]).

[F2] The compact SVD supplies the positive singular values, complete orthonormal right and left singular families, the singular relations, and the operator expansion ([[thm-singular-value-decomposition-for-compact-operators]]).

[F3] $(R(K))^\perp=N(K^*)$ and $\overline{R(K)}=(N(K^*))^\perp$ ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]]).

[F4] $\langle Kx,y\rangle_Y=\langle x,K^*y\rangle_X$ ([[def-hilbert-space-adjoint]]).

[F5] Finite Bessel inequality: $\sum_{j\in F}|\langle x,e_j\rangle|^2\le\|x\|^2$ for every finite orthonormal family ([[lem-finite-bessel-inequality]]).

[F6] Finite orthogonal sums satisfy Pythagoras ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[F7] On a complete orthonormal family, the finite Fourier sums converge in norm to each vector in its closed span ([[thm-hilbert-space-fourier-expansion]]).

[F8] Every closed subspace of a Hilbert space has an orthogonal decomposition ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F9] Hilbert spaces are complete and Cauchy–Schwarz makes the inner product continuous in either argument ([[def-hilbert-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F10] For $r+z$ with $r\in R(K)$ and $z\in R(K)^\perp$, the inverse returns the minimum-norm preimage of $r$ and annihilates $z$ ([[def-ip-unbounded-hilbert-moore-penrose-inverse]]).

[F11] A compact linear operator is bounded and hence continuous in norm ([[def-compact-linear-operator]]).

[A1] Countable Choice is the hypothesis in the compact SVD and Hilbert Fourier expansion used here ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $y=Kx$. Then $y\perp N(K^*)$ by [F3]. For each $j\in J$, the adjoint identity and singular relation give $\langle y,u_j\rangle_Y=\langle Kx,u_j\rangle_Y =\langle x,K^*u_j\rangle_X=s_j\langle x,v_j\rangle_X$. Applying [F5] to finite subsets of the orthonormal family $(v_j)$ shows $P_K(y)=\sum_{j\in J}|\langle x,v_j\rangle_X|^2\le\|x\|_X^2<\infty$. This proves necessity in claim 1. [given, F2, F3, F4, F5, A1, algebra]

1.2 Now let $y\perp N(K^*)$ and $P_K(y)<\infty$. By [F3], $y\in\overline{R(K)}$. For finite $J$ take the finite sum; for infinite $J$ let $x_N=\sum_{j=1}^{N}s_j^{-1}\langle y,u_j\rangle_Yv_j$. For $M>N$, [F6] gives $\|x_M-x_N\|_X^2=\sum_{j=N+1}^{M}s_j^{-2}|\langle y,u_j\rangle_Y|^2$, whose tails tend to zero because $P_K(y)<\infty$. Thus $(x_N)$ is Cauchy and converges to $x\in X$ by [F9]. The complete right singular family places $x$ in $N(K)^\perp$. [F2, F3, F6, F9, A1, construct, algebra]

2.1 By [F11], applying $K$ to the finite sums and passing to the limit gives $Kx=\lim_{N\to\infty}Kx_N=\lim_{N\to\infty}\sum_{j=1}^{N}\langle y,u_j\rangle_Yu_j=y$, where the last equality is [F7] on $\overline{R(K)}$. The finite-$J$ case is the same equality with a finite sum. Since $x\in N(K)^\perp$ and $Kx=y$, [F10] identifies $x=K^\dagger y$. This proves sufficiency in claim 1 and the formula there. [step 1.2, F1, F2, F7, F10, F11, A1, algebra]

3.1 For arbitrary $y\in Y$, apply [F8] to the closed subspace $M=\overline{R(K)}$ and write $y=p+q$ with $p\in M$ and $q\in M^\perp$. Since $R(K)\subseteq M$, $q\in R(K)^\perp$. The Fourier coefficients of $p$ are $\langle p,u_j\rangle_Y=\langle y,u_j\rangle_Y$, and [F7] expands $p$ in the complete left singular family. If $P_K(y)<\infty$, the construction in steps 1.2–2.1 applied to $p\in M=(N(K^*))^\perp$ gives $p\in R(K)$ and $K^\dagger p=\sum_j s_j^{-1}\langle y,u_j\rangle_Yv_j$; hence $y=p+q\in R(K)\oplus R(K)^\perp=D(K^\dagger)$ and [F10] gives the displayed formula. [step 1.2, step 2.1, F3, F7, F8, F10, A1, construct]

4.1 Conversely, let $y=r+q\in D(K^\dagger)$ with $r\in R(K)$ and $q\in R(K)^\perp$. By [F3], $q\in N(K^*)$ and each $u_j\in N(K^*)^\perp$, so $\langle q,u_j\rangle_Y=0$. Step 1.1 applied to $r$ shows $P_K(y)=P_K(r)<\infty$; [F10] gives $K^\dagger y=K^\dagger r$ and the same series formula. Thus the domain is exactly the set where the Picard sum is finite, completing claim 2. [step 1.1, F3, F10] ∎
