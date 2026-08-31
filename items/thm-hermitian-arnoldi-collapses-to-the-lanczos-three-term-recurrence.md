---
id: thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence
kind: theorem
title: "With a Hermitian matrix, Arnoldi collapses to the Lanczos three-term recurrence and a real symmetric tridiagonal projection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lanczos-process-as-hermitian-arnoldi,
       thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization,
       def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
---

## Statement

Let $A$ be Hermitian, and run Arnoldi on $(A,b)$ through step $m$ without
breakdown. Write

$$AQ_m=Q_{m+1}\bar H_m,\qquad Q_m=[q_1\,\dots\,q_m].$$

Then there exist real numbers $\alpha_1,\dots,\alpha_m$ and nonnegative real
numbers $\beta_1,\dots,\beta_m$ such that

$$Aq_j=\beta_{j-1}q_{j-1}+\alpha_jq_j+\beta_jq_{j+1}\qquad (1\le j\le m,\ q_0:=0,\ \beta_0:=0).$$

Moreover, $T_m:=Q_m^*AQ_m$ is a real symmetric tridiagonal matrix.

## Facts & Assumptions

**Given:** A Hermitian matrix $A$ and an Arnoldi run through step $m$ without
breakdown.

[F1] The Lanczos process is Arnoldi specialized to a Hermitian matrix, with the
phase chosen so that the subdiagonal coefficients are real and nonnegative
([[def-lanczos-process-as-hermitian-arnoldi]]).

[L1] Arnoldi yields an orthonormal basis and an upper-Hessenberg factorization
$$AQ_m=Q_{m+1}\bar H_m,$$
with column relations
$$Aq_j=\sum_{i=1}^{j+1}h_{ij}q_i$$
([[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]).

[L2] An upper-Hessenberg matrix has $h_{ij}=0$ for $i>j+1$, and a real
symmetric tridiagonal matrix has zeros whenever $|i-j|>1$
([[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]]).

## Proof
**Proof technique:** direct.

1.1 Fix $j$ and let $i\le j-2$. By [L1], $Aq_i$ lies in $\operatorname{span}\{q_1,\dots,q_{i+1}\}$, which is orthogonal to $q_j$. Since $A$ is Hermitian, $$h_{ij}=q_i^*Aq_j=(Aq_i)^*q_j=0.$$ Together with the upper-Hessenberg zero pattern from [L2], this shows that the only possibly nonzero coefficients in column $j$ are $h_{j-1,j}$, $h_{jj}$, and $h_{j+1,j}$. Therefore each Arnoldi column relation collapses to a three-term recurrence. [L1, L2, algebra]

2.1 Hermitian symmetry also gives $h_{j,j-1}=\overline{h_{j-1,j}}$. Under the phase convention in [F1], the subdiagonal coefficients $h_{j+1,j}$ are real and nonnegative; write $\beta_j:=h_{j+1,j}$ and $\alpha_j:=h_{jj}$. Since $h_{jj}=q_j^*Aq_j$ equals its own complex conjugate, each $\alpha_j$ is real. Hence $$Aq_j=\beta_{j-1}q_{j-1}+\alpha_jq_j+\beta_jq_{j+1},$$ which is the Lanczos recurrence. [F1, step 1.1, algebra]

3.1 The projected matrix is $T_m=Q_m^*AQ_m=(q_i^*Aq_j)_{i,j}=(h_{ij})_{1\le i,j\le m}$. Step 1.1 shows $h_{ij}=0$ for $|i-j|>1$, and Hermitian symmetry together with the reality from step 2.1 shows $h_{ij}=h_{ji}\in\mathbb R$ on the remaining bands. Thus $T_m$ is a real symmetric tridiagonal matrix in the sense of [L2]. [L2, step 1.1, step 2.1] ∎
