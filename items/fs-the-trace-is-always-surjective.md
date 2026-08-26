---
id: fs-the-trace-is-always-surjective
kind: false-statement
title: "FALSE: the trace map of every finite extension is surjective"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-trace-vanishes-on-a-purely-inseparable-extension]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Conrad, Norm and trace, Theorem 2.5"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Remark 5.47"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

**False claim:** the trace map of every finite field extension is surjective.

## Facts & Assumptions

**Given:** The extension $\mathbb F_p(t)/\mathbb F_p(t^p)$.

[L1] For this purely inseparable extension, the trace map is identically zero ([[ex-trace-vanishes-on-a-purely-inseparable-extension]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the trace map $$\operatorname{Tr}_{\mathbb F_p(t)/\mathbb F_p(t^p)}\colon \mathbb F_p(t)\to \mathbb F_p(t^p)$$ has image $\{0\}$. [L1]

2.1 The codomain is not the zero field, so this map is not surjective. Therefore the displayed claim is false. [step 1.1, algebra] ∎
