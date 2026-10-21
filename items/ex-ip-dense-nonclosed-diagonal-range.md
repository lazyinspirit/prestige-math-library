---
id: ex-ip-dense-nonclosed-diagonal-range
kind: example
title: A compact diagonal map with dense nonclosed range
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - cor-archimedean-reciprocal
  - def-countable-choice
  - def-hilbert-space-adjoint
  - def-hilbert-space
  - def-ip-compact-linear-inverse-model
  - def-natural-numbers
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-finite-rank-operators-are-compact
  - lem-square-summable-sequences-form-a-hilbert-space
  - thm-ip-picard-range-criterion-for-compact-operators
  - thm-norm-limit-of-compact-operators-is-compact
  - thm-p-series-real-exponents
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2, Theorems 3.9–3.10, §§3.1–3.2"
      url: "https://arxiv.org/pdf/2001.00617"
    - title: "Vesa Kaarnioja, Inverse Problems: Fourth Lecture, FU Berlin, 8 May 2023, PDF pp. 10–12"
      url: "https://vkaarnioja.github.io/ip23/week4.pdf"
---

## Example

Assume the Axiom of Countable Choice. On the real Hilbert space
$H=\ell^2(\mathbb N,\mathbb R)$, define the diagonal map
$(Kx)_n=x_n/(n+1)$ for $n\in\mathbb N$, where $\mathbb N=\{0,1,2,\ldots\}$
and $e_n$ is the coordinate vector at $n$. In positive indexing, its singular
system is $s_j=1/j$ and $v_j=u_j=e_{j-1}$ for $j\ge1$. Then $K$ is compact and
its range is dense but not closed. The datum $y=(1/(n+1))_{n\in\mathbb N}$
lies in $H$ and in $\overline{R(K)}$, but not in $R(K)$; its Picard sum
$$\sum_{j=1}^{\infty}\frac{|\langle y,e_{j-1}\rangle|^2}{s_j^2}$$
diverges, so the equation $Kx=y$ has no exact solution.

## Example references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[[thm-ip-picard-range-criterion-for-compact-operators|Picard range and pseudoinverse-domain criterion]]

[[lem-square-summable-sequences-form-a-hilbert-space|Completeness of the real square-summable sequence space]]

[[def-natural-numbers|The von Neumann natural numbers starting at zero]]

[Clason, Theorems 3.9–3.10, §§3.1–3.2, printed pp. 21–24](https://arxiv.org/pdf/2001.00617)

[Kaarnioja, “Solvability of $y=Ax$,” PDF pp. 10–12](https://vkaarnioja.github.io/ip23/week4.pdf)

## Facts & Assumptions

**Given:** Countable Choice and $H=\ell^2(\mathbb N,\mathbb R)$ with the map $(Kx)_n=x_n/(n+1)$.

[F1] For $x,z\in H$, the canonical pairing is $\langle x,z\rangle=\sum_n x_nz_n$, the norm satisfies $\|x\|_2^2=\sum_n|x_n|^2$, and $e_n$ is the sequence equal to $1$ at $n$ and $0$ elsewhere. Whenever $\sum_n|x_n|^2<\infty$, every $\varepsilon>0$ admits a finite set $F$ with $\sum_{n\notin F}|x_n|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F2] $H$ is complete and hence a real Hilbert space ([[lem-square-summable-sequences-form-a-hilbert-space]], [[def-hilbert-space]]).

[F3] A bounded linear map with finite-dimensional range is compact ([[lem-finite-rank-operators-are-compact]]).

[F4] Under Countable Choice, a norm limit of compact maps into a Banach space is compact ([[thm-norm-limit-of-compact-operators-is-compact]]).

[F5] For a compact operator with singular values $s_n$ and complete positive singular vectors $u_n$, exact range membership is equivalent to orthogonality to $N(K^*)$ and finiteness of the Picard sum ([[thm-ip-picard-range-criterion-for-compact-operators]]).

[F6] The series $\sum_{m\ge1}m^{-2}$ converges ([[thm-p-series-real-exponents]]).

[F7] For every real $\varepsilon>0$ there is $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[F8] The compact linear inverse model has Hilbert parameter/data spaces and a compact forward map, and exact data have the form $Kx^\dagger$ ([[def-ip-compact-linear-inverse-model]]).

[F9] The Hilbert adjoint is characterized by $\langle Kx,z\rangle=\langle x,K^*z\rangle$ ([[def-hilbert-space-adjoint]]).

[A1] Countable Choice is required by [F4] and by the compact singular-system theorem used in [F5], and is the hypothesis of [F9] ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The map $K$ is linear and satisfies $\|Kx\|_2^2=\sum_n|x_n|^2/(n+1)^2\le\|x\|_2^2$, so it is bounded. For $N\in\mathbb N$, let $(K_Nx)_n=x_n/(n+1)$ when $n\le N$ and $0$ otherwise. The estimate $\|K_Nx\|_2^2\le\|x\|_2^2$ makes $K_N$ bounded, and its range is spanned by the finite ordered family $(e_0,\ldots,e_N)$: every output has no coordinates beyond $N$, and $K_N((n+1)e_n)=e_n$ for each $n\le N$, while these coordinate vectors are linearly independent. Thus they form an ordered basis of the range, and $K_N$ is compact by [F3]. For every $x$, $\|(K-K_N)x\|_2^2=\sum_{n>N}|x_n|^2/(n+1)^2\le\|x\|_2^2/(N+2)^2$, with equality in the operator norm at $x=e_{N+1}$. Hence $\|K-K_N\|=1/(N+2)\to0$. By [F2] the codomain is Banach, so [F4] gives compactness of $K$. It is a compact inverse model by [F8]. [given, F1, F2, F3, F4, F8, A1, algebra, construct]

1.2 Every finitely supported $z\in H$ belongs to $R(K)$: set $x_n=(n+1)z_n$, which is finitely supported and satisfies $Kx=z$. For any $z\in H$ and $\varepsilon>0$, [F1] gives a finite set $F\subseteq\mathbb N$ with $\sum_{n\notin F}|z_n|^2<\varepsilon^2$; choose $N$ containing $F$. Then the truncation $z^{(N)}$ supported on indices $n\le N$ obeys $\|z-z^{(N)}\|_2^2=\sum_{n>N}|z_n|^2<\varepsilon^2$. Thus finitely supported vectors are dense, and since all lie in $R(K)$, $R(K)$ is dense in $H$. [given, F1, construct, algebra]

2.1 For $y_n=1/(n+1)$, [F6] gives $y\in H$. Its finite truncations are in $R(K)$ by step 1.2 and converge to $y$ because the tails of its square-sum tend to zero; hence $y\in\overline{R(K)}$. If $Kx=y$, then every coordinate equation gives $x_n=1$, contradicting $x\in H$. Indeed, if the finite sums $\sum_{n=0}^{N}|x_n|^2=N+1$ had an upper bound $B\ge0$, [F7] with $\varepsilon=1/(B+1)$ would give $m>B+1$, and the partial sum at $N=m$ would exceed $B$. Therefore $y\notin R(K)$ and the dense range is not closed. [step 1.2, F1, F6, F7, algebra]

3.1 The coordinate vectors are orthonormal because [F1] gives $\langle e_i,e_j\rangle=1$ when $i=j$ and $0$ otherwise. They are complete: for any $x\in H$ and $\varepsilon>0$, [F1] gives a finite set $F$ with $\sum_{n\notin F}|x_n|^2<\varepsilon^2$; choose $N$ containing $F$, so the truncation's squared error is at most this tail. Direct calculation gives $N(K)=\{0\}$ and $\overline{R(K)}=H$ by step 1.2. For $x,z\in H$, the canonical inner product gives $\langle Kx,z\rangle=\sum_n x_nz_n/(n+1)=\langle x,Kz\rangle$; hence [F9] identifies $K^*=K$. Since all diagonal coefficients are positive, $N(K^*)=\{0\}$. Therefore $Ke_n=(n+1)^{-1}e_n$ and $K^*e_n=(n+1)^{-1}e_n$, and the family is complete on both $N(K)^\perp$ and $\overline{R(K)}$. Reindexing by $j=n+1$ gives the positive singular system $s_j=1/j$, $v_j=u_j=e_{j-1}$ for $j\ge1$. The datum has $\langle y,e_{j-1}\rangle=1/j$, so every Picard summand equals $1$. For any real bound $B\ge0$, [F7] applied with $\varepsilon=1/(B+1)$ gives an index $m>B+1$, so the corresponding finite subsums are unbounded and the Picard sum diverges, as [F5] predicts for a datum outside the range. [step 1.1, step 2.1, F1, F5, F7, F9, A1, algebra] ∎
