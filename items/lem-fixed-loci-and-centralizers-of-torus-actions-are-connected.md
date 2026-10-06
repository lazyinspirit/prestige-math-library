---
id: lem-fixed-loci-and-centralizers-of-torus-actions-are-connected
kind: lemma
title: Fixed loci and centralizers of torus actions are connected
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 14
deps: [thm-chevalley-constructible-image-varieties, prop-faithfully-flat-orbit-map-represents-coset-quotient, def-axiom-of-choice, def-borel-subgroup-and-maximal-torus, def-group-of-multiplicative-type-and-torus, thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions, lem-lie-functor-exactness-fixed-points-and-generation, lem-nonaffine-affine-group-faithful-representation, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field, thm-quotient-by-a-borel-subgroup-is-complete, thm-trigonalizable-extensions-split-over-algebraically-closed-fields, thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate, lem-nonaffine-subgroup-scheme-stabilizer-of-line, thm-homogeneous-space-for-smooth-affine-group, thm-borel-fixed-point-for-complete-schemes, lem-nilpotent-group-structure-and-maximal-torus-criterion, lem-central-ga-subgroup-of-smooth-connected-unipotent-group, thm-nonaffine-affine-normal-group-quotient-affine, thm-global-functions-proper-integral-variety, thm-morphisms-into-affine-scheme-global-sections, lem-ag-flat-local-regularity-ascent-descent]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 13 (13.9)-(13.10); Ch. 16 (16.47); Ch. 17 (17.28), (17.38)-(17.40), (17.46), (17.72)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S5.2, Proposition 144, pp. 58-63; S6.1, Corollary 158, p. 68"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let a torus $S$ act by group automorphisms on a smooth connected group variety $G$ over $k$. Its fixed subgroup $G^S$ is smooth and $\operatorname{Lie}(G^S)=\mathfrak g^S$. If $G$ is affine, $G^S$ is also connected. In particular, the centralizer $C_G(S)$ of a torus subgroup $S\subseteq G$ is smooth and connected when $G$ is smooth connected affine. For a maximal torus $T$ of such an affine $G$, the Cartan subgroup $C_G(T)$ is smooth connected nilpotent and satisfies $C_G(T)=N_G(C_G(T))^\circ$. If $S\subseteq B$ for a Borel subgroup $B$ of a smooth connected affine $G$ ([[def-borel-subgroup-and-maximal-torus]]), then $C_G(S)\cap B$ is a Borel subgroup of $C_G(S)$. For an external action, $G^S$ denotes the fixed subgroup; the notation $C_G(S)$ is reserved for subgroup conjugation.

## Facts & Assumptions

**Given:** AC, a torus $S$ acting by group automorphisms on smooth connected $G$; $G$ is affine for the connectedness and Borel/Cartan conclusions.

[F1] A torus acting on a smooth variety has a smooth scheme-theoretic fixed locus. Its tangent space at a fixed point is the invariant tangent subspace; this follows either from the fixed-scheme theorem or by testing the fixed condition on dual numbers. ([[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]], [[lem-lie-functor-exactness-fixed-points-and-generation]], [[def-group-of-multiplicative-type-and-torus]])

[F2] An affine finite-type group has a faithful finite-dimensional representation under AC. Representations of a split torus decompose into character eigenspaces, with arbitrary finite multiplicities. ([[lem-nonaffine-affine-group-faithful-representation]], [[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]])

[F3] For a cocharacter $\lambda$ of a smooth affine group $H$, the limit subgroups $U_H(\pm\lambda)$ and $Z_H(\lambda)=C_H(\lambda(\mathbf G_m))$ are smooth, and multiplication $U_H(-\lambda)\times Z_H(\lambda)\times U_H(\lambda)\to H$ is an open immersion. This is the precise open-cell input of Milne13.33(a)–(d). Its proof embeds $H$ into $\mathrm{GL}(W)$, describes the three groups by the negative, zero and positive matrix-weight blocks, intersects with $H$, and computes their Lie spaces as $\mathfrak h_-,\mathfrak h_0,\mathfrak h_+$. Multiplication has invertible differential and is a monomorphism since the positive and negative limit subgroups intersect the opposite parabolic trivially; it is consequently an open immersion. This proof does not use connectedness of torus centralizers or Chevalley's theorem.

[F4] Smooth connected affine groups over an algebraically closed field have Borel subgroups; every maximal torus is contained in one. Their Borel quotients are complete, and smooth solvable groups decompose as $B=B_u\rtimes T$ with $B_u$ smooth connected unipotent; maximal tori in such groups are conjugate by $B_u(k)$. A closed subgroup is a scheme-theoretic line stabilizer and its quotient is the fppf homogeneous space; the orbit map identifies the quotient by its scheme-theoretic stabilizer with a locally closed orbit. Images of finite-type variety morphisms are constructible. ([[def-borel-subgroup-and-maximal-torus]], [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]], [[thm-quotient-by-a-borel-subgroup-is-complete]], [[thm-trigonalizable-extensions-split-over-algebraically-closed-fields]], [[thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate]], [[lem-nonaffine-subgroup-scheme-stabilizer-of-line]], [[thm-homogeneous-space-for-smooth-affine-group]], [[thm-borel-fixed-point-for-complete-schemes]], [[prop-faithfully-flat-orbit-map-represents-coset-quotient]], [[thm-chevalley-constructible-image-varieties]])

[F5] A smooth connected nilpotent affine group over a perfect field is $U\times T$ with its unique central maximal torus $T$. If it has positive dimension, its centre contains a positive-dimensional smooth connected subgroup: use $T$ if nontrivial, and otherwise a central $\mathbf G_a$ in $U$. ([[lem-nilpotent-group-structure-and-maximal-torus-criterion]], [[lem-central-ga-subgroup-of-smooth-connected-unipotent-group]])

[F6] Multiplicative-type rigidity says that a family of homomorphisms between groups of multiplicative type parametrized by a connected scheme is constant. In particular a connected group acts trivially by group automorphisms on a torus (Milne12.36–12.38). Normal affine-group quotients are represented affine fppf quotients. ([[thm-nonaffine-affine-normal-group-quotient-affine]])

[F7] A nonempty proper integral variety over an algebraically closed field has only constant global functions; a morphism into an affine scheme is determined by global sections. Global functions commute with a flat extension of the ground field to any algebra, as follows from the kernel description on a finite affine cover and flatness. Smooth homogeneous quotients of connected smooth groups are reduced and connected. ([[thm-global-functions-proper-integral-variety]], [[thm-morphisms-into-affine-scheme-global-sections]], [[lem-ag-flat-local-regularity-ascent-descent]])

## Proof

**Given:** AC and the groups in the Statement. Geometric claims may be checked after algebraic closure; fixed schemes, centralizers, normalizers and the homogeneous-space constructions commute with that faithfully flat extension.

1.1 Smoothness of $G^S$ follows from [F1], without affineness. The dual-number fixed condition at the identity is precisely invariance in the tangent representation, so $\operatorname{Lie}(G^S)=\mathfrak g^S$. This also gives the centralizer formula when $S$ acts by subgroup conjugation. [F1]

1.2 We establish a rigidity consequence for Borels used below. Over an algebraically closed field, if two group homomorphisms $\varphi_1,\varphi_2:G_R\to K_R$ agree on $B_R$, the map $g\mapsto\varphi_1(g)\varphi_2(g)^{-1}$ is right $B_R$-invariant and descends to $(G/B)_R$. The quotient is smooth connected complete, hence integral with global functions $k$; by [F7] its base change has global functions $R$. Since $K_R$ is affine, the descended map is constant, and its value at $eB$ is the identity. Thus $\varphi_1=\varphi_2$. Applying this to conjugation by $c\in C_G(B)(R)$ and the identity, for every $R$, proves $C_G(B)=Z(G)$; in particular $Z(B)\subseteq Z(G)$. [F4, F7, algebra]

2.1 For connectedness of a subgroup centralizer in affine $G$, work over an algebraic closure and choose a faithful representation $W$ by [F2]. Its finite torus weights have finitely many nonzero differences. Choose an integral cocharacter $\lambda$ avoiding their pairing-zero hyperplanes; then two weights have equal $\lambda$-weight exactly when they have equal $S$-weight. Matrix block comparison gives $C_G(S)=C_G(\lambda(\mathbf G_m))$. This smooth centralizer occurs as the middle factor of the open immersion in [F3]. If it had two connected components, the products of each component with the identity components of the two other factors would give disjoint nonempty open subsets of the irreducible smooth connected group $G$, a contradiction. It is therefore connected. For an external action form the smooth connected affine semidirect product $G\rtimes S$. Its subgroup centralizer of $S$ is $G^S\times S$ as a scheme, so the preceding conclusion implies connectedness of $G^S$. Descent proves the assertion over $k$. [F2, F3, step 1.1, choose]

2.2 If a smooth connected affine group $H$ has a nilpotent Borel $D$, then $H=D$, by induction on $\dim D$. When $\dim D=0$, $D=1$ and $H=H/D$ is affine and complete, hence has dimension zero and is trivial by [F7]. Otherwise [F5] gives a positive-dimensional smooth connected $N\subseteq Z(D)$, which is central in $H$ by step 1.2. The quotient $D/N$ is a nilpotent Borel of $H/N$: a larger smooth connected solvable subgroup of $H/N$ pulls back to a larger smooth connected solvable subgroup of $H$, contradicting maximality of $D$. The affine smooth quotient exists by [F6]. Induction gives $H/N=D/N$, hence $H=D$. [F4, F5, F6, F7, step 1.2]

3.1 Let $C=C_G(T)$ for maximal $T$. By steps 1.1–1.2 it is smooth connected affine, and $T\subseteq Z(C)$. Choose a Borel $D$ of $C$ containing $T$; it decomposes as $D=D_u\rtimes T$ by [F4], since $T$ is already maximal in $G$. Centrality of $T$ makes this a direct product, so $D$ is nilpotent. Step 2.2 gives $C=D$, proving nilpotence. Its maximal torus $T$ is unique by [F5]. Therefore $N_G(C)$ preserves $T$; the connected group $N_G(C)^\circ$ acts trivially on $T$ by [F6], so it is contained in $C_G(T)=C$. The reverse inclusion follows from connectedness of $C$, proving $N_G(C)^\circ=C$. [F4, F5, F6, step 2.1, step 2.2]

3.2 Put $C=C_G(S)$ and let $B\supseteq S$ be a Borel. The group $C\cap B=C_B(S)$ is smooth connected by steps 1.1–1.2 applied to affine $B$, and solvable as a subgroup of $B$. Let $Y$ be the reduced closure of $CB$ in $G$. It is irreducible, hence connected, as the closure of the image of connected smooth $C\times B$, and is stable under right multiplication by $B$. The transporter of $S$ into $B$ is closed, contains $CB$, and hence contains $Y$. Thus $(y,s)\mapsto y^{-1}sy$ defines a morphism $Y\times S\to B$. If $q:B\to B/B_u$ is the torus quotient, the maps $s\mapsto q(y^{-1}sy)$ form a family of torus homomorphisms parametrized by connected $Y$. Rigidity [F6] makes them equal to $q|_S$, their value at $y=e$. [F4, F6, step 2.1, construct]

4.1 Choose a maximal torus $T\subseteq B$ containing $S$. For $y\in Y(k)$ the torus $y^{-1}Sy\subseteq B$ can be conjugated into $T$ by some $u\in B_u(k)$, by [F4]. Since $yu\in Y$, step 3.2 gives $q((yu)^{-1}s(yu))=q(s)$ for every $s\in S$. Both arguments lie in $T$, where $q|_T$ is an isomorphism, so $(yu)^{-1}s(yu)=s$ scheme-theoretically. Thus $yu\in C(k)$ and $y\in CB(k)$. The multiplication image $CB$ is constructible by [F4] and contains every closed point of its closure. Its constructible complement in $Y$ is therefore empty, since a nonempty constructible subset of a variety over an algebraically closed field contains a closed point. Hence $CB$ is closed as a subset. The quotient map $G\to G/B$ is open and surjective, so its image $q(C)$ is closed because its inverse image is $CB$. Its image in the complete quotient $G/B$ is a closed orbit of $C$, identified scheme-theoretically with $C/(C\cap B)$ by the homogeneous-space theorem; it is complete. To prove maximality, suppose a smooth connected solvable $D\subseteq C$ contains $C\cap B$. Its action on this complete quotient has a fixed point by the Borel fixed-point theorem, so $D\subseteq c(C\cap B)c^{-1}$ for some $c$, implying $\dim D\le\dim(C\cap B)$ and hence equality of the two smooth connected subgroups. Thus $C\cap B$ is a Borel of $C$. [F4, F6, step 3.2, choose] ∎
