---
dependency_level: 4
id: lem-halasz-completely-multiplicative-mean-bound
kind: lemma
title: "Halász mean-value bound for completely multiplicative functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-completely-multiplicative-arithmetic-function
  - def-halasz-minimal-pretentious-distance
  - lem-halasz-minimal-distance-is-well-defined
  - lem-reciprocal-prime-sum-from-mertens-first-theorem
  - lem-montgomery-vaughan-weighted-hilbert-inequality
  - def-von-mangoldt-function
  - thm-first-mertens-theorem-for-primes
  - thm-multiplicative-dirichlet-series-euler-product
  - lem-logarithmic-averaging-for-completely-multiplicative-sums
  - thm-residue-theorem-null-homologous-cycle
  - lem-chebyshev-functions-prime-power-comparison
  - thm-chebyshev-theta-linear-bounds
  - thm-fundamental-theorem-of-arithmetic
  - thm-p-series-real-exponents
  - thm-extreme-value-r
  - thm-heine-borel-characterisation-r
  - thm-holder-inequality-for-integrals
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-substitution-for-improper-integrals
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-geometric-series
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-exponential-reciprocal-and-positivity
  - cor-two-less-than-e-less-than-three
  - lem-real-power-improper-integral
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Granville and K. Soundararajan, Pretentious Multiplicative Number Theory (author manuscript, 2011)"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
    - title: "Andrew Granville, Adam J. Harper, and K. Soundararajan, A New Proof of Halász’s Theorem, and Its Consequences"
      url: "https://discovery.ucl.ac.uk/id/eprint/1568743/1/Granville%20HalaszActualPaperRevision.pdf"
---

## Statement

Let $g:\mathbb Z_{>0}\to\mathbb C$ be completely multiplicative, meaning
$g(1)=1$ and $g(mn)=g(m)g(n)$ for all positive integers $m,n$, and assume
$|g(n)|\le1$ for every $n\ge1$. For real $x\ge3$ and $T\ge1$, put

$$ M(g;x,T):=\min_{|t|\le T}\sum_{p\le x}\frac{1-\operatorname{Re}(g(p)p^{-it})}{p},\qquad p^{-it}:=\exp(-it\log p). $$

There is an absolute constant $C$ such that

$$ \frac1x\left|\sum_{n\le x}g(n)\right|\le C\left((1+M(g;x,T))e^{-M(g;x,T)}+\frac1T+\frac{\log\log x}{\log x}\right). $$

## Statement references

[[def-completely-multiplicative-arithmetic-function]]

[[def-halasz-minimal-pretentious-distance]]

[Granville and Soundararajan, *Pretentious Multiplicative Number Theory*, §6.1–§6.5, PDF pp. 38–44](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)

[Granville, Harper, and Soundararajan, “A New Proof of Halász’s Theorem,” Theorem 1.1 and §2.3, PDF pp. 2, 11–12](https://discovery.ucl.ac.uk/id/eprint/1568743/1/Granville%20HalaszActualPaperRevision.pdf)


## Facts & Assumptions

**Given:** The function $g$ and real parameters $x\ge3$, $T\ge1$ in the Statement. Constants below are absolute and independent of the function and all parameters.

[F1] Completely multiplicative prime values extend uniquely by prime factorization, and their absolutely convergent Dirichlet series has its prime Euler product ([[def-completely-multiplicative-arithmetic-function]], [[thm-fundamental-theorem-of-arithmetic]], [[thm-multiplicative-dirichlet-series-euler-product]]).

[F2] $\sum_{p\le x}1/p=\log\log x+O(1)$ ([[lem-reciprocal-prime-sum-from-mertens-first-theorem]]).

[F3] The finite weighted Hilbert inequality holds with an absolute constant ([[lem-montgomery-vaughan-weighted-hilbert-inequality]]).

[F4] If $S(y)=\sum_{n\le y}g(n)$, then $|S(x)|\ll x(1+\int_1^x|S(y)|\,dy/y^2)/\log x$ ([[lem-logarithmic-averaging-for-completely-multiplicative-sums]]).

[F5] $\Lambda(p^k)=\log p$ on prime powers and vanishes otherwise; $\psi(y):=\sum_{n\le y}\Lambda(n)\ll y$ for $y\ge1$. The latter follows by combining the linear theta bound with the prime-power comparison and enlarging the constant on a bounded interval ([[def-von-mangoldt-function]], [[thm-chebyshev-theta-linear-bounds]], [[lem-chebyshev-functions-prime-power-comparison]]).

[F6] If $\Omega\subseteq\mathbb C$ is open, $f$ is meromorphic on $\Omega$ with pole set $S$, and a cycle $\Gamma$ satisfies $\Gamma^*\subseteq\Omega\setminus S$ and is null-homologous in $\Omega$, then
$$\int_\Gamma f(z)\,dz=2\pi i\sum_{a\in S}n(\Gamma,a)\operatorname{Res}(f,a)$$
with only finitely many nonzero terms ([[thm-residue-theorem-null-homologous-cycle]]).

[F7] The distance minimum is attained and nonnegative ([[def-halasz-minimal-pretentious-distance]], [[lem-halasz-minimal-distance-is-well-defined]]).

[F8] Every closed bounded real interval is compact, and a continuous real-valued function on a nonempty compact set attains its maximum ([[thm-heine-borel-characterisation-r]], [[thm-extreme-value-r]]).

[F9] Hölder's integral inequality at $p=q=2$ gives $\int |uv|\le(\int |u|^2)^{1/2}(\int |v|^2)^{1/2}$ when the two square integrals are finite ([[thm-holder-inequality-for-integrals]]).

[F10] Dominated convergence passes pointwise limits through an integral under an integrable majorant ([[thm-dominated-convergence]]).

[F11] Tonelli's theorem applies to nonnegative measurable functions on sigma-finite products ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F12] The natural logarithm is inverse to the real exponential, strictly increasing, satisfies the product law, has derivative $1/x$, and equals $\int_1^x dt/t$; the usual change of variables is valid on the compact intervals used below ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[thm-substitution-for-improper-integrals]]).

[F13] For $u\ge0$, the real exponential series gives $e^u\ge1+u$; for $0<r<1$, $\sum_{k\ge0}r^k=(1-r)^{-1}$ ([[def-real-exponential-function-and-e]], [[thm-geometric-series]]).

[F14] The real exponential satisfies $e^{u+v}=e^ue^v$, is positive, and $e^{-u}=1/e^u$ ([[thm-complex-exponential-addition-and-real-extension]], [[cor-exponential-reciprocal-and-positivity]]).

[F15] The numerical bound $2<e<3$ holds ([[cor-two-less-than-e-less-than-three]]).

[F16] For $c>0$ and $M\ge1$, the improper integral used in step 2.2 is $\int_M^\infty y^{-2c-1}\,dy=M^{-2c}/(2c)$: substitute $u=1/y$, then scale the resulting $u^{2c-1}$ integral to $[0,1]$ and apply the real-power improper-integral formula ([[lem-real-power-improper-integral]], [[thm-substitution-for-improper-integrals]]).

[F17] The series $\sum_{n\ge2}n^{-3/2}$ converges ([[thm-p-series-real-exponents]]).

[F18] For real $t$ and positive integer $n$, $|n^{-it}|=1$ under the convention $n^{-it}:=\exp(-it\log n)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

1.1 It suffices to take $L:=\log x\ge2$. On the remaining interval $3\le x\le e^2$, [F15] gives $\log x\ge\log3>\log e=1$, so $q(x):=\log\log x/\log x>0$. Also $\log x\le2$ and $\log\log x\ge\log\log3$, hence $q(x)\ge\tfrac12\log\log3>0$. The left side is at most $1$, so increasing the absolute constant covers this range. Set $T_0:=\min(T,L^2)$ and $H:=T_0/2\ge1/2$. Define a completely multiplicative $a$ by $a(p)=g(p)$ for $p\le x$ and $a(p)=0$ for $p>x$. Then $a(n)=g(n)$ for $n\le x$, $|a(n)|\le1$, and $M(a;x,U)=M(g;x,U)$ for every $U$. Write $S(y)=\sum_{n\le y}a(n)$, $B(y)=\sum_{n\le y}a(n)\log n$, and
Using the convention $n^{-s}:=\exp(-s\log n)$ for positive integers $n$ and complex $s$, put
$$ F(s):=\sum_{n\ge1}\frac{a(n)}{n^s}=\prod_{p\le x}(1-a(p)p^{-s})^{-1}. $$
This series and its differentiated series converge absolutely on $\operatorname{Re}s\ge1$: finite products of the convergent geometric series, also differentiated, show this directly. By [F2], $\sum_n|a(n)|/n\le\prod_{p\le x}(1-1/p)^{-1}\ll L$. Indeed, for $0\le u\le1/2$, [F12] gives
$$-\log(1-u)-u=\int_0^u\frac{s}{1-s}\,ds\le u^2,$$
so the logarithm of the product is $\sum_{p\le x}1/p+O(\sum_{n\ge2}n^{-2})=\log L+O(1)$ by [F2], [F17], and comparison. [F1, F2, F12, F17, construct, algebra]

2.1 We record an elementary integral identity rather than assume a mean-square theorem. Fix $c>0$ and real $v$. For $R>2c$, let $\Gamma_R$ consist of the real segment from $-R$ to $R$ followed by the upper semicircle from $R$ to $-R$ when $v\ge0$, or by the lower semicircle from $R$ to $-R$ when $v<0$. In the first case set $\Omega:=\mathbb C\setminus\{-ic\}$; in the second set $\Omega:=\mathbb C\setminus\{ic\}$. The function $z\mapsto e^{izv}/(c^2+z^2)$ is meromorphic on $\Omega$, and its only pole there is $ic$ in the first case and $-ic$ in the second. The cycle $\Gamma_R$ lies in $\Omega$ and avoids that pole. Its winding number about the omitted pole is zero, so it is null-homologous in $\Omega$ and admissible for [F6]. The residue theorem then applies. The upper contour is positively oriented and has index $1$ at $ic$; the lower contour is clockwise and has index $-1$ at $-ic$. On the selected arc $|e^{izv}|\le1$ and $|c^2+z^2|\ge R^2-c^2$, so the arc integral is $O(R/(R^2-c^2))\to0$. The retained pole has residue $e^{-cv}/(2ic)$ when $v\ge0$ and $e^{cv}/(-2ic)$ when $v<0$. Thus [F6] gives
$$ \int_{\mathbb R}\frac{e^{itv}}{c^2+t^2}\,dt=\frac\pi c e^{-c|v|}. $$
[F6, algebra]

2.2 For $0<r<1$, $(k+1)^2\le(k+1)(k+2)=2\binom{k+2}{2}$, and counting triples of nonnegative integers with sum $k$, then applying Tonelli [F11] and the geometric-series formula [F13], gives
$$\sum_{k\ge0}(k+1)^2r^k\le\frac{2}{(1-r)^3}.$$
For $0<\alpha\le1$, $r=2^{-2\alpha}=e^{-2\alpha\log2}$ satisfies $1-r\ge c\alpha$ for an absolute $c>0$, because [F13] gives $e^u\ge1+u$ and [F14] gives $e^{-u}=1/e^u$. We use this bound again below.

For a finite sequence $b_n$ put $D_b(s)=\sum b_n n^{-s}$ and $B_b(y)=\sum_{n\le y}b_n$. Expanding and applying step 2.1 with $v=\log(m/n)$ gives
$$ \frac1{2\pi}\int_{\mathbb R}\left|\frac{D_b(c+it)}{c+it}\right|^2dt=\sum_{m,n}\frac{b_m\overline{b_n}}{2c\max(m,n)^{2c}}=\int_1^\infty\frac{|B_b(y)|^2}{y^{2c+1}}\,dy. $$
The last equality follows by integrating each term from $\max(m,n)$ to infinity. The same identity holds for $b_n=a(n)\log n$ and for $b_n=a(n)\Lambda(n)$ whenever $c>1$; the two series are absolutely convergent because $a$ is supported on the finite prime set $p\le x$. For finite truncations, the left integrands are dominated by $(\sum|b_n|n^{-c})^2/(c^2+t^2)$, which is integrable by step 2.1 at $v=0$. On the right, $|B_b(y)|\le y\log(2y)$ for $b_n=a(n)\log n$, while $|B_b(y)|\le\psi(y)\ll y$ for $b_n=a(n)\Lambda(n)$ by [F5]. On each dyadic interval $[2^k,2^{k+1}]$, the corresponding right-hand majorant has integral $O((k+2)^2 2^{-2(c-1)k})$ or $O(2^{-2(c-1)k})$, respectively; both sums converge by the bound at the start of this step. Thus [F10] justifies both limit passages. No abstract Plancherel theorem is being invoked. [F5, F10, F11, F13, F14, step 2.1, algebra]

3.1 For $y\ge2$,
$$|S(y)\log y-B(y)|\le\sum_{n\le y}\log(y/n)=\int_1^y\frac{\lfloor t\rfloor}{t}\,dt\le y,$$
using $|a(n)|\le1$ and [F12]. For $2\le y\le x$, write $\ell=\log y$. Integration over $\alpha\in[1/L,1]$ gives
$$ \int_{1/L}^1y^{-2\alpha}\,d\alpha\gg\frac1{\log y}. $$
For completeness, integrate only over $[1/L,1/L+\min(1/2,1/(2\ell))]$: it lies in $[1/L,1]$, its length is at least a fixed positive multiple of $1/\ell$ since $\ell\ge\log2$, and $2\alpha\ell\le3$. By [F12],
$$\int_2^x\frac{dy}{y\log y}=\log\log x-\log\log2=O(\log L).$$
The integrand is nonnegative and product-measurable since $B$ is a step function, so Tonelli [F11] gives
$$ \int_1^x\frac{|S(y)|}{y^2}\,dy\ll\log L+\int_{1/L}^1\int_2^x\frac{|B(y)|}{y^{2+2\alpha}}\,dy\,d\alpha. $$
[F11, F12, step 1.1, algebra]

3.2 For $0<\alpha\le1$, Hölder's integral inequality [F9] bounds the inner integral in step 3.1 by
$$ \left(\int_1^xy^{-1-2\alpha}\,dy\right)^{1/2}\left(\int_1^\infty\frac{|B(y)|^2}{y^{3+2\alpha}}\,dy\right)^{1/2}\ll\alpha^{-1/2}J(\alpha)^{1/2}, $$
where, by step 2.2 with $c=1+\alpha$,
$$ J(\alpha):=\int_{\mathbb R}\left|\frac{F'(1+\alpha+it)}{1+\alpha+it}\right|^2dt. $$
The first factor squared is $O(\alpha^{-1})$: divide $[1,\infty)$ into dyadic intervals and sum $\sum_{k\ge0}2^k(2^k)^{-1-2\alpha}=\sum_{k\ge0}2^{-2\alpha k}\ll\alpha^{-1}$ using step 2.2. [F9, F13, step 2.2, step 3.1, algebra]

4.1 Logarithmically differentiating the finite Euler product gives
$$ -\frac{F'(s)}{F(s)}=\sum_{n\ge1}\frac{a(n)\Lambda(n)}{n^s}\qquad(\operatorname{Re}s>1). $$
Indeed, the geometric expansion at each prime is $\sum_{k\ge1}a(p)^k\log p/p^{ks}$; complete multiplicativity identifies its coefficients. Applying step 2.2 with $b_n=a(n)\Lambda(n)$, the right side is at most $\int_1^\infty\psi(y)^2/y^{3+2\alpha}\,dy\ll\int_1^\infty y^{-1-2\alpha}\,dy\ll1/\alpha$: dyadic intervals give the last bound by summing $\sum_{k\ge0}2^{-2\alpha k}=1/(1-2^{-2\alpha})$, with $1-2^{-2\alpha}\gg\alpha$ by [F13, F14]. This bounds the squared integral of $(F'/F)(1+\alpha+it)/(1+\alpha+it)$ over the whole line. The finite Euler product makes $t\mapsto|F(1+\alpha+it)|$ continuous; since $H>0$, [F8] shows it attains a maximum $A(\alpha)$ on $[-H,H]$. Hence the portion of $J(\alpha)$ on $|t|\le H$ is $O(A(\alpha)^2/\alpha)$. [F1, F5, F8, F13, F14, step 1.1, step 2.2, algebra]

4.2 For any finite Dirichlet polynomial $P(t)=\sum_n c_n n^{-it}$ and any interval $I$ of length $V$, expansion of $\int_I|P(t)|^2dt$ gives diagonal term $V\sum|c_n|^2$ and an off-diagonal difference of two Hilbert forms with frequencies $\log n$. If the polynomial has at most one nonzero coefficient, the off-diagonal part is zero and the claimed bound is immediate. Otherwise pad its coefficients by zeros and write it as $\sum_{n=1}^N c_n n^{-it}$ with $N\ge2$. These frequencies are distinct and have nearest spacing at least $1/(2n)$ at index $n$: for $m\ne n$, $|\log(m/n)|\ge\log(1+1/n)\ge1/(n+1)\ge1/(2n)$ by [F12]. Endpoint phases have modulus $1$, so [F3] applied to each form proves
$$ \int_I|P(t)|^2dt\ll\sum_n(V+n)|c_n|^2. $$
The same inequality passes to any series with finite right side by applying it to differences of partial sums, which are Cauchy in the interval's squared integral; for the absolutely convergent series used next the limit is its pointwise sum. [F3, F12, algebra]

4.3 Apply step 4.2 to $c_n=a(n)\log n/n^{1+\alpha}$ on each of the intervals $[kH,(k+1)H]$ and $[-(k+1)H,-kH]$, $k\ge1$. On these intervals $|1+\alpha+it|^{-2}\le(kH)^{-2}$. Grouping coefficients into $2^j\le n<2^{j+1}$, the sum of $(\log n)^2/n^{2+2\alpha}$ on block $j$ is $O((j+1)^2 2^{-j})$, while the sum of $(\log n)^2/n^{1+2\alpha}$ is $O((j+1)^2r^j)$ for $r=2^{-2\alpha}$, using $\log(2^{j+1})=(j+1)\log2$ from [F12]. Step 2.2 gives total bounds $O(1)$ and $O(\alpha^{-3})$, respectively. Summing $\sum_{k\ge1}k^{-2}<\infty$ gives
$$ \int_{|t|>H}\left|\frac{F'(1+\alpha+it)}{1+\alpha+it}\right|^2dt\ll\frac1H+\frac1{\alpha^3H^2}. $$
[F13, F17, step 2.2, step 4.2, algebra]

5.1 Combining steps 4.1 and 4.3, using $\sqrt{u+v+w}\le\sqrt u+\sqrt v+\sqrt w$, and integrating steps 3.1–3.2 gives
$$ \int_1^x\frac{|S(y)|}{y^2}\,dy\ll\log L+\int_{1/L}^1A(\alpha)\frac{d\alpha}{\alpha}+\frac1{\sqrt H}+\frac L H. $$
Here $\int_{1/L}^1\alpha^{-1/2}d\alpha\le2$ and $\int_{1/L}^1\alpha^{-2}d\alpha\le L$. Applying [F4] and dividing by $x$ therefore proves
$$ \frac{|S(x)|}{x}\ll\frac{\log L}{L}+\frac1L\int_{1/L}^1A(\alpha)\frac{d\alpha}{\alpha}+\frac1{L\sqrt H}+\frac1H. $$
Since $H=T_0/2$ and $T_0\le L^2$, the last two terms are $O(1/T_0)$. [F4, step 3.1, step 3.2, step 4.1, step 4.3, algebra]

6.1 The finite Euler product makes $t\mapsto|F(1+it)|$ continuous. Since $T_0\ge1$, [F8] shows that it attains a maximum $R:=\max_{|t|\le T_0}|F(1+it)|$. Step 2.1 with $c=\alpha$ gives the Poisson identity
$$ F(1+\alpha+it)=\frac1\pi\int_{\mathbb R}\frac{\alpha F(1+i(t+u))}{\alpha^2+u^2}\,du. $$
To justify termwise integration, the boundary series is bounded by $\sum_n|a(n)|/n<\infty$ and the Poisson kernel has integral $1$ by step 2.1 at $v=0$; dominated convergence [F10] passes the integral through its partial sums. For $|t|\le H=T_0/2$, the part where $|t+u|>T_0$ has $|u|>T_0/2$, and the Poisson kernel's mass there is $O(\alpha/T_0)$. The global boundary bound is $O(L)$ by step 1.1. Thus $A(\alpha)\le R+O(\alpha L/T_0)$. Also, dyadic grouping gives $\sum_n n^{-1-\alpha}\le\sum_{k\ge0}2^{-\alpha k}=1/(1-2^{-\alpha})\ll1/\alpha$ for $0<\alpha\le1$, since $1-2^{-\alpha}=1-e^{-\alpha\log2}\ge c\alpha$ by [F13] and [F14]; hence $A(\alpha)\ll1/\alpha$. [F8, F10, F13, F14, step 1.1, step 2.1, algebra]

6.2 For $z=a(p)p^{-1-it}$, [F18] and $|a(p)|\le1$ give $|z|\le1/p\le1/2$. Put $w=-2\operatorname{Re}z+|z|^2$, so $|1-z|^2=1+w\ge1/4$ and $|w|\le(5/2)|z|$. By [F12],
$$\log(1+w)-w=\int_0^w\left(\frac1{1+s}-1\right)ds=O(w^2),$$
with an absolute constant because $1+s\ge1/4$ between $0$ and $w$. Thus $-\log|1-z|=\operatorname{Re}z+O(|z|^2)$. Applying the real logarithm product law [F12] to the finite Euler product gives, uniformly for real $t$,
$$ \log|F(1+it)|=\operatorname{Re}\sum_{p\le x}\frac{a(p)p^{-it}}p+O(1)=\sum_{p\le x}\frac1p-\sum_{p\le x}\frac{1-\operatorname{Re}(a(p)p^{-it})}p+O(1). $$
The total remainder is $O(\sum_{p\le x}p^{-2})=O(1)$ by [F17] and comparison with $\sum_{n\ge2}n^{-3/2}$. Every factor $1-a(p)p^{-1-it}$ is nonzero, so $|F(1+it)|>0$. By [F2], [F7] and step 1.1, if $M_0:=M(g;x,T_0)$, then $R\asymp L e^{-M_0}$, with absolute comparison constants. [F2, F7, F12, F17, F18, step 1.1, algebra]

6.3 Step 6.1 and $\min(R+e,b)\le\min(R,b)+e$ for $e\ge0$ imply
$$ \int_{1/L}^1A(\alpha)\frac{d\alpha}{\alpha}\ll R\bigl(1+\log^+(L/R)\bigr)+\frac L{T_0},\qquad \log^+v:=\max(0,\log v). $$
To check all cases, choose an absolute $C$ with $A(\alpha)\le C/\alpha$ by step 6.1. Integrate $\min(R,C/\alpha)/\alpha$: if $R\le C$, its bound $R\log L$ is $O(R(1+\log^+(L/R)))$; if $C<R<CL$, split at $C/R$ to obtain $R\log(CL/R)+R-C$; and if $R\ge CL$, integration of $C/\alpha^2$ is at most $CL\le R$. These bounds give the displayed assertion with an absolute constant. By step 6.2, $R/L\ll e^{-M_0}$ and $\log^+(L/R)\le M_0+O(1)$, since $M_0\ge0$. Consequently step 5.1 gives
$$ \frac{|S(x)|}{x}\ll(1+M_0)e^{-M_0}+\frac1{T_0}+\frac{\log L}{L}. $$
[step 5.1, step 6.1, step 6.2, algebra]

7.1 The minimum over $|t|\le T_0$ is at least the minimum over $|t|\le T$, so $M_0\ge M(g;x,T)$. Put $\delta=M_0-M(g;x,T)\ge0$. By [F14], $e^{-M_0}=e^{-M(g;x,T)}e^{-\delta}$; by [F13], $e^\delta\ge1+\delta$, and $1+M_0\le(1+M(g;x,T))(1+\delta)$. Hence $(1+M_0)e^{-M_0}\le(1+M(g;x,T))e^{-M(g;x,T)}$. Also $1/T_0\le1/T+1/L^2$, while $L^{-2}\ll(\log L)/L$ for $L\ge2$. Finally $S(x)=\sum_{n\le x}g(n)$ by step 1.1. Substitute these facts in step 6.3 and include the bounded-$x$ case from step 1.1 to obtain the full stated estimate for every $x\ge3,T\ge1$. [F7, F13, F14, step 1.1, step 6.3, algebra] ∎
