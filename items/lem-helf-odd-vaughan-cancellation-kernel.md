---
id: lem-helf-odd-vaughan-cancellation-kernel
kind: lemma
title: "Odd Vaughan Mean Square: Exact Cancellation Kernel and Explicit Remainder"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
proof_strategy: direct
deps:
  - thm-fundamental-theorem-of-arithmetic
  - cor-basel-sum-by-residues
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. A. Helfgott, Minor arcs for Goldbach's problem"
      url: "https://arxiv.org/pdf/1205.5252v4"
      locator: "Section 4.1.1, equations (4.7)–(4.19), printed pp. 33–36; corrected maximum in (4.9), direct odd-integer count and local rational remainder proof."
---

## Statement

All indices below are positive integers. Define the Möbius function by $\mu(1)=1$, $\mu(n)=0$ when a prime square divides $n$, and $\mu(n)=(-1)^k$ when $n$ is a product of $k$ distinct primes. Put $\sigma(n)=\sum_{d\mid n}d$ and $\zeta(a)=\sum_{n\ge1}n^{-a}$ for real $a>1$, and write $Z_o=(1-2^{-3/2})\zeta(3/2)$. For real $U\ge1$ and $T>U$ let $S=T/U$ and
$$A_U(T)=\sum_{\substack{\max(U,T/2)<m\le T\\m\ \mathrm{odd}}}\left(\sum_{\substack{d\mid m\\d>U}}\mu(d)\right)^2.$$
For $t>0$ define
$$g_2(t)=\sum_{\substack{r_1,r_2\le t\\r_1,r_2\ \mathrm{odd}\\(r_1,r_2)=1}}\frac{\mu(r_1)\mu(r_2)}{\sigma(r_1)\sigma(r_2)},\qquad K_2(S)=\sum_{\substack{s\le S\\s\ \mathrm{odd}}}\frac1s\int_{1/2}^1g_2(uS/s)\,du.$$
Then
$$\left|A_U(T)-\frac4{\pi^2}T K_2(S)\right|\le\frac{127}{100}Z_o^3\frac{T^{3/2}}U\le\frac{127}{100}\zeta(3/2)^3\frac{T^{3/2}}U.$$
In the preceding Vaughan reduction, $T=x/W$ and $A(W)=A_U(T)$ whenever $V<W<x/U$. If $T\le U$, then $A_U(T)=0$ by the same sum convention.

There is also an exact finite expression for the unresolved kernel. With $[a]_+=\max(a,0)$,
$$w_m(S)=\sum_{\substack{s\le S\\s\ \mathrm{odd}}}\frac1s\left[\min\left(1,\frac{(m+1)s}{S}\right)-\max\left(\frac12,\frac{ms}{S}\right)\right]_+,\qquad K_2(S)=\sum_{m\le S}g_2(m)w_m(S).$$
These statements do not bound $K_2(S)$ by a numerical constant. In particular, no unconditional bound $K_2(S)\le0.37273$ is asserted here.

## Statement references

[[thm-fundamental-theorem-of-arithmetic]]

[[cor-basel-sum-by-residues]]

[Helfgott, Section 4.1](https://arxiv.org/pdf/1205.5252v4)

## Facts & Assumptions

**Given:** The real parameters and arithmetic functions in the Statement. Empty sums are zero. Integrals of the finite step functions on bounded intervals are ordinary Riemann integrals.

[F1] [[thm-fundamental-theorem-of-arithmetic]] supplies unique positive-integer prime factorization, including the empty factorization of $1$.

[F2] [[cor-basel-sum-by-residues]] gives $\zeta(2)=\pi^2/6$.

## Proof

1.1 Unique factorization gives $\sum_{d\mid n}\mu(d)=\mathbf1_{n=1}$ and $\sum_{h^2\mid n}\mu(h)=\mu(n)^2$ by multiplying the corresponding finite factors at each prime. The series $\zeta(a)$ converges for $a>1$ by comparison with $1+\int_1^\infty t^{-a}\,dt$. Expanding finite prime products and then letting their prime sets increase, absolute convergence gives $\sum_{(h,R)=1}\mu(h)/h^2=\prod_{p\nmid R}(1-p^{-2})$ and $\prod_p(1-p^{-2})=1/\zeta(2)$. One justification of the limit is that every omitted integer has size exceeding the largest included prime, so its contribution is bounded by a convergent-series tail. [F1, algebra]

2.1 Let $B(t)=\sum_{h\le t}\mu(h)^2$ and $C=\sum_h\mu(h)^2/h^2$. The unique decomposition of an integer as a squarefree integer times a square gives $C\zeta(4)=\zeta(2)$ by absolutely convergent regrouping. In fact $C<38/25$: monotone integral comparison gives $\zeta(2)<\sum_{n=1}^{100}n^{-2}+1/100$ and $\zeta(4)>\sum_{n=1}^{100}n^{-4}$, and the finite rational inequality $\sum_{n=1}^{100}n^{-2}+1/100<(38/25)\sum_{n=1}^{100}n^{-4}$ proves the claim. Explicit rational witnesses are $\sum_{n=1}^{100}n^{-2}+1/100<164499/100000$, $\sum_{n=1}^{100}n^{-4}>108232/100000$ and $25\cdot164499<38\cdot108232$; the finite comparisons follow by common positive denominators and are replayed in the companion script. [F1, step 1.1, algebra]

3.1 Define $f(a)=B(a)+(a^2/2)\sum_{h>a}\mu(h)^2/h^2$ for $a>0$, with $f(0)=0$. Then $f(a)\le(127/100)a$. Here are finite and tail verifications. For $0<a<1$, $f(a)/a=aC/2<19/25$. On every interval between consecutive squarefree integers, $f(a)/a=B(a)/a+(a/2)(C-\sum_{h\le a}\mu(h)^2/h^2)$ is convex; at a squarefree integer its jump is upward, so the left limit is no larger than its value at that integer. For the integers $a=1,2,3,4,5,6$, replacing $C$ by $38/25$ gives upper bounds respectively $63/50$, $127/100$, $743/600$, $961/900$, $79/72$, $83/75$, all at most $127/100$. Finally $B(t)\le\lfloor t\rfloor-\lfloor t/4\rfloor\le3t/4+3/4$ because squarefree integers are not divisible by $4$. Summing the identity $h^{-2}=\int_h^\infty2t^{-3}\,dt$ over $h>a$ gives $\sum_{h>a}\mu(h)^2/h^2=-B(a)/a^2+2\int_a^\infty B(t)t^{-3}\,dt$. Consequently $f(a)\le9a/8+3/4\le(5/4)a<(127/100)a$ for $a\ge6$. Convexity between the checked endpoints covers $1\le a\le6$. [step 2.1, algebra]

4.1 For odd squarefree $R$ and $b/2\le a<b$, let $N_R(a,b)$ count odd squarefree integers $l\in(a,b]$ coprime to $R$. Squarefree detection and divisor inclusion-exclusion give $N_R(a,b)=\sum_{d\mid R}\mu(d)\sum_{h\le\sqrt{b/d},\,(h,2R)=1}\mu(h)\#\{l\in(a,b]:l\ \mathrm{odd},\ dh^2\mid l\}$. Indeed for $(l,R)=1$, every square divisor root is coprime to $R$; for $(l,R)>1$ the sum over $d\mid(l,R)$ vanishes, even when the square-root sum is restricted to $(h,R)=1$. Since $d,h$ are odd, the count in braces differs from $(b-a)/(2dh^2)$ by at most $1$. Complete the sum over $h$ to infinity. For each $d$ the total absolute error is at most $\sum_{h\le X}\mu(h)^2+((b-a)/(2d))\sum_{h>X}\mu(h)^2/h^2\le f(X)$, where $X=\sqrt{b/d}$ and $b-a\le b/2$. Thus $N_R(a,b)$ differs from $(b-a)\rho_R$ by at most $(127/100)\sqrt b\sum_{d\mid R}d^{-1/2}$, where $\rho_R=(1/2)\prod_{p\mid R}(1-p^{-1})\prod_{p\nmid2R}(1-p^{-2})=(4/\pi^2)\prod_{p\mid R}p/(p+1)$. [F1, F2, step 1.1, step 3.1, algebra]

5.1 For $y,z>0$ form $Q(z,y)=\sum_{r_1,r_2<y,\ r_1,r_2\ \mathrm{odd},\ (r_1,r_2)=1}\mu(r_1)\mu(r_2)N_{r_1r_2}(a,b)$, ignoring zero-coefficient pairs, with $b=z/(r_1r_2)$ and $a=\max(z/(y\min(r_1,r_2)),z/(2r_1r_2))$. The restriction $r_i<y$ gives $b/2\le a<b$. The main term supplied by step 4.1 is $(4z/\pi^2)\sum\mu(r_1)\mu(r_2)(1-\max(1/2,r_1/y,r_2/y))/(\sigma(r_1)\sigma(r_2))$, since squarefree coprime $r_i$ have $\sigma(r_i)=\prod_{p\mid r_i}(p+1)$. This is exactly $(4z/\pi^2)\int_{1/2}^1g_2(uy)\,du$: each pair contributes for $u\ge\max(1/2,r_1/y,r_2/y)$, and endpoints have zero measure. [F1, step 4.1, algebra]

6.1 The sum of absolute errors in step 5.1 is at most $(127/100)\sqrt z D(y)^2$, where $D(y)=\sum_{r<y,\ r\ \mathrm{odd}}r^{-1/2}\sum_{d\mid r}d^{-1/2}=\sum_{d s<y,\ d,s\ \mathrm{odd}}1/(d\sqrt s)$. For every $t>0$, $\sum_{s<t,\ s\ \mathrm{odd}}s^{-1/2}\le\sqrt t$: for successive odd $j\ge3$, $1/\sqrt j\le\sqrt j-\sqrt{j-2}$, and the term at $1$ is $1$. Therefore $D(y)\le\sqrt y\sum_{d\ \mathrm{odd}}d^{-3/2}=\sqrt y Z_o$. Dropping squarefree and coprimality restrictions only increases the absolute-error majorant. We have proved $|Q(z,y)-(4z/\pi^2)\int_{1/2}^1g_2(uy)\,du|\le(127/100)Z_o^2 y\sqrt z$. [step 4.1, step 5.1, algebra]

6.2 Expand the square defining $A_U(T)$. For every nonzero term with divisors $d_1,d_2>U$ of odd $m\le T$, set $l=(d_1,d_2)$, $r_i=d_i/l$ and $s=m/(r_1r_2l)$. Unique factorization gives $(r_1,r_2)=1$, $(l,r_1r_2)=1$, $l$ squarefree and $\mu(d_1)\mu(d_2)=\mu(r_1)\mu(r_2)$. Conversely these conditions reconstruct exactly the nonzero original terms, with all variables odd. The inequalities are $r_i<S/s$ and $\max(U/\min(r_1,r_2),T/(2r_1r_2s))<l\le T/(r_1r_2s)$. The original condition $m>U$ is automatic from $d_i>U$. Hence the exact finite identity is $A_U(T)=\sum_{s<S,\ s\ \mathrm{odd}}Q(T/s,S/s)$. This derivation requires the maximum in the lower endpoint. [F1, step 5.1, algebra]

7.1 Apply step 6.1 to each summand in step 6.2. The main terms sum to $(4T/\pi^2)K_2(S)$; including $s=S$ if it is an odd integer adds only an integral zero. The errors total at most $(127/100)Z_o^2 S\sqrt T\sum_{s<S,\ s\ \mathrm{odd}}s^{-3/2}\le(127/100)Z_o^3 T^{3/2}/U$. Since $Z_o\le\zeta(3/2)$, this proves both remainder bounds. For $T\le U$, the defining outer sum is empty. [step 6.1, step 6.2, algebra]

8.1 Since $g_2(t)=g_2(m)$ for $m\le t<m+1$, partition the integral for each $s$ at $u=ms/S$ and $u=(m+1)s/S$. Intersecting these intervals with $[1/2,1]$ gives exactly the weights $w_m(S)$ in the Statement; $g_2(t)=0$ for $t<1$. All sums and partitions are finite, and values at endpoints do not affect their integrals. The range of $m$ in the preceding reduction is precisely the range in $A_U(x/W)$, proving the asserted identification and all claims. [given, step 7.1, algebra] ∎

## Remarks

This draft reuses the preceding worker's arithmetic conventions and reduction; it does not repeat or install that draft. It proves the cancellation-kernel reduction and a remainder compatible with the scale in Helfgott (4.34). It does not prove the numerical kernel estimates required for (4.35)–(4.36). The factor $Z_o^3$ comes from counting odd multiples directly, before dropping restrictions; the proof does not import the source's squarefree-count computation.

The source's displayed (4.9), printed p. 33, has a minimum at the lower endpoint, while (4.8), the following proof and the interval-length main term require a maximum. The formula proved here uses the maximum. The source's piecewise numerical envelope for the kernel is an upper majorant; replacing the exact main term by such a majorant yields an upper bound, without claiming an equality with a small absolute remainder.
