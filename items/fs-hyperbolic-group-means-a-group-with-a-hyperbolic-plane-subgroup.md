---
id: fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup
kind: false-statement
title: "FALSE: a hyperbolic group is just a group with a hyperbolic-plane subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hyperbolic-group, prop-finite-and-free-groups-are-hyperbolic]
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
    - title: "Clara Löh, Geometric Group Theory, Section 6.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

**False claim:** every hyperbolic group contains a subgroup isometric to the
hyperbolic plane.

This is the load-bearing direction behind the misleading slogan that
hyperbolicity "means" containing a hyperbolic-plane subgroup.

## Facts & Assumptions

**Given:** A nonabelian finitely generated free group $F_2$.

[L1] Free groups are hyperbolic
([[prop-finite-and-free-groups-are-hyperbolic]]).

[A1] Every finitely generated group is countable, whereas the hyperbolic plane $\mathbb H^2$ is uncountable.

## Refutation

**Proof technique:** direct.

1.1 By [L1], the free group $F_2$ is hyperbolic. [given, L1]

2.1 The group $F_2$ is countable, but [A1] says that $\mathbb H^2$ is uncountable. So $F_2$ cannot contain the hyperbolic plane as a subgroup or even as an underlying set, yet it is hyperbolic by step 1.1. Therefore the claim is false. [A1, step 1.1] ∎
