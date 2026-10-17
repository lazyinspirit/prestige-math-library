---
id: lem-xd-finite-matrix-exponential-series
kind: lemma
title: "Finite matrix exponential series and its identities"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums
  - thm-matrix-multiplication-laws
  - def-group-power
  - thm-induction-principle
  - def-factorial-and-falling-factorial
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorem 3.2 and its proof, PDF pp. 8–10; finite matrix exponential representation and its differential equation."
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, equation (2.6), printed pp. 044104-2–044104-3; finite-dimensional master equation solved by a matrix exponential."
---

## Statement

For a finite real square matrix $A$, define

$$e^{tA}:=\sum_{k=0}^{\infty}\frac{t^kA^k}{k!}.$$

This series converges absolutely and uniformly for $t$ in every bounded interval. It is differentiable with $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$ and $e^{0A}=I$. If finite square matrices $A$ and $B$ commute, then $e^Ae^B=e^{A+B}$.

## Facts & Assumptions

**Given:** A finite real square matrix $A$, and, for the product identity, finite real square matrices $A,B$ with $AB=BA$.

[F1] For matrices of positive sizes, the induced matrix $1$-norm is a norm (so is absolutely homogeneous and satisfies the triangle inequality) and is submultiplicative: $\|CD\|_1\le\|C\|_1\|D\|_1$. ([[def-induced-matrix-p-norm]], [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]])

[F2] The scalar series $\sum_{k\ge0}x^k/k!$ converges absolutely for every real $x$ and defines $e^x$. ([[def-real-exponential-function-and-e]], [[lem-exponential-series-has-infinite-radius]])

[F3] Matrix multiplication is associative and unital and distributes over matrix addition; it is compatible with scalar multiplication, including all zero-sized shapes. ([[thm-matrix-multiplication-laws]])

[F4] Since $M_n(\mathbb R)$ is a monoid by [F3], its natural powers satisfy $A^0=I_n$ and $A^{k+1}=A^kA$. ([[def-group-power]])

[F5] For $n\ge1$, the induced matrix $1$-norm is the maximum absolute column sum. In particular, $|C_{ij}|\le\|C\|_1$ for each entry. ([[thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]])

[F6] Factorials satisfy $0!=1$ and $(k+1)!=(k+1)k!$ and are nonzero; their canonical real images, used for the scalar denominators below, are nonzero. ([[def-factorial-and-falling-factorial]], [[def-real-exponential-function-and-e]])

## Proof


**Proof technique:** direct.

1.1 If $A$ has size $0\times0$, the matrix space has one element, which is both $0$ and $I_0$; every partial sum in the definition is this same matrix. Thus $e^{tA}=I_0$ for every $t$, its derivative is the zero matrix, and the derivative identities, initial value, and commuting-product identity all hold because every product and sum is the unique empty matrix. Hence assume below that $A$ has size $n\times n$ with $n\ge1$. [given, F3, F4, algebra]

1.2 Put $M=\|A\|_1$. By induction using [F1] and [F4], $\|A^k\|_1\le M^k$ for every $k\ge0$. For $|t|\le T$, [F5] then bounds each entry of $t^kA^k/k!$ by $(TM)^k/k!$. The scalar majorant converges by [F2], so each entry series converges absolutely and uniformly on $[-T,T]$; its entrywise sums define a matrix $E(t)$. Each column has only $n$ entries, so the maximum-column-sum formula [F5] bounds the norm of a matrix tail by $n$ times the scalar majorant tail. Therefore the matrix series converges in induced $1$-norm uniformly on $[-T,T]$. Since $T$ was arbitrary, it converges locally uniformly and defines $e^{tA}=E(t)$. [given, F1, F2, F4, F5, induction, algebra]

1.3 Suppose $A,B\in M_n(\mathbb R)$ commute. For each $r\ge0$ set $D_r:=\sum_{m=0}^r A^mB^{r-m}/(m!(r-m)!)$. Induction from $AB=BA$ and [F3] gives $B^sA=AB^s$ for every $s\ge0$. Distributing $D_r(A+B)$ and using this commutation, the coefficient of $A^jB^{r+1-j}$ is $1/(j!(r-j)!)+1/((j-1)!(r+1-j)!)$ for $1\le j\le r$, which equals $(r+1)/(j!(r+1-j)!)$ by [F6]; for $j=0$ and $j=r+1$ the single endpoint coefficient has that same value by $(r+1)!=(r+1)r!$. Thus $D_r(A+B)=(r+1)D_{r+1}$. Since $D_0=I_n$, induction, the recursive power law [F4], and the nonzero factorial images in [F6] give $D_r=(A+B)^r/r!$ for every $r$. [given, F3, F4, F6, induction, algebra]

2.1 Fix $c\in\mathbb R$ and choose $R>|c|$. If $|h|<R-|c|$, then $|c|,|c+h|<R$; for $k\ge1$, the factorization $(c+h)^k-c^k=h\sum_{j=0}^{k-1}(c+h)^{k-1-j}c^j$ bounds the norm of the $k$th matrix-series difference quotient by $M^kR^{k-1}/(k-1)!$, and the same bound holds for the $k$th proposed derivative term $c^{k-1}A^k/(k-1)!$. The sum of these bounds is $M\sum_{j\ge0}(MR)^j/j!<\infty$ by [F2]. For each finite partial sum, the factorization also shows that its difference quotient tends to the finite sum of the proposed derivative terms, using $(k+1)!=(k+1)k!$ from [F6]. For each fixed nonzero $h$, the full difference quotient is the limit of those of the finite partial sums by [step 1.2]; the two uniform tail bounds let us first choose a large partial sum and then take $h\to0$. Consequently $E$ is differentiable at $c$ and $E'(c)=\sum_{k\ge1}c^{k-1}A^k/(k-1)!$. [given, F1, F2, F4, F6, step 1.2, algebra]

2.2 Apply the power bound and convergence argument of step 1.2 to $B$ and $A+B$ as well. Put $a_m=\|A\|_1^m/m!$ and $b_n=\|B\|_1^n/n!$; both scalar series converge by [F2]. The finite product $E_N(A)E_N(B)$ expands by [F3] as the square sum over $0\le m,n\le N$ of $A^mB^n/(m!n!)$, whose term norms are at most $a_mb_n$ by [F1] and [F4]. Its difference from the triangular sum over $m+n\le N$ has norm at most $(\sum_{m>N/2}a_m)(\sum_n b_n)+(\sum_m a_m)(\sum_{n>N/2}b_n)$, which tends to zero; every omitted pair has $m>N/2$ or $n>N/2$. By step 1.2, $E_N(A)E_N(B)\to e^Ae^B$ (matrix multiplication is continuous by [F1]); by step 1.3 the triangular sum is $\sum_{r=0}^N(A+B)^r/r!$, which converges to $e^{A+B}$. Therefore $e^Ae^B=e^{A+B}$. [given, step 1.2, step 1.3, F1, F2, F3, F4, algebra]

3.1 From [F3] and the recursive power definition [F4], induction gives $A^k=AA^{k-1}=A^{k-1}A$ for every $k\ge1$. Hence the derivative series in step 2.1 is the limit of both $A\sum_{j=0}^{N}c^jA^j/j!$ and $\bigl(\sum_{j=0}^{N}c^jA^j/j!\bigr)A$ as $N\to\infty$. Submultiplicativity [F1] makes multiplication by fixed $A$ continuous, so these limits are $AE(c)$ and $E(c)A$. At $c=0$, all positive-degree terms vanish and the constant term is $A^0=I_n$. Thus $E'(c)=AE(c)=E(c)A$ and $E(0)=I_n$. [step 1.2, step 2.1, F1, F3, F4, induction, algebra]

4.1 Step 1.1 covers the zero-sized matrix case. For $n\ge1$, steps 1.2 and 2.1 establish convergence and differentiation, step 3.1 gives the derivative identities and initial value, and steps 1.3 and 2.2 prove the commuting-product identity. Thus every claim in the Statement holds. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, step 2.2] ∎

