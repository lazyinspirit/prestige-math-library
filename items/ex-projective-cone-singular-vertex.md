---
id: ex-projective-cone-singular-vertex
kind: example
title: "A projective cone with a smooth conic base"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-dimension-affine-and-projective-space
  - cor-hypersurface-singular-locus-gradient
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - cor-units-in-a-polynomial-ring-over-a-domain
  - def-axiom-of-choice
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-coordinate-ring-affine-algebraic-set
  - def-embedding-dimension-and-regular-local-ring
  - def-field
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-irreducible-and-prime-elements-in-a-domain
  - def-jacobian-matrix-affine-algebraic-set
  - def-monomials-multidegree-and-total-degree
  - def-multivariate-polynomial-ring-by-iteration
  - def-projective-algebraic-set
  - def-projective-space-points
  - def-ring-characteristic
  - def-singular-and-regular-loci-variety
  - def-stalk-of-presheaf
  - def-zariski-tangent-space-point
  - lem-evaluation-ideal-is-maximal
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-local-dimension-reduced-variety-components
  - lem-projective-hypersurface-affine-pieces
  - lem-standard-projective-opens-are-affine-spaces
  - thm-classical-affine-nullstellensatz-correspondence
  - thm-local-ring-affine-variety-localization
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-principal-subvariety-codimension-one
  - thm-quotient-is-domain-iff-ideal-prime
  - thm-stalk-structure-sheaf-prime-localization
  - thm-zariski-tangent-space-jacobian-kernel
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Exercise 4-8 (printed p. 99; solution printed p. 223) and Exercise 6-1 (printed p. 159)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Example

Assume the Axiom of Choice. Let $k$ be an algebraically closed field with
$\operatorname{char}k\ne2$, put
$$F=X_0^2+X_1^2-X_2^2\in k[X_0,X_1,X_2,X_3],\qquad X=V_+(F)\subseteq\mathbf P^3_k,$$
and let $v=[0:0:0:1]$. The hyperplane $V_+(X_3)=\{[a_0:a_1:a_2:0]\}$ is
identified with $\mathbf P^2_k$ by dropping the last coordinate, and
$$C=X\cap V_+(X_3)=V_+(X_0^2+X_1^2-X_2^2)\subseteq\mathbf P^2_k$$
is the base conic. A point of one of these varieties is called singular when
its local ring is not a regular local ring, as in the classical dimension test
below. Then:

- $F$ is homogeneous of degree two and does not involve the coordinate $X_3$;
  the only point of $X$ with $X_0=X_1=X_2=0$ is $v$, and $X$ is the cone with
  vertex $v$ over the conic $C$: for every $p\in C$ the line $\overline{vp}$ is
  contained in $X$, and every point of $X\setminus\{v\}$ lies on one of these
  lines;
- in the chart $X_3\ne0$ the cone is the affine quadric surface
  $Y_3=V(x_0^2+x_1^2-x_2^2)\subseteq\mathbf A^3_k$, and $v$ corresponds to the
  origin $0=(0,0,0)$; there the tangent space is three-dimensional and the
  local dimension is two, so the vertex has tangent dimension three, local
  dimension two, and is a singular point of the cone:
  $T_vX\cong k^3$, $\dim\mathcal O_{X,v}=2$ and
  $\dim_kT_vX>\dim\mathcal O_{X,v}$;
- the base conic $C$ has no singular point, so it is a smooth (nonsingular)
  conic: its three standard charts $C\cap D_+(X_i)$, $i=0,1,2$, are the plane
  curves $1+x_1^2-x_2^2=0$, $x_0^2+1-x_2^2=0$ and $x_0^2+x_1^2-1=0$, and none
  of these three curves has a point at which both partial derivatives vanish;
- the vertex is the only singular point of the cone: the charts $D_+(X_i)$,
  $i=0,1,2$, cover $X\setminus\{v\}$, and in each of them the local equation
  $1+x_1^2-x_2^2$, $x_0^2+1-x_2^2$ or $x_0^2+x_1^2-1$, read in the three
  chart coordinates with the third coordinate absent, has no point at which
  all partial derivatives vanish.

In each chart the ratio coordinates are again written $x_0,x_1,x_2$ (omitting
the coordinate normalized to $1$), so the same displayed letters refer to the
chart's own coordinates. All seven chart polynomials displayed above (the four
cone equations in three variables and the three conic equations in two
variables) are nonconstant squarefree, so the hypersurface gradient test
applies on every chart. The hypothesis $\operatorname{char}k\ne2$ is used both
for squarefreeness and for the partial-derivative computations; in
characteristic two the form $X_0^2+X_1^2-X_2^2$ is the square
$(X_0+X_1+X_2)^2$ and the conic degenerates.

## Facts & Assumptions

**Given:** AC; an algebraically closed field $k$ with
$\operatorname{char}k\ne2$; the polynomial ring $k[X_0,X_1,X_2,X_3]$ and
$F=X_0^2+X_1^2-X_2^2$; the projective algebraic set
$X=V_+(F)\subseteq\mathbf P^3_k$; the point $v=[0:0:0:1]$; the hyperplane
$V_+(X_3)\cong\mathbf P^2_k$ with the conic
$C=V_+(X_0^2+X_1^2-X_2^2)$; and the standard charts $D_+(X_i)$ with their
ratio coordinates.

[F1] [[def-axiom-of-choice]]: "Every family of nonempty sets has a choice function."

[F2] [[def-projective-space-points]]: for $n\ge0$, $\mathbf P_k^n=(k^{n+1}\setminus\{0\})/\sim$, where $a\sim b$ exactly when $b=\lambda a$ for some $\lambda\in k^\times$, and a class is written $[a_0:\cdots:a_n]$.

[F3] [[def-projective-algebraic-set]]: for homogeneous $T\subseteq k[x_0,\ldots,x_n]$, $V_+(T)=\{[a]\in\mathbf P_k^n:F(a)=0\text{ for all }F\in T\}$.

[F4] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: a polynomial is homogeneous of degree $d$ if each occurring monomial has total degree $d$; $0$ is homogeneous in every degree.

[F5] [[lem-standard-projective-opens-are-affine-spaces]]: "For every $i$, normalization of the $i$th coordinate identifies $D_+(x_i)$ with $\mathbf A_k^n$."

[F6] [[lem-projective-hypersurface-affine-pieces]]: "If $X=V_+(F)$, then $X\cap D_+(x_i)$ is the affine hypersurface obtained by setting $x_i=1$ in $F$, with the usual ratio-coordinate transition formulas."

[F7] [[cor-hypersurface-singular-locus-gradient]]: "For every $a\in X(k)$, the point $a$ is singular exactly when every formal first partial derivative of $f$ vanishes at $a$."

[F8] [[cor-hypersurface-singular-locus-gradient]]: "The affine scheme $\operatorname{Spec}(k[t_1,\ldots,t_n]/(f))$ uses the actual ideal $(f)$, which is already radical for squarefree $f$."

[F9] [[def-singular-and-regular-loci-variety]]: for a closed point $x$ of a reduced classical finite-type space over an algebraically closed field and AC, $x\in X_{\mathrm{reg}}\quad\Longleftrightarrow\quad\dim_{\kappa(x)}T_xX=\dim_x X$.

[F10] [[lem-local-dimension-reduced-variety-components]]: "If $X_i$ are the irreducible components of $X$, then $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i$."

[F11] [[thm-principal-subvariety-codimension-one]]: "Let $X$ be irreducible affine and $0\ne f\in k[X]$ be a nonunit. Then $V_X(f)$ is nonempty and every irreducible component has dimension $\dim X-1$, hence codimension one."

[F12] [[cor-dimension-affine-and-projective-space]]: "For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$."

[F13] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: "If $R$ is an integral domain, then $R[x_1,\ldots,x_n]$ is an integral domain for every $n\in\mathbb N$, including $n=0$."

[F14] [[thm-classical-affine-nullstellensatz-correspondence]]: "Nonempty irreducible algebraic sets correspond precisely to proper prime ideals, and points to maximal ideals."

[F15] [[thm-quotient-is-domain-iff-ideal-prime]]: "$R/P$ is an integral domain if and only if $P$ is a prime ideal."

[F16] [[thm-zariski-tangent-space-jacobian-kernel]]: "Then the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_aX\cong\ker\!\left(J_{(f_1,\ldots,f_r)}(a):k^n\longrightarrow k^r\right)$."

[F17] [[def-jacobian-matrix-affine-algebraic-set]]: "The **Jacobian matrix at $a$**, with the equation-row convention, is the $r\times n$ matrix $J_{(f_1,\ldots,f_r)}(a)=(\partial f_i/\partial t_j(a))$"; formal derivatives are computed on monomials by the displayed rule and extended $k$-linearly.

[F18] [[def-zariski-tangent-space-point]]: "The **intrinsic Zariski tangent space** of $X$ at $x$ is its linear dual over the residue field: $T_xX:=\operatorname{Hom}_{\kappa(x)}(C_xX,\kappa(x))$", where $C_xX=\mathfrak m_x/\mathfrak m_x^2$.

[F19] [[thm-local-ring-affine-variety-localization]]: for a classical affine variety $X$ and $x\in X$, "there is a canonical isomorphism of local rings $\mathcal O_{X,x}\xrightarrow{\sim}k[X]_{\mathfrak m_x}$".

[F20] [[thm-stalk-structure-sheaf-prime-localization]]: "For $\mathfrak p\in\operatorname{Spec}A$, there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$."

[F21] [[def-stalk-of-presheaf]]: "The **stalk** of $\mathcal F$ at $x$ is the filtered colimit $\mathcal F_x:=\varinjlim_{\mathcal N_x^{\operatorname{op}}}\mathcal F(U)$" over the open neighbourhoods of $x$, concretely equivalence classes of pairs $(U,s)$.

[F22] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: "At a point z its stalk is the ring of germs of such functions. Evaluation at z maps it onto k, with kernel the germs vanishing at z"; these affine models are locally ringed spaces with residue fields canonically $k$.

[F23] [[def-embedding-dimension-and-regular-local-ring]]: "For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$."

[F24] [[def-coordinate-ring-affine-algebraic-set]]: "Its **coordinate ring** is $$k[X]:=k[x_1,\ldots,x_n]/I(X)$$."

[F25] [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]: "Then $k[x_1,\ldots,x_r]$ is a unique factorisation domain ... Every irreducible element of it is prime."

[F26] [[thm-polynomial-degree-of-a-product-over-a-domain]]: "If $R$ is an integral domain and $f,g\in R[x]$ are nonzero, then $fg\ne0$ and $\deg(fg)=\deg f+\deg g$."

[F27] [[cor-units-in-a-polynomial-ring-over-a-domain]]: "Let $R$ be an integral domain. A polynomial $f\in R[x]$ is a unit if and only if it is a constant polynomial whose constant value is a unit of $R$."

[F28] [[def-irreducible-and-prime-elements-in-a-domain]]: "The element $p$ is **irreducible** if every factorisation $p=ab$ has $a$ or $b$ a unit."

[F29] [[def-multivariate-polynomial-ring-by-iteration]]: the iterated ring satisfies $R[x_1,\ldots,x_0]=R$ and $R[x_1,\ldots,x_{n+1}]=R[x_1,\ldots,x_n][x_{n+1}]$.

[F30] [[def-monomials-multidegree-and-total-degree]]: "The **degree in $x_i$** is the largest $t_i$ with $c_{\mathbf t}\ne0$", computed from the unique finite expansion $f=\sum_{\mathbf t}c_{\mathbf t}x^{\mathbf t}$.

[F31] [[def-field]]: a field is a commutative structure in which every $x\ne0$ has a multiplicative inverse and $0\ne1$; the field operations are the ring operations.

[F32] [[def-ring-characteristic]]: the characteristic of a ring is the least positive $n$ with $n\cdot1_R=0_R$, and $0$ when no such $n$ exists; hence $\operatorname{char}k\ne2$ means $2\cdot1_k\ne0$.

[F33] [[lem-evaluation-ideal-is-maximal]]: "The evaluation map $\operatorname{ev}_a:k[x_1,\ldots,x_n]\to k$, $f\mapsto f(a)$, has kernel $(x_1-a_1,\ldots,x_n-a_n)$. In particular, this ideal is maximal."




## Verification

**Proof technique:** direct.

1.1 Set up the objects. By [F1] the Axiom of Choice is available. Since $k$ is a field [F31] and $\operatorname{char}k\ne2$ [F32], the element $2=2\cdot1_k$ is nonzero, hence invertible in $k$. Every monomial of $F=X_0^2+X_1^2-X_2^2$ has total degree two, so $F$ is homogeneous of degree two [F4] and does not involve $X_3$. The points of projective space are the classes $[a_0:\cdots:a_n]$ of [F2]; the hyperplane $V_+(X_3)$ consists exactly of the classes $[a_0:a_1:a_2:0]$, which dropping the last coordinate identifies with $\mathbf P^2_k$, and under this identification $X\cap V_+(X_3)=V_+(X_0^2+X_1^2-X_2^2)=C$ [F3]. Also $F(v)=0$, so $v\in X$ [F3], and $1+0-1=0$, so $[1:0:1]\in C$; both $X$ and $C$ are nonempty. [F1, F2, F3, F4, F31, F32, given, algebra]

1.2 Chart equations. For each $i\in\{0,1,2,3\}$ the normalization of the $i$th coordinate identifies $D_+(X_i)$ with $\mathbf A^3_k$ [F5], and [F6] identifies $X\cap D_+(X_i)$ with the affine hypersurface obtained by setting $X_i=1$ in $F$. Explicitly, in the chart's own coordinates, $X\cap D_+(X_3)$ is $V(g_3)$ for $g_3=x_0^2+x_1^2-x_2^2$, while $X\cap D_+(X_0)$, $X\cap D_+(X_1)$ and $X\cap D_+(X_2)$ are $V(g_0)$, $V(g_1)$ and $V(g_2)$ for $g_0=1+x_1^2-x_2^2$, $g_1=x_0^2+1-x_2^2$ and $g_2=x_0^2+x_1^2-1$; in these three charts the ratio $x_3=X_3/X_i$ does not occur. The vertex $v=[0:0:0:1]$ lies in $D_+(X_3)$ with coordinates $(0,0,0)=0$. In the plane $V_+(X_3)\cong\mathbf P^2_k$ with coordinates $X_0,X_1,X_2$ the same lemma gives $C\cap D_+(X_i)=V(h_i)\subseteq\mathbf A^2_k$ for $i=0,1,2$, with $h_0=1+x_1^2-x_2^2$, $h_1=x_0^2+1-x_2^2$ and $h_2=x_0^2+x_1^2-1$, the same displayed quadratics read in the two remaining coordinates. [F5, F6, given, algebra]

1.3 Open-chart locality. Let $W$ be a classical prevariety over $k$ and let $U\subseteq W$ be open with $p\in U$. By [F21] the stalk $\mathcal O_{W,p}$ is the filtered colimit of the $\mathcal O_W(V)$ over the open neighbourhoods $V$ of $p$, and the neighbourhoods of $p$ contained in $U$ are cofinal among all of them: for any open $V\ni p$ the intersection $V\cap U$ is an open neighbourhood of $p$ contained in $U$ and in $V$. Hence the stalks of $\mathcal O_W$ and of the restricted sheaf at $p$ are canonically isomorphic, $\mathcal O_{W,p}\cong\mathcal O_{U,p}$, and the maximal ideals correspond; by [F22] these are local rings with residue field $k$. Since the tangent space, the dimension of the local ring and regularity are invariants of this local ring [F23], the point $p$ has the same tangent space, the same local dimension and the same regularity status computed in $W$ and in $U$. [F21, F22, F23, given, algebra]

1.4 Affine charts and their schemes. Let $U$ be an affine chart of a classical variety with coordinate ring $k[U]$ [F24] and let $p\in U$ with vanishing ideal $\mathfrak m_p$. By [F19] there is a canonical isomorphism $\mathcal O_{U,p}\cong k[U]_{\mathfrak m_p}$; if $p$ is a $k$-rational point, its evaluation ideal is maximal with residue field $k$ [F33], and the affine scheme $\operatorname{Spec}(k[U])$ has the same local ring $k[U]_{\mathfrak m_p}$ at that point [F20]. Therefore the intrinsic tangent space of [F18] and the Jacobian-kernel description of [F16] applied to the chart scheme compute the tangent space of the classical point $p$, and the local dimension and regularity computed on the chart scheme agree with those of $p$ in the variety. [F16, F18, F19, F20, F24, F33, given, algebra]

1.5 The cone over the conic. Let $p=[a_0:a_1:a_2:0]\in C$ and let $[s:t]\in\mathbf P^1$. The point $[sa_0:sa_1:sa_2:t]$ lies on the line $\overline{vp}$, and $F(sa_0,sa_1,sa_2,t)=s^2(a_0^2+a_1^2-a_2^2)=0$ by $F$-homogeneity and $X_3$-independence [F3, F4], so the line is contained in $X$. Conversely, if $[b_0:b_1:b_2:b_3]\in X$ has $(b_0,b_1,b_2)\ne0$, then $[b_0:b_1:b_2:0]\in C$ and the point lies on the line joining it to $v$; the only point of $X$ with $b_0=b_1=b_2=0$ is $v$, by [F2]. Thus $X$ is the union of $v$ with the lines joining $v$ to the points of $C$. [F2, F3, F4, given, algebra]

2.1 Squarefreeness of the chart equations. Each of the seven chart polynomials displayed in step 1.2 is nonzero, nonconstant, and of the shape $f=c+\sum_{j\in S}\epsilon_jx_j^2$ with $c\in k$, $|S|\ge2$ and nonzero coefficients $\epsilon_j\in k$: the four three-variable equations are $x_0^2+x_1^2-x_2^2$, $1+x_1^2-x_2^2$, $x_0^2+1-x_2^2$, $x_0^2+x_1^2-1$, and the three two-variable equations are the last three read in two variables. Suppose such an $f$ were not squarefree, so that some irreducible factor $q$ occurs in it at least twice [F25]; then $f=q^2r$ with $r\ne0$. Fix a variable $x_j$, view $k[x_1,\ldots,x_N]$ as the one-variable polynomial ring in $x_j$ over the remaining variables [F29, F30], and use that this coefficient ring is a domain [F13] and that degrees in $x_j$ add [F26]; for $q^2=q\cdot q$ this gives $\deg_{x_j}(f)=2\deg_{x_j}(q)+\deg_{x_j}(r)$. For $j\in S$ this degree is $2$, and for $j\notin S$ it is $0$, so $\deg_{x_j}(q)=\deg_{x_j}(r)=0$ for $j\notin S$. If $\deg_{x_j}(q)=0$ for every $j\in S$ as well, then $q$ is a nonzero constant, hence a unit [F27], contradicting irreducibility [F28]. Otherwise fix $z\in S$ with $\deg_z(q)\ge1$; then $\deg_z(q)=1$ and $\deg_z(r)=0$, so $q=q_0+x_zq_1$ with $q_1\ne0$ and $r$ involving no $x_z$, and comparing $x_z$-coefficients in $f=q^2r$ gives $2q_0q_1r=0$. The coefficient $2$ is nonzero in $k$ [F31, F32], $q_1$ and $r$ are nonzero, and the coefficient ring is a domain [F13], so $q_0=0$; then $q=x_zq_1$, and since $q$ is irreducible and $x_z$ is a nonunit [F27], the cofactor $q_1$ is a unit [F28], so $q=ux_z$ with $u$ a unit [F27]. Then $f=u^2x_z^2r$ is divisible by $x_z$, but $|S|\ge2$ provides $j\in S$ with $j\ne z$, and the monomial $\epsilon_jx_j^2$ has no factor $x_z$, contradicting divisibility. Hence every displayed chart polynomial is nonconstant and squarefree. [F13, F25, F26, F27, F28, F29, F30, F31, F32, step 1.2, given, algebra]

2.2 Partial derivatives of the chart equations. By the formal monomial rule of [F17], $\partial_{x_0}g_3=2x_0$, $\partial_{x_1}g_3=2x_1$ and $\partial_{x_2}g_3=-2x_2$; for $g_0=1+x_1^2-x_2^2$ the partials are $2x_1$, $-2x_2$ and $0$ with respect to the three chart variables, for $g_1=x_0^2+1-x_2^2$ they are $2x_0$, $-2x_2$ and $0$, and for $g_2=x_0^2+x_1^2-1$ they are $2x_0$, $2x_1$ and $0$; the same three pairs of nonzero partials occur for $h_0,h_1,h_2$ in two variables. Since $2\ne0$ in $k$ [F31, F32], the three partials of $g_3$ vanish simultaneously exactly at the origin $(0,0,0)$, the two nonzero partials of $g_0$ vanish exactly where $x_1=x_2=0$, and at every such point $g_0=1\ne0$, so no point of $V(g_0)$ has all its partials zero; the same computation shows that no point of $V(g_1)$, $V(g_2)$, $V(h_0)$, $V(h_1)$ or $V(h_2)$ has all its partials zero, and $V(h_i)=V(g_i)\cap\{x_3=0\}$ inside $V(g_i)$ for $i=0,1,2$. [F17, F31, F32, step 1.2, given, algebra]

3.1 Tangent space at the vertex. The origin is a $k$-rational point of the affine scheme $\operatorname{Spec}(k[x_0,x_1,x_2]/(g_3))$: by the squarefreeness of step 2.1 the ideal $(g_3)$ is radical and is the vanishing ideal of $V(g_3)$ [F8], so the coordinate ring of the chart is $k[x_0,x_1,x_2]/(g_3)$ [F24], and the evaluation ideal $(x_0,x_1,x_2)$ is maximal with residue field $k$ [F33]. By [F16] the tangent space at that point is the kernel of the Jacobian matrix of [F17], whose single row is $J_{g_3}(0)=(0,0,0)$ by step 2.2, so the kernel is all of $k^3$ and $\dim_kT_0=3$. By the chart comparisons of steps 1.3 and 1.4 this is the tangent space of the vertex, $T_vX\cong k^3$, of dimension three. [F8, F16, F17, F24, F33, step 1.3, step 1.4, step 2.1, step 2.2, given, algebra]

3.2 The base conic is smooth. Every point of $C$ lies in $C\cap D_+(X_i)$ for at least one $i\in\{0,1,2\}$ [F2], and on that chart $C\cap D_+(X_i)=V(h_i)\subseteq\mathbf A^2_k$ with $h_i$ nonconstant and squarefree by steps 1.2 and 2.1. By the gradient test [F7], a point $a\in V(h_i)$ is singular precisely when both partial derivatives of $h_i$ vanish at $a$; by step 2.2 none of the three polynomials has such a point, so no point of the conic is a singular point of its chart. By the open-chart locality of step 1.3 (applied to the conic $C$ and its open chart $C\cap D_+(X_i)$), no point of $C$ is singular on $C$: the conic has no singular point, that is, it is a smooth conic. [F2, F7, step 1.2, step 1.3, step 2.1, step 2.2, given, algebra]

4.1 Local dimension at the vertex and singularity. The affine space $\mathbf A^3_k$ is irreducible: its coordinate ring $k[x_0,x_1,x_2]$ is an integral domain [F13] and the zero ideal is prime because the quotient by it is that domain [F15], and the corresponding nonempty algebraic set is $\mathbf A^3$ itself by the Nullstellensatz correspondence [F14]. Moreover $\dim\mathbf A^3_k=3$ [F12]. The polynomial $g_3$ is a nonzero nonunit of $k[x_0,x_1,x_2]$ [F25, F27], so by the principal-subvariety theorem [F11] every irreducible component of $V(g_3)$ has dimension $3-1=2$. The local dimension at the origin is therefore $\dim\mathcal O_{V(g_3),0}=\max_{0\in X_i}\dim X_i=2$ [F10], and by step 1.3 the local ring of the cone at the vertex, hence also its local dimension, is the same: $\dim\mathcal O_{X,v}=2$. With $\dim_kT_vX=3$ from step 3.1, the numerical criterion of the classical dimension test [F9] shows that the vertex satisfies $\dim_kT_vX\ne\dim_vX$ and is therefore a singular point of the cone; equivalently, all partials of $g_3$ vanish at the origin by step 2.2, and the gradient test [F7] makes the origin a singular point of the chart $V(g_3)$. Thus the vertex has tangent dimension three, local dimension two, and is singular. [F7, F9, F10, F11, F12, F13, F14, F15, F25, F27, step 2.2, step 3.1, given, algebra]

5.1 The cone is smooth away from the vertex. Let $q\in X$ with $q\ne v$. If $q$ had $X_0=X_1=X_2=0$, then by [F2] it would equal $[0:0:0:1]=v$, so $q\in D_+(X_i)$ for some $i\in\{0,1,2\}$. On that chart $X\cap D_+(X_i)=V(g_i)$ with $g_i$ nonconstant and squarefree by steps 1.2 and 2.1, and by step 2.2 no point of $V(g_i)$ has all three partial derivatives equal to zero; hence no point of the chart is singular by the gradient test [F7], in particular $q$ is not singular, and step 1.3 transfers this conclusion from the chart to $X$. Together with step 4.1, the singular locus of the cone is exactly the vertex $\{v\}$. [F7, step 1.2, step 1.3, step 2.1, step 2.2, step 4.1, given, algebra]

6.1 Boundary and scope dispositions. Nonemptiness: $v\in X$ and $[1:0:1]\in C$ by step 1.1, and each of the four cone charts and three conic charts is nonempty because the corresponding equation is satisfied at the origin of the vertex chart and at $x_1=0,x_2=1$ or $x_0=1,x_1=0$ in the other charts; the empty case therefore has no instance. Zero cases: the vertex is the origin, the zero tuple, of the vertex chart; the Jacobian row there is the zero row of step 3.1 with kernel all of $k^3$, and the zero vector lies in every kernel and every tangent space. One: each chart uses one defining equation, one Jacobian row, and the vertex is the one singular point of the cone by steps 4.1 and 5.1. Degenerate case: the excluded characteristic two is genuinely degenerate, since there $X_0^2+X_1^2-X_2^2=(X_0+X_1+X_2)^2$ is a square and the partials of step 2.2 become $0$; the hypothesis $\operatorname{char}k\ne2$ enters through [F31, F32] in steps 1.1, 2.1 and 2.2. Endpoints: the statement concerns a fixed quadric over a field and has no ordered parameter or interval; its numerical values, the tangent dimension three and the local dimension two at the vertex and the dimension one of the conic, are discrete, so no endpoint case arises. Nonempty choice: AC is declared in [F1] and used through the cited suppliers [F7], [F9], [F10], [F11], [F12], [F14] and [F19], each cited at the step that uses it; the squarefreeness argument of step 2.1, the derivative computations of step 2.2, the chart comparisons of steps 1.3–1.4 and the line containment of step 1.5 use no choice. Both directions of the biconditional in [F7] are used: the reverse direction at the vertex in step 4.1 and the forward direction, through its contrapositive, at every other point in steps 3.2 and 5.1; likewise the numerical criterion of [F9] is used in the direction regular implies equal dimensions, through its contrapositive at the vertex. [F1, F7, F9, F10, F11, F12, F14, F19, F31, F32, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, given, algebra] ∎



J. S. Milne, *Algebraic Geometry* v6.10, Exercise 4-8 (printed p. 99 / PDF
p. 98) reads: "Show that the cone $X^2 + Y^2 = Z^2$ is a normal variety, even
though the origin is singular (characteristic $\ne2$)." Its solution (printed
p. 223) uses only that the singular locus has codimension at least two, a
normality argument not reproduced here; the item verifies the singularity
part, namely that the origin of the affine quadric cone is a singular point
with tangent dimension three and local dimension two, and does not assert
normality. The projective setting is covered by Exercise 6-1 (printed p. 159):
"Show that a point $P$ on a projective curve $F(X, Y, Z) = 0$ is singular if
and only if $\partial F/\partial X$, $\partial F/\partial Y$, and
$\partial F/\partial Z$ are all zero at $P$." The item does not invoke that
projective criterion as a black box: it verifies smoothness of the base conic
and of the cone away from the vertex chart by chart, using the affine gradient
test of `cor-hypersurface-singular-locus-gradient` together with the
observation that a point's local ring, tangent space and regularity are
unchanged when computed in an open chart (step 1.3). Milne's projective curve
of Exercise 6-1 is a plane curve in $\mathbf P^2$; the item's conic is exactly
such a curve, and the three-variable cone equations are handled by the same
chartwise derivative computations with the third partial identically zero.
Milne's book-wide conventions are an algebraically closed field and classical
varieties; the item follows those conventions and records the characteristic
hypothesis explicitly, because the form $X_0^2+X_1^2-X_2^2$ is a square in
characteristic two. The statements that the conic and the cone minus the
vertex are "smooth" are the pointwise nonsingularity statements verified on
the charts; no smoothness of a morphism and no normality claim is made.

## Source qualification

J. S. Milne, *Algebraic Geometry* v6.10, Exercise 4-8 (printed p. 99 / PDF
p. 98) reads: "Show that the cone $X^2 + Y^2 = Z^2$ is a normal variety, even
though the origin is singular (characteristic $\ne2$)." Its solution (printed
p. 223) uses only that the singular locus has codimension at least two, a
normality argument not reproduced here; the item verifies the singularity
part, namely that the origin of the affine quadric cone is a singular point
with tangent dimension three and local dimension two, and does not assert
normality. The projective setting is covered by Exercise 6-1 (printed p. 159):
"Show that a point $P$ on a projective curve $F(X, Y, Z) = 0$ is singular if
and only if $\partial F/\partial X$, $\partial F/\partial Y$, and
$\partial F/\partial Z$ are all zero at $P$." The item does not invoke that
projective criterion as a black box: it verifies smoothness of the base conic
and of the cone away from the vertex chart by chart, using the affine gradient
test of `cor-hypersurface-singular-locus-gradient` together with the
observation that a point's local ring, tangent space and regularity are
unchanged when computed in an open chart (step 1.3). Milne's projective curve
of Exercise 6-1 is a plane curve in $\mathbf P^2$; the item's conic is exactly
such a curve, and the three-variable cone equations are handled by the same
chartwise derivative computations with the third partial identically zero.
Milne's book-wide conventions are an algebraically closed field and classical
varieties; the item follows those conventions and records the characteristic
hypothesis explicitly, because the form $X_0^2+X_1^2-X_2^2$ is a square in
characteristic two. The statements that the conic and the cone minus the
vertex are "smooth" are the pointwise nonsingularity statements verified on
the charts; no smoothness of a morphism and no normality claim is made.
