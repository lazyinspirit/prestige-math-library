---
page: measurable-hilbert-fields-and-direct-integral-operators-examples
title: Measurable Hilbert Fields and Direct-Integral Operators — Examples
status: published
items: []
examples: [ex-direct-integral-of-a-constant-hilbert-field, ex-multiplicity-two-diagonal-representation, ex-a-measurable-two-dimensional-operator-field]
---

The companion exercises the general direct-integral machinery of the main page
on the simplest fields, where every operator identity can be checked by
computation, and it displays one operator outside the diagonal algebra.

[[ex-direct-integral-of-a-constant-hilbert-field]] fixes a separable complex
Hilbert space $K$ with a chosen finite or countable orthonormal basis
$(b_j)_{j\in J}$ and the constant field $H_x=K$ over a sigma-finite
standard-Borel measure space $(X,\mu)$. The constant sections $e_j(x)=b_j$
form a countable fundamental family, padded by zero sections when the basis is
finite or empty, and the direct integral is identified by the coordinate map
$[\xi]\mapsto([\langle\xi(\cdot),b_j\rangle])_j$ with
$L^2(X,\mu;K)$, the square-integrable coefficient maps modulo almost-everywhere
equality, and with the Hilbert sum
$\bigoplus_{j\in J}L^2(X,\mu;\mathbb C)$. Parseval and monotone convergence
give the coordinate norm identity
$\sum_j\|\langle\xi,b_j\rangle\|_2^2=\int_X\|\xi(x)\|^2\,d\mu(x)$, which makes
the map isometric and well-defined on classes; finite-support tuples are
realized by finite-coordinate sections built from Borel representatives, and
arbitrary square-summable tuples are reached by their truncations using
completeness of the direct integral, so the map is onto. When $X$ is countable
with counting measure the same construction is the ordinary Hilbert sum
$\bigoplus_{x\in X}K$.

[[ex-multiplicity-two-diagonal-representation]] is the standard
multiplicity-two model. On $\mathcal H=L^2([0,1],\lambda;\mathbb C^2)$, with
$\lambda$ Borel Lebesgue measure, $S=M_t\otimes I_2$ is bounded self-adjoint,
its essential range is exactly $[0,1]$, and its spectral projections are
$E(B)=M_{\mathbf 1_B}\oplus M_{\mathbf 1_B}$. The diagonal algebra
$\mathcal D=\{M_f\otimes I_2:f\in L^\infty\}$ is an abelian concrete von
Neumann algebra with $\mathcal D=W^*(S)$: one inclusion is WOT-closedness, and
the other approximates a bounded Borel multiplier by clipped continuous
functions whose squared approximation errors are summable, so the uniformly
bounded pointwise convergence clause of the Borel calculus gives strong
convergence. The two constant coordinate vectors are cyclic, their scalar
spectral measures are both $\lambda$, and the weights $1/4$ and $1/8$ make
$\mu=(3/8)\lambda$ with Radon--Nikodym densities $h_1=h_2=8/3$; the square-root
map $(f,g)\mapsto\sqrt{8/3}(f,g)$ is a unitary onto
$L^2([0,1],\mu;\mathbb C^2)$ intertwining $S$ with the coordinate multiplier,
so the fixed-generator multiplicity is two almost everywhere. The commutant
$\mathcal D'$ is exactly the algebra of essentially bounded Borel measurable
$2\times2$ matrix fields modulo almost-everywhere equality, and the matrix
units $E_{12},E_{21}$ witness that it is nonabelian.

[[ex-a-measurable-two-dimensional-operator-field]] then exhibits a matrix
field on that model that commutes with the diagonal algebra without belonging
to it. For
$$T_t=\begin{pmatrix}0&t\\1-t&0\end{pmatrix},\qquad 0\le t\le1,$$
the four constant-basis coefficients $0,t,1-t,0$ are Borel, so the field is
weakly measurable; $\|T_tz\|^2=t^2|z_2|^2+(1-t)^2|z_1|^2$ gives
$\|T_t\|=\max\{t,1-t\}$, which exceeds every $M<1$ on a positive-measure
interval near each endpoint and is at most $1$ everywhere, so the essential supremum is exactly $1$
and the induced operator has norm $1$. The action theorem identifies the
adjoint field with $\begin{pmatrix}0&1-t\\t&0\end{pmatrix}$ and the square
field with $t(1-t)I_2$. Since scalar matrices commute with $T_t$ pointwise,
the induced operator lies in $\mathcal D'$; and the image of $\eta=(\mathbf
1,0)$ separates it from every diagonal multiplier, because
$\|T\eta-M_f\eta\|^2=\|f\|_2^2+\int_0^1(1-t)^2\,d\lambda(t)\ge1/3$ for every
$f\in L^\infty$. Thus $T\in\mathcal D'\setminus\mathcal D$, and this
two-dimensional field is the smallest concrete instance of the main page's
commutant theorem.
