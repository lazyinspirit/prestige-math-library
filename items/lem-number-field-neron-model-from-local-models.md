---
id: lem-number-field-neron-model-from-local-models
kind: lemma
title: "A number-field abelian variety has a global Néron model from its local models"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-abelian-variety-spreads-to-abelian-scheme-away-finitely-many-primes
  - thm-neron-model-existence-in-stated-class
  - thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre
  - lem-filtered-colimit-fp-scheme-stage
  - thm-ag-standard-smooth-geometric-regularity
  - thm-gluing-affine-schemes
  - def-neron-model-and-mapping-property
proof_strategy: direct
sources:
  references:
    - title: "S. Bosch, W. Lütkebohmert and M. Raynaud, Néron Models"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
      locator: "Chapter 1, locality and existence; the number-ring gluing argument is given below."
---

## Statement

Assume AC and DC. Let $K$ be a number field and $A/K$ an abelian variety. There is a smooth separated finite-type group scheme $N$ over $S=\operatorname{Spec}\mathcal O_K$ with generic fibre $A$ satisfying the Néron mapping property. At each finite place $v$, its base change to $\mathcal O_{K,v}$ is the Néron model of $A$ over that DVR. Here $\mathcal O_{K,v}$ denotes localization, not completion.

## Facts & Assumptions

**Given:** AC, DC, $K$ and $A$ as stated.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[F1] $A$ extends to an abelian scheme over a nonempty open of $S$. [[lem-abelian-variety-spreads-to-abelian-scheme-away-finitely-many-primes]]

[F2] An abelian variety over the fraction field of a DVR has a smooth separated finite-type Néron group model; an abelian scheme over a Dedekind base is a Néron model. [[thm-neron-model-existence-in-stated-class]], [[thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre]], [[def-neron-model-and-mapping-property]]

[F3] Finite-presentation schemes and morphisms descend through filtered colimits, with equalities eventually holding; its finite-chart proof also descends finite affine open covers and their overlaps. [[lem-filtered-colimit-fp-scheme-stage]]

[F4] Smooth morphisms are locally standard smooth; their finite presentations and invertible Jacobian certificates descend. [[thm-ag-standard-smooth-geometric-regularity]]

[F5] Affine schemes glue along compatible open isomorphisms. Refining each of finitely many schemes by affine covers gives the same gluing for schemes; morphisms and group laws glue on these covers. [[thm-gluing-affine-schemes]]

## Proof

**Proof technique:** spread the finitely many local models to neighbourhoods, identify them with the good-reduction model on overlaps, and glue.

1.1 By F1 choose an abelian scheme $\mathcal A/U$ with generic fibre $A$ on a nonempty open $U\subseteq S$. Its complement is the finite set $T$ of bad places. By F2 choose, for each $v\in T$, a smooth separated finite-type Néron group model $N_v$ over $R_v=\mathcal O_{K,v}$. The local ring is the filtered colimit of coordinate rings of affine neighbourhoods of $v$, all localizations of $\mathcal O_K$. Since $R_v$ is noetherian, $N_v$ and its group morphisms are finitely presented. F3 descends them, their group identities, and the generic-fibre identification with $A$ to a common affine neighbourhood. [A1, F1, F2, F3, given, construct]

2.1 We can choose this neighbourhood so that the descended group scheme $G_v$ is smooth and separated. Indeed take a finite affine cover of the separated finite-presentation $N_v$ whose pairwise intersections are affine. In the finite-chart construction of F3, descend the cover, these affine intersections, their open immersions and the gluing identities. On each intersection the diagonal is a closed immersion into the corresponding affine product, so the tensor-product map to the intersection ring is surjective. Lift preimages of a finite set of ring generators and the finitely many relations; after shrinking the neighbourhood those tensor-product maps are surjective, making the descended diagonal closed on each product chart and $G_v$ separated. For smoothness, cover the quasi-compact $N_v$ by finitely many standard smooth affine opens; F4 lets their presentations and invertible Jacobian data descend, and the finite-cover unit equations descend by F3. After one further shrinking these opens cover the whole stage scheme, which is then smooth. All shrunk neighbourhoods still contain $v$. [F3, F4, step 1.1, algebra]

3.1 The generic identifications give an isomorphism $G_{v,K}\cong\mathcal A_K$. By F3, the isomorphism and its inverse and their identities descend over some nonempty open of $U$ inside the neighbourhood of $v$. Shrink the neighbourhood around $v$ by removing the finite complement of that open except for $v$ itself, and remove $T\setminus\{v\}$. Call the resulting open $W_v$. Then $W_v$ contains $v$, has no other point of $T$, and over $W_v\cap U$ there is a group isomorphism $G_v\cong\mathcal A$ inducing the given generic identification; the group compatibility descends with the finitely many corresponding equations. [F3, step 1.1, step 2.1, construct]

4.1 The opens $U$ and $W_v$ cover $S$. Glue $\mathcal A$ and the $G_v$ along those isomorphisms. On any overlap $W_v\cap W_w\subseteq U$, use the transition through $\mathcal A$; the cocycle equations are automatic. By F5 the group structures glue to a smooth separated finite-type $S$-group scheme $N$, since these properties are local on the base and the cover is finite. Its localization at $v\in T$ is $N_v$, while at every $v\in U$ it is the abelian scheme $\mathcal A_{R_v}$ and hence Néron by F2. [F2, F5, step 3.1, algebra]

5.1 Let $Y/S$ be smooth and $u_K:Y_K\to A$ a generic map. For each closed point $v$, the local Néron property supplies a unique map $Y_{R_v}\to N_{R_v}$. When $Y$ is finite type over $S$, F3 spreads this map and its generic-fibre equality to an open neighbourhood of $v$. These nonempty opens cover every closed point, hence also the generic point, and thus cover $S$. Their maps agree on overlaps: $Y$ is flat over the integral base, so its generic fibre is schematically dense, and $N$ is separated. They glue to an extension; the same argument gives uniqueness. A general smooth $Y$ is covered by finite-type opens, and the unique extensions glue. Thus $N$ satisfies the full Néron mapping property, and the localizations are as stated. [F2, F3, F5, step 4.1, construct] ∎
