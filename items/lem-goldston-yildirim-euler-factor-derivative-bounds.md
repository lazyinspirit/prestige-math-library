---
dependency_level: 1
id: lem-goldston-yildirim-euler-factor-derivative-bounds
kind: lemma
title: "Goldston–Yıldırım Euler factors and mixed derivative bounds"
status: draft
origin: session
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-countable-choice
  - def-w-trick-prime-modulus
  - thm-z-mod-p-is-a-field
  - thm-euler-totient-product-formula
  - thm-euler-product-for-riemann-zeta
  - thm-canonical-prime-factorisation
  - thm-absolute-convergence-criterion-for-complex-infinite-products
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - thm-cauchy-estimates-on-a-polydisc
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Green and Tao, The primes contain arbitrarily long arithmetic progressions, Annals 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§10, Lemmas10.1–10.3 and10.5–10.6, printed531–538; local adaptation with explicit mixed derivatives and nested domains"
---

## Statement

Assume countable choice. Fix $m\ge1$, put $\sigma=1/(12m)$, $\tau=1/(8m)$, and let $w\ge w_0(m)$ and $W=\prod_{p\le w}p$. Consider either of these integer systems $\theta_i(x)$:

1. $\theta_i(x)=W(L_i\cdot x+b_i)+1$ in $t\ge1$ variables, with $L_i\ne0$, $|L_{ij}|\le\sqrt w/2$, and no two $L_i$ rational multiples; the $b_i$ are arbitrary integers.
2. $\theta_i(x)=W(x+u_i)+1$ in one variable, with distinct integer $u_i$; put $\Delta=\prod_{i<j}|u_i-u_j|$, with $\Delta=1$ for $m=1$.

For each prime $p$ and $U\subseteq[m]$, let $\omega_U(p)$ be the proportion of points modulo $p$ satisfying $\theta_i=0$ for all $i\in U$; set $\omega_\varnothing=1$. Define
$$E_p(z,z')=\sum_{X,X'\subseteq[m]}(-1)^{|X|+|X'|}\omega_{X\cup X'}(p)p^{-\sum_{i\in X}z_i-\sum_{i\in X'}z'_i},\quad H_p(z,z')=\prod_{i=1}^m\frac{(1-p^{-1-z_i})(1-p^{-1-z'_i})}{1-p^{-1-z_i-z'_i}}.$$
In case1 put $\lambda_p=0$. In case2, for $p>w$ put
$$\lambda_p=\sum_{|X\cup X'|\ge2}(-1)^{|X|+|X'|}\omega_{X\cup X'}(p)p^{-\sum_{i\in X}z_i-\sum_{i\in X'}z'_i};$$
put $\lambda_p=0$ for $p\le w$. It vanishes unless $p\mid\Delta$. On $U_\sigma=\{\operatorname{Re}z_i,\operatorname{Re}z'_i>-\sigma\}$ the following are well-defined holomorphic products:
$$G_0=\prod_{p>w}(1+\lambda_p),\quad G_1=\prod_{p>w}\frac{E_p}{(1+\lambda_p)H_p},\quad G_2=\prod_{p\le w}H_p^{-1}.$$
The first product is finite (and equals1 in case1); the $G_1$ product converges absolutely and uniformly on this domain, as do all its complex partial derivatives through total order $m$. If $\operatorname{Re}z_i,\operatorname{Re}z'_i>0$, then $F=\prod_p E_p$ converges absolutely, locally uniformly, and
$$F=G_0G_1G_2\prod_{i=1}^m\frac{\zeta(1+z_i+z'_i)}{\zeta(1+z_i)\zeta(1+z'_i)}.$$
All assertions are uniform in the affine constants and shifts.

Let $\|\cdot\|_{C^j}$ take the supremum of all complex partial derivatives through order $j$ on $U_\sigma$. For $0\le j\le m$,
$$\|G_1\|_{C^j}\le C_m,\quad G_1(0)=1+O_m(w^{-1/3}),\quad\|G_2\|_{C^j}\le\exp(C_m w\log w),\quad G_2(0)=(W/\varphi(W))^m.$$
In case2 let $r$ count the distinct primes dividing $\Delta$ and set $P=\prod_{p\mid\Delta}(1+C_m p^{-1/2})$. Then, with a single sufficiently large $C_m$,
$$\|G_0\|_{C^j}\le C_m(1+r)^jP,\quad\|G_0\|_{C^0}\le\exp(C_m(1+r)^{1/6}),\quad G_0(0)=\prod_{p>w,\ p\mid\Delta}\left(1+\frac{m-r_p}{p}\right),$$
where $r_p$ counts distinct classes among the $u_i$ modulo $p$. Empty products, $r=0$, and $m=1$ are included. In case1 these bounds hold with $G_0=P=1$, $r=0$.

In particular, for fixed $k\ge3$, $R=N^{1/(k2^{k+4})}$, $L=\log R$, $w\to\infty$, $w\log w=o(\log\log\log N)$, and, in case2, $|u_i|\le N^2$, the factor $G=G_0G_1G_2$ satisfies
$$\|G\|_{C^0}\le\exp(C_{m,k}L^{1/3}),\qquad\|G\|_{C^j}\le C_m e^{C_m w\log w}(1+r)^jP.$$
These bounds hold for all sufficiently large $N$, uniformly in the system. They do not assert any cyclic correlation estimate.

## Facts & Assumptions

**Given:** Exactly the two classes of integer systems and the explicit finite local-density polynomials in the Statement.

[A1] [[def-countable-choice]] supplies the stated CC premise; no full AC or DC is assumed.

[F1] [[def-w-trick-prime-modulus]] defines $W$ as the product of all primes at most $w$. [[thm-z-mod-p-is-a-field]] makes each residue ring modulo a prime a field.

[F2] [[thm-euler-product-for-riemann-zeta]] gives the absolutely and locally uniformly convergent Euler product for $\operatorname{Re}s>1$. [[thm-euler-totient-product-formula]] gives $\varphi(W)/W=\prod_{p\mid W}(1-1/p)$.

[F3] [[thm-absolute-convergence-criterion-for-complex-infinite-products]] gives convergence of a product with summable absolute deviations from1, and nonvanishing when every factor is nonzero.

[F4] [[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]] gives joint holomorphy and convergence of every mixed derivative for locally uniform holomorphic limits. [[thm-cauchy-estimates-on-a-polydisc]] bounds mixed derivatives on strictly interior polydiscs by their supremum norms and inverse radii.

[F5] [[thm-canonical-prime-factorisation]] ensures that the product of the distinct prime divisors of a positive integer divides that integer, with the empty product equal to1.

## Proof

1.1 If $p\le w$, every $\theta_i$ equals1 modulo $p$, so $\omega_U(p)=0$ for nonempty $U$ and $E_p=1$. For $p>w$ in case1, some coordinate of $L_i$ is nonzero modulo $p$ because $0<|L_{ij}|\le\sqrt w/2<p$; after fixing all other coordinates its equation has exactly one solution, so $\omega_{\{i\}}=1/p$. For any pair, rational nonparallelity gives a nonzero integer $2\times2$ minor: otherwise choose a nonzero coordinate in one row and the vanishing minors make every coordinate of the other row the same rational multiple. The chosen minor has absolute value at most $w/2<p$, hence is invertible modulo $p$. Fixing the other $t-2$ coordinates leaves one solution for the chosen two coordinates, by the explicit inverse of that two-by-two matrix. Thus every density with at least two indices is at most $p^{-2}$. For $t=1$ the hypotheses permit at most one row and the pair argument is never used. In case2, $W$ is invertible modulo $p>w$, so a nonempty system has one root exactly when all its $u_i$ agree modulo $p$, and none otherwise. This proves the stated singleton densities and the support of $\lambda_p$. These arguments are finite and uniform in every affine constant. [F1, given, algebra]

2.1 Work first on $U_\tau$, which has no upper real boundary. Put $A_p=\sum_i(p^{-1-z_i}+p^{-1-z'_i}-p^{-1-z_i-z'_i})$. The terms whose union is a singleton in the exact polynomial are $-A_p$. The remaining terms in case1 have absolute value at most $C_m p^{-2+2m\tau}=C_mp^{-7/4}$. In case2 they are exactly $\lambda_p$, and $|\lambda_p|\le C_mp^{-1+2m\tau}=C_mp^{-3/4}$. Geometric expansion of the denominators of $H_p$ gives $H_p=1-A_p+O_m(p^{-2+4\tau})$. Indeed each denominator monomial has modulus at most $p^{-1+2\tau}$, and every omitted term has at least two such first-order factors; all finite cross-products have the same bound. This includes $m=1$, where degree4 rather than degree2 can occur. Since $4\tau\le1/2$, the error is $O_m(p^{-3/2})$. The factors $1-p^{-1-z_i}$, $1-p^{-1-z'_i}$, $1-p^{-1-z_i-z'_i}$ have uniform positive lower bounds, so $H_p$ and its inverse are bounded by constants depending only on $m$. [step 1.1, given, algebra]

3.1 For $w_0(m)$ large, $|\lambda_p|<1/2$ and $|H_p-1|<1/2$ for $p>w$. In case2, $$E_p-(1+\lambda_p)H_p=\lambda_p A_p+O_m((1+|\lambda_p|)p^{-3/2}).$$ Here $|A_p|\le C_mp^{-1+2\tau}$, so $|\lambda_p A_p|\le C_mp^{-2+(2m+2)\tau}\le C_mp^{-3/2}$. In case1 the corresponding difference is $O_m(p^{-3/2})$ by step2.1. Thus $B_p:=E_p/((1+\lambda_p)H_p)=1+O_m(p^{-3/2})$ uniformly on $U_\tau$. Since $\sum_{n>w}n^{-3/2}\le Cw^{-1/2}$, [F3] proves absolute product convergence. Explicitly, finite products of $1+a_p$ satisfy $|\prod(1+a_p)-1|\le\exp(\sum|a_p|)-1$; applying this to every tail proves UNIFORM convergence on $U_\tau$, with bounded partial products and uniform tail $O_m(T^{-1/2})$ after primes at most $T$. Finite partial products are jointly holomorphic, so [F4] gives a holomorphic limit $G_1$. For any point of $U_\sigma$, the polydisc of radius $\rho=(\tau-\sigma)/2$ in each coordinate lies inside $U_\tau$. Cauchy estimates there bound every derivative of the tail through order $m$ by a fixed multiple of its uniform supremum. More explicitly, the increment between successive finite prime products is the preceding product times $B_p-1$, with supremum $O_m(p^{-3/2})$ on $U_\tau$; Cauchy bounds each of its derivatives by the same summable majorant on $U_\sigma$. Thus their telescoping derivative series converge absolutely and uniformly. Consequently the derivatives converge uniformly on $U_\sigma$, $\|G_1\|_{C^j}\le C_m$, and $G_1(0)=1+O_m(w^{-1/2})$, which implies the stated weaker error $O_m(w^{-1/3})$. This uses an actual several-variable limit supplier, not a plane limit assertion. [F3, F4, step 2.1, algebra]

3.2 In case2 at zero, group the terms defining $E_p$ by $U=X\cup X'$. For each index in $U$, the three memberships $(1,0),(0,1),(1,1)$ have signs $-1,-1,+1$, summing to $-1$; their products give coefficient $(-1)^{|U|}$. Therefore $E_p(0)=\sum_U(-1)^{|U|}\omega_U(p)$, the proportion avoiding all the forbidden roots, which is $1-r_p/p$. Since $A_p(0)=m/p$, $\lambda_p(0)=(m-r_p)/p$, proving the exact $G_0(0)$ formula. On $U_\sigma$, every mixed derivative of $\lambda_p$ of order $j\le m$ is at most $C_{m,j}p^{-5/6}(\log p)^j\le C_mp^{-1/2}$: differentiate the at most $4^m$ exponential monomials, and use boundedness of $p^{-1/3}(\log p)^j$. Choose one $C_m$ for all these finitely many orders. In a derivative of $G_0$ of total order $j$, the iterated product rule gives at most $C_m(1+r)^j$ terms; each undifferentiated factor is at most $1+C_mp^{-1/2}$ and each differentiated factor is also at most that number. Their product is at most $P$, including extra primes at most $w$, whose factors are at least1. Thus $\|G_0\|_{C^j}\le C_m(1+r)^jP$. [step 1.1, step 2.1, given, algebra]

4.1 The product $G_0$ is finite by step1.1. Each factor $H_p^{-1}$ for $p\le w$ is holomorphic on $U_\tau$ and bounded there by a constant depending only on $m$, by the same denominator bounds as step2.1. There are at most $w$ factors, so $\|G_2\|_{C^0(U_\tau)}\le C_m^w$. Cauchy estimates on the radius-$\rho$ polydiscs just used yield $\|G_2\|_{C^j(U_\sigma)}\le C_{m,j}C_m^w\le\exp(C_m w\log w)$ for $j\le m$. At zero, $H_p(0)=(1-1/p)^m$, so [F2] gives exactly $G_2(0)=(W/\varphi(W))^m$. [F2, F4, step 1.1, step 2.1, step 3.1, algebra]

4.2 For the separate small-envelope bound, do not use the last derivative estimate. Directly $|\lambda_p|\le C_mp^{-5/6}$ on $U_\sigma$, so $|G_0|\le\exp(C_m\sum_{p>w,p\mid\Delta}p^{-5/6})$. Listing the $r$ distinct primes in increasing order, the $j$th is at least $j+1$. Integral comparison bounds their sum by $\sum_{j=1}^r(j+1)^{-5/6}\le C(1+r)^{1/6}$, giving the claimed envelope. If $\Delta=1$, $r=0$, all these prime products are empty and $G_0=1$ exactly. For $m=1$ the polynomial defining $\lambda_p$ is empty, $\Delta=1$, and the same conclusion holds; it does not require an exceptional-prime estimate. Case1 has $G_0=1$ by definition. [step 1.1, step 3.2, given, algebra]

5.1 On a compact subset of $\operatorname{Re}z_i,\operatorname{Re}z'_i>0$, choose $c>0$ bounding all these real parts below. In either case the finite polynomial gives $|E_p-1|\le C_mp^{-1-c}$ for $p>w$ (every nonconstant monomial has at least one variable and density at most $1/p$); this majorant is summable. Thus [F3] and the same tail estimate give absolute locally uniform convergence of $F$. The finite factor identity $E_p=(1+\lambda_p)B_pH_p$ for $p>w$ and $E_p=1$ for $p\le w$ gives $F=G_0G_1G_2\prod_pH_p$ by taking finite prime products and their convergent limits. By [F2], the last product is the displayed zeta quotient in this positive region. This establishes the exact factorization before any analytic continuation or contour use. [F2, F3, step 1.1, step 3.1, step 4.1, algebra]

6.1 Finally suppose the asymptotic parameters in the Statement hold. In case2, $\Delta\le(2N^2)^{m(m-1)/2}$, so $\log\Delta\le C_m\log N$ for large $N$. The product of its $r$ distinct prime divisors divides $\Delta$ by [F5], hence $\Delta\ge r!$. For $r\ge4$, at least $r/2$ factors in $r!$ are at least $r/2$, giving $(r/2)\log(r/2)\le C_{m,k}L$. It follows $r\le C_{m,k}L/\log L$ for large $L$: if $r\le\sqrt L$ it is immediate, and otherwise $\log(r/2)\ge\frac13\log L$ for large $L$. Bounded $r$ and $\Delta=1$ are already covered. By the finite product rule, the preceding estimates bound $\|G\|_{C^j}$ by $C_me^{C_mw\log w}(1+r)^jP$, while its C0 norm is at most $\exp(C_m[1+w\log w+(1+r)^{1/6}])$. The assumed $w\log w=o(\log\log\log N)=o(\log\log L)$ and $r=O_{m,k}(L/\log L)$ make the last exponent at most $C_{m,k}L^{1/3}$ for all sufficiently large $N$. In case1 set $r=0$, $P=1$ throughout. These are the two distinct required budgets, uniform in all constants; no finite-interval or cyclic average is deduced here. [F5, step 3.1, step 4.1, step 3.2, step 4.2, given, algebra] ∎
