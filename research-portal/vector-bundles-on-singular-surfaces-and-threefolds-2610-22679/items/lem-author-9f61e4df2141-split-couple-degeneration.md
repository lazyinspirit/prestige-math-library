---
id: lem-author-9f61e4df2141-split-couple-degeneration
kind: lemma
title: Degeneration of the spectral sequence of a split tower
status: published
domain: mathematics
deps:
  - lem-author-9f61e4df2141-split-tower-boundaries
  - prop-tower-exact-couple-interface
  - math:def-derived-exact-couple
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-9f61e4df2141-split-tower-boundaries: mathematical-premise
  prop-tower-exact-couple-interface: mathematical-premise
  math:def-derived-exact-couple: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
formulation_deps:
  - lem-author-9f61e4df2141-split-tower-boundaries
  - prop-tower-exact-couple-interface
argument_deps:
  - lem-author-9f61e4df2141-split-tower-boundaries
  - prop-tower-exact-couple-interface
  - math:def-derived-exact-couple
  - math:def-axiom-of-choice
---

## Statement
Under the hypotheses of [[lem-author-9f61e4df2141-split-tower-boundaries]], the tower spectral sequence of [[prop-tower-exact-couple-interface]] has zero differentials on every page $E_s$ for $s\geq2$. This assertion alone does not assert convergence or resolve extensions.

## Facts & Assumptions
**Given:** A tower with the specified equivalence to a direct-sum tail tower, with the foundational and size conventions of [F2] under [A1].

**Goal:** Show that all differentials in its tower spectral sequence vanish.

[F1] [[lem-author-9f61e4df2141-split-tower-boundaries]] makes every stage connecting homomorphism zero.

[F2] [[prop-tower-exact-couple-interface]] constructs the initial exact couple from stage long exact sequences, with the stage connecting homomorphisms as its map $k_1$. Its homological page $r\geq1$ is reindexed as cohomological page $s=r+1$.

[F3] [[math:def-derived-exact-couple]] supplies the differential $d_r=j_rk_r$ and the well-defined derived maps for a page-$r$ exact couple $(D_r,E_r,i_r,j_r,k_r)$. Componentwise, $D_{r+1}=\operatorname{im}(i_r)$ and $E_{r+1}=H(E_r,d_r)$, and for a $d_r$-cycle representative $e$ the connecting map is $k_{r+1}([e])=k_r(e)$, regarded as an element of $\operatorname{im}(i_r)$. The image here is a subgroup of the former stage group, not the target of a projection from that group.

[A1] Retain the Axiom of Choice, [[math:def-axiom-of-choice]], in the ZFC and fixed size conventions required by [F2]. It is inherited when invoking that tower construction and its spectral foundations; the zero-map calculation and induction below require no additional choices of representatives or preimages.

## Proof
1.1 Invoke [F2] under [A1] and write $(D_1,E_1,i_1,j_1,k_1)$ for the initial tower exact couple. The map $k_1$ is zero in every bidegree by [F1], since its components are the stage connecting homomorphisms. Consequently $d_1=j_1k_1=0$ by [F3]. [A1, F1, F2, F3, given]

2.1 Suppose $k_r=0$ for a derived couple at page $r\geq1$. For every $d_r$-cycle representative $e$, [F3] gives $k_{r+1}([e])=k_r(e)=0$ in the subgroup $D_{r+1}=\operatorname{im}(i_r)$; hence $k_{r+1}=0$ and $d_{r+1}=j_{r+1}k_{r+1}=0$. Starting with step 1.1, induction gives zero connecting maps and differentials on every homological page $r\geq1$. The reindexing $s=r+1$ of [F2] gives the asserted zero differentials on every page $E_s$ for $s\geq2$. No convergence or extension assertion is used. [F2, F3, step 1.1] ∎
