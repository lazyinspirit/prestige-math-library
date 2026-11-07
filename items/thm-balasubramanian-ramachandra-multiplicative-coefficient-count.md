---
id: thm-balasubramanian-ramachandra-multiplicative-coefficient-count
kind: theorem
title: "Balasubramanian–Ramachandra Multiplicative-Coefficient Count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-multiplicative-arithmetic-function
  - thm-korobov-vinogradov-zero-free-region-for-riemann-zeta
  - lem-log-derivative-bound-from-disc-zero-factorization
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-euler-product-for-riemann-zeta
  - thm-holomorphic-logarithms-homologically-simply-connected-domains
  - thm-residue-theorem-null-homologous-cycle
  - thm-hankel-representation-for-reciprocal-gamma
  - def-euler-gamma-function
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Balasubramanian and K. Ramachandra, “On the number of integers n such that nd(n)≤x”"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/105616"
      locator: "Theorem 1 and its proof, printed pp. 313–321 (complete article, printed pp. 313–322; local R1 scan; the source-fetch URL is the IMPAN record in coverage)"
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "Chapter 3 background on divisor summation"
verification:
  precheck: n/a
proof_strategy: direct
axiom_use: No choice hypothesis; finite positive sums, absolutely convergent Euler products, fixed complex contours and finite positive differences.
---

## Statement

Let $\lambda>0$ and let $g:\mathbb Z_{>0}\to(0,\infty)$ satisfy
$g(1)=1$ and $g(mn)=g(m)g(n)$ whenever positive integers $m,n$ are coprime.
Assume $g(p)=1/\lambda$ for every prime $p$, and assume there is $c_0>0$
such that $g(n)\ge c_0n^{-1/16}$ for every positive integer $n$. Then there
is $c>0$ such that
$$\#\{n\in\mathbb Z_{>0}:ng(n)\le x\} \sim c\,x(\log x)^{\lambda-1} \qquad (x\to\infty),$$
where $A(x)\sim B(x)$ means $A(x)/B(x)\to1$ as $x\to\infty$.


## Statement references

[R. Balasubramanian and K. Ramachandra, “On the number of integers n such that nd(n)≤x”](https://www.impan.pl/shop/publication/transaction/download/product/105616)

[Aleksandar Ivić, Topics in Recent Zeta-Function Theory](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

## Facts & Assumptions

**Given:** Exactly the function $g$, $\lambda>0$ and $c_0>0$ in the Statement.

[F1] [[def-multiplicative-arithmetic-function]] supplies coprime multiplicativity, hence $ng(n)$ is also coprime-multiplicative.

[F2] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] gives
$\zeta(s)=s/(s-1)-s\int_1^\infty\{u\}u^{-s-1}du$ for $\Re s>0$, with its unique residue-one pole at1. [[thm-euler-product-for-riemann-zeta]] gives the absolute Euler product for $\Re s>1$.

[F3] [[thm-korobov-vinogradov-zero-free-region-for-riemann-zeta]] gives an absolute $C_{\rm KV}>0$ and no zero when $\sigma>1-[C_{\rm KV}(\log(|t|+4))^{2/3}(\log\log(|t|+4))^{1/3}]^{-1}$. [[lem-log-derivative-bound-from-disc-zero-factorization]] bounds $f'/f$ in the inner third of a disc by its zero sum plus $C\log(M/|f(z_0)|)/\Upsilon$.

[F4] [[thm-holomorphic-logarithms-homologically-simply-connected-domains]] gives the normalized logarithm of a nonvanishing holomorphic function on a rectangle or disc. [[thm-residue-theorem-null-homologous-cycle]] justifies the finite contour deformations below.

[F5] [[thm-hankel-representation-for-reciprocal-gamma]] evaluates $(2\pi i)^{-1}\int_{\mathcal H}e^z z^{-\lambda}dz=1/\Gamma(\lambda)$, with principal branch and a fixed positive-radius circular part. Its analytic continuation in $\lambda$ permits every fixed $\lambda>0$; no shrinking-circle absolute-convergence claim is used for $\lambda\ge1$. [[def-euler-gamma-function]] gives $\Gamma(\lambda)=\int_0^\infty e^{-t}t^{\lambda-1}dt>0$.

## Proof

1.1 Put $a_n=ng(n)>0$ and $N(x)=\#\{n:a_n\le x\}$. The lower bound gives $a_n\ge c_0n^{15/16}$, so every $N(x)$ is finite, with $n\le(x/c_0)^{16/15}$. Let $\mathcal F(s)=\sum_na_n^{-s}$ initially for real part greater than1; we prove its convergence there by an Euler product, not by a false bound using $\sum n^{-15\sigma/16}$ at $\sigma$ close to1. For $\sigma>1$, its local factor is [given, F1, algebra]
$$L_p(s)=1+\lambda^sp^{-s}+\sum_{j\ge2}(p^jg(p^j))^{-s},\qquad \lambda^s=e^{s\log\lambda}.$$
The last series converges absolutely by $g(p^j)\ge c_0p^{-j/16}$. On a compact strip $\sigma>1$ the prime sum of its tail is convergent, and $\sum_p\lambda^\sigma p^{-\sigma}<\infty$. Thus the product of absolute local factors converges. Finite factorization and limits of positive majorants give the absolute convergence of $\mathcal F$ and its Euler product; every fixed integer occurs in one of the finite prime products. [given, F1, algebra]

2.1 For $\Re s>0$ define the local branch $\log(1-p^{-s})=-\sum_{\ell\ge1}p^{-\ell s}/\ell$. On the closed strip $3/4\le\sigma\le2$, cancellation of the first-order prime term gives [F1, F2, step 1.1, algebra]
$$L_p(s)(1-p^{-s})^{\lambda^s}=1+O_{g,\lambda}\bigl(p^{-15\sigma/8}+p^{-2\sigma}\bigr).$$
Indeed the $j\ge2$ terms of $L_p$ are bounded by $c_0^{-\sigma}p^{-15\sigma/8}/(1-p^{-15\sigma/16})$, and expanding the second factor gives $1-\lambda^sp^{-s}+O_\lambda(p^{-2\sigma})$ uniformly, because $|\lambda^s|=\lambda^\sigma$ is bounded on this strip. Both error prime sums converge uniformly even at $\sigma=3/4$. Hence
$$H(s)=\prod_pL_p(s)(1-p^{-s})^{\lambda^s}$$
is holomorphic on a neighbourhood of that strip's interior and uniformly bounded there; local prime-power series are locally uniformly holomorphic, and the product converges locally uniformly. Complex zeros of $H$ are harmless. On $\sigma>1$ the exact identity is $\mathcal F(s)=H(s)\exp(\lambda^s\log\zeta(s))$, with Euler logarithm. Every local factor at1 is positive, and the tail product converges absolutely to a nonzero positive limit. Consequently
$$H(1)=\prod_p(1-1/p)^\lambda\left(1+\sum_{j\ge1}\frac1{p^jg(p^j)}\right)>0.$$
[F1, F2, step 1.1, algebra]

3.1 We derive the polynomial growth needed for a smoothed contour, rather than importing the source's stronger logarithm estimate. For large $Y$ set [F2, F3, F4, step 2.1, algebra]
$$d_Y=\frac{c_*}{(\log(Y+10))^{2/3}(\log\log(Y+10))^{1/3}},\qquad 0<c_*\le\min(10^{-3},(100C_{\rm KV})^{-1}).$$
The rectangle $1-10d_Y<\sigma<2$, $|t|<Y+2$ has no zeta zero; $(s-1)\zeta(s)$ is holomorphic and nonzero there, including value1 at1. Its logarithm normalized to zero at1 defines $\log\zeta(s)$ after subtracting the principal $\operatorname{Log}(s-1)$ on the slit rectangle, agreeing with the Euler branch on the right. Fix a small $t_0>0$ on which the residue-one local factor and its logarithm are bounded. When $|t|\ge t_0$, the disc of radius $6d_Y$ centred at $1+d_Y+it$ is zero-free and pole-free for large $Y$. Formula [F2] bounds its maximum $M$ by $C_{t_0}(|t|+2)$; the Euler reciprocal bounds its central modulus below $1/\zeta(1+d_Y)\gg d_Y$. The zero sum in [F3] is empty. On its inner third, $|\zeta'/\zeta|\ll(\log(|t|+4)+\log d_Y^{-1})/d_Y$. Integrating horizontally a distance at most $2d_Y$ from the centre, where $|\log\zeta|\le\log\zeta(1+d_Y)\ll1+\log d_Y^{-1}$, gives
$$|\log\zeta(\sigma+it)|\ll1+\log(|t|+4)+\log d_Y^{-1}\quad(1-d_Y\le\sigma\le1+d_Y).$$
For $|t|<t_0$ and $|s-1|\ge d_Y$ the same bound follows from the local residue-one factor and $\operatorname{Log}(s-1)$. The constants are independent of $Y$. Since $H$ and $\lambda^s$ are bounded, there is one fixed $K>0$ such that
$$|\mathcal F(s)|\ll d_Y^{-K}(|t|+4)^K$$
on the left vertical and top/bottom horizontal sides used below. No bound at the pole itself is asserted. [F2, F3, F4, step 2.1, algebra]

4.1 Choose ONE integer $r>K+3$ and write $P_r(s)=s(s+1)\cdots(s+r)$. For real $z>0$ and $c>0$, a residue calculation gives [F4, step 1.1, step 3.1, algebra]
$$\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}\frac{z^s}{P_r(s)}\,ds=\frac{(1-z^{-1})_+^r}{r!}.$$
To check it, for $z>1$ move a finite vertical contour to $\Re s=-M<-r$, picking up the poles $0,-1,\ldots,-r$. Their sum is $\sum_{j=0}^r(-1)^jz^{-j}/[j!(r-j)!]$. The displaced integral is $O(z^{-M}M^{-r})$ and tends to zero. For $z<1$ move right to $M$ with no poles and bound $O(z^MM^{-r})$. The horizontal edges tend to zero first at fixed $M$, since their denominator has degree $r+1$. At $z=1$ continuity of the absolutely convergent integral in $\log z$ gives zero. Absolute convergence of $\mathcal F(c)$ at $c>1$ then permits finite-sum truncation and integration, with majorant $\mathcal F(c)\int|P_r(c+it)|^{-1}dt$. Thus the exact Riesz sum is
$$R_r(x):=\frac1{r!}\sum_{a_n\le x}(x-a_n)^r=\frac{x^r}{2\pi i}\int_{c-i\infty}^{c+i\infty}\mathcal F(s)\frac{x^s}{P_r(s)}\,ds.$$
All interchanges use these explicit absolute bounds. [F4, step 1.1, step 3.1, algebra]

5.1 Put $L=\log x$, $Y=e^{\sqrt L}$, $d=d_Y$, and $c=1+2/L$. Shift the portion $|t|\le Y$ of the last integral to $\sigma=1-d$, leaving a Hankel contour around the slit $[1-d,1]$, with circular radius $1/L$ at1. All other poles of $1/P_r$ lie outside the rectangle. The analytic continuation in steps 2.1–3.1 and [F4] justify the finite slit contour deformation; the circular part lies strictly left of $c$. On the original right-line tails $|\mathcal F(c+it)|\le\mathcal F(c)=O(L^{\lambda+1})$, by its real local expansion near1, so they contribute $O(x^{r+1}L^{\lambda+1}Y^{-r})$. On the horizontal edges the bound in step 3.1 gives $O(x^{r+1}d^{-K}Y^{K-r-1})$. The left vertical is [F3, F4, step 2.1, step 3.1, step 4.1, algebra]
$$\ll x^{r+1}e^{-dL}d^{-K}\int_{-Y}^Y(1+|t|)^{K-r-1}dt\ll x^{r+1}e^{-dL}d^{-K}.$$
Here $|P_r(1-d+it)|\gg_r(1+|t|)^{r+1}$. Since $dL\gg L^{2/3}(\log L)^{-1/3}$, while $Y=e^{\sqrt L}$ and $d^{-K}$ is a fixed logarithmic power, all three errors are $O(x^{r+1}e^{-c_1\sqrt L})$ for some fixed $c_1>0$. The two traces of the slit and the fixed circle are the only remaining contour. [F3, F4, step 2.1, step 3.1, step 4.1, algebra]

6.1 Let $z=s-1$ and $Z(s)=(s-1)\zeta(s)$. In a fixed disc at1, $Z$ is holomorphic and nonzero with $Z(1)=1$. Therefore [F2, F4, step 2.1, step 5.1, algebra]
$$\mathcal F(s)/P_r(s)=z^{-\lambda}Q(s)\exp[-(\lambda^s-\lambda)\operatorname{Log} z],\qquad Q(s)=H(s)\exp(\lambda^s\log Z(s))/P_r(s).$$
The function $Q$ is holomorphic near1, $Q(1)=H(1)/(r+1)!$, and $\lambda^s-\lambda=O_\lambda(|z|)$. Uniformly for $0<|z|\le d$ and $-\pi\le\arg z\le\pi$ this gives
$$\mathcal F(s)/P_r(s)=z^{-\lambda}\left[\frac{H(1)}{(r+1)!}+O\bigl(|z|(1+|\log|z||)\bigr)\right].$$
This local expansion is valid for every fixed $\lambda>0$, including positive integers and values at least1; no vanishing-radius absolute integral is used. [F2, F4, step 2.1, step 5.1, algebra]

7.1 On the two negative-real slit rays $1/L\le |z|\le d$, $|x^{1+z}|=xe^{-L|z|}$. The error integral from step 6.1, including its radius-$1/L$ circle, is at most [F5, step 5.1, step 6.1, algebra]
$$C x\left[\int_{1/L}^d e^{-Lu}u^{1-\lambda}(1+|\log u|)\,du+L^{\lambda-2}(1+\log L)\right] \ll_\lambda xL^{\lambda-2}(1+\log L).$$
For the ray estimate substitute $v=Lu$; the remaining integrals start at1 and have an exponential tail, so this bound holds for all fixed $\lambda>0$. In the main term the same substitution makes the circular radius exactly1. Extend the two negative rays from length $dL$ to infinity; their omitted tails are $O_\lambda(xL^{\lambda-1}e^{-dL/2})$. The remaining contour is exactly the fixed-radius Hankel contour in [F5], with value $1/\Gamma(\lambda)$. The fixed-radius integral is entire in its parameter: on every compact parameter set its differentiated tails are bounded by a constant times $e^{-u}u^M(1+\log u)^m$, and its circle is compact. It agrees with [F5] for $0<\lambda<1$, so its analytic continuation is exactly the asserted value for every $\lambda>0$. No absolute limit at the origin is used. [F5, step 5.1, step 6.1, algebra]

8.1 Multiplying the result of step 7.1 by $x^r$ and including the smaller errors of step 5.1 yields [F5, step 5.1, step 6.1, step 7.1, algebra]
$$R_r(x)=\frac{H(1)}{\Gamma(\lambda)(r+1)!}\,x^{r+1}(\log x)^{\lambda-1} +O\!\left(x^{r+1}(\log x)^{\lambda-2}(1+\log\log x)\right) +O(x^{r+1}e^{-c_1\sqrt{\log x}}).$$
In particular $R_r(x)\sim c\,x^{r+1}(\log x)^{\lambda-1}/(r+1)!$, where $c=H(1)/\Gamma(\lambda)>0$ by step 2.1 and [F5]. We need only this leading asymptotic, not the source's stronger full expansion/error. [F5, step 5.1, step 6.1, step 7.1, algebra]

9.1 It remains to desmooth the actual noninteger sequence $a_n$ without any spacing assumption. For $h>0$, let $\Delta_hR(t)=R(t+h)-R(t)$. Repeated proper fundamental-theorem integration of the finite truncated polynomials defining $R_r$ gives [step 1.1, step 4.1, step 8.1, algebra]
$$\Delta_h^rR_r(t)=\int_{[0,h]^r}N(t+u_1+\cdots+u_r)\,du_1\cdots du_r.$$
At each finite differentiation endpoint the indicator can use either strict or weak inequality; it changes a finite collection of hyperplanes of zero Riemann content, so the integral is identical. Consequently monotonicity gives
$$h^{-r}\Delta_h^rR_r(x-rh)\le N(x)\le h^{-r}\Delta_h^rR_r(x).$$
These are inequalities of finite positive sums and proper piecewise-polynomial integrals; repeated or arbitrarily close values of $a_n$ cause no problem. [step 1.1, step 4.1, step 8.1, algebra]

10.1 Fix $0<\varepsilon<1/(2r)$ and put $h=\varepsilon x$. The finite differences in step 9.1 use only the fixed positive multiples $(1+j\varepsilon)x$ or $(1-r\varepsilon+j\varepsilon)x$, $0\le j\le r$. Step 8.1 applies to each, with $(\log(vx))^{\lambda-1}/(\log x)^{\lambda-1}\to1$ for every such fixed $v>0$. The exact polynomial finite differences are [F5, step 8.1, step 9.1, algebra]
$$h^{-r}\Delta_h^r\frac{x^{r+1}}{(r+1)!}=x+\frac{rh}{2},\qquad h^{-r}\Delta_h^r\frac{(x-rh)^{r+1}}{(r+1)!}=x-\frac{rh}{2}.$$
One can check them by the same repeated integration: the $r$th derivative of $t^{r+1}/(r+1)!$ is $t$, and the average of $\sum u_i$ on the cube is $rh/2$. Divide the sandwich by $cx(\log x)^{\lambda-1}$ and take lower and upper limits to obtain $1-r\varepsilon/2\le\liminf N/[cx(\log x)^{\lambda-1}]\le\limsup N/[cx(\log x)^{\lambda-1}]\le1+r\varepsilon/2$. Letting the single real parameter $\varepsilon\downarrow0$ proves the full original asymptotic. No integrality of $ng(n)$, monotonicity of $g$, effective $c$, extra choice hypothesis or imported Tauberian theorem was assumed. [F5, step 8.1, step 9.1, algebra] ∎

## Proof status

Complete at the full original Statement. The actual unqualified KV and disc-logarithmic-derivative interfaces now supply the old missing analytic input. A fixed higher Riesz smoothing permits the weaker polynomial vertical growth proved here, and finite positive differences recover the exact count without a spacing premise. This is a local contour reconstruction of the stated theorem, not an import of the source asymptotic or its stronger expansion/error. The full primary scan pp313–322 was read; the source uses a logarithmic smoothing and a stronger logarithm bound, while the written fixed-order adaptation is explicit above.
