---
id: cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy
kind: counterexample
title: "C^2 minus a complex line is a domain of holomorphy"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-holomorphic-extension-and-domain-of-holomorphy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** removing a complex line from $\mathbb C^2$ produces a domain
that still cannot be a domain of holomorphy.

## Facts & Assumptions

**Given:** The domain $\Omega=\{(z_1,z_2)\in\mathbb C^2 : z_1\ne0\}$.

[L1] A domain of holomorphy is tested by whether every holomorphic function
extends through one fixed larger overlap ([[def-holomorphic-extension-and-domain-of-holomorphy]]).

## Counterexample

**Proof technique:** direct.

1.1 The function $f(z_1,z_2)=1/z_1$ is holomorphic on $\Omega$. [given, algebra]

2.1 If $f$ extended holomorphically across any point of the missing hyperplane $\{z_1=0\}$, then $z_1f$ would extend holomorphically there as the constant function $1$, forcing $f=1/z_1$ near that point and hence forcing a holomorphic function equal to $1/z_1$ at $z_1=0$, which is impossible. So the missing complex line blocks extension, and $\Omega$ is a domain of holomorphy rather than a Hartogs hole. [step 1.1, L1, algebra] ∎
