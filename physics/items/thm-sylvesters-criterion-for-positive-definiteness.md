---
id: thm-sylvesters-criterion-for-positive-definiteness
kind: theorem
title: 'Sylvester''s criterion: a real symmetric $n\times n$ matrix with $n\geq1$ is positive definite if and only if all leading principal minors are positive'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-schur-complement-congruence-and-determinant, thm-sylvesters-law-of-inertia, lem-of-sign-rules, thm-determinant-of-a-triangular-matrix, thm-determinant-multiplicative, thm-determinant-of-transpose]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'J. Kuan, Positive Definite Matrices'
      url: 'https://math.berkeley.edu/~jkuan/Lecture_July31.pdf'
pipeline_run: null
---

## Statement

Let $A\in M_n(\mathbb R)$ be symmetric, with $n\ge1$, and let $\Delta_k$ be the determinant of its leading $k\times k$ principal submatrix. Then $A$ is positive definite if and only if

$$\Delta_k>0\qquad(1\le k\le n).$$

## Facts & Assumptions

**Given:** A real symmetric $n\times n$ matrix $A$ with $n\ge1$.

[L1] Schur block elimination gives $P^{\mathsf T}MP=A_0\oplus S$ and $\det M=\det A_0\det S$ when the leading block $A_0$ is invertible ([[lem-schur-complement-congruence-and-determinant]]).

[L2] Every real symmetric form is congruent to exactly one matrix $\operatorname{diag}(I_p,-I_q,0_r)$ ([[thm-sylvesters-law-of-inertia]]).

[L3] A product of two positive or two negative elements is positive, and multiplication by a positive scalar preserves and reflects strict inequalities ([[lem-of-sign-rules]], clauses 1, 3, and 4).

[L4] A triangular matrix has determinant equal to the product of its diagonal entries, so $\det I_k=1$ ([[thm-determinant-of-a-triangular-matrix]]).

[L5] Determinants are multiplicative ([[thm-determinant-multiplicative]]).

[L6] The determinant of a positive-sized square matrix equals the determinant of its transpose ([[thm-determinant-of-transpose]]).

## Proof

**Proof technique:** forward determinant comparison and reverse induction on $n$.

1.1 Suppose $A$ is positive definite. Its restriction $A_k$ to the first $k$ coordinate subspace is positive definite for every $1\le k\le n$. In the unique normal form of [L2], a negative or zero diagonal entry would give a nonzero vector of nonpositive value, so the normal form is $I_k$; choose invertible $P_k$ with $P_k^{\mathsf T}A_kP_k=I_k$. Taking determinants using [L4]–[L6] gives $1=(\det P_k)^2\Delta_k$. Since $\det P_k\ne0$, its square is positive by [L3], so $\Delta_k>0$. [L2, L3, L4, L5, L6, given, choose]

1.2 For the converse, the case $n=1$ reads $A=[\Delta_1]$ with $\Delta_1>0$, which is positive definite. [base, given]

1.3 Assume $n>1$, all $\Delta_k>0$, and the converse in size $n-1$. Write $A=\begin{pmatrix}a&b^{\mathsf T}\\b&C\end{pmatrix}$, so $a=\Delta_1>0$, and set $S=C-a^{-1}bb^{\mathsf T}$. For $1\le j<n$, apply [L1] to the leading $(j+1)\times(j+1)$ block: $\Delta_{j+1}=a\det S_j$, where $S_j$ is the leading $j\times j$ block of $S$. Thus [L3] gives $\det S_j=\Delta_{j+1}/a>0$. [ih, L1, L3, given]

2.1 The induction hypothesis makes $S$ positive definite. The congruence in [L1] gives $P^{\mathsf T}AP=[a]\oplus S$, which is positive definite because $a>0$ and $S$ is. Since $P$ is invertible, every nonzero vector is $Py$ for a unique nonzero $y$, so $A$ is positive definite as well. [step 1.3, ih, L1, L3, algebra]

3.1 Step 1.1 proves the forward implication. Steps 1.2–2.1 prove the reverse implication for every $n\ge1$ by induction. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
