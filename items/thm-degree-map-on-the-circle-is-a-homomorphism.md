---
id: thm-degree-map-on-the-circle-is-a-homomorphism
kind: theorem
title: "$\\operatorname{Deg}:\\pi_1(S^1,[0])\\to(\\mathbb Z,+)$ is a group homomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-degree-descends-to-circle-loop-classes, prop-degree-laws-for-circle-loops, def-based-loops-and-fundamental-group, def-group-homomorphism, thm-int-comm-ring]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

$\operatorname{Deg}:\pi_1(S^1,[0])\to(\mathbb Z,+)$ is a group homomorphism.

## Facts & Assumptions

**Given:** Loop classes $[\alpha],[\beta]\in\pi_1(S^1,[0])$.

[L1] Degree defines a function $\operatorname{Deg}:\pi_1(S^1,[0])\to\mathbb Z$ by $\operatorname{Deg}([\gamma])=\deg(\gamma)$ ([[cor-degree-descends-to-circle-loop-classes]]).

[L2] Degree sends concatenation to addition, reversal to negation, and the constant loop to zero ([[prop-degree-laws-for-circle-loops]]).

[L3] A group homomorphism $f:G\to G'$ is a function satisfying $f(xy)=f(x)f(y)$ for all $x,y\in G$ ([[def-group-homomorphism]]).

[L4] $(\mathbb Z,+,\cdot,0,1)$ is a commutative ring with multiplicative identity, so $(\mathbb Z,+)$ is a group ([[thm-int-comm-ring]]).

[L5] The product of fundamental-group classes is $[\alpha][\beta]=[\alpha*\beta]$ ([[def-based-loops-and-fundamental-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], [L1], and the concatenation law in [L2], $\operatorname{Deg}([\alpha][\beta])=\operatorname{Deg}([\alpha*\beta])=\deg(\alpha*\beta)=\deg(\alpha)+\deg(\beta)=\operatorname{Deg}([\alpha])+\operatorname{Deg}([\beta])$. [L1, L2, L5]

2.1 The target is the additive group of the integers by [L4], and step 1.1 is exactly the product-preservation condition of [L3]. Hence $\operatorname{Deg}$ is a group homomorphism. Its identity and inverse laws also agree with the zero and negation formulas of [L2]. [step 1.1, L2, L3, L4] ∎
