---
id: lem-nontrivial-limitwise-nullhomotopy-class-forces-compact-boundary-leaf
kind: lemma
title: "A nonzero limitwise-nullhomotopy class forces a compact boundary leaf"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice, def-limitwise-nullhomotopy-subgroup-of-a-leaf, lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup, def-regular-foliation-atlas, def-leaf-of-a-regular-foliation, def-countable-choice-principle-for-foliation-pair, def-foliation-component-by-mutual-positive-transverse-accessibility, def-interior-closure-boundary-top, lem-compatible-arbitrary-pi-fence-reduction, lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band, lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood, lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches, lem-common-plaque-lifted-caps-admit-nested-source-disk-inclusions, lem-a-paired-immersed-cap-sweep-excludes-a-positive-closed-transversal, lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph, lem-recurrent-pi-side-leaf-identifies-a-distinct-accessibility-boundary-class, lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 18
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a71, Definition1.4/Lemma1.1 p.2; \u00a77, Theorem 7.1, printed p.19 with proof pp.20-25; \u00a78, printed pp.26-28"
    - title: "Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov's Theorem (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)"
      url: "https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf"
      locator: "\u00a73.2, printed pp. 48-53"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let F be a C² transversely oriented codimension-one foliation of a closed oriented 3-manifold M. If a leaf L has $\Pi^j_1(L,x)\ne0$ for one side j and base point x, then L is compact and is a boundary leaf of a distinct foliation component in the sense of [[def-foliation-component-by-mutual-positive-transverse-accessibility]]: there is a mutual-accessibility component S with $S\cap L=\varnothing$ and $L\subseteq\partial_M S$. The boundary is the ambient topological boundary.

## Facts & Assumptions

**Given:** A $C^2$ transversely oriented codimension-one foliation $F$ of a closed oriented three-manifold $M$ and a leaf $L$ with a nonzero class in $\Pi^j_1(L,x)$ for one side $j$ and base point $x$.

[F1] The limitwise-nullhomotopy subgroup is defined by the one-sided nullhomotopy predicate, and a nonzero class is a well-defined nonidentity element of that subgroup, hence an essential class in the ordinary leaf fundamental group ([[def-limitwise-nullhomotopy-subgroup-of-a-leaf]], [[lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup]]).

[F2] The in-pair items [[lem-compatible-arbitrary-pi-fence-reduction]], [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]], [[lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood]], [[lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches]], [[lem-common-plaque-lifted-caps-admit-nested-source-disk-inclusions]] and [[lem-a-paired-immersed-cap-sweep-excludes-a-positive-closed-transversal]] supply the normalized short fence with simple positive lifts, the canonical based Jordan cap bundle, the fixed intrinsic neighbourhood avoidance, the recurrent common plaque patch, the nested source disks and the exclusion of positive closed transversals for the reduced leaf.

[F3] The in-pair item [[lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph]] supplies the compact-leaf collar graph lemma, and the in-pair item [[lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal]] gives a positive closed transversal through every intrinsically noncompact leaf, so absence of a positive closed transversal forces intrinsic compactness; the in-pair item [[lem-recurrent-pi-side-leaf-identifies-a-distinct-accessibility-boundary-class]] upgrades the recurrence to a distinct mutual-accessibility boundary.

[F4] The foliation components are the mutual positive transverse accessibility classes, saturated subsets of $M$, and $\partial_M$ denotes the ambient topological boundary ([[def-foliation-component-by-mutual-positive-transverse-accessibility]], [[def-interior-closure-boundary-top]], [[def-leaf-of-a-regular-foliation]], [[def-regular-foliation-atlas]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

[F6] On a closed connected oriented three-manifold with a $C^2$ cooriented foliation, a nonzero $\Pi$ leaf excludes every spherical leaf and every sphere universal-cover alternative ([[lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice]]). This conclusion is applied only in the connected component of the original supporting leaf.


## Proof

**Proof technique:** direct.

1.1 Normalize the arbitrary nonzero $\Pi$ representative to a short one-field normal fence by [F2], obtaining a finite crossing-word rank; at any positive lifted collision cut into two null factors, retain their actual maximal common closed/null interval and choose an essential lower-endpoint factor; the rank decreases, so after at most $N$ cuts all positive lifts are simple. [F1, F2, given]

2.1 Work in the ambient component $M_0$ containing $L$. It is closed, connected and oriented, and inherits the $C^2$ cooriented foliation. The original nonzero $\Pi$ class therefore excludes every sphere leaf and every sphere universal cover in $M_0$ by [F6]. The original fence and its subword reductions stay in $M_0$, because their connected traces meet that component, which is both open and closed. Thus every positive cap leaf in this construction has nonspherical universal cover. This verifies the explicit sphere-cover exclusion required by the canonical cap-bundle supplier before that supplier is applied. [F1, F2, F6, given, step 1.1]

3.1 The canonical based Jordan caps form a Hausdorff proper disk bundle on positive bands by [F2], and lifted one-field transport gives a coherent regular cap family; the exact finite-clock derivative bound forces an infinite centre track, adjustment of recurrence gives one central plaque, and the no-hit and common-plaque arguments yield nested source disks and paired quotients. A closed positive transversal can avoid the whole lateral fence while crossing the inward leafwise annulus, and its compact oriented one-manifold pullback then gives a one-sign boundary contradiction by [F2]; hence the reduced leaves have no closed transversals, and by [F3] they are compact. [F2, F3, step 1.1, step 2.1]

4.1 Open transversal saturation transfers the absence of closed transversals to the original leaf $L$, and the intrinsic-noncompact-to-transversal clause of [F3] makes the original $L$ compact; the finite-generator compact-nearby-leaf graph argument of [F3] prevents any distinct compact reduction leaf at positive parameters, preserving the identification with the original $L$; the recurrent $\Pi$-side leaf $B$ is noncompact and has a strict positive closed return, so its open mutual-accessibility class $S$ is distinct from $L$, contains basepoints tending to $L$, and saturation of the closure gives $L\subseteq\partial_M S$. [F3, F4, step 3.1]

5.1 Therefore a leaf with a nonzero limitwise-nullhomotopy class on one side and base point is compact and lies in the ambient topological boundary of a distinct mutual-accessibility component $S$ with $S\cap L=\varnothing$. The explicitly supplied finite surface, generic-loop, spherical-stability and transversal lemmas discharge every prerequisite used, the sphere-cover exclusion was verified in step 2.1 before cap development, and only the standing countable choice from [F5] is consumed. [F2, F3, F5, F6, step 2.1, step 4.1] ∎
