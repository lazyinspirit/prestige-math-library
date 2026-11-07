---
id: lem-effective-reciprocal-ideal-sum-lower-bound
kind: lemma
title: Effective reciprocal-ideal lower bound from a local Riesz mean
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-ideal-norm-is-multiplicative
- thm-dedekind-zeta-euler-product
- thm-fundamental-identity-for-primes-in-number-fields
- cor-norm-of-a-prime-ideal
- def-axiom-of-choice
- def-countable-choice
- lem-weiss-convexity-bound-for-primitive-hecke-l-functions
- lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- thm-taylor-expansion-holomorphic-function
- thm-l-one-fourier-inversion
- thm-residue-theorem-null-homologous-cycle
- def-euler-gamma-function
- thm-gamma-weierstrass-product
- thm-stirling-formula-gamma
justified_by: []
proof_strategy: direct
axiom_use: AC and CountableChoice retain the actual Hecke/ray/Fourier interfaces;
  finite character and ideal algebra adds no choice.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: §2D Lemma2.8/Corollary2.9 and §4A Lemma4.4, cached complete text read;
      local proof substitutes the accepted real zero-sum inequality for the cited
      Ihara bound.
  - title: A. R. Weiss, The least prime ideal
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Printed58,62 and70–75 visually read from cached scanned PDF; conductor/lcm
      and modulus argument reconstructed, not imported.
---

## Statement

Assume AC and Countable Choice. Let $K$ have degree $n\ge1$, absolute discriminant $D_K$, positive residue $\kappa=\operatorname{Res}_{s=1}\zeta_K(s)$, and Euler–Kronecker constant $\gamma_K$ defined by $\zeta_K(s)=\kappa/(s-1)+\kappa\gamma_K+O_K(|s-1|)$. Put $U=n^nD_K$ and $H_n=\sum_{j=1}^n1/j$. For every $0<\tau<1/4$ there is an effectively computable $C_\tau$, depending only on $\tau$, such that for all $x>0$,
$$\left|\sum_{N\mathfrak a<x}\frac{(1-N\mathfrak a/x)^n}{N\mathfrak a}-\kappa(\log x+\gamma_K-H_n)\right|\le C_\tau U^{1/4+\tau}x^{-1/2}.$$
Moreover, for every $\eta>0$ there is an effectively computable $E_\eta\ge0$, depending only on $\eta$, such that
$$\sum_{N\mathfrak a<x}\frac1{N\mathfrak a}\ge\kappa\left(\log x-\frac12\log U-E_\eta\right)\qquad(x\ge3U^{1/2+\eta}).$$
Consequently, for every $\epsilon>0$ there is an effective $F_\epsilon\ge0$, uniform for all $\nu\ge\epsilon$, such that whenever $z\ge3U^{1/2+\nu/2}$ and $\log z>F_\epsilon$,
$$\frac\kappa{\sum_{N\mathfrak a\le z}(N\mathfrak a)^{-1}}\le\left(1-\frac1{1+\nu}\right)^{-1}\frac1{\log z-F_\epsilon}.$$
These are field-uniform bounds with no class-number lower-bound or zero-free-region hypothesis.

## Facts & Assumptions

**Given:** The number field and AC+CC branch in the Statement.

[F1] Dedekind zeta has its positive ideal series, absolutely convergent Euler product above one, and sole simple pole at one with positive residue $\kappa$. Its primitive trivial Hecke function obeys the full field-uniform convexity bound for every $a\ge2$. [[thm-dedekind-zeta-euler-product]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]] [[lem-weiss-convexity-bound-for-primitive-hecke-l-functions]]

[F2] The accepted primitive Hecke real zero-sum inequality gives, for the trivial character and $1<\sigma\le2$, $-\zeta'_K/\zeta_K(\sigma)\le1/(\sigma-1)+\tfrac12\log(D_K3^n)+3n$ after discarding its nonnegative completed-zero sum. [[lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality]]

[F3] Holomorphic functions have convergent local Taylor expansions; the finite-rectangle residue theorem applies. [[thm-taylor-expansion-holomorphic-function]] [[thm-residue-theorem-null-homologous-cycle]]

[F4] Under CC, an integrable function with integrable Fourier transform equals its inverse integral at every Lebesgue point. [[thm-l-one-fourier-inversion]]

[F5] Ideals have multiplicative integer norm and finite factorization; there are at most $n$ primes above a rational prime and their norms are at least that prime. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[cor-norm-of-a-prime-ideal]]

[F6] The sectorial Stirling proof supplies its explicit bounded-periodic Binet remainder and hence effective absolute gamma constants in the convexity bound; no field-dependent entire-growth constant enters its uniform boundary estimates. The Euler gamma integral bounds numerator gamma factors on compact right-half-plane rectangles, and the locally uniform Weierstrass product bounds reciprocal gamma factors on arbitrary compact discs by explicit finite products and scalar square-summable tails. [[thm-stirling-formula-gamma]] [[def-euler-gamma-function]] [[thm-gamma-weierstrass-product]]

[A1] AC and CC retain the stated analytic interfaces. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Put $M_n(s)=n!/[s(s+1)\cdots(s+n)]$. For $\operatorname{Re}s>0$, repeated finite integration by parts gives $M_n(s)=\int_0^1v^{s-1}(1-v)^n\,dv$. Equivalently it is the Fourier transform, in frequency $t$, of $e^{-cu}(1-e^{-u})^n\mathbf1_{u>0}$ when $s=c+it$, $c>0$. That function is continuous, integrable, and has integrable transform because $M_n(c+it)=O_{n,c}((1+|t|)^{-n-1})$. Fourier inversion [F4], with its $2\pi$ frequency conversion, therefore gives $$ (1-r)^n\mathbf1_{0<r<1}=\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}M_n(s)r^{-s}ds.$$ At $r=1$ both sides are zero by continuity since $n\ge1$. For $c=1/2$, insert $r=N\mathfrak a/x$ and sum against $1/N\mathfrak a$. Absolute convergence is bounded by $x^{1/2}\zeta_K(3/2)\int|M_n(1/2+it)|dt$, justifying the exchange. [A1, F1, F4, given, algebra]

1.2 Define $G(s)=(s-1)\zeta_K(s)$ near one. By [F1] and [F3], $G(1)=\kappa>0$ and $G'(1)=\kappa\gamma_K$, hence $-\zeta'_K/\zeta_K(\sigma)=1/(\sigma-1)-\gamma_K+O_K(\sigma-1)$. Compare with [F2] and let $\sigma\downarrow1$. It follows that $\gamma_K\ge-\tfrac12\log D_K-c_0 n$, where $c_0=3+\tfrac12\log3$. Since $H_n\le1+\log n$, there is an effective absolute $c_1$ such that $c_0n+1+\log n\le\tfrac12 n\log n+c_1$ for all integers $n\ge1$: beyond $n\ge\exp(4c_0+4)$ the logarithmic term dominates, and the finite remaining interval admits the explicit upper bound $(c_0+2)\exp(4c_0+4)$. Consequently $\gamma_K-H_n\ge-\tfrac12\log(n^nD_K)-c_1$. No estimate for a class number or residue lower bound is invoked. [F1, F2, F3, algebra]

2.1 Choose $a\ge\max(2,2/\tau)$ and put $b=n(1/4+1/(2a))\le n(1/4+\tau/4)$. The convexity bound [F1] gives, on $s=-1/2+it$, $|\zeta_K(1+s)|\le C_a^n D_K^{1/4+1/(2a)}(1+|t|)^b$; the pole-clearing quotient has bounded modulus on that line. The same high-ordinate bound holds in the horizontal range $-1/2\le\operatorname{Re}s\le1/2$. Since $M_n(s)=O_n(|t|^{-n-1})$, the horizontal integrals of $\zeta_K(1+s)M_n(s)x^s$ tend to zero. Shift the contour from step 1.1 to real part $-1/2$. Only $s=0$ is crossed. Taylor expansion of the pole-cleared zeta and of $M_n$ gives $$\zeta_K(1+s)=\kappa/s+\kappa\gamma_K+O_K(s),\qquad M_n(s)=s^{-1}(1-H_ns+O_n(s^2)).$$ The residue is exactly $\kappa(\log x+\gamma_K-H_n)$, so the error is the integral on the new vertical line. [A1, F1, F3, step 1.1, algebra]

3.1 On that line, $|M_n(-1/2+it)|\le|M_n(-1/2)|=2\prod_{j=1}^n j/(j-1/2)\le C\sqrt n$. Indeed the logarithm of the product is at most $\sum_{j=1}^n(2j-1)^{-1}\le1+\tfrac12\log(2n)$, by comparison with the decreasing integral. For $|t|\ge n$, the separate bound $|M_n|\le n^n|t|^{-n-1}$ follows from $n!\le n^n$. Split the vertical absolute integral at $|t|=n$. These bounds give $$\int_{\mathbb R}|M_n(-1/2+it)|(1+|t|)^b dt\le C^n n^{b+3/2},$$ using $n-b\ge n/2$ in the tail. Multiply by the bound in step 2.1 and by $x^{-1/2}$. The remaining factor $C_a^n n^{3/2-3\tau n/4}$ is bounded by an effective constant depending only on $\tau$: its logarithm tends to minus infinity, with an explicit exponential cutoff after which it is decreasing. Also $D_K^{1/4+1/(2a)}\le D_K^{1/4+\tau}$. This proves the first displayed Riesz error bound. Effective gamma constants follow from [F6]'s bounded-periodic remainder exactly as for the convexity boundary estimates; no unknown field-dependent order constant is used numerically. [F1, F6, step 2.1, algebra]

4.1 Fix $\eta>0$ and choose $0<\tau<\min(1/4,\eta/2)$. If $\kappa\log x\le1$, the unit ideal alone gives $\sum_{N\mathfrak a<x}1/N\mathfrak a\ge1\ge\kappa\log x$, as $x\ge3$. Otherwise $\kappa^{-1}<\log x$. When $x\ge3U^{1/2+\eta}$, step 3.1 divided by $\kappa$ has error at most $C_\tau U^{1/4+\tau}x^{-1/2}\log x$. This is bounded uniformly by an effective constant depending only on $\eta$: use $U\le(x/3)^{1/(1/2+\eta)}$, whose resulting exponent $(1/4+\tau)/(1/2+\eta)-1/2$ is negative, and the maximum of $x^{-c}\log x$. The unsmoothed sum is at least the Riesz sum since $0\le(1-N\mathfrak a/x)^n\le1$. Combine steps 3.1 and 1.2 and absorb $c_1$ and this bounded error into $E_\eta$. This proves the second display, including the small-residue branch. [F1, step 3.1, step 1.2, given, algebra]

5.1 For the final assertion apply step 4.1 with $\eta=\epsilon/2$. The hypothesis $z\ge3U^{1/2+\nu/2}$, $\nu\ge\epsilon$, implies $\tfrac12\log U\le(\log z-\log3)/(1+\nu)$. With $c_\nu=\nu/(1+\nu)\ge c_\epsilon>0$, it follows that $\sum_{N\mathfrak a\le z}1/N\mathfrak a\ge\kappa(c_\nu\log z-E_{\epsilon/2})\ge\kappa c_\nu(\log z-F_\epsilon)$ for $F_\epsilon=E_{\epsilon/2}/c_\epsilon$. The additional endpoint terms between strict and nonstrict norm cutoffs are nonnegative. Division is valid when $\log z>F_\epsilon$, and gives the exact claimed reciprocal estimate. [step 4.1, given, algebra] ∎
