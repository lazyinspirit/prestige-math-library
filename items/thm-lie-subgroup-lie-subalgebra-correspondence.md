---
id: thm-lie-subgroup-lie-subalgebra-correspondence
kind: theorem
title: Lie subgroup–Lie subalgebra correspondence
status: draft
origin: pipeline
deps: [def-left-translated-distribution-associated-to-a-lie-subalgebra, lem-a-lie-subalgebra-distribution-is-involutive, thm-frobenius-local-coordinate-theorem, thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds, def-countable-choice, thm-smooth-inverse-function-theorem-on-manifolds]
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 19.26 and proof, printed pages 506–507
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Sections 9.3 and 10.2, printed pages 55 and 60–61
verification:
  precheck: pass
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $G$ is a Lie group and
$\mathfrak h\subseteq\operatorname{Lie}(G)$ is a Lie subalgebra, there is a
connected immersed Lie subgroup $i:H\to G$ whose identity differential
identifies $\operatorname{Lie}(H)$ with $\mathfrak h$. It is unique up to the
unique Lie-group isomorphism commuting with the two inclusions into $G$.

Equivalently, connected immersed Lie subgroups of $G$, understood together
with their intrinsic smooth structures, correspond bijectively to Lie
subalgebras of $\operatorname{Lie}(G)$.

The assumption $\mathrm{AC}_\omega$ is used exactly through the maximal-leaf
theorem's construction of a countable leaf atlas and its countable unions.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$ with identity $e$, and a Lie
subalgebra $\mathfrak h\subseteq\mathfrak g=\operatorname{Lie}(G)$.

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F1] The distribution $\mathcal D_g=d(L_g)_e\mathfrak h$ is involutive, and
the Frobenius theorem therefore makes it integrable.
[[lem-a-lie-subalgebra-distribution-is-involutive]].
[[thm-frobenius-local-coordinate-theorem]].

[F2] Every point of an integrable distribution lies on a unique maximal
connected integral manifold, and every connected integral immersion through
that point factors uniquely and smoothly through it.
[[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]].

[F3] Under left translation, $\mathcal D_g=d(L_g)_e\mathfrak h$ satisfies
$d(L_a)_g\mathcal D_g=\mathcal D_{ag}$.
[[def-left-translated-distribution-associated-to-a-lie-subalgebra]].

[F4] A smooth map with invertible differential at a point is a local
diffeomorphism there. [[thm-smooth-inverse-function-theorem-on-manifolds]].

## Proof

**Proof technique:** direct construction and uniqueness.

1.1 By [F1] and [F2], let $H$ be the maximal connected integral leaf of $\mathcal D$ through $e$, with its intrinsic leaf manifold structure and injective immersion $i:H\hookrightarrow G$. Its tangent space at $e$ is $\mathcal D_e=\mathfrak h$. [A1, F1, F2, construct]

2.1 For every $h\in H$, [F3] makes $L_h$ a diffeomorphism preserving $\mathcal D$ in both directions. It therefore carries the maximal connected integral leaf $H$ to a maximal connected integral leaf $L_h(H)$: any larger connected integral manifold containing $L_h(H)$ would pull back under $L_{h^{-1}}$ to one properly containing $H$. But $L_h(H)$ contains $h=L_h(e)$, which belongs to $H$, so uniqueness of the maximal leaf through $h$ in [F2] gives $L_h(H)=H$. Hence $hh'\in H$ for $h,h'\in H$, and because $e\in L_h(H)$ there is $h'\in H$ with $hh'=e$, so $h^{-1}\in H$. Thus the leaf is a subgroup of $G$. [F2, F3, step 1.1, algebra]

3.1 The ambient division map $\delta:G\times G\to G$, $\delta(a,b)=ab^{-1}$, is smooth, and by step 2.1 its restriction to the smooth manifold $H\times H$ has image setwise in $H$. Setwise inclusion alone would not prove smoothness for the intrinsic leaf topology. We use the countable-plaque construction in the *proof* of [F2]. Fix a flat-chart domain $U$ for $\mathcal D$. The leaf $H$ has a countable plaque atlas by [F2]; each atlas plaque meets $U$ in at most countably many connected components, and each such component lies in one $U$-plaque by the local plaque lemma used in [F2]. Under [A1], $H\cap U$ is therefore a countable union of $U$-plaques. Near any $(a,b)\in H\times H$, choose a connected source chart $C$ whose ambient division image is contained in $U$. The transverse coordinate of $\delta(C)$ is a continuous image of connected $C$ into the countable set of transverse coordinates of those plaques. A connected countable subset of Euclidean space is a singleton, so this transverse coordinate is constant and $\delta(C)$ lies in the single plaque through $ab^{-1}$. Its longitudinal coordinates are smooth as ambient coordinates of $\delta$, giving a smooth $H$-valued factor in that plaque chart. Hence division is smooth locally everywhere; inversion $b^{-1}=\delta(e,b)$ and then multiplication $ab=\delta(a,b^{-1})$ are smooth. Thus $H$ is a Lie group and $i$ is a smooth injective homomorphism and immersion. [A1, F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 The identity differential of $i$ has image $T_eH=\mathfrak h$ by step 1.1, so the constructed immersed subgroup has the required Lie algebra. This also covers $\mathfrak h=0$, when the connected leaf is $\{e\}$, and $\mathfrak h=\mathfrak g$, when the leaf is the identity component of $G$. [step 1.1, step 3.1, algebra]

4.2 Let $j:K\to G$ be any connected immersed Lie subgroup whose tangent algebra is the same $\mathfrak h$. Translation in $K$ shows $dj(T_kK)=\mathcal D_{j(k)}$, so $j$ is a connected integral immersion through $e$. The factorization clause of [F2] gives a unique smooth map $f:K\to H$ with $i\circ f=j$; injectivity of $i$ and the homomorphism law for $j$ make $f$ a homomorphism. Its identity differential is an isomorphism because both tangent images are $\mathfrak h$, so [F4] makes $f(K)$ contain an open identity neighborhood in $H$. [F2, F3, F4, step 1.1, step 3.1]

5.1 The image $f(K)$ is a subgroup. Since it is open, all its left cosets are open, so its complement is open as well; connectedness of $H$ forces $f(K)=H$. Injectivity of $i$ and $i\circ f=j$ forces $f$ to be injective. Translation of the isomorphism $df_e$ shows that $df$ is invertible everywhere, so [F4] makes $f$ a bijective local diffeomorphism and hence a Lie-group isomorphism; uniqueness follows again from injectivity of $i$. [F4, step 4.2, algebra]

6.1 The only countable construction is [F2], whose proof spends [A1] on a countable flat-chart cover and countable unions. The countable-plaque argument in step 3.1 uses the same premise and is precisely what makes a setwise leaf-valued smooth map intrinsically smooth. The remaining selections are single finite-dimensional or local choices and use no stronger choice principle. Steps 1.1–4.1 give existence and steps 4.2–5.1 give uniqueness, establishing the stated correspondence. [A1, F1, F2, F4, step 1.1, step 2.1, step 3.1, step 4.1, step 4.2, step 5.1] ∎
