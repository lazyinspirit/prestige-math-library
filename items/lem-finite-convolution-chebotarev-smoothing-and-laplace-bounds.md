---
id: lem-finite-convolution-chebotarev-smoothing-and-laplace-bounds
kind: lemma
title: Finite-convolution Chebotarev smoothing and full Laplace bounds
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-logarithm-derivative-and-integral
- thm-natural-logarithm-laws
- thm-real-power-continuity-and-derivatives
- thm-complex-exponential-is-entire-with-derivative-itself
- def-complex-exponential
- def-real-exponential-function-and-e
- thm-geometric-series
justified_by: []
proof_strategy: direct
axiom_use: None. Explicit finite Riemann recursions, finite positive-part polynomials
  and scalar absolute tails suffice.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density
      theorem
    url: https://arxiv.org/pdf/1803.02823v3
    locator: Lemma2.2 and full proof of its part(v), cachedpp8–9 read. The finite-convolution
      construction and every Laplace bound are reconstructed below; the integrated
      left-line bound retains the explicit2^ell factor.
---

## Statement

Let $x\ge3$, $0<\varepsilon<1/4$, and let $\ell\ge1$ be an integer. Put $L=\log x$, $a=\varepsilon/(\ell L)$, $u_0=1/2$, $v_0=1+\ell a$, and define $f_0=\mathbf1_{(u_0,v_0]}$ and recursively
$$f_j(t)=\frac1a\int_0^a f_{j-1}(t+u)du\quad(1\le j\le\ell),\qquad f=f_\ell.$$
These are finite Riemann integrals. Then $f\in C_c^{\ell-1}(\mathbb R)$, $0\le f\le1$, $f=1$ on $[1/2,1]$, and $\operatorname{supp}f\subset[1/2-\varepsilon/L,1+\varepsilon/L]$. Its entire Laplace transform is
$$F(z)=\int_{\mathbb R}f(t)e^{-zt}dt=e^{-(1+\ell a)z}\frac{e^{(1/2+\ell a)z}-1}{z}\left(\frac{e^{az}-1}{az}\right)^\ell,$$
with all apparent singularities removed; $F(0)=1/2+\varepsilon/L\in(1/2,3/4)$. For $s=\sigma+it$ with $\sigma>0$ and $0\le\theta\le\ell$,
$$|F(-sL)|\le\frac{e^{\sigma\varepsilon}x^\sigma(1+x^{-\sigma/2})}{|s|L}\left(\frac{2\ell}{\varepsilon|s|}\right)^\theta,\qquad |F(-sL)|\le e^{\sigma\varepsilon}x^\sigma.$$
For $x\ge10$ and $3/4<\sigma\le1$, with either sign and absolute effective implied constants,
$$L\bigl(F(-L)\pm F(-\sigma L)\bigr)=\left(x\pm\frac{x^\sigma}{\sigma}\right)(1+O(\varepsilon))+O(x^{1/2}).$$
For $s=-1/2+it$,
$$|F(-sL)|\le\frac{5x^{-1/4}}L\left(\frac{2\ell}{\varepsilon}\right)^\ell(1/4+t^2)^{-\ell/2}.$$
If $\ell\ge2$ and $B,n\ge0$, then
$$\int_{\mathbb R}|F((1/2-it)L)|\bigl(B+n\log(|t|+3)\bigr)dt\le\frac{Cx^{-1/4}}L\left(\frac{4\ell}{\varepsilon}\right)^\ell(B+n)$$
for an absolute effective $C$. If $\ell\ge3$, the test $W_x(u)=f(\log u/L)$ belongs to $C_c^2((0,\infty))$, with $\|W_x\|_\infty\le1$, support in $[x^{1/2}e^{-\varepsilon},xe^\varepsilon]$, and Mellin transform $\widetilde W_x(s)=LF(-sL)$. No choice axiom is used.

## Facts & Assumptions

**Given:** The real parameters, integer convolution depth and exact recursions in the Statement.

[F1] Compact continuous functions have Riemann integrals, FTC and linearity; piecewise continuous functions with finitely many jumps are integrated by subdivision, and changing finitely many endpoint values does not change the integral. [[thm-ftc-second-part]] [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]]

[F2] Positive powers and logarithms have their derivative and product laws; complex exponential is entire with its power series and derivative itself. [[thm-logarithm-derivative-and-integral]] [[thm-natural-logarithm-laws]] [[thm-real-power-continuity-and-derivatives]] [[thm-complex-exponential-is-entire-with-derivative-itself]] [[def-complex-exponential]] [[def-real-exponential-function-and-e]]

[F3] Real geometric series have their scalar tails; finite sums and their binomial coefficient identities follow by polynomial multiplication. [[thm-geometric-series]]

## Proof

1.1 Define $D_0(y)=\mathbf1_{[0,\infty)}(y)$ and, for integers $j\ge1$, $D_j(y)=(a^jj!)^{-1}\sum_{k=0}^j(-1)^k\binom jk(y-ka)_+^j$. Compact FTC on each finite knot interval, followed by Pascal's identity, gives $D_j(y)=a^{-1}\int_0^aD_{j-1}(y-u)du$. Consequently the recursively defined $f_j$ equals $D_j(v_0-t)-D_j(u_0-t)$; the possible endpoint convention at $j=0$ is immaterial after integration. Each positive-part power is $C^{j-1}$, since derivatives through order $j-1$ meet at zero at its knot. Thus $f_j$ has the asserted regularity, with an explicit finite piecewise-polynomial description and compact support. Induction in the recursion gives $0\le f_j\le1$, support in $[u_0-ja,v_0]$, and value one on $[u_0,v_0-ja]$. At $j=\ell$ these are exactly the support and plateau claimed. [F1, F2, F3, given, construct, algebra]

2.1 On each knot interval $f_j'(t)=(f_{j-1}(t+a)-f_{j-1}(t))/a$. For $j=1$ this is the ordinary derivative off finitely many knots; integrate by parts separately there. Compact support cancels boundary terms at the outer endpoints and continuity cancels them at internal knots. Thus, writing $F_j(z)=\int f_j(t)e^{-zt}dt$, one gets $zF_j(z)=((e^{az}-1)/a)F_{j-1}(z)$. The initial interval has $F_0(z)=e^{-v_0z}(e^{(v_0-u_0)z}-1)/z$. Iteration gives the displayed product. The compact integral's exponential power series converges uniformly on every bounded complex $z$-disc, with a factorial scalar tail; termwise integration proves entireness and removes the displayed apparent poles. At zero, the formula gives $F(0)=v_0-u_0=1/2+\varepsilon/L$. Since $e<3$ by the exponential series and its factorial/geometric tail, $\log3>1$ and therefore $1/2<F(0)<3/4$. [F1, F2, F3, step 1.1, algebra]

3.1 For $\operatorname{Re}s=\sigma>0$, rewrite the product as $F(-sL)=x^se^{\varepsilon s}(1-x^{-s/2}e^{-\varepsilon s})(sL)^{-1}B(s)^\ell$, where $B(s)=(1-e^{-\varepsilon s/\ell})/(\varepsilon s/\ell)=\int_0^1e^{-(\varepsilon s/\ell)v}dv$. Hence $|B(s)|\le1$ and $|B(s)|\le2\ell/(\varepsilon|s|)$. For every $0\le\theta\le\ell$, these two bounds imply $|B(s)|^\ell\le(2\ell/(\varepsilon|s|))^\theta$, by considering whether that ratio is below or above one. The first asserted bound follows. Also $|F(-sL)|\le\int f(t)e^{\sigma Lt}dt\le e^{\sigma\varepsilon}x^\sigma F(0)\le e^{\sigma\varepsilon}x^\sigma$, using positivity and the support endpoint. [F1, F2, step 1.1, step 2.1, algebra]

4.1 For real $3/4<\sigma\le1$, put $A_\sigma=(e^{\varepsilon\sigma/\ell}-1)/(\varepsilon\sigma/\ell)=\int_0^1e^{(\varepsilon\sigma/\ell)v}dv$. The exact transform gives $LF(-\sigma L)=x^\sigma A_\sigma^\ell/\sigma+O(x^{\sigma/2}/\sigma)$, since $A_\sigma^\ell\le e^{\varepsilon\sigma}$ bounds the omitted lower endpoint uniformly. Furthermore $1\le A_\sigma^\ell\le e^\varepsilon=1+O(\varepsilon)$ and $0\le A_1-A_\sigma\le C(1-\sigma)\varepsilon/\ell$ by compact FTC in its defining integral. Thus $0\le A_1^\ell-A_\sigma^\ell\le C\varepsilon(1-\sigma)$. The plus-sign formula follows at once by adding the two expansions. [F1, F2, step 2.1, step 3.1, algebra]

4.2 For $s=-1/2+it$, the integral formula for $B$ gives $|B(s)|\le2\ell e^{\varepsilon/(2\ell)}/(\varepsilon|s|)$. The same exact product then yields $|F(-sL)|\le x^{-1/2}(1+x^{1/4}e^{\varepsilon/2})(|s|L)^{-1}(2\ell/(\varepsilon|s|))^\ell$. Since $|s|\ge1/2$, $x^{-1/4}\le1$ and $e^{\varepsilon/2}\le(1-1/8)^{-1}=8/7$ by [F3], this is at most the asserted $5x^{-1/4}(2\ell/\varepsilon)^\ell|s|^{-\ell}/L$. All constants are independent of $\ell$. [F2, F3, step 2.1, step 3.1, algebra]

5.1 For the minus sign, set $g=x-x^\sigma/\sigma$. One has $x^\sigma/\sigma^2\le x$ when $x\ge10$ and $\sigma\ge3/4$: the decreasing function $-\log\sigma/(1-\sigma)$ is at most $4\log(4/3)$, and $(4/3)^8<10$ is the exact integer comparison $65536<65610$. Therefore $(1-\sigma)x^\sigma/\sigma\le\sigma g\le g$. Subtracting the expansions in step 4.1 now gives $LF(-L)-LF(-\sigma L)=gA_1^\ell+(x^\sigma/\sigma)(A_1^\ell-A_\sigma^\ell)+O(x^{1/2})=g(1+O(\varepsilon))+O(x^{1/2})$. The endpoint $\sigma=1$ has both differences zero and satisfies the same formula. This proves the uniform relative difference estimate even as $\sigma\uparrow1$. [F1, F2, step 4.1, algebra]

6.1 For $\ell\ge2$, split the weighted integral of $|s|^{-\ell}$ into $|t|\le1$ and its complement. On the first interval it is at most $2^\ell$ and $\log(|t|+3)\le\log4$. On $|t|\ge1$, it is at most $|t|^{-2}$, and $\int_1^\infty\log(t+3)t^{-2}dt$ is bounded by an absolute effective constant, by compact integration by parts and the resulting $1/t$ tail. Hence $\int|s|^{-\ell}(B+n\log(|t|+3))dt\le C2^\ell(B+n)$. Step 4.2 proves the integrated bound with $(4\ell/\varepsilon)^\ell$; this explicit factor is not discarded inside an allegedly uniform constant. For $\ell\ge3$, step 1.1 gives $f\in C_c^2$, and composition with $u\mapsto\log u/L$ gives the stated $W_x$ and support. The finite-interval substitution $u=e^{Lt}$ gives $\widetilde W_x(s)=LF(-sL)$ exactly. All improper integrals here have the displayed scalar tails, and the construction uses only finite Riemann operations. [F1, F2, step 1.1, step 2.1, step 4.2, algebra] ∎
