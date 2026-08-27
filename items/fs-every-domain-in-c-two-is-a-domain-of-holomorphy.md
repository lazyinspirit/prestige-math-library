---
id: fs-every-domain-in-c-two-is-a-domain-of-holomorphy
kind: false-statement
title: "FALSE: every domain in C^2 is a domain of holomorphy"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-hartogs-figure-obstruction-to-domain-of-holomorphy]
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
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

**False claim:** every domain in $\mathbb C^2$ is a domain of holomorphy.

## Facts & Assumptions

**Given:** Real numbers $0<r,s<1$ and the Hartogs figure domain
$\Omega:=H(r,s)$.

[L1] A domain that contains a Hartogs figure but not its hull is not a domain
of holomorphy ([[cor-hartogs-figure-obstruction-to-domain-of-holomorphy]]).

## Refutation

**Proof technique:** direct.

1.1 The domain $\Omega=H(r,s)$ contains the Hartogs figure $H(r,s)$ itself, while its hull is the full bidisc $\widehat H(r,s)$, which strictly contains $\Omega$. [given, algebra]

2.1 Therefore [L1] applies directly and shows that $\Omega$ is not a domain of holomorphy, refuting the claim. [step 1.1, L1] ∎
