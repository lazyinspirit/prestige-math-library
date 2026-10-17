---
id: thm-na-euler-maclaurin-composite-trapezoid-remainder
kind: theorem
title: "Finite Euler–Maclaurin formula for the composite trapezoid"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 2
deps: [def-na-bernoulli-polynomials, lem-na-bernoulli-polynomial-identities, def-composite-trapezoidal-rule, def-higher-derivatives-and-smoothness, def-factorial-and-falling-factorial, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-chain-rule, thm-induction-principle, thm-ftc-second-part, thm-continuous-implies-integrable, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-linearity-of-the-integral, thm-additivity-over-subintervals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The proof uses finite sums, Riemann integration, and cellwise integration by parts only.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.3"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 228–235, Euler–Maclaurin correction terms and Bernoulli remainder."
    - title: "NIST Digital Library of Mathematical Functions, §3.5(iii), Romberg Integration"
      url: "https://dlmf.nist.gov/3.5"
      locator: "Full-text section §3.5(iii), equations 3.5.9–3.5.12 on the finite even-power expansion and Romberg recurrence."
---

## Statement

Let $a<b$, let $N\ge1$ and $p\ge1$ be integers, put $h=(b-a)/N$ and $x_i=a+ih$, and let $f\in C^{2p}([a,b])$ in the sense of [[def-higher-derivatives-and-smoothness]]. Write $B_m(x)$ for [[def-na-bernoulli-polynomials]] and $B_m:=B_m(0)$. For $u_i(x):=(x-x_i)/h$ on $[x_i,x_{i+1}]$, the composite trapezoidal value $T_N(f)$ of [[def-composite-trapezoidal-rule]] satisfies
$$T_N(f)=\int_a^b f(x)\,dx+\sum_{r=1}^{p}\frac{B_{2r}h^{2r}}{(2r)!}\bigl(f^{(2r-1)}(b)-f^{(2r-1)}(a)\bigr)-\frac{h^{2p}}{(2p)!}\sum_{i=0}^{N-1}\int_{x_i}^{x_{i+1}}B_{2p}(u_i(x))f^{(2p)}(x)\,dx.$$
In particular, with $M_{2p}:=\max_{0\le u\le1}|B_{2p}(u)|$, the absolute value of the final remainder is at most $(b-a)M_{2p}h^{2p}\|f^{(2p)}\|_\infty/(2p)!$.

## Facts & Assumptions

**Given:** A nondegenerate interval $[a,b]$, integers $N,p\ge1$, the uniform mesh, and $f\in C^{2p}([a,b])$.

[A1] The parameters satisfy $a<b$, $N\ge1$, $p\ge1$, $h=(b-a)/N>0$, and $f$ has continuous derivatives through order $2p$ on $[a,b]$.

[F1] [[def-composite-trapezoidal-rule]]: $T_N(f)=h\bigl(f(a)/2+\sum_{i=1}^{N-1}f(x_i)+f(b)/2\bigr)$.

[F2] [[def-na-bernoulli-polynomials]] and [[lem-na-bernoulli-polynomial-identities]]: $B_1(u)=u-\tfrac12$, $B'_m=mB_{m-1}$, $B_m(1)=B_m(0)$ for $m\ge2$, and $B_m(0)=0$ for odd $m\ge3$.

[F3] [[def-higher-derivatives-and-smoothness]]: $C^{2p}([a,b])$ means the derivatives through order $2p$ are continuous, with one-sided endpoint derivatives.

[F4] [[thm-ftc-second-part]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], and [[lem-derivative-of-a-power]]: the derivatives and antiderivatives of the polynomial factors below obey the usual power, product, sum, and chain rules on each panel, so FTC applied to product derivatives gives the integration-by-parts identities.

[F5] [[thm-linearity-of-the-integral]], [[thm-additivity-over-subintervals]], and [[thm-continuous-implies-integrable]]: the continuous panel integrands are Riemann-integrable, integrals are linear, and adjacent panel integrals add.

[F6] [[def-factorial-and-falling-factorial]]: $(k)!$ is the positive product of the first $k$ positive integer real images.

[F7] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a continuous real function on the compact interval $[0,1]$ attains finite maximum and minimum values.

## Proof

1.1 On a panel $[x_i,x_{i+1}]$, put $u=(x-x_i)/h$. Integration by parts using $B_1(u)=u-\tfrac12$ gives $h\int_{x_i}^{x_{i+1}}B_1(u)f'(x)\,dx=\frac h2\bigl(f(x_i)+f(x_{i+1})\bigr)-\int_{x_i}^{x_{i+1}}f(x)\,dx.$ Summing this identity over the $N$ panels and using [F1] and [F5] yields $T_N(f)-\int_a^b f=J_1$, where $J_k:=\frac{h^k}{k!}\sum_{i=0}^{N-1}\int_{x_i}^{x_{i+1}}B_k(u_i(x))f^{(k)}(x)\,dx$ for $1\le k\le2p$. [given, A1, F1, F2, F5, F6, algebra]

1.2 For $1\le k<2p$, differentiate $B_{k+1}(u_i(x))$ to get $(k+1)B_k(u_i(x))/h$. Integrating by parts on each panel therefore gives $J_k=\frac{h^{k+1}}{(k+1)!}\sum_{i=0}^{N-1}\bigl[B_{k+1}(u_i(x))f^{(k)}(x)\bigr]_{x_i}^{x_{i+1}}-J_{k+1}.$ Because $B_{k+1}(1)=B_{k+1}(0)$ by [F2], the interior endpoint terms telescope, leaving $\frac{h^{k+1}B_{k+1}}{(k+1)!}(f^{(k)}(b)-f^{(k)}(a))$ as the boundary term. [given, A1, F2, F3, F4, F5, algebra]

2.1 Write $b_q:=\frac{B_qh^q}{q!}(f^{(q-1)}(b)-f^{(q-1)}(a))$ for $q\ge2$. If $k+1$ is odd and at least $3$, [F2] makes that boundary term zero, so step 1.2 gives $J_k=-J_{k+1}$. If $k+1=2r$ is even, step 1.2 gives $J_{2r-1}=b_{2r}-J_{2r}$. For each $r<p$, the odd-index recurrence at $k=2r$ gives $J_{2r}=-J_{2r+1}$; hence $J_{2r-1}=b_{2r}+J_{2r+1}$. Finite induction on $r=1,\ldots,p-1$ ([[thm-induction-principle]]) iterates these identities; followed by the final even-index recurrence, it gives $J_1=\sum_{r=1}^{p}\frac{B_{2r}h^{2r}}{(2r)!}\bigl(f^{(2r-1)}(b)-f^{(2r-1)}(a)\bigr)-J_{2p}.$ [given, step 1.2, F2, algebra]

3.1 The polynomial $B_{2p}$ is continuous by [F2], so [F7] ensures $M_{2p}=\max_{[0,1]}|B_{2p}|$ exists and is finite. By the definition of $J_{2p}$ and the bound $|B_{2p}(u)|\le M_{2p}$ on each unit cell, $|J_{2p}|\le h^{2p}M_{2p}\|f^{(2p)}\|_\infty\sum_i(x_{i+1}-x_i)/(2p)!=(b-a)M_{2p}h^{2p}\|f^{(2p)}\|_\infty/(2p)!$. Substituting step 2.1 into step 1.1 proves the stated formula and remainder bound. [given, A1, F2, F5, F6, F7, step 1.1, step 2.1, algebra] ∎
