---
id: thm-classical-weyl-inequality
kind: theorem
title: "Classical Weyl Inequality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-polynomial-weyl-sum
  - def-exponential-character-e
  - thm-dirichlet-rational-approximation-with-denominator-range
  - lem-divisor-function-subpower-bound
  - lem-geometric-progression-exponential-sum
  - def-common-divisor-and-gcd
  - def-coprime
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - cor-exponential-reciprocal-and-positivity
  - thm-real-power-laws
  - thm-bezout-identity
  - cor-gcd-quotients-coprime
  - def-congruence-modulo-an-integer
  - lem-divisor-bound
  - thm-int-ordered-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring's Problem (2022 lecture notes)"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§5.1, Lemma 5.1 and complete proof, printed pp. 28–31"
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§1 comparison following Theorem 1.5, printed p. 1580"
---

## Statement

Let $k\ge2$ and $N\ge1$ be integers, let $\boldsymbol\alpha\in\mathbb R^k$,
and let $\varepsilon>0$. For every pair of integers $a,q$ with $q\ge1$,
$\gcd(a,q)=1$, $q\le N^k$, and $|\alpha_k-a/q|\le q^{-2}$,
$$|f_k(\boldsymbol\alpha;N)|\le C_{k,\varepsilon}N^{1+\varepsilon}\left(q^{-1}+N^{-1}+qN^{-k}\right)^{1/2^{k-1}}.$$
Such an approximant $a/q$ exists for each $\alpha_k$ by Dirichlet approximation
with denominator bound $N^k$. Here $f_k$ is the polynomial Weyl sum defined
with $e(t)=\exp(2\pi i t)$. Here $\gcd$ is the nonnegative greatest common
divisor, and $\gcd(a,q)=1$ means that $a$ and $q$ are coprime. The constant
$C_{k,\varepsilon}$ is independent of $N,\boldsymbol\alpha,a,q$.
In the proof, $A\ll_{\mathcal P}B$ and $A=O_{\mathcal P}(B)$ mean
$|A|\le C B$ for a constant depending only on the displayed parameters
$\mathcal P$.

## Statement references

[Assing, §5.1, Lemma 5.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Wooley, comparison following Theorem 1.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[[def-common-divisor-and-gcd]]

[[def-coprime]]

[[def-real-power]]

[[def-exponential-character-e]]

## Facts & Assumptions

**Given:** An integer degree $k\ge2$, an integer length $N\ge1$, a real coefficient vector $\boldsymbol\alpha$, a real $\varepsilon>0$, and any reduced rational approximation $a/q$ to $\alpha_k$ with $q\le N^k$ and $|\alpha_k-a/q|\le q^{-2}$.

[F1] [[def-polynomial-weyl-sum]]: $f_k(\boldsymbol\alpha;N)=\sum_{n=1}^N e(\sum_{j=1}^k\alpha_jn^j)$ with $e(t)=\exp(2\pi i t)$.

[F2] [[thm-dirichlet-rational-approximation-with-denominator-range]]: for every real $\theta$ and integer $Q\ge1$, there are coprime $a,q$ with $1\le q\le Q$ and $|\theta-a/q|\le1/(qQ)\le q^{-2}$.

[F3] [[lem-divisor-function-subpower-bound]]: for every positive integer $r$ and $\eta>0$, $d_r(m)\le C_{r,\eta}m^\eta$ for all integers $m\ge1$, where $d_r$ counts ordered $r$-factorizations.

[F4] [[def-exponential-character-e]] and [[lem-geometric-progression-exponential-sum]]: $e(t)=\exp(2\pi i t)$ and $\|t\|_{\mathbb T}$ is distance to the nearest integer; $|e(t)|=1$ for real $t$; for $t\notin\mathbb Z$ and integer $M\ge1$, $|\sum_{j=0}^{M-1}e(jt)|\le(2\|t\|_{\mathbb T})^{-1}$; for $t\in\mathbb Z$ the sum is $M$.

[F5] [[def-common-divisor-and-gcd]] and [[def-coprime]]: $\gcd(a,q)$ is the nonnegative greatest common divisor, and $a,q$ are coprime exactly when $\gcd(a,q)=1$.

[F6] [[def-real-power]]: for a positive base $x$ and real exponent $y$, $x^y=\exp(y\log x)$.

[F7] [[thm-real-power-continuity-and-derivatives]]: for every $\rho\in\mathbb R$, $x\mapsto x^\rho$ is continuous and differentiable on $(0,\infty)$, with derivative $\rho x^{\rho-1}$.

[F8] [[cor-mean-value-theorem]]: if a real function is continuous on $[x,y]$ and differentiable on $(x,y)$, its endpoint difference equals its derivative at some interior point times $y-x$.

[F9] [[cor-exponential-reciprocal-and-positivity]]: $\exp(t)>0$ for every real $t$.

[F10] [[thm-real-power-laws]]: for positive bases and real exponents, $a^{r+s}=a^ra^s$ and $(a^r)^s=a^{rs}$.

[F11] [[thm-bezout-identity]]: if two integers are coprime, there are integer coefficients whose linear combination is $1$.

[F12] [[cor-gcd-quotients-coprime]]: dividing two integers by their nonzero greatest common divisor gives coprime integer quotients.

[F13] [[def-congruence-modulo-an-integer]]: $u\equiv v\pmod n$ means that $n$ divides $u-v$.

[F14] [[lem-divisor-bound]]: if $d\mid n$ and $n\ne0$, then $d\ne0$ and $|d|\le|n|$.

[F15] [[thm-int-ordered-ring]]: integers are compatibly ordered, and a product of positive integers is positive.

## Proof

**Proof technique:** direct.

1.1 By [F2] with $Q=N^k$, at least one reduced rational pair satisfying the Statement's approximation conditions exists. Fix any pair satisfying them. If $N=1$, then $q=1$ and $|f_k(\boldsymbol\alpha;1)|=1$, while the right-hand factor in parentheses is $3^{1/2^{k-1}}$; enlarging the implied constant covers this case. Hence assume $N\ge2$ and put $K:=2^{k-1}$. [given, F1, F2, F4, F6, algebra]

1.2 Define $\Delta_hg(n):=g(n+h)-g(n)$. For an interval $I$ of at most $N$ consecutive integers, expansion of the squared sum and grouping pairs by their positive difference gives $$\left|\sum_{n\in I}e(g(n))\right|^2\le N+2\sum_{h=1}^{N-1}\left|\sum_{n,n+h\in I}e(\Delta_hg(n))\right|.$$ For each tuple $\boldsymbol h=(h_1,\ldots,h_r)\in\{1,\ldots,N-1\}^r$, define $I_{\varnothing}:=\{1,\ldots,N\}$ and recursively $$I_{h_1,\ldots,h_r}:=\{n\in I_{h_1,\ldots,h_{r-1}}:n+h_r\in I_{h_1,\ldots,h_{r-1}}\},$$ and let $S_{\boldsymbol h}$ be the sum of $e(\Delta_{h_r}\cdots\Delta_{h_1}P(n))$ over that interval, with $P(n)=\sum_{j=1}^k\alpha_jn^j$. Each $I_{\boldsymbol h}$ is an interval of at most $N$ integers. Induction on $r$ using the displayed inequality and $$\left(\sum_{\boldsymbol h\in\{1,\ldots,N-1\}^r}|S_{\boldsymbol h}|\right)^2\le N^r\sum_{\boldsymbol h}|S_{\boldsymbol h}|^2$$ gives $$|f_k(\boldsymbol\alpha;N)|^{2^r}\le C_r\left(N^{2^r-1}+N^{2^r-r-1}\sum_{\boldsymbol h\in\{1,\ldots,N-1\}^r}|S_{\boldsymbol h}|\right).$$ Indeed the base case is the first difference inequality; in the induction step each $|S_{\boldsymbol h}|^2$ is bounded by $N+2\sum_{h_{r+1}}|S_{\boldsymbol h,h_{r+1}}|$, producing the new sum coefficient $N^{2^{r+1}-r-2}$ and the error term $N^{2^{r+1}-1}$. Taking $r=k-1$ yields the corresponding bound with exponents $K-1$ and $K-k$. [given, F1, construct, algebra]

2.1 Here $k!:=\prod_{j=1}^k j$. The $(k-1)$-fold difference of $P$ is a linear polynomial whose coefficient of $n$ is $k!\alpha_k h_1\cdots h_{k-1}$: each difference lowers degree by one and multiplies the leading coefficient by the current degree and its step, while every lower-degree term becomes constant. By [F4], its sum over any remaining interval has modulus at most $$G_N(k!\alpha_k h_1\cdots h_{k-1}),\qquad G_N(t):=\begin{cases}N,&\|t\|_{\mathbb T}=0,\\ \min(N,\|t\|_{\mathbb T}^{-1}),&\|t\|_{\mathbb T}>0.\end{cases}$$ Consequently $$|f_k(\boldsymbol\alpha;N)|^K\le C_k\left(N^{K-1}+N^{K-k}\sum_{1\le h_1,\ldots,h_{k-1}<N}G_N(k!\alpha_kh_1\cdots h_{k-1})\right).$$ [given, F1, F4, step 1.2, algebra]

3.1 For any $\eta>0$, group the positive step products $m=h_1\cdots h_{k-1}\le N^{k-1}$ and apply [F3] with $r=k-1$: $$\sum_{1\le h_1,\ldots,h_{k-1}<N}G_N(k!\alpha_kh_1\cdots h_{k-1})\le C_{k,\eta}N^{(k-1)\eta}\sum_{m\le N^{k-1}}G_N(k!\alpha_km).$$ In a block of at most $q$ consecutive $m$'s, write $m=m_0+r$ with $0\le r<q$ and set $\xi_r:=k!(\alpha_k-a/q)r$. Then $$k!\alpha_km=k!\alpha_km_0+\frac{k!ar}{q}+\xi_r,\qquad |\xi_r|\le\frac{k!r}{q^2}<\frac{k!}{q}.$$ Let $g=\gcd(k!,q)$ and $q'=q/g$. Then $g\ge1$; because $q=gq'$, [F15] gives $q'>0$ (if $q'\le0$, then $gq'\le0$, contrary to $q>0$). Also $g$ divides both $k!$ and $q$ by [F5]; [F12] makes $b:=k!/g$ and $q'$ coprime. Since $q'$ divides $q$, any common divisor of $a$ and $q'$ would divide both $a$ and $q$, so [F5] makes $a$ and $q'$ coprime. By [F13], congruence modulo $q'$ identifies integers whose difference is divisible by $q'$. Applying [F11] to $(b,q')$ and $(a,q')$ gives inverses modulo $q'$, so $ba$ also has an inverse and multiplication by $ba$ permutes the residue classes modulo $q'$. Since $q=gq'$, as $r$ runs through a complete residue system modulo $q$, each residue modulo $q'$ occurs exactly $g$ times under $r\mapsto bar\pmod{q'}$. Thus the unperturbed phases form a translate of the $q'$ equally spaced points, with multiplicity $g$. A translate of this grid has at most $2q't+2$ points within distance $t$ of an integer: the near-integer set is the union of at most two arcs, and an arc of length $u$ contains at most $q'u+1$ points because the grid spacing is $1/q'$. Taking $t=2k!/q$ shows that at most $4k!/g+2$ grid points are removed; with multiplicity this is at most $4k!+2g\le6k!$ terms, since [F14] and $g\mid k!$ give $g\le k!$. Their perturbed terms contribute $O_k(N)$. For every remaining point, the perturbation has size less than $k!/q$, so the distance to the nearest integer changes by less than half the original distance and its term is at most twice the reciprocal of the grid distance. The first two remaining distances, when present, exceed $2k!/q$, so their reciprocal sum is $O_k(q')$ because $q/(2k!)=gq'/(2k!)\le q'/2$. For the $\ell$-th remaining point with $\ell\ge3$, the count bound gives distance at least $(\ell-2)/(2q')$, so the remaining reciprocal sum is $O(q'H_{q'})$, where $H_m:=\sum_{s=1}^m s^{-1}$. Multiplying by $g$ and using $q'=q/g\le q$ shows that each block contributes $O_k(N+qH_q)$. There are at most $N^{k-1}/q+1$ blocks, so $$\sum_{m\le N^{k-1}}G_N(k!\alpha_km)\ll_k\left(\frac{N^{k-1}}q+1\right)(N+qH_q).$$ [given, F3, F4, F5, F11, F12, F13, F14, F15, step 2.1, algebra]

4.1 Fix $\rho>0$. By [F6], [F7], and [F9], $x^{\rho-1}=\exp((\rho-1)\log x)>0$ and $x\mapsto x^\rho$ has positive derivative $\rho x^{\rho-1}$ on $(0,\infty)$. Thus [F8] implies it is increasing: if $0<x<y$, then $y^\rho-x^\rho>0$. For integer $q\ge1$, choose $L\ge0$ with $2^{L-1}<q\le2^L$. Each dyadic block $2^{j-1}<m\le2^j$ contributes at most $1$ to $H_q$, so $H_q\le L+1\le\sum_{j=0}^L 2^{\rho j}\le C_\rho2^{\rho L}$, where $C_\rho=(1-2^{-\rho})^{-1}$. By [F10], $2^{\rho L}=2^\rho(2^{L-1})^\rho\le2^\rho q^\rho$, so $H_q\le C'_\rho q^\rho$. Since $q\le N^k$, this gives $H_q\ll_{k,\rho}N^{k\rho}$. In step 3.1 choose $\eta=\varepsilon/(2(k-1))$ and $\rho=\varepsilon/(2k)$. Expanding the block bound then gives $$\sum_{h_1,\ldots,h_{k-1}}G_N(k!\alpha_kh_1\cdots h_{k-1})\ll_{k,\varepsilon}N^\varepsilon\left(\frac{N^k}{q}+N^{k-1}+q\right).$$ Insert this in step 2.1 and absorb $N^{K-1}$ into the $N^{-1}$ term to obtain $$|f_k(\boldsymbol\alpha;N)|^K\ll_{k,\varepsilon}N^{K+\varepsilon}\left(q^{-1}+N^{-1}+qN^{-k}\right).$$ Taking $K$-th roots and using $\varepsilon/K\le\varepsilon$ proves the claimed inequality. [given, F6, F7, F8, F9, F10, step 2.1, step 3.1, choose, algebra] ∎

