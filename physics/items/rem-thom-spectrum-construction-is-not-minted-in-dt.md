---
id: rem-thom-spectrum-construction-is-not-minted-in-dt
kind: remark
title: "Finite Thom spaces and the spectrum interface"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["lem-stabilizing-a-normal-bundle-suspends-its-thom-space"]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-14.md
      - research/frontier-38-owner-30-dispatch/reader-reader-14.result.json
      - research/frontier-38-owner-30-step5-hash-14-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-14-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Interface

DT uses finite Thom spaces and the suspension identification [[lem-stabilizing-a-normal-bundle-suspends-its-thom-space]] to compare stabilized normal collapse data. Algebraic topology owns the definition of spectra, their structure maps and stable homotopy groups; no Thom spectrum is constructed or assumed here. A stable normal bundle is an equivalence class of finite bundle data, not already a spectrum.
