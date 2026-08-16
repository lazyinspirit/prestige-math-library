---
id: thm-fundamental-group-of-the-circle
kind: theorem
title: "$\\operatorname{Deg}:\\pi_1(\\mathbb R/\\mathbb Z,[0])\\to(\\mathbb Z,+)$ is an isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-degree-map-on-the-circle-is-a-homomorphism, thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree, prop-standard-circle-loops-have-their-integer-degrees, def-based-loops-and-fundamental-group, def-group-isomorphism-and-automorphism, thm-int-comm-ring]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1, Theorem 1.7"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

$\operatorname{Deg}:\pi_1(\mathbb R/\mathbb Z,[0])\to(\mathbb Z,+)$ is an isomorphism. Its inverse is

$$n\longmapsto[\omega_n].$$

## Facts & Assumptions

**Given:** The degree function on based loop classes of the quotient circle.

[L1] $\operatorname{Deg}:\pi_1(S^1,[0])\to(\mathbb Z,+)$ is a group homomorphism ([[thm-degree-map-on-the-circle-is-a-homomorphism]]).

[L2] Two based circle loops are path-homotopic if and only if they have equal degree ([[thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree]]).

[L3] $\deg(\omega_n)=n$ for every integer $n$ ([[prop-standard-circle-loops-have-their-integer-degrees]]).

[L4] An isomorphism $f:G\to H$ is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

[L5] The integers form a commutative ring, and hence $(\mathbb Z,+)$ is a group ([[thm-int-comm-ring]]).

[L6] $\pi_1(X,x_0)$ consists of endpoint-fixed path-homotopy classes $[\alpha]$ of based loops ([[def-based-loops-and-fundamental-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\operatorname{Deg}$ is a group homomorphism into the additive group of integers supplied by [L5]. [L1, L5]

1.2 If $\operatorname{Deg}([\alpha])=\operatorname{Deg}([\beta])$, then $\deg(\alpha)=\deg(\beta)$, so [L2] makes $\alpha$ and $\beta$ path-homotopic. Their classes are equal by [L6], and $\operatorname{Deg}$ is injective. [L2, L6]

1.3 Let $n\in\mathbb Z$. By [L3], $\operatorname{Deg}([\omega_n])=\deg(\omega_n)=n$, so every integer is attained and $\operatorname{Deg}$ is surjective. This includes $n=0$, $n=1$, and negative integers. [L3]

2.1 Steps 1.1, 1.2, and 1.3 show that $\operatorname{Deg}$ is a bijective group homomorphism, hence an isomorphism by [L4]. Step 1.3 also shows that $n\mapsto[\omega_n]$ is its inverse, since injectivity makes this preimage unique. [step 1.1, step 1.2, step 1.3, L3, L4] ∎
