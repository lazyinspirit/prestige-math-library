---
dependency_level: 1
id: lem-voronoi-damped-divisor-kernel-inversion
kind: lemma
title: "Damped divisor inversion and compact Riemann integral convergence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [cor-principal-logarithm-is-holomorphic-on-the-slit-plane, def-divisor-counting-function, def-euler-mascheroni-constant, thm-divisor-function-subpolynomial-bound, lem-harmonic-sum-asymptotic, thm-integration-by-parts, thm-substitution-for-improper-integrals, def-complex-logarithms-principal-logarithm-and-complex-powers, thm-weierstrass-m-test-for-complex-function-series]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Tom Meurman, A simple proof of Voronoi's identity, Astérisque 209 (1992), 265–274"
      url: "https://numdam.org/item/AST_1992__209__265_0.pdf"
      locator: "Sections 4–7; local integral convergence is reconstructed by finite-neighborhood deletion"
---

## Statement

Let $d(n)$ count positive divisors, put $d(x)=0$ off positive integers, and let $\gamma$ be the Euler–Mascheroni constant. For $x>0$ set
$$A(x):=\sum_{n<x}d(n)+\tfrac12d(x)-x(\log x+2\gamma-1)-\tfrac14.$$
For $0<v\le1/2$ put
$$F(t,v):=\int_0^\infty e^{-v(u+t/u)}\cos(2\pi u)\sin(2\pi t/u)\,du,\qquad A_v(x):=\frac2\pi\sum_{n\ge1}\frac{d(n)}nF(nx,v).$$
This series converges absolutely. With $p=v+2\pi i$ and the principal argument,
$$A_v(x)=\frac2\pi\int_0^\infty\operatorname{Re}\frac1{e^{pu}-1}\,\arg(1-e^{-px/u})\,du.$$
The integral is absolutely convergent. One has $A_v(x)\to A(x)$ for every $x>0$, uniformly on each compact subset of $(0,\infty)$ containing no integer. For every compact interval $J\subset(0,\infty)$ the functions $A_v$ are bounded by one constant on $J$ for sufficiently small positive $v$, and
$$\int_J|A_v(x)-A(x)|\,dx\longrightarrow0,$$
where the last integral is a proper Riemann integral.

## Statement references

[Meurman, Sections 4–7](https://numdam.org/item/AST_1992__209__265_0.pdf)

## Facts & Assumptions

**Given:** The functions and real parameters in the statement. Integrals are Riemann integrals, improper only when an endpoint is singular or infinite.

[F2] [[def-divisor-counting-function]] gives $d(n)=\sum_{mk=n}1$, and [[thm-divisor-function-subpolynomial-bound]] gives $d(n)\ll_\varepsilon n^\varepsilon$ for every $\varepsilon>0$.

[F3] [[def-euler-mascheroni-constant]] and [[lem-harmonic-sum-asymptotic]] give $H_N=\log N+\gamma+O(N^{-1})$.

[F4] [[thm-integration-by-parts]] and [[thm-substitution-for-improper-integrals]] apply componentwise on compact truncations and then by separately controlled endpoint limits.

[F5] [[def-complex-logarithms-principal-logarithm-and-complex-powers]] fixes the principal argument, and [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]] gives its holomorphic logarithm with derivative $1/z$ wherever used below. The power series $\log(1-z)=-\sum_{k\ge1}z^k/k$ for $|z|<1$ follows by integrating the geometric series on a radial segment; its constant is fixed by the value zero at $z=0$.

[F6] [[thm-weierstrass-m-test-for-complex-function-series]] gives uniform convergence from the summable majorants used below. Passing a uniform limit through a proper Riemann integral follows directly by bounding the integral difference by interval length times uniform error.

## Proof

1.1 For $v>0$, $u+t/u\ge2\sqrt t$ implies $\int_0^\infty e^{-v(u+t/u)}du\le(2/v)e^{-v\sqrt t}$. Thus [F2] proves absolute convergence of $A_v(x)$. Expand $d(n)$ and substitute $u\mapsto mu$ in the term $n=mk$; the resulting summand is $k^{-1}e^{-v(mu+kx/u)}\cos(2\pi mu)\sin(2\pi kx/u)$. It has absolute value at most $e^{-v(u+x/u)/3}e^{-v\sqrt{mkx}/3}$, since $mu+kx/u\ge u+x/u$ and $mu+kx/u\ge2\sqrt{mkx}$. The integral of the first factor is finite, and the sum of the second is $\sum_nd(n)e^{-v\sqrt{nx}/3}<\infty$. On each compact $u$ interval the double series converges uniformly by [F6]; its remaining indices have integrated absolute bound given by the integrable first factor times the tail of that convergent numerical series. Its improper $u$ tails are bounded uniformly over all partial sums by the same first-factor integral tails times the whole numerical sum. Taking first finite sums and compact truncations, then these uniform tails, justifies sum-integral exchange without a measure-theoretic Fubini theorem. [F2, F4, F6, given]

2.1 Sum the geometric cosine series and the logarithmic sine series from [F5]. With $B_v(x,u)=\arg(1-e^{-px/u})$, step 1.1 gives the asserted integral formula. Since $\operatorname{Re}(1-e^{-pt})>0$ for $t>0$, $|B_v|<\pi/2$ and the principal branch is continuous. For fixed $v$, the preceding master bounds are locally uniform in $x>0$, so $A_v$ is continuous there by the uniform limit of its continuous compact integral truncations. [F5, F6, step 1.1]

3.1 Fix an integer $N>2x$ and $R=N+1/2$. Put $W_v(u)=\operatorname{Re}\coth(pu/2)=\sinh(vu)/(\cosh(vu)-\cos(2\pi u))$. Since $2\operatorname{Re}(e^{pu}-1)^{-1}=W_v-1$, split the integral at $R$ into $-\pi^{-1}\int_0^R B_v\,du$, $\pi^{-1}\int_0^R W_vB_v\,du$, and the original tail from $R$ to infinity. [step 2.1, algebra]

4.1 The function $H_v(u)=\operatorname{Re}[p^{-1}\log(1-e^{-pu})]$ is a primitive of $\operatorname{Re}(e^{pu}-1)^{-1}$. Uniformly for $u\ge R$ and small $v$, it is bounded: the argument is bounded, the real-log coefficient is $\operatorname{Re}(p^{-1})=O(v)$, and $|1-e^{-pu}|\ge1-e^{-vu}$ bounds its potentially negative logarithm by $C+|\log(vu)|$ when $vu\le1$. At $R$, the logarithm is the real number $\log(1+e^{-vR})$, hence $H_v(R)=O(v)$. For $t=x/u<1/2$, $B_v'=-xu^{-2}\operatorname{Im}[p/(e^{pt}-1)]=O(xu^{-2})$, since $z/(e^z-1)$ is analytic and bounded on the rectangle $0\le\operatorname{Re}z\le1/4$, $|\operatorname{Im}z|\le\pi$, with removable value $1$ at zero and imaginary part $O(|z|)$. Integration by parts gives the tail bound $O(v+x/R)$. All constants can be chosen uniformly for $x$ in a fixed positive compact interval and fixed $N$ larger than twice its maximum. [F4, F5, step 3.1]

4.2 Write $\psi(t)=\{t\}-1/2$ off integers and $\psi^*(k)=0$ at integers. From the principal argument one has $B_v(x,u)\to-\pi\psi^*(x/u)$. The limit of the first finite integral in step 3.1 is therefore $x\int_{x/R}^\infty\psi(t)t^{-2}\,dt$. This integral convergence is uniform for $x$ in any fixed positive compact interval $[A,B]$: after $t=x/u$, truncate the $t$ integral at $T$, losing at most $CB/T$; on $[A/R,T]$ remove intervals of arbitrarily small total length around its finitely many integers. Their weighted integrals are uniformly small, since $t^{-2}$ is bounded there and $|B_v|,|\psi|$ are bounded; on the complement convergence is uniform. Thus an explicit finite truncation and neighborhood argument proves integral convergence. [F4, F5, step 3.1]

4.3 On the cell $u=n+s$, $|s|\le1/2$, $1\le n\le N$, replace $W_v(n+s)$ by $P_{vn}(s)=\sinh(vn)/(\cosh(vn)-\cos(2\pi s))$. This even positive kernel has cell integral one by its absolutely convergent series $1+2\sum_{k\ge1}e^{-vnk}\cos(2\pi ks)$, and its mass on $|s|\ge\delta$ tends to zero for every $\delta>0$. Also $\int_{-1/2}^{1/2}|W_v(n+s)-P_{vn}(s)|ds=O_n(v\log(2/v))$. To check this, differentiate $\sinh r/(\cosh r-\cos(2\pi s))$ in $r$; for $r$ between $vn$ and $v(n+s)$ its derivative is at most $C_n/((vn)^2+s^2)$. Multiply by $v|s|$ and integrate. [F6, step 3.1, algebra]

5.1 On $0<r<1$, piecewise integration gives $\int_r^\infty\psi(t)t^{-2}dt=-\log r-1/(2r)+1-\gamma$. Indeed the integral from $1$ to an integer endpoint is expressed by harmonic sums through integration on each unit interval, and [F3] gives $\int_1^\infty\psi(t)t^{-2}dt=1/2-\gamma$; the remaining interval uses $\psi(t)=t-1/2$. Hence the limit in step 4.2 is $x(\log(R/x)+1-\gamma)-R/2$. [F3, F4, step 4.2, algebra]

5.2 If $x/n$ is not an integer, $B_v(x,n+s)$ converges uniformly near $(v,s)=(0,0)$ to a continuous function with value $-\pi\psi(x/n)$. Splitting the cell into $|s|<\delta$ and its complement and using step 4.3 shows that its $W_v$ average tends to that value. This convergence is uniform for $x$ in a compact set a fixed positive distance from the integers: then $\operatorname{dist}(x/n,\mathbb Z)\ge\operatorname{dist}(x,\mathbb Z)/n$, and there are only finitely many cells. [step 2.1, step 4.3]

5.3 If $x=kn$, $k$ a positive integer, put $q_s=v-2\pi i s/n$. The exponents $px/(n+s)$ and $q_sx/(n+s)$ differ by $2\pi ik$, so their exponentials agree. On a sufficiently small fixed symmetric neighborhood of zero compare $B_v(x,n+s)$ with $b_v(s)=\arg(1-e^{-q_sx/n})$, which is odd in $s$. Their difference is $O_{x,n}(|s|)$ uniformly as $v\downarrow0$: differentiate $\arg(1-e^{-q_st})$ in $t$ between $x/(n+s)$ and $x/n$; the derivative is $\operatorname{Im}[q_s/(e^{q_st}-1)]$, bounded uniformly because $z/(e^z-1)=1+O(z)$ in a small rectangle and $t$ stays in a positive compact interval. The two $t$ endpoints differ by $O(|s|)$. The even kernel $P_{vn}$ integrates the odd comparison function to zero on that neighborhood; the error tends to zero by concentration, and its outside mass tends to zero. The resonant cell therefore contributes zero, exactly $-\pi\psi^*(x/n)$. [F5, step 4.3, algebra]

6.1 On $0<u<1/2$, $W_v(u)\le Cv/u$. The argument satisfies $|B_v(x,u)|\le C e^{-vx/u}$ if $vx/u\ge1$, and is bounded otherwise. Splitting at $u=vx$ and substituting $s=vx/u$ gives $\int_0^{1/2}W_v|B_v|du\le C_xv(1+|\log v|)\to0$. The bound is uniform for $x$ in a fixed positive compact interval. Combining this with the finitely many cells gives $\pi^{-1}\int_0^RW_vB_vdu\to-\sum_{n=1}^N\psi^*(x/n)$ pointwise, uniformly away from the integers in a positive compact set. [F4, step 4.3, step 5.2, step 5.3]

7.1 Since $N>x$, one has $\sum_{n=1}^N\psi^*(x/n)=xH_N-D(x)-N/2+d(x)/2$, where $D(x)=\sum_{n\le x}d(n)$: count the pairs $nm\le x$ and separately the equality pairs $nm=x$. Combining this identity with steps 5.1 and 6.1, $R=N+1/2$, and $H_N=\log R+\gamma+O(1/N)$ shows that the finite-integral limit is $A(x)+O(x/N)$. Step 4.1 bounds the omitted tail by $O(v+x/N)$. First taking $v\downarrow0$, then $N\to\infty$, proves $A_v(x)\to A(x)$, uniformly on positive compact sets avoiding integers. [F2, F3, step 4.1, step 5.1, step 6.1, algebra]

8.1 On a fixed $J=[A,B]$, choose one $N>2B$. The first integral in step 3.1 is bounded by $R/2$; each positive cell has bounded total $W_v$ mass by step 4.3; the zero-cell bound in step 6.1 is uniform in $x\in J$; and step 4.1 bounds the tail. Thus $|A_v(x)|\le C_J$ for all $x\in J$ and sufficiently small $v$. The function $A$ is bounded and piecewise smooth with finitely many jumps on $J$. Remove intervals of total length less than $\eta$ around its integer points. On the complement step 7.1 gives uniform convergence; on the removed intervals $|A_v-A|\le C'_J$, so the integral there is at most $C'_J\eta$. Both integrands are Riemann integrable, since $A_v$ is continuous and $A$ has finitely many discontinuities. Taking $v\downarrow0$ and then $\eta\downarrow0$ proves the asserted Riemann integral convergence. [step 2.1, step 3.1, step 4.1, step 4.3, step 6.1, step 7.1] ∎
