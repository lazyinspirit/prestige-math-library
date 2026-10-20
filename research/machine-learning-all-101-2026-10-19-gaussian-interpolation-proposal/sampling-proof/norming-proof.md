# Quantitative polynomial norming from a dense set

Proof proposal only. No item edits, gate results, source-history changes, or mathematical acceptance are asserted. The argument below is self-contained and does not use the unproved-in-this-repository Madych–Nelson sampling lemma. It was independently developed and checked against the parent's proposed damping argument.

Let $Q=[-1,1]^d$, let $X\subset Q$ be finite and $h$-dense in Euclidean distance, and let $n\ge1$. Set

$$
A=(4e)^d,\qquad \delta=\frac1{4A},\qquad \eta=\frac{\delta}{48e\sqrt d}.
$$

If $nh\le\eta$, then every real or complex polynomial $p$ of total degree at most $n$ satisfies

$$
\|p\|_{L^\infty(Q)}\le 2A^n\max_{\xi\in X}|p(\xi)|.
$$

Consequently for each $x\in Q$ there are real coefficients $a_\xi(x)$ such that

$$
p(x)=\sum_{\xi\in X}a_\xi(x)p(\xi),\qquad \sum_{\xi\in X}|a_\xi(x)|\le2A^n
$$

for every real or complex polynomial of total degree at most $n$.

## Elementary derivative bound

For a complex polynomial $r$ of degree at most $N\ge1$, put $M=\max_{[-1,1]}|r|$ and

$$
F(z)=z^N r\bigl((z+z^{-1})/2\bigr).
$$

Expansion of each monomial shows that $F$ is a polynomial of degree at most $2N$. On $|z|=1$, $|F(z)|\le M$. The polynomial maximum principle gives $|F(z)|\le M$ for $|z|\le1$. Applied to the reversed polynomial $z^{2N}F(1/z)$, it also gives $|F(z)|\le |z|^{2N}M$ for $|z|\ge1$. For completeness the polynomial maximum principle needs no complex integration: if a nonconstant polynomial had a positive maximum of its modulus in the open disk, expand at that point as $a_0+a_k w^k+O(w^{k+1})$ with $a_k\ne0$ and choose the argument of $w$ to make $a_k w^k$ a positive multiple of $a_0$. The modulus increases for sufficiently small $|w|$, a contradiction. A zero maximum means the polynomial is identically zero.

For $|z_0|=1$ and $\rho=1/N$, the circle $z_0+\rho e^{it}$ has $|F|\le(1+1/N)^{2N}M\le e^2M$. Expanding the finite Taylor polynomial about $z_0$ and integrating its first Fourier coefficient gives

$$
F'(z_0)\rho=\frac1{2\pi}\int_0^{2\pi}F(z_0+\rho e^{it})e^{-it}\,dt,
$$

so $|F'(z_0)|\le e^2NM$. Since $r(\cos\theta)=e^{-iN\theta}F(e^{i\theta})$, differentiation gives

$$
|r'(t)|\le\frac{(e^2+1)NM}{\sqrt{1-t^2}},\qquad -1<t<1.
$$

All integrations used here integrate finite trigonometric sums; neither Cauchy's theorem nor a general holomorphic-function result is needed.

## Extrapolation from the central cube

Interpolate a univariate polynomial of degree at most $n$ at the $n+1$ nodes $t_j=-1/2+j/n$. The denominator of its $j$th fundamental polynomial has modulus $n^{-n}j!(n-j)!$. For $t\in[-1,1]$, every numerator factor has modulus at most $3/2$. Hence the sum of the absolute fundamental polynomials is at most

$$
\left(\frac{3n}{2}\right)^n\sum_{j=0}^n\frac1{j!(n-j)!}=\frac{(3n)^n}{n!}\le(3e)^n.
$$

The final inequality follows from $\log(n!)\ge\int_1^n\log t\,dt\ge n\log n-n$. Apply this interpolation successively in each coordinate, holding all other coordinates fixed. Since total degree at most $n$ implies coordinate degree at most $n$, this proves

$$
M_p:=\|p\|_{Q}\le(3e)^{dn}\|p\|_{[-1/2,1/2]^d}.
$$

## Damping and sampling

The zero polynomial is trivial, so assume $M_p>0$. Define the polynomial

$$
q(t)=p(t)\prod_{j=1}^d(1-t_j^2)^n,\qquad M_q=\|q\|_Q.
$$

The central-cube bound gives $M_q\ge(3/4)^{dn}(3e)^{-dn}M_p=A^{-n}M_p$. If some coordinate satisfies $|t_j|\ge1-\delta$, then $1-t_j^2\le2\delta=1/(2A)$, while all the other weight factors lie in $[0,1]$. Thus

$$
|q(t)|\le(2A)^{-n}M_p\le2^{-n}M_q<M_q.
$$

A maximizer $t_*$ of $|q|$ therefore satisfies $|(t_*)_j|<1-\delta$ in every coordinate. Choose $\xi\in X$ with $|\xi-t_*|_2\le h$. The condition $nh\le\eta$ implies $h<\delta/2$, so the segment from $t_*$ to $\xi$ lies where $|t_j|\le1-\delta/2$ for every $j$.

For each coordinate the polynomial $q$ has degree at most $3n$. Apply the elementary derivative bound to that coordinate, with the remaining coordinates fixed. Throughout the segment, $\sqrt{1-t_j^2}\ge\delta/2$, and $e^2+1<4e$. Consequently

$$
|\partial_jq(t)|\le\frac{24e}{\delta}nM_q.
$$

The fundamental theorem of calculus along the segment and $\sum_j|\xi_j-(t_*)_j|\le\sqrt d\,h$ give

$$
M_q\le |q(\xi)|+\frac{24e\sqrt d}{\delta}nhM_q\le \max_X|p|+\frac12M_q.
$$

Therefore $M_q\le2\max_X|p|$ and $M_p\le A^nM_q\le2A^n\max_X|p|$, as claimed.

## Finite coefficient representation without an infinite choice axiom

Enumerate the finite set $X$ as $\xi_1,\ldots,\xi_m$. In $\mathbb R^m$ let $E$ be the image of the real polynomials under restriction to $X$. The norming inequality makes $f((p(\xi_j))_j)=p(x)$ well defined, and its norm for the supremum norm is at most $L=2A^n$.

Here is an elementary finite-dimensional extension argument. If $v\notin E$, choose $c\in\mathbb R$ satisfying all the inequalities

$$
f(e)-L\|e-v\|_\infty\le c\le f(e)+L\|e-v\|_\infty,\qquad e\in E.
$$

Such $c$ exists: every lower endpoint is at most every upper endpoint because $f(e)-f(e')\le L\|e-e'\|_\infty\le L(\|e-v\|_\infty+\|e'-v\|_\infty)$; the endpoints for $e=0$ bound the relevant supremum and infimum. Extend $f$ by assigning $f(v)=c$. These inequalities and scaling show $|f(e+tv)|\le L\|e+tv\|_\infty$ for all real $t$. Add the standard coordinate vectors in their fixed order whenever one lies outside the current subspace. At most $m$ repetitions extend $f$ to all of $\mathbb R^m$ with the same bound. Writing this extension as $\sum_j a_jz_j$ yields $\sum_j|a_j|\le L$, by evaluating at $z_j=\operatorname{sign}(a_j)$. Real polynomial reproduction follows by construction; complex reproduction follows by applying it to real and imaginary parts. This uses only finite iteration and completeness of $\mathbb R$.

## Scaling

For a cube $Q_b$ of side length $b>0$, an affine coordinate map to $[-1,1]^d$ scales the fill distance to $2h/b$. Thus the same conclusions hold on $Q_b$ if $nh\le b\eta/2$. The coefficient bound is independent of $b$, $h$, $|X|$, separation, and the selected evaluation point. In particular, for sufficiently small $h$, taking $n=\lfloor b\eta/(2h)\rfloor$ gives $n\asymp h^{-1}$ and coefficient variation at most $2A^n$. This is the growth needed for Gaussian moment estimates of order $n$ to yield $\exp(-c|\log h|/h)$.
