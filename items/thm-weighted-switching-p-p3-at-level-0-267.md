---
id: thm-weighted-switching-p-p3-at-level-0-267
kind: theorem
title: "Reported conditional prime–P3 switching criterion at level 0.267"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-weighted-switching-level-hypotheses
  - thm-linear-sieve-fundamental-lemma
  - thm-chebyshev-prime-counting-bounds
  - thm-second-mertens-theorem-for-primes
  - lem-geometric-convergence-to-the-optimal-linear-sieve-functions
  - thm-choice-free-siegel-walfisz-from-mobius-cancellation
  - thm-third-mertens-theorem-for-primes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Kaisa Matomäki and Sebastian Zúñiga-Alterman, Weighted sieves with switching, Theorem 3.2 and Section 7"
      url: "https://arxiv.org/pdf/2405.19063v3"
    - title: "H.-E. Richert, Lectures on Sieve Methods, Chapters 11–13"
      url: "https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf"
---

## Statement

Matomäki and Zúñiga-Alterman state the following conditional criterion. Let
$x$ be sufficiently large, let
$\mathcal A\subseteq([1,x]\cap\mathbb Z)^2$ satisfy their original and
switched weighted-sieve hypotheses with $S=3$, $v=20$, $u=6$, the weight
$w(\alpha)=\frac12\,1_{[1/20,1/6]}(\alpha)$, and
$\theta_1=\theta_2(\alpha)=0.267$ for every
$\alpha\in[1/20,1/4]$. Suppose the two multiplicative densities agree,
$g_1=g_2$, with sizes $X_1$ and $X_2(\alpha)$ as in those hypotheses. Their
Theorem 3.2 asserts that

$$\#\{(p,n)\in\mathcal A:p\text{ is prime and }n>1 \text{ has at most three prime factors counted with multiplicity}\} \gg \frac{X_1}{\log x}.$$

This is a reported source assertion, conditional on both original and
switched distribution hypotheses; it does not assert an unconditional level
of distribution.

## Statement references

[[def-weighted-switching-level-hypotheses|Original and switched hypotheses]]

[[thm-linear-sieve-fundamental-lemma|Linear sieve input]]

Matomäki and Zúñiga-Alterman, *Weighted sieves with switching*, Theorem 3.2 and Section 7

## Facts & Assumptions

**Given:** The pair set, the parameter specialization, and the conditional source assertion in the Statement.

[F1] [[def-weighted-switching-level-hypotheses]]: Assumption A4 requires the weight $w$ to be Lipschitz, in addition to requiring the switched sequences to satisfy the stated level and density conditions.

[F2] [[thm-linear-sieve-fundamental-lemma]]: the source proof applies linear-sieve bounds only after the local-density, level, and remainder hypotheses for the relevant sequences have been verified; the general fundamental lemma is now locally proved with its source-valid $(w,z]$ dimension convention, original $u^{-u/2}$ error and explicit $u_\kappa$. The all-real-cutoff product hypothesis in [F1] implies the required orientation by taking nearby cutoffs and a finite-set limit. This does not supply the specialized finite-level linear-sieve functions or repair the discontinuous profile in [A1].

[F3] [[thm-chebyshev-prime-counting-bounds]] supplies two-sided $x/\log x$ prime-count bounds.

[F4] [[thm-second-mertens-theorem-for-primes]] supplies the reciprocal-prime asymptotic.

[F5] [[lem-geometric-convergence-to-the-optimal-linear-sieve-functions]] supplies the defining differential equations and initial formulas for the sharp linear-sieve functions $F,f$.

[F6] [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] supplies the unqualified full von Mangoldt estimate at modulus one with every fixed logarithmic saving. Removing prime powers and applying partial summation gives the prime number theorem used below.

[F7] [[thm-third-mertens-theorem-for-primes]] supplies the standard prime product asymptotic, used only in the explicit nonvacuity example.

[A1] [[def-weighted-switching-level-hypotheses]]: the printed step profile in the Statement is discontinuous, so this specialization does not literally satisfy the stated Lipschitz hypothesis. The calculation below proves the boundary estimates under the explicit numerical A1/A4/A5 conditions with an independently fixed correction coefficient; it does not silently assume that the source hypotheses are consistent.



## Partial proof of boundary terms

**Proof technique:** a finite boundary calculation; later sections give further partial results.

1.1 The following boundary calculation is valid under the numerical A1/A4/A5 estimates with a fixed correction coefficient $C\ge0$, without the inconsistent Lipschitz assertion. It is a partial reconstruction only; it does not prove the full Statement. Its precise local claim is: Let $x$ tend to infinity, put $z=x^{1/20}$, $q=x^{1/6}$ and $\theta=0.267$, and let $\mathcal A\subseteq([1,x]\cap\mathbb Z)^2$. Let $a_n=\#\{p:(p,n)\in\mathcal A,\ p\text{ prime}\}$. Define $w(t)=\tfrac12\mathbf1_{[1/20,1/6]}(t)$ and $$W(n)=1-\sum_{\substack{p\mid n\\z\le p<q}}w(\log p/\log x),\quad W_P(m)=1-w(\log P/\log x)-\sum_{\substack{p\mid m\\z\le p<q}}w(\log p/\log x).$$ For a fixed $C\ge0$ and fixed integer $R\ge4$, define $b_{P,\ell}$ by the sum over $P<p_1\le2P$, $p_1m\le x$, prime $p_1$, every prime factor of $m$ larger than $p_1$, $3\le\Omega(m)\le R-1$, and $(\ell,p_1m)\in\mathcal A$, with summand $|\mu(m)|W_P(m)^++C/\log x$. Suppose the numerical A1 and A4 remainder bounds of Assumption 3.1 hold uniformly with level $\theta$ and a common multiplicative density $g$, and the numerical A5 size comparison holds uniformly for all $P\in[z,x^{1/4}]$, using this same fixed $C$; do not assume $w$ is Lipschitz. Write $X_1$ for the A1 size and $V(z)=\prod_{p<z}(1-g(p)/p)$, with the original dimension-one local-product bound.  For every dyadic block $P\in[z,x^{1/4}]$ with $P\le q\le2P$, the contribution to the switched bad sum from primes $p_1$ in this block is $o(X_1V(z))$, uniformly in $P$. If $z$ itself is prime, the contribution with $p_1=z$ is also $o(X_1V(z))$. Consequently these boundary contributions can be removed before applying the frozen-weight comparison on every remaining dyadic block. This conclusion concerns the boundary terms only; it does not assert the full switching theorem. [given, F1, F2, F3, F4]

1.2 For $P\ge z$ and $Y\le x/P$, the number of $m\le Y$ with all prime factors greater than $P$ and $3\le\Omega(m)\le R-1$ is $O(Y/\log x)$. Indeed $\Omega(m)\le20$ because every factor is at least $x^{1/20}$. Write $m=rd$ with $r$ its largest prime factor; then $r\ge P$ and $d$ has at most19 prime factors, all at least $z$. For each such $d$, F3 gives $\#\{r\le Y/d\}\ll(Y/d)/\log x$ whenever the range is nonempty. The reciprocal sum over possible $d$ is bounded by $\sum_{j=0}^{19}(\sum_{z<p\le x}1/p)^j=O(1)$ by F4. Thus the number of pairs $(p_1,m)$ in one switched block is $O(x/\log^2x)$, since F4 also gives $\sum_{P<p_1\le2P}1/p_1=O(1/\log x)$. The A5 size comparison and F3 therefore imply $X_2(P)\ll X_1/\log x$ uniformly. [given, F3, F4, algebra]

1.3 The local-product bound gives $V(z)\gg1/\log x$ and, for every fixed $0<c<1/20$, $V(x^c)\ll V(z)$. It also gives $g(p)/p\ll1/\log p$ for each sufficiently large prime $p$: apply it to an interval containing only $p$ and let its upper endpoint decrease to $p$. For all primes, $(1-g(p)/p)^{-1}$ is bounded by one constant depending only on the fixed product-bound constant. Taking logarithms of the product bound yields $\sum_{p<y}g(p)/p=O(1+\log\log y)$ and hence $\sum_{p<y}g(p)/(p-g(p))=O(1+\log\log y)$. [given, algebra]

2.1 We derive a prime-index upper bound valid for any nonnegative sequence $b_\ell$ satisfying A4 with size $X_2$, density $g$ and level $\theta$. Choose fixed $c>0$ so small that $z'=x^c<z$, $D=x^{\theta/2}$ and $\log D/\log z'$ exceeds the fixed threshold in F2, while $z'D\le x^\theta$. The primes $\ell\ge z'$ contribute at most the sifted sum, bounded by $O(X_2V(z')+\sum_{d\le D}|R_d|)$ by F2. For a prime $p<z'$, its individual contribution is contained in the sifted sum of $b_{pn}$ over $(n,\prod_{v<z',\ v\ne p}v)=1$, where $v$ ranges over primes. Apply F2 to that sequence with main size $X_2g(p)/p$ and density restricted away from $p$; if that size is zero the contribution is bounded by its remainder, and if it is positive but at most1, rescale the finite sequence before applying F2. Summing over $p<z'$ gives a main bound $O(X_2V(z')\sum_{p<z'}g(p)/(p-g(p)))$. A squarefree remainder index $e=pd\le z'D$ appears for at most $\omega(e)\le\log x/\log2$ choices of $p$, so the total remainder is $O(X_2/\log^{99}x)$ by A4. step 1.3 therefore gives $\sum_{\ell\text{ prime}}b_\ell\ll X_2V(z)(1+\log\log x)+X_2/\log^{99}x$. [given, F2, step 1.3, construct, algebra]

3.1 If $P\le q\le2P$, then $P\ge z$ and $w(\log P/\log x)=1/2$. For $p_1<q$ in the block, $W^+(p_1m)=W_P^+(m)$ because the prime $p_1$ contributes the same half weight and every prime factor of $m$ is larger. For $p_1\ge q$, no prime factor of $m$ lies below $q$, so $W^+(p_1m)=1$ and $W_P^+(m)=1/2$; this includes the upper endpoint because the original weight sum uses the strict cutoff $p<q$. Thus in all cases $|\mu(m)|W^+(p_1m)\le2(|\mu(m)|W_P^+(m)+C/\log x)$. The corresponding switched contribution is at most $2\sum_{\ell\text{ prime}}b_{P,\ell}$. By steps 1.1 and 1.2 this is $O(X_1V(z)\log\log x/\log x)+O(X_1/\log^{100}x)=o(X_1V(z))$. [given, step 1.2, step 1.3, step 2.1, algebra]

4.1 If $z$ is a prime $p_0$, the lower-endpoint contribution is bounded by $\sum_{n:p_0\mid n,\,(n,P(z))=1}a_n$. Choose $z'=x^c<z$ and $D=x^{(\theta-1/20)/2}$ with $c$ small enough for F2 and $p_0D\le x^\theta$. Apply F2 to the nonnegative sequence $a_{p_0n}$, sieving by primes below $z'$. Its main size is $X_1g(p_0)/p_0$ and its remainders are the A1 remainders at $p_0d$, since $p_0$ is outside the sieve primes. As in step 2.1, zero or small main size is handled by positivity or scaling. step 1.3 bounds the main term by $O(X_1V(z)/\log x)$, and A1 bounds the remainder by $O(X_1/\log^{100}x)$. Since $V(z)\gg1/\log x$, the endpoint is $o(X_1V(z))$. If $z$ is not prime there is no such term. [given, F2, step 1.3, construct, algebra] ∎

## Partial standard-density coefficient calculation

This corrects the archived invalid coefficient calculation: the source uses the uppercase $C_3$, which counts **at least** three rough prime factors. On the interval needed here, $C_3=c_3+c_4+c_5$, not merely $c_3$. The result below proves a coefficient inequality only in the standard density $g(p)=1$ normalization; the arbitrary-common-density comparison and the arithmetic sharp-sieve argument remain open.

Put $\theta=267/1000$, $s=20\theta=267/50$, and define
$$c_1(t)=1_{t\ge1},\qquad c_j(t)=0\ (t\le j),\qquad c_j(t)=\int_j^t\frac{c_{j-1}(u-1)}{u-1}\,du\ (t>j).$$
Writing $I=c_3$, one has $I(t)=0$ for $t\le3$ and $I(t)=\int_3^t\log(u-2)/(u-1)\,du$ for $3<t\le6$. The source defines $C_3(t)=t\omega_B(t)-c_1(t)-c_2(t)$. Since $t\omega_B(t)=\sum_{j\ge1}c_j(t)$, by the common initial value and the differential equation $(t\omega_B(t))'=\omega_B(t-1)$, it follows that $C_3(t)=c_3(t)+c_4(t)+c_5(t)$ for $t\le6$.

The sharp linear-sieve differential equations give $F(t)=2e^\gamma(1+I(t))/t$ for $0<t\le s-1$, and $f(s)=2e^\gamma s^{-1}[\log3+\int_3^{s-1}(1+I(t))dt/t]$. After cancelling $e^{\pm\gamma}$, the source's standard-density coefficients are
$$L=20\left[\frac2s\left(\log3+\int_3^{s-1}\frac{1+I(t)}t\,dt\right)-\int_{1/20}^{1/6}\frac{1+I(s-20\alpha)}{\alpha(s-20\alpha)}\,d\alpha\right],$$
$$U=2\left[\int_{1/20}^{1/6}\frac{C_3(6(1-\alpha))}{2\theta\alpha(1-\alpha)}\,d\alpha+\int_{1/6}^{1/4}\frac{C_3((1-\alpha)/\alpha)}{\theta\alpha(1-\alpha)}\,d\alpha\right].$$

The exact-integer certificate at `research/number-theory-all-141-2026-10-25-escalations/weighted-switching-boundary/positive-coefficient-work/corrected-interval-certificate.py` is a replayable exact-integer certificate. Every interval endpoint is an integer multiple of $10^{-12}$ and every multiplication and division is rounded outward. It uses the rational grid $i/8192$ on $[0,6]$ and computes lower and upper tables for $c_3,c_4,c_5$ successively. On a grid interval $[a,b]$, positivity and monotonicity give
$$\frac{c_{j-1}(a-1)}{b-1}\le\frac{c_{j-1}(u-1)}{u-1}\le\frac{c_{j-1}(b-1)}{a-1}\qquad(a\le u\le b),$$
with the analogous explicit logarithmic bound for $c_3$. For a non-grid argument, the lower value at the preceding grid point and upper value at the next grid point enclose the monotone function. Each outer integral uses 8192 equal rational subintervals, monotonicity of $I,C_3$, and positive endpoint bounds for its denominator.

Every logarithm in the table has rational argument $1\le r\le4$ and is enclosed using 12 terms of
$$\log r=2\sum_{j\ge0}\frac{y^{2j+1}}{2j+1},\qquad y=\frac{r-1}{r+1},$$
with nonnegative remainder bounded by $2y^{25}/[25(1-y^2)]$. These bounds follow from the finite geometric identity and integration. The exact replay prints:

```text
scale 1000000000000 grid 8192 outer 8192 log_terms 12
L lower/upper 3369483212660 3372257271820
U lower/upper 3340882896178 3342673807104
positive margin lower 26809405556
```

Thus $L>3369/1000$, $U<3343/1000$, and $L-U>13/500$. The certificate evaluates no published finite-computation input and makes no claim for general $g$.


## Partial general arithmetic sharp sieve

Let $q_p\in[0,1)$ and suppose, uniformly for $2\le w<z$, that
$$\prod_{w\le p<z}(1-q_p)^{-1}\le(1+C/\log w)\log z/\log w.$$
Put $V(z)=\prod_{p<z}(1-q_p)$, and let $D\ge z>2$, $s=\log D/\log z$. For a decreasing prime list $p_1>\cdots>p_r$, the upper family requires $p_1\cdots p_{i-1}p_i^3\le D$ at every odd $i\le r$, and the lower family requires it at every even $i\le r$; an admitted list has coefficient $(-1)^r$ and every other squarefree divisor has coefficient zero. Partitioning omitted lists by their first failed restricted index and summing the unrestricted alternating suffix gives the pointwise upper and lower sieve inequalities: each first-failure prefix has odd length for the upper family and even length for the lower family, and its suffix sum is zero or one. If an admitted list ends at a restricted index, its own test gives $p_1\cdots p_r\le D$; otherwise its preceding restricted test and $p_r<p_{r-1}$ give the same conclusion. The lower family admits an unrestricted one-prime list, which is still below $z\le D$. Thus these are level-$D$ weights with coefficients in $\{0,\pm1\}$.  For the lower weight use the valid zero weight when $D\le z^2$. Let $E_+(D,z)$ be its normalized upper main-term excess over $V(z)$ and $E_-(D,z)$ the normalized lower main-term deficit. The exact first-failure identities make both nonnegative. The target is
$$E_+(D,z)\le F(s)-1+O_C((\log D)^{-1/1000}),\quad E_-(D,z)\le1-f(s)+O_C((\log D)^{-1/1000}),$$
uniformly in $s\ge2$, with the lower estimate interpreted using the zero weight at $s\le2$. The proof below also establishes the upper comparison on $1<s<2$ in the scaled norm needed by the lower recursion. All constants may depend on $C$ but not on the density, finite prime set, $D$ or $z$.

### One-sided kernel

For $t_p=\log D/\log p$ put
$$\mathcal K_D[h](z)=\sum_{p<z}q_p\frac{V(p)}{V(z)}h(t_p-1).$$
If $h\ge0$ is decreasing and continuous on $[s-1,\infty)$ with $t^2h(t-1)\to0$, then
$$\mathcal K_D[h](z)\le\frac1s\int_s^\infty h(t-1)\,dt+\frac C{s\log D}\left(s^2h(s-1)+2\int_s^\infty t h(t-1)\,dt\right).\tag{K}$$
Indeed the cumulative mass of $q_pV(p)/V(z)$ as $t_p$ increases is the telescoping product ratio $V(p)/V(z)-1$, up to the harmless choice of one-sided endpoint. At all $t\ge s$ this is at most $(t/s-1)+Ct^2/(s\log D)$ by the local-product bound. Stieltjes integration by parts against decreasing $h$ gives (K); the displayed error is $\int_s^\infty t^2(-dh(t-1))$, integrated by parts. The same inequality holds for a finite prime subset.

### Exact defect recursions and boundary

The first-failure partition gives the following finite identities. For $s\ge3$,
$$E_+(D,z)=\sum_{p<z}q_p\frac{V(p)}{V(z)}E_-(D/p,p).\tag{R+}$$
For $s>2$,
$$E_-(D,z)=\sum_{p<z}q_p\frac{V(p)}{V(z)}E_+(D/p,p).\tag{R-}$$
When $D/p\le p^2$, the lower child is the zero lower weight, so its deficit is exactly one; this represents the first-index upper failure. When $s\le2$, $E_-=1$. At $1<s\le3$ the upper weight is independent of $z$ once $z\ge D^{1/3}$, since its first admissible prime obeys $p^3\le D$. If $z_0=D^{1/3}$ then, with fixed one-sided endpoint conventions,
$$1+E_+(D,z)=\frac{V(z_0)}{V(z)}(1+E_+(D,z_0)).\tag{B}$$
Endpoint rounding costs only $O_C((\log D)^{-1})$ after normalization; a real cutoff avoids rounding entirely.

Write $h_+(s)=F(s)-1$ and $h_-(s)=1-f(s)$, with $h_-=1$ on $(0,2]$. The ready geometric-convergence item proves $h_\pm\ge0$, decreasing and, for the active ranges,
$$h_+(s)=\frac1s\int_s^\infty h_-(t-1)\,dt\quad(s\ge3),\qquad h_-(s)=\frac1s\int_s^\infty h_+(t-1)\,dt\quad(s>2).\tag{H}$$
It also proves $1+h_+(s)=2e^\gamma/s$ for $s\le3$. Thus (B) has exactly the desired main-term scaling, and $E_-=h_-=1$ in the clipped range.

### Strict comparison norms

Let $\phi(s)=(s+100)^{-103}$ for $s\ge2$, $\phi_-(s)=0$ for $s\le2$ and $\phi_-(s)=\phi(s)$ for $s>2$, and
$$\phi_+(s)=\begin{cases}3\phi(3)/s,&1\le s\le3,\\\phi(s),&s\ge3.\end{cases}$$
For every $s\ge3$, the ready contraction calculation gives
$$\frac1{s\phi(s)}\int_s^\infty\phi_-(t-1)\,dt\le\frac{2987}{3264}<\frac{199}{200}.\tag{C+}$$
For every $s>2$,
$$\frac1{s\phi(s)}\int_s^\infty\phi_+(t-1)\,dt<\frac{199}{200}.\tag{C-}$$
Here is a finite verification of (C-). If $2\le s\le4$, the numerator equals
$$\phi(3)\left(3\log\frac3{s-1}+\frac{103}{102}\right).$$
For $2\le s\le3$, use $\log3<10/9$, $\log(3/(s-1))\le10/9-(s-2)/2$, and
$$\frac{\phi(3)}{\phi(s)}=\left(\frac{s+100}{103}\right)^{103}\le e^{s-3}\le\frac{5s-7}{8}.$$
The last inequality is the chord bound on $[2,3]$ using $e^{-1}<3/8$. The resulting inequality with $199/200$ reduces to positivity of
$$\frac{15}{2}s^2-\frac{50051}{1275}s+\frac{5243}{102},$$
whose discriminant is $-1706774/1625625$. If $3\le s\le4$, use $\log(3/(s-1))\le(4-s)/2$ and $e^{s-3}\le1+7(s-3)/4$; the required comparison reduces to a positive quadratic of leading coefficient $21/8$ and discriminant $-144652499/104040000$. For $s\ge4$, the ratio is $(s+100)^{103}/[102s(s+99)^{102}]$, decreasing there and bounded by $2987/3264$. The elementary numerical bounds on $e$ and $\log3$ follow from the exponential series and its finite positive tail.

The ready factorial bound on $F-f$ shows $h_+$ and $h_-$ are bounded by fixed multiples of $\phi_+$ and $\phi$, respectively, and their first moments in (K) are bounded by fixed polynomial multiples of the same norms. Consequently, for $2\le s\le16\log\log D$, the second term in (K), applied to any of $h_\pm,\phi_\pm$, is $o((\log D)^{-1/1000})$ times the applicable parent norm, uniformly in $s$.

### Large-parameter anchor and induction

Let $B\asymp_C\log z$ be the product-bound majorant. Failure at index $j$ implies $D<p_1\cdots p_{j-1}p_j^3\le z^{j+2}$, hence $j>s-2$. Dropping all restrictions, the total normalized failure tail beginning at depth $J$ is at most $B^4 2^{-J}$, by the factorial proof in the companion note. Therefore for $s\ge16\log\log D$, all sufficiently large $D$ and both signs,
$$E_\pm(D,z)\le B^4 2^{-\lfloor s-2\rfloor}\le (\log D)^{-1/1000}\phi(s)/1000.$$
The second inequality uses $B\ll_C\log D$, the fact that $(s+100)^{103}2^{-s}$ eventually decreases, and $16\log2>4+1/1000$.

Set $\eta(D)=M(\log D)^{-1/1000}$ with a fixed large $M$, and let $\kappa=999/1000$. Claim, for all sufficiently large $D$, the stronger bounds
$$E_+(D,z)\le h_+(s)+\kappa\eta(D)\phi(s)\quad(s\ge3),$$
$$E_+(D,z)\le h_+(s)+\eta(D)\phi_+(s)\quad(1<s\le3),$$
$$E_-(D,z)\le h_-(s)+\kappa\eta(D)\phi(s)\quad(s>2),$$
with $E_-=h_-=1$ at $s\le2$. Prove these simultaneously by strong induction on the level $D$, partitioned into dyadic intervals. At active recursion nodes $p<z$ and $s\ge2$, the child level $D/p>\sqrt D$, and $D/p\le D/2$, so earlier dyadic levels apply and
$$\eta(D/p)\le2^{1/1000}\eta(D)\le(1001/1000)\eta(D).$$
For the upper recursion at $s\ge3$, clipped lower children have no error, and (K), (H), (C+) give a strict factor below $\kappa$ after absorbing the $o(\eta(D))$ kernel loss. For the lower recursion at $s>2$, use the upper norm $\phi_+$ in child levels; (C-) gives a factor at most $(199/200)(1001/1000)<\kappa$, leaving the same margin. For the upper extension $1<s<3$, apply (B), the product bound and the already proved stronger upper estimate at $s=3$; the factor $3/s$ converts $\phi(3)$ exactly to $\phi_+(s)$, while $(1-\kappa)\eta(D)$ absorbs the $O_C((\log D)^{-1})$ product error. The large-parameter anchor handles $s\ge16\log\log D$.

Choose the initial large threshold so all uniform kernel losses fit the displayed strict margins. On the finite set of smaller dyadic levels, the absolute finite sieve expansion is bounded by the product bound and the norms have a positive minimum on the allowed compact parameter range; choose one $M$ large enough for all such levels. This starts the induction. Multiplying the pointwise stopped weights by any nonnegative arithmetic sequence gives the usual sharp upper and lower sieve inequalities with the unweighted remainder $\sum_{d\le D}\mu^2(d)|r_d|$, because each cubic coefficient is $0$ or $\pm1$. No special Mertens asymptotic for $q$ is used. ∎


## Partial original weighted-sieve block

Put $z=x^{1/20}$, $q=x^{1/6}$, $D=x^{267/1000}$ and $s=267/50$. Write $q_p=g(p)/p$, $V(z)=\prod_{p<z}(1-q_p)$ and $\alpha_p=\log p/\log x$. Under the numerical A1 level and product assumptions, for the exact step profile and its strict upper cutoff,

$$\sum_{(n,P(z))=1}a_nW(n)\ge X_1V(z)\left[f(s)-\frac12\int_{1/20}^{1/6}\frac{F(s-20\alpha)}\alpha\,d\alpha+o(1)\right].\tag{1}$$

The bracket is at least $e^\gamma(3369/20000)+o(1)$ by the exact standard-coefficient certificate already inlined in the parent. Indeed, $F(t)=2e^\gamma(1+I(t))/t$ on the relevant range and $f(s)=2e^\gamma s^{-1}[\log3+\int_3^{s-1}(1+I(t))dt/t]$; the bracket is exactly $e^\gamma L/20$ in the certificate's notation.

**Proof.** Expand $W$ with $z\le p<q$. The original sharp sieve gives the lower bound $X_1V(z)(f(s)+o(1))$ for the unweighted sifted term. For each prime $p$ in the subtracted sum apply the sharp upper sieve to $(a_{pn})_n$ with the same sifting cutoff $z$, level $D/p$, main scale $X_1q_p$, and density restricted to primes below $z$. Its parameter is $s-20\alpha_p\ge 2.006\ldots$, so the uniform sharp estimate applies throughout. If $X_1q_p=0$, nonnegativity bounds the individual contribution by its remainder; small positive main scales can be rescaled. Every remainder index $e=pd\le D$ appears for at most $\omega(e)\ll\log x$ different $p$, so the total error is $O(X_1/\log^{99}x)=o(X_1V(z))$. Here the dimension-one product bound gives $V(z)\gg1/\log x$.

It remains to bound the density sum. For any fixed $1/20\le a<b\le1/6$, the product bound and $q_p\le-\log(1-q_p)$ imply
$$\sum_{x^a\le p<x^b}q_p\le\log(b/a)+O((\log x)^{-1}),$$
uniformly in $a,b$. The summand $F(s-20\alpha)$ is continuous and nonnegative on the compact range; partitioning into finitely many intervals, taking their suprema, and then refining the partition gives
$$\sum_{z\le p<q}q_pF(s-20\alpha_p)\le\int_{1/20}^{1/6}\frac{F(s-20\alpha)}\alpha\,d\alpha+o(1).$$
Substitution proves (1). The possible lower prime endpoint is included exactly; the upper endpoint is excluded as in $W$. ∎

Unlike the switched term, this entire bound carries the common factor $V(z)$; no asymptotic $V(z)\sim e^{-\gamma}/\log z$ is used. Its positive bracket alone does not establish the final prime–$P_3$ count, since the switched bad contribution still has to be compared with it.


## Source defects and counterexample to the endpoint-repaired criterion

The published printed hypotheses are inconsistent at $\alpha=1/4$ because $X_2(1/4)\ge1$ while the defining switched sequence is zero. They also require a Lipschitz $w$ while Theorem 3.2 specifies a discontinuous step. In addition, A2 is written without $n\le x$; under that literal unrestricted reading, a product of $R+1$ distinct primes all larger than $x^{1/6}$ is $z$-rough and has $W(n)=1$, contradicting A2. The following is **not** a counterexample to that literal inconsistent implication. It is a counterexample to the natural nonvacuous modification that drops Lipschitz regularity for the specified step, permits $X_2(\alpha)=0$ with the zero-level identity, and interprets A2 for the relevant integers $n\le x$. No additional distribution condition is introduced.

Fix large $x$ and put $D=x^{0.267}$, $z=x^{1/20}$ and $q=x^{1/6}$. By the prime-count lower bound choose a prime $r>D$ with $r^2\le x$, and set $\ell_0=r^2$. Define

$$\mathcal A=\{(p,1):p\le x\text{ prime}\}\cup\{(\ell_0,n):1\le n\le x\}.$$

Take $g_1=g_2\equiv0$ on primes and multiplicatively extend both; set $X_1=\pi(x)$, $R=6$, $\theta_1=\theta_2=0.267$, use the exact step weight and any fixed positive numerical correction coefficient in the switched sequence. For each $P=x^\alpha$ put $X_2(\alpha)$ equal to the unrestricted weighted sum on the right of A5 before its factor $X_1/\pi(x)$. It may be zero.

* A1 holds with every remainder zero: the prime-indexed sequence is $a_n=\pi(x)1_{n=1}$, so its divisibility sum is $X_1$ for $d=1$ and zero for $d>1$. The density $g_1=0$ and its one-sided product bound are exact.
* A2 holds for $n\le x$. If $n$ is not $z$-rough, its displayed product is zero. If it is $z$-rough and has at least seven distinct prime factors, at most five of them are at least $q$: six distinct factors at least $q$ have product strictly greater than $q^6=x$. At least two distinct factors therefore lie in $[z,q)$, each carries weight $1/2$, and $W(n)\le0$.
* A3 holds with left side zero because $a_n$ is supported at $n=1$.
* For every $P$, the switched sequence is concentrated at the single composite $\ell_0$ and has mass $X_2(\alpha)$ there. Every squarefree $1<d\le D$ fails to divide $\ell_0$, because its only prime factor $r$ exceeds $D$. Its $d=1$ divisibility sum equals $X_2(\alpha)$. Hence A4 holds with zero remainder for $g_2=0$, including the zero sequence when $X_2(\alpha)=0$.
* A5 holds exactly: the construction includes every pair $(\ell_0,n)$, so the mass at $\ell_0$ is precisely the displayed unrestricted switched weight sum, and $X_1/\pi(x)=1$.

Yet the only elements of $\mathcal A$ with first coordinate prime have second coordinate $1$. Thus the requested set of pairs $(p,n)$ with $n>1$ and at most three prime factors is empty, while $X_1/\log x=\pi(x)/\log x>0$ and tends to infinity. The failure persists with all distribution errors identically zero. The construction also explains why a direct trivial switched-sum bound need not recover the missing comparison: A5 counts composite first coordinates in the switched mass even though A1 and the conclusion concern prime first coordinates.

Consequently a valid nonvacuous theorem needs an additional explicit hypothesis excluding this construction or a different statement/proof. This does not prove or disprove the literal inconsistent source implication; the reported original remains held.


## Strengthened nonvacuous conditional result

The following is a **strengthened** criterion, not the unchanged reported source theorem. It keeps the exact step weight and level 0.267, replaces the inconsistent positivity requirement by the zero-sequence convention below, and adds explicit hypotheses needed by this proof. It must not be used as a substitute for the original escalation.

Let $x\to\infty$ and take the numerical A1, A3, A4 and A5 conditions for $S=3$, $v=20$, $u=6$, $\theta_1=\theta_2=267/1000$ and $w=\frac12 1_{[1/20,1/6]}$, with a fixed positive correction coefficient in $b_{P,\ell}$. Require A2 for $n\le x$. Allow $X_2(\alpha)=0$ when the corresponding switched sequence is identically zero; in that case the level and A5 identities mean exact zero. For positive sizes retain the stated uniform errors. Let $g_1=g_2=g$, $q_p=g(p)/p$, $V(t)=\prod_{p<t}(1-q_p)$, and assume, for fixed $\delta>0$,

$$X_1\ge\pi(x)x^{1/2+\delta},\qquad \frac{V(x^{1/2})}{V(x^{1/20})}\le\frac1{10}+o(1).\tag{A6-A7}$$

Then
$$\#\{(p,n)\in\mathcal A:p\text{ prime},\ n>1,\ \Omega(n)\le3\}\gg_{C,\delta}\frac{X_1}{\log x}.$$
The constants may depend on the fixed product-bound constant $C$, the uniform A1–A5 constants and $\delta$. These new hypotheses are not asserted by the source.

### Proof

1. Put $z=x^{1/20}$, $q=x^{1/6}$ and $V_z=V(z)$. The general-density original-block calculation gives
$$\Sigma_1:=\sum_{(n,P(z))=1}a_n W(n)\ge X_1V_z\left(\frac{e^\gamma L}{20}+o(1)\right),$$
where the exact integer certificate gives $L>3369/1000$. This requires no Mertens normalization of $V_z$.

2. Let $B_P$ be the unrestricted weighted sum in A5 without its factor $X_1/\pi(x)$. For any dyadic block, $b_{P,\ell}\le B_P$. Each contributing integer $n=p_1m$ has a uniquely determined least prime $p_1$ and hence at most one block; its summand is at most $1+C_w/\log x$. Thus $\sum_P B_P\ll x$. In fact $\sum_P B_P\ll x/\log x$: every contributing $n$ is $z$-rough; split off its largest prime and sum over at most 19 remaining prime factors, using Chebyshev and $\sum_{z<p\le x}1/p=O(1)$. The same argument controls the correction $C_w/\log x$, whose total contribution is $O(x/\log^2x)$.

3. The small prime first coordinates contribute at most
$$\sum_P\sum_{\substack{\ell<x^{1/2}\\\ell\text{ prime}}}b_{P,\ell}\le x^{1/2}\sum_PB_P\ll x^{3/2}/\log x=o(X_1V_z).$$
The final relation follows from A6, $\pi(x)\gg x/\log x$, and the dimension bound $V_z\gg1/\log x$. The $n=1$ contribution is at most $\pi(x)=o(X_1V_z)$ for the same reason. These are the two uses of the new size condition.

4. For $\ell\ge x^{1/2}$ prime, apply the general upper sharp sieve to each switched sequence with cutoff $x^{1/2}$ and level $x^{0.267}$. Its parameter is $2\theta=0.534$, and $F(2\theta)=e^\gamma/\theta$. Although the lower-weight construction needs level at least cutoff, the upper weight has first-prime cutoff $D^{1/3}$ and hence is unchanged as the cutoff grows past $D^{1/3}$. Comparing its already-proved $s=3$ bound to the actual cutoff by the one-sided product bound gives the same upper formula for every fixed $s>0$, including $0.534$. The summed A4 remainders are $O((\sum_PX_2(P))/\log^{100}x)$, hence $o(X_1V_z)$ by A5 and step 2. Uniform A5 and the finite rough-count calculation in step 5 yield
$$\Sigma_2\le\frac{e^\gamma}{\theta}V(x^{1/2})\sum_PX_2(P)+o(X_1V_z)\le\frac{e^\gamma U}{2}X_1V(x^{1/2})+o(X_1V_z),$$
where $U<3343/1000$ is the exact certificate's upper coefficient. The possible block crossing $q$ and the lower endpoint $p_1=z$ have already been bounded by $o(X_1V_z)$ in the boundary proof; all other blocks have the exact frozen step weight.

5. For completeness, the finite rough-count input in step 4 is as follows. In a block with $p_1<q$, positivity of the step weight forces all prime factors of $m$ to be at least $q$, and the weight is $1/2$; if $p_1\ge q$, it is at most $1$ and all factors of $m$ exceed $p_1$. Write $\alpha=\log p_1/\log x$ and $\beta=\max(1/6,\alpha)$. For $Y=x^{1-\alpha}$ and $y=x^\beta$, the number of $y$-rough $m\le Y$ with $\Omega(m)\ge3$ is
$$\frac{Y}{\log Y}\left(C_3\!\left(\frac{1-\alpha}{\beta}\right)+o(1)\right)$$
uniformly on the fixed compact parameter range. Here $C_3=c_3+c_4+c_5$ and the $c_j$ are the finite recurrences in the coefficient certificate; higher $j$ vanish because $(1-\alpha)/\beta<6$. This count follows by induction on $j$: split off the smallest prime $p\in[y,Y^{1/j}]$, discard repeated primes at cost $O(Y/y)$, use the unqualified prime number theorem from [F6] uniformly at positive-power scales, and perform finite partial summation. Near the boundary $p=Y^{1/j}$, a strip of relative logarithmic width $O(\log\log x/\log x)$ is $o(Y/\log Y)$. The induction yields exactly $c_j(t)=\int_j^t c_{j-1}(u-1)/(u-1)\,du$. Summing the outer prime $p_1$ by the same partial summation gives the two certificate integrals and
$$\sum_PB_P\le\frac{\theta U}{2}\frac{x}{\log x}+o(x/\log x).$$
The finite upper limit $\Omega(m)\le R-1$ and the squarefree condition were dropped only to increase this bound; the positive correction was $o(x/\log x)$ by step 2.

6. By A7, steps 1 and 4 give
$$\Sigma_1-\Sigma_2\ge\frac{e^\gamma}{20}(L-U+o(1))X_1V_z.$$
The local exact-integer replay gives $L-U>13/500$. The squareful contribution is at most the A3 bound $X_1/\log^2x=o(X_1V_z)$; the $n=1$ term and boundary blocks are negligible by steps 3–4. A2 removes positive contributions from integers with too many distinct prime factors. For the remaining squarefree $n$, the usual switching partition has one least prime and subtracts every positive weight with $\Omega(n)\ge4$; $W(n)\le1$ on the desired terms. It follows that the desired pair count is at least a fixed positive multiple of $X_1V_z$, which is $\gg X_1/\log x$. ∎

### Nonvacuity

Take $\mathcal A=([1,x]\cap\mathbb Z)^2$ and $g(p)=1$ for every prime. Then $a_n=\pi(x)$ and $X_1=x\pi(x)$. Every switched sequence is constant in $\ell$ with value $B_P$, so $X_2(P)=xB_P$ and A5 is exact. A1 and A4 have total divisor-floor error $O(D/x)$ relative to their respective sizes, including exact zero for empty blocks. A2 holds for $n\le x$ with $R=6$, as in the counterexample note, and A3 follows from $\sum_{p\ge z}p^{-2}\ll z^{-1}$. The prime product formula [F7] gives A7 with equality in the limit, and A6 holds for any fixed $0<\delta<1/2$.


## Proof status

The upper-jump dyadic block and the possible lower prime endpoint are negligible under the explicit numerical hypotheses just stated. The general arithmetic sharp linear-sieve estimates have been reconstructed above. The original weighted-sieve block has also been bounded for arbitrary allowed density. The switched bad-sum comparison for arbitrary common densities $g_1=g_2$ remains unsupplied. The displayed numerical coefficient is positive in the special standard density $g(p)=1$, as proved above; this does not establish the arbitrary-density comparison. In particular §7 of the cited source substitutes the standard $g(p)=1$ product normalization although the stated assumptions allow other common densities. The source Statement remains reported and held: the strengthened conditional result above has additional hypotheses, and the endpoint-repaired numerical criterion fails by the displayed counterexample.
