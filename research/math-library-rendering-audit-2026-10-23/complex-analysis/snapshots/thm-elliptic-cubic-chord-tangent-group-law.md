---
id: thm-elliptic-cubic-chord-tangent-group-law
kind: theorem
title: "The chord-tangent group law and elliptic uniformization"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - thm-complex-torus-quotient-is-well-defined
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-weierstrass-p-differential-equation
  - thm-weierstrass-p-addition-formula
  - thm-weierstrass-lattice-discriminant-is-nonzero
  - thm-complex-torus-weierstrass-cubic-isomorphism
  - def-projective-space-points
  - lem-nonsingular-complex-algebraic-curve-holomorphic-charts
  - def-complex-differentiability-holomorphic-and-entire
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - thm-taylor-expansion-holomorphic-function
  - cor-complex-differentiability-implies-continuity
  - lem-holomorphic-difference-quotient-is-jointly-continuous
  - def-complex-metric-convergence-and-continuity
  - thm-componentwise-limits-and-continuity
  - lem-algebra-of-continuous-real-maps-on-a-space
  - lem-complex-conjugation-and-modulus-laws
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - cor-vietas-formulas-for-a-split-monic-polynomial
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, p. 47, Proposition 3.12 continuation"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, Proposition 3.12 and the sentence following it ('The addition formula shows that the map in the proposition is a homomorphism'), printed p. 47."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a notes (2010), Ch. 5, Theorem 5.16 and Corollaries 5.17-5.20, printed pp. 89-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5, Theorem 5.16 (any line cuts a+b+c=0 on C/Lambda) with Corollaries 5.17-5.20 (negation, chord and tangent construction), printed pp. 89-90."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a notes (2 Dec 2025), Ch. 5 §5.2, Theorem 5.16 and Corollaries 5.17-5.20, pp. 148-150"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213a/course/course.pdf
      locator: "Ch. 5 §5.2, Theorem 5.16 and Corollaries 5.17-5.20, printed pp. 148-150."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full complex lattice with
oriented basis and let $\wp=\wp_\Lambda$ be its Weierstrass function with
invariants $g_2,g_3$ ([[def-complex-lattice-and-complex-torus]],
[[def-weierstrass-elliptic-p-function]]). Let
$$C_\Lambda:=\bigl\{[X:Y:Z]\in\mathbb{CP}^2:Y^2Z=4X^3-g_2XZ^2-g_3Z^3\bigr\}$$
be the associated smooth projective cubic with $O=[0:1:0]$, and let
$\Phi:T_\Lambda\to C_\Lambda$ be the biholomorphism
$\Phi([z])=[\wp(z):\wp'(z):1]$ for $z\notin\Lambda$ and $\Phi([0])=O$
([[thm-complex-torus-weierstrass-cubic-isomorphism]]). Transport addition from
$T_\Lambda$ to $C_\Lambda$ through $\Phi$ and call the resulting operation
$\oplus$. Then:

1. for every projective line $L$, if $L\cdot C_\Lambda=Q_1+Q_2+Q_3$ is its
   intersection divisor, with tangent and other repeated intersections counted
   with multiplicity, then $Q_1\oplus Q_2\oplus Q_3=O$;
2. consequently the transported operation is the chord-tangent law: for a
   secant or tangent whose third intersection is $R$ one has $P\oplus Q=-R$;
   vertical lines give $P,-P,O$ (with multiplicity two at a half-period
   point), and the line at infinity cuts out $3O$;
3. in particular $\Phi([z]+[w])=\Phi([z])\oplus\Phi([w])$ for all $z,w$, so
   $\Phi$ is a group isomorphism.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis, its torus $T_\Lambda=\mathbb C/\Lambda$ with class map $\pi(z)=[z]$, the Weierstrass function $\wp=\wp_\Lambda$ and its derivative $\wp'$, the invariants $g_2=60G_4$, $g_3=140G_6$, the half-periods $h_1=\omega_1/2$, $h_2=\omega_2/2$, $h_3=(\omega_1+\omega_2)/2$ with values $e_j=\wp(h_j)$, the polynomial $p(x):=4x^3-g_2x-g_3$, the projective cubic $C_\Lambda\subseteq\mathbb{CP}^2$ with its point $O=[0:1:0]$, and the map $\Phi:T_\Lambda\to C_\Lambda$.

[F1] $\Lambda\subseteq\mathbb C$ is a subgroup, $[z]+[w]:=[z+w]$ is well defined and makes $T_\Lambda$ an abelian group with identity $[0]$ and inverse $-[z]=[-z]$, and the class map is a surjective group homomorphism with kernel $\Lambda$ ([[def-complex-lattice-and-complex-torus]]).

[F2] $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$, even and $\Lambda$-periodic, and at each $\lambda\in\Lambda$ it has a double pole with principal part $(z-\lambda)^{-2}$ and no other poles; $\wp'(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$ on $\mathbb C\setminus\Lambda$, this series converging normally, $\wp'$ is odd and $\Lambda$-periodic, and $\wp'$ has a pole of order $3$ at each lattice point and no other poles; in particular $\wp,\wp'$ are not constant ([[def-weierstrass-elliptic-p-function]], [[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F3] $\wp(z)=\wp(w)$ if and only if $w\equiv z$ or $w\equiv-z$ modulo $\Lambda$; the zeros of $\wp'$ are exactly the $\Lambda$-translates of $h_1,h_2,h_3$, each of order one; consequently for $w\notin\Lambda$ one has $\wp'(w)=0$ if and only if $2w\in\Lambda$; and $e_1,e_2,e_3$ are three distinct complex numbers ([[lem-weierstrass-p-degree-two-and-half-periods]]).

[F4] $(\wp')^2=4\wp^3-g_2\wp-g_3$ on $\mathbb C\setminus\Lambda$ ([[thm-weierstrass-p-differential-equation]]).

[F5] $\Delta=g_2^3-27g_3^2\ne0$; the polynomial $p(x)=4x^3-g_2x-g_3$ has the three distinct roots $e_1,e_2,e_3$, so $p(e_j)=0$ and $p'(e_j)\ne0$ for each $j$; and $C_\Lambda$ is nonsingular in the Jacobian-rank sense at every point, with $O$ its unique point at infinity ([[thm-weierstrass-lattice-discriminant-is-nonzero]]).

[F6] For every $w\in\mathbb C$ the function $z\mapsto\wp(z+w)+\wp(z)+\wp(w)-\tfrac14\bigl((\wp'(z)-\wp'(w))/(\wp(z)-\wp(w))\bigr)^2$ is the zero meromorphic function of $z$ on $\mathbb C$; in particular, whenever $z,w,z+w\notin\Lambda$ and $\wp(z)\ne\wp(w)$, the displayed quotient is defined and $\wp(z+w)=-\wp(z)-\wp(w)+\tfrac14\bigl((\wp'(z)-\wp'(w))/(\wp(z)-\wp(w))\bigr)^2$ holds as an equality of values ([[thm-weierstrass-p-addition-formula]]).

[F7] $\Phi([z])=[\wp(z):\wp'(z):1]$ for $z\notin\Lambda$, $\Phi([0])=O$, and $\Phi:T_\Lambda\to C_\Lambda$ is bijective ([[thm-complex-torus-weierstrass-cubic-isomorphism]]).

[F8] Complex differentiability is the existence of the difference-quotient limit; sums, scalar multiples, products, quotients with nonvanishing denominator, and composition of complex differentiable functions are complex differentiable with the usual linearity, product, quotient and chain rules, and every constant function has derivative $0$ ([[def-complex-differentiability-holomorphic-and-entire]], [[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]]).

[F9] A holomorphic function on a disc equals its Taylor series there and has complex derivatives of all orders; a complex differentiable function is continuous at the point of differentiability ([[thm-taylor-expansion-holomorphic-function]], [[cor-complex-differentiability-implies-continuity]]).

[F10] For a holomorphic $f$ on an open $\Omega\subseteq\mathbb C$ the filled difference quotient $g(\zeta,z):=(f(\zeta)-f(z))/(\zeta-z)$ for $\zeta\ne z$ and $g(z,z):=f'(z)$ is continuous on $\Omega\times\Omega$ ([[lem-holomorphic-difference-quotient-is-jointly-continuous]]).

[F11] Continuity on $\mathbb C$ is metric continuity for $|\cdot|$; a map into $\mathbb R^2=\mathbb C$ is continuous if and only if both components are continuous, and sums, products and quotients with nonvanishing denominator of continuous complex-valued functions are continuous ([[def-complex-metric-convergence-and-continuity]], [[thm-componentwise-limits-and-continuity]], [[lem-algebra-of-continuous-real-maps-on-a-space]]).

[F12] For all $z,w\in\mathbb C$ one has $|z|\ge0$ with $|z|=0$ only for $z=0$, $|zw|=|z|\,|w|$, and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F13] A nonzero polynomial of degree $n\ge1$ over $\mathbb C$ has exactly $n$ roots counted with multiplicity, in particular for degrees $2$ and $3$; for a split monic cubic $(t-x_1)(t-x_2)(t-x_3)=t^3+a_1t^2+a_2t+a_3$ one has $a_1=-(x_1+x_2+x_3)$ ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]], [[cor-vietas-formulas-for-a-split-monic-polynomial]]).

[F14] $\Lambda$ is uniformly discrete and closed in $\mathbb C$, so $\mathbb C\setminus\Lambda$ is open and every point of it has positive distance to $\Lambda$ ([[thm-complex-torus-quotient-is-well-defined]]).

[F15] $\mathbb{CP}^2=(\mathbb C^3\setminus\{0\})/\sim$ with classes $[X:Y:Z]$, the standard affine charts are the sets where one homogeneous coordinate is nonzero, with coordinates $(X/Z,Y/Z)$ on $\{Z\ne0\}$ and $(X/Y,Z/Y)$ on $\{Y\ne0\}$, every projective line is the zero set of a nonzero linear form $\alpha X+\beta Y+\gamma Z$, and $O=[0:1:0]$ lies on it exactly when $\beta=0$ ([[def-projective-space-points]]).

[F16] Let $C$ be a complex algebraic curve which near $p$ is the zero set of one holomorphic function $f$ of two variables with nonzero complex gradient at $p$; then one free ambient coordinate is a local parameter: after permuting coordinates the curve agrees near $p$ with a graph over that coordinate, the graph map is holomorphic, and transitions between two such local parameters are holomorphic, with holomorphic inverse by the same statement applied with the roles exchanged ([[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]).

## Proof

**Proof technique:** direct.

1.1 (The transported operation.) Define $\oplus:C_\Lambda\times C_\Lambda\to C_\Lambda$ by $P\oplus Q:=\Phi\bigl(\Phi^{-1}(P)+\Phi^{-1}(Q)\bigr)$. This is well defined because $\Phi$ is a bijection [F7]; transport along a bijection carries the abelian group laws of $T_\Lambda$ [F1] to $C_\Lambda$, so $\oplus$ is commutative and associative, its identity is $\Phi([0])=O$, and the inverse of $P$ is $\ominus P:=\Phi(-\Phi^{-1}(P))$. By the very definition $\Phi([z]+[w])=\Phi([z])\oplus\Phi([w])$ for all $z,w\in\mathbb C$, and $\ominus\Phi([s])=\Phi([-s])=[\wp(-s):\wp'(-s):1]=[\wp(s):-\wp'(s):1]$ for $s\notin\Lambda$ by the parity of $\wp$ and the oddness of $\wp'$ [F2]; in the chart $\{Z\ne0\}$ this reads $\ominus(x,y)=(x,-y)$, and $\ominus O=O$. [F1, F2, F7, algebra]

1.2 (The differentiated differential equation.) On $\mathbb C\setminus\Lambda$ the functions $\wp$ and $\wp'$ are holomorphic [F2] and $(\wp')^2=4\wp^3-g_2\wp-g_3$ [F4]. Differentiating this identity with the sum, product and chain rules [F8] gives $2\wp'\wp''=(12\wp^2-g_2)\wp'$ on $\mathbb C\setminus\Lambda$. At every point with $\wp'\ne0$ division gives $\wp''=6\wp^2-\tfrac12g_2$. If $z_0\in\mathbb C\setminus\Lambda$ has $\wp'(z_0)=0$, then $z_0$ is a $\Lambda$-translate of one of $h_1,h_2,h_3$ by [F3], and [F3] also says each such zero is of order one; hence $\wp'\ne0$ on a punctured disc $D\setminus\{z_0\}$ around $z_0$ with $D\subseteq\mathbb C\setminus\Lambda$ [F14], so the identity holds on $D\setminus\{z_0\}$. Both $\wp''$ and $6\wp^2-\tfrac12g_2$ are holomorphic on $D$, since $\wp''$ is the derivative of the holomorphic function $\wp'$ and a holomorphic function has complex derivatives of every order [F9]; hence both are continuous on $D$ [F9], and the limit $z\to z_0$ along $D\setminus\{z_0\}$ gives $\wp''(z_0)=6\wp(z_0)^2-\tfrac12g_2$. Therefore $\wp''=6\wp^2-\tfrac12g_2$ on all of $\mathbb C\setminus\Lambda$. [F2, F3, F4, F8, F9, F14, algebra]

1.3 (The affine chart and its local parameters.) In the chart $\{Z\ne0\}$ with coordinates $(x,y)=(X/Z,Y/Z)$ [F15], the cubic $C_\Lambda$ is the zero set of $f(x,y):=y^2-p(x)$, because the defining equation divided by $Z^3$ reads $y^2=4x^3-g_2x-g_3$. Its gradient is $\nabla f=(-p'(x),\,2y)$: if $y\ne0$ then $\partial f/\partial y=2y\ne0$, while if $y=0$ then $p(x)=0$, so $x=e_j$ for some $j$ by [F5] and $\partial f/\partial x=-p'(e_j)\ne0$. Hence the gradient is nonzero at every point of $C_\Lambda\cap\{Z\ne0\}$ and the hypothesis of the chart lemma [F16] holds there: at a point with $y\ne0$ the coordinate $x$ is a local parameter and $C_\Lambda$ agrees near the point with a graph $x\mapsto(x,g(x))$ for a holomorphic $g$ with $g(x)^2=p(x)$, while at the point $(e_j,0)$ the coordinate $y$ is a local parameter and $C_\Lambda$ agrees near it with a graph $y\mapsto(h(y),y)$ for a holomorphic $h$ with $h(0)=e_j$ and $y^2=p(h(y))$. Differentiating the latter identity with the chain rule [F8] gives $2y=p'(h(y))h'(y)$, so $h'(0)=0$ because $p'(e_j)\ne0$; comparing the $y^2$-coefficients in $y^2=p\bigl(e_j+(h(y)-e_j)\bigr)=p'(e_j)\bigl(h(y)-e_j\bigr)+O\bigl((h(y)-e_j)^2\bigr)$ gives $h(y)-e_j=\bigl(1/p'(e_j)\bigr)y^2+O(y^3)$, so $h(y)-e_j$ vanishes at $y=0$ with order exactly $2$. [F5, F8, F15, F16, algebra]

1.4 (The point at infinity and the vertical directions there.) In the chart $\{Y\ne0\}$ with coordinates $(u,v)=(X/Y,Z/Y)$ [F15], the point $O=[0:1:0]$ is $(0,0)$ and the cubic reads $G(u,v)=0$ for $G(u,v):=v-4u^3+g_2uv^2+g_3v^3$. Here $G(0,0)=0$ and $\partial G/\partial v(0,0)=1\ne0$, so by the chart lemma [F16] the coordinate $u$ is a local parameter at $O$ and $C_\Lambda$ agrees near $O$ with the graph $v=\varphi(u)$ of a holomorphic $\varphi$ near $0$ with $\varphi(0)=0$ and $\varphi(u)=4u^3-g_2u\varphi(u)^2-g_3\varphi(u)^3$. Differentiating the relation $G\bigl(u,\varphi(u)\bigr)=0$ with the chain rule [F8] gives $\bigl(-12u^2+g_2\varphi(u)^2\bigr)+\bigl(1+2g_2u\varphi(u)+3g_3\varphi(u)^2\bigr)\varphi'(u)=0$, so $\varphi'(0)=0$ and hence $\varphi(u)=O(u^2)$. The relation excludes $\varphi\equiv0$, since it would give $4u^3=0$ near $0$. Writing $\varphi(u)=u^n\psi(u)$ with $\psi(0)\ne0$ and $n\ge1$, the relation $u^n\psi=4u^3-g_2u^{2n+1}\psi^2-g_3u^{3n}\psi^3$ forces $n=3$: for $n<3$ every term on the right has order greater than $n$, and for $n>3$ the term $4u^3$ is the unique lowest-order term on the right, so its order there is exactly $3$. Hence the line at infinity $\{Z=0\}$, whose local equation in this chart is $v$ [F15], vanishes along $C_\Lambda$ at $O$ with order $3$, and it meets $C_\Lambda$ nowhere else, because setting $Z=0$ in the cubic gives $4X^3=0$, hence $X=0$ and the point $[0:Y:0]=O$. Likewise, for $c\in\mathbb C$ the vertical line $\{X=cZ\}$ has local equation $u-cv$ at $O$ [F15], which restricts to $u-c\varphi(u)=u\bigl(1-c\,\varphi(u)/u\bigr)$; since $\varphi(u)=O(u^2)$ the bracket tends to $1\ne0$, so the order of vanishing at $O$ is $1$. [F8, F15, F16, algebra]

1.5 (Intersection multiplicity convention.) For a projective line $L$ and a point $P_0\in C_\Lambda\cap L$ call the multiplicity of $L$ at $P_0$ the order of vanishing at $P_0$ of the restriction of a local equation of $L$ to $C_\Lambda$, computed in a local parameter of $C_\Lambda$ at $P_0$; by [F16] the transition between two local parameters is holomorphic with holomorphic inverse, so its derivative never vanishes and the order does not depend on the local parameter, and multiplying a local equation of a line by a holomorphic function without zeros does not change the order. The intersection divisor $L\cdot C_\Lambda$ is the formal sum of the points of the finite set $C_\Lambda\cap L$ taken with these multiplicities; a multiplicity $1$, $2$ or $3$ is called a simple, double or triple intersection. [F15, F16]

2.1 (The differentiated addition identity where all values are finite.) Let $z,w\in\mathbb C$ satisfy $z,w,z+w\notin\Lambda$ and $\wp(z)\ne\wp(w)$, and put $x:=\wp(z)$, $y:=\wp'(z)$, $u:=\wp(w)$, $v:=\wp'(w)$, $d:=u-x\ne0$, $m:=(v-y)/d$ and $t:=\wp(z+w)$. By [F3] the inequality $\wp(z)\ne\wp(w)$ says $z\not\equiv\pm w$ modulo $\Lambda$, so $z\notin\pm w+\Lambda$. By [F6] the function $\Phi_w(\zeta):=\wp(\zeta+w)+\wp(\zeta)+\wp(w)-\tfrac14Q(\zeta)^2$ with $Q(\zeta):=\bigl(\wp'(\zeta)-\wp'(w)\bigr)/\bigl(\wp(\zeta)-\wp(w)\bigr)$ is the zero meromorphic function of $\zeta$ on $\mathbb C$; on a small disc around $z$ each of the functions $\zeta\mapsto\wp(\zeta+w)$, $\wp(\zeta)$ and $Q(\zeta)$ is holomorphic (here $z+w\notin\Lambda$, $z\notin\Lambda$ and $\wp(z)\ne\wp(w)$), so $\Phi_w$ is holomorphic there and, being identically zero, has derivative $0$ there. By the sum, product and quotient rules [F8], at $\zeta=z$ one has $0=\wp'(z+w)+\wp'(z)-\tfrac12Q(z)Q'(z)$ with $Q(z)=m$ and $Q'(z)=\bigl(\wp''(z)(x-u)-(y-v)y\bigr)/(x-u)^2=(my-\wp''(z))/(u-x)$, the last equality because $x-u=-d$ and $y-v=-md$; hence $\wp'(z+w)=-y+\tfrac12mQ'(z)$. Next [F6] gives $t=-x-u+\tfrac14m^2$, that is $m^2=4(t+x+u)$. By [F4] at $z$ and at $w$, $v^2-y^2=4(u^3-x^3)-g_2(u-x)=(u-x)\bigl(4(u^2+ux+x^2)-g_2\bigr)$, while $v^2-y^2=(v-y)(v+y)=md(v+y)$; dividing by $d\ne0$ gives $m(v+y)=4(u^2+ux+x^2)-g_2$, and substituting $v+y=2y+md$ gives $m^2d+2my=4(u^2+ux+x^2)-g_2$. Substituting $m^2=4(t+x+u)$ and $(t+x+u)(u-x)=t(u-x)+(u^2-x^2)$ yields $4t(u-x)+4(u^2-x^2)+2my=4(u^2+ux+x^2)-g_2$, that is $2my=4x(u+2x)-g_2-4t(u-x)$. By step 1.2, $g_2=12x^2-2\wp''(z)$, so $2my=4xu-4x^2+2\wp''(z)-4t(u-x)$, which says $my-\wp''(z)=2(u-x)(x-t)$; therefore $Q'(z)=2(x-t)$ and $\wp'(z+w)=-y+m(x-t)$. [F3, F4, F6, F8, step 1.2, algebra]

2.2 (Vertical lines.) Let $c\in\mathbb C$ and $L:=\{X=cZ\}$; then $O\in L$ [F15], $L\cap\{Z=0\}=\{O\}$, and by step 1.4 the multiplicity of $L$ at $O$ is $1$. If $p(c)\ne0$, then by [F13] applied to $t^2-p(c)$ there is $y_0\ne0$ with $y_0^2=p(c)$, and the affine part of $L\cap C_\Lambda$ is exactly the two points $P_+=(c,y_0)$ and $P_-=(c,-y_0)$, since in the chart $\{Z\ne0\}$ the curve meets $x=c$ in the solutions of $y^2=p(c)$. At each of them $y\ne0$, so by step 1.3 the coordinate $x$ is a local parameter and the local equation $x-c$ of $L$ has order $1$ there; hence the divisor is $P_++P_-+O$, of total multiplicity $3$. Choose $z$ with $\Phi([z])=P_+$ [F7]; then $z\notin\Lambda$, $\wp(z)=c$ and $\wp'(z)=y_0$, so by parity [F2] $P_-=(c,-y_0)=[\wp(-z):\wp'(-z):1]=\Phi([-z])$, and step 1.1 gives $P_+\oplus P_-\oplus O=\Phi\bigl([z]+[-z]+[0]\bigr)=\Phi([0])=O$. If $p(c)=0$, then $c=e_j$ for a unique $j$ [F5], and the only affine intersection is $P:=(e_j,0)$; by step 1.3 the local equation $x-e_j$ of $L$ has order $2$ at $P$ in the local parameter $y$, while the multiplicity at $O$ is $1$ by step 1.4, so the divisor is $2P+O$, of total multiplicity $3$. By [F3], $\wp(h_j)=e_j$ and $\wp'(h_j)=0$, so $P=\Phi([h_j])$; also $-h_j\equiv h_j$ modulo $\Lambda$ because $2h_1=\omega_1$, $2h_2=\omega_2$ and $2h_3=\omega_1+\omega_2$ all lie in $\Lambda$, so step 1.1 gives $P=\Phi([-h_j])=\ominus\Phi([h_j])=\ominus P$, and $2P\oplus O=\Phi\bigl([h_j]+[h_j]+[0]\bigr)=\Phi([2h_j])=\Phi([0])=O$ because $2h_j\in\Lambda$. Thus the transported sum of the divisor $P,-P,O$ is $O$, with the finite point occurring with multiplicity two. [F2, F3, F5, F7, F13, step 1.1, step 1.3, step 1.4]

2.3 (The line at infinity.) Let $L:=\{Z=0\}$. It has no affine point, and by step 1.4 it meets $C_\Lambda$ only at $O$, with multiplicity $3$, so $L\cdot C_\Lambda=3O$ and, by step 1.1 and $\Phi([0])=O$, $O\oplus O\oplus O=\Phi\bigl([0]+[0]+[0]\bigr)=\Phi([0])=O$. [step 1.1, step 1.4]

3.1 (The diagonal case of the differentiated identity.) Let $z_0\in\mathbb C\setminus\Lambda$ satisfy $\wp'(z_0)\ne0$; then $2z_0\notin\Lambda$ by [F3], and by [F14] we may choose a disc $D$ centred at $z_0$ with $D\subseteq\mathbb C\setminus\Lambda$ and $z_0+D\subseteq\mathbb C\setminus\Lambda$. For $w\in D\setminus\{z_0\}$ the Taylor expansion of $\wp$ at $z_0$ [F9] gives $\wp(w)-\wp(z_0)=\wp'(z_0)(w-z_0)+O\bigl((w-z_0)^2\bigr)\ne0$ after shrinking $D$, so step 2.1 applies to the pair $(z_0,w)$ and $G(w):=\wp'(z_0+w)+\wp'(z_0)-\widehat m(w)\bigl(\wp(z_0)-\wp(z_0+w)\bigr)=0$ for $w\in D\setminus\{z_0\}$, where $\widehat m$ is the continuous extension to $w=z_0$ of $m(z_0,w)=\bigl(\wp'(w)-\wp'(z_0)\bigr)/\bigl(\wp(w)-\wp(z_0)\bigr)$: by [F10] applied to $\wp'$ and to $\wp$ on a disc around $z_0$ inside $\mathbb C\setminus\Lambda$ the filled difference quotients $A(w)=\bigl(\wp'(w)-\wp'(z_0)\bigr)/(w-z_0)$ (value $\wp''(z_0)$ at $w=z_0$) and $B(w)=\bigl(\wp(w)-\wp(z_0)\bigr)/(w-z_0)$ (value $\wp'(z_0)\ne0$ at $w=z_0$) are continuous at $z_0$, and since $B(z_0)\ne0$ the quotient $\widehat m=A/B$ is continuous at $z_0$ with $\widehat m(w)=m(z_0,w)$ for $w\ne z_0$ and $\widehat m(z_0)=\wp''(z_0)/\wp'(z_0)$ [F11]. The functions $w\mapsto\wp'(z_0+w)$ and $w\mapsto\wp(z_0+w)$ are holomorphic on $D$, hence continuous there [F9], so $G$ is continuous at $z_0$ [F11]. Since $G$ vanishes on $D\setminus\{z_0\}$ it vanishes at $z_0$: given $\varepsilon>0$ choose $\delta>0$ smaller than the radius of $D$ with $|G(w)-G(z_0)|<\varepsilon$ for $|w-z_0|<\delta$, take $w=z_0+\delta/2$ to get $|G(z_0)|=|G(z_0)-G(w)|<\varepsilon$, and since this holds for every $\varepsilon>0$ — take $\varepsilon=|G(z_0)|$ if $|G(z_0)|>0$ — we get $|G(z_0)|=0$ [F12], hence $G(z_0)=0$ [F12], that is $\wp'(2z_0)=-\wp'(z_0)+\bigl(\wp''(z_0)/\wp'(z_0)\bigr)\bigl(\wp(z_0)-\wp(2z_0)\bigr)$. [F3, F9, F10, F11, F12, F14, step 2.1, algebra]

3.2 (Nonvertical lines with three distinct intersections.) Let $L$ be the projective line $\{Y=mX+bZ\}$ with $m,b\in\mathbb C$; then $O\notin L$ by [F15], and $L\cap\{Z=0\}=\{[1:m:0]\}$ does not lie on $C_\Lambda$ because $4\ne0$. The affine points of $C_\Lambda\cap L$ are the points $(x,mx+b)$ with $P_L(x)=0$, where $P_L(X):=(mX+b)^2-p(X)=-4X^3+m^2X^2+(g_2+2mb)X+(g_3+b^2)$ is a polynomial of degree $3$, and at such a point the multiplicity of $L$ in the sense of step 1.5 equals the multiplicity of $x$ as a root of $P_L$: if $y=mx+b\ne0$, then $x$ is a local parameter and $C_\Lambda$ is a graph $x'\mapsto(x',g(x'))$ near $x$ by step 1.3, $\bigl(g(x')-mx'-b\bigr)\bigl(g(x')+mx'+b\bigr)=p(x')-(mx'+b)^2=-P_L(x')$ and $g(x)+mx+b=2y\ne0$, so the order of $g-m(\cdot)-b$ at $x$ equals the order of $P_L$ at $x$; and if $y=0$ (so $x=e_j$ and $b=-me_j$), then both multiplicities equal $1$, because $P_L(e_j)=0$ and $P_L'(e_j)=2m(me_j+b)-p'(e_j)=-p'(e_j)\ne0$ by [F5], while in the local parameter $y$ of step 1.3 the line restricts to $y-m\bigl(h(y)-e_j\bigr)$ with derivative $1-mh'(0)=1\ne0$ at $0$. Consequently the intersection divisor of a nonvertical line is the sum of its root points $(x,mx+b)$, each with the multiplicity of the root, a total multiplicity of $3=\deg P_L$ by [F13] and step 1.5. Now suppose $P_L$ has three distinct roots $x_1,x_2,x_3$, put $P_i:=(x_i,mx_i+b)$ and $y_i:=mx_i+b$, so that $L\cdot C_\Lambda=P_1+P_2+P_3$; the $x_i$ are distinct, and $-P_L/4$ is monic with $X^2$-coefficient $-m^2/4$, so $x_1+x_2+x_3=m^2/4$ by [F13]. By surjectivity of $\Phi$ [F7] choose $z_1,z_2\in\mathbb C$ with $\Phi([z_i])=P_i$; then $z_i\notin\Lambda$ (as $P_i\ne O$), $\wp(z_i)=x_i$ and $\wp'(z_i)=y_i$, and $x_1\ne x_2$ gives $\wp(z_1)\ne\wp(z_2)$, hence $z_1\pm z_2\notin\Lambda$ by [F3]. Put $t:=\wp(z_1+z_2)$; the secant slope $(y_2-y_1)/(x_2-x_1)$ equals $m$. Step 2.1 applies to $(z_1,z_2)$ and gives $\wp'(z_1+z_2)=-y_1+m(x_1-t)$, while [F6] gives $t=-x_1-x_2+\tfrac14m^2$. By the sum relation above, $x_3=m^2/4-x_1-x_2=t$, so $P_3$ has $x$-coordinate $t$, and its $y$-coordinate is $y_3=mx_3+b=mt+y_1-mx_1=y_1+m(t-x_1)=y_1-m(x_1-t)=y_1-\bigl(\wp'(z_1+z_2)+y_1\bigr)=-\wp'(z_1+z_2)$. Thus $P_3=\bigl(\wp(-z_1-z_2),\wp'(-z_1-z_2)\bigr)=\Phi([-z_1-z_2])$ by the parity of $\wp$ and $\wp'$ [F2], and by step 1.1 $P_1\oplus P_2\oplus P_3=\Phi\bigl([z_1]+[z_2]+[-z_1-z_2]\bigr)=\Phi([0])=O$. [F2, F3, F5, F6, F7, F13, step 1.1, step 1.3, step 1.5, step 2.1, algebra]

4.1 (Nonvertical lines with a repeated intersection: the tangent case.) Let $L=\{Y=mX+bZ\}$ and suppose $P_L$ has a repeated root $x$; put $y:=mx+b$ and $P:=(x,y)$. By step 3.2 the multiplicity of $L$ at $P$ equals the multiplicity of the root $x$, so it is at least $2$; in particular $y\ne0$, since a point with $y=0$ has multiplicity $1$ by step 3.2. Choose $z\in\mathbb C$ with $\Phi([z])=P$ [F7]; then $z\notin\Lambda$, $x=\wp(z)$, $y=\wp'(z)\ne0$ and $2z\notin\Lambda$ by [F3]. Because the root is repeated, $P_L'(x)=2m(mx+b)-p'(x)=0$, so $2my=p'(x)=12x^2-g_2=2\wp''(z)$ by step 1.2, that is $m=\wp''(z)/\wp'(z)$. Step 3.1 gives $\wp'(2z)=-y+m\bigl(x-\wp(2z)\bigr)$, that is $m\,\wp(2z)+b=m\,\wp(2z)+y-mx=y-m\bigl(x-\wp(2z)\bigr)=y-\bigl(\wp'(2z)+y\bigr)=-\wp'(2z)$. Hence the point $R:=\bigl(\wp(2z),-\wp'(2z)\bigr)=\Phi([-2z])$ (parity [F2]; both coordinates are finite because $2z\notin\Lambda$) lies on $L$ and on $C_\Lambda$, so its $x$-coordinate $\wp(2z)$ is a root of $P_L$ by step 3.2. Since $\deg P_L=3$ and $x$ is a root of multiplicity at least $2$ [F13], Vieta's formula of [F13] gives its residual root $t_3=m^2/4-2x$, including when $t_3=x$. Taking the diagonal limit $w\to z$ in [F6] is legitimate because $y=\wp'(z)\ne0$: Taylor expansion [F9] gives $(\wp'(z)-\wp'(w))/(\wp(z)-\wp(w))\to\wp''(z)/\wp'(z)=m$, and $2z\notin\Lambda$ makes $\wp$ continuous there. Hence $\wp(2z)=-2x+m^2/4=t_3$. Thus $R=\Phi([-2z])$ is exactly the residual intersection; if $t_3=x$ the root is triple and the divisor is $3P=2P+R$, while otherwise it is $2P+R$. In both cases step 1.1 and $\Phi([0])=O$ give $2P\oplus R=\Phi\bigl([z]+[z]+[-2z]\bigr)=\Phi([0])=O$. [F2, F3, F5, F7, F9, F13, step 1.1, step 1.2, step 1.5, step 3.1, step 3.2, algebra]

5.1 (Assembly.) Every projective line is the zero set of a nonzero linear form $\alpha X+\beta Y+\gamma Z$ [F15]. If $\beta=0$ the line contains $O$: it is $\{Z=0\}$ when $\alpha=0$, and $\{X=cZ\}$ with $c=-\gamma/\alpha$ when $\alpha\ne0$. If $\beta\ne0$ it is $\{Y=mX+bZ\}$ with $m=-\alpha/\beta$ and $b=-\gamma/\beta$, and it does not contain $O$. Hence every projective line falls under step 3.2, step 4.1, step 2.2 or step 2.3, and in each case the intersection divisor $Q_1+Q_2+Q_3$, written with multiplicities, satisfies $Q_1\oplus Q_2\oplus Q_3=O$: this is assertion 1. Reading a secant with distinct points $P,Q$ and third intersection $R$ as the divisor $P+Q+R$, and a tangent with contact point $P$ and residual point $R$ as $2P+R$ (step 3.2, step 4.1 and step 2.2), the group identity in the abelian group $(C_\Lambda,\oplus)$ of step 1.1 gives $P\oplus Q=\ominus R=-R$ and $2P=\ominus R=-R$; step 2.2 gives the vertical case $P,-P,O$ with multiplicity two at a half-period point, and step 2.3 gives the line at infinity $3O$. This is assertion 2. Finally assertion 3 is step 1.1: $\Phi([z]+[w])=\Phi([z])\oplus\Phi([w])$ for all $z,w$, and $\Phi$ is a bijection [F7], so $\Phi$ is a group isomorphism. ∎ [F7, F15, step 1.1, step 3.2, step 4.1, step 2.2, step 2.3]












## Remarks

The point of the proof is that the group law is not postulated on the cubic: it is transported from the torus along the biholomorphism $\Phi$, so associativity and the identity cost nothing, and the content of the theorem is the agreement of the transported law with the line construction. For a nonvertical secant the third intersection point has $x$-coordinate $\tfrac14m^2-x_1-x_2$ by Vieta, which the addition formula identifies with $\wp(z_1+z_2)$, and the differentiated addition identity supplies the sign of its $y$-coordinate; this is the algebraic form of the classical statement that the third point is $\Phi(-z_1-z_2)$. Repeated intersections are handled by the same two identities evaluated on the diagonal, which is legitimate because the derivative quotients extend continuously; the vertical and infinity cases are the two lines through $O$ missed by the nonvertical normal form, and their multiplicities come from the local parameter $u$ and the graph at $O$. Nothing here uses the sigma function or the Weierstrass product; the only analytic inputs are the addition formula, the cubic differential equation and the local structure of the smooth cubic.
