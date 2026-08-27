---
id: cor-no-isolated-holomorphic-singularities-in-several-complex-variables
kind: corollary
title: "Holomorphic functions of several variables have no isolated singularities"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-removability-of-a-puncture-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.6"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge2$, let $\Omega\subseteq\mathbb C^m$ be a domain, and let
$a\in\Omega$. A holomorphic function on $\Omega\setminus\{a\}$ cannot have a
genuine isolated singularity at $a$: it always extends holomorphically across
$a$.

## Facts & Assumptions

**Given:** A domain $\Omega\subseteq\mathbb C^m$ with $m\ge2$, a point
$a\in\Omega$, and a holomorphic function on $\Omega\setminus\{a\}$.

[L1] In complex dimension at least two, a holomorphic function on a punctured
domain extends uniquely across the puncture
([[thm-removability-of-a-puncture-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the punctured domain $\Omega\setminus\{a\}$. It produces a holomorphic extension across $a$. [L1]

2.1 So the deleted point cannot support a nonremovable isolated singularity. [step 1.1] ∎
