---
id: lem-menon-arbitrary-logarithmic-parseval-reduction
kind: lemma
title: Arbitrary logarithmic cutoff in the two-sided short-interval Parseval reduction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
axiom_use: No choice axiom; finite sums, compact integrals and explicit improper-integral limits suffice.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-compact-piecewise-smooth-fourier-parseval
  - lem-perron-kernel
  - lem-truncated-perron-kernel
  - thm-ftc-second-part
  - thm-riemann-fubini-on-product-rectangles
  - thm-cauchy-schwarz-finite
  - thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
sources:
  references:
    - title: Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals
      url: https://arxiv.org/pdf/2607.15574v1
      locator: Proposition 3.4 and Remark 3.5, printed pp. 25–26; both frequency signs are retained here.
    - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
      url: https://arxiv.org/pdf/1501.04585v4
      locator: Lemma 14, as locally reconstructed in the short-interval Parseval supplier.
---

## Statement

Let $X\ge e^{20}$, $1\le h_1\le h_2\le X$, and $1\le U\le T_1=X/h_1$. For arbitrary complex coefficients $|a_n|\le1$ supported on the integers in $[X,3X]$, put
$$A(s)=\sum_{X\le n\le3X}a_nn^{-s},\qquad D_j(x)=h_j^{-1}\sum_{x<n\le x+h_j}a_n.$$
Define
$$I(U,T_1)=\int_{U\le|t|\le T_1}|A(1+it)|^2dt,\qquad H(T_1)=\sup_{T\ge T_1}\frac{T_1}{T}\int_{T\le|t|\le2T}|A(1+it)|^2dt.$$
With absolute constants,
$$\frac1X\int_X^{2X}|D_1(x)-D_2(x)|^2dx\ll\frac{U^4h_2^2}{X^2}+I(U,T_1)+H(T_1).$$
Moreover $H(T_1)$ can be replaced on the right by $H_{\le X/8}(T_1)+1/h_1$, where the supremum defining $H_{\le X/8}$ is restricted to $T_1\le T\le X/8$, and is defined to be zero if that range is empty.

In particular, for every fixed $R>1$, whenever $1\le h_1\le h_2=X/(\log X)^{3R}$, take $U=(\log X)^R$. The first error is $(\log X)^{-2R}$, hence also at most $(\log X)^{-R}$. These conclusions hold for every such complex coefficient sequence, including arbitrary restrictions of character twists; multiplicativity and a modulus bound are unnecessary. Intervals with a closed lower endpoint give the same integral. All integrals in $x$ are finite piecewise-continuous integrals. Frequency integrals are ordinary finite integrals or the indicated nonnegative improper limits.

## Facts & Assumptions

**Given:** The parameters, finite support and coefficient bounds in the Statement.

[F1] The symmetric Perron kernel and its truncation give termwise inversion away from the finitely many endpoint equalities. [[lem-perron-kernel]] [[lem-truncated-perron-kernel]]

[F2] For compactly supported, bounded, piecewise $C^1$ functions $B$ with finitely many pieces, $G(v)=\int B(t)e^{itv}dt$ satisfies $\int_{\mathbb R}|G(v)|^2dv=2\pi\int_{\mathbb R}|B(t)|^2dt$. This precise finite-band identity is available from [[lem-compact-piecewise-smooth-fourier-parseval]].

[F3] Compact-integral interchange and integration of continuous derivatives are available. [[thm-riemann-fubini-on-product-rectangles]] [[thm-ftc-second-part]] Finite real Cauchy–Schwarz is available from [[thm-cauchy-schwarz-finite]]; its integral version for the continuous functions here follows by Riemann sums and application to absolute values.

[F4] The continuous estimate in [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]] is $\int_0^L|\sum_{n\le N}b_nn^{-it}|^2dt\ll(N+L)\sum|b_n|^2$ for $L\ge2$. Translating the interval only multiplies coefficients by factors of modulus one.

## Proof

1.1 Set $s=1+it$ and $K_h(s,x)=((x+h)^s-x^s)/s$. By termwise Perron inversion, outside finitely many $x$, $$D_h(x)=\lim_{M\to\infty}\frac1{2\pi}\int_{-M}^M A(1+it)\frac{K_h(1+it,x)}h\,dt.$$ Convergence is uniform on closed subintervals staying a positive distance from the endpoint equalities, by the finite truncation bound. Also $|A(1+it)|\le\sum_{X\le n\le3X}n^{-1}\ll1$. Since $K_h(1+it,x)/h=h^{-1}\int_0^h(x+w)^{it}dw$, integration of the derivative of $y^{it}$ gives $K_h/h=x^{it}+O(|t|h/X)$ uniformly in $X\le x\le2X$ and $h\le X$. Thus the difference of the two contributions with $|t|\le U$ is $O(U^2h_2/X)$, whose normalized square integral is $O(U^4h_2^2/X^2)$. [F1, F3, given, algebra]

1.2 For a finite band $E=\{t:U\le|t|\le M\}$, let $V_{h,E}(x)=(2\pi)^{-1}\int_E A(s)K_h(s,x)dt$, and put $k_u(s)=((1+u)^s-1)/s$. Direct substitution gives the exact identity $$K_h(s,x)=\frac{x}{2h}\int_{h/x}^{3h/x}x^sk_u(s)du-\frac{x+h}{2h}\int_0^{2h/(x+h)}(x+h)^sk_u(s)du.$$ Indeed, after changing to $w=xu$ and $w=h+(x+h)u$, the common integrals of $(x+w)^s$ on $[h,3h]$ cancel. Apply Cauchy–Schwarz to each $u$ integral and extend the resulting nonnegative integrals to $0\le u\le3h/X$. Each original interval has length at most $2h/X$. Writing $G_u(v)=\int_E A(1+it)k_u(1+it)e^{itv}dt$, the changes $v=\log x$ and $v=\log(x+h)$, with $X\le x,x+h\le3X$, give $$\frac1X\int_X^{2X}|V_{h,E}(x)/h|^2dx\ll\frac{X^3}{h^3}\int_0^{3h/X}\int_{\mathbb R}|G_u(v)|^2dv\,du.$$ The integrands on finite rectangles are continuous apart from finitely many band endpoints, so these interchanges follow by splitting there. [F3, given, construct, algebra]

2.1 Apply [F2] for each $u$. Here the required function is piecewise smooth, and $0\le u\le3h/X\le3$. The two bounds $k_u(1+it)=\int_0^u(1+w)^{it}dw$ and $|k_u(1+it)|\le(2+u)/|t|$ imply $|k_u(1+it)|\ll\min(h/X,1/|t|)$. Hence $$\frac1X\int_X^{2X}|V_{h,E}(x)/h|^2dx\ll\int_E|A(1+it)|^2\min\{1,X^2/(h^2t^2)\}\,dt.$$ This bound holds for every $1\le h\le X$ and all the displayed finite bands, with an absolute constant. [F2, step 1.2, algebra]

3.1 The right side of step 2.1 has a finite limit as $M\to\infty$, since $A$ is bounded and the tail weight is $O(t^{-2})$. To transfer the estimate to the Perron limit, first integrate on the complement of fixed small neighborhoods of the finitely many endpoint equalities. Uniform convergence there from step 1.1 passes the square integral to the limit, bounded by the limiting full-band right side. Now shrink the neighborhoods to zero. The limiting function is $D_h$ minus its finite low-frequency integral, hence is bounded and piecewise continuous; its integral over the removed neighborhoods tends to zero. This proves the infinite-band estimate without invoking a choice of an almost-everywhere convergent subsequence. Apply it to $h_1,h_2$ and use $|z+w|^2\le2|z|^2+2|w|^2$. Both weights are at most $\min\{1,(T_1/|t|)^2\}$. Splitting at $T_1$, then at $2^kT_1$ for integers $k\ge0$, bounds the tail by $\sum_{k\ge0}4^{-k}2^kH(T_1)=2H(T_1)$. Combining with step 1.1 proves the first inequality. [F1, step 1.1, step 2.1, algebra]

4.1 To truncate the supremum, use [F4] on each of $[T,2T]$ and $[-2T,-T]$ with $N=\lfloor3X\rfloor$ and coefficients $a_n/n$ on the given support and zero elsewhere. Their square norm is $O(1/X)$. For $T>X/8$ we have $T\ge2$, and therefore $$\frac{T_1}{T}\int_{T\le|t|\le2T}|A(1+it)|^2dt\ll\frac{T_1}{T}(1+T/X)\ll T_1/X=1/h_1.$$ The supremum over all $T\ge T_1$ is at most the restricted supremum plus this bound, including when the restricted range is empty. Finally $h_2=X/(\log X)^{3R}$ implies $T_1\ge(\log X)^{3R}\ge U$, and $U^4h_2^2/X^2=(\log X)^{-2R}$. Changing a lower endpoint convention affects only finitely many $x$ and changes no integral. Both signs of $t$ were kept throughout; no conjugation symmetry for the coefficients was assumed. This proves every assertion. [F4, step 3.1, given, algebra] ∎
