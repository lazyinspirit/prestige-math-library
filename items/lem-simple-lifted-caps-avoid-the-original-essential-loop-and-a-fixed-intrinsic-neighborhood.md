---
id: lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood
kind: lemma
title: Simple lifted caps avoid the original essential loop and a fixed intrinsic neighbourhood
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- lem-fixed-transverse-fences-have-a-finite-crossing-word
- lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band
- def-universal-covering-space
- thm-universal-cover-existence
- thm-deck-group-of-a-universal-cover-is-the-fundamental-group
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §8, printed pp. 26-28; deck and compact-separation adapters supplied locally
---

## Statement

Let γ be an essential original loop and γ_t its short fixed-flow null fence boundaries. Every Jordan lifted disk cap of γ_t has projected image disjoint from γ and from one fixed intrinsic neighborhood of γ in its original leaf.

## Facts & Assumptions

**Given:** An essential original loop $\gamma$ in its leaf $L$ and its short fixed-flow null fence boundaries $\gamma_t$, with the Jordan lifted disk caps of the canonical bundle.

[F1] The sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the compact-subspace argument giving torsion-freeness of the oriented surface group when the reduced leaf is noncompact, and the relatively compact intrinsic neighborhoods used below; the sibling-pair item `lem-fixed-transverse-fences-have-a-finite-crossing-word` supplies short fixed-flow separation for a compact set.

[F2] The in-pair item [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]] supplies the canonical based Jordan caps and their projections; leaf disk charts verify local path connectivity and semilocal simple connectivity, and finite plaque chains verify path connectivity. Hence [[thm-universal-cover-existence]] supplies a simply connected cover; [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]] identifies its deck group with the leaf fundamental group. Each covering fiber is closed and discrete, because the base is Hausdorff and evenly covered neighborhoods isolate its points. Its intersection with a compact set is finite: those isolating neighborhoods, together with the complement of the fiber, have a finite subcover.

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 Use the one global positive smooth field $V$ fixed before cap development in [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]], agreeing with the original fence field near its compact trace. Thus the whole compact leaf $A$, when it is compact, and every intrinsic compact set used below lie in $\operatorname{dom}V$. If the reduced original leaf $A$ is compact, shrink its positive fence using compact separation for $K=A$ by [F1], so that its positive boundaries and entire cap leaves are distinct from $A$; every cap then misses the entire $A$, and uniform neighbourhood avoidance is automatic. [F1, given]

2.1 If $A$ is noncompact, its fundamental group is torsion-free by the finite surface adapter of [F1]. Short fixed-flow separation for the compact set $K=\gamma(S^1)$ makes every boundary $\gamma_t$ disjoint from $\gamma$. If a projected disk cap met $\gamma$, its leaf would be the original leaf $L$; lift the crossing to the disk in the universal cover of $L$. The lift of $\gamma$ through that crossing stays inside the disk, because it cannot cross the disk boundary (its projection is disjoint from $\gamma_t$); the next lift of $\gamma$, starting at the endpoint of the first, also stays inside the disk, and inductively the whole orbit under the nonidentity deck element $\alpha$ represented by the essential loop $\gamma$ lies in the compact lifted disk. All these orbit points lie in one covering fiber, whose intersection with the compact lifted disk is finite by F2, so $\alpha$ has finite order, contradicting torsion-freeness of the oriented surface group. Hence the projected cap misses $\gamma$. [F1, F2, step 1.1]

3.1 Choose a relatively compact intrinsic neighbourhood $S$ of $\gamma$ in $L$ and a smaller connected-near-$\gamma$ neighbourhood $S'$ with closure contained in $S$, so that every point of $S'$ can be joined to $\gamma$ by a path in $S$ (finitely many leaf charts suffice). Compact flow separation for $\overline S$, not merely for $\gamma$, ensures every short $\gamma_t$ avoids $S$. If a projected cap on $L$ met $S'$, lift a path in $S$ from that point to $\gamma$ starting inside the lifted disk; it cannot leave the disk, because crossing its boundary would project to an intersection of $\gamma_t$ with $S$, so its endpoint lies inside the disk and projects to $\gamma$, contradicting step 2.1. Thus all these cap images avoid $S'$ uniformly, and caps on other leaves are automatically disjoint from $S'$. This corrects the source's unsupported uniform intrinsic-distance assertion by applying compact separation to an enlarged intrinsic compact neighbourhood; the argument uses finitely many charts and the one fence, hence only the standing countable choice from [F3]. [F1, F3, step 2.1] ∎
