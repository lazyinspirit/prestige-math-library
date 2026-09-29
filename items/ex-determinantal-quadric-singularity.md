---
id: ex-determinantal-quadric-singularity
kind: example
title: "The rank-one 2 by 2 determinantal cone"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-dimension-affine-and-projective-space
  - cor-hypersurface-singular-locus-gradient
  - cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction
  - cor-square-matrix-invertible-iff-determinant-is-a-unit
  - cor-strong-nullstellensatz-two-inclusions
  - cor-units-in-a-polynomial-ring-over-a-domain
  - def-axiom-of-choice
  - def-coordinate-ring-affine-algebraic-set
  - def-dimension
  - def-field
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-irreducible-and-prime-elements-in-a-domain
  - def-jacobian-matrix-affine-algebraic-set
  - def-monomials-multidegree-and-total-degree
  - def-multivariate-polynomial-ring-by-iteration
  - def-radical-of-an-ideal
  - def-singular-and-regular-loci-variety
  - def-unique-factorisation-domain
  - def-zariski-tangent-space-point
  - ex-two-by-two-determinant-formula
  - lem-field-is-a-commutative-ring
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-local-dimension-reduced-variety-components
  - lem-standard-basis-of-f-n
  - thm-classical-affine-nullstellensatz-correspondence
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-principal-subvariety-codimension-one
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-zariski-tangent-space-jacobian-kernel
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Example 5.1.3 and §5.2 (printed p. 35)"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Example

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let
$x,y,z,t$ be the coordinates of $\mathbb A^4_k$, so that the ambient ring is
$k[x,y,z,t]$, and put
$$f=xt-yz\in k[x,y,z,t],\qquad X=V(f)\subseteq\mathbb A^4_k,$$
equipped with its reduced classical variety structure; let $0=(0,0,0,0)$ be
the origin. Then:

1. $f$ is nonconstant and squarefree, the principal ideal $(f)$ is radical,
   and $I(X)=(f)$; thus $X$ is a reduced classical variety with coordinate
   ring $k[X]=k[x,y,z,t]/(f)$, presented by the actual equation ideal;
2. $f$ is the determinant of the $2\times2$ matrix
   $\begin{pmatrix}x&y\\ z&t\end{pmatrix}$, so $X$ is the source's locus of
   noninvertible $2\times2$ matrices over $k$; $f$ is homogeneous of degree
   $2$, and $X$ is invariant under scaling about the origin;
3. $X$ is nonempty, every irreducible component of $X$ has dimension $3$,
   and the local dimension satisfies $\dim\mathcal O_{X,a}=3$ at every
   closed point $a\in X$;
4. for $a=(a_x,a_y,a_z,a_t)\in X(k)$ the Jacobian matrix of the single
   generator $f$ is the one-row matrix
   $$J_{(f)}(a)=\bigl(a_t,\,-a_z,\,-a_y,\,a_x\bigr),$$ and the
   Jacobian-kernel isomorphism gives $T_aX\cong\ker J_{(f)}(a)$; hence
   $$\dim_kT_aX=\begin{cases}4,&a=0,\\ 3,&a\ne0,\end{cases}$$
   so the origin has tangent dimension $4$ while every other point of $X$
   has tangent dimension $3$;
5. the origin is the unique singular point: for $a\in X$ one has
   $a\in X_{\mathrm{sing}}$ exactly when $a=0$, that is
   $X_{\mathrm{sing}}=\{0\}$ and $X_{\mathrm{reg}}=X\setminus\{0\}$; the
   tangent dimension $4$ at the origin exceeds the local dimension $3$.

All statements and computations hold in every characteristic.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, the iterated polynomial ring $R=k[x,y,z,t]=k[x][y][z][t]$ with $A=k[x,y,z]$ and $R=A[t]$, the polynomial $f=xt-yz\in R$, the zero locus $X=V(f)\subseteq\mathbb A^4_k$ with its reduced classical variety structure, the origin $0=(0,0,0,0)$, and the notation $a=(a_x,a_y,a_z,a_t)$ for a point of $k^4$.

[F1] [[def-multivariate-polynomial-ring-by-iteration]]: the iterated ring is defined by $R[x_1,\ldots,x_{n+1}]:=R[x_1,\ldots,x_n][x_{n+1}]$, each preceding indeterminate remaining present and commuting with the coefficients, so $k[x,y,z,t]=k[x,y,z][t]=A[t]$.

[F2] [[def-monomials-multidegree-and-total-degree]]: every polynomial of $F[x_1,\dots,x_n]$ over a field $F$ has a unique finite expansion $\sum_{\mathbf t}c_{\mathbf t}x^{\mathbf t}$ over multi-indices; the **degree in $x_i$** is the largest $t_i$ with $c_{\mathbf t}\ne0$, the total degree the largest $t_1+\cdots+t_n$ with $c_{\mathbf t}\ne0$, and both are undefined for the zero polynomial; evaluation at a point is the iterated substitution supplied by the universal property.

[F3] [[cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction]]: the arbitrary-family polynomial ring $R[x_i:i<n]$ is canonically isomorphic as an $R$-algebra to the recursively iterated polynomial ring, fixing $R$ and sending each indeterminate to the corresponding one, so the iterated ring may be presented with the four variables in any order, monomial exponent vectors and coefficients being unchanged.

[F4] [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]: for every field $k$ and integer $r\ge0$, $k[x_1,\ldots,x_r]$ is a unique factorisation domain, every irreducible element of it is prime, and for $r=0$ the ring is $k$ itself.

[F5] [[def-unique-factorisation-domain]]: a UFD is an integral domain in which every nonzero nonunit is a finite product of irreducible elements, the factorisation being unique up to order and associates.

[F6] [[def-irreducible-and-prime-elements-in-a-domain]]: a nonzero nonunit $p$ of a domain is irreducible when every factorisation $p=ab$ has $a$ or $b$ a unit, and prime when $p\mid ab$ implies $p\mid a$ or $p\mid b$.

[F7] [[cor-units-in-a-polynomial-ring-over-a-domain]]: for an integral domain $D$, an element of $D[x]$ is a unit if and only if it is a constant polynomial whose constant value is a unit of $D$.

[F8] [[thm-polynomial-degree-of-a-product-over-a-domain]]: for an integral domain $D$ and nonzero $f,g\in D[x]$ one has $fg\ne0$ and $\deg(fg)=\deg f+\deg g$.

[F9] [[lem-field-is-a-commutative-ring]]: a field $F$ is a commutative ring with $1\ne0$, it is an integral domain, and it is a division ring.

[F10] [[def-field]]: a field has $0\ne1$ and $(F\setminus\{0\},\cdot)$ is an abelian group with identity $1$, so every $x\ne0$ has a multiplicative inverse.

[F11] [[def-radical-of-an-ideal]]: $\sqrt I=\{x\in R:x^n\in I\text{ for some integer }n\ge1\}$, and $I$ is radical when $I=\sqrt I$.

[F12] [[cor-strong-nullstellensatz-two-inclusions]]: under AC, for an algebraically closed field $k$ and every ideal $I\subseteq k[x_1,\ldots,x_n]$ one has $I(V(I))=\sqrt I$.

[F13] [[thm-classical-affine-nullstellensatz-correspondence]]: under AC the maps $I$ and $V$ are inverse inclusion-reversing bijections between radical ideals and algebraic sets; nonempty irreducible algebraic sets correspond precisely to proper prime ideals.

[F14] [[def-coordinate-ring-affine-algebraic-set]]: for an affine algebraic set $X\subseteq\mathbb A^n_k$ over an algebraically closed field, its coordinate ring is $k[X]:=k[x_1,\ldots,x_n]/I(X)$.

[F15] [[cor-dimension-affine-and-projective-space]]: under AC and over an algebraically closed field, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$ for every integer $n\ge0$.

[F16] [[thm-principal-subvariety-codimension-one]]: under AC, for an irreducible affine algebraic set $X$ over an algebraically closed field and a nonzero nonunit $f\in k[X]$, the zero locus $V_X(f)$ is nonempty and every irreducible component has dimension $\dim X-1$.

[F17] [[lem-local-dimension-reduced-variety-components]]: under AC, for a reduced classical finite-type space $X$ over an algebraically closed field and a closed point $x$ one has $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i$ over the irreducible components $X_i$ containing $x$.

[F18] [[def-jacobian-matrix-affine-algebraic-set]]: for a specified finite generating list of the actual ideal and a point at which all its members vanish, the Jacobian matrix has rows $(\partial f_i/\partial t_j(a))$, the formal monomial derivatives being computed by $\partial_{t_j}(t_1^{e_1}\cdots t_n^{e_n})$ with the integer coefficient read in $k$, and the definition uses the actual scheme ideal.

[F19] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field, ideal $I\subseteq k[t_1,\ldots,t_n]$, $X=\operatorname{Spec}(k[t]/I)$, rational point $a\in X(k)$ and any finite generating list of $I$, the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_aX\cong\ker J(a)$, with no reducedness, perfectness or characteristic hypothesis.

[F20] [[def-zariski-tangent-space-point]]: the intrinsic Zariski tangent space of a scheme $X$ at $x$ is the linear dual $T_xX=\operatorname{Hom}_{\kappa(x)}(C_xX,\kappa(x))$ of the cotangent space, and at a $k$-rational point it agrees with the relative tangent space over $k$.

[F21] [[def-singular-and-regular-loci-variety]]: for a locally Noetherian scheme $X$ one sets $X_{\mathrm{reg}}=\{x\in |X|:\mathcal O_{X,x}\text{ is a regular local ring}\}$ and $X_{\mathrm{sing}}=|X|\setminus X_{\mathrm{reg}}$; for a reduced classical finite-type space over an algebraically closed field and a closed point $x$, $x\in X_{\mathrm{reg}}\quad\Longleftrightarrow\quad \dim_{\kappa(x)}T_xX=\dim_x X$, where $\dim_xX$ is the maximum over the components containing $x$.

[F22] [[cor-hypersurface-singular-locus-gradient]]: under AC, for an algebraically closed field $k$, $n\ge1$ and a nonconstant squarefree $f\in k[t_1,\ldots,t_n]$, and $X=V(f)$ with its reduced classical structure, a point $a\in X(k)$ is singular exactly when every formal first partial derivative of $f$ vanishes at $a$; the criterion is characteristic-free.

[F23] [[ex-two-by-two-determinant-formula]]: for every commutative ring, $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$.

[F24] [[cor-square-matrix-invertible-iff-determinant-is-a-unit]]: for a commutative ring $R$, $n\ge1$ and $A\in M_n(R)$, $A$ is invertible if and only if $\det(A)$ is a unit of $R$.

[F25] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: a polynomial is homogeneous of degree $d$ when each occurring monomial has total degree $d$.

[F26] [[def-dimension]]: a vector space over $F$ is finite-dimensional when it has a finite basis, and then the **dimension of $V$ over $F$** is the unique $n$ with a basis of $n$ elements.

[F27] [[lem-standard-basis-of-f-n]]: for a field $F$ and $n\in\mathbb N$ the standard unit vectors $e_i$ form a basis of $F^n$ with $e[n]\approx n$, and $\dim_FF^n=n$.

[F28] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the uses of AC in this item are inherited only through the suppliers recorded at the steps that appeal to them.

[F29] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: under AC, a field is a regular Noetherian ring, and finite polynomial extensions and their localizations are regular (that is, all prime local rings are regular local rings).




## Verification

**Proof technique:** direct.

1.1 Let $k$ be an algebraically closed field, put $R=k[x,y,z,t]=k[x][y][z][t]=A[t]$ with $A=k[x,y,z]$ by [F1], and put $f=xt-yz\in R$ and $X=V(f)\subseteq\mathbb A^4_k$ with its reduced classical structure. In the unique expansion of [F2] the only nonzero coefficients of $f$ are those of the monomials $xt$ and $yz$, both of total degree $2$; the coefficients $1$ and $-1$ are nonzero because $1\ne0$ in the field $k$ [F9, F10], so $f\ne0$ and $f$ is homogeneous of degree $2$ by [F25]. The constant coefficient is absent, so $f(0)=0$ and the origin $0=(0,0,0,0)$ is a $k$-rational point of $X$. [F1, F2, F9, F10, F25, given, algebra]

1.2 For each variable $v\in\{x,y,z,t\}$ the degree of $f$ in $v$ under the expansion of [F2] is $1$: the exponent of $v$ is $1$ in one of the monomials $xt$, $yz$ and $0$ in the other, and both coefficients are nonzero [F9, F10]. By [F3] the same exponent vectors compute these degrees in the presentation of $R$ as a polynomial ring in the other three variables over the field $k$, whose coefficient ring is an integral domain by [F4, F5], and there the degree of a nonzero polynomial is additive on products by [F8]. If $f$ were a unit, say $fg=1$ with $g\in R$, then $g\ne0$ and $0=\deg_x1=\deg_xf+\deg_xg=1+\deg_xg$, impossible since $\deg_xg\ge0$; hence $f$ is a nonunit. Therefore $f$ is nonzero, nonconstant and a nonunit of $k[\mathbb A^4]=R$. [F2, F3, F4, F5, F8, F9, F10, given, algebra]

2.1 Since $f$ is a nonzero nonunit of the UFD $R$ [F4, F5], $f$ is a finite product of irreducibles [F5]; if some irreducible occurred twice, then $q^2\mid f$ for that irreducible $q$, so it suffices to rule this out. Suppose $q$ is irreducible with $q^2\mid f$, say $f=q^2r$: then $q\ne0$ because $q$ is a nonzero nonunit [F6], and $r\ne0$ because $f\ne0$ by step 1.2. Present $R=k[y,z,t][x]$ by [F3]; the degree in $x$ of a nonzero polynomial over the integral domain $k[y,z,t]$ [F4, F5] is additive on products [F8], so step 1.2 gives $1=\deg_xf=\deg_x(q^2)+\deg_xr=2\deg_xq+\deg_xr$ and hence $\deg_xq=0$; the same argument with the other three variables gives $\deg_yq=\deg_zq=\deg_tq=0$. All four degrees of $q$ vanish, so in the expansion of [F2] the only possibly nonzero coefficient of $q$ is the constant one, and $q\ne0$ makes that constant nonzero: $q$ is a nonzero element of $k^\times$ [F10]. By [F7] applied four times through the integral domains $k$, $k[x]$, $k[x,y]$ and $k[x,y,z]$ [F4, F5], the units of $R=k[x,y,z][t]$ are exactly the units of $k$, that is the nonzero elements of $k$ [F10]; hence $q$ is a unit of $R$, contradicting that $q$ is irreducible [F6]. Therefore no irreducible factor of $f$ occurs twice: $f$ is squarefree. [F2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.2, algebra]

2.2 The ring $R$ is an integral domain by [F4, F5], so $I(\mathbb A^4)=I(V(0))=\sqrt{(0)}=(0)$ by [F12] and [F11], and the coordinate ring of $\mathbb A^4$ is $k[\mathbb A^4]=R/(0)=R$ by [F14]; further $\dim\mathbb A^4=4$ by [F15], and $\mathbb A^4$ is irreducible because $(0)$ is a proper prime ideal of $R$ and nonempty irreducible algebraic sets correspond precisely to proper prime ideals by [F13]. The element $f\in k[\mathbb A^4]=R$ is nonzero and a nonunit by step 1.2, so [F16] applies to the irreducible affine algebraic set $\mathbb A^4$: the zero locus $X=V(f)$ is nonempty and every irreducible component of $X$ has dimension $4-1=3$. [F4, F5, F11, F12, F13, F14, F15, F16, step 1.2, algebra]

2.3 By [F23], $f=\det\begin{pmatrix}x&y\\z&t\end{pmatrix}=xt-yz$, so $X$ is the set of $2\times2$ matrices over $k$ with vanishing determinant; a square matrix over $k$ is invertible exactly when its determinant is a unit of $k$ by [F24], and the units of the field $k$ are its nonzero elements [F10], so $X$ is exactly the source's locus of noninvertible $2\times2$ matrices. By step 1.1 $f$ is homogeneous of degree $2$, so for $a\in X(k)$ and $\lambda\in k$ the evaluation rule of [F2] and distributivity and commutativity in $k$ [F9] give $f(\lambda a)=(\lambda a_x)(\lambda a_t)-(\lambda a_y)(\lambda a_z)=\lambda^2(a_xa_t-a_ya_z)=\lambda^2f(a)=0$, hence $\lambda a\in X(k)$: the variety $X$ is invariant under scaling about the origin, a cone with vertex $0$. [F2, F9, F10, F23, F24, step 1.1, algebra]

3.1 The principal ideal $(f)$ is radical. Indeed, if $g^N\in(f)$ with $N\ge1$, then $f\mid g^N$; writing the squarefree element $f$ as $u q_1\cdots q_m$ with $u$ a unit and the $q_i$ pairwise nonassociate irreducibles [F5, F6], each $q_i$ is prime by [F4] and divides $g^N$, hence divides $g$, and the pairwise nonassociate primes $q_1,\ldots,q_m$ all dividing $g$ have a product dividing $g$, so $f\mid g$ and $g\in(f)$; thus $\sqrt{(f)}=(f)$ by [F11]. Therefore $I(X)=I(V(f))=\sqrt{(f)}=(f)$ by [F12], so $X$ is a reduced classical variety whose coordinate ring is $k[X]=R/(f)=k[x,y,z,t]/(f)$ by [F14], presented by the actual ideal $(f)$ that the Jacobian and tangent computations of [F18, F19] use. [F4, F5, F6, F11, F12, F14, F18, F19, step 2.1, given, algebra]

4.1 Every closed point $a\in X$ lies on at least one irreducible component of $X$, and all components have dimension $3$ by step 2.2; since $X$ is a reduced classical finite-type space over the algebraically closed field $k$ by step 3.1, [F17] gives $\dim\mathcal O_{X,a}=\max_{a\in X_i}\dim X_i=3$ for every closed point $a\in X$. [F17, step 3.1, step 2.2, given, algebra]

4.2 The ideal $(f)$ has the one-element generating list $(f)$. At a point $a\in X(k)$ the Jacobian matrix of [F18] is the one-row matrix $J_{(f)}(a)=\bigl(\partial_xf(a),\partial_yf(a),\partial_zf(a),\partial_tf(a)\bigr)$; the monomial derivative formula of [F18] gives $\partial_x(xt)=t$, $\partial_t(xt)=x$, $\partial_y(yz)=z$, $\partial_z(yz)=y$, and all other variable derivatives of the two monomials are zero, with the coefficients $1$ and $-1$ read in $k$ [F9, F10]; hence $J_{(f)}(a)=(a_t,-a_z,-a_y,a_x)$. By [F19] the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_aX\cong\ker J_{(f)}(a)$, where $T_aX$ is the intrinsic tangent space of [F20] at the $k$-rational point $a$; step 3.1 identifies the reduced classical variety with $\operatorname{Spec}(R/(f))$ at its rational points and the actual ideal is the one used by [F18], so no hypothesis on the characteristic enters. [F9, F10, F18, F19, F20, step 3.1, given, algebra]

5.1 At the origin all four entries of $J_{(f)}(0)$ vanish, so $J_{(f)}(0)$ is the zero row and $\ker J_{(f)}(0)=k^4$, of dimension $4$ by [F26, F27]. At a point $a\ne0$ at least one of $a_x,a_y,a_z,a_t$ is nonzero; if $a_x\ne0$, the single equation $a_tv_1-a_zv_2-a_yv_3+a_xv_4=0$ of the row is solved for $v_4$ as $v_4=(a_zv_2+a_yv_3-a_tv_1)/a_x$, so the kernel is exactly the image of the $k$-linear map $\varphi(u_1,u_2,u_3)=(u_1,u_2,u_3,(a_zu_2+a_yu_3-a_tu_1)/a_x)$, which is injective because its first three coordinates are $u_1,u_2,u_3$; the images of the standard basis vectors $e_1,e_2,e_3$ of $k^3$ [F27] are a basis of $\ker J_{(f)}(a)$, since they span by the previous sentence and are linearly independent as $\varphi$ is injective, so $\dim_k\ker J_{(f)}(a)=3$ by [F26]; the cases $a_y\ne0$, $a_z\ne0$, $a_t\ne0$ are identical with the corresponding coordinate solved for, the divisions being by the nonzero element $a_x\in k^\times$ or its analogue, available in every characteristic [F10]. [F9, F10, F26, F27, step 4.2, algebra]

6.1 The four partial derivatives of $f$ vanish simultaneously at a $k$-point $a$ exactly when $a_t=a_z=a_y=a_x=0$, that is exactly at the origin. By step 2.1 the polynomial $f$ is nonconstant and squarefree, so the gradient test [F22] applies to the reduced classical variety $X=V(f)$ over the algebraically closed field $k$ and shows for every closed point $a\in X$: the point $a$ is singular if and only if all formal first partials of $f$ vanish at $a$, if and only if $a=0$. This does not yet address nonclosed points. Cover the complement of the origin in the underlying scheme by $D(x),D(y),D(z),D(t)$. On $D(x)$ the equation $xt-yz=0$ eliminates $t$, giving a coordinate-ring isomorphism $(R/(f))_x\cong k[x,x^{-1},y,z]$. Similarly, elimination of $z$ on $D(y)$, of $y$ on $D(z)$, and of $x$ on $D(t)$ identifies their rings with localizations of polynomial rings in three variables over $k$. By [F29], each of these rings is regular at every prime. Thus every point outside the origin, including every nonclosed point, is regular. At the origin $\dim_kT_0X=4\ne3=\dim_0X$ by steps 5.1 and 4.1, so it is singular by [F21]. Therefore $X_{\mathrm{sing}}=\{0\}$ and $X_{\mathrm{reg}}=X\setminus\{0\}$ as subsets of the full scheme. [F21, F22, F29, step 2.1, step 4.1, step 5.1, algebra]

7.1 Boundary and scope dispositions. Nonemptiness: $X$ contains the origin, which is a $k$-rational point by step 1.1, and step 2.2 proves $V(f)$ nonempty again through [F16], so the empty case has no instance. Zero cases: the origin has the zero Jacobian row of step 5.1 with kernel all of $k^4$, the zero vector lies in every kernel and every tangent space, $f$ has zero constant term so $f(0)=0$, and the origin corresponds to the zero $2\times2$ matrix of vanishing determinant in step 2.3; $f$ itself is nonzero by step 1.2. One: there is one defining equation, one Jacobian row of length four, and one singular point, the origin, in steps 4.2 and 6.1. Degenerate case: no division by $2$ occurs anywhere; the kernel computation of step 5.1 divides only by a nonzero field element, and the gradient test [F22] is characteristic-free, so the conclusions hold in characteristic $2$ as well, where the source's nondegeneracy conventions for quadrics would otherwise require care. Endpoints: the variable degrees of $f$ are all $1$ by step 1.2, the ambient dimension $4$ and the component and local dimensions $3$ are the two ends of the dimension comparison in steps 2.2 and 4.1, and the tangent dimensions $4$ at the origin and $3$ elsewhere of step 5.1 are the two values, the maximum $4$ occurring only at the vertex. Nonempty choice: AC is declared in [F28] and is used through [F12], [F13], [F15], [F16], [F17], [F22] and [F29], each cited at the step that uses it; the polynomial, degree, unit and Jacobian arguments of steps 1.1, 1.2, 2.1, 4.2, 5.1 and 2.3, the basis arguments built on [F26, F27], and the determinant items [F23, F24] are choice-free. Both directions of the gradient biconditional are used at closed points in step 6.1, and the four principal charts cover every nonclosed point outside the origin. [F2, F9, F10, F12, F13, F15, F16, F17, F22, F23, F24, F26, F27, F28, F29, step 1.1, step 1.2, step 2.2, step 4.1, step 4.2, step 5.1, step 6.1, step 2.3, algebra] ∎



## Source qualification

Donu Arapura, *Notes on Basic Algebraic Geometry*, Example 5.1.3 (printed p. 35) reads: "The locus of noninvertible matrices (x y; z t) is given by xt - yz = 0. The Jacobian J = (t, -z, -y, x) so the tangent space at the zero matrix is 4 dimensional while the tangent space at any other point is 3 dimensional." The same printed page, in §5.2, adds that "the hypersurface xt - yz = 0 has dimension equal to 3. Therefore the origin is the unique singular point," with nonsingular defined there as $\dim T_aX=\dim X$. The item derives the dimension statement as the local statement $\dim\mathcal O_{X,a}=3$ at every closed point (steps 2.2 and 4.1), which is the form that remains valid for reducible or non-equidimensional hypersurfaces and which implies the source's global dimension here; it derives the tangent dimensions from the Jacobian-kernel isomorphism of the pair; and it verifies the squarefreeness and nonconstancy hypotheses of the gradient test, which the source does not mention. The source does not state a characteristic hypothesis for Example 5.1.3; the item's squarefreeness, Jacobian, kernel and gradient arguments are characteristic-free, and no characteristic hypothesis is imposed. The title's description as a rank-one determinantal cone refers to the generic $2\times2$ determinant $f=xt-yz$ of step 2.3; the source calls $X$ the locus of noninvertible matrices, and the item verifies the determinant identity and the invertibility criterion it uses, but it does not develop matrix rank theory and makes no formal rank claim. The item treats the reduced classical variety over the algebraically closed field $k$; no scheme-level nilpotent thickening of the hypersurface is considered, and step 3.1 records that the actual ideal $(f)$ agrees with $I(X)$ here.
