---
id: lem-author-59b1a831fe59-relative-gysin
kind: lemma
title: The identified support fiber is the classical relative Hom before Gysin
status: draft
domain: mathematics
deps:
  - lem-author-59b1a831fe59-neighborhood
  - lem-author-59b1a831fe59-actual-support
  - lem-author-59b1a831fe59-cancel-twists
  - thm-author-59b1a831fe59-classical-derived-input
  - prop-smooth-pair-gysin-input
  - def-supported-complex-indexing
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-59b1a831fe59-neighborhood: mathematical-premise
  lem-author-59b1a831fe59-actual-support: mathematical-premise
  lem-author-59b1a831fe59-cancel-twists: mathematical-premise
  thm-author-59b1a831fe59-classical-derived-input: mathematical-premise
  prop-smooth-pair-gysin-input: mathematical-premise
  def-supported-complex-indexing: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
---

## Statement
Assume the Axiom of Choice and the completed site and universe bounds of the supplied point-support and classical derived-category constructions. For $j\geq0$, the actual point-supported cohomology on $V$ is
$$H^i(C_{j,x}(V))\cong\operatorname{Hom}_{DM^{\mathrm{eff},-}_{\mathrm{Nis}}}\bigl(\operatorname{cofib}(M(V\setminus x)\to M(V)),\mathbb Z(j)[i]\bigr).$$
Here the relative motive is the image of the cone of the actual open-immersion map of transfer-representable complexes. The smooth-pair Gysin input applies to this exact first arrow and identifies its cofiber with $M(\operatorname{Spec}L)(d)[2d]$. For $j\geq d$, the preceding coefficient cancellation therefore computes the group as $H^{i-2d,j-d}_{\mathrm{mot}}(L,\mathbb Z)$. No Gysin statement for singular closed subschemes or an independently chosen quotient evaluation is used.

## Facts & Assumptions
**Given:** The actual smooth finite-type pair, its identified restriction arrow, $j\geq0$, the Axiom of Choice, and the completed site and universe bounds.

**Goal:** Supply the exact classical relative-object interpretation before applying the imported Gysin triangle.

[A1] The Axiom of Choice is inherited from the neighbourhood and actual-support constructions in [F1]–[F2], the source contract of the classical derived-category input in [F1], and the coefficient comparison in [F3]. It is used when those supplied constructions are invoked; the Hom/fiber and shift calculations add no further choice. [[math:def-axiom-of-choice]]

[F1] [[lem-author-59b1a831fe59-actual-support]] supplies an equivalence of actual EM and classical restriction diagrams. [[thm-author-59b1a831fe59-classical-derived-input]] supplies the natural derived Yoneda model and the A¹-local target interpretation.

[F2] [[prop-smooth-pair-gysin-input]] supplies the Gysin cofiber for this perfect-field smooth separated finite-type pair. [[lem-author-59b1a831fe59-neighborhood]] verifies both smoothness conditions and pure codimension.

[F3] [[lem-author-59b1a831fe59-cancel-twists]] supplies the precise coefficient comparison for $j\geq d$. [[def-supported-complex-indexing]] fixes the actual fiber convention.

## Proof
1.1 In the derived category of Nisnevich sheaves with transfers, let $f:\mathbb Z_{\mathrm{tr}}(V\setminus x)\to\mathbb Z_{\mathrm{tr}}(V)$ be the actual map and let $D=\operatorname{cone}(f)$. Resolve the A¹-local coefficient by the derived-Hom model in [F1]. Yoneda evaluation on that resolution makes the two Hom complexes exactly the classical values on $V$ and $V\setminus x$, with the actual restriction between them. Applying Hom to the ordinary cone identifies $R\operatorname{Hom}(D,\mathbb Z(j))$ with the fiber of that arrow. By [F1], this is the already identified EM support fiber. Taking cohomology, A¹-locality of the target identifies these derived Hom groups with the displayed groups in $DM$, by the localization property in [F1]. No unrelated objectwise equivalences have entered this construction. [A1, F1]

2.1 In $DM$, the image of $D$ is a cofiber of $M(V\setminus x)\to M(V)$, the same first arrow as in [F2]. Its Gysin cofiber is therefore compatibly isomorphic to $M(\operatorname{Spec}L)(d)[2d]$; no uniqueness of cone is asserted from the triangulated axioms alone. Substitute this isomorphism in step 1.1. For $j\geq d$, apply [F3] to obtain exactly the stated residue-field group. This proves the Gysin/coefficient route for the actual support fiber, with its full scope checked before use. [A1, F2, F3, step 1.1] ∎
