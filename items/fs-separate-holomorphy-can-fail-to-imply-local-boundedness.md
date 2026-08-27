---
id: fs-separate-holomorphy-can-fail-to-imply-local-boundedness
kind: false-statement
title: "FALSE: separate holomorphy can fail to imply local boundedness"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-local-boundedness-of-separately-holomorphic-functions]
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
    - title: "Paul Garrett, Hartogs' Theorem: separate analyticity implies joint"
      url: "https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf"
pipeline_run: null
---

## Statement

**False claim:** a separately holomorphic function on a finite-dimensional
polydisc need not be locally bounded.

## Facts & Assumptions

**Given:** A separately holomorphic function on a polydisc.

[L1] Separate holomorphy forces boundedness on every smaller closed polydisc
([[lem-local-boundedness-of-separately-holomorphic-functions]]).

## Refutation

**Proof technique:** direct.

1.1 Let $f$ be separately holomorphic on a polydisc. [given]

2.1 The conclusion of [L1] applies directly to $f$, so $f$ is locally bounded. This contradicts the displayed claim. [step 1.1, L1] ∎
