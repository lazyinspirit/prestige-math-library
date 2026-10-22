---
id: cex-ip-picard-orthogonality-clause-essential
kind: counterexample
title: A nonzero left-null datum passes the series test but is not in the range
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-hilbert-space
  - def-ip-compact-linear-inverse-model
  - def-real-and-complex-inner-product-space
  - lem-finite-rank-operators-are-compact
  - thm-reals-cauchy-complete
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
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, 2015, Theorem 6.7"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
    - title: "Vesa Kaarnioja, Inverse Problems: Fourth Lecture, FU Berlin, 8 May 2023, PDF pp. 10–12"
      url: "https://vkaarnioja.github.io/ip23/week4.pdf"
---

## Statement refuted

With standard Euclidean inner products, take $K:\mathbb R\to\mathbb R^2$ given
by $Kx=(x,0)$. Define $K^*:\mathbb R^2\to\mathbb R$ by $K^*(a,b)=a$; for
all $x\in\mathbb R$ and $z\in\mathbb R^2$ it satisfies
$\langle Kx,z\rangle=\langle x,K^*z\rangle$, the defining adjoint identity.
For this map let $R(K):=\{Kx:x\in\mathbb R\}$ and
$N(K^*):=\{z\in\mathbb R^2:K^*z=0\}$. Its sole positive singular pair is
$s_1=1$, $v_1=1$, $u_1=(1,0)$: these are unit vectors spanning the input and
range, and $Kv_1=s_1u_1$, $K^*u_1=s_1v_1$. Define the Picard sum for this
pair by
$$P_K(y):=\frac{|\langle y,u_1\rangle|^2}{s_1^2}.$$
Then $y=(0,1)$ satisfies $P_K(y)=0<\infty$ and
$y\in N(K^*)\setminus\{0\}$, but $y\notin R(K)$.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[[def-real-and-complex-inner-product-space|Real inner-product conventions]]

[[lem-finite-rank-operators-are-compact|Bounded finite-rank operators are compact]]

[[def-hilbert-space|Hilbert spaces]]

[[thm-reals-cauchy-complete|Completeness of the real numbers]]

[Scherzer and Mindrinos, Theorem 6.7, printed p. 87](https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf)

[Kaarnioja, “Solvability of $y=Ax$,” PDF pp. 10–12](https://vkaarnioja.github.io/ip23/week4.pdf)

## Facts & Assumptions

**Given:** The real spaces $X=\mathbb R$ and $Y=\mathbb R^2$ with their standard Euclidean inner products, the linear map $Kx=(x,0)$, and $y=(0,1)$.

[F1] A compact inverse model has Hilbert parameter/data spaces and a compact forward map, and exact solvability means finding $x$ with $Kx=y$ ([[def-ip-compact-linear-inverse-model]]).

[F2] A bounded linear map whose range has a finite ordered basis is compact ([[lem-finite-rank-operators-are-compact]]).

[F3] A real inner product is linear in the first argument, symmetric and positive definite, and its induced norm is $\|x\|=\sqrt{\langle x,x\rangle}$ ([[def-real-and-complex-inner-product-space]]).

[F4] Every Cauchy sequence of real numbers converges in $\mathbb R$ ([[thm-reals-cauchy-complete]]).

[F5] A real inner-product space is Hilbert when it is complete in its induced norm ([[def-hilbert-space]]).

## Counterexample

**Proof technique:** direct.

1.1 The standard dot products on $\mathbb R$ and $\mathbb R^2$ satisfy the inner-product axioms [F3] by coordinatewise addition, multiplication and $\sum_i x_i^2=0\Rightarrow x_i=0$ for each coordinate. The standard Euclidean spaces $\mathbb R$ and $\mathbb R^2$ are complete: if a sequence is Cauchy in Euclidean norm, each coordinate is Cauchy because its absolute difference is bounded by the Euclidean distance; each coordinate converges by [F4], and the finite sum of squared coordinate errors tends to zero. Thus they are real Hilbert spaces by [F3] and [F5]. The map $K$ is linear and $\|Kx\|=|x|$, so it is bounded; its range is the one-dimensional span of $(1,0)$, and [F2] makes it compact. It therefore gives the stated compact linear inverse model by [F1]. [given, F1, F2, F3, F4, F5, algebra]

1.2 For $a\in\mathbb R$ and $(b,c)\in\mathbb R^2$, $\langle Ka,(b,c)\rangle=ab=\langle a,K^*(b,c)\rangle$. Hence $N(K^*)=\{(0,c):c\in\mathbb R\}$, while $R(K)=\{(a,0):a\in\mathbb R\}$. In particular $y$ is a nonzero element of $N(K^*)$, and no scalar $x$ satisfies $Kx=y$. [given, F3, algebra]

2.1 The vector $v_1=1$ spans the input and $u_1=(1,0)$ spans $\overline{R(K)}$; they satisfy $Kv_1=u_1$ and $K^*u_1=v_1$. Thus the positive singular pair has $s_1=1$. The Picard sum defined in the statement has sole term $|\langle (0,1),(1,0)\rangle|^2/1^2=0$. Step 1.2 shows that $y\in N(K^*)\setminus\{0\}$, so the missing orthogonality condition allows finite Picard sum without exact solvability. [given, step 1.2, F3, algebra] ∎
