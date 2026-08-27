---
id: ex-the-bidisc-is-holomorphically-convex
kind: example
title: "The bidisc is holomorphically convex"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-balls-and-polydiscs-in-complex-euclidean-space,
       thm-convex-domains-are-holomorphically-convex]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §1.1 and Exercise 2.1.7"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Example 12"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Example

The bidisc

$$\mathbb D^2=\{(z_1,z_2)\in\mathbb C^2: |z_1|<1,\ |z_2|<1\}$$

is holomorphically convex.

## Facts & Assumptions

**Given:** The bidisc $\mathbb D^2$.

[L1] Polydiscs are convex
([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[L2] Every convex domain is holomorphically convex
([[thm-convex-domains-are-holomorphically-convex]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the bidisc $\mathbb D^2$ is a convex domain in $\mathbb C^2$. [L1, given]

2.1 Applying [L2] to step 1.1 shows that $\mathbb D^2$ is holomorphically convex. [L2, step 1.1] ∎
