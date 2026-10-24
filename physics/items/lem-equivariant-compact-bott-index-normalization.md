---
id: lem-equivariant-compact-bott-index-normalization
kind: lemma
title: Orthogonal-equivariant compact normalization of the doubled-real Bott symbol
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-pseudodifferential-calculus
deps:
  - def-axiom-of-choice
  - lem-equivariant-finite-chart-symbol-calculus
  - lem-equivariant-controlled-symbol-realization
  - lem-equivariant-associated-symbol-product-index
  - thm-de-rham-cohomology-of-spheres
  - thm-general-stokes-theorem
  - thm-hopf-line-calculation-of-k-zero-of-the-two-sphere
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-equivariant-finite-chart-symbol-calculus: mathematical-premise
  lem-equivariant-controlled-symbol-realization: mathematical-premise
  lem-equivariant-associated-symbol-product-index: mathematical-premise
  thm-de-rham-cohomology-of-spheres: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-hopf-line-calculation-of-k-zero-of-the-two-sphere: mathematical-premise
axiom_strength: ZF + AC
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. F. Atiyah and I. M. Singer, The Index of Elliptic Operators: I,
        Annals of Mathematics 87 (1968), 484–530"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf
      locator: "Lemma 3.2, pp. 499–500; proposition 4.4 and lemma 4.7, pp. 505–508;
        §8, pp. 524–526."
    - title: "Stefan Haller, The Atiyah–Singer Index Theorem (Vienna lecture notes, 2012/13)"
      url: "https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf"
      locator: "§§III.3–III.5, printed pp. 113–131, for the classical elliptic and de Rham index framework; the equivariant O(n) normalization and Hardy sign are proved locally above."
landmark: false
dependency_level: 3
---

## Statement

For a compact Lie group $G$ acting on a locally compact space $Z$, a compact-support symbol class over $Z$ is represented by finite-rank continuous complex $G$-vector bundles $A,B\to Z$ and a continuous equivariant bundle map $b:A\to B$ that is an isomorphism outside a $G$-invariant compact subset. Classes are identified under equivariant bundle isomorphism, continuous homotopy with one common compact set outside which every map is invertible, and addition or removal of everywhere-invertible triples; block sum is addition. The Grothendieck group is denoted $K^0_{G,c}(Z)$. Write $R(G)$ for the Grothendieck group of finite-dimensional continuous complex $G$-representations.

Assume AC. Let $V=\mathbb R^n$ with its Euclidean inner product and $O(n)=\{Q:V\to V\text{ linear}:\langle Qv,Qw\rangle=\langle v,w\rangle\}$, including $n=0$. Let $O(n)$ act on $V$ in the standard way. Identify $T^*V$ with $V\oplus V$ by the metric and put $z=x+i\xi\in V_{\mathbb C}$. On the constant graded bundle $\Lambda^\bullet V_{\mathbb C}$, with its induced Hermitian metric, define $k(z)=\varepsilon_z+\varepsilon_z^*$ by $\varepsilon_z(\omega)=z\wedge\omega$ and Hermitian adjoint $\varepsilon_z^*$. The even-to-odd part is invertible off the origin since $k(z)^2=(|x|^2+|\xi|^2)I$. Let $b_V\in K^0_{O(n),c}(T^*V)$ be its compact-support equivariant symbol class.

For a compact-support class over $T^*V$, set $M=S(V\oplus\mathbb R)=V\cup\{\infty\}$, the one-point compactification of $V$, and extend its data to $M$ using the exterior trivializations. An order-zero realization is a finite-chart classical pseudodifferential operator with degree-zero homogeneous principal symbol, using the calculus specified in $lem-equivariant-finite-chart-symbol-calculus$. Such a realization is controlled if, for an exterior bundle isomorphism $h$, its Schwartz kernel agrees with the multiplication kernel of $h$ whenever either kernel variable lies outside some compact invariant set $L\subset M$, as specified in $lem-equivariant-controlled-symbol-realization$. Elliptic means that the degree-zero principal symbol is a bundle isomorphism at every nonzero cotangent vector. For a bounded map between Hilbert spaces, Fredholm means that its kernel and cokernel are finite-dimensional and its range is closed; the cokernel is the target modulo the range. Choose a controlled invariant elliptic realization $P:L^2(M,E)\to L^2(M,F)$. With invariant metrics and density, the Hilbert adjoint $P^*$ has kernel unitarily isomorphic to the cokernel, and define the analytic index by

$$a_G([\sigma(P)])=[\ker P]-[\ker P^*]\in R(G).$$

This virtual representation is independent of the controlled realization and compact ambient extension. For the root case $V=\mathbb R$, the symbol plane is $T^*\mathbb R\cong\mathbb R^2$ with coordinate $z=x+i\xi$; its one-point compactification $(T^*\mathbb R)^+$ is a two-sphere, so $K_c^0(T^*\mathbb R)\cong\widetilde K^0((T^*\mathbb R)^+)$. The even-to-odd part of $k(z)$ is the map between trivial complex lines given by multiplication by $z$. On the unit circle it normalizes to the clutching map $z/|z|=e^{i\vartheta}$. Identify $S^2=\mathbb{CP}^1$ with the set of complex lines $\ell\subset\mathbb C^2$, and let $\gamma=\{(\ell,v):v\in\ell\}$ be its tautological line bundle. Choose hemispheric trivializations whose transition is $g(e^{i\vartheta})=e^{i\vartheta}$. With this convention, the relative pair is exactly $[\gamma]-[\underline{\mathbb C}]=[\gamma]-1=\beta$, where $\underline{\mathbb C}$ is the trivial complex line over the sphere. This identifies the underlying nonequivariant root class and fixes its sign; the $O(1)$ action on the graded pair is the one induced by exterior powers. For this class the result is

$$a_{O(n)}(b_V)=1\in R(O(n)),$$

the trivial one-dimensional representation. More generally, restriction along any compact Lie group homomorphism $G\to O(n)$ and tensoring by a finite-dimensional complex $G$-representation $E$ give $a_G(b_V\otimes E)=[E]$. This normalization therefore includes nontrivial orthogonal actions on the real normal fiber in an associated-bundle construction.

The complex orientation is fixed by $z=x+i\xi$ as in the clutching identification above. The cotangent form is $\theta=\sum_j\xi_jdx_j$, so $d\theta=\sum_jd\xi_j\wedge dx_j$. On $T^*V$ the complex-coordinate orientation and the orientation $(d\theta)^n/n!$ differ by $(-1)^n$. No orientation reversal or complex conjugation is inserted into $b_V$.

## Statement references

[Atiyah–Singer I, lemma 3.2, proposition 4.4, lemma 4.7 and §8, printed pp. 499–526](https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf)

[Stefan Haller, The Atiyah–Singer Index Theorem, §§III.3–III.5: pseudodifferential operators, elliptic Fredholm theory and de Rham index](https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf)

[[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]

## Facts & Assumptions

**Given:** The Euclidean representation $V$, compact sphere compactification and exterior-multiplication convention in the statement.

[A1] AC is inherited from the bundle, Hilbert, Sobolev, Fredholm and sphere-cohomology suppliers. [[def-axiom-of-choice]]

[F1] The finite-chart calculus gives compact-manifold elliptic Fredholm realizations, parametrices, smooth kernels, Sobolev regularity, and principal-symbol composition and adjoints for finite-rank bundles. [[lem-equivariant-finite-chart-symbol-calculus]]

[F2] Controlled realization gives an additive representation-valued index on compact-support symbol classes, independent of compactification by excision, invariant under stabilized symbol homotopy and equivariant diffeomorphism, and compatible with group restriction and coefficient representations. On compact manifolds it is the kernel-minus-adjoint-kernel of an elliptic realization. Its compact-group averaging uses normalized Haar probability; averaging a positive Hermitian form makes every finite-dimensional representation unitary. No Bott normalization or embedding-index equality is assumed. [[lem-equivariant-controlled-symbol-realization]]

[F3] The associated-bundle product result, in particular its external-product special case followed by excision, makes the compact-support analytic index multiplicative under products of Euclidean open sets and their compact-support symbols. Its proof does not assume this normalization. [[lem-equivariant-associated-symbol-product-index]]

[F4] The de Rham groups of $S^m$ are one-dimensional in degrees $0,m$ and zero in other degrees for $m=1,2$. Integration of an exact top form on a compact oriented manifold without boundary is zero. [[thm-de-rham-cohomology-of-spheres]] [[thm-general-stokes-theorem]]

[F5] In the root convention the relative plane line symbol $z$ represents the generator $\beta=[\gamma]-1$, and its integer multiple is determined by boundary winding. [[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]

## Proof

**Given:** The data and index interfaces above. The inherited full-AC hypothesis [A1] applies to the controlled realizations. All symbol deformations below have one common compact support for their failure of invertibility.

1.1 Under [A1], use the controlled symbol classes and realizations from [F2] throughout. Exterior multiplication satisfies $\varepsilon_z^2=0$ and $\varepsilon_z\varepsilon_z^*+\varepsilon_z^*\varepsilon_z=|z|^2I$: verify first for an orthonormal basis and use bilinearity. Hence the stated square identity and compact-support class hold. Under $V=V_1\oplus V_2$, the exterior-algebra identification gives $k_{V}(z_1,z_2)=k_{V_1}(z_1)\widehat\otimes1+1\widehat\otimes k_{V_2}(z_2)$. This is exactly the graded symbol product, with no extra sign. Thus $b_{V_1\oplus V_2}=b_{V_1}\boxtimes b_{V_2}$, equivariantly for any group preserving the decomposition. For a real orthogonal bundle the real metric extends complex-bilinearly to identify its complexification with its complex dual. The same doubled-real Bott convention can therefore be written with the dual, while such an identification is not asserted for arbitrary complex bundles. [A1, F2, given, construct, algebra]

1.2 We first fix the nonequivariant line sign explicitly. On $S^1=\mathbb R/(2\pi\mathbb Z)$ let $P_+$ project onto $e^{inx}$, $n\ge0$, and put $A=e^{ix}P_++1-P_+$. The Fejér kernels show that trigonometric polynomials are dense in $L^2$: they approximate continuous functions uniformly, and continuous functions approximate interval indicators and hence simple functions in $L^2$. Thus the Fourier vectors are a complete orthonormal basis. The map $A$ sends the $n$th vector to the $(n+1)$st for $n\ge0$ and to itself for $n<0$. Its images are exactly all nonzero modes, orthonormally, so $\ker A=0$, its range is closed and its cokernel is the constants. Its index is $-1$. To check its actual symbol, localize with a smooth function $f$ in an interval of length less than $2\pi$. The local symbol of $P_+$ is $(2\pi)^{-1}\sum_{n\ge0}\widehat f(n-\xi)e^{ix(n-\xi)}$. For $\xi\to-\infty$ this and every derivative decrease faster than every power, by rapid decay of the Fourier transform of $f$. For $\xi\to+\infty$ subtract the rapidly decreasing sum over $n<0$ from the full Fourier reconstruction $f(x)$. The resulting estimates, also off the diagonal, prove that $P_+$ is classical of order zero with leading symbol $1$ on $\xi>0$ and $0$ on $\xi<0$. Thus $A$ has symbol $e^{ix}$ on the positive ray and $1$ on the negative ray. [A1, F1, F2, construct, algebra]

1.3 The compact de Rham operator has index its cohomological Euler representation, as follows directly from [F1]. On a compact invariant Riemannian manifold let $D=d+d^*$, acting from even to odd complex forms, with the usual group action on forms. Integration by parts gives $D^2=\Delta=dd^*+d^*d$ and $\langle\Delta u,u\rangle=\|du\|^2+\|d^*u\|^2$. The principal symbol of $D$ is $i(\varepsilon_\xi-\varepsilon_\xi^*)$, so it is elliptic. The parametrix and regularity give smooth finite-dimensional kernels and closed range; since the self-adjoint elliptic $\Delta$ has cokernel its kernel, its restriction to the orthogonal complement of its kernel is invertible, with inverse $G$ improving Sobolev order by two. For closed smooth $\alpha$ write $\alpha=h+\Delta G\alpha$. Commutation $d\Delta=\Delta d$ shows $dG\alpha$ is harmonic; it is exact, so its norm vanishes by integration by parts against its primitive. Hence $\alpha=h+dd^*G\alpha$. A harmonic exact form is zero by the same norm calculation. Thus harmonic forms identify with cohomology, equivariantly because all operations commute with the compact action. This proves the stated index comparison here without invoking a scalar Hodge assertion for a matrix complex. [F1, F2, construct, algebra]

2.1 Homotope the loop $e^{ix}$ to $e^{i\varphi(x)}$, where $\varphi$ rises smoothly from $0$ to $2\pi$ inside a proper coordinate interval and is constant near the ends; the homotopy is $e^{i((1-t)x+t\varphi(x))}$. It is smooth periodic, including at the cut, and preserves symbol invertibility on both rays. The final symbol is extended from the interval. On its cotangent plane a representative is $1+(e^{i\varphi(x)}-1)h(\xi)$, where $h=0$ for $\xi\le-1$ and $h=1$ for $\xi\ge1$. Its only possible zeros lie in a compact rectangle. On the rectangle it is $e^{i\varphi(x)}$ on the top and $1$ elsewhere. With orientation $dx\wedge d\xi$, the top is traversed right to left, so its winding is $-1$. More explicitly its boundary loop divided by $\bar z$ on a disk has winding zero and a continuous logarithm, so a logarithm homotopy identifies it with $\bar z$. The loops $z\oplus\bar z$ contract to a constant invertible matrix through $\left(\begin{smallmatrix}t z&-\sqrt{1-t^2}\\\sqrt{1-t^2}&t\bar z\end{smallmatrix}\right)$ for $1\ge t\ge0$. Consequently this relative class is $-b_{\mathbb R}$. By symbol homotopy, excision and step 1.2, $a_{\{1\}}(b_{\mathbb R})=1$. This establishes the sign independently of de Rham dimensions. [F2, F5, step 1.1, step 1.2, construct, algebra]

2.2 We next prove a symbol identity on $S^m\subset\mathbb R^m\oplus\mathbb R$, for $m=1,2$, equivariantly under $O(m)$ acting on the first summand. The de Rham symbol is equivalent to the Koszul symbol of the real covector $\xi$: on exterior degree $k$, multiplication by $i^k$ conjugates $\varepsilon_\xi+\varepsilon_\xi^*$ to $i(\varepsilon_\xi-\varepsilon_\xi^*)$. Use the round metric to identify exterior covectors and vectors. Let $f(q,t)=t$ be the smooth invariant height function and deform this real Koszul symbol to exterior multiplication by $\xi+is\,df$, plus its adjoint, for $0\le s\le1$. This is a globally smooth equivariant symbol on the same bundles. Real and imaginary parts are orthogonal in the Hermitian norm, so its square is $(|\xi|^2+s^2|df|^2)I$. At $s=0$ its noninvertibility is the zero section; for $s>0$ it is precisely the zero covectors over the two critical points of $f$, the north and south poles. Thus the full homotopy has one common compact noninvertibility set, the zero section. No comparison of only the principal symbols is being substituted for this compact-support homotopy. [F1, step 1.1, step 1.3, construct, algebra]

3.1 The two pole classes have the following exact signs. In the north and south stereographic disk coordinates $x\mapsto(2x/(1+|x|^2),\pm(1-|x|^2)/(1+|x|^2))$, the round metric is $c(x)^2\sum_jdx_j^2$ with $c(x)=2/(1+|x|^2)$, and $df=\mp4\sum_jx_jdx_j/(1+|x|^2)^2$. If $\eta$ is the canonical cotangent coordinate, the orthonormal coframe coefficients of $\xi+i\,df$ are $c^{-1}(\eta\mp i a(x)x)$, where $a(x)=4/(1+|x|^2)^2>0$. The real orthonormal frames identify the exterior bundles equivariantly with $\Lambda^\bullet\mathbb C^m$. Positive scalar multiplication by $c$ preserves their class. Excision into disjoint pole neighborhoods is permitted because the final symbol is invertible on their complement; adding elementary symbols and gluing along that invertible map is precisely open extension for compact-support triples. On each neighborhood the homotopy $a_t=(1-t)a+t>0$ changes the symbol to $\eta\mp ix$, keeping its sole zero at $(0,0)$. On the north, multiplication of its vector by $i$ gives $x+i\eta$. On the south it gives $-x+i\eta$, and subsequent multiplication by $-1$ gives $x-i\eta$. Scalar unit complex multiplications are joined to the identity through unit scalars, preserve equivariance and introduce no zeros. With $\vartheta(x,\eta)=(x,-\eta)$ and open extensions $j_0,j_\infty$ from the pole charts, the actual symbol identity is $[\sigma(D_{S^m})]=j_0b_{\mathbb R^m}+j_\infty\vartheta^*b_{\mathbb R^m}$. This proves both the compact support and the two local signs without a continuous-to-smooth sphere gluing premise. [F2, step 1.1, step 2.2, construct, algebra]

4.1 The sphere map interchanging the two hemispheres is $O(m)$-equivariant and carries their chosen tangent coordinates into one another. Excision and diffeomorphism covariance therefore give $a_{O(m)}(\sigma(D_{S^m}))=a_{O(m)}(b_{\mathbb R^m})+a_{O(m)}(\vartheta^*b_{\mathbb R^m})$. For $m=1$ let $\epsilon$ be the nontrivial character of $O(1)$. The class identity $\vartheta^*b_{\mathbb R}=-\epsilon b_{\mathbb R}$ is explicit. On the unit complex circle the direct sum on the left of $\vartheta^*b+\epsilon b=0$ has domain $1\oplus\epsilon$ and, after exchanging target summands, matrix $\left(\begin{smallmatrix}0&z\\\bar z&0\end{smallmatrix}\right)$. The path $\left(\begin{smallmatrix}\sin t&\cos t\,z\\\cos t\,\bar z&-\sin t\end{smallmatrix}\right)$, $0\le t\le\pi/2$, is equivariant for the involution $z\mapsto-z$ and the matrix representation $\operatorname{diag}(1,-1)$, is invertible since its determinant is $-1$, and ends at a constant equivariant isomorphism. Hence the sum is zero as a relative class. For $m=2$ restricted to $SO(2)$, $\vartheta$ is properly equivariantly homotopic to the identity by $(x,\xi)\mapsto(x,R_{\pi t}\xi)$; on the symbols its square norm remains $|x|^2+|\xi|^2$. Thus $\vartheta^*b=b$ for this group. [F2, step 3.1, construct, algebra]

5.1 On the circle, constants generate $H^0$ and $dx$ generates $H^1$; reflection acts by $1$ and $-1$, respectively. Hence step 1.3 gives $a_{O(1)}(\sigma(D_{S^1}))=1-\epsilon$. If $r=a_{O(1)}(b_{\mathbb R})=u+v\epsilon$, step 4.1 gives $(1-\epsilon)r=1-\epsilon$, or $u-v=1$. Restriction to the trivial group and step 2.1 give $u+v=1$. Thus $u=1,v=0$: this is the full $O(1)$ representation, not just its dimension. On $S^2$, [F4] gives only $H^0$ and $H^2$; the invariant area form has nonzero integral and is therefore not exact, so it generates the latter group. Both representations are trivial under rotations. Thus $a_{SO(2)}(\sigma(D_{S^2}))=2$. Step 4.1 implies $2a_{SO(2)}(b_{\mathbb R^2})=2$. By [F2], averaging a positive Hermitian form makes every finite-dimensional representation unitary. To see directly that $R(SO(2))$ has no torsion, let $\rho:SO(2)\to U(W)$ be any such continuous representation and set $P_k w=(2\pi)^{-1}\int_0^{2\pi}e^{-ikt}\rho(R_t)w\,dt$ for $k\in\mathbb Z$. Changing variables in the integral gives $\rho(R_s)P_kw=e^{iks}P_kw$, so each $P_kw$ is a weight vector or zero. For fixed $w$, the Fejér means of the continuous periodic function $t\mapsto\rho(R_t)w$ at $0$ are finite linear combinations of these $P_kw$ and converge to $w$: the Fejér kernel is nonnegative with integral one, and its mass outside every neighborhood of zero tends to zero, so uniform continuity proves uniform convergence of its convolutions. Since $W$ is finite-dimensional, the span of all weight spaces is closed and contains every $w$. Distinct weights form a direct sum, as applying the corresponding Fourier projections isolates each weight. Thus $W$ is a direct sum of characters $z\mapsto z^m$, $m\in\mathbb Z$, and virtual representations are uniquely determined by their integer multiplicities; multiplication by $2$ is injective in $R(SO(2))$. Therefore $2a_{SO(2)}(b_{\mathbb R^2})=2$ implies $a_{SO(2)}(b_{\mathbb R^2})=1$. [F2, F4, step 2.1, step 1.3, step 4.1, algebra]

6.1 Every orthogonal matrix $Q$ on $V$ admits an orthogonal decomposition into invariant real lines with eigenvalue $+1$ or $-1$, and real planes on which it is a rotation: diagonalize its complex unitary complexification and pair conjugate eigenvectors; real eigenvectors span the remaining $\pm1$ spaces. Thus $Q$ belongs to a block subgroup $H$ which is a product of copies of $O(1)$ and $SO(2)$. On restriction to this entire subgroup, step 1.1 identifies $b_V$ with the product of the line and plane symbols. By [F3] and step 5.1 its index is $1\in R(H)$. Restriction of a Fredholm index simply restricts its finite kernel representations, so the character of $a_{O(n)}(b_V)$ takes the value $1$ at the original arbitrary matrix $Q$. This proves equality of characters on every component of $O(n)$, including orientation-reversing matrices. [F2, F3, step 1.1, step 5.1, construct, algebra]

7.1 Equality of these characters implies equality in $R(O(n))$. Indeed average inner products over $O(n)$ to make representations unitary, and take invariant orthogonal complements to decompose them into irreducibles. Normalized invariant volume on $O(n)$ can be obtained from the bi-invariant metric induced by the trace inner product on its skew-symmetric matrices, giving equal mass to its two components. Averaging on $\operatorname{Hom}(U,W)$ is the orthogonal projection onto intertwining maps, so the integral of $\overline{\chi_U}\chi_W$ is their dimension; for irreducibles this is $1$ if isomorphic and $0$ otherwise, by Schur's lemma (an eigenvalue of an intertwiner and its invariant kernel prove that lemma over $\mathbb C$). Pairing a zero virtual character against every irreducible therefore gives zero multiplicities. Apply this to step 6.1 minus the trivial character to obtain $a_{O(n)}(b_V)=1$. For $n=0$ the open Euclidean set is a point and its symbol is the even line, whose index is directly $1$. Group restriction and coefficient tensoring in [F2] give the general assertion. Finally the complex orientation is the ordered product $dx_1\wedge d\xi_1\wedge\cdots\wedge dx_n\wedge d\xi_n$, whereas $(d\theta)^n/n!$ is its $(-1)^n$ multiple, proving the exact orientation convention. [F2, step 1.1, step 6.1, construct, algebra] ∎

## Remarks

This proof normalizes the compact analytic symbol index. It does not assume an analytic–topological index comparison or a normal embedding compatibility theorem. Its use of de Rham operators is limited to the explicitly computed line and rotation-plane tests; products and character detection establish the full orthogonal-group conclusion.
