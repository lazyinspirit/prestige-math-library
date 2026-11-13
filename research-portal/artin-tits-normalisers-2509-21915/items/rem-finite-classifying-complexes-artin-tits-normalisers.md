---
id: rem-finite-classifying-complexes-artin-tits-normalisers
kind: remark
title: Finite CW-models for spherical normaliser quotients
status: published
domain: mathematics
origin: pipeline
deps:
  - lem-author-e61520261113-finite-orbit-comparison
  - rem-relative-salvetti-artin-tits-normalisers
  - cor-normaliser-kpi-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - lem-normaliser-linear-action-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-normaliser-quotients-artin-tits-normalisers
  - math:def-axiom-of-choice
  - lem-author-5a1e77100001-order-complex-model
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
  - math:def-homotopy-equivalence
  - math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant
  - math:prop-higher-homotopy-basepoint-transport-and-moving-homotopies
dependency_roles:
  lem-author-e61520261113-finite-orbit-comparison: mathematical-premise
  rem-relative-salvetti-artin-tits-normalisers: mathematical-premise
  cor-normaliser-kpi-artin-tits-normalisers: mathematical-premise
  prop-relative-cover-artin-tits-normalisers: mathematical-premise
  lem-normaliser-linear-action-artin-tits-normalisers: mathematical-premise
  def-relative-complement-artin-tits-normalisers: mathematical-premise
  def-normaliser-quotients-artin-tits-normalisers: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-5a1e77100001-order-complex-model: mathematical-premise
  math:def-cw-complex-with-closure-finiteness-and-weak-topology: mathematical-premise
  math:def-homotopy-equivalence: mathematical-premise
  math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant: mathematical-premise
  math:prop-higher-homotopy-basepoint-transport-and-moving-homotopies: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p.3, paragraph after Theorem 1.8; p.27, Remark 6.15
      statement: The spherical relative Salvetti model is a finite classifying-space
        model for N(P,J), and is compatible with the normalizer quotient action,
        producing a finite classifying-space model for N(A,J).
      hypotheses: Finite-rank spherical Coxeter system, J a subset of simple
        generators; the Axiom of Choice is retained for the existing
        group-identification supplier.
      reading_limits: Read the frozen PDF-extracted paragraph after Theorem 1.8 on p.3
        and the complete Corollary 6.14 and Remark 6.15 on p.27 for attribution
        in this assignment. No new visual PDF inspection is claimed. The article
        is not a proof premise. Read the current finite orbit comparison and
        order-complex suppliers; no independent reconstruction of Paris’s
        comparison theorem or re-audit of its cover suppliers is claimed.
dependency_level: 27
formulation_deps:
  - lem-author-e61520261113-finite-orbit-comparison
  - rem-relative-salvetti-artin-tits-normalisers
  - cor-normaliser-kpi-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - lem-normaliser-linear-action-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-normaliser-quotients-artin-tits-normalisers
  - math:def-axiom-of-choice
  - lem-author-5a1e77100001-order-complex-model
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
  - math:def-homotopy-equivalence
argument_deps:
  - lem-author-e61520261113-finite-orbit-comparison
  - rem-relative-salvetti-artin-tits-normalisers
  - cor-normaliser-kpi-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - lem-normaliser-linear-action-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-normaliser-quotients-artin-tits-normalisers
  - math:def-axiom-of-choice
  - lem-author-5a1e77100001-order-complex-model
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
  - math:def-homotopy-equivalence
  - math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant
  - math:prop-higher-homotopy-basepoint-transport-and-moving-homotopies
---

## Statement

Assume the Axiom of Choice. Let $(W,S)$ be a finite-rank spherical Coxeter system and $J\subseteq S$. Let $A$ be its Artin–Tits group, $P$ its pure subgroup, and $N(P,J),N(A,J)$ and $G=N(W,J)$ the normaliser quotients, with $N(P,J)$ the image of $P\cap\operatorname{Norm}_A(A_J)$ in $N(A,J)$. Put $E=\Theta_J$, let $\mathcal H^J$ be the relative hyperplane arrangement, and put $X=\mathcal X_J^{\mathbb C}$.

Choose the finite Salvetti CW model $K=\operatorname{Sal}(E,\mathcal H^J)$ to be the weak geometric realization of the order complex of the incident-facet/chamber poset. It admits a $G$-equivariant homotopy equivalence $f:K\to X$. The induced map $\bar f:K/G\to X/G$ is a homotopy equivalence and its source is a finite CW complex. Here equivariance means $f(gk)=g f(k)$; the homotopy equivalences are ordinary homotopy equivalences and orbit spaces have the quotient topology. Consequently $K$ and $K/G$ are finite classifying-space models for $N(P,J)$ and $N(A,J)$ respectively. A finite CW complex has finitely many cells, and a $K(H,1)$ is a nonempty path-connected space with fundamental group isomorphic to $H$ and trivial homotopy groups in degrees at least two.

## Statement references

[[lem-author-e61520261113-finite-orbit-comparison]]

[[rem-relative-salvetti-artin-tits-normalisers]]

[[cor-normaliser-kpi-artin-tits-normalisers]]

[[prop-relative-cover-artin-tits-normalisers]]

[[lem-normaliser-linear-action-artin-tits-normalisers]]

[[def-relative-complement-artin-tits-normalisers]]

[[def-normaliser-quotients-artin-tits-normalisers]]

[[math:def-axiom-of-choice]]

[[lem-author-5a1e77100001-order-complex-model]]

[[math:def-cw-complex-with-closure-finiteness-and-weak-topology]]

[[math:def-homotopy-equivalence]]

## Facts & Assumptions

[F1] The relative complement is the complexification of a finite arrangement in the whole real relative space $E=\Theta_J$; a finite Salvetti CW model exists. [[def-relative-complement-artin-tits-normalisers]] [[rem-relative-salvetti-artin-tits-normalisers]]

[F2] The finite group $G=N(W,J)$ acts linearly on $E$, permutes the relative hyperplanes, and acts freely on $X$. [[def-normaliser-quotients-artin-tits-normalisers]] [[lem-normaliser-linear-action-artin-tits-normalisers]] [[prop-relative-cover-artin-tits-normalisers]]

[F3] A finite arrangement with finite free linear complement action has the equivariant Salvetti and orbit comparison, with finite CW source and orbit source. [[lem-author-e61520261113-finite-orbit-comparison]]

[F4] Assuming Choice, $X$ is a $K(N(P,J),1)$ and $X/G$ is a $K(N(A,J),1)$. [[cor-normaliser-kpi-artin-tits-normalisers]] [[math:def-axiom-of-choice]]

[F5] The weak realization of the finite chains in the incident-facet/chamber poset is the Salvetti CW complex $\operatorname{Sal}(E,\mathcal H^J)$; it is finite for a finite arrangement. [[lem-author-5a1e77100001-order-complex-model]]

[F6] The CW convention is [[math:def-cw-complex-with-closure-finiteness-and-weak-topology]]. An ordinary homotopy equivalence has a continuous homotopy inverse with both composites homotopic to the respective identities. [[math:def-homotopy-equivalence]]

[F7] Based maps induce homomorphisms on $\pi_n$ for every $n\ge1$, functorially. A homotopy with moving basepoint changes the induced map by an isomorphism transporting along the basepoint track; this includes degree one. [[math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]] [[math:prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]

## Proof

**Given:** The spherical system and Choice assumption in the Statement. **Goal:** Establish the equivariant comparison, its finite orbit model and the two classifying-space conclusions.

**Proof technique:** direct.

1.1 Since $W$ is finite, its normaliser subgroup and its quotient $G$ are finite. By [F1] the relative cone is the whole space $E$ and the arrangement is finite. By [F2], the action preserves this arrangement and its diagonal action on $X$ is free. Thus the finite-arrangement and action hypotheses of [F3] hold. [F1, F2]

2.1 Take $K$ to be exactly the incident-pair order complex of [F5], with its weak realization. Applying [F3] to the arrangement and action in step 1.1 gives the $G$-equivariant homotopy equivalence $f:K\to X$ and the induced homotopy equivalence $\bar f:K/G\to X/G$, with both sources finite CW complexes under [F6]. This specifies the model in [F1] by the very construction used in [F3], rather than identifying an unspecified homotopy model with it. [F1, F3, F5, F6, step 1.1]

3.1 Let $h:Z\to Y$ be either homotopy equivalence in step 2.1, where $Y$ is nonempty and path-connected by [F4]. Choose a homotopy inverse $r:Y\to Z$ and a homotopy $rh\simeq\operatorname{id}_Z$ using [F6]. Then $Z$ is nonempty since it contains $r(y)$ for any $y\in Y$. For $z,z'\in Z$, the homotopy tracks join $rh(z)$ to $z$ and $rh(z')$ to $z'$. A path in $Y$ from $h(z)$ to $h(z')$, mapped by $r$, and those tracks (the first reversed) concatenate to a path from $z$ to $z'$. Thus $Z$ is path-connected. [F4, F6, step 2.1, choose]

4.1 For every $n\ge1$, functoriality and the moving-basepoint formula in [F7], applied to $rh\simeq\operatorname{id}_Z$, show that $r_*h_*:\pi_n(Z,z)\to\pi_n(Z,rh(z))$ is an isomorphism: it is the identity followed by transport along the homotopy track. Likewise $h_*r_*:\pi_n(Y,y)\to\pi_n(Y,hr(y))$ is an isomorphism using $hr\simeq\operatorname{id}_Y$. Injectivity of these composites makes $h_*$ and $r_*$ injective at every basepoint. At $y=h(z)$, surjectivity of $r_*h_*$ and injectivity of $r_*$ then give surjectivity of $h_*$: for any $b\in\pi_n(Y,h(z))$, choose $a$ with $r_*h_*(a)=r_*(b)$ and cancel $r_*$. Hence $h_*:\pi_n(Z,z)\to\pi_n(Y,h(z))$ is an isomorphism in every positive degree. [F6, F7, step 3.1, choose]

5.1 Apply steps 3.1 and 4.1 first to $f:K\to X$ and then to $\bar f:K/G\to X/G$. By [F4], both targets are nonempty and path-connected, their fundamental groups are respectively $N(P,J)$ and $N(A,J)$ up to isomorphism, and their higher homotopy groups vanish. The same properties therefore hold for the respective sources. Together with their finite CW structures from step 2.1, this proves the asserted finite classifying-space models. Choice enters through [F4]'s group identifications. [F4, step 2.1, step 3.1, step 4.1] ∎

## Source notes

The article reference attributes the retained finite classifying-space claim and is not a proof premise. The equivariant comparison is supplied by the existing local finite-orbit lemma; the present argument uses its explicitly specified order-complex model and makes the homotopy-group application explicit.
