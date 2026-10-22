---
id: thm-ip-closed-range-pseudoinverse-stability
kind: theorem
title: Closed range and boundedness of the Hilbert pseudoinverse
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - cor-archimedean-reciprocal
  - cor-finite-dimensional-subspaces-are-closed
  - def-countable-choice
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-ip-compact-linear-inverse-model
  - def-ip-unbounded-hilbert-moore-penrose-inverse
  - lem-finite-bessel-inequality
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - thm-recursion
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-well-ordering-principle
  - thm-singular-value-decomposition-for-compact-operators
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
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2, Theorem 3.7"
      url: "https://arxiv.org/pdf/2001.00617"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, 2015, Theorem 6.6 (singular-system context)"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $K:X\to Y$ be the compact linear
operator of a real or complex Hilbert-space inverse model, and let
$K^\dagger:D(K^\dagger)\to X$ be its Hilbert-space Moore–Penrose inverse, with
$D(K^\dagger)=R(K)\oplus R(K)^\perp$ carrying the norm inherited from $Y$.
Then $K^\dagger$ is bounded on its domain if and only if $R(K)$ is closed in
$Y$; for compact $K$, these conditions are also equivalent to $R(K)$ being
finite-dimensional. Here bounded means that some real $C\ge0$ satisfies
$\|K^\dagger y\|_X\le C\|y\|_Y$ for every $y\in D(K^\dagger)$.

## Statement references

[[def-ip-unbounded-hilbert-moore-penrose-inverse|Hilbert-space Moore–Penrose inverse and its domain]]

[Clason, Theorem 3.7 and Corollary 3.8, §3.1, printed pp. 20–21](https://arxiv.org/pdf/2001.00617)

[Scherzer and Mindrinos, Theorem 6.6, printed p. 86 (singular-system context)](https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a compact linear map $K:X\to Y$ between real or complex Hilbert spaces, and its Moore–Penrose inverse $K^\dagger$.

[F1] The compact model has Hilbert parameter/data spaces and a compact linear forward map $K$ ([[def-ip-compact-linear-inverse-model]]).

[F2] $D(K^\dagger)=R(K)\oplus R(K)^\perp$, and on $r+z$ the inverse is the minimum-norm preimage of $r$ ([[def-ip-unbounded-hilbert-moore-penrose-inverse]]).

[F3] Under Countable Choice, the compact singular system has a finite positive index set exactly in the finite-dimensional-range case; otherwise its positive singular values are indexed by $J=\{1,2,3,\ldots\}$ and form a sequence tending to zero, with orthonormal singular vectors and $Kv_j=s_ju_j$, $K^*u_j=s_jv_j$ ([[thm-singular-value-decomposition-for-compact-operators]]).

[F4] The adjoint identity is $\langle Kx,u\rangle_Y=\langle x,K^*u\rangle_X$ ([[def-hilbert-space-adjoint]]).

[F5] For a finite orthonormal family $(e_i)$, $\sum_i|\langle x,e_i\rangle|^2\le\|x\|^2$ ([[lem-finite-bessel-inequality]]).

[F6] Finite orthogonal sums satisfy Pythagoras ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[F7] A finite-dimensional subspace of a normed space is closed ([[cor-finite-dimensional-subspaces-are-closed]]).

[F8] A Hilbert space is complete in its induced norm ([[def-hilbert-space]]).

[F9] Cauchy–Schwarz makes $y\mapsto\langle y,u\rangle$ continuous for fixed $u$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F10] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[F11] A starting value and a total recursive rule define a unique sequence ([[thm-recursion]]).

[F12] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[A1] Countable Choice is the hypothesis of the compact SVD in [F3] ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Suppose the positive singular system is finite, with index set $J=\{1,\ldots,r\}$. If $r=0$, the SVD expansion gives $K=0$, so $R(K)=\{0\}$ is closed by [F7] and $K^\dagger=0$ is bounded on its domain. If $r>0$, each $u_j=s_j^{-1}Kv_j$ lies in $R(K)$, while the SVD expansion places every $Kx$ in $\operatorname{span}\{u_1,\ldots,u_r\}$; hence the range equals this finite-dimensional span and is closed by [F7]. For $y=q+z\in D(K^\dagger)$, $q\in R(K)$ and $z\in R(K)^\perp$, so $K^\dagger y=\sum_{j=1}^{r}s_j^{-1}\langle q,u_j\rangle v_j$ by [F2] and [F3]. Pythagoras and Bessel give $\|K^\dagger y\|^2=\sum_{j=1}^{r}s_j^{-2}|\langle q,u_j\rangle|^2 \le s_r^{-2}\|q\|^2\le s_r^{-2}\|y\|^2$; here $s_r$ is the smallest positive singular value, and the last inequality follows from $q\perp z$. Thus finite rank implies closed range and bounded $K^\dagger$. [given, F1, F2, F3, F5, F6, F7, algebra]

1.2 Suppose instead that the positive singular index set is $J=\{1,2,3,\ldots\}$. Since $s_j\to0$, for each pair $(k,n)$ the set of integers $m>n$ with $s_m<2^{-(k+1)}$ is nonempty; [F12] gives its least element, so [F11] defines recursively $n_0=0<n_1<n_2<\cdots$ and $s_{n_k}<2^{-k}$ for every $k\ge1$. Set $y_N=\sum_{k=1}^{N}s_{n_k}u_{n_k}$. For $M>N$, [F6] gives $\|y_M-y_N\|^2=\sum_{k=N+1}^{M}s_{n_k}^2\le\sum_{k=N+1}^{M}4^{-k} \le 4^{-N}/3$, so $(y_N)$ is Cauchy and converges to some $y\in Y$ by [F8]. Each $y_N$ belongs to $R(K)$ because $s_{n_k}u_{n_k}=Kv_{n_k}$, hence $y\in\overline{R(K)}$. If $y=Kx$, then for every $k\ge1$ and every $N\ge k$, orthonormality gives $\langle y_N,u_{n_k}\rangle=s_{n_k}$; by [F9] we may pass to the limit to get $\langle y,u_{n_k}\rangle=s_{n_k}$. The SVD and adjoint identity [F3]–[F4] then give $s_{n_k}=\langle Kx,u_{n_k}\rangle=s_{n_k}\langle x,v_{n_k}\rangle$, so $\langle x,v_{n_k}\rangle=1$ for every $k\ge1$. Applying [F5] to any first $N$ of these orthonormal vectors gives $N\le\|x\|^2$ for every $N\ge1$. Taking $\varepsilon=1/(\|x\|^2+1)$ in [F10] yields an integer $N\ge1$ with $1/N<1/(\|x\|^2+1)$, hence $N>\|x\|^2$, a contradiction. Thus $y\notin R(K)$ and the range is not closed. [given, F3, F4, F5, F6, F8, F9, F10, F11, F12, A1, choose, construct, algebra]

2.1 For each $k\ge1$, $Kv_{n_k}=s_{n_k}u_{n_k}\in D(K^\dagger)$ and $K^\dagger Kv_{n_k}=v_{n_k}$ by [F2], since $v_{n_k}\in N(K)^\perp$. Therefore $\|K^\dagger Kv_{n_k}\|/\|Kv_{n_k}\|=1/s_{n_k}>2^k$, so $K^\dagger$ is unbounded when the positive singular system is infinite. [step 1.2, F2, F3, algebra]

3.1 By [F3], every compact $K$ has either finite range dimension, covered by step 1.1, or an infinite positive singular system, covered by steps 1.2 and 2.1. Thus $R(K)$ is closed exactly in the finite-dimensional case, and in exactly that case $K^\dagger$ is bounded. This proves both stated equivalences. [step 1.1, step 1.2, step 2.1, F3] ∎
