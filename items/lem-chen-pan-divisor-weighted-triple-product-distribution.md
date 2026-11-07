---
id: lem-chen-pan-divisor-weighted-triple-product-distribution
kind: lemma
title: Divisor-weighted distribution of Chen's switched three-prime convolution
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [thm-choice-free-siegel-walfisz-from-mobius-cancellation, thm-multiplicative-large-sieve-inequality, thm-dirichlet-character-orthogonality, thm-dirichlet-character-primitive-induction, lem-dirichlet-character-values, thm-euler-totient-product-formula, lem-truncated-perron-kernel, def-prime, thm-logarithm-slower-than-every-positive-power, thm-canonical-prime-factorisation, def-number-theoretic-mobius-function, def-divisor-counting-function]
justified_by: []
proof_strategy: direct
axiom_use: Finite character sums, finite partitions and proper integrals of explicit finite Dirichlet polynomials; no choice axiom.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Zihao Liu, A Corrected Simplified Proof of Chen's Theorem
      url: https://arxiv.org/pdf/2203.07871v1
      locator: Theorem2, pp2–3, and SectionsIII–IV; explicit local reconstruction of the referenced Pan mean-value input. The harmless truncated logarithmic integral below specifies all small endpoints.
    - title: Kiran Kedlaya, Notes on Analytic Number Theory, Chapter18
      url: https://kskedlaya.org/ant/chap-bombieri2.html
      locator: Section18.1, character/large-sieve method; the squarefree divisor weight and both sharp boundaries are derived here.
---

## Statement

For real $x\ge3$ let $f_x(a)$ count prime pairs satisfying
$$a=p_1p_2,\qquad x^{1/10}<p_1\le x^{1/3}<p_2,\qquad p_1p_2^2\le x.$$
Thus $f_x(a)$ is either zero or one. For $0\le y\le x$ and $(l,q)=1$, put
$$T_x(y;q,l)=\sum_a f_x(a)\#\{p\text{ prime}:ap\le y,\ ap\equiv l\pmod q\},$$
$$\mathcal L(t)=\begin{cases}\displaystyle\int_2^t\frac{du}{\log u},&t\ge2,\\0,&0\le t<2,\end{cases}\qquad M_x(y;q)=\frac1{\varphi(q)}\sum_{(a,q)=1}f_x(a)\mathcal L(y/a).$$
For every fixed $A>0$ there is a fixed $B>0$ such that, writing $Q=x^{1/2}(\log(3x))^{-B}$,
$$\sum_{q\le Q}\mu(q)^2 3^{\omega(q)}\sup_{0\le y\le x}\max_{(l,q)=1}|T_x(y;q,l)-M_x(y;q)|\ll_A x(\log(3x))^{-A}.$$
Here $\omega(q)$ counts distinct prime divisors and $\omega(1)=0$. Constants are uniform in all displayed endpoints and moduli. This is a distribution input only; it asserts none of Chen's numerical sifted bounds.

## Facts & Assumptions

**Given:** The explicit prime ranges and definitions in the Statement; put $L=\log(3x)$ and $w(q)=\mu(q)^23^{\omega(q)}$.

[F1] [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] gives, for every fixed $D,H>0$, all actual characters modulo $r\le(\log t)^D$, including imprimitive and principal ones, $\psi(t,\chi)=\delta_\chi t+O_{D,H}(t(\log t)^{-H})$ for $t\ge3$, without a choice hypothesis. Prime powers have their usual von Mangoldt weights in that theorem.

[F2] [[thm-dirichlet-character-orthogonality]], [[thm-dirichlet-character-primitive-induction]] and [[lem-dirichlet-character-values]] give the two finite orthogonality relations, the unique primitive ancestor of every character, multiplicativity and $|\chi(n)|\le1$.

[F3] [[thm-multiplicative-large-sieve-inequality]] gives the unweighted sum over primitive characters of squared polynomial sums at moduli at most $U$, bounded by $(U^2+4\pi V)\sum|c_n|^2$ for coefficients supported on an integer interval of length $V$.

[F4] [[thm-euler-totient-product-formula]] gives the finite product for $\varphi$, including $\varphi(1)=1$.

[F5] [[lem-truncated-perron-kernel]] gives the proper vertical integral of $z^s/s$ at real part $c>0$, with error $O(z^c\min(1,(T|\log z|)^{-1}))$ away from $z=1$.

[F6] [[def-prime]] gives positive integer prime variables. [[thm-logarithm-slower-than-every-positive-power]] absorbs every fixed logarithmic power into every fixed positive power of $x$.

[F7] [[thm-canonical-prime-factorisation]], [[def-number-theoretic-mobius-function]] and [[def-divisor-counting-function]] give unique finite prime-power factorizations, $\mu(n)^2$ as the squarefree indicator, and the divisor count $\tau(n)$.

## Proof

1.1 The two prime factors of $a$ are uniquely distinguished by the disjoint ranges on either side of $x^{1/3}$; hence $0\le f_x\le1$. Its support satisfies $x^{13/30}<a\le x^{2/3}$. For the upper bound, $a=p_1p_2\le\sqrt{xp_1}\le x^{2/3}$; for the lower bound use $p_1>x^{1/10}$ and $p_2>x^{1/3}$. For a fixed $y$, the prime triples defining $T_x$ are exactly those satisfying the displayed ranges, $p_1p_2^2\le x$, and $p_1p_2p_3\le y$. No ordering between $p_2$ and $p_3$ is added and repetitions are retained. [F6, given, algebra]

2.1 We record all divisor losses explicitly from [F7]. Write $\tau_j(n)$ for the number of ordered factorizations of $n$ into $j$ positive integers. Finite summation over the first $j-1$ factors gives $\sum_{n\le X}\tau_j(n)\le X(1+\log X)^{j-1}$ and $\sum_{n\le X}\tau_j(n)/n\le(1+\log X)^j$. At a prime power $(e+1)^2\le\binom{e+3}{3}$, so $\tau(n)^2\le\tau_4(n)$. Also $w(n)^2\le\tau_9(n)$: for squarefree $n$ both sides equal $9^{\omega(n)}$, and otherwise the left side is zero. The product formula gives [F4, F7, step 1.1, algebra]
$$\frac n{\varphi(n)}\le\prod_{p\mid n}(1+2/p)\le\sum_{d\le n}\frac{\tau(d)}d\le(1+\log(2n))^2,\qquad \varphi(rs)\ge\varphi(r)\varphi(s).$$
Consequently $\sum_{n\le X}w(n)^2/\varphi(n)\ll(1+\log(2X))^{11}$ and $\sum_{n\le X}w(n)/\varphi(n)\ll(1+\log(2X))^{11}$. These bounds also hold on any subinterval by positivity. If $rs$ is squarefree, then $(r,s)=1$ and $w(rs)=w(r)w(s)$; otherwise its zero weight may be dropped in upper bounds. [F4, F7, step 1.1, algebra]

3.1 A consequence of [F1] needed below is the following endpoint-uniform prime estimate. For any fixed $d,H>0$, $r\le L^d$, nonprincipal $\chi\pmod r$, and any interval $J\subseteq[P,2P]$ with $x^{1/3}/2\le P\le x$, [F1, F6, step 2.1, algebra]
$$\left|\sum_{p\in J}\chi(p)\right|\ll_{d,H}P L^{-H}.$$
Indeed apply [F1] with a larger exponent at each endpoint $t\in[P,2P]$; $\log t\asymp L$ ensures its modulus condition. The prime-power contribution to $\psi$ is $O(\sqrt t(\log(2t))^2)$: there are at most $\sqrt t$ bases for each of at most $\log_2t$ exponents. Remove it and apply finite summation by parts with $1/\log t$ on $[P,2P]$, whose supremum and total variation are $O(1/\log P)$. Arbitrary included or excluded interval endpoints change the sum by at most two, absorbed by [F6]. Excluding primes dividing an integer $s\le x$ costs at most $\omega(s)\le\log(2x)/\log2$. All of these assertions hold uniformly in $J,s,\chi$. [F1, F6, step 2.1, algebra]

4.1 Partition each prime variable into half-open intervals $[2^j,2^{j+1})$, then intersect the first two with their stated ranges. There are $O(L^3)$ boxes. Empty boxes may be discarded. A box meeting both inequalities for some $y\le x$ has scales $M,P,K$ for $p_1,p_2,p_3$, respectively, satisfying [F6, step 1.1, step 3.1, algebra]
$$x^{1/10}/2\le M\le x^{1/3},\quad P\ge x^{1/3}/2,\quad MPK\le x,\quad MP^2\le x.$$
Its first interval still has length at most $M$ and the other lengths at most $P,K$. Put $V=PK$. Then $V\le x/M$, $V\ge x^{1/3}/2$ (as $K\ge1$). At any integer $n$ there are at most $\tau(n)$ choices for the ordered pair $p_2p_3=n$. Thus the squared norm of any such pair coefficient, even after arbitrary unit phases and coprimality masks, is at most $\sum_{n\le4V}\tau(n)^2\ll VL^3$. The first prime coefficient has squared norm at most $2M$. [F6, step 1.1, step 2.1, step 3.1, algebra]

5.1 First subtract the unit average of the exact triple count, not an assumed logarithmic-integral main term. By [F2], its discrepancy is a sum over nonprincipal characters. For a primitive ancestor $\chi\pmod r$, $r>1$, and $q=rs$, insertion of the masks $(p_i,s)=1$ is exact. By [F4] and step2.1 the weighted discrepancy of ONE box is bounded by [F2, F4, step 2.1, step 4.1, algebra]
$$\sum_{s\le Q}\frac{w(s)}{\varphi(s)}\sum_{1<r\le Q/s}\frac{w(r)}{\varphi(r)}\sum_{\chi\bmod r}^{*}\sup_{0\le y\le x}|H_{r,s}(y,\chi)|,$$
where $H$ sums the prime triples in that box subject to both product inequalities, with coefficient $\chi(p_1p_2p_3)$ and the three coprimality masks. It is legitimate to move the supremum inside this finite positive majorant. Conductor one is absent, because it induces the principal character that was exactly subtracted; $q=1$ contributes zero. [F2, F4, step 2.1, step 4.1, algebra]

6.1 Let $2\le R\le Q$. For $r\le R=L^d$ sum first over $p_2$. For each fixed $p_1,p_3,y$, its allowed range is the intersection of its box with [F1, F6, step 3.1, step 5.1, algebra]
$$p_2\le\min\bigl(\sqrt{x/p_1},\ y/(p_1p_3)\bigr),$$
so it is an interval. Step3.1 bounds that sum by $O_{d,H}(P L^{-H}+L)$ uniformly, even with the $s$ mask. There are at most $4MK$ outer pairs. Since $MPK\le x$ and $P\ge x^{1/3}/2$, it follows that $|H|\ll xL^{-H}+x^{2/3}L$. There are at most $\varphi(r)$ primitive characters. Step2.1 and the elementary $w(r)\le r^2$ (because $3\le p^2$ for every prime) bound the small-conductor part of step5.1 by [F1, F6, step 2.1, step 3.1, step 5.1, algebra]
$$\ll R^3L^{11}\bigl(xL^{-H}+x^{2/3}L\bigr).$$
This is uniform in the supremum over $y$ and costs only fixed powers of $L$ for fixed $d$. [F1, F6, step 2.1, step 3.1, step 5.1, algebra]

7.1 For large conductors separate BOTH boundaries by [F5]. Replace $x,y$ by $X=\lfloor x\rfloor+1/2$, $Y=\lfloor y\rfloor+1/2$. The integer products satisfy the original weak inequalities exactly when they are less than these half-integers. If a box's $y$-prefix is empty, its contribution is zero; otherwise $Y\ge1/2$ and $Y\le x+1$. Use $c=1/L$, $T=x^{10}$. Throughout a retained box, the integer products $p_1p_2p_3$ and $p_1p_2^2$ are at most $8x$. Their distance from either half-integer endpoint is at least $1/2$. Thus whenever the prefix is not identically empty or full, $|\log(Y/(p_1p_2p_3))|\gg1/x$ and $|\log(X/(p_1p_2^2))|\gg1/x$. In fact the same bound holds even for full or empty prefixes, and all the ratios to the power $c$ are $O(1)$, since each is between a fixed multiple of $1/x$ and $2x$. Each kernel error is $O(x/T)$. Each exact indicator is bounded by one, so the product of the two approximating kernels differs from their indicator product by $O(x/T)$ as well. There are at most $8MPK\le8x$ triples, giving $O(x^2/T)$ error per character, uniformly in $y,r,s$. In the lifted positive sum, the number of primitive characters cancels $1/\varphi(r)$; use $w(r)\le r^2$, $w(s)\le s^2$ and $1/\varphi(s)\le1$ to bound its amplification by $O(Q^4)$ (sum $s^2\sum_{r\le Q/s}r^2\ll Q^3\sum_{s\le Q}s^{-1}\ll Q^4$). Thus its total error is $O(x^4/T)$, smaller than every required logarithmic error. [F5, F6, step 4.1, step 5.1, step 6.1, algebra]

8.1 Explicitly the separated polynomial is the proper double integral with kernel [F5, step 4.1, step 7.1, construct, algebra]
$$\frac1{(2\pi)^2}\int_{-T}^T\!\int_{-T}^T\frac{Y^{c+it}X^{c+iu}}{(c+it)(c+iu)} A_{s,t,u}(\chi)B_{s,t,u}(\chi)\,dt\,du,$$
$$A_{s,t,u}(\chi)=\sum_{\substack{p_1\text{ in its box}\\(p_1,s)=1}}p_1^{-2c-it-iu}\chi(p_1),$$
$$B_{s,t,u}(\chi)=\sum_{\substack{p_2,p_3\text{ in their boxes}\\(p_2p_3,s)=1}}p_2^{-3c-it-2iu}p_3^{-c-it}\chi(p_2p_3).$$
These formulas follow by multiplying the two kernels term by term in the FINITE triple sum; iterated proper integration of each separated product equals the product of the two one-dimensional integrals, so no measure interchange theorem is assumed. The numerator has modulus $(XY)^c\ll1$, all damping factors in the two arrays have modulus at most one, and the absolute integral of each kernel denominator is $O(\log(T/c+2))=O(L)$. In particular all bounds below are uniform in $y$, allowing its supremum BEFORE summation in step5.1. [F5, step 4.1, step 7.1, construct, algebra]

9.1 We prove the needed weighted character estimate without invoking a weighted large sieve. On a conductor block $U<r\le2U$, finite orthogonality and Cauchy in each residue class give [F2, F3, step 2.1, step 4.1, step 8.1, algebra]
$$\sum_{\chi\bmod r}^{*}|A_{s,t,u}(\chi)|^2\le\varphi(r)(1+2M/r)\sum_m|a_m|^2\ll\varphi(r)M(1+M/U).$$
Indeed dropping primitivity leaves the exact sum $\varphi(r)\sum_{a\in(\mathbb Z/r)^\times}|\sum_{m\equiv a(r)}a_m|^2$, and there are at most $1+2M/r$ supported integers in one class. Cauchy over the finite set of pairs $(r,\chi)$ now gives [F2, F3, step 2.1, step 4.1, step 8.1, algebra]
$$\sum_{U<r\le2U}\frac{w(r)}{\varphi(r)}\sum_\chi^*|AB| \le\left(\sum_{U<r\le2U}\frac{w(r)^2}{\varphi(r)^2}\sum_\chi^*|A|^2\right)^{1/2}\left(\sum_{r\le2U}\sum_\chi^*|B|^2\right)^{1/2}$$
$$\ll L^7\sqrt{MV}\sqrt{(1+M/U)(U^2+V)}.$$
Here step2.1 bounds the first modulus sum by $L^{11}$ and [F3] with an integer interval of length at most $4V+1$ bounds the second by $O((U^2+V)VL^3)$. The exponent seven can harmlessly be enlarged to eight to cover rounding. Expanding the square root by $\sqrt{a+b}\le\sqrt a+\sqrt b$ and using $MV\le x$ yields the bound [F2, F3, step 2.1, step 4.1, step 8.1, algebra]
$$\ll L^8\left(U\sqrt x+\sqrt{MUx}+\frac{x}{\sqrt M}+\frac{x}{\sqrt U}\right).$$
This is the reason for using the short $p_1$ block in the pointwise orthogonality estimate; inserting $w(r)$ into [F3] itself would be unjustified. [F2, F3, step 2.1, step 4.1, step 8.1, algebra]

10.1 Integrate the preceding pointwise estimate using step8.1; its cost is $O(L^2)$. Partition $R<r\le Q/s$ into doubling blocks, with the last truncated block bounded by the same full-block estimate. The sums of $U$ and $\sqrt U$ are $O(Q/s)$ and $O(\sqrt{Q/s})$, while the sum of $U^{-1/2}$ is $O(R^{-1/2})$ and the number of blocks is $O(L)$. Finally sum $s$ using step2.1. Since $M\le x^{1/3}$, $Q\le\sqrt x$ and $M\ge x^{1/10}/2$, the contribution of large conductors is bounded for one fixed absolute exponent $C$ by [F6, step 2.1, step 4.1, step 8.1, step 9.1, algebra]
$$\ll L^C\left(Q\sqrt x+x^{11/12}+x^{19/20}+xR^{-1/2}\right)+O(x^4/T).$$
For example $\sqrt{MQx}\le x^{11/12}$; the weaker lower-scale power $x^{19/20}$ covers $x/\sqrt M$. This proves an envelope independent of $y$ for the sum of its suprema. Now include all $O(L^3)$ boxes. Increase $C$ once to cover this factor and all bounded support constants. [F6, step 2.1, step 4.1, step 8.1, step 9.1, algebra]

11.1 Fix the desired $A$. Choose $d>2(A+C+20)$, put $R=L^d$, then choose $H>A+3d+C+30$ in step6.1 and $B>A+C+20$ in $Q=\sqrt x L^{-B}$. For sufficiently large $x$, $2\le R\le Q$. Steps6.1 and10.1, including the box factor, prove [F6, step 6.1, step 7.1, step 10.1, algebra]
$$\sum_{q\le Q}w(q)\sup_{0\le y\le x}\max_{(l,q)=1}\left|T_x(y;q,l)-\frac1{\varphi(q)}\sum_{\substack{a,p\\(ap,q)=1\\ap\le y}}f_x(a)\right|\ll_A xL^{-A}.$$
The prime variable $p$ in the average is retained exactly. All cutoff and character sums are finite, and the estimates that preceded the supremum have no dependence on its endpoint. Thus this is stronger than separate pointwise bounds followed by an unjustified exchange of supremum and modulus sum. [F6, step 6.1, step 7.1, step 10.1, algebra]

12.1 It remains to replace that principal average by the stated main term. The modulus-one case of [F1], prime-power removal and finite summation by parts give $\pi(t)=\mathcal L(t)+O_J(t(\log t)^{-J})$ for $t\ge3$, for every fixed $J$; the bounded lower endpoint contributes only an absolute constant. More explicitly, the summation-by-parts error integral is bounded by $\int_2^{\sqrt t}O(1)\,du+\int_{\sqrt t}^t O_J((\log t)^{-J-2})\,du=O_J(\sqrt t+t(\log t)^{-J-2})$ after increasing the exponent in [F1]; the same split covers the removed prime-power error. Consequently for $x^{1/3}\le Z\le x$ and ALL $0\le t\le Z$, [F1, F6, step 1.1, step 3.1, step 11.1, algebra]
$$|\pi(t)-\mathcal L(t)|\ll_J ZL^{-J}.$$
To see endpoint uniformity, split at $t=\sqrt Z$. Below it use $\pi(t)+\mathcal L(t)\ll\sqrt Z$, and above it use $\log t\ge\tfrac12\log Z\gg L$ and $t\le Z$. For each $a$ in step1.1, $Z=x/a\ge x^{1/3}$. Therefore the error after summing $a$ is at most $xL^{-J}\sum_{a\le x^{2/3}}f_x(a)/a\ll xL^{1-J}$, since $f_x\le1$. Deleting primes dividing $q$ costs at most $\omega(q)$ per $a$; there are at most $x^{2/3}$ such $a$. Thus for each $q\le Q$, uniformly in $y$, the discrepancy between the two principal averages is [F1, F6, step 1.1, step 3.1, algebra]
$$\ll\frac{xL^{1-J}+x^{2/3}L}{\varphi(q)}.$$
Multiply by $w(q)$ and sum using step2.1. Choosing $J>A+20$ (or larger than the fixed logarithmic exponent there) makes this $O_A(xL^{-A})$. Combine with step11.1. Finally any bounded initial range of $x\ge3$ has only finitely many possible primes and moduli, all counts and integrals have a fixed bound, and $xL^{-A}$ is bounded below on that compact range; enlarging the constant covers it. Empty ranges, $q=1$, repeated prime factors, $y=0$ and all included integer endpoints were retained explicitly. This proves the full Statement without an external Pan theorem or any choice premise. [F1, F6, step 1.1, step 2.1, step 11.1, algebra] ∎

## Source and use limits

The cited source's Theorem2 is used as a statement locator, not as a proved input. This local proof supplies its needed squarefree divisor weight and endpoint maximum from unqualified SW plus the actual UNWEIGHTED primitive large sieve. It also specifies the truncated logarithmic integral when the prime range is empty. At the Chen application $y=x$, every supported $a$ has $x/a\ge x^{1/3}>2$, so this convention is exactly the usual logarithmic-integral main term. Noncoprime $a$ corrections in an upper sieve, the singular-series normalizer and all numerical integrals remain separate obligations; no Chen upper/lower theorem is completed merely by this lemma.
