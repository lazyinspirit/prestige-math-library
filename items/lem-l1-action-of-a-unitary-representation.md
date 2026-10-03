---
id: lem-l1-action-of-a-unitary-representation
kind: lemma
title: The L1 action of a strongly continuous unitary representation
deps:
- def-bochner-integrable-function
- thm-bochner-integrability-criterion
- lem-bochner-integral-norm-inequality
- def-strongly-continuous-unitary-representation
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- def-convolution-on-cc-and-l1-of-a-group
- lem-l1-convolution-norm-inequality
- lem-the-l1-involution-is-isometric-and-reverses-convolution
- cor-normalized-haar-probability-on-a-compact-group
- def-left-and-right-regular-unitary-representations
- lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
- thm-integrals-are-invariant-under-measure-preserving-maps
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
- def-bounded-linear-operator
- def-operator-norm
- def-axiom-of-choice
- def-strongly-measurable-banach-valued-function
- cor-measurable-functions-admit-dominated-simple-approximations
- def-compactly-supported-convolution-on-a-group
- lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
- thm-bounded-linear-maps-commute-with-bochner-integration
- def-matrix-coefficient-of-a-unitary-representation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §5.3, Proposition 5.3.1 and the action of $L^1$ functions, printed pp. 225–230
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: §2 and Definition 2.3, printed pp. 3–4 (integration of a measure against a representation)
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $K$ be a compact Hausdorff group with normalized Haar probability $\mu$ and let $\pi:K\to U(H)$ be a strongly continuous unitary representation on a complex Hilbert space $H$ ([[def-strongly-continuous-unitary-representation]]). For $f\in L^1(K,\mu;\mathbb C)$ ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]) and $v\in H$ the map $k\mapsto f(k)\pi(k)v$ is Bochner integrable, and
$$\pi(f)v:=\int_Kf(k)\pi(k)v\,d\mu(k)$$
defines a bounded linear operator $\pi(f)\in\mathcal B(H)$ with $\|\pi(f)\|\le\|f\|_1$ (the **L1 action** of $f$, [[def-bounded-linear-operator]], [[def-operator-norm]]). It satisfies:

1. $\pi(f*g)=\pi(f)\pi(g)$ and $\pi(f^*)=\pi(f)^*$ for the L1 convolution product and involution ([[def-convolution-on-cc-and-l1-of-a-group]], [[lem-the-l1-involution-is-isometric-and-reverses-convolution]]);
2. $\pi(k)\pi(f)=\pi(\lambda(k)f)$ and $\pi(f)\pi(k)=\pi(\rho(k)^{-1}f)$ for every $k\in K$, where $\lambda$ and $\rho$ are the left and right regular actions on $L^1(K)$ of [[def-left-and-right-regular-unitary-representations]] (so that $\rho(k)^{-1}f(x)=f(xk^{-1})$ on the compact group);
3. $\|\pi(f)v-v\|\le\int_K|f|\,\|\pi(k)v-v\|\,d\mu(k)$ for $f\in C(K)$ with $\int_K f\,d\mu=1$; consequently for every $v\ne0$ there is $f\in C(K)$ with $f\ge0$, $\int f\,d\mu=1$ and $\pi(f)v\ne0$.

## Facts & Assumptions

[F1] $L^1(K,\mu;\mathbb C)$ consists of the almost-everywhere equivalence classes of measurable complex functions with $\|f\|_1=\int|f|\,d\mu<\infty$, and $C(K;\mathbb C)$ is dense in $L^1(K,\mu;\mathbb C)$. ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]])

[F2] A function into a Banach space is strongly measurable when it is the almost-everywhere pointwise norm limit of measurable simple functions; continuous functions from a compact space into a Banach space are strongly measurable, and almost-everywhere pointwise limits of strongly measurable functions are strongly measurable. ([[def-strongly-measurable-banach-valued-function]])

[F3] Every real measurable function is the pointwise limit of a sequence of real simple functions each bounded in absolute value by it. ([[cor-measurable-functions-admit-dominated-simple-approximations]])

[F4] A strongly measurable function with finite norm integral is Bochner integrable; the Bochner integral is the norm limit of the integrals of $L^1$-approximating simple functions, is independent of the approximating sequence and of changes on null sets, satisfies $\|\int_Eg\,d\mu\|\le\int_E\|g\|\,d\mu$, and every bounded linear operator commutes with it. ([[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]])

[F5] The convolution of $f,g\in C_c(G)$ is $(f*g)(x)=\int_Gf(y)g(y^{-1}x)\,d\mu(y)$; the $L^1$ convolution extends it, is bounded with $\|f*g\|_1\le\|f\|_1\|g\|_1$, and for $f\in L^1$ and $g\in C_c$ the class $f*g$ is the $L^1$ limit of $u_n*g$ for any $u_n\in C_c$ with $u_n\to f$; the involution is $f^*(x)=\Delta_G(x^{-1})\overline{f(x^{-1})}$ with $\|f^*\|_1=\|f\|_1$. ([[def-compactly-supported-convolution-on-a-group]], [[def-convolution-on-cc-and-l1-of-a-group]], [[lem-l1-convolution-norm-inequality]], [[lem-the-l1-involution-is-isometric-and-reverses-convolution]])

[F6] The normalized Haar probability is left invariant, right invariant and inversion invariant, so integrals of integrable functions are unchanged by translations and inversion; compact groups are unimodular, so $\Delta_K\equiv1$. ([[cor-normalized-haar-probability-on-a-compact-group]], [[thm-integrals-are-invariant-under-measure-preserving-maps]])

[F7] On a product of sigma-finite measure spaces a product-measurable $L^1$ function has equal iterated integrals. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F8] The left regular action is $\lambda(k)f(x)=f(k^{-1}x)$ and the right regular action is $\rho(k)f(x)=f(xk)$ for the $L^2$ normalization, so on the compact group $\rho(k)^{-1}f(x)=f(xk^{-1})$; each $\pi(k)$ is a unitary operator with $\pi(k)^{-1}=\pi(k^{-1})$, and matrix coefficients are $c^{\pi}_{v,w}(k)=\langle\pi(k)v,w\rangle$. ([[def-left-and-right-regular-unitary-representations]], [[def-strongly-continuous-unitary-representation]], [[def-matrix-coefficient-of-a-unitary-representation]])

[F9] If $K$ is a compact subset of an open set $U$ in an LCH space, there is a continuous compactly supported $g$ with $\mathbf 1_K\le g\le\mathbf 1_U$. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

[F10] A linear map is bounded exactly when some finite $C$ satisfies $\|Tx\|\le C\|x\|$ for all $x$, and the operator norm is the least such bound. ([[def-bounded-linear-operator]], [[def-operator-norm]])

## Proof

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability $\mu$, a strongly continuous unitary representation $\pi$ on $H$, and a class $f\in L^1(K,\mu;\mathbb C)$ with a measurable representative.

1.1 Fix $f\in L^1(K,\mu;\mathbb C)$ and $v\in H$: the orbit map $k\mapsto\pi(k)v$ is continuous on the compact space $K$ and hence strongly measurable, because for each $n$ the compact set $\pi(K)v$ is covered by finitely many balls of radius $1/n$ whose open preimages disjointify to Borel sets on which the values at chosen centres define a measurable simple function within $1/n$ of $\pi(\cdot)v$; choosing a measurable representative of $f$, [F3] applied to its real and imaginary parts provides scalar simple functions $s_n$ with $s_n\to f$ pointwise, so the simple products $s_nt_n$ converge pointwise to $f(k)\pi(k)v$, which is therefore strongly measurable by [F2]; since $\int_K\|f(k)\pi(k)v\|\,d\mu(k)=\|v\|\|f\|_1<\infty$, the criterion [F4] makes $k\mapsto f(k)\pi(k)v$ Bochner integrable, and $\pi(f)v:=\int_Kf(k)\pi(k)v\,d\mu(k)$ is well defined and unchanged when $f$ or $v$ is changed on a null set; the integral is linear in the integrand, so $v\mapsto\pi(f)v$ is linear, and the norm inequality gives $\|\pi(f)v\|\le\int_K|f(k)|\|\pi(k)v\|\,d\mu(k)=\|f\|_1\|v\|$, so by [F10] the operator $\pi(f)$ is bounded with $\|\pi(f)\|\le\|f\|_1$. [F1, F2, F3, F4, F10]

2.1 For every bounded linear functional $S:H\to\mathbb C$ the commutation theorem [F4] gives $S(\pi(f)v)=\int_Kf(k)S(\pi(k)v)\,d\mu(k)$, and taking $S=\langle\cdot,w\rangle$ gives the pairing formula $\langle\pi(f)v,w\rangle=\int_Kf(k)\langle\pi(k)v,w\rangle\,d\mu(k)$, which applied to $x\mapsto\pi(x)\pi(g)v$ also gives $\langle\pi(x)\pi(g)v,w\rangle=\int_Kg(y)\langle\pi(x)\pi(y)v,w\rangle\,d\mu(y)$; combining the two, $\langle\pi(f)\pi(g)v,w\rangle=\int_K\int_Kf(x)g(y)\langle\pi(xy)v,w\rangle\,d\mu(y)\,d\mu(x)$ for $f,g\in C(K)$ by [F7], since the integrand is bounded and $f,g$ are integrable on the probability space, and the substitution $z=xy$ with left invariance [F6] turns this into $\int_K(f*g)(z)\langle\pi(z)v,w\rangle\,d\mu(z)=\langle\pi(f*g)v,w\rangle$ by [F5]. Both sides of $\pi(f*g)=\pi(f)\pi(g)$ are bounded bilinear in $(f,g)$ with norm at most $\|f\|_1\|g\|_1$ by [F5] and step 1.1, and they agree on the dense subset $C(K)\times C(K)$ by [F1], so the identity holds for all $f,g\in L^1(K)$; this is the first identity of (1). [F1, F4, F5, F6, F7, step 1.1]

3.1 For $v,w\in H$, the pairing formula of step 2.1 gives $\langle\pi(f)^*v,w\rangle=\langle v,\pi(f)w\rangle=\overline{\int_Kf(x)\langle\pi(x)w,v\rangle\,d\mu(x)}=\int_K\overline{f(x)}\langle v,\pi(x)w\rangle\,d\mu(x)=\int_K\overline{f(x)}\langle\pi(x^{-1})v,w\rangle\,d\mu(x)$, and substituting $y=x^{-1}$, which preserves $\mu$ by [F6], turns this into $\int_K\overline{f(y^{-1})}\langle\pi(y)v,w\rangle\,d\mu(y)=\int_Kf^*(y)\langle\pi(y)v,w\rangle\,d\mu(y)=\langle\pi(f^*)v,w\rangle$ because $\Delta_K\equiv1$ gives $f^*(y)=\overline{f(y^{-1})}$ by [F5]; since $v,w$ are arbitrary, $\pi(f^*)=\pi(f)^*$, which is the second identity of (1). [F5, F6, step 1.1, step 2.1]

3.2 By the pairing formula of step 2.1 and [F8], $\langle\pi(k)\pi(f)v,w\rangle=\langle\pi(f)v,\pi(k)^{-1}w\rangle=\int_Kf(x)\langle\pi(x)v,\pi(k)^{-1}w\rangle\,d\mu(x)=\int_Kf(x)\langle\pi(k)\pi(x)v,w\rangle\,d\mu(x)=\int_Kf(x)\langle\pi(kx)v,w\rangle\,d\mu(x)$, and substituting $z=kx$ with left invariance [F6] gives $\int_Kf(k^{-1}z)\langle\pi(z)v,w\rangle\,d\mu(z)=\langle\pi(\lambda(k)f)v,w\rangle$; similarly $\langle\pi(f)\pi(k)v,w\rangle=\int_Kf(x)\langle\pi(x)\pi(k)v,w\rangle\,d\mu(x)=\int_Kf(x)\langle\pi(xk)v,w\rangle\,d\mu(x)$ and substituting $z=xk$ gives $\int_Kf(zk^{-1})\langle\pi(z)v,w\rangle\,d\mu(z)=\langle\pi(\rho(k)^{-1}f)v,w\rangle$ because $\rho(k)^{-1}f(z)=f(zk^{-1})$ on the compact group; as $v,w$ are arbitrary, the two covariance identities of (2) follow. [F6, F8, step 1.1, step 2.1]

4.1 For $f\in C(K)$ with $\int_Kf\,d\mu=1$ the linearity of the Bochner integral gives $\pi(f)v-v=\int_Kf(k)(\pi(k)v-v)\,d\mu(k)$, so the norm inequality yields $\|\pi(f)v-v\|\le\int_K|f(k)|\,\|\pi(k)v-v\|\,d\mu(k)$; if $v\ne0$, continuity of $k\mapsto\pi(k)v$ at the identity gives an open identity neighbourhood $U$ with $\|\pi(k)v-v\|<\|v\|/2$ for $k\in U$, and [F9] applied to $\{e\}\subseteq U$ provides a nonnegative continuous $g$ with $g(e)>0$ and vanishing outside $U$, so $f:=g/\int_Kg\,d\mu$ is nonnegative continuous with integral one and vanishing outside $U$, whence $\|\pi(f)v-v\|<\|v\|/2$ and $\pi(f)v\ne0$; this proves (3). The Axiom of Choice is consumed through the normalized Haar probability and the cited Bochner, convolution and density suppliers; the computations above are choice-free apart from those inputs. [F1, F4, F6, F8, F9, step 1.1] ∎
