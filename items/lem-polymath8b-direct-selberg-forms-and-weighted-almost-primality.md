---
dependency_level: 1
id: lem-polymath8b-direct-selberg-forms-and-weighted-almost-primality
kind: lemma
title: Direct smooth Selberg forms and uniform weighted almost-primality
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-fourier-inversion-on-schwartz-space
- thm-fourier-transform-maps-schwartz-space-continuously-to-itself
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-riemann-zeta-continuation-to-the-right-half-plane
- thm-euler-product-for-riemann-zeta
- thm-first-mertens-theorem-for-primes
- lem-squarefree-multiplicative-logarithmic-sums
- thm-chinese-remainder-theorem
- thm-fundamental-theorem-of-arithmetic
- def-number-theoretic-mobius-function
- def-countable-choice
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is explicitly retained for the actual Schwartz Fourier inversion and Fubini interfaces; no stronger choice axiom.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes
    url: https://arxiv.org/pdf/1407.4897v4
    locator: Full Polymath8b Lemma4.1, printedpp16–19, and Proposition4.2, printedpp22–26; forced-prime and varying-sieve-scale details are written locally.
---

## Statement

Assume Countable Choice. Fix $k\ge1$, $C,c,C'>0$ and specified real $F_i,G_i\in C_c^\infty(\mathbb R)$. As $X\to\infty$ put $T=\log X$, $y=\log\log\log X$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$. For integers $Q$ divisible by $W$, $Q\le X^C$, and $c\sqrt T\le L\le C'T$, sum over squarefree $d_i,e_i$ whose coordinate lcms are pairwise coprime and coprime to $Q$. For $\chi(p)=p$ or $p-1$, extended multiplicatively on squarefree integers,
$$\sum_{d,e}^{*}\prod_{i=1}^k\frac{\mu(d_i)\mu(e_i)F_i(\log d_i/L)G_i(\log e_i/L)}{\chi([d_i,e_i])}=\bigl((\varphi(Q)/Q)L\bigr)^{-k}\left[\prod_{i=1}^k\int_0^\infty F_i'G_i'+o(1)\right],$$
uniformly in $Q,L$ with all displayed constants fixed; this is additive $o(1)$ in brackets, including a zero main constant.

For fixed distinct shifts $h_1,\ldots,h_k$, any $b$ with $(b+h_i,W)=1$, specified real $F_i\in C_c^\infty(\mathbb R)$ and fixed integers $a_i\ge1,m_i\ge0$, put $\lambda_F(n)=\sum_{d\mid n}\mu(d)F(\log d/T)$. Then
$$\sum_{X\le n<2X,\ n\equiv b\ (W)}\prod_i|\lambda_{F_i}(n+h_i)|^{a_i}\tau(n+h_i)^{m_i}\ll\frac XW(aT)^{-k}.$$
For $c_0=1/(20k)$, inserting $p_0\mid n+h_j$ for a prime $p_0\le X^{c_0}$ gives the additional factor $\log p_0/(p_0T)$. Inserting that the least prime factor of $n+h_j$ is at most $X^\delta$ gives the additional factor $\delta+1/T$ for $0<\delta\le c_0$, with constants independent of $\delta$; for larger $\delta$ use a fixed larger constant times $\delta$. The statements apply to mixed products $|\lambda_F\lambda_G|$ at a shift by finite expansion of $|uv|\le(|u|^2+|v|^2)/2$.

## Facts & Assumptions

**Given:** All fixed parameters, test functions and hypotheses of the Statement. The symbols tau, omega and Omega denote respectively the positive-divisor count, the distinct-prime-factor count and the prime-factor count with multiplicity. Proof formulas use the same elementary notation in text; every displayed sum is finite except the explicitly convergent Fourier or numerical series.

[F1] [[thm-fourier-inversion-on-schwartz-space]] and [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]] give the absolutely convergent inversion and rapid decay for specified compact smooth whole-line functions under Countable Choice.

[F2] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] gives the residue-one pole near one; [[thm-euler-product-for-riemann-zeta]] gives the absolutely convergent Euler product in the half-plane used here.

[F3] [[thm-first-mertens-theorem-for-primes]] and [[lem-squarefree-multiplicative-logarithmic-sums]] give the prime logarithmic sums, their partial-summation consequences and fixed Euler-product bounds.

[F4] [[thm-chinese-remainder-theorem]], [[thm-fundamental-theorem-of-arithmetic]] and [[def-number-theoretic-mobius-function]] supply finite congruences, prime factorization and squarefree signs.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permits the explicitly absolutely convergent Fourier/sum interchanges, interpreted as product-measure integrals. [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]] identifies the final compact continuous one-variable integrals with their proper Riemann values under the same hypothesis. [[def-countable-choice]] is retained exactly through this and the Fourier interfaces.

## Proof

1.1 **Part 1: Uniform direct quadratic forms.** Let Q contain W and Q<=X^C for fixed C. Let c sqrt(T)<=L<=C'T for fixed positive c,C'. For fixed F_i,G_i in C_c^infinity(R), let S_chi be the finite sum over squarefree d_i,e_i, with their coordinate lcms pairwise coprime and coprime to Q, of product_i mu(d_i)mu(e_i)F_i(log d_i/L)G_i(log e_i/L)/chi([d_i,e_i]), where chi(p)=p or p−1 multiplicatively. Then, uniformly in Q,L, [F1, F2, F3, F4, F5, given, algebra]

2.1 S_chi = ( (phi(Q)/Q)L )^(−k) [ product_i integral_0^infinity F_i'(t)G_i'(t)dt + o(1) ]. Proof. Set H_i(t)=exp(t)F_i(t). This is a specified C_c^infinity function on R. The actual CC Schwartz inversion theorem, with its 2pi normalization changed by a real substitution, gives F_i(t)=integral_R f_i(xi) exp(−(1+i xi)t)d xi, [F1, F2, F3, F4, F5, step 1.1, given, algebra]

3.1 with f_i rapidly decreasing, and likewise G_i,g_i. The absolute divisor sum after insertion is at most a fixed constant times zeta(1+1/L)^(3k) (the constant is unnecessary for chi=p), because for one coordinate its absolute local factor is 1+2p^(−1−1/L)+p^(−1−2/L). It is O(L^(3k)), by the actual residue-one zeta pole near1 and comparison of its positive series with an integral. Absolute convergence therefore justifies Fubini; removing the pairwise-coprime restriction only enlarges this majorant. Write z_i=(1+i xi_i)/L, w_i=(1+i eta_i)/L. For chi=p the EXACT local factor is K_p=1+sum_i[−p^(−1−z_i)−p^(−1−w_i)+p^(−1−z_i−w_i)]. [F1, F2, F3, F4, F5, step 2.1, given, algebra]

4.1 Only one coordinate can use p, and its choices are d only,e only,both, proving this formula. For chi=p−1 replace every 1/p by1/(p−1). In either case K_p = [1+O_k(p^(−2))] product_i (1−p^(−1−z_i))(1−p^(−1−w_i))/(1−p^(−1−z_i−w_i)), uniformly in all frequencies: the displayed numerator/denominator factors have modulus bounded away from0 for p>y>3, their first-order expansions give exactly the preceding K_p, and all remaining products contain at least two factors bounded by1/p. The error product over p>y is1+O_k(1/y). Thus K=(1+O_k(1/y)) product_i zeta_Q(1+z_i+w_i)/(zeta_Q(1+z_i)zeta_Q(1+w_i)), where zeta_Q(s)=zeta(s)product_{p|Q}(1−p^(−s)). Euler products here lie in Re s>1; no zero-free theorem is used. [F1, F2, F3, F4, F5, step 3.1, given, algebra]

5.1 The crude bound |K|<<_k L^(3k) follows from the absolute local sum, independently of Q. Rapid Fourier decay makes the integral outside max|xi_i|,|eta_i|<=sqrt L smaller than any fixed inverse power of L. On this cube the residue-one expansion gives zeta(1+z)=z^(−1)(1+O(|z|)), uniformly for z=(1+i xi)/L and z_i+w_i. Also product_{p|Q}(1−p^(−1−z)) = phi(Q)/Q [1+O_C((loglog(3Q))/sqrt L)]. Indeed the logarithm of the ratio is bounded by O(|z|sum_{p|Q} log p/(p−1)); split primes at log(3Q), apply the actual first Mertens theorem below the split and use sum_{p|Q}log p<=log Q above it to bound this sum by O(1+loglog(3Q)). Since Q<=X^C and L>=c sqrt T, this error tends uniformly to0. Consequently on the cube, [F1, F2, F3, F4, F5, step 4.1, given, algebra]

6.1 K = ((phi(Q)/Q)L)^(−k) [1+o(1)] product_i (1+i xi_i)(1+i eta_i)/(2+i xi_i+i eta_i). The rational factor is at most a fixed polynomial in the frequencies. Rapid decay gives a uniform integrable majorant after this normalization; the discarded absolute tail is o(L^(−k)), hence o(((phi(Q)/Q)L)^(−k)), because phi(Q)/Q<=1. For one coordinate, differentiating the absolutely convergent Fourier representation and integrating t>=0 gives integral_R² f_i(xi)g_i(eta)(1+i xi)(1+i eta)/(2+i xi+i eta)d xi d eta = integral_0^infinity F_i'G_i'. [F1, F2, F3, F4, F5, step 5.1, given, algebra]

7.1 All double integrals are absolutely convergent, since Re(2+i xi+i eta)=2. Products of these identities prove the asserted formula, including a zero leading constant. The uniform statement means additive o(1) after the normalization, not a relative error when that constant vanishes. [F1, F2, F3, F4, F5, step 6.1, given, algebra]

8.1 **Part 2: A uniform elementary sifted count.** Fix c0=1/(20k) (the smaller constant leaves room for the forced-prime variant). Let pairwise coprime d_1,...,d_k, all coprime to W, satisfy d_j<=X^(2c0), and put d=product d_j<=X^(2kc0)=X^(1/10). Put v=Omega(d), R=X^(c0/(1+v)). Count n in[X,2X), n=b modW, d_j|n+h_j, whose residual factors (n+h_j)/d_j have no prime<R. Then count <<_{k,H} C^v [X/(dW)](a log X)^(−k). (S) Here and below C is a fixed constant depending on k and the fixed auxiliary smooth cutoff; it may be increased finitely many times, never with X,d,R. [F2, F3, F4, F5, step 7.1, given, algebra]

9.1 Choose a specified smooth g on R with g(0)=1 and g(t)=0 for t>=1. On the counted integers, product_j (sum_{e|n+h_j,(e,dW)=1} mu(e)g(log e/log R))²=1, because any prime factor outside dW is at least R and each nonzero e is<R. The square product is nonnegative everywhere. Expand it. Compatibility of the congruences forces coordinate e-lcms pairwise coprime, since every prime of a fixed shift difference lies in W; all e are coprime to dW. CRT gives main count X/(dW product_j[e_j,e'_j]) plus endpoint error<=1. There are O(R^(2k)(1+log R)^(2k)) supported tuples, so the total endpoint error is O(X^(1/10)(1+log X)^(2k)). For v<=sqrt T, log R>=c0 sqrt T/2, and part1 with Q=dW gives main at most [F2, F3, F4, F5, step 8.1, given, algebra]

10.1 C X/(dW) [(phi(dW)/(dW))log R]^(−k) <= C^v X/(dW)(a log X)^(−k). We used coprimality of d,W, d/phi(d)<=2^v and (1+v)^k<=C_k^v, treating v=0 separately. The endpoint error is uniformly smaller than this bound, since dW<=X^(1/10)(log X)^o(1). If v>sqrt T, trivial CRT counting gives at most X/(dW)+1<=2X/(dW), while C^v(a log X)^(−k)>=1 for all sufficiently large X. This proves (S) in every case. All constants are uniform in the stated d_j; no hidden fixed-exponent assumption on R is used. [F2, F3, F4, F5, step 9.1, given, algebra]

11.1 **Part 3: Weighted divisor-sum upper bound.** For a test F define lambda_F(n)=sum_{d|n}mu(d)F(log d/log X). For fixed integers a_j>=1,m_j>=0, sum_{X<=n<2X,n=b modW} product_j |lambda_{F_j}(n+h_j)|^(a_j) tau(n+h_j)^(m_j) <<_{F,a,m,k,H} X/W (a log X)^(−k). (P) The same sum with p0|n+h_{j0}, for a prime p0<=X^c0, is at most [F1, F3, F4, F5, step 10.1, given, algebra]

12.1 C [log p0/(p0 log X)] X/W (a log X)^(−k). (Pp) Consequently inserting the indicator that the least prime factor of n+h_j is <=X^delta costs at most C(delta+1/log X)X/W(a log X)^(−k), for every fixed0<delta<=c0; for delta>c0 the same bound with a larger constant follows from(P). For the proof, use the Fourier representation in part1 to factor the finite divisor sum: [F1, F3, F4, F5, step 11.1, given, algebra]

13.1 lambda_F(n)=integral f(xi) product_{p|n}(1−p^(−(1+i xi)/T))d xi. The elementary bound |1−exp(−(1+i xi)log p/T)|<=C min((1+|xi|)log p/T,1) holds for p<=3X, by integrating its derivative when the first term is small and by the triangle inequality otherwise. For any fixed power a, rapid decay and a-fold product integration therefore bound |lambda_F(n)|^a by tau(n)^C integral_1^infinity sigma^(−A) product_{p|n}min(sigma log p/T,1)d sigma, [F1, F3, F4, F5, step 12.1, given, algebra]

14.1 for every prescribed A, after increasing the decay power used in the Fourier majorant. This follows by taking sigma=1+sum_l|xi_l|, whose level-shell volume is O_a(sigma^(a−1)), and using product_l min(s_l u,1)<=min((sum_l s_l)u,1); all remaining constant-per-prime factors are absorbed in tau(n)^C. For k coordinates replace each sigma_j by sigma=sum sigma_j, integrate over its finite-dimensional shells, and take A large. It suffices to show the positive weighted count is bounded by sigma^C X/W(aT)^(−k), uniformly sigma>=1. Order all prime factors of n+h_j with multiplicity. Let d_j be the product of the longest initial segment below X^c0. If d_j has v_j prime factors, the next prime is at least X^(c0/(v_j+1)). The number of remaining prime factors is O_{k,H}(v_j+1), since n+h_j<=3X. Thus tau(n+h_j)^C<=C^(v_j+1), and its residual factor is rough above R=X^(c0/(1+sum v_j)). The d_j are pairwise coprime and coprime to W for large X. Drop the residual factors from the product of minima, which are<=1. Apply(S), then enlarge the d_j sums to independent prime-power sums. The resulting normalized bound is at most a fixed multiple of product_{y<p<=X^c0} (1+ min(sigma log p/T,1)sum_{l>=1} C^l/p^l)^k. [F1, F3, F4, F5, step 13.1, given, algebra]

15.1 Eventually y>2C, so the inner geometric sum is at most2C/p. First Mertens and partial summation show sum_{p<=X^c0} min(sigma log p/T,1)/p <=C(1+log sigma), by splitting at X^(1/sigma): below it use sigma/T sum(log p)/p; above it use sum1/p=loglog+O(1). If the split is below2, use sigma>=T/log2 to bound loglog X by O(1+log sigma). Hence the Euler product is O(sigma^C). Choosing the earlier Fourier decay power larger than this C and the shell dimension makes the sigma integral converge and proves(P). [F1, F3, F4, F5, step 14.1, given, algebra]

16.1 For(Pp), retain the specified factor min(sigma log p0/T,1) from the original n+h_{j0} prime product, whether or not p0 occurs in d_{j0}. Nonzero counts force p0 to be coprime to every OTHER d_j: otherwise it divides a fixed shift difference and hence belongs to W, where the sum is already zero. Replace the designated d_{j0} by lcm(d_{j0},p0); it is at most X^(2c0), and product d'<=X^((k+1)c0)<=X^(1/10). Use R with Omega(d') in(S); the original residual roughness still implies the required roughness, and the extra constant C from Omega(d')−Omega(d)<=1 is harmless. If p0 does not divide d, the count gains1/p0; if it divides d, its local geometric series already has factor O(1/p0). Delete its old local Euler factor so the retained minimum is not counted twice. In both cases the normalized bound gains C min(sigma log p0/T,1)/p0 <=C sigma log p0/(p0 T). If p0|W the original sum is zero. The sigma integral still converges after increasing its fixed decay power by one. This proves(Pp), including all multiplicities and the forced-prime endpoint. Finally sum(Pp) over p0<=X^delta and apply sum_{p<=z}log p/p=log z+O(1); the union bound gives the announced least-prime-factor estimate. Product weights with two different tests at the same shift follow by |uv|<= (|u|²+|v|²)/2 and a finite expansion over the k shifts. This is exactly the mixed-weight form needed for the GEH S1 rough removal. [F1, F3, F4, F5, step 15.1, given, algebra] ∎

## Source notes

Full Polymath8b Lemma4.1, printedpp16–19, and Proposition4.2, printedpp22–26; forced-prime and varying-sieve-scale details are written locally. The actual full proof was read, and the argument here is locally reconstructed from the listed library suppliers. It is an adapted statement, not a verbatim source assertion or an external theorem input. The test functions are specified whole-line smooth functions; no unproved extension of arbitrary half-line data is assumed.
