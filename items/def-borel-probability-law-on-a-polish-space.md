---
id: def-borel-probability-law-on-a-polish-space
kind: definition
title: Borel probability law on a polish space
deps: ["def-polish-space", "def-probability-measure", "def-borel-sigma-algebra"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, §2, p. 3
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: draft
origin: pipeline
---

## Definition

Let S be Polish in the sense of [[def-polish-space]]. A **Borel probability law on S** is a countably additive measure on $\mathcal B(S)$ with total mass one. Here $\mathcal B(S)$ is [[def-borel-sigma-algebra]] and probability measure means [[def-probability-measure]]. A compatible complete metric may be fixed for a construction; it is not additional data in the law. The empty space admits no such law, since its measure must be both zero and one.
