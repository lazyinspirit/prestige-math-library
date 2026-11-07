---
id: thm-stadlmann-smooth-modulus-mpz-criterion
kind: theorem
title: "MPZ criterion from Stadlmann Type I/II and Polymath Type III estimates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps: [def-polymath-type-iii-estimate, lem-y-smooth-integers-are-iteratively-densely-divisible, thm-stadlmann-type-i-ii-smooth-modulus-estimate, thm-polymath-type-iii-smooth-modulus-estimate, thm-heath-brown-identity-for-von-mangoldt-sums, thm-siegel-walfisz-for-heath-brown-coefficients]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§2.1, Lemma 1 and Corollary 2, printed pp. 8–9"
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§2, Lemma 2.7, printed pp. 10–11; §3 proof"
---

## Statement

Let $\omega,\delta>0$ satisfy
$$80\omega+\frac{80}{3}\delta<1.$$
Then for every $x>1$, integer $a$, and real $A>0$,
$$\sum_{\substack{q\le x^{1/2+2\omega}\\q\mid P(x^\delta)\\(q,a)=1}}\left|\sum_{\substack{x\le n\le2x\\n\equiv a\ (q)}}\Lambda(n)-\frac1{\varphi(q)}\sum_{\substack{x\le n\le2x\\(n,q)=1}}\Lambda(n)\right|\ll_{A,\omega,\delta}\frac{x}{(\log x)^A}.$$
This is the modified Motohashi–Pintz–Zhang estimate over squarefree $x^\delta$-smooth moduli; the von Mangoldt sums include prime powers.

## Statement references

[[def-polymath-type-iii-estimate|Type III distribution estimate for smooth coefficient sequences]]

[[thm-stadlmann-type-i-ii-smooth-modulus-estimate|Stadlmann's improved Type I/II estimate for smooth moduli]]

[[thm-polymath-type-iii-smooth-modulus-estimate|Polymath8a Type III estimate for densely divisible moduli]]

[[thm-heath-brown-identity-for-von-mangoldt-sums|Finite Heath–Brown identity for the von Mangoldt function]]

[[thm-siegel-walfisz-for-heath-brown-coefficients|Siegel–Walfisz property for Heath–Brown coefficient factors]]

[[lem-y-smooth-integers-are-iteratively-densely-divisible|Every y-smooth integer is iteratively y-densely divisible]]

[Stadlmann, Lemma 1 and Corollary 2](https://arxiv.org/pdf/2309.00425v3)

[Polymath8a, Lemma 2.7](https://arxiv.org/pdf/1402.0811v3)

## Facts & Assumptions

**Given:** $\omega,\delta>0$ with $80\omega+80\delta/3<1$, and the Type I/II, Type III, finite Heath–Brown and Heath–Brown-factor Siegel–Walfisz supplier claims.

[F1] [[thm-stadlmann-type-i-ii-smooth-modulus-estimate]]: the Type I/II discrepancy estimate holds whenever its three displayed linear inequalities in $\omega,\delta,\sigma$ hold and the second coefficient sequence has the Siegel–Walfisz property. Its discrepancy is the full coefficient-support one of the actual source Proposition1, not an automatic hard product-window estimate.

[F2] [[thm-polymath-type-iii-smooth-modulus-estimate]]: the Type III estimate holds for $0<\omega<1/12$ and $\sigma>1/18+28\omega/9+2\delta/9$.

[F3] [[thm-heath-brown-identity-for-von-mangoldt-sums]]: on $[x,2x]$, $\Lambda$ is a finite sum of Dirichlet convolutions of truncated Möbius, constant-one, and logarithm factors.

[F4] [[thm-siegel-walfisz-for-heath-brown-coefficients]]: localized grouped Heath–Brown convolutions of scale $N\ge c_*x^\epsilon$ for fixed $\epsilon,c_*>0$ satisfy the unqualified Siegel–Walfisz discrepancy bound uniformly in $q,r$, including the source smooth cutoffs and fixed polylogarithmic normalizations. No assertion is made for arbitrary bounded-scale groups; complementary factors remain separate.

[F5] [[lem-y-smooth-integers-are-iteratively-densely-divisible]]: every positive integer whose prime divisors are all at most $y$ lies in $D^{(i)}(y)$ for each $i\ge0$; in particular every squarefree modulus dividing $P(x^\delta)$ lies in $D^{(1)}(x^\delta)$.

## Proof

**Proof technique:** finite smooth Heath–Brown decomposition, a uniform boundary estimate, and the Type I/II/III estimates.

1.1 Let $H=80\omega+80\delta/3<1$. Increase both $\omega,\delta$ slightly to fixed $\omega_+,\delta_+$ while retaining $80\omega_++80\delta_+/3<1$. Put [given, algebra]
$$L=\max\{1/10,1/18+28\omega_+/9+2\delta_+/9\},\quad U=\min\{1/4-12\omega_+-4\delta_+,1/2-32\omega_+-10\delta_+\}.$$
Then $L<U$: the four comparisons follow respectively from $12\omega_++4\delta_+<3/20$, $32\omega_++10\delta_+<2/5$, $544\omega_++152\delta_+<7$, and $79\omega_++23\delta_+<1$, each a strict consequence of $80\omega_++80\delta_+/3<1$. Also $72\omega_++24\delta_+<1$. Select fixed $L<\sigma_{III}<\sigma_0<\sigma_I<U$. Both analytic estimates meet their parameter hypotheses, $\sigma_0>2\omega_+$, and all comparisons have fixed positive slack. [F1, F2, algebra]

2.1 We establish the boundary estimate used below. Fix $C>0$, $0<\alpha<1-\theta$, $Q\le x^\theta$ with $\theta=1/2+2\omega$, and an interval $J\subset[x/2,3x]$ of length at most $h\le x$. Uniformly in every integer $a$, [given, algebra] [step 1.1]
$$\sum_{q\le Q\atop(q,a)=1}\sum_{n\in J\atop n\equiv a\ (q)}\tau(n)^C\ll h(\log x)^H+Qx^\alpha(\log x)^H,$$
and the same bound holds for $\sum_{q\le Q}\varphi(q)^{-1}\sum_{n\in J,(n,q)=1}\tau(n)^C$. Here $H$ and the implied constant depend only on $C,\alpha$. [algebra]

3.1 To prove it, discard the prime factors $p>x^\alpha$ of $n\le3x$, counted with multiplicity; their number is bounded in terms of $\alpha$. Pack the remaining prime factors greedily into successive products $d_i\le x^\alpha$. Two adjacent bins have product $>x^\alpha$, since the first prime of the later bin did not fit in the earlier. Hence their number is at most $2\log(3x)/(\alpha\log x)+1$, bounded by a constant $T_\alpha$. From $\tau(uv)\le\tau(u)\tau(v)$, one bin $d\mid n$ has $\tau(n)^C\ll\tau(d)^D$, with an integer $D$ depending only on $C,\alpha$. Thus $\tau(n)^C\ll\sum_{d\mid n,d\le x^\alpha}\tau(d)^D$. If $(a,q)=1$, every contributing $d$ is coprime to $q$, and the two congruences have one class modulo $dq$; their count in $J$ is at most $h/(dq)+1$. Therefore the first sum is bounded by $\sum_{q\le Q}\sum_{d\le x^\alpha}\tau(d)^D(h/(dq)+1)$. [step 2.1, algebra] [step 2.1]

4.1 The required divisor moments are elementary: $\sum_{d\le z}\tau(d)^D\ll z(\log(2z))^{2^D-1}$ and $\sum_{d\le z}\tau(d)^D/d\ll(\log(2z))^{2^D}$. Indeed $\tau(d)^D\le\tau_{2^D}(d)$: at a prime power $p^e$, a $D$-tuple of exponents $0\le f_j\le e$ injects into the histogram of the $e$ bit-vectors $(1_{h\le f_j})_j$, and the histograms count $2^D$-fold factorizations. Summing that divisor function by its product representation gives the displayed moments. Substitution proves the first bound of step 2.1. For the second, use the same divisor sum without a congruence and $\sum_{q\le Q}1/\varphi(q)\ll\log(2Q)$, from $q/\varphi(q)=\sum_{d\mid q}\mu^2(d)/\varphi(d)$ and the convergent product $\prod_p(1+1/(p(p-1)))$. Thus intervals of length $x/(\log x)^B$ contribute $O(x/(\log x)^A)$ for any chosen $A$ if $B$ is sufficiently large; fixed powers of $\log x$ in the coefficient bound are absorbed by increasing $B$. [step 2.1, step 3.1, algebra] [step 3.1]

5.1 For $t_1,\ldots,t_m\ge0$ summing to one, one of three alternatives holds: a $t_i\ge1/2+\sigma_0$; a subset sum lies strictly between $1/2-\sigma_0$ and $1/2+\sigma_0$; or three distinct entries lie in $[2\sigma_0,1/2-\sigma_0]$ and their pairwise sums are at least $1/2+\sigma_0$. To see this, suppose the first two fail. Every subset is then small or large according as its sum is at most $1/2-\sigma_0$ or at least $1/2+\sigma_0$. Call $i$ powerful if adjoining it turns some small subset into a large one; then $t_i\ge2\sigma_0$. All powerless indices together form a small set, and the complement argument yields at least three powerful indices. Any pair of powerful indices is large because $4\sigma_0>1/2-\sigma_0$; four powerful indices would give two disjoint large pairs, impossible. The three powerful indices give the stated alternative. [algebra] [step 4.1]

6.1 Choose a fixed integer $K$ with $1/K<2\sigma_{III}$. Apply the finite Heath–Brown identity [F3] on $[x,2x]$ and decompose each of its at most $2K$ factors by a smooth partition with multiplicative mesh $1+(\log x)^{-B}$. There are only a fixed power of $\log x$ nonzero scale tuples. Their coefficient convolutions are bounded by $\tau(n)^{O_K(1)}(\log x)^{O_K(1)}$; derivatives of smooth factors are bounded by fixed powers of $\log x$. A tuple meeting $[x,2x]$ has scale product in $[x(1-O_K((\log x)^{-B})),2x(1+O_K((\log x)^{-B}))]$. The partition functions are nonnegative and sum to one. Consequently the sum of the absolute boundary coefficients over ALL tuples is bounded by $\tau_{2K}(n)\log(2x)$, independently of the mesh width: take absolute values in the original factorization sum and then sum each factor’s partition of unity. Step 4.1 bounds this combined boundary discrepancy by an arbitrarily small prescribed logarithmic error when $B$ is large; one must not multiply a per-tuple boundary bound by the mesh-dependent tuple count. The grouping in [F4] supplies Siegel–Walfisz for any factor group of scale at least a fixed positive power of $x$. [F3, F4, step 4.1, algebra] [step 5.1]

7.1 Normalize the logarithms of a tuple's scales to sum to one and apply step 5.1. In the middle alternative group the factors into two convolutions of scales between $x^{1/2-\sigma_I}$ and $x^{1/2+\sigma_I}$, using the fixed slack between $\sigma_0$ and $\sigma_I$ and the bounded ratio of the scale product to $x$. Both groups have positive-power scale, so [F4] gives the required Siegel–Walfisz property. Taking the smaller group as $\beta$ and rescaling its stated scale by a bounded factor if necessary places it in $[x^{1/2-\sigma_I},x^{1/2}]$; [F1] applies to its full-support convolution. Our original modulus family is a subset of its $\omega_+,\delta_+$ family. [F1, F4, step 1.1, step 5.1, step 6.1, algebra] [step 6.1]

8.1 In the three-factor alternative, the three factors have scales $N_j$ satisfying the strict Type III inequalities with $\sigma_{III}$, because $\sigma_{III}<\sigma_0$ and the scale product is comparable to $x$. They are smooth: every truncated Möbius factor has scale at most a constant times $x^{1/K}$, which is smaller than their scales. Put the remaining factors in $\alpha$. Let $I$ be the finite set of primes at most $x^\delta$ which do not divide $a$; then $(a,P_I)=1$, and every original modulus has its prime factors in $I$. By [F5] it lies in $D_I^{(1)}(x^{\delta_+})$. Apply [F2] with the hard window $[x,2x]$ directly; the enlarged parameters and fixed slack cover its level and scale conditions. [F2, F5, step 1.1, step 5.1, step 6.1, algebra] [step 7.1]

9.1 In the first alternative one factor is smooth at scale $N\gg x^{1/2+\sigma_0}$, because the Möbius truncation scale is smaller. Let $M\asymp x/N$ be the scale of the remaining convolution. Poisson summation for the smooth factor gives uniformly in reduced $b\pmod q$ a discrepancy $\ll (N/q)(q/N)^2(\log x)^{O(1)}$. Summing over the other factor and over $q\le x^{1/2+2\omega}$ gives $\ll x(Q/N)^2(\log x)^{O(1)}=x^{1-2\sigma_0+4\omega}(\log x)^{O(1)}$, a power saving because $\sigma_0>2\omega$. Step 4.1 restores the hard window for this full-support estimate. [step 1.1, step 4.1, step 5.1, step 6.1, algebra] [step 8.1]

10.1 The three cases bound each tuple by $x/(\log x)^A$ with arbitrary fixed saving. First choose the boundary mesh using the combined bound of step 6.1; then increase the analytic saving to absorb the resulting fixed polylogarithmic number of tuples, and sum the finite Heath–Brown identity. This gives the asserted MPZ discrepancy uniformly in the integer $a$. [F3, step 6.1, step 7.1, step 8.1, step 9.1, algebra] [step 9.1] ∎

## Proof status

The displayed reduction proves the target conditional on the literal Type I/II and Type III suppliers. Those two suppliers remain escalated; no unconditional acceptance of them is claimed.
