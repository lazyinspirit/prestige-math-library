---
id: thm-vinogradov-differencing-sum-estimate
kind: theorem
title: "A differencing estimate for smooth-phase exponential sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - thm-vinogradov-polynomial-product-sum-estimate
  - lem-vinogradov-exponential-sum-toolkit
  - def-vinogradov-mean-value-Jsk
  - thm-holder-finite-real-exponents
  - thm-cauchy-schwarz-finite
  - def-exponential-character-e
  - lem-taylor-lagrange-remainder-from-mean-value
  - lem-sine-chord-and-lipschitz-bounds
  - def-factorial-and-falling-factorial
  - lem-integer-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Theorem 24.11"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 59–61, complete proof of Theorem 24.11."
---

## Statement

Write $e(x):=\exp(2\pi i x)$ for real $x$.

For $U\ge1$, $J_{b,k}(U)$ denotes the $2b$-th torus mean of the degree-$k$ exponential sum, equivalently the count of equal power-sum pairs of $b$-tuples in $[1,U]$. For each natural $j$, $j!$ is the usual natural factorial, viewed as an integer.

Let $N<N'\le2N$, $3\le Q\le N^{1/2}$, integers $k\ge2$ and $b\ge k$, and $R>0$. Let $f$ be real-valued and $C^{k+1}$ on $[N-3Q^2,2N+4Q^2]$, with
$$\frac{|f^{(k+1)}(u)|}{(k+1)!}\le(2Q)^{-2k-2}R^{-1}$$
on that interval. Suppose $0<R_j\le Q^j$ for $2\le j\le k$, and for every integer $n\in[N+Q^2,2N+2Q^2]$ there are coprime integers $a_j,q_j$ such that
$$R_j\le q_j\le Q^{2j}R_j^{-1},\qquad \left|\frac{f^{(j)}(n)}{j!}-\frac{a_j}{q_j}\right|\le q_j^{-2}\quad(2\le j\le k).$$
Then
$$\left|\sum_{N<n\le N'}e(f(n))\right|\ll N\left(\frac1Q+R^{-1/2}+\left(\frac{J_{b,k}(2Q)}{(2Q)^{2b-\frac12k(k+1)}}\right)^{1/(4b^2)}\left(\prod_{j=2}^kR_j^{-1}\right)^{1/(8b^2)}\right).$$

## Statement references

[Montgomery–Vaughan, Theorem 24.11 and complete proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[[def-vinogradov-mean-value-Jsk]]

[[def-factorial-and-falling-factorial]]

[[lem-integer-part]]

## Facts & Assumptions

**Given:** The smooth phase and parameters in the statement.

[F1] The product-sum bound applies to polynomial phases whose coefficients have reduced rational approximants of error at most $q^{-2}$ ([[thm-vinogradov-polynomial-product-sum-estimate]]).

[F2] The interval and bilinear estimates hold with homogeneous coefficient scale; when the divisor majorant is $A=1$, the bilinear bound is $CN\sqrt M(1+S)^{1/2}$, where $S$ is the largest convolution Fourier supremum ([[lem-vinogradov-exponential-sum-toolkit]]).

[F3] Finite Cauchy–Schwarz and Hölder inequalities apply to the finite sums ([[thm-cauchy-schwarz-finite]], [[thm-holder-finite-real-exponents]]).

[F4] Taylor's theorem with Lagrange remainder applies to $C^{k+1}$ functions ([[lem-taylor-lagrange-remainder-from-mean-value]]).

[F5] $|\sin u-\sin v|\le|u-v|$ for real $u,v$ ([[lem-sine-chord-and-lipschitz-bounds]]); together with $e(t)=\exp(2\pi it)$ this gives $|e(x)-e(y)|\le2\pi|x-y|$ ([[def-exponential-character-e]]).

[F6] $J_{b,k}(X)$ is the $2b$-th torus mean, equivalently the number of equal-power-sum solutions ([[def-vinogradov-mean-value-Jsk]]).

[F7] The factorial $j!$ is the product of the first $j$ positive naturals ([[def-factorial-and-falling-factorial]]).

[F8] $\lfloor x\rfloor$ is the unique integer $m$ with $m\le x<m+1$ ([[lem-integer-part]]).

## Proof

**Proof technique:** bilinear differencing followed by Taylor expansion and the product-sum estimate.

1.1 Put $M=Q^2$ as a real number and define $c_m=\#\{(\ell,v)\in\mathbb Z^2:Q<\ell,v\le2Q,\ \ell v=m\}$ for positive integers $m$. Then $c_m\le\sum_{d\mid m,Q<d\le2Q}1$ and $\sum_m c_m\ll Q^2$. Moreover, $$\sum_{M<m\le2M}c_m\ge\bigl(\lfloor\sqrt2Q\rfloor-\lfloor Q\rfloor\bigr)^2\gg Q^2,$$ because every pair with $Q<\ell,v\le\sqrt2Q$ has $Q^2<\ell v\le2Q^2$, and the number of such integers in each coordinate is at least $((\sqrt2-1)-1/3)Q$ for $Q\ge3$. Let $d_h=e(f(h))$ for every integer $h$ in the entire given interval $[N-3Q^2,2N+4Q^2]$, and let $d_h=0$ outside that interval, and put $S=\sum_{N<n\le N'}e(f(n))$. Since $M\le N$ and $Q\le\sqrt{2M}$, the bilinear estimate [F2] with $A=1$ gives $$Q^2|S|\ll NQ\left(1+\max_{N+Q^2<u\le2N+2Q^2}\sup_{\beta\in\mathbb R}\left|\sum_{m\ge1}c_md_{u-m}e(m\beta)\right|\right)^{1/2}.$$ [given, F2, F3, F8, choose, construct, algebra]

2.1 Fix an outer index $u$ and $\beta$. The original $n$-range remains on the left of the bilinear estimate: after $u=m+n$, its sharp restriction is the interval $I_u=\{m:M<m\le2M,\ N<u-m\le N'\}$. The toolkit first applies its interval estimate to $C_u(m)=c_md_{u-m}$ on $I_u$, while its Fourier supremum uses this full coefficient sequence. No comparison between masked and unmasked Fourier norms is made. For every full support point $Q^2<m\le4Q^2$ and outer $N+Q^2<u\le2Q^2+N'$, the integer $u-m$ is inside the given differentiability interval; therefore the convolution in step 1.1 is literally the full rectangular sum $$\sum_{Q<\ell,v\le2Q}e\bigl(f(u-\ell v)+\ell v\beta\bigr).$$ Every product $m=\ell v$ in this rectangle satisfies $Q^2<m\le4Q^2$, so $u-m\in[N-3Q^2,2N+4Q^2]$. Taylor's theorem [F4] gives $$f(u-\ell v)+\ell v\beta=f(u)+\sum_{j=1}^k(\ell v)^j\alpha_j+O(R^{-1}),\quad \alpha_1=\beta-f'(u),\quad \alpha_j=(-1)^jf^{(j)}(u)/j!\ (j\ge2).$$ The remainder is at most $R^{-1}$ by the derivative hypothesis and $\ell v\le4Q^2$; there are $O(Q^2)$ pairs, so [F5] changes the sum by $O(Q^2R^{-1})$. Apply [F1] to the full rectangle: take $q_1=1$ and $a_1=\lfloor\alpha_1+1/2\rfloor$. By [F8], $|\alpha_1-a_1|\le1/2\le q_1^{-2}$. For $j\ge2$ use the supplied reduced fraction with numerator $(-1)^ja_j$. Since $R_j\le Q^j$, each $j$th rational-spacing factor is $O(R_j^{-1})$, and therefore $$\sup_{\beta\in\mathbb R}\left|\sum_{m\ge1}c_md_{u-m}e(m\beta)\right|\ll Q^2R^{-1}+Q^2\left(\frac{J_{b,k}(2Q)}{(2Q)^{2b-\frac12k(k+1)}}\right)^{1/(2b^2)}\prod_{j=2}^kR_j^{-1/(4b^2)}.$$ [given, F1, F2, F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 Substitute step 2.1 into step 1.1 and use $\sqrt{1+x+y}\le1+\sqrt x+\sqrt y$. Dividing by the coefficient mass $\sum_{Q^2<m\le2Q^2}c_m\gg Q^2$, the three terms are $O(N/Q)$, $O(NR^{-1/2})$, and $$O\!\left(N\left(\frac{J_{b,k}(2Q)}{(2Q)^{2b-\frac12k(k+1)}}\right)^{1/(4b^2)}\prod_{j=2}^kR_j^{-1/(8b^2)}\right).$$ These are exactly the asserted bounds. [step 1.1, step 2.1, given, F6, algebra] ∎

