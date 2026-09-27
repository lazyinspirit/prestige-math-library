---
id: rem-every-subexponential-growth-group-has-polynomial-growth
kind: remark
title: "Intermediate growth refutes universal polynomial growth (recorded)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-polynomial-subexponential-exponential-and-intermediate-growth]
justified_by: []
aliases: []
proved_here: false
verification:
  precheck: n/a
  sources_checked:
    date: '2026-09-23'
    scope: "Löh, Theorem 5.2.10 and preceding growth definition, printed pp. 132–133, checked in the owner-delegated U-P review; no Grigorchuk construction was checked. See research/up-1630-review/agent-10-receipts.jsonl."
    by: "agent-10 (owner-delegated bounded source review)"
external_dependency:
  source_url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
  exact_statement: "Theorem 5.2.10, printed p. 133: There exists a finitely generated group of intermediate growth."
  local_proof_attempt: "No construction or growth estimates for a Grigorchuk group are supplied here."
  necessity: "The existence theorem supplies the counterexample; the implication from intermediate to subexponential but nonpolynomial growth is definitional."
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
pipeline_run: null
---

## Recorded counterexample

The claim that every finitely generated group of subexponential growth has
polynomial growth is false. Löh, Theorem 5.2.10 (printed p. 133), records the
existence of a finitely generated group of intermediate growth. By
[[def-polynomial-subexponential-exponential-and-intermediate-growth]], such a
group has subexponential but not polynomial growth. The existence theorem is
external; this item does not construct the group or prove its growth estimates.
