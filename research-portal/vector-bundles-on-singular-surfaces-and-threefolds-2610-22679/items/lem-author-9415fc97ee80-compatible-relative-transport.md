---
id: lem-author-9415fc97ee80-compatible-relative-transport
kind: lemma
title: Compatible comparisons transport relative objects and support fibers
status: published
domain: mathematics
deps:
  - def-supported-complex-indexing
  - math:def-triangulated-category
  - math:def-morphism-and-isomorphism-of-triangles
  - math:def-triangulated-category-axiom-tr-three
  - math:thm-long-exact-hom-sequences-of-a-distinguished-triangle
  - math:thm-abelian-groups-form-an-abelian-category
  - math:thm-long-exact-sequence-in-cohomology
  - math:def-derived-category-of-an-abelian-category
  - math:thm-the-derived-category-inherits-a-triangulated-structure
  - math:def-rotation-of-a-triangle
  - math:prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations
dependency_roles:
  def-supported-complex-indexing: mathematical-premise
  math:def-triangulated-category: mathematical-premise
  math:def-morphism-and-isomorphism-of-triangles: mathematical-premise
  math:def-triangulated-category-axiom-tr-three: mathematical-premise
  math:thm-long-exact-hom-sequences-of-a-distinguished-triangle: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:thm-long-exact-sequence-in-cohomology: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:thm-the-derived-category-inherits-a-triangulated-structure: mathematical-premise
  math:def-rotation-of-a-triangle: mathematical-premise
  math:prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 12
---

## Statement
In a triangulated category, consider two specified distinguished triangles $A\xrightarrow{f} B\to Q\to A[1]$ and $A'\xrightarrow{f'} B'\to Q'\to A'[1]$. If isomorphisms $u:A\to A'$ and $v:B\to B'$ satisfy $vf=f'u$, there exists an isomorphism $w:Q\to Q'$ completing a morphism of triangles; uniqueness of $w$ is not asserted. In particular any two choices of a cone for the same first arrow are isomorphic compatibly with the first two objects, without making cones a functor on an arbitrary triangulated category.

For the support setting, take $X,T,U=X\setminus T$ and cochain complexes of abelian groups as in the support-fiber interface. For a strictly commuting square between restriction maps $f:C(X)\to C(U)$ and $g:D(X)\to D(U)$, with vertical quasi-isomorphisms $u:C(X)\to D(X)$ and $v:C(U)\to D(U)$, the coordinatewise map $F(f)\to F(g)$ on the explicit support fibers is a quasi-isomorphism and respects their projections to the global complexes. Here a quasi-isomorphism means a cochain map inducing isomorphisms in all cohomological degrees, and $F(f)^n=C(X)^n\oplus C(U)^{n-1}$ with differential $(a,b)\mapsto(d a,f(a)-d b)$.

More generally work in $D(\mathbf{Ab})$, the localization of the homotopy category of unbounded cochain complexes of abelian groups at quasi-isomorphisms, under the standing size convention of a small category of complexes or supplied small cofinal denominator families. Suppose isomorphisms $u:C(X)\to D(X)$ and $v:C(U)\to D(U)$ in this derived category satisfy $vf=gu$ there. For any chosen fiber triangles $F\xrightarrow{p}C(X)\xrightarrow{f}C(U)\to F[1]$ and $G\xrightarrow{q}D(X)\xrightarrow{g}D(U)\to G[1]$, there exists an isomorphism $h:F\to G$ with $qh=up$ completing a morphism of these triangles. For cochain representatives one may use the explicit support-fiber models above; strict representatives for the entire comparison square are not required. No unique or functorial choice of $h$ is asserted.

Consequently compatible derived comparisons on the ambient scheme and its open complement suffice to transport a supplied purity calculation for its support object by this construction, together with the support-to-global map. The purity identification and the compatible comparisons remain application premises. A separately supplied direct compatible comparison of support objects may also suffice; no universal necessity of ambient and open comparisons is asserted. Unrelated isomorphisms of individual cohomology groups do not by themselves supply the commuting derived comparison used here.

## Statement references
[[def-supported-complex-indexing]]

[[math:def-triangulated-category]]

[[math:def-morphism-and-isomorphism-of-triangles]]

[[math:def-derived-category-of-an-abelian-category]]

## Facts & Assumptions

**Given:** The two distinguished triangles and their commuting first-arrow square; separately the strict cochain square, or the commuting square of derived isomorphisms and chosen fiber triangles, with the size convention in the Statement.

**Goal:** Establish cone transport, strict support-fiber transport, and derived support-fiber transport, retaining the support-to-global maps and the nonuniqueness qualifications.

[F1] A triangulated category has its specified additive translation and distinguished triangles. A morphism of triangles is a triple commuting with all three arrows, including the translated first component. [[math:def-triangulated-category]], [[math:def-morphism-and-isomorphism-of-triangles]]

[F2] TR3 supplies some third map completing a commuting first-arrow square to a morphism of distinguished triangles. [[math:def-triangulated-category-axiom-tr-three]]

[F3] Representable Hom gives long exact sequences on distinguished triangles, with maps induced by the triangle arrows. [[math:thm-long-exact-hom-sequences-of-a-distinguished-triangle]]

[F4] The cochain, cohomology, quasi-isomorphism, shift, cone and explicit support-fiber conventions, including the projection $F(f)\to C(X)$, are those of the support-fiber interface. In particular $A[k]^n=A^{n+k}$ has differential $(-1)^k d_A$, and $\operatorname{Cone}(f)^n=B^n\oplus A^{n+1}$ has differential $(b,a)\mapsto(d_Bb+f(a),-d_Aa)$. [[def-supported-complex-indexing]]

[F5] Abelian groups and homomorphisms form an abelian category. A short exact sequence of cochain complexes in an abelian category has its natural long exact cohomology sequence. [[math:thm-abelian-groups-form-an-abelian-category]], [[math:thm-long-exact-sequence-in-cohomology]]

[F6] The derived category is the roof localization of the homotopy category at quasi-isomorphisms under the stated size convention, with the cochain shifts and cone convention of [F4]. [[math:def-derived-category-of-an-abelian-category]]

[F7] The derived category is triangulated by localized cone triangles, and localization is exact. [[math:thm-the-derived-category-inherits-a-triangulated-structure]]

[F8] Signed rotations and integral translates of distinguished triangles are distinguished. For $A\to B\to K\xrightarrow{r}A[1]$, inverse rotation starts $K[-1]\xrightarrow{-r[-1]}A\to B$. [[math:def-rotation-of-a-triangle]], [[math:prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations]]

## Proof

1.1 By [F1] and [F2], choose $w$ completing the given triangle square. For every object $T$, [F3] gives a commuting ladder of exact five-term sequences centered on $\operatorname{Hom}(T,Q)\to\operatorname{Hom}(T,Q')$, whose other four vertical maps are isomorphisms induced by $u,v$ and their translates. Here is the exactness argument, to be used again below. Denote a general such ladder by $E_1\xrightarrow{d_1}E_2\xrightarrow{d_2}E_3\xrightarrow{d_3}E_4\xrightarrow{d_4}E_5$ and its primed row, with vertical maps $a_i$, all except $a_3$ isomorphisms. For $x'\in E'_3$, put $y=a_4^{-1}d'_3x'$. Injectivity of $a_5$ gives $d_4y=0$, so $y=d_3x$ for some $x\in E_3$. The difference $x'-a_3x$ lies in $\ker d'_3=\operatorname{im}d'_2$; lifting its preimage through $a_2$ and adding its $d_2$ image to $x$ proves surjectivity of $a_3$. If $a_3x=0$, injectivity of $a_4$ gives $x=d_2z$ for some $z\in E_2$. Then $a_2z\in\ker d'_2=\operatorname{im}d'_1$. Lift a preimage through $a_1$; injectivity of $a_2$ shows $z\in\operatorname{im}d_1$, hence $x=0$. Thus $\operatorname{Hom}(T,w)$ is bijective. Taking $T=Q'$ gives $h:Q'\to Q$ with $wh=\operatorname{id}_{Q'}$; injectivity for $T=Q$ applied to $w(hw-\operatorname{id}_Q)=0$ gives $hw=\operatorname{id}_Q$. Hence $w$ is an isomorphism of the third objects, and [F1] makes the triple an isomorphism of triangles. Applying this with identity maps on the first two objects compares any two cone choices. TR3 supplies existence and does not assert uniqueness, so this reasoning does not select a functorial cone. [F1, F2, F3, given, algebra]

2.1 In the strict cochain case [F4] gives the coordinatewise map $(a,b)\mapsto(u(a),v(b))$. Its compatibility with differentials is exactly $vf=gu$, and its projections commute with $u$. The inclusion $b\mapsto(0,b)$ and the projection give a degreewise short exact sequence $0\to C(U)[-1]\to F(f)\to C(X)\to0$, and likewise for $g$. By [F5], their comparison gives a commuting ladder of long exact cohomology sequences. The outer vertical maps in the five-term segment centered on $H^n(F(f))\to H^n(F(g))$ are isomorphisms: they come from $u,v$ and $H^n(B[-1])=H^{n-1}(B)$. The chase in step 1.1 proves the fiber map is a quasi-isomorphism. For the general derived comparison use [F6] and [F7] with the abelian category in [F5]. For any cochain map $f:A\to B$, the signed permutation $J:F(f)\to\operatorname{Cone}(f)[-1]$, $J(a,b)=(b,-a)$, is a cochain isomorphism: both $dJ(a,b)$ and $Jd(a,b)$ equal $(f(a)-d_Bb,-d_Aa)$. Under inverse rotation of its cone triangle, the map $\operatorname{Cone}(f)[-1]\to A$ is minus the shifted cone projection by [F8], and its composite with $J$ is $a$. Thus localization identifies the explicit model, with its support-to-global map, as a fiber triangle. Arbitrary derived morphisms and their chosen fiber triangles have the meaning of [F4] and [F6]. Rotate the two specified fiber triangles to $C(X)\to C(U)\to F[1]\to C(X)[1]$ and $D(X)\to D(U)\to G[1]\to D(X)[1]$ using [F8]. Apply step 1.1 to $u,v$ to obtain an isomorphism $w:F[1]\to G[1]$ of their third objects. Put $h=w[-1]$ using the translation coherence. The final square of that triangle morphism reads $(-q[1])w=u[1](-p[1])$; shifting back and cancelling signs gives $qh=up$. Its other squares give the claimed morphism of fiber triangles. This argument uses only a square commuting in the derived category. Composing with any supplied purity identification transports that calculation and its global map, establishing the stated sufficient conditions without a uniqueness or necessity claim. [F1, F4, F5, F6, F7, F8, given, step 1.1, construct, algebra] ∎
