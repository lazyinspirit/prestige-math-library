---
id: lem-proper-riemann-direct-selberg-forms-and-weighted-almost-primality
kind: lemma
title: "Specified smooth direct Selberg forms with proper Riemann integrals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
  - thm-gaussian-integral
  - thm-integration-by-parts-with-interior-derivatives
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-euler-product-for-riemann-zeta
  - thm-first-mertens-theorem-for-primes
  - lem-squarefree-multiplicative-logarithmic-sums
  - thm-chinese-remainder-theorem
  - def-number-theoretic-mobius-function
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1407.4897v4"
      locator: "Adapted proper-Riemann reconstruction of Lemma4.1 and Proposition4.2, printedpp16–26. The source uses Fourier integrals; the local proof supplies the specified Gaussian inversion and every interchange without the CountableChoice-only measure-theoretic interface."
---

## Statement

Fix $k\ge1$, $C,c,C'>0$ and specified real $F_i,G_i\in C_c^\infty(\mathbb R)$. Write $T=\log X$, $y=\log\log\log X$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$. For $W\mid Q\le X^C$ and $c\sqrt T\le L\le C'T$, and $\chi(p)=p$ or $p-1$ extended multiplicatively on squarefree integers,
$$\sum_{d,e}^{*}\prod_{i=1}^k\frac{\mu(d_i)\mu(e_i)F_i(\log d_i/L)G_i(\log e_i/L)}{\chi([d_i,e_i])}=\bigl((\varphi(Q)/Q)L\bigr)^{-k}\left[\prod_i\int_0^\infty F_i'G_i'+o(1)\right].$$
The star restricts to squarefree tuples with coordinate lcms pairwise coprime and coprime to $Q$. The error is additive in brackets and uniform in $Q,L$.

For fixed distinct integer shifts $h_i$, a good residue $(b+h_i,W)=1$, fixed specified $F_i\in C_c^\infty(\mathbb R)$ and fixed integers $r_i\ge1,m_i\ge0$, put $\lambda_F(u)=\sum_{d\mid u}\mu(d)F(\log d/T)$. Then
$$\sum_{\substack{X\le n<2X\\ n\equiv b\ (W)}}\prod_i|\lambda_{F_i}(n+h_i)|^{r_i}\tau(n+h_i)^{m_i}\ll \frac XW(aT)^{-k}.$$
Inserting $p_0\mid n+h_j$, for a prime $p_0\le X^{1/(20k)}$, gives the extra factor $\log p_0/(p_0T)$; inserting least prime factor at most $X^\delta$ gives the extra factor $\delta+1/T$, uniformly for $0<\delta\le1/(20k)$. Mixed products at a shift obey the same bounds. All integrals in this lemma are proper or explicitly absolutely convergent improper Riemann integrals. No choice hypothesis is assumed.

## Statement references

[Polymath8b](https://arxiv.org/pdf/1407.4897v4)

## Facts & Assumptions

**Given:** The specified finite smooth data and parameters in the Statement; $\tau,\omega,\Omega$ mean divisor count, distinct prime count and prime count with multiplicity.

[F1] [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]] supplies specified smooth cutoffs; [[thm-gaussian-integral]] and [[thm-integration-by-parts-with-interior-derivatives]] give respectively the one-variable improper Gaussian integral and proper integration by parts. All multivariable interchanges below are first on finite rectangles, where continuous Riemann sums commute; explicit absolute tails then justify the indicated limits.

[F2] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] supplies the residue-one pole near1, and [[thm-euler-product-for-riemann-zeta]] the absolutely convergent Euler product at real part greater than1.

[F3] [[thm-first-mertens-theorem-for-primes]] and [[lem-squarefree-multiplicative-logarithmic-sums]] supply prime logarithmic sums and fixed positive Euler-product bounds.

[F4] [[thm-chinese-remainder-theorem]] and [[def-number-theoretic-mobius-function]] give the finite progression count, squarefree signs and divisor identities.

## Proof

1.1 We first prove the only Fourier fact needed, with its integration interpretation explicit. For specified $H\in C_c^\infty(\mathbb R)$ let $\widehat H(\xi)=(2\pi)^{-1}\int H(t)e^{i\xi t}dt$. Repeated proper integration by parts gives $|\widehat H^{(j)}(\xi)|\le C_{j,M}(1+|\xi|)^{-M}$ for every fixed $j,M$. The Gaussian identity gives [F1, given, algebra]
$$\int_{\mathbb R}e^{-\epsilon\xi^2-i\xi u}\,d\xi=\sqrt{\pi/\epsilon}\,e^{-u^2/(4\epsilon)}.$$
For completeness the left side is differentiable in $u$ by its integrable Gaussian majorants. Integration by parts in $\xi$ makes its derivative $-u/(2\epsilon)$ times itself; its value at0 is $\sqrt{\pi/\epsilon}$ by [F1], proving the identity. Thus the Gaussian-damped inverse of $\widehat H$ equals convolution with $(4\pi\epsilon)^{-1/2}e^{-u^2/(4\epsilon)}$. This interchange follows by truncating both variables to finite rectangles and bounding the omitted integrals by $\|H\|_1\int_{|\xi|>M}e^{-\epsilon\xi^2}d\xi$. The convolution converges uniformly to $H$: on $|u|\le\eta$ use its uniform continuity, and outside use the Gaussian tail. On the inverse side remove damping using the bound $C_M(1+|\xi|)^{-M}$. Hence $H(t)=\int\widehat H(\xi)e^{-i\xi t}d\xi$, with absolute convergence also after any fixed number of derivatives. These are estimates over specified integer truncations and real parameters, not measure-theoretic Fourier/Fubini assertions or selections of a sequence of witnesses. [F1, given, algebra]

2.1 Set $H_i(t)=e^tF_i(t)$ and write $F_i(t)=\int f_i(\xi)e^{-(1+i\xi)t}d\xi$ by step 1.1, with rapidly decreasing $f_i$, and similarly $G_i,g_i$. In the starred divisor sum the inserted absolute series is $O(L^{3k})$: its local absolute factor is at most $1+3k/p+O_k(p^{-2})$ with positive exponents at least $1/L$, and [F2] gives $\zeta(1+1/L)=O(L)$. Consequently one can first truncate divisors and frequencies, interchange their finite sums/proper integrals, and then pass to the limit with the product of this convergent divisor majorant and the rapidly decreasing frequency majorants. With $z_i=(1+i\xi_i)/L$, $v_i=(1+i\eta_i)/L$, the exact Euler factor for $p\nmid Q$ is [F1, F2, F4, step 1.1, algebra]
$$1+\sum_i\{-p^{-1-z_i}-p^{-1-v_i}+p^{-1-z_i-v_i}\}$$
for $\chi(p)=p$; for $\chi(p)=p-1$ replace each $1/p$ by $1/(p-1)$. Only one coordinate can contain $p$, with its three nonempty membership patterns, which proves this identity. Expanding its first-order terms compares it, uniformly in every frequency, to
$$\prod_i\frac{(1-p^{-1-z_i})(1-p^{-1-v_i})}{1-p^{-1-z_i-v_i}}$$
with relative error $1+O_k(p^{-2})$. Since $Q$ contains every prime at most $y$, their error product is $1+O_k(1/y)$. [F1, F2, F4, step 1.1, algebra]

3.1 Outside $\max(|\xi_i|,|\eta_i|)\le\sqrt L$ the $O(L^{3k})$ divisor majorant and arbitrary rapid decay give an error smaller than any specified power of $L^{-1}$. On this cube the residue-one expansion gives $\zeta(1+z)=z^{-1}(1+O(|z|))$, and uniformly for $Q\le X^C$ [F2, F3, step 2.1, algebra]
$$\prod_{p\mid Q}(1-p^{-1-z})=\frac{\varphi(Q)}Q\left[1+O_C\left(\frac{1+\log\log(3Q)}{\sqrt L}\right)\right].$$
Indeed the logarithm of the ratio is at most a constant times $|z|\sum_{p\mid Q}\log p/(p-1)$. Below $\log(3Q)$ use the first Mertens sum; above it use $\sum_{p\mid Q}\log p\le\log Q$ and $p-1\ge\frac12\log(3Q)$. This bounds that sum by $O(1+\log\log(3Q))$. Thus the normalized kernel tends to $\prod_i(1+i\xi_i)(1+i\eta_i)/(2+i\xi_i+i\eta_i)$, with an integrable majorant obtained from rapid decay times this fixed polynomial. The discarded tail is $o(L^{-k})$ and hence $o(((\varphi(Q)/Q)L)^{-k})$. For one coordinate its integral against $f_i g_i$ equals $\int_0^\infty F_i'G_i'$: insert $1/(2+i\xi+i\eta)=\int_0^\infty e^{-(2+i\xi+i\eta)t}dt$ and differentiate the absolutely convergent representations. Finite-box Riemann interchange followed by the explicit product majorant $(1+|\xi|)^2(1+|\eta|)^2|f_i g_i|e^{-2t}$ justifies it. Products prove the first assertion, including zero main constants. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Put $c_0=1/(20k)$. We need an elementary upper count. Let pairwise coprime prefix divisors $d_j$, coprime to $W$, satisfy $d_j\le X^{2c_0}$ and $d=\prod d_j\le X^{1/10}$. Set $v=\Omega(d)$ and $R=X^{c_0/(1+v)}$. Count $n$ in the good class modulo $W$ with $d_j\mid n+h_j$ whose residual factors have no prime below $R$. Choose one specified smooth $g$ with $g(0)=1$ and $g(t)=0$ for $t\ge1$. The nonnegative square [F3, F4, step 3.1, construct, algebra]
$$\prod_j\left(\sum_{\substack{e\mid n+h_j\\(e,dW)=1}}\mu(e)g(\log e/\log R)\right)^2$$
equals1 on this counted set. Expanding and applying CRT gives the direct form of step 3.1 with $Q=dW,L=\log R$, times $X/(dW)$, with endpoint error $O(R^{2k}(1+\log X)^{2k})$. Coordinate collisions are impossible for large $X$, since every fixed shift-difference prime is then in $W$. If $v\le\sqrt T$, then $L\ge c_0\sqrt T/2$, and this proves the upper bound
$$C^{v+1}\frac X{dW}(aT)^{-k}.$$
Here $d/\varphi(d)\le2^v$ and $(1+v)^k\le C_k^{v+1}$ absorb the varying scale. The endpoint error is smaller uniformly, since $R^{2k}\le X^{1/10}$ and $dW\le X^{1/10}(\log X)^{o(1)}$. If $v>\sqrt T$, trivial CRT counting is at most $2X/(dW)$ and $C^{v+1}(aT)^{-k}\ge1$ eventually. This proves the same bound in every case. [F3, F4, step 3.1, construct, algebra]

5.1 In the upper-count setting of step 4.1, the absolutely convergent representation of step 1.1 gives $\lambda_F(u)=\int f(\xi)\prod_{p\mid u}(1-p^{-(1+i\xi)/T})d\xi$. The factor is bounded by $C\min((1+|\xi|)\log p/T,1)$. For any fixed integer power, integrate over shells of $\sigma=1+\sum|\xi_l|$ and use $\prod_l\min(s_l t,1)\le\min((\sum s_l)t,1)$. Arbitrary rapid decay yields, for every prescribed $A$, [F1, F3, step 1.1, step 4.1, algebra]
$$|\lambda_F(u)|^r\tau(u)^m\le C\,\tau(u)^{C'}\int_1^\infty \sigma^{-A}\prod_{p\mid u}\min(\sigma\log p/T,1)\,d\sigma.$$
This follows first on finite boxes, then by the explicit rapid tails; the fixed $C$ per prime is absorbed into $\tau^{C'}$. For the $k$ shifts replace their shell parameters by their sum and increase $A$ by the fixed shell dimension. Thus it remains to bound the resulting positive product weight at fixed $\sigma$ by $O(\sigma^C X/[W(aT)^k])$. [F1, F3, step 1.1, step 4.1, algebra]

6.1 For each $u_j=n+h_j$ take the longest initial segment of its prime factors, ordered increasingly WITH multiplicity, whose product $d_j$ is at most $X^{c_0}$. If the next factor is $p$, then $d_jp>X^{c_0}$ and $d_j\le p^{\Omega(d_j)}$, so $p>X^{c_0/(1+\Omega(d_j))}$. Therefore every remaining factor exceeds $R=X^{c_0/(1+\sum_j\Omega(d_j))}$. The number of remaining factors is $O_H(1+\sum\Omega(d_j))$, as $u_j\le3X$ eventually; hence all divisor powers in step 5.1 are bounded by $C^{1+\sum\Omega(d_j)}$. Apply step 4.1 to these prefixes and drop the residual minima, which are at most1. Enlarging the resulting positive prefix sum to all independent prime powers gives the normalized bound [F3, F4, step 4.1, step 5.1, algebra]
$$C\prod_{y<p\le X^{c_0}}\left(1+\min(\sigma\log p/T,1)\sum_{\ell\ge1}\frac{C^\ell}{p^\ell}\right)^k.$$
Eventually $y>2C$, so the inner sum is at most $2C/p$. Splitting at $X^{1/\sigma}$ and using the first Mertens sum and its partial-summation consequence gives $\sum_{p\le X^{c_0}}\min(\sigma\log p/T,1)/p\ll1+\log\sigma$. If the split is below2, $\sigma\ge T/\log2$ gives the same bound. The product is $O(\sigma^{C''})$. Choose the earlier $A>C''+2$ to integrate it. This proves the unrestricted weighted upper bound. [F3, F4, step 4.1, step 5.1, algebra]

7.1 If a specified prime $p_0\le X^{c_0}$ divides $u_j$, retain its original factor $\min(\sigma\log p_0/T,1)$ in step 5.1. If $p_0\mid W$ the sum is zero. Otherwise replace the designated prefix by $[d_j,p_0]$; it is at most $X^{2c_0}$ and the product is at most $X^{(k+1)c_0}\le X^{1/10}$. It is coprime to the other prefixes: a common prime would divide a fixed shift difference and so belong to $W$. Use step 4.1 with these enlarged prefixes. Their residual roughness still holds, and increasing $\Omega(d)$ by at most1 costs only a fixed constant. If $p_0$ was absent, CRT gains $1/p_0$; if present, its prefix Euler series already has factor $O(1/p_0)$. Delete that local factor before applying the unrestricted Euler bound, retaining the minimum exactly ONCE. The resulting extra factor is at most [F3, F4, step 4.1, step 5.1, step 6.1, algebra]
$$C\min(\sigma\log p_0/T,1)/p_0\le C\sigma\log p_0/(p_0T).$$
Increasing the earlier rapid-decay exponent by one integrates the extra $\sigma$, proving the forced-prime estimate. Summing it over $p_0\le X^\delta$ and using $\sum_{p\le z}\log p/p=\log z+O(1)$ gives the least-prime-factor bound uniformly in $\delta\le c_0$. Finally $|uv|\le(|u|^2+|v|^2)/2$ and a finite expansion give the mixed-product version. Every infinite integration here is controlled by a displayed absolutely integrable proper-Riemann majorant; no choice, Lebesgue Fubini or external computation input has entered. [F1, F3, F4, step 4.1, step 5.1, step 6.1, algebra] ∎
