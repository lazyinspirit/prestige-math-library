---
id: thm-hp-triangle-unweighted-smooth-approximation
kind: theorem
title: Constructive ordinary Sobolev polynomial approximation on triangles
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - lem-hp-unweighted-legendre-derivative-tail
  - def-sobolev-space-wkp-and-its-norm
  - thm-reference-simplex-sobolev-extension
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - thm-bramble-hilbert-on-reference-simplex
  - lem-shape-regular-affine-simplex-scaling
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-finite-dimensional-subspaces-are-closed
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: Full Choice is inherited through the reference-simplex extension and
  one-dimensional Sobolev representatives; the finite projections and polynomial
  moment solves are unique finite-dimensional constructions.
sources:
  references:
    - title: Shen and Tang, Spectral and High-Order Methods with Applications
      url: https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf
      locator: "Chapter 1, §1.8, printed pp. 61–67: ordinary and weighted polynomial
        projection estimates. The local tensor proof supplies the stated
        triangle construction."
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations,
        Chapter 30: hp Finite Elements"
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§30.4.2, projection-based triangle interpolation and the p-dependent
        Legendre tail. Major extension steps are left as exercises; this proof
        supplies the local construction and mixed-derivative accounting."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $T=\{(x,y):x>0,\ y>0,\ x+y<1\}$, let $r\ge5$ be an integer, let $p\ge2r-4$ be an integer, and put $n=\lfloor p/2\rfloor$ and

$$
\eta_{n,r}=\left(\frac{(n-r+3)!}{(n+r-5)!}\right)^{1/2}.
$$

There is a bounded linear map $A_{p,r}:H^r(T;\mathbb R)\to\mathbb P_p(T;\mathbb R)$, where $\mathbb P_p(T;\mathbb R)$ is the restriction of real polynomials in $(x,y)$ of total degree at most $p$. It is explicitly defined in the proof from the reference-simplex extension, a unique moment polynomial, and finite Legendre projections, and satisfies

$$
\|u-A_{p,r}u\|_{H^2(T)}\le C_r\eta_{n,r}|u|_{H^r(T)}.
$$

Here $C_r$ is independent of $p$ and is the product of a fixed reference extension bound, the reference moment-projection bound, and an absolute tensor-projection constant; no useful growth bound in $r$ is asserted. For a shape-regular affine triangle $K$ of diameter $h_K$, affine transport gives

$$
\left(\sum_{j=0}^2h_K^{2j-2}|u-A_{K,p,r}u|_{H^j(K)}^2\right)^{1/2}\le C_{r,\gamma}\eta_{n,r}h_K^{r-1}|u|_{H^r(K)}.
$$

If $p\ge4(r-2)$, then $\eta_{n,r}\le(4/p)^{r-4}$. This is a conservative ordinary Sobolev rate; it is neither an optimal $p^{-(r-1)}$ estimate nor an analytic growth estimate for $C_r$.

## Facts & Assumptions

**Given:** Full Choice; the reference triangle $T$; integers $r\ge5$, $p\ge2r-4$; and $u\in H^r(T;\mathbb R)$ with weak derivatives and Sobolev norms as in [[def-sobolev-space-wkp-and-its-norm]].

[A1] Full Choice is used by the reference-simplex extension and by the one-dimensional Sobolev representative supplier. ([[def-axiom-of-choice]])

[F1] The ordinary Legendre projection obeys the factorial $L^2$ derivative-tail estimate for every integer derivative order. The endpoint-anchored operator $S_n$ used below is defined locally from this projection. ([[lem-hp-unweighted-legendre-derivative-tail]])

[F2] The reference simplex has a bounded linear extension $E_r:H^r(T)\to H^r(\mathbb R^2)$; write $M_r=\|E_r\|$. ([[thm-reference-simplex-sobolev-extension]])

[F3] The unique polynomial $B_{r-1}u\in\mathbb P_{r-1}$ whose derivative moments through order $r-1$ match those of $u$ satisfies $\|u-B_{r-1}u\|_{H^r(T)}\le B_r|u|_{H^r(T)}$. ([[thm-bramble-hilbert-on-reference-simplex]])

[F4] Smooth functions on $\mathbb R^2$ are dense in $H^r(\mathbb R^2)$, and one-dimensional weak derivatives through order $s-1$ have absolutely continuous representatives on the interval. ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]])

[F5] Fubini and Cauchy–Schwarz justify the tensor-section norms and primitive bounds. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-cauchy-schwarz-in-an-inner-product-space]])

[F6] Affine pullback derivatives and Sobolev seminorms scale with the singular values, determinant, and shape-regularity bound. ([[lem-shape-regular-affine-simplex-scaling]])

[F7] The finite-dimensional tensor polynomial space $\mathbb Q_n$ is closed in $H^2(I^2)$. ([[cor-finite-dimensional-subspaces-are-closed]])

## Proof

1.1 On $I=(-1,1)$ define $S_nf(x)=f(-1)+(x+1)f'(-1)+\int_{-1}^x(x-t)\Pi_{n-2}f''(t)\,dt,$ where $\Pi_{n-2}$ is the ordinary Legendre $L^2$ projection. Here $p\ge2r-4$ implies $n\ge r-2\ge3$. For $f\in H^2(I)$, the endpoint values are those of its absolutely continuous representatives from [F4]. The polynomial $S_nf$ has degree at most $n$ and matches $f,f'$ at $-1$. Its second derivative is an $L^2$ contraction; integrating twice and using the one-dimensional endpoint estimate gives $\|S_nf\|_{H^2(I)}\le C\|f\|_{H^2(I)}$ with absolute $C$. For every integer $s\ge3$ with $n\ge s-1$, the error $e=f-S_nf$ has $e(-1)=e'(-1)=0$ and $e''=f''-\Pi_{n-2}f''$. Apply the Legendre tail estimate to $f''$ with derivative order $s-2$ and projection degree $n-2$; the factorial ratio is $\rho_{n,s}=\left(\frac{(n-s+1)!}{(n+s-3)!}\right)^{1/2}.$ Two integrations of $e''$, with Cauchy–Schwarz [F5], give $\|e\|_{H^2(I)}\le C\rho_{n,s}\|f^{(s)}\|_2$. The same inequality holds for each derivative of order at most two. [A1, F1, F4, F5, given, construct, algebra]

2.1 Put $\mathbb Q_n=\operatorname{span}\{x^iy^j:0\le i,j\le n\}$, apply $S_n$ in each coordinate on $I^2$, and write $S_n^x,S_n^y$. For smooth $U$, $U-S_n^xS_n^yU=(1-S_n^x)U+S_n^x(1-S_n^y)U.$ Let $a+b\le2$. For the first term choose $s_b=r-\max(1,b)$, so $s_b\in\{r-1,r-2\}$, $s_b\ge3$, $n\ge s_b-1$, and $s_b+b\le r$. Step 1.1 on the $x$ sections of $D_y^bU$ bounds $\|D_x^aD_y^b(1-S_n^x)U\|_2$ by $C\rho_{n,s_b}\|D_x^{s_b}D_y^bU\|_2$. For the second term, the uniform $H^2_x$ bound in step 1.1 bounds its $D_x^aD_y^b$ norm by $C\sum_{j=0}^2\|D_x^jD_y^b(1-S_n^y)U\|_2$. For each such $j$, choose $t_j=r-\max(1,j)\in\{r-1,r-2\}$; then $t_j\ge3$, $n\ge t_j-1$, and $j+t_j\le r$. Apply the $H^2_y$ error estimate of step 1.1 to $D_x^jU$; it bounds every $y$ derivative of order $b\le2$ in this sum by $C\rho_{n,t_j}\|D_x^jD_y^{t_j}U\|_2$. Because $\rho_{n,r-1}\le\rho_{n,r-2}=\eta_{n,r}$, all terms are bounded by $C\eta_{n,r}\|U\|_{H^r(I^2)}$. Fubini [F5] and addition over $a+b\le2$ give $\|U-S_n^xS_n^yU\|_{H^2(I^2)}\le C\eta_{n,r}\|U\|_{H^r(I^2)}.$ For the inputs used below, namely restrictions of $H^r(\mathbb R^2)$ extensions, choose smooth whole-space approximants by [F4]. The estimate on their differences makes $S_n^xS_n^yU$ a well-defined $H^2$ limit. Every smooth approximant has image in $\mathbb Q_n$, so closedness [F7] gives $S_n^xS_n^yU\in\mathbb Q_n$ and the same bound for the limit. [F1, F4, F5, F7, step 1.1, algebra]

3.1 Let $b=B_{r-1}u$ and $w=u-b$. By [F3], $\|w\|_{H^r(T)}\le B_r|u|_{H^r(T)}$. Set $U=(E_rw)|_{I^2}$ and define $A_{p,r}u=b+(S_n^xS_n^yU)|_T.$ This map is linear. The first summand has degree at most $r-1\le p$; the second lies in $\mathbb Q_n\subseteq\mathbb P_{2n}\subseteq\mathbb P_p$. Since $E_rw=w$ on $T$, step 2.1 and [F2]–[F3] yield $\|u-A_{p,r}u\|_{H^2(T)}\le C M_rB_r\eta_{n,r}|u|_{H^r(T)}.$ This identifies the constant as the absolute tensor constant times the fixed extension and moment bounds; no growth in $r$ is asserted. [A1, F2, F3, step 2.1, construct, algebra]

4.1 Transport step 3.1 to a shape-regular affine triangle $K$. For $e=u-A_{K,p,r}u$ and $\widehat e=e\circ F_K$, two-dimensional affine pullback gives $|\widehat e|_{H^j(T)}\asymp_{j,\gamma}h_K^{j-1}|e|_{H^j(K)}$ for $j=0,1,2$, and $|\widehat u|_{H^r(T)}\le C_{r,\gamma}h_K^{r-1}|u|_{H^r(K)}$ by [F6]. This proves the displayed full scaled estimate. Finally, $\eta_{n,r}^{-2}$ is a product of $2(r-4)$ consecutive integers beginning with $n-r+4$. If $p\ge4(r-2)$ and $n=\lfloor p/2\rfloor$, then $n-r+4\ge p/4$; taking square roots yields $\eta_{n,r}\le(4/p)^{r-4}$. [F6, step 3.1, given, algebra] ∎
