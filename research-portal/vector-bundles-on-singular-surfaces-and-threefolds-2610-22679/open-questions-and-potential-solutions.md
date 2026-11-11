---
title: Open questions and potential solutions
description: Further questions arising from Vector bundles on singular surfaces
  and threefolds.
status: published
---

## Research direction 01

### Research question

For a geometrically integral normal affine surface $X$ over $\mathbb R$, is the map $E\mapsto(c_1(E),c_2(E),[E(\mathbb R)])$ injective on rank-two algebraic bundles, using motivic Chern classes and continuous real-bundle isomorphism on the possibly singular space $X(\mathbb R)$?

### Why it matters

Theorem A classifies after complexification; smooth real surfaces require real realization as well. This asks whether isolated singularities leave an additional algebraic descent obstruction invisible to both invariants.

### Originality

Read the entire original article, all pp. 1–18. Its explicit questions concern Euler groups, singular threefold rank-two uniqueness, removal of normality and the higher-dimensional geometric method. It does not formulate this real-surface descent/realization question. This establishes novelty relative to that article only.

### Current knowledge

As of 2026-11-11, [Lerbet v3, §3.2](https://arxiv.org/html/2605.22706v3) proves the analogous smooth real surface injectivity statement. That solved case is not called open here. The reviewed primary sources and targeted searches did not establish the singular normal surface statement; its general status remains unverified beyond this bounded review. It is offered as a research candidate, not an asserted new conjecture of the literature.

### Potential solution

**Solution scope:** partial

**Evidence status:** Proved partial result

Conditional on the article’s Theorem A, equal motivic Chern classes force equal complexifications. The remaining injectivity problem reduces to separating algebraic real descent classes by motivic classes and real realization. No injectivity claim for singular X is proved.

### Argument and next steps

Write $X=\operatorname{Spec}A$ and $B=A\otimes_{\mathbb R}\mathbb C$. Base change along the finite etale extension $\mathbb R\subset\mathbb C$ preserves normality; geometric integrality and finite base extension preserve the surface dimension. Pullback preserves motivic Chern classes, so Theorem A identifies $E_B$ with $E^{\prime}_B$. Fix $P=E_B$ and the semilinear involution $\tau$ induced by $E$. Any other real form on $P$ has involution $g\tau$ for $g\in\operatorname{Aut}_B(P)$; it squares to the identity precisely when $g\sigma(g)=1$, where $\sigma(g)=\tau g\tau^{-1}$. Changing the identification by $h$ replaces $g$ by $h g\sigma(h)^{-1}$. Real forms therefore correspond to orbits of these cocycles. [Effective faithfully flat descent](https://stacks.math.columbia.edu/tag/023N), with [finite projectivity descending](https://stacks.math.columbia.edu/tag/058Q), makes them actual algebraic bundles over $A$. Equivalent cocycles give isomorphic bundles, and conversely an algebraic isomorphism induces this change of identification. Thus, conditional on Theorem A, injectivity in the question reduces exactly to injectivity of motivic classes plus real realization on each such orbit set. [Lerbet v3, §3.2](https://arxiv.org/html/2605.22706v3) settles the smooth subcase, using smooth motivic/Chow comparison. For singular $X$, a proposed next step is to compute these orbits after restriction to the smooth locus and then the kernel of extension across the finite singular set.

### Remaining gaps

Only the descent reduction and the cited smooth subcase are established. The automorphism orbit set, its real-realization fibers and the extension kernel at singular points are not computed. Restriction need not preserve all extension data. No singular-case proof or counterexample is claimed, and this report question is not a logical supplier.

### Sources

- Fasel–Yakerson, Vector bundles on singular surfaces and threefolds, arXiv:2610.22679v1: https://arxiv.org/abs/2610.22679v1; All PDF pp. 1–18; 96 original-claim inventory entries; statements and all printed proofs; notation p. 3; bibliography p. 18. Reading limits: Fresh reading of supplied full text and all 18 rendered page images. PDF SHA256 01b5b8c6122e0176d49d4aa2baf80697209ab39d0911a34e147685629840e728; extracted-text SHA256 b8f621d7f4505923dc5943ca9984cbd863ce7593a74350f9bf59aca918fb8c00. The article is the sole defect target. Frozen generated records and 246 matching earlier evidence records in 163 hash-verified files were used as leads, not author evidence. No Step 7 rejudgment or prerequisite audit was performed.
- Samuel Lerbet, On the cohomological classification of vector bundles on smooth real affine surfaces and threefolds, v3: https://arxiv.org/html/2605.22706v3; §1, scope and real-sphere examples; §3.2, theorem immediately after Proposition 3.2, equivalence (i)–(ii) and displayed proof. Reading limits: Freshly read specified v3 passages, after checking the primary arXiv history: revised 21 August 2026. Also consulted v1 §2.2 for discovery, but status uses v3. The smooth surface theorem and its proof reduction were read; the cited Chow–Witt and realization foundations were not reconstructed. This source is not defect-audited. Its smooth hypothesis is retained.
- Samuel Lerbet, primary arXiv version record: https://arxiv.org/abs/2605.22706; Submission history, v3 dated 21 August 2026. Reading limits: Read the primary version record on 2026-11-11 to select v3 for current status. This record alone supplies no theorem or exhaustive literature coverage.
- Stacks Project, Proposition 35.3.9, effective descent for modules: https://stacks.math.columbia.edu/tag/023N; Statement parts (1)–(3); proof through the invariant-module construction. Reading limits: Read statement and displayed proof of effectiveness. Invoked only for the faithfully flat finite extension A→A tensor_R C in the proposed question’s descent reduction, not as an additional logical supplier to portal items.
- Stacks Project, §10.83, descent for finite projective modules: https://stacks.math.columbia.edu/tag/058Q; Lemma 10.83.1; Lemma 10.83.2; Proposition 10.83.3 and proof. Reading limits: Read these statements and displayed arguments to ensure that the descended modules in the question remain finite projective. No broader projectivity/descent audit was performed.

## Review limits

- Only one sufficiently scoped research candidate is supplied. The article’s own unresolved questions are not recycled as new ones.
- Novelty means absence from the complete original article, not a claim of exhaustive priority. The current-status review is bounded to the named primary passages and targeted searches on 2026-11-11; absence of a located solution is not proof that none exists.
- The smooth real case is already solved and is explicitly excluded from the unresolved part. The proposed singular question remains a candidate whose full status should be checked before describing it publicly as an established open problem.
- The partial argument uses Theorem A as an explicit premise together with standard effective descent. It supplies a precise reduction, not a proof of singular injectivity; the cocycle/realization and extension problems remain.
