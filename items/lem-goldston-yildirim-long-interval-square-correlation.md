---
dependency_level: 12
id: lem-goldston-yildirim-long-interval-square-correlation
kind: lemma
title: "Goldston–Yıldırım square correlations on long integer intervals"
status: draft
origin: session
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-goldston-yildirim-truncated-divisor-sum
  - def-number-theoretic-mobius-function
  - thm-canonical-prime-factorisation
  - def-w-trick-prime-modulus
  - thm-chinese-remainder-theorem
  - lem-mellin-log-positive-part-inversion
  - lem-goldston-yildirim-choice-free-euler-factor-bounds
  - lem-goldston-yildirim-choice-free-zeta-contour-calculus
  - def-unit-group-modulo-n-and-euler-totient
  - def-natural-logarithm
  - def-real-power
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Green and Tao, The primes contain arbitrarily long arithmetic progressions, Annals167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "Proposition9.6 and §10 Lemmas10.5–10.6; integer interval only, local unqualified reconstruction from actual accepted analytic suppliers"
---

## Statement

Fix integers $m\ge1$ and $k\ge3$. Let $N\to\infty$ be a positive real auxiliary parameter, and let $w=w(N)\ge2$ be integer-valued with $w\to\infty$ and $w\log w=o(\log\log\log N)$. Put $W=\prod_{p\le w}p$, $R=N^{1/(k2^{k+4})}$, and $L=\log R$. For any distinct integers $u_1,\ldots,u_m$ with $|u_i|\le N^2$, and any finite interval $B$ of consecutive integers of cardinality $H\ge R^{10m}$, suppose $W(x+u_i)+1\ge1$ for every $x\in B$ and every $i$. Put $\Delta=\prod_{i<j}|u_i-u_j|$, with $\Delta=1$ when $m=1$. There is $C_m>0$ independent of $k,N,w,B$ and the shifts such that, uniformly in all these intervals and shifts,
$$\frac1H\sum_{x\in B}\prod_{i=1}^m\Lambda_R(W(x+u_i)+1)^2\le(1+o_{m,k}(1))\left(\frac{W\log R}{\varphi(W)}\right)^m\prod_{p\mid\Delta}(1+C_mp^{-1/2}).$$
The $o(1)$ follows $N,w$ along the displayed hypotheses and is uniform in $B$ and the shifts. No choice axiom is assumed. Empty prime products and $m=1$ are included. This is an integer-interval statement, with no reduction of the summands modulo $N$; $N$ need not be prime.

## Facts & Assumptions

**Given:** The integer shifts, finite consecutive interval, positive arguments, and asymptotic parameters in the Statement. Averages use the actual finite cardinality $H$.

[F1] [[def-goldston-yildirim-truncated-divisor-sum]] defines $\Lambda_R(n)=\sum_{d\mid n,\ d\le R}\mu(d)\log(R/d)$ for positive $n$. [[def-number-theoretic-mobius-function]] vanishes on nonsquare-free divisors and gives sign $(-1)^r$ on a product of $r$ distinct primes. [[thm-canonical-prime-factorisation]] gives unique finite prime index sets and ensures the product of the distinct prime divisors of a positive integer divides it.

[F2] [[thm-chinese-remainder-theorem]] identifies residues modulo a product of distinct primes with the product of those prime residue rings, preserving the finite uniform counting probabilities.

[F3] [[lem-mellin-log-positive-part-inversion]] gives $(2\pi i)^{-1}\int_{c-i\infty}^{c+i\infty}(R/d)^z z^{-2}dz=\log(R/d)_+$ for every $c>0$, $d>0$, including valuezero at $d=R$.

[F4] The actual SHIFT-SYSTEM case of [[lem-goldston-yildirim-choice-free-euler-factor-bounds]] supplies the exact local-density polynomials and factorization $F=G_0G_1G_2\prod_i\zeta(1+z_i+z'_i)/(\zeta(1+z_i)\zeta(1+z'_i))$. With $r$ the number of distinct prime divisors of $\Delta$ and $P=\prod_{p\mid\Delta}(1+C_mp^{-1/2})$, it gives $G_0(0)=\prod_{p>w,p\mid\Delta}(1+(m-r_p)/p)\le P$, $G_1(0)=1+O_m(w^{-1/3})$, $G_2(0)=(W/\varphi(W))^m$, and, on the domain with all real parts greater than $-1/(12m)$, the separate bounds $\|G_0G_1G_2\|_{C^j}\le C_m e^{C_mw\log w}(1+r)^jP$ and $\|G_0G_1G_2\|_{C^0}\le e^{C_{m,k}L^{1/3}}$ for all sufficiently large $N$. This is its parallel-shift case, not its nonparallel-vector case, and it has no choice premise.

[F5] [[lem-goldston-yildirim-choice-free-zeta-contour-calculus]] gives (i) finite/improper product and countable-sum interchange for continuous separable integrable weights with summable numerical coefficient bounds, using canonical boxes, and (ii) the multivariable integral asymptotic with its original C0 envelope and finite higher norms. Its leading term is $G(0)L^m$, derivative errors are $O_{m,\sigma}(\|G\|_{C^j}L^{m-j})$, and the final error is $O_{m,\sigma,C_G}(e^{-\delta\sqrt L})$. Both clauses are unqualified.

[F6] [[def-w-trick-prime-modulus]] defines the actual finite product $W$. [[def-unit-group-modulo-n-and-euler-totient]] defines $\varphi(W)$ as the number of unit classes, so $1\le\varphi(W)\le W$. [[def-natural-logarithm]] and [[def-real-power]] specify $L=\log R$ and $R=N^{1/(k2^{k+4})}$ for positive real $N$.

## Proof

1.1 Work at sufficiently large $N$ that $R\ge3$ and the actual analytic hypotheses of [F4] hold. Expand the $2m$ finite divisor sums in [F1]. The positivity assumption ensures every sum is defined, even at an endpoint where its argument is1. Only square-free divisors $d_i,d'_i\le R$ contribute; their joint least common multiple $D\le R^{2m}$. In $H$ consecutive integers every residue modulo $D$ appears either $\lfloor H/D\rfloor$ or $\lceil H/D\rceil$ times, so the sum of the absolute errors in its probabilities from $1/D$ is at most $D/H\le R^{-8m}$. Each divisibility indicator is periodic in the INTEGER variable modulo this $D$. There are at most $R^{2m}$ divisor tuples and each product logarithmic weight is at most $L^{2m}$ in absolute value. Thus the desired average equals its exact uniform-residue expansion plus an error of absolute value at most $R^{-6m}L^{2m}$. This estimate does not depend on the location of $B$ or on any affine constant and asserts no period $N$ for the divisor sum. [F1, F6, given, algebra]

1.2 The number $r$ of distinct prime divisors of $\Delta$ satisfies $r=O_{m,k}(L/\log L)$ for large $L$, with $r=0$ when $\Delta=1$. To see this directly, $|u_i|\le N^2$ gives $\Delta\le(2N^2)^{m(m-1)/2}$ and hence $\log\Delta\le C_m\log N=C_{m,k}L$. By [F1], the product of its $r$ distinct primes divides $\Delta$, so $\Delta\ge r!$. For $r\ge4$, at least $r/2$ factors in the factorial are at least $r/2$, giving $(r/2)\log(r/2)\le C_{m,k}L$. If $r\le\sqrt L$ the desired bound is immediate; otherwise $\log(r/2)\ge(\log L)/3$ for sufficiently large $L$, yielding it as well. The bounded cases are absorbed in the same constant. This estimate is uniform in every allowable shift list. [F1, F6, given, algebra]

2.1 By [F2], the residue probability for a fixed tuple is $\rho_{\mathbf d}=\prod_{p\mid D}\omega_{U_p}(p)$, where $U_p=\{i:p\mid d_id'_i\}$ and $\omega_U(p)$ is the actual finite probability that $p\mid W(x+u_i)+1$ for all $i\in U$. These are exactly the shift-case densities in [F4]. For $p\le w$ every nonempty event is impossible. For $p>w$ every nonempty density is at most $1/p$, including when some shift classes agree. Put $c=1/L$. Over ALL square-free divisor tuples, give each tuple the nonnegative absolute weight $a_{\mathbf d}=\rho_{\mathbf d}\prod_i(d_id'_i)^{-c}$. Its nonconstant absolute local sum at $p>w$ is at most $C_mp^{-1-c}$: there are at most $4^m$ membership choices, every nonempty one has density at most $1/p$ and at least one exponent $c$. The sum of these prime bounds is finite by comparison with $\sum_{n\ge2}n^{-1-c}$. Finite prime expansion and unique factorization show $$\sum_{\mathbf d}a_{\mathbf d}\le\exp\left(C_m\sum_{n\ge2}n^{-1-c}\right)<\infty.$$ Indeed every tuple occurs in some finite prime expansion, and every finite set of tuples is contained in one such expansion. The canonical enumeration by finite shells of positive integer tuples makes this an actual numerical sum without an index-choice premise. Mixed divisors containing a prime of $W$ have densityzero; no false dichotomy between divisors of $W$ and divisors coprime to $W$ is used. [F1, F2, F4, step 1.1, algebra]

3.1 Apply [F3] to every logarithmic factor with the same vertical line $\Gamma_1=\{c+it\}$. Let $q_c(t)=e/(c^2+t^2)$, a continuous function of finite ordinary improper integral. For each tuple the absolute Mellin integrand is bounded by $a_{\mathbf d}\prod_{j=1}^{2m}q_c(t_j)$. Thus the actual restricted calculus [F5](i) applies: its numerical coefficient sum is finite by step 2.1, the kernel weights are continuous and separably integrable, and the tuple series is locally uniformly convergent on finite parameter boxes. Its uniform numerical tail bound permits the tuple sum and all $2m$ finite/improper integrals to be exchanged in every order. Tuples with any divisor greater than $R$, or with a factor exactly $R$, have Mellin productzero, so extending the finite residue expansion to this infinite tuple sum changes nothing after integration. Recombining signs and prime membership yields exactly the polynomial $E_p$ in [F4], and its positive-real-region factorization gives $I_m(G;R)$ with $G=G_0G_1G_2$. No Lebesgue Fubini or general Riemann DCT is invoked; all interchanges have the displayed continuous separable majorant and the actual summable numerical tail. [F1, F3, F4, F5, step 2.1, algebra]

4.1 Choose $C_m$ large enough for all the finitely many derivative orders in [F4], independently of $k$. Its origin formula has $1\le r_p\le m$ and nonnegative correction $(m-r_p)/p$, so $0<G_0(0)\le P$. The finite-prime factors and their normalized product at zero are positive for $w$ sufficiently large, since $p>w>m$; thus $0<G_1(0)\le1+C_mw^{-1/3}$. The exact $G_2(0)$ is $(W/\varphi(W))^m$. Restrict the full unbounded-right domain of [F4] to the original strip $D_{1/(12m)}^m$ with upper real boundary100. Its holomorphy, every norm through order $m$, and its SEPARATELY supplied C0 envelope remain valid there. Consequently [F5](ii), with $\sigma=1/(12m)$, gives $$I_m(G;R)\le(1+C_mw^{-1/3})P\left(\frac W{\varphi(W)}\right)^mL^m+\sum_{j=1}^m O_m\left(e^{C_mw\log w}(1+r)^jP L^{m-j}\right)+O_{m,k}(e^{-\delta_m\sqrt L}).$$ For the inequality, take absolute values of the error terms in the exact contour expansion; the original finite real sum is $I_m(G)$ plus the already bounded CRT error. The derivative-$P$ bound alone would not control the exponential tail: that tail uses the distinct C0 envelope with $C_G=C_{m,k}$ independent of $N$, precisely as [F5] requires. [F4, F5, step 3.1, step 1.2, algebra]

5.1 Normalize by $P(W/\varphi(W))^mL^m\ge P L^m>0$, using [F6]. Step 1.2 gives $(1+r)/L\le C_{m,k}/\log L$ for large $L$, so the sum of the finitely many normalized derivative errors is at most $C_{m,k}e^{C_mw\log w}/\log L$. The normalized CRT error is at most $R^{-6m}L^m$ by step 1.1, and the contour tail is at most $C_{m,k}L^{-m}e^{-\delta_m\sqrt L}$ since $P\ge1$. Thus a uniform nonnegative relative error is bounded by $$C_{m,k}\left(w^{-1/3}+\frac{e^{C_mw\log w}}{\log L}+R^{-6m}L^m+L^{-m}e^{-\delta_m\sqrt L}\right).$$ All constants here are independent of the shifts, interval and its location, $N$, and the chosen function $w$; the sufficiently-large-$N$ threshold only needs to meet that function's displayed qualitative hypotheses. Since $w\log w=o(\log\log\log N)=o(\log\log L)$, $e^{C_mw\log w}=(\log L)^{o(1)}$, so this bound tends tozero for every fixed $m,k$. If $m=1$ or $\Delta=1$, the exceptional products are empty, $G_0=P=1$, and the same estimates hold directly. This proves the proposed bound uniformly at its full integer-interval scope. Neither $N$-primality nor cyclic representatives occur anywhere, and every supplier is used at its actual unqualified premise. [F4, F5, F6, step 1.1, step 1.2, step 4.1, algebra] ∎
