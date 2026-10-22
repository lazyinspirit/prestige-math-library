---
id: lem-slice-knot-floer-complex-stably-equivalent-to-unknot
kind: lemma
title: "A smooth slice knot has a knot Floer complex stably equivalent to the unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-smooth-knot-concordance
  - def-admissible-pointed-heegaard-floer-data
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-decorated-link-cobordism-and-floer-target
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - lem-knot-floer-large-surgery-and-filtered-cobordism-input
  - def-countable-choice
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The algebraic splitting and tensor arguments use no choice. Constructing and comparing the analytic cobordism maps uses the declared ACω branch; full AC is not inferred."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance, Theorem 1 and §3.2"
      url: "https://arxiv.org/pdf/1512.00383"
      locator: "Theorem 1 and §3.2; stable filtered equivalence for concordant knots"
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group, §§2–3"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "§§2–3; connected-sum tensor conventions, reverse-mirror duality, and the slice-complex argument"
---

## Statement

Let $K\subset S^3$ be a smooth oriented knot smoothly concordant to the unknot. Then there are finite-rank free $\mathbb F_2[U,U^{-1}]$ bifiltered chain complexes $A$ and $B$, each having zero total homology, such that
$$ \mathrm{CFK}^{\infty}(K)\oplus A\simeq \Lambda\oplus B, $$
where $\Lambda=\mathbb F_2[U,U^{-1}]$ is the normalized unknot complex with zero differential and generator in Maslov grading and both filtration coordinates zero, and $\simeq$ is a Maslov-graded filtered chain homotopy equivalence whose maps and homotopies do not increase either filtration. The acyclic summands are acyclic only after the filtrations are forgotten; no acyclicity of their associated-graded complexes is asserted.

## Statement references

[[def-smooth-knot-concordance|Smooth concordance from a knot to the unknot]]

[Hom, *A survey on Heegaard Floer homology and concordance*, Theorem 1 and §3.2](https://arxiv.org/pdf/1512.00383)

[Hom, *The knot Floer complex and the smooth concordance group*, §§2–3](https://arxiv.org/pdf/1111.6635)

## Facts & Assumptions

**Given:** A smooth concordance from $K$ to the unknot and the normalized doubly filtered knot Floer complexes at its boundary.

[F1] [[def-smooth-knot-concordance]]: smooth concordance is represented by a smooth properly embedded annulus in $S^3\times[0,1]$ with the stated oriented boundary knots.

[F2] [[def-admissible-pointed-heegaard-floer-data]]: the Floer complexes at the annulus ends are defined from admissible pointed Heegaard data with the stated disk-count conventions.

[A8] [[def-decorated-link-cobordism-and-floer-target]]: a decorated annulus includes a properly embedded dividing one-manifold that separates the $w$- and $z$-regions and meets each end knot in two points.

[A1] [[def-knot-floer-cobordism-map]] (present definition, analytic construction unresolved): it fixes the decorated cobordism-map interface but does not prove the map exists with the required filtered properties.

[A2] [[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing]] supplies the full-marked analytic triangle identities on small positive-rank triple-free representatives with actual Spin-c and strict-admissibility transport, and on the direct rank-zero point model, including fixed-end homotopies. It does not identify different curve choices or prove the intermediate top input is a cycle.

[A3] [[lem-knot-floer-cobordism-naturality-and-movie-invariance]] (present, proof not supplied): the needed composition and movie-invariance statement is not proved in its current carrier.

[A4] [[lem-knot-floer-large-surgery-and-filtered-cobordism-input]] (present, proof incomplete): its Statement gives a tau genus shift only; it does not state the filtered stable splitting asserted here.

[A5] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] (present, proof not supplied): the normalized grid-to-Heegaard model comparison needed to interpret the boundary complex is not proved.

[A6] [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]] now supplies the actual chosen-data full-filtered disk count and compactification for knots in $S^3$. It does not supply the grid/Heegaard comparison or an annulus-map stable splitting.

[A7] [[def-countable-choice]]: the analytic construction branch declares countable choice; this does not assert full choice.

## Proof

1.1 By [F1], parametrize a smooth annulus concordance by $S^1\times[0,1]$. Place the ordered boundary basepoints compatibly and choose two product dividing arcs separating the w and z intervals. This gives an actual decoration as in [A8]. The exact geometric input still needed is a Maslov-degree-zero bifiltered $\Lambda$-linear map $i:\Lambda\to C(K)$ for this annulus and a map $p:C(K)\to\Lambda$ for its reverse, each inducing an isomorphism on localized total homology. The reverse concordance need not be an isotopy inverse of the original concordance, and no such assertion is required. We show below exactly why these two maps suffice. Their construction and tower nonvanishing remain held in [A1] and [A3]. [given, F1, A8, A1, A3, construct]

2.1 Suppose the two actual maps in step1.1 have been supplied, and write $C=C(K)$. The composite $pi$ is a degree-zero Laurent-linear endomorphism of $\Lambda$. Since $\deg U=-2$, the only Laurent monomials of degree zero are constants. Since the differential of $\Lambda$ vanishes, its map on homology is the very same endomorphism. The assumed tower isomorphisms imply that this scalar is nonzero; over $\mathbb F_2$ it is one. Thus $pi=I$ strictly, without using any annulus-composite identity. Put $q=I-ip$. Then $q$ is a degree-zero bifiltered chain projection with image $B=\ker p$. The maps $(a,b)\mapsto i(a)+b$ and $c\mapsto(p(c),q(c))$ are strict inverse chain maps between $\Lambda\oplus B$ and $C$. Give $B$ its inherited bifiltration; both maps preserve both filtration coordinates because $i,p,q$ do. This proves a filtered splitting if the geometric premise is supplied. [given, step 1.1, construct, algebra]

3.1 The complement $B$ in step2.1 is finite rank free: it is a direct summand of a finite free module over the Laurent PID. It also has a homogeneous free basis. Normalize every homogeneous basis generator of $C$ by a Laurent unit to degree zero or one. The degree-zero map $p$ is a binary scalar row on its even generators and zero on its odd generators. A finite binary basis change isolates this nonzero row; the remaining even basis vectors and the odd vectors give a homogeneous free basis of the kernel. No filtration preservation of that basis change is asserted; its actual inherited filtration is used. On total homology the strict splitting gives $H(C)=H(\Lambda)\oplus H(B)$ and $p_*$ is an isomorphism, so $H(B)=0$. The zero complex is a permissible finite-rank free acyclic summand $A$. Consequently the displayed original stable-equivalence statement follows, with $A=0$, from the TWO exact maps in step1.1. This argument supplies the finite algebra completely and makes no claim that the needed geometric maps follow from a tau bound, a homology rank calculation, the existence of triangle chain identities, or a composition assertion for an arbitrary concordance and its reverse. [given, step 1.1, step 2.1, construct, algebra]

## Unresolved proof obligations

The remaining geometric premise is the construction of the two actual annulus maps in Proof1.1 with absolute Maslov degree zero, both normalized filtration bounds, and nonzero action on localized total homology. The strict finite splitting in Proof2.1–3.1 is proved; no reverse-annulus composite is assumed to be the identity on the knot complex. The earlier local disk and polygon analyses, and the separately accepted tensor/duality/model interfaces, do not establish the required elementary colored maps, their Cerf/puncturing relations or their tower nonvanishing. A genus/tau numerical inequality does not supply those maps. This original therefore remains held at the actual decorated annulus operation, with its entire Statement preserved.
