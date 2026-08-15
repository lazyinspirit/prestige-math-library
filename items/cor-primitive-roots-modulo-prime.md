---
id: cor-primitive-roots-modulo-prime
kind: corollary
title: "Every prime modulus admits a primitive root"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-unit-group-modulo-prime-is-cyclic, prop-primitive-root-iff-unit-group-generator]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.II.1"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "William Stein, Elementary Number Theory, Theorem 2.5.8"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Every prime $p$ admits a primitive root modulo $p$.

## Facts & Assumptions

**Given:** A prime $p$.

[L1] The unit group $(\mathbb Z/p)^\times$ is a finite cyclic group ([[cor-unit-group-modulo-prime-is-cyclic]]).

[L2] A unit is a primitive root exactly when it generates the unit group ([[prop-primitive-root-iff-unit-group-generator]]).

## Proof

**Proof technique:** direct.

1.1 Choose a generator $g$ of the cyclic group in [L1]; such a generator exists also when $p=2$, since the one-element group is cyclic. [L1, choose]

2.1 By [L2], the chosen $g$ is a primitive root modulo $p$. [step 1.1, L2] ∎
