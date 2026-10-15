
## cor-derivative-operators-are-continuous-for-local-uniform-convergence


For every natural number $k$, including $k=0$, the operator
$$D^k:H(\Omega)\to H(\Omega),\qquad D^k(f)=f^{(k)},$$
is continuous for local uniform convergence on a plane domain $\Omega$.


[L1] A locally uniform limit of holomorphic functions is holomorphic, and every derivative order converges locally uniformly as well ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.1 Fact [L1] gives $f_n^{(k)}\to f^{(k)}$ locally uniformly on $\Omega$ for every natural $k$. [L1, given]


## cor-holomorphic-functions-are-closed-for-local-uniform-convergence


The holomorphic functions on a plane domain form a closed subspace of
$C(\Omega,\mathbb C)$ for the topology of locally uniform convergence.
Equivalently, a $d_K$-limit of holomorphic functions is holomorphic.


[L2] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

2.1 Applying [L2] shows that the limit function $f$ is holomorphic. Hence holomorphic functions form a closed subspace for local uniform convergence. [L2, given] ∎



## cor-integrality-of-the-j-invariant-fourier-coefficients


With $q=e^{2\pi i\tau}$, the $j$-invariant has a Laurent expansion convergent for $0<|q|<1$,
$$j(\tau)=q^{-1}+744+196884q+21493760q^2+\sum_{n\ge3}c(n)q^n,\qquad c(n)\in\mathbb Z.$$
Equivalently $qj$ is holomorphic in the unit disc with integer Taylor coefficients and constant term $1$.


[F3] A holomorphic function on a disc has a convergent Taylor expansion with the coefficients given by the derivatives at the centre ([[thm-taylor-expansion-holomorphic-function]]); locally uniform convergence passes to all derivatives ([[thm-weierstrass-convergence-holomorphic-functions]]); the coefficient sequence of a product of two absolutely convergent complex series is the Cauchy product, absolutely convergent ([[lem-cauchy-product-of-absolutely-convergent-complex-series]], [[lem-binomial-theorem-over-complex-numbers]]).

1.1 Since $P$ is zero-free on the unit disc and $\Delta=qP$, the function $qj=E_4(q)^3/P(q)$ is holomorphic on $|q|<1$. The powers $E_4^3$ have integer Taylor coefficients: by [F2] the expansion of $E_4$ has integer coefficients, and the coefficients of the cube are finite sums of products of integers, which by [F3] are exactly the Cauchy-product coefficients. [F1, F2, F3, given, algebra]

2.1 Write $P(q)=1+\sum_{n\ge1}p_nq^n$ with $p_n\in\mathbb Z$ by [F1], and let $P(q)^{-1}=\sum_{n\ge0}b_nq^n$ be its Taylor expansion at $0$, which exists and converges on $|q|<1$ because $P$ is holomorphic and zero-free there [F3]. Comparing coefficients in $P\cdot P^{-1}=1$ gives $b_0=1$ and $b_n=-\sum_{r=1}^np_rb_{n-r}$ for $n\ge1$; by induction on $n$ every $b_n$ is an integer. Hence $qj=E_4^3\cdot P^{-1}$ has integer Taylor coefficients by the Cauchy product [F3], and its constant term is $1\cdot1=1$. Since $j=q^{-1}(qj)$, the Laurent expansion of $j$ on $0<|q|<1$ has the stated integer coefficients. [F1, F2, F3, step 1.1, given, algebra]

3.1 The displayed coefficients are obtained by computing finitely many terms. From [F2] and $\sigma_3(1)=1$, $\sigma_3(2)=9$, $\sigma_3(3)=28$: $E_4=1+240q+2160q^2+6720q^3+O(q^4)$, so $E_4^3=1+720q+179280q^2+16954560q^3+O(q^4)$; from the product formula $\Delta=q(1-24q+252q^2-1472q^3+O(q^4))$, so $P=1-24q+252q^2-1472q^3+O(q^4)$ and its inverse begins $P^{-1}=1+24q+324q^2+3200q^3+O(q^4)$ (coefficient comparison, as in 2.1). Multiplying, $qj=E_4^3P^{-1}=1+744q+196884q^2+21493760q^3+O(q^4)$, hence $j=q^{-1}+744+196884q+21493760q^2+\sum_{n\ge3}c(n)q^n$ with the stated initial coefficients. [F2, F3, step 2.1, given, algebra] ∎



## cor-locally-uniformly-convergent-holomorphic-series


Let $\Omega\subseteq\mathbb C$ be open and let $g_j:\Omega\to\mathbb C$ be holomorphic. Suppose the sequence of partial sums of $\sum_{j\ge0}g_j$ converges locally uniformly to $g$. Then $g$ is holomorphic, and for every natural $k$,

$$g^{(k)}=\sum_{j\ge0}g_j^{(k)},$$

where the derivative series converges locally uniformly.


[L2] A locally uniform limit of holomorphic functions is holomorphic, and for every natural $k$ the $k$th derivatives converge locally uniformly to the $k$th derivative of the limit ([[thm-weierstrass-convergence-holomorphic-functions]]).

2.1 Apply [L2] to the locally uniformly convergent sequence $(S_N)$: its limit $g$ is holomorphic and $S_N^{(k)}\to g^{(k)}$ locally uniformly for every natural $k$. [step 1.1, L2]


## cor-logarithmic-derivative-of-a-normally-convergent-product


Let $\prod_{n\ge0}f_n$ be a normally convergent holomorphic product on an open
set $\Omega$, and let $F$ be its holomorphic limit. On every compact set
$K\subseteq\Omega$ disjoint from the zero set of $F$, the series

$$\sum_{n\ge0}\frac{f_n'(z)}{f_n(z)}$$

converges uniformly on $K$ and

$$\frac{F'(z)}{F(z)}=\sum_{n\ge0}\frac{f_n'(z)}{f_n(z)}\qquad(z\in K).$$


[F2] Locally uniform convergence of holomorphic functions carries locally uniform derivative convergence ([[thm-weierstrass-convergence-holomorphic-functions]]).

2.1 By [F2], the derivatives $P_m'$ converge uniformly on $K$ to $F'$. Since $F$ has no zero on the compact set $K$, the uniform convergence of $P_m$ to $F$ makes $P_m$ uniformly bounded away from $0$ on $K$ for all large $m$, so $P_m'/P_m\to F'/F$ uniformly on $K$. [F2, step 1.1, algebra]


## cor-partial-fraction-expansion-of-pi-squared-cosecant-squared


For every $z\in\mathbb C\setminus\mathbb Z$,

$$\pi^2\csc^2(\pi z)=\sum_{n\in\mathbb Z}\frac1{(z-n)^2}=\frac1{z^2}+\sum_{n\ge1}\left(\frac1{(z-n)^2}+\frac1{(z+n)^2}\right).$$

with locally uniform convergence on $\mathbb C\setminus\mathbb Z$.


[L3] Locally uniform convergence of holomorphic partial sums forces local-uniform convergence of their derivatives to the derivative of the limit ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.1 Let $$S_N(z):=\frac1z+\sum_{n=1}^{N}\left(\frac1{z-n}+\frac1{z+n}\right).$$ By [L1], the holomorphic functions $S_N$ converge locally uniformly on $\mathbb C\setminus\mathbb Z$ to $\pi\cot(\pi z)$. On any compact set $K\subseteq\mathbb C\setminus\mathbb Z$, the derivatives satisfy $$S_N'(z)=-\frac1{z^2}-\sum_{n=1}^{N}\left(\frac1{(z-n)^2}+\frac1{(z+n)^2}\right),$$ and this derivative series converges uniformly on $K$ because its terms are $O(n^{-2})$ there. Therefore [L3] identifies the derivative of the limit with the displayed series on $K$. [L1, L3, given]


## ex-modular-lambda-biholomorphism-onto-the-slit-plane

[F1] On compact subsets of $\mathfrak H$ the normally convergent $\wp$-series is uniformly controlled by the lattice estimate $|m\tau+n|\ge C\max(|m|,|n|)$, so the half-period values $e_j(\tau)$ and hence $\lambda(\tau)$ are holomorphic functions of $\tau$; conjugation of the same series gives $\lambda(-\bar\tau)=\overline{\lambda(\tau)}$ ([[thm-weierstrass-p-normal-convergence-and-periodicity]], [[thm-weierstrass-convergence-holomorphic-functions]], [[lem-modular-group-reduction-to-the-standard-domain]], [[def-modular-lambda-function]]).

1.1 $\lambda$ is holomorphic on $\mathfrak H$ and satisfies $\lambda(-\bar\tau)=\overline{\lambda(\tau)}$ by [F1]; by the $\Gamma(2)$-invariance of [F2] and the local quotient charts of [F3], it descends to a holomorphic function $\bar\lambda$ on $Y(2)=\mathfrak H/\Gamma(2)$, which takes values in $\mathbb C\setminus\{0,1\}$ because the $e_j$ are always distinct. [F1, F2, F3, given, algebra]


## lem-fredholm-determinant-spectral-product-from-power-traces


Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be a separable
complex Hilbert space ([[def-hilbert-space]]) and let $T:H\to H$ be trace class
([[def-trace-class-operator]]). List its nonzero eigenvalues
$\lambda_j(T)$, repeated according to algebraic multiplicity
([[def-algebraic-multiplicity-for-compact-operators]]). Then
$$D_T(z)=\prod_{j\ge1}(1+z\lambda_j(T))\qquad(z\in\mathbb C),$$
where $D_T$ is the locally constructed determinant of
[[lem-separable-trace-class-determinant-construction]]. The product converges
locally uniformly; if the nonzero eigenvalue list is empty, the product is one.


[A13] Complex polynomials are entire; a locally uniform limit of holomorphic functions is holomorphic and the derivatives of the approximants converge locally uniformly to the derivative of the limit ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]], [[thm-weierstrass-convergence-holomorphic-functions]]).

1.3 For each nonzero eigenvalue $\lambda$ of $T$, an eigenvector $x\ne0$ satisfies $|\lambda|\|x\|=\|Tx\|\le\|T\|\|x\|$. Hence $|\lambda_j(T)|\le\|T\|$ for every $j$. Let $P_N(z):=\prod_{j=1}^{N}(1+z\lambda_j(T))$, with $P_0=1$. For $|z|\le R$ and $m<N$, $$\left|\prod_{j=m+1}^{N}(1+z\lambda_j(T))-1\right| \le\prod_{j=m+1}^{N}(1+R|\lambda_j(T)|)-1 \le e^{R\sum_{j>m}|\lambda_j(T)|}-1.$$ Also $|P_m(z)|\le e^{RS}$. Since the right-hand tail tends to zero, $(P_N)$ is uniformly Cauchy on every closed disk of finite radius. Its limit $\Phi(z):=\lim_{N\to\infty}P_N(z)$ is locally uniform, and [A13] makes $\Phi$ entire. For a finite eigenvalue list, zero padding makes $P_N$ eventually constant; for an empty list, every $P_N$ is $1$. [A10, A13, algebra]

4.1 For each finite $N$, the product rule [A13] gives on $|z|<r$ $$\frac{P_N'(z)}{P_N(z)} =\sum_{j=1}^{N}\frac{\lambda_j(T)}{1+z\lambda_j(T)}.$$ The denominators are bounded below by $1-r\|T\|>0$. On each closed disk $|z|\le\rho<r$, the right side converges uniformly as $N\to\infty$, because its tail is bounded by $(1-\rho\|T\|)^{-1}\sum_{j>N}|\lambda_j(T)|$. By [A13], $P_N\to\Phi$ and $P_N'\to\Phi'$ locally uniformly. Since $\Phi$ has no zeros on $|z|<r$, taking the limit gives $$\frac{\Phi'(z)}{\Phi(z)} =\sum_{j\ge1}\frac{\lambda_j(T)}{1+z\lambda_j(T)}.$$ For $|z|\le\rho<r$, expand each denominator geometrically. The double series is absolutely convergent because $$\sum_{j\ge1}\sum_{k\ge0}\rho^k|\lambda_j(T)|^{k+1} \le\frac{S}{1-\rho\|T\|}<\infty.$$ Thus it may be rearranged, and the trace-power identity gives $$\frac{\Phi'(z)}{\Phi(z)} =\sum_{k\ge0}(-1)^kz^k\sum_{j\ge1}\lambda_j(T)^{k+1} =\sum_{k\ge0}(-1)^kz^k\operatorname{tr}(T^{k+1}) =\frac{D_T'(z)}{D_T(z)}.$$ [A10, A13, step 1.4, step 2.1, step 3.1, algebra]


## lem-jacobi-product-formula-for-the-discriminant


For $\tau\in\mathfrak H$ and $q=e^{2\pi i\tau}$,
$$\Delta(\tau)=q\prod_{n=1}^{\infty}(1-q^n)^{24},\qquad \Delta=(E_4^3-E_6^2)/1728.$$
The product converges locally uniformly for $|q|<1$; its factor after $q$ is holomorphic and zero-free in the unit disc and equals $1$ at $q=0$. Consequently $\Delta$ has integral Fourier coefficients and a simple zero at the cusp.


[F2] Locally uniform limits of holomorphic functions have locally uniformly convergent derivatives ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.1 Put $P_0(q)=1$ for the empty product, $P_N(q)=\prod_{1\le n\le N}(1-q^n)^{24}$ for $N\ge1$, $P(q):=\lim_NP_N(q)$ and $F(\tau):=qP(q)$. For $|q|\le r<1$ we have $|(1-q^n)^{24}-1|\le(2^{24}-1)r^n$, a summable majorant independent of $q$, so the product is normally convergent on the disc and [F1] makes $P$ holomorphic and zero-free there with $P(0)=1$; hence $F$ is holomorphic and zero-free on $\mathfrak H$ and $F(\tau)=q+O(q^2)$ (as a function of $q$). By [F2] the logarithmic derivative of $P$ may be computed from the finite products and the geometric series [F4]: $\frac{1}{2\pi i}\frac{F'}{F}=1-24\sum_{n\ge1}\frac{nq^n}{1-q^n}=1-24\sum_{n\ge1}\sum_{r\ge1}nq^{nr}=1-24\sum_{m\ge1}\sigma_1(m)q^m=E_2(\tau)$, the regrouping being justified by the bound $\sum_{n,r}n|q|^{nr}\le(1-r)^{-1}\sum_n nr^n<\infty$ on $|q|\le r<1$ [F4]; the last series converges by the ratio test. [F1, F2, F4, given, algebra]

4.1 Integrality of the coefficients: the coefficient of $q^N$ in $P$ equals the coefficient of $q^N$ in the finite product $\prod_{n\le N}(1-q^n)^{24}$, because all factors with $n>N$ are congruent to $1$ modulo $q^{N+1}$; the finite product has integer coefficients by [F4], and its coefficients agree with those of the analytic expansion of $P$ because the finite products converge locally uniformly, with all derivatives, to $P$ near $0$ by [F1] and [F2]. Hence every Taylor coefficient of $P$ is an integer, and the coefficients of $\Delta=qP$ are integers as well; the simple zero at the cusp is $\operatorname{ord}_\infty(\Delta)=1$ from the expansion $q-24q^2+\cdots$, consistent with [F5]. [F1, F2, F4, step 2.1, given, algebra] ∎



## lem-jacobi-theta-transformation-laws


Assume countable choice. For $\tau\in\mathfrak H$ and $z\in\mathbb C$, let $\Theta(z\mid\tau)$ and $\theta(\tau)=\Theta(0\mid\tau)$ be the functions of [[thm-jacobi-theta-triple-product]], and set
$$s(\tau)=\exp\bigl(\tfrac12\operatorname{Log}(\tau/i)\bigr).$$
The principal logarithm is defined here because $\operatorname{Re}(\tau/i)>0$; thus $s$ is the holomorphic square root of $\tau/i$ that is positive for $\tau=it$, $t>0$. Then
$$\Theta(z\mid-1/\tau)=s(\tau)e^{\pi i\tau z^2}\Theta(\tau z\mid\tau),\qquad \Theta(z\mid\tau+2)=\Theta(z\mid\tau).$$
In particular
$$\theta(-1/\tau)=s(\tau)\theta(\tau),\qquad \theta(1-1/\tau)=s(\tau)\sum_{n\in\mathbb Z}e^{\pi i(n+1/2)^2\tau}.$$
As $\operatorname{Im}\tau\to\infty$, uniformly in $\operatorname{Re}\tau$,
$$\theta(1-1/\tau)=2s(\tau)e^{\pi i\tau/4}\bigl(1+O(e^{-2\pi\operatorname{Im}\tau})\bigr).$$


[F3] Summable uniform majorants give uniformly convergent function series; locally uniform holomorphic limits are holomorphic, and holomorphic functions on a connected domain agreeing on a set with an interior accumulation point agree everywhere ([[thm-weierstrass-m-test-for-complex-function-series]], [[thm-weierstrass-convergence-holomorphic-functions]], [[thm-identity-theorem-holomorphic-functions]]).

2.1 Fix real $x$. Both sides of the claimed inversion identity are holomorphic in $\tau\in\mathfrak H$. For the right-hand theta series, on any compact $K\subset\mathfrak H$ its terms have modulus at most $e^{-\pi y_0n^2+C|n|}$, where $y_0=\min_K\operatorname{Im}\tau>0$ and $C$ bounds $2\pi|x\operatorname{Im}\tau|$; this summable Gaussian majorant proves holomorphy by [F3]. The other factors are holomorphic by [F4], including $s$, since $\tau/i$ lies in the right half-plane. The left side is holomorphic by [F1] and composition with $-1/\tau$. By 1.1 the two sides agree on the positive imaginary axis, whose points accumulate within $\mathfrak H$, so the identity theorem [F3] proves equality for all $\tau$. Now fix such $\tau$. The two sides are entire in $z$ by [F1, F4] and agree for real $z=x$, so a second identity-theorem application proves the inversion formula for every $z\in\mathbb C$. [F1, F3, F4, step 1.1, algebra]


## lem-lambda-transformation-laws


$\lambda$ is invariant under $\Gamma(2)$, and under the generators of $PSL_2(\mathbb Z)$ it satisfies
$$\lambda(\tau+1)=\frac{\lambda(\tau)}{\lambda(\tau)-1},\qquad \lambda(-1/\tau)=1-\lambda(\tau).$$
Consequently $\lambda(\gamma\tau)$ takes, as $\gamma$ ranges over $PSL_2(\mathbb Z)$, the values of the six expressions
$$\lambda,\ \frac1\lambda,\ 1-\lambda,\ \frac1{1-\lambda},\ \frac{\lambda}{\lambda-1},\ \frac{\lambda-1}{\lambda},$$
these expressions may coincide at special parameters, and the substitution action on rational functions defines an isomorphism $PSL_2(\mathbb Z)/\bar\Gamma(2)\cong S_3$. Moreover $\lambda(i)=1/2$, and for $\tau=iy$ with $y>0$ one has $\lambda(\tau)\in(0,1)$.


[F6] $|\wp(z)|$ and $\wp(z)$ itself are continuous in the pair (lattice, $z$) on compacta away from the lattice, by the following compact estimate: for $\tau$ in a compact subset of $\mathfrak H$, the corrected lattice summands at each half-period are bounded by $C\max(|m|,|n|)^{-3}$ outside finitely many pairs. This follows from $|m\tau+n|\ge c\max(|m|,|n|)$ and expanding $(z-\omega)^{-2}-\omega^{-2}$ for bounded $z$. Summing over shells gives a uniform $\sum_j O(j^{-2})$ bound; each finite term is holomorphic in $\tau$ and no half-period meets the lattice, proving parameter holomorphy and hence continuity by the Weierstrass convergence theorem ([[thm-weierstrass-convergence-holomorphic-functions]]); conjugation of the lattice $\Lambda_{iy}$ to itself gives $\wp(\bar z)=\overline{\wp(z)}$ for that lattice ([[thm-weierstrass-p-normal-convergence-and-periodicity]], [[lem-complex-conjugation-and-modulus-laws]]).

1.3 The square lattice $\Lambda_i=\mathbb Z+\mathbb Z i$ is invariant under multiplication by $i$, and the substitution $(m,n)\mapsto(-n,m)$ is a bijection of $\mathbb Z^2$ sending $mi+n$ to $i(mi+n)$, so the absolutely summable family $((mi+n)^{-6})$ [F3] equals its negative and $g_3=140G_6=0$ for $\tau=i$; also $\wp_{\Lambda_i}(i z)=-\wp_{\Lambda_i}(z)$ by [F2] with $c=i$, so $e_2=\wp(i/2)=-\wp(1/2)=-e_1$, and then [F3] gives $e_3=0$. Hence $\lambda(i)=\frac{e_3-e_2}{e_1-e_2}=\frac{e_1}{2e_1}=\frac12$. For $\tau=iy$, $y>0$, the lattice $\Lambda_{iy}$ is invariant under conjugation: the conjugate of $miy+n$ is $-miy+n\in\Lambda_{iy}$, so $\wp(\bar z)=\overline{\wp(z)}$ [F6]; the half-periods $1/2$, $iy/2$, $(1+iy)/2$ are each congruent to their conjugates modulo $\Lambda_{iy}$, so $e_1,e_2,e_3$ are real and $\lambda(iy)$ is real, while $\lambda(iy)\ne0,1$ because the $e_j$ stay distinct [F3]. By [F6] each $e_j(iy)$ is continuous in $y$; $\lambda(iy)$ is therefore a continuous real function of $y\in(0,\infty)$ avoiding $0$ and $1$, so it lies in a single connected component of $\mathbb R\setminus\{0,1\}$; since $\lambda(i)=1/2\in(0,1)$, it follows that $\lambda(iy)\in(0,1)$ for every $y>0$. [F1, F2, F3, F6, given, algebra]

2.1 Let $X$ be the set of the six rational functions $x$, $1/x$, $1-x$, $1/(1-x)$, $x/(x-1)$, $(x-1)/x$ of an indeterminate $x$; these are pairwise distinct functions on $\mathbb C\setminus\{0,1\}$, and $\sigma(x):=x/(x-1)$ and $\tau(x):=1-x$ satisfy $\sigma^2=\tau^2=1$ and generate a group of order $6$ acting transitively on $X$ (the orbit of $x$ is exactly $X$), hence isomorphic to $S_3$. By 1.2, $\lambda(S\tau)=1-\lambda(\tau)=\tau(\lambda(\tau))$ and $\lambda(T\tau)=\sigma(\lambda(\tau))$, and for a word $\gamma$ in $S,T$ induction gives $\lambda(\gamma\tau)=f_\gamma(\lambda(\tau))$ with $f_\gamma$ the corresponding composition in this group; since $\lambda(i)=1/2$ and $\lambda(i+1)=-1$ by 1.2 and 1.3, it is not constant; its real restriction $\lambda(iy)$ cannot be constant by the identity theorem, so its continuous image is an interval with more than one point by the intermediate value theorem ([[thm-intermediate-value]]). Thus distinct $f_\gamma$ give distinct functions $f_\gamma\circ\lambda$, so the assignment $\gamma\mapsto f_\gamma$ is a homomorphism $PSL_2(\mathbb Z)\to S_3$ [F5]. Its kernel is $\{\gamma:\lambda(\gamma\tau)=\lambda(\tau)\}$, which contains $\bar\Gamma(2)$ by 1.1 and therefore has index at most $6$; the image is generated by $\sigma,\tau$ and has order $6$, so the index is exactly $6$ and the kernel is $\bar\Gamma(2)$, giving $PSL_2(\mathbb Z)/\bar\Gamma(2)\cong S_3$ [F4]. Hence $\lambda(\gamma\tau)$ runs over the displayed expressions, with coincidences allowed (for example $\lambda(i)=1/2$ gives the three values $1/2,2,-1$) as $\gamma$ runs over $PSL_2(\mathbb Z)$. [F4, F5, F6, step 1.1, step 1.2, step 1.3, given, algebra] ∎



## lem-lattice-eisenstein-sums-converge


For every even $k\ge4$ and every $\tau\in\mathfrak H$ the family $\bigl((m\tau+n)^{-k}\bigr)_{(m,n)\in\mathbb Z^2\setminus\{(0,0)\}}$ is absolutely summable, and the convergence is uniform on compact subsets of $\mathfrak H$. Consequently $G_k(\tau):=\sum'_{(m,n)}(m\tau+n)^{-k}$ defines a holomorphic function on $\mathfrak H$, and it depends only on the lattice $\Lambda_\tau=\mathbb Z+\mathbb Z\tau$ assigned to $\tau$.


[F4] If holomorphic functions on an open set converge locally uniformly, their limit is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

3.1 Each term $\tau\mapsto(m\tau+n)^{-k}$ is holomorphic on $\mathfrak H$ for $(m,n)\ne(0,0)$, being a power of the nonvanishing holomorphic function $\tau\mapsto m\tau+n$. By 2.1 the partial sums over shells converge uniformly on every compact $K\subseteq\mathfrak H$ (compactness supplies some $y_0,X$), so [F4] makes the shell-sum limit $G_k$ holomorphic on $\mathfrak H$, and this limit agrees with the (absolutely summable, hence order-independent by [F3]) family sum. Finally $(m,n)\mapsto m\tau+n$ is a bijection of $\mathbb Z^2$ onto the lattice $\Lambda_\tau=\mathbb Z+\mathbb Z\tau$, so the summed family is exactly the family of values $\lambda^{-k}$ over the nonzero points $\lambda\in\Lambda_\tau$; hence $G_k(\tau)$ depends only on $\Lambda_\tau$ and not on the enumeration. [F3, F4, step 2.1, given, algebra] ∎



## thm-beta-gamma-identity


For $\operatorname{Re}p>0$ and $\operatorname{Re}q>0$,

$$B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}.$$


[L6] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.1 Fix a real number $q_0>0$. For $n\ge2$, define $$B_n(p):=\int_{1/n}^{1-1/n} t^{p-1}(1-t)^{q_0-1}\,dt.$$ By [L4], each $B_n$ is holomorphic on $\operatorname{Re}p>0$. On a compact set $K\subseteq\{p:\operatorname{Re}p>0\}$ choose $a>0$ with $\operatorname{Re}p\ge a$ on $K$; then the omitted tails are dominated by $t^{a-1}(1-t)^{q_0-1}$ near $0$ and by $(1-t)^{q_0-1}$ near $1$, so $B_n\to B(\,\cdot\,,q_0)$ locally uniformly on $\operatorname{Re}p>0$. Hence [L6] makes $p\mapsto B(p,q_0)$ holomorphic there. [given, L4, L6, L7]

3.1 Now fix $p$ with $\operatorname{Re}p>0$. Repeating step 1.1 with the roles of $p$ and $q$ reversed shows that $q\mapsto B(p,q)$ is holomorphic on $\operatorname{Re}q>0$. Therefore $$K_p(q):=\Gamma(p+q)B(p,q)-\Gamma(p)\Gamma(q)$$ is holomorphic on $\operatorname{Re}q>0$ by [L5]. Step 2.1 shows $K_p(q)=0$ for every positive real $q$, so [L3] gives $K_p\equiv0$. Thus $\Gamma(p+q)B(p,q)=\Gamma(p)\Gamma(q)$ for all parameters in the stated half-planes. [step 2.1, L3, L5, L6, L7]


## thm-chordal-limit-theorem-for-meromorphic-functions


Let $\Omega$ be a plane domain, and let $f_n:\Omega\to\widehat{\mathbb C}$ be
meromorphic functions converging chordally locally uniformly to a map
$f:\Omega\to\widehat{\mathbb C}$. Then $f$ is meromorphic or identically
$\infty$. If every $f_n$ is holomorphic, then $f$ is holomorphic or identically
$\infty$.


[L1] Locally uniform limits of holomorphic functions are holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.1 A local uniform limit of continuous maps into the metric space $(\widehat{\mathbb C},\chi)$ is continuous, so $f$ is chordally continuous. If $f(a)\in\mathbb C$, choose a chordal neighbourhood $U$ of $f(a)$ whose closure misses $\infty$. On $U$ the chordal and Euclidean metrics are comparable, and continuity of $f$ together with chordal local uniform convergence gives a neighbourhood $V$ of $a$ with $f(V)\cup f_n(V)\subseteq U$ for all large $n$. On $V$ the maps $f_n$ have no poles, hence are holomorphic there, and [L1] makes the Euclidean local uniform limit $f$ holomorphic near $a$. [L1, given, choose, algebra]

1.2 If $f(a)=\infty$, choose a chordal neighbourhood $U$ of $\infty$ whose complement is a closed Euclidean disc. Continuity of $f$ and chordal local uniform convergence give a neighbourhood $V$ of $a$ with $f(V)\cup f_n(V)\subseteq U$ for all large $n$. The infinity-chart expressions $g=1/f$ and $g_n=1/f_n$ are then well-defined holomorphic maps on $V$, and the same metric comparison turns $g_n\to g$ into Euclidean local uniform convergence. Fact [L1] makes $g$ holomorphic, so $f$ is meromorphic at $a$. [L1, given, choose, algebra]


## thm-complex-torus-weierstrass-cubic-isomorphism


Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full complex lattice with
oriented basis ([[def-complex-lattice-and-complex-torus]]), let
$\wp=\wp_\Lambda$ be its Weierstrass function and $\wp'$ its derivative
([[def-weierstrass-elliptic-p-function]]), let
$\Delta=g_2^3-27g_3^2$ be its discriminant and let
$$C_\Lambda:=\bigl\{[X:Y:Z]\in\mathbb{CP}^2:Y^2Z=4X^3-g_2XZ^2-g_3Z^3\bigr\}$$
be the associated projective cubic, with the point at infinity
$O=[0:1:0]$ ([[def-projective-space-points]]). Then:

1. $C_\Lambda$ is nonsingular in the Jacobian-rank sense of
   [[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]] at every
   point, and $O$ is its unique point at infinity;
2. the formula
   $$\Phi([z]):=[\wp(z):\wp'(z):1]\qquad(z\in\mathbb C\setminus\Lambda)$$
   defines a holomorphic map $\Phi:T_\Lambda\setminus\{[0]\}\to C_\Lambda$ on
   $T_\Lambda=\mathbb C/\Lambda$ ([[thm-complex-torus-quotient-is-well-defined]]),
   which extends to a holomorphic map $\Phi:T_\Lambda\to C_\Lambda$ with
   $\Phi([0])=O$;
3. this extended $\Phi$ is bijective;
4. $\Phi$ is a biholomorphism: it is holomorphic, bijective, and its inverse
   $\Phi^{-1}:C_\Lambda\to T_\Lambda$ is holomorphic too. In particular
   $C_\Lambda$ is a connected compact Riemann surface, being a continuous image
   of the connected compact torus.


[F13] A function holomorphic and bounded on a punctured disc extends holomorphically to the centre; a locally uniform limit of holomorphic functions is holomorphic; a holomorphic function with a zero of order $m$ at $a$ factors as $(z-a)^mg(z)$ with $g(a)\ne0$; a holomorphic function equals its Taylor series near each point; and derivatives are linear and satisfy the product and chain rules ([[thm-removable-singularity-characterizations]], [[thm-weierstrass-convergence-holomorphic-functions]], [[thm-zero-order-factorization-holomorphic-function]], [[thm-taylor-expansion-holomorphic-function]], [[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]]).

2.1 (The function $H:=\wp-z^{-2}$ at $0$.) Work on the disc $|z|<\delta/2$ from step 1.1, which contains no other lattice point. The double pole with principal part $z^{-2}$ in [F4] means that $H$ extends holomorphically across $0$. Evenness and [F13] give $H(z)=a_0+a_2z^2+O(z^4)$ and $H'(z)=2a_2z+O(z^3)$. Substituting $\wp=z^{-2}+H$ and $\wp'=-2z^{-3}+H'$ into [F6], the coefficient of $z^{-4}$ on the left is $0$, whereas on the right it is $12a_0$; equivalently, multiply by $z^6$ and compare the Taylor coefficient of $z^2$. Thus $a_0=0$, so $H(0)=0$, $H(z)=O(z^2)$ and $H'(z)=O(z)$. [F4, F6, F13, step 1.1, algebra]

3.1 (Expansions at the origin.) From step 2.1, near $0$ one has $\wp(z)=z^{-2}(1+O(z^2))$ and, differentiating $\wp=z^{-2}+H$ with the rules of [F13], $\wp'(z)=-2z^{-3}+H'(z)=-2z^{-3}\bigl(1-\tfrac12z^3H'(z)\bigr)$ with $z^3H'(z)=O(z^4)$, so $\wp'(z)=-2z^{-3}(1+O(z^4))$. Hence on a punctured neighbourhood of $0$ the quotients $u:=\wp/\wp'$ and $v:=1/\wp'$ satisfy $u=-\tfrac z2(1+O(z^2))(1+O(z^4))^{-1}=-\tfrac z2+O(z^3)$ and $v=-\tfrac{z^3}2(1+O(z^4))^{-1}=-\tfrac{z^3}2+O(z^7)$, so in particular $v=O(z^3)$; both are holomorphic and bounded on a punctured disc around $0$, so by [F13] they extend holomorphically to $0$ with $u(0)=0=v(0)$ and $u'(0)=-\tfrac12\ne0$. [F13, step 2.1, algebra]

6.1 (Local biholomorphy at the remaining points.) Let $z_0\in\mathbb C\setminus\Lambda$ and $P:=\Phi([z_0])\in C_\Lambda$; write $f(x,y):=y^2-4x^3+g_2x+g_3$ for the defining polynomial in the chart $\{Z\ne0\}$ of [F9]. If $\wp'(z_0)\ne0$, then $\partial f/\partial y(P)=2\wp'(z_0)\ne0$; by [F10] applied to $f$ (whose zero set is $C_\Lambda$ in that chart), $x$ is a local parameter on $C_\Lambda$ at $P$, and the chart expression of $\Phi$ in the torus chart at $[z_0]$ and this parameter is $w\mapsto\wp(w)$, holomorphic at $z_0$ with derivative $\wp'(z_0)\ne0$ by [F4]; so by [F11](a) this chart expression restricts to a biholomorphism between neighbourhoods, and $\Phi$ is a local biholomorphism at $[z_0]$. If instead $\wp'(z_0)=0$, then $z_0\equiv h_j$ modulo $\Lambda$ for some $j\in\{1,2,3\}$ by [F7], and $P=(e_j,0)$. By [F8] the roots $e_1,e_2,e_3$ of $p(x):=4x^3-g_2x-g_3$ are distinct, so $\partial f/\partial x(P)=-p'(e_j)\ne0$; applying [F10] to $f$ near $P$ shows that $y$ is a local parameter on $C_\Lambda$ at $P$. By [F7] the class $[h_j]$ is a critical point of $\bar\wp$ with ramification index $2$, so $\wp(w)-e_j$ has a zero of order $2$ at $h_j$; by [F13] it factors as $\wp(w)-e_j=(w-h_j)^2g(w)$ with $g$ holomorphic near $h_j$ and $g(h_j)\ne0$, so by the product rule of [F13] $\wp'(w)=(w-h_j)\bigl(2g(w)+(w-h_j)g'(w)\bigr)$ and $\wp''(h_j)=2g(h_j)\ne0$. The chart expression of $\Phi$ in the torus chart at $[h_j]$ and the local parameter $y$ is $w\mapsto\wp'(w)$, holomorphic with derivative $\wp''(h_j)\ne0$ at $w=h_j$; so by [F11](a) this chart expression restricts to a biholomorphism between neighbourhoods, and $\Phi$ is a local biholomorphism at $[h_j]$. Every class of $T_\Lambda$ is $[0]$, a class $[z_0]$ with $\wp'(z_0)\ne0$, or some $[h_j]$, so $\Phi$ carries a neighbourhood of every point of $T_\Lambda$ homeomorphically onto an open subset of $C_\Lambda$, with holomorphic inverse on that piece. [F4, F7, F8, F9, F10, F11, F13, step 5.1, algebra]


## thm-contour-parameter-integrals-are-holomorphic


Let $\gamma:[a,b]\to\mathbb C$ be a rectifiable contour with trace $\gamma^\ast$,
let $\Omega\subseteq\mathbb C$ be open, and let
$\varphi:\gamma^\ast\times\Omega\to\mathbb C$ be continuous, with
$z\mapsto\varphi(w,z)$ holomorphic on $\Omega$ for every $w\in\gamma^\ast$. Then

$$F(z):=\int_\gamma\varphi(\zeta,z)\,d\zeta$$

is defined for every $z\in\Omega$ and is holomorphic on $\Omega$.

Here $\gamma^\ast\times\Omega$ carries the Euclidean metric of $\mathbb R^4$
under the coordinate identification of the plane, so continuity of $\varphi$ is
joint continuity in the two variables together.


**Given:** A rectifiable contour $\gamma:[a,b]\to\mathbb C$, an open $\Omega\subseteq\mathbb C$, and a continuous $\varphi:\gamma^\ast\times\Omega\to\mathbb C$ with $\varphi(w,\cdot)$ holomorphic on $\Omega$ for each $w\in\gamma^\ast$; write $\Phi(a+bi)=(a,b)$ and use $J(w,z)=(\Phi(w),\Phi(z))$ for product coordinates. By [[thm-complex-coordinate-isometry-and-topology-transport]] in each factor, $\lVert J(w,z)-J(w_0,z_0)\rVert_2^2=|w-w_0|^2+|z-z_0|^2$. Here locally uniform convergence means that every point has an open neighbourhood on which the convergence is uniform; this is the explicit convention of [[thm-weierstrass-convergence-holomorphic-functions]].

[L2] If each $f_n:\Omega\to\mathbb C$ is holomorphic on an open $\Omega$ and $f_n\to f$ locally uniformly on $\Omega$, then $f$ is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

5.1 Since $\varepsilon>0$ was arbitrary and $L(\gamma)$ is a fixed nonnegative real by [L12], step 4.1 says $S_N\to F$ uniformly on $K$, hence uniformly on the open neighbourhood $B(z_0,\rho)$ of $z_0$; as $z_0\in\Omega$ was arbitrary, $S_N\to F$ locally uniformly on $\Omega$, and [L2] with step 1.3 makes $F$ holomorphic on $\Omega$. If instead $a=b$ then $\int_\gamma f\,dz=0$ for every continuous $f$, so $F$ is identically $0$ and holomorphic by [L7]. [step 1.3, step 4.1, L2, L7, L11, L12] ∎



## thm-dirichlet-series-absolute-half-plane-holomorphy


If a Dirichlet series $\sum_{n \ge 1} a_n n^{-s}$ converges absolutely at a
point $s_0$, then for every $\varepsilon > 0$ it converges absolutely and
locally uniformly on the closed half-plane $\Re s \ge \Re s_0+\varepsilon$.
Moreover its derivative series

$$\sum_{n \ge 1} -a_n (\log n) n^{-s}$$

also converges locally uniformly there, so termwise differentiation is valid on
the open half-plane to the right of $s_0$.


[L2] Locally uniform convergence of holomorphic functions controls the limit and its derivatives ([[thm-weierstrass-convergence-holomorphic-functions]]).

3.1 The partial sums are holomorphic, the derivative series converges locally uniformly, and the original series converges at every point of the half-plane from step 1.1. Hence [L2] yields termwise differentiation there. [L2, step 1.1, step 2.1] ∎



## thm-dirichlet-series-half-plane-convergence


Let $D(s)=\sum_{n \ge 1} a_n n^{-s}$ be a Dirichlet series. If it converges at
some point $s_0$, then it converges locally uniformly on the half-plane
$\Re s > \Re s_0$ and therefore defines a holomorphic function there.


[L2] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

2.1 Each partial sum is holomorphic, being a finite linear combination of the holomorphic functions $s \mapsto n^{-s}$. Since the convergence is uniform on every compact subset of the half-plane, [L2] makes the limit holomorphic there. [L2, step 1.1] ∎



## thm-euler-gamma-function-is-holomorphic


Euler's Gamma function is holomorphic on the half-plane
$\operatorname{Re}z>0$.


[L3] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

2.1 By [L1], on every compact subset of the right half-plane the functions $\Gamma_n$ converge uniformly to $\Gamma$. Therefore [L3] makes $\Gamma$ holomorphic on $\operatorname{Re}z>0$. [step 1.1, L1, L3] ∎



## thm-hurwitz-injective-limit


Let $\Omega\subseteq\mathbb C$ be a complex domain, let each
$f_n:\Omega\to\mathbb C$ be holomorphic and injective, and suppose
$f_n\to f$ locally uniformly on $\Omega$. Then $f$ is injective or constant.


[L1] The limit $f$ is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.1 By [L1], the limit $f$ is holomorphic. Assume it is not constant. [given, L1, assume-contra]


## thm-hurwitz-zero-free-limit


Let $\Omega\subseteq\mathbb C$ be a complex domain, let each
$f_n:\Omega\to\mathbb C$ be holomorphic and nowhere zero, and suppose
$f_n\to f$ locally uniformly on $\Omega$. Then either $f\equiv0$ on $\Omega$, or
$f$ is nowhere zero on $\Omega$.


[L1] Locally uniform limits of holomorphic functions are holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.1 By [L1], the limit function $f$ is holomorphic on $\Omega$. If $f\equiv0$, the first alternative of the statement holds. [given, L1]


## thm-jacobi-theta-triple-product


For $\tau\in\mathfrak H$, $z\in\mathbb C$ and $Q=e^{\pi i\tau}$,
$$\Theta(z\mid\tau):=\sum_{m\in\mathbb Z}Q^{m^2}e^{2\pi imz}=\prod_{n\ge1}(1-Q^{2n})(1+Q^{2n-1}e^{2\pi iz})(1+Q^{2n-1}e^{-2\pi iz}).$$
The series and product converge locally uniformly in each variable, uniformly on compact products. For fixed $\tau$, $\Theta$ is entire in $z$ with exactly the simple zeros $z=(1+\tau)/2+a+b\tau$, $a,b\in\mathbb Z$. In particular
$$\theta(\tau):=\Theta(0\mid\tau)=\prod_{n\ge1}(1-Q^{2n})(1+Q^{2n-1})^2\ne0.$$
Here $Q^2=q$; these cusp parameters must not be confused.


[F2] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.1 Let $K$ be a compact subset of the product, so $\operatorname{Im}\tau\ge y_0>0$ and $|\operatorname{Im}z|\le M$ on $K$. Put $r:=e^{-\pi y_0}<1$. Then $|Q|\le r$ and $|Q^{m^2}e^{2\pi imz}|\le r^{m^2}e^{2\pi M|m|}$ for every $(m,z,\tau)$ under consideration; the bounding series converges by [F8], since the ratio of consecutive terms is $r^{2m+1}e^{2\pi M}\to0$. The $M$-test [F1] therefore gives uniform convergence on $K$; each term is entire in $z$ and holomorphic in $\tau$ by [F6] and [F7], so [F2] shows that $\Theta$ is entire in $z$ for fixed $\tau$, holomorphic in $\tau$, and that the series converges locally uniformly in each variable, uniformly on compact products. Termwise index shifts, licensed by absolute convergence [F8], give $\Theta(z+1\mid\tau)=\Theta(z\mid\tau)$, since $e^{2\pi im}=1$, and, using $Q^{m^2}e^{2\pi im\tau}=Q^{(m+1)^2-1}$, also $\Theta(z+\tau\mid\tau)=Q^{-1}e^{-2\pi iz}\Theta(z\mid\tau)$. [F1, F2, F6, F7, F8, given, algebra]


## thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables


Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open, let each
$f_n:U\to\mathbb C$ be holomorphic, and suppose $f_n\to f$ locally uniformly on
$U$: every point of $U$ has a neighbourhood on which the convergence is uniform.
Then $f$ is holomorphic on $U$, and for every multi-index $\alpha$

$$\partial^\alpha_zf_n\longrightarrow\partial^\alpha_zf$$

locally uniformly on $U$.


[L3] If holomorphic functions of one variable converge locally uniformly on an open subset of $\mathbb C$, the limit is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

1.2 Fix $a\in U$ and $k<m$, and let $V$ be the $k$th slice domain of $U$ through $a$, an open subset of $\mathbb C$ by [L5]. The slices of the $f_n$ are holomorphic on $V$ by [L6], and they converge to the slice of $f$ locally uniformly on $V$, since a neighbourhood in $U$ of a point of the slice meets the slice in a neighbourhood there. So [L3] makes the slice of $f$ holomorphic on $V$, and $f$ is separately holomorphic by [L5]. [given, L3, L5, L6, L8]


## thm-normal-convergence-of-holomorphic-products


Let $\Omega\subseteq\mathbb C$ be open, and let $(f_n)_{n\ge0}$ be holomorphic
functions on $\Omega$ whose product is normally convergent in the sense of
[[def-normal-convergence-of-holomorphic-products]]. Then the partial products

$$P_m(z):=\prod_{n=0}^{m}f_n(z)$$

converge locally uniformly on $\Omega$ to a holomorphic function $F$.

Moreover, on every compact set $K\subseteq\Omega$, all but finitely many factors
$f_n$ are zero-free and the tail limit is zero-free. If no factor vanishes
identically on any connected component of $\Omega$, the zeros of $F$ on $K$,
counted with multiplicity, are exactly those contributed by the finitely many
exceptional factors.


[F3] Locally uniform limits of holomorphic functions are holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

3.1 The estimate of step 2.1 implies that the tail partial products are uniformly Cauchy on $K$, hence converge uniformly there to a continuous zero-free limit $Q_K$; multiplying by the finite holomorphic prefix $\prod_{n< N}f_n$ gives uniform convergence of the full partial products on $K$. Because $K$ was arbitrary, the convergence is locally uniform on $\Omega$, and [F3] makes the limit function $F$ holomorphic. [F2, F3, step 2.1, algebra]


## thm-weierstrass-p-normal-convergence-and-periodicity


Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$ be a full
complex lattice with oriented basis $(\omega_1,\omega_2)$, and let

$$\wp_\Lambda(z)=\frac{1}{z^{2}}+\sum_{\omega\in\Lambda\setminus\{0\}}\left(\frac{1}{(z-\omega)^{2}}-\frac{1}{\omega^{2}}\right)$$

be the Weierstrass $\wp$-function of
[[def-weierstrass-elliptic-p-function]]. Then:

1. the sum converges absolutely at every $z\in\mathbb C\setminus\Lambda$ and
   uniformly on every compact subset of $\mathbb C\setminus\Lambda$, so it is
   normally convergent there and independent of any enumeration of $\Lambda$;
2. $\wp_\Lambda$ is holomorphic on $\mathbb C\setminus\Lambda$, is even
   ($\wp_\Lambda(-z)=\wp_\Lambda(z)$) and is $\Lambda$-periodic
   ($\wp_\Lambda(z+\lambda)=\wp_\Lambda(z)$ for every $\lambda\in\Lambda$ and
   every $z\in\mathbb C$, with poles matched), so it is a $\Lambda$-elliptic
   function;
3. at each lattice point $\lambda\in\Lambda$ the function $\wp_\Lambda$ has a
   double pole with principal part $(z-\lambda)^{-2}$, and it has no other
   poles;
4. $\wp_\Lambda'(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$ on
   $\mathbb C\setminus\Lambda$, this series being normally convergent there,
   and the derivative $\wp_\Lambda'$ is odd and $\Lambda$-elliptic as well.


[F5] Let $\Omega\subseteq\mathbb C$ be open and let $g_j:\Omega\to\mathbb C$ be holomorphic with partial sums converging locally uniformly to $g$. Then $g$ is holomorphic, and $g^{(k)}=\sum_j g_j^{(k)}$ for every natural $k$, the derivative series converging locally uniformly ([[cor-locally-uniformly-convergent-holomorphic-series]], [[thm-weierstrass-convergence-holomorphic-functions]]).

4.1 The lattice $\Lambda$ is at most countable: the map $(m,n)\mapsto m\omega_1+n\omega_2$ from $\mathbb Z\times\mathbb Z$ onto $\Lambda$ is surjective by [F2] and $\mathbb Z\times\mathbb Z$ is at most countable by [F6], so [F6] gives a surjection $s:\mathbb N\to\Lambda\setminus\{0\}$. For each lattice point retain only its least preimage, $j(\omega)=\min\{k:s(k)=\omega\}$, as in [F6]. The image of $j$ is an infinite subset of $\mathbb N$ (the distinct points $n\omega_1$, $n\ge1$, already form an infinite subset of the target); list that image in increasing order, recursively taking its least unused element. This list exhausts the image because every natural number has only finitely many predecessors. Applying $s$ gives a repetition-free enumeration $(\omega_j)_{j\ge0}$ of $\Lambda\setminus\{0\}$. Every finite subset is contained in a sufficiently long initial segment of this enumeration; the partial sums $S_N(z):=z^{-2}+\sum_{j<N}h_{\omega_j}(z)$ are holomorphic on $\mathbb C\setminus\Lambda$, and step 3.1 makes them converge locally uniformly to $\wp$. By [F5] the limit $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$ and $\wp'(z)=-2z^{-3}+\sum_{j\ge0}(-2)(z-\omega_j)^{-3}=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$, the last series converging locally uniformly on $\mathbb C\setminus\Lambda$ because $|z-\omega|\ge\tfrac12|\omega|$ for $|\omega|\ge2\max_K|z|$ gives $|z-\omega|^{-3}\le8|\omega|^{-3}$ and step 2.1 applies. [F2, F6, F5, F4, step 3.1, step 2.1]


## thm-weierstrass-zeta-sigma-quasi-periodicity


Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$ be a full
complex lattice with oriented basis $(\omega_1,\omega_2)$
([[def-complex-lattice-and-complex-torus]]), let
$\wp=\wp_\Lambda$, $\zeta=\zeta_\Lambda$ and $\sigma=\sigma_\Lambda$ be its
Weierstrass functions
([[def-weierstrass-elliptic-p-function]],
[[def-weierstrass-zeta-and-sigma-functions]]), and put
$\eta_j:=2\zeta(\omega_j/2)$ for $j=1,2$, so that $\omega_1,\omega_2$ are
primitive and $\eta_j=\eta_{\omega_j}$. Then:

1. the finite-subset net defining $\zeta$ converges normally on
   $\mathbb C\setminus\Lambda$ (uniformly on every compact subset), the
   unordered limit being independent of the exhaustion of
   $\Lambda\setminus\{0\}$ by finite subsets; the function $\zeta$ is meromorphic on $\mathbb C$,
   holomorphic exactly on $\mathbb C\setminus\Lambda$, odd, and has at each
   lattice point $\lambda\in\Lambda$ a simple pole with principal part
   $(z-\lambda)^{-1}$ and residue $1$, with no other poles; moreover
   $$\zeta_\Lambda'(z)=-\wp_\Lambda(z)\qquad(z\in\mathbb C\setminus\Lambda);$$
2. the finite-subset net defining the product of the elementary factors
   $E_2(z/\omega)$ over $\omega\in\Lambda\setminus\{0\}$ converges normally on
   $\mathbb C$, independently of the exhaustion, so that $\sigma$ is entire; $\sigma$ is odd, its zero set is
   exactly $\Lambda$ and every zero is simple, $\sigma'(0)=1$, and
   $$\frac{\sigma_\Lambda'(z)}{\sigma_\Lambda(z)}=\zeta_\Lambda(z)\qquad(z\in\mathbb C\setminus\Lambda);$$
3. the **quasi-period laws** hold, for $j=1,2$ and all
   $z\in\mathbb C$ (with poles matched),
   $$\zeta_\Lambda(z+\omega_j)=\zeta_\Lambda(z)+\eta_j,\qquad \sigma_\Lambda(z+\omega_j)=-\exp\!\left(\eta_j\Bigl(z+\frac{\omega_j}{2}\Bigr)\right)\sigma_\Lambda(z),$$
   and the **Legendre relation** holds:
   $$\eta_1\omega_2-\eta_2\omega_1=2\pi i .$$


[F12] If holomorphic functions on an open set $\Omega$ converge locally uniformly to $g$, then $g$ is holomorphic and the derivatives converge locally uniformly to $g'$ ([[cor-locally-uniformly-convergent-holomorphic-series]], [[thm-weierstrass-convergence-holomorphic-functions]]).

3.1 (Normal convergence away from the lattice.) Let $K\subseteq\mathbb C\setminus\Lambda$ be compact and choose $R\ge\sup_{z\in K}|z|$. The finite set $F_0:=\{\omega\ne0:|\omega|<2R\}$ contains every possible pole of a summand in $\overline D(0,R)$. For finite $F''\supseteq F'\supseteq F_0$, step 2.1 gives $\sup_K|\sum_{\omega\in F''\setminus F'}g_\omega|\le2R^2\sum_{\omega\in F''\setminus F'}|\omega|^{-3}\to0$ as $F'$ grows. Thus the finite-subset net converges uniformly on $K$, independently of its exhaustion, to $E:=\sum_{\omega\ne0}g_\omega$; its cofinal partial sums $S_n$ are holomorphic on $\mathbb C\setminus\Lambda$, so [F12] makes $E$ holomorphic there. For each fixed $\lambda\in\Lambda$, omit the term $g_\lambda$ if $\lambda\ne0$; every remaining summand is holomorphic on $B(\lambda,\delta/2)$ by the gap of step 1.1, and the same tail estimate gives locally uniform convergence on that ball. In particular $E$ is holomorphic near $0$, while near $\lambda\ne0$ only $g_\lambda$ has a pole. [F12, given, step 1.1, step 2.1]

4.2 ($\zeta'=-\wp$.) The cofinal partial sums $S_n$ converge locally uniformly to $E$ on $\mathbb C\setminus\Lambda$ by step 3.1 and are holomorphic there. Thus [F12] gives $E'=\lim_nS_n'$ on that domain. Since $g_\omega'=-h_\omega$ by [F6] and the $h_\omega$-net converges normally there by [F4], $E'(z)=-\sum_{\omega\ne0}h_\omega(z)=z^{-2}-\wp(z)$. Differentiating $\zeta=1/z+E$ yields $\zeta'=-\wp$ on $\mathbb C\setminus\Lambda$. [F4, F6, F12, given, step 3.1]

4.4 (The product net converges: $\sigma$ is entire with $\sigma(0)=0$ and $\sigma'(0)=1$.) Fix $R>0$ and put $F_0:=\{\omega\ne0:|\omega|<2R\}$; writing $u_\omega:=F_\omega-1$, step 2.1 gives $\sup_{|z|\le R}|u_\omega|\le R^3|\omega|^{-3}$ for $\omega\notin F_0$, so the finite sums $\sum_{\omega\in G}\sup_{|z|\le R}|u_\omega|$ are bounded over all finite $G$ and shrink to $0$ outside large finite sets by step 2.1; put $M_R$ for their supremum. For finite $F_0\subseteq F_1\subseteq F_2$ and $|z|\le R$ one has $$\Bigl|\prod_{\omega\in F_2}F_\omega(z)-\prod_{\omega\in F_1}F_\omega(z)\Bigr|\le e^{M_R}\Bigl(\exp\Bigl(\sum_{\omega\in F_2\setminus F_1}\sup_R|u_\omega|\Bigr)-1\Bigr)$$ because $|\prod_{\omega\in E}(1+u_\omega(z))-1|\le\exp(\sum_{\omega\in E}|u_\omega(z)|)-1$ for finite $E$ and $|\prod_{\omega\in F_1}F_\omega(z)|\le\exp(\sum_{\omega\in F_1}\sup_R|u_\omega|)\le e^{M_R}$; the right-hand side is arbitrarily small for $F_1$ large. Thus the finite-subset net of the products, indexed by the directed set of finite subsets of $\Lambda\setminus\{0\}$, is uniformly Cauchy on every closed disc; along the cofinal sequence $F_n$ of step 1.1 the partial products $Q_n=\prod_{\omega\in F_n}F_\omega$ are holomorphic and converge uniformly on each closed disc to a limit $P$, which is holomorphic on $\mathbb C$ by [F12], and the net limit equals $P$ by cofinality and is independent of the exhaustion. Moreover $P(0)=1$, because every finite product equals $1$ at $0$ by $F_\omega(0)=1$ of step 3.2. Hence $\sigma(z)=zP(z)$ is entire with $\sigma(0)=0$, and the product rule of [F6] gives $\sigma'(0)=P(0)+0\cdot P'(0)=1$. [F6, F12, given, step 1.1, step 2.1, step 3.2, choose]

6.1 ($P'=PE$ and $\sigma'/\sigma=\zeta$.) For $z\in\mathbb C\setminus\Lambda$ the finite product rule of [F6] and the identity $F_\omega'(z)/F_\omega(z)=g_\omega(z)$, obtained by differentiating the displayed factor with [F5] and [F6], give $Q_n'(z)=Q_n(z)S_n(z)$ with $S_n=\sum_{\omega\in F_n}g_\omega$, and $S_n\to E$ uniformly on compact subsets of $\mathbb C\setminus\Lambda$ by step 3.1; on a compact $K\subseteq\mathbb C\setminus\Lambda$ the factors $Q_n$ are uniformly bounded by $e^{M_K}$ as in step 4.4, so $Q_n'\to PE$ uniformly on $K$. The convergence $Q_n\to P$ is locally uniform on the open set $\mathbb C\setminus\Lambda$, so [F12] gives $P'=\lim_nQ_n'=PE$ there. Since $P$ is zero-free on $\mathbb C\setminus\Lambda$ by step 5.1, the product and reciprocal rules of [F6] applied to $\sigma=zP$ give $$\frac{\sigma'(z)}{\sigma(z)}=\frac1z+\frac{P'(z)}{P(z)}=\frac1z+E(z)=\zeta(z)\qquad(z\in\mathbb C\setminus\Lambda).$$ [F3, F6, F12, given, step 3.1, step 4.4, step 5.1]
