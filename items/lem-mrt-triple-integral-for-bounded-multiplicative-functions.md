---
id: lem-mrt-triple-integral-for-bounded-multiplicative-functions
kind: lemma
title: "The Halász triple integral for general 1-bounded multiplicative functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-fundamental-theorem-of-arithmetic
  - thm-dirichlet-series-absolute-half-plane-holomorphy
  - thm-dirichlet-series-multiplication-convolution
  - thm-multiplicative-dirichlet-series-euler-product
  - thm-chebyshev-theta-linear-bounds
  - lem-chebyshev-functions-prime-power-comparison
  - lem-reciprocal-prime-sum-from-mertens-first-theorem
  - thm-first-mertens-theorem-for-primes
  - thm-truncated-perron-formula
  - def-von-mangoldt-function
  - thm-ftc-second-part
  - thm-geometric-series
  - thm-p-series-real-exponents
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-power-series-sums-have-derivatives-of-all-orders
  - thm-riemann-fubini-on-product-rectangles
proof_strategy: direct
sources:
  references:
    - title: "Granville–Harper–Soundararajan, A new proof of Halász's theorem, §2, Proposition 2.1 and Lemmas 2.2–2.5; extension below supplies the general bounded prime-power argument"
      url: "https://arxiv.org/pdf/1706.03749v1"
    - title: "Matomäki–Radziwiłł–Tao, An averaged form of Chowla's conjecture, Appendix A, (A.10) and its preceding qualification"
      url: "https://arxiv.org/pdf/1503.05121v3"
---

## Statement

Let $f:\mathbb N_{>0}\to\mathbb C$ be multiplicative, with $f(1)=1$
and $|f(n)|\le1$ for every $n$. Let $10\le y\le\sqrt x$ and
$1\le T\le x^{9/10}$. Put $\eta=1/\log y$ and $c_0=1+1/\log x$.
Define multiplicative functions $a,b$ by
$$a(p^k)=f(p^k)\mathbf1_{p\le y},\qquad b(p^k)=f(p^k)\mathbf1_{p>y}\quad(k\ge1),\qquad a(1)=b(1)=1.$$
Write $S(z)=\sum a(n)n^{-z}$, $L(z)=\sum b(n)n^{-z}$.
Here $n^{-z}=\exp(-z\log n)$; $S$ converges absolutely for
$\operatorname{Re}z>0$, and $L$ for $\operatorname{Re}z>1$.
For $p>y$ define $\Lambda_b(p^k)=c_{p,k}\log p$ by the recurrence
$$c_{p,k}=k f(p^k)-\sum_{j=1}^{k-1}c_{p,j}f(p^{k-j});$$
set $\Lambda_b(n)=0$ off these prime powers. This agrees with
$-L'(z)/L(z)=\sum\Lambda_b(n)n^{-z}$ on $\operatorname{Re}z>1$.
Define the finite polynomial
$$D(z)=\sum_{y<n<x/y}\frac{\Lambda_b(n)}{n^z}.$$
There is an absolute constant $C$, independent of $f,x,y,T$, such that
$$\left|\int_0^\eta\int_0^\eta\frac1{\pi i}\int_{c_0-iT}^{c_0+iT} S(s-\alpha-\beta)L(s+\beta)D(s-\beta)D(s+\beta)\frac{x^{s-\alpha-\beta}}{s-\alpha-\beta}\,ds\,d\beta\,d\alpha-\sum_{n\le x}f(n)\right|\le C\left(\frac{x\log y}{\log x}+\frac{x\log x}{T}\right).$$
All cutoffs are literal: small primes satisfy $p\le y$, large primes
satisfy $p>y$, the polynomial has strict endpoints, and the summatory
function uses $n\le x$, also for integer $x$. No bound
$|\Lambda_f(p^k)|\le\log p$ is assumed. No choice principle is required.

## Facts & Assumptions

**Given:** The function and parameters in the Statement. All implicit constants below are absolute. Put $\mathcal L=\log x$ and $v=\log y$; thus $\mathcal L\ge2v\ge2\log10$.

[F1] Termwise differentiation on absolute half-planes and multiplication by divisor convolution are valid ([[thm-dirichlet-series-absolute-half-plane-holomorphy]], [[thm-dirichlet-series-multiplication-convolution]]). Unique factorization and absolute Euler-product expansion hold ([[thm-fundamental-theorem-of-arithmetic]], [[thm-multiplicative-dirichlet-series-euler-product]]).

[F2] The ordinary von Mangoldt function equals $\log p$ at $p^k$ and zero elsewhere ([[def-von-mangoldt-function]]). Its prime-power expansion gives $\log N=\sum_{d\mid N}\Lambda(d)$. Also $\theta(u)\ll u$ and $\psi(u)\ll u$ for $u\ge1$, after enlarging constants on a bounded interval ([[thm-chebyshev-theta-linear-bounds]], [[lem-chebyshev-functions-prime-power-comparison]]).

[F3] $\sum_{p\le u}1/p=\log\log u+O(1)$ and $\sum_{p\le u}\log p/p=\log u+O(1)$ ([[lem-reciprocal-prime-sum-from-mertens-first-theorem]], [[thm-first-mertens-theorem-for-primes]]).

[F4] The truncated Perron formula applies to an absolutely convergent series on any real line $c>0$, with nonendpoint error $\sum |A_N|(x/N)^c\min(1,1/(T|\log(x/N)|))$ and integer-endpoint error $c|A_x|/T$, relative to the half-weighted endpoint sum ([[thm-truncated-perron-formula]]).

[F5] Geometric series and the convergent $p$-series with exponent $3/2$ are available ([[thm-geometric-series]], [[thm-p-series-real-exponents]]).

[F6] The fundamental theorem of calculus ([[thm-ftc-second-part]]), logarithm laws, $\log' u=1/u$, the complex exponential addition and modulus laws and its derivative are available. Complex power series can be differentiated inside their radius ([[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-power-series-sums-have-derivatives-of-all-orders]]).

[F7] Continuous functions on finite product rectangles admit interchange of ordinary iterated Riemann integrals; apply this separately to real and imaginary parts ([[thm-riemann-fubini-on-product-rectangles]]).

## Proof

1.1 For $p>y$, put $A_p(z)=1+\sum_{k\ge1}f(p^k)z^k$. On $|z|<1/2$, $|A_p(z)-1|\le |z|/(1-|z|)<1$, so $A_p$ is nonzero. The recurrence in the Statement is precisely coefficient comparison in $zA_p'(z)=A_p(z)\sum_{k\ge1}c_{p,k}z^k$. It implies $|c_{p,k}|\le2^k-1$: the induction step is $k+\sum_{j<k}(2^j-1)=2^k-1$. Set $B(p^k)=(2^k-1)\log p$ for $p>y$ and zero elsewhere. Then $|\Lambda_b(n)|\le B(n)$. Moreover $\sum_{n\le u}B(n)\ll u$. The prime terms are bounded by $\theta(u)$. For higher powers, $p\ge11>8$ implies $2^k\le(p^k)^{1/3}$; summing the geometric sequence at each $p\le\sqrt u$ bounds their total by $2u^{1/3}\theta(\sqrt u)\ll u^{5/6}\ll u$. Thus $\sum B(n)n^{-\sigma}$ converges for $\sigma>1$, by summing on dyadic intervals. The recurrence at each prime power and unique factorization give $\sum_{d\mid q}\Lambda_b(d)b(q/d)=b(q)\log q$. Multiplying the two absolutely convergent series, and differentiating the series for $L$, therefore gives $L(s)\sum\Lambda_b(n)n^{-s}=-L'(s)$. Also $L(s)\ne0$ for $\operatorname{Re}s>1$: all its local factors $A_p(p^{-s})$ are nonzero, and both their product and their reciprocal product converge, since $\sum_{p>y}|A_p(p^{-s})-1|<\infty$ and $|A_p(p^{-s})-1|\le1/(p^{\operatorname{Re}s}-1)<1/2$. Their product is $1$. This proves the asserted logarithmic derivative. [F1, F2, F5, F6, given, algebra]

1.2 We need uniform elementary Euler-product bounds. For $|\sigma-1|\le2/v$ put $G_y(\sigma)=\prod_{p\le y}(1-p^{-\sigma})^{-1}$. Then $$G_y(\sigma)\asymp v.$$ Indeed $\sigma\ge1-2/\log10>0$. For $y\ge e^8$, $\sigma\ge3/4$, so $\log G_y(\sigma)=\sum_{p\le y}p^{-\sigma}+O(\sum p^{-3/2})$. The difference between this prime sum and $\sum_{p\le y}1/p$ is at most $(2e^2/v)\sum_{p\le y}\log p/p=O(1)$. For $10\le y<e^8$, the product involves only primes $\le e^8$ and $\sigma$ stays in a fixed positive compact interval, so the same two-sided bounds follow by fixed constants. Here and below $-\log(1-u)=u+O(u^2)$ uniformly on $0\le u\le r<1$ follows by integrating $1/(1-u)$, so no complex logarithm is used. It follows that $\sum |a(n)|n^{-\sigma}\le G_y(\sigma)\ll v$ in this range. [F1, F3, F5, F6, algebra]

1.3 Denote the triple integral in the Statement by $I$. Substitute $\gamma=2\beta$ and $z=s-\alpha-\gamma/2$. It becomes the integral over $0\le\alpha\le\eta$, $0\le\gamma\le2\eta$ of $$\frac1{2\pi i}\int_{d-iT}^{d+iT}S(z)L(z+\alpha+\gamma)D(z+\alpha)D(z+\alpha+\gamma)\frac{x^z}{z}\,dz,\qquad d=c_0-\alpha-\gamma/2.$$ Here $d\ge1-2/\log10>0$, and $\operatorname{Re}(z+\alpha+\gamma)=c_0+\gamma/2>1$. Hence the series $S$ and $L$ converge absolutely on the actual finite contour; $D$ is finite. Expanding gives coefficients indexed by $N=m n u w$, with $y<u,w<x/y$, of the form $$a(m)b(n)\Lambda_b(u)\Lambda_b(w)(unw)^{-\alpha}(nw)^{-\gamma}.$$ For fixed $x,y,T$, convergence is uniform over the whole compact parameter box: use the fixed lower real part $c_0-2\eta>0$ for $S$, $c_0>1$ for $L$, and the finite polynomials. Integrating any series tail is bounded by its uniform supremum times the finite box volume. This justifies expansion and interchanging these integrals, also by [F7]. No infinite contour shift is used. [F1, F6, F7, given, algebra]

2.1 Define a nonnegative multiplicative function $H$ by $H(p^k)=1$ for $p\le y$ and $H(p^k)=2^{k-1}$ for $p>y$, $k\ge1$, with $H(1)=1$. Its rough local factor is $(1-z)/(1-2z)$, whose logarithmic derivative has coefficients $2^k-1$. Consequently for every integer $q$ having all prime factors $>y$, $$\sum_{d\mid q}B(d)H(q/d)=H(q)\log q.$$ Write $H=\mathbf1*r$, where $\mathbf1(n)=1$ and $*$ is divisor convolution. The local coefficients of $r$ are zero on $p\le y$; for $p>y$ they satisfy $r(p)=0$, $r(p^k)=2^{k-2}$ for $k\ge2$, and $r(1)=1$. They are nonnegative, and $$\sum_{d\ge1}\frac{r(d)}{d^{3/4}}=\prod_{p>y}\left(1+\frac{p^{-3/2}}{1-2p^{-3/4}}\right)\ll1,$$ since $p\ge11$ keeps the denominator uniformly positive and $\sum p^{-3/2}<\infty$. In particular $\sum r(d)/d\ll1$, $\sum_{d\le U}r(d)\ll U^{3/4}$, and $H(N)\ll N^{3/4}$. Counting multiples of $d$ shows that for an interval of length $h$ contained in $[1,2x]$, $$\sum_{N\text{ in the interval}}H(N)\ll h+x^{3/4}.$$ These conclusions hold with closed endpoints: the number of multiples is at most $h/d+1$. [F1, F5, F6, step 1.1, algebra]

2.2 For $0<\delta\le2/v$ let $R_y(1+\delta)$ be the Dirichlet series of the indicator of integers having no prime factor $\le y$. The elementary integral comparison $\sum n^{-1-\delta}\le1+1/\delta$ and Euler products give $$\sum_{n\ge1}\frac{|b(n)|}{n^{1+\delta}}\le R_y(1+\delta)=\frac{\sum_{n\ge1}n^{-1-\delta}}{G_y(1+\delta)}\ll\frac1{\delta v}.$$ For use at a different weight, define a completely multiplicative $h$ by $h(p)=1$ for $p\le y$ and $h(p)=p^{-\eta}$ for $p>y$. Then $0\le h\le1$ and $$\sum_{d\le x}\frac{h(d)}d\le\prod_{p\le x}(1-h(p)/p)^{-1}\ll v.$$ To see the last bound, the small-prime product is $O(v)$ by step 1.2, the higher-power logarithmic errors have bounded total, and the rough prime sum satisfies $$\sum_{p>y}p^{-1-\eta}\le\frac1v\sum_{p>y}(\log p)p^{-1-\eta}\ll\frac{y^{-\eta}(1+1/\eta)}v\ll1.$$ The middle inequality follows by finite summation by parts using $\theta(u)\ll u$, then letting the upper limit tend to infinity; the boundary at infinity vanishes. [F1, F2, F5, F6, step 1.2, algebra]

3.1 The two errors in the convolution identity will be $$E_1=\sum_{mq\le x}a(m)b(q)q^{-\eta},\qquad E_2=\int_0^\eta\sum_{mkn\le x}a(m)\Lambda_b(k)b(n)k^{-\alpha}n^{-\alpha-2\eta}\,d\alpha.$$ Their absolute values are $\ll xv/\mathcal L$. For $E_1$, the unique split into small- and large-prime parts gives $|E_1|\le\sum_{N\le x}h(N)$. Complete multiplicativity and $\log N=\sum_{d\mid N}\Lambda(d)$ imply $$\sum_{N\le x}h(N)\log N=\sum_{dm\le x}h(d)h(m)\Lambda(m)\ll x\sum_{d\le x}\frac{h(d)}d\ll xv.$$ Also $\sum_{N\le x}h(N)\log(x/N)\le\sum_{N\le x}\log(x/N)=\int_1^x\lfloor t\rfloor\,dt/t\le x$. Adding proves the assertion for $E_1$. For $0\le\alpha\le\eta<1/2$, step 1.1 and summation by parts give $\sum_{k\le K}B(k)k^{-\alpha}\ll K^{1-\alpha}$ uniformly for $K\ge1$. Thus $$|E_2|\ll\int_0^\eta x^{1-\alpha}\left(\sum_m\frac{|a(m)|}{m^{1-\alpha}}\right)\left(\sum_n\frac{|b(n)|}{n^{1+2\eta}}\right)d\alpha\ll xv\int_0^\eta x^{-\alpha}\,d\alpha\le\frac{xv}{\mathcal L},$$ using steps 1.2 and 2.2. [F1, F2, F6, step 1.1, step 1.2, step 2.2, algebra]

3.2 We bound the integrated Perron error for $x/2\le N\le3x/2$. On this range $(x/N)^d\ll1$, uniformly in $\alpha,\gamma$. The integrated absolute coefficient at $N$ is bounded by $$\sum_{\substack{mnuw=N\\u,w>y}}|a(m)|B(u)B(w)|b(n)|\int_0^\eta(unw)^{-\alpha}d\alpha\int_0^{2\eta}(nw)^{-\gamma}d\gamma\le\sum_{\substack{mnuw=N\\u,w>y}}\frac{|a(m)|B(u)B(w)|b(n)|}{\log(unw)\log(nw)}\le H(N).$$ In the last inequality discard the cutoffs, use $|b(n)|\le H(n)$, and note that $m$ must be the unique small-prime part of $N$. Set $q=N/m$, $r=nw$; the rough convolution identity in step 2.1 first sums $w,n$, cancelling $\log r$, and then sums $u,r$, cancelling $\log q$. If there are no such factorizations the left side is zero. For $N\ne x$ the kernel is $\ll\min(1,x/(T|N-x|))$, because $|\log(x/N)|\gg|N-x|/x$ on this range. The central interval $|N-x|\le x/T$ contributes $O(x/T+x^{3/4})$ by step 2.1. On the successive annuli $2^j x/T<|N-x|\le2^{j+1}x/T$, the contribution is $O(x/T+2^{-j}x^{3/4})$; there are $O(\log(2T))$ annuli. Thus the total is $$O\left(\frac{x\log(2T)}T+x^{3/4}\right).$$ At integer $x$, the integrated endpoint error from [F4] is $O(H(x)/T)$ and changing the half-weighted coefficient to full weight costs $O(H(x))$. Step 2.1 absorbs both into $O(x^{3/4})$. [F4, F6, step 2.1, step 1.3, algebra]

3.3 Outside $[x/2,3x/2]$, the Perron kernel error is $\ll(x/N)^d/T$. Put $b_0=\gamma/2$ and $\delta=1/\mathcal L+b_0$. Summing the absolute coefficient series bounds this part, at fixed $\alpha,b_0$, by $$\frac{x^{c_0-\alpha-b_0}}T\left(\sum_m\frac{|a(m)|}{m^{c_0-\alpha-b_0}}\right)\left(\sum_n\frac{|b(n)|}{n^{c_0+b_0}}\right)\left(\sum_{y<u<x/y}\frac{B(u)}{u^{c_0-b_0}}\right)\left(\sum_{y<w<x/y}\frac{B(w)}{w^{c_0+b_0}}\right).$$ The first factor in parentheses is $O(v)$: its real argument lies in $[1-2/v,1+2/v]$, so step 1.2 applies. The second is $O(1/(\delta v))$ by step 2.2, since $\delta v\le3/2$. The fourth is $O(1/\delta)$ by step 1.1 and summation by parts. The third is $O(x^{b_0}/\delta)$: replace $u^{b_0}$ by $x^{b_0}$ for the bound $O(x^{b_0}\mathcal L)$; independently, summation by parts with $\sum_{n\le u}B(n)\ll u$ gives $O(x^{b_0}/b_0)$ when $b_0>0$, by dropping $u^{-1/\mathcal L}$ and integrating $u^{b_0-1}$. The minimum of these bounds is $O(x^{b_0}/\delta)$, including $b_0=0$. Thus the displayed expression is $O(x^{1-\alpha}/(T\delta^3))$. Since $d\gamma=2db_0$, $$\int_0^\eta\int_0^{2\eta}\text{(far error)}\,d\gamma\,d\alpha\ll\frac xT\left(\int_0^\eta x^{-\alpha}d\alpha\right)\left(\int_0^\eta(1/\mathcal L+b_0)^{-3}db_0\right)\ll\frac{x\mathcal L}T.$$ [F4, F6, step 1.1, step 1.2, step 2.2, step 1.3, algebra]

4.1 Apply [F4] at the positive line $d$ to this coefficient series. Let $G$ be the integrated sum of its coefficients over $N\le x$, with full endpoint weight. Whenever $N\le x$ and $u,w>y$, the other variable being $>y$ forces both $u,w<x/y$. Thus the polynomial cutoffs impose no restriction on $G$, including when $N=x$. For each fixed $q>1$, first convolve $w,n$ into $r=wn$: step 1.1 gives $\sum_{wn=r}\Lambda_b(w)b(n)=b(r)\log r$, and integration over $\gamma\in[0,2\eta]$ gives $b(r)r^{-\alpha}(1-r^{-2\eta})$. The term with $r=1$ is zero. In the part without $r^{-2\eta}$, convolving $u,r$ and integrating $\alpha\in[0,\eta]$ gives $b(q)(1-q^{-\eta})$. The remaining part is exactly $E_2$. All sums here are finite; the conventions at $q=1$ agree by direct evaluation. Since $a*b=f$, we obtain $$G=\sum_{N\le x}f(N)-E_1-E_2.$$ [F1, F4, F6, step 1.1, step 3.1, step 1.3, algebra]

5.1 Steps 3.2 and 3.3 give $I=G+O(x\mathcal L/T+x^{3/4})$, since $T\le x^{9/10}$ implies $\log(2T)\ll\mathcal L$. For all $x\ge100$, $x^{3/4}\ll x/\mathcal L\ll xv/\mathcal L$: the function $(\log x)x^{-1/4}$ has a finite absolute maximum, as differentiation shows. Combine this with step 4.1 and the bounds for $E_1,E_2$ in step 3.1. This proves the exact claimed formula, uniformly for complex 1-bounded multiplicative $f$, with all endpoint conventions intact. [F6, step 3.1, step 4.1, step 3.2, step 3.3, algebra] ∎

## Remarks

This draft supplies Proposition 2.1 with $\kappa=1$ beyond its printed
logarithmic-coefficient class. The prime-power extension is proved in
steps 1.1, 2.1 and 3.2; the extra $x^{3/4}$ error is absorbed by the
already present $x\log y/\log x$ term. No Shiu estimate is imported.
It does not prove the Euler-product cancellation, renormalization,
maximum-modulus argument, or resonant summatory estimate in MRT Appendix A.
For a real twist $t_*$, apply the lemma to $f(n)n^{-it_*}$; its small and
large series are $S(z+it_*)$ and $L(z+it_*)$, and its polynomial is
$D(z+it_*)$. This gives the integrand of (A.10), with the same error plus
$x\log x/T$. At $T=(\log x)^2$ the latter is absorbed by
$x\log y/\log x$. Checking that particular Appendix-A parameters satisfy
$10\le y\le\sqrt x$ and $T\le x^{9/10}$ remains the consumer's duty.
Independent proof review and native registration have not been performed.
