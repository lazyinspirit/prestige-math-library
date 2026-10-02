---
id: ex-chebyshev-extremal-polynomials-and-capacity
kind: example
title: "Chebyshev extremals and the exact disk Fekete polynomial"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-chebyshev-constant-compact-set
  - def-chebyshev-polynomials-first-and-second-kind
  - def-complex-exponential
  - def-complex-integer-powers
  - def-complex-polynomial-degree-and-monic
  - def-determinant-of-a-square-matrix
  - def-fekete-points-and-transfinite-diameter
  - def-inner-product-norm
  - def-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-logarithmic-capacity-compact-set
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-vandermonde-polynomial
  - def-weak-convergence-of-borel-probability-measures
  - cor-cauchy-inequalities
  - cor-sum-of-roots-of-unity
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
  - ex-logarithmic-capacity-of-a-real-interval
  - ex-logarithmic-capacity-of-disc-and-equilibrium-circle
  - lem-complex-conjugation-and-modulus-laws
  - lem-nth-root-of-constant-tends-to-one
  - lem-power-monotone
  - prop-pythagorean-parallelogram-and-polarisation-identities
  - thm-algebra-of-limits
  - thm-chebyshev-minimax-monic-polynomial
  - thm-chebyshev-multiple-angle-identities
  - thm-complex-nth-roots-and-roots-of-unity
  - thm-complex-numbers-form-a-field
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - thm-finite-dimensional-isometry-characterisations
  - thm-gram-schmidt-orthonormalisation
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
  - thm-logarithmic-capacity-equals-transfinite-diameter
  - thm-nth-roots-exist
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Examples 1.10 and 1.11, Lemma 1.14 and Theorem 1.18, printed pp. 173–178"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $K=\overline{D(a,R)}$ be a closed disc with
$R>0$, and let $[-1,1]\subseteq\mathbb R\subseteq\mathbb C$ be the real unit
interval, with the extremal norms $t_n$ and Chebyshev constant
$\operatorname{cheb}$ of [[def-chebyshev-constant-compact-set]] and the
capacity of [[def-logarithmic-capacity-compact-set]].

1. For the disc, $t_n(K)=R^n$ and $\operatorname{cheb}(K)=R=\operatorname{cap}(K)$,
   attained by the monic polynomial $(z-a)^n$.
2. For the interval, $t_n([-1,1])=2^{1-n}$ and
   $\operatorname{cheb}([-1,1])=\frac12=\operatorname{cap}([-1,1])$, attained by
   the monic Chebyshev polynomial $2^{1-n}T_n$.
3. For each $n\ge2$ the $n$-th roots of unity form an $n$-point Fekete tuple of
   the closed unit disc, with Fekete polynomial $F_n(z)=z^n-1$; and
   $\delta_n(\overline{D(0,1)})=n^{1/(n-1)}$.
4. The empirical probability measures of these tuples converge weakly to
   normalized arclength on the unit circle, and
   $\|z^n-1\|_{\overline{D(0,1)}}=2$, so the $n$-th root of its norm tends to
   $1=\operatorname{cheb}(\overline{D(0,1)})$.

The Axiom of Choice is inherited from the equilibrium theory that supplies the
two capacity values and the weak convergence; the Cauchy estimate, the
minimax comparison, the Vandermonde determinant and the Gram–Schmidt bound are
choice-free.

## Facts & Assumptions

**Given:** a closed disc $K=\overline{D(a,R)}$ with $R>0$, the interval
$[-1,1]$, the closed unit disc $\overline{D(0,1)}$, and the conventions of
[[def-chebyshev-constant-compact-set]],
[[def-fekete-points-and-transfinite-diameter]] and
[[def-logarithmic-capacity-compact-set]].

[F1] For nonempty compact $K$: $\|p\|_K=\sup_{z\in K}|p(z)|$ is finite and
attained, $t_n(K)=\inf\{\|p\|_K:p\text{ monic of degree }n\}$ is a real number,
$\operatorname{cheb}(K)=\inf_{n\ge1}t_n(K)^{1/n}$, and for the disc and the
interval the capacities are $\operatorname{cap}(\overline{D(a,R)})=R$ and
$\operatorname{cap}([-1,1])=\frac12$
([[def-chebyshev-constant-compact-set]],
[[ex-logarithmic-capacity-of-disc-and-equilibrium-circle]],
[[ex-logarithmic-capacity-of-a-real-interval]]).

[F2] For nonempty compact $K$ and $n\ge2$ the $n$-th Fekete diameter is
$\delta_n(K)=\bigl(\max_{z\in K^n}\prod_{i<j}|z_i-z_j|\bigr)^{2/[n(n-1)]}$,
tuples attaining the maximum are Fekete tuples, and the associated polynomial
$F_n(Z)=\prod_j(Z-z_j)$ is monic of degree $n$
([[def-fekete-points-and-transfinite-diameter]],
[[def-complex-polynomial-degree-and-monic]]).

[F3] Assume the Axiom of Choice. For every compact $K$ one has
$\operatorname{cap}(K)=\tau(K)=\operatorname{cheb}(K)$; if
$\operatorname{cap}(K)>0$, then the empirical probability measures of any
sequence of $n$-point Fekete tuples of $K$ converge weakly to the unique
equilibrium measure $\mu_K$
([[thm-logarithmic-capacity-equals-transfinite-diameter]],
[[def-weak-convergence-of-borel-probability-measures]]).

[F4] Let $f$ be holomorphic on $D(a,R)$ and let $0<r<R$ with $|f(\zeta)|\le M$
on $|\zeta-a|=r$; then $|f^{(n)}(a)|\le n!M/r^n$
([[cor-cauchy-inequalities]]). A complex polynomial
$P(z)=\sum_{k=0}^n a_kz^k$ is entire with $P'(z)=\sum_{k=1}^nk a_kz^{k-1}$,
so by iteration the $n$-th derivative of a monic polynomial of degree $n$ is
the constant $n!$ ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[F5] For $n\ge1$ the polynomial $P_n=2^{1-n}T_n$ is monic of degree $n$, and
for every monic real polynomial $q$ of degree $n$ one has
$\max_{x\in[-1,1]}|q(x)|\ge2^{1-n}=\max_{x\in[-1,1]}|P_n(x)|$
([[thm-chebyshev-minimax-monic-polynomial]],
[[def-chebyshev-polynomials-first-and-second-kind]],
[[thm-chebyshev-multiple-angle-identities]]).

[F6] A complex polynomial $p$ of degree $n$ has real part $\operatorname{Re}p$,
a real polynomial whose $x^n$ coefficient is the real part of the $x^n$
coefficient of $p$; hence $\operatorname{Re}p$ is monic of degree $n$ when $p$
is monic, and $|\operatorname{Re}p(x)|\le|p(x)|$ for every real $x$
([[def-real-polynomial-degree-leading-coefficient-and-monic]],
[[thm-complex-numbers-form-a-field]],
[[lem-complex-conjugation-and-modulus-laws]]).

[F7] Determinant conventions and rules: the determinant is the Leibniz sum
$\det(A)=\sum_\sigma\operatorname{sgn}(\sigma)\prod_i a_{\sigma(i),i}$
([[def-determinant-of-a-square-matrix]]); it is alternating and multilinear in
the rows and columns ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]);
$\det(AB)=\det A\det B$ ([[thm-determinant-multiplicative]]); and the
determinant of an upper triangular matrix is the product of its diagonal
entries ([[thm-determinant-of-a-triangular-matrix]]).

[F8] Inner products, norms and orthogonalisation: $\lVert v\rVert^2=\langle v,v\rangle$
for the induced norm ([[def-inner-product-space]], [[def-inner-product-norm]]);
a finite linearly independent list has an orthonormal list spanning the same
successive spans ([[thm-gram-schmidt-orthonormalisation]]); for orthogonal
vectors $\lVert u+v\rVert^2=\lVert u\rVert^2+\lVert v\rVert^2$
([[prop-pythagorean-parallelogram-and-polarisation-identities]]); and a linear
isometry carrying an orthonormal basis to an orthonormal basis satisfies
$|\det T|=1$
([[def-linear-isometry-and-orthogonal-or-unitary-operator]],
[[thm-finite-dimensional-isometry-characterisations]],
[[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]).

[F9] The $n$-th roots of unity
$\omega_j=\exp(2\pi ij/n)$, $j=0,\dots,n-1$, are $n$ distinct complex numbers
of modulus one, and $z^n-1$ has exactly these $n$ roots, each of multiplicity
one ([[thm-complex-nth-roots-and-roots-of-unity]],
[[def-complex-exponential]],
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]],
[[def-complex-integer-powers]]); a monic polynomial of degree $n$ with this
root list is $\prod_j(z-\omega_j)$, by uniqueness of the root factorisation
([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).
The Vandermonde polynomial is
$\Delta_n(x_1,\dots,x_n)=\prod_{i<j}(x_i-x_j)$
([[def-vandermonde-polynomial]]).

[F10] Limits and roots: $t^{1/n}\to1$ for every fixed $t>0$
([[lem-nth-root-of-constant-tends-to-one]]); sums, products and quotients of
convergent sequences converge to the corresponding combination
([[thm-algebra-of-limits]]); nonnegative $n$-th roots exist and are monotone
([[thm-nth-roots-exist]], [[lem-power-monotone]]).



## Verification

**Proof technique:** direct.

1.1 **Disc: Cauchy lower bound.** Let $p$ be a monic complex polynomial of degree $n$ and $K=\overline{D(a,R)}$. By [F4] the polynomial $p$ is entire, so it is holomorphic on $D(a,R')$ for every $R'>R$, and its $n$-th derivative is the constant $p^{(n)}=n!$; applying Cauchy's inequality [F4] with $r=R$ and $M=\|p\|_K$, and noting that $|p|\le\|p\|_K$ holds on the circle $|\zeta-a|=R$, gives $n!=|p^{(n)}(a)|\le n!\|p\|_K/R^n$, hence $\|p\|_K\ge R^n$. [F1, F4, algebra]

1.2 **Interval: complex-to-real reduction.** Let $p$ be a monic complex polynomial of degree $n$ and put $q:=\operatorname{Re}p$. By [F6] the polynomial $q$ is a monic real polynomial of degree $n$ with $|q(x)|\le|p(x)|$ for all real $x$, so $\max_{x\in[-1,1]}|q(x)|\le\|p\|_{[-1,1]}$; the minimax theorem [F5] gives $2^{1-n}\le\max_{x\in[-1,1]}|q(x)|$, so $\|p\|_{[-1,1]}\ge2^{1-n}$. [F5, F6, algebra]

1.3 **Vandermonde determinant.** For $m\ge1$ and $w_0,\dots,w_{m-1}\in\mathbb C$ the matrix $V_m=(w_j^k)_{j,k=0}^{m-1}$ satisfies $\det V_m=\prod_{i<j}(w_j-w_i)$. Indeed for $m=1$ both sides are $1$; for $m\ge2$, replacing the $j$-th row of $V_m$ by itself minus the first row does not change the determinant by [F7], because the determinant is multilinear and alternating and the subtracted term has two equal rows; the new $j$-th row is $(w_j-w_0)\bigl(0,q_1(w_j),\dots,q_{m-1}(w_j)\bigr)$ with $q_k(z)=z^{k-1}+z^{k-2}w_0+\dots+w_0^{k-1}$, so multilinearity [F7] factors $\prod_{j\ge1}(w_j-w_0)$ out of the last $m-1$ rows; the remaining matrix has first row $(1,w_0,\dots,w_0^{m-1})$ and, below it, zeros in the first column, which Leibniz's formula [F7] evaluates as the determinant of the $(m-1)\times(m-1)$ matrix of the polynomials $q_k$ at $w_1,\dots,w_{m-1}$; since $q_k(z)=z^{k-1}+(\text{lower order terms})$, the basis change from $(1,z,\dots,z^{m-2})$ to $(q_1,\dots,q_{m-1})$ is unitriangular and hence a determinant-preserving sequence of column operations [F7], so that last determinant equals $\det V_{m-1}(w_1,\dots,w_{m-1})$. [F7, algebra]

1.4 **Gram–Schmidt (Hadamard) bound.** Let $c_0,\dots,c_{m-1}\in\mathbb C^m$ be the columns of a matrix $A$. If they are linearly dependent then $\det A=0$ by the alternating multilinearity in [F7]; otherwise [F8] supplies an orthonormal list $e_0,\dots,e_{m-1}$ with $\operatorname{span}(e_0,\dots,e_k)=\operatorname{span}(c_0,\dots,c_k)$ for every $k$, and writing $u_k:=c_k-\sum_{j<k}\langle c_k,e_j\rangle e_j$ one has $c_k=\sum_{j\le k}\langle c_k,e_j\rangle e_j$, so $A=QR$ with $Q$ the matrix of the $e_j$ and $R$ upper triangular with diagonal entries $R_{kk}=\langle c_k,e_k\rangle=\lVert u_k\rVert$; moreover $\lVert u_k\rVert\le\lVert c_k\rVert$, because $u_k$ is orthogonal to $\sum_{j<k}\langle c_k,e_j\rangle e_j$ and Pythagoras [F8] gives $\lVert c_k\rVert^2=\lVert u_k\rVert^2+\lVert\sum_{j<k}\langle c_k,e_j\rangle e_j\rVert^2$. The matrix $Q$ has orthonormal columns, so it is a linear isometry of $\mathbb C^m$ and $|\det Q|=1$ by [F8]; hence by [F7] $|\det A|=|\det Q|\,|\det R|=\prod_kR_{kk}=\prod_k\lVert u_k\rVert\le\prod_k\lVert c_k\rVert$. [F7, F8, algebra]

2.1 **Disc: extremal value.** The monic polynomial $(z-a)^n$ has $\|(z-a)^n\|_K=R^n$, so step 1.1 gives $t_n(K)=R^n$ for every $n\ge1$; hence $\operatorname{cheb}(K)=\inf_{n\ge1}t_n(K)^{1/n}=\inf_{n\ge1}R=R$. [step 1.1, F1, algebra]

2.2 **Interval: extremal value and Chebyshev constant.** By [F5] the monic polynomial $P_n=2^{1-n}T_n$ has $\max_{x\in[-1,1]}|P_n(x)|=2^{1-n}$, so step 1.2 gives $t_n([-1,1])=2^{1-n}$; therefore $\operatorname{cheb}([-1,1])=\inf_{n\ge1}2^{(1-n)/n}$, and since $2^{(1-n)/n}=2^{1/n}/2$ with $2^{1/n}\to1$ by [F10], that infimum is $\frac12$. [step 1.2, F5, F10, algebra]

2.3 **Vandermonde identity by induction.** Induction on $m$ in the recursion of step 1.3 gives $\det V_m=\prod_{j\ge1}(w_j-w_0)\cdot\prod_{1\le i<j\le m-1}(w_j-w_i)=\prod_{i<j}(w_j-w_i)$ for every $m\ge1$; in particular $|\Delta_n(z_0,\dots,z_{n-1})|=|\det V_n|$ by [F9]. [step 1.3, F9, algebra]

3.1 **Disc: capacity.** By [F1], $\operatorname{cap}(K)=R$, so $\operatorname{cheb}(K)=R=\operatorname{cap}(K)$. [step 2.1, F1]

3.2 **Interval: capacity.** By [F1], $\operatorname{cap}([-1,1])=\frac12$, so $\operatorname{cheb}([-1,1])=\frac12=\operatorname{cap}([-1,1])$. [step 2.2, F1]

3.3 **Unit disc: universal bound.** Let $z_0,\dots,z_{n-1}\in\overline{D(0,1)}$ and $A=(z_j^k)_{j,k=0}^{n-1}$. Its columns are $c_k=(z_j^k)_{j=0}^{n-1}$ with $\lVert c_k\rVert^2=\sum_j|z_j|^{2k}\le n$ by [F8], [F9] and $|z_j|\le1$; and $|{\det A}|=|\Delta_n(z)|$ by step 2.3, so [F2] gives the Fekete bound $\prod_{i<j}|z_i-z_j|\le n^{n/2}$. [step 2.3, F2, F8, F9, algebra]

4.1 **Unit disc: the roots of unity are Fekete.** Let $\omega_{j}=\exp(2\pi ij/n)$, $j=0,\dots,n-1$, which are $n$ distinct points of the unit circle by [F9]. For $k\ne\ell$ put $d:=k-\ell$ and $r:=\omega_1^{\,d}$; then $r^n=(\omega_1^{\,n})^d=1$ and $r\ne1$, since $r=1$ would give $\exp(2\pi i d/n)=1$, forcing $n\mid d$ by the kernel statement of [[thm-kernel-and-fibres-of-complex-exponential]], contrary to $0<|d|<n$. The cyclic-shift computation of [[cor-sum-of-roots-of-unity]], applied to the list $1,r,\dots,r^{n-1}$ in place of $1,\zeta,\dots,\zeta^{n-1}$ (multiply $S=\sum_{j<n}r^{\,j}$ by $r$ and compare $rS$ with $S$ using $r^n=1$), gives $(r-1)S=0$, hence $S=0$; since $\omega_j^{\,d}=r^{\,j}$ by the integer power laws of [F9], the inner product $\langle c_k,c_\ell\rangle=\sum_j\omega_j^{\,k}\overline{\omega_j^{\,\ell}}=\sum_j\omega_j^{\,k-\ell}$ vanishes, the conjugate being the inverse because $|\omega_j|=1$. Each column has norm $\sqrt n$, since $|\omega_j^{2k}|=1$. The Gram–Schmidt residuals of an orthogonal list are the columns themselves, so step 1.4 gives $|{\det A}|=n^{n/2}$; by step 3.3 this is the maximum of $\prod_{i<j}|z_i-z_j|$ over the closed unit disc, so the roots of unity form an $n$-point Fekete tuple and $\delta_n(\overline{D(0,1)})=n^{1/(n-1)}$. The associated monic polynomial is $F_n(z)=\prod_j(z-\omega_j)=z^n-1$ by [F9]. [step 1.4, step 3.3, F2, F9, algebra]

5.1 **Weak convergence of the empirical measures.** The closed unit disc is compact with $\operatorname{cap}(\overline{D(0,1)})=1>0$ by [F1], and its equilibrium measure is normalized arclength on the unit circle, which we denote $\mu$ ([[ex-logarithmic-capacity-of-disc-and-equilibrium-circle]]); since the tuple of step 4.1 is a Fekete tuple for every $n\ge2$, [F3] gives $\frac1n\sum_j\delta_{\omega_j}\Rightarrow\mu$. [step 4.1, F1, F3]

5.2 **The norm limit.** On the closed unit disc, $|z^n-1|\le|z|^n+1\le2$ by the modulus laws, with equality exactly at the points with $z^n=-1$, which exist on the unit circle; hence $\|z^n-1\|_{\overline{D(0,1)}}=2$ and $\|F_n\|^{1/n}=2^{1/n}\to1$, and this limit is $\operatorname{cheb}(\overline{D(0,1)})=\operatorname{cap}(\overline{D(0,1)})=1$ by steps 2.1 and 3.1 with $a=0$ and $R=1$. [step 2.1, step 3.1, step 4.1, F10, algebra]

6.1 **Assembly.** Steps 2.1, 3.1, 2.2, 3.2 prove the disc and interval identities $t_n=R^n$, $t_n=2^{1-n}$ and the matching Chebyshev constants and capacities; step 4.1 proves the Fekete property of the roots of unity with $F_n(z)=z^n-1$ and the value $\delta_n=n^{1/(n-1)}$; step 5.1 proves weak convergence to normalized arclength; and step 5.2 proves the norm value $2$ and the limit of its $n$-th roots. The Axiom of Choice is used only through [F3] and the capacity values of [F1]. [step 2.1, step 3.1, step 2.2, step 3.2, step 4.1, step 5.1, step 5.2, F1, F3] ∎



## Remarks

**Where the two halves of the calculation meet.** The first six steps compute
the monic extremal norms and combine them with the known capacities of the disc
and the interval; steps 1.3, 1.4, 2.3, 3.3 and 4.1 compute the Fekete diameters
of the unit disc exactly, with the Vandermonde determinant reducing the Fekete
problem to the classical Gram–Schmidt bound for column norms, and with the
Fourier columns of the roots-of-unity matrix attaining equality. Step 5.1 then identifies the
limit of the empirical measures with the equilibrium measure supplied by
[[ex-logarithmic-capacity-of-disc-and-equilibrium-circle]], and step 5.2
confirms the consistency of the Fekete-polynomial norms with the general norm
limit of [[thm-logarithmic-capacity-equals-transfinite-diameter]].

**Why the interval reduction is legitimate.** For a monic complex polynomial
$p$ on a real interval the real part $\operatorname{Re}p$ is again monic — its
leading coefficient is $\operatorname{Re}(1)=1$ — and it never exceeds $p$ in
modulus on real arguments, so a minimax bound for monic real polynomials
applies without loss. This is the only place where the real interval differs
from the disc, where Cauchy's estimate handles complex coefficients directly.

**Choice.** The example states the Axiom of Choice because it quotes the two
capacity values from the equilibrium examples and the weak convergence from
[[thm-logarithmic-capacity-equals-transfinite-diameter]]; the determinant,
Gram–Schmidt and minimax computations are choice-free.
