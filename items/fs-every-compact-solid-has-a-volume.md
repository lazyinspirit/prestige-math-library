---
id: fs-every-compact-solid-has-a-volume
kind: false-statement
title: 'FALSE: every compact subset of $\mathbb R^3$ has Jordan volume'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-compact-solid-without-jordan-volume]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

**False claim:** every compact subset of $\mathbb R^3$ is Jordan measurable and therefore has Jordan volume.

## Facts & Assumptions

**Given:** The compact set constructed in the preceding counterexample.

[F1] The claim that every compact subset of $\mathbb R^3$ is Jordan measurable is refuted by an explicit compact product set ([[cex-compact-solid-without-jordan-volume]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1], the set $S\times[0,1]^2$ is compact but not Jordan measurable, so its Jordan volume is not defined. [F1]

2.1 This single compact witness refutes the universal claim. [step 1.1] ∎
