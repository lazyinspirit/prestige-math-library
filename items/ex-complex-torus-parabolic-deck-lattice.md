---
id: ex-complex-torus-parabolic-deck-lattice
kind: example
title: "A complex torus has a lattice of parabolic deck translations"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - thm-complex-numbers-are-the-real-coordinate-plane
  - def-complex-metric-convergence-and-continuity
  - thm-complex-numbers-form-a-field
  - lem-complex-conjugation-and-modulus-laws
  - def-euclidean-linear-map
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - def-lipschitz-holder-contraction
  - thm-metric-regularity-hierarchy
  - def-metric-continuity
  - def-group-action
  - def-covering-space-action
  - def-homeomorphism-and-open-maps
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-deck-transformation-and-deck-group
  - def-universal-covering-space
  - thm-convex-subsets-have-trivial-fundamental-group
  - def-simply-connected
  - thm-continuous-image-of-a-connected-space
  - def-quotient-topology
  - thm-initial-and-final-characteristic-properties
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - def-riemann-surface-and-holomorphic-atlas
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
  - def-polygonal-schema-and-edge-pairing
  - ex-torus-polygonal-schema
  - def-two-dimensional-torus
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - thm-topological-classification-compact-riemann-surfaces
  - def-universal-covering-type-riemann-surface
  - cor-compact-genus-determines-uniformization-type
  - def-group-isomorphism-and-automorphism
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §2.4 and §5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 2 Theorem 2.6, printed p. 7: plane quotients as C, C* or C/Lambda; Ch. 16 printed pp. 146-147, Ch. 17 printed p. 157"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice. Let $\omega_1,\omega_2\in\mathbb C$ be
$\mathbb R$-linearly independent, put
$\Lambda:=\mathbb Z\omega_1+\mathbb Z\omega_2$, and let
$T:=\mathbb C/\Lambda$ be the quotient of the translation action of $\Lambda$
on $\mathbb C$ with quotient map $q$. Then:

1. $q:\mathbb C\to T$ is a covering map with simply connected total space,
   hence a universal covering space, and
   $\operatorname{Deck}(q)=\{\,z\mapsto z+\lambda:\lambda\in\Lambda\,\}$; this
   deck group is isomorphic to $\Lambda$ and to $\mathbb Z^2$;
2. $T$ is a compact Riemann surface, the complex torus of the lattice, for
   which $q$ is holomorphic;
3. $T$ has genus $1$ and parabolic universal-covering type.

## Facts & Assumptions
**Given:** The Axiom of Choice; $\mathbb R$-linearly independent $\omega_1,\omega_2\in\mathbb C$; the lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$; the quotient space $T=\mathbb C/\Lambda$ of the translation action with quotient map $q$; the standard torus $T^2=(\mathbb R/\mathbb Z)^2$; and the square schema $Y$, the one-polygon schema with boundary word $a\,b\,a^{-1}b^{-1}$.

[F1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty sets has a choice function. In this example it is used only through the genus definition [F13] and the compact-genus corollary [F14], both of which assume it; every selection made below is finite or canonical.

[F2] The coordinate and metric dictionary ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[def-complex-metric-convergence-and-continuity]]): the bijection $\Phi(a+bi)=(a,b)$ carries addition and complex multiplication to the coordinatewise formulas of $\mathbb R^2$, so in particular it carries addition and real scalar multiplication to the coordinatewise operations, and $|z-w|=\lVert\Phi(z)-\Phi(w)\rVert_2$; hence the metric, convergence and continuity notions of $\mathbb C$ are exactly their Euclidean counterparts, the metric topology is the usual topology of $\mathbb R^2$, and $\mathbb C$ is a $2$-dimensional real vector space.

[F3] The field and modulus laws ([[thm-complex-numbers-form-a-field]], [[lem-complex-conjugation-and-modulus-laws]]): $\mathbb C$ is a field, so addition is associative and commutative with identity $0$ and inverse $-\lambda$, and $(z+\lambda)-(w+\lambda)=z-w$; and $|z+w|\le|z|+|w|$, $|z|\ge0$, $|z|=0$ exactly when $z=0$.

[F4] Euclidean linear maps and continuity ([[def-euclidean-linear-map]], [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]): for every real-linear $L:\mathbb R^m\to\mathbb R^n$ there is $K\ge0$ with $\lVert Lh\rVert_2\le K\lVert h\rVert_2$ for all $h$; such an $L$ is Lipschitz with constant $K$, hence uniformly continuous, hence continuous.

[F5] Group actions and covering-space actions ([[def-group-action]], [[def-covering-space-action]], [[def-homeomorphism-and-open-maps]]): a left action of a group $G$ on a space $E$ satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$; it is an action by homeomorphisms when each $x\mapsto g\cdot x$ is a homeomorphism of $E$; and it is a covering-space action when every $e\in E$ has an open neighbourhood $U$ with $gU\cap U=\varnothing$ for every nonidentity $g\in G$, in which case distinct translates of $U$ are disjoint.

[F6] The orbit-map theorem ([[thm-orbit-map-of-a-covering-space-action-is-a-covering]]): for a covering-space action of $G$ on $E$ the orbit map $E\to E/G$ is a covering, and if $E$ is path-connected then the deck group of this covering consists exactly of the transformations supplied by $G$.

[F7] Coverings, deck groups and universal covers ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[def-deck-transformation-and-deck-group]], [[def-universal-covering-space]]): a covering map is a continuous surjection every point of whose base has an evenly covered neighbourhood; deck transformations are the isomorphisms over the base and form a group; a universal covering space is a covering whose total space is simply connected.

[F8] Convexity and connected images ([[thm-convex-subsets-have-trivial-fundamental-group]], [[def-simply-connected]], [[thm-continuous-image-of-a-connected-space]]): every nonempty convex subset of $\mathbb R^n$ is simply connected; a simply connected space is nonempty and path connected with trivial fundamental group; and a continuous image of a connected space is connected, so a continuous surjection from a connected space has connected codomain.

[F9] The quotient topology ([[def-quotient-topology]], [[thm-initial-and-final-characteristic-properties]]): for a surjection $q:X\to Y$, a subset $V\subseteq Y$ is open exactly when $q^{-1}[V]$ is open in $X$; equivalently $Y$ carries the final topology of $q$, so by the characteristic property a map $k:Y\to W$ is continuous exactly when $k\circ q$ is continuous.

[F10] Compactness ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]]): every closed box in $\mathbb R^n$ is compact; continuous images of compact sets are compact; and a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism.

[F11] Riemann surfaces and holomorphic translations ([[def-riemann-surface-and-holomorphic-atlas]], [[thm-complex-polynomials-and-rational-functions-are-holomorphic]]): a Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas, whose charts are homeomorphisms onto open subsets of $\mathbb C$ and whose pairwise transitions are holomorphic in both directions; complex polynomials are entire, so each translation $z\mapsto z+\lambda$ and each inverse $z\mapsto z-\lambda$ is holomorphic on $\mathbb C$.

[F12] The square schema and the torus ([[def-polygonal-schema-and-edge-pairing]], [[ex-torus-polygonal-schema]], [[def-two-dimensional-torus]]): the one-polygon schema with boundary word $a\,b\,a^{-1}b^{-1}$ is a connected one-polygon schema whose realization $Y$ is a nonempty compact connected Hausdorff second-countable topological $2$-manifold with one vertex class, two edge classes and one face, $Y$ carrying the quotient topology of the square by the side pairings; and that schema realizes the torus $T^2=(\mathbb R/\mathbb Z)^2$.

[F13] Genus by classification ([[def-genus-and-euler-characteristic-compact-riemann-surface]], [[thm-topological-classification-compact-riemann-surfaces]]): under the Axiom of Choice every compact Riemann surface is homeomorphic to $\#_gT^2$ for exactly one $g\ge0$, where $\#_gT^2$ is the connected sum of $g$ copies of the torus and $\#_0T^2=S^2$; that number is the genus, and the one-fold connected sum $\#_1T^2$ is the torus $T^2$ itself.

[F14] Uniformization type ([[def-universal-covering-type-riemann-surface]], [[cor-compact-genus-determines-uniformization-type]]): a connected Riemann surface whose holomorphic universal cover is biholomorphic to $\mathbb C$ is parabolic; and under the Axiom of Choice a compact Riemann surface of genus $1$ has parabolic type.

[F15] Group isomorphisms ([[def-group-isomorphism-and-automorphism]]): a bijective group homomorphism is a group isomorphism.



**Proof technique:** direct.

## Verification

1.1 **The two periods are a real basis.** The map $T_0:\mathbb R^2\to\mathbb C$, $T_0(s,t):=s\omega_1+t\omega_2$, is real-linear and injective: $s\omega_1+t\omega_2=0$ forces $s=t=0$ by $\mathbb R$-linear independence. Hence the composite $\Phi\circ T_0:\mathbb R^2\to\mathbb R^2$ is an injective real-linear map of a $2$-dimensional space into itself, so it is bijective and $T_0$ is a bijection [F2, F4]. Applying the boundedness bound of [F4] to the inverse linear map $(\Phi\circ T_0)^{-1}$ gives $K\ge0$ with $\lVert(\Phi\circ T_0)^{-1}v\rVert_2\le K\lVert v\rVert_2$ for all $v$; here $K>0$, since $K=0$ would make the inverse map zero, impossible for a bijection. Put $c:=1/K>0$. For $\lambda=m\omega_1+n\omega_2\in\Lambda$ one has $(m,n)=(\Phi\circ T_0)^{-1}\Phi(\lambda)$, hence $\max(|m|,|n|)\le\lVert(m,n)\rVert_2\le K|\lambda|$, that is $|\lambda|\ge c\max(|m|,|n|)$; in particular $|\lambda|\ge c$ for every nonzero $\lambda\in\Lambda$. [F2, F4, given, algebra]

1.2 **The plane is simply connected.** Under the dictionary of [F2] the space $\mathbb C$ is the nonempty convex set $\mathbb R^2$, which is simply connected [F8]; in particular $\mathbb C$ is nonempty and path connected with trivial fundamental group. [F2, F8]

2.1 **Continuity and translations.** The map $T_0$ is continuous: $\Phi\circ T_0$ is real-linear, hence bounded and Lipschitz, hence continuous by [F4], and $\Phi^{-1}$ is an isometry by [F2]. For each $\lambda\in\mathbb C$ the translation $\tau_\lambda(z):=z+\lambda$ satisfies $|\tau_\lambda(z)-\tau_\lambda(w)|=|(z+\lambda)-(w+\lambda)|=|z-w|$ for all $z,w$ by [F3], so $\tau_\lambda$ is an isometry of $\mathbb C$; it is therefore a bijection with continuous inverse $\tau_{-\lambda}$, that is, a homeomorphism of $\mathbb C$ [F4, F5]. [F2, F3, F4, F5, step 1.1]

3.1 **The translation action is a covering-space action.** The set $\Lambda$ is a subgroup of $(\mathbb C,+)$ [F3], and $\lambda\cdot z:=\lambda+z$ defines a left action of $\Lambda$ on $\mathbb C$ by homeomorphisms: $(\lambda+\mu)\cdot z=z+(\lambda+\mu)=\lambda+(z+\mu)=\lambda\cdot(\mu\cdot z)$ and $0\cdot z=z$ by the field laws [F3], while each map $z\mapsto\lambda\cdot z$ is the homeomorphism $\tau_\lambda$ of step 2.1 [F5]. It is a covering-space action: fix $z\in\mathbb C$ and put $U:=D(z,c/4)$; if $w\in(U+\lambda)\cap U$ for some nonzero $\lambda\in\Lambda$, then $w=u+\lambda=u'$ for some $u,u'\in U$, so $\lambda=u'-u$ and $|\lambda|\le|u'-z|+|z-u|<c/2<c$, contradicting $|\lambda|\ge c$ from step 1.1; hence $(U+\lambda)\cap U=\varnothing$ for every nonzero $\lambda$, as required by [F5]. [F3, F5, step 1.1, step 2.1]

3.2 **The quotient map is open.** For open $W\subseteq\mathbb C$ one has $q^{-1}(q(W))=\bigcup_{\lambda\in\Lambda}(W+\lambda)$, because the classes of $q$ are the orbits $\{\lambda+z:\lambda\in\Lambda\}$; each $W+\lambda=\tau_\lambda(W)$ is open by step 2.1, so $q^{-1}(q(W))$ is open in $\mathbb C$ and $q(W)$ is open in $T$ by the quotient topology [F9]. Thus $q$ is an open map. [F5, F9, step 2.1]

4.1 **The orbit map is a covering with deck group the translations.** The space $T=\mathbb C/\Lambda$ is the orbit space of the action of step 3.1 and $q$ is its orbit map [F9]. By steps 3.1 and 1.2 the orbit-map theorem [F6] applies: $q:\mathbb C\to T$ is a covering map, and since $\mathbb C$ is path connected its deck group consists exactly of the transformations supplied by $\Lambda$, that is, $\operatorname{Deck}(q)=\{\tau_\lambda:\lambda\in\Lambda\}$. Since $\mathbb C$ is simply connected (step 1.2), $q$ is a universal covering space [F7]. [F6, F7, F9, step 3.1, step 1.2]

4.2 **Small discs give charts.** Fix $z\in\mathbb C$ and put $D_z:=D(z,c/3)$ and $U_z:=q(D_z)$; the set $U_z$ is open in $T$ by step 3.2. If $q(w)=q(w')$ with $w,w'\in D_z$, then $w'=\lambda+w$ for some $\lambda\in\Lambda$, because the classes of the orbit map are the orbits [F5, F9]; then $w-w'\in\Lambda$ and $|w-w'|<2c/3<c$, so $w=w'$ by step 1.1. Hence $q_z:=q|_{D_z}$ is a bijection $D_z\to U_z$, and it is an open continuous map: for open $A\subseteq D_z$ the set $q(A)$ is open in $T$ by step 3.2, hence open in $U_z$. Therefore its inverse $\varphi_z:=q_z^{-1}:U_z\to D_z$ is a homeomorphism onto the open set $D_z\subseteq\mathbb C$, that is, a chart [F5, F11]. The sets $U_z$ cover $T$, because $q$ is onto and $z\in D_z$ for every $z$. [F5, F9, F11, step 1.1, step 3.2]

4.3 **The quotient is Hausdorff.** Let $[z]\neq[z']$ in $T$ and put $P:=z-z'\notin\Lambda$. With $R:=2|P|+1$, the set $S:=\Lambda\cap\overline D(0,R)$ is finite: by step 1.1 every $\lambda=m\omega_1+n\omega_2\in S$ has $\max(|m|,|n|)\le R/c$, and only finitely many integer pairs satisfy this. Since $0\in S$, the number $\delta:=\operatorname{dist}(P,S)=\min\{|P-\lambda|:\lambda\in S\}$ is positive and $\delta\le|P|$; and for $\lambda\in\Lambda\setminus S$ one has $|P-\lambda|\ge|\lambda|-|P|>R-|P|=|P|+1>\delta$ by [F3]. Hence $\operatorname{dist}(P,\Lambda)=\delta>0$. The open sets $q(D(z,\delta/2))$ and $q(D(z',\delta/2))$ are then disjoint: a common class would give $u\in D(z,\delta/2)$ and $u'\in D(z',\delta/2)$ with $u-u'\in\Lambda$, whence $|P-(u-u')|\le|z-u|+|u'-z'|<\delta$, contradicting $\operatorname{dist}(P,\Lambda)=\delta$; both sets are open by step 3.2. Therefore $T$ is Hausdorff. [F3, F9, step 1.1, step 3.2]

5.1 **The deck group is $\mathbb Z^2$.** By step 4.1 the map $\lambda\mapsto\tau_\lambda$ is a bijection $\Lambda\to\operatorname{Deck}(q)$ and $\tau_\lambda\circ\tau_\mu=\tau_{\lambda+\mu}$, $\tau_0=\operatorname{id}_{\mathbb C}$, so it is a group isomorphism [F15]. The map $\mathbb Z^2\to\Lambda$, $(m,n)\mapsto m\omega_1+n\omega_2$, is surjective by the definition of $\Lambda$ and injective because $m\omega_1+n\omega_2=0$ forces $m=n=0$, and it is additive; hence it too is an isomorphism [F15]. Therefore $\operatorname{Deck}(q)\cong\Lambda\cong\mathbb Z^2$. [F3, F15, step 1.1, step 4.1]

5.2 **Transitions are translations.** Let $z,z'\in\mathbb C$ with $W:=U_z\cap U_{z'}\neq\varnothing$. For $u\in\varphi_z(W)\subseteq D_z$ the point $\varphi_{z'}(q(u))$ lies in $D_{z'}$ and satisfies $q(\varphi_{z'}(q(u)))=q(u)$, since $q(u)\in W\subseteq U_{z'}$ and $\varphi_{z'}$ inverts $q$ on $D_{z'}$ (step 4.2); hence $\lambda(u):=\varphi_{z'}(q(u))-u\in\Lambda$ by the orbit description of the classes. The map $u\mapsto\lambda(u)$ is continuous on the open set $\varphi_z(W)$ (compositions of continuous maps and subtraction, steps 2.1 and 4.2) and its values are separated: $|\lambda-\mu|\ge c$ for distinct $\lambda,\mu\in\Lambda$ (step 1.1). Given $u$ in the domain, continuity gives $\delta>0$ with $|\lambda(u')-\lambda(u)|<c$ whenever $|u'-u|<\delta$; two distinct values of $\lambda$ would differ by at least $c$, so $\lambda$ is constant on $\varphi_z(W)\cap D(u,\delta)$. Thus the transition $\varphi_{z'}\circ\varphi_z^{-1}$, which on $\varphi_z(W)$ is the map $u\mapsto u+\lambda(u)$, agrees near each of its points with a single translation $u\mapsto u+\lambda_0$, an entire function [F11]; the same argument with $z$ and $z'$ interchanged shows that the inverse transition $\varphi_z\circ\varphi_{z'}^{-1}$ is holomorphic too. Hence the charts $\varphi_z$ are pairwise compatible. [F11, F3, step 1.1, step 2.1, step 4.2]

5.3 **The square schema realizes the quotient.** Let $g:[0,1]^2\to T$ be $g(s,t):=q(s\omega_1+t\omega_2)$, continuous as the composite of the continuous map $T_0$ (step 2.1) with $q$ [F9]. It respects the side pairings: $g(1,t)=q(\omega_1+t\omega_2)=q(t\omega_2)=g(0,t)$ and $g(s,1)=q(s\omega_1+\omega_2)=q(s\omega_1)=g(s,0)$, since $\omega_1,\omega_2\in\Lambda$ and the classes of $q$ are the orbits [F5]. By the characteristic property of the quotient $Y$ of the square by these pairings [F9, F12], $g$ induces a continuous map $\bar g:Y\to T$ with $\bar g\circ\pi=g$, where $\pi$ is the quotient map of the schema. The map $\bar g$ is surjective: given $[z]\in T$ write $z=T_0(s,t)$ (step 1.1), decompose $s=m+s'$, $t=n+t'$ with $m,n\in\mathbb Z$ and $s',t'\in[0,1)$, and use $T_0(s,t)-T_0(s',t')=T_0(m,n)\in\Lambda$ to get $[z]=g(s',t')$. It is injective: if $g(s,t)=g(s',t')$ then $T_0(s-s',t-t')\in\Lambda=T_0(\mathbb Z^2)$, so $(s-s',t-t')\in\mathbb Z^2$ by the injectivity of $T_0$ (step 1.1); since all four coordinates lie in $[0,1]$, the differences $s-s'$ and $t-t'$ lie in $\{-1,0,1\}$ and each is nonzero exactly when the two points lie on a paired pair of sides, so $(s,t)$ and $(s',t')$ have the same image under $\pi$. Hence $\bar g$ is a continuous bijection; since $Y$ is compact [F12] and $T$ is Hausdorff (step 4.3), $\bar g$ is a homeomorphism [F10]. [F5, F9, F10, F12, step 1.1, step 2.1, step 4.3]

6.1 **The quotient is a compact Riemann surface.** The charts $\{\varphi_z\}_{z\in\mathbb C}$ cover $T$ and have holomorphic transitions in both directions (steps 4.2 and 5.2), so they form a holomorphic atlas; the space $T$ is nonempty, connected as the image of the connected space $\mathbb C$ under the continuous surjection $q$ [F8, step 1.2], Hausdorff by step 4.3, and second countable because it is homeomorphic to $Y$ (step 5.3) and $Y$ is second countable [F12]. Therefore $T$ is a Riemann surface by [F11], and it is compact because $Y$ is compact [F12] and homeomorphic to $T$ (step 5.3). The map $q$ is holomorphic for this atlas: on $D_z$ the chart expression $\varphi_z\circ q$ is the identity, because $\varphi_z$ inverts $q|_{D_z}$ (step 4.2). [F8, F11, F12, step 1.2, step 4.2, step 5.2, step 4.3, step 5.3]

7.1 **The genus is one.** By [F12] the same square schema realizes the torus $T^2$, so $Y\cong T^2$, and with step 5.3 this gives $T\cong T^2=\#_1T^2$ [F13]. The topological classification of compact Riemann surfaces [F13] supplies exactly one $g\ge0$ with $T\cong\#_gT^2$; since $g=1$ has this property, the genus of the compact Riemann surface $T$ is $1$. [F13, step 5.3, step 6.1]

8.1 **The type is parabolic.** By steps 6.1 and 7.1 the space $T$ is a compact Riemann surface of genus $1$, so the compact-genus corollary [F14] gives $T$ parabolic universal-covering type under the Axiom of Choice [F1]. Moreover the exhibited covering $q:\mathbb C\to T$ is holomorphic (step 6.1) with simply connected total space $\mathbb C$ (step 1.2), hence is a holomorphic universal cover of $T$ whose model is $\mathbb C$, in agreement with the definition of parabolic type [F14]. This proves all three assertions of the Example. [F1, F14, step 1.2, step 6.1, step 7.1] ∎
