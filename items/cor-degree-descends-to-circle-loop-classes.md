---
id: cor-degree-descends-to-circle-loop-classes
kind: corollary
title: "Degree defines a function $\\operatorname{Deg}:\\pi_1(S^1,[0])\\to\\mathbb Z$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-degree-is-invariant-under-path-homotopy, def-based-loops-and-fundamental-group]
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

Degree defines a function $\operatorname{Deg}:\pi_1(S^1,[0])\to\mathbb Z$ by

$$\operatorname{Deg}([\alpha])=\deg(\alpha).$$

## Facts & Assumptions

**Given:** The based circle loops and path-homotopy classes defining $\pi_1(S^1,[0])$.

[L1] Path-homotopic based circle loops have the same degree ([[thm-degree-is-invariant-under-path-homotopy]]).

[L2] The fundamental group set of $X$ at $x_0$ is the set of endpoint-fixed path-homotopy classes of based loops at $x_0$ ([[def-based-loops-and-fundamental-group]]).

## Proof

**Proof technique:** direct.

1.1 If $[\alpha]=[\beta]$ in the set of [L2], then $\alpha$ and $\beta$ are path-homotopic relative to their endpoints, so [L1] gives $\deg(\alpha)=\deg(\beta)$. [L1, L2]

2.1 Therefore the displayed rule is independent of the representative and defines one function on $\pi_1(S^1,[0])$. No representative-selection function is used. [step 1.1, L2] ∎
