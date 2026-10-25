---
id: thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
kind: theorem
title: "Braid group as boundary-fixed punctured-disk mapping classes"
status: published
origin: pipeline
landmark: true
deps: [thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk,
       lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism,
       def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       prop-compact-open-is-uniform-on-a-compact-metric-domain,
       def-elementary-geometric-half-twist,
       def-the-standard-smooth-step-function,
       lem-configuration-loops-admit-smooth-separated-point-motion-representatives,
       lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-fundamental-group-laws,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.4-1.5, printed pp. 6-8"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3 and the proof of Theorem 1, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 2.2.1 printed pp. 50-51 and section 4.2 printed pp. 101-106"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $n\in\mathbb N$, let $Q_n$ be the base
configuration of [[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]],
and let $G_n$ be the group of geometric braid-isotopy classes based at $Q_n$
([[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).
Then:

1. the composite
   $$\Psi:=\delta\circ(\iota^{C}_*)^{-1}\circ\Phi:G_n\longrightarrow\operatorname{Mod}(D^2,Q_n;\partial D^2),$$
   built from the inverse-slicing isomorphism $\Phi$ of
   [[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]],
   the inverse of the open-to-closed configuration isomorphism $\iota^{C}_*$ of
   [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]],
   and the boundary isomorphism $\delta$ of
   [[thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk]], is
   a group isomorphism;
2. for $1\le i\le n-1$, the image of the standard positive geometric half twist
   $\sigma_i$ of [[def-elementary-geometric-half-twist]] is the mapping class of
   the explicit boundary-fixed homeomorphism $H_i$ of step 1.3, which is
   supported in the support disc $U_i$ and exchanges $q_i$ and $q_{i+1}$;
3. every class in $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is represented by a
   diffeomorphism of $D^2$ fixing $\partial D^2$ pointwise that is the time-one
   map of a smooth isotopy from the identity.

All three assertions hold for every $n\ge0$; for $n\le1$ the half-twist assertion
is vacuous because there is no index $i$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the number $n$, the base configuration $Q_n$ with
its spacing $h=1/(4(n+1))$, the groups $G_n$ and
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$, and an index $i$ with
$1\le i\le n-1$ for the half-twist clauses.

[L1] Slicing is a bijection $S:G_n\to\pi_1(C_n(\operatorname{int}D^2),[Q_n])$,
and $\Phi([\beta])=(\iota^{C}_*[S(\beta)])^{-1}$ defines a group isomorphism
$\Phi:G_n\to\pi_1(C_n(D^2),[Q_n])$
([[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).

[L2] The open-to-closed inclusion induces an isomorphism
$\iota^{C}_*:\pi_1(C_n(\operatorname{int}D^2),[q])\to\pi_1(C_n(D^2),[q])$ for
every configuration $q$ of interior points, compatibly with the quotient maps
([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[L3] $\delta:\pi_1(C_n(\operatorname{int}D^2),[Q_n])\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$
is a group isomorphism ([[thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk]]).

[L4] $\delta([\alpha])=[\widetilde\alpha(1)^{-1}]$ for any lift
$\widetilde\alpha$ of $\alpha$ with $\widetilde\alpha(0)=\operatorname{id}$, and
$\delta$ is well defined on path-homotopy classes and multiplicative
([[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]],
[[lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism]]).

[L5] The half twist has coordinates $(\sigma_i)_i(t)=m_i+\rho(t)$ and
$(\sigma_i)_{i+1}(t)=m_i-\rho(t)$ with all other coordinates fixed, where
$m_i=q_i+(h,0)$, $\rho(0)=(-h,0)$, $\rho(\tfrac12)=(0,-h)$, $\rho(1)=(h,0)$,
$\lVert\rho(t)\rVert_2\le h$ and $\rho(t)\ne0$; the support disc $U_i$ has
radius $3h/2$, lies in $\operatorname{int}D^2$, contains exactly $q_i,q_{i+1}$
of the base points, and those two satisfy $\lVert q_i-m_i\rVert_2=\lVert q_{i+1}-m_i\rVert_2=h$
while every other base point has distance at least $3h$ from $m_i$
([[def-elementary-geometric-half-twist]]).

[L6] The standard smooth step function $\sigma$ is smooth, takes values in
$[0,1]$, equals $0$ on $(-\infty,0]$ and equals $1$ on $[1,\infty)$
([[def-the-standard-smooth-step-function]]).

[L7] $\operatorname{Homeo}^+(D^2,\partial D^2)$ and its subgroup $F$ are
topological groups in the compact-open topology, which on $D^2$ is uniform
convergence, and composition and inversion are continuous; path components of
this group are its isotopy classes and
$\operatorname{Mod}(D^2,Q_n;\partial D^2)=\pi_0(F)$
([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]],
[[prop-compact-open-is-uniform-on-a-compact-metric-domain]]).

[L8] Every based loop of $C_n(\operatorname{int}D^2)$ at $[Q_n]$ is path
homotopic relative to $\{0,1\}$ to a based loop whose unique ordered lift from
$Q_n$ consists of smooth, pairwise collision-free coordinate paths, constant near
the two time endpoints
([[lem-configuration-loops-admit-smooth-separated-point-motion-representatives]]).

[L9] Under $\mathrm{AC}_\omega$, smooth collision-free paths
$z_1,\dots,z_n:\mathbb R\to\operatorname{int}D^2$ constant on $(-\infty,0]$ and
on $[1,\infty)$ extend to a smooth isotopy $\Phi:D^2\times[0,1]\to D^2$ with
$\Phi_0=\operatorname{id}$, every $\Phi_s$ a diffeomorphism of $D^2$ fixing
$\partial D^2$ pointwise, and $\Phi_s(z_j(0))=z_j(s)$
([[lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies]]).

[L10] The Axiom of Choice implies the Axiom of Dependent Choice, which implies
countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]);
hence [L9] applies under the present assumption
([[def-axiom-of-choice]]).

[L11] The reversed loop represents the inverse class and loop classes form a
group under the first-loop-then-second product
([[thm-fundamental-group-laws]]).

## Proof
**Proof technique:** direct.

1.1 *The composite is an isomorphism.* By [L1] the map $\Phi$ is a group isomorphism onto $\pi_1(C_n(D^2),[Q_n])$, whose basepoint is the orbit of the same tuple $Q_n$ used in the definition of $G_n$. By [L2] the induced map $\iota^{C}_*$ is a group isomorphism at that configuration, so its inverse is a group isomorphism; by [L3] the boundary map $\delta$ is a group isomorphism onto $\operatorname{Mod}(D^2,Q_n;\partial D^2)$. A composite of group isomorphisms is a group isomorphism, so $\Psi=\delta\circ(\iota^{C}_*)^{-1}\circ\Phi$ is one, and this holds for every $n\ge0$ because [L1], [L2] and [L3] all include the cases $n=0$ and $n=1$. [L1, L2, L3]

1.2 *Reading the inverse endpoint off a lift.* Let $\alpha:I\to C_n(\operatorname{int}D^2)$ be a based loop at $[Q_n]$ and let $g:I\to\operatorname{Homeo}^+(D^2,\partial D^2)$ be a lift of $\alpha$ with $g(0)=\operatorname{id}$; write $h:=g(1)\in F$. Define $g^{-}:I\to\operatorname{Homeo}^+(D^2,\partial D^2)$ by $g^{-}(t):=g(1-t)\circ h^{-1}$; it is continuous by [L7], satisfies $g^{-}(0)=h\circ h^{-1}=\operatorname{id}$ and $g^{-}(1)=\operatorname{id}\circ h^{-1}=h^{-1}$, and it lifts the reversed loop because $$\operatorname{ev}\bigl(g^{-}(t)\bigr)=\bigl[g(1-t)\bigl(h^{-1}(Q_n)\bigr)\bigr]=\bigl[g(1-t)(Q_n)\bigr]=\alpha(1-t)$$ for all $t$, the middle equality holding because $h\in F$ preserves $Q_n$ setwise. Since the reversed loop represents the inverse class by [L11], [L4] gives $\delta([\alpha]^{-1})=\delta([\alpha^{-1}])=[(h^{-1})^{-1}]=[h]$. Applying this to $\alpha=S(\beta)$ and using $\Phi([\beta])=(\iota^{C}_*[S(\beta)])^{-1}$ from [L1] together with the fact that the group isomorphism $(\iota^{C}_*)^{-1}$ carries inverses to inverses, we obtain $$\Psi([\beta])=\delta\bigl([S(\beta)]^{-1}\bigr)=[h_\beta],$$ where $h_\beta\in F$ is the endpoint of any lift of the raw slice loop $S(\beta)$ with initial value $\operatorname{id}$. [L1, L4, L7, L11]

1.3 *The supported half rotation and its point motion.* Put $\theta(r):=\sigma\bigl((11h/8-r)/(h/8)\bigr)$ for $r\ge0$, so that $\theta$ is smooth with values in $[0,1]$ by [L6], equals $1$ for $r\le5h/4$ and equals $0$ for $r\ge11h/8$. For $x\in D^2$ and $s\in I$ let $R(\alpha)$ denote rotation about the origin by the angle $\alpha$ and set $$H_s(x):=m_i+R\bigl(\pi s\,\theta(\lVert x-m_i\rVert_2)\bigr)(x-m_i).$$ Since $\theta=0$ beyond radius $11h/8$, the map $H_s$ is the identity outside the disc of radius $11h/8$ about $m_i$, which lies in $U_i\subseteq\operatorname{int}D^2$ by [L5]; in polar coordinates about $m_i$ it is $(r,\varphi)\mapsto(r,\varphi+\pi s\theta(r))$, with inverse $(r,\varphi)\mapsto(r,\varphi-\pi s\theta(r))$, so each $H_s$ is a homeomorphism of $D^2$ that fixes $U_i$-exterior points and in particular fixes $\partial D^2$ pointwise. The map $(s,x)\mapsto H_s(x)$ is continuous, and $H_0=\operatorname{id}$. Write $H_i:=H_1$ for the time-one map of this family at the fixed adjacent index $i$. For the two adjacent marked points, [L5] gives $\lVert q_i-m_i\rVert_2=\lVert q_{i+1}-m_i\rVert_2=h\le5h/4$, so $\theta=1$ there and $$H_s(q_i)=m_i+h(-\cos\pi s,-\sin\pi s),\qquad H_s(q_{i+1})=m_i+h(\cos\pi s,\sin\pi s):$$ the pair $\{H_s(q_i),H_s(q_{i+1})\}$ is $\{m_i\pm h(\cos\pi s,\sin\pi s)\}$ and describes the lower semicircle of radius $h$ about $m_i$ from $\{q_i,q_{i+1}\}$ at $s=0$ to $\{q_{i+1},q_i\}$ at $s=1$, passing through $\{m_i\pm(0,h)\}$ at $s=\tfrac12$; by [L5] every other base point has distance at least $3h\ge11h/8$ from $m_i$ and is fixed throughout. Consequently $H_0(Q_n)=H_1(Q_n)=Q_n$ as unordered marked sets, so $s\mapsto\operatorname{ev}(H_s)=[H_s(Q_n)]$ is a based loop of $C_n(\operatorname{int}D^2)$ at $[Q_n]$, and the family $$w_r(s):=(1-r)\rho(s)+r\,h(-\cos\pi s,-\sin\pi s),\qquad r,s\in I,$$ defines a homotopy of the moving pairs: by [L5], $\rho(s)$ has second coordinate $-2sh$ for $s\le\tfrac12$ and $2h(s-1)$ for $s\ge\tfrac12$, both strictly negative for $0<s<1$, while $-\sin\pi s<0$ for $0<s<1$; hence the linear interpolation $w_r(s)$ has strictly negative second coordinate and is nonzero for $0<s<1$, and $w_r(0)=(-h,0)$, $w_r(1)=(h,0)$ are nonzero, so the interpolated pairs $\{m_i\pm w_r(s)\}$ are collision-free for all $r,s$, lie within distance $h$ of $m_i$, and are separated from all fixed base points by at least $2h$; composing with the quotient map gives a path homotopy relative to $\{0,1\}$ from the raw slice loop $S(\sigma_i)$ of [L5] to $\operatorname{ev}\circ H$. [L5, L6, L7]

2.1 *The positive half twist maps to the supported half rotation.* The element $H_1\in\operatorname{Homeo}^+(D^2,\partial D^2)$ fixes $\partial D^2$ pointwise by step 1.3 and satisfies $H_1(Q_n)=Q_n$ as a set, because it exchanges $q_i$ and $q_{i+1}$ and fixes every other base point; hence $H_1\in F$ and $[H_1]\in\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is defined. The family $s\mapsto H_s$ is a lift with initial value $\operatorname{id}$ of the based loop $\operatorname{ev}\circ H$, so by [L4] its class satisfies $\delta([\operatorname{ev}\circ H])=[H_1^{-1}]$; since $s\mapsto\operatorname{ev}(H_s)$ is path homotopic relative to $\{0,1\}$ to $S(\sigma_i)$ by step 1.3, the well-definedness of $\delta$ from [L4] gives $\delta([S(\sigma_i)])=[H_1^{-1}]$, and applying the isomorphism [L3] to inverses gives $\delta([S(\sigma_i)]^{-1})=[H_1]$. Step 1.2 turns the left-hand side into the class $[h_{\sigma_i}]$ of the lift endpoint of $S(\sigma_i)$, so $\Psi([\sigma_i])=[H_1]$: the standard positive half twist maps to the class of the supported half rotation, which is supported in $U_i$ and exchanges the adjacent pair. [L3, L4, step 1.2, step 1.3]

2.2 *Smooth boundary-fixed representatives.* Let $[f]\in\operatorname{Mod}(D^2,Q_n;\partial D^2)$ and put $[\beta]:=\Psi^{-1}([f])\in G_n$, so that $[f]=[h_\beta]$ with $h_\beta$ the endpoint of a lift of $S(\beta)$ from $\operatorname{id}$ by step 1.2. By [L8] the based loop $S(\beta)$ is path homotopic relative to $\{0,1\}$ to a based loop $\beta'$ whose unique ordered lift $z$ from $Q_n$ consists of smooth, pairwise collision-free paths, constant on some initial and terminal interval; extending each $z_j$ by its constant values beyond $[0,1]$ gives smooth collision-free paths $z_j:\mathbb R\to\operatorname{int}D^2$ that are constant on $(-\infty,0]$ and on $[1,\infty)$, so the extension lemma [L9], available under the present assumption by [L10], supplies a smooth $\Phi:D^2\times[0,1]\to D^2$ with $\Phi_0=\operatorname{id}$, every $\Phi_s$ a diffeomorphism of $D^2$ fixing $\partial D^2$ pointwise, and $\Phi_s(q_j)=z_j(s)$ for all $j$ and $s$, the last identity using $z_j(0)=q_j$. Then $s\mapsto\Phi_s$ is a path in $\operatorname{Homeo}^+(D^2,\partial D^2)$ from $\operatorname{id}$ that lifts $\beta'$, because $\operatorname{ev}(\Phi_s)=[\Phi_s(Q_n)]=[z(s)]=\beta'(s)$; by the computation of step 1.2 its endpoint satisfies $[\Phi_1]=\delta([\beta']^{-1})=\delta([S(\beta)]^{-1})=[f]$, the middle equality because $\beta'$ and $S(\beta)$ are path homotopic relative to endpoints and $\delta$ is well defined. Moreover $\Phi_1(Q_n)=z(1)$ is a permutation of $Q_n$, since $[z(1)]=\beta'(1)=[Q_n]$; hence $\Phi_1\in F$, and $\Phi_1$ is a diffeomorphism fixing $\partial D^2$ pointwise that is the time-one map of the smooth isotopy $\Phi$ from the identity. [L8, L9, L10, step 1.1, step 1.2]

3.1 *Conclusion and elementary cases.* Step 1.1 exhibits the isomorphism $\Psi$ of the first assertion, step 2.1 identifies $\Psi([\sigma_i])$ with the class of the explicit supported half rotation for every $1\le i\le n-1$, and step 2.2 produces the smooth boundary-fixed representative of every mapping class; this proves all three assertions. For $n=0$ the braid group and the mapping class group are trivial and the arguments above return the isomorphism of trivial groups and the identity as smooth representative; for $n=1$ there is no adjacent index, no half twist is asserted by [L5], and the same isomorphism and smooth-representative arguments apply verbatim. [L5, step 1.1, step 2.1, step 2.2] ∎

## Remarks

- The map $\Psi$ is the composite of three published or previously constructed
  maps and involves no choice of representative, lift, or connecting path: the
  Axiom of Choice enters only through the evaluation fibration and, for the
  smooth-representative clause, through the countable-choice extension of point
  motions.
- The two inversions in $\Psi$ are exactly what makes the standard *positive*
  half twist correspond to the *positive* supported half rotation: raw slicing
  already reverses products by [L1], and the inverse endpoint of [L4] reverses
  the endpoint composition again.
- For every braid class $[\beta]\in G_n$ the isomorphism computes as
  $\Psi([\beta])=[h_\beta]$, the class of the **endpoint** $h_\beta$ of a lift of
  the raw slice loop $S(\beta)$ with initial value $\operatorname{id}$ (step 1.2):
  the inverse-slicing contribution $[S(\beta)]^{-1}$ and the inverse-endpoint
  convention of $\delta$ contribute one inversion each, and they cancel. The
  endpoint $h_\beta$ lies in $F$ and satisfies $h_\beta(Q_n)=z(1)$, where $z$ is
  the ordered coordinate lift of $S(\beta)$.
- The assertion is stated for every $n\ge0$; the published model
  $B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[Q_n])$ is used only through the
  isomorphism [L1], and no Artin-presentation completeness claim is made here.
