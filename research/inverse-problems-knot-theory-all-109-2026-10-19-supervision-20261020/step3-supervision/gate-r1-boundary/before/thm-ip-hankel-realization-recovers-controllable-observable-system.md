---
id: thm-ip-hankel-realization-recovers-controllable-observable-system
kind: theorem
title: Hankel realization recovers a controllable and observable system
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-discrete-linear-input-state-output-experiment
  - alg-ip-exact-block-hankel-realization
  - def-rank-and-nullity
  - thm-rank-nullity
  - thm-matrix-multiplication-laws
  - def-invertible-matrix-and-general-linear-group
  - thm-singular-value-decomposition
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-ip-state-similarity-preserves-input-output-data
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice principle is used; the proof uses finite-dimensional linear algebra.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mohammed Dahleh, Munther A. Dahleh, and George Verghese, Lectures on Dynamic Systems and Control, Chapter 25: Minimal State-Space Realization"
      url: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
      locator: "§25.4, Theorem 25.3 and complete proof, PDF pp. 7–8"
    - title: "Sanjay Lall, Engr207c: Operator Theory and Linear Systems, State-Space Realization lecture notes"
      url: "https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf"
      locator: "§9.2, Theorem 8, Hankel factorization and realization discussion, PDF pp. 5–6"
---

## Statement

Let $d\ge0$, $m,p\ge1$, and $q\ge1$ be integers,
and let $A\in M_{d\times d}(\mathbb R)$,
$B\in M_{d\times m}(\mathbb R)$, and $C\in M_{p\times d}(\mathbb R)$ define
a discrete linear input-state-output experiment. Let
$$M_k:=CA^kB\qquad(0\le k\le2q-1),$$
$$O_q:=\begin{bmatrix}C\\CA\\ \vdots\\CA^{q-1}\end{bmatrix},\qquad R_q:=\begin{bmatrix}B&AB&\cdots&A^{q-1}B\end{bmatrix}.$$
Assume $\operatorname{rank}O_q=\operatorname{rank}R_q=d$, the finite-horizon
observability and controllability conditions. Assume that every exact rank,
SVD, and Moore--Penrose call made by the block-Hankel realization algorithm
completes and passes its stated exact checks. Then the algorithm returns
`success` with matrices $(\widehat A,\widehat B,\widehat C)$, and there is an
invertible $T\in M_d(\mathbb R)$ such that
$$\widehat A=T^{-1}AT,\qquad \widehat B=T^{-1}B,\qquad \widehat C=CT.$$
For $d=0$, this means the unique zero-dimensional realization and the unique
invertible map on the zero space.

## Statement references

[[def-ip-discrete-linear-input-state-output-experiment|Markov parameters and discrete realization convention]]

[[alg-ip-exact-block-hankel-realization|Exact block-Hankel realization algorithm]]

[[def-rank-and-nullity|Rank of finite-dimensional maps]]

[[thm-rank-nullity|Rank-nullity]]

[[thm-matrix-multiplication-laws|Matrix multiplication identities]]

[[def-invertible-matrix-and-general-linear-group|Invertible matrices]]

[[thm-singular-value-decomposition|Finite-dimensional singular-value decomposition]]

[[def-moore-penrose-pseudoinverse|Moore--Penrose pseudoinverse equations]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique|Exact finite-matrix pseudoinverse]]

[[thm-ip-state-similarity-preserves-input-output-data|Input-output invariance under state similarity]]

[Dahleh, Dahleh, and Verghese, *Lectures on Dynamic Systems and Control*, §25.4](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf)

[Lall, *State-Space Realization*, Engr207c lecture notes, §9.2](https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf)

## Facts & Assumptions

**Given:** The real matrices $A,B,C$, a horizon $q\ge1$, Markov parameters $M_k=CA^kB$ for $0\le k\le2q-1$, full-rank matrices $O_q,R_q$ as in the statement, and exact rank, SVD, and Moore--Penrose calls that complete and pass the algorithm's stated checks.

[F1] [[def-ip-discrete-linear-input-state-output-experiment]]: the Markov parameter with index $k$ is $M_k=CA^kB$, and the impulse output at sample $k+1$ is $M_kv$.

[F2] [[thm-matrix-multiplication-laws]]: matrix multiplication is associative and unital, including conformable rectangular and zero-sized shapes.

[F3] [[def-rank-and-nullity]]: rank is the dimension of the image and nullity is the dimension of the kernel for a finite-dimensional domain.

[F4] [[thm-rank-nullity]]: for a finite-dimensional domain, rank plus nullity equals the domain dimension.

[F5] [[alg-ip-exact-block-hankel-realization]]: the algorithm forms $H_0=[M_{i+j}]$ and $H_1=[M_{i+j+1}]$, uses a rank-$d$ factorization $H_0=\widehat O\widehat R$ with both factors of rank $d$, and returns $\widehat A=\widehat O^+H_1\widehat R^+$, the first input block of $\widehat R$, and the first output block of $\widehat O$.

[F6] [[thm-singular-value-decomposition]] and [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite real matrix has an exact finite SVD and a unique Moore--Penrose pseudoinverse.

[F7] [[def-moore-penrose-pseudoinverse]]: for a matrix $X$, $XX^+X=X$ and $X^+XX^+=X^+$; the two square products are self-adjoint.

[F8] [[def-invertible-matrix-and-general-linear-group]]: an invertible square matrix has a two-sided inverse; $I_0$ is the inverse of the unique zero-sized matrix.

[F9] [[thm-ip-state-similarity-preserves-input-output-data]]: if $(\widehat A,\widehat B,\widehat C)=(T^{-1}AT,T^{-1}B,CT)$ and initial states are related by $\widehat x_0=T^{-1}x_0$, common inputs give identical outputs at every sample.

## Proof

**Proof technique:** direct.

1.1 If $d=0$, then $B$ has no rows and $C$ has no columns, so $M_k=0$ for every $k$ and $H_0=H_1=0$. Its rank is zero, and the algorithm's exact empty factorization and empty pseudoinverses return the unique empty matrices. Taking $T=I_0$ gives the asserted similarity. Henceforth suppose $d\ge1$. [given, F1, F5, F6, F8, algebra]

1.2 For $0\le i,j<q$, the $(i,j)$ block of $H_0$ is $M_{i+j}=CA^{i+j}B=(CA^i)(A^jB)$ by [F1] and [F2], and the corresponding block of $H_1$ is $M_{i+j+1}=(CA^i)A(A^jB)$. Thus $H_0=O_qR_q$ and $H_1=O_qAR_q$. Because $R_q$ has rank $d$ and codomain $\mathbb R^d$, it is surjective; because $O_q$ has rank $d$ and domain $\mathbb R^d$, it is injective. Therefore $\operatorname{im}H_0=\operatorname{im}O_q$ and $\operatorname{rank}H_0=d$. [given, F1, F2, F3, algebra]

2.1 The exact rank test in the algorithm therefore returns $d$. The SVD factorization and pseudoinverses exist by [F6], and the stated successful-call hypothesis ensures that the algorithm returns factors $H_0=\widehat O\widehat R$ with each factor of rank $d$ and returns `success`. In particular $\widehat R$ is surjective, so $\operatorname{im}H_0=\operatorname{im}\widehat O$. Combining this with step 1.2 gives $\operatorname{im}\widehat O=\operatorname{im}O_q$. [given, F5, F6, step 1.2]

3.1 The columns of $O_q$ and $\widehat O$ are bases of the same $d$-dimensional image by step 2.1. Thus there is a unique $d\times d$ matrix $T$ with $\widehat O=O_qT$. If $Tv=0$, then $\widehat Ov=O_qTv=0$; since $\widehat O$ has rank $d$, its kernel is zero, so $v=0$. Rank-nullity [F3] and [F4] makes the square matrix $T$ surjective as well as injective; hence $T$ is invertible by [F8]. From $O_qR_q=H_0=O_qT\widehat R$ and injectivity of $O_q$, $R_q=T\widehat R$, so $\widehat R=T^{-1}R_q$. [given, F3, F4, F5, F8, step 2.1, algebra]

4.1 Substituting $O_q=\widehat O T^{-1}$ and $R_q=T\widehat R$ into the identity in step 1.2 gives $H_1=\widehat O(T^{-1}AT)\widehat R$. Since $\widehat O$ has full column rank, $\widehat O^+\widehat O=I_d$: the equation $\widehat O\widehat O^+\widehat O=\widehat O$ from [F7] and injectivity imply this identity. Since $\widehat R$ has full row rank, $\widehat R\widehat R^+=I_d$: [F7] gives $\widehat R\widehat R^+\widehat R=\widehat R$, and surjectivity implies the identity. The algorithm's formula then yields $\widehat A=\widehat O^+H_1\widehat R^+=T^{-1}AT$. [F2, F5, F7, step 1.2, step 3.1, algebra]

5.1 The first $m$ columns of $R_q$ form $B$, and the first $p$ rows of $O_q$ form $C$. Taking those blocks in $\widehat R=T^{-1}R_q$ and $\widehat O=O_qT$ gives $\widehat B=T^{-1}B$ and $\widehat C=CT$. Hence the triple returned by the algorithm satisfies all three similarity identities. [F5, step 3.1, step 4.1, algebra]

6.1 By [F9], the similarity identities imply identical outputs for every finite common-input experiment when initial states are related by $T^{-1}$. With zero initial state and an impulse input, this gives $\widehat C\widehat A^k\widehat B=CA^kB$ for every $k\ge0$. This is exact realization modulo state similarity; it asserts no stability under perturbed Markov data. [F1, F9, step 5.1, algebra] ∎
