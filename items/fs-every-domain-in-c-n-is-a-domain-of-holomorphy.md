---
id: fs-every-domain-in-c-n-is-a-domain-of-holomorphy
kind: false-statement
title: "FALSE: every domain in C^n is a domain of holomorphy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex]
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
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §1.6 and §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.3"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Every domain in $\mathbb C^n$ is a domain of holomorphy.

## Facts & Assumptions

**Given:** The punctured bidisc
$$\Omega=\{(z_1,z_2)\in\mathbb C^2: |z_1|<1,\ |z_2|<1\}\setminus\{(0,0)\}.$$

[L1] The punctured bidisc is not holomorphically convex
([[cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex]]).

## Refutation

**Proof technique:** direct.

1.1 The domain $\Omega$ is a domain in $\mathbb C^2$, so it is one instance of the claimed class of domains in $\mathbb C^n$. [given]

2.1 By [L1], this instance fails the expected several-variable convexity/domain-of-holomorphy package. In particular, the statement "every domain in $\mathbb C^n$ is a domain of holomorphy" is already false in dimension $2$. [L1, step 1.1] ∎
