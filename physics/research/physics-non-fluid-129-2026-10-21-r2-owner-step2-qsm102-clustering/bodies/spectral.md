## Statement

Assume Countable Choice. Let $\mathcal H\ne\{0\}$ be a separable complex Hilbert space with inner product linear in its first argument. Let $K:D(K)\to\mathcal H$ be densely defined, self-adjoint and positive, meaning $\langle Kx,x\rangle\ge0$ for $x\in D(K)$. Let $(U_t)_{t\in\mathbb R}$ be a strongly continuous unitary group with generator $iK$: its strong derivative at zero exists exactly on $D(K)$ and equals $iKx$. The spectrum $\sigma(K)$ is the complement of the set of $z$ for which $K-z:D(K)\to\mathcal H$ has a bounded everywhere-defined inverse.

For every $x,y\in\mathcal H$ there is a finite complex Borel measure $\mu_{x,y}$ on $[0,\infty)$ such that

$$\langle U_t x,y\rangle=\int_{[0,\infty)}e^{itE}\,d\mu_{x,y}(E),\qquad |\mu_{x,y}|([0,\infty))\le\|x\|\,\|y\|.$$

The measures are sesquilinear in $(x,y)$, $\mu_x:=\mu_{x,x}$ is positive with total mass $\|x\|^2$, and every $\mu_{x,y}$ is carried by $\sigma(K)$. If $P_0$ is the orthogonal projection onto $\ker K$, then

$$\mu_{x,y}(\{0\})=\langle P_0x,y\rangle.$$

In particular, if $\sigma(K)\subseteq\{0\}\cup[g,\infty)$ with $g>0$, the measures $\mu_{(I-P_0)x,(I-P_0)y}$ are carried by $[g,\infty)$. Spectral measures and a projection-valued spectral resolution are not assumptions of this statement.

## Statement references

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The Hilbert space, positive self-adjoint generator and unitary group in the Statement.

[A1] Countable Choice is assumed throughout. [[def-countable-choice]]

[F1] Under Countable Choice a self-adjoint operator is closed, its range orthogonal complement is the kernel of its adjoint, and every closed Hilbert subspace has an orthogonal complement decomposition. [[def-symmetric-self-adjoint-and-essentially-self-adjoint]] [[lem-unbounded-adjoint-is-well-defined-and-closed]] [[thm-orthogonal-decomposition-by-a-closed-subspace]]

[F2] Finite Hermitian matrices have real orthogonal spectral decompositions; their polynomial norm is the maximum of the polynomial modulus on their finite spectrum. Hilbert adjoints satisfy the adjoint and norm identities under Countable Choice. [[lem-qsm-matrix-state-calculus]] [[thm-hilbert-adjoint-properties]]

[F3] Real polynomials are uniformly dense in continuous functions on a compact interval, and operator-norm Cauchy sequences of bounded Hilbert operators converge. Complex approximation follows by approximating real and imaginary parts. [[cor-weierstrass-approximation-on-a-closed-interval]] [[thm-bounded-operator-space-is-banach]]

[F4] A positive normalized functional on real continuous functions on a compact metric space has a Borel probability representation under Countable Choice, with no Dependent Choice assumption. [[lem-positive-functionals-on-compact-metric-spaces-have-probability-representations]]

[F5] Dominated convergence, monotone convergence and scalar Fubini apply with their stated measure and integrability hypotheses. [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] A lambda-system containing a pi-system contains the sigma-algebra it generates. [[thm-dynkin-pi-lambda]]

## Proof

**Given:** [A1], [F1]–[F6] and the Statement data.

1.1 Positivity gives $\|(I+K)x\|\ge\|x\|$ on $D(K)$, by pairing $(I+K)x$ with $x$. Its range is closed: if $(I+K)x_n$ converges, the bound makes $x_n$ Cauchy, and $Kx_n=(I+K)x_n-x_n$ converges, so closedness in [F1] identifies the limit in $D(K)$. The range has zero orthogonal complement because $\ker(I+K)^*=\ker(I+K)=0$; [F1] makes the closed range all of $\mathcal H$. Thus $B=(I+K)^{-1}$ exists, $\|B\|\le1$, $\ker B=0$ and $\operatorname{ran}B=D(K)$ is dense. For $x=(I+K)u$ and $y=(I+K)v$, symmetry gives $\langle Bx,y\rangle=\langle x,By\rangle$, while $\langle Bx,x\rangle=\|u\|^2+\langle Ku,u\rangle\ge0$. Hence $B$ is a positive self-adjoint contraction and $KB=I-B$. [A1, F1, given, algebra]

1.2 We shall use uniqueness of finite complex measures on $[0,1]$ from their continuous integrals. If their difference $\nu$ integrates every continuous function to zero, then for any relatively open $O\subseteq[0,1]$ the continuous functions $f_n(b)=\min(1,n\operatorname{dist}(b,[0,1]\setminus O))$ increase to $\mathbf1_O$; take $f_n=1$ when $O=[0,1]$. Dominated convergence against its finite total variation gives $\nu(O)=0$. Since also $\nu([0,1])=0$, the sets where $\nu$ vanishes form a lambda-system. The relatively open sets form a generating pi-system, so [F6] proves $\nu=0$ on all Borel sets. This also applies to any finite linear combination of positive measures. [F5, F6, given, construct]

1.3 Scalar Laplace uniqueness will identify the evolution. If a bounded continuous $h:[0,\infty)\to\mathbb C$ satisfies $\int_0^\infty e^{-zt}h(t)\,dt=0$ for every real $z>0$, substitute $s=e^{-t}$ and take $z=n+1$. Then $\int_0^1s^n h(-\log s)\,ds=0$ for all integers $n\ge0$, with any value assigned at $s=0$. Polynomial approximation [F3] implies the same equality against every continuous test on $[0,1]$. If $h(t_0)\ne0$, multiplication by a constant complex phase and continuity give a time interval on which its real part is strictly positive. A nonnegative continuous piecewise-linear hat supported inside the corresponding interval of $s$ has strictly positive integral against that real part, contradicting the preceding test identity. For $t_0=0$ use a one-sided time neighborhood and a smaller interior interval. Therefore $h=0$. [F3, F5, given, construct]

2.1 Fix a dense sequence in $\mathcal H$ and let $P_n$ be the projection onto the span of its first $n$ terms. Finite Gram–Schmidt, skipping zero remainders and using positive real normalizations, constructs these projections deterministically, and density gives $P_nx\to x$ for every $x$. The compression $B_n=P_nBP_n$ is a positive contraction on that finite-dimensional span and zero on its complement. For every complex polynomial $p$, [F2] gives $\|p(B_n)\|\le\sup_{0\le b\le1}|p(b)|$; the zero complement contributes only $|p(0)|$. Boundedness and strong convergence $B_n\to B$ imply $p(B_n)x\to p(B)x$ by induction on powers. Hence the same norm bound holds for $p(B)$. By [F3], polynomial approximations define $f(B)$ for every $f\in C([0,1];\mathbb C)$, independently of the approximation, with $\|f(B)\|\le\|f\|_\infty$. Norm limits preserve sums, products, the identity and conjugate adjoints. If $f\ge0$, approximating its continuous square root gives $f(B)=\sqrt f(B)^*\sqrt f(B)\ge0$. This constructs the required continuous calculus without a spectral theorem. [F2, F3, step 1.1, construct, algebra]

2.2 For $z>0$ the strong improper integral $R_zx=\int_0^\infty e^{-zt}U_tx\,dt$ exists. On a finite interval the integrand is uniformly norm-continuous, so uniform-mesh Riemann sums are Cauchy in $\mathcal H$; their tails have norm at most $e^{-zT}\|x\|/z$. Thus $R_z$ is bounded by $1/z$. The group law makes $U_tD(K)=D(K)$ and $KU_tx=U_tKx$ by difference quotients. For $x\in D(K)$ the same Riemann sums converge also after applying $K$, and closedness gives differentiation/integration in its graph. Integration of $(e^{-zt}U_tx)'=e^{-zt}(iK-z)U_tx$ therefore yields $(z-iK)R_zx=x$. The estimate $\|(z-iK)x\|^2=z^2\|x\|^2+\|Kx\|^2$, closedness and the zero kernel of the adjoint $z+iK$ show that $z-iK$ is onto with inverse norm at most $1/z$, just as in step 1.1. Density extends $R_z=(z-iK)^{-1}$ to every $x$. [F1, step 1.1, given, construct, algebra]

3.1 For $x\ne0$, the real functional $f\mapsto\langle f(B)x,x\rangle/\|x\|^2$ is positive and normalized. Apply [F4] on $[0,1]$ and multiply its probability measure by $\|x\|^2$, obtaining a positive measure $\nu_x$; set $\nu_0=0$. Its continuous integrals are $\langle f(B)x,x\rangle$, first for real $f$, then for complex $f$ by linearity. Define
$$\nu_{x,y}=\frac14\sum_{j=0}^3 i^j\nu_{x+i^j y}.$$
Polarization gives $\int f\,d\nu_{x,y}=\langle f(B)x,y\rangle$. Uniqueness from step 1.2 makes these measures linear in $x$, conjugate-linear in $y$, with $\nu_{y,x}=\overline{\nu_{x,y}}$ and diagonal $\nu_{x,x}=\nu_x$. Their total masses are $\langle x,y\rangle$. [F4, step 1.2, step 2.1, construct, algebra]

4.1 For every Borel $D$, the form $(x,y)\mapsto\nu_{x,y}(D)$ is positive sesquilinear. Expanding its nonnegative value on $x+cy$, and minimizing over $c\in\mathbb C$ (with the zero-diagonal case treated by arbitrary large multiples), gives $|\nu_{x,y}(D)|^2\le\nu_x(D)\nu_y(D)$. On any finite Borel partition $(D_j)$, finite scalar Cauchy–Schwarz now gives $\sum_j|\nu_{x,y}(D_j)|\le\sqrt{\sum_j\nu_x(D_j)}\sqrt{\sum_j\nu_y(D_j)}\le\|x\|\,\|y\|$. Taking the partition supremum yields $|\nu_{x,y}|([0,1])\le\|x\|\,\|y\|$. In particular all bounded measurable scalar functions are integrable against these measures. [step 3.1, algebra]

4.2 For continuous $f,h$, multiplicativity of the calculus gives
$$\int h\,d\nu_{f(B)x,y}=\langle h(B)f(B)x,y\rangle=\int hf\,d\nu_{x,y}.$$
Step 1.2 implies $d\nu_{f(B)x,y}=f\,d\nu_{x,y}$ as measures. Conjugate symmetry yields $d\nu_{f(B)x}=|f|^2d\nu_x$; in particular
$$\|f(B)x\|^2=\int|f|^2\,d\nu_x.$$
These identities use only continuous factors and scalar measures, not a postulated Borel operator calculus. [step 1.2, step 2.1, step 3.1, algebra]

5.1 Since $\nu_{Bz}(\{0\})=0$ by step 4.2, step 4.1 makes its mixed measure with any vector zero on $\{0\}$. Hence $\nu_x(\{0\})=\nu_{x-Bz}(\{0\})\le\|x-Bz\|^2$. The dense range from step 1.1 allows this upper bound to be arbitrarily small, proving $\nu_x(\{0\})=0$ and then $\nu_{x,y}(\{0\})=0$ for all $x,y$. Thus no zero-endpoint mass is hidden by the reciprocal change of variable below. [step 1.1, step 4.1, step 4.2, algebra]

5.2 If a real $b_0$ is in the resolvent of $B$, let $L=(B-b_0)^{-1}$. For every positive integer $n$, step 4.2 with $x=L^nz$ gives $d\nu_z=|b-b_0|^{2n}d\nu_{L^nz}$. Thus on $|b-b_0|<\varepsilon$,
$$\nu_z(\{|b-b_0|<\varepsilon\})\le(\varepsilon\|L\|)^{2n}\|z\|^2.$$
Choose $\varepsilon\|L\|<1$ and let $n\to\infty$. The neighborhood is null for every diagonal measure and therefore for every mixed measure by step 4.1. The real resolvent set is open by the inverse Neumann series. It is covered by the rational intervals contained in these null neighborhoods; this is a subfamily of a fixed countable base. Countable subadditivity proves that all $\nu_{x,y}$ are carried by $\sigma(B)\cap[0,1]$. [step 4.1, step 4.2, algebra]

5.3 The identity in step 4.2 makes $(B^nx)$ Cauchy: for $n,m\ge N$ its squared difference is at most $4\int_{[0,1)}b^{2N}d\nu_x$, which tends to zero by [F5]. Let its limit be $Px$. Again $\|(B-I)B^nx\|^2=\int(1-b)^2b^{2n}d\nu_x\to0$, so $Px\in\ker(I-B)$. For $y$ in this kernel, self-adjointness gives $\langle B^nx,y\rangle=\langle x,y\rangle$, and therefore $x-Px$ is orthogonal to the kernel. Thus $P$ is its orthogonal projection by [F1]. This kernel equals $\ker K$, since $KB=I-B$. Dominated convergence in $\langle B^nx,y\rangle=\int b^n d\nu_{x,y}$ gives $\nu_{x,y}(\{1\})=\langle P_0x,y\rangle$. [F1, F5, step 1.1, step 4.1, step 4.2, construct, algebra]

6.1 On $(0,1]$ put $\lambda(b)=b^{-1}-1$ and define $g_{x,y}(t)=\int e^{it\lambda(b)}d\nu_{x,y}(b)$, omitting the null endpoint by step 5.1. It is bounded and continuous by dominated convergence and step 4.1. For $z>0$, scalar Fubini, applied to the finite positive measures in the polarization formula, gives its Laplace transform as $\int (z-i\lambda(b))^{-1}d\nu_{x,y}(b)$. The reciprocal is the continuous function
$$r_z(b)=\frac{b}{zb-i(1-b)},\qquad r_z(0)=0.$$
By step 2.1, $r_z(B)=B(zB-i(I-B))^{-1}$, and $KB=I-B$ shows $(z-iK)r_z(B)=I$ on $\mathcal H$. Step 2.2 identifies this with $R_z$. Thus $g_{x,y}$ and $\langle U_tx,y\rangle$ have equal Laplace transforms. Step 1.3 gives equality for $t\ge0$; conjugate symmetry and $U_{-t}=U_t^*$ give it for negative $t$ as well. [F5, step 1.3, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, algebra]

6.2 Push $\nu_{x,y}|_{(0,1]}$ forward by $\lambda$ to obtain $\mu_{x,y}$. Positivity, total mass, sesquilinearity and the variation bound pass to the pushforward. If $E\ge0$ is in the resolvent of $K$ and $b_0=(1+E)^{-1}$, the bounded inverse identity
$$(B-b_0)^{-1}=-(1+E)I-(1+E)^2(K-E)^{-1}$$
follows by multiplying on $D(K)=\operatorname{ran}B$. Therefore $b_0$ is in the resolvent of $B$. Step 5.2 and the homeomorphism $(0,1]\to[0,\infty)$ show that the pushed measures are carried by $\sigma(K)$. Their atom at $E=0$ is the atom at $b=1$, computed in step 5.3. All these statements include vectors in the ground subspace and the possibility that the excited subspace is zero. [step 1.1, step 4.1, step 5.1, step 5.2, step 5.3, construct, algebra]

7.1 Step 6.1 proves the Fourier pairing formula, and step 6.2 proves the remaining measure properties. For $Q=I-P_0$, its measures have zero atom at zero by that formula for the atom and are carried by $\sigma(K)$; the stated gap therefore places them in $[g,\infty)$. Every construction used only [A1] and the displayed suppliers; no general spectral theorem or existence of a PVM was invoked. [step 6.1, step 6.2, algebra] ∎

## Remarks

The source's unbounded spectral theorem supplies context for the standard spectral interface. The proof above reconstructs only the scalar/cross measures needed here, on a separable Hilbert space under Countable Choice, rather than importing the source theorem or the canonical full-Choice spectral construction.
