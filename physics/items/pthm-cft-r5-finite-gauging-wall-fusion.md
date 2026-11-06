---
id: pthm-cft-r5-finite-gauging-wall-fusion
kind: physics-theorem
title: Fusion of a normalized finite-group gauging wall with its reverse
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
physical_scope: Conditional finite-state fusion rule for the normalized gauging interface of an anomaly-free finite abelian
  symmetry in a two-dimensional CFT.
deps:
- def-cft-r5-finite-gauging-wall-conventions
- def-fusion-and-multifusion-category
dependency_roles:
  def-cft-r5-finite-gauging-wall-conventions: operational-prerequisite
  def-fusion-and-multifusion-category: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Riccardo Argurio et al., Non-Invertible T-duality at Any Radius via Non-Compact SymTFT, arXiv:2409.11822v1
    url: https://arxiv.org/pdf/2409.11822v1
    locator: §3.1 and §4.2, discrete gauging and rational-radius fusion; the source gives the compact-boson rational fusion up to proportionality and discusses its separate normalization.
  - title: Guillermo Arias-Tamargo et al., Non-Invertible Symmetries and Boundaries for Two-Dimensional Fermions, arXiv:2605.13952v1
    url: https://arxiv.org/pdf/2605.13952v1
    locator: §3.4, equations (3.16)–(3.19), related cyclic self-duality fusion rules for the two-Weyl-fermion theory; this is a model-specific comparison, not the proof of the general finite-wall count below.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases:
- lem-cft-r5-finite-gauging-wall-fusion
---

## Statement

Let a finite abelian group $G$ act on a two-dimensional CFT $C$ by normalized, anomaly-free topological symmetry lines, with action and wall conventions as specified below. Let $W_G:C\to C/G$ be the endpoint-framed gauging interface. Assume the full $\mathbb C$-linear subcategory generated from the $L_g$ by fusion, orientation reversal, and finite direct sums, with topological junctions as morphisms, unit $\mathbf1_C$, and tensor product defect fusion, is a finite semisimple fusion category. Also assume the $L_g$ are pairwise non-isomorphic simple objects. Fuse $W_G$ with its orientation reverse using the framed finite-groupoid-cardinality convention. Then, as a direct sum of topological lines on $C$,
$$W_G\otimes\bar W_G=\bigoplus_{g\in G}L_g.$$
Each $L_g$ occurs once as a simple summand. This is a finite-gauge counting statement under the stated line-sector hypothesis and makes no assertion about continuous groups.

## Statement references

[[def-cft-r5-finite-gauging-wall-conventions]]

[[def-fusion-and-multifusion-category]]

[Argurio et al., §§3.1, 4.2](https://arxiv.org/pdf/2409.11822v1)

[Arias-Tamargo et al., §3.4](https://arxiv.org/pdf/2605.13952v1)

## Facts & Assumptions

**Given:** A finite abelian anomaly-free group $G$, its normalized symmetry lines $L_g$, and the gauging interface $W_G$ with the endpoint convention in the statement.

[F1] [[def-cft-r5-finite-gauging-wall-conventions]]: $G$ acts through normalized lines and coherent multiplication junctions; the sum is untwisted and uses the endpoint-framed flat-bundle weight $1/|\operatorname{Aut}|$, so each relative-holonomy sector with trivial framed automorphism group has weight one.

[F2] [[def-fusion-and-multifusion-category]]: the assumed topological-line category is a finite semisimple fusion category; each $L_g$ is a pairwise distinct simple object, so a finite direct-sum decomposition has a well-defined simple-summand multiplicity.

## Proof

1.1 Let $I=[0,1]$ be the interval transverse to the fused wall. A flat principal $G$-bundle on $I$ with chosen endpoint trivializations has relative parallel transport $g\in G$. Since $G$ is finite and discrete and $I$ is contractible, an endpoint-preserving gauge transformation cannot change this transport; conversely, each $g\in G$ is realized by a framed flat bundle. Thus the isomorphism classes in the framed groupoid are in bijection with $G$. [given, F1, algebra]

2.1 By the oriented-strip convention in [F1], the sector with relative transport $g$ contributes the action line $L_g$ on the $C$ side. Its coefficient is $1/|\operatorname{Aut}|=1$ because its framed automorphism group is trivial. There is exactly one such sector for each $g$ by step 1.1. The assumed finite semisimple line category and pairwise non-isomorphic simplicity in [F2] therefore give one copy of each $L_g$ and no identifications between distinct summands, proving the displayed fusion rule. [given, F1, F2, step 1.1, algebra] ∎

## Remarks

The proof uses only finite flat connections on an interval, where a fixed endpoint framing removes conjugacy ambiguity. It does not justify the analogous manipulation for an $\mathbb R$-valued gauge field or its continuous measure.

