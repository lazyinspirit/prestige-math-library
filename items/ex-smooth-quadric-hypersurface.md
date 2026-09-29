---
id: ex-smooth-quadric-hypersurface
kind: example
title: "A nondegenerate projective quadric"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-dimension-affine-and-projective-space
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-hypersurface-singular-locus-gradient
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - cor-units-in-a-polynomial-ring-over-a-domain
  - def-algebraically-closed-field
  - def-axiom-of-choice
  - def-classical-affine-coordinate-ring
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-coordinate-ring-affine-algebraic-set
  - def-dimension-classical-variety
  - def-field
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-irreducible-and-prime-elements-in-a-domain
  - def-jacobian-matrix-affine-algebraic-set
  - def-locally-finite-type-and-finite-type-morphism
  - def-monomials-multidegree-and-total-degree
  - def-multivariate-polynomial-ring-by-iteration
  - def-projective-algebraic-set
  - def-projective-space-points
  - def-regular-local-ring-geometric-point
  - def-regular-noetherian-ring
  - def-ring-characteristic
  - def-singular-and-regular-loci-variety
  - lem-classical-variety-noetherian-components
  - lem-dimension-nonempty-open-subset
  - lem-field-is-noetherian
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-irreducible-components-of-a-topological-space
  - lem-local-dimension-reduced-variety-components
  - lem-projective-hypersurface-affine-pieces
  - lem-standard-projective-opens-are-affine-spaces
  - thm-classical-affine-nullstellensatz-correspondence
  - thm-jacobian-criterion-affine-variety
  - thm-local-ring-affine-variety-localization
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-principal-subvariety-codimension-one
  - thm-quotient-is-domain-iff-ideal-prime
  - thm-regular-equals-smooth-over-perfect-field
  - thm-stalk-structure-sheaf-prime-localization
  - thm-gluing-affine-schemes
  - thm-affine-scheme-ring-anti-equivalence
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4a (nonsingularity via the partial derivatives), Exercise 6-1 (printed p. 159)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §5.2 (nonsingularity, printed p. 35)"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the Axiom of Choice. Let $k$ be an algebraically closed field with
$\operatorname{char}k\ne2$, let $n\ge2$, put
$$F=X_0^2+X_1^2+\cdots+X_n^2\in k[X_0,\ldots,X_n],$$
and let $Q=V_+(F)\subseteq\mathbf P^n_k$ carry the reduced classical variety
structure. Then:

- $Q$ is nonempty and has pure dimension $n-1$: every irreducible component
  of $Q$ has dimension $n-1$, and $\dim\mathcal O_{Q,x}=n-1$ at every closed
  point $x$ of $Q$;
- $Q\to\operatorname{Spec}k$ is smooth;
- at every closed point $x$ one has $\dim_kT_xQ=n-1$, and $x$ is not
  a singular point of $Q$.

In the chart $X_i\ne0$ the quadric is the affine hypersurface
$1+\sum_{j\ne i}x_j^2=0$ in the $n$ ratio coordinates; the hypothesis
$\operatorname{char}k\ne2$ makes these $n+1$ equations nonconstant and
squarefree. In characteristic two the form is a square,
$F=(X_0+\cdots+X_n)^2$, the chart partials vanish identically, and the scheme
$V_+(F)$ is the nonreduced hyperplane $\sum_iX_i=0$ rather than a smooth
quadric.

## Facts & Assumptions

**Given:** AC; an algebraically closed field $k$ with
$\operatorname{char}k\ne2$; an integer $n\ge2$; the polynomial
$F=\sum_{i=0}^nX_i^2$; the projective algebraic set
$Q=V_+(F)\subseteq\mathbf P^n_k$ with its reduced classical variety structure;
and the standard charts $D_+(X_i)$ with their ratio coordinates.

[F1] [[def-axiom-of-choice]]: "Every family of nonempty sets has a choice function."

[F2] [[def-projective-space-points]]: for $n\ge0$, $\mathbf P_k^n=(k^{n+1}\setminus\{0\})/\sim$, where $a\sim b$ exactly when $b=\lambda a$ for some $\lambda\in k^\times$, and a class is written $[a_0:\cdots:a_n]$.

[F3] [[def-projective-algebraic-set]]: for homogeneous $T\subseteq k[x_0,\ldots,x_n]$, $V_+(T)=\{[a]\in\mathbf P_k^n:F(a)=0\text{ for all }F\in T\}$.

[F4] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: a polynomial is homogeneous of degree $d$ if each occurring monomial has total degree $d$; $0$ is homogeneous in every degree.

[F5] [[lem-standard-projective-opens-are-affine-spaces]]: "For every $i$, normalization of the $i$th coordinate identifies $D_+(x_i)$ with $\mathbf A_k^n$."

[F6] [[lem-projective-hypersurface-affine-pieces]]: "If $X=V_+(F)$, then $X\cap D_+(x_i)$ is the affine hypersurface obtained by setting $x_i=1$ in $F$, with the usual ratio-coordinate transition formulas."

[F7] [[def-field]]: a field is a commutative structure in which every $x\ne0$ has a multiplicative inverse and $0\ne1$; the field operations are the ring operations.

[F8] [[def-ring-characteristic]]: the characteristic of a ring is the least positive $n$ with $n\cdot1_R=0_R$, and $0$ when no such $n$ exists; hence $\operatorname{char}k\ne2$ means $2\cdot1_k\ne0$.

[F9] [[def-algebraically-closed-field]]: "$F$ is algebraically closed when every nonconstant polynomial $p\in F[x]$ has a root in $F$."

[F10] [[def-multivariate-polynomial-ring-by-iteration]]: the iterated ring satisfies $R[x_1,\ldots,x_0]=R$ and $R[x_1,\ldots,x_{n+1}]=R[x_1,\ldots,x_n][x_{n+1}]$.

[F11] [[def-monomials-multidegree-and-total-degree]]: "The **degree in $x_i$** is the largest $t_i$ with $c_{\mathbf{t}}\ne0$", computed from the unique finite expansion $f=\sum_{\mathbf t}c_{\mathbf t}x^{\mathbf t}$.

[F12] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: "If $R$ is an integral domain, then $R[x_1,\ldots,x_n]$ is an integral domain for every $n\in\mathbb N$, including $n=0$."

[F13] [[thm-polynomial-degree-of-a-product-over-a-domain]]: "If $R$ is an integral domain and $f,g\in R[x]$ are nonzero, then $fg\ne0$ and $\deg(fg)=\deg f+\deg g$."

[F14] [[cor-units-in-a-polynomial-ring-over-a-domain]]: "Let $R$ be an integral domain. A polynomial $f\in R[x]$ is a unit if and only if it is a constant polynomial whose constant value is a unit of $R$."

[F15] [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]: "Then $k[x_1,\ldots,x_r]$ is a unique factorisation domain ... Every irreducible element of it is prime."

[F16] [[def-irreducible-and-prime-elements-in-a-domain]]: a nonzero nonunit $p$ is "**irreducible** if every factorisation $p=ab$ has $a$ or $b$ a unit".

[F17] [[cor-hypersurface-singular-locus-gradient]]: "For every $a\in X(k)$, the point $a$ is singular exactly when every formal first partial derivative of $f$ vanishes at $a$" for $X=V(f)$ reduced over algebraically closed $k$ with $f$ nonconstant and squarefree.

[F18] [[cor-hypersurface-singular-locus-gradient]]: "The affine scheme $\operatorname{Spec}(k[t_1,\ldots,t_n]/(f))$ uses the actual ideal $(f)$, which is already radical for squarefree $f$."

[F19] [[thm-quotient-is-domain-iff-ideal-prime]]: "$R/P$ is an integral domain if and only if $P$ is a prime ideal."

[F20] [[thm-classical-affine-nullstellensatz-correspondence]]: "Nonempty irreducible algebraic sets correspond precisely to proper prime ideals, and points to maximal ideals."

[F21] [[cor-dimension-affine-and-projective-space]]: "For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$."

[F22] [[thm-principal-subvariety-codimension-one]]: "Let $X$ be irreducible affine and $0\ne f\in k[X]$ be a nonunit. Then $V_X(f)$ is nonempty and every irreducible component has dimension $\dim X-1$, hence codimension one."

[F23] [[def-dimension-classical-variety]]: "Say that $X$ has pure dimension $d$ if every irreducible component has dimension $d$"; $\dim X$ is the chain dimension and $\dim_xX$ is the maximum of $\dim X_i$ over the irreducible components $X_i$ containing the closed point $x$.

[F24] [[lem-dimension-nonempty-open-subset]]: "If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$."

[F25] [[lem-irreducibility-criteria-and-open-subspaces]]: if $X$ is irreducible and $U\subseteq X$ is a nonempty open subspace, then $U$ is irreducible; and $X$ is irreducible exactly when it is nonempty and every nonempty open subset of $X$ is dense in $X$.

[F26] [[lem-classical-variety-noetherian-components]]: "Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover."

[F27] [[lem-irreducible-components-of-a-topological-space]]: "every irreducible subset of $X$ is contained in an irreducible component of $X$; in particular every point of $X$ lies in an irreducible component, so $X$ is the union of its irreducible components"; also $T$ irreducible implies its closure $\overline T$ is irreducible.

[F28] [[lem-local-dimension-reduced-variety-components]]: "If $X_i$ are the irreducible components of $X$, then $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i$."

[F29] [[def-coordinate-ring-affine-algebraic-set]]: "Its **coordinate ring** is $$k[X]:=k[x_1,\ldots,x_n]/I(X)$$."

[F30] [[def-classical-affine-coordinate-ring]]: the coordinate ring $k[X]=k[x_1,\ldots,x_n]/I(X)$ of an affine algebraic set is reduced, and "The finite coordinate classes generate it as a $k$-algebra".

[F31] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a classical algebraic prevariety over $k$ is a quasi-compact locally ringed space "covered by open subspaces isomorphic over k to these affine models", and its affine models are polynomial zero sets with coordinate-ring local data.

[F32] [[thm-local-ring-affine-variety-localization]]: for a classical affine variety $X$ and $x\in X$, "there is a canonical isomorphism of local rings $\mathcal O_{X,x}\xrightarrow{\sim}k[X]_{\mathfrak m_x}$".

[F33] [[thm-stalk-structure-sheaf-prime-localization]]: "For $\mathfrak p\in\operatorname{Spec}A$, there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$."

[F34] [[def-jacobian-matrix-affine-algebraic-set]]: "The **Jacobian matrix at $a$**, with the equation-row convention, is the $r\times n$ matrix $J_{(f_1,\ldots,f_r)}(a)=(\partial f_i/\partial t_j(a))$"; formal derivatives are computed on monomials by the displayed rule and extended $k$-linearly.

[F35] [[thm-jacobian-criterion-affine-variety]]: for $A=P/I$ with a specified generating list $I=(f_1,\ldots,f_r)$ and a maximal ideal $\mathfrak m$, "$\operatorname{rank}_L J(\mathfrak m)=n-\dim A_{\mathfrak m}$ if and only if $A_{\mathfrak m}$ is a regular local ring", where $L=A/\mathfrak m$; at a $k$-rational point no perfectness hypothesis is needed.

[F36] [[def-regular-noetherian-ring]]: "A commutative Noetherian ring $R$ is **regular** if for every prime ideal $\mathfrak p$, the local ring $R_{\mathfrak p}$ is regular local."

[F37] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: "Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals."

[F38] [[def-regular-local-ring-geometric-point]]: "Then the intrinsic tangent space $T_xX$ is finite-dimensional over $\kappa(x)$, and $$x\text{ is regular}\Longleftrightarrow\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}.$$"

[F39] [[thm-regular-equals-smooth-over-perfect-field]]: for a perfect field $k$ and a finite-type $k$-scheme $X$, "$$X\text{ is regular}\quad\Longleftrightarrow\quad X\to\operatorname{Spec}k\text{ is smooth}.$$"

[F40] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]: "Every field of characteristic zero is perfect. Every finite field is perfect, and every algebraically closed field is perfect."

[F41] [[def-locally-finite-type-and-finite-type-morphism]]: "It is **of finite type** if it is locally of finite type and quasi-compact."

[F42] [[def-singular-and-regular-loci-variety]]: for a reduced classical finite-type space over an algebraically closed field and a closed point $x$, $x$ is regular exactly when $\dim_{\kappa(x)}T_xX=\dim_xX$, and the singular locus is the complement of the regular locus.

[F43] [[lem-field-is-noetherian]]: "consequently every ideal of $K$ is finitely generated, and $K$ is a Noetherian ring".

[F44] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: "Let $R$ be a Noetherian commutative ring and let $A$ be a commutative $R$-algebra of finite type. Then $A$ is a Noetherian ring."




[F45] [[thm-gluing-affine-schemes]]: affine schemes with compatible open-overlap isomorphisms satisfying the cocycle condition glue to a scheme.

[F46] [[thm-affine-scheme-ring-anti-equivalence]]: ring isomorphisms induce isomorphisms of affine schemes.

## Verification

**Proof technique:** direct.

1.1 Set up the objects and charts. All monomials $X_i^2$ have total degree two, so $F$ is homogeneous of degree two [F4] and $F\ne0$. By [F3] the set $Q=V_+(F)\subseteq\mathbf P^n_k$ is the projective algebraic set of zeros of $F$, and by [F5] the normalization of the $i$th coordinate identifies $D_+(X_i)$ with $\mathbf A^n_k$, so by [F6] the intersection $Q\cap D_+(X_i)$ is the affine hypersurface $V(g_i)$ cut out by $g_i=1+\sum_{j\ne i}x_j^2$ in the $n$ ratio coordinates; write $Q_i=Q\cap D_+(X_i)$ and $A_i=k[x_j:j\ne i]/(g_i)$ for its coordinate ring [F6, F29]. The charts $D_+(X_i)$ for $i=0,\ldots,n$ cover $\mathbf P^n_k$ and hence $Q$ [F2]. Since $k$ is a field [F7] with $\operatorname{char}k\ne2$ [F8], the element $2=2\cdot1_k$ is nonzero, and by [F9] the nonconstant polynomial $t^2+1$ has a root $\iota\in k$; then $F(1,\iota,0,\ldots,0)=1+\iota^2=0$, so the class $p=[1:\iota:0:\cdots:0]$ is a point of $Q$ [F2, F3] and $Q\ne\emptyset$. Each $g_i$ has degree $2$ in every variable $x_j$ with $j\ne i$ [F10, F11], and $1+\sum_{j\ne i}x_j^2=0$ holds in $A_i$. [F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F29, given, algebra]

2.1 Squarefreeness of the chart equations. Each $g_i$ is of the shape $g_i=c+\sum_{j\in S}\epsilon_jx_j^2$ with $c=1$, $S=\{0,\ldots,n\}\setminus\{i\}$, $|S|=n\ge2$ and all coefficients $\epsilon_j=1\ne0$. Suppose some $g_i$ were not squarefree; since $k[x_j:j\ne i]$ is a unique factorisation domain [F15], some irreducible element $q$ occurs in $g_i$ at least twice [F16], that is $g_i=q^2r$ with $r\ne0$. Fix a variable $x_j$ and view the ring as a one-variable polynomial ring in $x_j$ over the remaining variables [F10]; that coefficient ring is an integral domain [F12] and degrees in $x_j$ add on products [F13], so $q^2=q\cdot q$ gives $\deg_{x_j}(g_i)=2\deg_{x_j}(q)+\deg_{x_j}(r)$. For $j\in S$ the left side is $2$ and for $j\notin S$ it is $0$, so $\deg_{x_j}(q)=\deg_{x_j}(r)=0$ for every $j\notin S$. If also $\deg_{x_j}(q)=0$ for every $j\in S$, then $q$ is a nonzero constant, hence a unit [F14], contradicting irreducibility [F16]. Otherwise fix $z\in S$ with $\deg_z(q)\ge1$: then $\deg_z(q)=1$ and $\deg_z(r)=0$, so $q=q_0+x_zq_1$ with $q_1\ne0$ and $r$ not involving $x_z$, and comparing $x_z$-coefficients in $g_i=q^2r$ gives $2q_0q_1r=0$. Since $2\ne0$ in $k$ [F7, F8], $q_1\ne0$, $r\ne0$ and the coefficient ring is a domain [F12], this forces $q_0=0$, so $q=x_zq_1$; as $q$ is irreducible and $x_z$ is a nonunit [F14], the cofactor $q_1$ is a unit [F16] and $q=ux_z$ for a unit $u$. Then $g_i=u^2x_z^2r$ is divisible by $x_z$, hence vanishes after substituting $x_z=0$; but that substitution leaves $c+\sum_{j\in S,\ j\ne z}\epsilon_jx_j^2$, whose term $\epsilon_jx_j^2$ for some $j\in S\setminus\{z\}$ (here $|S|\ge2$ is used) is a nonzero monomial, so the substituted polynomial is nonzero — a contradiction. Hence every $g_i$ is nonconstant and squarefree. [F7, F8, F10, F11, F12, F13, F14, F15, F16, step 1.1, given, algebra]

3.1 Radical chart ideals. Since $g_i$ is squarefree, [F18] says the ideal $(g_i)$ of $k[x_j:j\ne i]$ is already radical, so the reduced classical chart $V(g_i)$ has vanishing ideal $I(V(g_i))=(g_i)$ and coordinate ring $k[V(g_i)]=A_i$ [F29], a reduced finitely generated $k$-algebra [F30]. Moreover $g_i$ is a nonzero nonunit of $k[x_j:j\ne i]$: it is nonzero and nonconstant by step 2.1, and a unit would have to be a nonzero constant [F14]. [F14, F18, F29, F30, step 2.1, given, algebra] The associated scheme. To interpret the structure morphism in the Example, glue the reduced affine schemes $\operatorname{Spec}A_i$ as follows. Write $x^{(i)}_j=X_j/X_i$ on chart $i$. On the overlap with chart $h$, invert $x^{(i)}_h$ and identify $x^{(h)}_i=1/x^{(i)}_h$ and $x^{(h)}_j=x^{(i)}_j/x^{(i)}_h$ for $j\ne i,h$. Substitution sends $g_h$ to $g_i/(x^{(i)}_h)^2$, so it induces an isomorphism $(A_h)_{x^{(h)}_i}\cong(A_i)_{x^{(i)}_h}$ with inverse obtained by interchanging $i,h$. The ratio formulas compose identically on triple overlaps. Thus [F45, F46] glue these affine schemes to a reduced finite-type $k$-scheme $Q^{\mathrm{sch}}$: reducedness holds on each chart by the radical-ideal calculation above, and the cover has $n+1$ charts of finite-type algebras. Its closed-point charts and local rings are the classical $Q_i$ and their local rings by [F20, F32, F33], and their identifications are precisely [F6]. This is the associated scheme of the stated reduced classical variety. In the scheme assertions below, $Q$ denotes this $Q^{\mathrm{sch}}$; every scheme point, including a nonclosed one, lies in some $\operatorname{Spec}A_i$. [F6, F20, F32, F33, F41, F45, F46, given, algebra]

4.1 The chart hypersurfaces have dimension $n-1$. The polynomial ring $k[x_1,\ldots,x_n]$ is an integral domain [F12], so its zero ideal is prime [F19] and the corresponding nonempty irreducible algebraic set is $\mathbf A^n_k$ itself by the Nullstellensatz correspondence [F20]; by [F21], $\dim\mathbf A^n_k=n$. The polynomial $g_i$ is a nonzero nonunit of $k[\mathbf A^n_k]=k[x_1,\ldots,x_n]$ by step 3.1, so [F22] applies with $X=\mathbf A^n_k$: the zero set $V(g_i)$ is nonempty and every irreducible component of $V(g_i)$ has dimension $n-1$. [F12, F19, F20, F21, F22, step 3.1, given, algebra]

5.1 Pure dimension of the quadric. By [F26] every classical variety is Noetherian with finitely many irreducible components. Let $Z$ be an irreducible component of $Q$. Since the charts $Q_i=V(g_i)$ cover $Q$ [F2, F5], the intersection $Z\cap D_+(X_i)$ is nonempty for some $i$, so $W=Z\cap V(g_i)$ is a nonempty open subset of the irreducible space $Z$; by [F25], $W$ is irreducible and dense in $Z$, and by [F24] $\dim W=\dim Z$. The irreducible subset $W$ of $V(g_i)$ is contained in an irreducible component $W'$ of $V(g_i)$ [F27], and step 4.1 gives $\dim W'=n-1$, so $\dim Z=\dim W\le\dim W'=n-1$. Conversely $W'$ is irreducible and contains $W$, so its closure $\overline{W'}$ in $Q$ is irreducible [F27] and contains the dense subset $W$ of $Z$; hence $Z\subseteq\overline{W'}$, and since $Z$ is an irreducible component of $Q$ while $\overline{W'}$ is irreducible and closed, $\overline{W'}=Z$. Therefore $W'\subseteq Z$ and $n-1=\dim W'\le\dim Z$, so $\dim Z=n-1$ for every irreducible component $Z$ of $Q$. Thus $Q$ has pure dimension $n-1$ [F23], and $Q$ is nonempty because $V(g_0)$ is nonempty by step 4.1 and contained in $Q$. [F2, F5, F22, F23, F24, F25, F26, F27, step 1.1, step 4.1, given, algebra]

6.1 Jacobian rank and regularity of the chart local rings. Fix $i$ and a maximal ideal $\mathfrak m$ of $A_i$; by the classical correspondence [F20] the ideal $\mathfrak m$ is the evaluation ideal of a closed point $x$ of the chart $V(g_i)\subseteq\mathbf A^n_k$ with residue field $k$, and by [F32] and [F33] the local ring of $Q$ at $x$ agrees with the local ring of the chart, $\mathcal O_{Q,x}=\mathcal O_{V(g_i),x}\cong(A_i)_{\mathfrak m}$ (using $k[V(g_i)]=A_i$ from step 3.1). By [F28] applied to the reduced chart and by step 5.1, $\dim(A_i)_{\mathfrak m}=\dim\mathcal O_{V(g_i),x}=\max_{x\in X_j}\dim X_j=n-1$, the maximum running over the components of $V(g_i)$ through $x$. The Jacobian matrix of the one-element generating list $(g_i)$ of the ideal of $A_i$ is the $1\times n$ row with entries $\partial g_i/\partial x_j=2x_j$ [F34]. If $x_j\in\mathfrak m$ for every $j\ne i$, then $\sum_{j\ne i}x_j^2\in\mathfrak m$, and since $1+\sum_{j\ne i}x_j^2=0$ in $A_i$ by step 1.1 this gives $1\in\mathfrak m$, impossible; hence some $x_j\notin\mathfrak m$, and because $2\ne0$ in $k$ [F7, F8] the image of $2x_j$ in $A_i/\mathfrak m=k$ is nonzero, so $\operatorname{rank}_k J(\mathfrak m)=1=n-(n-1)=n-\dim(A_i)_{\mathfrak m}$. Since $\mathfrak m$ is a $k$-rational point, the Jacobian criterion [F35] applies without a perfectness hypothesis and shows that $(A_i)_{\mathfrak m}$ is a regular local ring. As $\mathfrak m$ was an arbitrary maximal ideal of $A_i$, every maximal localization of $A_i$ is regular. [F7, F8, F20, F28, F32, F33, F34, F35, step 1.1, step 3.1, step 5.1, given, algebra]

7.1 The quadric is regular and smooth over $k$. Each $A_i$ is a finitely generated $k$-algebra [F30], and $k$ is a field, hence a Noetherian ring [F43], so $A_i$ is a Noetherian ring [F44]. By step 6.1 every maximal localization of $A_i$ is regular, so by [F37] regularity of the Noetherian ring $A_i$ can be tested at maximal ideals: $A_i$ is regular, that is, every prime localization $(A_i)_{\mathfrak q}$ is a regular local ring [F36]. Every point of $Q$ lies in a chart $Q_i=D_+(X_i)\cap Q$ [F2, F5], and $\mathcal O_{Q,x}\cong(A_i)_{\mathfrak q_x}$ for the prime $\mathfrak q_x$ of $A_i$ corresponding to $x$ [F32, F33], so every local ring of $Q$ is regular; the scheme charts constructed in step 3.1 form a finite cover by spectra of finitely generated $k$-algebras, so $Q\to\operatorname{Spec}k$ is a finite-type morphism [F41]. The field $k$ is algebraically closed, hence perfect [F40], so the equivalence of [F39] applies to the finite-type $k$-scheme $Q$: $Q$ is regular if and only if $Q\to\operatorname{Spec}k$ is smooth. Therefore $Q\to\operatorname{Spec}k$ is smooth. [F2, F5, F30, F31, F32, F33, F36, F37, F39, F40, F41, F43, F44, step 3.1, step 3.1, step 6.1, given, algebra]

8.1 Tangent dimensions and absence of singular points. Let $x$ be a closed point of $Q$. By step 7.1 the local ring $\mathcal O_{Q,x}$ is regular; by [F38] this means $\dim_kT_xQ=\dim\mathcal O_{Q,x}$, and by step 5.1 together with [F28] the right side is $n-1$, the maximum of $\dim Z$ over the components $Z$ of $Q$ containing $x$. Hence $\dim_kT_xQ=n-1$, so $x$ is a regular point of the reduced classical finite-type space $Q$ and $x\notin Q_{\mathrm{sing}}$ [F42]. Independently, step 6.1 exhibits a nonzero partial $\partial g_i/\partial x_j=2x_j$ at the point, so the affine gradient test [F17] also makes the corresponding chart point nonsingular. Since every closed point is regular and every local ring of the scheme $Q$ is regular by step 7.1, the quadric has no singular point in either sense. [F17, F28, F38, F42, step 5.1, step 6.1, step 7.1, given, algebra]

9.1 Boundary and scope dispositions. Nonemptiness: $p=[1:\iota:0:\cdots:0]\in Q$ by step 1.1 and each chart equation $g_i$ has a nonempty zero set by step 4.1, so the empty case has no instance. Zero cases: the origin of each chart is not on the quadric because $g_i(0)=1\ne0$; this origin is exactly the point where all partials $2x_j$ vanish, so the gradient of each chart equation vanishes only off the quadric, and the zero vector lies in every tangent space. One: each chart is cut by one equation, the Jacobian of the one-element generating list has one row, and the relative dimension of the quadric is $n-1$. Degenerate case: the excluded characteristic two is genuinely degenerate, since there $F=(\sum_iX_i)^2$ is a square, the partials of the chart equations vanish identically, and $V_+(F)$ is the nonreduced hyperplane $\sum_iX_i=0$, whose reduced variety is a hyperplane rather than a quadric of dimension $n-1$; the hypothesis $\operatorname{char}k\ne2$ enters through [F7, F8] in steps 1.1, 2.1 and 6.1. Endpoints: the discrete parameter is $n\ge2$, the ambient dimension is $n$, the quadric and its tangent spaces have the extreme value $n-1$, and the proof's squarefreeness step uses $|S|=n\ge2$ exactly at its final divisibility contradiction, so the stated range is the endpoint of the argument. Nonempty choice: AC is declared in [F1] and used only through the AC-assuming suppliers [F18], [F20], [F21], [F22], [F23], [F24], [F26], [F28], [F32], [F37], [F39] and [F42], each cited at the step that uses it; the degree-counting argument of step 2.1, the chart identifications of steps 1.1 and 3.1 and the Jacobian rank computation of step 6.1 make no choice. Biconditional directions: step 6.1 uses the direction rank $=n-\dim A_{\mathfrak m}$ implies regular of the Jacobian criterion [F35], step 7.1 uses the direction regular implies smooth of [F39], and step 8.1 uses the direction regular implies $\dim T=\dim\mathcal O$ of [F38]; no reverse direction of these three equivalences is used anywhere, so the reverse cases are not applicable. [F1, F7, F8, F18, F20, F21, F22, F23, F24, F26, F28, F32, F35, F37, F38, F39, F42, step 1.1, step 2.1, step 3.1, step 4.1, step 6.1, step 7.1, given, algebra] ∎



## Source qualification

J. S. Milne, *Algebraic Geometry* v6.10, §4a (printed pp. 81–84) and
Exercise 6-1 (printed p. 159) state the classical nonsingularity test that a
point of a hypersurface is nonsingular exactly when not all formal partial
derivatives of its equation vanish, and that a plane projective curve is
nonsingular exactly when its three partial derivatives do not all vanish; the
item uses the affine form of that test through
`cor-hypersurface-singular-locus-gradient` and the Jacobian rank computation of
`thm-jacobian-criterion-affine-variety`. Donu Arapura, *Notes on Basic
Algebraic Geometry*, §5.2 (printed p. 35), defines a point of a variety as
nonsingular when $\dim T_aX=\dim X$ and singular otherwise, and records that
$\mathbf A^n$ and $\mathbf P^n$ are nonsingular; the item's nonsingularity claim
is the corresponding statement for the quadric, obtained here from regularity
of the local rings rather than from a homogeneity argument. The scaffold's
source string "§4a gradient method; Arapura §5.2" is the origin of this
item; the proof given here sharpens it to the scheme-level statement that
$Q\to\operatorname{Spec}k$ is smooth, so it also cites
`thm-regular-equals-smooth-over-perfect-field` and the regularity machinery for
Noetherian rings. The hypothesis $n\ge2$ is retained from the scaffold: the
squarefreeness argument of step 2.1 uses two square terms, and for $n=1$ the
quadric $V_+(X_0^2+X_1^2)$ would need the separate one-variable check on
$1+x^2$; for $n=0$ the set $V_+(X_0^2)$ is empty. The characteristic hypothesis
$\operatorname{char}k\ne2$ is genuinely used, in the two forms recorded in the
boundary step: it makes $2$ invertible and the quadratic form nondegenerate.
