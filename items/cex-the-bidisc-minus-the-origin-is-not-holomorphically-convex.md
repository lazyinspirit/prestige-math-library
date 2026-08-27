---
id: cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex
kind: counterexample
title: "The bidisc minus the origin is not holomorphically convex"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       thm-cartan-thullen-theorem,
       thm-removability-of-a-puncture-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

## Statement refuted

The punctured bidisc

$$\Omega=\{(z_1,z_2)\in\mathbb C^2: |z_1|<1,\ |z_2|<1\}\setminus\{(0,0)\}$$

is holomorphically convex.

## Facts & Assumptions

**Given:** The punctured bidisc $\Omega$.

[L1] A holomorphic function on a punctured several-variable domain extends
across the missing point
([[thm-removability-of-a-puncture-in-several-complex-variables]]).

[L2] A domain of holomorphy admits no common larger overlap extending every
holomorphic function, and for domains in $\mathbb C^m$ that condition is
equivalent to holomorphic convexity
([[def-holomorphic-extension-and-domain-of-holomorphy]],
[[thm-cartan-thullen-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 Every holomorphic function on $\Omega$ extends to the full bidisc by [L1]. Thus the whole bidisc is a common larger domain across the missing origin for every holomorphic function on $\Omega$. [L1, given]

2.1 The extension statement in step 1.1 contradicts the domain-of-holomorphy condition in [L2], so $\Omega$ is not a domain of holomorphy. Applying the equivalence in [L2], $\Omega$ is not holomorphically convex either. This refutes the statement. [L2, step 1.1] ∎
