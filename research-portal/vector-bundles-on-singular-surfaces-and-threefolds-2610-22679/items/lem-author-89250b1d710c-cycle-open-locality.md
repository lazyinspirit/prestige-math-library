---
id: lem-author-89250b1d710c-cycle-open-locality
kind: lemma
title: Cycle coefficients and face intersections are open local
status: draft
domain: mathematics
deps:
  - math:def-free-abelian-group
dependency_roles:
  math:def-free-abelian-group: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
On a noetherian scheme $Y$, a cycle means a finite integral linear combination of integral closed subschemes with their reduced structures. For an open $V\subset Y$, restrict $[W]$ to $[W\cap V]$ when nonempty and to zero otherwise. Equality of cycles can be tested on any open cover. The condition that each component of an intersection has a specified codimension in the ambient scheme is open local. For $Y=X\times\Delta^n$ with $X$ finite type over a field, a coordinate-face intersection whose coefficient at a component $T$ is $\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))$, whenever these lengths are defined, commutes with restriction to $U\times\Delta^{n-1}$ for every open $U\subset X$.

## Facts & Assumptions

**Given:** The cycles and opens in the Statement, and the indicated finite-length formula when used.

**Goal:** Establish local detection and compatibility with restriction.

[F1] A function on generators extends uniquely to a homomorphism from a free abelian group. [[math:def-free-abelian-group]]

[F2] An isomorphism of local rings carrying a parameter to its counterpart identifies their quotient modules. Its induced equivalence on module categories carries strict submodule chains and simple quotients bijectively, and therefore preserves every finite composition length. This observation does not require the parameter to be a nonzerodivisor.

## Proof

1.1 A nonempty open subset of an integral scheme is integral and contains its generic point. Distinct integral closed subschemes cannot have the same nonempty restriction to $V$, since taking its closure recovers the original reduced closed subscheme. The stated restriction therefore extends by [F1]. [F1, construct]

2.1 If a cycle has a nonzero coefficient at $W$, some member of the cover contains its generic point. The coefficient survives there and does not collide with another generator by step 1.1. Applying this observation to a difference proves local detection of equality. [step 1.1, algebra]

2.2 Components of a closed subset that meet an open restrict to precisely its components there: their generic points survive, and taking closures recovers the originals. At each surviving generic point the original and restricted ambient local rings agree, so the codimension, measured by chains of specializations in that local ring, agrees. Thus the specified codimension condition is local on the ambient scheme. [given, step 1.1]

3.1 A face-intersection component meeting $U\times\Delta^n$ has the same generic point and local ring of $W$ after restriction. The stalk-ring isomorphism identifies the face parameter, so it identifies the quotient modules and their finite composition series by [F2]. Its coefficient is therefore unchanged, even when the parameter vanishes on $W$; components missing the open contribute zero on both sides. Equality follows coefficientwise and extends to signed cycles by linearity. Steps 2.1 through 3.1 prove the assertions. [F2, step 1.1, step 2.2, algebra] ∎
