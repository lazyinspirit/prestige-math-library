---
id: rem-normaliser-equivalence-chain-artin-tits-normalisers
kind: remark
title: Explicit equivalence chain for the middle isomorphism
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-normaliser-quotients-artin-tits-normalisers
  - def-reduced-ribbon-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-arrangement-groupoids-artin-tits-normalisers
  - thm-artin-normaliser-splitting-artin-tits-normalisers
  - prop-deligne-ribbon-quotient-artin-tits-normalisers
  - lem-equivariant-topological-equivalence-artin-tits-normalisers
  - lem-cover-exact-comparison-artin-tits-normalisers
  - math:prop-connected-groupoid-equivalent-to-an-automorphism-group
  - math:def-fundamental-groupoid-of-a-space
  - math:def-axiom-of-choice
  - lem-normaliser-linear-action-artin-tits-normalisers
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - rem-normaliser-deligne-action-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
dependency_roles:
  def-normaliser-quotients-artin-tits-normalisers: mathematical-premise
  def-reduced-ribbon-artin-tits-normalisers: mathematical-premise
  def-relative-complement-artin-tits-normalisers: mathematical-premise
  def-arrangement-groupoids-artin-tits-normalisers: mathematical-premise
  thm-artin-normaliser-splitting-artin-tits-normalisers: mathematical-premise
  prop-deligne-ribbon-quotient-artin-tits-normalisers: mathematical-premise
  lem-equivariant-topological-equivalence-artin-tits-normalisers: mathematical-premise
  lem-cover-exact-comparison-artin-tits-normalisers: mathematical-premise
  math:prop-connected-groupoid-equivalent-to-an-automorphism-group: mathematical-premise
  math:def-fundamental-groupoid-of-a-space: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-normaliser-linear-action-artin-tits-normalisers: mathematical-premise
  lem-normaliser-chamber-action-artin-tits-normalisers: mathematical-premise
  rem-normaliser-deligne-action-artin-tits-normalisers: mathematical-premise
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-artin-pure-lifts-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 26–27, Remark 6.12 and equation (6.13)
      statement: The second vertical map in (6.8) is obtained from the equivalence
        chain through the reduced ribbon groupoid, the quotient Deligne
        groupoid, and the fundamental groupoid of the quotient complement,
        followed by passage to a vertex group.
      hypotheses: The notation and spherical-type hypotheses of Theorem 6.7, with a
        fixed subset J of the Coxeter generators.
      reading_limits: The frozen extracted article text at Remark 6.12 and the end of
        the proof of Theorem 6.7 was read for attribution. The article is not
        used as a proof premise.
dependency_level: 25
formulation_deps:
  - def-normaliser-quotients-artin-tits-normalisers
  - def-reduced-ribbon-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-arrangement-groupoids-artin-tits-normalisers
  - thm-artin-normaliser-splitting-artin-tits-normalisers
  - prop-deligne-ribbon-quotient-artin-tits-normalisers
  - lem-equivariant-topological-equivalence-artin-tits-normalisers
  - lem-cover-exact-comparison-artin-tits-normalisers
  - math:prop-connected-groupoid-equivalent-to-an-automorphism-group
  - math:def-fundamental-groupoid-of-a-space
  - math:def-axiom-of-choice
  - lem-normaliser-linear-action-artin-tits-normalisers
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - rem-normaliser-deligne-action-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
argument_deps:
  - def-normaliser-quotients-artin-tits-normalisers
  - def-reduced-ribbon-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-arrangement-groupoids-artin-tits-normalisers
  - thm-artin-normaliser-splitting-artin-tits-normalisers
  - prop-deligne-ribbon-quotient-artin-tits-normalisers
  - lem-equivariant-topological-equivalence-artin-tits-normalisers
  - lem-cover-exact-comparison-artin-tits-normalisers
  - math:prop-connected-groupoid-equivalent-to-an-automorphism-group
  - math:def-fundamental-groupoid-of-a-space
  - math:def-axiom-of-choice
  - lem-normaliser-linear-action-artin-tits-normalisers
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - rem-normaliser-deligne-action-artin-tits-normalisers
---

## Statement

Assume the Axiom of Choice. Let $(W,S)$ be a finite-rank spherical Coxeter system, meaning that $W$ is finite, and fix $J\subseteq S$. Let $A$ be the associated Artin–Tits group, and let $W_J$ and $A_J$ be the subgroups generated by the standard generators indexed by $J$. Put $N(W,J)=\operatorname{Norm}_W(W_J)/W_J$ and $N(A,J)=\operatorname{Norm}_A(A_J)/A_J$, where $\operatorname{Norm}_G(H)=\{g\in G:gHg^{-1}=H\}$.

Let $\mathcal R=\mathcal R(J)$ be the reduced ribbon groupoid, whose objects are the subsets $I\subseteq S$ for which $W_I$ is conjugate to $W_J$, and let $\mathcal R_J$ be its vertex group at $J$: the group of arrows $J\to J$. Let $\mathcal D=\mathcal D(J)$ be the groupoid completion of the positive relative chamber category. Put $X=\mathcal X_J^{\mathbb C}$ for the relative complexified arrangement complement and $N=N(W,J)$.

Write $E=\Theta_J$ for the subspace of the dual Coxeter representation on which the simple roots indexed by $J$ vanish. For $n=gW_J\in N$ with $g\in\operatorname{Norm}_W(W_J)$, let $n$ act on $E$ by the restricted contragredient action: $(nf)(v)=f(g^{-1}v)$. This is independent of the lift $g$ because $W_J$ fixes $E$ pointwise. Use its diagonal extension $n\cdot(u,v)=(gu,gv)$ on $X\subseteq E\times E$; the action permutes the relative hyperplanes, so it preserves $X$. On a chamber label $(w,I)$, where $W_Jw=wW_I$ and $w$ has minimum Coxeter length in $wW_I$, the action is $n\cdot(w,I)=(y,I)$, where $y$ is the unique minimum-length element of $gwW_I$. On $\mathcal D$ it sends each directed crossing $C\to C'$ to the crossing $nC\to nC'$ with the same wall index, and extends to composites and inverses. This action preserves the geodesic relations. The notation $X/N$ denotes the topological orbit space for the diagonal action, and $\mathcal D/N$ denotes the orbit groupoid for this action on objects and arrows. The corresponding action on $\Pi_1(X)$ sends a path class $[\gamma]$ to $[n\circ\gamma]$.

Let $d=(e,J)$ be the standard chamber object of $\mathcal D$, let $p:\mathcal D\to\Pi_1(X)$ be the equivariant equivalence, and set $x=p(d)$ and $\bar x$ equal to the image of $x$ in $X/N$. Here $\Pi_1(Y)$ is the groupoid of points of $Y$ and endpoint-fixed homotopy classes of paths, and $\pi_1(Y,y)$ is its vertex group at $y$.

The middle isomorphism in the algebraic-to-topological exact-sequence comparison is obtained on vertex groups from the equivalence chain $N(A,J)\simeq\mathcal R\xrightarrow{(\mathcal G')^{-1}}\mathcal D/N\xrightarrow{\bar p}\Pi_1(X/N)\simeq\pi_1(X/N,\bar x)$. The first equivalence uses the spherical ribbon splitting, and the last passes to a vertex group. The groups at the two ends are regarded as one-object groupoids. The displayed arrows involving $\mathcal G'$ and $\bar p$ are, respectively, the inverse of the Deligne-to-ribbon quotient isomorphism and the equivalence induced by $p$.

## Statement references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-artin-pure-lifts-artin-tits-normalisers]]

[[def-normaliser-quotients-artin-tits-normalisers]]

[[def-reduced-ribbon-artin-tits-normalisers]]

[[def-relative-complement-artin-tits-normalisers]]

[[def-arrangement-groupoids-artin-tits-normalisers]]

[[thm-artin-normaliser-splitting-artin-tits-normalisers]]

[[prop-deligne-ribbon-quotient-artin-tits-normalisers]]

[[lem-equivariant-topological-equivalence-artin-tits-normalisers]]

[[lem-cover-exact-comparison-artin-tits-normalisers]]

[[math:prop-connected-groupoid-equivalent-to-an-automorphism-group]]

[[math:def-fundamental-groupoid-of-a-space]]

[[math:def-axiom-of-choice]]

[[lem-normaliser-linear-action-artin-tits-normalisers]]

[[lem-normaliser-chamber-action-artin-tits-normalisers]]

[[rem-normaliser-deligne-action-artin-tits-normalisers]]

## Proof


**Given:** The spherical Coxeter system, subset, constructions and basepoints in the Statement, and the Axiom of Choice.

[F1] The normaliser quotients, reduced ribbon groupoid, relative complement and arrangement groupoid have the meanings stated above. [[def-normaliser-quotients-artin-tits-normalisers]] [[def-reduced-ribbon-artin-tits-normalisers]] [[def-relative-complement-artin-tits-normalisers]] [[def-arrangement-groupoids-artin-tits-normalisers]]

[F2] The quotient map from the Artin normaliser restricts to an isomorphism $q:\mathcal R_J\to N(A,J)$. [[thm-artin-normaliser-splitting-artin-tits-normalisers]]

[F3] The crossing-to-ribbon functor factors through the orbit functor $Q:\mathcal D\to\mathcal D/N$ as $\mathcal G=\mathcal G'Q$, and $\mathcal G':\mathcal D/N\to\mathcal R$ is an isomorphism sending $Qd$ to $J$. [[prop-deligne-ribbon-quotient-artin-tits-normalisers]]

[F4] The equivariant equivalence $p$ induces an equivalence $\bar p:\mathcal D/N\to\Pi_1(X/N)$, and $X$ is nonempty and path-connected. [[lem-equivariant-topological-equivalence-artin-tits-normalisers]]

[F5] Write $\mathcal G'_{Qd}:(\mathcal D/N)_{Qd}\to\mathcal R_J$ and $\bar p_{Qd}:(\mathcal D/N)_{Qd}\to\pi_1(X/N,\bar x)$ for the vertex-group maps. The comparison supplier specifies its algebraic-to-topological middle map as $\Phi=\bar p_{Qd}\circ(\mathcal G'_{Qd})^{-1}\circ q^{-1}$. [[lem-cover-exact-comparison-artin-tits-normalisers]]

[F6] A connected small groupoid is equivalent to the automorphism group of any chosen object, with the required choices available under the Axiom of Choice. Path classes define the fundamental groupoid and its vertex groups. [[math:prop-connected-groupoid-equivalent-to-an-automorphism-group]] [[math:def-fundamental-groupoid-of-a-space]] [[math:def-axiom-of-choice]]



[F7] The quotient $N$ acts on $E$ by the restricted contragredient action and on $X$ by its diagonal extension. The action preserves the relative hyperplanes and hence $X$. Its chamber-label action takes $(w,I)$ to $(\min(gwW_I),I)$, and its action on $\mathcal D$ sends crossings to crossings with the same index between image chambers, extending to composites and inverses and preserving the geodesic relations. These are the actions used in the orbit quotients and in the equivariance of $p$. [[lem-normaliser-linear-action-artin-tits-normalisers]] [[lem-normaliser-chamber-action-artin-tits-normalisers]] [[rem-normaliser-deligne-action-artin-tits-normalisers]] [[def-relative-complement-artin-tits-normalisers]]

**Given:** The data and assumption in the Statement.

**Goal:** Establish the displayed equivalences and identify their induced middle-group map.

**Proof technique:** direct.

1.1 Use the actions in [F7] for the orbit projections. Since $X$ is path-connected, any two points of $X/N$ are joined by the projection of a path in $X$ between chosen preimages. Thus $\Pi_1(X/N)$ is connected. An equivalence is fully faithful and essentially surjective, so $\mathcal D/N$ is connected: lift a connecting arrow between images and use essential surjectivity for objects. The isomorphism $\mathcal G'$ then makes $\mathcal R$ connected. Consequently the inclusions of the vertex groups $\mathcal R_J$ and $\pi_1(X/N,\bar x)$ as one-object groupoids are equivalences by [F6]. [F3, F4, F6, F7]

2.1 Regard $q^{-1}:N(A,J)\to\mathcal R_J$ as an isomorphism of one-object groupoids and follow it by the vertex-group inclusion into $\mathcal R$. This is the first equivalence. The next arrow is the inverse of the isomorphism in [F3], and the third is the equivalence in [F4]. A quasi-inverse to the final vertex-group inclusion gives the last equivalence; it can be chosen to restrict to the identity on the chosen vertex group. On vertex groups the resulting composite is precisely $q^{-1}$ followed by $(\mathcal G')^{-1}$ and $\bar p$. By [F5] this is the middle map of the exact-sequence comparison, proving the claim. [F2, F3, F4, F5, F6, step 1.1] ∎

## Source notes

Remark 6.12 of the cited article attributes the displayed chain. The argument above uses the completed splitting, quotient and exact-sequence comparison suppliers; the article's statement is not used as a proof premise.
