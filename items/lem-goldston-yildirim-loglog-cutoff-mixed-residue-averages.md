---
dependency_level: 12
id: lem-goldston-yildirim-loglog-cutoff-mixed-residue-averages
kind: lemma
title: "Mixed-residue divisor averages for logarithmic-logarithmic cutoffs"
status: draft
origin: session
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-goldston-yildirim-truncated-divisor-sum
  - def-number-theoretic-mobius-function
  - def-w-trick-prime-modulus
  - thm-canonical-prime-factorisation
  - thm-chinese-remainder-theorem
  - thm-z-mod-p-is-a-field
  - thm-euler-totient-product-formula
  - thm-euler-product-for-riemann-zeta
  - thm-absolute-convergence-criterion-for-complex-infinite-products
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - thm-cauchy-estimates-on-a-polydisc
  - lem-mellin-log-positive-part-inversion
  - lem-goldston-yildirim-choice-free-zeta-contour-calculus
  - def-complex-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-real-power
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
  - thm-logarithm-slower-than-every-positive-power
  - thm-geometric-series
  - thm-p-series-rational
  - lem-exponential-dominates-one-plus-x
  - def-unit-group-modulo-n-and-euler-totient
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
      locator: "§10 local-factor method; full-cutoff mixed-residue scope is a local strengthening, not a quoted printed theorem. Prior actual full-text reading history preserved."
---

## Statement

Fix integers $m,t\ge1$, $k\ge3$ and a real $C_0>0$. Let $X\to\infty$ through positive real values, and let $w=w(X)\ge2$ be integer-valued with $w\to\infty$ and $w\le C_0\log\log X$. Put $W=\prod_{p\le w}p$, $R=X^{1/(k2^{k+4})}$ and $L=\log R$. Averages below use actual finite integer lattice-point cardinalities.

For integer forms $\ell_i(x)=\sum_{j=1}^tL_{ij}x_j+\beta_i$, suppose $L_i\ne0$, $|L_{ij}|\le\sqrt w/2$, and no two rows are rational multiples. Choose independently $1\le b_i<W$ with $\gcd(b_i,W)=1$. If each coordinate interval of a box $B$ contains at least $R^{10m}$ consecutive integers and $W\ell_i(x)+b_i\ge1$ throughout its integer points, then, uniformly in all constants, residues and boxes,
$$\mathbb E_{x\in B\cap\mathbb Z^t}\prod_{i=1}^m\Lambda_R(W\ell_i(x)+b_i)^2=(1+o_{m,t,k,C_0}(1))\left(\frac{WL}{\varphi(W)}\right)^m.$$

For distinct integers $v_1,\ldots,v_m$ with $|v_i|\le X^2$ and $\gcd(v_i,W)=1$, let $B$ instead be a consecutive integer interval of cardinality $H\ge R^{10m}$ on which all $Wx+v_i\ge1$. Put $\Delta=\prod_{i<j}|v_i-v_j|$, with $\Delta=1$ for $m=1$. There is $C_m>0$, independent of $k,C_0,X,w,B$ and the offsets, such that uniformly,
$$\mathbb E_{x\in B}\prod_{i=1}^m\Lambda_R(Wx+v_i)^2\le(1+o_{m,k,C_0}(1))\left(\frac{WL}{\varphi(W)}\right)^m\prod_{\substack{p>w\\p\mid\Delta}}(1+C_mp^{-1/2}).$$
Only primes $p>w$ occur in the exceptional factor. Both conclusions include $m=1$ and empty products. Their errors are bounds in the joint limit $X\to\infty$, $w\to\infty$, $w\le C_0\log\log X$; they assert no decay for fixed $w$. No primality of $X$ or choice axiom is assumed.

## Facts & Assumptions

**Given:** Exactly the two systems and positive finite boxes/intervals in the Statement. Denote their integer arguments by $\theta_i$. Every constant in an asymptotic estimate is independent of the actual residues, affine constants and interval locations unless explicitly indexed otherwise.

[F1] [[def-w-trick-prime-modulus]] defines $W$. [[def-goldston-yildirim-truncated-divisor-sum]] and [[def-number-theoretic-mobius-function]] define the finite logarithmic divisor sum, with nonsquarefree terms zero. [[thm-canonical-prime-factorisation]] gives unique prime factors and their finite products. [[thm-z-mod-p-is-a-field]] gives inverses of nonzero prime residues. [[thm-chinese-remainder-theorem]] identifies simultaneous residues modulo distinct primes with residues modulo their product, preserving the finite uniform probabilities.

[F2] [[thm-euler-totient-product-formula]] gives $\varphi(W)/W=\prod_{p\le w}(1-1/p)$; [[def-unit-group-modulo-n-and-euler-totient]] gives $0<\varphi(W)\le W$.

[F3] [[thm-euler-product-for-riemann-zeta]] supplies the absolutely and locally uniformly convergent Euler product at $\operatorname{Re}s>1$.

[F4] [[def-complex-exponential]] defines $p^{-z}=\exp(-z\log p)$; [[thm-complex-exponential-is-entire-with-derivative-itself]] supplies its holomorphy.

[F5] [[thm-absolute-convergence-criterion-for-complex-infinite-products]] gives convergence from summable absolute deviations, and [[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]] gives holomorphy and convergence of mixed derivatives for locally uniform holomorphic limits.

[F6] [[thm-cauchy-estimates-on-a-polydisc]] bounds each mixed derivative at a center by the supremum on a distinguished boundary of strictly smaller radii than an open holomorphic polydisc.

[F7] [[lem-mellin-log-positive-part-inversion]] gives the vertical integral for $\log(R/d)_+$, including zero when $d=R$.

[F8] [[lem-goldston-yildirim-choice-free-zeta-contour-calculus]] gives the restricted improper Riemann exchanges for continuous separable integrable weights and summable numerical coefficient tails, and the multivariable contour asymptotic with finite norms through $m$ and its separate $C^0$ envelope $\exp(C_GL^{1/3})$. Its derivative errors are $O_{m,\sigma}(\|G\|_{C^j}L^{m-j})$; its tail is $O_{m,\sigma,C_G}(e^{-\delta\sqrt L})$. It has no choice premise.

[F9] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[def-real-power]], [[thm-real-power-laws]], [[thm-real-power-continuity-and-derivatives]] and [[thm-logarithm-slower-than-every-positive-power]] supply positive-base powers, logarithm identities and the elementary comparisons used below.

[F10] [[thm-geometric-series]] gives convergence for real ratio of absolute value less than1. [[thm-p-series-rational]] gives convergence at exponent $3/2$. [[lem-exponential-dominates-one-plus-x]] gives $1+x\le e^x$.

## Proof

1.1 For a prime $p$, let $\omega_U(p)$ be the proportion of points modulo $p$ with $\theta_i=0$ for every $i\in U$, and set $\omega_\varnothing=1$. If $p\le w$, every $\theta_i$ equals a unit modulo $p$, so every nonempty density iszero. If $p>w$, $W$ is invertible. In the box case each nonzero row has a nonzero coefficient modulo $p$, giving singleton density $1/p$. A rationally nonparallel pair has a nonzero integer two-by-two minor: otherwise a nonzero coordinate in one row and the vanishing minors force proportionality. Its absolute value is at most $w/2<p$, so it is invertible. Fixing the other coordinates gives exactly one solution for those two, and any density with at least two indices is at most $p^{-2}$. If $t=1$, the hypotheses permit only one row. In the parallel case the root is $-v_i/W$; a nonempty event has density $1/p$ exactly when all its $v_i$ agree modulo $p$, and zero otherwise. These are finite statements uniform in all constants. [F1, given, algebra]

1.2 Expand the $2m$ finite divisor sums at the positive arguments. A contributing tuple of squarefree divisors has joint modulus $D\le R^{2m}$. In $H_j\ge R^{10m}$ consecutive integers its residue probabilities differ from the uniform probabilities by total absolute error at most $D/H_j\le R^{-8m}$. Telescope the coordinate probability measures in the box case; use one coordinate in the parallel case. There are at most $R^{2m}$ tuples, each logarithmic weight has modulus at most $L^{2m}$, so the original average equals the exact uniform-residue expansion with absolute error $O_{m,t}(R^{-6m}L^{2m})$. Only the finite divisibility tests are periodic modulo their actual $D$. No period $X$ or prime-field period of $\Lambda_R$ is asserted. Argument1 and the exact finite cardinalities are included. [F1, F9, given, algebra]

2.1 Put $\sigma=1/(12m)$, $\tau=1/(8m)$ and $U_a=\{\operatorname{Re}z_i,\operatorname{Re}z'_i>-a\}$. Define $$E_p=\sum_{A,A'\subseteq[m]}(-1)^{|A|+|A'|}\omega_{A\cup A'}(p)p^{-\sum_{i\in A}z_i-\sum_{i\in A'}z'_i},\qquad H_p=\prod_i\frac{(1-p^{-1-z_i})(1-p^{-1-z'_i})}{1-p^{-1-z_i-z'_i}}.$$ In the parallel case let $\lambda_p$ be the terms of $E_p$ whose union has at least two indices, for $p>w$, and zero for $p\le w$; it vanishes unless $p\mid\Delta$. In the box case put $\lambda_p=0$. The singleton terms are $-A_p$ for $A_p=\sum_i(p^{-1-z_i}+p^{-1-z'_i}-p^{-1-z_i-z'_i})$. On $U_\tau$ their modulus is $O_m(p^{-1+2\tau})$. The remaining box terms are $O_m(p^{-2+2m\tau})=O_m(p^{-7/4})$; the parallel remainder is exactly $\lambda_p$, with $|\lambda_p|\le C_mp^{-1+2m\tau}=C_mp^{-3/4}$. Expanding the finitely many geometric denominators gives $H_p=1-A_p+O_m(p^{-2+4\tau})=1-A_p+O_m(p^{-3/2})$. All the factors $1-p^{-1-z_i}$, $1-p^{-1-z'_i}$, $1-p^{-1-z_i-z'_i}$ are bounded away from zero there. These rational exponential functions are holomorphic. Put $d_0=(\tau-\sigma)/2$; every open radius-$2d_0$ polydisc centered in $U_\sigma$ lies in $U_\tau$. Define $G_0=\prod_{p>w}(1+\lambda_p)$ and $G_2=\prod_{p\le w}H_p^{-1}$, both finite. [F1, F4, step 1.1, given, algebra]

2.2 CRT factors the exact residue density of a divisor tuple as $\rho_{\mathbf d}=\prod_p\omega_{U_p}(p)$, with $U_p=\{i:p\mid d_id'_i\}$. Put $c=1/L$ and give every squarefree tuple the nonnegative coefficient $a_{\mathbf d}=\rho_{\mathbf d}\prod_i(d_id'_i)^{-c}$. For $p\le w$ a nonempty membership has densityzero. For $p>w$ it has density at most $1/p$ and at least one exponent $c$, so its finite local absolute sum is at most $C_mp^{-1-c}$. Finite prime expansion and unique factorization give $$\sum_{\mathbf d}a_{\mathbf d}\le\exp\left(C_m\sum_{n\ge2}n^{-1-c}\right)<\infty.$$ Indeed the shell $2^j\le n<2^{j+1}$ contributes at most $2^{-jc}$, a geometric series of real ratio $2^{-c}<1$; the rational-only p-series theorem is not used at irrational $1+c$. Enumerate integer tuples in canonical finite shells. Every finite set of tuples is contained in one finite prime expansion and every tuple eventually occurs, proving the numerical bound without selecting any witnesses. [F1, F9, F10, step 1.1, step 1.2, algebra]

3.1 For $w\ge w_0(m)$, $|\lambda_p|<1/2$ for $p>w$. The formulas in step 2.1 give $$B_p:=\frac{E_p}{(1+\lambda_p)H_p}=1+O_m(p^{-3/2})$$ uniformly on $U_\tau$. In the parallel case the extra term $\lambda_pA_p$ has size $O_m(p^{-2+(2m+2)\tau})=O_m(p^{-3/2})$; the box case uses its $p^{-7/4}$ remainder. Thus $G_1=\prod_{p>w}B_p$ converges absolutely and uniformly, with tail $O_m(Y^{-1/2})$ after primes at most $Y$, by comparison with all integers and the finite product bound $|\prod(1+a)-1|\le e^{\sum|a|}-1$. Its finite partial products are holomorphic, so [F5] gives holomorphy. Use [F6] at boundary radius $d_0$ inside the open radius-$2d_0$ polydiscs from step 2.1. Each telescoping prime increment and every derivative through $m$ is bounded by $C_mp^{-3/2}$ on $U_\sigma$. Consequently their derivative series converge absolutely and uniformly, $\|G_1\|_{C^j}\le C_m$, and $G_1(0)=1+O_m(w^{-1/2})=1+O_m(w^{-1/3})$. Norms here and below take all derivatives through the indicated order on $U_\sigma$. [F5, F6, F9, F10, step 2.1, algebra]

3.2 Define the finite product $G_2=\prod_{p\le w}H_p^{-1}$. On $U_\tau$ put $x=p^{-1+2\tau}$, $y=p^{-1+\tau}$. Then $|H_p^{-1}|\le(1+x)^m/(1-y)^{2m}$, with $y\le2^{-1+\tau}<1$. The finite logarithm integrals give $\log(1+x)\le x$ and $-\log(1-y)\le y/(1-y)$, so $\log|H_p^{-1}|\le C_mp^{-1+2\tau}$. Comparing the prime sum with all integers and integrating $u^{-1+2\tau}$ gives $\|G_2\|_{C^0(U_\tau)}\le\exp(C_mw^{2\tau})$. On the nested polydiscs from step 2.1, [F6] therefore gives $$\|G_2\|_{C^j(U_\sigma)}\le C_m\exp(C_mw^{1/(4m)})\qquad(0\le j\le m).$$ At zero $H_p(0)=(1-1/p)^m$, hence [F2] gives $G_2(0)=(W/\varphi(W))^m$. This is a new direct bound on the explicit factors, not a change to a previously supplied norm hypothesis. [F2, F6, F9, step 2.1, algebra]

3.3 The finite product $G_0=\prod_{p>w}(1+\lambda_p)$ is supported on primes dividing $\Delta$ in the parallel case and is1 in boxes. At zero, grouping the three memberships of each index gives coefficient $-1$ for that index, so $E_p(0)$ is the proportion avoiding all roots, namely $1-r_p/p$ with $r_p$ the number of distinct $v_i$ classes. Since $A_p(0)=m/p$, $\lambda_p(0)=(m-r_p)/p$. On the radius-$2d_0$ polydiscs the bound in step 2.1 and [F6] give $|\partial^\alpha\lambda_p|\le C_mp^{-3/4}\le C_mp^{-2/3}$ for $|\alpha|\le m$. Separately the direct undifferentiated bound on $U_\sigma$ is $C_mp^{-5/6}$. Choose one large $C_m$, and put $P_\Delta=\prod_{p>w,p\mid\Delta}(1+C_mp^{-1/2})$. Normalize each factor by its corresponding factor of $P_\Delta$. Its undifferentiated modulus is at most1, and each positive-order derivative is at most $C_mp^{-2/3}$. Group $j$ ordered differentiations by the nonempty blocks landing on the same prime. For $l$ touched primes their summed products are at most $C_m(\sum_{p>w,p\mid\Delta}p^{-2/3})^l$; the finitely many partitions of the $j\le m$ operations contribute only $C_m$. Increasingly ordered distinct primes satisfy $p_a\ge a+1$, so this sum is at most $3(1+r)^{1/3}$, where $r$ counts the exceptional primes. Thus $$\|G_0\|_{C^j}\le C_mP_\Delta(1+r)^{j/3},\qquad G_0(0)=\prod_{p>w,p\mid\Delta}\left(1+\frac{m-r_p}{p}\right)\le P_\Delta.$$ Repeated differentiations at one prime use one decaying prime weight for that block, not one for each operation. These bounds include $j=0$ and $r=0$. [F1, F6, F9, step 1.1, step 2.1, algebra]

3.4 For a DISTINCT $C^0$ envelope use the direct bound $|\lambda_p|\le C_mp^{-5/6}$ on $U_\sigma$: $$\|G_0\|_{C^0}\le\exp\left(C_m\sum_{a=1}^r(a+1)^{-5/6}\right)\le\exp(C_m(1+r)^{1/6}).$$ Also $\Delta\le(2X^2)^{m(m-1)/2}$ in the parallel case. Its distinct exceptional primes have product at least $2^r$ and dividing $\Delta$, so $r\le C_m\log X=C_{m,k}L$ for large $X$. For $m=1$ or $\Delta=1$ one has $r=0$ and $G_0=1$ exactly; in boxes set $r=0$, $P_\Delta=1$. [F1, F9, F10, step 2.1, algebra]

4.1 On a compact subset of $\operatorname{Re}z_i,\operatorname{Re}z'_i>0$, bound those real parts below by $c>0$. Every nonconstant monomial of $E_p$ has density at most $1/p$ and at least one variable exponent, so $|E_p-1|\le C_mp^{-1-c}$ for $p>w$. This proves absolute locally uniform convergence of $F=\prod_pE_p$. Taking finite prime products of the exact identities $E_p=(1+\lambda_p)B_pH_p$ for $p>w$ and $E_p=1$ otherwise, then their convergent limits, gives $$F=G_0G_1G_2\prod_i\frac{\zeta(1+z_i+z'_i)}{\zeta(1+z_i)\zeta(1+z'_i)}$$ by [F3]. The construction uses the actual mixed local densities, not a residue1 theorem asserted at another scope. [F3, F5, F9, F10, step 3.1, step 3.2, step 3.3, step 2.2, algebra]

4.2 Set $G=G_0G_1G_2$. The finite product rule and steps 3.1–3.4 give $$\|G\|_{C^j}\le C_m e^{C_mw^{1/(4m)}}(1+r)^{j/3}P_\Delta,\qquad \|G\|_{C^0}\le\exp(C_m[1+w^{1/(4m)}+(1+r)^{1/6}]).$$ Since $w\le C_0\log\log X=O_{k,C_0}(\log L)$ and $r\le C_{m,k}L$, the second expression is at most $\exp(C_{m,k,C_0}L^{1/3})$ for large $X$. All higher norms through $m$ are finite. Restrict $U_\sigma$ to the original contour domain with every real part less than100; the holomorphy and both norm budgets remain valid, with $\sigma=1/(12m)<1/(6m)$. The large-prime weight in the derivative budget is not substituted for the separate small $C^0$ envelope. [F8, F9, step 3.1, step 3.2, step 3.3, step 3.4, algebra]

5.1 Apply [F7] to each logarithmic factor on the lines $c+it$, $c=1/L$. For a fixed tuple its absolute integrand is bounded by $a_{\mathbf d}\prod_{j=1}^{2m}e/(c^2+t_j^2)$. Each weight is continuous and has finite ordinary improper Riemann integral, and step 2.2 supplies the actual summable numerical coefficient sequence. Thus the RESTRICTED [F8] exchange applies in every finite/improper coordinate order, with canonical boxes and numerical-tail bounds. Terms with a divisor above $R$, or a divisor exactly $R$, have Mellin factorzero. Extending the finite residue expansion to these tuples therefore changes nothing after integration. Recombining signs and prime memberships gives precisely $E_p$, and step 4.1 identifies the residue expansion as $I_m(G;R)$. This uses neither CC Fubini nor a general Riemann dominated-convergence theorem. [F1, F7, F8, step 1.2, step 2.2, step 4.1, algebra]

5.2 Apply the multivariable clause of [F8] to the genuine $G$ and separate budgets in step 4.2. Its leading term is $G(0)L^m$, with derivative errors $O_m(\|G\|_{C^j}L^{m-j})$ and tail $O_{m,k,C_0}(e^{-\delta\sqrt L})$. In boxes $G_0=1$; in parallel systems $0<G_0(0)\le P_\Delta$. In both cases $G_1(0)=1+O_m(w^{-1/3})$ and $G_2(0)=(W/\varphi(W))^m$, so the leading value is the claimed asymptotic, or at most that value times $P_\Delta$, respectively. Origin factors are positive for $w>m$ by their finite avoidance formulas. [F2, F8, step 3.1, step 3.2, step 3.3, step 4.2, algebra]

6.1 Divide the errors by $P_\Delta(W/\varphi(W))^mL^m\ge P_\Delta L^m$. Since $r\le C_{m,k}L$, their derivative part is at most $C_{m,k}e^{C_mw^{1/(4m)}}\sum_{j=1}^m(1+r)^{j/3}L^{-j}\le C_{m,k}e^{C_mw^{1/(4m)}}L^{-2/3}$. Together with step 1.2 and the contour tail, a uniform relative error is bounded by $$C_{m,t,k,C_0}\left(w^{-1/3}+e^{C_mw^{1/(4m)}}L^{-2/3}+R^{-6m}L^m+L^{-m}e^{-\delta\sqrt L}\right).$$ The exponential factor is $\exp(O_{m,k,C_0}((\log L)^{1/(4m)}))=L^{o(1)}$, so this bound tends tozero in the stated joint limit. Taking absolute errors proves the box equality and parallel inequality at their full uniform scopes. Every step used a positive real auxiliary $X$, actual finite integer intervals and unqualified suppliers; no primality of $X$, arbitrary-order cyclic bound or theorem import was needed. [F2, F8, F9, step 1.2, step 3.4, step 4.2, step 5.1, step 5.2, algebra] ∎
