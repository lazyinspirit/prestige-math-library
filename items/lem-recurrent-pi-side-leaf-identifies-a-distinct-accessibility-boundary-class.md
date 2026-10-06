---
id: lem-recurrent-pi-side-leaf-identifies-a-distinct-accessibility-boundary-class
kind: lemma
title: "A recurrent Pi-side leaf identifies a distinct accessibility boundary class"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph, lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches, lem-a-paired-immersed-cap-sweep-excludes-a-positive-closed-transversal, def-foliation-component-by-mutual-positive-transverse-accessibility, lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup, lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 17
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a78, printed pp. 26-28; mutual-accessibility boundary class supplied locally"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a C² cooriented codimension-one foliation of a closed oriented three-manifold $M$. Once the original Π supporting leaf L is compact and has no closed transversal, and one recurrent cap leaf B meets the normal base transversal at positive parameters t_n↓0, L lies in the ambient boundary of one distinct mutual-positive-accessibility class.

## Facts & Assumptions

**Given:** A $C^2$ cooriented codimension-one foliation $F$ of a closed oriented three-manifold $M$, a compact original $\Pi$ supporting leaf $L$ with no closed transversal, and one recurrent cap leaf $B$ meeting the normal base transversal at positive parameters $t_n\downarrow0$.

[F1] Under $\mathrm{AC}_\omega$, for the given $C^2$ cooriented codimension-one foliation of a closed oriented three-manifold, [[lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph]] supplies the compact-leaf collar and the finite-generator nearby-leaf graph lemma, and [[lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal]] supplies a positive closed transversal through every intrinsically noncompact leaf.

[F2] The in-pair item [[lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches]] supplies the recurrent common plaque patch, so the recurrent cap leaf $B$ meets infinitely many positive base parameters $t_n\downarrow0$; the in-pair item [[lem-a-paired-immersed-cap-sweep-excludes-a-positive-closed-transversal]] supplies the exclusion of positive closed transversals for the reduced leaves.

[F3] The foliation component of a leaf is its mutual positive transverse accessibility class, a saturated subset defined through the preorder $\succeq_F$ ([[def-foliation-component-by-mutual-positive-transverse-accessibility]]), and a nonzero $\Pi$ class is a nonidentity element of the limitwise-nullhomotopy subgroup, hence an essential class in the ordinary leaf fundamental group ([[lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup]]).

[F4] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 Let $B$ be the single recurrent leaf in [F2], containing the base transversal points $x_n$ at parameters $t_n>0$ with $t_n\downarrow0$. These points converge in $M$ to $x\in L$. In a sufficiently small transverse collar from [F1] no positive basepoint is on the embedded compact leaf $L$, so $B\ne L$. If $B$ were intrinsically compact, its inclusion would have compact image, closed in the Hausdorff manifold $M$. The limit $x$ would then belong to $B$, forcing $B=L$ because leaves partition $M$, a contradiction. Therefore this recurrent leaf $B$ is intrinsically noncompact. No null-displacement assertion for all other nearby leaves is needed. [F1, F2, given]

2.1 The given ambient foliation and [F4] meet the $C^2$, coorientation, closed-three-manifold and countable-choice hypotheses of the noncompact-leaf transversal clause of [F1]. Since $B$ is intrinsically noncompact by step 1.1, that clause gives a positive closed transversal through $B$, hence a genuine positive return. The specified points $x_n\in B$ tend to $L$ by step 1.1. [F1, F4, given, step 1.1]

3.1 Let $S$ be the mutual-positive-accessibility class of $B$. It is saturated by [F3]. It is open: the closed transversal of step 2.1 gives a strict positive return from $B$ to itself, finite box transport and small endpoint perturbations of its crossing give strict positive paths from $B$ to every leaf through a small neighbourhood of a crossing and back from each such leaf to $B$ by starting and ending the loop on opposite sides of the perturbed crossing, and transporting these open crossing neighbourhoods along any finite leafwise path gives openness at every point of every leaf in $S$, a second leaf in $S$ being handled by concatenating its strict paths to and from $B$ with the same perturbed return; no formal reflexive relation is substituted for a strict positive return. [F3, step 2.1]

4.1 $S$ is disjoint from $L$: if $L$ belonged to $S$, the strict paths $L\to B$ and $B\to L$ between distinct leaves would produce a positive closed transversal meeting $L$ after finite plaque-path endpoint alignment and positive corner smoothing, contradicting the no-transversal hypothesis on $L$. On the other hand the basepoints of the recurrent cap boundaries lie in $B\subseteq S$ and converge to the original basepoint $x\in L$, so $x\in\overline S$. [F3, given, step 3.1]

5.1 The closure of a saturated set is saturated: in a box its leafwise plaque projection preserves membership of nearby saturation, and a finite chain of such boxes along a leaf carries any accumulation at one point to accumulation at every other point. Hence $L\subseteq\overline S$ by the basepoint convergence of step 4.1, and since $S$ is open and disjoint from $L$, we get $L\subseteq\partial_M S$: an actual distinct mutual-accessibility component boundary, using neither an ordinary complement component nor an unsupplied full closure-manifold classification. The construction uses one collar, finitely many crossings and paths, hence only the standing countable choice from [F4]. [F2, F3, F4, step 4.1] ∎
