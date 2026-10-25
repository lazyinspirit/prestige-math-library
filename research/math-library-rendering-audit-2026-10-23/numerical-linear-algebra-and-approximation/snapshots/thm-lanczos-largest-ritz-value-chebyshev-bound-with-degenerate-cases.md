---
id: thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases
kind: theorem
title: "Lanczos largest Ritz values obey a Chebyshev start-angle bound, including degenerate branches"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-krylov-subspace-of-a-matrix-and-start-vector,
       def-arnoldi-process,
       def-lanczos-process-as-hermitian-arnoldi,
       thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization,
       def-ritz-values-and-ritz-vectors-from-arnoldi,
       prop-ritz-residual-formula-for-an-arnoldi-ritz-pair,
       thm-courant-fischer-min-max-principle,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       lem-scaled-chebyshev-filter-bound-on-a-separated-interval]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §6.6 and §6.11.1, printed pp. 194–195 and 209–210"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Exact Lanczos recurrence and real Chebyshev polynomial filtering; the extremal Ritz bound below is proved locally."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lectures 38–39"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec38-39.pdf"
      locator: "PDF pp. 3–6: Ritz residual identity, Rayleigh–Ritz characterization, and the Chebyshev bound with the initial-angle factor."
---

## Statement

Let $A\in\mathbb R^{n\times n}$, $n\ge1$, be symmetric with ordered eigenvalues
$\lambda_1\ge\cdots\ge\lambda_n$. Let $r$ be the multiplicity of $\lambda_1$.
If $r<n$, assume $\lambda_1>\lambda_{r+1}$, and let $P$ be the orthogonal
projection onto the $\lambda_1$-eigenspace. Let $b\in\mathbb R^n$ be a unit
vector and, for $m\ge1$, define

$$K_m:=\operatorname{span}\{b,Ab,\ldots,A^{m-1}b\},\qquad \theta_m:=\max_{0\ne x\in K_m}\frac{x^{\mathsf T}Ax}{x^{\mathsf T}x}.$$

Thus $\theta_m$ is the largest Rayleigh–Ritz value on $K_m$; if Lanczos runs
through step $m$ without breakdown, it is the largest Ritz value of
$Q_m^{\mathsf T}AQ_m$. If $r=n$, then $A=\lambda_1I$ and $\theta_m=\lambda_1$
for every $m\ge1$. Suppose $r<n$.

1. If $Pb=0$, then $\theta_m\le\lambda_{r+1}$ for every $m$; no convergence
   to $\lambda_1$ is asserted.

2. If $Pb\ne0$, put
   $$\tau:=\frac{\|(I-P)b\|_2}{\|Pb\|_2}.$$
   If $\lambda_{r+1}>\lambda_n$, then for every $m\ge1$,
   $$0\le\lambda_1-\theta_m\le \frac{(\lambda_1-\lambda_n)\tau^2} {T_{m-1}\!\left(1+2\frac{\lambda_1-\lambda_{r+1}} {\lambda_{r+1}-\lambda_n}\right)^2}.$$
   For a simple top eigenvalue ($r=1$), $\tau$ is the tangent of the angle
   between $b$ and a unit top eigenvector, so the starting-angle denominator
   is explicit.

3. If $Pb\ne0$ and $\lambda_{r+1}=\lambda_n$, then
   $$\lambda_1-\theta_1=(\lambda_1-\lambda_n) \frac{\|(I-P)b\|_2^2}{\|b\|_2^2},\qquad \theta_m=\lambda_1\quad(m\ge2).$$

When $r<n$, $Pb\ne0$, and exact Lanczos breakdown occurs at dimension $d$, then
$\theta_d=\lambda_1$ and $K_m=K_d$ for all $m\ge d$. These are exact-arithmetic
claims; they give no finite-precision grade-termination guarantee.

## Facts & Assumptions

**Given:** A real symmetric $A\in\mathbb R^{n\times n}$, its ordered eigenvalues, the top-eigenspace projection $P$ when $r<n$, a unit start vector $b$, the Krylov spaces $K_m$, and the largest Rayleigh–Ritz values $\theta_m$ defined in the Statement.

[F1] [[def-lanczos-process-as-hermitian-arnoldi]]: exact Lanczos is Arnoldi applied to a symmetric matrix, with real nonnegative subdiagonal coefficients before breakdown.

[F2] [[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]: before breakdown, the Arnoldi vectors form an orthonormal basis of $K_m$ and satisfy $AQ_m=Q_{m+1}\bar H_m$.

[F3] [[def-ritz-values-and-ritz-vectors-from-arnoldi]] and [[prop-ritz-residual-formula-for-an-arnoldi-ritz-pair]]: eigenvalues of $H_m=Q_m^{\mathsf T}AQ_m$ are Ritz values with vectors $u=Q_my$; if Arnoldi runs through step $m$ without breakdown and $H_my=\theta y$, then $Au-\theta u=h_{m+1,m}(e_m^{\mathsf T}y)v_{m+1}$.

[F4] [[thm-courant-fischer-min-max-principle]] and [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: every real symmetric compression has a largest Rayleigh–Ritz value equal to its largest eigenvalue, and $A$ has an orthonormal eigenbasis.

[F5] [[lem-scaled-chebyshev-filter-bound-on-a-separated-interval]]: for $a>b>c$, the degree-$k$ scaled filter has value $1$ at $a$ and absolute value at most $1/T_k(1+2(a-b)/(b-c))$ on $[c,b]$.

[F6] [[def-arnoldi-process]]: each exact Arnoldi column has $Av_j=\sum_{i=1}^j h_{ij}v_i+w_j$; exact breakdown at column $d$ means $w_d=0$.

[F7] [[def-krylov-subspace-of-a-matrix-and-start-vector]]: $K_m(A,b)=\operatorname{span}\{b,Ab,\ldots,A^{m-1}b\}$.

## Proof

1.1 If exact Lanczos runs through step $m$ without breakdown, [F1], [F2], and [F7] give an orthonormal basis $Q_m$ of $K_m$ and a symmetric compression $H_m=Q_m^{\mathsf T}AQ_m$. By [F3], each eigenpair of $H_m$ lifts to an exact Ritz pair of $A$; by [F4], the largest eigenvalue of $H_m$ is the maximum Rayleigh quotient on $K_m$, namely $\theta_m$. If Lanczos breaks down earlier, no step-$m$ basis or Ritz assertion is used; $\theta_m$ remains defined directly by the Rayleigh–Ritz formula in the Statement. [given, F1, F2, F3, F4, F7]

1.2 Assume $r<n$. By [F4], choose an orthonormal eigenbasis of $A$ whose first $r$ vectors span the range of $P$. If $Pb=0$, then $b$ is orthogonal to that eigenspace. For every integer $j\ge0$ and every top eigenvector $u$, symmetry gives $u^{\mathsf T}A^jb=(A^ju)^{\mathsf T}b=\lambda_1^j u^{\mathsf T}b=0$. Thus every vector in $K_m$ lies in the orthogonal complement of the top eigenspace, where all Rayleigh quotients are at most $\lambda_{r+1}$; this proves branch 1. [given, F4, F7, algebra]

1.3 If $r=n$, every eigenvalue is $\lambda_1$, so [F4] gives $A=\lambda_1I$. Every nonzero $x\in K_m$ then has Rayleigh quotient $\lambda_1$, proving the stated dimension-one/full-multiplicity branch. [given, F4, algebra]

1.4 Assume $Pb\ne0$ and $\lambda_{r+1}>\lambda_n$. Apply [F5] with $a=\lambda_1$, $b=\lambda_{r+1}$, $c=\lambda_n$, and $k=m-1$ to obtain a polynomial $p_{m-1}$ of degree at most $m-1$ with $p_{m-1}(\lambda_1)=1$ and $|p_{m-1}(t)|\le\delta_m$ on $[\lambda_n,\lambda_{r+1}]$, where $\delta_m:=1/T_{m-1}(1+2(\lambda_1-\lambda_{r+1})/(\lambda_{r+1}-\lambda_n))$. By [F7], $x:=p_{m-1}(A)b$ belongs to $K_m$, and spectral decomposition gives $Px=Pb$ and $\|(I-P)x\|_2\le\delta_m\|(I-P)b\|_2$. [given, F4, F5, F7, algebra]

1.5 Assume $Pb\ne0$ and $\lambda_{r+1}=\lambda_n$. The spectral decomposition gives $A=\lambda_n I+(\lambda_1-\lambda_n)P$. Hence $Ab=\lambda_n b+(\lambda_1-\lambda_n)Pb$, so [F7] gives $Pb\in K_2$ and it has Rayleigh quotient $\lambda_1$; this proves $\theta_m=\lambda_1$ for $m\ge2$. For $m=1$, [F7] gives $K_1=\operatorname{span}\{b\}$, and the same decomposition gives the displayed exact formula for $\lambda_1-\theta_1$. [given, F4, F7, algebra]

1.6 Finally, assume $r<n$, $Pb\ne0$, and exact Lanczos breaks down at column $d$. For $d>1$, no breakdown occurs at columns $j<d$. Starting from $q_1=b/\|b\|_2$, inductively suppose $q_1,\ldots,q_j$ form an orthonormal basis of $K_j$. By the exact Arnoldi definition [F1, F6], the residual $w_j=Aq_j-\sum_{i=1}^j h_{ij}q_i$ lies in $K_{j+1}$, is orthogonal to $K_j$, and is nonzero for $j<d$; hence its normalized vector $q_{j+1}$ lies in $K_{j+1}\setminus K_j$. Since $K_{j+1}$ is generated by $j+1$ vectors, $q_1,\ldots,q_{j+1}$ form a basis of $K_{j+1}$. Thus $q_1,\ldots,q_d$ form a basis of $K_d$. For $d=1$, $q_1$ directly spans $K_1$. Each $Aq_j\in K_d$ for $j<d$, and $Aq_d\in K_d$ because its orthogonalized residual $w_d$ is zero. Hence $AK_d\subseteq K_d$, and [F7] plus induction gives $K_m=K_d$ for $m\ge d$. [given, F1, F6, F7, induction, algebra]

2.1 In the eigenbasis of [F4], write $x=Px+(I-P)x$. The two components are orthogonal, $A(Px)=\lambda_1Px$, and all eigenvalues on the second component lie in $[\lambda_n,\lambda_{r+1}]$. Therefore $$\lambda_1-\frac{x^{\mathsf T}Ax}{x^{\mathsf T}x} =\frac{\sum_{j>r}(\lambda_1-\lambda_j)x_j^2} {\|Px\|_2^2+\|(I-P)x\|_2^2} \le(\lambda_1-\lambda_n)\frac{\|(I-P)x\|_2^2}{\|Pb\|_2^2} \le(\lambda_1-\lambda_n)\delta_m^2\tau^2.$$ Since $\theta_m$ is the maximum Rayleigh quotient on $K_m$, it is at least the quotient of this nonzero $x$ and at most $\lambda_1$. This proves branch 2, including $m=1$ because $T_0=1$. [given, F4, step 1.4, algebra]

3.1 Let $\mu_1=\lambda_1,\mu_2,\ldots,\mu_s$ be the distinct eigenvalues of $A$. Since $r<n$, $s\ge2$ and the denominators below are nonzero. Define $$p(t):=\prod_{i=2}^{s}\frac{t-\mu_i}{\lambda_1-\mu_i}.$$ Then $p(\lambda_1)=1$ and $p(\mu_i)=0$ for $i\ge2$. On the orthonormal eigenbasis from [F4], $p(A)$ therefore acts as the identity on the $\lambda_1$-eigenspace and as zero on every other eigenspace, so $p(A)=P$. Since $AK_d\subseteq K_d$ and $b\in K_d$, every power of $A$ applied to $b$ lies in $K_d$, whence $Pb=p(A)b\in K_d$. The nonzero vector $Pb$ has Rayleigh quotient $\lambda_1$, while no quotient can exceed $\lambda_1$; thus $\theta_d=\lambda_1$ and the exact-breakdown branch follows. [given, F4, step 1.6, algebra, induction] ∎

