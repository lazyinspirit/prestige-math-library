---
dependency_level: 6
id: lem-polymath8b-rough-prime-products-and-difference-energy
kind: lemma
title: Finite-difference energy and rough prime-product Selberg moments
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-choice-free-siegel-walfisz-from-mobius-cancellation
- thm-first-mertens-theorem-for-primes
- thm-fundamental-theorem-of-arithmetic
- lem-divisor-function-subpower-bound
- thm-riemann-fubini-on-product-rectangles
- thm-integration-by-parts-with-interior-derivatives
- thm-newton-leibniz-with-interior-derivative
- thm-change-of-variables-for-compact-jordan-sets
justified_by: []
proof_strategy: direct
axiom_use: 'No additional choice axiom: explicit finite prime sums, proper Riemann integrals and a convergent nonnegative numerical remainder argument.'
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes
    url: https://arxiv.org/pdf/1407.4897v4
    locator: Full Polymath8b Section4.5, printedpp29–32, equations(64)–(71), including Lemma4.4 and the finite covariance remainder; prime-product counting is derived from the actual local q1 SW and Mertens providers.
---

## Statement

For specified real $F,G\in C_c^\infty(\mathbb R)$ put $D_hF(t)=F(t+h)-F(t)$. For $a>0$,
$$\sum_{r\ge1}\int_{0<t_1<\cdots<t_r,\ \sum t_i=a}\frac{D_{t_1}\cdots D_{t_r}F(0)D_{t_1}\cdots D_{t_r}G(0)}{t_1\cdots t_r}\,dt_1\cdots dt_{r-1}=\int_0^aF'(t)G'(t)\,dt.$$
Here $t_r=a-\sum_{i<r}t_i$; the hyperplane measure is the stated coordinate measure, not surface area. For $r=1$ the summand is $D_aF(0)D_aG(0)/a$. The bilinear series converges absolutely.

Fix $0<\delta<1/4$ and real constants $c_-,c_+$. With $T=\log X$ and $\lambda_F(n)=\sum_{d\mid n}\mu(d)F(\log d/T)$,
$$\sum_{X+c_-<n\le2X+c_+,\ p(n)>X^\delta}\lambda_F(n)\lambda_G(n)=\left[C_\delta(F,G)+o(1)\right]\frac X{\log X},$$
where $p(n)$ is the least prime factor and $C_\delta$ is the finite sum of the preceding ordered-simplex integrals with $a=1$ and all $t_i\ge\delta$. Moreover $C_\delta(F,G)\to\int_0^1F'G'$ as $\delta\downarrow0$. Every $\delta$ is fixed before $X\to\infty$; no uniformity in a varying number of prime factors is asserted. The fixed-prime-product counting formula used to compute $C_\delta$ is derived in the proof.

## Facts & Assumptions

**Given:** All fixed parameters, test functions and hypotheses of the Statement. The symbols tau, omega and Omega denote respectively the positive-divisor count, the distinct-prime-factor count and the prime-factor count with multiplicity. Proof formulas use the same elementary notation in text; every displayed sum is finite except the explicitly convergent Fourier or numerical series.

[F1] [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] at modulus one supplies the prime number theorem with every fixed logarithmic saving; the finite Abel summation in the proof passes to prime counts.

[F2] [[thm-first-mertens-theorem-for-primes]] supplies the logarithmic prime sums used for the remaining prime-factor variables.

[F3] [[thm-fundamental-theorem-of-arithmetic]] and [[lem-divisor-function-subpower-bound]] give the exact subset-divisor identity and negligible fixed endpoint changes.

[F4] [[thm-riemann-fubini-on-product-rectangles]], [[thm-integration-by-parts-with-interior-derivatives]] and [[thm-newton-leibniz-with-interior-derivative]] give the proper-integral expansions, covariance identity and finite integration steps. [[thm-change-of-variables-for-compact-jordan-sets]] applies to the explicit invertible affine simplex substitutions and permutations, whose absolute determinants are one. All infinite operations below are explicitly bounded nonnegative numerical series or absolutely convergent bilinear series.

## Proof

1.1 **Part 1: Exact positive energy decomposition.** For h>=0 set D_hF(t)=F(t+h)−F(t). Let F be smooth on a neighbourhood of[0,a], a>0. Put I_a(F)=integral_0^a |F'|² and J_a(F)=|F(a)−F(0)|². Directly expanding the square on[0,a]² gives I_a(F)=J_a(F)/a +(1/a)integral_0^a I_(a−t)(D_tF)dt. (E1) Indeed the second numerator integral is integral_{0<=u<=s<=a}|F'(s)−F'(u)|² du ds, because s=u+t. It is half the corresponding square integral, equal to a integral|F'|²−|integral F'|². This proves(E1) with its EXACT arguments; no derivative is evaluated at the wrong endpoint. [F4, given, algebra]

2.1 Iterate(E1) finitely. For r>=1 let K_(a,r)(F)=integral_{t_i>0,sum_i t_i=a} |D_t1...D_trF(0)|² /[a(a−t1)...(a−t1−...−t_(r−1))] dt1...dt_(r−1), and let [F4, step 1.1, given, algebra]

3.1 L_(a,l)(F)=integral_{t_i>=0,sum_(i<=l)t_i<=a} I_(a−sum t_i)(D_t1...D_tlF) /[a(a−t1)...(a−t1−...−t_(l−1))]dt1...dt_l. Then for every l>=1, I_a(F)=sum_(r=1)^l K_(a,r)(F)+L_(a,l)(F). (E2) [F4, step 2.1, given, algebra]

4.1 This is induction using(E1) in the last I term. All quantities are nonnegative. Finite-difference bounds |D_t1...D_trF(u)|<=||F^(r)||infinity product t_i show that the displayed K integrands extend continuously by zero at the boundary; the chain denominators dominate product t_i. The same integral identities may also be understood as successive proper integrals from(E1), so all finite steps are justified before any infinite limit. There is NO unestimated infinite remainder. Write s=sum_(i<=l)t_i in L and expand its I term as an integral in u. Its chain denominator is at least the K_(s,l) denominator, because a>=s. Therefore L_(a,l)(F)<=integral_{s,u>=0,s+u<=a} K_(s,l)(F'_u)ds du, [F4, step 3.1, given, algebra]

5.1 where F'_u(v)=F'(u+v). By(E2), every finite sum over l of the K_(s,l)(F'_u) is at most I_s(F'_u). Hence for every integer M, sum_(l=1)^M L_(a,l)(F)<= integral_{s,u>=0,s+u<=a} I_s(F'_u)dsdu <= a³||F''||infinity²/6. Only finite summation and integration were interchanged. The nonnegative numerical series of remainders is thus bounded, so L_(a,l)→0. Sending l→infinity in(E2) proves I_a(F)=sum_(r>=1)K_(a,r)(F). [F4, step 4.1, given, algebra]

6.1 For positive t1,...,tr, induction gives the exact rational identity 1/(t1...tr)=sum_(sigma in S_r) 1/product_(i=1)^r(sum_(j=i)^r t_(sigma(j))). (E3) Both sides obey f_r=(sum t_i)^(−1)sum_i f_(r−1)(t with t_i deleted), and the r=1 case is1/t1. The finite-difference numerator is symmetric. Integrating(E3), dividing the full simplex into its r! order regions (ties have zero content), and cancelling the r! factor gives the EXACT energy identity [F4, step 5.1, given, algebra]

7.1 sum_(r>=1) integral_{0<t1<...<tr,sum t_i=a} |D_t1...D_trF(0)|² /(t1...tr)dt1...dt_(r−1) = integral_0^a|F'|². (E4) The underlying hyperplane measure is the parameter dt1...dt_(r−1), tr=a−sum_(i<r)t_i, not Euclidean surface area; permutations preserve this measure in absolute determinant1. The r=1 integral means |D_aF(0)|²/a. Polarizing(E4) with F+G and F−G proves its bilinear version. Absolute convergence in the bilinear identity follows from finite-sum Cauchy–Schwarz and the two nonnegative energies. No auxiliary analytic number-theory bound is needed to prove(E4). [F4, step 6.1, given, algebra]

8.1 **Part 2: Counting fixed rough prime products from q1 PNT.** Fix delta>0 and an integer r>=1. Let f be continuous on the compact region t_i>=delta, sum t_i<=2, and use the ordered region t1<...<tr. Then sum_{X^delta<p1<...<pr, X+c_-<p1...pr<=2X+c_+} f(log_X p1,...,log_X pr) = (X/log X)[ integral_{delta<=t1<...<tr,sum t_i=1} f(t)/(t1...tr) dt1...dt_(r−1)+o(1)], (P1) for any fixed real shifts c_-,c_+ (with the evident interval-length factor when the macroscopic endpoints change). The o(1) is for fixed delta,r,f; no uniformity as delta→0 is claimed or required. [F1, F2, F3, F4, step 7.1, given, algebra]

9.1 Here is a direct derivation. For r=1, partial summation of the actual q1 SW bound gives pi(2X+c_+)−pi(X+c_-)=X/log X+o(X/log X), and log_X p=1+o(1), proving(P1). For r>=2 put P=p1...p_(r−1). On a compact subregion where t_r=1−sum_(i<r)t_i is at least delta and t_r−t_(r−1) is bounded below by eta>0, the last-prime interval[X/P+O(1/P),2X/P+O(1/P)] automatically lies above the earlier primes. Uniform q1 PNT at arguments>=X^delta/2 gives its cardinality [X/(P log X)] [1/(1−sum_(i<r)t_i)+o(1)]. The test f may replace its last argument by 1−sum_(i<r)t_i with uniform o(1), by its uniform continuity; log2/logX controls the variation. Successive partial summation of first Mertens gives, for every fixed delta<=u<v<=2, [F1, F2, F3, F4, step 8.1, given, algebra]

10.1 sum_{X^u<p<=X^v}1/p=log(v/u)+o(1). Finite rectangular step approximations therefore turn the remaining weighted prime sums into the proper Riemann integral in(P1), first away from the boundary slabs. The dropped slabs t_i within eta of delta, t_i=t_j, or sum_(i<r)t_i=1−delta have content O_(delta,r)(eta), since all denominators t_i are bounded by1/delta. To justify the same bound for their prime sums, use the same rectangular majorants and q1 PNT bound pi(2z)−pi(z)<=C z/log z uniformly for z>=X^delta/2; each remaining prime interval is bounded by a constant times X/(P logX), and each outer 1/p sum on a fixed log rectangle is at most a constant times its log length plus o(1). Sum the FINITELY MANY rectangles of the majorant, then let eta→0. This proves the assertion for every continuous f. O(1) shifts in the product interval do not change this proof: the log-endpoint slabs shrink and the integer endpoint discrepancy, bounded by a fixed number times the elementary divisor subpower bound, is o(X/logX). [F1, F2, F3, F4, step 9.1, given, algebra]

11.1 **Part 3: Rough smooth-divisor moments.** Let F,G be smooth compactly supported on[0,infinity), and lambda_F as in the first block. Fix delta>0. An integer n~X with least prime factor>X^delta has at most floor(2/delta) prime factors for large X. Those with a repeated prime factor contribute O_delta(X^(1−delta)) to sum lambda_F(n)lambda_G(n): their number is at most sum_{p>X^delta}3X/p²=O(X^(1−delta)), and on this rough set both divisor sums are bounded by constants depending only on delta and the fixed tests. For squarefree n=p1...pr, lambda_F(n)=(-1)^r D_(log_Xp1)...D_(log_Xpr)F(0). Insert this EXACT subset-divisor identity, sum over the FINITELY MANY possible r and apply(P1). It gives [F1, F2, F3, F4, step 10.1, given, algebra]

12.1 sum_{X+c_-<n<=2X+c_+, p(n)>X^delta}lambda_F(n)lambda_G(n) = [C_delta(F,G)+o(1)]X/log X, where C_delta is the finite ordered-prime-simplex sum of the product of finite differences in(E4), with a=1 and every t_i>=delta. By(E4) and bilinear absolute convergence, lim_(delta↓0) C_delta(F,G)=integral_0^1F'G'. (P2) [F1, F2, F3, F4, step 11.1, given, algebra]

13.1 For F=G, choose first a finite number of terms whose remaining energy tail is below a prescribed error, then choose delta small enough for the boundary-strip losses in those finitely many continuous simplex integrals to be below that error. The other losses are nonnegative and bounded by the full energy tail. This is an explicit finite-tail argument, not an invocation of an unqualified general Lebesgue convergence theorem. Polarize for the bilinear case. In the GEH S1 proof we retain fixed delta until after taking X→infinity and use(P2) only at the final scalar limit; there is no varying-delta or varying-number-of-factors GEH family. [F1, F2, F3, F4, step 12.1, given, algebra] ∎

## Source notes

Full Polymath8b Section4.5, printedpp29–32, equations(64)–(71), including Lemma4.4 and the finite covariance remainder; prime-product counting is derived from the actual local q1 SW and Mertens providers. The actual full proof was read, and the argument here is locally reconstructed from the listed library suppliers. It is an adapted statement, not a verbatim source assertion or an external theorem input. The test functions are specified whole-line smooth functions; no unproved extension of arbitrary half-line data is assumed.
