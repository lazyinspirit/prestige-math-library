---
id: ex-affine-group-modulo-eight-as-a-holomorph
kind: example
title: ' $\operatorname{Hol}(C_8)$ is the group of affine maps $x\mapsto ax+b$ with $a\in\{1,3,5,7\}$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorph-of-a-group, prop-holomorph-as-a-permutation-group, thm-automorphisms-of-a-finite-cyclic-group, thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter J. Cameron, The Holomorph of a Group"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gn7.pdf"
pipeline_run: null
---

## Example

On the additive group $C_8=\mathbb Z/8$,

$$\operatorname{Hol}(C_8)=\{x\mapsto ax+b:a\in\{1,3,5,7\},\ b\in\mathbb Z/8\}.$$

These are $32$ distinct permutations.

## Facts & Assumptions

**Given:** The additive cyclic group $C_8=\mathbb Z/8$.

[L1] The holomorph is $G\rtimes\operatorname{Aut}(G)$ and acts faithfully by $x\mapsto g\alpha(x)$ ([[def-holomorph-of-a-group]], [[prop-holomorph-as-a-permutation-group]]).

[L2] $\operatorname{Aut}(C_8)\cong(\mathbb Z/8)^\times$, with a unit $a$ acting by multiplication by $a$ ([[thm-automorphisms-of-a-finite-cyclic-group]]).

[L3] The units modulo $8$ are exactly the classes represented by integers coprime to $8$ ([[thm-unit-criterion-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 By [L3], the four units modulo $8$ are $1,3,5,7$. Thus [L1] and [L2] identify every holomorph element with one of the displayed affine maps. [L1, L2, L3]

1.2 If $ax+b=cx+d$ for every $x$, evaluation at $0$ gives $b=d$, and evaluation at $1$ then gives $a=c$. Hence the $8\cdot4=32$ maps are distinct. [algebra]

2.1 Their composition is $(x\mapsto ax+b)\circ(x\mapsto cx+d)=x\mapsto acx+(ad+b)$, which agrees with the holomorph multiplication from [L1]. [L1, algebra] ∎
