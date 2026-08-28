---
id: cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin
kind: counterexample
title: "$z_1z_2$ is not regular in $z_2$ at the origin"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-regular-holomorphic-germ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 6.2.5"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Statement refuted

**Refuted claim:** the germ $z_1z_2$ is regular in the variable $z_2$ at the
origin.

## Facts & Assumptions

**Given:** The germ $f(z_1,z_2)=z_1z_2$.

[L1] Regularity in $z_2$ requires the slice $z_1=0$ to have a finite exact order of vanishing in the remaining variable ([[def-regular-holomorphic-germ]]).

## Counterexample

**Proof technique:** direct.

1.1 On the slice $z_1=0$ one has $$f(0,z_2)=0$$ for every $z_2$. So the last-variable restriction vanishes identically rather than to a finite exact order. [given]

2.1 Step 1.1 contradicts the requirement in [L1]. Therefore the germ is not regular in $z_2$ at the origin. [step 1.1, L1] ∎
