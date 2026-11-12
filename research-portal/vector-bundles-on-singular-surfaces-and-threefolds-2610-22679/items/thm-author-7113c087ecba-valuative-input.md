---
id: thm-author-7113c087ecba-valuative-input
kind: theorem
title: Exact valuation inputs for the topology comparison
status: published
domain: mathematics
deps:
  - math:def-valuation-ring
  - math:lem-valuation-ring-is-local
  - math:def-value-group-of-a-valuation-ring
  - math:def-localisation-at-a-prime-ideal
  - math:def-morphism-affine-schemes-from-ring-map
  - math:def-etale-morphism-schemes
  - math:def-proper-morphism
  - math:def-valuative-diagram-separatedness
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-affine-open-subscheme
  - math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - lem-adjudicate-8e6efd435bbb-equal-value-group-rank
dependency_roles:
  math:def-valuation-ring: mathematical-premise
  math:lem-valuation-ring-is-local: mathematical-premise
  math:def-value-group-of-a-valuation-ring: mathematical-premise
  math:def-localisation-at-a-prime-ideal: mathematical-premise
  math:def-morphism-affine-schemes-from-ring-map: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  math:def-proper-morphism: mathematical-premise
  math:def-valuative-diagram-separatedness: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union: mathematical-premise
  lem-adjudicate-8e6efd435bbb-equal-value-group-rank: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: The Stacks Project, Extensions of valuation rings
      url: https://stacks.math.columbia.edu/tag/0ASF
      locator: Definition 15.125.1; Lemma 15.125.5, full statement and displayed proof
      statement: For an étale algebra B over a valuation ring V and a prime q of B
        over the maximal ideal of V, V → B_q is an injective local extension of
        valuation rings whose induced value-group map is bijective (weakly
        unramified).
      hypotheses: V arbitrary; B étale over V; q ∩ V = m_V. No noetherian,
        discrete-rank or finite-presentation hypothesis on V.
      reading_limits: Read Definition 15.125.1 and Lemma 15.125.5 with its displayed
        proof in this repair. The cited weak-dimension, normalization and
        ramification results are imported, not independently reconstructed.
    - title: The Stacks Project, Valuative criterion for properness
      url: https://stacks.math.columbia.edu/tag/0BX5
      locator: Lemma 29.43.1, conditions (1) and (3), statement and displayed proof
      statement: A proper morphism has exactly one compatible lift Spec(V) → Y for
        each commutative diagram with Spec(Frac(V)) → Y and Spec(V) → X over it.
      hypotheses: V any valuation ring; f:Y → X proper. The source criterion is for
        finite-type quasi-separated morphisms; proper morphisms satisfy these
        hypotheses. Both triangles must commute.
      reading_limits: Read the full lemma and its short reduction proof in this
        repair; the underlying existence and uniqueness criteria cited in the
        proof are imported. Only the proper-to-lift direction is used.
    - title: Bhargav Bhatt and Akhil Mathew, The arc-topology
      url: https://arxiv.org/pdf/1807.04725v4
      locator: p. 2, Definition 1.1(1),(3) and rank convention before §1.1; p. 3,
        Definition 1.2(1),(2)
      statement: An arc cover of qcqs schemes lifts each rank-at-most-one valuation
        test after an injective local extension to another rank-at-most-one
        valuation ring; general families are defined affine-locally using
        finitely many affine source opens.
      hypotheses: Qcqs schemes for the single-morphism test; arbitrary schemes for the
        affine-local family convention; both valuation rings have rank at most
        one.
      reading_limits: Read the indicated definitions and rank convention on pp. 2–3 in
        this repair. No comparison theorem between finite-type and qcqs sites is
        imported; Proposition 2.1 is not needed or claimed freshly checked.
dependency_level: 1
---

## Statement
Use the following conventions. Valuation rings are taken in their fraction fields. An extension $V\hookrightarrow W$ is an injective local ring map, meaning that the inverse image of the maximal ideal of $W$ is the maximal ideal of $V$. Its value-group map is the map induced on the quotients of the multiplicative fraction-field groups by the unit groups, with their valuation orders. Valuation rank means Krull dimension. An étale $V$-algebra $B$ means that $\operatorname{Spec}B\to\operatorname{Spec}V$ is étale. The abbreviation qcqs means quasi-compact and quasi-separated.

If $B$ is étale over a valuation ring $V$ and $\mathfrak q\subset B$ is a prime over its maximal ideal, then $W=B_{\mathfrak q}$ is a valuation ring and $V\hookrightarrow W$ is an extension with isomorphic ordered value groups; hence it has the same rank as $V$.

If $f:Y\to X$ is proper, $K=\operatorname{Frac}(V)$, $i:\operatorname{Spec}K\to\operatorname{Spec}V$ is canonical, and $u:\operatorname{Spec}K\to Y$, $v:\operatorname{Spec}V\to X$ satisfy $fu=vi$, then there is a unique $h:\operatorname{Spec}V\to Y$ with $hi=u$ and $fh=v$. No noetherian hypothesis or finite presentation of $f$ is required; in particular this applies to the finitely presented proper morphisms in the generator comparison.

A morphism $f:Y\to X$ of qcqs schemes is an arc cover precisely when every $g:\operatorname{Spec}V\to X$ with $\operatorname{rank}(V)\le1$ admits an extension $V\hookrightarrow W$ with $\operatorname{rank}(W)\le1$ and a lift $h:\operatorname{Spec}W\to Y$ satisfying $fh=g\circ\operatorname{Spec}(V\to W)$. This test does not require equal value groups. For a family $\{f_i:Y_i\to X\}$ on arbitrary schemes, the convention is: over each affine open $U\subset X$, finitely many affine opens $U_k\subset f_{i(k)}^{-1}(U)$ must give an arc cover $\coprod_kU_k\to U$ by this test. Here $\coprod$ is the finite disjoint union scheme, with each component carrying its open-subscheme structure.

## Statement references
[[math:def-valuation-ring]]

[[math:lem-valuation-ring-is-local]]

[[math:def-value-group-of-a-valuation-ring]]

[[math:def-localisation-at-a-prime-ideal]]

[[math:def-morphism-affine-schemes-from-ring-map]]

[[math:def-etale-morphism-schemes]]

[[math:def-proper-morphism]]

[[math:def-valuative-diagram-separatedness]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-affine-open-subscheme]]

[[math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]]

[[lem-adjudicate-8e6efd435bbb-equal-value-group-rank]]

## External input
The following are the imported premises, indexed by the zero-based statement-bearing source records in the frontmatter: [F1] uses reference 0 (Stacks Definition 15.125.1 and Lemma 15.125.5); [F2] uses reference 1 (Stacks Lemma 29.43.1, proper-to-lift direction); [F3] uses reference 2 (Bhatt–Mathew Definitions 1.1 and 1.2). Their deeper source proofs are not reconstructed. The rank consequence is proved by the separate local helper, not attributed to the étale lemma. No comparison between finite-type and qcqs sites is imported.

## Facts & Assumptions
**Given:** The rings, maps and compatibility hypotheses of the three assertions in the statement, separately.

**Goal:** Record the exact inputs and the locally justified rank consequence.

[F1] Reference 0 supplies the valuation-ring extension $V\hookrightarrow B_{\mathfrak q}$ and bijectivity of its induced value-group map under the stated étale and closed-point hypotheses.

[F2] Reference 1 supplies the unique compatible valuative lift for proper $f$ and arbitrary $V$. Properness includes finite type and separatedness; the proper direction of the cited criterion applies without any finite-presentation restriction.

[F3] Reference 2 supplies exactly the rank-bounded lifting test and affine-local finite-family convention stated above. In particular its extension is allowed to change the value group.

[F4] For an injective local map of valuation rings, surjectivity of the induced value-group map implies an ordered-group isomorphism and equality of Krull dimensions. [[lem-adjudicate-8e6efd435bbb-equal-value-group-rank]]

[F5] The valuation-ring and unit-group conventions are supplied by [[math:def-valuation-ring]], [[math:lem-valuation-ring-is-local]] and [[math:def-value-group-of-a-valuation-ring]]. Prime localization is supplied by [[math:def-localisation-at-a-prime-ideal]]. The affine interpretation of étale algebras uses [[math:def-morphism-affine-schemes-from-ring-map]] and [[math:def-etale-morphism-schemes]]. Properness and valuative diagrams use [[math:def-proper-morphism]] and [[math:def-valuative-diagram-separatedness]]. The meaning of qcqs is supplied by [[math:def-quasi-compact-and-quasi-separated-scheme]]. Affine opens carry the restricted structure sheaf by [[math:def-affine-open-subscheme]]. The finite disjoint union of affine schemes is the spectrum of their product ring by [[math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]]; the empty union is the empty scheme.

## Proof
1.1 Apply [F1] to the specified $V,B,\mathfrak q$. Its injective local map and bijective induced value-group map satisfy [F4], which identifies the ordered groups and the ranks. This is the local consequence of the imported étale input; no classification of valuation rings is assumed. [given, F1, F4, F5]

2.1 The maps $u,v$ and equality $fu=vi$ are exactly a valuative diagram in [F5], so [F2] gives the asserted unique $h$ with both required equalities. This includes every finitely presented proper map, since no finite-presentation condition was imposed. The last assertion is the definition and family convention [F3], with both rank bounds and its commuting lift written explicitly; it imposes no equality of value groups. Together with step 1.1 this proves the stated collection of inputs and its rank consequence, without claiming the subsequent generator comparison. [given, F2, F3, F5, step 1.1] ∎
