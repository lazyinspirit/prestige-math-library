---
id: lem-author-ab0a6fc202cb-finite-common-rank-strata
kind: lemma
title: Finite clopen common rank strata
status: draft
domain: mathematics
deps:
  - lem-flag-tower-line-quotients
  - math:def-axiom-of-choice
dependency_roles:
  lem-flag-tower-line-quotients: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement
Assume AC. Let $X$ be a quasi-compact quasi-separated scheme and $E_1,\ldots,E_m$ a finite family of finite locally free sheaves, with no fixed-rank assumption. The nonempty common rank loci $X_\alpha$, where $\alpha=(r_1,\ldots,r_m)$ and $\operatorname{rank}E_i=r_i$, form a finite partition by open-and-closed qcqs subschemes. Their disjoint union is canonically isomorphic to $X$. Each $E_i|_{X_\alpha}$ has constant rank $r_i$. The simultaneous flag towers $q_\alpha:Y_\alpha\to X_\alpha$ form a qcqs finite disjoint union $q:Y=\coprod_\alpha Y_\alpha\to X$. Rank-zero bundles have empty filtrations and require no projectivization; if every rank on a stratum is zero the tower is the identity there. The empty scheme has the empty partition and identity tower.

## Facts & Assumptions

**Given:** AC, $X$ and its finite family of bundles. A rank is the cardinality of a local free basis; qcqs means quasi-compact and quasi-separated.

**Goal:** Establish finiteness, category membership and the stated componentwise construction.

[F1] The flag construction gives finite positive-constant-rank projective towers for constant-rank bundles, preserves qcqs, and uses the identity for rank zero. [[lem-flag-tower-line-quotients]]

[F2] AC is retained from the flag construction. [[math:def-axiom-of-choice]]

## Proof

1.1 Each rank function is locally constant because local free trivializations have a fixed finite rank. A common rank locus is the finite intersection of its rank fibers, hence open; its complement is the union of the other such open loci, hence also open. Thus every common rank locus is open and closed, and they partition $X$. [given]

2.1 These pairwise disjoint loci form an open cover of $X$. Quasi-compactness gives a finite subcover; disjointness means every nonempty locus occurs in that subcover, so there are finitely many. Each is quasi-compact as a closed subset of $X$ and quasi-separated as an open subscheme of the quasi-separated $X$. The open immersions identify their disjoint union with $X$, since they cover and have empty pairwise intersections, with the same restricted structure sheaves. [step 1.1, construct]

3.1 On each locus apply [F1] to the constant-rank restrictions and concatenate the finitely many towers. Each $Y_\alpha$ is qcqs. A finite disjoint union of these schemes is quasi-compact, and intersections of affine opens from different components are empty while those within a component are quasi-compact; hence it is quasi-separated. The maps $q_\alpha$ assemble to $q$. [F1, F2, step 2.1, construct]

4.1 The zero-rank and empty cases use the identities stipulated in [F1]. No bound on the dimension of $X$, no noetherianity, connectedness or integrality, and no global rank constancy was used. This proves the claims. [F1, step 1.1, step 2.1, step 3.1] ∎
