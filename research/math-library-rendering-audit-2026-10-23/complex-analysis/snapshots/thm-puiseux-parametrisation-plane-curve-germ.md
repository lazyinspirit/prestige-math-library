---
id: thm-puiseux-parametrisation-plane-curve-germ
kind: theorem
title: "Convergent Puiseux parametrisation of an irreducible plane branch"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-connected-cover-of-a-simply-connected-space-is-trivial
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-connected-space
  - def-convex-subset-of-euclidean-space
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-discriminant-and-branch-locus-weierstrass-hypersurface
  - def-irreducible-hypersurface-germ
  - def-regular-holomorphic-germ
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-simply-connected
  - def-weierstrass-polynomial
  - lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve
  - lem-connected-subsets-and-separated-sets
  - lem-prepared-factorizations-and-irreducibility
  - lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-convex-subsets-have-trivial-fundamental-group
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-holomorphic-germ-ring-is-a-ufd
  - thm-holomorphic-implicit-function-theorem
  - thm-identity-theorem-in-several-complex-variables
  - thm-induced-fundamental-group-map-functoriality
  - thm-local-irreducible-decomposition-hypersurface-germ
  - thm-path-connected-implies-connected
  - thm-power-series-expansion-in-several-complex-variables
  - thm-removable-singularity-characterizations
  - thm-weierstrass-preparation-theorem
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Theorem 6.7.6 Puiseux parametrisation: a monic reduced W factors through the slit disc and Riemann removability extends the lifted branch to h(ξ) with W(ξ^k,h(ξ))=0 (p. 195); Exercise 6.7.5 injectivity and surjectivity of the parametrisation for an irreducible Weierstrass polynomial (p. 196); Theorem 6.3.3 dependence of the zeros on the parameter and root continuity (p. 178)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Exercise 11.8 Puiseux expansions y = g_j(x^{1/q_j}) with q_j the sheet number of the branch (p. 128); II (4.19) finite preparation and the unramified covering over the discriminant complement (p. 95); II (6.6) zero sets of Weierstrass polynomials (pp. 106–107)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $X$ be an irreducible complex-analytic hypersurface germ at the origin of
$\mathbb C^2$, with reduced defining germ $f$
([[def-complex-analytic-hypersurface-germ-and-reduced-equation]],
[[def-irreducible-hypersurface-germ]]). Then there is an invertible
complex-linear change of coordinates of $\mathbb C^2$ with the following
property: in the new coordinates $(x,y)$ there are $\delta>0$, an integer
$m\ge1$ and a holomorphic $h:\Delta_\delta(0)\to\mathbb C$ such that

$$h(t)=\sum_{k>m}a_kt^k,\qquad \gamma(t):=(t^m,h(t))\quad(|t|<\delta),$$

and $\gamma$ is injective on $\Delta_\delta(0)$ with image germ exactly $X$.
Call such a parametrisation **primitive** when its exponent $m$ is minimal
among the exponents $k\ge1$ of all parametrisations $s\mapsto(s^k,j(s))$ of the
same germ in the same coordinates. Every primitive parametrisation is
injective, and in fixed coordinates two primitive parametrisations with the
same first component $t\mapsto t^m$ differ only by the reparametrisation
$t\mapsto\zeta t$ with a constant $\zeta$ satisfying $\zeta^m=1$.

## Facts & Assumptions

**Given:** An irreducible complex-analytic hypersurface germ $X=(Z(f),0)$ in $\mathbb C^2$ with reduced defining germ $f$.

[F1] On a small polydisc around $0$ the germ $f$ has an absolutely convergent power-series expansion $f(z)=\sum_\alpha c_\alpha z^\alpha$ with uniquely determined coefficients ([[thm-power-series-expansion-in-several-complex-variables]]). Since $f$ is a nonzero nonunit, the set of multi-indices with $c_\alpha\ne0$ is nonempty and has a least total degree; write $m:=\operatorname{ord}_0f$ for it and $f_m:=\sum_{|\alpha|=m}c_\alpha z^\alpha$ for the nonzero homogeneous part of degree $m$ ([[def-reduced-holomorphic-germ-for-hypersurface]]).

[F2] The local irreducible-decomposition theorem factors the reduced germ as $f=u q_1\cdots q_r$ with pairwise nonassociate irreducibles and identifies the $Z(q_i)$ as the irreducible components of $X$ ([[thm-local-irreducible-decomposition-hypersurface-germ]]). Since $X$ is irreducible, $r=1$: if $r\ge2$, then $X=Z(q_1)\cup Z(\prod_{i=2}^r q_i)$ is a union of two proper hypersurface subgerms. The first is proper because the components are pairwise incomparable; the second is proper because otherwise $Z(q_1)\subseteq Z(\prod_{i=2}^r q_i)$, so $\prod_{i=2}^r q_i$ vanishes on $Z(q_1)$ and the vanishing-ideal lemma gives $q_1\mid\prod_{i=2}^r q_i$, impossible by unique factorisation ([[def-irreducible-hypersurface-germ]], [[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]], [[thm-holomorphic-germ-ring-is-a-ufd]]). Thus $f$ is associate to the single irreducible germ $q_1$ and is algebraically irreducible.

[F3] A germ regular in the last variable of order $d$ is a unit times a Weierstrass polynomial of degree $d$, monic with lower coefficients vanishing at the origin ([[thm-weierstrass-preparation-theorem]], [[def-weierstrass-polynomial]], [[def-regular-holomorphic-germ]]).

[F4] Let $W(x,T)=T^m+\sum_{j<m}a_j(x)T^j$ be a reduced irreducible Weierstrass polynomial of degree $m\ge1$. The connected-cover lemma gives $\varepsilon>0$ such that, on $D^*=\{x:0<|x|<\varepsilon\}$, its zero set is a connected $m$-sheeted unramified covering and every zero tends to the origin as $x\to0$ ([[lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve]]). Shrink $\varepsilon$ so the coefficient functions are holomorphic on a neighbourhood of the closed disc $|x|\le\varepsilon$; let $M:=\max_{j<m,\,|x|\le\varepsilon}|a_j(x)|$. The uniform monic root bound gives $|T|\le1+M$ for every root over this disc: for $|T|>1+M$, the sum of the lower terms has modulus at most $M(|T|^m-1)/(|T|-1)<|T|^m$. Choose $D_y=\{|T|<2+M\}$. It contains every root, so $F:=Z(W)\cap(D^*\times D_y)$ is the full connected $m$-sheeted covering and every fibre has exactly $m$ distinct points.

[F5] A covering map has fibres whose points lie in pairwise disjoint sheets, each mapped homeomorphically onto an evenly covered open set ([[def-covering-map-and-evenly-covered-neighbourhoods]]). Restrictions of coverings to open subspaces are again covering maps ([[prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback]]).

[F6] Every connected covering of a locally path-connected simply connected space is one-sheeted and trivial ([[cor-connected-cover-of-a-simply-connected-space-is-trivial]]), where simple connectivity means nonempty, path-connected and trivial fundamental group ([[def-simply-connected]]).

[F7] Every nonempty convex subset of $\mathbb R^n$ is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]); convexity is the segment condition of [[def-convex-subset-of-euclidean-space]].

[F8] A continuous map of pointed spaces induces a group homomorphism of fundamental groups, and this assignment is functorial for compositions: $(g\circ f)_*=g_*\circ f_*$ ([[thm-induced-fundamental-group-map-functoriality]]).

[F9] A holomorphic function on a punctured disc that is bounded extends holomorphically across the puncture ([[thm-removable-singularity-characterizations]]).

[F10] A holomorphic function on a connected open set in several variables that vanishes on a nonempty open subset vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]); this applies in particular to the connected punctured disc.

[F11] If $W=W_1W_2$ with $W_1$, $W_2$ Weierstrass polynomials of positive degree, then $W$ is reducible in $\mathcal O_{\mathbb C^2,0}$ ([[lem-prepared-factorizations-and-irreducibility]]).

[F12] If $x_0\in D^*$ and $\tau$ is a simple root of $W(x_0,\cdot)$, then near $(x_0,\tau)$ the zero set of $W$ is the graph of the unique holomorphic function $\varphi$ with $W(x,\varphi(x))=0$ and $\varphi(x_0)=\tau$ ([[thm-holomorphic-implicit-function-theorem]], [[def-discriminant-and-branch-locus-weierstrass-hypersurface]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[F13] A monic polynomial of degree $m$ over $\mathbb C$ has exactly $m$ roots counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F14] For $n\ge2$, if $\Omega\subseteq\mathbb R^n$ is nonempty, open and connected and $y\in\Omega$, then $\Omega\setminus\{y\}$ is nonempty, open, connected and path-connected ([[lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness]]). The disc $\Delta_\delta\subseteq\mathbb C\cong\mathbb R^2$ is convex, hence simply connected by [F7], hence path-connected and connected ([[thm-path-connected-implies-connected]]).

[F15] A connected space admits no decomposition $A=A_1\cup A_2$ into two nonempty separated sets, $\overline{A_1}\cap A_2=\varnothing=A_1\cap\overline{A_2}$ ([[lem-connected-subsets-and-separated-sets]], [[def-connected-space]]); consequently, if a connected space is the union of finitely many pairwise disjoint closed subsets, one of them is the whole space.

**Proof technique:** direct — prepare in coordinates adapted to the lowest-order part, trivialise the connected covering over a slit disc, glue one holomorphic root from the monodromy cycle, and read off injectivity, the order condition and uniqueness.

## Proof
1.1 Write $f_m$ for the lowest-order part of [F1]. Since $f_m$ is a nonzero homogeneous polynomial, there is a vector $w$ with $f_m(w)\ne0$; choose such a $w$ and use complex-linear coordinates $(x,y)$ whose $y$-axis is the line $\mathbb C w$. Then the one-variable slice satisfies $f(0,\zeta)=f(\zeta w)=\zeta^mf_m(w)+O(\zeta^{m+1})$, so $f$ is regular in $y$ of order exactly $m$. [given, F1, F2, choose, algebra]

2.1 By [F3] the germ of step 1.1 is $f=uW$, where $u$ is a unit and $W$ is a Weierstrass polynomial of degree $m$ in $y$ with $W(0,T)=T^m$. Since $W$ is associate to $f$ it is reduced, and it is irreducible in $\mathcal O_{\mathbb C^2,0}$: by [F2] the germ $f$ is irreducible, and if $W=W_1W_2$ with nonunit factors, then after preparing the two factors with [F3] the product of the resulting Weierstrass polynomials is $W$ up to a unit, so [F11] makes $f$ reducible, a contradiction. [step 1.1, F2, F3, F11]

3.1 Apply [F4] to the polynomial $W$ of step 2.1: after shrinking $\varepsilon$ if necessary there is a disc $D_y$ such that $F=Z(W)\cap(D^*\times D_y)$, $D^*=\{x:0<|x|<\varepsilon\}$, is a connected $m$-sheeted unramified covering of $D^*$, all zeros tend to the origin over the base point, and every fibre of $F\to D^*$ consists of $m$ distinct points. [step 2.1, F4, F13]

4.1 Put $D_\varepsilon:=\{|x|<\varepsilon\}$, let $N:=\{x\in\mathbb C:\operatorname{Im}x=0,\ \operatorname{Re}x\le0\}$ be the closed negative real axis, and set $\Omega:=D_\varepsilon\setminus N\subseteq D^*$, an open subset. The map $\varphi(w):=w^2$ is a homeomorphism from the convex half-disc $H:=\{w:\operatorname{Re}w>0,\ |w|<\sqrt\varepsilon\}$ onto $\Omega$ with continuous inverse the principal square root: $\operatorname{Re}w>0$ gives $w^2\in\Omega$, and every $x\in\Omega$ has principal argument in $(-\pi,\pi)$ and a square root of modulus $\sqrt{|x|}$ and positive real part. By [F7] the nonempty convex set $H$ is simply connected, so [F8] applied to $\varphi$ and to its inverse makes $\varphi_*$ an isomorphism of fundamental groups; hence $\Omega$ is nonempty, path-connected and has trivial fundamental group, that is, simply connected by [F6]. By [F5] the restriction $F_\Omega:=F\cap(\Omega\times D_y)$ is a covering of $\Omega$, with $m$ points in every fibre. Every connected component $C$ of $F_\Omega$ is open and maps onto $\Omega$ as a covering: $p(C)$ is open because $p$ is an open map, and it is closed because over an evenly covered disc a component meeting the preimage of that disc contains a whole sheet; $\Omega$ connected gives $p(C)=\Omega$. Since $C$ is connected and $\Omega$ is simply connected and locally path-connected, [F6] makes $C\to\Omega$ one-sheeted, so $C$ is the graph of a continuous section $\alpha_C:\Omega\to D_y$. Each such section is holomorphic: at $x_0\in\Omega$ the point $(x_0,\alpha_C(x_0))$ is a simple root of the slice $W(x_0,\cdot)$, the fibre being unramified, so [F12] provides a local holomorphic graph through it, which agrees with $\alpha_C$ near $x_0$. Counting the $m$ points of a fibre among the components shows that there are exactly $m$ of them; enumerate them as $\alpha_1,\dots,\alpha_m$. Then $F_\Omega=\bigcup_j\operatorname{graph}(\alpha_j)$ and, both sides being monic of degree $m$ in $T$ with the same $m$ distinct roots at every $x\in\Omega$, the identity $W(x,T)=\prod_{j=1}^m(T-\alpha_j(x))$ holds on $\Omega\times\mathbb C$. [step 3.1, F5, F6, F7, F8, F12, F13, construct, algebra]

5.1 Fix $x_1\in N\setminus\{0\}$ and choose a disc $U\subset D^*$ centered at $x_1$ that meets the slit in an open segment. Since $U$ is convex and simply connected, the restriction of the covering to $U$ is a disjoint union of $m$ holomorphic graphs $\beta_1,\dots,\beta_m:U\to D_y$, by [F5], [F6] and [F12]. Put $U^+=U\cap\{\operatorname{Im}x>0\}$ and $U^-=U\cap\{\operatorname{Im}x<0\}$. These half-discs are connected; on each half every $\beta_k$ agrees with one section $\alpha_j$. Relabel so that on $U^+$, $\beta_k=\alpha_k$. On $U^-$ it agrees with a unique $\alpha_{\sigma_{x_1}(k)}$, and the resulting map $\sigma_{x_1}$ is a permutation because the graphs are disjoint and enumerate each fibre. On overlapping discs, the graph continuations agreeing on the upper half-overlap agree throughout the overlap by the identity theorem, so the local permutations agree. Thus $\sigma_{x_1}$ is locally constant along the connected slit $N\setminus\{0\}$ and defines a single permutation $\sigma$, with continuation from the upper side to the lower side sending $\alpha_k$ to $\alpha_{\sigma(k)}$. [step 4.1, F5, F6, F7, F10, F12, construct]

6.1 $\sigma$ is transitive. Suppose instead that $O\subseteq\{1,\dots,m\}$ is a $\sigma$-orbit with $1\le|O|<m$, and let $O'$ be its complement, also $\sigma$-invariant. For $x\in\Omega$ put $W_1(x,T):=\prod_{j\in O}(T-\alpha_j(x))$ and $W_2(x,T):=\prod_{j\in O'}(T-\alpha_j(x))$; their coefficients are holomorphic on $\Omega$, and $W=W_1W_2$ there by step 4.1. Crossing the slit permutes the factors of $W_1$ among themselves by step 5.1, so each coefficient of $W_1$ continues across $N\setminus\{0\}$ to itself; together with the local graphs $\beta_k$ of step 5.1 the coefficients glue to holomorphic functions on $D^*$, and each of them is bounded on $D^*$, being an elementary symmetric function of $|O|$ roots that all lie in the bounded disc $D_y$. By [F9] the coefficients extend holomorphically across $x=0$. Moreover for every $\eta>0$ all roots of $W_1(x,\cdot)$ satisfy $|y|<\eta$ once $|x|$ is small enough: otherwise there are $x_n\to0$ and roots $y_n$ of $W_1(x_n,\cdot)$ with $|y_n|\ge\eta$, which are zeros of $W$ and contradict the limit property of [F4]. Hence every coefficient of $W_1$ vanishes at $x=0$, by the elementary-symmetric bound for $|O|$ numbers of modulus $<\eta$ on $0<|x|<\rho(\eta)$ and $\eta\to0$; thus $W_1$ is a Weierstrass polynomial of degree $|O|\ge1$, and in the same way $W_2$ is a Weierstrass polynomial of degree $m-|O|\ge1$. On $D^*$ the monic degree-$m$ polynomials $W$ and $W_1W_2$ have the same $m$ distinct roots, hence coincide; at $x=0$ both equal $T^m$, so $W=W_1W_2$ on $D_\varepsilon\times\mathbb C$, and [F11] makes $W$ reducible in $\mathcal O_{\mathbb C^2,0}$, contradicting step 2.1. Therefore no such $O$ exists and $\sigma$ is transitive. [step 5.1, step 4.1, step 2.1, F4, F9, F10, F11, F13, assume-contra, discharge-contradiction]

7.1 A transitive permutation of the finite set $\{1,\dots,m\}$ is a single cycle of length $m$: its orbits are the cycles, and transitivity says that there is exactly one orbit. Hence $\sigma^m$ is the identity and $\sigma^k(1)=1$ exactly when $m$ divides $k$. [step 6.1, algebra]

8.1 Let $\zeta:=e^{2\pi i/m}$ and $\delta:=\varepsilon^{1/m}$, so $|t|<\delta$ implies $|t^m|<\varepsilon$. Set $S_0:=\{t:0<|t|<\delta,\ -\pi/m<\arg t<\pi/m\}$ and $S_k:=\zeta^kS_0$ for $k=0,\dots,m-1$. These are disjoint sectors whose union is the punctured disc minus the $m$ boundary rays, and $t\in S_k$ implies $t^m\in\Omega$. Define $g(t):=\alpha_{\sigma^k(1)}(t^m)$ on $S_k$. Across each boundary ray the base crosses the slit from its upper side to its lower side, so step 5.1 makes the adjacent definitions the same local implicit-function graph; they glue holomorphically on the punctured disc. For $s\in S_0$ this gives $g(\zeta^j s)=\alpha_{\sigma^j(1)}(s^m)$ for $0\le j<m$, denoted (8.1.1). At a boundary point $t_0$, put $x_0=t_0^m\in N\setminus\{0\}$. The simple roots at $x_0$ have $m$ disjoint local implicit-function graphs by [F12]. Approaching the $m$ boundary parameters $\zeta^jt_0$ from the side whose base image lies above the slit, their sector labels run through one full $\sigma$-orbit, so they are distinct by step 7.1. Step 5.1 therefore extends $g$ at each boundary parameter as a different local graph; the values $g(\zeta^jt_0)$ are the $m$ distinct roots of $W(x_0,\cdot)$. [step 5.1, step 7.1, F5, F7, F10, F12, construct, algebra]

9.1 The function $g$ is bounded on $\Delta_\delta\setminus\{0\}$: every value $g(t)$ is one of the $m$ roots of the monic polynomial $W(t^m,\cdot)$ of degree $m$, and all roots of $W(x,\cdot)$ for $x\in D^*$ lie in the bounded disc $D_y$ of [F4]. Since $W(t^m,g(t))=0$ for $0<|t|<\delta$ and $g$ is bounded, [F9] extends $g$ holomorphically to $\Delta_\delta$; the limit value is $g(0)=0$, because every zero of $W$ tends to the origin as $x=t^m\to0$ by [F4]. [step 8.1, step 3.1, F4, F9, algebra]

10.1 Define $\gamma(t):=(t^m,g(t))$ on $\Delta_\delta$. If $\gamma(t_1)=\gamma(t_2)$ and $t_1\ne0$, then $t_2=\zeta^jt_1$ for some $0\le j<m$. If $t_1$ is on a boundary ray, step 8.1 says that the values $g(\zeta^jt_1)$ for $0\le j<m$ are pairwise distinct, so equality forces $j=0$. Otherwise choose $r$ with $s:=\zeta^{-r}t_1\in S_0$. By (8.1.1), $g(t_1)=\alpha_{\sigma^r(1)}(s^m)$ and $g(t_2)=\alpha_{\sigma^{r+j}(1)}(s^m)$. The $m$ fibre values are distinct by step 3.1, so equality forces $\sigma^j(1)=1$; step 7.1 gives $m\mid j$, hence $j=0$. If $t_1=0$ and $\gamma(t_2)=\gamma(0)$, then $t_2^m=0$ and $t_2=0$. Therefore $\gamma$ is injective. [step 9.1, step 8.1, step 7.1, step 3.1, algebra]

11.1 The image of $\gamma$ is a full representative of $X$. For $x\in D_\varepsilon^*\setminus N$, choose the unique $s\in S_0$ with $s^m=x$; (8.1.1) and the $m$-cycle $\sigma$ show that the values $g(\zeta^js)$ enumerate the $m$ roots of $W(x,\cdot)$, so the image of $\gamma$ contains the full fibre. If $x\in N\setminus\{0\}$, choose any $t_0$ with $t_0^m=x$. The parameters $\zeta^jt_0$ lie on the boundary rays; by step 8.1 their $g$-values are $m$ distinct roots of $W(x,\cdot)$, hence enumerate its full degree-$m$ fibre. At $x=0$, the only point of $Z(W)$ is $(0,0)$ because $W(0,T)=T^m$, and $\gamma(0)=(0,0)$ by step 9.1. Therefore $\gamma(\Delta_\delta)=Z(W)\cap(D_\varepsilon\times D_y)$. On a neighbourhood of $0$ the unit $u$ in $f=uW$ does not vanish, so $Z(W)=Z(f)$ there and this image is a full representative of the germ $X$. [step 10.1, step 9.1, step 8.1, step 7.1, step 3.1, step 2.1, F13, algebra]

12.1 The order of $g$ is $0$, or at least $m$: either $g\equiv0$, or $n:=\operatorname{ord}_0g\ge m$. Indeed, suppose $g$ is not identically zero and $1\le n<m$. Since $\gamma$ takes values in $Z(W)=Z(f)$ near the origin by step 11.1, the holomorphic germ $f\circ\gamma$ vanishes identically. Write $f=f_m+(\text{terms of order}>m)$ as in [F1]; by construction of the $y$-axis in step 1.1 the coefficient of $y^m$ in $f_m$ is $f_m(0,1)=f_m(w)\ne0$. Substituting the expansion and $g(t)=a_nt^n+\cdots$ with $a_n\ne0$, the monomial $y^m$ of $f_m$ contributes $f_m(0,1)a_n^mt^{mn}+O(t^{mn+1})$, while every monomial $x^iy^j$ of $f_m$ with $i>0$, $i+j=m$ contributes order $im+jn=mn+i(m-n)>mn$, and every homogeneous part of order $\ell>m$ contributes order at least $\ell n>mn$. Hence $f\circ\gamma$ has exact order $mn<\infty$, contradicting $f\circ\gamma\equiv0$. [step 11.1, step 1.1, step 2.1, F1, algebra]

13.1 If $g\equiv0$ or $\operatorname{ord}_0g>m$, keep the coordinates and put $h:=g$. If $\operatorname{ord}_0g=m$, write $g(t)=a_mt^m+O(t^{m+1})$ with $a_m\ne0$, let $\Phi(x,y):=(x,\ y-a_mx)$ be the invertible complex-linear shear, and put $h(t):=g(t)-a_mt^m$; in the new coordinates $(x',y'):=\Phi(x,y)$ the curve $X$ has defining polynomial $W'(x',y'):=W(x',\ y'+a_mx')$, again a Weierstrass polynomial of degree $m$ with $W'(0,T)=T^m$, reduced and irreducible because $\Phi$ induces an automorphism of $\mathcal O_{\mathbb C^2,0}$, and $\gamma'(t):=(t^m,h(t))=\Phi(\gamma(t))$ satisfies $W'(\gamma'(t))=W(t^m,\ g(t))=0$. In both cases $h$ is holomorphic on $\Delta_\delta$ with $h(t)=\sum_{k>m}a_kt^k$, and the map $\gamma(t)=(t^m,h(t))$ is injective by step 10.1 (in the sheared case it is $\Phi$ composed with the injective $\gamma$, and $\Phi$ is injective). Moreover, for $x=t_0^m\in D^*_\varepsilon$ the fibre of $X$ over $x$ in the final coordinates is $\Phi$ applied to the old fibre, that is, by step 11.1, the set $\{(x,h(\zeta^jt_0)):j=0,\dots,m-1\}$, and the image of $\gamma$ is $\Phi$ of a full representative of $X$, hence again a full representative of $X$. [step 12.1, step 10.1, step 11.1, construct, algebra]

14.1 The exponent $m$ is minimal. Let $\tilde\gamma(s)=(s^k,j(s))$, $k\ge1$, be any parametrisation of the germ $X$ in the coordinates of step 13.1 with $j$ holomorphic near $0$, so that its image contains a full representative of $X$ by step 13.1. Choose a nonzero base value $x_0$ with $|x_0|<\varepsilon$ small enough that the $m$ points of $X$ over $x_0$ lie in that representative; they are distinct by the fibre description of step 13.1 together with the injectivity of step 10.1. Each of these $m$ points equals $\tilde\gamma(s)$ for some $s$ with $s^k=x_0$, and distinct points have distinct parameters, while the monic polynomial $s^k-x_0$ has exactly $k$ roots counted with multiplicity by [F13] and all of them are simple because $x_0\ne0$; hence there are exactly $k$ solutions. Therefore $m\le k$: the parametrisation of step 13.1 is primitive. [step 13.1, step 10.1, F13, algebra]

14.2 Let $\tilde\gamma(t)=(t^m,j(t))$ be any parametrisation of $X$ in the coordinates of step 13.1, defined on $|t|<\eta$ with $\eta^m<\varepsilon$. For $t_0\in\Delta_\eta\setminus\{0\}$ the point $\tilde\gamma(t_0)$ lies in $X$ over $x=t_0^m$, so by the fibre description of step 13.1 there is an index $\ell$ with $j(t_0)=h(\zeta^\ell t_0)$; hence the sets $S_\ell:=\{t\in\Delta_\eta\setminus\{0\}:j(t)=h(\zeta^\ell t)\}$, $\ell=0,\dots,m-1$, are closed, cover the punctured disc, and are pairwise disjoint: if $t$ lay in $S_\ell\cap S_{\ell'}$ with $\ell\ne\ell'$, then the distinct points $\zeta^\ell t,\zeta^{\ell'}t$ would satisfy $\gamma(\zeta^\ell t)=(t^m,h(\zeta^\ell t))=(t^m,j(t))=\gamma(\zeta^{\ell'}t)$, contradicting step 10.1. The punctured disc is connected by [F14], so [F15] shows that one $S_\ell$ is everything: there is an $m$-th root of unity $\zeta_0$ with $j(t)=h(\zeta_0t)$ for all $t\ne0$ in $\Delta_\eta$. Then $\tilde\gamma$ is injective: if $\tilde\gamma(t_1)=\tilde\gamma(t_2)$ with $t_1\ne0$, then $t_2=\zeta^rt_1$ and $j(t_2)=j(t_1)$ give $h(\zeta_0\zeta^rt_1)=h(\zeta_0t_1)$, so $\gamma(\zeta_0\zeta^rt_1)=\gamma(\zeta_0t_1)$ and step 10.1 forces $\zeta^rt_1=t_1$, that is $t_2=t_1$; and $t_1=0$ gives $t_2^m=0$, $t_2=0$. [step 13.1, step 10.1, F14, F15, algebra]

15.1 Steps 1.1 and 8.1–13.1 give the invertible complex-linear change of coordinates, the integer $m\ge1$ and the holomorphic $h(t)=\sum_{k>m}a_kt^k$ with injective $\gamma(t)=(t^m,h(t))$ whose image germ is exactly $X$; step 14.1 shows that $m$ is minimal among the exponents of parametrisations $s\mapsto(s^k,j(s))$ of the germ in these coordinates, and step 14.2 shows that every such parametrisation with first component $t\mapsto t^m$ equals $t\mapsto(t^m,h(\zeta_0t))$ for an $m$-th root of unity $\zeta_0$ and is injective. This is the asserted convergent Puiseux parametrisation, obtained without any formal-series step. [step 1.1, step 8.1, step 9.1, step 10.1, step 11.1, step 12.1, step 13.1, step 14.1, step 14.2] ∎
