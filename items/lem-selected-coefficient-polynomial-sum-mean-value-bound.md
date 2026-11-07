---
id: lem-selected-coefficient-polynomial-sum-mean-value-bound
kind: lemma
title: "Mean-Value Bound from a Rational Approximation to a Selected Coefficient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-polynomial-weyl-sum
  - def-vinogradov-mean-value-Jsk
  - thm-vinogradov-mean-value-is-solution-count
  - lem-separated-torus-exponential-sum-large-sieve
  - def-common-divisor-and-gcd
  - def-coprime
  - def-real-power
  - lem-continuous-torus-orthogonality-for-integer-frequencies
  - thm-bezout-identity
  - cor-gcd-quotients-coprime
  - def-congruence-modulo-an-integer
  - lem-divisor-bound
  - lem-geometric-progression-exponential-sum
  - thm-int-ordered-ring
  - thm-holder-finite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. C. Vaughan, The Hardy–Littlewood Method, second edition"
      url: "https://djvu.online/file/y04IjoKF754hT"
      locator: "Chapter 5 §5.2, Lemma 5.3 and Theorem 5.2 with proofs, printed pp. 63–68"
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§8, proof of Theorem 1.5, printed p. 1608"
---

## Statement

Let $k\ge2$, $N\ge1$, and $s\ge1$ be integers, let
$\boldsymbol\alpha=(\alpha_1,\ldots,\alpha_k)\in\mathbb R^k$, and let
$2\le j\le k$. Suppose $a,q\in\mathbb Z$, $q\ge1$, $\gcd(a,q)=1$,
$q\le N^j$, and $|\alpha_j-a/q|\le q^{-2}$. Define
$$f_k(\boldsymbol\alpha;N):= \sum_{x=1}^{N}e\!\left(\sum_{r=1}^k\alpha_rx^r\right),$$
$$J_{s,k-1}(2N):= \int_{[0,1]^{k-1}}\left| \sum_{x=1}^{2N}e\!\left(\sum_{r=1}^{k-1}\theta_rx^r\right) \right|^{2s}\,d\boldsymbol\theta,$$
where $e(t)=\exp(2\pi i t)$ and the integral is the ordinary multiple
Riemann integral. Also put $H_N:=\sum_{m=1}^N m^{-1}$. There is a constant
$C_{k,s}>0$, independent of $N$, $\boldsymbol\alpha$, $a$, $q$ and $j$, such
that
$$|f_k(\boldsymbol\alpha;N)|^{2s}\le C_{k,s}H_N^{2s}N^{k(k-1)/2} \left(q^{-1}+N^{-1}+qN^{-j}\right)J_{s,k-1}(2N).$$

## Statement references

[Vaughan, Chapter 5 §5.2, Lemma 5.3 and Theorem 5.2](https://djvu.online/file/y04IjoKF754hT)

[Wooley, §8, proof of Theorem 1.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[[def-common-divisor-and-gcd]]

[[def-coprime]]

[[def-real-power]]

## Facts & Assumptions

**Given:** Integers $k\ge2$, $N\ge1$, $s\ge1$, an index $2\le j\le k$, a real coefficient vector $\boldsymbol\alpha$, and a reduced approximation $a/q$ with $q\le N^j$ and $|\alpha_j-a/q|\le q^{-2}$.

[F1] [[def-polynomial-weyl-sum]]: $f_k(\boldsymbol\alpha;N)=\sum_{x=1}^{N}e(\sum_{r=1}^k\alpha_rx^r)$ with $e(t)=\exp(2\pi i t)$.

[F2] [[def-vinogradov-mean-value-Jsk]]: for positive integers $s,d$ and real $X\ge1$, $J_{s,d}(X)$ is the ordinary Riemann integral of the $2s$-th power of the degree-$d$ exponential sum over $[0,1]^d$.

[F3] [[thm-vinogradov-mean-value-is-solution-count]]: $J_{s,d}(X)$ equals the number of pairs of ordered $s$-tuples in $\{1,\ldots,\lfloor X\rfloor\}^s$ whose power sums agree in every degree $1\le t\le d$.

[F4] [[lem-separated-torus-exponential-sum-large-sieve]]: if points in $\mathbb T^d$ are separated coordinatewise at radii $\delta_t$, a trigonometric polynomial supported on $\prod_t\{1,\ldots,M_t\}$ has squared sample norm at most $C_d\prod_t(M_t+\delta_t^{-1})$ times its coefficient squared norm.

[F5] [[lem-continuous-torus-orthogonality-for-integer-frequencies]]: $\int_0^1e(n\beta)\,d\beta$ is $1$ for the integer $n=0$ and $0$ for every nonzero integer $n$.

[F6] [[lem-geometric-progression-exponential-sum]]: a sum of $N$ consecutive values of $e(n\beta)$ has modulus at most $\min(N,(2\|\beta\|_{\mathbb T})^{-1})$, with value at most $N$ when $\beta\in\mathbb Z$; also $|e(t)|=1$.

[F7] [[def-common-divisor-and-gcd]] and [[def-coprime]]: $\gcd(u,v)$ is the nonnegative greatest common divisor, and $u,v$ are coprime exactly when this gcd is $1$.

[F8] [[thm-bezout-identity]]: if $u,v$ are coprime integers, there exist integers $x,y$ with $xu+yv=1$.

[F9] [[cor-gcd-quotients-coprime]]: if $d=\gcd(u,v)\ne0$, the integer quotients $u/d$ and $v/d$ are coprime.

[F10] [[def-congruence-modulo-an-integer]]: $u\equiv v\pmod n$ means $n$ divides $u-v$.

[F11] [[lem-divisor-bound]]: if $d\mid n$ and $n\ne0$, then $d\ne0$ and $|d|\le|n|$.

[F12] [[thm-int-ordered-ring]]: integers are totally ordered compatibly with addition and multiplication, and a product of positive integers is positive.

[F13] [[def-real-power]]: for a positive base $x$ and real exponent $y$, $x^y=\exp(y\log x)$.

[F14] [[thm-holder-finite]]: for finite real sequences and conjugate rational exponents $p,q>1$, $\sum_\ell|a_\ell b_\ell|\le(\sum_\ell|a_\ell|^p)^{1/p}(\sum_\ell|b_\ell|^q)^{1/q}$.

## Proof

**Proof technique:** direct.

1.1 Put $L:=\min(q,N)$. Let $\mathcal M$ be any nonempty subset of $\{1,\ldots,L\}$. For $m\in\mathcal M$ and $\beta\in[0,1]$, set $$G_m(\beta):=\sum_{x=1}^{2N}e\bigl(P(x-m)+\beta x\bigr),\qquad D_m(\beta):=\sum_{y=m+1}^{m+N}e(-\beta y),$$ where $P(x):=\sum_{r=1}^k\alpha_rx^r$. Since $m\le N$, every $y$ in the second sum lies in $\{1,\ldots,2N\}$. Expanding the product and using [F5] gives $$\int_0^1G_m(\beta)D_m(\beta)\,d\beta =\sum_{y=m+1}^{m+N}e(P(y-m))=f_k(\boldsymbol\alpha;N).$$ The $N$ terms of $D_m$ are consecutive, so [F6] bounds $|D_m(\beta)|$ uniformly in $m$ by $\min(N,(2\|\beta\|_{\mathbb T})^{-1})$, with the integer case interpreted as $N$. By symmetry its integral over $[0,1]$ is twice the integral over $[0,1/2]$. The interval $[0,1/(2N)]$ contributes $1$ after doubling; for $1\le r<N$, the interval $[r/(2N),(r+1)/(2N)]$ contributes at most $1/r$ after doubling. Thus the integral is at most $1+H_{N-1}\le2H_N$ (with the empty sum $H_0=0$ when $N=1$). Averaging the identity over $m\in\mathcal M$, taking absolute values and using this uniform kernel bound yields $$|f_k(\boldsymbol\alpha;N)|\le\frac1{|\mathcal M|} \int_0^1\left(\sum_{m\in\mathcal M}|G_m(\beta)|\right) \min(N,(2\|\beta\|_{\mathbb T})^{-1})\,d\beta \le\frac{2H_N}{|\mathcal M|}\sup_{\beta\in[0,1]} \sum_{m\in\mathcal M}|G_m(\beta)|.$$ [given, F1, F5, F6, construct, algebra]

1.2 Expand $P(x-m)=\sum_{t=0}^kc_t(m)x^t$, where $$c_0(m):=\sum_{r=1}^k(-m)^r\alpha_r,\qquad c_t(m):=\sum_{r=t}^k\binom rt(-m)^{r-t}\alpha_r\quad(1\le t\le k).$$ For $y(m):=(c_1(m),\ldots,c_{k-1}(m))\in\mathbb T^{k-1}$, one has $$G_m(\beta)=e(c_0(m))F_\beta(y(m)),\quad F_\beta(y):=\sum_{x=1}^{2N}e\!\left(\alpha_kx^k+\beta x+ \sum_{t=1}^{k-1}y_tx^t\right).$$ Fix distinct shifts $m,m'\in\{1,\ldots,L\}$ and put $h=m-m'\ne0$ and $\Delta_t:=c_t(m)-c_t(m')$. With $u=-m$, $v=-m'$, the binomial formula gives, for $1\le t<k$, $$-\frac{\Delta_t}{h}=(t+1)\alpha_{t+1}+ \sum_{r=t+2}^k\binom rt\alpha_r \sum_{\ell=0}^{r-t-1}u^{r-t-1-\ell}v^\ell.$$ This is triangular in $\alpha_k,\alpha_{k-1},\ldots,\alpha_2$. For precision, write $M_{t,r}(u,v):=\binom rt\sum_{\ell=0}^{r-t-1}u^{r-t-1-\ell}v^\ell$ for $r\ge t+2$. The last equation is $B_{k-1}=k\alpha_k$, so $\alpha_k=B_{k-1}/k$. For each $r=k-1,k-2,\ldots,j$, solve the equation with index $t=r-1$: $$\alpha_r=\frac{B_{r-1}}r-\sum_{\ell=r+1}^k\frac{M_{r-1,\ell}(u,v)}r\alpha_\ell.$$ By downward induction, each $\alpha_\ell$ on the right is a rational-polynomial combination of $B_t$ with $t\ge\ell-1$, coefficient degree at most $t-\ell+1$, and denominator dividing a product of distinct integers in $\{\ell,\ldots,t+1\}$. Since $M_{r-1,\ell}$ has degree $\ell-r$, the resulting coefficient of each $B_t$ in $\alpha_r$ has degree at most $t-r+1$ and denominator dividing a product of distinct integers in $\{r,\ldots,t+1\}$. This proves the induction, starting from $\alpha_k=B_{k-1}/k$. For $r=j$, every such denominator divides $k!$, so multiplication by $k!$ clears them. Since $|u|,|v|\le N$, the resulting integer-polynomial coefficients have absolute value at most $C_kN^{t-j+1}$. Multiplying the identity by $h$ and substituting $B_t=-\Delta_t/h$ gives integer polynomials $A_{j,t}(m,m')$ with $$k!\alpha_jh=\sum_{t=j-1}^{k-1}A_{j,t}(m,m')\Delta_t.$$ For integer coefficients the distance to the nearest integer is subadditive, so $$\|k!\alpha_jh\|_{\mathbb T}\le C_k\sum_{t=j-1}^{k-1}N^{t-j+1}\|\Delta_t\|_{\mathbb T}.$$ Choose $c_k>0$ small enough that $C_kkc_k\le1/4$, and put $\delta_t:=c_kN^{-t}\le1/2$. If $\|k!\alpha_jh\|_{\mathbb T}>\tfrac12N^{1-j}$, the last inequality forces at least one $t$ with $\|y_t(m)-y_t(m')\|_{\mathbb T}=\|\Delta_t\|_{\mathbb T}\ge\delta_t$. [given, F1, F4, F6, F13, algebra, construct]

2.1 For a nonzero integer $h$ with $|h|<L\le q$, call $h$ bad if $\|k!\alpha_jh\|_{\mathbb T}\le\tfrac12N^{1-j}$. The approximation hypothesis implies $$\left\|\frac{k!ah}{q}\right\|_{\mathbb T}\le \tfrac12N^{1-j}+\frac{k!}{q}=:\rho.$$ Let $g:=\gcd(k!a,q)$, $u_0:=k!a/g$, and $q':=q/g$. By [F7], $g\ge1$; [F8] and $\gcd(a,q)=1$ show that any common divisor of $k!a$ and $q$ divides $k!$, hence [F11] gives $g\le k!$. By [F9], $u_0$ and $q'$ are coprime, and [F12] gives $q'>0$. Choose $A,B\in\mathbb Z$ with $Au_0+Bq'=1$ by [F8]. If $u_0r_1\equiv u_0r_2\pmod{q'}$, multiply this identity by $r_1-r_2$; both terms on the left are divisible by $q'$, so $q'\mid(r_1-r_2)$. Thus multiplication by $u_0$ is injective, and hence bijective, on the finite residue classes modulo $q'$. Since $q=gq'$, among any $q$ consecutive integers each of the $q'$ residues occurs exactly $g$ times under $h\mapsto u_0h\pmod{q'}$; among fewer than $2q$ consecutive integers each occurs at most $2g$ times. There are at most $2\rho q'+2$ residues $r\pmod{q'}$ with $\|r/q'\|_{\mathbb T}\le\rho$. Therefore the number of bad $h$ in any interval of fewer than $2q$ consecutive integers is at most $$2g(2\rho q'+2)=4\rho q+4g\le C_k(1+qN^{1-j}).$$ Construct a graph on $\{1,\ldots,L\}$ by joining two shifts when their difference is bad. Its degree is at most $C_k(1+qN^{1-j})$. Greedily choose a shift and delete it and all its neighbors until none remain; the resulting nonempty set $\mathcal M$ has $$|\mathcal M|\ge c_k\frac{L}{1+qN^{1-j}}.$$ No two distinct shifts in $\mathcal M$ have a bad difference, so step 1.2 shows that $\{y(m):m\in\mathcal M\}$ is separated at the radii $\delta_t$. [given, F6, F7, F8, F9, F10, F11, F12, F13, step 1.2, choose, construct, algebra]

3.1 Fix $\beta\in[0,1]$ and expand $F_\beta(y)^s$ as $$F_\beta(y)^s=\sum_{\boldsymbol n}A_\beta(\boldsymbol n)e(\boldsymbol n\cdot y).$$ Here $n_t=\sum_{i=1}^sx_i^t$ for $1\le t<k$, with $x_i\in\{1,\ldots,2N\}$, so $1\le n_t\le N_t:=s(2N)^t$. For fixed $\boldsymbol n$, $A_\beta(\boldsymbol n)$ is a sum of $R(\boldsymbol n)$ unit-modulus terms, where $R(\boldsymbol n)$ counts the $s$-tuples with those power sums. Hence $$\sum_{\boldsymbol n}|A_\beta(\boldsymbol n)|^2\le \sum_{\boldsymbol n}R(\boldsymbol n)^2=J_{s,k-1}(2N)$$ by [F3]. Apply the separated-torus estimate [F4] to the points $y(m)$ from step 2.1 with radii $\delta_t=c_kN^{-t}$. Since $$\prod_{t=1}^{k-1}(N_t+\delta_t^{-1})\le C_{k,s}N^{1+2+\cdots+(k-1)} =C_{k,s}N^{k(k-1)/2},$$ and $|G_m(\beta)|=|F_\beta(y(m))|$, it follows that, uniformly in $\beta$, $$\sum_{m\in\mathcal M}|G_m(\beta)|^{2s} \le C_{k,s}N^{k(k-1)/2}J_{s,k-1}(2N).$$ [given, F1, F2, F3, F4, F6, F12, F13, step 2.1, algebra]

4.1 Apply [F14] to the finite sequence $|G_m(\beta)|$ and the constant sequence $1$, with conjugate exponents $2s$ and $2s/(2s-1)$. Since the latter sequence has $|\mathcal M|$ terms, raising the resulting inequality to the power $2s$ and dividing by $|\mathcal M|^{2s}$ gives $$\left(\frac1{|\mathcal M|}\sum_{m\in\mathcal M}|G_m(\beta)|\right)^{2s} \le\frac1{|\mathcal M|}\sum_{m\in\mathcal M}|G_m(\beta)|^{2s}.$$ Combining steps 1.1, 2.1 and 3.1 yields $$|f_k(\boldsymbol\alpha;N)|^{2s}\le C_{k,s}(2H_N)^{2s}N^{k(k-1)/2} \frac{1+qN^{1-j}}{\min(q,N)}J_{s,k-1}(2N).$$ Absorbing the fixed factor $2^{2s}$ into $C_{k,s}$ gives the same inequality with $H_N^{2s}$. If $q\le N$, the displayed ratio is $q^{-1}+N^{1-j}\le q^{-1}+N^{-1}$; if $q>N$, it is $N^{-1}+qN^{-j}$. In either case it is at most $q^{-1}+N^{-1}+qN^{-j}$, proving the Statement. [given, F13, F14, step 1.1, step 2.1, step 3.1, algebra] ∎

