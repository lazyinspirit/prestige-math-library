---
id: ex-a-convex-domain-is-a-domain-of-holomorphy
kind: example
title: "A convex domain is a domain of holomorphy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-convex-domains-are-domains-of-holomorphy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 2.1.7"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Example 12"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Example

The half-space

$$H=\{z\in\mathbb C^m: \operatorname{Re}z_1>0\}$$

is a domain of holomorphy.

## Facts & Assumptions

**Given:** The half-space $H=\{\operatorname{Re}z_1>0\}$.

[L1] Every convex domain is a domain of holomorphy
([[cor-convex-domains-are-domains-of-holomorphy]]).

## Verification

**Proof technique:** direct.

1.1 The half-space $H$ is convex because if $\operatorname{Re}z_1>0$ and $\operatorname{Re}w_1>0$, then $\operatorname{Re}((1-t)z_1+tw_1)>0$ for every $t\in[0,1]$. [given, algebra]

2.1 Applying [L1] to step 1.1 shows that $H$ is a domain of holomorphy. [L1, step 1.1] ∎
