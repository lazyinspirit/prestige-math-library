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
