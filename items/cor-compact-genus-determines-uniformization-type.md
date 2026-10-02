---
id: cor-compact-genus-determines-uniformization-type
kind: corollary
title: "The genus of a compact Riemann surface determines its uniformization type"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - thm-topological-classification-compact-riemann-surfaces
  - cor-universal-cover-classification-riemann-surfaces
  - def-universal-covering-type-riemann-surface
  - lem-cocompact-free-affine-plane-action-is-a-lattice
  - thm-biholomorphic-self-maps-riemann-sphere-are-mobius
  - thm-classification-mobius-transformations
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - thm-upper-half-plane-automorphisms-are-real-mobius-maps
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - thm-higher-dimensional-spheres-are-simply-connected
  - def-simply-connected
  - cor-fundamental-group-of-two-dimensional-torus
  - prop-fundamental-group-is-a-functor-on-pointed-spaces
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - lem-discrete-subgroups-of-real-vector-spaces-are-lattices
  - thm-compact-subset-of-a-hausdorff-space-is-closed
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-15, especially Lemmas 1-5, Theorem 4, Corollary 6, and the non-Green proof"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 16 printed pp. 146-147 for hyperbolic geometry; Ch. 17 printed p. 157 for uniformization statement only"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice. A compact Riemann surface of genus $0$ has
spherical type, genus $1$ has parabolic type, and genus at least $2$ has
hyperbolic type
([[def-genus-and-euler-characteristic-compact-riemann-surface]],
[[def-universal-covering-type-riemann-surface]]).

## Facts & Assumptions
**Given:** The Axiom of Choice; a compact Riemann surface $X$ with genus $g=g(X)$ and universal-covering type $M\in\{\widehat{\mathbb C},\mathbb C,\mathbb D\}$ ([[def-riemann-surface-and-holomorphic-atlas]], [[def-genus-and-euler-characteristic-compact-riemann-surface]], [[def-universal-covering-type-riemann-surface]]); the holomorphic universal covering $p:M\to X$ and its deck group $G=\operatorname{Deck}(p)$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): it is used through the classification inputs [F1], [F2] and [F7] and their own hypotheses; it also licenses the countable sequence selected in step 5.1, and the remaining selections are finite.

[F1] Compact surfaces and genus ([[thm-topological-classification-compact-riemann-surfaces]], [[def-genus-and-euler-characteristic-compact-riemann-surface]]): a compact Riemann surface $X$ is homeomorphic to $\#_gT^2$ for a unique $g\ge0$, with $\#_0T^2=S^2$; that number is the genus of $X$, and $g=0$ holds exactly when $X$ is homeomorphic to $S^2$ while $g=1$ holds exactly when $X$ is homeomorphic to $T^2$.

[F2] Type and quotient presentation ([[cor-universal-cover-classification-riemann-surfaces]], [[def-universal-covering-type-riemann-surface]]): $X$ is biholomorphic to $M/G$, where $M$ is the universal-covering type of $X$, exactly one of $\widehat{\mathbb C},\mathbb C,\mathbb D$ occurs, and $G$ is the deck group of the holomorphic universal covering $p:M\to X$ acting on $M$ by holomorphic automorphisms, freely and properly discontinuously; the deck group acts simply transitively on every fibre of $p$, so if $G=\{e\}$ then $p$ is bijective and hence a biholomorphism.

[F3] Deck group and fundamental group ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]): for the path-connected, locally path-connected, semilocally simply connected base $X$ of the universal cover $p$, the deck group is isomorphic to the fundamental group, $G\cong\pi_1(X,x_0)$.

[F4] Fundamental groups of the sphere and the torus ([[thm-higher-dimensional-spheres-are-simply-connected]], [[def-simply-connected]], [[cor-fundamental-group-of-two-dimensional-torus]], [[prop-fundamental-group-is-a-functor-on-pointed-spaces]]): $S^2$ is simply connected, so $\pi_1(S^2)$ is trivial, and $\pi_1(T^2)\cong\mathbb Z^2$; $\pi_1$ is a functor, so a homeomorphism induces an isomorphism of fundamental groups; hence $X\cong S^2$ gives $\pi_1(X)=0$ and $X\cong T^2$ gives $\pi_1(X)\cong\mathbb Z^2$.

[F5] The sphere as a topological sphere ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]): stereographic projection $\Sigma:\widehat{\mathbb C}\to S^2$ is a homeomorphism, so $\widehat{\mathbb C}\cong S^2=\#_0T^2$.

[F6] Automorphisms of the models ([[thm-biholomorphic-self-maps-riemann-sphere-are-mobius]], [[thm-classification-mobius-transformations]], [[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]], [[thm-disc-automorphisms-are-rotated-blaschke-factors]], [[thm-upper-half-plane-automorphisms-are-real-mobius-maps]]): every biholomorphic self-map of $\widehat{\mathbb C}$ is a Möbius transformation and every Möbius transformation is a biholomorphic self-map of $\widehat{\mathbb C}$; a nonidentity Möbius transformation has one or two fixed points in $\widehat{\mathbb C}$, and after moving the fixed-point set to $\{\infty\}$ or to $\{0,\infty\}$ it takes the form $z\mapsto z+1$ or $z\mapsto\lambda z$ with $\lambda\in\mathbb C^\times\setminus\{1\}$; every automorphism of the disc is a rotated Blaschke factor $z\mapsto e^{i\theta}(a-z)/(1-\overline az)$ with $a\in\mathbb D$ and $\theta\in\mathbb R$; and a map is an automorphism of $\mathbb H$ if and only if it has the form $z\mapsto(az+b)/(cz+d)$ with real $a,b,c,d$ and $ad-bc>0$.

[F7] Plane quotients are tori ([[lem-cocompact-free-affine-plane-action-is-a-lattice]]): if a group of biholomorphisms of $\mathbb C$ acts freely and properly discontinuously with compact quotient, then it is a rank-two lattice and the quotient is a complex torus of genus one.

[F8] Discrete subgroups of real vector spaces ([[lem-discrete-subgroups-of-real-vector-spaces-are-lattices]]): a subgroup $\Gamma$ of a finite-dimensional real vector space $V$ is discrete if and only if $\Gamma=\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_r$ for linearly independent $v_1,\dots,v_r$ with $r\le\dim_{\mathbb R}V$; in particular a discrete subgroup of $\mathbb R$ is trivial or infinite cyclic.

[F9] Compact subsets of Hausdorff spaces ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]): every compact subset of a Hausdorff space is closed; since $1-1/n\in\mathbb D$ converges to $1\notin\mathbb D$ in the Hausdorff space $\mathbb C$, the disc $\mathbb D$ is not compact.



**Proof technique:** direct.

## Proof

1.1 **Setup.** By [F2] the surface $X$ is biholomorphic to $M/G$, where $M$ is its universal-covering type, exactly one of $\widehat{\mathbb C},\mathbb C,\mathbb D$, and $G$ is the deck group of the holomorphic universal covering $p:M\to X$, acting freely and properly discontinuously by holomorphic automorphisms; by [F3], $G\cong\pi_1(X,x_0)$; and by [F1], $X\cong\#_gT^2$ for the unique genus $g=g(X)$. [A1, F1, F2, F3]

2.1 **The sphere model forces $g=0$.** Suppose $M=\widehat{\mathbb C}$. Every element of $G$ is a biholomorphic automorphism of $\widehat{\mathbb C}$, hence a Möbius transformation by [F6], and every nonidentity Möbius transformation has a fixed point in $\widehat{\mathbb C}$ by [F6]; since $G$ acts freely we get $G=\{e\}$, and then [F2] makes the covering $p$ a biholomorphism, so $X\cong\widehat{\mathbb C}$ as Riemann surfaces. By [F5], $\widehat{\mathbb C}\cong S^2=\#_0T^2$, so $X$ is homeomorphic to $\#_0T^2$ and the uniqueness in [F1] gives $g=0$. Thus $M=\widehat{\mathbb C}$ implies $g=0$. [F1, F2, F5, F6, step 1.1]

2.2 **The plane model forces $g=1$.** Suppose $M=\mathbb C$. Then $G$ is a group of biholomorphisms of $\mathbb C$ acting freely and properly discontinuously (step 1.1) whose quotient $\mathbb C/G\cong X$ is compact, so [F7] applies: $G$ is a rank-two lattice and $\mathbb C/G$ is a complex torus of genus one. Since $X$ is biholomorphic, hence homeomorphic, to $\mathbb C/G$, the uniqueness of the genus in [F1] gives $g=1$. Thus $M=\mathbb C$ implies $g=1$. [F1, F7, step 1.1]

2.3 **Cayley conjugation of the disc case.** Suppose $M=\mathbb D$. The map $\gamma(z):=(z-i)/(z+i)$ is a Möbius transformation [F6], hence a biholomorphic self-map of $\widehat{\mathbb C}$ [F6]; it is holomorphic on $\mathbb H$ with $\gamma'(z)=2i/(z+i)^2\ne0$, and $|\gamma(z)|^2=|z-i|^2/|z+i|^2$ with $|z-i|^2<|z+i|^2$ exactly when $\operatorname{Im}z>0$, so $\gamma$ maps $\mathbb H$ bijectively onto $\mathbb D$ and restricts to a biholomorphism $\gamma:\mathbb H\to\mathbb D$ whose inverse is also Möbius. Conjugation by the homeomorphism $\gamma$ carries the free properly discontinuous action of $G$ on $\mathbb D$ to a free properly discontinuous action of $G^{\mathbb H}:=\gamma^{-1}G\gamma$ on $\mathbb H$ by holomorphic automorphisms, and $G^{\mathbb H}\cong G$; by [F6] each element of $G^{\mathbb H}$ is a real Möbius map $z\mapsto(az+b)/(cz+d)$ with $ad-bc>0$. [F6, step 1.1]

3.1 **Nonidentity elements of $G^{\mathbb H}$ have their fixed points on $\mathbb R\cup\{\infty\}$.** Let $g_0\in G^{\mathbb H}$ be nonidentity. By [F6] it is a real Möbius map and has one or two fixed points in $\widehat{\mathbb C}$. If a fixed point $w$ satisfied $\operatorname{Im}w\ne0$, then because the coefficients of $g_0$ are real the conjugate $\overline w$ is also a fixed point, and one of $w,\overline w$ lies in $\mathbb H$, contradicting the freeness of the action of $G^{\mathbb H}$ on $\mathbb H$ (step 2.3). Hence every fixed point of $g_0$ lies in $\mathbb R\cup\{\infty\}$, and there are one or two of them. [F6, step 2.3]

4.1 **Hyperbolic normal form and its centralizer.** Suppose $g_0\in G^{\mathbb H}$ is nonidentity with two fixed points in $\mathbb R\cup\{\infty\}$ (step 3.1). Relabel them so either $v=\infty$ with $u\in\mathbb R$, or $u,v\in\mathbb R$ with $u<v$. If $v=\infty$, take $T(z)=z-u$; otherwise take $T(z)=(z-u)/(v-z)$. These are real Mobius maps with positive determinant, hence automorphisms of $\mathbb H$ by [F6], and they carry the fixed points to $0$ and $\infty$. Then $h:=Tg_0T^{-1}$ fixes $0$ and $\infty$, so $h(z)=\lambda z$ for some $\lambda\ne1$; preserving $\mathbb H$ forces $\lambda>0$. The centralizer of $h$ in $\operatorname{Aut}(\mathbb H)$ is exactly $\{z\mapsto kz:k>0\}$. Indeed, write a commuting automorphism as $u_0(z)=(az+b)/(cz+d)$ with real coefficients and positive determinant [F6]. The identity $u_0(\lambda z)=\lambda u_0(z)$ gives $ac=bc=bd=0$ after cross-multiplication, since $\lambda>0$ and $\lambda\ne1$. If $c\ne0$, then $a=b=0$, contradicting $ad-bc\ne0$; hence $c=0$. The determinant then forces $a,d\ne0$, and $bd=0$ forces $b=0$, leaving $u_0(z)=(a/d)z$ with $a/d>0$. [F6, step 3.1]
4.2 **Parabolic normal form and its centralizer.** Suppose $g_0\in G^{\mathbb H}$ is nonidentity with exactly one fixed point $u\in\mathbb R\cup\{\infty\}$ (step 3.1). Choose $T\in\operatorname{Aut}(\mathbb H)$ carrying $u$ to $\infty$: take $T=\operatorname{id}$ if $u=\infty$, and $T(z)=-1/(z-u)$ if $u\in\mathbb R$. The latter is a real Mobius map with determinant $1$ and hence an automorphism of $\mathbb H$ [F6]. Then $h:=Tg_0T^{-1}$ fixes $\infty$ and no other point, so $h(z)=\alpha z+\beta$ with real $\alpha>0$; the second fixed point $\beta/(1-\alpha)$ would be finite if $\alpha\ne1$, so $\alpha=1$ and $\beta\ne0$. If $\beta<0$, replace $h$ by $h^{-1}$ and $\beta$ by $-\beta$, so $\beta>0$. Conjugating by the positive dilation $z\mapsto z/\beta$ and composing it with $T$ normalizes the translation to $h(z)=z+1$. The centralizer of $h$ in $\operatorname{Aut}(\mathbb H)$ is exactly $\{z\mapsto z+t:t\in\mathbb R\}$: if $u_0$ commutes with $h$, then $u_0(\infty)$ is a fixed point of $h$, hence is $\infty$; so $u_0(z)=\alpha z+\gamma$ with real $\alpha>0$ [F6], and commutation gives $\alpha=1$. [F6, step 3.1]
5.1 **An abelian group in a centralizer is cyclic.** Assume $G$ is abelian, as will be the case when the genus is $1$. If $G$ is trivial the conclusion holds; otherwise choose a nonidentity element $g_0\in G^{\mathbb H}$. In the hyperbolic or parabolic case of steps 4.1 and 4.2, conjugation carries $G^{\mathbb H}$ to a free properly discontinuous group $H$ containing the normalized element $h$. Since $G$ is abelian, $H$ is abelian, so every element of $H$ commutes with $h$ and lies in the centralizer computed in those steps. Under the identification of that centralizer with $(\mathbb R,+)$ (directly for translations and by $k\mapsto\log k$ for positive dilations), $H$ corresponds to a subgroup $\Gamma\le\mathbb R$. If $\Gamma$ were not discrete, the choice allowed by the Axiom of Choice would give nonzero parameters $\gamma_n\to0$. After passing to a distinct subsequence, the corresponding automorphisms converge uniformly to the identity on a compact neighbourhood $K$ of a point of $\mathbb H$, so $h_{\gamma_n}(K)\cap K\ne\varnothing$ for infinitely many distinct elements, contradicting proper discontinuity. Hence $\Gamma$ is discrete. A discrete subgroup of $\mathbb R$ is trivial or infinite cyclic, so $G\cong H$ is trivial or infinite cyclic. [F6, F8, given, step 4.1, step 4.2, choose, algebra]
6.1 **The disc model forces $g\ge2$.** Suppose $M=\mathbb D$, so $X\cong\mathbb D/G$ with $G$ acting freely and properly discontinuously by automorphisms of $\mathbb D$ (step 1.1). If $g=0$, then $X\cong S^2$ by [F1], so $\pi_1(X)=0$ by [F4] and therefore $G\cong\pi_1(X)$ is trivial by [F3]; then [F2] makes the covering $p$ a biholomorphism, so $X\cong\mathbb D$, which is impossible because $X$ is compact and $\mathbb D$ is not compact by [F9]. If $g=1$, then $X\cong T^2$ by [F1], so $\pi_1(X)\cong\mathbb Z^2$ by [F4] and $G\cong\mathbb Z^2$ by [F3]. In particular $G$ is abelian and nontrivial, so step 5.1 makes it infinite cyclic, contradicting $G\cong\mathbb Z^2$. Hence $M=\mathbb D$ implies $g\notin\{0,1\}$, that is, $g\ge2$. [F1, F2, F3, F4, F9, step 5.1, step 1.1]
7.1 **Elimination and conclusion.** Exactly one model $M$ occurs for $X$ by [F2], so the three cases of steps 2.1, 2.2 and 6.1 are exhaustive and mutually exclusive. If $g=0$, then $M\ne\mathbb C$ by step 2.2 and $M\ne\mathbb D$ by step 6.1, so $M=\widehat{\mathbb C}$ and $X$ has spherical type. If $g=1$, then $M\ne\widehat{\mathbb C}$ by step 2.1 and $M\ne\mathbb D$ by step 6.1, so $M=\mathbb C$ and $X$ has parabolic type. If $g\ge2$, then $M\ne\widehat{\mathbb C}$ by step 2.1 and $M\ne\mathbb C$ by step 2.2, so $M=\mathbb D$ and $X$ has hyperbolic type. The Axiom of Choice [A1] enters through [F1], [F2] and [F7] and licenses the countable sequence selected in step 5.1; all other selections are finite. [A1, F1, F2, F7, step 2.1, step 2.2, step 6.1] ∎
