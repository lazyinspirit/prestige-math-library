---
id: thm-complex-torus-weierstrass-cubic-isomorphism
kind: theorem
title: "The torus is biholomorphic to its Weierstrass cubic"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
  - def-weierstrass-elliptic-p-function
  - def-elliptic-function-for-a-lattice
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - thm-weierstrass-p-differential-equation
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-weierstrass-lattice-discriminant-is-nonzero
  - def-projective-space-points
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - lem-nonsingular-complex-algebraic-curve-holomorphic-charts
  - thm-holomorphic-inverse-function-theorem
  - def-biholomorphic-map
  - def-homeomorphism-and-open-maps
  - def-second-countable-space
  - def-topology-basis-subbasis
  - def-ramification-index-and-branch-value
  - thm-removable-singularity-characterizations
  - thm-zero-order-factorization-holomorphic-function
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-taylor-expansion-holomorphic-function
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - lem-complex-conjugation-and-modulus-laws
  - thm-continuous-image-of-a-connected-space
  - thm-compactness-under-continuous-maps
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, Theorem 5.4, Corollary 5.5 and Corollary 5.6: the degree-two quotient by z ~ -z and its identification with the smooth cubic, printed pp. 82-83."
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, Proposition 3.12 and the preceding construction of the map z -> (wp(z), wp'(z)) onto the cubic, printed pp. 45-47."
    - title: "NIST Digital Library of Mathematical Functions, §23.2, equations 23.2.1-23.2.17"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii)-(iii): the wp series, its differential equation and the holomorphic parametrization of the cubic by (wp, wp')."
verification:
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full complex lattice with
oriented basis ([[def-complex-lattice-and-complex-torus]]), let
$\wp=\wp_\Lambda$ be its Weierstrass function and $\wp'$ its derivative
([[def-weierstrass-elliptic-p-function]]), let
$\Delta=g_2^3-27g_3^2$ be its discriminant and let
$$C_\Lambda:=\bigl\{[X:Y:Z]\in\mathbb{CP}^2:Y^2Z=4X^3-g_2XZ^2-g_3Z^3\bigr\}$$
be the associated projective cubic, with the point at infinity
$O=[0:1:0]$ ([[def-projective-space-points]]). Then:

1. $C_\Lambda$ is nonsingular in the Jacobian-rank sense of
   [[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]] at every
   point, and $O$ is its unique point at infinity;
2. the formula
   $$\Phi([z]):=[\wp(z):\wp'(z):1]\qquad(z\in\mathbb C\setminus\Lambda)$$
   defines a holomorphic map $\Phi:T_\Lambda\setminus\{[0]\}\to C_\Lambda$ on
   $T_\Lambda=\mathbb C/\Lambda$ ([[thm-complex-torus-quotient-is-well-defined]]),
   which extends to a holomorphic map $\Phi:T_\Lambda\to C_\Lambda$ with
   $\Phi([0])=O$;
3. this extended $\Phi$ is bijective;
4. $\Phi$ is a biholomorphism: it is holomorphic, bijective, and its inverse
   $\Phi^{-1}:C_\Lambda\to T_\Lambda$ is holomorphic too. In particular
   $C_\Lambda$ is a connected compact Riemann surface, being a continuous image
   of the connected compact torus.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis $(\omega_1,\omega_2)$, its torus $T_\Lambda=\mathbb C/\Lambda$ with class map $\pi:\mathbb C\to T_\Lambda$, the Weierstrass function $\wp=\wp_\Lambda$ and its derivative $\wp'$, the invariants $g_2=60G_4$, $g_3=140G_6$, the discriminant $\Delta=g_2^3-27g_3^2$, the half-periods $h_1=\omega_1/2$, $h_2=\omega_2/2$, $h_3=(\omega_1+\omega_2)/2$, the values $e_j=\wp(h_j)$, and the projective cubic $C_\Lambda\subseteq\mathbb{CP}^2$ with its point $O=[0:1:0]$.

[F1] $\Lambda$ is a subgroup of $\mathbb C$ whose generators $\omega_1,\omega_2$ are real-linearly independent, $T_\Lambda=\mathbb C/\Lambda=\{[z]:z\in\mathbb C\}$ carries the quotient topology of $\pi$, and $\pi(z)=[z]$ is a surjective group homomorphism with kernel $\Lambda$; the torus and its structure depend on the set $\Lambda$ alone ([[def-complex-lattice-and-complex-torus]]).

[F2] $\pi$ is a holomorphic covering map and $T_\Lambda$ is a compact Riemann surface, hence nonempty, connected, Hausdorff and second countable; a chart on a space $X$ is a homeomorphism onto an open subset of $\mathbb C$ and a holomorphic atlas is a covering family of pairwise compatible charts ([[thm-complex-torus-quotient-is-well-defined]], [[def-riemann-surface-and-holomorphic-atlas]]).

[F4] The series of [F3] converges absolutely and normally on $\mathbb C\setminus\Lambda$, independently of any enumeration. The function $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$, even and $\Lambda$-periodic, and at each $\lambda\in\Lambda$ it has a double pole with principal part $(z-\lambda)^{-2}$ and no other poles. Moreover $\wp'(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$ on $\mathbb C\setminus\Lambda$, this series converging normally, and $\wp'$ is odd and $\Lambda$-periodic with a pole of order $3$ at each lattice point and no other poles ([[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F5] $\wp$ is the pullback $\wp=g\circ\pi$ of the meromorphic function $g=\bar\wp:T_\Lambda\to\widehat{\mathbb C}$ characterized by $g([z])=\wp(z)$, and a meromorphic function on $T_\Lambda$ pulls back to a $\Lambda$-elliptic function; in particular a value of $\wp$ depends only on the class of its argument, and $\wp(z)=\infty$ exactly for $z\in\Lambda$ ([[def-elliptic-function-for-a-lattice]]).

[F6] $(\wp')^2=4\wp^3-g_2\wp-g_3$ on $\mathbb C\setminus\Lambda$, with $G_4=\sum_{\omega\ne0}\omega^{-4}$ and $G_6=\sum_{\omega\ne0}\omega^{-6}$ absolutely convergent and $g_2=60G_4$, $g_3=140G_6$ ([[thm-weierstrass-p-differential-equation]]).

[F7] The torus form $\bar\wp$ has degree two; for $z,w\in\mathbb C\setminus\Lambda$ one has $\wp(z)=\wp(w)$ if and only if $w\equiv z$ or $w\equiv-z$ modulo $\Lambda$; the critical points of $\bar\wp$ are exactly the class $[0]$ and the three distinct nonzero half-period classes $[h_1],[h_2],[h_3]$, with distinct branch values $e_1,e_2,e_3\in\mathbb C$; and $\wp'(h_j)=0$ with the zero at each $h_j$ of order one. In particular every finite value of $\wp$ is attained: for every $a\in\mathbb C$ the fibre $\bar\wp^{-1}(a)$ has total ramification index two, so it is nonempty ([[lem-weierstrass-p-degree-two-and-half-periods]], [[def-ramification-index-and-branch-value]]).

[F8] $\Delta=g_2^3-27g_3^2\ne0$; the polynomial $4x^3-g_2x-g_3$ has the three distinct roots $e_1,e_2,e_3$; and the cubic $C_\Lambda$ is nonsingular in the Jacobian-rank sense at every point, including its unique point at infinity $O=[0:1:0]$ ([[thm-weierstrass-lattice-discriminant-is-nonzero]]).

[F9] $\mathbb{CP}^2=(\mathbb C^3\setminus\{0\})/\sim$ with $a\sim b$ exactly when $b=\lambda a$ for some $\lambda\in\mathbb C^\times$, classes written $[X:Y:Z]$; the standard affine charts are given by the free coordinates. In the chart $\{Z\ne0\}$ the coordinates are $x=X/Z$, $y=Y/Z$ and a homogeneous equation $F(X,Y,Z)=0$ reads $F(x,y,1)=0$ there; in the chart $\{Y\ne0\}$ the coordinates are $u=X/Y$, $v=Z/Y$ and $F$ reads $F(u,1,v)=0$ ([[def-projective-space-points]], [[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]).

[F10] If a plane curve is near $p$ the zero set of one holomorphic function $f$ of two variables with nonzero complex gradient at $p$, then after permuting the two coordinates the curve agrees near $p$ with a holomorphic graph over the first coordinate, and that free coordinate is a local parameter of the curve; the projection onto that coordinate is a homeomorphism of the curve neighbourhood onto a plane domain, and transitions between such local parameters are holomorphic ([[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]).

[F11] (a) If a function $u$ is holomorphic on a complex domain and $u'(w_0)\ne0$, then $u$ restricts to a biholomorphism between complex domains contained in neighbourhoods of $w_0$ and of $u(w_0)$ ([[thm-holomorphic-inverse-function-theorem]], [[def-biholomorphic-map]]). (b) A map is **open** when images of open sets are open; a bijection is a homeomorphism exactly when it is open and continuous, and in particular a continuous open bijection is a homeomorphism ([[def-homeomorphism-and-open-maps]]): for open $U$ in its domain, the preimage of $U$ under its inverse is its open image, which proves continuity of the inverse.

[F12] A holomorphic map of Riemann surfaces is one whose chart expressions are holomorphic, and this condition is independent of the atlases chosen; a holomorphic map is continuous, and holomorphy is a local condition, so a map is holomorphic once every point has a pair of charts in which its chart expression is holomorphic ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F13] A function holomorphic and bounded on a punctured disc extends holomorphically to the centre; a locally uniform limit of holomorphic functions is holomorphic; a holomorphic function with a zero of order $m$ at $a$ factors as $(z-a)^mg(z)$ with $g(a)\ne0$; a holomorphic function equals its Taylor series near each point; and derivatives are linear and satisfy the product and chain rules ([[thm-removable-singularity-characterizations]], [[thm-weierstrass-convergence-holomorphic-functions]], [[thm-zero-order-factorization-holomorphic-function]], [[thm-taylor-expansion-holomorphic-function]], [[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]]).

[F14] For all $z,w\in\mathbb C$ one has $|z|\ge0$ with $|z|=0$ only for $z=0$, $|zw|=|z|\,|w|$, and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); the image of a connected set under a continuous map is connected, and the image of a compact set under a continuous map is compact ([[thm-continuous-image-of-a-connected-space]], [[thm-compactness-under-continuous-maps]]).

[F15] A space is **second countable** when it admits an at most countable basis, a basis being a family of open sets such that every point of every open set lies in a member of the family contained in that open set ([[def-second-countable-space]], [[def-topology-basis-subbasis]]); a Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas ([[def-riemann-surface-and-holomorphic-atlas]]).

## Proof

**Proof technique:** direct.

1.1 (Uniform gap and finiteness in bounded sets.) Put $A:=|\omega_1|^2$, $B:=\operatorname{Re}(\omega_1\overline{\omega_2})$, $C:=|\omega_2|^2$. Then $A,C>0$, and expanding $|t\omega_1+s\omega_2|^2$ with the modulus laws of [F14] gives $At^2+2Bts+Cs^2$ for real $s,t$. Completing the square in the two variables gives $At^2+2Bts+Cs^2=A\bigl(t+\frac BA s\bigr)^2+\frac{AC-B^2}{A}s^2\ge\frac{AC-B^2}{A}s^2$ and symmetrically for $t$, so with $\delta:=\sqrt{(AC-B^2)/\max(A,C)}$ one has $|t\omega_1+s\omega_2|\ge\delta\max(|t|,|s|)$. Here $AC-B^2>0$: by [F14] it equals $(\operatorname{Im}(\omega_1\overline{\omega_2}))^2$, and $\operatorname{Im}(\omega_1\overline{\omega_2})=0$ would make $\omega_2$ a real multiple of $\omega_1$, contradicting real-linear independence in [F1]. Hence every nonzero $\lambda\in\Lambda$ has $|\lambda|\ge\delta$, and every set $\{\lambda\in\Lambda:|\lambda|\le R\}$ is finite, since it is contained in the image of the finite set of integer pairs with $\max(|m|,|n|)\le R/\delta$. [F1, F14, algebra]

1.2 (Well-definedness and holomorphic ambient coordinates.) For $z\notin\Lambda$, the triple $(\wp(z),\wp'(z),1)$ has nonzero third coordinate, so $\Psi(z):=[\wp(z):\wp'(z):1]$ is a point of the affine chart $\{Z\ne0\}$ of [F9]. Periodicity of both functions in [F4] gives $\Psi(z+\lambda)=\Psi(z)$, so $\Phi([z]):=\Psi(z)$ is well defined on $T_\Lambda\setminus\{[0]\}$. In a torus chart obtained by lifting to a small ball ([F2]), its ambient coordinate functions are $\wp$ and $\wp'$, both holomorphic by [F4]. Once the image is placed in the curve, its local parameter from [F10] is one of these ambient coordinates, which verifies holomorphy as a map into the curve by [F12]. [F1, F2, F4, F9, F10, F12, algebra]

2.1 (The function $H:=\wp-z^{-2}$ at $0$.) Work on the disc $|z|<\delta/2$ from step 1.1, which contains no other lattice point. The double pole with principal part $z^{-2}$ in [F4] means that $H$ extends holomorphically across $0$. Evenness and [F13] give $H(z)=a_0+a_2z^2+O(z^4)$ and $H'(z)=2a_2z+O(z^3)$. Substituting $\wp=z^{-2}+H$ and $\wp'=-2z^{-3}+H'$ into [F6], the coefficient of $z^{-4}$ on the left is $0$, whereas on the right it is $12a_0$; equivalently, multiply by $z^6$ and compare the Taylor coefficient of $z^2$. Thus $a_0=0$, so $H(0)=0$, $H(z)=O(z^2)$ and $H'(z)=O(z)$. [F4, F6, F13, step 1.1, algebra]

2.2 (The image lies in $C_\Lambda$.) For $z\notin\Lambda$ the point $\Phi([z])=[\wp(z):\wp'(z):1]$ satisfies, by [F6], $Y^2Z=\wp'(z)^2\cdot1=4\wp(z)^3-g_2\wp(z)-g_3=4X^3-g_2XZ^2-g_3Z^3$ with $(X,Y,Z)=(\wp(z),\wp'(z),1)$; hence $\Phi([z])\in C_\Lambda$. [F6, step 1.2, algebra]

3.1 (Expansions at the origin.) From step 2.1, near $0$ one has $\wp(z)=z^{-2}(1+O(z^2))$ and, differentiating $\wp=z^{-2}+H$ with the rules of [F13], $\wp'(z)=-2z^{-3}+H'(z)=-2z^{-3}\bigl(1-\tfrac12z^3H'(z)\bigr)$ with $z^3H'(z)=O(z^4)$, so $\wp'(z)=-2z^{-3}(1+O(z^4))$. Hence on a punctured neighbourhood of $0$ the quotients $u:=\wp/\wp'$ and $v:=1/\wp'$ satisfy $u=-\tfrac z2(1+O(z^2))(1+O(z^4))^{-1}=-\tfrac z2+O(z^3)$ and $v=-\tfrac{z^3}2(1+O(z^4))^{-1}=-\tfrac{z^3}2+O(z^7)$, so in particular $v=O(z^3)$; both are holomorphic and bounded on a punctured disc around $0$, so by [F13] they extend holomorphically to $0$ with $u(0)=0=v(0)$ and $u'(0)=-\tfrac12\ne0$. [F13, step 2.1, algebra]

4.1 (Extension to $[0]$.) Let $U\subseteq\mathbb C$ be a ball around $0$ on which $\pi$ is injective, and use the torus chart $\chi:=(\pi|_U)^{-1}:\pi(U)\to U$ ([F2]) around $[0]$, so that $\chi([w])=w$. On the target side use the chart $\{Y\ne0\}$ of [F9] with coordinates $(u,v)=(X/Y,Z/Y)$; the point $O=[0:1:0]$ has coordinates $(0,0)$. For $[w]\in\pi(U)\setminus\{[0]\}$ the coordinate functions of $\Phi$ are $u=\wp(w)/\wp'(w)$ and $v=1/\wp'(w)$ (reading the homogeneous coordinates of step 1.2 in the chart $\{Y\ne0\}$), and by step 3.1 these extend holomorphically to $w=0$ with values $0$. Hence the formula $\Phi([0]):=O$ extends $\Phi$ to a map on all of $T_\Lambda$, and by [F12] this extension is holomorphic at $[0]$: the chart expression $w\mapsto(u(w),v(w))$ is holomorphic at $0$. [F2, F9, F12, step 3.1, step 1.2, algebra]

5.1 (Local biholomorphy at $[0]$.) Apply [F10] to $G(u,v):=v-4u^3+g_2uv^2+g_3v^3$: this is the equation of $C_\Lambda$ in the chart $\{Y\ne0\}$ by [F9], $G(0,0)=0$ and $\partial G/\partial v(0,0)=1+2g_2uv+3g_3v^2\big|_{(0,0)}=1\ne0$, so the curve is near $O$ the graph $v=\varphi(u)$ of a holomorphic $\varphi$ with $\varphi(0)=0$, and $u$ is a local parameter on $C_\Lambda$ at $O$, a homeomorphism of a neighbourhood of $O$ in $C_\Lambda$ onto a plane domain. The chart expression of $\Phi$ in the torus chart of step 4.1 and this local parameter is $w\mapsto u(w)$, which by step 3.1 equals $-\tfrac w2+O(w^3)$; it is holomorphic at $w=0$ with derivative $-\tfrac12\ne0$, so by [F11](a) it restricts to a biholomorphism between complex domains contained in neighbourhoods of $0$ and of $u(0)=0$. Composing with the two charts, which are homeomorphisms by [F2] and [F10], the map $\Phi$ carries a neighbourhood of $[0]$ homeomorphically onto an open subset of $C_\Lambda$, and its inverse on that piece is holomorphic. [F2, F10, F11, step 3.1, step 4.1, algebra]

5.2 (Injectivity.) Let $z,w\in\mathbb C$ with $\Phi([z])=\Phi([w])$. If $z\in\Lambda$ then $\Phi([z])=O$ by step 4.1, and $O$ has $Z=0$ while every point $\Phi([w'])$ with $w'\notin\Lambda$ has third homogeneous coordinate $1\ne0$ by step 1.2; hence $w\in\Lambda$ and $[w]=[z]$. If $z,w\notin\Lambda$, then comparing the chart $\{Z\ne0\}$ coordinates of the common point gives $\wp(z)=\wp(w)$ and $\wp'(z)=\wp'(w)$; by [F7] the first equality gives $w\equiv z$ or $w\equiv-z$ modulo $\Lambda$, and in the second case $\wp'(w)=\wp'(-z)=-\wp'(z)$ by the oddness in [F4], so $\wp'(z)=-\wp'(z)$, that is $\wp'(z)=0$; then $[z]=[h_j]$ for some $j$ by [F7] and $w\equiv-z\equiv z$ modulo $\Lambda$ because $2h_j\in\Lambda$. Hence in all cases $[w]=[z]$, so $\Phi$ is injective. [F4, F7, step 1.2, step 4.1, algebra]

5.3 (Surjectivity.) Let $P=[X:Y:Z]\in C_\Lambda$. If $Z\ne0$, put $x:=X/Z\in\mathbb C$ and $y:=Y/Z\in\mathbb C$; the equation of $C_\Lambda$ reads $y^2=4x^3-g_2x-g_3$. By [F7] the value $x$ is attained: choose $z\in\mathbb C$ with $\wp(z)=x$; then $z\notin\Lambda$ by [F5], and by [F6] $\wp'(z)^2=4x^3-g_2x-g_3=y^2$, so $\wp'(z)=y$ or $\wp'(z)=-y$. In the first case $\Phi([z])=[x:y:1]=P$; in the second case $\wp(-z)=x$ and $\wp'(-z)=-(-y)=y$ by [F4], so $\Phi([-z])=P$. If $Z=0$, then the equation gives $0=4X^3$, so $X=0$ and $P=[0:Y:0]=[0:1:0]=O=\Phi([0])$ by step 4.1. Hence $\Phi$ is surjective. [F4, F5, F6, F7, step 4.1, algebra]

6.1 (Local biholomorphy at the remaining points.) Let $z_0\in\mathbb C\setminus\Lambda$ and $P:=\Phi([z_0])\in C_\Lambda$; write $f(x,y):=y^2-4x^3+g_2x+g_3$ for the defining polynomial in the chart $\{Z\ne0\}$ of [F9]. If $\wp'(z_0)\ne0$, then $\partial f/\partial y(P)=2\wp'(z_0)\ne0$; by [F10] applied to $f$ (whose zero set is $C_\Lambda$ in that chart), $x$ is a local parameter on $C_\Lambda$ at $P$, and the chart expression of $\Phi$ in the torus chart at $[z_0]$ and this parameter is $w\mapsto\wp(w)$, holomorphic at $z_0$ with derivative $\wp'(z_0)\ne0$ by [F4]; so by [F11](a) this chart expression restricts to a biholomorphism between neighbourhoods, and $\Phi$ is a local biholomorphism at $[z_0]$. If instead $\wp'(z_0)=0$, then $z_0\equiv h_j$ modulo $\Lambda$ for some $j\in\{1,2,3\}$ by [F7], and $P=(e_j,0)$. By [F8] the roots $e_1,e_2,e_3$ of $p(x):=4x^3-g_2x-g_3$ are distinct, so $\partial f/\partial x(P)=-p'(e_j)\ne0$; applying [F10] to $f$ near $P$ shows that $y$ is a local parameter on $C_\Lambda$ at $P$. By [F7] the class $[h_j]$ is a critical point of $\bar\wp$ with ramification index $2$, so $\wp(w)-e_j$ has a zero of order $2$ at $h_j$; by [F13] it factors as $\wp(w)-e_j=(w-h_j)^2g(w)$ with $g$ holomorphic near $h_j$ and $g(h_j)\ne0$, so by the product rule of [F13] $\wp'(w)=(w-h_j)\bigl(2g(w)+(w-h_j)g'(w)\bigr)$ and $\wp''(h_j)=2g(h_j)\ne0$. The chart expression of $\Phi$ in the torus chart at $[h_j]$ and the local parameter $y$ is $w\mapsto\wp'(w)$, holomorphic with derivative $\wp''(h_j)\ne0$ at $w=h_j$; so by [F11](a) this chart expression restricts to a biholomorphism between neighbourhoods, and $\Phi$ is a local biholomorphism at $[h_j]$. Every class of $T_\Lambda$ is $[0]$, a class $[z_0]$ with $\wp'(z_0)\ne0$, or some $[h_j]$, so $\Phi$ carries a neighbourhood of every point of $T_\Lambda$ homeomorphically onto an open subset of $C_\Lambda$, with holomorphic inverse on that piece. [F4, F7, F8, F9, F10, F11, F13, step 5.1, algebra]

7.1 ($\Phi$ is a homeomorphism; the topology of $C_\Lambda$.) By steps 5.1 and 6.1 every $x\in T_\Lambda$ has an open neighbourhood $U_x$ such that $\Phi(U_x)$ is open in $C_\Lambda$ and $\Phi|_{U_x}:U_x\to\Phi(U_x)$ is a homeomorphism. Hence $\Phi$ is continuous, because it is continuous on each member of the open cover $\{U_x\}$ of its domain; and $\Phi$ is open: for open $W\subseteq T_\Lambda$ one has $\Phi(W)=\bigcup_{x\in W}\Phi(U_x\cap W)$, and each piece $\Phi(U_x\cap W)$ is open in $\Phi(U_x)$, hence in $C_\Lambda$, because $\Phi|_{U_x}$ is a homeomorphism onto the open set $\Phi(U_x)$. By steps 5.2 and 5.3 the map $\Phi$ is bijective, so by [F11](b) it is a homeomorphism. Consequently $C_\Lambda$ inherits the following properties from $T_\Lambda$: it is compact and connected as a continuous image of the compact connected torus ([F2], [F14]); it is Hausdorff, because distinct points $P\ne Q$ of $C_\Lambda$ have distinct preimages $\Phi^{-1}(P)\ne\Phi^{-1}(Q)$ by injectivity, the Hausdorff torus [F2] separates them by disjoint open sets, and their $\Phi$-images are disjoint open sets separating $P$ and $Q$; and it is second countable, because for a countable basis $\mathcal B$ of the second-countable torus [F2] the images $\Phi(B)$, $B\in\mathcal B$, are open and form a basis by [F15]: given open $W\subseteq C_\Lambda$ and $P\in W$, the set $\Phi^{-1}(W)$ is open and contains $\Phi^{-1}(P)$, so some $B\in\mathcal B$ has $\Phi^{-1}(P)\in B\subseteq\Phi^{-1}(W)$, whence $P\in\Phi(B)\subseteq W$. The local parameters of [F10] are charts on $C_\Lambda$ with holomorphic transitions, so by [F15] the space $C_\Lambda$, nonempty and homeomorphic to $T_\Lambda$ through $\Phi$, is a compact connected Riemann surface. [F2, F10, F11, F14, F15, step 5.1, step 5.2, step 5.3, step 6.1]

8.1 (The inverse is holomorphic, and conclusion.) By steps 1.2, 4.1 and 6.1 the map $\Phi:T_\Lambda\to C_\Lambda$ is holomorphic and a local biholomorphism at every point; by steps 5.2 and 5.3 it is bijective. At a point $P\in C_\Lambda$, let charts $\varphi$ around $\Phi^{-1}(P)$ and $\psi$ around $P$ be such that $\psi\circ\Phi\circ\varphi^{-1}$ is the identity (these exist because $\Phi$ is a local biholomorphism at $\Phi^{-1}(P)$, as recorded in steps 5.1 and 6.1); then the chart expression of $\Phi^{-1}$ is the identity too, hence holomorphic at $P$; since every point of $C_\Lambda$ carries such charts, $\Phi^{-1}$ is holomorphic by the locality clause of [F12]. Thus $\Phi$ is a biholomorphism. Finally, by step 7.1 the space $C_\Lambda$ is a compact connected Riemann surface homeomorphic to $T_\Lambda$ through $\Phi$; clause (1) is exactly [F8]. ∎

## Remarks

The map is the classical uniformization of the lattice cubic: the two functions
$\wp$ and $\wp'$ solve the algebraic equation $Y^2Z=4X^3-g_2XZ^2-g_3Z^3$
because of the differential equation, and the degree-two fibre structure of
$\wp$ is what makes the parametrization injective. The three points where
$\wp'$ vanishes are exactly the branch points $(e_j,0)$ of the cubic, and the
map is a local biholomorphism there because on the curve the coordinate $y$ is
a local parameter at a point with $y=0$ and $e_j$ is a simple root of the
cubic polynomial. Smoothness of $C_\Lambda$ is imported from
[[thm-weierstrass-lattice-discriminant-is-nonzero]]; the present theorem is
the biholomorphic half of the classical statement, and the group law
transported along $\Phi$ is analysed in
[[thm-elliptic-cubic-chord-tangent-group-law]].
