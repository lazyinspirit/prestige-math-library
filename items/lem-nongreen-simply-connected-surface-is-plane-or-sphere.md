---
id: lem-nongreen-simply-connected-surface-is-plane-or-sphere
kind: lemma
title: "A simply connected surface without a Green kernel is plane or sphere"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-simply-connected
  - def-canonical-green-kernel-riemann-surface
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - def-plane-subharmonic-function
  - def-plane-harmonic-function
  - def-upper-semicontinuous-real-map-on-a-topological-space
  - lem-green-envelope-dichotomy-and-logarithmic-pole
  - lem-dipole-green-function-on-riemann-surface
  - lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces
  - lem-locality-of-subharmonicity
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-maximum-principle-for-plane-subharmonic-functions
  - thm-isolated-zeros-holomorphic-function
  - thm-zero-order-factorization-holomorphic-function
  - lem-locally-zero-locus-clopen-holomorphic-function
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-biholomorphic-map
  - def-complex-domain
  - cor-injective-holomorphic-derivative-nonzero
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - cor-euclidean-spheres-are-path-connected
  - thm-continuous-image-of-a-connected-space
  - thm-compactness-under-continuous-maps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-connected-space
  - def-compact-space
  - def-hausdorff-space
  - def-subspace-topology-top
  - def-interior-closure-boundary-top
  - def-based-loops-and-fundamental-group
  - prop-fundamental-group-is-a-functor-on-pointed-spaces
  - thm-fundamental-group-laws
  - lem-trivial-fundamental-group-implies-null-homology-for-plane-domains
  - thm-riemann-mapping-theorem
  - cor-interval-uncountable
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 8-9, proof of the Uniformization Theorem in Case 2: the dipole Green function of Lemma 5 and its estimates (13)-(15), the meromorphic phi with |phi| = exp(-G(p,p1,p2)) having a simple zero at p1 and a simple pole at p2, the auxiliary phi1 and the quotient H = (phi - phi(p0))/phi1, the maximum-principle display v + (1+epsilon) log|(H - H(p1))/(2 sup_W |H|)| <= 0, the injectivity argument for phi, and the endgame in which phi(W) is a simply connected region whose complement in the sphere contains at most one point, the two omitted points being reduced to a proper plane domain mapped onto the disc by the Riemann Mapping Theorem"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 section 5, printed pp. 115-118 (the Green/non-Green dichotomy and the disc, plane and sphere models)"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a simply connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]], [[def-simply-connected]]) whose
canonical Green envelope is infinite: there is a point $p_0\in X$ such that the
Perron envelope $g_X(\cdot,p_0)$ of
[[def-canonical-green-kernel-riemann-surface]] satisfies
$$g_X(q,p_0)=+\infty\qquad\text{for every }q\in X\setminus\{p_0\}.$$
Then $X$ is biholomorphic to the complex plane $\mathbb C$ if $X$ is
noncompact, and to the Riemann sphere $\widehat{\mathbb C}$ if $X$ is compact.

## Facts & Assumptions
**Given:** The Axiom of Choice; a simply connected Riemann surface $X$; a point $p_0\in X$ with $g_X(q,p_0)=+\infty$ for every $q\in X\setminus\{p_0\}$; the Perron family $\mathcal F_{p_0}$ of [[def-canonical-green-kernel-riemann-surface]].

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty sets has a choice function; restricting a choice function to a countable family gives the Countable Choice $\mathrm{AC}_\omega$ of [[def-countable-choice]], which is the hypothesis of the dipole supplier [F8], and the Axiom of Choice is also the hypothesis of the Riemann mapping theorem [F14].

[F1] Riemann surfaces and holomorphic maps ([[def-riemann-surface-and-holomorphic-atlas]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]): $X$ is nonempty, connected, Hausdorff and second countable with a holomorphic atlas, every chart is a homeomorphism onto an open subset of $\mathbb C$, and restrictions, composites and constant maps of holomorphic maps between Riemann surfaces are holomorphic; a holomorphic map is continuous, and a holomorphic map is determined by its values on a nonempty open set when the source is connected and the target is Hausdorff. A meromorphic function on a Riemann surface is a holomorphic map to $\widehat{\mathbb C}$ that is not the constant map at $\infty$; at a pole the reciprocal chart expression is holomorphic with value $0$, and poles are isolated.

[F2] Canonical Green kernel and Perron family ([[def-canonical-green-kernel-riemann-surface]]): centred charts at a point $p$ are charts $z:U\to\mathbb D$ with $z(p)=0$ and $\overline U$ compact; the Perron family $\mathcal F_p$ consists of the functions $v:X\setminus\{p\}\to[0,\infty)$ which are subharmonic on $X\setminus\{p\}$, vanish off a compact set $K\subseteq X$ (so $K=X$ is allowed when $X$ is compact) and satisfy $\limsup_{q\to p}\bigl(v(q)+\log|z(q)|\bigr)<\infty$ for one, hence every, centred chart $z$ at $p$; the envelope is $g_X(q,p)=\sup\{v(q):v\in\mathcal F_p\}$.

[F3] Dichotomy and logarithmic pole ([[lem-green-envelope-dichotomy-and-logarithmic-pole]]): for a Riemann surface $V$ and a pole $p$, either $g_V(q,p)=+\infty$ for every $q\in V\setminus\{p\}$, or $g_V(\cdot,p)$ is finite and strictly positive and harmonic on $V\setminus\{p\}$, and in the finite case $g_V(\cdot,p)\le H$ for every positive harmonic $H$ on $V\setminus\{p\}$ whose sum with $\log|w|$ extends harmonically across $p$ for a centred chart $w$.

[F4] Chartwise analysis and the strong maximum principle ([[def-harmonic-and-subharmonic-riemann-surface-functions]], [[def-plane-subharmonic-function]], [[def-plane-harmonic-function]], [[thm-c-two-characterization-of-plane-subharmonicity]], [[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[thm-maximum-principle-for-plane-subharmonic-functions]], [[def-upper-semicontinuous-real-map-on-a-topological-space]]): subharmonicity and harmonicity on a surface are the chartwise plane notions, so a subharmonic function is upper semicontinuous and finite resp. locally bounded above at its finite points; restrictions to open subsets preserve subharmonicity; nonnegative multiples and sums of harmonic functions are harmonic; nonnegative linear combinations and finite maxima of subharmonic functions are subharmonic; and a subharmonic function on a connected surface domain which attains its finite maximum at an interior point is constant on that domain.

[F5] Locality of subharmonicity ([[lem-locality-of-subharmonicity]]): a function on an open subset $W$ of a Riemann surface is subharmonic as soon as every point of $W$ has an open neighbourhood on which it is subharmonic.

[F6] The logarithm of the modulus ([[lem-log-modulus-is-harmonic-off-its-centre]], [[thm-conformal-invariance-of-plane-harmonicity]]): $w\mapsto\log|w-a|$ is harmonic on $\mathbb C\setminus\{a\}$ and harmonicity is preserved by precomposition with a holomorphic map; hence for a holomorphic $f$ on a surface domain the function $\log|f|$ is harmonic on the complement of the zero set of $f$ and tends to $-\infty$ at every zero of $f$ of finite order.

[F7] Zeros of holomorphic functions ([[thm-isolated-zeros-holomorphic-function]], [[thm-zero-order-factorization-holomorphic-function]], [[lem-locally-zero-locus-clopen-holomorphic-function]]): a holomorphic function on a complex domain which is not identically zero has only isolated zeros; at a point $a$ a holomorphic function has finite order $m$ if and only if it factors locally as $(z-a)^mg(z)$ with $g$ holomorphic and $g(a)\ne0$, and the order is $+\infty$ exactly when the function vanishes on a neighbourhood of $a$; the locus of points near which a holomorphic function vanishes is clopen in its domain. Consequently, a holomorphic function on a connected Riemann surface which is not constant is not constant on any nonempty open subset, and its zero set is closed and has empty interior, every zero being isolated.

[F8] Dipole Green function ([[lem-dipole-green-function-on-riemann-surface]]): under Countable Choice, for distinct points $p,q$ of a connected Riemann surface there are disjoint coordinate discs $U_p\ni p$, $U_q\ni q$ with compact closures and a harmonic $G:X\setminus\{p,q\}\to\mathbb R$ such that $G+\log|z_p|$ is harmonic on $U_p$, $G-\log|z_q|$ is harmonic on $U_q$ for centred coordinates $z_p,z_q$, and $\sup_{X\setminus(U_p\cup U_q)}|G|<+\infty$.

[F9] Harmonic conjugates and logarithmic poles ([[lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces]]): for a simply connected Riemann surface $Y$, a finite set $P\subseteq Y$ and a harmonic $u:Y\setminus P\to\mathbb R$ which in centred charts at the points of $P$ has the form $u=-m_j\log|w_j|+h_j$ with integers $m_j$ and harmonic $h_j$, the function $u$ has a locally defined harmonic conjugate on $Y\setminus P$ and $F:=\exp(-(u+iv))$ is a single-valued holomorphic function $Y\setminus P\to\mathbb C^\times$ with $|F|=e^{-u}$, extending to a meromorphic function $F:Y\to\widehat{\mathbb C}$ with $F=w_j^{m_j}G_j$ near $p_j$, $G_j$ holomorphic and $G_j(p_j)\ne0$; so $F$ has a zero of order $m_j$ at $p_j$ when $m_j>0$, a pole of order $-m_j$ when $m_j<0$, and no zeros or poles outside $P$.

[F10] The sphere and its Mobius maps ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]], [[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]]): $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ is the one-point compactification of $\mathbb C$, it is compact Hausdorff, and $\mathbb C$ is an open subspace; its standard charts $\phi_0(z)=z$ and $\phi_\infty(z)=1/z$ have holomorphic transition maps; a Mobius transformation $M(z)=\frac{az+b}{cz+d}$ with $ad-bc\ne0$ is a biholomorphism of $\widehat{\mathbb C}$ whose inverse is Mobius, hence in particular a homeomorphism; the identity is Mobius, and for $a\in\widehat{\mathbb C}$ the map $z\mapsto1/(z-a)$ has coefficient quadruple $(0,1,1,-a)$ of determinant $-1$, equals the identity when $a=\infty$, and always carries $a$ to $\infty$ and $\widehat{\mathbb C}\setminus\{a\}$ bijectively onto $\mathbb C$.

[F11] Compactness, connectedness and the sphere ([[thm-stereographic-projection-riemann-sphere-homeomorphism]], [[cor-euclidean-spheres-are-path-connected]], [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-continuous-image-of-a-connected-space]], [[def-connected-space]], [[def-compact-space]], [[def-hausdorff-space]], [[def-subspace-topology-top]], [[def-interior-closure-boundary-top]]): stereographic projection is a homeomorphism $\widehat{\mathbb C}\to S^2$ and $S^2$ is path-connected and connected, so $\widehat{\mathbb C}$ is connected; a continuous image of a compact space is compact and a continuous image of a connected space is connected; a compact subset of a Hausdorff space is closed; a continuous real-valued function on a nonempty compact space attains a maximum and a minimum; a space is connected exactly when it has no separation into two disjoint nonempty open subsets; and $X\setminus\operatorname{int}(A)=\overline{X\setminus A}$ for every $A\subseteq X$, so a set with empty interior has dense complement.

[F12] Fundamental groups and simple connectivity ([[def-simply-connected]], [[def-based-loops-and-fundamental-group]], [[prop-fundamental-group-is-a-functor-on-pointed-spaces]], [[thm-fundamental-group-laws]]): simply connected means nonempty and path-connected with fundamental group of cardinality one at every basepoint; a basepoint-preserving continuous map induces a group homomorphism of fundamental groups, and the assignment is functorial, so a homeomorphism induces an isomorphism of fundamental groups; the identity element of a fundamental group is the class of the constant loop.

[F13] Plane simple connectivity ([[lem-trivial-fundamental-group-implies-null-homology-for-plane-domains]]): a complex domain in which every based loop represents the identity class in its fundamental group is homologically simply connected.

[F14] Riemann mapping theorem ([[thm-riemann-mapping-theorem]]): under the Axiom of Choice, for every proper homologically simply connected complex domain $\Omega\subsetneq\mathbb C$ and every $z_0\in\Omega$ there is a biholomorphic map $f:\Omega\to\mathbb D$ with $f(z_0)=0$.

[F15] Injectivity and biholomorphy ([[cor-injective-holomorphic-derivative-nonzero]], [[def-complex-domain]], [[def-biholomorphic-map]]): an injective holomorphic map on a complex domain has nowhere-zero derivative and is biholomorphic onto its open image, which is again a complex domain; a complex domain is a nonempty open connected subset of $\mathbb C$; and a biholomorphism between complex domains is by definition a bijective holomorphic map with holomorphic inverse.

[F16] Points of a chart domain ([[def-riemann-surface-and-holomorphic-atlas]], [[cor-interval-uncountable]]): every chart of $X$ is a homeomorphism onto a nonempty open subset of $\mathbb C$, which contains an open disc; the open disc contains the image of a nondegenerate open interval under a translation and hence is uncountable, so every chart domain of $X$, and therefore $X$ itself, is uncountable; in particular $X$ contains three distinct points, and removing finitely many points leaves points.

## Proof

1.1 **The meaning of the hypothesis.** By [F3] applied to the pole $p_0$, the envelope $g_X(\cdot,p_0)$ is either $+\infty$ everywhere on $X\setminus\{p_0\}$ or finite and strictly positive everywhere there; the hypothesis of the statement is the first alternative, so the second is excluded. Consequently, for every point $q\in X\setminus\{p_0\}$ and every real number $B$ there is a candidate $v\in\mathcal F_{p_0}$ with $v(q)>B$, because $+\infty$ is the supremum of the values $v(q)$. [F2, F3, given]

1.2 **Three distinct points of the surface.** By [F16] the space $X$ is uncountable, so we may choose distinct points $p_1,p_2\in X$ and a further point $r\in X\setminus\{p_1,p_2\}$; these choices are finite and explicit. [F16]

1.3 **A claim: every bounded holomorphic function on $X$ is constant.** We prove the claim. Let $h:X\to\mathbb C$ be holomorphic with $|h|\le M<+\infty$. If $M=0$ then $h\equiv0$ is constant, so assume $M>0$; set $c:=h(p_0)$ and $B(w):=(w-c)/(2M)$. The map $B$ is affine and injective with $B(h(p_0))=0$, so $B\circ h$ is holomorphic on $X$ and is nonconstant whenever $h$ is nonconstant, and $|B\circ h|\le1$ on $X$ because $|h-c|\le|h|+|c|\le2M$. Suppose, toward a contradiction, that $h$ is nonconstant. [F1, given]

1.4 **The zero set of $B\circ h$.** Since $h$ is nonconstant and $X$ is connected, $B\circ h$ is nonconstant ([F1]) and hence not constant on any nonempty open subset and not identically zero ([F7]). Let $Z:=\{x\in X:B(h(x))=0\}$, the zero set of $B\circ h$. By [F7] every point of $Z$ is isolated in $Z$, so $Z$ is closed with empty interior, $X\setminus Z$ is dense in $X$ and $p_0\in Z$. Moreover, in a centred chart $z:U\to\mathbb D$ at $p_0$ [F2], the precedence of [F7] gives a holomorphic $u$ on $U$ with $u(p_0)\ne0$ and an integer $m\ge1$ such that $B\circ h=z^mu$ on $U$. [F1, F2, F7]

1.5 **The function $u_\varepsilon$ is subharmonic off $Z$.** Fix $v\in\mathcal F_{p_0}$ and $\varepsilon>0$ and set $u_\varepsilon:=v+(1+\varepsilon)\log|B\circ h|$ on $X\setminus Z$. The restriction of $v$ to $X\setminus Z$ is subharmonic [F2, F4]; the function $\log|B\circ h|$ is harmonic on $X\setminus Z$ by [F6]; a nonnegative multiple of a harmonic function is subharmonic and sums of subharmonic functions are subharmonic [F4]; hence $u_\varepsilon$ is subharmonic on $X\setminus Z$. [F2, F4, F6]

2.1 **The positive part is subharmonic on all of $X$.** Put $\hat u:=\max(u_\varepsilon,0)$ on $X\setminus Z$ and $\hat u:=0$ on $Z$. At a point $z\in Z$ with $z\ne p_0$, the function $v$ is upper semicontinuous and finite at $z$ [F2, F4], so $v\le C$ on some neighbourhood $N$ of $z$ which we may take so small that $N\cap Z=\{z\}$; since $B(h(z))=0$, the function $\log|B\circ h|$ tends to $-\infty$ at $z$ [F6], so $u_\varepsilon<0$ on a punctured neighbourhood of $z$ and $\hat u=0$ there. At $p_0$ the unit pole condition gives $v\le-\log|z|+C_1$ near $p_0$ [F2] and the factorization of step 1.4 gives $\log|B\circ h|=m\log|z|+\log|u|$ with $u$ continuous and $u(p_0)\ne0$, so $u_\varepsilon\le\bigl((1+\varepsilon)m-1\bigr)\log|z|+C_3$ with $(1+\varepsilon)m-1\ge\varepsilon>0$, and again $u_\varepsilon<0$ near $p_0$; hence $\hat u=0$ near $p_0$. So $\hat u$ is upper semicontinuous on $X$ [F4], it agrees on $X\setminus Z$ with the maximum of the subharmonic function $u_\varepsilon$ and $0$, which is subharmonic [F4], and it is locally constant $0$ near every point of $Z$; the locality of subharmonicity [F5] therefore makes $\hat u$ subharmonic on $X$. [F2, F4, F5, F6]

2.2 **The dipole with two pole discs.** By step 1.2 the points $p_1,p_2$ are distinct, so the dipole supplier [F8] applies, with the Countable Choice $\mathrm{AC}_\omega$ supplied by [A1]: there are disjoint coordinate discs $U_1\ni p_1$ and $U_2\ni p_2$ with compact closures, centred coordinates $z_1,z_2$, and a harmonic $G:X\setminus\{p_1,p_2\}\to\mathbb R$ such that $G+\log|z_1|$ is harmonic on $U_1$, $G-\log|z_2|$ is harmonic on $U_2$, and $\sup_{X\setminus(U_1\cup U_2)}|G|=:C<+\infty$. [A1, F8, step 1.2]

3.1 **The maximum principle forces $u_\varepsilon\le0$.** By step 2.1, $\hat u$ is nonnegative and subharmonic on $X$, and it vanishes on a neighbourhood of $p_0$. Let $K$ be a compact support of $v$ from [F2]. If $X$ is compact, put $L:=X$; otherwise $\hat u$ vanishes on $X\setminus K$, so put $L:=K$. If $\hat u$ were positive somewhere, $M:=\sup_L\hat u$ would be positive and would bound $\hat u$ on all of $X$. This maximum is finite and attained: the open sets $\{\hat u<n\}$ cover the compact set $L$, giving an upper bound, and the closed nonempty superlevel sets $\{\hat u\ge b\}$ for $b<M$ have the finite-intersection property, so compactness yields $x^*\in L$ with $\hat u(x^*)=M$. The strong maximum principle [F4] would then make $\hat u\equiv M$ on connected $X$, contradicting its vanishing near $p_0$. Hence $\hat u\equiv0$, and $u_\varepsilon\le0$ on $X\setminus Z$. [F2, F4, F11, step 2.1]

3.2 **A meromorphic function with a simple zero and a simple pole.** On $U_1\setminus\{p_1\}$ the function $G$ differs from $-\log|z_1|$ by a harmonic function and on $U_2\setminus\{p_2\}$ it differs from $\log|z_2|$ by a harmonic function [F8]; that is, the exponents $m_1:=1$ and $m_2:=-1$ satisfy $G=-m_1\log|z_1|+h_1$ on $U_1\setminus\{p_1\}$ and $G=-m_2\log|z_2|+h_2$ on $U_2\setminus\{p_2\}$ with $h_1,h_2$ harmonic. The monodromy supplier [F9] applies with $Y:=X$, $P:=\{p_1,p_2\}$ and $u:=G$, because $X$ is simply connected: there is a meromorphic function $F:X\to\widehat{\mathbb C}$ with $|F|=e^{-G}$ on $X\setminus\{p_1,p_2\}$ and local forms $F=z_1G_1$ with $G_1(p_1)\ne0$ on $U_1$ and $F=z_2^{-1}G_2$ with $G_2(p_2)\ne0$ on $U_2$. Consequently $F$ has a simple zero at $p_1$, a simple pole at $p_2$, and no other zeros or poles. [F9, step 2.2]

4.1 **The envelope must be finite: contradiction, so $h$ is constant.** The set $Z$ has empty interior, so $X\setminus Z$ is dense in $X$ [F11], and $X\setminus\{p_0\}$ is a nonempty open subset of $X$ because $X$ has more than one point and is Hausdorff [F1, F16]; hence the dense set $X\setminus Z$ meets $X\setminus\{p_0\}$ and there is a point $q\in X\setminus(Z\cup\{p_0\})$. At that point $B(h(q))\ne0$, and step 3.1 gives $v(q)\le-(1+\varepsilon)\log|B(h(q))|$ for every $v\in\mathcal F_{p_0}$ and every $\varepsilon>0$; taking the supremum over $\mathcal F_{p_0}$ [F2] and letting $\varepsilon\downarrow0$ yields $g_X(q,p_0)\le-\log|B(h(q))|<+\infty$. This contradicts the hypothesis $g_X(q,p_0)=+\infty$ [given]. Therefore the supposition of step 1.3 was false: every bounded holomorphic function $h:X\to\mathbb C$ is constant. [F2, F6, given, step 1.4, step 3.1]

4.2 **The auxiliary dipole at an arbitrary third point.** Let $r\in X\setminus\{p_1,p_2\}$ be arbitrary (step 1.2). Applying [F8] and [F9] to the pair $(r,p_2)$ exactly as in steps 2.2 and 3.2, with the same exponents $1$ at the zero and $-1$ at the pole, produces discs $V_r\ni r$ and $V_2\ni p_2$ with compact closures, a harmonic $G_r$ on $X\setminus\{r,p_2\}$ with $\sup_{X\setminus(V_r\cup V_2)}|G_r|=:C'<+\infty$ and the two unit log poles, and a meromorphic function $F_r:X\to\widehat{\mathbb C}$ with $|F_r|=e^{-G_r}$ on $X\setminus\{r,p_2\}$, a simple zero at $r$, a simple pole at $p_2$, and no other zeros or poles. Since $r\notin\{p_1,p_2\}$ is neither the zero nor the pole of $F$, the value $F(r)$ is a nonzero complex number. [F8, F9, step 3.2]

5.1 **The quotient $H$ is holomorphic on $X$.** Define $H$ on $X\setminus\{r,p_2\}$ by $H:=(F-F(r))/F_r$; there both functions are holomorphic and $F_r\ne0$ [F1, step 3.2, step 4.2]. We extend $H$ holomorphically across $r$ and $p_2$. Near $r$, in a centred chart $z_r$ at $r$, step 4.2 provides $F_r=z_rg$ with $g(r)\ne0$, while $F-F(r)$ is holomorphic near $r$, vanishes at $r$, and is not identically zero there because $F$ is not constant on any nonempty open subset [F7, step 3.2]; by [F7] it therefore has finite order $k\ge1$ at $r$, say $F-F(r)=z_r^{k}a$ with $a$ holomorphic, so $H=z_r^{k-1}a/g$ is holomorphic at $r$. Near $p_2$, step 3.2 and step 4.2 give $F=z_2^{-1}G_2$ and $F_r=z_2^{-1}G_r'$ with $G_2(p_2)\ne0\ne G_r'(p_2)$, so $H=\bigl(G_2-z_2F(r)\bigr)/G_r'$ extends holomorphically to $p_2$ with value $G_2(p_2)/G_r'(p_2)$. Hence $H$ is a holomorphic function $H:X\to\mathbb C$. [F1, F7, step 3.2, step 4.2]

6.1 **$H$ is bounded.** Off $U_1\cup U_2$ we have $|F|=e^{-G}\le e^{C}$ and off $V_r\cup V_2$ we have $|F_r|=e^{-G_r}\ge e^{-C'}$ by steps 2.2 and 4.2, so on the open set $W:=X\setminus(U_1\cup U_2\cup V_r\cup V_2)$ the quotient satisfies $|H|\le\bigl(e^{C}+|F(r)|\bigr)e^{C'}$. On each of the four compact sets $\overline U_1,\overline U_2,\overline V_r,\overline V_2$ the continuous function $|H|$ [F1, step 5.1] attains a maximum, a finite real number [F11]; let $B_0$ be the largest of these four numbers. Since $X=W\cup U_1\cup U_2\cup V_r\cup V_2\subseteq W\cup\overline U_1\cup\overline U_2\cup\overline V_r\cup\overline V_2$, the function $H$ is bounded on $X$, with $|H|\le\max\bigl\{\bigl(e^{C}+|F(r)|\bigr)e^{C'},\,B_0\bigr\}$. [F1, F11, step 2.2, step 4.2, step 5.1]

7.1 **$H$ is a nonzero constant.** The function $H$ of step 5.1 is holomorphic and bounded by step 6.1, so the claim proved in steps 1.3-4.1 gives that $H\equiv c$ is constant. Evaluating at $p_1$, using $F(p_1)=0$ (step 3.2) and that $F_r(p_1)$ is a nonzero complex number because $p_1\notin\{r,p_2\}$ is neither the zero nor the pole of $F_r$ (step 4.2), gives $c=H(p_1)=\bigl(0-F(r)\bigr)/F_r(p_1)\ne0$. [step 4.1, step 3.2, step 4.2, step 5.1, step 6.1]

8.1 **$F$ is injective.** Fix $r\in X\setminus\{p_1,p_2\}$ and let $c\ne0$ be the constant of step 7.1. Then $F-F(r)=cF_r$ on $X$, as both sides are holomorphic and agree on the nonempty open set $X\setminus\{r,p_2\}$ [F1, step 5.1, step 7.1]. If $x\in X\setminus\{r,p_2\}$ satisfies $F(x)=F(r)$, then $F_r(x)=\bigl(F(x)-F(r)\bigr)/c=0$, and the only zero of $F_r$ is $r$ (step 4.2), so $x=r$, a contradiction; hence $F^{-1}(F(r))=\{r\}$, since $F(p_2)=\infty\ne F(r)$ and $F(p_1)=0\ne F(r)$. Since $r$ was an arbitrary point of $X\setminus\{p_1,p_2\}$, we have shown that $F^{-1}(F(r))=\{r\}$ for every such $r$. Now let $x,y\in X$ with $F(x)=F(y)=w$. If $w=0$ then $x=y=p_1$, the only zero of $F$, and if $w=\infty$ then $x=y=p_2$, the only pole of $F$ (step 3.2). If $w\in\mathbb C\setminus\{0\}$ then $x,y\notin\{p_1,p_2\}$, and the previous paragraph applied to $r:=x$ gives $y\in F^{-1}(F(x))=\{x\}$, so $y=x$. Therefore $F$ is injective. [F1, step 3.2, step 4.2, step 7.1]

9.1 **$F$ is a local biholomorphism.** Let $x\in X$. If $x\ne p_2$, choose a chart $\psi:U\to\mathbb C$ at $x$ with $F(U)\subseteq\mathbb C$, shrinking $U$ if necessary; then $f:=F\circ\psi^{-1}$ is a holomorphic and injective function on the complex domain $\psi(U)$, because $F$ is holomorphic [F1] and injective (step 8.1), so by [F15] $f$ has nowhere-zero derivative and is biholomorphic onto its open image. If $x=p_2$, then by step 3.2 the function $z_2/G_2=1/F$ is holomorphic near $p_2$ with value $0$ at $p_2$ and is injective there, since $F$ is injective; as a chart expression on a disc it is an injective holomorphic function, so by [F15] it is biholomorphic onto its open image, and since $w\mapsto1/w$ is the chart $\phi_\infty$ of $\widehat{\mathbb C}$ at $\infty$ [F10], the function $F=1/(1/F)$ is a biholomorphism from a neighbourhood of $p_2$ onto an open neighbourhood of $\infty$. Hence $F$ is a local biholomorphism at every point of $X$. [F1, F10, F15, step 3.2, step 8.1]

10.1 **$F$ is a biholomorphism onto its open image.** By step 9.1 the map $F$ is open: for open $O\subseteq X$, each point of $F(O)$ has a neighbourhood on which $F$ is a biholomorphism onto an open set, so $F(O)$ is a union of open subsets of $\widehat{\mathbb C}$. Hence $F(X)$ is open in $\widehat{\mathbb C}$, and $F:X\to F(X)$ is a continuous bijection (step 8.1) that is an open map, therefore a homeomorphism, whose inverse is holomorphic because it is locally the inverse supplied by step 9.1. Thus $F$ is a biholomorphism from $X$ onto the open subset $F(X)$ of $\widehat{\mathbb C}$. [F1, F15, step 8.1, step 9.1]

11.1 **The image omits at most one point of the sphere.** Suppose that $a,b\in\widehat{\mathbb C}\setminus F(X)$ are distinct. If $a\ne\infty$ put $T(z):=1/(z-a)$, and if $a=\infty$ let $T$ be the identity; in both cases $T$ is a Mobius transformation with $T(a)=\infty$, hence a biholomorphism and a homeomorphism of $\widehat{\mathbb C}$ [F10]. Then $\Omega:=T(F(X))$ is contained in $\widehat{\mathbb C}\setminus\{\infty\}=\mathbb C$, and $T(b)\in\mathbb C\setminus\Omega$ because $b\ne a$ means $b$ is not the point sent to $\infty$ and $b\notin F(X)$; hence $\Omega\subsetneq\mathbb C$. As a continuous image of the connected space $F(X)$ the set $\Omega$ is connected, and it is nonempty and open in $\mathbb C$ because $F(X)$ is open in $\widehat{\mathbb C}$ (step 10.1) and $T$ is a homeomorphism [F11]; so $\Omega$ is a complex domain [F15]. Every based loop of $\Omega$ is null: if $\gamma$ is a loop in $\Omega$ based at $y_0$, then $T^{-1}\circ\gamma$ is a loop in $F(X)$ and $F^{-1}\circ T^{-1}\circ\gamma$ is a loop in $X$ because $F:X\to F(X)$ is a homeomorphism (step 10.1); this loop is null in $X$, the space $X$ being simply connected, so pushing forward along the continuous maps $F$ and $T$ and using the functoriality of [F12] makes $[\gamma]$ the identity element. By [F13] the domain $\Omega$ is homologically simply connected, and the Riemann mapping theorem [F14] applied at any $z_0\in\Omega$ yields a biholomorphic map $g:\Omega\to\mathbb D$. Then $g\circ T\circ F:X\to\mathbb D\subseteq\mathbb C$ is holomorphic [F1, F10], bounded, and injective, since $F,T,g$ are injective; because $X$ contains two distinct points [F16], an injective map on $X$ is not constant. This contradicts step 4.1, where the claim announced in step 1.3 was proved, so no two distinct points of $\widehat{\mathbb C}\setminus F(X)$ exist: the complement has at most one point. [F1, F10, F11, F12, F13, F14, F15, F16, step 4.1, step 10.1]

11.2 **Compact case: $X$ is the Riemann sphere.** Suppose that $X$ is compact. Then $F(X)$ is compact, as a continuous image of $X$ [F11], and it is a nonempty open subset of $\widehat{\mathbb C}$ that is connected in the connected space $\widehat{\mathbb C}$ [F10, F11, step 10.1]. A compact subset of the Hausdorff space $\widehat{\mathbb C}$ is closed [F10, F11], so $F(X)$ is a clopen nonempty subset of the connected space $\widehat{\mathbb C}$, and therefore $F(X)=\widehat{\mathbb C}$ [F11]. Thus $F:X\to\widehat{\mathbb C}$ is a bijective holomorphic map with holomorphic inverse (step 10.1), that is, $X$ is biholomorphic to the Riemann sphere. [F10, F11, step 10.1]

12.1 **Noncompact case: $X$ is the complex plane.** Suppose that $X$ is not compact. Then $F(X)$ is not compact, because $X$ and $F(X)$ are homeomorphic (step 10.1) and compactness is preserved by continuous maps in the inverse direction [F11]; in particular $F(X)\ne\widehat{\mathbb C}$, since $\widehat{\mathbb C}$ is compact [F10]. By step 11.1 there is exactly one point $a\in\widehat{\mathbb C}\setminus F(X)$, that is, $F(X)=\widehat{\mathbb C}\setminus\{a\}$. Let $T_a$ be the Mobius transformation of [F10] with $T_a(a)=\infty$; it restricts to a biholomorphism of $\widehat{\mathbb C}\setminus\{a\}$ onto $\mathbb C=\widehat{\mathbb C}\setminus\{\infty\}$, so the composite $T_a\circ F:X\to\mathbb C$ is bijective, holomorphic and has holomorphic inverse, being a composite of the biholomorphisms $F$ and $T_a$ [F10, F15, step 10.1]. Hence $X$ is biholomorphic to the complex plane. [F10, F11, F15, step 10.1, step 11.1]

13.1 **Conclusion and choice accounting.** The two cases of steps 12.1 and 11.2 are exhaustive: either $X$ is compact or it is not. They prove the two assertions of the statement. The Axiom of Choice [A1] is used exactly through the Countable Choice consumed by the dipole supplier [F8] in steps 2.2 and 4.2 and through the Riemann mapping theorem [F14] in step 11.1; all other selections are finite and explicit (the points $p_1,p_2,r$ of step 1.2, a chart and its shrunk domain in step 9.1, and a basepoint of a loop in step 11.1). [A1, F8, F14, step 12.1, step 11.2] ∎
