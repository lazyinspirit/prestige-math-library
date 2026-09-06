---
id: cex-harmonic-on-a-punctured-domain-need-not-extend
kind: counterexample
title: "Harmonic on a punctured domain need not extend"
status: draft
origin: pipeline
deps: [ex-radial-harmonic-functions-away-from-the-origin]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement refuted

A function harmonic on a punctured domain need not extend harmonically across the puncture.

## Counterexample

**Given:** $n\ge2$.

1.1 On $\mathbb R^2\setminus\{0\}$ take $\log|x|$; for $n\ge3$ take $|x|^{2-n}$, both harmonic by [[ex-radial-harmonic-functions-away-from-the-origin]] [given].

2.1 Each is unbounded as $x\to0$, so it has no continuous, hence no harmonic, extension [given]. ∎
