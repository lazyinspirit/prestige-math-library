---
id: ex-equispaced-runge-function-interpolation-diverges
kind: example
title: "Equispaced interpolation of Runge's function diverges"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - cor-best-polynomial-approximation-errors-vanish
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
  - def-factorial-and-falling-factorial
  - thm-geometric-series
  - thm-binomial-theorem
  - thm-binomial-closed-formula
  - lem-binomial-coefficients-symmetric-and-unimodal
  - def-canonical-natural
  - lem-of-naturals-positive
  - def-rational-power
  - lem-rational-power-laws
  - lem-rational-power-monotone
  - def-rat-order
  - lem-int-embeds-rat
  - def-integer-power
  - def-ordered-field
  - lem-of-square-positive
  - lem-of-zero-mult
  - thm-algebra-of-continuous-functions
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-complex-polynomial-degree-and-monic
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - lem-complex-modulus-of-real-embedding-equals-real-absolute-value
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Ch. 2"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Printed pp. 8–12; the explicit divergence argument is supplied here"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation"
      url: "https://fncbook.com/polyinterp/"
      locator: "Complete article, §§2.1.1 and exercises; the explicit divergence argument is supplied here"
verification:
  precheck: pass
---

## Example

Let $f(x)=1/(1+25x^2)$ on $[-1,1]$. For each integer $n\geq2$, take
the $n+1$ equispaced nodes
$$x_j=-1+\frac{2j}{n},\qquad 0\leq j\leq n,$$
let $\ell_{j,n}(x)=\prod_{k\ne j}(x-x_k)/(x_j-x_k)$, and put
$p_n(x)=\sum_{j=0}^n f(x_j)\ell_{j,n}(x)$. Then, at the evaluation
point $y_n=1-1/n$,
$$|f(y_n)-p_n(y_n)|\longrightarrow\infty .$$
Thus the uniform interpolation errors diverge, although the best polynomial
errors $E_n(f)$ tend to zero by
[[cor-best-polynomial-approximation-errors-vanish]].

## Facts & Assumptions
**Given:** An integer $n\geq2$, the equispaced nodes above, $a=1/5$, $i\in\mathbb C$ with $i^2=-1$, and $f(x)=1/(1+25x^2)$.

[F1] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]: $\mathcal P_n$, $C[-1,1]$, and $\|\cdot\|_\infty$ have the stated meanings.

[F2] [[cor-best-polynomial-approximation-errors-vanish]]: $E_n(g)\to0$ for every $g\in C[-1,1]$.

[F3] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero real polynomial of degree at most $n$ has at most $n$ distinct real roots.

[F4] [[def-real-exponential-function-and-e]] and [[lem-exponential-series-has-infinite-radius]]: $e=\sum_{k=0}^\infty1/k!$, and the series converges absolutely.

[F5] [[def-factorial-and-falling-factorial]]: $n!$ is positive and $n!=1\cdot2\cdots n$.

[F6] [[thm-geometric-series]]: $\sum_{k=1}^\infty2^{-k}=1$.

[F7] [[thm-binomial-theorem]]: $(x+y)^n=\sum_{k=0}^n\binom{n}{k}x^ky^{n-k}$ in $\mathbb R$.

[F8] [[thm-binomial-closed-formula]] and [[lem-binomial-coefficients-symmetric-and-unimodal]]: $\binom{n}{k}k!=n^{\underline{k}}$, and the central binomial coefficient is maximal.

[F9] [[def-canonical-natural]] and [[lem-of-naturals-positive]]: natural numbers and factorials in real inequalities are read through their canonical positive real images.

[F10] [[def-complex-numbers-and-arithmetic]] and [[thm-complex-numbers-form-a-field]]: $i^2=-1$, $\mathbb C$ is a field, and each complex number has unique coordinates $a+bi$; [[def-complex-polynomial-degree-and-monic]]: complex polynomials are finite coefficient lists; [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[lem-complex-conjugation-and-modulus-laws]]: $|a+bi|=\sqrt{a^2+b^2}$, modulus is multiplicative and vanishes only at zero; [[lem-complex-modulus-of-real-embedding-equals-real-absolute-value]]: complex modulus restricts to real absolute value.

[F11] Positive rational bases have rational powers as in [[def-rational-power]]. By [[lem-rational-power-monotone]], powers decrease with the rational exponent when $0<a<1$, increase when $a>1$, and increase with the positive base for a positive rational exponent. [[lem-rational-power-laws]] gives $(a^r)^s=a^{rs}$. Integer indices and natural counts embed into $\mathbb Q$ by [[lem-int-embeds-rat]], and rational comparisons use [[def-rat-order]].

[F12] For every real $x$, $x^2=0$ if $x=0$ by [[def-integer-power]] and [[lem-of-zero-mult]], while $x^2>0$ if $x\ne0$ by [[lem-of-square-positive]]. The positive integer $25$ and the real number $1$ are positive by [F9]; the ordered-field axioms [[def-ordered-field]] therefore give $1+25x^2>0$.

[F13] Every real polynomial function, including $d(x)=1+25x^2$, is continuous ([[thm-algebra-of-continuous-functions]]).

[F14] If $d$ is continuous and nowhere zero, its reciprocal is continuous on its domain ([[thm-algebra-of-continuous-functions]], claim 4). By [F12], $d(x)>0$ for every real $x$, so $f=1/d$ belongs to $C[-1,1]$.

## Proof

1.1 For $0\leq j<n$, $x_{j+1}-x_j=2/n>0$, so the nodes are distinct. Each product $\ell_{j,n}(x)$ has $n$ linear factors and degree at most $n$; at $x_j$ all its factors equal $1$, while at any other node $x_k$ the factor indexed by $k$ is zero. Thus $p_n\in\mathcal P_n$ and $p_n(x_j)=f(x_j)$. Define $\omega_n(x)=\prod_{j=0}^n(x-x_j)$ and for nodal data define the complex-linear Lagrange map $J_ng=\sum_jg(x_j)\ell_{j,n}$. For non-real $z$, put $g_z(x)=1/(x-z)$ and $q_{n,z}(x)=(1-\omega_n(x)/\omega_n(z))/(x-z)$. The denominator is nonzero because the roots of $\omega_n$ are real and $\mathbb C$ is a field [F10]. Expanding $\omega_n(x)-\omega_n(z)$ termwise and using $x^k-z^k=(x-z)\sum_{r=0}^{k-1}x^{k-1-r}z^r$ shows $q_{n,z}$ is a complex polynomial of degree at most $n$; at each node $x_j$ it equals $1/(x_j-z)$. The difference $q_{n,z}-J_ng_z$ is a complex polynomial of degree at most $n$ with $n+1$ distinct real roots. By unique complex coordinates [F10], its real and imaginary coefficient polynomials are real polynomials; both vanish at all the nodes, so [F3] forces both to be zero. Since $g_z-q_{n,z}=\omega_n(x)/((x-z)\omega_n(z))$, this proves $g_z(x)-J_ng_z(x)=\omega_n(x)/((x-z)\omega_n(z))$ for real $x$. [given, F1, F3, F10, construct, algebra]

1.2 At $y_n=1-1/n$, direct multiplication gives $|\omega_n(y_n)|=\prod_{k=1}^n(2k-1)/n^{n+1}=\binom{2n}{n}n!/(2^n n^{n+1})$. By [F8], $\binom{2n}{n}$ is the largest of the $2n+1$ binomial coefficients, and [F7] says their sum is $4^n$, so $\binom{2n}{n}\geq4^n/(2n+1)$. Also $e<3$: for $k\geq2$, $k!=2\cdot3\cdots k\geq2^{k-1}$ because each of these $k-1$ factors is at least $2$, with strict inequality for $k\geq3$; therefore [F4]–[F6] give $e=2+\sum_{k=2}^\infty1/k!<3$. By [F8], $\binom nk k!=n(n-1)\cdots(n-k+1)\leq n^k$, hence $\binom nk/n^k\leq1/k!$; applying [F7] gives $(1+1/n)^n\leq\sum_{k=0}^n1/k!<e<3$. Induction then yields $n!\geq(n/3)^n$: it holds at $n=1$, and the ratio of successive values of $n!/(n/3)^n$ is $3/(1+1/n)^n>1$. Therefore $|\omega_n(y_n)|\geq(2/3)^n/[n(2n+1)]$. [given, F4, F5, F6, F7, F8, F9, algebra]

1.3 The positive node radii form an arithmetic progression in $(0,1]$ of spacing $\delta=2/n$; for even $n$ there is also the central node $0$. Pairing $r,-r$ in $\omega_n(ia)$ gives the factor $| (ia-r)(ia+r) |=a^2+r^2$ by [F10], and the even-grid central factor is $|ia|=a\leq1$. Each bin has length $1/4$, and the radius progression begins within $\delta$ of $0$ and ends at $1$. Thus for each bin its endpoint gaps are at most $\delta$ and its internal gaps equal $\delta$: if it contains $m_b\geq1$ radii, its length lies between $(m_b-1)\delta$ and $(m_b+1)\delta$; if it contains none, its length is at most one progression gap, so the same count bounds hold. Therefore $n/8-1\leq m_b\leq n/8+1$. Partition the radii into $(0,1/4],(1/4,1/2],(1/2,3/4],(3/4,1]$. The paired factors in these bins are bounded above by $B_1=41/400$, $B_2=29/100$, $B_3=241/400$, and $B_4=26/25$. By [F11], for $b=1,2,3$ the bound $B_b<1$ and $m_b\geq n/8-1$ imply $B_b^{m_b}\leq B_b^{n/8-1}$; for $b=4$, $B_4>1$ and $m_4\leq n/8+1$ imply $B_4^{m_4}\leq B_4^{n/8+1}$. Multiplying these bounds and the central factor gives $|\omega_n(ia)|\leq A(B_1B_2B_3B_4)^{n/8}$, where $A=B_1^{-1}B_2^{-1}B_3^{-1}B_4$. Direct rational multiplication gives $B_1B_2B_3B_4<1/50<(5/8)^8$; base monotonicity and the iterated-power law in [F11] then give $(B_1B_2B_3B_4)^{n/8}<(5/8)^n$. [given, F1, F10, F11, algebra]

2.1 With $a=1/5$, direct subtraction gives $f(x)=\frac{a}{2i}(1/(x-ia)-1/(x+ia))$, and the finite Lagrange sum is complex-linear by field distributivity [F10], so it preserves the identity. Since $x_{n-j}=-x_j$, reindexing the factors gives $\omega_n(-x)=(-1)^{n+1}\omega_n(x)$; thus $\omega_n$ is odd for even $n$ and even for odd $n$. Every factor $ia-x_j$ is nonzero, so $\omega_n(ia)\ne0$; real coefficients and parity give $\omega_n(ia)=iW$ for a nonzero real $W$ when $n$ is even, and $\omega_n(ia)=\omega_n(-ia)=W$ for a nonzero real $W$ when $n$ is odd. For even $n$, substituting the pole-error identities from step 1.1 and using $1/(x-ia)+1/(x+ia)=2x/(x^2+a^2)$ gives $f(x)-p_n(x)=a x\omega_n(x)/(i(x^2+a^2)\omega_n(ia))$. For odd $n$, using $1/(x-ia)-1/(x+ia)=2ia/(x^2+a^2)$ gives $f(x)-p_n(x)=a^2\omega_n(x)/((x^2+a^2)\omega_n(ia))$. Taking moduli and using [F10] gives, for real $x$, $|f(x)-p_n(x)|=\begin{cases}\frac{a|x|}{x^2+a^2}\frac{|\omega_n(x)|}{|\omega_n(ia)|},&n\text{ even},\\ \frac{a^2}{x^2+a^2}\frac{|\omega_n(x)|}{|\omega_n(ia)|},&n\text{ odd}.\end{cases}$ [given, F1, F10, step 1.1, algebra]

3.1 For $n\geq2$, $y_n\geq1/2$ and $y_n^2+a^2\leq26/25$, so the coefficient in step 2.1 is at least $5/52$ for even $n$ and $1/26$ for odd $n$, hence at least $1/26$. By [F10], the complex-modulus identity in step 2.1 is the stated real absolute error; steps 1.2 and 1.3 then give $|f(y_n)-p_n(y_n)|>\frac1{26A}(16/15)^n/[n(2n+1)]$. The right-hand side tends to infinity because the ratio of successive terms tends to $16/15>1$ and is eventually bounded below by a fixed ratio greater than $1$. Therefore $\|f-p_n\|_\infty\to\infty$. By [F12]–[F14], $f\in C[-1,1]$, so [F2] applies and $E_n(f)\to0$. [given, F2, F9, F10, F12, F13, F14, step 2.1, step 1.2, step 1.3, algebra] ∎
