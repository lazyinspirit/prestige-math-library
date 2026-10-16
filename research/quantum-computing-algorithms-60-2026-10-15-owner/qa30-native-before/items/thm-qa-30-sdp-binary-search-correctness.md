---
id: thm-qa-30-sdp-binary-search-correctness
kind: theorem
title: "Binary search converts feasibility to additive SDP optimization"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 27
deps:
  - lem-qa-30-mmw-to-sdp-feasibility
  - def-qa-30-sdp-primal-dual-pair
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: n/a
---

## Statement

Assume a threshold feasibility oracle has a proved invariant that every LOWER response carries a feasible dual vector at the threshold plus its stated slack, every HIGHER response is a sound exclusion certificate, and its total failure/slack is at most $\varepsilon/4$. The claimed binary-search procedure uses $O(\log(R/\varepsilon))$ threshold calls on an initial optimum interval $[-R,R]$ and is intended to return a feasible dual vector with objective at most $\mathrm{OPT}+\varepsilon$.

## Unresolved prerequisites

This item is escalated. The current local MMW-to-feasibility claim is not proved, and the OP8 finite oracle branch can return capped/statistical ORACLE_FAIL without proving threshold infeasibility. Provide a certified three-way oracle outcome (LOWER certificate, sound HIGHER certificate, or undecided/FAIL), allocate the union-bound budget over all calls, and prove that interval contraction and the stored-certificate objective bound survive every slack/refinement branch before this theorem can be proved.
