---
id: lem-hp-unweighted-legendre-derivative-tail
kind: lemma
title: An ordinary derivative controls the Legendre tail with a factorial ratio
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - lem-legendre-weighted-derivative-orthogonality-and-norm
  - cor-weierstrass-approximation-on-a-closed-interval
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: Full Choice is inherited through the one-dimensional Sobolev representative supplier for the k>=1 branch; the k=0 contraction branch is choice-free.
sources:
  references:
    - title: Shen and Tang, Spectral and High-Order Methods with Applications
      url: https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf
      locator: "Chapter 1, §1.8, printed pp. 61–67: Jacobi/Legendre projection estimates, derivative orthogonality, and the weighted Sobolev scale. The exact ordinary unweighted factorial estimate is proved locally here."
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 30: hp Finite Elements"
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§30.4.2, projection-based interpolation on triangles and the Legendre tail estimate; the higher-order derivative identity is completed locally here."
---

## Statement

Let $P_n$ be the real Legendre polynomial normalized by $P_n(1)=1$, and let $\Pi_N$ be the $L^2(-1,1;\mathbb R)$ orthogonal projection onto $\mathbb P_N(-1,1)$. For every integer $k\ge1$, every integer $N\ge k-1$, and every real-valued $f\in H^k(-1,1)$,

$$
\|f-\Pi_Nf\|_{L^2(-1,1)}\le\left(\frac{(N+1-k)!}{(N+1+k)!}\right)^{1/2}\|f^{(k)}\|_{L^2(-1,1)}.
$$

For $k=0$ and $f\in L^2(-1,1)$, $\|f-\Pi_Nf\|_2\le\|f\|_2$. For $n,m\ge k$ the repeated derivative orthogonality identity is

$$
\int_{-1}^1(1-x^2)^kP_n^{(k)}(x)P_m^{(k)}(x)\,dx=\frac{2}{2n+1}\frac{(n+k)!}{(n-k)!}\,\delta_{nm}.
$$


## Facts & Assumptions

**Given:** The Axiom of Choice; integers $k,N$ in the stated ranges; and a real-valued Sobolev class $f\in H^k(-1,1)$.

[A1] The Axiom of Choice is assumed only for the $k\ge1$ branch. ([[def-axiom-of-choice]])

[F1] The Rodrigues Legendre polynomials are mutually orthogonal in $L^2(-1,1)$, have norm squared $2/(2n+1)$, and have degree $n$ with nonzero leading coefficient. ([[lem-legendre-weighted-derivative-orthogonality-and-norm]])

[F2] Polynomials are uniformly dense in the continuous real functions on $[-1,1]$ ([[cor-weierstrass-approximation-on-a-closed-interval]]), and smooth compactly supported functions are dense in $L^2(-1,1)$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]). Thus polynomials are dense in $L^2(-1,1)$.

[F3] Every one-dimensional $W^{1,2}$ class on a bounded interval has an absolutely continuous representative satisfying $v(y)-v(x)=\int_x^y Dv$; this theorem assumes Full Choice. Apply it to $f,f',\ldots,f^{(k-1)}$. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]])

[F4] Cauchy–Schwarz makes each displayed polynomial pairing finite. Expanding the norm after subtracting a finite orthogonal projection gives Bessel's inequality without any infinite-dimensional projection theorem. ([[thm-cauchy-schwarz-in-an-inner-product-space]])

## Proof

1.1 Fix $k\ge1$ and put $w_k(x)=(1-x^2)^k$. For $n\ge k$, the polynomial $Q_{n,k}:=D^k(w_kD^kP_n)$ has degree $n$. Integrating by parts $k$ times moves the outer derivative block onto a polynomial $q$ and gives $\int Q_{n,k}q=(-1)^k\int w_kD^kP_nD^kq=\int P_nD^k(w_kD^kq)$; all boundary terms vanish because derivatives of $w_k$ of orders below $k$ vanish at both endpoints. The final polynomial paired with $P_n$ has degree at most $\deg q<n$, so [F1] makes the integral zero. The leading coefficient of $Q_{n,k}$ is $(-1)^k(n+k)!/(n-k)!$ times the leading coefficient of $P_n$. Orthogonality and the degree statement in [F1] therefore give $Q_{n,k}=(-1)^k\lambda_{n,k}P_n$, where $\lambda_{n,k}=(n+k)!/(n-k)!$. [F1, given, algebra]

2.1 For $n,m\ge k$, integrate by parts $k$ times and use step 1.1 to obtain $\int_{-1}^1w_kP_n^{(k)}P_m^{(k)}=(-1)^k\int_{-1}^1P_nD^k(w_kP_m^{(k)})=\lambda_{m,k}\int_{-1}^1P_nP_m.$ The first identity in [F1] makes this zero for $n\ne m$ and equal to $\lambda_{n,k}2/(2n+1)$ for $n=m$, proving the repeated derivative orthogonality formula. [F1, step 1.1, algebra]

3.1 Write $c_n=(f,P_n)_{L^2}/\|P_n\|_2^2$. The absolutely continuous representatives in [F3] justify $k$ integrations by parts; all boundary terms vanish because $w_k$ has endpoint zeros of order $k$. Step 1.1 then gives $\int_{-1}^1w_kf^{(k)}P_n^{(k)}=\lambda_{n,k}c_n\|P_n\|_2^2\qquad(n\ge k).$ The functions $w_k^{1/2}P_n^{(k)}$ are mutually orthogonal by step 2.1 and have squared norms $\lambda_{n,k}\|P_n\|_2^2$. Applying finite Bessel inequalities to $w_k^{1/2}f^{(k)}$ and then increasing the finite index set yields $\sum_{n\ge k}\lambda_{n,k}|c_n|^2\|P_n\|_2^2\le\int_{-1}^1w_k|f^{(k)}|^2\le\|f^{(k)}\|_2^2.$ [A1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Density [F2] and the best-approximation property of finite orthogonal projections imply $\Pi_Mf\to f$ in $L^2$: first approximate $f$ by a polynomial and then take $M$ at least its degree. Orthogonality [F1] and Pythagoras give $\|f-\Pi_Nf\|_2^2=\sum_{n>N}|c_n|^2\|P_n\|_2^2$. Since $\lambda_{n,k}$ increases for $n\ge k$, step 3.1 bounds this tail by $\lambda_{N+1,k}^{-1}\|f^{(k)}\|_2^2$, which is the stated factorial estimate. When $k=0$, the same finite Pythagoras identity directly gives contraction. [F1, F2, step 3.1, algebra] ∎
