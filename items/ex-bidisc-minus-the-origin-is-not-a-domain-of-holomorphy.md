---
id: ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy
kind: example
title: "The bidisc minus the origin is not a domain of holomorphy"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       thm-removability-of-a-puncture-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §§1.6, 2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

The punctured bidisc

$$
\Omega=\{(z_1,z_2): |z_1|<1,\ |z_2|<1\}\setminus\{(0,0)\}
$$

is not a domain of holomorphy.

## Facts & Assumptions

**Given:** The punctured bidisc $\Omega$.

[L1] A holomorphic function on a punctured several-variable domain extends
across the missing point
([[thm-removability-of-a-puncture-in-several-complex-variables]]).

[L2] A domain of holomorphy is one for which no single larger overlap works for
every holomorphic function ([[def-holomorphic-extension-and-domain-of-holomorphy]]).

## Verification

**Proof technique:** direct.

1.1 Let $f\in\mathcal O(\Omega)$. By [L1], $f$ extends holomorphically across the missing origin to the full bidisc. So the same larger domain works for every holomorphic function on $\Omega$. [L1]

2.1 The fixed overlap can be taken to be any small bidisc around a point of $\Omega$ and the larger domain is the whole bidisc. By [L2], this shows that $\Omega$ is not a domain of holomorphy. [step 1.1, L2] ∎
