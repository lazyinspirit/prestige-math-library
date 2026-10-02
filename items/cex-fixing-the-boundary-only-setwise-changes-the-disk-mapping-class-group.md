---
id: cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group
kind: counterexample
title: "Setwise boundary preservation kills a nontrivial braid"
status: draft
origin: pipeline
landmark: false
deps: [def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
       lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism,
       thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk,
       lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration,
       prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace,
       thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
       thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       def-unordered-configuration-space,
       def-ordered-configuration-space,
       def-elementary-geometric-half-twist,
       def-based-loops-and-fundamental-group,
       thm-quotient-universal-property,
       thm-induced-fundamental-group-map-functoriality,
       cor-geometric-unit-circle-has-fundamental-group-z,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.4-1.5, printed pp. 5-8"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 2.2.1, printed pp. 50-51"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
verification:
  precheck: pass
---

## Statement refuted

**Refuted claim:** in the two-punctured disc the boundary convention does not
affect isotopy classes. Precisely: if a homeomorphism $f$ of $D^2$ fixes
$\partial D^2$ pointwise and preserves $Q_2$ setwise, and $f$ is isotopic to the
identity through homeomorphisms that preserve $\partial D^2$ and $Q_2$
setwise, then $f$ is already isotopic to the identity through homeomorphisms
that fix $\partial D^2$ pointwise and preserve $Q_2$ setwise; equivalently, the
assignment that views a pointwise-boundary isotopy class as a setwise-boundary
isotopy class would be injective.

The witness is the **positive full twist** of the two punctures. Let
$\rho_-(t):=[e^{-2\pi it}q_1,\,e^{-2\pi it}q_2]$ be the clockwise rigid full
rotation loop in the unordered configuration space
$C_2(\operatorname{int}D^2)$ ([[def-unordered-configuration-space]]), and let
$P:I\to\operatorname{Homeo}^+(D^2,\partial D^2)$ be a lift of $\rho_-$ whose
initial homeomorphism is the identity, which exists because evaluation on the
marked set is a fibration
([[lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration]]).
Then $f:=P_1^{-1}$ fixes $\partial D^2$ pointwise and preserves $Q_2$ setwise,
and:

1. $[f]$ is not the identity of $\operatorname{Mod}(D^2,Q_2;\partial D^2)$; it
   is the class $\Psi([\sigma_1]^2)$ of the square of the standard positive half
   twist $\sigma_1$, the positive full twist
   ([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
   [[def-elementary-geometric-half-twist]]);
2. the formula $G_t(x):=P_t^{-1}(e^{-2\pi it}x)$ defines an isotopy from
   $\operatorname{id}$ to $f$ whose every time preserves $\partial D^2$ and
   $Q_2$ setwise.

So one and the same homeomorphism of the pair $(D^2,Q_2)$ is isotopic to the
identity through setwise-boundary homeomorphisms and is *not* isotopic to the
identity rel $\partial D^2$: the boundary circle must be fixed pointwise, not
merely preserved.

**What is and is not claimed.** Only the passage from a setwise-boundary
isotopy to a pointwise-boundary one is refuted, and it is refuted by one
explicit class, the positive full twist. Nothing here asserts that the
setwise-boundary relation fails to be an equivalence relation, nor that any
class other than this full twist becomes trivial, nor any statement about the
punctured plane or the sphere.

## Facts & Assumptions

**Given:** The Axiom of Choice, the closed unit disc $D^2\subseteq\mathbb C$
with boundary circle $\partial D^2$, the base configuration $Q_2=(q_1,q_2)$ with
$h=\frac1{12}$, $q_1=(-h,0)$, $q_2=(h,0)$ and midpoint $m_1=(0,0)$, the groups
$E=\operatorname{Homeo}^+(D^2,\partial D^2)$ and
$F=\operatorname{Homeo}^+(D^2,\partial D^2;Q_2)$, the loop
$\rho_-(t)=[e^{-2\pi it}Q_2]$ in $C_2(\operatorname{int}D^2)$, and a lift
$P:I\to E$ of $\rho_-$ with $P_0=\operatorname{id}$.

[F1] $\operatorname{Mod}(D^2,Q_2;\partial D^2)=\pi_0(F)$ is the set of isotopy
classes rel $\partial D^2$ of homeomorphisms that fix $\partial D^2$ pointwise
and preserve $Q_2$ setwise; $E$ and $F$ carry the compact-open topology, which
on $D^2$ is uniform convergence, the group operations are continuous, and a
path in $E$ transposes to an isotopy of $D^2$
([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[F2] Under AC the evaluation map $\operatorname{ev}:E\to C_2(\operatorname{int}
D^2)$, $\operatorname{ev}(g):=[g(Q_2)]$, is a Hurewicz fibration with fibre
exactly $F$ over $[Q_2]$; in particular every path in the base lifts to a path
in $E$ with any prescribed initial point
([[lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration]],
[[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]]).

[F3] $\delta([\alpha])=[\widetilde\alpha(1)^{-1}]$ for a lift $\widetilde\alpha$
of $\alpha$ with $\widetilde\alpha(0)=\operatorname{id}$, and $\delta$ is a
well-defined group homomorphism
$\pi_1(C_2(\operatorname{int}D^2),[Q_2])\to\operatorname{Mod}(D^2,Q_2;\partial
D^2)$
([[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]],
[[lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism]]).

[F4] $\delta$ is a group isomorphism, hence injective
([[thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk]]).

[F5] $\Psi=\delta\circ(\iota^{C}_*)^{-1}\circ\Phi$ is a group isomorphism from
the geometric braid group $G_2$ at $Q_2$ to
$\operatorname{Mod}(D^2,Q_2;\partial D^2)$, where $\Phi$ is the inverse-slicing
isomorphism of [F6], and $\Psi$ sends the class of the standard positive half
twist $\sigma_1$ to the class of its explicit supported half rotation
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
[[def-elementary-geometric-half-twist]]).

[F6] At the shared base configuration $Q_n$ the geometric braid-isotopy classes
form a group $G_n$ with stacking product $[\gamma][\beta]=[\gamma\star\beta]$;
raw slicing $[\beta]\mapsto[S(\beta)]$ is a bijection onto
$\pi_1(C_n(\operatorname{int}D^2),[Q_n])$ and satisfies
$[S(\gamma\star\beta)]=[S(\beta)][S(\gamma)]$, so that
$\Phi([\beta])=(\iota^{C}_*[S(\beta)])^{-1}$ is a group isomorphism onto
$\pi_1(C_n(D^2),[Q_n])$
([[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).

[F7] The inclusion-induced map
$\iota^{C}_*:\pi_1(C_2(\operatorname{int}D^2),[q])\to\pi_1(C_2(D^2),[q])$ is an
isomorphism for every interior configuration $q$
([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[F8] $C_2(\operatorname{int}D^2)=F_2(\operatorname{int}D^2)/S_2$ with quotient
map $p_2$, points written $[x]$, and two ordered configurations lie in the same
orbit exactly when their underlying coordinate sets agree
([[def-unordered-configuration-space]]). In formulas below, $\{x,y\}$ used as a point of $C_2$ abbreviates the orbit $[x,y]$ via this bijection; it is not a literal equality of an orbit of tuples with a subset of the disc.

[F9] A continuous map on a space $X$ that is constant on the fibres of a
quotient map $q:X\to Y$ factors uniquely through $q$ by a continuous map on $Y$
([[thm-quotient-universal-property]]).

[F10] $\pi_1(S^1,(1,0))\cong\mathbb Z$, and under this isomorphism the loop
$t\mapsto(\cos 2\pi nt,\sin 2\pi nt)$ corresponds to $n$, for every $n\in\mathbb
Z$ ([[cor-geometric-unit-circle-has-fundamental-group-z]]).

[F11] For composable paths $(\alpha*\beta)(s)=\alpha(2s)$ for
$s\le\tfrac12$ and $=\beta(2s-1)$ for $s\ge\tfrac12$; the product
$[\alpha][\beta]=[\alpha*\beta]$ traverses $\alpha$ first and $\beta$ second,
and the reversed loop represents the inverse class
([[def-based-loops-and-fundamental-group]]).

[F12] For a continuous map $u$ the assignment $u_*([\alpha])=[u\circ\alpha]$
is a well-defined group homomorphism
([[thm-induced-fundamental-group-map-functoriality]]).

[F13] The Axiom of Choice is assumed, and it is what makes the evaluation map
of [F2] a fibration whose paths lift ([[def-axiom-of-choice]]).

## Counterexample

1.1 **The full rotation loop in the unordered configuration space.** For $t\in I$ put $\rho_-(t):=[e^{-2\pi it}q_1,\,e^{-2\pi it}q_2]\in C_2(\operatorname{int}D^2)$. The two coordinates are distinct and both of modulus $|q_j|=h=\frac1{12}<1$, so the tuple $(e^{-2\pi it}q_1,e^{-2\pi it}q_2)$ lies in $F_2(\operatorname{int}D^2)$ for every $t$, and the map $t\mapsto(e^{-2\pi it}q_1,e^{-2\pi it}q_2)$ is continuous because complex multiplication is; hence $\rho_-$ is a well-defined continuous path in $C_2(\operatorname{int}D^2)$ with $\rho_-(0)=[Q_2]=\rho_-(1)$, since $e^0=e^{-2\pi i}=1$. So $\rho_-$ is a based loop at $[Q_2]$, and its class lies in $\pi_1(C_2(\operatorname{int}D^2),[Q_2])$, the group of [F11]. [F8, F11]

1.2 **The quotient test map.** Define $\widetilde u:F_2(\operatorname{int}D^2)\to S^1$ by $\widetilde u(x_1,x_2):=\bigl((x_1-x_2)/|x_1-x_2|\bigr)^2$, a map into the unit circle, since $x_1\neq x_2$ on the ordered configuration space and the difference, the modulus, division by a positive modulus and squaring are continuous. Swapping the two coordinates replaces $x_1-x_2$ by $-(x_1-x_2)$, so $\widetilde u(x_2,x_1)=\bigl(-(x_1-x_2)/|x_1-x_2|\bigr)^2=\widetilde u(x_1,x_2)$: the map is constant on the $S_2$-orbits. By [F9] applied to the quotient map $p_2:F_2(\operatorname{int}D^2)\to C_2(\operatorname{int}D^2)$ there is a unique continuous $u:C_2(\operatorname{int}D^2)\to S^1$ with $u([x_1,x_2])=\widetilde u(x_1,x_2)$ for every ordered pair; in particular $u(\{x,y\})=\bigl((x-y)/|x-y|\bigr)^2$ is well defined as a function of the unordered pair. [F8, F9]

1.3 **The sliced half twist and the explicit half-turn loop.** Let $S(\sigma_1)$ be the unordered slice of the standard positive half twist, so that $S(\sigma_1)(s)=[\sigma_1(s)]=[m_1+\rho(s),\,m_1-\rho(s)]$ for $s\in I$; with $m_1=(0,0)$ this is the unordered pair $\{\rho(s),-\rho(s)\}$, and the reversed path is $S(\sigma_1)^{-1}(s)=S(\sigma_1)(1-s)=\{\rho(1-s),-\rho(1-s)\}$, a loop at $[Q_2]$ because $\rho(0)=(-h,0)$ and $\rho(1)=(h,0)$ give $\{\rho(1),-\rho(1)\}=\{q_2,q_1\}=[Q_2]=\{\rho(0),-\rho(0)\}$. Put $\alpha(s):=\{h(\cos\pi s,-\sin\pi s),\,-h(\cos\pi s,-\sin\pi s)\}=\{\pm h e^{-\pi is}\}$ for $s\in I$, again a loop at $[Q_2]$. First, the concatenation $\alpha*\alpha$ is the loop $t\mapsto[e^{-2\pi it}Q_2]$: for $t\le\tfrac12$ one has $(\alpha*\alpha)(t)=\alpha(2t)=\{\pm e^{-2\pi it}h\}=\{e^{-2\pi it}q_1,e^{-2\pi it}q_2\}$, and for $t\ge\tfrac12$ one has $(\alpha*\alpha)(t)=\alpha(2t-1)=\{\pm e^{-\pi i(2t-1)}h\}=\{\pm e^{-2\pi it}h\}$, the middle pair being unchanged because the sign $e^{\pi i}=-1$ is absorbed by $\pm$. Second, $S(\sigma_1)^{-1}$ is path-homotopic to $\alpha$ relative to $\{0,1\}$: the interpolation $w_r(s):=(1-r)\rho(1-s)+r\,h(\cos\pi s,-\sin\pi s)$ satisfies $w_0(s)=\rho(1-s)$ and $w_1(s)=h(\cos\pi s,-\sin\pi s)$, and it never vanishes, because for $0<s<1$ the second coordinate of $\rho(1-s)$ is $-2(1-s)h$ for $s\ge\tfrac12$ and $-2sh$ for $s\le\tfrac12$, both strictly negative, the second coordinate $-h\sin\pi s$ of $h(\cos\pi s,-\sin\pi s)$ is strictly negative, so the convex combination has strictly negative second coordinate, while at $s=0$ and $s=1$ the two endpoints coincide and equal $(h,0)$ and $(-h,0)$; since $\rho(1-s)$ has modulus at most $h$ and $h(\cos\pi s,-\sin\pi s)$ has modulus exactly $h$, every $w_r(s)$ has modulus at most $h<1$ and the unordered pairs $\{w_r(s),-w_r(s)\}$ lie in $C_2(\operatorname{int}D^2)$ and depend continuously on $(r,s)$. [F5, F6, F8, F11]

2.1 **The lift and its endpoint.** By [F2], which is available under the Axiom of Choice [F13], the loop $\rho_-$ of step 1.1 lifts to a continuous path $P:I\to E$ with $P_0=\operatorname{id}$ and $\operatorname{ev}(P_t)=\rho_-(t)$ for all $t$; put $f:=P_1^{-1}$. Since $\operatorname{ev}(P_1)=\rho_-(1)=[Q_2]$, the homeomorphism $P_1$ lies in the fibre $F$ of [F2], so $f\in F$ and its class $[f]$ lies in $\operatorname{Mod}(D^2,Q_2;\partial D^2)=\pi_0(F)$ by [F1]; as the inverse of an element of $E$, the homeomorphism $f$ fixes $\partial D^2$ pointwise, and it preserves $Q_2$ setwise because $P_1$ does. For every $t$ the tuples $P_t(Q_2)$ and $e^{-2\pi it}Q_2$ have the same image under $\operatorname{ev}$, hence lie in the same $S_2$-orbit, so by [F8] their underlying coordinate sets agree: $P_t(\{q_1,q_2\})=\{e^{-2\pi it}q_1,e^{-2\pi it}q_2\}$ as sets. Applying $P_t^{-1}$ to the rotated set gives $P_t^{-1}(\{e^{-2\pi it}q_1,e^{-2\pi it}q_2\})=\{q_1,q_2\}$. No commutation with rotation is assumed. [step 1.1, F1, F2, F8, F13]

2.2 **The rotation loop is not nullhomotopic.** For every $t$ one has $u(\rho_-(t))=\widetilde u(e^{-2\pi it}q_1,e^{-2\pi it}q_2)=\bigl(e^{-2\pi it}(q_1-q_2)/|q_1-q_2|\bigr)^2$; since $q_1-q_2=(-2h,0)$ is a negative real number, $(q_1-q_2)/|q_1-q_2|=-1$, so $u(\rho_-(t))=(-e^{-2\pi it})^2=e^{-4\pi it}=(\cos 2\pi(-2)t,\ \sin 2\pi(-2)t)$. By [F10] the class of this loop in $\pi_1(S^1,(1,0))$ corresponds to $-2$, which is not zero, so $[u\circ\rho_-]$ is not the identity. Since $u_*$ is a group homomorphism with $u_*([\rho_-])=[u\circ\rho_-]$ by [F12], a class $[\rho_-]$ equal to the identity would give the identity here; hence $[\rho_-]\neq1$ in $\pi_1(C_2(\operatorname{int}D^2),[Q_2])$. [step 1.1, step 1.2, F10, F12]

2.3 **The rotation loop is the inverse square of the sliced half twist.** By step 1.3 the loop $\alpha$ satisfies $[S(\sigma_1)^{-1}]=[\alpha]$, and the concatenation $\alpha*\alpha$ is the loop $t\mapsto[e^{-2\pi it}Q_2]$ of step 1.1, so in the group $\pi_1(C_2(\operatorname{int}D^2),[Q_2])$ of [F11] one has $[\rho_-]=[\alpha*\alpha]=[\alpha][\alpha]=[S(\sigma_1)^{-1}]^2=[S(\sigma_1)]^{-2}$. [step 1.3, F11]

3.1 **The setwise isotopy from the identity to the full twist.** Put $R_t(x):=e^{-2\pi it}x$ and $G_t:=P_t^{-1}\circ R_t$. The map $(t,x)\mapsto G_t(x)$ is continuous: $t\mapsto P_t^{-1}$ is a continuous path by [F1], its joint evaluation is continuous, and $(t,x)\mapsto(t,R_t(x))$ is continuous. Every $G_t$ is a homeomorphism of $D^2$ with inverse $R_t^{-1}\circ P_t$. On the boundary $P_t^{-1}$ is the identity, so $G_t$ acts there as $R_t$ and preserves $\partial D^2$ setwise. Step 2.1 gives $G_t(\{q_1,q_2\})=P_t^{-1}(R_t(\{q_1,q_2\}))=\{q_1,q_2\}$, so the marked set is preserved at every time. Since $R_0=R_1=\operatorname{id}$ and $P_0=\operatorname{id}$, we have $G_0=\operatorname{id}$ and $G_1=P_1^{-1}=f$. This is the required setwise-boundary isotopy. [step 2.1, F1]

3.2 **The witness is the nontrivial positive full twist.** By [F3] and step 2.1 the boundary map evaluates on the rotation loop as $\delta([\rho_-])=[P_1^{-1}]=[f]$, and $\delta$ is injective by [F4], so step 2.2 gives $[f]\neq[\operatorname{id}]$ in $\operatorname{Mod}(D^2,Q_2;\partial D^2)$. Moreover $[f]=\Psi([\sigma_1]^2)$, the positive full twist: writing $[\sigma_1]^2=[\sigma_1\star\sigma_1]$, [F6] gives $\Phi([\sigma_1]^2)=(\iota^{C}_*[S(\sigma_1\star\sigma_1)])^{-1}=(\iota^{C}_*[S(\sigma_1)]^2)^{-1}$ and $[S(\sigma_1\star\sigma_1)]=[S(\sigma_1)]^2$, while [F7] makes $\iota^{C}_*$ an isomorphism and hence $(\iota^{C}_*)^{-1}\bigl((\iota^{C}_*[S(\sigma_1)]^2)^{-1}\bigr)=([S(\sigma_1)]^2)^{-1}=[S(\sigma_1)]^{-2}$; since $\Psi=\delta\circ(\iota^{C}_*)^{-1}\circ\Phi$ by [F5], this yields $\Psi([\sigma_1]^2)=\delta([S(\sigma_1)]^{-2})=\delta([\rho_-])=[f]$ by step 2.3, with $\Psi([\sigma_1])$ the class of the positive half twist by [F5]. [step 2.1, step 2.2, step 2.3, F3, F4, F5, F6, F7]

4.1 **Conclusion.** The homeomorphism $f=P_1^{-1}$ fixes $\partial D^2$ pointwise and preserves $Q_2$ setwise, and by step 3.1 it is isotopic to the identity through homeomorphisms preserving $\partial D^2$ and $Q_2$ setwise, but by step 3.2 it is not isotopic to the identity rel $\partial D^2$, where it represents the positive full twist $\Psi([\sigma_1]^2)$. So the pointwise-boundary and setwise-boundary conventions do not define the same isotopy classes: the assignment that views a pointwise-boundary class as a setwise-boundary class sends the nontrivial class $[f]$ to the class of the identity, and the refuted claim fails. ∎ [step 3.1, step 3.2]

## Remarks

- The rotating isotopy is exactly the boundary rotation that the definition of
  $\operatorname{Mod}(D^2,Q_2;\partial D^2)$ forbids: $G_t$ preserves the
  boundary circle setwise but moves every boundary point except at $t=0$ and
  $t=1$, so it is not a path in $E$ and cannot witness an isotopy rel
  $\partial D^2$.
- Nontriviality of the witness is detected purely configuration-theoretically:
  the squared normalized difference of the two marked points is a well-defined
  continuous function on the unordered configuration space and turns the
  rigid full rotation into a loop of degree two. The same computation exhibits
  the difference between the boundary-fixed disc and the punctured plane, where
  the analogous rotation would be an ambient isotopy.
