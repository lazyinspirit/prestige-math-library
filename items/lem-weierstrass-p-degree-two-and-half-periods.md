---
id: lem-weierstrass-p-degree-two-and-half-periods
kind: lemma
title: "Degree two of ℘ and its four branch points"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
  - def-weierstrass-elliptic-p-function
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - def-elliptic-function-for-a-lattice
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-riemann-surface-and-holomorphic-atlas
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - cor-euclidean-spheres-are-path-connected
  - thm-continuous-image-of-a-connected-space
  - thm-rational-points-and-boxes-in-rn
  - prop-second-countability-is-hereditary
  - def-second-countable-space
  - def-topology-basis-subbasis
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - def-ramification-index-and-branch-value
  - def-local-degree-holomorphic-map
  - thm-zero-order-factorization-holomorphic-function
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compact-subset-of-a-hausdorff-space-is-closed
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'The Weierstrass wp-function', printed pp. 43-45: wp is even and doubly periodic with the lattice poles, and its derivative vanishes at the half-periods."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, Theorem 5.4 and Corollary 5.5, printed pp. 82-83: the degree-two quotient of the torus by z ~ -z and the three distinct finite branch values."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(iii), equations 23.2.9-23.2.10: the periods of wp and the half-period zeros of wp'."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full complex lattice with
oriented basis $(\omega_1,\omega_2)$
([[def-complex-lattice-and-complex-torus]]), let $T_\Lambda=\mathbb C/\Lambda$
be its torus with class map $\pi:\mathbb C\to T_\Lambda$, $\pi(z)=[z]$, let
$\wp=\wp_\Lambda$ be the Weierstrass function
([[def-weierstrass-elliptic-p-function]]), and let
$\bar\wp:T_\Lambda\to\widehat{\mathbb C}$ be its torus form, characterized by
$\bar\wp\circ\pi=\wp$ ([[def-elliptic-function-for-a-lattice]]); this is the
meromorphic map denoted $\wp:T_\Lambda\to\widehat{\mathbb C}$ in the title. Put

$$h_1:=\tfrac{\omega_1}{2},\qquad h_2:=\tfrac{\omega_2}{2},\qquad h_3:=\tfrac{\omega_1+\omega_2}{2},\qquad e_j:=\wp(h_j)\in\mathbb C,\quad j=1,2,3 .$$

Then:

1. $\bar\wp$ has **degree two**: with $e_x(\bar\wp)$ the ramification index
   ([[def-ramification-index-and-branch-value]]),
   $$\sum_{x\in\bar\wp^{-1}(a)}e_x(\bar\wp)=2\qquad\text{for every }a\in\widehat{\mathbb C};$$
2. for all $z,w\in\mathbb C$ one has $\wp(z)=\wp(w)$ in
   $\widehat{\mathbb C}$ if and only if $w\equiv z$ or $w\equiv-z$ modulo
   $\Lambda$;
3. the critical points (the **branch points** of the title) of $\bar\wp$ are
   exactly the class $[0]$ and the three distinct nonzero half-period classes
   $[h_1]$, $[h_2]$, $[h_3]$; equivalently $\bar\wp$ is ramified exactly at
   those four classes, with branch values $\bar\wp([0])=\infty$ and the three
   distinct values $e_1,e_2,e_3$;
4. the derivative $\wp'$ has exactly one **simple** zero at each nonzero
   half-period: $\wp'(h)=0$ for every $h\in\mathbb C\setminus\Lambda$ with
   $2h\in\Lambda$, and the zeros of $\wp'$ are precisely the $\Lambda$-translates
   of $h_1,h_2,h_3$, each of order one, with no other zeros modulo $\Lambda$.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis $(\omega_1,\omega_2)$, the torus $T_\Lambda=\mathbb C/\Lambda$ with class map $\pi(z)=[z]$, the Weierstrass function $\wp=\wp_\Lambda$ and its torus form $\bar\wp$ with $\bar\wp\circ\pi=\wp$, the points $h_1=\omega_1/2$, $h_2=\omega_2/2$, $h_3=(\omega_1+\omega_2)/2$ and the values $e_j=\wp(h_j)$.

[F1] $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ is a subgroup of $\mathbb C$ with $\omega_1,\omega_2$ real-linearly independent, and $T_\Lambda=\mathbb C/\Lambda=\{[z]:z\in\mathbb C\}$ carries the quotient topology of the class map $\pi$ ([[def-complex-lattice-and-complex-torus]]).

[F2] The charts inverse to the injective restrictions of $\pi$ to small balls form a holomorphic atlas on $T_\Lambda$; $T_\Lambda$ is Hausdorff, second countable and compact, hence a compact Riemann surface; and $\pi:\mathbb C\to T_\Lambda$ is a holomorphic covering map ([[thm-complex-torus-quotient-is-well-defined]]).

[F3] $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$, even, so $\wp(-z)=\wp(z)$ for all $z\in\mathbb C\setminus\Lambda$, and $\Lambda$-periodic, so $\wp(z+\lambda)=\wp(z)$ for all $z\in\mathbb C$ and $\lambda\in\Lambda$ with poles matched; at each lattice point $\lambda\in\Lambda$ it has a double pole with principal part $(z-\lambda)^{-2}$ and it has no other poles; further $\wp'(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$ on $\mathbb C\setminus\Lambda$ with that series normally convergent, and $\wp'$ is odd and $\Lambda$-elliptic ([[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F4] $\wp$ is a $\Lambda$-elliptic function and is the pullback $\wp=g\circ\pi$ of a unique meromorphic function $g:T_\Lambda\to\widehat{\mathbb C}$, the torus form; conversely a meromorphic $g$ on $T_\Lambda$ pulls back to a $\Lambda$-elliptic function ([[def-elliptic-function-for-a-lattice]]).

[F5] A meromorphic function on a Riemann surface $X$ is a holomorphic map $X\to\widehat{\mathbb C}$ that is not the constant map with value $\infty$; every holomorphic map of Riemann surfaces is continuous ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F6] (a) The standard charts of the Riemann sphere are $\phi_0(z)=z$ on $\mathbb C$ and $\phi_\infty:\widehat{\mathbb C}\setminus\{0\}\to\mathbb C$ with $\phi_\infty(z)=1/z$ for $z\in\mathbb C^\times$ and $\phi_\infty(\infty)=0$, and on the overlap $\mathbb C^\times$ the transition maps are $w\mapsto1/w$ in both directions, hence holomorphic ([[def-riemann-sphere-holomorphic-charts]]). (b) Stereographic projection $\Sigma:\widehat{\mathbb C}\to S^2$, $\Sigma(\infty)=(0,0,1)$, is a homeomorphism onto the unit sphere $S^2\subseteq\mathbb R^3$ ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]); $\widehat{\mathbb C}$ is compact Hausdorff with $\mathbb C$ an open subspace ([[rem-riemann-sphere-one-point-compactification]]); $S^2$ is connected ([[cor-euclidean-spheres-are-path-connected]]); and $\widehat{\mathbb C}$ is second countable: the rational open boxes form a countable basis of $\mathbb R^3$, so the subspace $S^2$ is second countable ([[thm-rational-points-and-boxes-in-rn]], [[prop-second-countability-is-hereditary]], [[def-second-countable-space]]), and a homeomorphism transports a countable basis ([[def-topology-basis-subbasis]]). (c) A Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas of pairwise compatible charts, each chart being a homeomorphism onto an open subset of $\mathbb C$ ([[def-riemann-surface-and-holomorphic-atlas]]).

[F7] If $f:X\to Y$ is a nonconstant proper holomorphic map between connected Riemann surfaces, then $f$ is onto, every fibre $f^{-1}(y)$ is nonempty and finite, and $d(y):=\sum_{x\in f^{-1}(y)}e_x(f)$ is a positive finite integer independent of $y$, the degree $d=\deg f$ ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F8] For a nonconstant holomorphic map $f:X\to Y$ of Riemann surfaces and $x\in X$, there are centred charts with chart expression $z\mapsto z^{e_x(f)}$ for the unique positive integer $e_x(f)$, and $e_x(f)=\deg_x(\psi\circ f\circ\varphi^{-1})=\operatorname{ord}_x(f-f(x))$ in any centred charts; $e_x(f)=1$ exactly when $f$ is a local biholomorphism at $x$; $x$ is a **critical point** when $e_x(f)>1$, and a **branch value** is the image $f(x)$ of a critical point ([[def-ramification-index-and-branch-value]]).

[F9] For a nonconstant holomorphic function $F$ on a complex domain and a point $a$ in it, the local degree $\deg_a F:=\operatorname{ord}_a(F-F(a))$ is a positive natural number ([[def-local-degree-holomorphic-map]]).

[F10] A holomorphic function on a neighbourhood of $a$ has finite order $m$ at $a$ if and only if on some neighbourhood of $a$ it has the form $f(z)=(z-a)^mg(z)$ with $g$ holomorphic and $g(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F11] Complex derivatives are linear, satisfy the product rule $(fg)'=f'g+fg'$ and the reciprocal rule, and constant functions have derivative $0$ while the identity has derivative $1$; the chain rule $(g\circ f)'(a)=g'(f(a))f'(a)$ holds for composable complex differentiable maps ([[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]]).

[F12] A closed subset of a compact space is compact, and a compact subset of a Hausdorff space is closed ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 (The torus form is a continuous proper map.) By [F3] and [F4], $\wp$ is a $\Lambda$-elliptic function and $\wp=\bar\wp\circ\pi$ with $\bar\wp:T_\Lambda\to\widehat{\mathbb C}$ its torus form, a meromorphic function on the Riemann surface $T_\Lambda$. By [F5] the meromorphic function $\bar\wp$ is a holomorphic, hence continuous, map. Let $K\subseteq\widehat{\mathbb C}$ be compact; since $\widehat{\mathbb C}$ is Hausdorff by [F6], $K$ is closed in $\widehat{\mathbb C}$ by [F12], so $\bar\wp^{-1}(K)$ is closed in $T_\Lambda$ by continuity; and $T_\Lambda$ is compact by [F2], so $\bar\wp^{-1}(K)$ is compact by [F12]. Hence $\bar\wp$ is proper. [F2, F3, F4, F5, F6, F12]

1.2 ($\bar\wp$ is nonconstant, and $h_j\notin\Lambda$.) The point $0$ is a lattice point, so $\wp$ has a pole at $0$ by [F3] and $\bar\wp([0])=\infty$; the points $h_1,h_2,h_3$ are not lattice points: if $h_1=m\omega_1+n\omega_2$ with $m,n\in\mathbb Z$, then $(m-\tfrac12)\omega_1+n\omega_2=0$ with $m-\tfrac12\ne0$, contradicting [F1], and the same computation with $(m,n-\tfrac12)$ and $(m-\tfrac12,n-\tfrac12)$ handles $h_2,h_3$. Since the poles of $\wp$ are exactly the lattice points by [F3], the value $\wp(h_1)$ is finite, so $\bar\wp([h_1])=\wp(h_1)\in\mathbb C$ differs from $\bar\wp([0])=\infty$: the map $\bar\wp$ is nonconstant. [F1, F3, F4]

1.3 (The chart expression of $\bar\wp$ at $[0]$.) By [F2] the covering map $\pi$ is injective on some open ball $U$ around $0$, and $\chi:=(\pi|_U)^{-1}:\pi(U)\to U$ is one of the charts of the atlas of $T_\Lambda$, with $\chi([w])=w$ for $[w]\in\pi(U)$. Take the chart $\phi_\infty$ of [F6] at $\bar\wp([0])=\infty$; the chart expression is $$F(z)=\phi_\infty\bigl(\bar\wp(\chi^{-1}(z))\bigr)=\phi_\infty\bigl(\bar\wp([z])\bigr)=\phi_\infty(\wp(z))\qquad(z\in U),$$ where $\bar\wp([z])=\wp(z)$ uses [F4]. By the principal-part clause of [F3] there is a holomorphic $Q$ on a disc around $0$ with $\wp(z)=z^{-2}+Q(z)$ for $z\ne0$ there; then $z^2\wp(z)=1+z^2Q(z)$ tends to $1$ as $z\to0$, so $u(z):=(1+z^2Q(z))^{-1}$ is holomorphic on a neighbourhood of $0$ by the reciprocal rule of [F11], with $u(0)=1$, and $1/\wp(z)=z^2u(z)$ for $0<|z|$ small. Since also $\phi_\infty(\infty)=0=0^2u(0)$ and $\phi_\infty(\wp(z))=1/\wp(z)$ for $0<|z|$ small, the chart expression satisfies $F(z)=z^2u(z)$ on a neighbourhood of $0$. [F2, F3, F4, F6, F11]

1.4 (The classes of order two.) If $z\in\mathbb C$ has $2z\in\Lambda$, then $2z=m\omega_1+n\omega_2$ with $m,n\in\mathbb Z$, so $z=\tfrac m2\omega_1+\tfrac n2\omega_2$; replacing $m$ by $m+2$ and $n$ by $n+2$ changes $z$ by elements of $\Lambda$, so $[z]$ is one of $[0]$, $[h_1]$, $[h_2]$, $[h_3]$. These four classes are pairwise distinct and $h_1,h_2,h_3\notin\Lambda$: the differences $h_1$, $h_2$, $h_3$, $h_1-h_2=-\tfrac12(\omega_2-\omega_1)$, $h_1-h_3=-\tfrac12\omega_2$ and $h_2-h_3=-\tfrac12\omega_1$ are all non-lattice, because an equation such as $h_1-h_2=m\omega_1+n\omega_2$ reads $(m-\tfrac12)\omega_1+(n+\tfrac12)\omega_2=0$, a nontrivial real-linear combination vanishing, contrary to [F1]; the other cases are identical with the non-integer coefficients $m-\tfrac12$, $n-\tfrac12$, $m+\tfrac12$ in one of the two slots. Hence the only classes $x\in T_\Lambda$ with $x=-x$ are $[0],[h_1],[h_2],[h_3]$, and the last three are distinct nonzero classes. [F1]

1.5 (Ramification index versus the derivative at finite points.) Let $z\in\mathbb C\setminus\Lambda$. The chart expression of $\bar\wp$ in a source chart inverse to $\pi$ near $z$ and the centered target chart $\psi_{\wp(z)}(\xi):=\xi-\wp(z)$ at the finite value $\wp(z)$ is $w\mapsto\wp(w)-\wp(z)$ for $w$ near $z$, because $\bar\wp([w])=\wp(w)$ by [F4]; hence by [F8], $e_{[z]}(\bar\wp)=\operatorname{ord}_z(\wp-\wp(z))=:m$, a positive finite integer by [F8] and [F9]. If $m=1$, then by [F10] there is a holomorphic $g$ near $z$ with $g(z)\ne0$ and $\wp(w)-\wp(z)=(w-z)g(w)$, so the product rule and the derivative of the identity in [F11] give $\wp'(z)=g(z)+0\cdot g'(z)=g(z)\ne0$; this proves $\wp'(z)=0\Rightarrow m\ge2$. Conversely, if $m\ge2$, then by [F10] $\wp(w)-\wp(z)=(w-z)^mg(w)$ with $g(z)\ne0$, and the product rule of [F11] gives $\wp'(z)=m\cdot0^{m-1}g(z)+0^m g'(z)=0$, so $\wp'(z)\ne0\Rightarrow m=1$. Thus for $z\in\mathbb C\setminus\Lambda$, $e_{[z]}(\bar\wp)=1$ iff $\wp'(z)\ne0$, and $e_{[z]}(\bar\wp)\ge2$ iff $\wp'(z)=0$. [F4, F8, F9, F10, F11]

1.6 (The equality criterion: $w\equiv\pm z$ implies $\wp(w)=\wp(z)$.) Suppose $w=z+\lambda$ or $w=-z+\lambda$ with $\lambda\in\Lambda$. By the periodicity and evenness clauses of [F3], $\wp(w)=\wp(z+\lambda)=\wp(z)$ in the first case and $\wp(w)=\wp(-z+\lambda)=\wp(-z)=\wp(z)$ in the second, both as values in $\widehat{\mathbb C}$ with poles matched. [F3]

1.7 ($\widehat{\mathbb C}$ is a connected Riemann surface.) By [F6](a) the two standard charts cover $\widehat{\mathbb C}$ and have holomorphic transition maps on their overlap, so they form a holomorphic atlas; $\widehat{\mathbb C}$ is nonempty; it is compact Hausdorff and second countable by [F6](b); and it is connected because $\Sigma$ is a homeomorphism onto the connected space $S^2$, so that $\Sigma^{-1}:S^2\to\widehat{\mathbb C}$ is a continuous surjection and the continuous image of a connected space is connected. Therefore $\widehat{\mathbb C}$ satisfies the Riemann-surface axioms of [F6](c). [F6]

2.1 ($e_{[0]}(\bar\wp)=2$ and $\deg\bar\wp=2$.) Here $F(0)=0$ and $F=z^2u$ with $u(0)=1\ne0$, so the order of $F$ at $0$ is exactly $2$ by [F10]; hence by [F8] and [F9], $e_{[0]}(\bar\wp)=\deg_0F=\operatorname{ord}_0(F-F(0))=\operatorname{ord}_0F=2$. The fibre of $\bar\wp$ over $\infty$ is the single class $[0]$: indeed $\bar\wp([z])=\infty$ iff $\wp(z)=\infty$ iff $z\in\Lambda$ by the pole clause of [F3], iff $[z]=[0]$. By step 1.1 the map $\bar\wp$ is proper and nonconstant with connected Riemann surfaces as source and target by [F2] and step 1.7, so [F7] applies and the degree $d=\sum_{x\in\bar\wp^{-1}(\infty)}e_x(\bar\wp)=e_{[0]}(\bar\wp)=2$ is independent of the value: $\sum_{x\in\bar\wp^{-1}(a)}e_x(\bar\wp)=2$ for every $a\in\widehat{\mathbb C}$. [F2, F3, F7, F8, F9, F10, step 1.1, step 1.3, step 1.7]

2.2 ($\wp'$ vanishes at every nonzero half-period.) Let $h\in\mathbb C\setminus\Lambda$ with $2h\in\Lambda$. For every $z$ with $h\pm z\notin\Lambda$ the periodicity clause of [F3] with $\lambda=-2h\in\Lambda$ gives $\wp(h+z)=\wp(h+z-2h)=\wp(z-h)$, and the evenness clause of [F3] gives $\wp(z-h)=\wp(h-z)$; hence $\wp(h+z)=\wp(h-z)$ on the open set where both sides are defined. Differentiating both sides at $z=0$ with the chain rule of [F11] (the two one-variable maps $z\mapsto h+z$ and $z\mapsto h-z$ have derivatives $1$ and $-1$) gives $\wp'(h)=-\wp'(h)$, so $\wp'(h)=0$. In particular $\wp'(h_j)=0$ for $j=1,2,3$. [F3, F11, step 1.2]

3.1 (The three half-periods are critical points.) By steps 1.2 and 2.2, $h_j\notin\Lambda$ and $\wp'(h_j)=0$; by step 1.5, $e_{[h_j]}(\bar\wp)\ge2$. Hence each of the three distinct nonzero classes $[h_1],[h_2],[h_3]$ is a critical point of $\bar\wp$ in the sense of [F8]. [F8, step 1.2, step 1.5, step 2.2]

4.1 (Dichotomy for the fibres over finite values.) Let $a\in\mathbb C$ and $S:=\bar\wp^{-1}(a)\subseteq T_\Lambda$. By [F7] the set $S$ is nonempty and finite and $\sum_{x\in S}e_x(\bar\wp)=2$ by step 2.1, each $e_x(\bar\wp)$ being a positive integer. If some $x\in S$ satisfies $x\ne-x$, then for a representative $x=[z]$ one has $\wp(-z)=\wp(z)=a$ by the evenness clause of [F3], so $-x=[-z]\in S$ as well; the two distinct elements $x,-x$ of $S$ contribute at least $1+1=2$ to the sum, so necessarily $S=\{x,-x\}$ and $e_x(\bar\wp)=e_{-x}(\bar\wp)=1$. Otherwise every $x\in S$ satisfies $x=-x$, so $x\in\{[h_1],[h_2],[h_3]\}$ by step 1.4, since $[0]\notin S$ as $\bar\wp([0])=\infty\ne a$ by step 1.2; each $x\in S$ has $e_x(\bar\wp)\ge2$ by step 3.1, and $S\ne\varnothing$ with $\sum_{x\in S}e_x(\bar\wp)=2$ forces $S=\{[h]\}$ for a single class $[h]$ with $h\in\{h_1,h_2,h_3\}$ and $e_{[h]}(\bar\wp)=2$. [F3, F7, step 1.2, step 2.1, step 1.4, step 3.1]

5.1 (The three branch values are distinct and their fibres are single points.) The values $e_j=\wp(h_j)$ are finite by step 1.2 and the pole clause of [F3]. For each $j$ the class $[h_j]$ lies in $\bar\wp^{-1}(e_j)$ and has $e_{[h_j]}(\bar\wp)\ge2$ by step 3.1, so the first alternative of step 4.1 is impossible for $a=e_j$ (it would give $e=1$ there); hence the second alternative holds and $$\bar\wp^{-1}(e_j)=\{[h_j]\},\qquad e_{[h_j]}(\bar\wp)=2 .$$ If $e_j=e_k$ for indices $j\ne k$, then $[h_j]$ and $[h_k]$ are two distinct elements of the fibre $\bar\wp^{-1}(e_j)$ by step 1.4, contradicting the displayed equality; hence $e_1,e_2,e_3$ are three distinct finite values, and the fibre over each is a single class. [F3, F8, step 1.2, step 1.4, step 3.1, step 4.1]

5.2 (The equality criterion: conversely.) Suppose $\wp(z)=\wp(w)=:a$ in $\widehat{\mathbb C}$. If $a=\infty$, then $z,w\in\Lambda$ by the pole clause of [F3], so $[w]=[z]$ and $w\equiv z\equiv-z$ modulo $\Lambda$. If $a\in\mathbb C$, then $[z],[w]\in S=\bar\wp^{-1}(a)$ and step 4.1 gives two alternatives: either $S=\{x,-x\}$ for a class $x$ with $x\ne-x$, in which case $[z],[w]\in\{x,-x\}$ and $w\equiv\pm z$ modulo $\Lambda$; or $S=\{[h]\}$ for a single class with $2h\in\Lambda$, in which case $[z]=[w]=[h]=[-h]$ and again $w\equiv\pm z$ modulo $\Lambda$. [F3, step 4.1]

6.1 (The critical locus of $\bar\wp$.) A point $x\in T_\Lambda$ is critical precisely when $e_x(\bar\wp)\ge2$ by [F8]. For $x=[0]$ this holds with $e_{[0]}(\bar\wp)=2$ by step 2.1, and for $x=[h_j]$ it holds with $e_{[h_j]}(\bar\wp)=2$ by step 5.1. Conversely let $x=[z]$ be critical and $x\ne[0]$; then $z\notin\Lambda$, so by step 1.5 the inequality $e_{[z]}(\bar\wp)\ge2$ gives $\wp'(z)=0$. Apply step 4.1 to the finite value $a=\wp(z)$: the first alternative would give $e_{[z]}(\bar\wp)=1$, contrary to $e_{[z]}(\bar\wp)\ge2$, so the second alternative holds and $[z]=[h]$ with $h\in\{h_1,h_2,h_3\}$. Hence the critical points of $\bar\wp$ are exactly $[0],[h_1],[h_2],[h_3]$, four pairwise distinct classes by step 1.4. [F8, step 2.1, step 1.4, step 1.5, step 4.1, step 5.1]

7.1 (The branch locus.) By [F8] the branch values of $\bar\wp$ are the images of its critical points, so by step 6.1 they are $\bar\wp([0])=\infty$ (step 1.2) and $\wp(h_j)=e_j$; by step 5.1 the three $e_j$ are distinct and differ from $\infty$, so the branch locus is the four-element set $\{\infty,e_1,e_2,e_3\}$. [F8, step 1.2, step 5.1, step 6.1]

7.2 (The zeros of $\wp'$.) Since $\wp'$ is $\Lambda$-periodic by [F3], $\wp'(z+\lambda)=\wp'(z)$ for all $z\in\mathbb C\setminus\Lambda$ and $\lambda\in\Lambda$, so the zero set of $\wp'$ is $\Lambda$-invariant. For $z\in\mathbb C\setminus\Lambda$ step 1.5 together with step 6.1 gives $\wp'(z)=0\iff e_{[z]}(\bar\wp)\ge2\iff[z]\in\{[h_1],[h_2],[h_3]\}$. Hence the zeros of $\wp'$ are exactly the $\Lambda$-translates of $h_1,h_2,h_3$: each $h_j$ is a zero by step 2.2, every zero is $\Lambda$-translates of some $h_j$ by the equivalence just displayed, and there are no other zeros modulo $\Lambda$. [F3, step 1.5, step 2.2, step 6.1]

8.1 (Each zero of $\wp'$ is simple.) Fix $j$ and put $G(w):=\wp(w)-e_j$ near $w=h_j$. By step 5.1, $\operatorname{ord}_{h_j}(\wp-e_j)=e_{[h_j]}(\bar\wp)=2$, the identification of order and index being that of step 1.5; so by [F10] there is a holomorphic $g$ near $h_j$ with $g(h_j)\ne0$ and $\wp(w)-e_j=(w-h_j)^2g(w)$. Differentiating with the product rule and linearity of [F11] gives $\wp'(w)=2(w-h_j)g(w)+(w-h_j)^2g'(w)=(w-h_j)\bigl(2g(w)+(w-h_j)g'(w)\bigr)$, and the second factor at $w=h_j$ equals $2g(h_j)\ne0$; hence $\operatorname{ord}_{h_j}(\wp')=1$, a simple zero. Since $\wp'$ is $\Lambda$-periodic, for $\lambda\in\Lambda$ one has $\wp'(h_j+\lambda+u)=\wp'(h_j+u)=u\cdot\bigl(2g(h_j+u)+ug'(h_j+u)\bigr)$ for $u$ near $0$, so the zero at $h_j+\lambda$ has order one as well. Thus every zero of $\wp'$ is simple, and by step 7.2 there is exactly one such zero at each nonzero half-period modulo $\Lambda$. [F3, F10, F11, step 1.5, step 2.2, step 5.1, step 7.2]

9.1 Collecting the claims: $\bar\wp$ is a nonconstant proper holomorphic map of connected Riemann surfaces (steps 1.1 and 1.2) of degree two (step 2.1), proving (1); steps 1.6 and 5.2 prove (2); step 6.1 together with the distinctness in step 1.4 identifies the critical points, i.e. the branch points, as $[0]$ and the three distinct nonzero classes $[h_1],[h_2],[h_3]$, and step 7.1 gives the equivalent description by branch values, proving (3); and steps 7.2 and 8.1 prove (4), that $\wp'$ vanishes exactly at the $\Lambda$-translates of the three half-periods and that each such zero is simple. ∎

## Remarks

The dichotomy of step 3.1 is the quantitative form of "$\wp$ is the quotient map of the involution $z\mapsto-z$": every finite value is attained either at a pair of distinct opposite classes or, for the three special values $e_j$, at a single half-period class with multiplicity two. The three finite branch values $e_1,e_2,e_3$ are distinct already at this stage; that they are the roots of the polynomial $4x^3-g_2x-g_3$ and that $\Delta=g_2^3-27g_3^2\ne0$ belongs to the later discriminant theorem of this page, whose proof uses the fibre description above. An alternative route to the vanishing order $\operatorname{ord}_{h_j}(\wp')=1$ runs through the divisor law of this page: $\wp'$ has the single triple pole class $[0]$, so its three zeros $[h_1],[h_2],[h_3]$ exhaust the zero divisor and each has order one. The proof above selects nothing: the charts are the canonical ones supplied by the covering and by the sphere, and all order computations are local algebraic identities.
